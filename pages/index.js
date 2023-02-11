
import { useEffect } from "react";
import styled from "styled-components";
import { useImmer } from "use-immer";
import Avatar from "../components/Avatar";
import Biography from "../components/Biography";
import Name from "../components/Name";
import Popularity from "../components/Popularity";

const HeaderImageStyled = styled.div`
  min-height: 40vh;
  /* min-height: 50rem; */
  background: url('../Godfather_header.jpg') no-repeat 0 10%/cover;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 5rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2rem 5rem 0rem #000;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const ContentStyled = styled.div`
  background-color: #4a4848;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ListStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 35rem;
  min-height: 100vh;

  .logo {
    background: url('../the-godfather.svg') no-repeat center/contain;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;
    padding-top: 50%;
    margin-top: 5rem;
  }

  .list {
    position: absolute;
    left: 50%;
    top: 50%;
    color: white;
    transform: translateX(-50%);
    width: 100%;
  }
`;

const InfoStyled = styled.div`
  display: flex;
  position: absolute;
  top: -4rem;
  right: 0;
  left: 40rem;
  max-width: 100%;

  .info {
    margin: 0 3rem;
    & .name {
      display: block;
      color: #fff;
      margin-bottom: 2rem;
      font-size: ${props => props?.fontSize}
    } 
  }
