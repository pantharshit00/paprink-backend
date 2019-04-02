module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.27.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCategory {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Category {
  id: ID!
  text: String!
  category: CategoryEnum!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  text: String!
  category: CategoryEnum!
  posts: PostCreateManyWithoutCategoriesInput
}

input CategoryCreateManyWithoutPostsInput {
  create: [CategoryCreateWithoutPostsInput!]
  connect: [CategoryWhereUniqueInput!]
}

input CategoryCreateWithoutPostsInput {
  text: String!
  category: CategoryEnum!
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryEnum {
  TECH
  FIN
  DIGIMARK
  CODING
  TUTORIAL
  HOWTO
  WRITING
  INSPIRE
  SCIENCE
  POLITICS
  LIFESTYLE
  FOOD
  BUSSINESS
  ENTREPRENEUR
  HISTORY
  HEALTH
  PET
  PARENTHOOD
  TRAVEL
  INDIA
  CHINA
  US
  UK
  WORLD
  NEWS
  REVIEW
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  category_ASC
  category_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  text: String!
  category: CategoryEnum!
}

input CategoryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  category: CategoryEnum
  category_not: CategoryEnum
  category_in: [CategoryEnum!]
  category_not_in: [CategoryEnum!]
  AND: [CategoryScalarWhereInput!]
  OR: [CategoryScalarWhereInput!]
  NOT: [CategoryScalarWhereInput!]
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
  OR: [CategorySubscriptionWhereInput!]
  NOT: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateInput {
  text: String
  category: CategoryEnum
  posts: PostUpdateManyWithoutCategoriesInput
}

input CategoryUpdateManyDataInput {
  text: String
  category: CategoryEnum
}

input CategoryUpdateManyMutationInput {
  text: String
  category: CategoryEnum
}

input CategoryUpdateManyWithoutPostsInput {
  create: [CategoryCreateWithoutPostsInput!]
  delete: [CategoryWhereUniqueInput!]
  connect: [CategoryWhereUniqueInput!]
  set: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueWithoutPostsInput!]
  upsert: [CategoryUpsertWithWhereUniqueWithoutPostsInput!]
  deleteMany: [CategoryScalarWhereInput!]
  updateMany: [CategoryUpdateManyWithWhereNestedInput!]
}

input CategoryUpdateManyWithWhereNestedInput {
  where: CategoryScalarWhereInput!
  data: CategoryUpdateManyDataInput!
}

input CategoryUpdateWithoutPostsDataInput {
  text: String
  category: CategoryEnum
}

input CategoryUpdateWithWhereUniqueWithoutPostsInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateWithoutPostsDataInput!
}

input CategoryUpsertWithWhereUniqueWithoutPostsInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateWithoutPostsDataInput!
  create: CategoryCreateWithoutPostsInput!
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  category: CategoryEnum
  category_not: CategoryEnum
  category_in: [CategoryEnum!]
  category_not_in: [CategoryEnum!]
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  AND: [CategoryWhereInput!]
  OR: [CategoryWhereInput!]
  NOT: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
  category: CategoryEnum
}

scalar DateTime

scalar Json

scalar Long

