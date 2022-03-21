import questionData from "./Config/data";
import Question from "./components/Question";
import {bgDesk,illuDeskBox,illuWomanDesk,bgMob,illuWomanMob,arrow} from "./img/img"

function App() {

  return (
    <>
          <main className="font-primary bg-white w-80 flex justify-center items-center flex-col rounded-xl relative xl:justify-around xl:items-center xl:flex-row xl:w-[800px]">
              <header className="wrapper flex flex-col items-center justify-center relative xl:w-[50%] border border-black">
              <img src={illuWomanMob} alt="" className="relative bottom-28 w-60 xl:w-[100%] xl:z-10 xl:bottom-0 xl:right-20"/>
              <img src={bgMob} alt="" className="absolute bottom-20 xl:bottom-0" />
              </header>

            

              <section className="flex justify-center items-center flex-col mb-12 border relat border-black">
                <h1 className="font-bold text-3xl relative bottom-[2rem]  ">FAQ</h1>
                  {questionData.map(e =>{
                      return(
                        <Question
                            key = {e.id}
                            {...e}
                            arrow = {arrow}
                        />
                      )
                  })}
              </section>
                
              
            </main>
    </>
  );
}

export default App;


