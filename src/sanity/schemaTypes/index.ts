import { type SchemaTypeDefinition } from "sanity";
import heroSection from "./hero";
import project from "./project";
import about from "./about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection, project, about],
};
