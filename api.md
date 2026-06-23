# Pet

Types:

- <code><a href="./src/resources/pet.ts">Pet</a></code>
- <code><a href="./src/resources/pet.ts">PetFindByStatusResponse</a></code>
- <code><a href="./src/resources/pet.ts">PetFindByTagsResponse</a></code>
- <code><a href="./src/resources/pet.ts">PetUploadImageResponse</a></code>

Methods:

- <code title="post /pet">client.pet.<a href="./src/resources/pet.ts">create</a>({ ...params }) -> Pet</code>
- <code title="get /pet/{petId}">client.pet.<a href="./src/resources/pet.ts">retrieve</a>(petID) -> Pet</code>
- <code title="put /pet">client.pet.<a href="./src/resources/pet.ts">update</a>({ ...params }) -> Pet</code>
- <code title="delete /pet/{petId}">client.pet.<a href="./src/resources/pet.ts">delete</a>(petID) -> void</code>
- <code title="get /pet/findByStatus">client.pet.<a href="./src/resources/pet.ts">findByStatus</a>({ ...params }) -> PetFindByStatusResponse</code>
- <code title="get /pet/findByTags">client.pet.<a href="./src/resources/pet.ts">findByTags</a>({ ...params }) -> PetFindByTagsResponse</code>
- <code title="post /pet/{petId}">client.pet.<a href="./src/resources/pet.ts">updateWithForm</a>(petID, { ...params }) -> void</code>
- <code title="post /pet/{petId}/uploadImage">client.pet.<a href="./src/resources/pet.ts">uploadImage</a>(petID, body, { ...params }) -> PetUploadImageResponse</code>

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
