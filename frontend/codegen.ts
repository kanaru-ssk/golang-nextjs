import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `http://backend:${process.env.BACKEND_PORT}/query`,
  documents: ["src/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
