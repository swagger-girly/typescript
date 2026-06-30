# Pet

Types:

- <code><a href="./src/resources/pet.ts">Pet</a></code>
- <code><a href="./src/resources/pet.ts">PetFindByStatusResponse</a></code>
- <code><a href="./src/resources/pet.ts">PetFindByTagsResponse</a></code>
- <code><a href="./src/resources/pet.ts">PetListFakePageInferredResponse</a></code>
- <code><a href="./src/resources/pet.ts">PetListUnpaginatedResponse</a></code>
- <code><a href="./src/resources/pet.ts">PetUploadImageResponse</a></code>
- <code><a href="./src/resources/pet.ts">ConnectClientEvent</a></code>
- <code><a href="./src/resources/pet.ts">ConnectServerEvent</a></code>

Methods:

- <code title="post /pet">client.pet.<a href="./src/resources/pet.ts">create</a>({ ...params }) -> Pet</code>
- <code title="get /pet/{petId}">client.pet.<a href="./src/resources/pet.ts">retrieve</a>(petID) -> Pet</code>
- <code title="put /pet">client.pet.<a href="./src/resources/pet.ts">update</a>({ ...params }) -> Pet</code>
- <code title="get /pet">client.pet.<a href="./src/resources/pet.ts">list</a>({ ...params }) -> PetsCustomCursorPage</code>
- <code title="delete /pet/{petId}">client.pet.<a href="./src/resources/pet.ts">delete</a>(petID) -> void</code>
- <code title="get /pet/findByStatus">client.pet.<a href="./src/resources/pet.ts">findByStatus</a>({ ...params }) -> PetFindByStatusResponse</code>
- <code title="get /pet/findByTags">client.pet.<a href="./src/resources/pet.ts">findByTags</a>({ ...params }) -> PetFindByTagsResponse</code>
- <code title="get /pet/fake-page">client.pet.<a href="./src/resources/pet.ts">listFakePage</a>() -> PetsXFakeSinglePage</code>
- <code title="get /pet/fake-page-inferred">client.pet.<a href="./src/resources/pet.ts">listFakePageInferred</a>() -> PetListFakePageInferredResponse</code>
- <code title="get /pet/unpaginated">client.pet.<a href="./src/resources/pet.ts">listUnpaginated</a>({ ...params }) -> PetListUnpaginatedResponse</code>
- <code title="post /pet/{petId}">client.pet.<a href="./src/resources/pet.ts">updateWithForm</a>(petID, { ...params }) -> void</code>
- <code title="post /pet/{petId}/uploadImage">client.pet.<a href="./src/resources/pet.ts">uploadImage</a>(petID, body, { ...params }) -> PetUploadImageResponse</code>
- <code title="get /pet/{petId}/status/stream">client.pet.<a href="./src/resources/pet.ts">watchStatus</a>(petID, { ...params }) -> Pet</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">Archive</a></code>
- <code><a href="./src/resources/files.ts">File</a></code>
- <code><a href="./src/resources/files.ts">Fileslist</a></code>

Methods:

- <code title="put /files/{path}">client.files.<a href="./src/resources/files.ts">update</a>(path\_, { ...params }) -> File</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>() -> Fileslist</code>
- <code title="delete /files/{path}">client.files.<a href="./src/resources/files.ts">delete</a>(path\_) -> void</code>
- <code title="post /files/archive">client.files.<a href="./src/resources/files.ts">createArchive</a>({ ...params }) -> Archive</code>
- <code title="get /files/{path}">client.files.<a href="./src/resources/files.ts">download</a>(path\_) -> Response</code>
- <code title="post /files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> File</code>
- <code title="post /files/direct">client.files.<a href="./src/resources/files.ts">uploadDirect</a>(body, { ...params }) -> File</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles.ts">Profile</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileCreateRequest</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileLegacySearchResponse</a></code>

Methods:

