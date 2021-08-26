import Link from "next/link";
import Image from "next/image";

function ProjectCard({ index, img, alt, title, description }) {
    const onClickLink = () => {
        // window.scrollTo(0, 0);
    };
    return (
        <Link href={`/project/${title.toLowerCase()}`} onClick={onClickLink()} passHref={true}>
            <div className="selected__project__container" key={index}>
                <div className="selected__project__img">
                    <Image
                        src={img}
                        alt={alt}
                        className="img_project"
                        placeholder="blur"
                        blurDataURL={`/_next/image?url=${img}&w=16&q=1`}
                        loading="lazy"
                    />
                </div>
                <div className="selected__project__desc">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;
