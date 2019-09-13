export default {
    s3: {
      REGION: "ap-southeast-2",
      BUCKET: "notes-app-uploads-anmoldesai"
    },
    apiGateway: {
      REGION: "ap-southeast-2",
      URL: "https://jvj44ezzt9.execute-api.ap-southeast-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-southeast-2",
      USER_POOL_ID: "ap-southeast-2_zIbIxMOFX",
      APP_CLIENT_ID: "165vl9vm0hlo8co7uvau8j9k99",
      IDENTITY_POOL_ID: "ap-southeast-2:133f25b6-60d1-475c-b614-5f12aff67e7c"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
  };
  