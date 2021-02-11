interface TagProps {
  username: string;
  discriminator: string;
}

type TagString = `${TagProps["username"]}#${TagProps["discriminator"]}`;

const tag = <TTag extends TagProps = TagProps>(tag: TTag): TagString =>
  `${tag.username}#${tag.discriminator}` as TagString;

export { TagProps, TagString, tag };

export default tag;
