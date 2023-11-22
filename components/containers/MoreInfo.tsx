import Container from "../Container";
import { Heading } from "../ui/Heading";
import { Activities, Topics } from "@/lib/interface";

interface MoreInfoProps {
  activities: Activities[];
  topics: Topics[];
}

const MoreInfo = ({ activities, topics }: MoreInfoProps) => {
  //   console.log(activities);
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
          <Heading>Entrance Fees</Heading>
        </div>
      </Container>
    </section>
  );
};

export default MoreInfo;
