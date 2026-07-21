// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'health',
    endpoint: '/health',
    httpMethod: 'get',
    summary: 'Retrieve system health',
    description: 'Returns the current API health, including per-service statuses.',
    stainlessPath: '(resource) $client > (method) health',
    qualified: 'client.health',
    response: "{ checkedAt: string; status: 'ok' | 'degraded' | 'down'; services?: object; }",
    markdown:
      "## health\n\n`client.health(): { checkedAt: string; status: 'ok' | 'degraded' | 'down'; services?: object; }`\n\n**get** `/health`\n\nReturns the current API health, including per-service statuses.\n\n### Returns\n\n- `{ checkedAt: string; status: 'ok' | 'degraded' | 'down'; services?: object; }`\n\n  - `checkedAt: string`\n  - `status: 'ok' | 'degraded' | 'down'`\n  - `services?: object`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst systemHealth = await client.health();\n\nconsole.log(systemHealth);\n```",
    perLanguage: {
      typescript: {
        method: 'client.health',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst systemHealth = await client.health();\n\nconsole.log(systemHealth.checkedAt);",
      },
      python: {
        method: 'health',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nsystem_health = client.health()\nprint(system_health.checked_at)',
      },
      java: {
        method: 'health',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.ClientHealthParams;\nimport com.hello_world_testingggg.api.models.SystemHealth;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        SystemHealth systemHealth = client.health();\n    }\n}',
      },
      kotlin: {
        method: 'health',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.ClientHealthParams\nimport com.hello_world_testingggg.api.models.SystemHealth\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val systemHealth: SystemHealth = client.health()\n}',
      },
      go: {
        method: 'client.Health',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tsystemHealth, err := client.Health(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", systemHealth.CheckedAt)\n}\n',
      },
      ruby: {
        method: 'health',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nsystem_health = hello_world_testingggg.health\n\nputs(system_health)',
      },
      http: {
        example: 'curl /api/v3/health',
      },
    },
  },
  {
    name: 'retrieve_rate_limits',
    endpoint: '/rate_limits',
    httpMethod: 'get',
    summary: 'Retrieve rate limits',
    description: "Returns the caller's current rate-limit budget.",
    stainlessPath: '(resource) $client > (method) retrieve_rate_limits',
    qualified: 'client.retrieveRateLimits',
    response:
      '{ remaining: number; resetAt: string; tiers?: { name: string; quota?: { requests?: number; window?: string; }; }[]; }',
    markdown:
      "## retrieve_rate_limits\n\n`client.retrieveRateLimits(): { remaining: number; resetAt: string; tiers?: object[]; }`\n\n**get** `/rate_limits`\n\nReturns the caller's current rate-limit budget.\n\n### Returns\n\n- `{ remaining: number; resetAt: string; tiers?: { name: string; quota?: { requests?: number; window?: string; }; }[]; }`\n\n  - `remaining: number`\n  - `resetAt: string`\n  - `tiers?: { name: string; quota?: { requests?: number; window?: string; }; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.retrieveRateLimits();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.retrieveRateLimits',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.retrieveRateLimits();\n\nconsole.log(response.remaining);",
      },
      python: {
        method: 'retrieve_rate_limits',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.retrieve_rate_limits()\nprint(response.remaining)',
      },
      java: {
        method: 'retrieveRateLimits',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.ClientRetrieveRateLimitsParams;\nimport com.hello_world_testingggg.api.models.ClientRetrieveRateLimitsResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        ClientRetrieveRateLimitsResponse response = client.retrieveRateLimits();\n    }\n}',
      },
      kotlin: {
        method: 'retrieveRateLimits',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.ClientRetrieveRateLimitsParams\nimport com.hello_world_testingggg.api.models.ClientRetrieveRateLimitsResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: ClientRetrieveRateLimitsResponse = client.retrieveRateLimits()\n}',
      },
      go: {
        method: 'client.GetRateLimits',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.GetRateLimits(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Remaining)\n}\n',
      },
      ruby: {
        method: 'retrieve_rate_limits',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.retrieve_rate_limits\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/rate_limits \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/pet',
    httpMethod: 'get',
    summary: 'List pets',
    description: 'Returns a cursor-paginated list of pets.',
    stainlessPath: '(resource) pet > (method) list',
    qualified: 'client.pet.list',
    params: [
      'created_at?: { gt?: string; gte?: string; lt?: string; lte?: string; };',
      'cursor?: string;',
      'limit?: number;',
    ],
    response:
      "{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## list\n\n`client.pet.list(created_at?: { gt?: string; gte?: string; lt?: string; lte?: string; }, cursor?: string, limit?: number): { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }`\n\n**get** `/pet`\n\nReturns a cursor-paginated list of pets.\n\n### Parameters\n\n- `created_at?: { gt?: string; gte?: string; lt?: string; lte?: string; }`\n  Filter by created_at timestamp range in UTC. Accepts gt/gte/lt/lte.\n  - `gt?: string`\n    Minimum value to filter by (exclusive).\n  - `gte?: string`\n    Minimum value to filter by (inclusive).\n  - `lt?: string`\n    Maximum value to filter by (exclusive).\n  - `lte?: string`\n    Maximum value to filter by (inclusive).\n\n- `cursor?: string`\n  Cursor from a previous response used to fetch the next page.\n\n- `limit?: number`\n  Maximum number of pets to return.\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string`\n  - `category?: { id?: number; name?: string; subcategories?: object[]; }`\n  - `microchipId?: string | number`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\n// Automatically fetches more pages as needed.\nfor await (const pet of client.pet.list()) {\n  console.log(pet);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.list',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\n// Automatically fetches more pages as needed.\nfor await (const pet of client.pet.list()) {\n  console.log(pet.id);\n}",
      },
      python: {
        method: 'pet.list',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\npage = client.pet.list()\npage = page.items[0]\nprint(page.id)',
      },
      java: {
        method: 'pet().list',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.PetListPage;\nimport com.hello_world_testingggg.api.models.pet.PetListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PetListPage page = client.pet().list();\n    }\n}',
      },
      kotlin: {
        method: 'pet().list',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.PetListPage\nimport com.hello_world_testingggg.api.models.pet.PetListParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val page: PetListPage = client.pet().list()\n}',
      },
      go: {
        method: 'client.Pet.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\tpage, err := client.Pet.List(context.TODO(), helloworldtestingggg.PetListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'pet.list',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\npage = hello_world_testingggg.pet.list\n\nputs(page)',
      },
      http: {
        example: 'curl /api/v3/pet',
      },
    },
  },
  {
    name: 'list_unpaginated',
    endpoint: '/pet/unpaginated',
    httpMethod: 'get',
    summary: 'List pets without pagination helpers',
    description: 'Returns the same cursor-shaped pet list response without enabling SDK pagination helpers.',
    stainlessPath: '(resource) pet > (method) list_unpaginated',
    qualified: 'client.pet.listUnpaginated',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      "{ items: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }[]; next_cursor?: string; }",
    markdown:
      "## list_unpaginated\n\n`client.pet.listUnpaginated(cursor?: string, limit?: number): { items: pet[]; next_cursor?: string; }`\n\n**get** `/pet/unpaginated`\n\nReturns the same cursor-shaped pet list response without enabling SDK pagination helpers.\n\n### Parameters\n\n- `cursor?: string`\n  Cursor from a previous response used to fetch the next page.\n\n- `limit?: number`\n  Maximum number of pets to return.\n\n### Returns\n\n- `{ items: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }[]; next_cursor?: string; }`\n\n  - `items: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]`\n  - `next_cursor?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.pet.listUnpaginated();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.listUnpaginated',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.pet.listUnpaginated();\n\nconsole.log(response.items);",
      },
      python: {
        method: 'pet.list_unpaginated',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nresponse = client.pet.list_unpaginated()\nprint(response.items)',
      },
      java: {
        method: 'pet().listUnpaginated',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.PetListUnpaginatedParams;\nimport com.hello_world_testingggg.api.models.pet.PetListUnpaginatedResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PetListUnpaginatedResponse response = client.pet().listUnpaginated();\n    }\n}',
      },
      kotlin: {
        method: 'pet().listUnpaginated',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.PetListUnpaginatedParams\nimport com.hello_world_testingggg.api.models.pet.PetListUnpaginatedResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: PetListUnpaginatedResponse = client.pet().listUnpaginated()\n}',
      },
      go: {
        method: 'client.Pet.ListUnpaginated',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\tresponse, err := client.Pet.ListUnpaginated(context.TODO(), helloworldtestingggg.PetListUnpaginatedParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Items)\n}\n',
      },
      ruby: {
        method: 'pet.list_unpaginated',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\nresponse = hello_world_testingggg.pet.list_unpaginated\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/pet/unpaginated',
      },
    },
  },
  {
    name: 'list_fake_page',
    endpoint: '/pet/fake-page',
    httpMethod: 'get',
    summary: 'List pets as a fake page',
    description: 'Returns a single page-shaped pet response without SDK pagination helpers.',
    stainlessPath: '(resource) pet > (method) list_fake_page',
    qualified: 'client.pet.listFakePage',
    response:
      "{ data: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }[]; has_more: boolean; }",
    markdown:
      "## list_fake_page\n\n`client.pet.listFakePage(): { data: pet[]; has_more: boolean; }`\n\n**get** `/pet/fake-page`\n\nReturns a single page-shaped pet response without SDK pagination helpers.\n\n### Returns\n\n- `{ data: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }[]; has_more: boolean; }`\n\n  - `data: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]`\n  - `has_more: boolean`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.pet.listFakePage();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.listFakePage',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.pet.listFakePage();\n\nconsole.log(response.data);",
      },
      python: {
        method: 'pet.list_fake_page',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nresponse = client.pet.list_fake_page()\nprint(response.data)',
      },
      java: {
        method: 'pet().listFakePage',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.PetListFakePageParams;\nimport com.hello_world_testingggg.api.models.pet.PetListFakePageResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PetListFakePageResponse response = client.pet().listFakePage();\n    }\n}',
      },
      kotlin: {
        method: 'pet().listFakePage',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.PetListFakePageParams\nimport com.hello_world_testingggg.api.models.pet.PetListFakePageResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: PetListFakePageResponse = client.pet().listFakePage()\n}',
      },
      go: {
        method: 'client.Pet.ListFakePage',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\tresponse, err := client.Pet.ListFakePage(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Data)\n}\n',
      },
      ruby: {
        method: 'pet.list_fake_page',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\nresponse = hello_world_testingggg.pet.list_fake_page\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/pet/fake-page',
      },
    },
  },
  {
    name: 'list_fake_page_inferred',
    endpoint: '/pet/fake-page-inferred',
    httpMethod: 'get',
    summary: 'List pets as an inferred fake page',
    description:
      'Returns a single page-shaped pet response whose fake pagination behavior is inferred from the config scheme.',
    stainlessPath: '(resource) pet > (method) list_fake_page_inferred',
    qualified: 'client.pet.listFakePageInferred',
    response:
      "{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## list_fake_page_inferred\n\n`client.pet.listFakePageInferred(): { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }`\n\n**get** `/pet/fake-page-inferred`\n\nReturns a single page-shaped pet response whose fake pagination behavior is inferred from the config scheme.\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string`\n  - `category?: { id?: number; name?: string; subcategories?: object[]; }`\n  - `microchipId?: string | number`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\n// Automatically fetches more pages as needed.\nfor await (const pet of client.pet.listFakePageInferred()) {\n  console.log(pet);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.listFakePageInferred',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\n// Automatically fetches more pages as needed.\nfor await (const pet of client.pet.listFakePageInferred()) {\n  console.log(pet.id);\n}",
      },
      python: {
        method: 'pet.list_fake_page_inferred',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\npage = client.pet.list_fake_page_inferred()\npage = page.data[0]\nprint(page.id)',
      },
      java: {
        method: 'pet().listFakePageInferred',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.PetListFakePageInferredPage;\nimport com.hello_world_testingggg.api.models.pet.PetListFakePageInferredParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PetListFakePageInferredPage page = client.pet().listFakePageInferred();\n    }\n}',
      },
      kotlin: {
        method: 'pet().listFakePageInferred',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.PetListFakePageInferredPage\nimport com.hello_world_testingggg.api.models.pet.PetListFakePageInferredParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val page: PetListFakePageInferredPage = client.pet().listFakePageInferred()\n}',
      },
      go: {
        method: 'client.Pet.ListFakePageInferred',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\tpage, err := client.Pet.ListFakePageInferred(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'pet.list_fake_page_inferred',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\npage = hello_world_testingggg.pet.list_fake_page_inferred\n\nputs(page)',
      },
      http: {
        example: 'curl /api/v3/pet/fake-page-inferred',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/pet',
    httpMethod: 'put',
    summary: 'Update an existing pet',
    description: 'Update an existing pet by Id',
    stainlessPath: '(resource) pet > (method) update',
    qualified: 'client.pet.update',
    params: [
      'name: string;',
      'photoUrls: string[];',
      'id?: number;',
      "acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string;",
      'category?: { id?: number; name?: string; subcategories?: object[]; };',
      'microchipId?: string | number;',
      "status?: 'available' | 'pending' | 'sold';",
      'tags?: { id?: number; name?: string; }[];',
    ],
    response:
      "{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## update\n\n`client.pet.update(name: string, photoUrls: string[], id?: number, acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string, category?: { id?: number; name?: string; subcategories?: object[]; }, microchipId?: string | number, status?: 'available' | 'pending' | 'sold', tags?: { id?: number; name?: string; }[]): { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }`\n\n**put** `/pet`\n\nUpdate an existing pet by Id\n\n### Parameters\n\n- `name: string`\n\n- `photoUrls: string[]`\n\n- `id?: number`\n\n- `acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string`\n  How the pet entered the store. Open enum: known channels plus forward-compatible free-form strings.\n\n- `category?: { id?: number; name?: string; subcategories?: object[]; }`\n  - `id?: number`\n  - `name?: string`\n  - `subcategories?: object[]`\n    Nested subcategories; the tree can recurse arbitrarily deep.\n\n- `microchipId?: string | number`\n  Microchip identifier; legacy chips used numeric identifiers.\n\n- `status?: 'available' | 'pending' | 'sold'`\n  pet status in the store\n\n- `tags?: { id?: number; name?: string; }[]`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string`\n  - `category?: { id?: number; name?: string; subcategories?: object[]; }`\n  - `microchipId?: string | number`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst pet = await client.pet.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.update',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst pet = await client.pet.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);",
      },
      python: {
        method: 'pet.update',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\npet = client.pet.update(\n    name="doggie",\n    photo_urls=["string"],\n)\nprint(pet.id)',
      },
      java: {
        method: 'pet().update',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.Pet;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        Pet params = Pet.builder()\n            .name("doggie")\n            .addPhotoUrl("string")\n            .build();\n        Pet pet = client.pet().update(params);\n    }\n}',
      },
      kotlin: {
        method: 'pet().update',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.Pet\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: Pet = Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build()\n    val pet: Pet = client.pet().update(params)\n}',
      },
      go: {
        method: 'client.Pet.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\tpet, err := client.Pet.Update(context.TODO(), helloworldtestingggg.PetUpdateParams{\n\t\tPet: helloworldtestingggg.PetParam{\n\t\t\tName:      helloworldtestingggg.F("doggie"),\n\t\t\tPhotoURLs: helloworldtestingggg.F([]string{"string"}),\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n',
      },
      ruby: {
        method: 'pet.update',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\npet = hello_world_testingggg.pet.update(name: "doggie", photo_urls: ["string"])\n\nputs(pet)',
      },
      http: {
        example:
          'curl /api/v3/pet \\\n    -X PUT \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n          "name": "doggie",\n          "photoUrls": [\n            "string"\n          ],\n          "id": 10\n        }\'',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/pet',
    httpMethod: 'post',
    summary: 'Add a new pet to the store',
    description: 'Add a new pet to the store',
    stainlessPath: '(resource) pet > (method) create',
    qualified: 'client.pet.create',
    params: [
      'name: string;',
      'photoUrls: string[];',
      'id?: number;',
      "acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string;",
      'category?: { id?: number; name?: string; subcategories?: object[]; };',
      'microchipId?: string | number;',
      "status?: 'available' | 'pending' | 'sold';",
      'tags?: { id?: number; name?: string; }[];',
    ],
    response:
      "{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## create\n\n`client.pet.create(name: string, photoUrls: string[], id?: number, acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string, category?: { id?: number; name?: string; subcategories?: object[]; }, microchipId?: string | number, status?: 'available' | 'pending' | 'sold', tags?: { id?: number; name?: string; }[]): { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }`\n\n**post** `/pet`\n\nAdd a new pet to the store\n\n### Parameters\n\n- `name: string`\n\n- `photoUrls: string[]`\n\n- `id?: number`\n\n- `acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string`\n  How the pet entered the store. Open enum: known channels plus forward-compatible free-form strings.\n\n- `category?: { id?: number; name?: string; subcategories?: object[]; }`\n  - `id?: number`\n  - `name?: string`\n  - `subcategories?: object[]`\n    Nested subcategories; the tree can recurse arbitrarily deep.\n\n- `microchipId?: string | number`\n  Microchip identifier; legacy chips used numeric identifiers.\n\n- `status?: 'available' | 'pending' | 'sold'`\n  pet status in the store\n\n- `tags?: { id?: number; name?: string; }[]`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string`\n  - `category?: { id?: number; name?: string; subcategories?: object[]; }`\n  - `microchipId?: string | number`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst pet = await client.pet.create({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.create',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst pet = await client.pet.create({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);",
      },
      python: {
        method: 'pet.create',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\npet = client.pet.create(\n    name="doggie",\n    photo_urls=["string"],\n)\nprint(pet.id)',
      },
      java: {
        method: 'pet().create',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.Pet;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        Pet params = Pet.builder()\n            .name("doggie")\n            .addPhotoUrl("string")\n            .build();\n        Pet pet = client.pet().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'pet().create',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.Pet\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: Pet = Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build()\n    val pet: Pet = client.pet().create(params)\n}',
      },
      go: {
        method: 'client.Pet.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\tpet, err := client.Pet.New(context.TODO(), helloworldtestingggg.PetNewParams{\n\t\tPet: helloworldtestingggg.PetParam{\n\t\t\tName:      helloworldtestingggg.F("doggie"),\n\t\t\tPhotoURLs: helloworldtestingggg.F([]string{"string"}),\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n',
      },
      ruby: {
        method: 'pet.create',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\npet = hello_world_testingggg.pet.create(name: "doggie", photo_urls: ["string"])\n\nputs(pet)',
      },
      http: {
        example:
          'curl /api/v3/pet \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n          "name": "doggie",\n          "photoUrls": [\n            "string"\n          ],\n          "id": 10\n        }\'',
      },
    },
  },
  {
    name: 'find_by_status',
    endpoint: '/pet/findByStatus',
    httpMethod: 'get',
    summary: 'Finds Pets by status',
    description: 'Multiple status values can be provided with comma separated strings',
    stainlessPath: '(resource) pet > (method) find_by_status',
    qualified: 'client.pet.findByStatus',
    params: ["status?: 'available' | 'pending' | 'sold';"],
    response:
      "{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]",
    markdown:
      "## find_by_status\n\n`client.pet.findByStatus(status?: 'available' | 'pending' | 'sold'): object[]`\n\n**get** `/pet/findByStatus`\n\nMultiple status values can be provided with comma separated strings\n\n### Parameters\n\n- `status?: 'available' | 'pending' | 'sold'`\n  Status values that need to be considered for filter\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst pets = await client.pet.findByStatus();\n\nconsole.log(pets);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.findByStatus',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst pets = await client.pet.findByStatus();\n\nconsole.log(pets);",
      },
      python: {
        method: 'pet.find_by_status',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\npets = client.pet.find_by_status()\nprint(pets)',
      },
      java: {
        method: 'pet().findByStatus',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport com.hello_world_testingggg.api.models.pet.PetFindByStatusParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        List<Pet> pets = client.pet().findByStatus();\n    }\n}',
      },
      kotlin: {
        method: 'pet().findByStatus',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.Pet\nimport com.hello_world_testingggg.api.models.pet.PetFindByStatusParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val pets: List<Pet> = client.pet().findByStatus()\n}',
      },
      go: {
        method: 'client.Pet.FindByStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\tpets, err := client.Pet.FindByStatus(context.TODO(), helloworldtestingggg.PetFindByStatusParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pets)\n}\n',
      },
      ruby: {
        method: 'pet.find_by_status',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\npets = hello_world_testingggg.pet.find_by_status\n\nputs(pets)',
      },
      http: {
        example: 'curl /api/v3/pet/findByStatus',
      },
    },
  },
  {
    name: 'find_by_tags',
    endpoint: '/pet/findByTags',
    httpMethod: 'get',
    summary: 'Finds Pets by tags',
    description:
      'Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
    stainlessPath: '(resource) pet > (method) find_by_tags',
    qualified: 'client.pet.findByTags',
    params: ['tags?: string[];'],
    response:
      "{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]",
    markdown:
      "## find_by_tags\n\n`client.pet.findByTags(tags?: string[]): object[]`\n\n**get** `/pet/findByTags`\n\nMultiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.\n\n### Parameters\n\n- `tags?: string[]`\n  Tags to filter by\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst pets = await client.pet.findByTags();\n\nconsole.log(pets);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.findByTags',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst pets = await client.pet.findByTags();\n\nconsole.log(pets);",
      },
      python: {
        method: 'pet.find_by_tags',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\npets = client.pet.find_by_tags()\nprint(pets)',
      },
      java: {
        method: 'pet().findByTags',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport com.hello_world_testingggg.api.models.pet.PetFindByTagsParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        List<Pet> pets = client.pet().findByTags();\n    }\n}',
      },
      kotlin: {
        method: 'pet().findByTags',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.Pet\nimport com.hello_world_testingggg.api.models.pet.PetFindByTagsParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val pets: List<Pet> = client.pet().findByTags()\n}',
      },
      go: {
        method: 'client.Pet.FindByTags',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\tpets, err := client.Pet.FindByTags(context.TODO(), helloworldtestingggg.PetFindByTagsParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pets)\n}\n',
      },
      ruby: {
        method: 'pet.find_by_tags',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\npets = hello_world_testingggg.pet.find_by_tags\n\nputs(pets)',
      },
      http: {
        example: 'curl /api/v3/pet/findByTags',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/pet/{petId}',
    httpMethod: 'get',
    summary: 'Find pet by ID',
    description: 'Returns a single pet',
    stainlessPath: '(resource) pet > (method) retrieve',
    qualified: 'client.pet.retrieve',
    params: ['petId: number;'],
    response:
      "{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## retrieve\n\n`client.pet.retrieve(petId: number): { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }`\n\n**get** `/pet/{petId}`\n\nReturns a single pet\n\n### Parameters\n\n- `petId: number`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string`\n  - `category?: { id?: number; name?: string; subcategories?: object[]; }`\n  - `microchipId?: string | number`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst pet = await client.pet.retrieve(0);\n\nconsole.log(pet);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.retrieve',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pet.retrieve(0);\n\nconsole.log(pet.id);",
      },
      python: {
        method: 'pet.retrieve',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\npet = client.pet.retrieve(\n    0,\n)\nprint(pet.id)',
      },
      java: {
        method: 'pet().retrieve',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport com.hello_world_testingggg.api.models.pet.PetRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        Pet pet = client.pet().retrieve(0L);\n    }\n}',
      },
      kotlin: {
        method: 'pet().retrieve',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.Pet\nimport com.hello_world_testingggg.api.models.pet.PetRetrieveParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val pet: Pet = client.pet().retrieve(0L)\n}',
      },
      go: {
        method: 'client.Pet.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpet, err := client.Pet.Get(context.TODO(), int64(0))\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n',
      },
      ruby: {
        method: 'pet.retrieve',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\npet = hello_world_testingggg.pet.retrieve(0)\n\nputs(pet)',
      },
      http: {
        example: 'curl /api/v3/pet/$PET_ID \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'update_with_form',
    endpoint: '/pet/{petId}',
    httpMethod: 'post',
    summary: 'Updates a pet in the store with form data',
    description: 'Updates a pet in the store with form data',
    stainlessPath: '(resource) pet > (method) update_with_form',
    qualified: 'client.pet.updateWithForm',
    params: ['petId: number;', 'name?: string;', 'status?: string;'],
    markdown:
      "## update_with_form\n\n`client.pet.updateWithForm(petId: number, name?: string, status?: string): void`\n\n**post** `/pet/{petId}`\n\nUpdates a pet in the store with form data\n\n### Parameters\n\n- `petId: number`\n\n- `name?: string`\n  Name of pet that needs to be updated\n\n- `status?: string`\n  Status of pet that needs to be updated\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.pet.updateWithForm(0)\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.updateWithForm',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.pet.updateWithForm(0);",
      },
      python: {
        method: 'pet.update_with_form',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nclient.pet.update_with_form(\n    pet_id=0,\n)',
      },
      java: {
        method: 'pet().updateWithForm',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.PetUpdateWithFormParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.pet().updateWithForm(0L);\n    }\n}',
      },
      kotlin: {
        method: 'pet().updateWithForm',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.PetUpdateWithFormParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.pet().updateWithForm(0L)\n}',
      },
      go: {
        method: 'client.Pet.UpdateWithForm',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\terr := client.Pet.UpdateWithForm(\n\t\tcontext.TODO(),\n\t\tint64(0),\n\t\thelloworldtestingggg.PetUpdateWithFormParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'pet.update_with_form',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\nresult = hello_world_testingggg.pet.update_with_form(0)\n\nputs(result)',
      },
      http: {
        example: 'curl /api/v3/pet/$PET_ID \\\n    -X POST',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/pet/{petId}',
    httpMethod: 'delete',
    summary: 'Deletes a pet',
    description: 'Deletes a pet',
    stainlessPath: '(resource) pet > (method) delete',
    qualified: 'client.pet.delete',
    params: ['petId: number;'],
    markdown:
      "## delete\n\n`client.pet.delete(petId: number): void`\n\n**delete** `/pet/{petId}`\n\nDeletes a pet\n\n### Parameters\n\n- `petId: number`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.pet.delete(0)\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.delete',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.pet.delete(0);",
      },
      python: {
        method: 'pet.delete',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nclient.pet.delete(\n    0,\n)',
      },
      java: {
        method: 'pet().delete',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.PetDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.pet().delete(0L);\n    }\n}',
      },
      kotlin: {
        method: 'pet().delete',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.PetDeleteParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.pet().delete(0L)\n}',
      },
      go: {
        method: 'client.Pet.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\terr := client.Pet.Delete(context.TODO(), int64(0))\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'pet.delete',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\nresult = hello_world_testingggg.pet.delete(0)\n\nputs(result)',
      },
      http: {
        example: 'curl /api/v3/pet/$PET_ID \\\n    -X DELETE',
      },
    },
  },
  {
    name: 'upload_image',
    endpoint: '/pet/{petId}/uploadImage',
    httpMethod: 'post',
    summary: 'uploads an image',
    description: 'uploads an image',
    stainlessPath: '(resource) pet > (method) upload_image',
    qualified: 'client.pet.uploadImage',
    params: ['petId: number;', 'body: string;', 'additionalMetadata?: string;'],
    response: '{ code?: number; message?: string; type?: string; }',
    markdown:
      "## upload_image\n\n`client.pet.uploadImage(petId: number, body: string, additionalMetadata?: string): { code?: number; message?: string; type?: string; }`\n\n**post** `/pet/{petId}/uploadImage`\n\nuploads an image\n\n### Parameters\n\n- `petId: number`\n\n- `body: string`\n\n- `additionalMetadata?: string`\n  Additional Metadata\n\n### Returns\n\n- `{ code?: number; message?: string; type?: string; }`\n\n  - `code?: number`\n  - `message?: string`\n  - `type?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.pet.uploadImage(0, fs.createReadStream('path/to/file'));\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.uploadImage',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.pet.uploadImage(0, fs.createReadStream('path/to/file'));\n\nconsole.log(response.code);",
      },
      python: {
        method: 'pet.upload_image',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nresponse = client.pet.upload_image(\n    pet_id=0,\n    body=b"Example data",\n)\nprint(response.code)',
      },
      java: {
        method: 'pet().uploadImage',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.PetUploadImageParams;\nimport com.hello_world_testingggg.api.models.pet.PetUploadImageResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PetUploadImageResponse response = client.pet().uploadImage(\n          0L, "Example data"\n        );\n    }\n}',
      },
      kotlin: {
        method: 'pet().uploadImage',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.PetUploadImageParams\nimport com.hello_world_testingggg.api.models.pet.PetUploadImageResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: PetUploadImageResponse = client.pet().uploadImage(\n      0L, "Example data"\n    )\n}',
      },
      go: {
        method: 'client.Pet.UploadImage',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\tresponse, err := client.Pet.UploadImage(\n\t\tcontext.TODO(),\n\t\tint64(0),\n\t\tio.Reader(bytes.NewBuffer([]byte("Example data"))),\n\t\thelloworldtestingggg.PetUploadImageParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Code)\n}\n',
      },
      ruby: {
        method: 'pet.upload_image',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\nresponse = hello_world_testingggg.pet.upload_image(0, body: StringIO.new("Example data"))\n\nputs(response)',
      },
      http: {
        example:
          "curl /api/v3/pet/$PET_ID/uploadImage \\\n    -H 'Content-Type: application/octet-stream' \\\n    -F 'body=@/path/to/body'",
      },
    },
  },
  {
    name: 'retrieve_premium',
    endpoint: '/pet/{petId}/premium',
    httpMethod: 'get',
    summary: 'Retrieve a premium pet profile',
    description:
      'Returns the premium profile for a pet, extending the base pet with pedigree and insurance details.',
    stainlessPath: '(resource) pet > (method) retrieve_premium',
    qualified: 'client.pet.retrievePremium',
    params: ['petId: number;'],
    response:
      "{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## retrieve_premium\n\n`client.pet.retrievePremium(petId: number): object`\n\n**get** `/pet/{petId}/premium`\n\nReturns the premium profile for a pet, extending the base pet with pedigree and insurance details.\n\n### Parameters\n\n- `petId: number`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n  A pet extended with premium-tier pedigree and insurance details.\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.pet.retrievePremium(0);\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.retrievePremium',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.pet.retrievePremium(0);\n\nconsole.log(response);",
      },
      python: {
        method: 'pet.retrieve_premium',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.pet.retrieve_premium(\n    0,\n)\nprint(response)',
      },
      java: {
        method: 'pet().retrievePremium',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.PetRetrievePremiumParams;\nimport com.hello_world_testingggg.api.models.pet.PetRetrievePremiumResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PetRetrievePremiumResponse response = client.pet().retrievePremium(0L);\n    }\n}',
      },
      kotlin: {
        method: 'pet().retrievePremium',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.PetRetrievePremiumParams\nimport com.hello_world_testingggg.api.models.pet.PetRetrievePremiumResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: PetRetrievePremiumResponse = client.pet().retrievePremium(0L)\n}',
      },
      go: {
        method: 'client.Pet.GetPremium',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Pet.GetPremium(context.TODO(), int64(0))\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'pet.retrieve_premium',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.pet.retrieve_premium(0)\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/pet/$PET_ID/premium \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'watch_status',
    endpoint: '/pet/{petId}/status/stream',
    httpMethod: 'get',
    summary: 'Watch pet status',
    description:
      'Streams pet status updates over Server-Sent Events. Each `status` event contains a full `Pet` payload.',
    stainlessPath: '(resource) pet > (method) watch_status',
    qualified: 'client.pet.watchStatus',
    params: ['petId: number;', 'Last-Event-ID?: string;'],
    response:
      "{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }",
    markdown:
      "## watch_status\n\n`client.pet.watchStatus(petId: number, Last-Event-ID?: string): { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }`\n\n**get** `/pet/{petId}/status/stream`\n\nStreams pet status updates over Server-Sent Events. Each `status` event contains a full `Pet` payload.\n\n### Parameters\n\n- `petId: number`\n\n- `Last-Event-ID?: string`\n\n### Returns\n\n- `{ name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n  - `name: string`\n  - `photoUrls: string[]`\n  - `id?: number`\n  - `acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string`\n  - `category?: { id?: number; name?: string; subcategories?: object[]; }`\n  - `microchipId?: string | number`\n  - `status?: 'available' | 'pending' | 'sold'`\n  - `tags?: { id?: number; name?: string; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst stream = await client.pet.watchStatus(0);\nfor await (const pet of stream) {\n  console.log(pet);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.pet.watchStatus',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst pet = await client.pet.watchStatus(0);\n\nconsole.log(pet.id);",
      },
      python: {
        method: 'pet.watch_status',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nfor pet in client.pet.watch_status(\n    pet_id=0,\n):\n  print(pet)',
      },
      java: {
        method: 'pet().watchStatusStreaming',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.core.http.StreamResponse;\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport com.hello_world_testingggg.api.models.pet.PetWatchStatusParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        StreamResponse<Pet> pet = client.pet().watchStatusStreaming(0L);\n    }\n}',
      },
      kotlin: {
        method: 'pet().watchStatusStreaming',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.core.http.StreamResponse\nimport com.hello_world_testingggg.api.models.pet.Pet\nimport com.hello_world_testingggg.api.models.pet.PetWatchStatusParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val pet: StreamResponse<Pet> = client.pet().watchStatusStreaming(0L)\n}',
      },
      go: {
        method: 'client.Pet.WatchStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tstream := client.Pet.WatchStatusStreaming(\n\t\tcontext.TODO(),\n\t\tint64(0),\n\t\thelloworldtestingggg.PetWatchStatusParams{},\n\t)\n\tfor stream.Next() {\n\t\tfmt.Printf("%+v\\n", stream.Current())\n\t}\n\terr := stream.Err()\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'pet.watch_status',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\npet = hello_world_testingggg.pet.watch_status(0)\n\nputs(pet)',
      },
      http: {
        example: 'curl /api/v3/pet/$PET_ID/status/stream \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'connect',
    endpoint: '',
    httpMethod: '',
    summary: '',
    description: '',
    stainlessPath: '(resource) pet > (method) connect',
    qualified: 'client.pet.connect',
    perLanguage: {
      typescript: {
        method: 'client.pet.connect',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.pet.connect('petId');",
      },
      python: {
        method: 'pet.connect',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nclient.pet.connect(\n    "petId",\n)',
      },
      java: {
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.PetConnectParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.pet().connect("petId");\n    }\n}',
      },
      kotlin: {
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.PetConnectParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.pet().connect("petId")\n}',
      },
      go: {
        method: 'client.Pet.Connect',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Pet.Connect(context.TODO(), "petId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'pet.connect',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresult = hello_world_testingggg.pet.connect\n\nputs(result)',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/files',
    httpMethod: 'get',
    summary: 'List stored files',
    description: 'Returns all files in descending order.',
    stainlessPath: '(resource) files > (method) list',
    qualified: 'client.files.list',
    response: '{ data: { lastModified: string; path: string; size: number; contentType?: string; }[]; }',
    markdown:
      "## list\n\n`client.files.list(): { data: file[]; }`\n\n**get** `/files`\n\nReturns all files in descending order.\n\n### Returns\n\n- `{ data: { lastModified: string; path: string; size: number; contentType?: string; }[]; }`\n\n  - `data: { lastModified: string; path: string; size: number; contentType?: string; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst fileslist = await client.files.list();\n\nconsole.log(fileslist);\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.list',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst fileslist = await client.files.list();\n\nconsole.log(fileslist.data);",
      },
      python: {
        method: 'files.list',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nfileslist = client.files.list()\nprint(fileslist.data)',
      },
      java: {
        method: 'files().list',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.files.FileListParams;\nimport com.hello_world_testingggg.api.models.files.Fileslist;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        Fileslist fileslist = client.files().list();\n    }\n}',
      },
      kotlin: {
        method: 'files().list',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.files.FileListParams\nimport com.hello_world_testingggg.api.models.files.Fileslist\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val fileslist: Fileslist = client.files().list()\n}',
      },
      go: {
        method: 'client.Files.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfileslist, err := client.Files.List(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", fileslist.Data)\n}\n',
      },
      ruby: {
        method: 'files.list',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nfileslist = hello_world_testingggg.files.list\n\nputs(fileslist)',
      },
      http: {
        example: 'curl /api/v3/files \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'upload',
    endpoint: '/files',
    httpMethod: 'post',
    summary: 'Upload a stored file',
    description: 'Uploads a file via multipart/form-data with metadata and optional storage path.',
    stainlessPath: '(resource) files > (method) upload',
    qualified: 'client.files.upload',
    params: [
      'file: string;',
      'expiresIn?: number;',
      'metadata?: object;',
      'path?: string;',
      'public?: boolean;',
      'tags?: string[];',
    ],
    response: '{ lastModified: string; path: string; size: number; contentType?: string; }',
    markdown:
      "## upload\n\n`client.files.upload(file: string, expiresIn?: number, metadata?: object, path?: string, public?: boolean, tags?: string[]): { lastModified: string; path: string; size: number; contentType?: string; }`\n\n**post** `/files`\n\nUploads a file via multipart/form-data with metadata and optional storage path.\n\n### Parameters\n\n- `file: string`\n  The file to upload.\n\n- `expiresIn?: number`\n  Optional expiration in seconds.\n\n- `metadata?: object`\n  Additional metadata to store with the file.\n\n- `path?: string`\n  Optional storage path for the uploaded file.\n\n- `public?: boolean`\n  Whether the file should be publicly readable.\n\n- `tags?: string[]`\n  Tags to associate with the file.\n\n### Returns\n\n- `{ lastModified: string; path: string; size: number; contentType?: string; }`\n\n  - `lastModified: string`\n  - `path: string`\n  - `size: number`\n  - `contentType?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst file = await client.files.upload({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(file);\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.upload',
        example:
          "import fs from 'fs';\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst file = await client.files.upload({ file: fs.createReadStream('path/to/file') });\n\nconsole.log(file.lastModified);",
      },
      python: {
        method: 'files.upload',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nfile = client.files.upload(\n    file=b"Example data",\n)\nprint(file.last_modified)',
      },
      java: {
        method: 'files().upload',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.files.File;\nimport com.hello_world_testingggg.api.models.files.FileUploadParams;\nimport java.io.ByteArrayInputStream;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        FileUploadParams params = FileUploadParams.builder()\n            .file(new ByteArrayInputStream("Example data".getBytes()))\n            .build();\n        File file = client.files().upload(params);\n    }\n}',
      },
      kotlin: {
        method: 'files().upload',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.files.File\nimport com.hello_world_testingggg.api.models.files.FileUploadParams\nimport java.io.ByteArrayInputStream\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: FileUploadParams = FileUploadParams.builder()\n        .file("Example data".byteInputStream())\n        .build()\n    val file: File = client.files().upload(params)\n}',
      },
      go: {
        method: 'client.Files.Upload',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfile, err := client.Files.Upload(context.TODO(), helloworldtestingggg.FileUploadParams{\n\t\tFile: helloworldtestingggg.F(io.Reader(bytes.NewBuffer([]byte("Example data")))),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", file.LastModified)\n}\n',
      },
      ruby: {
        method: 'files.upload',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nfile = hello_world_testingggg.files.upload(file: StringIO.new("Example data"))\n\nputs(file)',
      },
      http: {
        example:
          "curl /api/v3/files \\\n    -H 'Content-Type: multipart/form-data' \\\n    -H \"api_key: $API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
    },
  },
  {
    name: 'download',
    endpoint: '/files/{path}',
    httpMethod: 'get',
    summary: 'Download a stored file',
    description: 'Downloads a file while preserving slashes in the file path parameter.',
    stainlessPath: '(resource) files > (method) download',
    qualified: 'client.files.download',
    params: ['path: string;'],
    response: 'string',
    markdown:
      "## download\n\n`client.files.download(path: string): string`\n\n**get** `/files/{path}`\n\nDownloads a file while preserving slashes in the file path parameter.\n\n### Parameters\n\n- `path: string`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.files.download('path');\n\nconsole.log(response);\n\nconst content = await response.blob()\nconsole.log(content)\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.download',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.files.download('path');\n\nconsole.log(response);\n\nconst content = await response.blob();\nconsole.log(content);",
      },
      python: {
        method: 'files.download',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.files.download(\n    "path",\n)\nprint(response)\ncontent = response.read()\nprint(content)',
      },
      java: {
        method: 'files().download',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.core.http.HttpResponse;\nimport com.hello_world_testingggg.api.models.files.FileDownloadParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        HttpResponse response = client.files().download("path");\n    }\n}',
      },
      kotlin: {
        method: 'files().download',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.core.http.HttpResponse\nimport com.hello_world_testingggg.api.models.files.FileDownloadParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: HttpResponse = client.files().download("path")\n}',
      },
      go: {
        method: 'client.Files.Download',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Files.Download(context.TODO(), "path")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'files.download',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.files.download("path")\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/files/$PATH \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/files/{path}',
    httpMethod: 'delete',
    summary: 'Delete a stored file',
    description: 'Deletes a file while preserving slashes in the file path parameter.',
    stainlessPath: '(resource) files > (method) delete',
    qualified: 'client.files.delete',
    params: ['path: string;'],
    markdown:
      "## delete\n\n`client.files.delete(path: string): void`\n\n**delete** `/files/{path}`\n\nDeletes a file while preserving slashes in the file path parameter.\n\n### Parameters\n\n- `path: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.files.delete('path')\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.delete',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nawait client.files.delete('path');",
      },
      python: {
        method: 'files.delete',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nclient.files.delete(\n    "path",\n)',
      },
      java: {
        method: 'files().delete',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.files.FileDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.files().delete("path");\n    }\n}',
      },
      kotlin: {
        method: 'files().delete',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.files.FileDeleteParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.files().delete("path")\n}',
      },
      go: {
        method: 'client.Files.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Files.Delete(context.TODO(), "path")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'files.delete',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresult = hello_world_testingggg.files.delete("path")\n\nputs(result)',
      },
      http: {
        example: 'curl /api/v3/files/$PATH \\\n    -X DELETE \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/files/{path}',
    httpMethod: 'put',
    summary: 'Update a stored file',
    description: 'Updates a stored file with either a multipart file part or a URL.',
    stainlessPath: '(resource) files > (method) update',
    qualified: 'client.files.update',
    params: ['path: string;', 'file?: string;', 'metadata?: object;', 'url?: string;'],
    response: '{ lastModified: string; path: string; size: number; contentType?: string; }',
    markdown:
      "## update\n\n`client.files.update(path: string, file?: string, metadata?: object, url?: string): { lastModified: string; path: string; size: number; contentType?: string; }`\n\n**put** `/files/{path}`\n\nUpdates a stored file with either a multipart file part or a URL.\n\n### Parameters\n\n- `path: string`\n\n- `file?: string`\n  Replacement file content.\n\n- `metadata?: object`\n  Metadata to merge onto the stored file.\n\n- `url?: string`\n  URL to fetch replacement file content from.\n\n### Returns\n\n- `{ lastModified: string; path: string; size: number; contentType?: string; }`\n\n  - `lastModified: string`\n  - `path: string`\n  - `size: number`\n  - `contentType?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst file = await client.files.update('path');\n\nconsole.log(file);\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.update',
        example:
          "import fs from 'fs';\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst file = await client.files.update('path');\n\nconsole.log(file.lastModified);",
      },
      python: {
        method: 'files.update',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nfile = client.files.update(\n    path="path",\n)\nprint(file.last_modified)',
      },
      java: {
        method: 'files().update',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.files.File;\nimport com.hello_world_testingggg.api.models.files.FileUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        File file = client.files().update("path");\n    }\n}',
      },
      kotlin: {
        method: 'files().update',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.files.File\nimport com.hello_world_testingggg.api.models.files.FileUpdateParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val file: File = client.files().update("path")\n}',
      },
      go: {
        method: 'client.Files.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfile, err := client.Files.Update(\n\t\tcontext.TODO(),\n\t\t"path",\n\t\thelloworldtestingggg.FileUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", file.LastModified)\n}\n',
      },
      ruby: {
        method: 'files.update',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nfile = hello_world_testingggg.files.update("path")\n\nputs(file)',
      },
      http: {
        example: 'curl /api/v3/files/$PATH \\\n    -X PUT \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'upload_direct',
    endpoint: '/files/direct',
    httpMethod: 'post',
    summary: 'Upload raw file bytes',
    description: 'Uploads a whole request body as application/octet-stream.',
    stainlessPath: '(resource) files > (method) upload_direct',
    qualified: 'client.files.uploadDirect',
    params: ['body: string;', 'path?: string;', 'X-File-Name?: string;'],
    response: '{ lastModified: string; path: string; size: number; contentType?: string; }',
    markdown:
      "## upload_direct\n\n`client.files.uploadDirect(body: string, path?: string, X-File-Name?: string): { lastModified: string; path: string; size: number; contentType?: string; }`\n\n**post** `/files/direct`\n\nUploads a whole request body as application/octet-stream.\n\n### Parameters\n\n- `body: string`\n\n- `path?: string`\n  Optional storage path for the raw file.\n\n- `X-File-Name?: string`\n\n### Returns\n\n- `{ lastModified: string; path: string; size: number; contentType?: string; }`\n\n  - `lastModified: string`\n  - `path: string`\n  - `size: number`\n  - `contentType?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst file = await client.files.uploadDirect(fs.createReadStream('path/to/file'));\n\nconsole.log(file);\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.uploadDirect',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst file = await client.files.uploadDirect(fs.createReadStream('path/to/file'));\n\nconsole.log(file.lastModified);",
      },
      python: {
        method: 'files.upload_direct',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nfile = client.files.upload_direct(\n    body=b"Example data",\n)\nprint(file.last_modified)',
      },
      java: {
        method: 'files().uploadDirect',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.files.File;\nimport com.hello_world_testingggg.api.models.files.FileUploadDirectParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        File file = client.files().uploadDirect("Example data");\n    }\n}',
      },
      kotlin: {
        method: 'files().uploadDirect',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.files.File\nimport com.hello_world_testingggg.api.models.files.FileUploadDirectParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val file: File = client.files().uploadDirect("Example data")\n}',
      },
      go: {
        method: 'client.Files.UploadDirect',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tfile, err := client.Files.UploadDirect(\n\t\tcontext.TODO(),\n\t\tio.Reader(bytes.NewBuffer([]byte("Example data"))),\n\t\thelloworldtestingggg.FileUploadDirectParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", file.LastModified)\n}\n',
      },
      ruby: {
        method: 'files.upload_direct',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nfile = hello_world_testingggg.files.upload_direct(body: StringIO.new("Example data"))\n\nputs(file)',
      },
      http: {
        example:
          "curl /api/v3/files/direct \\\n    -H 'Content-Type: application/octet-stream' \\\n    -H \"api_key: $API_KEY\" \\\n    -F 'body=@/path/to/body'",
      },
    },
  },
  {
    name: 'create_archive',
    endpoint: '/files/archive',
    httpMethod: 'post',
    summary: 'Create a file archive',
    description: 'Uploads multiple files and nested manifest metadata as multipart/form-data.',
    stainlessPath: '(resource) files > (method) create_archive',
    qualified: 'client.files.createArchive',
    params: ['files: string[];', 'manifest?: { name: string; labels?: string[]; preservePaths?: boolean; };'],
    response: "{ id: string; status: 'queued' | 'processing' | 'complete'; fileCount?: number; }",
    markdown:
      "## create_archive\n\n`client.files.createArchive(files: string[], manifest?: { name: string; labels?: string[]; preservePaths?: boolean; }): { id: string; status: 'queued' | 'processing' | 'complete'; fileCount?: number; }`\n\n**post** `/files/archive`\n\nUploads multiple files and nested manifest metadata as multipart/form-data.\n\n### Parameters\n\n- `files: string[]`\n  Files to include in the archive.\n\n- `manifest?: { name: string; labels?: string[]; preservePaths?: boolean; }`\n  - `name: string`\n  - `labels?: string[]`\n  - `preservePaths?: boolean`\n\n### Returns\n\n- `{ id: string; status: 'queued' | 'processing' | 'complete'; fileCount?: number; }`\n\n  - `id: string`\n  - `status: 'queued' | 'processing' | 'complete'`\n  - `fileCount?: number`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst archive = await client.files.createArchive({ files: [fs.createReadStream('path/to/file')] });\n\nconsole.log(archive);\n```",
    perLanguage: {
      typescript: {
        method: 'client.files.createArchive',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst archive = await client.files.createArchive({ files: [fs.createReadStream('path/to/file')] });\n\nconsole.log(archive.id);",
      },
      python: {
        method: 'files.create_archive',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\narchive = client.files.create_archive(\n    files=[b"Example data"],\n)\nprint(archive.id)',
      },
      java: {
        method: 'files().createArchive',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.files.Archive;\nimport com.hello_world_testingggg.api.models.files.FileCreateArchiveParams;\nimport java.io.ByteArrayInputStream;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        FileCreateArchiveParams params = FileCreateArchiveParams.builder()\n            .addFile(new ByteArrayInputStream("Example data".getBytes()))\n            .build();\n        Archive archive = client.files().createArchive(params);\n    }\n}',
      },
      kotlin: {
        method: 'files().createArchive',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.files.Archive\nimport com.hello_world_testingggg.api.models.files.FileCreateArchiveParams\nimport java.io.ByteArrayInputStream\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: FileCreateArchiveParams = FileCreateArchiveParams.builder()\n        .addFile("Example data".byteInputStream())\n        .build()\n    val archive: Archive = client.files().createArchive(params)\n}',
      },
      go: {
        method: 'client.Files.NewArchive',
        example:
          'package main\n\nimport (\n\t"bytes"\n\t"context"\n\t"fmt"\n\t"io"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tarchive, err := client.Files.NewArchive(context.TODO(), helloworldtestingggg.FileNewArchiveParams{\n\t\tFiles: helloworldtestingggg.F([]io.Reader{io.Reader(bytes.NewBuffer([]byte("Example data")))}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", archive.ID)\n}\n',
      },
      ruby: {
        method: 'files.create_archive',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\narchive = hello_world_testingggg.files.create_archive(files: [StringIO.new("Example data")])\n\nputs(archive)',
      },
      http: {
        example:
          'curl /api/v3/files/archive \\\n    -H \'Content-Type: multipart/form-data\' \\\n    -H "api_key: $API_KEY" \\\n    -F files=\'["Example data"]\'',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/profiles',
    httpMethod: 'post',
    summary: 'Create a profile',
    description:
      'Creates a pet owner profile with nested preferences, metadata maps, and compliance-only write fields.',
    stainlessPath: '(resource) profiles > (method) create',
    qualified: 'client.profiles.create',
    params: [
      'displayName: string;',
      'email?: string;',
      'governmentId?: string;',
      'metadata?: object;',
      'preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; };',
      'secretNote?: string;',
      'Idempotency-Key?: string;',
    ],
    response:
      '{ id: string; createdAt: string; displayName: string; updatedAt: string; version: number; auditTrail?: object; email?: string; legacyCode?: string; metadata?: object; phoneNumbers?: string[]; preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }; }',
    markdown:
      "## create\n\n`client.profiles.create(displayName: string, email?: string, governmentId?: string, metadata?: object, preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }, secretNote?: string, Idempotency-Key?: string): { id: string; createdAt: string; displayName: string; updatedAt: string; version: number; auditTrail?: object; email?: string; legacyCode?: string; metadata?: object; phoneNumbers?: string[]; preferences?: object; }`\n\n**post** `/profiles`\n\nCreates a pet owner profile with nested preferences, metadata maps, and compliance-only write fields.\n\n### Parameters\n\n- `displayName: string`\n\n- `email?: string`\n\n- `governmentId?: string`\n  Compliance identifier used only during profile creation.\n\n- `metadata?: object`\n\n- `preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }`\n  - `alerts?: object`\n  - `newsletter?: boolean`\n  - `scoreByRegion?: object`\n\n- `secretNote?: string`\n  Internal note that must not be emitted in profile responses.\n\n- `Idempotency-Key?: string`\n\n### Returns\n\n- `{ id: string; createdAt: string; displayName: string; updatedAt: string; version: number; auditTrail?: object; email?: string; legacyCode?: string; metadata?: object; phoneNumbers?: string[]; preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `displayName: string`\n  - `updatedAt: string`\n  - `version: number`\n  - `auditTrail?: object`\n  - `email?: string`\n  - `legacyCode?: string`\n  - `metadata?: object`\n  - `phoneNumbers?: string[]`\n  - `preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst profile = await client.profiles.create({ displayName: 'Ada Lovelace' });\n\nconsole.log(profile);\n```",
    perLanguage: {
      typescript: {
        method: 'client.profiles.create',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst profile = await client.profiles.create({\n  displayName: 'Ada Lovelace',\n  email: 'ada@example.com',\n  metadata: { crm_id: 'crm_123' },\n  preferences: {\n    newsletter: true,\n    alerts: { inventory: true },\n  },\n  secretNote: 'verified manually',\n});\n\nconsole.log(profile.id);",
      },
      python: {
        method: 'profiles.create',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nprofile = client.profiles.create(\n    display_name="Ada Lovelace",\n    email="ada@example.com",\n    metadata={\n        "crm_id": "crm_123"\n    },\n    preferences={\n        "newsletter": True,\n        "alerts": {\n            "inventory": True\n        },\n    },\n    secret_note="verified manually",\n)\nprint(profile.id)',
      },
      java: {
        method: 'profiles().create',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.profiles.Profile;\nimport com.hello_world_testingggg.api.models.profiles.ProfileCreateRequest;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        ProfileCreateRequest params = ProfileCreateRequest.builder()\n            .displayName("Ada Lovelace")\n            .build();\n        Profile profile = client.profiles().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'profiles().create',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.profiles.Profile\nimport com.hello_world_testingggg.api.models.profiles.ProfileCreateRequest\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: ProfileCreateRequest = ProfileCreateRequest.builder()\n        .displayName("Ada Lovelace")\n        .build()\n    val profile: Profile = client.profiles().create(params)\n}',
      },
      go: {
        method: 'client.Profiles.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprofile, err := client.Profiles.New(context.TODO(), helloworldtestingggg.ProfileNewParams{\n\t\tProfileCreateRequest: helloworldtestingggg.ProfileCreateRequestParam{\n\t\t\tDisplayName: helloworldtestingggg.F("Ada Lovelace"),\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", profile.ID)\n}\n',
      },
      ruby: {
        method: 'profiles.create',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nprofile = hello_world_testingggg.profiles.create(display_name: "Ada Lovelace")\n\nputs(profile)',
      },
      http: {
        example:
          'curl /api/v3/profiles \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $API_KEY" \\\n    -d \'{\n          "displayName": "Ada Lovelace",\n          "email": "ada@example.com",\n          "metadata": {\n            "crm_id": "crm_123"\n          },\n          "preferences": {\n            "alerts": {\n              "inventory": true\n            },\n            "newsletter": true\n          },\n          "secretNote": "verified manually"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/profiles/{profileId}',
    httpMethod: 'get',
    summary: 'Retrieve a profile',
    description: 'Returns a profile with read-only version fields and nullable contact preferences.',
    stainlessPath: '(resource) profiles > (method) retrieve',
    qualified: 'client.profiles.retrieve',
    params: ['profileId: string;'],
    response:
      '{ id: string; createdAt: string; displayName: string; updatedAt: string; version: number; auditTrail?: object; email?: string; legacyCode?: string; metadata?: object; phoneNumbers?: string[]; preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }; }',
    markdown:
      "## retrieve\n\n`client.profiles.retrieve(profileId: string): { id: string; createdAt: string; displayName: string; updatedAt: string; version: number; auditTrail?: object; email?: string; legacyCode?: string; metadata?: object; phoneNumbers?: string[]; preferences?: object; }`\n\n**get** `/profiles/{profileId}`\n\nReturns a profile with read-only version fields and nullable contact preferences.\n\n### Parameters\n\n- `profileId: string`\n\n### Returns\n\n- `{ id: string; createdAt: string; displayName: string; updatedAt: string; version: number; auditTrail?: object; email?: string; legacyCode?: string; metadata?: object; phoneNumbers?: string[]; preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `displayName: string`\n  - `updatedAt: string`\n  - `version: number`\n  - `auditTrail?: object`\n  - `email?: string`\n  - `legacyCode?: string`\n  - `metadata?: object`\n  - `phoneNumbers?: string[]`\n  - `preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst profile = await client.profiles.retrieve('profileId');\n\nconsole.log(profile);\n```",
    perLanguage: {
      typescript: {
        method: 'client.profiles.retrieve',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst profile = await client.profiles.retrieve('profileId');\n\nconsole.log(profile.id);",
      },
      python: {
        method: 'profiles.retrieve',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nprofile = client.profiles.retrieve(\n    "profileId",\n)\nprint(profile.id)',
      },
      java: {
        method: 'profiles().retrieve',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.profiles.Profile;\nimport com.hello_world_testingggg.api.models.profiles.ProfileRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        Profile profile = client.profiles().retrieve("profileId");\n    }\n}',
      },
      kotlin: {
        method: 'profiles().retrieve',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.profiles.Profile\nimport com.hello_world_testingggg.api.models.profiles.ProfileRetrieveParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val profile: Profile = client.profiles().retrieve("profileId")\n}',
      },
      go: {
        method: 'client.Profiles.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprofile, err := client.Profiles.Get(context.TODO(), "profileId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", profile.ID)\n}\n',
      },
      ruby: {
        method: 'profiles.retrieve',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nprofile = hello_world_testingggg.profiles.retrieve("profileId")\n\nputs(profile)',
      },
      http: {
        example: 'curl /api/v3/profiles/$PROFILE_ID \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/profiles/{profileId}',
    httpMethod: 'patch',
    summary: 'Update a profile',
    description: 'Updates either public profile details or archival state.',
    stainlessPath: '(resource) profiles > (method) update',
    qualified: 'client.profiles.update',
    params: [
      'profileId: string;',
      "body: { displayName?: string; email?: string; metadata?: object; preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }; } | { archivedAt: string; archivedReason: 'duplicate' | 'requested' | 'policy_violation'; };",
      'Idempotency-Key?: string;',
    ],
    response:
      '{ id: string; createdAt: string; displayName: string; updatedAt: string; version: number; auditTrail?: object; email?: string; legacyCode?: string; metadata?: object; phoneNumbers?: string[]; preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }; }',
    perLanguage: {
      typescript: {
        method: 'client.profiles.update',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst profile = await client.profiles.update('profileId');\n\nconsole.log(profile.id);",
      },
      python: {
        method: 'profiles.update',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nprofile = client.profiles.update(\n    profile_id="profileId",\n)\nprint(profile.id)',
      },
      java: {
        method: 'profiles().update',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.profiles.Profile;\nimport com.hello_world_testingggg.api.models.profiles.ProfileUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        ProfileUpdateParams params = ProfileUpdateParams.builder()\n            .profileId("profileId")\n            .body(ProfileUpdateParams.Body.ProfileDetailsUpdate.builder().build())\n            .build();\n        Profile profile = client.profiles().update(params);\n    }\n}',
      },
      kotlin: {
        method: 'profiles().update',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.profiles.Profile\nimport com.hello_world_testingggg.api.models.profiles.ProfileUpdateParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: ProfileUpdateParams = ProfileUpdateParams.builder()\n        .profileId("profileId")\n        .body(ProfileUpdateParams.Body.ProfileDetailsUpdate.builder().build())\n        .build()\n    val profile: Profile = client.profiles().update(params)\n}',
      },
      go: {
        method: 'client.Profiles.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprofile, err := client.Profiles.Update(\n\t\tcontext.TODO(),\n\t\t"profileId",\n\t\thelloworldtestingggg.ProfileUpdateParams{\n\t\t\tBody: helloworldtestingggg.ProfileUpdateParamsBodyProfileDetailsUpdate{},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", profile.ID)\n}\n',
      },
      ruby: {
        method: 'profiles.update',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nprofile = hello_world_testingggg.profiles.update("profileId", body: {})\n\nputs(profile)',
      },
      http: {
        example:
          "curl /api/v3/profiles/$PROFILE_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"api_key: $API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'legacy_search',
    endpoint: '/profiles/legacy-search',
    httpMethod: 'get',
    summary: 'Legacy profile search',
    description: 'Deprecated profile search endpoint kept for compatibility.',
    stainlessPath: '(resource) profiles > (method) legacy_search',
    qualified: 'client.profiles.legacySearch',
    params: ['include_archived?: boolean;', 'q?: string;'],
    response:
      '{ id: string; createdAt: string; displayName: string; updatedAt: string; version: number; auditTrail?: object; email?: string; legacyCode?: string; metadata?: object; phoneNumbers?: string[]; preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }; }[]',
    markdown:
      "## legacy_search\n\n`client.profiles.legacySearch(include_archived?: boolean, q?: string): object[]`\n\n**get** `/profiles/legacy-search`\n\nDeprecated profile search endpoint kept for compatibility.\n\n### Parameters\n\n- `include_archived?: boolean`\n  Whether archived profiles should be included.\n\n- `q?: string`\n  Legacy free-text search string.\n\n### Returns\n\n- `{ id: string; createdAt: string; displayName: string; updatedAt: string; version: number; auditTrail?: object; email?: string; legacyCode?: string; metadata?: object; phoneNumbers?: string[]; preferences?: { alerts?: object; newsletter?: boolean; scoreByRegion?: object; }; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst profiles = await client.profiles.legacySearch();\n\nconsole.log(profiles);\n```",
    perLanguage: {
      typescript: {
        method: 'client.profiles.legacySearch',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst profiles = await client.profiles.legacySearch();\n\nconsole.log(profiles);",
      },
      python: {
        method: 'profiles.legacy_search',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nprofiles = client.profiles.legacy_search()\nprint(profiles)',
      },
      java: {
        method: 'profiles().legacySearch',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.profiles.Profile;\nimport com.hello_world_testingggg.api.models.profiles.ProfileLegacySearchParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        List<Profile> profiles = client.profiles().legacySearch();\n    }\n}',
      },
      kotlin: {
        method: 'profiles().legacySearch',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.profiles.Profile\nimport com.hello_world_testingggg.api.models.profiles.ProfileLegacySearchParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val profiles: List<Profile> = client.profiles().legacySearch()\n}',
      },
      go: {
        method: 'client.Profiles.LegacySearch',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tprofiles, err := client.Profiles.LegacySearch(context.TODO(), helloworldtestingggg.ProfileLegacySearchParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", profiles)\n}\n',
      },
      ruby: {
        method: 'profiles.legacy_search',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nprofiles = hello_world_testingggg.profiles.legacy_search\n\nputs(profiles)',
      },
      http: {
        example: 'curl /api/v3/profiles/legacy-search \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/adoptions/applications',
    httpMethod: 'post',
    summary: 'Submit an adoption application',
    description: 'Submits an adoption application for an individual or an organization applicant.',
    stainlessPath: '(resource) adoptions > (method) create',
    qualified: 'client.adoptions.create',
    params: [
      "{ applicant_type: 'individual'; name: string; address?: { city?: string; geo?: { latitude: number; longitude: number; }; state?: string; street?: string; zip?: string; }; age?: number; email?: string; } | { applicant_type: 'organization'; name: string; shelter?: { name: string; address?: { city?: string; geo?: object; state?: string; street?: string; zip?: string; }; contact?: { primary?: { availability?: object; name?: string; phone?: string; }; }; location?: { latitude: number; longitude: number; }; }; taxId?: string; };",
    ],
    response:
      "{ id: string; applicant: { applicant_type: 'individual'; name: string; address?: address; age?: number; email?: string; } | { applicant_type: 'organization'; name: string; shelter?: object; taxId?: string; }; status: 'received' | 'under_review' | 'approved' | 'rejected'; submittedAt: string; decision?: { approvedAt: string; outcome: 'approved'; conditions?: string[]; } | { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; } | { escalatedTo: object; outcome: 'escalated'; reviewAfter?: string; } | { outcome: 'withdrawn' | 'expired'; withdrawnBy: 'applicant' | 'shelter' | 'system'; withdrawnAt?: string; }; fee?: object; history?: { changedAt: string; status: 'received' | 'under_review' | 'approved' | 'rejected'; note?: string; }[]; latestRejection?: { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; }; pet?: object; }",
    perLanguage: {
      typescript: {
        method: 'client.adoptions.create',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst application = await client.adoptions.create({ applicant_type: 'individual', name: 'name' });\n\nconsole.log(application.id);",
      },
      python: {
        method: 'adoptions.create',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\napplication = client.adoptions.create(\n    applicant_type="individual",\n    name="name",\n)\nprint(application.id)',
      },
      java: {
        method: 'adoptions().create',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.adoptions.AdoptionCreateParams;\nimport com.hello_world_testingggg.api.models.adoptions.Application;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        AdoptionCreateParams.Body.Individual params = AdoptionCreateParams.Body.Individual.builder()\n            .name("name")\n            .build();\n        Application application = client.adoptions().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'adoptions().create',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.adoptions.AdoptionCreateParams\nimport com.hello_world_testingggg.api.models.adoptions.Application\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: AdoptionCreateParams.Body.Individual = AdoptionCreateParams.Body.Individual.builder()\n        .name("name")\n        .build()\n    val application: Application = client.adoptions().create(params)\n}',
      },
      go: {
        method: 'client.Adoptions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapplication, err := client.Adoptions.New(context.TODO(), helloworldtestingggg.AdoptionNewParams{\n\t\tBody: helloworldtestingggg.AdoptionNewParamsBodyIndividualApplicant{\n\t\t\tApplicantType: helloworldtestingggg.F(helloworldtestingggg.AdoptionNewParamsBodyIndividualApplicantApplicantTypeIndividual),\n\t\t\tName:          helloworldtestingggg.F("name"),\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", application.ID)\n}\n',
      },
      ruby: {
        method: 'adoptions.create',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\napplication = hello_world_testingggg.adoptions.create(body: {applicant_type: :individual, name: "name"})\n\nputs(application)',
      },
      http: {
        example:
          'curl /api/v3/adoptions/applications \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $API_KEY" \\\n    -d \'{\n          "applicant_type": "individual",\n          "name": "name"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/adoptions/applications/{applicationId}',
    httpMethod: 'get',
    summary: 'Retrieve an adoption application',
    description: 'Returns a single adoption application.',
    stainlessPath: '(resource) adoptions > (method) retrieve',
    qualified: 'client.adoptions.retrieve',
    params: ['applicationId: string;'],
    response:
      "{ id: string; applicant: { applicant_type: 'individual'; name: string; address?: address; age?: number; email?: string; } | { applicant_type: 'organization'; name: string; shelter?: object; taxId?: string; }; status: 'received' | 'under_review' | 'approved' | 'rejected'; submittedAt: string; decision?: { approvedAt: string; outcome: 'approved'; conditions?: string[]; } | { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; } | { escalatedTo: object; outcome: 'escalated'; reviewAfter?: string; } | { outcome: 'withdrawn' | 'expired'; withdrawnBy: 'applicant' | 'shelter' | 'system'; withdrawnAt?: string; }; fee?: object; history?: { changedAt: string; status: 'received' | 'under_review' | 'approved' | 'rejected'; note?: string; }[]; latestRejection?: { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; }; pet?: object; }",
    markdown:
      "## retrieve\n\n`client.adoptions.retrieve(applicationId: string): { id: string; applicant: object | object; status: 'received' | 'under_review' | 'approved' | 'rejected'; submittedAt: string; decision?: object | object | object | object; fee?: money; history?: object[]; latestRejection?: object; pet?: pet; }`\n\n**get** `/adoptions/applications/{applicationId}`\n\nReturns a single adoption application.\n\n### Parameters\n\n- `applicationId: string`\n\n### Returns\n\n- `{ id: string; applicant: { applicant_type: 'individual'; name: string; address?: object; age?: number; email?: string; } | { applicant_type: 'organization'; name: string; shelter?: { name: string; address?: address; contact?: object; location?: object; }; taxId?: string; }; status: 'received' | 'under_review' | 'approved' | 'rejected'; submittedAt: string; decision?: { approvedAt: string; outcome: 'approved'; conditions?: string[]; } | { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; } | { escalatedTo: { team: string; contact?: object; }; outcome: 'escalated'; reviewAfter?: string; } | { outcome: 'withdrawn' | 'expired'; withdrawnBy: 'applicant' | 'shelter' | 'system'; withdrawnAt?: string; }; fee?: { amount: number; currency: string; }; history?: { changedAt: string; status: 'received' | 'under_review' | 'approved' | 'rejected'; note?: string; }[]; latestRejection?: { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; }; pet?: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }; }`\n\n  - `id: string`\n  - `applicant: { applicant_type: 'individual'; name: string; address?: { city?: string; geo?: { latitude: number; longitude: number; }; state?: string; street?: string; zip?: string; }; age?: number; email?: string; } | { applicant_type: 'organization'; name: string; shelter?: { name: string; address?: { city?: string; geo?: object; state?: string; street?: string; zip?: string; }; contact?: { primary?: { availability?: object; name?: string; phone?: string; }; }; location?: { latitude: number; longitude: number; }; }; taxId?: string; }`\n  - `status: 'received' | 'under_review' | 'approved' | 'rejected'`\n  - `submittedAt: string`\n  - `decision?: { approvedAt: string; outcome: 'approved'; conditions?: string[]; } | { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; } | { escalatedTo: { team: string; contact?: { email?: string; hours?: string; }; }; outcome: 'escalated'; reviewAfter?: string; } | { outcome: 'withdrawn' | 'expired'; withdrawnBy: 'applicant' | 'shelter' | 'system'; withdrawnAt?: string; }`\n  - `fee?: { amount: number; currency: string; }`\n  - `history?: { changedAt: string; status: 'received' | 'under_review' | 'approved' | 'rejected'; note?: string; }[]`\n  - `latestRejection?: { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; }`\n  - `pet?: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: { id?: number; name?: string; subcategories?: object[]; }; microchipId?: string | number; status?: 'available' | 'pending' | 'sold'; tags?: { id?: number; name?: string; }[]; }`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst application = await client.adoptions.retrieve('applicationId');\n\nconsole.log(application);\n```",
    perLanguage: {
      typescript: {
        method: 'client.adoptions.retrieve',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst application = await client.adoptions.retrieve('applicationId');\n\nconsole.log(application.id);",
      },
      python: {
        method: 'adoptions.retrieve',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\napplication = client.adoptions.retrieve(\n    "applicationId",\n)\nprint(application.id)',
      },
      java: {
        method: 'adoptions().retrieve',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.adoptions.AdoptionRetrieveParams;\nimport com.hello_world_testingggg.api.models.adoptions.Application;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        Application application = client.adoptions().retrieve("applicationId");\n    }\n}',
      },
      kotlin: {
        method: 'adoptions().retrieve',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.adoptions.AdoptionRetrieveParams\nimport com.hello_world_testingggg.api.models.adoptions.Application\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val application: Application = client.adoptions().retrieve("applicationId")\n}',
      },
      go: {
        method: 'client.Adoptions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tapplication, err := client.Adoptions.Get(context.TODO(), "applicationId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", application.ID)\n}\n',
      },
      ruby: {
        method: 'adoptions.retrieve',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\napplication = hello_world_testingggg.adoptions.retrieve("applicationId")\n\nputs(application)',
      },
      http: {
        example: 'curl /api/v3/adoptions/applications/$APPLICATION_ID \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'retrieve_decision',
    endpoint: '/adoptions/applications/{applicationId}/decision',
    httpMethod: 'get',
    summary: 'Retrieve an application decision',
    description:
      'Returns the decision for an application. The decision shape depends on the outcome and carries no discriminator mapping.',
    stainlessPath: '(resource) adoptions > (method) retrieve_decision',
    qualified: 'client.adoptions.retrieveDecision',
    params: ['applicationId: string;'],
    response:
      "{ approvedAt: string; outcome: 'approved'; conditions?: string[]; } | { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; } | { escalatedTo: { team: string; contact?: { email?: string; hours?: string; }; }; outcome: 'escalated'; reviewAfter?: string; } | { outcome: 'withdrawn' | 'expired'; withdrawnBy: 'applicant' | 'shelter' | 'system'; withdrawnAt?: string; }",
    markdown:
      "## retrieve_decision\n\n`client.adoptions.retrieveDecision(applicationId: string): { approvedAt: string; outcome: 'approved'; conditions?: string[]; } | { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; } | { escalatedTo: object; outcome: 'escalated'; reviewAfter?: string; } | { outcome: 'withdrawn' | 'expired'; withdrawnBy: 'applicant' | 'shelter' | 'system'; withdrawnAt?: string; }`\n\n**get** `/adoptions/applications/{applicationId}/decision`\n\nReturns the decision for an application. The decision shape depends on the outcome and carries no discriminator mapping.\n\n### Parameters\n\n- `applicationId: string`\n\n### Returns\n\n- `{ approvedAt: string; outcome: 'approved'; conditions?: string[]; } | { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; } | { escalatedTo: { team: string; contact?: { email?: string; hours?: string; }; }; outcome: 'escalated'; reviewAfter?: string; } | { outcome: 'withdrawn' | 'expired'; withdrawnBy: 'applicant' | 'shelter' | 'system'; withdrawnAt?: string; }`\n  The decision for an application; the shape depends on the outcome.\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.adoptions.retrieveDecision('applicationId');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.adoptions.retrieveDecision',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.adoptions.retrieveDecision('applicationId');\n\nconsole.log(response);",
      },
      python: {
        method: 'adoptions.retrieve_decision',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.adoptions.retrieve_decision(\n    "applicationId",\n)\nprint(response)',
      },
      java: {
        method: 'adoptions().retrieveDecision',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.adoptions.AdoptionRetrieveDecisionParams;\nimport com.hello_world_testingggg.api.models.adoptions.AdoptionRetrieveDecisionResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        AdoptionRetrieveDecisionResponse response = client.adoptions().retrieveDecision("applicationId");\n    }\n}',
      },
      kotlin: {
        method: 'adoptions().retrieveDecision',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.adoptions.AdoptionRetrieveDecisionParams\nimport com.hello_world_testingggg.api.models.adoptions.AdoptionRetrieveDecisionResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: AdoptionRetrieveDecisionResponse = client.adoptions().retrieveDecision("applicationId")\n}',
      },
      go: {
        method: 'client.Adoptions.GetDecision',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Adoptions.GetDecision(context.TODO(), "applicationId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'adoptions.retrieve_decision',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.adoptions.retrieve_decision("applicationId")\n\nputs(response)',
      },
      http: {
        example:
          'curl /api/v3/adoptions/applications/$APPLICATION_ID/decision \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/adoptions/policies',
    httpMethod: 'get',
    summary: 'List adoption policies',
    description: 'Returns a cursor-paginated list of adoption policies.',
    stainlessPath: '(resource) adoptions.policies > (method) list',
    qualified: 'client.adoptions.policies.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; createdAt: string; name: string; rules: { attribute: rule_attribute; operation: string; value?: condition_value; }[]; status: 'draft' | 'active' | 'archived'; escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: object[]; }; feeCap?: { amount: number; currency: string; }; notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }; regionalOverrides?: object; }",
    markdown:
      "## list\n\n`client.adoptions.policies.list(cursor?: string, limit?: number): { id: string; createdAt: string; name: string; rules: adoption_rule[]; status: 'draft' | 'active' | 'archived'; escalation?: object; feeCap?: money; notificationTarget?: string | object; regionalOverrides?: object; }`\n\n**get** `/adoptions/policies`\n\nReturns a cursor-paginated list of adoption policies.\n\n### Parameters\n\n- `cursor?: string`\n  Cursor from a previous response used to fetch the next page.\n\n- `limit?: number`\n  Maximum number of policies to return.\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; rules: { attribute: rule_attribute; operation: string; value?: condition_value; }[]; status: 'draft' | 'active' | 'archived'; escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: object[]; }; feeCap?: { amount: number; currency: string; }; notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }; regionalOverrides?: object; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n  - `rules: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[]`\n  - `status: 'draft' | 'active' | 'archived'`\n  - `escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[]; }`\n  - `feeCap?: { amount: number; currency: string; }`\n  - `notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }`\n  - `regionalOverrides?: object`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\n// Automatically fetches more pages as needed.\nfor await (const policy of client.adoptions.policies.list()) {\n  console.log(policy);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.adoptions.policies.list',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const policy of client.adoptions.policies.list()) {\n  console.log(policy.id);\n}",
      },
      python: {
        method: 'adoptions.policies.list',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\npage = client.adoptions.policies.list()\npage = page.items[0]\nprint(page.id)',
      },
      java: {
        method: 'adoptions().policies().list',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.adoptions.policies.PolicyListPage;\nimport com.hello_world_testingggg.api.models.adoptions.policies.PolicyListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PolicyListPage page = client.adoptions().policies().list();\n    }\n}',
      },
      kotlin: {
        method: 'adoptions().policies().list',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.adoptions.policies.PolicyListPage\nimport com.hello_world_testingggg.api.models.adoptions.policies.PolicyListParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val page: PolicyListPage = client.adoptions().policies().list()\n}',
      },
      go: {
        method: 'client.Adoptions.Policies.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Adoptions.Policies.List(context.TODO(), helloworldtestingggg.AdoptionPolicyListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'adoptions.policies.list',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\npage = hello_world_testingggg.adoptions.policies.list\n\nputs(page)',
      },
      http: {
        example: 'curl /api/v3/adoptions/policies \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/adoptions/policies',
    httpMethod: 'post',
    summary: 'Create an adoption policy',
    description:
      'Creates an adoption policy from a set of eligibility rules, regional overrides, and an optional escalation rule group.',
    stainlessPath: '(resource) adoptions.policies > (method) create',
    qualified: 'client.adoptions.policies.create',
    params: [
      'name: string;',
      "rules: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[];",
      "escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[]; };",
      'feeCap?: { amount: number; currency: string; };',
      "notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; };",
      'regionalOverrides?: object;',
    ],
    response:
      "{ id: string; createdAt: string; name: string; rules: { attribute: rule_attribute; operation: string; value?: condition_value; }[]; status: 'draft' | 'active' | 'archived'; escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: object[]; }; feeCap?: { amount: number; currency: string; }; notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }; regionalOverrides?: object; }",
    markdown:
      "## create\n\n`client.adoptions.policies.create(name: string, rules: { attribute: rule_attribute; operation: string; value?: condition_value; }[], escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: object[]; }, feeCap?: { amount: number; currency: string; }, notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }, regionalOverrides?: object): { id: string; createdAt: string; name: string; rules: adoption_rule[]; status: 'draft' | 'active' | 'archived'; escalation?: object; feeCap?: money; notificationTarget?: string | object; regionalOverrides?: object; }`\n\n**post** `/adoptions/policies`\n\nCreates an adoption policy from a set of eligibility rules, regional overrides, and an optional escalation rule group.\n\n### Parameters\n\n- `name: string`\n\n- `rules: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[]`\n\n- `escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[]; }`\n  - `operator: 'ALL' | 'ANY'`\n  - `groups?: object[]`\n    Nested rule groups; groups can recurse arbitrarily deep.\n  - `rules?: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[]`\n\n- `feeCap?: { amount: number; currency: string; }`\n  - `amount: number`\n    Amount in minor currency units (e.g. cents).\n  - `currency: string`\n    ISO 4217 currency code.\n\n- `notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }`\n  Where policy decisions are delivered: a plain email address or a webhook sink.\n\n- `regionalOverrides?: object`\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; rules: { attribute: rule_attribute; operation: string; value?: condition_value; }[]; status: 'draft' | 'active' | 'archived'; escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: object[]; }; feeCap?: { amount: number; currency: string; }; notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }; regionalOverrides?: object; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n  - `rules: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[]`\n  - `status: 'draft' | 'active' | 'archived'`\n  - `escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[]; }`\n  - `feeCap?: { amount: number; currency: string; }`\n  - `notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }`\n  - `regionalOverrides?: object`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst policy = await client.adoptions.policies.create({ name: 'name', rules: [{ attribute: 'PET_STATUS', operation: 'IS_ONE_OF' }] });\n\nconsole.log(policy);\n```",
    perLanguage: {
      typescript: {
        method: 'client.adoptions.policies.create',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst policy = await client.adoptions.policies.create({\n  name: 'name',\n  rules: [{ attribute: 'PET_STATUS', operation: 'IS_ONE_OF' }],\n});\n\nconsole.log(policy.id);",
      },
      python: {
        method: 'adoptions.policies.create',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\npolicy = client.adoptions.policies.create(\n    name="name",\n    rules=[{\n        "attribute": "PET_STATUS",\n        "operation": "IS_ONE_OF",\n    }],\n)\nprint(policy.id)',
      },
      java: {
        method: 'adoptions().policies().create',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.adoptions.policies.AdoptionRule;\nimport com.hello_world_testingggg.api.models.adoptions.policies.Policy;\nimport com.hello_world_testingggg.api.models.adoptions.policies.PolicyCreateParams;\nimport com.hello_world_testingggg.api.models.adoptions.policies.RuleAttribute;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PolicyCreateParams params = PolicyCreateParams.builder()\n            .name("name")\n            .addRule(AdoptionRule.builder()\n                .attribute(RuleAttribute.PET_STATUS)\n                .operation(AdoptionRule.Operation.IS_ONE_OF)\n                .build())\n            .build();\n        Policy policy = client.adoptions().policies().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'adoptions().policies().create',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.adoptions.policies.AdoptionRule\nimport com.hello_world_testingggg.api.models.adoptions.policies.Policy\nimport com.hello_world_testingggg.api.models.adoptions.policies.PolicyCreateParams\nimport com.hello_world_testingggg.api.models.adoptions.policies.RuleAttribute\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: PolicyCreateParams = PolicyCreateParams.builder()\n        .name("name")\n        .addRule(AdoptionRule.builder()\n            .attribute(RuleAttribute.PET_STATUS)\n            .operation(AdoptionRule.Operation.IS_ONE_OF)\n            .build())\n        .build()\n    val policy: Policy = client.adoptions().policies().create(params)\n}',
      },
      go: {
        method: 'client.Adoptions.Policies.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpolicy, err := client.Adoptions.Policies.New(context.TODO(), helloworldtestingggg.AdoptionPolicyNewParams{\n\t\tName: helloworldtestingggg.F("name"),\n\t\tRules: helloworldtestingggg.F([]helloworldtestingggg.AdoptionRuleParam{{\n\t\t\tAttribute: helloworldtestingggg.F(helloworldtestingggg.RuleAttributePetStatus),\n\t\t\tOperation: helloworldtestingggg.F(helloworldtestingggg.AdoptionRuleOperationIsOneOf),\n\t\t}}),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", policy.ID)\n}\n',
      },
      ruby: {
        method: 'adoptions.policies.create',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\npolicy = hello_world_testingggg.adoptions.policies.create(\n  name: "name",\n  rules: [{attribute: :PET_STATUS, operation: :IS_ONE_OF}]\n)\n\nputs(policy)',
      },
      http: {
        example:
          'curl /api/v3/adoptions/policies \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $API_KEY" \\\n    -d \'{\n          "name": "name",\n          "rules": [\n            {\n              "attribute": "PET_STATUS",\n              "operation": "IS_ONE_OF"\n            }\n          ]\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/adoptions/policies/{policyId}',
    httpMethod: 'get',
    summary: 'Retrieve an adoption policy',
    description: 'Returns a single adoption policy.',
    stainlessPath: '(resource) adoptions.policies > (method) retrieve',
    qualified: 'client.adoptions.policies.retrieve',
    params: ['policyId: string;'],
    response:
      "{ id: string; createdAt: string; name: string; rules: { attribute: rule_attribute; operation: string; value?: condition_value; }[]; status: 'draft' | 'active' | 'archived'; escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: object[]; }; feeCap?: { amount: number; currency: string; }; notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }; regionalOverrides?: object; }",
    markdown:
      "## retrieve\n\n`client.adoptions.policies.retrieve(policyId: string): { id: string; createdAt: string; name: string; rules: adoption_rule[]; status: 'draft' | 'active' | 'archived'; escalation?: object; feeCap?: money; notificationTarget?: string | object; regionalOverrides?: object; }`\n\n**get** `/adoptions/policies/{policyId}`\n\nReturns a single adoption policy.\n\n### Parameters\n\n- `policyId: string`\n\n### Returns\n\n- `{ id: string; createdAt: string; name: string; rules: { attribute: rule_attribute; operation: string; value?: condition_value; }[]; status: 'draft' | 'active' | 'archived'; escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: object[]; }; feeCap?: { amount: number; currency: string; }; notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }; regionalOverrides?: object; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `name: string`\n  - `rules: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[]`\n  - `status: 'draft' | 'active' | 'archived'`\n  - `escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: { attribute: 'PET_STATUS' | 'SPECIES' | 'ADOPTER_AGE' | 'REGION' | 'PRIOR_ADOPTIONS' | 'APPLICATION_DATE'; operation: string; value?: string | number | number | string[] | string; }[]; }`\n  - `feeCap?: { amount: number; currency: string; }`\n  - `notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }`\n  - `regionalOverrides?: object`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst policy = await client.adoptions.policies.retrieve('policyId');\n\nconsole.log(policy);\n```",
    perLanguage: {
      typescript: {
        method: 'client.adoptions.policies.retrieve',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst policy = await client.adoptions.policies.retrieve('policyId');\n\nconsole.log(policy.id);",
      },
      python: {
        method: 'adoptions.policies.retrieve',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\npolicy = client.adoptions.policies.retrieve(\n    "policyId",\n)\nprint(policy.id)',
      },
      java: {
        method: 'adoptions().policies().retrieve',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.adoptions.policies.Policy;\nimport com.hello_world_testingggg.api.models.adoptions.policies.PolicyRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        Policy policy = client.adoptions().policies().retrieve("policyId");\n    }\n}',
      },
      kotlin: {
        method: 'adoptions().policies().retrieve',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.adoptions.policies.Policy\nimport com.hello_world_testingggg.api.models.adoptions.policies.PolicyRetrieveParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val policy: Policy = client.adoptions().policies().retrieve("policyId")\n}',
      },
      go: {
        method: 'client.Adoptions.Policies.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpolicy, err := client.Adoptions.Policies.Get(context.TODO(), "policyId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", policy.ID)\n}\n',
      },
      ruby: {
        method: 'adoptions.policies.retrieve',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\npolicy = hello_world_testingggg.adoptions.policies.retrieve("policyId")\n\nputs(policy)',
      },
      http: {
        example: 'curl /api/v3/adoptions/policies/$POLICY_ID \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/adoptions/policies/{policyId}',
    httpMethod: 'patch',
    summary: 'Update an adoption policy',
    description: 'Updates either the policy details or its lifecycle state.',
    stainlessPath: '(resource) adoptions.policies > (method) update',
    qualified: 'client.adoptions.policies.update',
    params: [
      'policyId: string;',
      "body: { escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: { attribute: rule_attribute; operation: string; value?: condition_value; }[]; }; name?: string; notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }; } | { actor: string; status: 'active' | 'archived'; actedAt?: string; reason?: string; };",
    ],
    response:
      "{ id: string; createdAt: string; name: string; rules: { attribute: rule_attribute; operation: string; value?: condition_value; }[]; status: 'draft' | 'active' | 'archived'; escalation?: { operator: 'ALL' | 'ANY'; groups?: object[]; rules?: object[]; }; feeCap?: { amount: number; currency: string; }; notificationTarget?: string | { url: string; events?: 'approved' | 'rejected' | 'escalated'[]; secret?: string; }; regionalOverrides?: object; }",
    perLanguage: {
      typescript: {
        method: 'client.adoptions.policies.update',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst policy = await client.adoptions.policies.update('policyId');\n\nconsole.log(policy.id);",
      },
      python: {
        method: 'adoptions.policies.update',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\npolicy = client.adoptions.policies.update(\n    policy_id="policyId",\n)\nprint(policy.id)',
      },
      java: {
        method: 'adoptions().policies().update',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.adoptions.policies.Policy;\nimport com.hello_world_testingggg.api.models.adoptions.policies.PolicyUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PolicyUpdateParams params = PolicyUpdateParams.builder()\n            .policyId("policyId")\n            .body(PolicyUpdateParams.Body.AdoptionPolicyDetailsUpdate.builder().build())\n            .build();\n        Policy policy = client.adoptions().policies().update(params);\n    }\n}',
      },
      kotlin: {
        method: 'adoptions().policies().update',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.adoptions.policies.Policy\nimport com.hello_world_testingggg.api.models.adoptions.policies.PolicyUpdateParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: PolicyUpdateParams = PolicyUpdateParams.builder()\n        .policyId("policyId")\n        .body(PolicyUpdateParams.Body.AdoptionPolicyDetailsUpdate.builder().build())\n        .build()\n    val policy: Policy = client.adoptions().policies().update(params)\n}',
      },
      go: {
        method: 'client.Adoptions.Policies.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpolicy, err := client.Adoptions.Policies.Update(\n\t\tcontext.TODO(),\n\t\t"policyId",\n\t\thelloworldtestingggg.AdoptionPolicyUpdateParams{\n\t\t\tBody: helloworldtestingggg.AdoptionPolicyUpdateParamsBodyAdoptionPolicyDetailsUpdate{},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", policy.ID)\n}\n',
      },
      ruby: {
        method: 'adoptions.policies.update',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\npolicy = hello_world_testingggg.adoptions.policies.update("policyId", body: {})\n\nputs(policy)',
      },
      http: {
        example:
          "curl /api/v3/adoptions/policies/$POLICY_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"api_key: $API_KEY\" \\\n    -d '{}'",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/placements',
    httpMethod: 'get',
    summary: 'List placements',
    description: 'Returns a cursor-paginated list of placements.',
    stainlessPath: '(resource) placements > (method) list',
    qualified: 'client.placements.list',
    params: ['cursor?: string;', 'limit?: number;'],
    response:
      "{ id: string; application: object; createdAt: string; status: 'pending' | 'active' | 'completed' | 'disrupted'; activity?: { id: string; leg: transfer_leg; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: object; note?: string; record?: vaccination_record; } | { id: string; occurredAt: string; severity: number | object; type: 'disruption'; note?: string; } | { body: string; kind: 'note'; } | { adoptedAt: string; kind: 'adopted'; } | { kind: 'returned'; reason: string; }[]; events?: object | object | object[]; followUpAfter?: string; logistics?: { delivery?: transfer_leg; handler?: object; pickup?: transfer_leg; }; medicalClearance?: object; }",
    markdown:
      "## list\n\n`client.placements.list(cursor?: string, limit?: number): { id: string; application: application; createdAt: string; status: 'pending' | 'active' | 'completed' | 'disrupted'; activity?: object | object | object | object | object | object[]; events?: placement_event[]; followUpAfter?: string; logistics?: object; medicalClearance?: medical_summary; }`\n\n**get** `/placements`\n\nReturns a cursor-paginated list of placements.\n\n### Parameters\n\n- `cursor?: string`\n  Cursor from a previous response used to fetch the next page.\n\n- `limit?: number`\n  Maximum number of placements to return.\n\n### Returns\n\n- `{ id: string; application: { id: string; applicant: object | object; status: 'received' | 'under_review' | 'approved' | 'rejected'; submittedAt: string; decision?: object | object | object | object; fee?: money; history?: object[]; latestRejection?: object; pet?: pet; }; createdAt: string; status: 'pending' | 'active' | 'completed' | 'disrupted'; activity?: { id: string; leg: object; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: object; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; } | { body: string; kind: 'note'; } | { adoptedAt: string; kind: 'adopted'; } | { kind: 'returned'; reason: string; }[]; events?: { id: string; leg: transfer_leg; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: object; note?: string; record?: vaccination_record; } | { id: string; occurredAt: string; severity: number | object; type: 'disruption'; note?: string; }[]; followUpAfter?: string; logistics?: { delivery?: object; handler?: { certification?: object; name?: string; }; pickup?: object; }; medicalClearance?: { petId: number; audit?: object; conditions?: object[]; vaccinations?: vaccination_record[]; }; }`\n  A post-adoption placement tracking the pet's transition to its new home.\n\n  - `id: string`\n  - `application: { id: string; applicant: { applicant_type: 'individual'; name: string; address?: object; age?: number; email?: string; } | { applicant_type: 'organization'; name: string; shelter?: { name: string; address?: address; contact?: object; location?: object; }; taxId?: string; }; status: 'received' | 'under_review' | 'approved' | 'rejected'; submittedAt: string; decision?: { approvedAt: string; outcome: 'approved'; conditions?: string[]; } | { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; } | { escalatedTo: { team: string; contact?: object; }; outcome: 'escalated'; reviewAfter?: string; } | { outcome: 'withdrawn' | 'expired'; withdrawnBy: 'applicant' | 'shelter' | 'system'; withdrawnAt?: string; }; fee?: { amount: number; currency: string; }; history?: { changedAt: string; status: 'received' | 'under_review' | 'approved' | 'rejected'; note?: string; }[]; latestRejection?: { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; }; pet?: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }; }`\n  - `createdAt: string`\n  - `status: 'pending' | 'active' | 'completed' | 'disrupted'`\n  - `activity?: { id: string; leg: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: { id: string; administeredAt: string; vaccine: string; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; boosterSchedule?: { due: string; completed?: boolean; dose?: number | string; }[]; veterinarian?: { license?: object; name?: string; }; }; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; } | { body: string; kind: 'note'; } | { adoptedAt: string; kind: 'adopted'; } | { kind: 'returned'; reason: string; }[]`\n  - `events?: { id: string; leg: { location: address; contact?: object; cost?: money; window?: object; }; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: { id: string; administeredAt: string; vaccine: string; audit?: object; boosterSchedule?: object[]; veterinarian?: object; }; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; }[]`\n  - `followUpAfter?: string`\n  - `logistics?: { delivery?: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; handler?: { certification?: { level: 'standard' | 'advanced' | 'specialist'; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; issuedBy?: string; }; name?: string; }; pickup?: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; }`\n  - `medicalClearance?: { petId: number; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; conditions?: { code: string; severity?: 'mild' | 'moderate' | 'severe'; treatment?: { medications?: object[]; plan?: string; }; }[]; vaccinations?: { id: string; administeredAt: string; vaccine: string; audit?: object; boosterSchedule?: object[]; veterinarian?: object; }[]; }`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\n// Automatically fetches more pages as needed.\nfor await (const placement of client.placements.list()) {\n  console.log(placement);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.placements.list',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const placement of client.placements.list()) {\n  console.log(placement.id);\n}",
      },
      python: {
        method: 'placements.list',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\npage = client.placements.list()\npage = page.items[0]\nprint(page.id)',
      },
      java: {
        method: 'placements().list',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.placements.PlacementListPage;\nimport com.hello_world_testingggg.api.models.placements.PlacementListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PlacementListPage page = client.placements().list();\n    }\n}',
      },
      kotlin: {
        method: 'placements().list',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.placements.PlacementListPage\nimport com.hello_world_testingggg.api.models.placements.PlacementListParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val page: PlacementListPage = client.placements().list()\n}',
      },
      go: {
        method: 'client.Placements.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Placements.List(context.TODO(), helloworldtestingggg.PlacementListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'placements.list',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\npage = hello_world_testingggg.placements.list\n\nputs(page)',
      },
      http: {
        example: 'curl /api/v3/placements \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/placements',
    httpMethod: 'post',
    summary: 'Create a placement',
    description: 'Creates a placement for an approved adoption application.',
    stainlessPath: '(resource) placements > (method) create',
    qualified: 'client.placements.create',
    params: [
      'applicationId: string;',
      "initialEvent?: { id: string; leg: { location: address; contact?: object; cost?: money; window?: object; }; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: { id: string; administeredAt: string; vaccine: string; audit?: object; boosterSchedule?: object[]; veterinarian?: object; }; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; };",
      "logistics?: { delivery?: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; handler?: { certification?: { level: 'standard' | 'advanced' | 'specialist'; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; issuedBy?: string; }; name?: string; }; pickup?: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; };",
      'scheduledFor?: string;',
    ],
    response:
      "{ id: string; application: object; createdAt: string; status: 'pending' | 'active' | 'completed' | 'disrupted'; activity?: { id: string; leg: transfer_leg; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: object; note?: string; record?: vaccination_record; } | { id: string; occurredAt: string; severity: number | object; type: 'disruption'; note?: string; } | { body: string; kind: 'note'; } | { adoptedAt: string; kind: 'adopted'; } | { kind: 'returned'; reason: string; }[]; events?: object | object | object[]; followUpAfter?: string; logistics?: { delivery?: transfer_leg; handler?: object; pickup?: transfer_leg; }; medicalClearance?: object; }",
    markdown:
      "## create\n\n`client.placements.create(applicationId: string, initialEvent?: { id: string; leg: transfer_leg; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: object; note?: string; record?: vaccination_record; } | { id: string; occurredAt: string; severity: number | object; type: 'disruption'; note?: string; }, logistics?: { delivery?: object; handler?: { certification?: object; name?: string; }; pickup?: object; }, scheduledFor?: string): { id: string; application: application; createdAt: string; status: 'pending' | 'active' | 'completed' | 'disrupted'; activity?: object | object | object | object | object | object[]; events?: placement_event[]; followUpAfter?: string; logistics?: object; medicalClearance?: medical_summary; }`\n\n**post** `/placements`\n\nCreates a placement for an approved adoption application.\n\n### Parameters\n\n- `applicationId: string`\n\n- `initialEvent?: { id: string; leg: { location: address; contact?: object; cost?: money; window?: object; }; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: { id: string; administeredAt: string; vaccine: string; audit?: object; boosterSchedule?: object[]; veterinarian?: object; }; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; }`\n  A placement history entry; the shape depends on the event kind and carries no discriminator mapping.\n\n- `logistics?: { delivery?: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; handler?: { certification?: { level: 'standard' | 'advanced' | 'specialist'; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; issuedBy?: string; }; name?: string; }; pickup?: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; }`\n  Transport plan for a placement; pickup and delivery share the transfer-leg shape.\n  - `delivery?: { location: { city?: string; geo?: object; state?: string; street?: string; zip?: string; }; contact?: { name?: string; phone?: string; }; cost?: { amount: number; currency: string; }; window?: { end?: string; start?: string; }; }`\n  - `handler?: { certification?: { level: 'standard' | 'advanced' | 'specialist'; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; issuedBy?: string; }; name?: string; }`\n  - `pickup?: { location: { city?: string; geo?: object; state?: string; street?: string; zip?: string; }; contact?: { name?: string; phone?: string; }; cost?: { amount: number; currency: string; }; window?: { end?: string; start?: string; }; }`\n\n- `scheduledFor?: string`\n\n### Returns\n\n- `{ id: string; application: { id: string; applicant: object | object; status: 'received' | 'under_review' | 'approved' | 'rejected'; submittedAt: string; decision?: object | object | object | object; fee?: money; history?: object[]; latestRejection?: object; pet?: pet; }; createdAt: string; status: 'pending' | 'active' | 'completed' | 'disrupted'; activity?: { id: string; leg: object; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: object; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; } | { body: string; kind: 'note'; } | { adoptedAt: string; kind: 'adopted'; } | { kind: 'returned'; reason: string; }[]; events?: { id: string; leg: transfer_leg; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: object; note?: string; record?: vaccination_record; } | { id: string; occurredAt: string; severity: number | object; type: 'disruption'; note?: string; }[]; followUpAfter?: string; logistics?: { delivery?: object; handler?: { certification?: object; name?: string; }; pickup?: object; }; medicalClearance?: { petId: number; audit?: object; conditions?: object[]; vaccinations?: vaccination_record[]; }; }`\n  A post-adoption placement tracking the pet's transition to its new home.\n\n  - `id: string`\n  - `application: { id: string; applicant: { applicant_type: 'individual'; name: string; address?: object; age?: number; email?: string; } | { applicant_type: 'organization'; name: string; shelter?: { name: string; address?: address; contact?: object; location?: object; }; taxId?: string; }; status: 'received' | 'under_review' | 'approved' | 'rejected'; submittedAt: string; decision?: { approvedAt: string; outcome: 'approved'; conditions?: string[]; } | { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; } | { escalatedTo: { team: string; contact?: object; }; outcome: 'escalated'; reviewAfter?: string; } | { outcome: 'withdrawn' | 'expired'; withdrawnBy: 'applicant' | 'shelter' | 'system'; withdrawnAt?: string; }; fee?: { amount: number; currency: string; }; history?: { changedAt: string; status: 'received' | 'under_review' | 'approved' | 'rejected'; note?: string; }[]; latestRejection?: { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; }; pet?: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }; }`\n  - `createdAt: string`\n  - `status: 'pending' | 'active' | 'completed' | 'disrupted'`\n  - `activity?: { id: string; leg: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: { id: string; administeredAt: string; vaccine: string; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; boosterSchedule?: { due: string; completed?: boolean; dose?: number | string; }[]; veterinarian?: { license?: object; name?: string; }; }; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; } | { body: string; kind: 'note'; } | { adoptedAt: string; kind: 'adopted'; } | { kind: 'returned'; reason: string; }[]`\n  - `events?: { id: string; leg: { location: address; contact?: object; cost?: money; window?: object; }; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: { id: string; administeredAt: string; vaccine: string; audit?: object; boosterSchedule?: object[]; veterinarian?: object; }; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; }[]`\n  - `followUpAfter?: string`\n  - `logistics?: { delivery?: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; handler?: { certification?: { level: 'standard' | 'advanced' | 'specialist'; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; issuedBy?: string; }; name?: string; }; pickup?: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; }`\n  - `medicalClearance?: { petId: number; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; conditions?: { code: string; severity?: 'mild' | 'moderate' | 'severe'; treatment?: { medications?: object[]; plan?: string; }; }[]; vaccinations?: { id: string; administeredAt: string; vaccine: string; audit?: object; boosterSchedule?: object[]; veterinarian?: object; }[]; }`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst placement = await client.placements.create({ applicationId: 'applicationId' });\n\nconsole.log(placement);\n```",
    perLanguage: {
      typescript: {
        method: 'client.placements.create',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst placement = await client.placements.create({ applicationId: 'applicationId' });\n\nconsole.log(placement.id);",
      },
      python: {
        method: 'placements.create',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nplacement = client.placements.create(\n    application_id="applicationId",\n)\nprint(placement.id)',
      },
      java: {
        method: 'placements().create',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.placements.Placement;\nimport com.hello_world_testingggg.api.models.placements.PlacementCreateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PlacementCreateParams params = PlacementCreateParams.builder()\n            .applicationId("applicationId")\n            .build();\n        Placement placement = client.placements().create(params);\n    }\n}',
      },
      kotlin: {
        method: 'placements().create',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.placements.Placement\nimport com.hello_world_testingggg.api.models.placements.PlacementCreateParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: PlacementCreateParams = PlacementCreateParams.builder()\n        .applicationId("applicationId")\n        .build()\n    val placement: Placement = client.placements().create(params)\n}',
      },
      go: {
        method: 'client.Placements.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplacement, err := client.Placements.New(context.TODO(), helloworldtestingggg.PlacementNewParams{\n\t\tApplicationID: helloworldtestingggg.F("applicationId"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", placement.ID)\n}\n',
      },
      ruby: {
        method: 'placements.create',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nplacement = hello_world_testingggg.placements.create(application_id: "applicationId")\n\nputs(placement)',
      },
      http: {
        example:
          'curl /api/v3/placements \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $API_KEY" \\\n    -d \'{\n          "applicationId": "applicationId"\n        }\'',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/placements/{placementId}',
    httpMethod: 'get',
    summary: 'Retrieve a placement',
    description: 'Returns a single placement, including its adoption application and event history.',
    stainlessPath: '(resource) placements > (method) retrieve',
    qualified: 'client.placements.retrieve',
    params: ['placementId: string;'],
    response:
      "{ id: string; application: object; createdAt: string; status: 'pending' | 'active' | 'completed' | 'disrupted'; activity?: { id: string; leg: transfer_leg; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: object; note?: string; record?: vaccination_record; } | { id: string; occurredAt: string; severity: number | object; type: 'disruption'; note?: string; } | { body: string; kind: 'note'; } | { adoptedAt: string; kind: 'adopted'; } | { kind: 'returned'; reason: string; }[]; events?: object | object | object[]; followUpAfter?: string; logistics?: { delivery?: transfer_leg; handler?: object; pickup?: transfer_leg; }; medicalClearance?: object; }",
    markdown:
      "## retrieve\n\n`client.placements.retrieve(placementId: string): { id: string; application: application; createdAt: string; status: 'pending' | 'active' | 'completed' | 'disrupted'; activity?: object | object | object | object | object | object[]; events?: placement_event[]; followUpAfter?: string; logistics?: object; medicalClearance?: medical_summary; }`\n\n**get** `/placements/{placementId}`\n\nReturns a single placement, including its adoption application and event history.\n\n### Parameters\n\n- `placementId: string`\n\n### Returns\n\n- `{ id: string; application: { id: string; applicant: object | object; status: 'received' | 'under_review' | 'approved' | 'rejected'; submittedAt: string; decision?: object | object | object | object; fee?: money; history?: object[]; latestRejection?: object; pet?: pet; }; createdAt: string; status: 'pending' | 'active' | 'completed' | 'disrupted'; activity?: { id: string; leg: object; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: object; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; } | { body: string; kind: 'note'; } | { adoptedAt: string; kind: 'adopted'; } | { kind: 'returned'; reason: string; }[]; events?: { id: string; leg: transfer_leg; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: object; note?: string; record?: vaccination_record; } | { id: string; occurredAt: string; severity: number | object; type: 'disruption'; note?: string; }[]; followUpAfter?: string; logistics?: { delivery?: object; handler?: { certification?: object; name?: string; }; pickup?: object; }; medicalClearance?: { petId: number; audit?: object; conditions?: object[]; vaccinations?: vaccination_record[]; }; }`\n  A post-adoption placement tracking the pet's transition to its new home.\n\n  - `id: string`\n  - `application: { id: string; applicant: { applicant_type: 'individual'; name: string; address?: object; age?: number; email?: string; } | { applicant_type: 'organization'; name: string; shelter?: { name: string; address?: address; contact?: object; location?: object; }; taxId?: string; }; status: 'received' | 'under_review' | 'approved' | 'rejected'; submittedAt: string; decision?: { approvedAt: string; outcome: 'approved'; conditions?: string[]; } | { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; } | { escalatedTo: { team: string; contact?: object; }; outcome: 'escalated'; reviewAfter?: string; } | { outcome: 'withdrawn' | 'expired'; withdrawnBy: 'applicant' | 'shelter' | 'system'; withdrawnAt?: string; }; fee?: { amount: number; currency: string; }; history?: { changedAt: string; status: 'received' | 'under_review' | 'approved' | 'rejected'; note?: string; }[]; latestRejection?: { outcome: 'rejected'; reason: 'policy' | 'capacity' | 'incomplete'; appealDeadline?: string; }; pet?: { name: string; photoUrls: string[]; id?: number; acquisitionChannel?: 'breeder' | 'shelter' | 'surrender' | 'transfer' | string; category?: object; microchipId?: string | number; status?: pet_status; tags?: object[]; }; }`\n  - `createdAt: string`\n  - `status: 'pending' | 'active' | 'completed' | 'disrupted'`\n  - `activity?: { id: string; leg: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: { id: string; administeredAt: string; vaccine: string; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; boosterSchedule?: { due: string; completed?: boolean; dose?: number | string; }[]; veterinarian?: { license?: object; name?: string; }; }; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; } | { body: string; kind: 'note'; } | { adoptedAt: string; kind: 'adopted'; } | { kind: 'returned'; reason: string; }[]`\n  - `events?: { id: string; leg: { location: address; contact?: object; cost?: money; window?: object; }; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: { id: string; administeredAt: string; vaccine: string; audit?: object; boosterSchedule?: object[]; veterinarian?: object; }; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; }[]`\n  - `followUpAfter?: string`\n  - `logistics?: { delivery?: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; handler?: { certification?: { level: 'standard' | 'advanced' | 'specialist'; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; issuedBy?: string; }; name?: string; }; pickup?: { location: object; contact?: { name?: string; phone?: string; }; cost?: object; window?: { end?: string; start?: string; }; }; }`\n  - `medicalClearance?: { petId: number; audit?: { recordedAt: string; recordedBy?: string; source?: 'manual' | 'import' | 'system'; }; conditions?: { code: string; severity?: 'mild' | 'moderate' | 'severe'; treatment?: { medications?: object[]; plan?: string; }; }[]; vaccinations?: { id: string; administeredAt: string; vaccine: string; audit?: object; boosterSchedule?: object[]; veterinarian?: object; }[]; }`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst placement = await client.placements.retrieve('placementId');\n\nconsole.log(placement);\n```",
    perLanguage: {
      typescript: {
        method: 'client.placements.retrieve',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst placement = await client.placements.retrieve('placementId');\n\nconsole.log(placement.id);",
      },
      python: {
        method: 'placements.retrieve',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nplacement = client.placements.retrieve(\n    "placementId",\n)\nprint(placement.id)',
      },
      java: {
        method: 'placements().retrieve',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.placements.Placement;\nimport com.hello_world_testingggg.api.models.placements.PlacementRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        Placement placement = client.placements().retrieve("placementId");\n    }\n}',
      },
      kotlin: {
        method: 'placements().retrieve',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.placements.Placement\nimport com.hello_world_testingggg.api.models.placements.PlacementRetrieveParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val placement: Placement = client.placements().retrieve("placementId")\n}',
      },
      go: {
        method: 'client.Placements.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplacement, err := client.Placements.Get(context.TODO(), "placementId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", placement.ID)\n}\n',
      },
      ruby: {
        method: 'placements.retrieve',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nplacement = hello_world_testingggg.placements.retrieve("placementId")\n\nputs(placement)',
      },
      http: {
        example: 'curl /api/v3/placements/$PLACEMENT_ID \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'record_event',
    endpoint: '/placements/{placementId}/events',
    httpMethod: 'post',
    summary: 'Record a placement event',
    description: "Appends a transfer, checkup, or disruption event to a placement's history.",
    stainlessPath: '(resource) placements > (method) record_event',
    qualified: 'client.placements.recordEvent',
    params: [
      'placementId: string;',
      "placement_event: { id: string; leg: { location: address; contact?: object; cost?: money; window?: object; }; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: { due?: string; reason?: string; }; note?: string; record?: { id: string; administeredAt: string; vaccine: string; audit?: object; boosterSchedule?: object[]; veterinarian?: object; }; } | { id: string; occurredAt: string; severity: number | { level: 'low' | 'high' | 'critical'; reviewer?: string; }; type: 'disruption'; note?: string; };",
    ],
    response:
      "{ id: string; application: object; createdAt: string; status: 'pending' | 'active' | 'completed' | 'disrupted'; activity?: { id: string; leg: transfer_leg; occurredAt: string; type: 'transfer'; note?: string; } | { id: string; occurredAt: string; type: 'checkup'; followUp?: object; note?: string; record?: vaccination_record; } | { id: string; occurredAt: string; severity: number | object; type: 'disruption'; note?: string; } | { body: string; kind: 'note'; } | { adoptedAt: string; kind: 'adopted'; } | { kind: 'returned'; reason: string; }[]; events?: object | object | object[]; followUpAfter?: string; logistics?: { delivery?: transfer_leg; handler?: object; pickup?: transfer_leg; }; medicalClearance?: object; }",
    perLanguage: {
      typescript: {
        method: 'client.placements.recordEvent',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst placement = await client.placements.recordEvent('placementId', {\n  id: 'id',\n  leg: { location: {} },\n  occurredAt: '2019-12-27T18:11:19.117Z',\n  type: 'transfer',\n});\n\nconsole.log(placement.id);",
      },
      python: {
        method: 'placements.record_event',
        example:
          'import os\nfrom datetime import datetime\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nplacement = client.placements.record_event(\n    placement_id="placementId",\n    id="id",\n    leg={\n        "location": {}\n    },\n    occurred_at=datetime.fromisoformat("2019-12-27T18:11:19.117"),\n    type="transfer",\n)\nprint(placement.id)',
      },
      java: {
        method: 'placements().recordEvent',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.Address;\nimport com.hello_world_testingggg.api.models.placements.Placement;\nimport com.hello_world_testingggg.api.models.placements.PlacementEvent;\nimport com.hello_world_testingggg.api.models.placements.PlacementRecordEventParams;\nimport com.hello_world_testingggg.api.models.placements.TransferLeg;\nimport java.time.OffsetDateTime;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        PlacementRecordEventParams params = PlacementRecordEventParams.builder()\n            .placementId("placementId")\n            .placementEvent(PlacementEvent.PlacementTransferEvent.builder()\n                .id("id")\n                .leg(TransferLeg.builder()\n                    .location(Address.builder().build())\n                    .build())\n                .occurredAt(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))\n                .type(PlacementEvent.PlacementTransferEvent.Type.TRANSFER)\n                .build())\n            .build();\n        Placement placement = client.placements().recordEvent(params);\n    }\n}',
      },
      kotlin: {
        method: 'placements().recordEvent',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.Address\nimport com.hello_world_testingggg.api.models.placements.Placement\nimport com.hello_world_testingggg.api.models.placements.PlacementEvent\nimport com.hello_world_testingggg.api.models.placements.PlacementRecordEventParams\nimport com.hello_world_testingggg.api.models.placements.TransferLeg\nimport java.time.OffsetDateTime\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: PlacementRecordEventParams = PlacementRecordEventParams.builder()\n        .placementId("placementId")\n        .placementEvent(PlacementEvent.PlacementTransferEvent.builder()\n            .id("id")\n            .leg(TransferLeg.builder()\n                .location(Address.builder().build())\n                .build())\n            .occurredAt(OffsetDateTime.parse("2019-12-27T18:11:19.117Z"))\n            .type(PlacementEvent.PlacementTransferEvent.Type.TRANSFER)\n            .build())\n        .build()\n    val placement: Placement = client.placements().recordEvent(params)\n}',
      },
      go: {
        method: 'client.Placements.RecordEvent',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n\t"github.com/swagger-girly/go/shared"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tplacement, err := client.Placements.RecordEvent(\n\t\tcontext.TODO(),\n\t\t"placementId",\n\t\thelloworldtestingggg.PlacementRecordEventParams{\n\t\t\tPlacementEvent: helloworldtestingggg.PlacementEventPlacementTransferEventParam{\n\t\t\t\tID: helloworldtestingggg.F("id"),\n\t\t\t\tLeg: helloworldtestingggg.F(helloworldtestingggg.TransferLegParam{\n\t\t\t\t\tLocation: helloworldtestingggg.F(shared.AddressParam{}),\n\t\t\t\t}),\n\t\t\t\tOccurredAt: helloworldtestingggg.F(time.Now()),\n\t\t\t\tType:       helloworldtestingggg.F(helloworldtestingggg.PlacementEventPlacementTransferEventTypeTransfer),\n\t\t\t},\n\t\t},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", placement.ID)\n}\n',
      },
      ruby: {
        method: 'placements.record_event',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nplacement = hello_world_testingggg.placements.record_event(\n  "placementId",\n  placement_event: {id: "id", leg: {location: {}}, occurredAt: "2019-12-27T18:11:19.117Z", type: :transfer}\n)\n\nputs(placement)',
      },
      http: {
        example:
          'curl /api/v3/placements/$PLACEMENT_ID/events \\\n    -H \'Content-Type: application/json\' \\\n    -H "api_key: $API_KEY" \\\n    -d \'{\n          "id": "id",\n          "leg": {\n            "location": {}\n          },\n          "occurredAt": "2019-12-27T18:11:19.117Z",\n          "type": "transfer"\n        }\'',
      },
    },
  },
  {
    name: 'parsed',
    endpoint: '',
    httpMethod: '',
    summary: '',
    description: '',
    stainlessPath: '(resource) webhooks > (method) parsed',
    qualified: 'client.webhooks.parsed',
    perLanguage: {
      typescript: {
        method: 'client.webhooks.parsed',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.webhooks.parsed();",
      },
      python: {
        method: 'webhooks.parsed',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nclient.webhooks.parsed()',
      },
      java: {
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.webhooks.WebhookParsedParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.webhooks().parsed();\n    }\n}',
      },
      kotlin: {
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.webhooks.WebhookParsedParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.webhooks().parsed()\n}',
      },
      go: {
        method: 'client.Webhooks.Parsed',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Webhooks.Parsed(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'webhooks.parsed',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresult = hello_world_testingggg.webhooks.parsed\n\nputs(result)',
      },
    },
  },
  {
    name: 'list_inventory',
    endpoint: '/store/inventory',
    httpMethod: 'get',
    summary: 'Returns pet inventories by status',
    description: 'Returns a map of status codes to quantities',
    stainlessPath: '(resource) store > (method) list_inventory',
    qualified: 'client.store.listInventory',
    response: 'object',
    markdown:
      "## list_inventory\n\n`client.store.listInventory(): object`\n\n**get** `/store/inventory`\n\nReturns a map of status codes to quantities\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.store.listInventory();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.listInventory',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.store.listInventory();\n\nconsole.log(response);",
      },
      python: {
        method: 'store.list_inventory',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.store.list_inventory()\nprint(response)',
      },
      java: {
        method: 'store().listInventory',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.store.StoreListInventoryParams;\nimport com.hello_world_testingggg.api.models.store.StoreListInventoryResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        StoreListInventoryResponse response = client.store().listInventory();\n    }\n}',
      },
      kotlin: {
        method: 'store().listInventory',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.store.StoreListInventoryParams\nimport com.hello_world_testingggg.api.models.store.StoreListInventoryResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: StoreListInventoryResponse = client.store().listInventory()\n}',
      },
      go: {
        method: 'client.Store.ListInventory',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Store.ListInventory(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'store.list_inventory',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.store.list_inventory\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/store/inventory \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/store/order',
    httpMethod: 'post',
    summary: 'Place an order for a pet',
    description: 'Place a new order in the store',
    stainlessPath: '(resource) store.order > (method) create',
    qualified: 'client.store.order.create',
    params: [
      'id?: number;',
      'complete?: boolean;',
      'petId?: number;',
      'quantity?: number;',
      'shipDate?: string;',
      "status?: 'placed' | 'approved' | 'delivered';",
      'total?: { amount: number; currency: string; };',
    ],
    response:
      "{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; total?: { amount: number; currency: string; }; }",
    markdown:
      "## create\n\n`client.store.order.create(id?: number, complete?: boolean, petId?: number, quantity?: number, shipDate?: string, status?: 'placed' | 'approved' | 'delivered', total?: { amount: number; currency: string; }): { id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; total?: money; }`\n\n**post** `/store/order`\n\nPlace a new order in the store\n\n### Parameters\n\n- `id?: number`\n\n- `complete?: boolean`\n\n- `petId?: number`\n\n- `quantity?: number`\n\n- `shipDate?: string`\n\n- `status?: 'placed' | 'approved' | 'delivered'`\n  Order Status\n\n- `total?: { amount: number; currency: string; }`\n  - `amount: number`\n    Amount in minor currency units (e.g. cents).\n  - `currency: string`\n    ISO 4217 currency code.\n\n### Returns\n\n- `{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; total?: { amount: number; currency: string; }; }`\n\n  - `id?: number`\n  - `complete?: boolean`\n  - `petId?: number`\n  - `quantity?: number`\n  - `shipDate?: string`\n  - `status?: 'placed' | 'approved' | 'delivered'`\n  - `total?: { amount: number; currency: string; }`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst order = await client.store.order.create();\n\nconsole.log(order);\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.order.create',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst order = await client.store.order.create();\n\nconsole.log(order.id);",
      },
      python: {
        method: 'store.order.create',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\norder = client.store.order.create()\nprint(order.id)',
      },
      java: {
        method: 'store().order().create',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.store.order.OrderCreateParams;\nimport com.hello_world_testingggg.api.models.store.order.OrderCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        OrderCreateResponse order = client.store().order().create();\n    }\n}',
      },
      kotlin: {
        method: 'store().order().create',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.store.order.OrderCreateParams\nimport com.hello_world_testingggg.api.models.store.order.OrderCreateResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val order: OrderCreateResponse = client.store().order().create()\n}',
      },
      go: {
        method: 'client.Store.Order.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torder, err := client.Store.Order.New(context.TODO(), helloworldtestingggg.StoreOrderNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.ID)\n}\n',
      },
      ruby: {
        method: 'store.order.create',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\norder = hello_world_testingggg.store.order.create\n\nputs(order)',
      },
      http: {
        example: 'curl /api/v3/store/order \\\n    -X POST',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/store/order/{orderId}',
    httpMethod: 'get',
    summary: 'Find purchase order by ID',
    description:
      'For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.',
    stainlessPath: '(resource) store.order > (method) retrieve',
    qualified: 'client.store.order.retrieve',
    params: ['orderId: number;'],
    response:
      "{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; total?: { amount: number; currency: string; }; }",
    markdown:
      "## retrieve\n\n`client.store.order.retrieve(orderId: number): { id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; total?: money; }`\n\n**get** `/store/order/{orderId}`\n\nFor valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.\n\n### Parameters\n\n- `orderId: number`\n\n### Returns\n\n- `{ id?: number; complete?: boolean; petId?: number; quantity?: number; shipDate?: string; status?: 'placed' | 'approved' | 'delivered'; total?: { amount: number; currency: string; }; }`\n\n  - `id?: number`\n  - `complete?: boolean`\n  - `petId?: number`\n  - `quantity?: number`\n  - `shipDate?: string`\n  - `status?: 'placed' | 'approved' | 'delivered'`\n  - `total?: { amount: number; currency: string; }`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst order = await client.store.order.retrieve(0);\n\nconsole.log(order);\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.order.retrieve',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst order = await client.store.order.retrieve(0);\n\nconsole.log(order.id);",
      },
      python: {
        method: 'store.order.retrieve',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\norder = client.store.order.retrieve(\n    0,\n)\nprint(order.id)',
      },
      java: {
        method: 'store().order().retrieve',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.store.order.OrderRetrieveParams;\nimport com.hello_world_testingggg.api.models.store.order.OrderRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        OrderRetrieveResponse order = client.store().order().retrieve(0L);\n    }\n}',
      },
      kotlin: {
        method: 'store().order().retrieve',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.store.order.OrderRetrieveParams\nimport com.hello_world_testingggg.api.models.store.order.OrderRetrieveResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val order: OrderRetrieveResponse = client.store().order().retrieve(0L)\n}',
      },
      go: {
        method: 'client.Store.Order.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\torder, err := client.Store.Order.Get(context.TODO(), int64(0))\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", order.ID)\n}\n',
      },
      ruby: {
        method: 'store.order.retrieve',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\norder = hello_world_testingggg.store.order.retrieve(0)\n\nputs(order)',
      },
      http: {
        example: 'curl /api/v3/store/order/$ORDER_ID',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/store/order/{orderId}',
    httpMethod: 'delete',
    summary: 'Delete purchase order by ID',
    description:
      'For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors',
    stainlessPath: '(resource) store.order > (method) delete',
    qualified: 'client.store.order.delete',
    params: ['orderId: number;'],
    markdown:
      "## delete\n\n`client.store.order.delete(orderId: number): void`\n\n**delete** `/store/order/{orderId}`\n\nFor valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors\n\n### Parameters\n\n- `orderId: number`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.store.order.delete(0)\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.order.delete',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.store.order.delete(0);",
      },
      python: {
        method: 'store.order.delete',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nclient.store.order.delete(\n    0,\n)',
      },
      java: {
        method: 'store().order().delete',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.store.order.OrderDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.store().order().delete(0L);\n    }\n}',
      },
      kotlin: {
        method: 'store().order().delete',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.store.order.OrderDeleteParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.store().order().delete(0L)\n}',
      },
      go: {
        method: 'client.Store.Order.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Store.Order.Delete(context.TODO(), int64(0))\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'store.order.delete',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresult = hello_world_testingggg.store.order.delete(0)\n\nputs(result)',
      },
      http: {
        example: 'curl /api/v3/store/order/$ORDER_ID \\\n    -X DELETE',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/store/reports',
    httpMethod: 'get',
    summary: 'List store reports',
    description: 'Returns a cursor-id paginated list of generated store reports.',
    stainlessPath: '(resource) store.reports > (method) list',
    qualified: 'client.store.reports.list',
    params: ['ending_before?: string;', 'page_size?: number;', 'starting_after?: string;'],
    response:
      "{ id: string; createdAt: string; status: 'queued' | 'running' | 'complete' | 'failed'; completedAt?: string; filters?: object; totals?: object; }",
    markdown:
      "## list\n\n`client.store.reports.list(ending_before?: string, page_size?: number, starting_after?: string): { id: string; createdAt: string; status: 'queued' | 'running' | 'complete' | 'failed'; completedAt?: string; filters?: object; totals?: object; }`\n\n**get** `/store/reports`\n\nReturns a cursor-id paginated list of generated store reports.\n\n### Parameters\n\n- `ending_before?: string`\n  Return reports before this report id.\n\n- `page_size?: number`\n  Maximum number of reports to return.\n\n- `starting_after?: string`\n  Return reports after this report id.\n\n### Returns\n\n- `{ id: string; createdAt: string; status: 'queued' | 'running' | 'complete' | 'failed'; completedAt?: string; filters?: object; totals?: object; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `status: 'queued' | 'running' | 'complete' | 'failed'`\n  - `completedAt?: string`\n  - `filters?: object`\n  - `totals?: object`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\n// Automatically fetches more pages as needed.\nfor await (const report of client.store.reports.list()) {\n  console.log(report);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.reports.list',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const report of client.store.reports.list()) {\n  console.log(report.id);\n}",
      },
      python: {
        method: 'store.reports.list',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\npage = client.store.reports.list()\npage = page.data[0]\nprint(page.id)',
      },
      java: {
        method: 'store().reports().list',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.store.reports.ReportListPage;\nimport com.hello_world_testingggg.api.models.store.reports.ReportListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        ReportListPage page = client.store().reports().list();\n    }\n}',
      },
      kotlin: {
        method: 'store().reports().list',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.store.reports.ReportListPage\nimport com.hello_world_testingggg.api.models.store.reports.ReportListParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val page: ReportListPage = client.store().reports().list()\n}',
      },
      go: {
        method: 'client.Store.Reports.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tpage, err := client.Store.Reports.List(context.TODO(), helloworldtestingggg.StoreReportListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", page)\n}\n',
      },
      ruby: {
        method: 'store.reports.list',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\npage = hello_world_testingggg.store.reports.list\n\nputs(page)',
      },
      http: {
        example: 'curl /api/v3/store/reports \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/store/reports/{reportId}',
    httpMethod: 'get',
    summary: 'Retrieve a store report',
    description: 'Returns a generated store report.',
    stainlessPath: '(resource) store.reports > (method) retrieve',
    qualified: 'client.store.reports.retrieve',
    params: ['reportId: string;'],
    response:
      "{ id: string; createdAt: string; status: 'queued' | 'running' | 'complete' | 'failed'; completedAt?: string; filters?: object; totals?: object; }",
    markdown:
      "## retrieve\n\n`client.store.reports.retrieve(reportId: string): { id: string; createdAt: string; status: 'queued' | 'running' | 'complete' | 'failed'; completedAt?: string; filters?: object; totals?: object; }`\n\n**get** `/store/reports/{reportId}`\n\nReturns a generated store report.\n\n### Parameters\n\n- `reportId: string`\n\n### Returns\n\n- `{ id: string; createdAt: string; status: 'queued' | 'running' | 'complete' | 'failed'; completedAt?: string; filters?: object; totals?: object; }`\n\n  - `id: string`\n  - `createdAt: string`\n  - `status: 'queued' | 'running' | 'complete' | 'failed'`\n  - `completedAt?: string`\n  - `filters?: object`\n  - `totals?: object`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst report = await client.store.reports.retrieve('reportId');\n\nconsole.log(report);\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.reports.retrieve',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst report = await client.store.reports.retrieve('reportId');\n\nconsole.log(report.id);",
      },
      python: {
        method: 'store.reports.retrieve',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nreport = client.store.reports.retrieve(\n    "reportId",\n)\nprint(report.id)',
      },
      java: {
        method: 'store().reports().retrieve',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.store.reports.Report;\nimport com.hello_world_testingggg.api.models.store.reports.ReportRetrieveParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        Report report = client.store().reports().retrieve("reportId");\n    }\n}',
      },
      kotlin: {
        method: 'store().reports().retrieve',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.store.reports.Report\nimport com.hello_world_testingggg.api.models.store.reports.ReportRetrieveParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val report: Report = client.store().reports().retrieve("reportId")\n}',
      },
      go: {
        method: 'client.Store.Reports.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\treport, err := client.Store.Reports.Get(context.TODO(), "reportId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", report.ID)\n}\n',
      },
      ruby: {
        method: 'store.reports.retrieve',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nreport = hello_world_testingggg.store.reports.retrieve("reportId")\n\nputs(report)',
      },
      http: {
        example: 'curl /api/v3/store/reports/$REPORT_ID \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'embed',
    endpoint: '/store/reports/{reportId}/embed',
    httpMethod: 'get',
    summary: 'Retrieve report embed HTML',
    description: 'Returns an embeddable HTML representation of a store report.',
    stainlessPath: '(resource) store.reports > (method) embed',
    qualified: 'client.store.reports.embed',
    params: ['reportId: string;'],
    response: 'string',
    markdown:
      "## embed\n\n`client.store.reports.embed(reportId: string): string`\n\n**get** `/store/reports/{reportId}/embed`\n\nReturns an embeddable HTML representation of a store report.\n\n### Parameters\n\n- `reportId: string`\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.store.reports.embed('reportId');\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.reports.embed',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.store.reports.embed('reportId');\n\nconsole.log(response);",
      },
      python: {
        method: 'store.reports.embed',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.store.reports.embed(\n    "reportId",\n)\nprint(response)',
      },
      java: {
        method: 'store().reports().embed',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.store.reports.ReportEmbedParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        String response = client.store().reports().embed("reportId");\n    }\n}',
      },
      kotlin: {
        method: 'store().reports().embed',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.store.reports.ReportEmbedParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: String = client.store().reports().embed("reportId")\n}',
      },
      go: {
        method: 'client.Store.Reports.Embed',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Store.Reports.Embed(context.TODO(), "reportId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'store.reports.embed',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.store.reports.embed("reportId")\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/store/reports/$REPORT_ID/embed \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'pause',
    endpoint: '/store/reports/{reportId}/pause',
    httpMethod: 'post',
    summary: 'Pause report generation',
    description: 'Pauses a report generation job and returns an empty success response.',
    stainlessPath: '(resource) store.reports > (method) pause',
    qualified: 'client.store.reports.pause',
    params: ['reportId: string;', 'Idempotency-Key?: string;'],
    markdown:
      "## pause\n\n`client.store.reports.pause(reportId: string, Idempotency-Key?: string): void`\n\n**post** `/store/reports/{reportId}/pause`\n\nPauses a report generation job and returns an empty success response.\n\n### Parameters\n\n- `reportId: string`\n\n- `Idempotency-Key?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.store.reports.pause('reportId')\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.reports.pause',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nawait client.store.reports.pause('reportId');",
      },
      python: {
        method: 'store.reports.pause',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nclient.store.reports.pause(\n    report_id="reportId",\n)',
      },
      java: {
        method: 'store().reports().pause',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.store.reports.ReportPauseParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.store().reports().pause("reportId");\n    }\n}',
      },
      kotlin: {
        method: 'store().reports().pause',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.store.reports.ReportPauseParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.store().reports().pause("reportId")\n}',
      },
      go: {
        method: 'client.Store.Reports.Pause',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Store.Reports.Pause(\n\t\tcontext.TODO(),\n\t\t"reportId",\n\t\thelloworldtestingggg.StoreReportPauseParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'store.reports.pause',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresult = hello_world_testingggg.store.reports.pause("reportId")\n\nputs(result)',
      },
      http: {
        example: 'curl /api/v3/store/reports/$REPORT_ID/pause \\\n    -X POST \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/store/reports/{reportId}/inventory',
    httpMethod: 'get',
    summary: 'List report inventory rows',
    description: 'Returns inventory rows associated with a store report.',
    stainlessPath: '(resource) store.reports.inventory > (method) list',
    qualified: 'client.store.reports.inventory.list',
    params: ['reportId: string;'],
    response: '{ data: { quantity: number; sku: string; attributes?: object; petId?: number; }[]; }',
    markdown:
      "## list\n\n`client.store.reports.inventory.list(reportId: string): { data: object[]; }`\n\n**get** `/store/reports/{reportId}/inventory`\n\nReturns inventory rows associated with a store report.\n\n### Parameters\n\n- `reportId: string`\n\n### Returns\n\n- `{ data: { quantity: number; sku: string; attributes?: object; petId?: number; }[]; }`\n\n  - `data: { quantity: number; sku: string; attributes?: object; petId?: number; }[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst inventoryResponse = await client.store.reports.inventory.list('reportId');\n\nconsole.log(inventoryResponse);\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.reports.inventory.list',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst inventoryResponse = await client.store.reports.inventory.list('reportId');\n\nconsole.log(inventoryResponse.data);",
      },
      python: {
        method: 'store.reports.inventory.list',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\ninventory_response = client.store.reports.inventory.list(\n    "reportId",\n)\nprint(inventory_response.data)',
      },
      java: {
        method: 'store().reports().inventory().list',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.store.reports.InventoryResponse;\nimport com.hello_world_testingggg.api.models.store.reports.inventory.InventoryListParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        InventoryResponse inventoryResponse = client.store().reports().inventory().list("reportId");\n    }\n}',
      },
      kotlin: {
        method: 'store().reports().inventory().list',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.store.reports.InventoryResponse\nimport com.hello_world_testingggg.api.models.store.reports.inventory.InventoryListParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val inventoryResponse: InventoryResponse = client.store().reports().inventory().list("reportId")\n}',
      },
      go: {
        method: 'client.Store.Reports.Inventory.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tinventoryResponse, err := client.Store.Reports.Inventory.List(context.TODO(), "reportId")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", inventoryResponse.Data)\n}\n',
      },
      ruby: {
        method: 'store.reports.inventory.list',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\ninventory_response = hello_world_testingggg.store.reports.inventory.list("reportId")\n\nputs(inventory_response)',
      },
      http: {
        example: 'curl /api/v3/store/reports/$REPORT_ID/inventory \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/store/reports/{reportId}/inventory/daily/{date}',
    httpMethod: 'get',
    summary: 'Retrieve daily report inventory',
    description: 'Returns daily inventory metrics for a generated report.',
    stainlessPath: '(resource) store.reports.inventory.daily > (method) retrieve',
    qualified: 'client.store.reports.inventory.daily.retrieve',
    params: ['reportId: string;', 'date: string;'],
    response: '{ date: string; metrics: object; notes?: string[]; }',
    markdown:
      "## retrieve\n\n`client.store.reports.inventory.daily.retrieve(reportId: string, date: string): { date: string; metrics: object; notes?: string[]; }`\n\n**get** `/store/reports/{reportId}/inventory/daily/{date}`\n\nReturns daily inventory metrics for a generated report.\n\n### Parameters\n\n- `reportId: string`\n\n- `date: string`\n\n### Returns\n\n- `{ date: string; metrics: object; notes?: string[]; }`\n\n  - `date: string`\n  - `metrics: object`\n  - `notes?: string[]`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst dailyInventory = await client.store.reports.inventory.daily.retrieve('2019-12-27', { reportId: 'reportId' });\n\nconsole.log(dailyInventory);\n```",
    perLanguage: {
      typescript: {
        method: 'client.store.reports.inventory.daily.retrieve',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst dailyInventory = await client.store.reports.inventory.daily.retrieve('2019-12-27', {\n  reportId: 'reportId',\n});\n\nconsole.log(dailyInventory.date);",
      },
      python: {
        method: 'store.reports.inventory.daily.retrieve',
        example:
          'import os\nfrom datetime import date\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\ndaily_inventory = client.store.reports.inventory.daily.retrieve(\n    date=date.fromisoformat("2019-12-27"),\n    report_id="reportId",\n)\nprint(daily_inventory.date)',
      },
      java: {
        method: 'store().reports().inventory().daily().retrieve',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.store.reports.DailyInventory;\nimport com.hello_world_testingggg.api.models.store.reports.inventory.daily.DailyRetrieveParams;\nimport java.time.LocalDate;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        DailyRetrieveParams params = DailyRetrieveParams.builder()\n            .reportId("reportId")\n            .date(LocalDate.parse("2019-12-27"))\n            .build();\n        DailyInventory dailyInventory = client.store().reports().inventory().daily().retrieve(params);\n    }\n}',
      },
      kotlin: {
        method: 'store().reports().inventory().daily().retrieve',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.store.reports.DailyInventory\nimport com.hello_world_testingggg.api.models.store.reports.inventory.daily.DailyRetrieveParams\nimport java.time.LocalDate\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val params: DailyRetrieveParams = DailyRetrieveParams.builder()\n        .reportId("reportId")\n        .date(LocalDate.parse("2019-12-27"))\n        .build()\n    val dailyInventory: DailyInventory = client.store().reports().inventory().daily().retrieve(params)\n}',
      },
      go: {
        method: 'client.Store.Reports.Inventory.Daily.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tdailyInventory, err := client.Store.Reports.Inventory.Daily.Get(\n\t\tcontext.TODO(),\n\t\t"reportId",\n\t\ttime.Now(),\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", dailyInventory.Date)\n}\n',
      },
      ruby: {
        method: 'store.reports.inventory.daily.retrieve',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\ndaily_inventory = hello_world_testingggg.store.reports.inventory.daily.retrieve("2019-12-27", report_id: "reportId")\n\nputs(daily_inventory)',
      },
      http: {
        example: 'curl /api/v3/store/reports/$REPORT_ID/inventory/daily/$DATE \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'create',
    endpoint: '/user',
    httpMethod: 'post',
    summary: 'Create user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) user > (method) create',
    qualified: 'client.user.create',
    params: [
      'id?: number;',
      'email?: string;',
      'firstName?: string;',
      'lastName?: string;',
      'password?: string;',
      'phone?: string;',
      'username?: string;',
      'userStatus?: number;',
    ],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## create\n\n`client.user.create(id?: number, email?: string, firstName?: string, lastName?: string, password?: string, phone?: string, username?: string, userStatus?: number): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**post** `/user`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `id?: number`\n\n- `email?: string`\n\n- `firstName?: string`\n\n- `lastName?: string`\n\n- `password?: string`\n\n- `phone?: string`\n\n- `username?: string`\n\n- `userStatus?: number`\n  User Status\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst user = await client.user.create();\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.create',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst user = await client.user.create();\n\nconsole.log(user.id);",
      },
      python: {
        method: 'user.create',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nuser = client.user.create()\nprint(user.id)',
      },
      java: {
        method: 'user().create',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.user.UserCreateParams;\nimport com.hello_world_testingggg.api.models.user.UserCreateResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        UserCreateResponse user = client.user().create();\n    }\n}',
      },
      kotlin: {
        method: 'user().create',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.user.UserCreateParams\nimport com.hello_world_testingggg.api.models.user.UserCreateResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val user: UserCreateResponse = client.user().create()\n}',
      },
      go: {
        method: 'client.User.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuser, err := client.User.New(context.TODO(), helloworldtestingggg.UserNewParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", user.ID)\n}\n',
      },
      ruby: {
        method: 'user.create',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nuser = hello_world_testingggg.user.create\n\nputs(user)',
      },
      http: {
        example: 'curl /api/v3/user \\\n    -X POST',
      },
    },
  },
  {
    name: 'create_with_list',
    endpoint: '/user/createWithList',
    httpMethod: 'post',
    summary: 'Creates list of users with given input array',
    description: 'Creates list of users with given input array',
    stainlessPath: '(resource) user > (method) create_with_list',
    qualified: 'client.user.createWithList',
    params: [
      'body?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[];',
    ],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## create_with_list\n\n`client.user.createWithList(body?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[]): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**post** `/user/createWithList`\n\nCreates list of users with given input array\n\n### Parameters\n\n- `body?: { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }[]`\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.user.createWithList();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.createWithList',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.user.createWithList();\n\nconsole.log(response.id);",
      },
      python: {
        method: 'user.create_with_list',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nresponse = client.user.create_with_list()\nprint(response.id)',
      },
      java: {
        method: 'user().createWithList',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.user.UserCreateWithListParams;\nimport com.hello_world_testingggg.api.models.user.UserCreateWithListResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        UserCreateWithListResponse response = client.user().createWithList();\n    }\n}',
      },
      kotlin: {
        method: 'user().createWithList',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.user.UserCreateWithListParams\nimport com.hello_world_testingggg.api.models.user.UserCreateWithListResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: UserCreateWithListResponse = client.user().createWithList()\n}',
      },
      go: {
        method: 'client.User.NewWithList',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.User.NewWithList(context.TODO(), helloworldtestingggg.UserNewWithListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'user.create_with_list',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.user.create_with_list\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/user/createWithList \\\n    -X POST',
      },
    },
  },
  {
    name: 'login',
    endpoint: '/user/login',
    httpMethod: 'get',
    summary: 'Logs user into the system',
    description: 'Logs user into the system',
    stainlessPath: '(resource) user > (method) login',
    qualified: 'client.user.login',
    params: ['password?: string;', 'username?: string;'],
    response: 'string',
    markdown:
      "## login\n\n`client.user.login(password?: string, username?: string): string`\n\n**get** `/user/login`\n\nLogs user into the system\n\n### Parameters\n\n- `password?: string`\n  The password for login in clear text\n\n- `username?: string`\n  The user name for login\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.user.login();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.login',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.user.login();\n\nconsole.log(response);",
      },
      python: {
        method: 'user.login',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nresponse = client.user.login()\nprint(response)',
      },
      java: {
        method: 'user().login',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.user.UserLoginParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        String response = client.user().login();\n    }\n}',
      },
      kotlin: {
        method: 'user().login',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.user.UserLoginParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: String = client.user().login()\n}',
      },
      go: {
        method: 'client.User.Login',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.User.Login(context.TODO(), helloworldtestingggg.UserLoginParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'user.login',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.user.login\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/user/login',
      },
    },
  },
  {
    name: 'logout',
    endpoint: '/user/logout',
    httpMethod: 'get',
    summary: 'Logs out current logged in user session',
    description: 'Logs out current logged in user session',
    stainlessPath: '(resource) user > (method) logout',
    qualified: 'client.user.logout',
    markdown:
      "## logout\n\n`client.user.logout(): void`\n\n**get** `/user/logout`\n\nLogs out current logged in user session\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.user.logout()\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.logout',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.user.logout();",
      },
      python: {
        method: 'user.logout',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nclient.user.logout()',
      },
      java: {
        method: 'user().logout',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.user.UserLogoutParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.user().logout();\n    }\n}',
      },
      kotlin: {
        method: 'user().logout',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.user.UserLogoutParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.user().logout()\n}',
      },
      go: {
        method: 'client.User.Logout',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.User.Logout(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'user.logout',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresult = hello_world_testingggg.user.logout\n\nputs(result)',
      },
      http: {
        example: 'curl /api/v3/user/logout',
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/user/{username}',
    httpMethod: 'get',
    summary: 'Get user by user name',
    description: 'Get user by user name',
    stainlessPath: '(resource) user > (method) retrieve',
    qualified: 'client.user.retrieve',
    params: ['username: string;'],
    response:
      '{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }',
    markdown:
      "## retrieve\n\n`client.user.retrieve(username: string): { id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n**get** `/user/{username}`\n\nGet user by user name\n\n### Parameters\n\n- `username: string`\n\n### Returns\n\n- `{ id?: number; email?: string; firstName?: string; lastName?: string; password?: string; phone?: string; username?: string; userStatus?: number; }`\n\n  - `id?: number`\n  - `email?: string`\n  - `firstName?: string`\n  - `lastName?: string`\n  - `password?: string`\n  - `phone?: string`\n  - `username?: string`\n  - `userStatus?: number`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst user = await client.user.retrieve('username');\n\nconsole.log(user);\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.retrieve',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst user = await client.user.retrieve('username');\n\nconsole.log(user.id);",
      },
      python: {
        method: 'user.retrieve',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nuser = client.user.retrieve(\n    "username",\n)\nprint(user.id)',
      },
      java: {
        method: 'user().retrieve',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.user.UserRetrieveParams;\nimport com.hello_world_testingggg.api.models.user.UserRetrieveResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        UserRetrieveResponse user = client.user().retrieve("username");\n    }\n}',
      },
      kotlin: {
        method: 'user().retrieve',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.user.UserRetrieveParams\nimport com.hello_world_testingggg.api.models.user.UserRetrieveResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val user: UserRetrieveResponse = client.user().retrieve("username")\n}',
      },
      go: {
        method: 'client.User.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tuser, err := client.User.Get(context.TODO(), "username")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", user.ID)\n}\n',
      },
      ruby: {
        method: 'user.retrieve',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nuser = hello_world_testingggg.user.retrieve("username")\n\nputs(user)',
      },
      http: {
        example: 'curl /api/v3/user/$USERNAME',
      },
    },
  },
  {
    name: 'update',
    endpoint: '/user/{username}',
    httpMethod: 'put',
    summary: 'Update user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) user > (method) update',
    qualified: 'client.user.update',
    params: [
      'username: string;',
      'id?: number;',
      'email?: string;',
      'firstName?: string;',
      'lastName?: string;',
      'password?: string;',
      'phone?: string;',
      'username?: string;',
      'userStatus?: number;',
    ],
    markdown:
      "## update\n\n`client.user.update(username: string, id?: number, email?: string, firstName?: string, lastName?: string, password?: string, phone?: string, username?: string, userStatus?: number): void`\n\n**put** `/user/{username}`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `username: string`\n\n- `id?: number`\n\n- `email?: string`\n\n- `firstName?: string`\n\n- `lastName?: string`\n\n- `password?: string`\n\n- `phone?: string`\n\n- `username?: string`\n\n- `userStatus?: number`\n  User Status\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.user.update('username')\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.update',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.user.update('username');",
      },
      python: {
        method: 'user.update',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nclient.user.update(\n    path_username="username",\n)',
      },
      java: {
        method: 'user().update',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.user.UserUpdateParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.user().update("username");\n    }\n}',
      },
      kotlin: {
        method: 'user().update',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.user.UserUpdateParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.user().update("username")\n}',
      },
      go: {
        method: 'client.User.Update',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.User.Update(\n\t\tcontext.TODO(),\n\t\t"username",\n\t\thelloworldtestingggg.UserUpdateParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'user.update',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresult = hello_world_testingggg.user.update("username")\n\nputs(result)',
      },
      http: {
        example: 'curl /api/v3/user/$USERNAME \\\n    -X PUT',
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/user/{username}',
    httpMethod: 'delete',
    summary: 'Delete user',
    description: 'This can only be done by the logged in user.',
    stainlessPath: '(resource) user > (method) delete',
    qualified: 'client.user.delete',
    params: ['username: string;'],
    markdown:
      "## delete\n\n`client.user.delete(username: string): void`\n\n**delete** `/user/{username}`\n\nThis can only be done by the logged in user.\n\n### Parameters\n\n- `username: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.user.delete('username')\n```",
    perLanguage: {
      typescript: {
        method: 'client.user.delete',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.user.delete('username');",
      },
      python: {
        method: 'user.delete',
        example:
          'from hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nclient.user.delete(\n    "username",\n)',
      },
      java: {
        method: 'user().delete',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.user.UserDeleteParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.user().delete("username");\n    }\n}',
      },
      kotlin: {
        method: 'user().delete',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.user.UserDeleteParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.user().delete("username")\n}',
      },
      go: {
        method: 'client.User.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.User.Delete(context.TODO(), "username")\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'user.delete',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresult = hello_world_testingggg.user.delete("username")\n\nputs(result)',
      },
      http: {
        example: 'curl /api/v3/user/$USERNAME \\\n    -X DELETE',
      },
    },
  },
  {
    name: 'text_first',
    endpoint: '/media/text-first',
    httpMethod: 'get',
    summary: 'Text media type listed before JSON (both with a schema).',
    description: 'Text media type listed before JSON (both with a schema).',
    stainlessPath: '(resource) media > (method) text_first',
    qualified: 'client.media.textFirst',
    response: '{ id: string; label?: string; }',
    markdown:
      "## text_first\n\n`client.media.textFirst(): { id: string; label?: string; }`\n\n**get** `/media/text-first`\n\nText media type listed before JSON (both with a schema).\n\n### Returns\n\n- `{ id: string; label?: string; }`\n\n  - `id: string`\n  - `label?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.media.textFirst();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.media.textFirst',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.media.textFirst();\n\nconsole.log(response.id);",
      },
      python: {
        method: 'media.text_first',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.media.text_first()\nprint(response.id)',
      },
      java: {
        method: 'media().textFirst',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.media.MediaTextFirstParams;\nimport com.hello_world_testingggg.api.models.media.MediaTextFirstResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        MediaTextFirstResponse response = client.media().textFirst();\n    }\n}',
      },
      kotlin: {
        method: 'media().textFirst',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.media.MediaTextFirstParams\nimport com.hello_world_testingggg.api.models.media.MediaTextFirstResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: MediaTextFirstResponse = client.media().textFirst()\n}',
      },
      go: {
        method: 'client.Media.TextFirst',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Media.TextFirst(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'media.text_first',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.media.text_first\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/media/text-first \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'json_first',
    endpoint: '/media/json-first',
    httpMethod: 'get',
    summary: 'JSON listed before a text media type.',
    description: 'JSON listed before a text media type.',
    stainlessPath: '(resource) media > (method) json_first',
    qualified: 'client.media.jsonFirst',
    response: '{ id: string; label?: string; }',
    markdown:
      "## json_first\n\n`client.media.jsonFirst(): { id: string; label?: string; }`\n\n**get** `/media/json-first`\n\nJSON listed before a text media type.\n\n### Returns\n\n- `{ id: string; label?: string; }`\n\n  - `id: string`\n  - `label?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.media.jsonFirst();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.media.jsonFirst',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.media.jsonFirst();\n\nconsole.log(response.id);",
      },
      python: {
        method: 'media.json_first',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.media.json_first()\nprint(response.id)',
      },
      java: {
        method: 'media().jsonFirst',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.media.MediaJsonFirstParams;\nimport com.hello_world_testingggg.api.models.media.MediaJsonFirstResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        MediaJsonFirstResponse response = client.media().jsonFirst();\n    }\n}',
      },
      kotlin: {
        method: 'media().jsonFirst',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.media.MediaJsonFirstParams\nimport com.hello_world_testingggg.api.models.media.MediaJsonFirstResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: MediaJsonFirstResponse = client.media().jsonFirst()\n}',
      },
      go: {
        method: 'client.Media.JsonFirst',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Media.JsonFirst(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'media.json_first',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.media.json_first\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/media/json-first \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'json_and_xml',
    endpoint: '/media/json-and-xml',
    httpMethod: 'get',
    summary: 'JSON alongside an XML media type.',
    description: 'JSON alongside an XML media type.',
    stainlessPath: '(resource) media > (method) json_and_xml',
    qualified: 'client.media.jsonAndXml',
    response: '{ id: string; label?: string; }',
    markdown:
      "## json_and_xml\n\n`client.media.jsonAndXml(): { id: string; label?: string; }`\n\n**get** `/media/json-and-xml`\n\nJSON alongside an XML media type.\n\n### Returns\n\n- `{ id: string; label?: string; }`\n\n  - `id: string`\n  - `label?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.media.jsonAndXml();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.media.jsonAndXml',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.media.jsonAndXml();\n\nconsole.log(response.id);",
      },
      python: {
        method: 'media.json_and_xml',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.media.json_and_xml()\nprint(response.id)',
      },
      java: {
        method: 'media().jsonAndXml',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.media.MediaJsonAndXmlParams;\nimport com.hello_world_testingggg.api.models.media.MediaJsonAndXmlResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        MediaJsonAndXmlResponse response = client.media().jsonAndXml();\n    }\n}',
      },
      kotlin: {
        method: 'media().jsonAndXml',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.media.MediaJsonAndXmlParams\nimport com.hello_world_testingggg.api.models.media.MediaJsonAndXmlResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: MediaJsonAndXmlResponse = client.media().jsonAndXml()\n}',
      },
      go: {
        method: 'client.Media.JsonAndXml',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Media.JsonAndXml(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'media.json_and_xml',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.media.json_and_xml\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/media/json-and-xml \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'text_only',
    endpoint: '/media/text-only',
    httpMethod: 'get',
    summary: 'A single text/plain body.',
    description: 'A single text/plain body.',
    stainlessPath: '(resource) media > (method) text_only',
    qualified: 'client.media.textOnly',
    response: 'string',
    markdown:
      "## text_only\n\n`client.media.textOnly(): string`\n\n**get** `/media/text-only`\n\nA single text/plain body.\n\n### Returns\n\n- `string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.media.textOnly();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.media.textOnly',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.media.textOnly();\n\nconsole.log(response);",
      },
      python: {
        method: 'media.text_only',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.media.text_only()\nprint(response)',
      },
      java: {
        method: 'media().textOnly',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.media.MediaTextOnlyParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        String response = client.media().textOnly();\n    }\n}',
      },
      kotlin: {
        method: 'media().textOnly',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.media.MediaTextOnlyParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: String = client.media().textOnly()\n}',
      },
      go: {
        method: 'client.Media.TextOnly',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Media.TextOnly(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      ruby: {
        method: 'media.text_only',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.media.text_only\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/media/text-only \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'schema_on_text',
    endpoint: '/media/schema-on-text',
    httpMethod: 'get',
    summary: 'Schema present on text/plain but absent on application/json.',
    description: 'Schema present on text/plain but absent on application/json.',
    stainlessPath: '(resource) media > (method) schema_on_text',
    qualified: 'client.media.schemaOnText',
    markdown:
      "## schema_on_text\n\n`client.media.schemaOnText(): void`\n\n**get** `/media/schema-on-text`\n\nSchema present on text/plain but absent on application/json.\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nawait client.media.schemaOnText()\n```",
    perLanguage: {
      typescript: {
        method: 'client.media.schemaOnText',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nawait client.media.schemaOnText();",
      },
      python: {
        method: 'media.schema_on_text',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nclient.media.schema_on_text()',
      },
      java: {
        method: 'media().schemaOnText',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.media.MediaSchemaOnTextParams;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        client.media().schemaOnText();\n    }\n}',
      },
      kotlin: {
        method: 'media().schemaOnText',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.media.MediaSchemaOnTextParams\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    client.media().schemaOnText()\n}',
      },
      go: {
        method: 'client.Media.SchemaOnText',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\terr := client.Media.SchemaOnText(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      ruby: {
        method: 'media.schema_on_text',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresult = hello_world_testingggg.media.schema_on_text\n\nputs(result)',
      },
      http: {
        example: 'curl /api/v3/media/schema-on-text \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'schema_on_json',
    endpoint: '/media/schema-on-json',
    httpMethod: 'get',
    summary: 'Schema present on application/json but absent on a text/plain listed first.',
    description: 'Schema present on application/json but absent on a text/plain listed first.',
    stainlessPath: '(resource) media > (method) schema_on_json',
    qualified: 'client.media.schemaOnJson',
    response: '{ id: string; label?: string; }',
    markdown:
      "## schema_on_json\n\n`client.media.schemaOnJson(): { id: string; label?: string; }`\n\n**get** `/media/schema-on-json`\n\nSchema present on application/json but absent on a text/plain listed first.\n\n### Returns\n\n- `{ id: string; label?: string; }`\n\n  - `id: string`\n  - `label?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.media.schemaOnJson();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.media.schemaOnJson',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.media.schemaOnJson();\n\nconsole.log(response.id);",
      },
      python: {
        method: 'media.schema_on_json',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.media.schema_on_json()\nprint(response.id)',
      },
      java: {
        method: 'media().schemaOnJson',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.media.MediaSchemaOnJsonParams;\nimport com.hello_world_testingggg.api.models.media.MediaSchemaOnJsonResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        MediaSchemaOnJsonResponse response = client.media().schemaOnJson();\n    }\n}',
      },
      kotlin: {
        method: 'media().schemaOnJson',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.media.MediaSchemaOnJsonParams\nimport com.hello_world_testingggg.api.models.media.MediaSchemaOnJsonResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: MediaSchemaOnJsonResponse = client.media().schemaOnJson()\n}',
      },
      go: {
        method: 'client.Media.SchemaOnJson',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Media.SchemaOnJson(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'media.schema_on_json',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.media.schema_on_json\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/media/schema-on-json \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'vendor_json',
    endpoint: '/media/vendor-json',
    httpMethod: 'get',
    summary: 'A vendor application/vnd.pet.v2+json media type.',
    description: 'A vendor application/vnd.pet.v2+json media type.',
    stainlessPath: '(resource) media > (method) vendor_json',
    qualified: 'client.media.vendorJson',
    response: '{ id: string; label?: string; }',
    markdown:
      "## vendor_json\n\n`client.media.vendorJson(): { id: string; label?: string; }`\n\n**get** `/media/vendor-json`\n\nA vendor application/vnd.pet.v2+json media type.\n\n### Returns\n\n- `{ id: string; label?: string; }`\n\n  - `id: string`\n  - `label?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.media.vendorJson();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.media.vendorJson',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.media.vendorJson();\n\nconsole.log(response.id);",
      },
      python: {
        method: 'media.vendor_json',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.media.vendor_json()\nprint(response.id)',
      },
      java: {
        method: 'media().vendorJson',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.media.MediaVendorJsonParams;\nimport com.hello_world_testingggg.api.models.media.MediaVendorJsonResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        MediaVendorJsonResponse response = client.media().vendorJson();\n    }\n}',
      },
      kotlin: {
        method: 'media().vendorJson',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.media.MediaVendorJsonParams\nimport com.hello_world_testingggg.api.models.media.MediaVendorJsonResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: MediaVendorJsonResponse = client.media().vendorJson()\n}',
      },
      go: {
        method: 'client.Media.VendorJson',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Media.VendorJson(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'media.vendor_json',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.media.vendor_json\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/media/vendor-json \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
  {
    name: 'binary_and_json',
    endpoint: '/media/binary-and-json',
    httpMethod: 'get',
    summary: 'A binary body alongside a JSON media type.',
    description: 'A binary body alongside a JSON media type.',
    stainlessPath: '(resource) media > (method) binary_and_json',
    qualified: 'client.media.binaryAndJson',
    response: '{ id: string; label?: string; }',
    markdown:
      "## binary_and_json\n\n`client.media.binaryAndJson(): { id: string; label?: string; }`\n\n**get** `/media/binary-and-json`\n\nA binary body alongside a JSON media type.\n\n### Returns\n\n- `{ id: string; label?: string; }`\n\n  - `id: string`\n  - `label?: string`\n\n### Example\n\n```typescript\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.media.binaryAndJson();\n\nconsole.log(response);\n```",
    perLanguage: {
      typescript: {
        method: 'client.media.binaryAndJson',
        example:
          "import HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  apiKey: process.env['API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.media.binaryAndJson();\n\nconsole.log(response.id);",
      },
      python: {
        method: 'media.binary_and_json',
        example:
          'import os\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg(\n    api_key=os.environ.get("API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.media.binary_and_json()\nprint(response.id)',
      },
      java: {
        method: 'media().binaryAndJson',
        example:
          'package com.hello_world_testingggg.api.example;\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.media.MediaBinaryAndJsonParams;\nimport com.hello_world_testingggg.api.models.media.MediaBinaryAndJsonResponse;\n\npublic final class Main {\n    private Main() {}\n\n    public static void main(String[] args) {\n        HelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\n        MediaBinaryAndJsonResponse response = client.media().binaryAndJson();\n    }\n}',
      },
      kotlin: {
        method: 'media().binaryAndJson',
        example:
          'package com.hello_world_testingggg.api.example\n\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.media.MediaBinaryAndJsonParams\nimport com.hello_world_testingggg.api.models.media.MediaBinaryAndJsonResponse\n\nfun main() {\n    val client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\n    val response: MediaBinaryAndJsonResponse = client.media().binaryAndJson()\n}',
      },
      go: {
        method: 'client.Media.BinaryAndJson',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n\t"github.com/swagger-girly/go/option"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient(\n\t\toption.WithAPIKey("My API Key"),\n\t)\n\tresponse, err := client.Media.BinaryAndJson(context.TODO())\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.ID)\n}\n',
      },
      ruby: {
        method: 'media.binary_and_json',
        example:
          'require "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new(api_key: "My API Key")\n\nresponse = hello_world_testingggg.media.binary_and_json\n\nputs(response)',
      },
      http: {
        example: 'curl /api/v3/media/binary-and-json \\\n    -H "api_key: $API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'go',
    content:
      '# Hello World Testingggg Go API Library\n\n<a href="https://pkg.go.dev/github.com/swagger-girly/go"><img src="https://pkg.go.dev/badge/github.com/swagger-girly/go.svg" alt="Go Reference"></a>\n\nThe Hello World Testingggg Go library provides convenient access to the [Hello World Testingggg REST API](http://swagger.io)\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Hello World Testingggg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=hello-world-testingggg-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImhlbGxvLXdvcmxkLXRlc3RpbmdnZ2ctbWNwIl0sImVudiI6eyJBUElfS0VZIjoiTXkgQVBJIEtleSIsIlBFVFNUT1JFX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22hello-world-testingggg-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22hello-world-testingggg-mcp%22%5D%2C%22env%22%3A%7B%22API_KEY%22%3A%22My%20API%20Key%22%2C%22PETSTORE_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n```go\nimport (\n\t"github.com/swagger-girly/go" // imported as SDK_PackageName\n)\n```\n\n<!-- x-release-please-end -->\n\nOr to pin the version:\n\n<!-- x-release-please-start-version -->\n\n```sh\ngo get -u \'github.com/swagger-girly/go@v0.0.1\'\n```\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/swagger-girly/go"\n)\n\nfunc main() {\n\tclient := helloworldtestingggg.NewClient()\n\tpet, err := client.Pet.Update(context.TODO(), helloworldtestingggg.PetUpdateParams{\n\t\tPet: helloworldtestingggg.PetParam{\n\t\t\tName:      helloworldtestingggg.F("doggie"),\n\t\t\tPhotoURLs: helloworldtestingggg.F([]string{"string"}),\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", pet.ID)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Pet.Update(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/swagger-girly/go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n```go\niter := client.Pet.ListAutoPaging(context.TODO(), helloworldtestingggg.PetListParams{})\n// Automatically fetches more pages as needed.\nfor iter.Next() {\n\tpet := iter.Current()\n\tfmt.Printf("%+v\\n", pet)\n}\nif err := iter.Err(); err != nil {\n\tpanic(err.Error())\n}\n```\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n```go\npage, err := client.Pet.List(context.TODO(), helloworldtestingggg.PetListParams{})\nfor page != nil {\n\tfor _, pet := range page.Items {\n\t\tfmt.Printf("%+v\\n", pet)\n\t}\n\tpage, err = page.GetNextPage()\n}\nif err != nil {\n\tpanic(err.Error())\n}\n```\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Pet.Update(context.TODO(), helloworldtestingggg.PetUpdateParams{\n\tPet: helloworldtestingggg.PetParam{\n\t\tName:      helloworldtestingggg.F("doggie"),\n\t\tPhotoURLs: helloworldtestingggg.F([]string{"string"}),\n\t},\n})\nif err != nil {\n\tvar apierr *helloworldtestingggg.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/pet": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Pet.Update(\n\tctx,\n\thelloworldtestingggg.PetUpdateParams{\n\t\tPet: helloworldtestingggg.PetParam{\n\t\t\tName:      helloworldtestingggg.F("doggie"),\n\t\t\tPhotoURLs: helloworldtestingggg.F([]string{"string"}),\n\t\t},\n\t},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n```go\n// A file from the file system\nfile, err := os.Open("/path/to/file")\nhelloworldtestingggg.FileUpdateParams{\n\tFile: helloworldtestingggg.F[io.Reader](file),\n}\n\n// A file from a string\nhelloworldtestingggg.FileUpdateParams{\n\tFile: helloworldtestingggg.F[io.Reader](strings.NewReader("my file contents")),\n}\n\n// With a custom filename and contentType\nhelloworldtestingggg.FileUpdateParams{\n\tFile: helloworldtestingggg.FileParam(strings.NewReader(`{"hello": "foo"}`), "file.go", "application/json"),\n}\n```\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := helloworldtestingggg.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Pet.Update(\n\tcontext.TODO(),\n\thelloworldtestingggg.PetUpdateParams{\n\t\tPet: helloworldtestingggg.PetParam{\n\t\t\tName:      helloworldtestingggg.F("doggie"),\n\t\t\tPhotoURLs: helloworldtestingggg.F([]string{"string"}),\n\t\t},\n\t},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\npet, err := client.Pet.Update(\n\tcontext.TODO(),\n\thelloworldtestingggg.PetUpdateParams{\n\t\tPet: helloworldtestingggg.PetParam{\n\t\t\tName:      helloworldtestingggg.F("doggie"),\n\t\t\tPhotoURLs: helloworldtestingggg.F([]string{"string"}),\n\t\t},\n\t},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", pet)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/swagger-girly/go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'java',
    content:
      '# Hello World Testingggg Java API Library\n\n\n[![Maven Central](https://img.shields.io/maven-central/v/com.hello_world_testingggg.api/hello-world-testingggg-java)](https://central.sonatype.com/artifact/com.hello_world_testingggg.api/hello-world-testingggg-java/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.hello_world_testingggg.api/hello-world-testingggg-java/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.hello_world_testingggg.api/hello-world-testingggg-java/0.0.1)\n\n\nThe Hello World Testingggg Java SDK provides convenient access to the [Hello World Testingggg REST API](http://swagger.io)   from applications written in Java.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Hello World Testingggg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=hello-world-testingggg-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImhlbGxvLXdvcmxkLXRlc3RpbmdnZ2ctbWNwIl0sImVudiI6eyJBUElfS0VZIjoiTXkgQVBJIEtleSIsIlBFVFNUT1JFX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22hello-world-testingggg-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22hello-world-testingggg-mcp%22%5D%2C%22env%22%3A%7B%22API_KEY%22%3A%22My%20API%20Key%22%2C%22PETSTORE_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\nThe REST API documentation can be found on [swagger.io](http://swagger.io). Javadocs are available on [javadoc.io](https://javadoc.io/doc/com.hello_world_testingggg.api/hello-world-testingggg-java/0.0.1).\n\n## Installation\n\n### Gradle\n\n~~~kotlin\nimplementation("com.hello_world_testingggg.api:hello-world-testingggg-java:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.hello_world_testingggg.api</groupId>\n  <artifactId>hello-world-testingggg-java</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.Pet;\n\n// Configures using the `helloworldtestingggg.apiKey`, `helloworldtestingggg.petstoreWebhookSecret` and `helloworldtestingggg.baseUrl` system properties\n// Or configures using the `API_KEY`, `PETSTORE_WEBHOOK_SECRET` and `HELLO_WORLD_TESTINGGGG_BASE_URL` environment variables\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\nPet params = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build();\nPet pet = client.pet().update(params);\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\n\n// Configures using the `helloworldtestingggg.apiKey`, `helloworldtestingggg.petstoreWebhookSecret` and `helloworldtestingggg.baseUrl` system properties\n// Or configures using the `API_KEY`, `PETSTORE_WEBHOOK_SECRET` and `HELLO_WORLD_TESTINGGGG_BASE_URL` environment variables\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n```\n\nOr manually:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build();\n```\n\nOr using a combination of the two approaches:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    // Configures using the `helloworldtestingggg.apiKey`, `helloworldtestingggg.petstoreWebhookSecret` and `helloworldtestingggg.baseUrl` system properties\n    // Or configures using the `API_KEY`, `PETSTORE_WEBHOOK_SECRET` and `HELLO_WORLD_TESTINGGGG_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build();\n```\n\nSee this table for the available options:\n\n| Setter          | System property                              | Environment variable              | Required | Default value |\n| --------------- | -------------------------------------------- | --------------------------------- | -------- | ------------- |\n| `apiKey`        | `helloworldtestingggg.apiKey`                | `API_KEY`                         | true     | -             |\n| `webhookSecret` | `helloworldtestingggg.petstoreWebhookSecret` | `PETSTORE_WEBHOOK_SECRET`         | false    | -             |\n| `baseUrl`       | `helloworldtestingggg.baseUrl`               | `HELLO_WORLD_TESTINGGGG_BASE_URL` | true     | `"/api/v3"`   |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\n\nHelloWorldTestinggggClient clientWithOptions = client.withOptions(optionsBuilder -> {\n    optionsBuilder.baseUrl("https://example.com");\n    optionsBuilder.maxRetries(42);\n});\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Hello World Testingggg API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Java class.\n\nFor example, `client.pet().update(...)` should be called with an instance of `PetUpdateParams`, and it     will return an instance of `Pet`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `helloworldtestingggg.apiKey`, `helloworldtestingggg.petstoreWebhookSecret` and `helloworldtestingggg.baseUrl` system properties\n// Or configures using the `API_KEY`, `PETSTORE_WEBHOOK_SECRET` and `HELLO_WORLD_TESTINGGGG_BASE_URL` environment variables\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.fromEnv();\n\nPet params = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build();\nCompletableFuture<Pet> pet = client.async().pet().update(params);\n```\n\nOr create an asynchronous client from the beginning:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClientAsync;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClientAsync;\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport java.util.concurrent.CompletableFuture;\n\n// Configures using the `helloworldtestingggg.apiKey`, `helloworldtestingggg.petstoreWebhookSecret` and `helloworldtestingggg.baseUrl` system properties\n// Or configures using the `API_KEY`, `PETSTORE_WEBHOOK_SECRET` and `HELLO_WORLD_TESTINGGGG_BASE_URL` environment variables\nHelloWorldTestinggggClientAsync client = HelloWorldTestinggggOkHttpClientAsync.fromEnv();\n\nPet params = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build();\nCompletableFuture<Pet> pet = client.pet().update(params);\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods return `CompletableFuture`s.\n\n## Streaming\n\nThe SDK defines methods that return response "chunk" streams, where each chunk can be individually     processed as soon as it arrives instead of waiting on the full response. Streaming methods generally     correspond to [SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) or     [JSONL](https://jsonlines.org) responses.\n\nSome of these methods may have streaming and non-streaming variants, but a streaming method will     always have a `Streaming` suffix in its name, even if it doesn\'t have a non-streaming variant.\n\nThese streaming methods return [`StreamResponse`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/core/http/StreamResponse.kt) for synchronous clients:\n\n```java\nimport com.hello_world_testingggg.api.core.http.StreamResponse;\nimport com.hello_world_testingggg.api.models.pet.Pet;\n\ntry (StreamResponse<Pet> streamResponse = client.pet().watchStatusStreaming(params)) {\n    streamResponse.stream().forEach(chunk -> {\n        System.out.println(chunk);\n    });\n    System.out.println("No more chunks!");\n}\n```\n\nOr [`AsyncStreamResponse`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/core/http/AsyncStreamResponse.kt) for asynchronous clients:\n\n```java\nimport com.hello_world_testingggg.api.core.http.AsyncStreamResponse;\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport java.util.Optional;\n\nclient.async().pet().watchStatusStreaming(params).subscribe(chunk -> {\n    System.out.println(chunk);\n});\n\n// If you need to handle errors or completion of the stream\nclient.async().pet().watchStatusStreaming(params).subscribe(new AsyncStreamResponse.Handler<>() {\n    @Override\n    public void onNext(Pet chunk) {\n        System.out.println(chunk);\n    }\n\n    @Override\n    public void onComplete(Optional<Throwable> error) {\n        if (error.isPresent()) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error.get());\n        } else {\n            System.out.println("No more chunks!");\n        }\n    }\n});\n\n// Or use futures\nclient.async().pet().watchStatusStreaming(params)\n    .subscribe(chunk -> {\n        System.out.println(chunk);\n    })\n    .onCompleteFuture()\n    .whenComplete((unused, error) -> {\n        if (error != null) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error);\n        } else {\n            System.out.println("No more chunks!");\n        }\n    });\n```\n\nAsync streaming uses a dedicated per-client cached thread pool         [`Executor`](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Executor.html)         to stream without blocking the current thread. This default is suitable for most purposes.\n\nTo use a different `Executor`, configure the subscription using the `executor` parameter:\n\n```java\nimport java.util.concurrent.Executor;\nimport java.util.concurrent.Executors;\n\nExecutor executor = Executors.newFixedThreadPool(4);\nclient.async().pet().watchStatusStreaming(params).subscribe(\n    chunk -> System.out.println(chunk), executor\n);\n```\n\nOr configure the client globally using the `streamHandlerExecutor` method:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport java.util.concurrent.Executors;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .streamHandlerExecutor(Executors.newFixedThreadPool(4))\n    .build();\n```\n\n## File uploads\n\nThe SDK defines methods that accept files.\n\nTo upload a file, pass a [`Path`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html):\n\n```java\nimport com.hello_world_testingggg.api.models.files.File;\nimport com.hello_world_testingggg.api.models.files.FileUpdateParams;\nimport java.nio.file.Paths;\n\nFileUpdateParams params = FileUpdateParams.builder()\n    .path("path")\n    .file(Paths.get("/path/to/file"))\n    .build();\nFile file = client.files().update(params);\n```\n\nOr an arbitrary [`InputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html):\n\n```java\nimport com.hello_world_testingggg.api.models.files.File;\nimport com.hello_world_testingggg.api.models.files.FileUpdateParams;\nimport java.net.URL;\n\nFileUpdateParams params = FileUpdateParams.builder()\n    .path("path")\n    .file(new URL("https://example.com//path/to/file").openStream())\n    .build();\nFile file = client.files().update(params);\n```\n\nOr a `byte[]` array:\n\n```java\nimport com.hello_world_testingggg.api.models.files.File;\nimport com.hello_world_testingggg.api.models.files.FileUpdateParams;\n\nFileUpdateParams params = FileUpdateParams.builder()\n    .path("path")\n    .file("content".getBytes())\n    .build();\nFile file = client.files().update(params);\n```\n\nNote that when passing a non-`Path` its filename is unknown so it will not be included in the request.     To manually set a filename, pass a [`MultipartField`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/core/Values.kt):\n\n```java\nimport com.hello_world_testingggg.api.core.MultipartField;\nimport com.hello_world_testingggg.api.models.files.File;\nimport com.hello_world_testingggg.api.models.files.FileUpdateParams;\nimport java.io.InputStream;\nimport java.net.URL;\n\nFileUpdateParams params = FileUpdateParams.builder()\n    .path("path")\n    .file(MultipartField.<InputStream>builder()\n        .value(new URL("https://example.com//path/to/file").openStream())\n        .filename("/path/to/file")\n        .build())\n    .build();\nFile file = client.files().update(params);\n```\n\n## Binary responses\n\nThe SDK defines methods that return binary responses, which are used for API responses that shouldn\'t     necessarily be parsed, like non-JSON data.\n\nThese methods return [`HttpResponse`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/core/http/HttpResponse.kt):\n\n```java\nimport com.hello_world_testingggg.api.core.http.HttpResponse;\nimport com.hello_world_testingggg.api.models.files.FileDownloadParams;\n\nHttpResponse response = client.files().download("path");\n```\n\nTo save the response content to a file, use the     [`Files.copy(...)`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#copy-java.io.InputStream-java.nio.file.Path-java.nio.file.CopyOption...-)     method:\n\n```java\nimport com.hello_world_testingggg.api.core.http.HttpResponse;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.nio.file.StandardCopyOption;\n\ntry (HttpResponse response = client.files().download(params)) {\n    Files.copy(\n        response.body(),\n        Paths.get(path),\n        StandardCopyOption.REPLACE_EXISTING\n    );\n} catch (Exception e) {\n    System.out.println("Something went wrong!");\n    throw new RuntimeException(e);\n}\n```\n\nOr transfer the response content to any     [`OutputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/OutputStream.html):\n\n```java\nimport com.hello_world_testingggg.api.core.http.HttpResponse;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\ntry (HttpResponse response = client.files().download(params)) {\n    response.body().transferTo(Files.newOutputStream(Paths.get(path)));\n} catch (Exception e) {\n    System.out.println("Something went wrong!");\n    throw new RuntimeException(e);\n}\n```\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Java classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```java\nimport com.hello_world_testingggg.api.core.http.Headers;\nimport com.hello_world_testingggg.api.core.http.HttpResponseFor;\nimport com.hello_world_testingggg.api.models.pet.Pet;\n\nPet params = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build();\nHttpResponseFor<Pet> pet = client.pet().withRawResponse().update(params);\n\nint statusCode = pet.statusCode();\nHeaders headers = pet.headers();\n```\n\nYou can still deserialize the response into an instance of a Java class if needed:\n\n```java\nimport com.hello_world_testingggg.api.models.pet.Pet;\n\nPet parsedPet = pet.parse();\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`HelloWorldTestinggggServiceException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/UnexpectedStatusCodeException.kt) |\n\n  [`SseException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/SseException.kt) is thrown for errors encountered during             [SSE streaming](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) after a             successful initial HTTP response.\n\n- [`HelloWorldTestinggggIoException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggIoException.kt): I/O networking errors.\n\n- [`HelloWorldTestinggggRetryableException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`HelloWorldTestinggggInvalidDataException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`HelloWorldTestinggggException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns an [`Iterable`](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)\n\n```java\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport com.hello_world_testingggg.api.models.pet.PetListPage;\n\nPetListPage page = client.pet().list();\n\n// Process as an Iterable\nfor (Pet pet : page.autoPager()) {\n    System.out.println(pet);\n}\n\n// Process as a Stream\npage.autoPager()\n    .stream()\n    .limit(50)\n    .forEach(pet -> System.out.println(pet));\n```\n\nWhen using the asynchronous client, the method returns an [`AsyncStreamResponse`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/core/http/AsyncStreamResponse.kt):\n\n```java\nimport com.hello_world_testingggg.api.core.http.AsyncStreamResponse;\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport com.hello_world_testingggg.api.models.pet.PetListPageAsync;\nimport java.util.Optional;\nimport java.util.concurrent.CompletableFuture;\n\nCompletableFuture<PetListPageAsync> pageFuture = client.async().pet().list();\n\npageFuture.thenRun(page -> page.autoPager().subscribe(pet -> {\n    System.out.println(pet);\n}));\n\n// If you need to handle errors or completion of the stream\npageFuture.thenRun(page -> page.autoPager().subscribe(new AsyncStreamResponse.Handler<>() {\n    @Override\n    public void onNext(Pet pet) {\n        System.out.println(pet);\n    }\n\n    @Override\n    public void onComplete(Optional<Throwable> error) {\n        if (error.isPresent()) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error.get());\n        } else {\n            System.out.println("No more!");\n        }\n    }\n}));\n\n// Or use futures\npageFuture.thenRun(page -> page.autoPager()\n    .subscribe(pet -> {\n        System.out.println(pet);\n    })\n    .onCompleteFuture()\n    .whenComplete((unused, error) -> {\n        if (error != null) {\n            System.out.println("Something went wrong!");\n            throw new RuntimeException(error);\n        } else {\n            System.out.println("No more!");\n        }\n    }));\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```java\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport com.hello_world_testingggg.api.models.pet.PetListPage;\n\nPetListPage page = client.pet().list();\nwhile (true) {\n    for (Pet pet : page.items()) {\n        System.out.println(pet);\n    }\n\n    if (!page.hasNextPage()) {\n        break;\n    }\n\n    page = page.nextPage();\n}\n```\n\n## Logging\n\nEnable logging by setting the `HELLO_WORLD_TESTINGGGG_LOG` environment variable to   `info`:\n\n```sh\nexport HELLO_WORLD_TESTINGGGG_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport HELLO_WORLD_TESTINGGGG_LOG=debug\n```\n\nOr configure the client manually using the `logLevel` method:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.core.LogLevel;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .logLevel(LogLevel.INFO)\n    .build();\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `hello-world-testingggg-java-core` is published with a     [configuration file](hello-world-testingggg-java-core/src/main/resources/META-INF/proguard/hello-world-testingggg-java-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`HelloWorldTestinggggOkHttpClient`](hello-world-testingggg-java-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClient.kt) or     [`HelloWorldTestinggggOkHttpClientAsync`](hello-world-testingggg-java-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build();\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```java\nimport com.hello_world_testingggg.api.models.pet.Pet;\n\nPet pet = client.pet().update(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport java.time.Duration;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build();\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport java.net.InetSocketAddress;\nimport java.net.Proxy;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .proxy(new Proxy(\n      Proxy.Type.HTTP, new InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build();\n```\n\nIf the proxy responds with `407 Proxy Authentication Required`, supply credentials by also   configuring `proxyAuthenticator`:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport com.hello_world_testingggg.api.core.http.ProxyAuthenticator;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .proxy(...)\n    // Or a custom implementation of `ProxyAuthenticator`.\n    .proxyAuthenticator(ProxyAuthenticator.basic("username", "password"))\n    .build();\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\nimport java.time.Duration;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build();\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build();\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `hello-world-testingggg-java-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`HelloWorldTestinggggClient`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClient.kt), [`HelloWorldTestinggggClientAsync`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientAsync.kt),             [`HelloWorldTestinggggClientImpl`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientImpl.kt), and [`HelloWorldTestinggggClientAsyncImpl`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `hello-world-testingggg-java-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`HelloWorldTestinggggOkHttpClient`](hello-world-testingggg-java-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClient.kt) and [`HelloWorldTestinggggOkHttpClientAsync`](hello-world-testingggg-java-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClientAsync.kt), which             provide a way to construct [`HelloWorldTestinggggClientImpl`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientImpl.kt) and             [`HelloWorldTestinggggClientAsyncImpl`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientAsyncImpl.kt), respectively, using OkHttp\n- `hello-world-testingggg-java`\n  - Depends on and exposes the APIs of both `hello-world-testingggg-java-core` and `hello-world-testingggg-java-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`hello-world-testingggg-java` dependency](#installation) with `hello-world-testingggg-java-core`\n2. Copy `hello-world-testingggg-java-client-okhttp`\'s [`OkHttpClient`](hello-world-testingggg-java-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`HelloWorldTestinggggClientImpl`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientImpl.kt) or [`HelloWorldTestinggggClientAsyncImpl`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientAsyncImpl.kt), similarly to        [`HelloWorldTestinggggOkHttpClient`](hello-world-testingggg-java-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClient.kt) or [`HelloWorldTestinggggOkHttpClientAsync`](hello-world-testingggg-java-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`hello-world-testingggg-java` dependency](#installation) with `hello-world-testingggg-java-core`\n2. Write a class that implements the [`HttpClient`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/core/http/HttpClient.kt) interface\n3. Construct [`HelloWorldTestinggggClientImpl`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientImpl.kt) or [`HelloWorldTestinggggClientAsyncImpl`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientAsyncImpl.kt), similarly to        [`HelloWorldTestinggggOkHttpClient`](hello-world-testingggg-java-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClient.kt) or [`HelloWorldTestinggggOkHttpClientAsync`](hello-world-testingggg-java-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```java\nimport com.hello_world_testingggg.api.core.JsonValue;\nimport com.hello_world_testingggg.api.models.pet.PetUpdateParams;\n\nPetUpdateParams params = PetUpdateParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build();\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/core/Values.kt) object to its setter:\n\n```java\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport com.hello_world_testingggg.api.models.pet.PetUpdateParams;\n\nPetUpdateParams params = PetUpdateParams.builder()\n    .pet(Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build())\n    .build();\n```\n\nThe most straightforward way to create a [`JsonValue`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/core/Values.kt) is using its       `from(...)` method:\n\n```java\nimport com.hello_world_testingggg.api.core.JsonValue;\nimport java.util.List;\nimport java.util.Map;\n\n// Create primitive JSON values\nJsonValue nullValue = JsonValue.from(null);\nJsonValue booleanValue = JsonValue.from(true);\nJsonValue numberValue = JsonValue.from(42);\nJsonValue stringValue = JsonValue.from("Hello World!");\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nJsonValue arrayValue = JsonValue.from(List.of(\n  "Hello", "World"\n));\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nJsonValue objectValue = JsonValue.from(Map.of(\n  "a", 1,\n  "b", 2\n));\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nJsonValue complexValue = JsonValue.from(Map.of(\n  "a", List.of(\n    1, 2\n  ),\n  "b", List.of(\n    3, 4\n  )\n));\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/core/Values.kt):\n\n```java\nimport com.hello_world_testingggg.api.core.JsonMissing;\nimport com.hello_world_testingggg.api.models.pet.Pet;\nimport com.hello_world_testingggg.api.models.pet.PetUpdateParams;\n\nPetUpdateParams params = PetUpdateParams.builder()\n    .pet(Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build())\n    .name(JsonMissing.of())\n    .build();\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```java\nimport com.hello_world_testingggg.api.core.JsonValue;\nimport java.util.Map;\n\nMap<String, JsonValue> additionalProperties = client.pet().update(params)._additionalProperties();\nJsonValue secretPropertyValue = additionalProperties.get("secretProperty");\n\nString result = secretPropertyValue.accept(new JsonValue.Visitor<>() {\n    @Override\n    public String visitNull() {\n        return "It\'s null!";\n    }\n\n    @Override\n    public String visitBoolean(boolean value) {\n        return "It\'s a boolean!";\n    }\n\n    @Override\n    public String visitNumber(Number value) {\n        return "It\'s a number!";\n    }\n\n    // Other methods include `visitMissing`, `visitString`, `visitArray`, and `visitObject`\n    // The default implementation of each unimplemented method delegates to `visitDefault`, which throws by default, but can also be overridden\n});\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```java\nimport com.hello_world_testingggg.api.core.JsonField;\nimport java.util.Optional;\n\nJsonField<Object> field = client.pet().update(params)._field();\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  Optional<String> jsonString = field.asString();\n\n  // Try to deserialize into a custom type\n  MyClass myObject = field.asUnknown().orElseThrow().convert(MyClass.class);\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`HelloWorldTestinggggInvalidDataException`](hello-world-testingggg-java-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggInvalidDataException.kt) only if you directly access the property.\n\nValidating the response is _not_ forwards compatible with new types from the API for existing fields.\n\nIf you would still prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```java\nimport com.hello_world_testingggg.api.models.pet.Pet;\n\nPet pet = client.pet().update(params).validate();\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```java\nimport com.hello_world_testingggg.api.models.pet.Pet;\n\nPet pet = client.pet().update(\n  params, RequestOptions.builder().responseValidation(true).build()\n);\n```\n\nOr configure the default for all method calls at the client level:\n\n```java\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient;\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient;\n\nHelloWorldTestinggggClient client = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build();\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nJava `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/hello-world-testingggg-java/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'kotlin',
    content:
      '# Hello World Testingggg Kotlin API Library\n\n<!-- x-release-please-start-version -->\n[![Maven Central](https://img.shields.io/maven-central/v/com.hello_world_testingggg.api/hello-world-testingggg-kotlin)](https://central.sonatype.com/artifact/com.hello_world_testingggg.api/hello-world-testingggg-kotlin/0.0.1)\n[![javadoc](https://javadoc.io/badge2/com.hello_world_testingggg.api/hello-world-testingggg-kotlin/0.0.1/javadoc.svg)](https://javadoc.io/doc/com.hello_world_testingggg.api/hello-world-testingggg-kotlin/0.0.1)\n<!-- x-release-please-end -->\n\nThe Hello World Testingggg Kotlin SDK provides convenient access to the [Hello World Testingggg REST API](http://swagger.io)   from applications written in Kotlin.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Hello World Testingggg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=hello-world-testingggg-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImhlbGxvLXdvcmxkLXRlc3RpbmdnZ2ctbWNwIl0sImVudiI6eyJBUElfS0VZIjoiTXkgQVBJIEtleSIsIlBFVFNUT1JFX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22hello-world-testingggg-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22hello-world-testingggg-mcp%22%5D%2C%22env%22%3A%7B%22API_KEY%22%3A%22My%20API%20Key%22%2C%22PETSTORE_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n<!-- x-release-please-start-version -->\n\nThe REST API documentation can be found on [swagger.io](http://swagger.io). KDocs are available on [javadoc.io](https://javadoc.io/doc/com.hello_world_testingggg.api/hello-world-testingggg-kotlin/0.0.1).\n\n<!-- x-release-please-end -->\n\n## Installation\n\n<!-- x-release-please-start-version -->\n\n### Gradle\n\n~~~kotlin\nimplementation("com.hello_world_testingggg.api:hello-world-testingggg-kotlin:0.0.1")\n~~~\n\n### Maven\n\n~~~xml\n<dependency>\n  <groupId>com.hello_world_testingggg.api</groupId>\n  <artifactId>hello-world-testingggg-kotlin</artifactId>\n  <version>0.0.1</version>\n</dependency>\n~~~\n\n<!-- x-release-please-end -->\n\n## Requirements\n\nThis library requires Java 8 or later.\n\n## Usage\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.Pet\n\n// Configures using the `helloworldtestingggg.apiKey`, `helloworldtestingggg.petstoreWebhookSecret` and `helloworldtestingggg.baseUrl` system properties\n// Or configures using the `API_KEY`, `PETSTORE_WEBHOOK_SECRET` and `HELLO_WORLD_TESTINGGGG_BASE_URL` environment variables\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\nval params: Pet = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build()\nval pet: Pet = client.pet().update(params)\n```\n\n## Client configuration\n\nConfigure the client using system properties or environment variables:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\n\n// Configures using the `helloworldtestingggg.apiKey`, `helloworldtestingggg.petstoreWebhookSecret` and `helloworldtestingggg.baseUrl` system properties\n// Or configures using the `API_KEY`, `PETSTORE_WEBHOOK_SECRET` and `HELLO_WORLD_TESTINGGGG_BASE_URL` environment variables\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n```\n\nOr manually:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\n\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.builder()\n    .apiKey("My API Key")\n    .build()\n```\n\nOr using a combination of the two approaches:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\n\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.builder()\n    // Configures using the `helloworldtestingggg.apiKey`, `helloworldtestingggg.petstoreWebhookSecret` and `helloworldtestingggg.baseUrl` system properties\n    // Or configures using the `API_KEY`, `PETSTORE_WEBHOOK_SECRET` and `HELLO_WORLD_TESTINGGGG_BASE_URL` environment variables\n    .fromEnv()\n    .apiKey("My API Key")\n    .build()\n```\n\nSee this table for the available options:\n\n| Setter          | System property                              | Environment variable              | Required | Default value |\n| --------------- | -------------------------------------------- | --------------------------------- | -------- | ------------- |\n| `apiKey`        | `helloworldtestingggg.apiKey`                | `API_KEY`                         | true     | -             |\n| `webhookSecret` | `helloworldtestingggg.petstoreWebhookSecret` | `PETSTORE_WEBHOOK_SECRET`         | false    | -             |\n| `baseUrl`       | `helloworldtestingggg.baseUrl`               | `HELLO_WORLD_TESTINGGGG_BASE_URL` | true     | `"/api/v3"`   |\n\nSystem properties take precedence over environment variables.\n\n> [!TIP]\n> Don\'t create more than one client in the same application. Each client has a connection pool and\n> thread pools, which are more efficient to share between requests.\n\n### Modifying configuration\n\nTo temporarily use a modified client configuration, while reusing the same connection and thread       pools, call `withOptions()` on any client or service:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\n\nval clientWithOptions: HelloWorldTestinggggClient = client.withOptions {\n    it.baseUrl("https://example.com")\n    it.maxRetries(42)\n}\n```\n\nThe `withOptions()` method does not affect the original client or service.\n\n## Requests and responses\n\nTo send a request to the Hello World Testingggg API, build an instance of some `Params` class and pass it to the     corresponding client method. When the response is received, it will be deserialized into an instance of     a Kotlin class.\n\nFor example, `client.pet().update(...)` should be called with an instance of `PetUpdateParams`, and it     will return an instance of `Pet`.\n\n## Immutability\n\nEach class in the SDK has an associated   [builder](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java)   or factory method for constructing it.\n\nEach class is [immutable](https://docs.oracle.com/javase/tutorial/essential/concurrency/immutable.html)   once constructed. If the class has an associated builder, then it has a `toBuilder()` method, which can   be used to convert it back to a builder for making a modified copy.\n\nBecause each class is immutable, builder modification will _never_ affect already built class instances.\n\n## Asynchronous execution\n\nThe default client is synchronous. To switch to asynchronous execution, call the `async()` method:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.models.pet.Pet\n\n// Configures using the `helloworldtestingggg.apiKey`, `helloworldtestingggg.petstoreWebhookSecret` and `helloworldtestingggg.baseUrl` system properties\n// Or configures using the `API_KEY`, `PETSTORE_WEBHOOK_SECRET` and `HELLO_WORLD_TESTINGGGG_BASE_URL` environment variables\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.fromEnv()\n\nval params: Pet = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build()\nval pet: Pet = client.async().pet().update(params)\n```\n\nOr create an asynchronous client from the beginning:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClientAsync\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClientAsync\nimport com.hello_world_testingggg.api.models.pet.Pet\n\n// Configures using the `helloworldtestingggg.apiKey`, `helloworldtestingggg.petstoreWebhookSecret` and `helloworldtestingggg.baseUrl` system properties\n// Or configures using the `API_KEY`, `PETSTORE_WEBHOOK_SECRET` and `HELLO_WORLD_TESTINGGGG_BASE_URL` environment variables\nval client: HelloWorldTestinggggClientAsync = HelloWorldTestinggggOkHttpClientAsync.fromEnv()\n\nval params: Pet = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build()\nval pet: Pet = client.pet().update(params)\n```\n\nThe asynchronous client supports the same options as the synchronous one, except most methods are [suspending](https://kotlinlang.org/docs/coroutines-guide.html).\n\n## Streaming\n\nThe SDK defines methods that return response "chunk" streams, where each chunk can be individually     processed as soon as it arrives instead of waiting on the full response. Streaming methods generally     correspond to [SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) or     [JSONL](https://jsonlines.org) responses.\n\nSome of these methods may have streaming and non-streaming variants, but a streaming method will     always have a `Streaming` suffix in its name, even if it doesn\'t have a non-streaming variant.\n\nThese streaming methods return [`StreamResponse`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/core/http/StreamResponse.kt) for synchronous clients:\n\n```kotlin\nclient.pet().watchStatusStreaming(params).use { response ->\n    response.asSequence().forEach { println(it) }\n    println("No more chunks!")\n}\n```\n\n## File uploads\n\nThe SDK defines methods that accept files.\n\nTo upload a file, pass a [`Path`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html):\n\n```kotlin\nimport com.hello_world_testingggg.api.models.files.File\nimport com.hello_world_testingggg.api.models.files.FileUpdateParams\nimport java.nio.file.Paths\n\nval params: FileUpdateParams = FileUpdateParams.builder()\n    .path("path")\n    .file(Paths.get("/path/to/file"))\n    .build()\nval file: File = client.files().update(params)\n```\n\nOr an arbitrary [`InputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html):\n\n```kotlin\nimport com.hello_world_testingggg.api.models.files.File\nimport com.hello_world_testingggg.api.models.files.FileUpdateParams\nimport java.net.URL\n\nval params: FileUpdateParams = FileUpdateParams.builder()\n    .path("path")\n    .file(URL("https://example.com//path/to/file").openStream())\n    .build()\nval file: File = client.files().update(params)\n```\n\nOr a `ByteArray`:\n\n```kotlin\nimport com.hello_world_testingggg.api.models.files.File\nimport com.hello_world_testingggg.api.models.files.FileUpdateParams\n\nval params: FileUpdateParams = FileUpdateParams.builder()\n    .path("path")\n    .file("content".toByteArray())\n    .build()\nval file: File = client.files().update(params)\n```\n\nNote that when passing a non-`Path` its filename is unknown so it will not be included in the request.     To manually set a filename, pass a [`MultipartField`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/core/Values.kt):\n\n```kotlin\nimport com.hello_world_testingggg.api.core.MultipartField\nimport com.hello_world_testingggg.api.models.files.File\nimport com.hello_world_testingggg.api.models.files.FileUpdateParams\nimport java.io.InputStream\nimport java.net.URL\n\nval params: FileUpdateParams = FileUpdateParams.builder()\n    .path("path")\n    .file(MultipartField.builder<InputStream>()\n        .value(URL("https://example.com//path/to/file").openStream())\n        .filename("/path/to/file")\n        .build())\n    .build()\nval file: File = client.files().update(params)\n```\n\n## Binary responses\n\nThe SDK defines methods that return binary responses, which are used for API responses that shouldn\'t     necessarily be parsed, like non-JSON data.\n\nThese methods return [`HttpResponse`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/core/http/HttpResponse.kt):\n\n```kotlin\nimport com.hello_world_testingggg.api.core.http.HttpResponse\nimport com.hello_world_testingggg.api.models.files.FileDownloadParams\n\nval response: HttpResponse = client.files().download("path")\n```\n\nTo save the response content to a file, use the     [`Files.copy(...)`](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html#copy-java.io.InputStream-java.nio.file.Path-java.nio.file.CopyOption...-)     method:\n\n```kotlin\nimport java.nio.file.Files\nimport java.nio.file.Paths\nimport java.nio.file.StandardCopyOption\n\nclient.files().download(params).use {\n    Files.copy(\n        it.body(),\n        Paths.get(path),\n        StandardCopyOption.REPLACE_EXISTING\n    )\n}\n```\n\nOr transfer the response content to any     [`OutputStream`](https://docs.oracle.com/javase/8/docs/api/java/io/OutputStream.html):\n\n```kotlin\nimport java.nio.file.Files\nimport java.nio.file.Paths\n\nclient.files().download(params).use {\n    it.body().transferTo(Files.newOutputStream(Paths.get(path)))\n}\n```\n\n## Raw responses\n\nThe SDK defines methods that deserialize responses into instances of Kotlin classes.       However, these methods don\'t provide access to the response headers, status code, or the raw response       body.\n\nTo access this data, prefix any HTTP method call on a client or service with `withRawResponse()`:\n\n```kotlin\nimport com.hello_world_testingggg.api.core.http.Headers\nimport com.hello_world_testingggg.api.core.http.HttpResponseFor\nimport com.hello_world_testingggg.api.models.pet.Pet\n\nval params: Pet = Pet.builder()\n    .name("doggie")\n    .addPhotoUrl("string")\n    .build()\nval pet: HttpResponseFor<Pet> = client.pet().withRawResponse().update(params)\n\nval statusCode: Int = pet.statusCode()\nval headers: Headers = pet.headers()\n```\n\nYou can still deserialize the response into an instance of a Kotlin class if needed:\n\n```kotlin\nimport com.hello_world_testingggg.api.models.pet.Pet\n\nval parsedPet: Pet = pet.parse()\n```\n\n## Error handling\n\nThe SDK throws custom unchecked exception types:\n\n- [`HelloWorldTestinggggServiceException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggServiceException.kt): Base class for HTTP errors. See this table for which exception       subclass is thrown for each HTTP status code:\n\n  | Status | Exception                                          |\n  | ------ | -------------------------------------------------- |\n  | 400    | [`BadRequestException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/BadRequestException.kt)           |\n  | 401    | [`UnauthorizedException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/UnauthorizedException.kt)         |\n  | 403    | [`PermissionDeniedException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/PermissionDeniedException.kt)     |\n  | 404    | [`NotFoundException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/NotFoundException.kt)             |\n  | 422    | [`UnprocessableEntityException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/UnprocessableEntityException.kt)  |\n  | 429    | [`RateLimitException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/RateLimitException.kt)            |\n  | 5xx    | [`InternalServerException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/InternalServerException.kt)       |\n  | others | [`UnexpectedStatusCodeException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/UnexpectedStatusCodeException.kt) |\n\n  [`SseException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/SseException.kt) is thrown for errors encountered during             [SSE streaming](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) after a             successful initial HTTP response.\n\n- [`HelloWorldTestinggggIoException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggIoException.kt): I/O networking errors.\n\n- [`HelloWorldTestinggggRetryableException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggRetryableException.kt): Generic error indicating a failure that could be retried by the client.\n\n- [`HelloWorldTestinggggInvalidDataException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggInvalidDataException.kt): Failure to interpret successfully parsed data. For example,       when accessing a property that\'s supposed to be required, but the API unexpectedly omitted it from the       response.\n\n- [`HelloWorldTestinggggException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggException.kt): Base class for all exceptions. Most errors will result in one of the       previously mentioned ones, but completely generic errors may be thrown using the base class.\n\n## Pagination\n\nThe SDK defines methods that return a paginated lists of results. It provides convenient ways to access     the results either one page at a time or item-by-item across all pages.\n\n### Auto-pagination\n\nTo iterate through all results across all pages, use the `autoPager()` method, which automatically     fetches more pages as needed.\n\nWhen using the synchronous client, the method returns a [`Sequence`](https://kotlinlang.org/docs/sequences.html)\n\n```kotlin\nimport com.hello_world_testingggg.api.models.pet.PetListPage\n\nval page: PetListPage = client.pet().list()\npage.autoPager()\n    .take(50)\n    .forEach { pet -> println(pet) }\n```\n\nWhen using the asynchronous client, the method returns a [`Flow`](https://kotlinlang.org/docs/flow.html):\n\n```kotlin\nimport com.hello_world_testingggg.api.models.pet.PetListPageAsync\n\nval page: PetListPageAsync = client.async().pet().list()\npage.autoPager()\n    .take(50)\n    .forEach { pet -> println(pet) }\n```\n\n### Manual pagination\n\nTo access individual page items and manually request the next page, use the `items()`,\n`hasNextPage()`, and `nextPage()` methods:\n\n```kotlin\nimport com.hello_world_testingggg.api.models.pet.Pet\nimport com.hello_world_testingggg.api.models.pet.PetListPage\n\nval page: PetListPage = client.pet().list()\nwhile (true) {\n    for (pet in page.items()) {\n        println(pet)\n    }\n\n    if (!page.hasNextPage()) {\n        break\n    }\n\n    page = page.nextPage()\n}\n```\n\n## Logging\n\nEnable logging by setting the `HELLO_WORLD_TESTINGGGG_LOG` environment variable to   `info`:\n\n```sh\nexport HELLO_WORLD_TESTINGGGG_LOG=info\n```\n\nOr to `debug` for more verbose logging:\n\n```sh\nexport HELLO_WORLD_TESTINGGGG_LOG=debug\n```\n\nOr configure the client manually using the `logLevel` method:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.core.LogLevel\n\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .logLevel(LogLevel.INFO)\n    .build()\n```\n\n## ProGuard and R8\n\nAlthough the SDK uses reflection, it is still usable with     [ProGuard](https://github.com/Guardsquare/proguard) and     [R8](https://developer.android.com/topic/performance/app-optimization/enable-app-optimization) because     `hello-world-testingggg-kotlin-core` is published with a     [configuration file](hello-world-testingggg-kotlin-core/src/main/resources/META-INF/proguard/hello-world-testingggg-kotlin-core.pro) containing     [keep rules](https://www.guardsquare.com/manual/configuration/usage).\n\nProGuard and R8 should automatically detect and use the published rules, but you can also manually copy     the keep rules if necessary.\n\n\n\n\n\n## Jackson\n\nThe SDK depends on [Jackson](https://github.com/FasterXML/jackson) for JSON     serialization/deserialization. It is compatible with version 2.13.4 or higher,     but depends on version 2.18.2 by default.\n\nThe SDK throws an exception if it detects an incompatible Jackson version at runtime (e.g. if the     default version was overridden in your Maven or Gradle config).\n\nIf the SDK threw an exception, but you\'re _certain_ the version is compatible, then disable the version     check using the `checkJacksonVersionCompatibility` on [`HelloWorldTestinggggOkHttpClient`](hello-world-testingggg-kotlin-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClient.kt) or     [`HelloWorldTestinggggOkHttpClientAsync`](hello-world-testingggg-kotlin-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClientAsync.kt).\n\n> [!CAUTION]\n> We make no guarantee that the SDK works correctly when the Jackson version check is disabled.\n\nAlso note that there are bugs in older Jackson versions that can affect the SDK. We don\'t work around all     Jackson bugs ([example](https://github.com/FasterXML/jackson-databind/issues/3240)) and expect users to     upgrade Jackson for those instead.\n\n## Network options\n\n### Retries\n\nThe SDK automatically retries 2 times by default, with a short exponential backoff between requests.\n\nOnly the following error types are retried:\n- Connection errors (for example, due to a network connectivity problem)\n- 408 Request Timeout\n- 409 Conflict\n- 429 Rate Limit\n- 5xx Internal\n\nThe API may also explicitly instruct the SDK to retry or not retry a request.\n\nTo set a custom number of retries, configure the client using the `maxRetries` method:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\n\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .maxRetries(4)\n    .build()\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default.\n\nTo set a custom timeout, configure the method call using the `timeout` method:\n\n```kotlin\nimport com.hello_world_testingggg.api.models.pet.Pet\n\nval pet: Pet = client.pet().update(\n  params, RequestOptions.builder().timeout(Duration.ofSeconds(30)).build()\n)\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport java.time.Duration\n\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .timeout(Duration.ofSeconds(30))\n    .build()\n```\n\n### Proxies\n\nTo route requests through a proxy, configure the client using the `proxy` method:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport java.net.InetSocketAddress\nimport java.net.Proxy\n\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .proxy(Proxy(\n      Proxy.Type.HTTP, InetSocketAddress(\n        "https://example.com", 8080\n      )\n    ))\n    .build()\n```\n\nIf the proxy responds with `407 Proxy Authentication Required`, supply credentials by also   configuring `proxyAuthenticator`:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport com.hello_world_testingggg.api.core.http.ProxyAuthenticator\n\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .proxy(...)\n    // Or a custom implementation of `ProxyAuthenticator`.\n    .proxyAuthenticator(ProxyAuthenticator.basic("username", "password"))\n    .build()\n```\n\n### Connection pooling\n\nTo customize the underlying OkHttp connection pool, configure the client using the   `maxIdleConnections` and `keepAliveDuration` methods:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\nimport java.time.Duration\n\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    // If `maxIdleConnections` is set, then `keepAliveDuration` must be set, and vice versa.\n    .maxIdleConnections(10)\n    .keepAliveDuration(Duration.ofMinutes(2))\n    .build()\n```\n\nIf both options are unset, OkHttp\'s default connection pool settings are used.\n\n### HTTPS\n\n> [!NOTE]\n> Most applications should not call these methods, and instead use the system defaults. The defaults include\n> special optimizations that can be lost if the implementations are modified.\n\nTo configure how HTTPS connections are secured, configure the client using the `sslSocketFactory`,   `trustManager`, and `hostnameVerifier` methods:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\n\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    // If `sslSocketFactory` is set, then `trustManager` must be set, and vice versa.\n    .sslSocketFactory(yourSSLSocketFactory)\n    .trustManager(yourTrustManager)\n    .hostnameVerifier(yourHostnameVerifier)\n    .build()\n```\n\n\n\n### Custom HTTP client\n\nThe SDK consists of three artifacts:\n- `hello-world-testingggg-kotlin-core`\n  - Contains core SDK logic\n  - Does not depend on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`HelloWorldTestinggggClient`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClient.kt), [`HelloWorldTestinggggClientAsync`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientAsync.kt),             [`HelloWorldTestinggggClientImpl`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientImpl.kt), and [`HelloWorldTestinggggClientAsyncImpl`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientAsyncImpl.kt), all of which can             work with any HTTP client\n- `hello-world-testingggg-kotlin-client-okhttp`\n  - Depends on [OkHttp](https://square.github.io/okhttp)\n  - Exposes [`HelloWorldTestinggggOkHttpClient`](hello-world-testingggg-kotlin-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClient.kt) and [`HelloWorldTestinggggOkHttpClientAsync`](hello-world-testingggg-kotlin-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClientAsync.kt), which             provide a way to construct [`HelloWorldTestinggggClientImpl`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientImpl.kt) and             [`HelloWorldTestinggggClientAsyncImpl`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientAsyncImpl.kt), respectively, using OkHttp\n- `hello-world-testingggg-kotlin`\n  - Depends on and exposes the APIs of both `hello-world-testingggg-kotlin-core` and `hello-world-testingggg-kotlin-client-okhttp`\n  - Does not have its own logic\n\nThis structure allows replacing the SDK\'s default HTTP client without pulling in unnecessary dependencies.\n\n#### Customized [`OkHttpClient`](https://square.github.io/okhttp/3.x/okhttp/okhttp3/OkHttpClient.html)\n\n> [!TIP]\n> Try the available [network options](#network-options) before replacing the default client.\n\nTo use a customized `OkHttpClient`:\n\n1. Replace your [`hello-world-testingggg-kotlin` dependency](#installation) with `hello-world-testingggg-kotlin-core`\n2. Copy `hello-world-testingggg-kotlin-client-okhttp`\'s [`OkHttpClient`](hello-world-testingggg-kotlin-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/OkHttpClient.kt) class into your code and        customize it\n3. Construct [`HelloWorldTestinggggClientImpl`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientImpl.kt) or [`HelloWorldTestinggggClientAsyncImpl`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientAsyncImpl.kt), similarly to        [`HelloWorldTestinggggOkHttpClient`](hello-world-testingggg-kotlin-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClient.kt) or [`HelloWorldTestinggggOkHttpClientAsync`](hello-world-testingggg-kotlin-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClientAsync.kt), using your        customized client\n\n### Completely custom HTTP client\n\nTo use a completely custom HTTP client:\n\n1. Replace your [`hello-world-testingggg-kotlin` dependency](#installation) with `hello-world-testingggg-kotlin-core`\n2. Write a class that implements the [`HttpClient`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/core/http/HttpClient.kt) interface\n3. Construct [`HelloWorldTestinggggClientImpl`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientImpl.kt) or [`HelloWorldTestinggggClientAsyncImpl`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/client/HelloWorldTestinggggClientAsyncImpl.kt), similarly to        [`HelloWorldTestinggggOkHttpClient`](hello-world-testingggg-kotlin-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClient.kt) or [`HelloWorldTestinggggOkHttpClientAsync`](hello-world-testingggg-kotlin-client-okhttp/src/main/kotlin/com/hello_world_testingggg/api/client/okhttp/HelloWorldTestinggggOkHttpClientAsync.kt), using your new        client class\n\n## Undocumented API functionality\n\nThe SDK is typed for convenient usage of the documented API. However, it also supports working with undocumented or not yet supported parts of the API.\n\n### Parameters\n\nTo set undocumented parameters, call the `putAdditionalHeader`, `putAdditionalQueryParam`, or       `putAdditionalBodyProperty` methods on any `Params` class:\n\n```kotlin\nimport com.hello_world_testingggg.api.core.JsonValue\nimport com.hello_world_testingggg.api.models.pet.PetUpdateParams\n\nval params: PetUpdateParams = PetUpdateParams.builder()\n    .putAdditionalHeader("Secret-Header", "42")\n    .putAdditionalQueryParam("secret_query_param", "42")\n    .putAdditionalBodyProperty("secretProperty", JsonValue.from("42"))\n    .build()\n```\n\nThese can be accessed on the built object later using the `_additionalHeaders()`,       `_additionalQueryParams()`, and `_additionalBodyProperties()` methods.\n\nTo set a documented parameter or property to an undocumented or not yet supported _value_, pass a       [`JsonValue`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/core/Values.kt) object to its setter:\n\n```kotlin\nimport com.hello_world_testingggg.api.models.pet.Pet\nimport com.hello_world_testingggg.api.models.pet.PetUpdateParams\n\nval params: PetUpdateParams = PetUpdateParams.builder()\n    .pet(Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build())\n    .build()\n```\n\nThe most straightforward way to create a [`JsonValue`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/core/Values.kt) is using its       `from(...)` method:\n\n```kotlin\nimport com.hello_world_testingggg.api.core.JsonValue\n\n// Create primitive JSON values\nval nullValue: JsonValue = JsonValue.from(null)\nval booleanValue: JsonValue = JsonValue.from(true)\nval numberValue: JsonValue = JsonValue.from(42)\nval stringValue: JsonValue = JsonValue.from("Hello World!")\n\n// Create a JSON array value equivalent to `["Hello", "World"]`\nval arrayValue: JsonValue = JsonValue.from(listOf(\n  "Hello", "World"\n))\n\n// Create a JSON object value equivalent to `{ "a": 1, "b": 2 }`\nval objectValue: JsonValue = JsonValue.from(mapOf(\n  "a" to 1, "b" to 2\n))\n\n// Create an arbitrarily nested JSON equivalent to:\n// {\n//   "a": [1, 2],\n//   "b": [3, 4]\n// }\nval complexValue: JsonValue = JsonValue.from(mapOf(\n  "a" to listOf(\n    1, 2\n  ), "b" to listOf(\n    3, 4\n  )\n))\n```\n\nNormally a `Builder` class\'s `build` method will throw         [`IllegalStateException`](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalStateException.html)         if any required parameter or property is unset.\n\nTo forcibly omit a required parameter or property, pass [`JsonMissing`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/core/Values.kt):\n\n```kotlin\nimport com.hello_world_testingggg.api.core.JsonMissing\nimport com.hello_world_testingggg.api.models.pet.Pet\nimport com.hello_world_testingggg.api.models.pet.PetUpdateParams\n\nval params: PetUpdateParams = PetUpdateParams.builder()\n    .pet(Pet.builder()\n        .name("doggie")\n        .addPhotoUrl("string")\n        .build())\n    .name(JsonMissing.of())\n    .build()\n```\n\n### Response properties\n\nTo access undocumented response properties, call the `_additionalProperties()` method:\n\n```kotlin\nimport com.hello_world_testingggg.api.core.JsonBoolean\nimport com.hello_world_testingggg.api.core.JsonNull\nimport com.hello_world_testingggg.api.core.JsonNumber\nimport com.hello_world_testingggg.api.core.JsonValue\n\nval additionalProperties: Map<String, JsonValue> = client.pet().update(params)._additionalProperties()\nval secretPropertyValue: JsonValue = additionalProperties.get("secretProperty")\n\nval result = when (secretPropertyValue) {\n    is JsonNull -> "It\'s null!"\n    is JsonBoolean -> "It\'s a boolean!"\n    is JsonNumber -> "It\'s a number!"\n    // Other types include `JsonMissing`, `JsonString`, `JsonArray`, and `JsonObject`\n    else -> "It\'s something else!"\n}\n```\n\nTo access a property\'s raw JSON value, which may be undocumented, call its `_` prefixed method:\n\n```kotlin\nimport com.hello_world_testingggg.api.core.JsonField\n\nval field: JsonField<Any> = client.pet().update(params)._field()\n\nif (field.isMissing()) {\n  // The property is absent from the JSON response\n} else if (field.isNull()) {\n  // The property was set to literal null\n} else {\n  // Check if value was provided as a string\n  // Other methods include `asNumber()`, `asBoolean()`, etc.\n  val jsonString: String? = field.asString();\n\n  // Try to deserialize into a custom type\n  val myObject: MyClass = field.asUnknown()!!.convert(MyClass::class.java)\n}\n```\n\n### Response validation\n\nIn rare cases, the API may return a response that doesn\'t match the expected type. For example, the SDK     may expect a property to contain a `String`, but the API could return something else.\n\nBy default, the SDK will not throw an exception in this case. It will throw     [`HelloWorldTestinggggInvalidDataException`](hello-world-testingggg-kotlin-core/src/main/kotlin/com/hello_world_testingggg/api/errors/HelloWorldTestinggggInvalidDataException.kt) only if you directly access the property.\n\nValidating the response is _not_ forwards compatible with new types from the API for existing fields.\n\nIf you would still prefer to check that the response is completely well-typed upfront, then either call     `validate()`:\n\n```kotlin\nimport com.hello_world_testingggg.api.models.pet.Pet\n\nval pet: Pet = client.pet().update(params).validate()\n```\n\nOr configure the method call to validate the response using the `responseValidation` method:\n\n```kotlin\nimport com.hello_world_testingggg.api.models.pet.Pet\n\nval pet: Pet = client.pet().update(\n  params, RequestOptions.builder().responseValidation(true).build()\n)\n```\n\nOr configure the default for all method calls at the client level:\n\n```kotlin\nimport com.hello_world_testingggg.api.client.HelloWorldTestinggggClient\nimport com.hello_world_testingggg.api.client.okhttp.HelloWorldTestinggggOkHttpClient\n\nval client: HelloWorldTestinggggClient = HelloWorldTestinggggOkHttpClient.builder()\n    .fromEnv()\n    .responseValidation(true)\n    .build()\n```\n\n## FAQ\n\n### Why don\'t you use plain `enum` classes?\n\nKotlin `enum` classes are not trivially   [forwards compatible](https://www.stainless.com/blog/making-java-enums-forwards-compatible). Using them in   the SDK could cause runtime exceptions if the API is updated to respond with a new enum value.\n\n### Why do you represent fields using `JsonField<T>` instead of just plain `T`?\n\nUsing `JsonField<T>` enables a few features:\n\n- Allowing usage of [undocumented API functionality](#undocumented-api-functionality)\n- Lazily [validating the API response against the expected shape](#response-validation)\n- Representing absent vs explicitly null values\n\n### Why don\'t you use [`data` classes](https://kotlinlang.org/docs/data-classes.html)?\n\nIt is not [backwards compatible to add new fields to a data class](https://kotlinlang.org/docs/api-guidelines-backward-compatibility.html#avoid-using-data-classes-in-your-api)   and we don\'t want to introduce a breaking change every time we add a field to a class.\n\n### Why don\'t you use checked exceptions?\n\nChecked exceptions are widely considered a mistake in the Java programming language. In fact, they were   omitted from Kotlin for this reason.\n\nChecked exceptions:\n\n- Are verbose to handle\n- Encourage error handling at the wrong level of abstraction, where nothing can be done about the error\n- Are tedious to propagate due to the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function)\n- Don\'t play well with lambdas (also due to the function coloring problem)\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/swagger-girly/kotlin/issues) with questions, bugs, or suggestions.\n',
  },
  {
    language: 'python',
    content:
      '# Hello World Testingggg Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/hello_world_testingggg.svg?label=pypi%20(stable))](https://pypi.org/project/hello_world_testingggg/)\n\nThe Hello World Testingggg Python library provides convenient access to the Hello World Testingggg REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Hello World Testingggg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=hello-world-testingggg-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImhlbGxvLXdvcmxkLXRlc3RpbmdnZ2ctbWNwIl0sImVudiI6eyJBUElfS0VZIjoiTXkgQVBJIEtleSIsIlBFVFNUT1JFX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22hello-world-testingggg-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22hello-world-testingggg-mcp%22%5D%2C%22env%22%3A%7B%22API_KEY%22%3A%22My%20API%20Key%22%2C%22PETSTORE_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [swagger.io](http://swagger.io). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from the production repo\npip install git+ssh://git@github.com/swagger-girly/python.git\n```\n> [!NOTE]\n> Once this package is [published to PyPI](https://www.stainless.com/docs/guides/publish), this will become: `pip install hello_world_testingggg`\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\n\npet = client.pet.update(\n    name="doggie",\n    photo_urls=["string"],\n)\nprint(pet.id)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncHelloWorldTestingggg` instead of `HelloWorldTestingggg` and use `await` with each API call:\n\n```python\nimport asyncio\nfrom hello_world_testingggg import AsyncHelloWorldTestingggg\n\nclient = AsyncHelloWorldTestingggg()\n\nasync def main() -> None:\n  pet = await client.pet.update(\n      name="doggie",\n      photo_urls=["string"],\n  )\n  print(pet.id)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from the production repo\npip install \'hello_world_testingggg[aiohttp] @ git+ssh://git@github.com/swagger-girly/python.git\'\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport asyncio\nfrom hello_world_testingggg import DefaultAioHttpClient\nfrom hello_world_testingggg import AsyncHelloWorldTestingggg\n\nasync def main() -> None:\n  async with AsyncHelloWorldTestingggg(\n    http_client=DefaultAioHttpClient(),\n) as client:\n    pet = await client.pet.update(\n        name="doggie",\n        photo_urls=["string"],\n    )\n    print(pet.id)\n\nasyncio.run(main())\n```\n\n## Streaming responses\n\nWe provide support for streaming responses using Server Side Events (SSE).\n\n```python\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\n\nstream = client.pet.watch_status(\n    pet_id=0,\n)\nfor pet in stream:\n  print(pet.id)\n```\n\nThe async client uses the exact same interface.\n\n```python\nfrom hello_world_testingggg import AsyncHelloWorldTestingggg\n\nclient = AsyncHelloWorldTestingggg()\n\nstream = await client.pet.watch_status(\n    pet_id=0,\n)\nasync for pet in stream:\n  print(pet.id)\n```\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n## Pagination\n\nList methods in the Hello World Testingggg API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```python\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\n\nall_pets = []\n# Automatically fetches more pages as needed.\nfor pet in client.pet.list():\n    # Do something with pet here\n    all_pets.append(pet)\nprint(all_pets)\n```\n\nOr, asynchronously:\n\n```python\nimport asyncio\nfrom hello_world_testingggg import AsyncHelloWorldTestingggg\n\nclient = AsyncHelloWorldTestingggg()\n\nasync def main() -> None:\n    all_pets = []\n    # Iterate through items across all pages, issuing requests as needed.\n    async for pet in client.pet.list():\n        all_pets.append(pet)\n    print(all_pets)\n\nasyncio.run(main())\n```\n\nAlternatively, you can use the `.has_next_page()`, `.next_page_info()`, or  `.get_next_page()` methods for more granular control working with pages:\n\n```python\nfirst_page = await client.pet.list()\nif first_page.has_next_page():\n    print(f"will fetch next page using these details: {first_page.next_page_info()}")\n    next_page = await first_page.get_next_page()\n    print(f"number of items we just fetched: {len(next_page.items)}")\n\n# Remove `await` for non-async usage.\n```\n\nOr just work directly with the returned data:\n\n```python\nfirst_page = await client.pet.list()\n\nprint(f"next page cursor: {first_page.next_cursor}") # => "next page cursor: ..."\nfor pet in first_page.items:\n    print(pet.id)\n\n# Remove `await` for non-async usage.\n```\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\n\npet = client.pet.update(\n    name="doggie",\n    photo_urls=["string"],\n    category={},\n)\nprint(pet.category)\n```\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed as `bytes`, or a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance or a tuple of `(filename, contents, media type)`.\n\n```python\nfrom pathlib import Path\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\n\nclient.files.update(\n    path="path",\n    file=Path("/path/to/file"),\n)\n```\n\nThe async client uses the exact same interface. If you pass a [`PathLike`](https://docs.python.org/3/library/os.html#os.PathLike) instance, the file contents will be read asynchronously automatically.\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `hello_world_testingggg.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `hello_world_testingggg.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `hello_world_testingggg.APIError`.\n\n```python\nimport hello_world_testingggg\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\n\ntry:\n    client.pet.update(\n        name="doggie",\n        photo_urls=["string"],\n    )\nexcept hello_world_testingggg.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept hello_world_testingggg.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept hello_world_testingggg.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom hello_world_testingggg import HelloWorldTestingggg\n\n# Configure the default for all requests:\nclient = HelloWorldTestingggg(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).pet.update(\n    name="doggie",\n    photo_urls=["string"],\n)\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom hello_world_testingggg import HelloWorldTestingggg\n\n# Configure the default for all requests:\nclient = HelloWorldTestingggg(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = HelloWorldTestingggg(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).pet.update(\n    name="doggie",\n    photo_urls=["string"],\n)\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `HELLO_WORLD_TESTINGGGG_LOG` to `info`.\n\n```shell\n$ export HELLO_WORLD_TESTINGGGG_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nclient = HelloWorldTestingggg()\nresponse = client.pet.with_raw_response.update(\n    name="doggie",\n    photo_urls=["string"],\n)\nprint(response.headers.get(\'X-My-Header\'))\n\npet = response.parse()  # get the object that `pet.update()` would have returned\nprint(pet.id)\n```\n\nThese methods return an [`APIResponse`](https://github.com/swagger-girly/python/tree/main/src/hello_world_testingggg/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/swagger-girly/python/tree/main/src/hello_world_testingggg/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.pet.with_streaming_response.update(\n    name="doggie",\n    photo_urls=["string"],\n) as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom hello_world_testingggg import HelloWorldTestingggg, DefaultHttpxClient\n\nclient = HelloWorldTestingggg(\n    # Or use the `HELLO_WORLD_TESTINGGGG_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom hello_world_testingggg import HelloWorldTestingggg\n\nwith HelloWorldTestingggg() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/swagger-girly/python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport hello_world_testingggg\nprint(hello_world_testingggg.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'ruby',
    content:
      '# Hello World Testingggg Ruby API library\n\nThe Hello World Testingggg Ruby library provides convenient access to the Hello World Testingggg REST API from any Ruby 3.2.0+ application. It ships with comprehensive types & docstrings in Yard, RBS, and RBI – [see below](https://github.com/swagger-girly/ruby#Sorbet) for usage with Sorbet. The standard library\'s `net/http` is used as the HTTP transport, with connection pooling via the `connection_pool` gem.\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Hello World Testingggg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=hello-world-testingggg-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImhlbGxvLXdvcmxkLXRlc3RpbmdnZ2ctbWNwIl0sImVudiI6eyJBUElfS0VZIjoiTXkgQVBJIEtleSIsIlBFVFNUT1JFX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22hello-world-testingggg-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22hello-world-testingggg-mcp%22%5D%2C%22env%22%3A%7B%22API_KEY%22%3A%22My%20API%20Key%22%2C%22PETSTORE_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nDocumentation for releases of this gem can be found [on RubyDoc](https://gemdocs.org/gems/hello-world-testingggg).\n\nThe REST API documentation can be found on [swagger.io](http://swagger.io).\n\n## Installation\n\nTo use this gem, install via Bundler by adding the following to your application\'s `Gemfile`:\n\n<!-- x-release-please-start-version -->\n\n```ruby\ngem "hello-world-testingggg", "~> 0.0.1"\n```\n\n<!-- x-release-please-end -->\n\n## Usage\n\n```ruby\nrequire "bundler/setup"\nrequire "hello_world_testingggg"\n\nhello_world_testingggg = HelloWorldTestingggg::Client.new\n\npet = hello_world_testingggg.pet.update(name: "doggie", photo_urls: ["string"])\n\nputs(pet.id)\n```\n\n### Streaming\n\nWe provide support for streaming responses using Server-Sent Events (SSE).\n\n```ruby\nstream = hello_world_testingggg.pet.watch_status_streaming\n\nstream.each do |pet|\n  puts(pet.id)\nend\n```\n\n### Pagination\n\nList methods in the Hello World Testingggg API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```ruby\npage = hello_world_testingggg.pet.list\n\n# Fetch single item from page.\npet = page.items[0]\nputs(pet.id)\n\n# Automatically fetches more pages as needed.\npage.auto_paging_each do |pet|\n  puts(pet.id)\nend\n```\n\nAlternatively, you can use the `#next_page?` and `#next_page` methods for more granular control working with pages.\n\n```ruby\nif page.next_page?\n  new_page = page.next_page\n  puts(new_page.items[0].id)\nend\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads can be passed as raw contents, a [`Pathname`](https://rubyapi.org/3.2/o/pathname) instance, [`StringIO`](https://rubyapi.org/3.2/o/stringio), or more.\n\n```ruby\nrequire "pathname"\n\n# Use `Pathname` to send the filename and/or avoid paging a large file into memory:\nfile = hello_world_testingggg.files.update(file: Pathname("/path/to/file"))\n\n# Alternatively, pass file contents or a `StringIO` directly:\nfile = hello_world_testingggg.files.update(file: File.read("/path/to/file"))\n\n# Or, to control the filename and/or content type:\nfile =\n  HelloWorldTestingggg::FilePart.new(\n    File.read("/path/to/file"),\n    filename: "/path/to/file",\n    content_type: "…"\n  )\nfile = hello_world_testingggg.files.update(file: file)\n\nputs(file.lastModified)\n```\n\nNote that you can also pass a raw `IO` descriptor, but this disables retries, as the library can\'t be sure if the descriptor is a file or pipe (which cannot be rewound).\n\n### Handling errors\n\nWhen the library is unable to connect to the API, or if the API returns a non-success status code (i.e., 4xx or 5xx response), a subclass of `HelloWorldTestingggg::Errors::APIError` will be thrown:\n\n```ruby\nbegin\n  pet = hello_world_testingggg.pet.update(name: "doggie", photo_urls: ["string"])\nrescue HelloWorldTestingggg::Errors::APIConnectionError => e\n  puts("The server could not be reached")\n  puts(e.cause)  # an underlying Exception, likely raised within `net/http`\nrescue HelloWorldTestingggg::Errors::RateLimitError => e\n  puts("A 429 status code was received; we should back off a bit.")\nrescue HelloWorldTestingggg::Errors::APIStatusError => e\n  puts("Another non-200-range status code was received")\n  puts(e.status)\nend\n```\n\nError codes are as follows:\n\n| Cause            | Error Type                 |\n| ---------------- | -------------------------- |\n| HTTP 400         | `BadRequestError`          |\n| HTTP 401         | `AuthenticationError`      |\n| HTTP 403         | `PermissionDeniedError`    |\n| HTTP 404         | `NotFoundError`            |\n| HTTP 409         | `ConflictError`            |\n| HTTP 422         | `UnprocessableEntityError` |\n| HTTP 429         | `RateLimitError`           |\n| HTTP >= 500      | `InternalServerError`      |\n| Other HTTP error | `APIStatusError`           |\n| Timeout          | `APITimeoutError`          |\n| Network error    | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\n\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict, 429 Rate Limit, >=500 Internal errors, and timeouts will all be retried by default.\n\nYou can use the `max_retries` option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nhello_world_testingggg = HelloWorldTestingggg::Client.new(\n  max_retries: 0 # default is 2\n)\n\n# Or, configure per-request:\nhello_world_testingggg.pet.update(\n  name: "doggie",\n  photo_urls: ["string"],\n  request_options: {max_retries: 5}\n)\n```\n\n### Timeouts\n\nBy default, requests will time out after 60 seconds. You can use the timeout option to configure or disable this:\n\n```ruby\n# Configure the default for all requests:\nhello_world_testingggg = HelloWorldTestingggg::Client.new(\n  timeout: nil # default is 60\n)\n\n# Or, configure per-request:\nhello_world_testingggg.pet.update(name: "doggie", photo_urls: ["string"], request_options: {timeout: 5})\n```\n\nOn timeout, `HelloWorldTestingggg::Errors::APITimeoutError` is raised.\n\nNote that requests that time out are retried by default.\n\n## Advanced concepts\n\n### BaseModel\n\nAll parameter and response objects inherit from `HelloWorldTestingggg::Internal::Type::BaseModel`, which provides several conveniences, including:\n\n1. All fields, including unknown ones, are accessible with `obj[:prop]` syntax, and can be destructured with `obj => {prop: prop}` or pattern-matching syntax.\n\n2. Structural equivalence for equality; if two API calls return the same values, comparing the responses with == will return true.\n\n3. Both instances and the classes themselves can be pretty-printed.\n\n4. Helpers such as `#to_h`, `#deep_to_h`, `#to_json`, and `#to_yaml`.\n\n### Making custom or undocumented requests\n\n#### Undocumented properties\n\nYou can send undocumented parameters to any endpoint, and read undocumented response properties, like so:\n\nNote: the `extra_` parameters of the same name overrides the documented parameters.\n\n```ruby\npet =\n  hello_world_testingggg.pet.update(\n    name: "doggie",\n    photo_urls: ["string"],\n    request_options: {\n      extra_query: {my_query_parameter: value},\n      extra_body: {my_body_parameter: value},\n      extra_headers: {"my-header": value}\n    }\n  )\n\nputs(pet[:my_undocumented_property])\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` under the `request_options:` parameter when making a request, as seen in the examples above.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints while retaining the benefit of auth, retries, and so on, you can make requests using `client.request`, like so:\n\n```ruby\nresponse = client.request(\n  method: :post,\n  path: \'/undocumented/endpoint\',\n  query: {"dog": "woof"},\n  headers: {"useful-header": "interesting-value"},\n  body: {"hello": "world"}\n)\n```\n\n### Concurrency & connection pooling\n\nThe `HelloWorldTestingggg::Client` instances are threadsafe, but are only are fork-safe when there are no in-flight HTTP requests.\n\nEach instance of `HelloWorldTestingggg::Client` has its own HTTP connection pool with a default size of 99. As such, we recommend instantiating the client once per application in most settings.\n\nWhen all available connections from the pool are checked out, requests wait for a new connection to become available, with queue time counting towards the request timeout.\n\nUnless otherwise specified, other classes in the SDK do not have locks protecting their underlying data structure.\n\n## Sorbet\n\nThis library provides comprehensive [RBI](https://sorbet.org/docs/rbi) definitions, and has no dependency on sorbet-runtime.\n\nYou can provide typesafe request parameters like so:\n\n```ruby\nhello_world_testingggg.pet.update(name: "doggie", photo_urls: ["string"])\n```\n\nOr, equivalently:\n\n```ruby\n# Hashes work, but are not typesafe:\nhello_world_testingggg.pet.update(name: "doggie", photo_urls: ["string"])\n\n# You can also splat a full Params class:\nparams = HelloWorldTestingggg::PetUpdateParams.new(name: "doggie", photo_urls: ["string"])\nhello_world_testingggg.pet.update(**params)\n```\n\n### Enums\n\nSince this library does not depend on `sorbet-runtime`, it cannot provide [`T::Enum`](https://sorbet.org/docs/tenum) instances. Instead, we provide "tagged symbols" instead, which is always a primitive at runtime:\n\n```ruby\n# :available\nputs(HelloWorldTestingggg::PetStatus::AVAILABLE)\n\n# Revealed type: `T.all(HelloWorldTestingggg::PetStatus, Symbol)`\nT.reveal_type(HelloWorldTestingggg::PetStatus::AVAILABLE)\n```\n\nEnum parameters have a "relaxed" type, so you can either pass in enum constants or their literal value:\n\n```ruby\n# Using the enum constants preserves the tagged type information:\nhello_world_testingggg.pet.create(\n  status: HelloWorldTestingggg::PetStatus::AVAILABLE,\n  # …\n)\n\n# Literal values are also permissible:\nhello_world_testingggg.pet.create(\n  status: :available,\n  # …\n)\n```\n\n## Versioning\n\nThis package follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions. As the library is in initial development and has a major version of `0`, APIs may change at any time.\n\nThis package considers improvements to the (non-runtime) `*.rbi` and `*.rbs` type definitions to be non-breaking changes.\n\n## Requirements\n\nRuby 3.2.0 or higher.\n\n## Contributing\n\nSee [the contributing documentation](https://github.com/swagger-girly/ruby/tree/main/CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Hello World Testingggg TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/hello-world-testingggg.svg?label=npm%20(stable))](https://npmjs.org/package/hello-world-testingggg) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/hello-world-testingggg)\n\nThis library provides convenient access to the Hello World Testingggg REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [swagger.io](http://swagger.io). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Hello World Testingggg MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=hello-world-testingggg-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImhlbGxvLXdvcmxkLXRlc3RpbmdnZ2ctbWNwIl0sImVudiI6eyJBUElfS0VZIjoiTXkgQVBJIEtleSIsIlBFVFNUT1JFX1dFQkhPT0tfU0VDUkVUIjoiTXkgV2ViaG9vayBTZWNyZXQifX0)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22hello-world-testingggg-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22hello-world-testingggg-mcp%22%5D%2C%22env%22%3A%7B%22API_KEY%22%3A%22My%20API%20Key%22%2C%22PETSTORE_WEBHOOK_SECRET%22%3A%22My%20Webhook%20Secret%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install hello-world-testingggg\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst pet = await client.pet.update({ name: 'doggie', photoUrls: ['string'] });\n\nconsole.log(pet.id);\n```\n\n## Streaming responses\n\nWe provide support for streaming responses using Server Sent Events (SSE).\n\n```ts\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst stream = await client.pet.watchStatus(0);\nfor await (const pet of stream) {\n  console.log(pet.id);\n}\n```\n\nIf you need to cancel a stream, you can `break` from the loop\nor call `stream.controller.abort()`.\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\nconst params: HelloWorldTestingggg.PetUpdateParams = { name: 'doggie', photoUrls: ['string'] };\nconst pet: HelloWorldTestingggg.Pet = await client.pet.update(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport HelloWorldTestingggg, { toFile } from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.files.upload({ file: fs.createReadStream('/path/to/file') });\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.files.upload({ file: new File(['my bytes'], 'file') });\n\n// You can also pass a `fetch` `Response`:\nawait client.files.upload({ file: await fetch('https://somesite/file') });\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.files.upload({ file: await toFile(Buffer.from('my bytes'), 'file') });\nawait client.files.upload({ file: await toFile(new Uint8Array([0, 1, 2]), 'file') });\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst pet = await client.pet\n  .update({ name: 'doggie', photoUrls: ['string'] })\n  .catch(async (err) => {\n    if (err instanceof HelloWorldTestingggg.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new HelloWorldTestingggg({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.pet.update({ name: 'doggie', photoUrls: ['string'] }, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new HelloWorldTestingggg({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.pet.update({ name: 'doggie', photoUrls: ['string'] }, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the HelloWorldTestingggg API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllPets(params) {\n  const allPets = [];\n  // Automatically fetches more pages as needed.\n  for await (const pet of client.pet.list()) {\n    allPets.push(pet);\n  }\n  return allPets;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.pet.list();\nfor (const pet of page.items) {\n  console.log(pet);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new HelloWorldTestingggg();\n\nconst response = await client.pet.update({ name: 'doggie', photoUrls: ['string'] }).asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: pet, response: raw } = await client.pet\n  .update({ name: 'doggie', photoUrls: ['string'] })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(pet.id);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `HELLO_WORLD_TESTINGGGG_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport HelloWorldTestingggg from 'hello-world-testingggg';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new HelloWorldTestingggg({\n  logger: logger.child({ name: 'HelloWorldTestingggg' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.pet.update({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport HelloWorldTestingggg from 'hello-world-testingggg';\nimport fetch from 'my-fetch';\n\nconst client = new HelloWorldTestingggg({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport HelloWorldTestingggg from 'hello-world-testingggg';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new HelloWorldTestingggg({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport HelloWorldTestingggg from 'hello-world-testingggg';\n\nconst client = new HelloWorldTestingggg({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport HelloWorldTestingggg from 'npm:hello-world-testingggg';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new HelloWorldTestingggg({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/swagger-girly/typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
