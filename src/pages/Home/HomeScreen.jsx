import { HomeSideImage } from "../../utils/SvgImages";
import { DateSectionStyled, HomeDashboardSection, HomeDateSection, HomeWrapper } from "./StyledHomeScreen";
import HomeH1 from "../../common/components/HomeH1";
import Button from "../../common/components/button/Button";

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
            <HomeH1 width="80%" userName="Ricardo" />
            <div>
                <Button text="REGISTRAR NUEVO PACIENTE" />
                <Button text="VER TODOS LOS PACIENTES" />
                <Button text="VER ÚLTIMOS PACIENTES CON SÍNTOMAS" />
            </div>
            <aside>
            </aside>
        </HomeDashboardSection>
    </HomeWrapper>
}

export default HomeScreen;