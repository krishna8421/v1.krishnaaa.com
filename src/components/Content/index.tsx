import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const CustomImages = (props) => {
  return <Image alt={props.alt} className="rounded-2xl" {...props} />;
};

interface Props {
  content: string;
}
export const Content = ({ content }: Props) => {
  const Content = useMDXComponent(content);
  const components = {
    Image: CustomImages,
  };
  return (
    <div className="prose my-12 mx-auto max-w-none">
      <Content components={components} />
    </div>
  );
};
