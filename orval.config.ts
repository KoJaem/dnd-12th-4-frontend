module.exports = {
  petstore: {
    output: {
      mode: "tags-split",
      target: "src/api",
      schemas: "src/api/model",
      client: "react-query",
      httpClient: "axios",
      prettier: true,
      override: {
        header: false,
        mutator: {
          path: "./src/api/clientInstance.ts",
          name: "customInstance"
        }
      }
    },
    input: {
      target: "http://ec2-52-79-242-171.ap-northeast-2.compute.amazonaws.com:8080/v3/api-docs"
    }
  }
}
