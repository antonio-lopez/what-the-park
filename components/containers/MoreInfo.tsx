import Container from "../Container";
import { Heading } from "../ui/Heading";
import { Activities, Topics, EntranceFees } from "@/lib/interface";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface MoreInfoProps {
  activities: Activities[];
  topics: Topics[];
  entranceFees?: EntranceFees[];
}

const MoreInfo = ({ activities, topics, entranceFees }: MoreInfoProps) => {
  const activitiesList = activities.map((activity) => activity.name + ", ");
  const topicsList = topics.map((topic) => topic.name + ", ");

  return (
    <section className="bg-backgroundSecondary py-20">
      <Container>
        <div className="flex flex-col space-y-20">
          <div className="flex flex-col items-center">
            <Heading className="mb-5">Activities</Heading>
            <p className="max-w-prose text-center">{activitiesList}</p>
          </div>
          <div className="flex flex-col items-center">
            <Heading className="mb-5">Topics</Heading>
            <p className="max-w-prose text-center">{topicsList}</p>
          </div>
          <div>
            <Heading className="mb-5">Entrance Fees</Heading>
            {entranceFees?.length ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {entranceFees?.map((fees) => (
                    <TableRow key={fees.title}>
                      <TableCell>{fees.title}</TableCell>
                      <TableCell>${fees.cost}</TableCell>
                      <TableCell>
                        <p className="whitespace-nowrap md:whitespace-normal">
                          {fees.description}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-center">
                There is no fee associated with visiting this park.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MoreInfo;
