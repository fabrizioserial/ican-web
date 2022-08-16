;import { HomeSideImage } from "../../Utils/SvgImages";
import { DateSectionStyled, HomeDashboardSection, HomeDateSection, HomeWrapper } from "./StyledHomeScreen";
import OncoHomeH1 from "../../Common/Components/OncoHomeH1";
import OncoButton from "../../Common/Components/OncoButton/OncoButton";

function HomeScreen() {
    const DateSection = () => {
        const date = new Date(Date.now());
        const daysNames = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
        const monthNames = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
        let dayNumber = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

        return <DateSectionStyled>
            <span>{dayNumber}</span>
            <span>{daysNames[date.getDay()]}</span>
            <span>{monthNames[date.getMonth()]}</span>
        </DateSectionStyled>;
    }

    return <HomeWrapper>
        <HomeDateSection>
            <HomeSideImage />
            <DateSection />
        </HomeDateSection>
        <HomeDashboardSection>
            <OncoHomeH1 width="80%" userName="Ricardo" />
            <div>
                <OncoButton text="REGISTRAR NUEVO PACIENTE" />
                <OncoButton text="VER TODOS LOS PACIENTES" />
                <OncoButton text="VER ÚLTIMOS PACIENTES CON SÍNTOMAS" />
            </div>
            <aside>
            </aside>
        </HomeDashboardSection>
    </HomeWrapper>
}

export default HomeScreen;