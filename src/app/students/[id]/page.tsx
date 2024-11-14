"use client";
import { useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles.css';
import StudentCardFull from '@/components/card/student/student-card-large';

export default function Home() {
  const tabListRef = useRef<HTMLUListElement>(null);

  const handleSelect = (index: number) => {
    if (tabListRef.current) {
      const tabList = tabListRef.current;
      const selectedTab = tabList.children[index] as HTMLElement;
      tabList.scrollTo({
        left: selectedTab.offsetLeft-20,
        top: 0,
        behavior: 'auto',
      });
    }
  };

  return (
    <div className="max-w-full w-screen">
      <h3 className='pt-10'>Mathematics</h3>
      <Tabs onSelect={handleSelect}>
        <TabList id='asdf' ref={tabListRef} className="flex flex-nowrap overflow-x-auto whitespace-nowrap p-4 hide-scrollbar">
          <Tab>Home</Tab>
          <Tab>Courses</Tab>
          <Tab>ECA</Tab>
          <Tab>Schedule</Tab>
          <Tab>Performance</Tab>
        </TabList>
        
        <TabPanel>
          <StudentCardFull registrationId={''} name={'Smitten Monkey'} gradeClass={0} dateOfBirth={''} email={''} />
        </TabPanel>
        <TabPanel>
          <p>
            <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
            Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
            released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
            as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
            appears in many games throughout the Mario franchise, often as a sidekick to his brother.
          </p>
          <p>
            Source:{' '}
            <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
            is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
            Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
            attack by Bowser. She often plays the damsel in distress role within the series and
            is the lead female. She is often portrayed as Mario's love interest and has appeared
            in Super Princess Peach, where she is the main playable character.
          </p>
          <p>
            Source:{' '}
            <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
            romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
            video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
            Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
            in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
            and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
            Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
            game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
            characterized by their variety of colors.
          </p>
          <p>
            Source:{' '}
            <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a fictional character who primarily
            appears in Nintendo's Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
            he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
            attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
            who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
            takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
            Super Mario 3D World, and Captain Toad: Treasure Tracker.
          </p>
          <p>
            Source:{' '}
            <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}