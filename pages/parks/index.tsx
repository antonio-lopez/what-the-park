import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { statesArray } from "@/lib/utils";
import ParksQuery from "@/components/containers/ParksQuery";
import Loading from "@/components/ui/Loading";

const formSchema = z.object({
  stateCode: z.string().min(2).max(50),
  q: z.string(),
});

const Index = () => {
  const [parks, setParks] = useState<any>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stateCode: "",
      q: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const parkFetch = await fetch(
      `https://developer.nps.gov/api/v1/parks?stateCode=${data.stateCode}&q=${data.q}&api_key=${process.env.NEXT_PUBLIC_NPS_API}`,
    );
    const parksData = await parkFetch.json();
    setParks(parksData.data);
  };

  return (
    <>
      <header className="relative h-[43.75rem] w-full">
        <Image
          src="https://res.cloudinary.com/dloisor1x/image/upload/v1700969386/what-the-park/jason-thompson-dS3UnDX6InQ-unsplash_l4eckd.webp"
          alt="park mountains"
          fill={true}
          className="object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-foreground/30"></div>
        <Navbar />
        <div className="absolute mt-[3.75rem] flex w-full flex-col items-center space-y-3 pt-20 lg:pt-32">
          <div className="layout">
            <h1 className="mb-10 text-center lg:mb-20">Parks</h1>
            <div className="mx-auto flex h-[10.75rem] w-full items-center justify-center bg-secondary md:w-4/5 lg:h-28">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex w-full flex-col items-center justify-center space-y-3 px-5 lg:flex-row lg:space-x-3 lg:space-y-0"
                >
                  <FormField
                    control={form.control}
                    name="stateCode"
                    render={({ field }) => (
                      <FormItem className="w-full lg:w-80">
                        <div className="w-full lg:w-80">
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select a state" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {statesArray.map((state) => (
                                <SelectItem
                                  key={state.stateCode}
                                  value={state.stateCode}
                                >
                                  {state.state}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </FormItem>
                    )}
                  />
                  <div className="flex w-full space-x-3 lg:w-fit ">
                    <FormField
                      control={form.control}
                      name="q"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <div className="w-full lg:w-[31.25rem]">
                            <FormControl>
                              <Input placeholder="Search..." {...field} />
                            </FormControl>
                          </div>
                        </FormItem>
                      )}
                    />
                    <Button
                      disabled={form.formState.isSubmitting}
                      type="submit"
                      size={"sm"}
                    >
                      Search
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </header>

      {form.formState.isSubmitting ? <Loading /> : <ParksQuery parks={parks} />}
    </>
  );
};

export default Index;
