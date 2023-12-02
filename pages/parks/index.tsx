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

const statesArray = [
  { stateCode: "AL", state: "Alabama" },
  { stateCode: "AK", state: "Alaska" },
  { stateCode: "AZ", state: "Arizona" },
  { stateCode: "AR", state: "Arkansas" },
  { stateCode: "CA", state: "California" },
  { stateCode: "CO", state: "Colorado" },
  { stateCode: "CT", state: "Connecticut" },
  { stateCode: "DE", state: "Delaware" },
  { stateCode: "FL", state: "Florida" },
  { stateCode: "GA", state: "Georgia" },
  { stateCode: "HI", state: "Hawaii" },
  { stateCode: "ID", state: "Idaho" },
  { stateCode: "IL", state: "Illinois" },
  { stateCode: "IN", state: "Indiana" },
  { stateCode: "IA", state: "Iowa" },
  { stateCode: "KS", state: "Kansas" },
  { stateCode: "KY", state: "Kentucky" },
  { stateCode: "LA", state: "Louisiana" },
  { stateCode: "ME", state: "Maine" },
  { stateCode: "MD", state: "Maryland" },
  { stateCode: "MA", state: "Massachusetts" },
  { stateCode: "MI", state: "Michigan" },
  { stateCode: "MN", state: "Minnesota" },
  { stateCode: "MS", state: "Mississippi" },
  { stateCode: "MO", state: "Missouri" },
  { stateCode: "MT", state: "Montana" },
  { stateCode: "NE", state: "Nebraska" },
  { stateCode: "NV", state: "Nevada" },
  { stateCode: "NH", state: "New Hampshire" },
  { stateCode: "NJ", state: "New Jersey" },
  { stateCode: "NM", state: "New Mexico" },
  { stateCode: "NY", state: "New York" },
  { stateCode: "NC", state: "North Carolina" },
  { stateCode: "ND", state: "North Dakota" },
  { stateCode: "OH", state: "Ohio" },
  { stateCode: "OK", state: "Oklahoma" },
  { stateCode: "OR", state: "Oregon" },
  { stateCode: "PA", state: "Pennsylvania" },
  { stateCode: "RI", state: "Rhode Island" },
  { stateCode: "SC", state: "South Carolina" },
  { stateCode: "SD", state: "South Dakota" },
  { stateCode: "TN", state: "Tennessee" },
  { stateCode: "TX", state: "Texas" },
  { stateCode: "UT", state: "Utah" },
  { stateCode: "VT", state: "Vermont" },
  { stateCode: "VA", state: "Virginia" },
  { stateCode: "WA", state: "Washington" },
  { stateCode: "WV", state: "West Virginia" },
  { stateCode: "WI", state: "Wisconsin" },
  { stateCode: "WY", state: "Wyoming" },
];

const formSchema = z.object({
  stateCode: z.string().min(2).max(50),
  q: z.string(),
});

const Index = () => {
  const [parks, setParks] = useState<any>({});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stateCode: "",
      q: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // console.log(data.stateCode);
    const parkFetch = await fetch(
      `https://developer.nps.gov/api/v1/parks?stateCode=${data.stateCode}&q=${data.q}&api_key=${process.env.NEXT_PUBLIC_NPS_API}`,
    );
    console.log(parkFetch);
    const parksData = await parkFetch.json();
    setParks(parksData);
    console.log(parksData);
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
            <div className="mx-auto h-28 w-full bg-red-400 md:w-4/5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="stateCode"
                    render={({ field }) => (
                      <FormItem>
                        <div className="w-80">
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger>
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
                  <FormField
                    control={form.control}
                    name="q"
                    render={({ field }) => (
                      <FormItem>
                        <div className="w-80">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button disabled={form.formState.isSubmitting} type="submit">
                    Search
                  </Button>
                </form>
              </Form>
              {form.formState.isLoading ? <h1>yo</h1> : JSON.stringify(parks)}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;
