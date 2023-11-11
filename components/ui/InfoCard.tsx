import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface IconProps {
  icon: JSX.Element;
  title: string;
  text: string;
}

const InfoCard = ({ icon, title, text }: IconProps) => {
  return (
    <Card className="h-[20.625rem] w-[22.3125rem] bg-backgroundSecondary lg:h-[25rem] lg:w-[28.125rem]">
      <CardHeader>
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{text}</p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
