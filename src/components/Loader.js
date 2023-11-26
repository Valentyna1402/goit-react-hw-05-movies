import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={100}
      width={100}
      strokeWidth={5}
      strokeWidthSecondary={1}
      color="rgba(148, 136, 255, 0.815)"
      secondaryColor="white"
    />
  );
}
