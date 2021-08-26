import Hero from "../components/Hero/Hero";
import Meta from "../components/Meta/Meta";
import SelectedProject from "../components/Projects/SelectedProject";
import {data} from './api/data'

export default function Home() {
    return (
        <div>
            <Meta/>
            <Hero/>
            <SelectedProject data={data} />
        </div>
    );
}
