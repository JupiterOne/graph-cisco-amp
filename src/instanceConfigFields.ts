import { IntegrationInstanceConfigFieldMap } from '@jupiterone/integration-sdk';

const instanceConfigFields: IntegrationInstanceConfigFieldMap = {
  apiEndpoint: {
    type: 'string',
  },
  apiClientId: {
    type: 'string',
  },
  apiKey: {
    type: 'string',
    mask: true,
  },
};

export default instanceConfigFields;