type Mutation {
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  title: String!
  editorSerializedOutput: Json!
  editorCurrentContent: Json!
  editorHtml: String!
  updatedAt: DateTime!
  createdAt: DateTime!
  author: User
  authorId: String!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
  thumbnail: Json!
  status: PostStatus!
  slug: String!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  editorSerializedOutput: Json!
  editorCurrentContent: Json!
  editorHtml: String!
  author: UserCreateOneWithoutPostsInput
  authorId: String!
  categories: CategoryCreateManyWithoutPostsInput
  thumbnail: Json!
  status: PostStatus!
  slug: String!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutCategoriesInput {
  create: [PostCreateWithoutCategoriesInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  title: String!
  editorSerializedOutput: Json!
  editorCurrentContent: Json!
  editorHtml: String!
  authorId: String!
  categories: CategoryCreateManyWithoutPostsInput
  thumbnail: Json!
  status: PostStatus!
  slug: String!
}

input PostCreateWithoutCategoriesInput {
  title: String!
  editorSerializedOutput: Json!
  editorCurrentContent: Json!
  editorHtml: String!
  author: UserCreateOneWithoutPostsInput
  authorId: String!
  thumbnail: Json!
  status: PostStatus!
  slug: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  editorSerializedOutput_ASC
  editorSerializedOutput_DESC
  editorCurrentContent_ASC
  editorCurrentContent_DESC
  editorHtml_ASC
  editorHtml_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
  authorId_ASC
  authorId_DESC
  thumbnail_ASC
  thumbnail_DESC
  status_ASC
  status_DESC
  slug_ASC
  slug_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  editorSerializedOutput: Json!
  editorCurrentContent: Json!
  editorHtml: String!
  updatedAt: DateTime!
  createdAt: DateTime!
  authorId: String!
  thumbnail: Json!
  status: PostStatus!
  slug: String!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  editorHtml: String
  editorHtml_not: String
  editorHtml_in: [String!]
  editorHtml_not_in: [String!]
  editorHtml_lt: String
  editorHtml_lte: String
  editorHtml_gt: String
  editorHtml_gte: String
  editorHtml_contains: String
  editorHtml_not_contains: String
  editorHtml_starts_with: String
  editorHtml_not_starts_with: String
  editorHtml_ends_with: String
  editorHtml_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  authorId: String
  authorId_not: String
  authorId_in: [String!]
  authorId_not_in: [String!]
  authorId_lt: String
  authorId_lte: String
  authorId_gt: String
  authorId_gte: String
  authorId_contains: String
  authorId_not_contains: String
  authorId_starts_with: String
  authorId_not_starts_with: String
  authorId_ends_with: String
  authorId_not_ends_with: String
  status: PostStatus
  status_not: PostStatus
  status_in: [PostStatus!]
  status_not_in: [PostStatus!]
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

enum PostStatus {
  PUBLISHED
  DRAFT
  DELETED
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  editorSerializedOutput: Json
  editorCurrentContent: Json
  editorHtml: String
  author: UserUpdateOneWithoutPostsInput
  authorId: String
  categories: CategoryUpdateManyWithoutPostsInput
  thumbnail: Json
  status: PostStatus
  slug: String
}

input PostUpdateManyDataInput {
  title: String
  editorSerializedOutput: Json
  editorCurrentContent: Json
  editorHtml: String
  authorId: String
  thumbnail: Json
  status: PostStatus
  slug: String
}

input PostUpdateManyMutationInput {
  title: String
  editorSerializedOutput: Json
  editorCurrentContent: Json
  editorHtml: String
  authorId: String
  thumbnail: Json
  status: PostStatus
  slug: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutCategoriesInput {
  create: [PostCreateWithoutCategoriesInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutCategoriesInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutCategoriesInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  editorSerializedOutput: Json
  editorCurrentContent: Json
  editorHtml: String
  authorId: String
  categories: CategoryUpdateManyWithoutPostsInput
  thumbnail: Json
  status: PostStatus
  slug: String
}

input PostUpdateWithoutCategoriesDataInput {
  title: String
  editorSerializedOutput: Json
  editorCurrentContent: Json
  editorHtml: String
  author: UserUpdateOneWithoutPostsInput
  authorId: String
  thumbnail: Json
  status: PostStatus
  slug: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpdateWithWhereUniqueWithoutCategoriesInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutCategoriesDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostUpsertWithWhereUniqueWithoutCategoriesInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutCategoriesDataInput!
  create: PostCreateWithoutCategoriesInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  editorHtml: String
  editorHtml_not: String
  editorHtml_in: [String!]
  editorHtml_not_in: [String!]
  editorHtml_lt: String
  editorHtml_lte: String
  editorHtml_gt: String
  editorHtml_gte: String
  editorHtml_contains: String
  editorHtml_not_contains: String
  editorHtml_starts_with: String
  editorHtml_not_starts_with: String
  editorHtml_ends_with: String
  editorHtml_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  author: UserWhereInput
  authorId: String
  authorId_not: String
  authorId_in: [String!]
  authorId_not_in: [String!]
  authorId_lt: String
  authorId_lte: String
  authorId_gt: String
  authorId_gte: String
  authorId_contains: String
  authorId_not_contains: String
  authorId_starts_with: String
  authorId_not_starts_with: String
  authorId_ends_with: String
  authorId_not_ends_with: String
  categories_every: CategoryWhereInput
  categories_some: CategoryWhereInput
  categories_none: CategoryWhereInput
  status: PostStatus
  status_not: PostStatus
  status_in: [PostStatus!]
  status_not_in: [PostStatus!]
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

enum Previledge {
  SUPERADMIN
  ADMIN
  MODERATOR
  AUTHOR
  READER
}

type Query {
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  socialId: String!
  fname: String!
  lname: String!
  username: String!
  name: String!
  phone: String
  email: String!
  gender: String
  birthday: String
  bio: String
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  profilePicture: String!
  followers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  previledge: [Previledge!]!
  signUpMethod: String!
  accessToken: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  socialId: String!
  fname: String!
  lname: String!
  username: String!
  name: String!
  phone: String
  email: String!
  gender: String
  birthday: String
  bio: String
  posts: PostCreateManyWithoutAuthorInput
  profilePicture: String!
  followers: UserCreateManyInput
  previledge: UserCreatepreviledgeInput
  signUpMethod: String!
  accessToken: String!
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreatepreviledgeInput {
  set: [Previledge!]
}

input UserCreateWithoutPostsInput {
  socialId: String!
  fname: String!
  lname: String!
  username: String!
  name: String!
  phone: String
  email: String!
  gender: String
  birthday: String
  bio: String
  profilePicture: String!
  followers: UserCreateManyInput
  previledge: UserCreatepreviledgeInput
  signUpMethod: String!
  accessToken: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  socialId_ASC
  socialId_DESC
  fname_ASC
  fname_DESC
  lname_ASC
  lname_DESC
  username_ASC
  username_DESC
  name_ASC
  name_DESC
  phone_ASC
  phone_DESC
  email_ASC
  email_DESC
  gender_ASC
  gender_DESC
  birthday_ASC
  birthday_DESC
  bio_ASC
  bio_DESC
  profilePicture_ASC
  profilePicture_DESC
  signUpMethod_ASC
  signUpMethod_DESC
  accessToken_ASC
  accessToken_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  socialId: String!
  fname: String!
  lname: String!
  username: String!
  name: String!
  phone: String
  email: String!
  gender: String
  birthday: String
  bio: String
  profilePicture: String!
  previledge: [Previledge!]!
  signUpMethod: String!
  accessToken: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  socialId: String
  socialId_not: String
  socialId_in: [String!]
  socialId_not_in: [String!]
  socialId_lt: String
  socialId_lte: String
  socialId_gt: String
  socialId_gte: String
  socialId_contains: String
  socialId_not_contains: String
  socialId_starts_with: String
  socialId_not_starts_with: String
  socialId_ends_with: String
  socialId_not_ends_with: String
  fname: String
  fname_not: String
  fname_in: [String!]
  fname_not_in: [String!]
  fname_lt: String
  fname_lte: String
  fname_gt: String
  fname_gte: String
  fname_contains: String
  fname_not_contains: String
  fname_starts_with: String
  fname_not_starts_with: String
  fname_ends_with: String
  fname_not_ends_with: String
  lname: String
  lname_not: String
  lname_in: [String!]
  lname_not_in: [String!]
  lname_lt: String
  lname_lte: String
  lname_gt: String
  lname_gte: String
  lname_contains: String
  lname_not_contains: String
  lname_starts_with: String
  lname_not_starts_with: String
  lname_ends_with: String
  lname_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  gender: String
  gender_not: String
  gender_in: [String!]
  gender_not_in: [String!]
  gender_lt: String
  gender_lte: String
  gender_gt: String
  gender_gte: String
  gender_contains: String
  gender_not_contains: String
  gender_starts_with: String
  gender_not_starts_with: String
  gender_ends_with: String
  gender_not_ends_with: String
  birthday: String
  birthday_not: String
  birthday_in: [String!]
  birthday_not_in: [String!]
  birthday_lt: String
  birthday_lte: String
  birthday_gt: String
  birthday_gte: String
  birthday_contains: String
  birthday_not_contains: String
  birthday_starts_with: String
  birthday_not_starts_with: String
  birthday_ends_with: String
  birthday_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  profilePicture: String
  profilePicture_not: String
  profilePicture_in: [String!]
  profilePicture_not_in: [String!]
  profilePicture_lt: String
  profilePicture_lte: String
  profilePicture_gt: String
  profilePicture_gte: String
  profilePicture_contains: String
  profilePicture_not_contains: String
  profilePicture_starts_with: String
  profilePicture_not_starts_with: String
  profilePicture_ends_with: String
  profilePicture_not_ends_with: String
  signUpMethod: String
  signUpMethod_not: String
  signUpMethod_in: [String!]
  signUpMethod_not_in: [String!]
  signUpMethod_lt: String
  signUpMethod_lte: String
  signUpMethod_gt: String
  signUpMethod_gte: String
  signUpMethod_contains: String
  signUpMethod_not_contains: String
  signUpMethod_starts_with: String
  signUpMethod_not_starts_with: String
  signUpMethod_ends_with: String
  signUpMethod_not_ends_with: String
  accessToken: String
  accessToken_not: String
  accessToken_in: [String!]
  accessToken_not_in: [String!]
  accessToken_lt: String
  accessToken_lte: String
  accessToken_gt: String
  accessToken_gte: String
  accessToken_contains: String
  accessToken_not_contains: String
  accessToken_starts_with: String
  accessToken_not_starts_with: String
  accessToken_ends_with: String
  accessToken_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  socialId: String
  fname: String
  lname: String
  username: String
  name: String
  phone: String
  email: String
  gender: String
  birthday: String
  bio: String
  posts: PostUpdateManyWithoutAuthorInput
  profilePicture: String
  followers: UserUpdateManyInput
  previledge: UserUpdatepreviledgeInput
  signUpMethod: String
  accessToken: String
}

input UserUpdateInput {
  socialId: String
  fname: String
  lname: String
  username: String
  name: String
  phone: String
  email: String
  gender: String
  birthday: String
  bio: String
  posts: PostUpdateManyWithoutAuthorInput
  profilePicture: String
  followers: UserUpdateManyInput
  previledge: UserUpdatepreviledgeInput
  signUpMethod: String
  accessToken: String
}

input UserUpdateManyDataInput {
  socialId: String
  fname: String
  lname: String
  username: String
  name: String
  phone: String
  email: String
  gender: String
  birthday: String
  bio: String
  profilePicture: String
  previledge: UserUpdatepreviledgeInput
  signUpMethod: String
  accessToken: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  socialId: String
  fname: String
  lname: String
  username: String
  name: String
  phone: String
  email: String
  gender: String
  birthday: String
  bio: String
  profilePicture: String
  previledge: UserUpdatepreviledgeInput
  signUpMethod: String
  accessToken: String
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdatepreviledgeInput {
  set: [Previledge!]
}

input UserUpdateWithoutPostsDataInput {
  socialId: String
  fname: String
  lname: String
  username: String
  name: String
  phone: String
  email: String
  gender: String
  birthday: String
  bio: String
  profilePicture: String
  followers: UserUpdateManyInput
  previledge: UserUpdatepreviledgeInput
  signUpMethod: String
  accessToken: String
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  socialId: String
  socialId_not: String
  socialId_in: [String!]
  socialId_not_in: [String!]
  socialId_lt: String
  socialId_lte: String
  socialId_gt: String
  socialId_gte: String
  socialId_contains: String
  socialId_not_contains: String
  socialId_starts_with: String
  socialId_not_starts_with: String
  socialId_ends_with: String
  socialId_not_ends_with: String
  fname: String
  fname_not: String
  fname_in: [String!]
  fname_not_in: [String!]
  fname_lt: String
  fname_lte: String
  fname_gt: String
  fname_gte: String
  fname_contains: String
  fname_not_contains: String
  fname_starts_with: String
  fname_not_starts_with: String
  fname_ends_with: String
  fname_not_ends_with: String
  lname: String
  lname_not: String
  lname_in: [String!]
  lname_not_in: [String!]
  lname_lt: String
  lname_lte: String
  lname_gt: String
  lname_gte: String
  lname_contains: String
  lname_not_contains: String
  lname_starts_with: String
  lname_not_starts_with: String
  lname_ends_with: String
  lname_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  gender: String
  gender_not: String
  gender_in: [String!]
  gender_not_in: [String!]
  gender_lt: String
  gender_lte: String
  gender_gt: String
  gender_gte: String
  gender_contains: String
  gender_not_contains: String
  gender_starts_with: String
  gender_not_starts_with: String
  gender_ends_with: String
  gender_not_ends_with: String
  birthday: String
  birthday_not: String
  birthday_in: [String!]
  birthday_not_in: [String!]
  birthday_lt: String
  birthday_lte: String
  birthday_gt: String
  birthday_gte: String
  birthday_contains: String
  birthday_not_contains: String
  birthday_starts_with: String
  birthday_not_starts_with: String
  birthday_ends_with: String
  birthday_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  profilePicture: String
  profilePicture_not: String
  profilePicture_in: [String!]
  profilePicture_not_in: [String!]
  profilePicture_lt: String
  profilePicture_lte: String
  profilePicture_gt: String
  profilePicture_gte: String
  profilePicture_contains: String
  profilePicture_not_contains: String
  profilePicture_starts_with: String
  profilePicture_not_starts_with: String
  profilePicture_ends_with: String
  profilePicture_not_ends_with: String
  followers_every: UserWhereInput
  followers_some: UserWhereInput
  followers_none: UserWhereInput
  signUpMethod: String
  signUpMethod_not: String
  signUpMethod_in: [String!]
  signUpMethod_not_in: [String!]
  signUpMethod_lt: String
  signUpMethod_lte: String
  signUpMethod_gt: String
  signUpMethod_gte: String
  signUpMethod_contains: String
  signUpMethod_not_contains: String
  signUpMethod_starts_with: String
  signUpMethod_not_starts_with: String
  signUpMethod_ends_with: String
  signUpMethod_not_ends_with: String
  accessToken: String
  accessToken_not: String
  accessToken_in: [String!]
  accessToken_not_in: [String!]
  accessToken_lt: String
  accessToken_lte: String
  accessToken_gt: String
  accessToken_gte: String
  accessToken_contains: String
  accessToken_not_contains: String
  accessToken_starts_with: String
  accessToken_not_starts_with: String
  accessToken_ends_with: String
  accessToken_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  socialId: String
  username: String
  phone: String
  email: String
}
`
      }
    