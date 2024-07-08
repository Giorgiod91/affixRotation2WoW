"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TimeUntilNewAffixes from "@/components/TimeUntilNewAffixes";

interface Affix {
  id: number;
  name: string;
  description: string;
  icon: string;
}
interface TitleCutoffs {
  quantileMinValue: number;
}

interface Title {
  cutoffs: {
    p999: {
      all: TitleCutoffs;
    };
  };
}

export default function Home() {
  const [affixes, setAffixes] = useState<Affix[] | null>(null);
  const [error, setError] = useState(null);
  const [titleEu, setTitleEu] = useState<Title | null>(null);
  const [titleNa, setTitleNa] = useState<Title | null>(null);
  const [showFullText, setShowFullText] = useState(false);

  const fortified = "/Fortified.png";
  const tyrannical = "/achievement_boss_archaedas.jpg";
  const sanguine = "/spell_shadow_bloodboil.jpg";
  const raging = "/ability_warrior_focusedrage.webp";
  const bolstering = "/ability_warrior_battleshout.webp";
  const afflicted = "/Spell_misc_emotionsad.webp";
  const incorporeal = "/achievement_boss_anomalus.jpg";
  const bursting = "/ability_ironmaidens_whirlofblood.jpg";
  const entangling = "/inv_misc_root_01.jpg";
  const volcanic = "/spell_shaman_lavasurge.jpg";
  const storming = "/Spell_nature_cyclone.webp";
  const spitefull = "/Spell_holy_prayerofshadowprotection.webp";

  // fetching affixes
  const fetchAffixes = async () => {
    try {
      const res = await fetch(
        "https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en"
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setAffixes(data.affix_details);
    } catch (error) {
      console.log(error);
    }
  };

  // function to check if affixes.icon === any of my const variables i defined above

  const checkAffixIcon = (affix: Affix) => {
    if (affix.icon === "achievement_boss_archaedas") {
      return tyrannical;
    } else if (affix.icon === "ability_toughness") {
      return fortified;
    } else if (affix.icon === "spell_shadow_bloodboil") {
      return sanguine;
    } else if (affix.icon === "ability_warrior_focusedrage") {
      return raging;
    } else if (affix.icon === "ability_warrior_battleshout") {
      return bolstering;
    } else if (affix.icon === "spell_misc_emotionsad") {
      return afflicted;
    } else if (affix.icon === "achievement_boss_anomalus") {
      return incorporeal;
    } else if (affix.icon === "ability_ironmaidens_whirlofblood") {
      return bursting;
    } else if (affix.icon === "inv_misc_root_01") {
      return entangling;
    } else if (affix.icon === "spell_shaman_lavasurge") {
      return volcanic;
    } else if (affix.icon === "spell_nature_cyclone") {
      return storming;
    } else if (affix.icon === "spell_holy_prayerofshadowprotection") {
      return spitefull;
    }
  };

  useEffect(() => {
    fetchAffixes();
  }, []);

  // fetching title eu
  const fetchTitleEu = async () => {
    const res = await fetch(
      "https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-4&region=eu"
    );
    const data = await res.json();
    setTitleEu(data);
  };
  // fetching title na
  const fetchTitleNa = async () => {
    const res = await fetch(
      "https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-4&region=us"
    );
    const data = await res.json();
    setTitleNa(data);
  };
  // executing the fetches in the useEffect to avoid infinite loop

  useEffect(() => {
    fetchTitleEu();
    fetchTitleNa();
  }, []);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  // function to open youtube channel in another tab when clicking on the youtube icon better user experience
  const handleOpenYoutube = () => {
    window.open("https://www.youtube.com/channel/UCdzCVP7G6CzbYWpxMWcMesA");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <head>
        <meta
          name="google-site-verification"
          content="Nl3-f-JXAph0HjcfhrV2tYNNJhCbcVEj-wmg7PCocEo"
        />
      </head>
      <h1 className="text-4xl md:text-5xl tracking-tight font-black leading-tight md:leading-tight lg:text-6xl lg:leading-tight">
        Weekly Affix Rotation
      </h1>
      <div className="flex space-x-5 md:flex-row space-y-2 items-center flex-col">
        {affixes && affixes.length > 0 && (
          <div className="card w-96 hover:bg-primary hover:translate-x-2 duration-200 glass  mt-2 p-5">
            <figure>
              <img
                src={checkAffixIcon(affixes[0])}
                alt={affixes[2].name}
                className="rounded-lg object-contain w-full h-60"
              />
            </figure>
            <div className="card-body" style={{ height: "170px" }}>
              <h2 className="card-title justify-center">{affixes[0].name}</h2>
              <p>{affixes[0].description}</p>
            </div>
          </div>
        )}
        {affixes && affixes.length > 1 && (
          <div className="card w-96 glass p-5 hover:bg-primary hover:translate-x-2 duration-200">
            <figure>
              <img
                src={checkAffixIcon(affixes[1])}
                alt={affixes[2].name}
                className="rounded-lg object-contain w-full h-60"
              />
            </figure>
            <div className="card-body" style={{ height: "170px" }}>
              <h2 className="card-title justify-center">{affixes[1].name}</h2>
              <p>{affixes[1].description}</p>
            </div>
          </div>
        )}
        {affixes && affixes.length > 2 && (
          <div className="card w-96 glass p-5 hover:bg-primary hover:translate-x-2 duration-200">
            <figure>
              <img
                src={checkAffixIcon(affixes[2])}
                alt={affixes[2].name}
                className="rounded-lg object-contain w-full h-60"
              />
            </figure>
            <div className="card-body  " style={{ height: "170px" }}>
              <h2 className="card-title justify-center">{affixes[2].name}</h2>
              <p>{affixes[2].description}</p>
            </div>
          </div>
        )}
      </div>
      <div className=" flex space-x-20">
        {titleEu && titleEu.cutoffs && (
          <div
            className="tooltip  "
            data-tip={titleEu.cutoffs.p999.all.quantileMinValue}
          >
            <button className="btn">title EU</button>
          </div>
        )}
        {titleNa && titleNa.cutoffs && (
          <div
            className="tooltip"
            data-tip={titleNa.cutoffs.p999.all.quantileMinValue}
          >
            <button className="btn">title US</button>
          </div>
        )}
      </div>
      <div></div>
      <footer className="footer p-10 bg-neutral justify-between text-neutral-content">
        <div>
          <h1 className="p-4">Made by HolyMoly</h1>
        </div>
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          ></svg>
          <p></p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="cursor-pointer" onClick={handleOpenYoutube}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a></a>
          </div>
        </nav>
      </footer>
    </main>
  );
}
