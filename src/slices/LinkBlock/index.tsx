import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LinkBlock`.
 */
export type LinkBlockProps = SliceComponentProps<Content.LinkBlockSlice>;

/**
 * Component for "LinkBlock" Slices.
 */
const LinkBlock = ({ slice }: LinkBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for link_block (variation: {slice.variation}) Slices
    </section>
  );
};

export default LinkBlock;