`;

export default function Home() {
  const [employees, setEmployees] = useImmer(() => [
		{
		name: "Vito Corleone",
		popularity: 5,
		biography: "Vito Andolini's story starts in Corleone, Sicily. In 1901, the local mafia chieftain, Don Ciccio, murders Vito's father Antonio when he refuses to pay him tribute. Paolo, Vito's older brother, swears revenge, but Ciccio's men kill him too. Ciccio then sends his men to fetch nine-year old Vito. However, Vito's mother insists on going as well and begs Ciccio to spare Vito. Ciccio refuses, reasoning the boy will seek revenge as a grown man. Upon Ciccio's refusal, Vito's mother holds a knife to Ciccio's throat, allowing her son to escape while Ciccio's men kill her. Family friends smuggle Vito out of Sicily, putting him on a ship with immigrants traveling to America. Ellis Island immigration officials rename him Vito Corleone, using his village for his surname. He later uses Andolini as his middle name in acknowledgement of his family heritage.",
		image: "Vito_Corleone.jpg",
		colleagues: ["Carlo Rizzi", "Luci Mancini"],
    size: 0,
    fontSize: '1.6rem',
		},
		{
		name: "Carmelia Corleone",
		popularity: 2,
		biography: "Carmela was born in Sicily Italy in 1897, and emigrated to the United States shortly after the turn of the century. She married Vito Corleone in 1914; they were married for just over 40 years until Vito's death in 1955. They had four children – Sonny, Fredo, Michael and Connie. They also took in Sonny's friend Tom Hagen, who later served as the family consigliere. In the novel, Carmela Corleone is portrayed as a traditional Italian immigrant woman who speaks in very broken English. In the movies, however, she speaks fluent English as an adult, with a marked New York accent. In the novel, she develops a close relationship with Michael's girlfriend and future wife, Kay. She is given more expansive dialogue in The Godfather Part II, notably when she confronts her daughter Connie about her behavior early in the film, and when she discusses family life with Michael, who fears that his role as Don of the Corleone criminal empire will cost him his family. Carmela Corleone dies toward the end of the sequel.",
		image: "Carmelia_Corleone.jpg",
		colleagues: [],
    size: 0,
    fontSize: '1.2rem',
		},
		{
		name: "Carlo Rizzi",
		popularity: 5,
		biography: "A half northern Italian, half Sicilian native of Nevada and former labourer, Rizzi migrated to New York City following trouble with the law and became a friend of Sonny Corleone, through whom he met Sonny's sister Connie in 1941 at a surprise birthday party for Sonny's father Vito. They were married on the last Saturday of August 1945 in a traditional Italian wedding at the Corleone mall, a compromise made in order to appease Vito, who was disappointed with his daughter's choice in a husband.",
		image: "Carlo_Rizzi.jpg",
		colleagues: ["Vito Corleone", "Carmelia Corleone"],
    size: 0,
    fontSize: '1.6rem',
		},
		{
		name: "Luci Mancini",
		popularity: 5,
		biography: "In the novel, Lucy is a fairly important supporting character, with several chapters dedicated to her story. After Sonny's death, Vito's consigliere, Tom Hagen sends Lucy to Las Vegas. She is given a small interest (five and later ten) in one of the family's hotels, primarily so that she can keep an eye on Vito's middle son, Fredo, who is learning the hotel and casino business. She also serves as a shareholder-of-record who has no criminal record: several such owners are necessary for a valid gaming license. On paper she is a millionaire, although she does not vote her shares in the casinos.",
		image: "Luci_Mancini.jpg",
		colleagues: ["Carmelia Corleone"],
    size: 0,
    fontSize: '1.6rem',
		}
	]);
  const [employee, setEmployee] = useImmer(() => ({
    name: employees?.[0]?.name,
    popularity: employees?.[0].popularity,
    biography: employees?.[0]?.biography,
    image: employees?.[0]?.image,
    colleagues: employees?.[0]?.colleagues,
    size: employees?.[0]?.size,
    fontSize: employees?.[0]?.fontSize,
  }));

  function onChooseEmployee(item) {
    setEmployee(item);
  }

  function onChangeFontSize(obj) {
    setEmployees(draft => {
      const index = draft.findIndex(item => item?.name.toLowerCase() === obj?.name.toLowerCase());
      if (index !== -1) {
        draft[index].size = +obj?.size;
        if (+obj?.size < 20) {
          if (draft[index].popularity === 5) draft[index].fontSize = '1.6rem';
          if (draft[index].popularity === 2) draft[index].fontSize = '1.2rem';
        }
        if (+obj?.size < 40) {
          if (draft[index].popularity === 5) draft[index].fontSize = '3.2rem';
          if (draft[index].popularity === 2) draft[index].fontSize = '2.4rem';
        }
        if (+obj?.size < 60) {
          if (draft[index].popularity === 5) draft[index].fontSize = '4.8rem';
          if (draft[index].popularity === 2) draft[index].fontSize = '3.6rem';
        }
        if (+obj?.size < 80) {
          if (draft[index].popularity === 5) draft[index].fontSize = '6.4rem';
          if (draft[index].popularity === 2) draft[index].fontSize = '4.8rem';
        }
        if (+obj?.size > 79) {
          if (draft[index].popularity === 5) draft[index].fontSize = '8rem';
          if (draft[index].popularity === 2) draft[index].fontSize = '6rem';
        }
      }
    });
  }

  const findEmployee = (item, employee) => item?.name.toLowerCase() === employee?.name.toLowerCase();

  useEffect(() => {
    const temp = employees.filter(item => findEmployee(item, employee));
    if (temp?.length) setEmployee(draft => {
      draft.size = temp?.[0]?.size;
      draft.fontSize = temp?.[0]?.fontSize;
    });
  }, [employees]);
  

  return (
    <div>
      <HeaderImageStyled/>
      <ContentStyled>
        <ListStyled>
          <div className="logo"/>
          <div className="list">
            {employees.map((item, index) =>
            <Name
              key={index}
              name={item?.name}
              active={findEmployee(item, employee)}
              choose={employee?.colleagues.includes(item?.name)}
              fontSize={item?.fontSize}
              onChooseEmployee={() => onChooseEmployee(item)}
            />)}
          </div>
        </ListStyled>
        <InfoStyled fontSize={employee?.fontSize}>
          <Avatar url={`../${employee?.image}`} size="12rem"/>
          <div className="info">
            <span className="name">{employee?.name}</span>
            <Popularity
              name={employee?.name}
              size={employees.filter(item => findEmployee(item, employee))?.[0]?.size}
              onChangeFontSize={onChangeFontSize}
            />
            <Biography biography={employee?.biography}/>
          </div>
        </InfoStyled>
      </ContentStyled>
      
    </div>
  )
}
