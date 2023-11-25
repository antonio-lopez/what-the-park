interface IconProps {
  icon: JSX.Element;
  phoneNumber?: string;
  emailAddress?: string;
  city?: string;
  stateCode?: string;
}

const EmailCard = ({ icon, emailAddress }: IconProps) => {
  return (
    <div className="flex h-[6.875rem] justify-center bg-primaryDark px-3 text-white">
      <div className="flex w-full items-center justify-center space-x-3 overflow-auto">
        <div>{icon}</div>
        <p className="text-lg font-semibold">{emailAddress}</p>
      </div>
    </div>
  );
};

const PhoneCard = ({ icon, phoneNumber }: IconProps) => {
  return (
    <div className="flex h-[6.875rem] justify-center bg-primaryDark px-3 text-white">
      <div className="flex w-full items-center justify-center space-x-3">
        <div>{icon}</div>
        <p className="text-lg font-semibold">{phoneNumber}</p>
      </div>
    </div>
  );
};
const LocationCard = ({ icon, city, stateCode }: IconProps) => {
  return (
    <div className="flex h-[6.875rem] justify-center bg-primaryDark px-3 text-white">
      <div className="flex w-full items-center justify-center space-x-3">
        <div>{icon}</div>
        <p className="text-base font-semibold md:text-lg">
          {city}, {stateCode}
        </p>
      </div>
    </div>
  );
};

export { EmailCard, PhoneCard, LocationCard };