- <code title="post /profiles">client.profiles.<a href="./src/resources/profiles.ts">create</a>({ ...params }) -> Profile</code>
- <code title="get /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">retrieve</a>(profileID) -> Profile</code>
- <code title="patch /profiles/{profileId}">client.profiles.<a href="./src/resources/profiles.ts">update</a>(profileID, { ...params }) -> Profile</code>
- <code title="get /profiles/legacy-search">client.profiles.<a href="./src/resources/profiles.ts">legacySearch</a>({ ...params }) -> ProfileLegacySearchResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">PetCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PetUpdatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PetInventoryLowWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PetModerationWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">StoreReportGeneratedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ParsedWebhookEvent</a></code>

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">parsed</a>(body) -> void</code>

# Store

Types:

- <code><a href="./src/resources/store/store.ts">StoreListInventoryResponse</a></code>

Methods:

- <code title="get /store/inventory">client.store.<a href="./src/resources/store/store.ts">listInventory</a>() -> StoreListInventoryResponse</code>

## Order

Types:

- <code><a href="./src/resources/store/order.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/store/order.ts">OrderRetrieveResponse</a></code>

Methods:

- <code title="post /store/order">client.store.order.<a href="./src/resources/store/order.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="get /store/order/{orderId}">client.store.order.<a href="./src/resources/store/order.ts">retrieve</a>(orderID) -> OrderRetrieveResponse</code>
- <code title="delete /store/order/{orderId}">client.store.order.<a href="./src/resources/store/order.ts">delete</a>(orderID) -> void</code>

## Reports

Types:

- <code><a href="./src/resources/store/reports/reports.ts">DailyInventory</a></code>
- <code><a href="./src/resources/store/reports/reports.ts">InventoryResponse</a></code>
- <code><a href="./src/resources/store/reports/reports.ts">Report</a></code>
- <code><a href="./src/resources/store/reports/reports.ts">ReportList</a></code>
- <code><a href="./src/resources/store/reports/reports.ts">ReportEmbedResponse</a></code>

Methods:

- <code title="get /store/reports/{reportId}">client.store.reports.<a href="./src/resources/store/reports/reports.ts">retrieve</a>(reportID) -> Report</code>
- <code title="get /store/reports">client.store.reports.<a href="./src/resources/store/reports/reports.ts">list</a>({ ...params }) -> ReportsReportCursorPage</code>
- <code title="get /store/reports/{reportId}/embed">client.store.reports.<a href="./src/resources/store/reports/reports.ts">embed</a>(reportID) -> string</code>
- <code title="post /store/reports/{reportId}/pause">client.store.reports.<a href="./src/resources/store/reports/reports.ts">pause</a>(reportID, { ...params }) -> void</code>

### Inventory

Methods:

- <code title="get /store/reports/{reportId}/inventory">client.store.reports.inventory.<a href="./src/resources/store/reports/inventory/inventory.ts">list</a>(reportID) -> InventoryResponse</code>

#### Daily

Methods:

- <code title="get /store/reports/{reportId}/inventory/daily/{date}">client.store.reports.inventory.daily.<a href="./src/resources/store/reports/inventory/daily.ts">retrieve</a>(date, { ...params }) -> DailyInventory</code>

# User

Types:

- <code><a href="./src/resources/user.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/user.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/user.ts">UserCreateWithListResponse</a></code>
- <code><a href="./src/resources/user.ts">UserLoginResponse</a></code>

Methods:

- <code title="post /user">client.user.<a href="./src/resources/user.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /user/{username}">client.user.<a href="./src/resources/user.ts">retrieve</a>(username) -> UserRetrieveResponse</code>
- <code title="put /user/{username}">client.user.<a href="./src/resources/user.ts">update</a>(username, { ...params }) -> void</code>
- <code title="delete /user/{username}">client.user.<a href="./src/resources/user.ts">delete</a>(username) -> void</code>
- <code title="post /user/createWithList">client.user.<a href="./src/resources/user.ts">createWithList</a>([ ...body ]) -> UserCreateWithListResponse</code>
- <code title="get /user/login">client.user.<a href="./src/resources/user.ts">login</a>({ ...params }) -> string</code>
- <code title="get /user/logout">client.user.<a href="./src/resources/user.ts">logout</a>() -> void</code>
