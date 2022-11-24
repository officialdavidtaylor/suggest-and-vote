import { createIcon } from "@chakra-ui/react";

export const PlusIcon = createIcon({
  displayName: "PlusIcon",
  viewBox: "0 0 24 24",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      stroke="currentColor"
      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
});
