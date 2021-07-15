import React from "react";

import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";

function ProfileSidebar({ gitHubUser }) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${gitHubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${gitHubUser}`}>
          @{gitHubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function ProfileRelationsBox({ title, items }) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {title} ({items.length})
      </h2>
      <ul>
        {/* {followers.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default function Home() {
  const gitHubUser = "ThiagoBrito-Dev";

  const [communities, setCommunities] = React.useState([
    {
      id: "143652104730452",
      title: "Eu odeio acordar cedo",
      image: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
    },
  ]);

  const favoritePeople = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "marcobrunodev",
    "felipefialho",
  ];

  const [followers, setFollowers] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.github.com/users/peas/followers")
      .then(function (serverResponse) {
        return serverResponse.json();
      })
      .then(function (completeResponse) {
        setFollowers(completeResponse);
      });
  }, []);

  return (
    <>
      <AlurakutMenu gitHubUser={gitHubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={gitHubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCriaComunidade(event) {
                event.preventDefault();
                const formData = new FormData(event.target);

                const community = {
                  id: new Date().toISOString(),
                  title: formData.get("title"),
                  image: formData.get("image"),
                };
                const updatedCommunities = [...communities, community];
                setCommunities(updatedCommunities);
              }}
            >
              <div>
                <input
                  type="text"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  placeholder="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBox title="Seguidores" items={followers} />
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({communities.length})</h2>
            <ul>
              {communities.map((community) => {
                return (
                  <li key={community.id}>
                    <a href={`/users/${community.title}`}>
                      <img src={community.image} />
                      <span>{community.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoritePeople.length})
            </h2>

            <ul>
              {favoritePeople.map((favPerson) => {
                return (
                  <li key={favPerson}>
                    <a href={`/users/${favPerson}`}>
                      <img src={`https://github.com/${favPerson}.png`} />
                      <span>{favPerson}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
