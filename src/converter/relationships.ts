import {
  createIntegrationRelationship,
  Entity,
  Relationship,
  RelationshipDirection,
} from '@jupiterone/integration-sdk';

export const DEVICE_ENTITY_TYPE = 'user_endpoint';
export const DEVICE_ENTITY_CLASS = ['Device', 'Host'];
export const ENDPOINT_PROTECTION_RELATIONSHIP =
  'cisco_amp_endpoint_protects_device';

export const mapEndpointProtectionRelationship = (
  agent: Entity,
): Relationship =>
  createIntegrationRelationship({
    _class: 'PROTECTS',
    _type: ENDPOINT_PROTECTION_RELATIONSHIP,
    _mapping: {
      relationshipDirection: RelationshipDirection.FORWARD,
      sourceEntityKey: agent._key,
      targetFilterKeys: [
        ['_class', 'macAddress'],
        ['_class', 'hostname'],
      ],
      targetEntity: {
        ...agent,
        _type: DEVICE_ENTITY_TYPE,
        _class: DEVICE_ENTITY_CLASS,
      },
    },
  });
