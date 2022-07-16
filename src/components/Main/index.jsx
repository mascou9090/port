import { AboutMe } from "./AboutMe";
import { Profile } from "./Profile";
import { MainS } from "./style";
import { Tecs } from "./Tecs";

export const Main = () => {
  return (
    <>
      <MainS>
        <Profile />
      </MainS>
      <AboutMe />
      <div>
        <Tecs />
      </div>
    </>
  );
};
