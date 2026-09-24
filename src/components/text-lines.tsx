import { Fragment } from "react";

/** Keeps editorial line breaks in JSON without storing HTML in content. */
export function TextLines({ lines }: { lines: string[] }) {
  return lines.map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}
