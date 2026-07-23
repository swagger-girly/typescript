// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.health',
    fullyQualifiedName: 'health',
    httpMethod: 'get',
    httpPath: '/health',
  },
  {
    clientCallName: 'client.retrieveRateLimits',
    fullyQualifiedName: 'retrieveRateLimits',
    httpMethod: 'get',
    httpPath: '/rate_limits',
  },
  {
    clientCallName: 'client.pet.create',
    fullyQualifiedName: 'pet.create',
    httpMethod: 'post',
    httpPath: '/pet',
  },
  {
    clientCallName: 'client.pet.retrieve',
    fullyQualifiedName: 'pet.retrieve',
    httpMethod: 'get',
    httpPath: '/pet/{petId}',
  },
  {
    clientCallName: 'client.pet.update',
    fullyQualifiedName: 'pet.update',
    httpMethod: 'put',
    httpPath: '/pet',
  },
  {
    clientCallName: 'client.pet.list',
    fullyQualifiedName: 'pet.list',
    httpMethod: 'get',
    httpPath: '/pet',
  },
  {
    clientCallName: 'client.pet.delete',
    fullyQualifiedName: 'pet.delete',
    httpMethod: 'delete',
    httpPath: '/pet/{petId}',
  },
  { clientCallName: 'client.pet.connect', fullyQualifiedName: 'pet.connect' },
  {
    clientCallName: 'client.pet.findByStatus',
    fullyQualifiedName: 'pet.findByStatus',
    httpMethod: 'get',
    httpPath: '/pet/findByStatus',
  },
  {
    clientCallName: 'client.pet.findByTags',
    fullyQualifiedName: 'pet.findByTags',
    httpMethod: 'get',
    httpPath: '/pet/findByTags',
  },
  {
    clientCallName: 'client.pet.listFakePage',
    fullyQualifiedName: 'pet.listFakePage',
    httpMethod: 'get',
    httpPath: '/pet/fake-page',
  },
  {
    clientCallName: 'client.pet.listFakePageInferred',
    fullyQualifiedName: 'pet.listFakePageInferred',
    httpMethod: 'get',
    httpPath: '/pet/fake-page-inferred',
  },
  {
    clientCallName: 'client.pet.listUnpaginated',
    fullyQualifiedName: 'pet.listUnpaginated',
    httpMethod: 'get',
    httpPath: '/pet/unpaginated',
  },
  {
    clientCallName: 'client.pet.retrievePremium',
    fullyQualifiedName: 'pet.retrievePremium',
    httpMethod: 'get',
    httpPath: '/pet/{petId}/premium',
  },
  {
    clientCallName: 'client.pet.search',
    fullyQualifiedName: 'pet.search',
    httpMethod: 'get',
    httpPath: '/pet/search',
  },
  {
    clientCallName: 'client.pet.updateWithForm',
    fullyQualifiedName: 'pet.updateWithForm',
    httpMethod: 'post',
    httpPath: '/pet/{petId}',
  },
  {
    clientCallName: 'client.pet.uploadImage',
    fullyQualifiedName: 'pet.uploadImage',
    httpMethod: 'post',
    httpPath: '/pet/{petId}/uploadImage',
  },
  {
    clientCallName: 'client.pet.watchStatus',
    fullyQualifiedName: 'pet.watchStatus',
    httpMethod: 'get',
    httpPath: '/pet/{petId}/status/stream',
  },
  {
    clientCallName: 'client.files.update',
    fullyQualifiedName: 'files.update',
    httpMethod: 'put',
    httpPath: '/files/{path}',
  },
  {
    clientCallName: 'client.files.list',
    fullyQualifiedName: 'files.list',
    httpMethod: 'get',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.files.delete',
    fullyQualifiedName: 'files.delete',
    httpMethod: 'delete',
    httpPath: '/files/{path}',
  },
  {
    clientCallName: 'client.files.createArchive',
    fullyQualifiedName: 'files.createArchive',
    httpMethod: 'post',
    httpPath: '/files/archive',
  },
  {
    clientCallName: 'client.files.download',
    fullyQualifiedName: 'files.download',
    httpMethod: 'get',
    httpPath: '/files/{path}',
  },
  {
    clientCallName: 'client.files.upload',
    fullyQualifiedName: 'files.upload',
    httpMethod: 'post',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.files.uploadDirect',
    fullyQualifiedName: 'files.uploadDirect',
    httpMethod: 'post',
    httpPath: '/files/direct',
  },
  {
    clientCallName: 'client.profiles.create',
    fullyQualifiedName: 'profiles.create',
    httpMethod: 'post',
    httpPath: '/profiles',
  },
  {
    clientCallName: 'client.profiles.retrieve',
    fullyQualifiedName: 'profiles.retrieve',
    httpMethod: 'get',
    httpPath: '/profiles/{profileId}',
  },
  {
    clientCallName: 'client.profiles.update',
    fullyQualifiedName: 'profiles.update',
    httpMethod: 'patch',
    httpPath: '/profiles/{profileId}',
  },
  {
    clientCallName: 'client.profiles.legacySearch',
    fullyQualifiedName: 'profiles.legacySearch',
    httpMethod: 'get',
    httpPath: '/profiles/legacy-search',
  },
  {
    clientCallName: 'client.adoptions.create',
    fullyQualifiedName: 'adoptions.create',
    httpMethod: 'post',
    httpPath: '/adoptions/applications',
  },
  {
    clientCallName: 'client.adoptions.retrieve',
    fullyQualifiedName: 'adoptions.retrieve',
    httpMethod: 'get',
    httpPath: '/adoptions/applications/{applicationId}',
  },
  {
    clientCallName: 'client.adoptions.retrieveDecision',
    fullyQualifiedName: 'adoptions.retrieveDecision',
    httpMethod: 'get',
    httpPath: '/adoptions/applications/{applicationId}/decision',
  },
  {
    clientCallName: 'client.adoptions.policies.create',
    fullyQualifiedName: 'adoptions.policies.create',
    httpMethod: 'post',
    httpPath: '/adoptions/policies',
  },
  {
    clientCallName: 'client.adoptions.policies.retrieve',
    fullyQualifiedName: 'adoptions.policies.retrieve',
    httpMethod: 'get',
    httpPath: '/adoptions/policies/{policyId}',
  },
  {
    clientCallName: 'client.adoptions.policies.update',
    fullyQualifiedName: 'adoptions.policies.update',
    httpMethod: 'patch',
    httpPath: '/adoptions/policies/{policyId}',
  },
  {
    clientCallName: 'client.adoptions.policies.list',
    fullyQualifiedName: 'adoptions.policies.list',
    httpMethod: 'get',
    httpPath: '/adoptions/policies',
  },
  {
    clientCallName: 'client.placements.create',
    fullyQualifiedName: 'placements.create',
    httpMethod: 'post',
    httpPath: '/placements',
  },
  {
    clientCallName: 'client.placements.retrieve',
    fullyQualifiedName: 'placements.retrieve',
    httpMethod: 'get',
    httpPath: '/placements/{placementId}',
  },
  {
    clientCallName: 'client.placements.list',
    fullyQualifiedName: 'placements.list',
    httpMethod: 'get',
    httpPath: '/placements',
  },
  {
    clientCallName: 'client.placements.recordEvent',
    fullyQualifiedName: 'placements.recordEvent',
    httpMethod: 'post',
    httpPath: '/placements/{placementId}/events',
  },
  { clientCallName: 'client.webhooks.parsed', fullyQualifiedName: 'webhooks.parsed' },
  {
    clientCallName: 'client.notifications.webhooks.parsePet',
    fullyQualifiedName: 'notifications.webhooks.parsePet',
  },
  {
    clientCallName: 'client.store.listInventory',
    fullyQualifiedName: 'store.listInventory',
    httpMethod: 'get',
    httpPath: '/store/inventory',
  },
  {
    clientCallName: 'client.store.order.create',
    fullyQualifiedName: 'store.order.create',
    httpMethod: 'post',
    httpPath: '/store/order',
  },
  {
    clientCallName: 'client.store.order.retrieve',
    fullyQualifiedName: 'store.order.retrieve',
    httpMethod: 'get',
    httpPath: '/store/order/{orderId}',
  },
  {
    clientCallName: 'client.store.order.delete',
    fullyQualifiedName: 'store.order.delete',
    httpMethod: 'delete',
    httpPath: '/store/order/{orderId}',
  },
  {
    clientCallName: 'client.store.reports.retrieve',
    fullyQualifiedName: 'store.reports.retrieve',
    httpMethod: 'get',
    httpPath: '/store/reports/{reportId}',
  },
  {
    clientCallName: 'client.store.reports.list',
    fullyQualifiedName: 'store.reports.list',
    httpMethod: 'get',
    httpPath: '/store/reports',
  },
  {
    clientCallName: 'client.store.reports.embed',
    fullyQualifiedName: 'store.reports.embed',
    httpMethod: 'get',
    httpPath: '/store/reports/{reportId}/embed',
  },
  {
    clientCallName: 'client.store.reports.pause',
    fullyQualifiedName: 'store.reports.pause',
    httpMethod: 'post',
    httpPath: '/store/reports/{reportId}/pause',
  },
  {
    clientCallName: 'client.store.reports.inventory.list',
    fullyQualifiedName: 'store.reports.inventory.list',
    httpMethod: 'get',
    httpPath: '/store/reports/{reportId}/inventory',
  },
  {
    clientCallName: 'client.store.reports.inventory.daily.retrieve',
    fullyQualifiedName: 'store.reports.inventory.daily.retrieve',
    httpMethod: 'get',
    httpPath: '/store/reports/{reportId}/inventory/daily/{date}',
  },
  {
    clientCallName: 'client.user.create',
    fullyQualifiedName: 'user.create',
    httpMethod: 'post',
    httpPath: '/user',
  },
  {
    clientCallName: 'client.user.retrieve',
    fullyQualifiedName: 'user.retrieve',
    httpMethod: 'get',
    httpPath: '/user/{username}',
  },
  {
    clientCallName: 'client.user.update',
    fullyQualifiedName: 'user.update',
    httpMethod: 'put',
    httpPath: '/user/{username}',
  },
  {
    clientCallName: 'client.user.delete',
    fullyQualifiedName: 'user.delete',
    httpMethod: 'delete',
    httpPath: '/user/{username}',
  },
  {
    clientCallName: 'client.user.createWithList',
    fullyQualifiedName: 'user.createWithList',
    httpMethod: 'post',
    httpPath: '/user/createWithList',
  },
  {
    clientCallName: 'client.user.login',
    fullyQualifiedName: 'user.login',
    httpMethod: 'get',
    httpPath: '/user/login',
  },
  {
    clientCallName: 'client.user.logout',
    fullyQualifiedName: 'user.logout',
    httpMethod: 'get',
    httpPath: '/user/logout',
  },
  {
    clientCallName: 'client.user.verifyIdentity',
    fullyQualifiedName: 'user.verifyIdentity',
    httpMethod: 'post',
    httpPath: '/user/{username}/verifyIdentity',
  },
  {
    clientCallName: 'client.ai.aiQuery',
    fullyQualifiedName: 'ai.aiQuery',
    httpMethod: 'post',
    httpPath: '/ai/query',
  },
  {
    clientCallName: 'client.media.binaryAndJson',
    fullyQualifiedName: 'media.binaryAndJson',
    httpMethod: 'get',
    httpPath: '/media/binary-and-json',
  },
  {
    clientCallName: 'client.media.jsonAndXml',
    fullyQualifiedName: 'media.jsonAndXml',
    httpMethod: 'get',
    httpPath: '/media/json-and-xml',
  },
  {
    clientCallName: 'client.media.jsonFirst',
    fullyQualifiedName: 'media.jsonFirst',
    httpMethod: 'get',
    httpPath: '/media/json-first',
  },
  {
    clientCallName: 'client.media.schemaOnJson',
    fullyQualifiedName: 'media.schemaOnJson',
    httpMethod: 'get',
    httpPath: '/media/schema-on-json',
  },
  {
    clientCallName: 'client.media.schemaOnText',
    fullyQualifiedName: 'media.schemaOnText',
    httpMethod: 'get',
    httpPath: '/media/schema-on-text',
  },
  {
    clientCallName: 'client.media.textFirst',
    fullyQualifiedName: 'media.textFirst',
    httpMethod: 'get',
    httpPath: '/media/text-first',
  },
  {
    clientCallName: 'client.media.textOnly',
    fullyQualifiedName: 'media.textOnly',
    httpMethod: 'get',
    httpPath: '/media/text-only',
  },
  {
    clientCallName: 'client.media.vendorJson',
    fullyQualifiedName: 'media.vendorJson',
    httpMethod: 'get',
    httpPath: '/media/vendor-json',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
