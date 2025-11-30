import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: any;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: any;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: any;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: any;
export declare const ModelName: {
    readonly User: "User";
    readonly Project: "Project";
    readonly Skill: "Skill";
    readonly Experience: "Experience";
    readonly Message: "Message";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly age: "age";
    readonly created_at: "created_at";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly github_url: "github_url";
    readonly demo_url: "demo_url";
    readonly image: "image";
    readonly created_at: "created_at";
    readonly userId: "userId";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const SkillScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly level: "level";
};
export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum];
export declare const ExperienceScalarFieldEnum: {
    readonly id: "id";
    readonly company: "company";
    readonly role: "role";
    readonly description: "description";
    readonly start_date: "start_date";
    readonly end_date: "end_date";
    readonly created_at: "created_at";
    readonly userId: "userId";
};
export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly message: "message";
    readonly created_at: "created_at";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const ProjectOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly description: "description";
    readonly github_url: "github_url";
    readonly demo_url: "demo_url";
    readonly image: "image";
};
export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum];
export declare const SkillOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly level: "level";
};
export type SkillOrderByRelevanceFieldEnum = (typeof SkillOrderByRelevanceFieldEnum)[keyof typeof SkillOrderByRelevanceFieldEnum];
export declare const ExperienceOrderByRelevanceFieldEnum: {
    readonly company: "company";
    readonly role: "role";
    readonly description: "description";
};
export type ExperienceOrderByRelevanceFieldEnum = (typeof ExperienceOrderByRelevanceFieldEnum)[keyof typeof ExperienceOrderByRelevanceFieldEnum];
export declare const MessageOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly email: "email";
    readonly message: "message";
};
export type MessageOrderByRelevanceFieldEnum = (typeof MessageOrderByRelevanceFieldEnum)[keyof typeof MessageOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map