
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model audit_logs
 * 
 */
export type audit_logs = $Result.DefaultSelection<Prisma.$audit_logsPayload>
/**
 * Model backup_logs
 * 
 */
export type backup_logs = $Result.DefaultSelection<Prisma.$backup_logsPayload>
/**
 * Model departamente
 * 
 */
export type departamente = $Result.DefaultSelection<Prisma.$departamentePayload>
/**
 * Model documente
 * 
 */
export type documente = $Result.DefaultSelection<Prisma.$documentePayload>
/**
 * Model notificari
 * 
 */
export type notificari = $Result.DefaultSelection<Prisma.$notificariPayload>
/**
 * Model tipuri_registru
 * 
 */
export type tipuri_registru = $Result.DefaultSelection<Prisma.$tipuri_registruPayload>
/**
 * Model registre
 * 
 */
export type registre = $Result.DefaultSelection<Prisma.$registrePayload>
/**
 * Model roluri
 * 
 */
export type roluri = $Result.DefaultSelection<Prisma.$roluriPayload>
/**
 * Model tipuri_documente
 * 
 */
export type tipuri_documente = $Result.DefaultSelection<Prisma.$tipuri_documentePayload>
/**
 * Model utilizatori
 * 
 */
export type utilizatori = $Result.DefaultSelection<Prisma.$utilizatoriPayload>
/**
 * Model configurare_serie
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type configurare_serie = $Result.DefaultSelection<Prisma.$configurare_seriePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Audit_logs
 * const audit_logs = await prisma.audit_logs.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Audit_logs
   * const audit_logs = await prisma.audit_logs.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.audit_logs`: Exposes CRUD operations for the **audit_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_logs
    * const audit_logs = await prisma.audit_logs.findMany()
    * ```
    */
  get audit_logs(): Prisma.audit_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.backup_logs`: Exposes CRUD operations for the **backup_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Backup_logs
    * const backup_logs = await prisma.backup_logs.findMany()
    * ```
    */
  get backup_logs(): Prisma.backup_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departamente`: Exposes CRUD operations for the **departamente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departamentes
    * const departamentes = await prisma.departamente.findMany()
    * ```
    */
  get departamente(): Prisma.departamenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documente`: Exposes CRUD operations for the **documente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documentes
    * const documentes = await prisma.documente.findMany()
    * ```
    */
  get documente(): Prisma.documenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificari`: Exposes CRUD operations for the **notificari** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificaris
    * const notificaris = await prisma.notificari.findMany()
    * ```
    */
  get notificari(): Prisma.notificariDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipuri_registru`: Exposes CRUD operations for the **tipuri_registru** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipuri_registrus
    * const tipuri_registrus = await prisma.tipuri_registru.findMany()
    * ```
    */
  get tipuri_registru(): Prisma.tipuri_registruDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registre`: Exposes CRUD operations for the **registre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registres
    * const registres = await prisma.registre.findMany()
    * ```
    */
  get registre(): Prisma.registreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roluri`: Exposes CRUD operations for the **roluri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roluris
    * const roluris = await prisma.roluri.findMany()
    * ```
    */
  get roluri(): Prisma.roluriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipuri_documente`: Exposes CRUD operations for the **tipuri_documente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipuri_documentes
    * const tipuri_documentes = await prisma.tipuri_documente.findMany()
    * ```
    */
  get tipuri_documente(): Prisma.tipuri_documenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilizatori`: Exposes CRUD operations for the **utilizatori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilizatoris
    * const utilizatoris = await prisma.utilizatori.findMany()
    * ```
    */
  get utilizatori(): Prisma.utilizatoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.configurare_serie`: Exposes CRUD operations for the **configurare_serie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configurare_series
    * const configurare_series = await prisma.configurare_serie.findMany()
    * ```
    */
  get configurare_serie(): Prisma.configurare_serieDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    audit_logs: 'audit_logs',
    backup_logs: 'backup_logs',
    departamente: 'departamente',
    documente: 'documente',
    notificari: 'notificari',
    tipuri_registru: 'tipuri_registru',
    registre: 'registre',
    roluri: 'roluri',
    tipuri_documente: 'tipuri_documente',
    utilizatori: 'utilizatori',
    configurare_serie: 'configurare_serie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "audit_logs" | "backup_logs" | "departamente" | "documente" | "notificari" | "tipuri_registru" | "registre" | "roluri" | "tipuri_documente" | "utilizatori" | "configurare_serie"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      audit_logs: {
        payload: Prisma.$audit_logsPayload<ExtArgs>
        fields: Prisma.audit_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.audit_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.audit_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          findFirst: {
            args: Prisma.audit_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.audit_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          findMany: {
            args: Prisma.audit_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          create: {
            args: Prisma.audit_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          createMany: {
            args: Prisma.audit_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.audit_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          delete: {
            args: Prisma.audit_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          update: {
            args: Prisma.audit_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          deleteMany: {
            args: Prisma.audit_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.audit_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.audit_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>[]
          }
          upsert: {
            args: Prisma.audit_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$audit_logsPayload>
          }
          aggregate: {
            args: Prisma.Audit_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_logs>
          }
          groupBy: {
            args: Prisma.audit_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.audit_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_logsCountAggregateOutputType> | number
          }
        }
      }
      backup_logs: {
        payload: Prisma.$backup_logsPayload<ExtArgs>
        fields: Prisma.backup_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.backup_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.backup_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload>
          }
          findFirst: {
            args: Prisma.backup_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.backup_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload>
          }
          findMany: {
            args: Prisma.backup_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload>[]
          }
          create: {
            args: Prisma.backup_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload>
          }
          createMany: {
            args: Prisma.backup_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.backup_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload>[]
          }
          delete: {
            args: Prisma.backup_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload>
          }
          update: {
            args: Prisma.backup_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload>
          }
          deleteMany: {
            args: Prisma.backup_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.backup_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.backup_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload>[]
          }
          upsert: {
            args: Prisma.backup_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$backup_logsPayload>
          }
          aggregate: {
            args: Prisma.Backup_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackup_logs>
          }
          groupBy: {
            args: Prisma.backup_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Backup_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.backup_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Backup_logsCountAggregateOutputType> | number
          }
        }
      }
      departamente: {
        payload: Prisma.$departamentePayload<ExtArgs>
        fields: Prisma.departamenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departamenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departamenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload>
          }
          findFirst: {
            args: Prisma.departamenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departamenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload>
          }
          findMany: {
            args: Prisma.departamenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload>[]
          }
          create: {
            args: Prisma.departamenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload>
          }
          createMany: {
            args: Prisma.departamenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.departamenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload>[]
          }
          delete: {
            args: Prisma.departamenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload>
          }
          update: {
            args: Prisma.departamenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload>
          }
          deleteMany: {
            args: Prisma.departamenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departamenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.departamenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload>[]
          }
          upsert: {
            args: Prisma.departamenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departamentePayload>
          }
          aggregate: {
            args: Prisma.DepartamenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartamente>
          }
          groupBy: {
            args: Prisma.departamenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartamenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.departamenteCountArgs<ExtArgs>
            result: $Utils.Optional<DepartamenteCountAggregateOutputType> | number
          }
        }
      }
      documente: {
        payload: Prisma.$documentePayload<ExtArgs>
        fields: Prisma.documenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload>
          }
          findFirst: {
            args: Prisma.documenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload>
          }
          findMany: {
            args: Prisma.documenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload>[]
          }
          create: {
            args: Prisma.documenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload>
          }
          createMany: {
            args: Prisma.documenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.documenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload>[]
          }
          delete: {
            args: Prisma.documenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload>
          }
          update: {
            args: Prisma.documenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload>
          }
          deleteMany: {
            args: Prisma.documenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.documenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload>[]
          }
          upsert: {
            args: Prisma.documenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentePayload>
          }
          aggregate: {
            args: Prisma.DocumenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumente>
          }
          groupBy: {
            args: Prisma.documenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.documenteCountArgs<ExtArgs>
            result: $Utils.Optional<DocumenteCountAggregateOutputType> | number
          }
        }
      }
      notificari: {
        payload: Prisma.$notificariPayload<ExtArgs>
        fields: Prisma.notificariFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificariFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificariFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload>
          }
          findFirst: {
            args: Prisma.notificariFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificariFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload>
          }
          findMany: {
            args: Prisma.notificariFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload>[]
          }
          create: {
            args: Prisma.notificariCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload>
          }
          createMany: {
            args: Prisma.notificariCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificariCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload>[]
          }
          delete: {
            args: Prisma.notificariDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload>
          }
          update: {
            args: Prisma.notificariUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload>
          }
          deleteMany: {
            args: Prisma.notificariDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificariUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificariUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload>[]
          }
          upsert: {
            args: Prisma.notificariUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificariPayload>
          }
          aggregate: {
            args: Prisma.NotificariAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificari>
          }
          groupBy: {
            args: Prisma.notificariGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificariGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificariCountArgs<ExtArgs>
            result: $Utils.Optional<NotificariCountAggregateOutputType> | number
          }
        }
      }
      tipuri_registru: {
        payload: Prisma.$tipuri_registruPayload<ExtArgs>
        fields: Prisma.tipuri_registruFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipuri_registruFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipuri_registruFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload>
          }
          findFirst: {
            args: Prisma.tipuri_registruFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipuri_registruFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload>
          }
          findMany: {
            args: Prisma.tipuri_registruFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload>[]
          }
          create: {
            args: Prisma.tipuri_registruCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload>
          }
          createMany: {
            args: Prisma.tipuri_registruCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipuri_registruCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload>[]
          }
          delete: {
            args: Prisma.tipuri_registruDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload>
          }
          update: {
            args: Prisma.tipuri_registruUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload>
          }
          deleteMany: {
            args: Prisma.tipuri_registruDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipuri_registruUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipuri_registruUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload>[]
          }
          upsert: {
            args: Prisma.tipuri_registruUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_registruPayload>
          }
          aggregate: {
            args: Prisma.Tipuri_registruAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipuri_registru>
          }
          groupBy: {
            args: Prisma.tipuri_registruGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipuri_registruGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipuri_registruCountArgs<ExtArgs>
            result: $Utils.Optional<Tipuri_registruCountAggregateOutputType> | number
          }
        }
      }
      registre: {
        payload: Prisma.$registrePayload<ExtArgs>
        fields: Prisma.registreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.registreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.registreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload>
          }
          findFirst: {
            args: Prisma.registreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.registreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload>
          }
          findMany: {
            args: Prisma.registreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload>[]
          }
          create: {
            args: Prisma.registreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload>
          }
          createMany: {
            args: Prisma.registreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.registreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload>[]
          }
          delete: {
            args: Prisma.registreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload>
          }
          update: {
            args: Prisma.registreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload>
          }
          deleteMany: {
            args: Prisma.registreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.registreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.registreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload>[]
          }
          upsert: {
            args: Prisma.registreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$registrePayload>
          }
          aggregate: {
            args: Prisma.RegistreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistre>
          }
          groupBy: {
            args: Prisma.registreGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistreGroupByOutputType>[]
          }
          count: {
            args: Prisma.registreCountArgs<ExtArgs>
            result: $Utils.Optional<RegistreCountAggregateOutputType> | number
          }
        }
      }
      roluri: {
        payload: Prisma.$roluriPayload<ExtArgs>
        fields: Prisma.roluriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roluriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roluriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload>
          }
          findFirst: {
            args: Prisma.roluriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roluriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload>
          }
          findMany: {
            args: Prisma.roluriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload>[]
          }
          create: {
            args: Prisma.roluriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload>
          }
          createMany: {
            args: Prisma.roluriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roluriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload>[]
          }
          delete: {
            args: Prisma.roluriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload>
          }
          update: {
            args: Prisma.roluriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload>
          }
          deleteMany: {
            args: Prisma.roluriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roluriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roluriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload>[]
          }
          upsert: {
            args: Prisma.roluriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roluriPayload>
          }
          aggregate: {
            args: Prisma.RoluriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoluri>
          }
          groupBy: {
            args: Prisma.roluriGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoluriGroupByOutputType>[]
          }
          count: {
            args: Prisma.roluriCountArgs<ExtArgs>
            result: $Utils.Optional<RoluriCountAggregateOutputType> | number
          }
        }
      }
      tipuri_documente: {
        payload: Prisma.$tipuri_documentePayload<ExtArgs>
        fields: Prisma.tipuri_documenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipuri_documenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipuri_documenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload>
          }
          findFirst: {
            args: Prisma.tipuri_documenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipuri_documenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload>
          }
          findMany: {
            args: Prisma.tipuri_documenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload>[]
          }
          create: {
            args: Prisma.tipuri_documenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload>
          }
          createMany: {
            args: Prisma.tipuri_documenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipuri_documenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload>[]
          }
          delete: {
            args: Prisma.tipuri_documenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload>
          }
          update: {
            args: Prisma.tipuri_documenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload>
          }
          deleteMany: {
            args: Prisma.tipuri_documenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipuri_documenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipuri_documenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload>[]
          }
          upsert: {
            args: Prisma.tipuri_documenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipuri_documentePayload>
          }
          aggregate: {
            args: Prisma.Tipuri_documenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipuri_documente>
          }
          groupBy: {
            args: Prisma.tipuri_documenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipuri_documenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipuri_documenteCountArgs<ExtArgs>
            result: $Utils.Optional<Tipuri_documenteCountAggregateOutputType> | number
          }
        }
      }
      utilizatori: {
        payload: Prisma.$utilizatoriPayload<ExtArgs>
        fields: Prisma.utilizatoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.utilizatoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.utilizatoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload>
          }
          findFirst: {
            args: Prisma.utilizatoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.utilizatoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload>
          }
          findMany: {
            args: Prisma.utilizatoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload>[]
          }
          create: {
            args: Prisma.utilizatoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload>
          }
          createMany: {
            args: Prisma.utilizatoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.utilizatoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload>[]
          }
          delete: {
            args: Prisma.utilizatoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload>
          }
          update: {
            args: Prisma.utilizatoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload>
          }
          deleteMany: {
            args: Prisma.utilizatoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.utilizatoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.utilizatoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload>[]
          }
          upsert: {
            args: Prisma.utilizatoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilizatoriPayload>
          }
          aggregate: {
            args: Prisma.UtilizatoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilizatori>
          }
          groupBy: {
            args: Prisma.utilizatoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilizatoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.utilizatoriCountArgs<ExtArgs>
            result: $Utils.Optional<UtilizatoriCountAggregateOutputType> | number
          }
        }
      }
      configurare_serie: {
        payload: Prisma.$configurare_seriePayload<ExtArgs>
        fields: Prisma.configurare_serieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.configurare_serieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.configurare_serieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload>
          }
          findFirst: {
            args: Prisma.configurare_serieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.configurare_serieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload>
          }
          findMany: {
            args: Prisma.configurare_serieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload>[]
          }
          create: {
            args: Prisma.configurare_serieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload>
          }
          createMany: {
            args: Prisma.configurare_serieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.configurare_serieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload>[]
          }
          delete: {
            args: Prisma.configurare_serieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload>
          }
          update: {
            args: Prisma.configurare_serieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload>
          }
          deleteMany: {
            args: Prisma.configurare_serieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.configurare_serieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.configurare_serieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload>[]
          }
          upsert: {
            args: Prisma.configurare_serieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$configurare_seriePayload>
          }
          aggregate: {
            args: Prisma.Configurare_serieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfigurare_serie>
          }
          groupBy: {
            args: Prisma.configurare_serieGroupByArgs<ExtArgs>
            result: $Utils.Optional<Configurare_serieGroupByOutputType>[]
          }
          count: {
            args: Prisma.configurare_serieCountArgs<ExtArgs>
            result: $Utils.Optional<Configurare_serieCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    audit_logs?: audit_logsOmit
    backup_logs?: backup_logsOmit
    departamente?: departamenteOmit
    documente?: documenteOmit
    notificari?: notificariOmit
    tipuri_registru?: tipuri_registruOmit
    registre?: registreOmit
    roluri?: roluriOmit
    tipuri_documente?: tipuri_documenteOmit
    utilizatori?: utilizatoriOmit
    configurare_serie?: configurare_serieOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DepartamenteCountOutputType
   */

  export type DepartamenteCountOutputType = {
    documente: number
    registre: number
    utilizatori: number
  }

  export type DepartamenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documente?: boolean | DepartamenteCountOutputTypeCountDocumenteArgs
    registre?: boolean | DepartamenteCountOutputTypeCountRegistreArgs
    utilizatori?: boolean | DepartamenteCountOutputTypeCountUtilizatoriArgs
  }

  // Custom InputTypes
  /**
   * DepartamenteCountOutputType without action
   */
  export type DepartamenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartamenteCountOutputType
     */
    select?: DepartamenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartamenteCountOutputType without action
   */
  export type DepartamenteCountOutputTypeCountDocumenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documenteWhereInput
  }

  /**
   * DepartamenteCountOutputType without action
   */
  export type DepartamenteCountOutputTypeCountRegistreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registreWhereInput
  }

  /**
   * DepartamenteCountOutputType without action
   */
  export type DepartamenteCountOutputTypeCountUtilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilizatoriWhereInput
  }


  /**
   * Count Type DocumenteCountOutputType
   */

  export type DocumenteCountOutputType = {
    notificari: number
  }

  export type DocumenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificari?: boolean | DocumenteCountOutputTypeCountNotificariArgs
  }

  // Custom InputTypes
  /**
   * DocumenteCountOutputType without action
   */
  export type DocumenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumenteCountOutputType
     */
    select?: DocumenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumenteCountOutputType without action
   */
  export type DocumenteCountOutputTypeCountNotificariArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificariWhereInput
  }


  /**
   * Count Type Tipuri_registruCountOutputType
   */

  export type Tipuri_registruCountOutputType = {
    registre: number
  }

  export type Tipuri_registruCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registre?: boolean | Tipuri_registruCountOutputTypeCountRegistreArgs
  }

  // Custom InputTypes
  /**
   * Tipuri_registruCountOutputType without action
   */
  export type Tipuri_registruCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipuri_registruCountOutputType
     */
    select?: Tipuri_registruCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipuri_registruCountOutputType without action
   */
  export type Tipuri_registruCountOutputTypeCountRegistreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registreWhereInput
  }


  /**
   * Count Type RegistreCountOutputType
   */

  export type RegistreCountOutputType = {
    documente: number
  }

  export type RegistreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documente?: boolean | RegistreCountOutputTypeCountDocumenteArgs
  }

  // Custom InputTypes
  /**
   * RegistreCountOutputType without action
   */
  export type RegistreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistreCountOutputType
     */
    select?: RegistreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegistreCountOutputType without action
   */
  export type RegistreCountOutputTypeCountDocumenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documenteWhereInput
  }


  /**
   * Count Type RoluriCountOutputType
   */

  export type RoluriCountOutputType = {
    utilizatori: number
  }

  export type RoluriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizatori?: boolean | RoluriCountOutputTypeCountUtilizatoriArgs
  }

  // Custom InputTypes
  /**
   * RoluriCountOutputType without action
   */
  export type RoluriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoluriCountOutputType
     */
    select?: RoluriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoluriCountOutputType without action
   */
  export type RoluriCountOutputTypeCountUtilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilizatoriWhereInput
  }


  /**
   * Count Type Tipuri_documenteCountOutputType
   */

  export type Tipuri_documenteCountOutputType = {
    documente: number
  }

  export type Tipuri_documenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documente?: boolean | Tipuri_documenteCountOutputTypeCountDocumenteArgs
  }

  // Custom InputTypes
  /**
   * Tipuri_documenteCountOutputType without action
   */
  export type Tipuri_documenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipuri_documenteCountOutputType
     */
    select?: Tipuri_documenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipuri_documenteCountOutputType without action
   */
  export type Tipuri_documenteCountOutputTypeCountDocumenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documenteWhereInput
  }


  /**
   * Count Type UtilizatoriCountOutputType
   */

  export type UtilizatoriCountOutputType = {
    audit_logs: number
    documente_documente_destinatar_idToutilizatori: number
    documente_documente_inregistrat_deToutilizatori: number
    documente_documente_preluat_deToutilizatori: number
    notificari: number
  }

  export type UtilizatoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | UtilizatoriCountOutputTypeCountAudit_logsArgs
    documente_documente_destinatar_idToutilizatori?: boolean | UtilizatoriCountOutputTypeCountDocumente_documente_destinatar_idToutilizatoriArgs
    documente_documente_inregistrat_deToutilizatori?: boolean | UtilizatoriCountOutputTypeCountDocumente_documente_inregistrat_deToutilizatoriArgs
    documente_documente_preluat_deToutilizatori?: boolean | UtilizatoriCountOutputTypeCountDocumente_documente_preluat_deToutilizatoriArgs
    notificari?: boolean | UtilizatoriCountOutputTypeCountNotificariArgs
  }

  // Custom InputTypes
  /**
   * UtilizatoriCountOutputType without action
   */
  export type UtilizatoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilizatoriCountOutputType
     */
    select?: UtilizatoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilizatoriCountOutputType without action
   */
  export type UtilizatoriCountOutputTypeCountAudit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logsWhereInput
  }

  /**
   * UtilizatoriCountOutputType without action
   */
  export type UtilizatoriCountOutputTypeCountDocumente_documente_destinatar_idToutilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documenteWhereInput
  }

  /**
   * UtilizatoriCountOutputType without action
   */
  export type UtilizatoriCountOutputTypeCountDocumente_documente_inregistrat_deToutilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documenteWhereInput
  }

  /**
   * UtilizatoriCountOutputType without action
   */
  export type UtilizatoriCountOutputTypeCountDocumente_documente_preluat_deToutilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documenteWhereInput
  }

  /**
   * UtilizatoriCountOutputType without action
   */
  export type UtilizatoriCountOutputTypeCountNotificariArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificariWhereInput
  }


  /**
   * Models
   */

  /**
   * Model audit_logs
   */

  export type AggregateAudit_logs = {
    _count: Audit_logsCountAggregateOutputType | null
    _min: Audit_logsMinAggregateOutputType | null
    _max: Audit_logsMaxAggregateOutputType | null
  }

  export type Audit_logsMinAggregateOutputType = {
    id: string | null
    tabela: string | null
    cheie_primara: string | null
    actiune: string | null
    utilizator_id: string | null
    timestamp: Date | null
    severitate: string | null
    mesaj: string | null
  }

  export type Audit_logsMaxAggregateOutputType = {
    id: string | null
    tabela: string | null
    cheie_primara: string | null
    actiune: string | null
    utilizator_id: string | null
    timestamp: Date | null
    severitate: string | null
    mesaj: string | null
  }

  export type Audit_logsCountAggregateOutputType = {
    id: number
    tabela: number
    cheie_primara: number
    actiune: number
    utilizator_id: number
    timestamp: number
    date_vechi: number
    date_noi: number
    severitate: number
    mesaj: number
    detalii_modificari: number
    _all: number
  }


  export type Audit_logsMinAggregateInputType = {
    id?: true
    tabela?: true
    cheie_primara?: true
    actiune?: true
    utilizator_id?: true
    timestamp?: true
    severitate?: true
    mesaj?: true
  }

  export type Audit_logsMaxAggregateInputType = {
    id?: true
    tabela?: true
    cheie_primara?: true
    actiune?: true
    utilizator_id?: true
    timestamp?: true
    severitate?: true
    mesaj?: true
  }

  export type Audit_logsCountAggregateInputType = {
    id?: true
    tabela?: true
    cheie_primara?: true
    actiune?: true
    utilizator_id?: true
    timestamp?: true
    date_vechi?: true
    date_noi?: true
    severitate?: true
    mesaj?: true
    detalii_modificari?: true
    _all?: true
  }

  export type Audit_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to aggregate.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned audit_logs
    **/
    _count?: true | Audit_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_logsMaxAggregateInputType
  }

  export type GetAudit_logsAggregateType<T extends Audit_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_logs[P]>
      : GetScalarType<T[P], AggregateAudit_logs[P]>
  }




  export type audit_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: audit_logsWhereInput
    orderBy?: audit_logsOrderByWithAggregationInput | audit_logsOrderByWithAggregationInput[]
    by: Audit_logsScalarFieldEnum[] | Audit_logsScalarFieldEnum
    having?: audit_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_logsCountAggregateInputType | true
    _min?: Audit_logsMinAggregateInputType
    _max?: Audit_logsMaxAggregateInputType
  }

  export type Audit_logsGroupByOutputType = {
    id: string
    tabela: string
    cheie_primara: string
    actiune: string
    utilizator_id: string | null
    timestamp: Date | null
    date_vechi: JsonValue | null
    date_noi: JsonValue | null
    severitate: string
    mesaj: string
    detalii_modificari: JsonValue | null
    _count: Audit_logsCountAggregateOutputType | null
    _min: Audit_logsMinAggregateOutputType | null
    _max: Audit_logsMaxAggregateOutputType | null
  }

  type GetAudit_logsGroupByPayload<T extends audit_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_logsGroupByOutputType[P]>
        }
      >
    >


  export type audit_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabela?: boolean
    cheie_primara?: boolean
    actiune?: boolean
    utilizator_id?: boolean
    timestamp?: boolean
    date_vechi?: boolean
    date_noi?: boolean
    severitate?: boolean
    mesaj?: boolean
    detalii_modificari?: boolean
    utilizatori?: boolean | audit_logs$utilizatoriArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabela?: boolean
    cheie_primara?: boolean
    actiune?: boolean
    utilizator_id?: boolean
    timestamp?: boolean
    date_vechi?: boolean
    date_noi?: boolean
    severitate?: boolean
    mesaj?: boolean
    detalii_modificari?: boolean
    utilizatori?: boolean | audit_logs$utilizatoriArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tabela?: boolean
    cheie_primara?: boolean
    actiune?: boolean
    utilizator_id?: boolean
    timestamp?: boolean
    date_vechi?: boolean
    date_noi?: boolean
    severitate?: boolean
    mesaj?: boolean
    detalii_modificari?: boolean
    utilizatori?: boolean | audit_logs$utilizatoriArgs<ExtArgs>
  }, ExtArgs["result"]["audit_logs"]>

  export type audit_logsSelectScalar = {
    id?: boolean
    tabela?: boolean
    cheie_primara?: boolean
    actiune?: boolean
    utilizator_id?: boolean
    timestamp?: boolean
    date_vechi?: boolean
    date_noi?: boolean
    severitate?: boolean
    mesaj?: boolean
    detalii_modificari?: boolean
  }

  export type audit_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tabela" | "cheie_primara" | "actiune" | "utilizator_id" | "timestamp" | "date_vechi" | "date_noi" | "severitate" | "mesaj" | "detalii_modificari", ExtArgs["result"]["audit_logs"]>
  export type audit_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizatori?: boolean | audit_logs$utilizatoriArgs<ExtArgs>
  }
  export type audit_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizatori?: boolean | audit_logs$utilizatoriArgs<ExtArgs>
  }
  export type audit_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizatori?: boolean | audit_logs$utilizatoriArgs<ExtArgs>
  }

  export type $audit_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "audit_logs"
    objects: {
      utilizatori: Prisma.$utilizatoriPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tabela: string
      cheie_primara: string
      actiune: string
      utilizator_id: string | null
      timestamp: Date | null
      date_vechi: Prisma.JsonValue | null
      date_noi: Prisma.JsonValue | null
      severitate: string
      mesaj: string
      detalii_modificari: Prisma.JsonValue | null
    }, ExtArgs["result"]["audit_logs"]>
    composites: {}
  }

  type audit_logsGetPayload<S extends boolean | null | undefined | audit_logsDefaultArgs> = $Result.GetResult<Prisma.$audit_logsPayload, S>

  type audit_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<audit_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_logsCountAggregateInputType | true
    }

  export interface audit_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['audit_logs'], meta: { name: 'audit_logs' } }
    /**
     * Find zero or one Audit_logs that matches the filter.
     * @param {audit_logsFindUniqueArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends audit_logsFindUniqueArgs>(args: SelectSubset<T, audit_logsFindUniqueArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {audit_logsFindUniqueOrThrowArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends audit_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, audit_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindFirstArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends audit_logsFindFirstArgs>(args?: SelectSubset<T, audit_logsFindFirstArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindFirstOrThrowArgs} args - Arguments to find a Audit_logs
     * @example
     * // Get one Audit_logs
     * const audit_logs = await prisma.audit_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends audit_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, audit_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_logs
     * const audit_logs = await prisma.audit_logs.findMany()
     * 
     * // Get first 10 Audit_logs
     * const audit_logs = await prisma.audit_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_logsWithIdOnly = await prisma.audit_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends audit_logsFindManyArgs>(args?: SelectSubset<T, audit_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_logs.
     * @param {audit_logsCreateArgs} args - Arguments to create a Audit_logs.
     * @example
     * // Create one Audit_logs
     * const Audit_logs = await prisma.audit_logs.create({
     *   data: {
     *     // ... data to create a Audit_logs
     *   }
     * })
     * 
     */
    create<T extends audit_logsCreateArgs>(args: SelectSubset<T, audit_logsCreateArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_logs.
     * @param {audit_logsCreateManyArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_logs = await prisma.audit_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends audit_logsCreateManyArgs>(args?: SelectSubset<T, audit_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_logs and returns the data saved in the database.
     * @param {audit_logsCreateManyAndReturnArgs} args - Arguments to create many Audit_logs.
     * @example
     * // Create many Audit_logs
     * const audit_logs = await prisma.audit_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_logs and only return the `id`
     * const audit_logsWithIdOnly = await prisma.audit_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends audit_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, audit_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_logs.
     * @param {audit_logsDeleteArgs} args - Arguments to delete one Audit_logs.
     * @example
     * // Delete one Audit_logs
     * const Audit_logs = await prisma.audit_logs.delete({
     *   where: {
     *     // ... filter to delete one Audit_logs
     *   }
     * })
     * 
     */
    delete<T extends audit_logsDeleteArgs>(args: SelectSubset<T, audit_logsDeleteArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_logs.
     * @param {audit_logsUpdateArgs} args - Arguments to update one Audit_logs.
     * @example
     * // Update one Audit_logs
     * const audit_logs = await prisma.audit_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends audit_logsUpdateArgs>(args: SelectSubset<T, audit_logsUpdateArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_logs.
     * @param {audit_logsDeleteManyArgs} args - Arguments to filter Audit_logs to delete.
     * @example
     * // Delete a few Audit_logs
     * const { count } = await prisma.audit_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends audit_logsDeleteManyArgs>(args?: SelectSubset<T, audit_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_logs
     * const audit_logs = await prisma.audit_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends audit_logsUpdateManyArgs>(args: SelectSubset<T, audit_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_logs and returns the data updated in the database.
     * @param {audit_logsUpdateManyAndReturnArgs} args - Arguments to update many Audit_logs.
     * @example
     * // Update many Audit_logs
     * const audit_logs = await prisma.audit_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_logs and only return the `id`
     * const audit_logsWithIdOnly = await prisma.audit_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends audit_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, audit_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_logs.
     * @param {audit_logsUpsertArgs} args - Arguments to update or create a Audit_logs.
     * @example
     * // Update or create a Audit_logs
     * const audit_logs = await prisma.audit_logs.upsert({
     *   create: {
     *     // ... data to create a Audit_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_logs we want to update
     *   }
     * })
     */
    upsert<T extends audit_logsUpsertArgs>(args: SelectSubset<T, audit_logsUpsertArgs<ExtArgs>>): Prisma__audit_logsClient<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsCountArgs} args - Arguments to filter Audit_logs to count.
     * @example
     * // Count the number of Audit_logs
     * const count = await prisma.audit_logs.count({
     *   where: {
     *     // ... the filter for the Audit_logs we want to count
     *   }
     * })
    **/
    count<T extends audit_logsCountArgs>(
      args?: Subset<T, audit_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Audit_logsAggregateArgs>(args: Subset<T, Audit_logsAggregateArgs>): Prisma.PrismaPromise<GetAudit_logsAggregateType<T>>

    /**
     * Group by Audit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {audit_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends audit_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: audit_logsGroupByArgs['orderBy'] }
        : { orderBy?: audit_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, audit_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the audit_logs model
   */
  readonly fields: audit_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for audit_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__audit_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilizatori<T extends audit_logs$utilizatoriArgs<ExtArgs> = {}>(args?: Subset<T, audit_logs$utilizatoriArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the audit_logs model
   */
  interface audit_logsFieldRefs {
    readonly id: FieldRef<"audit_logs", 'String'>
    readonly tabela: FieldRef<"audit_logs", 'String'>
    readonly cheie_primara: FieldRef<"audit_logs", 'String'>
    readonly actiune: FieldRef<"audit_logs", 'String'>
    readonly utilizator_id: FieldRef<"audit_logs", 'String'>
    readonly timestamp: FieldRef<"audit_logs", 'DateTime'>
    readonly date_vechi: FieldRef<"audit_logs", 'Json'>
    readonly date_noi: FieldRef<"audit_logs", 'Json'>
    readonly severitate: FieldRef<"audit_logs", 'String'>
    readonly mesaj: FieldRef<"audit_logs", 'String'>
    readonly detalii_modificari: FieldRef<"audit_logs", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * audit_logs findUnique
   */
  export type audit_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs findUniqueOrThrow
   */
  export type audit_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs findFirst
   */
  export type audit_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs findFirstOrThrow
   */
  export type audit_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of audit_logs.
     */
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs findMany
   */
  export type audit_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter, which audit_logs to fetch.
     */
    where?: audit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of audit_logs to fetch.
     */
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing audit_logs.
     */
    cursor?: audit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` audit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` audit_logs.
     */
    skip?: number
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * audit_logs create
   */
  export type audit_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a audit_logs.
     */
    data: XOR<audit_logsCreateInput, audit_logsUncheckedCreateInput>
  }

  /**
   * audit_logs createMany
   */
  export type audit_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logsCreateManyInput | audit_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * audit_logs createManyAndReturn
   */
  export type audit_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * The data used to create many audit_logs.
     */
    data: audit_logsCreateManyInput | audit_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_logs update
   */
  export type audit_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a audit_logs.
     */
    data: XOR<audit_logsUpdateInput, audit_logsUncheckedUpdateInput>
    /**
     * Choose, which audit_logs to update.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs updateMany
   */
  export type audit_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
  }

  /**
   * audit_logs updateManyAndReturn
   */
  export type audit_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * The data used to update audit_logs.
     */
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyInput>
    /**
     * Filter which audit_logs to update
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * audit_logs upsert
   */
  export type audit_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the audit_logs to update in case it exists.
     */
    where: audit_logsWhereUniqueInput
    /**
     * In case the audit_logs found by the `where` argument doesn't exist, create a new audit_logs with this data.
     */
    create: XOR<audit_logsCreateInput, audit_logsUncheckedCreateInput>
    /**
     * In case the audit_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<audit_logsUpdateInput, audit_logsUncheckedUpdateInput>
  }

  /**
   * audit_logs delete
   */
  export type audit_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    /**
     * Filter which audit_logs to delete.
     */
    where: audit_logsWhereUniqueInput
  }

  /**
   * audit_logs deleteMany
   */
  export type audit_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which audit_logs to delete
     */
    where?: audit_logsWhereInput
    /**
     * Limit how many audit_logs to delete.
     */
    limit?: number
  }

  /**
   * audit_logs.utilizatori
   */
  export type audit_logs$utilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    where?: utilizatoriWhereInput
  }

  /**
   * audit_logs without action
   */
  export type audit_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
  }


  /**
   * Model backup_logs
   */

  export type AggregateBackup_logs = {
    _count: Backup_logsCountAggregateOutputType | null
    _min: Backup_logsMinAggregateOutputType | null
    _max: Backup_logsMaxAggregateOutputType | null
  }

  export type Backup_logsMinAggregateOutputType = {
    id: string | null
    data_backup: Date | null
    locatie_fisier: string | null
    status: string | null
    mesaj_eroare: string | null
    created_at: Date | null
  }

  export type Backup_logsMaxAggregateOutputType = {
    id: string | null
    data_backup: Date | null
    locatie_fisier: string | null
    status: string | null
    mesaj_eroare: string | null
    created_at: Date | null
  }

  export type Backup_logsCountAggregateOutputType = {
    id: number
    data_backup: number
    locatie_fisier: number
    status: number
    mesaj_eroare: number
    created_at: number
    _all: number
  }


  export type Backup_logsMinAggregateInputType = {
    id?: true
    data_backup?: true
    locatie_fisier?: true
    status?: true
    mesaj_eroare?: true
    created_at?: true
  }

  export type Backup_logsMaxAggregateInputType = {
    id?: true
    data_backup?: true
    locatie_fisier?: true
    status?: true
    mesaj_eroare?: true
    created_at?: true
  }

  export type Backup_logsCountAggregateInputType = {
    id?: true
    data_backup?: true
    locatie_fisier?: true
    status?: true
    mesaj_eroare?: true
    created_at?: true
    _all?: true
  }

  export type Backup_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which backup_logs to aggregate.
     */
    where?: backup_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of backup_logs to fetch.
     */
    orderBy?: backup_logsOrderByWithRelationInput | backup_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: backup_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` backup_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` backup_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned backup_logs
    **/
    _count?: true | Backup_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Backup_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Backup_logsMaxAggregateInputType
  }

  export type GetBackup_logsAggregateType<T extends Backup_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateBackup_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackup_logs[P]>
      : GetScalarType<T[P], AggregateBackup_logs[P]>
  }




  export type backup_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: backup_logsWhereInput
    orderBy?: backup_logsOrderByWithAggregationInput | backup_logsOrderByWithAggregationInput[]
    by: Backup_logsScalarFieldEnum[] | Backup_logsScalarFieldEnum
    having?: backup_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Backup_logsCountAggregateInputType | true
    _min?: Backup_logsMinAggregateInputType
    _max?: Backup_logsMaxAggregateInputType
  }

  export type Backup_logsGroupByOutputType = {
    id: string
    data_backup: Date
    locatie_fisier: string
    status: string
    mesaj_eroare: string | null
    created_at: Date | null
    _count: Backup_logsCountAggregateOutputType | null
    _min: Backup_logsMinAggregateOutputType | null
    _max: Backup_logsMaxAggregateOutputType | null
  }

  type GetBackup_logsGroupByPayload<T extends backup_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Backup_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Backup_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Backup_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Backup_logsGroupByOutputType[P]>
        }
      >
    >


  export type backup_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_backup?: boolean
    locatie_fisier?: boolean
    status?: boolean
    mesaj_eroare?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["backup_logs"]>

  export type backup_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_backup?: boolean
    locatie_fisier?: boolean
    status?: boolean
    mesaj_eroare?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["backup_logs"]>

  export type backup_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_backup?: boolean
    locatie_fisier?: boolean
    status?: boolean
    mesaj_eroare?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["backup_logs"]>

  export type backup_logsSelectScalar = {
    id?: boolean
    data_backup?: boolean
    locatie_fisier?: boolean
    status?: boolean
    mesaj_eroare?: boolean
    created_at?: boolean
  }

  export type backup_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_backup" | "locatie_fisier" | "status" | "mesaj_eroare" | "created_at", ExtArgs["result"]["backup_logs"]>

  export type $backup_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "backup_logs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data_backup: Date
      locatie_fisier: string
      status: string
      mesaj_eroare: string | null
      created_at: Date | null
    }, ExtArgs["result"]["backup_logs"]>
    composites: {}
  }

  type backup_logsGetPayload<S extends boolean | null | undefined | backup_logsDefaultArgs> = $Result.GetResult<Prisma.$backup_logsPayload, S>

  type backup_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<backup_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Backup_logsCountAggregateInputType | true
    }

  export interface backup_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['backup_logs'], meta: { name: 'backup_logs' } }
    /**
     * Find zero or one Backup_logs that matches the filter.
     * @param {backup_logsFindUniqueArgs} args - Arguments to find a Backup_logs
     * @example
     * // Get one Backup_logs
     * const backup_logs = await prisma.backup_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends backup_logsFindUniqueArgs>(args: SelectSubset<T, backup_logsFindUniqueArgs<ExtArgs>>): Prisma__backup_logsClient<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Backup_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {backup_logsFindUniqueOrThrowArgs} args - Arguments to find a Backup_logs
     * @example
     * // Get one Backup_logs
     * const backup_logs = await prisma.backup_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends backup_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, backup_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__backup_logsClient<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Backup_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backup_logsFindFirstArgs} args - Arguments to find a Backup_logs
     * @example
     * // Get one Backup_logs
     * const backup_logs = await prisma.backup_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends backup_logsFindFirstArgs>(args?: SelectSubset<T, backup_logsFindFirstArgs<ExtArgs>>): Prisma__backup_logsClient<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Backup_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backup_logsFindFirstOrThrowArgs} args - Arguments to find a Backup_logs
     * @example
     * // Get one Backup_logs
     * const backup_logs = await prisma.backup_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends backup_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, backup_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__backup_logsClient<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Backup_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backup_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Backup_logs
     * const backup_logs = await prisma.backup_logs.findMany()
     * 
     * // Get first 10 Backup_logs
     * const backup_logs = await prisma.backup_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backup_logsWithIdOnly = await prisma.backup_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends backup_logsFindManyArgs>(args?: SelectSubset<T, backup_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Backup_logs.
     * @param {backup_logsCreateArgs} args - Arguments to create a Backup_logs.
     * @example
     * // Create one Backup_logs
     * const Backup_logs = await prisma.backup_logs.create({
     *   data: {
     *     // ... data to create a Backup_logs
     *   }
     * })
     * 
     */
    create<T extends backup_logsCreateArgs>(args: SelectSubset<T, backup_logsCreateArgs<ExtArgs>>): Prisma__backup_logsClient<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Backup_logs.
     * @param {backup_logsCreateManyArgs} args - Arguments to create many Backup_logs.
     * @example
     * // Create many Backup_logs
     * const backup_logs = await prisma.backup_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends backup_logsCreateManyArgs>(args?: SelectSubset<T, backup_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Backup_logs and returns the data saved in the database.
     * @param {backup_logsCreateManyAndReturnArgs} args - Arguments to create many Backup_logs.
     * @example
     * // Create many Backup_logs
     * const backup_logs = await prisma.backup_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Backup_logs and only return the `id`
     * const backup_logsWithIdOnly = await prisma.backup_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends backup_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, backup_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Backup_logs.
     * @param {backup_logsDeleteArgs} args - Arguments to delete one Backup_logs.
     * @example
     * // Delete one Backup_logs
     * const Backup_logs = await prisma.backup_logs.delete({
     *   where: {
     *     // ... filter to delete one Backup_logs
     *   }
     * })
     * 
     */
    delete<T extends backup_logsDeleteArgs>(args: SelectSubset<T, backup_logsDeleteArgs<ExtArgs>>): Prisma__backup_logsClient<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Backup_logs.
     * @param {backup_logsUpdateArgs} args - Arguments to update one Backup_logs.
     * @example
     * // Update one Backup_logs
     * const backup_logs = await prisma.backup_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends backup_logsUpdateArgs>(args: SelectSubset<T, backup_logsUpdateArgs<ExtArgs>>): Prisma__backup_logsClient<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Backup_logs.
     * @param {backup_logsDeleteManyArgs} args - Arguments to filter Backup_logs to delete.
     * @example
     * // Delete a few Backup_logs
     * const { count } = await prisma.backup_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends backup_logsDeleteManyArgs>(args?: SelectSubset<T, backup_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backup_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backup_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Backup_logs
     * const backup_logs = await prisma.backup_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends backup_logsUpdateManyArgs>(args: SelectSubset<T, backup_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Backup_logs and returns the data updated in the database.
     * @param {backup_logsUpdateManyAndReturnArgs} args - Arguments to update many Backup_logs.
     * @example
     * // Update many Backup_logs
     * const backup_logs = await prisma.backup_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Backup_logs and only return the `id`
     * const backup_logsWithIdOnly = await prisma.backup_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends backup_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, backup_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Backup_logs.
     * @param {backup_logsUpsertArgs} args - Arguments to update or create a Backup_logs.
     * @example
     * // Update or create a Backup_logs
     * const backup_logs = await prisma.backup_logs.upsert({
     *   create: {
     *     // ... data to create a Backup_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Backup_logs we want to update
     *   }
     * })
     */
    upsert<T extends backup_logsUpsertArgs>(args: SelectSubset<T, backup_logsUpsertArgs<ExtArgs>>): Prisma__backup_logsClient<$Result.GetResult<Prisma.$backup_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Backup_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backup_logsCountArgs} args - Arguments to filter Backup_logs to count.
     * @example
     * // Count the number of Backup_logs
     * const count = await prisma.backup_logs.count({
     *   where: {
     *     // ... the filter for the Backup_logs we want to count
     *   }
     * })
    **/
    count<T extends backup_logsCountArgs>(
      args?: Subset<T, backup_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Backup_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Backup_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Backup_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Backup_logsAggregateArgs>(args: Subset<T, Backup_logsAggregateArgs>): Prisma.PrismaPromise<GetBackup_logsAggregateType<T>>

    /**
     * Group by Backup_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {backup_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends backup_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: backup_logsGroupByArgs['orderBy'] }
        : { orderBy?: backup_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, backup_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackup_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the backup_logs model
   */
  readonly fields: backup_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for backup_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__backup_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the backup_logs model
   */
  interface backup_logsFieldRefs {
    readonly id: FieldRef<"backup_logs", 'String'>
    readonly data_backup: FieldRef<"backup_logs", 'DateTime'>
    readonly locatie_fisier: FieldRef<"backup_logs", 'String'>
    readonly status: FieldRef<"backup_logs", 'String'>
    readonly mesaj_eroare: FieldRef<"backup_logs", 'String'>
    readonly created_at: FieldRef<"backup_logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * backup_logs findUnique
   */
  export type backup_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * Filter, which backup_logs to fetch.
     */
    where: backup_logsWhereUniqueInput
  }

  /**
   * backup_logs findUniqueOrThrow
   */
  export type backup_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * Filter, which backup_logs to fetch.
     */
    where: backup_logsWhereUniqueInput
  }

  /**
   * backup_logs findFirst
   */
  export type backup_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * Filter, which backup_logs to fetch.
     */
    where?: backup_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of backup_logs to fetch.
     */
    orderBy?: backup_logsOrderByWithRelationInput | backup_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for backup_logs.
     */
    cursor?: backup_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` backup_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` backup_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of backup_logs.
     */
    distinct?: Backup_logsScalarFieldEnum | Backup_logsScalarFieldEnum[]
  }

  /**
   * backup_logs findFirstOrThrow
   */
  export type backup_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * Filter, which backup_logs to fetch.
     */
    where?: backup_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of backup_logs to fetch.
     */
    orderBy?: backup_logsOrderByWithRelationInput | backup_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for backup_logs.
     */
    cursor?: backup_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` backup_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` backup_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of backup_logs.
     */
    distinct?: Backup_logsScalarFieldEnum | Backup_logsScalarFieldEnum[]
  }

  /**
   * backup_logs findMany
   */
  export type backup_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * Filter, which backup_logs to fetch.
     */
    where?: backup_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of backup_logs to fetch.
     */
    orderBy?: backup_logsOrderByWithRelationInput | backup_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing backup_logs.
     */
    cursor?: backup_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` backup_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` backup_logs.
     */
    skip?: number
    distinct?: Backup_logsScalarFieldEnum | Backup_logsScalarFieldEnum[]
  }

  /**
   * backup_logs create
   */
  export type backup_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * The data needed to create a backup_logs.
     */
    data: XOR<backup_logsCreateInput, backup_logsUncheckedCreateInput>
  }

  /**
   * backup_logs createMany
   */
  export type backup_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many backup_logs.
     */
    data: backup_logsCreateManyInput | backup_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * backup_logs createManyAndReturn
   */
  export type backup_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * The data used to create many backup_logs.
     */
    data: backup_logsCreateManyInput | backup_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * backup_logs update
   */
  export type backup_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * The data needed to update a backup_logs.
     */
    data: XOR<backup_logsUpdateInput, backup_logsUncheckedUpdateInput>
    /**
     * Choose, which backup_logs to update.
     */
    where: backup_logsWhereUniqueInput
  }

  /**
   * backup_logs updateMany
   */
  export type backup_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update backup_logs.
     */
    data: XOR<backup_logsUpdateManyMutationInput, backup_logsUncheckedUpdateManyInput>
    /**
     * Filter which backup_logs to update
     */
    where?: backup_logsWhereInput
    /**
     * Limit how many backup_logs to update.
     */
    limit?: number
  }

  /**
   * backup_logs updateManyAndReturn
   */
  export type backup_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * The data used to update backup_logs.
     */
    data: XOR<backup_logsUpdateManyMutationInput, backup_logsUncheckedUpdateManyInput>
    /**
     * Filter which backup_logs to update
     */
    where?: backup_logsWhereInput
    /**
     * Limit how many backup_logs to update.
     */
    limit?: number
  }

  /**
   * backup_logs upsert
   */
  export type backup_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * The filter to search for the backup_logs to update in case it exists.
     */
    where: backup_logsWhereUniqueInput
    /**
     * In case the backup_logs found by the `where` argument doesn't exist, create a new backup_logs with this data.
     */
    create: XOR<backup_logsCreateInput, backup_logsUncheckedCreateInput>
    /**
     * In case the backup_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<backup_logsUpdateInput, backup_logsUncheckedUpdateInput>
  }

  /**
   * backup_logs delete
   */
  export type backup_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
    /**
     * Filter which backup_logs to delete.
     */
    where: backup_logsWhereUniqueInput
  }

  /**
   * backup_logs deleteMany
   */
  export type backup_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which backup_logs to delete
     */
    where?: backup_logsWhereInput
    /**
     * Limit how many backup_logs to delete.
     */
    limit?: number
  }

  /**
   * backup_logs without action
   */
  export type backup_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the backup_logs
     */
    select?: backup_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the backup_logs
     */
    omit?: backup_logsOmit<ExtArgs> | null
  }


  /**
   * Model departamente
   */

  export type AggregateDepartamente = {
    _count: DepartamenteCountAggregateOutputType | null
    _min: DepartamenteMinAggregateOutputType | null
    _max: DepartamenteMaxAggregateOutputType | null
  }

  export type DepartamenteMinAggregateOutputType = {
    id: string | null
    nume: string | null
    descriere: string | null
  }

  export type DepartamenteMaxAggregateOutputType = {
    id: string | null
    nume: string | null
    descriere: string | null
  }

  export type DepartamenteCountAggregateOutputType = {
    id: number
    nume: number
    descriere: number
    _all: number
  }


  export type DepartamenteMinAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
  }

  export type DepartamenteMaxAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
  }

  export type DepartamenteCountAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
    _all?: true
  }

  export type DepartamenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departamente to aggregate.
     */
    where?: departamenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentes to fetch.
     */
    orderBy?: departamenteOrderByWithRelationInput | departamenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departamenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departamentes
    **/
    _count?: true | DepartamenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartamenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartamenteMaxAggregateInputType
  }

  export type GetDepartamenteAggregateType<T extends DepartamenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartamente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartamente[P]>
      : GetScalarType<T[P], AggregateDepartamente[P]>
  }




  export type departamenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departamenteWhereInput
    orderBy?: departamenteOrderByWithAggregationInput | departamenteOrderByWithAggregationInput[]
    by: DepartamenteScalarFieldEnum[] | DepartamenteScalarFieldEnum
    having?: departamenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartamenteCountAggregateInputType | true
    _min?: DepartamenteMinAggregateInputType
    _max?: DepartamenteMaxAggregateInputType
  }

  export type DepartamenteGroupByOutputType = {
    id: string
    nume: string
    descriere: string
    _count: DepartamenteCountAggregateOutputType | null
    _min: DepartamenteMinAggregateOutputType | null
    _max: DepartamenteMaxAggregateOutputType | null
  }

  type GetDepartamenteGroupByPayload<T extends departamenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartamenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartamenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartamenteGroupByOutputType[P]>
            : GetScalarType<T[P], DepartamenteGroupByOutputType[P]>
        }
      >
    >


  export type departamenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
    documente?: boolean | departamente$documenteArgs<ExtArgs>
    registre?: boolean | departamente$registreArgs<ExtArgs>
    utilizatori?: boolean | departamente$utilizatoriArgs<ExtArgs>
    _count?: boolean | DepartamenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departamente"]>

  export type departamenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
  }, ExtArgs["result"]["departamente"]>

  export type departamenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
  }, ExtArgs["result"]["departamente"]>

  export type departamenteSelectScalar = {
    id?: boolean
    nume?: boolean
    descriere?: boolean
  }

  export type departamenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nume" | "descriere", ExtArgs["result"]["departamente"]>
  export type departamenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documente?: boolean | departamente$documenteArgs<ExtArgs>
    registre?: boolean | departamente$registreArgs<ExtArgs>
    utilizatori?: boolean | departamente$utilizatoriArgs<ExtArgs>
    _count?: boolean | DepartamenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type departamenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type departamenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $departamentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "departamente"
    objects: {
      documente: Prisma.$documentePayload<ExtArgs>[]
      registre: Prisma.$registrePayload<ExtArgs>[]
      utilizatori: Prisma.$utilizatoriPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nume: string
      descriere: string
    }, ExtArgs["result"]["departamente"]>
    composites: {}
  }

  type departamenteGetPayload<S extends boolean | null | undefined | departamenteDefaultArgs> = $Result.GetResult<Prisma.$departamentePayload, S>

  type departamenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departamenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartamenteCountAggregateInputType | true
    }

  export interface departamenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['departamente'], meta: { name: 'departamente' } }
    /**
     * Find zero or one Departamente that matches the filter.
     * @param {departamenteFindUniqueArgs} args - Arguments to find a Departamente
     * @example
     * // Get one Departamente
     * const departamente = await prisma.departamente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departamenteFindUniqueArgs>(args: SelectSubset<T, departamenteFindUniqueArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departamente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departamenteFindUniqueOrThrowArgs} args - Arguments to find a Departamente
     * @example
     * // Get one Departamente
     * const departamente = await prisma.departamente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departamenteFindUniqueOrThrowArgs>(args: SelectSubset<T, departamenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamenteFindFirstArgs} args - Arguments to find a Departamente
     * @example
     * // Get one Departamente
     * const departamente = await prisma.departamente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departamenteFindFirstArgs>(args?: SelectSubset<T, departamenteFindFirstArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamenteFindFirstOrThrowArgs} args - Arguments to find a Departamente
     * @example
     * // Get one Departamente
     * const departamente = await prisma.departamente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departamenteFindFirstOrThrowArgs>(args?: SelectSubset<T, departamenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departamentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departamentes
     * const departamentes = await prisma.departamente.findMany()
     * 
     * // Get first 10 Departamentes
     * const departamentes = await prisma.departamente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departamenteWithIdOnly = await prisma.departamente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends departamenteFindManyArgs>(args?: SelectSubset<T, departamenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departamente.
     * @param {departamenteCreateArgs} args - Arguments to create a Departamente.
     * @example
     * // Create one Departamente
     * const Departamente = await prisma.departamente.create({
     *   data: {
     *     // ... data to create a Departamente
     *   }
     * })
     * 
     */
    create<T extends departamenteCreateArgs>(args: SelectSubset<T, departamenteCreateArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departamentes.
     * @param {departamenteCreateManyArgs} args - Arguments to create many Departamentes.
     * @example
     * // Create many Departamentes
     * const departamente = await prisma.departamente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departamenteCreateManyArgs>(args?: SelectSubset<T, departamenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departamentes and returns the data saved in the database.
     * @param {departamenteCreateManyAndReturnArgs} args - Arguments to create many Departamentes.
     * @example
     * // Create many Departamentes
     * const departamente = await prisma.departamente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departamentes and only return the `id`
     * const departamenteWithIdOnly = await prisma.departamente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends departamenteCreateManyAndReturnArgs>(args?: SelectSubset<T, departamenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departamente.
     * @param {departamenteDeleteArgs} args - Arguments to delete one Departamente.
     * @example
     * // Delete one Departamente
     * const Departamente = await prisma.departamente.delete({
     *   where: {
     *     // ... filter to delete one Departamente
     *   }
     * })
     * 
     */
    delete<T extends departamenteDeleteArgs>(args: SelectSubset<T, departamenteDeleteArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departamente.
     * @param {departamenteUpdateArgs} args - Arguments to update one Departamente.
     * @example
     * // Update one Departamente
     * const departamente = await prisma.departamente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departamenteUpdateArgs>(args: SelectSubset<T, departamenteUpdateArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departamentes.
     * @param {departamenteDeleteManyArgs} args - Arguments to filter Departamentes to delete.
     * @example
     * // Delete a few Departamentes
     * const { count } = await prisma.departamente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departamenteDeleteManyArgs>(args?: SelectSubset<T, departamenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departamentes
     * const departamente = await prisma.departamente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departamenteUpdateManyArgs>(args: SelectSubset<T, departamenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentes and returns the data updated in the database.
     * @param {departamenteUpdateManyAndReturnArgs} args - Arguments to update many Departamentes.
     * @example
     * // Update many Departamentes
     * const departamente = await prisma.departamente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departamentes and only return the `id`
     * const departamenteWithIdOnly = await prisma.departamente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends departamenteUpdateManyAndReturnArgs>(args: SelectSubset<T, departamenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departamente.
     * @param {departamenteUpsertArgs} args - Arguments to update or create a Departamente.
     * @example
     * // Update or create a Departamente
     * const departamente = await prisma.departamente.upsert({
     *   create: {
     *     // ... data to create a Departamente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departamente we want to update
     *   }
     * })
     */
    upsert<T extends departamenteUpsertArgs>(args: SelectSubset<T, departamenteUpsertArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departamentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamenteCountArgs} args - Arguments to filter Departamentes to count.
     * @example
     * // Count the number of Departamentes
     * const count = await prisma.departamente.count({
     *   where: {
     *     // ... the filter for the Departamentes we want to count
     *   }
     * })
    **/
    count<T extends departamenteCountArgs>(
      args?: Subset<T, departamenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartamenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departamente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartamenteAggregateArgs>(args: Subset<T, DepartamenteAggregateArgs>): Prisma.PrismaPromise<GetDepartamenteAggregateType<T>>

    /**
     * Group by Departamente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends departamenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departamenteGroupByArgs['orderBy'] }
        : { orderBy?: departamenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, departamenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartamenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the departamente model
   */
  readonly fields: departamenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for departamente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departamenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documente<T extends departamente$documenteArgs<ExtArgs> = {}>(args?: Subset<T, departamente$documenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registre<T extends departamente$registreArgs<ExtArgs> = {}>(args?: Subset<T, departamente$registreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilizatori<T extends departamente$utilizatoriArgs<ExtArgs> = {}>(args?: Subset<T, departamente$utilizatoriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the departamente model
   */
  interface departamenteFieldRefs {
    readonly id: FieldRef<"departamente", 'String'>
    readonly nume: FieldRef<"departamente", 'String'>
    readonly descriere: FieldRef<"departamente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * departamente findUnique
   */
  export type departamenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    /**
     * Filter, which departamente to fetch.
     */
    where: departamenteWhereUniqueInput
  }

  /**
   * departamente findUniqueOrThrow
   */
  export type departamenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    /**
     * Filter, which departamente to fetch.
     */
    where: departamenteWhereUniqueInput
  }

  /**
   * departamente findFirst
   */
  export type departamenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    /**
     * Filter, which departamente to fetch.
     */
    where?: departamenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentes to fetch.
     */
    orderBy?: departamenteOrderByWithRelationInput | departamenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departamentes.
     */
    cursor?: departamenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departamentes.
     */
    distinct?: DepartamenteScalarFieldEnum | DepartamenteScalarFieldEnum[]
  }

  /**
   * departamente findFirstOrThrow
   */
  export type departamenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    /**
     * Filter, which departamente to fetch.
     */
    where?: departamenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentes to fetch.
     */
    orderBy?: departamenteOrderByWithRelationInput | departamenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departamentes.
     */
    cursor?: departamenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departamentes.
     */
    distinct?: DepartamenteScalarFieldEnum | DepartamenteScalarFieldEnum[]
  }

  /**
   * departamente findMany
   */
  export type departamenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    /**
     * Filter, which departamentes to fetch.
     */
    where?: departamenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentes to fetch.
     */
    orderBy?: departamenteOrderByWithRelationInput | departamenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departamentes.
     */
    cursor?: departamenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentes.
     */
    skip?: number
    distinct?: DepartamenteScalarFieldEnum | DepartamenteScalarFieldEnum[]
  }

  /**
   * departamente create
   */
  export type departamenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    /**
     * The data needed to create a departamente.
     */
    data: XOR<departamenteCreateInput, departamenteUncheckedCreateInput>
  }

  /**
   * departamente createMany
   */
  export type departamenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departamentes.
     */
    data: departamenteCreateManyInput | departamenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departamente createManyAndReturn
   */
  export type departamenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * The data used to create many departamentes.
     */
    data: departamenteCreateManyInput | departamenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departamente update
   */
  export type departamenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    /**
     * The data needed to update a departamente.
     */
    data: XOR<departamenteUpdateInput, departamenteUncheckedUpdateInput>
    /**
     * Choose, which departamente to update.
     */
    where: departamenteWhereUniqueInput
  }

  /**
   * departamente updateMany
   */
  export type departamenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departamentes.
     */
    data: XOR<departamenteUpdateManyMutationInput, departamenteUncheckedUpdateManyInput>
    /**
     * Filter which departamentes to update
     */
    where?: departamenteWhereInput
    /**
     * Limit how many departamentes to update.
     */
    limit?: number
  }

  /**
   * departamente updateManyAndReturn
   */
  export type departamenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * The data used to update departamentes.
     */
    data: XOR<departamenteUpdateManyMutationInput, departamenteUncheckedUpdateManyInput>
    /**
     * Filter which departamentes to update
     */
    where?: departamenteWhereInput
    /**
     * Limit how many departamentes to update.
     */
    limit?: number
  }

  /**
   * departamente upsert
   */
  export type departamenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    /**
     * The filter to search for the departamente to update in case it exists.
     */
    where: departamenteWhereUniqueInput
    /**
     * In case the departamente found by the `where` argument doesn't exist, create a new departamente with this data.
     */
    create: XOR<departamenteCreateInput, departamenteUncheckedCreateInput>
    /**
     * In case the departamente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departamenteUpdateInput, departamenteUncheckedUpdateInput>
  }

  /**
   * departamente delete
   */
  export type departamenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    /**
     * Filter which departamente to delete.
     */
    where: departamenteWhereUniqueInput
  }

  /**
   * departamente deleteMany
   */
  export type departamenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departamentes to delete
     */
    where?: departamenteWhereInput
    /**
     * Limit how many departamentes to delete.
     */
    limit?: number
  }

  /**
   * departamente.documente
   */
  export type departamente$documenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    where?: documenteWhereInput
    orderBy?: documenteOrderByWithRelationInput | documenteOrderByWithRelationInput[]
    cursor?: documenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumenteScalarFieldEnum | DocumenteScalarFieldEnum[]
  }

  /**
   * departamente.registre
   */
  export type departamente$registreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    where?: registreWhereInput
    orderBy?: registreOrderByWithRelationInput | registreOrderByWithRelationInput[]
    cursor?: registreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistreScalarFieldEnum | RegistreScalarFieldEnum[]
  }

  /**
   * departamente.utilizatori
   */
  export type departamente$utilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    where?: utilizatoriWhereInput
    orderBy?: utilizatoriOrderByWithRelationInput | utilizatoriOrderByWithRelationInput[]
    cursor?: utilizatoriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilizatoriScalarFieldEnum | UtilizatoriScalarFieldEnum[]
  }

  /**
   * departamente without action
   */
  export type departamenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
  }


  /**
   * Model documente
   */

  export type AggregateDocumente = {
    _count: DocumenteCountAggregateOutputType | null
    _avg: DocumenteAvgAggregateOutputType | null
    _sum: DocumenteSumAggregateOutputType | null
    _min: DocumenteMinAggregateOutputType | null
    _max: DocumenteMaxAggregateOutputType | null
  }

  export type DocumenteAvgAggregateOutputType = {
    numar_inregistrare: number | null
  }

  export type DocumenteSumAggregateOutputType = {
    numar_inregistrare: number | null
  }

  export type DocumenteMinAggregateOutputType = {
    id: string | null
    registru_id: string | null
    numar_inregistrare: number | null
    data: Date | null
    numar_document: string | null
    data_document: Date | null
    sursa: string | null
    rezumat: string | null
    departament_adresat: string | null
    destinatar_id: string | null
    tip_document_id: string | null
    data_expedierii: Date | null
    creat_la: Date | null
    inregistrat_de: string | null
    preluat_de: string | null
    stadiu: string | null
  }

  export type DocumenteMaxAggregateOutputType = {
    id: string | null
    registru_id: string | null
    numar_inregistrare: number | null
    data: Date | null
    numar_document: string | null
    data_document: Date | null
    sursa: string | null
    rezumat: string | null
    departament_adresat: string | null
    destinatar_id: string | null
    tip_document_id: string | null
    data_expedierii: Date | null
    creat_la: Date | null
    inregistrat_de: string | null
    preluat_de: string | null
    stadiu: string | null
  }

  export type DocumenteCountAggregateOutputType = {
    id: number
    registru_id: number
    numar_inregistrare: number
    data: number
    numar_document: number
    data_document: number
    sursa: number
    rezumat: number
    departament_adresat: number
    destinatar_id: number
    tip_document_id: number
    data_expedierii: number
    creat_la: number
    inregistrat_de: number
    preluat_de: number
    stadiu: number
    _all: number
  }


  export type DocumenteAvgAggregateInputType = {
    numar_inregistrare?: true
  }

  export type DocumenteSumAggregateInputType = {
    numar_inregistrare?: true
  }

  export type DocumenteMinAggregateInputType = {
    id?: true
    registru_id?: true
    numar_inregistrare?: true
    data?: true
    numar_document?: true
    data_document?: true
    sursa?: true
    rezumat?: true
    departament_adresat?: true
    destinatar_id?: true
    tip_document_id?: true
    data_expedierii?: true
    creat_la?: true
    inregistrat_de?: true
    preluat_de?: true
    stadiu?: true
  }

  export type DocumenteMaxAggregateInputType = {
    id?: true
    registru_id?: true
    numar_inregistrare?: true
    data?: true
    numar_document?: true
    data_document?: true
    sursa?: true
    rezumat?: true
    departament_adresat?: true
    destinatar_id?: true
    tip_document_id?: true
    data_expedierii?: true
    creat_la?: true
    inregistrat_de?: true
    preluat_de?: true
    stadiu?: true
  }

  export type DocumenteCountAggregateInputType = {
    id?: true
    registru_id?: true
    numar_inregistrare?: true
    data?: true
    numar_document?: true
    data_document?: true
    sursa?: true
    rezumat?: true
    departament_adresat?: true
    destinatar_id?: true
    tip_document_id?: true
    data_expedierii?: true
    creat_la?: true
    inregistrat_de?: true
    preluat_de?: true
    stadiu?: true
    _all?: true
  }

  export type DocumenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documente to aggregate.
     */
    where?: documenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentes to fetch.
     */
    orderBy?: documenteOrderByWithRelationInput | documenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documentes
    **/
    _count?: true | DocumenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumenteMaxAggregateInputType
  }

  export type GetDocumenteAggregateType<T extends DocumenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumente[P]>
      : GetScalarType<T[P], AggregateDocumente[P]>
  }




  export type documenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documenteWhereInput
    orderBy?: documenteOrderByWithAggregationInput | documenteOrderByWithAggregationInput[]
    by: DocumenteScalarFieldEnum[] | DocumenteScalarFieldEnum
    having?: documenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumenteCountAggregateInputType | true
    _avg?: DocumenteAvgAggregateInputType
    _sum?: DocumenteSumAggregateInputType
    _min?: DocumenteMinAggregateInputType
    _max?: DocumenteMaxAggregateInputType
  }

  export type DocumenteGroupByOutputType = {
    id: string
    registru_id: string
    numar_inregistrare: number | null
    data: Date
    numar_document: string
    data_document: Date
    sursa: string
    rezumat: string
    departament_adresat: string | null
    destinatar_id: string | null
    tip_document_id: string
    data_expedierii: Date
    creat_la: Date | null
    inregistrat_de: string | null
    preluat_de: string | null
    stadiu: string
    _count: DocumenteCountAggregateOutputType | null
    _avg: DocumenteAvgAggregateOutputType | null
    _sum: DocumenteSumAggregateOutputType | null
    _min: DocumenteMinAggregateOutputType | null
    _max: DocumenteMaxAggregateOutputType | null
  }

  type GetDocumenteGroupByPayload<T extends documenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumenteGroupByOutputType[P]>
            : GetScalarType<T[P], DocumenteGroupByOutputType[P]>
        }
      >
    >


  export type documenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registru_id?: boolean
    numar_inregistrare?: boolean
    data?: boolean
    numar_document?: boolean
    data_document?: boolean
    sursa?: boolean
    rezumat?: boolean
    departament_adresat?: boolean
    destinatar_id?: boolean
    tip_document_id?: boolean
    data_expedierii?: boolean
    creat_la?: boolean
    inregistrat_de?: boolean
    preluat_de?: boolean
    stadiu?: boolean
    departamente?: boolean | documente$departamenteArgs<ExtArgs>
    utilizatori_documente_destinatar_idToutilizatori?: boolean | documente$utilizatori_documente_destinatar_idToutilizatoriArgs<ExtArgs>
    utilizatori_documente_inregistrat_deToutilizatori?: boolean | documente$utilizatori_documente_inregistrat_deToutilizatoriArgs<ExtArgs>
    utilizatori_documente_preluat_deToutilizatori?: boolean | documente$utilizatori_documente_preluat_deToutilizatoriArgs<ExtArgs>
    registre?: boolean | registreDefaultArgs<ExtArgs>
    tipuri_documente?: boolean | tipuri_documenteDefaultArgs<ExtArgs>
    notificari?: boolean | documente$notificariArgs<ExtArgs>
    _count?: boolean | DocumenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documente"]>

  export type documenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registru_id?: boolean
    numar_inregistrare?: boolean
    data?: boolean
    numar_document?: boolean
    data_document?: boolean
    sursa?: boolean
    rezumat?: boolean
    departament_adresat?: boolean
    destinatar_id?: boolean
    tip_document_id?: boolean
    data_expedierii?: boolean
    creat_la?: boolean
    inregistrat_de?: boolean
    preluat_de?: boolean
    stadiu?: boolean
    departamente?: boolean | documente$departamenteArgs<ExtArgs>
    utilizatori_documente_destinatar_idToutilizatori?: boolean | documente$utilizatori_documente_destinatar_idToutilizatoriArgs<ExtArgs>
    utilizatori_documente_inregistrat_deToutilizatori?: boolean | documente$utilizatori_documente_inregistrat_deToutilizatoriArgs<ExtArgs>
    utilizatori_documente_preluat_deToutilizatori?: boolean | documente$utilizatori_documente_preluat_deToutilizatoriArgs<ExtArgs>
    registre?: boolean | registreDefaultArgs<ExtArgs>
    tipuri_documente?: boolean | tipuri_documenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documente"]>

  export type documenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registru_id?: boolean
    numar_inregistrare?: boolean
    data?: boolean
    numar_document?: boolean
    data_document?: boolean
    sursa?: boolean
    rezumat?: boolean
    departament_adresat?: boolean
    destinatar_id?: boolean
    tip_document_id?: boolean
    data_expedierii?: boolean
    creat_la?: boolean
    inregistrat_de?: boolean
    preluat_de?: boolean
    stadiu?: boolean
    departamente?: boolean | documente$departamenteArgs<ExtArgs>
    utilizatori_documente_destinatar_idToutilizatori?: boolean | documente$utilizatori_documente_destinatar_idToutilizatoriArgs<ExtArgs>
    utilizatori_documente_inregistrat_deToutilizatori?: boolean | documente$utilizatori_documente_inregistrat_deToutilizatoriArgs<ExtArgs>
    utilizatori_documente_preluat_deToutilizatori?: boolean | documente$utilizatori_documente_preluat_deToutilizatoriArgs<ExtArgs>
    registre?: boolean | registreDefaultArgs<ExtArgs>
    tipuri_documente?: boolean | tipuri_documenteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documente"]>

  export type documenteSelectScalar = {
    id?: boolean
    registru_id?: boolean
    numar_inregistrare?: boolean
    data?: boolean
    numar_document?: boolean
    data_document?: boolean
    sursa?: boolean
    rezumat?: boolean
    departament_adresat?: boolean
    destinatar_id?: boolean
    tip_document_id?: boolean
    data_expedierii?: boolean
    creat_la?: boolean
    inregistrat_de?: boolean
    preluat_de?: boolean
    stadiu?: boolean
  }

  export type documenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registru_id" | "numar_inregistrare" | "data" | "numar_document" | "data_document" | "sursa" | "rezumat" | "departament_adresat" | "destinatar_id" | "tip_document_id" | "data_expedierii" | "creat_la" | "inregistrat_de" | "preluat_de" | "stadiu", ExtArgs["result"]["documente"]>
  export type documenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamente?: boolean | documente$departamenteArgs<ExtArgs>
    utilizatori_documente_destinatar_idToutilizatori?: boolean | documente$utilizatori_documente_destinatar_idToutilizatoriArgs<ExtArgs>
    utilizatori_documente_inregistrat_deToutilizatori?: boolean | documente$utilizatori_documente_inregistrat_deToutilizatoriArgs<ExtArgs>
    utilizatori_documente_preluat_deToutilizatori?: boolean | documente$utilizatori_documente_preluat_deToutilizatoriArgs<ExtArgs>
    registre?: boolean | registreDefaultArgs<ExtArgs>
    tipuri_documente?: boolean | tipuri_documenteDefaultArgs<ExtArgs>
    notificari?: boolean | documente$notificariArgs<ExtArgs>
    _count?: boolean | DocumenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type documenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamente?: boolean | documente$departamenteArgs<ExtArgs>
    utilizatori_documente_destinatar_idToutilizatori?: boolean | documente$utilizatori_documente_destinatar_idToutilizatoriArgs<ExtArgs>
    utilizatori_documente_inregistrat_deToutilizatori?: boolean | documente$utilizatori_documente_inregistrat_deToutilizatoriArgs<ExtArgs>
    utilizatori_documente_preluat_deToutilizatori?: boolean | documente$utilizatori_documente_preluat_deToutilizatoriArgs<ExtArgs>
    registre?: boolean | registreDefaultArgs<ExtArgs>
    tipuri_documente?: boolean | tipuri_documenteDefaultArgs<ExtArgs>
  }
  export type documenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamente?: boolean | documente$departamenteArgs<ExtArgs>
    utilizatori_documente_destinatar_idToutilizatori?: boolean | documente$utilizatori_documente_destinatar_idToutilizatoriArgs<ExtArgs>
    utilizatori_documente_inregistrat_deToutilizatori?: boolean | documente$utilizatori_documente_inregistrat_deToutilizatoriArgs<ExtArgs>
    utilizatori_documente_preluat_deToutilizatori?: boolean | documente$utilizatori_documente_preluat_deToutilizatoriArgs<ExtArgs>
    registre?: boolean | registreDefaultArgs<ExtArgs>
    tipuri_documente?: boolean | tipuri_documenteDefaultArgs<ExtArgs>
  }

  export type $documentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documente"
    objects: {
      departamente: Prisma.$departamentePayload<ExtArgs> | null
      utilizatori_documente_destinatar_idToutilizatori: Prisma.$utilizatoriPayload<ExtArgs> | null
      utilizatori_documente_inregistrat_deToutilizatori: Prisma.$utilizatoriPayload<ExtArgs> | null
      utilizatori_documente_preluat_deToutilizatori: Prisma.$utilizatoriPayload<ExtArgs> | null
      registre: Prisma.$registrePayload<ExtArgs>
      tipuri_documente: Prisma.$tipuri_documentePayload<ExtArgs>
      notificari: Prisma.$notificariPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registru_id: string
      numar_inregistrare: number | null
      data: Date
      numar_document: string
      data_document: Date
      sursa: string
      rezumat: string
      departament_adresat: string | null
      destinatar_id: string | null
      tip_document_id: string
      data_expedierii: Date
      creat_la: Date | null
      inregistrat_de: string | null
      preluat_de: string | null
      stadiu: string
    }, ExtArgs["result"]["documente"]>
    composites: {}
  }

  type documenteGetPayload<S extends boolean | null | undefined | documenteDefaultArgs> = $Result.GetResult<Prisma.$documentePayload, S>

  type documenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<documenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumenteCountAggregateInputType | true
    }

  export interface documenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documente'], meta: { name: 'documente' } }
    /**
     * Find zero or one Documente that matches the filter.
     * @param {documenteFindUniqueArgs} args - Arguments to find a Documente
     * @example
     * // Get one Documente
     * const documente = await prisma.documente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documenteFindUniqueArgs>(args: SelectSubset<T, documenteFindUniqueArgs<ExtArgs>>): Prisma__documenteClient<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {documenteFindUniqueOrThrowArgs} args - Arguments to find a Documente
     * @example
     * // Get one Documente
     * const documente = await prisma.documente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documenteFindUniqueOrThrowArgs>(args: SelectSubset<T, documenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documenteClient<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documenteFindFirstArgs} args - Arguments to find a Documente
     * @example
     * // Get one Documente
     * const documente = await prisma.documente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documenteFindFirstArgs>(args?: SelectSubset<T, documenteFindFirstArgs<ExtArgs>>): Prisma__documenteClient<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documenteFindFirstOrThrowArgs} args - Arguments to find a Documente
     * @example
     * // Get one Documente
     * const documente = await prisma.documente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documenteFindFirstOrThrowArgs>(args?: SelectSubset<T, documenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__documenteClient<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentes
     * const documentes = await prisma.documente.findMany()
     * 
     * // Get first 10 Documentes
     * const documentes = await prisma.documente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documenteWithIdOnly = await prisma.documente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends documenteFindManyArgs>(args?: SelectSubset<T, documenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documente.
     * @param {documenteCreateArgs} args - Arguments to create a Documente.
     * @example
     * // Create one Documente
     * const Documente = await prisma.documente.create({
     *   data: {
     *     // ... data to create a Documente
     *   }
     * })
     * 
     */
    create<T extends documenteCreateArgs>(args: SelectSubset<T, documenteCreateArgs<ExtArgs>>): Prisma__documenteClient<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documentes.
     * @param {documenteCreateManyArgs} args - Arguments to create many Documentes.
     * @example
     * // Create many Documentes
     * const documente = await prisma.documente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documenteCreateManyArgs>(args?: SelectSubset<T, documenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documentes and returns the data saved in the database.
     * @param {documenteCreateManyAndReturnArgs} args - Arguments to create many Documentes.
     * @example
     * // Create many Documentes
     * const documente = await prisma.documente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documentes and only return the `id`
     * const documenteWithIdOnly = await prisma.documente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends documenteCreateManyAndReturnArgs>(args?: SelectSubset<T, documenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documente.
     * @param {documenteDeleteArgs} args - Arguments to delete one Documente.
     * @example
     * // Delete one Documente
     * const Documente = await prisma.documente.delete({
     *   where: {
     *     // ... filter to delete one Documente
     *   }
     * })
     * 
     */
    delete<T extends documenteDeleteArgs>(args: SelectSubset<T, documenteDeleteArgs<ExtArgs>>): Prisma__documenteClient<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documente.
     * @param {documenteUpdateArgs} args - Arguments to update one Documente.
     * @example
     * // Update one Documente
     * const documente = await prisma.documente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documenteUpdateArgs>(args: SelectSubset<T, documenteUpdateArgs<ExtArgs>>): Prisma__documenteClient<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documentes.
     * @param {documenteDeleteManyArgs} args - Arguments to filter Documentes to delete.
     * @example
     * // Delete a few Documentes
     * const { count } = await prisma.documente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documenteDeleteManyArgs>(args?: SelectSubset<T, documenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentes
     * const documente = await prisma.documente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documenteUpdateManyArgs>(args: SelectSubset<T, documenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentes and returns the data updated in the database.
     * @param {documenteUpdateManyAndReturnArgs} args - Arguments to update many Documentes.
     * @example
     * // Update many Documentes
     * const documente = await prisma.documente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documentes and only return the `id`
     * const documenteWithIdOnly = await prisma.documente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends documenteUpdateManyAndReturnArgs>(args: SelectSubset<T, documenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documente.
     * @param {documenteUpsertArgs} args - Arguments to update or create a Documente.
     * @example
     * // Update or create a Documente
     * const documente = await prisma.documente.upsert({
     *   create: {
     *     // ... data to create a Documente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documente we want to update
     *   }
     * })
     */
    upsert<T extends documenteUpsertArgs>(args: SelectSubset<T, documenteUpsertArgs<ExtArgs>>): Prisma__documenteClient<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documenteCountArgs} args - Arguments to filter Documentes to count.
     * @example
     * // Count the number of Documentes
     * const count = await prisma.documente.count({
     *   where: {
     *     // ... the filter for the Documentes we want to count
     *   }
     * })
    **/
    count<T extends documenteCountArgs>(
      args?: Subset<T, documenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumenteAggregateArgs>(args: Subset<T, DocumenteAggregateArgs>): Prisma.PrismaPromise<GetDocumenteAggregateType<T>>

    /**
     * Group by Documente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends documenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documenteGroupByArgs['orderBy'] }
        : { orderBy?: documenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, documenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documente model
   */
  readonly fields: documenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departamente<T extends documente$departamenteArgs<ExtArgs> = {}>(args?: Subset<T, documente$departamenteArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    utilizatori_documente_destinatar_idToutilizatori<T extends documente$utilizatori_documente_destinatar_idToutilizatoriArgs<ExtArgs> = {}>(args?: Subset<T, documente$utilizatori_documente_destinatar_idToutilizatoriArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    utilizatori_documente_inregistrat_deToutilizatori<T extends documente$utilizatori_documente_inregistrat_deToutilizatoriArgs<ExtArgs> = {}>(args?: Subset<T, documente$utilizatori_documente_inregistrat_deToutilizatoriArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    utilizatori_documente_preluat_deToutilizatori<T extends documente$utilizatori_documente_preluat_deToutilizatoriArgs<ExtArgs> = {}>(args?: Subset<T, documente$utilizatori_documente_preluat_deToutilizatoriArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registre<T extends registreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, registreDefaultArgs<ExtArgs>>): Prisma__registreClient<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipuri_documente<T extends tipuri_documenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipuri_documenteDefaultArgs<ExtArgs>>): Prisma__tipuri_documenteClient<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notificari<T extends documente$notificariArgs<ExtArgs> = {}>(args?: Subset<T, documente$notificariArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the documente model
   */
  interface documenteFieldRefs {
    readonly id: FieldRef<"documente", 'String'>
    readonly registru_id: FieldRef<"documente", 'String'>
    readonly numar_inregistrare: FieldRef<"documente", 'Int'>
    readonly data: FieldRef<"documente", 'DateTime'>
    readonly numar_document: FieldRef<"documente", 'String'>
    readonly data_document: FieldRef<"documente", 'DateTime'>
    readonly sursa: FieldRef<"documente", 'String'>
    readonly rezumat: FieldRef<"documente", 'String'>
    readonly departament_adresat: FieldRef<"documente", 'String'>
    readonly destinatar_id: FieldRef<"documente", 'String'>
    readonly tip_document_id: FieldRef<"documente", 'String'>
    readonly data_expedierii: FieldRef<"documente", 'DateTime'>
    readonly creat_la: FieldRef<"documente", 'DateTime'>
    readonly inregistrat_de: FieldRef<"documente", 'String'>
    readonly preluat_de: FieldRef<"documente", 'String'>
    readonly stadiu: FieldRef<"documente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * documente findUnique
   */
  export type documenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    /**
     * Filter, which documente to fetch.
     */
    where: documenteWhereUniqueInput
  }

  /**
   * documente findUniqueOrThrow
   */
  export type documenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    /**
     * Filter, which documente to fetch.
     */
    where: documenteWhereUniqueInput
  }

  /**
   * documente findFirst
   */
  export type documenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    /**
     * Filter, which documente to fetch.
     */
    where?: documenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentes to fetch.
     */
    orderBy?: documenteOrderByWithRelationInput | documenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documentes.
     */
    cursor?: documenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documentes.
     */
    distinct?: DocumenteScalarFieldEnum | DocumenteScalarFieldEnum[]
  }

  /**
   * documente findFirstOrThrow
   */
  export type documenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    /**
     * Filter, which documente to fetch.
     */
    where?: documenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentes to fetch.
     */
    orderBy?: documenteOrderByWithRelationInput | documenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documentes.
     */
    cursor?: documenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documentes.
     */
    distinct?: DocumenteScalarFieldEnum | DocumenteScalarFieldEnum[]
  }

  /**
   * documente findMany
   */
  export type documenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    /**
     * Filter, which documentes to fetch.
     */
    where?: documenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentes to fetch.
     */
    orderBy?: documenteOrderByWithRelationInput | documenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documentes.
     */
    cursor?: documenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentes.
     */
    skip?: number
    distinct?: DocumenteScalarFieldEnum | DocumenteScalarFieldEnum[]
  }

  /**
   * documente create
   */
  export type documenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    /**
     * The data needed to create a documente.
     */
    data: XOR<documenteCreateInput, documenteUncheckedCreateInput>
  }

  /**
   * documente createMany
   */
  export type documenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documentes.
     */
    data: documenteCreateManyInput | documenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documente createManyAndReturn
   */
  export type documenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * The data used to create many documentes.
     */
    data: documenteCreateManyInput | documenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * documente update
   */
  export type documenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    /**
     * The data needed to update a documente.
     */
    data: XOR<documenteUpdateInput, documenteUncheckedUpdateInput>
    /**
     * Choose, which documente to update.
     */
    where: documenteWhereUniqueInput
  }

  /**
   * documente updateMany
   */
  export type documenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documentes.
     */
    data: XOR<documenteUpdateManyMutationInput, documenteUncheckedUpdateManyInput>
    /**
     * Filter which documentes to update
     */
    where?: documenteWhereInput
    /**
     * Limit how many documentes to update.
     */
    limit?: number
  }

  /**
   * documente updateManyAndReturn
   */
  export type documenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * The data used to update documentes.
     */
    data: XOR<documenteUpdateManyMutationInput, documenteUncheckedUpdateManyInput>
    /**
     * Filter which documentes to update
     */
    where?: documenteWhereInput
    /**
     * Limit how many documentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * documente upsert
   */
  export type documenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    /**
     * The filter to search for the documente to update in case it exists.
     */
    where: documenteWhereUniqueInput
    /**
     * In case the documente found by the `where` argument doesn't exist, create a new documente with this data.
     */
    create: XOR<documenteCreateInput, documenteUncheckedCreateInput>
    /**
     * In case the documente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documenteUpdateInput, documenteUncheckedUpdateInput>
  }

  /**
   * documente delete
   */
  export type documenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    /**
     * Filter which documente to delete.
     */
    where: documenteWhereUniqueInput
  }

  /**
   * documente deleteMany
   */
  export type documenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documentes to delete
     */
    where?: documenteWhereInput
    /**
     * Limit how many documentes to delete.
     */
    limit?: number
  }

  /**
   * documente.departamente
   */
  export type documente$departamenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    where?: departamenteWhereInput
  }

  /**
   * documente.utilizatori_documente_destinatar_idToutilizatori
   */
  export type documente$utilizatori_documente_destinatar_idToutilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    where?: utilizatoriWhereInput
  }

  /**
   * documente.utilizatori_documente_inregistrat_deToutilizatori
   */
  export type documente$utilizatori_documente_inregistrat_deToutilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    where?: utilizatoriWhereInput
  }

  /**
   * documente.utilizatori_documente_preluat_deToutilizatori
   */
  export type documente$utilizatori_documente_preluat_deToutilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    where?: utilizatoriWhereInput
  }

  /**
   * documente.notificari
   */
  export type documente$notificariArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    where?: notificariWhereInput
    orderBy?: notificariOrderByWithRelationInput | notificariOrderByWithRelationInput[]
    cursor?: notificariWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificariScalarFieldEnum | NotificariScalarFieldEnum[]
  }

  /**
   * documente without action
   */
  export type documenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
  }


  /**
   * Model notificari
   */

  export type AggregateNotificari = {
    _count: NotificariCountAggregateOutputType | null
    _min: NotificariMinAggregateOutputType | null
    _max: NotificariMaxAggregateOutputType | null
  }

  export type NotificariMinAggregateOutputType = {
    id: string | null
    document_id: string | null
    destinatar_id: string | null
    mesaj: string | null
    status: string | null
    created_at: Date | null
    citita: boolean | null
  }

  export type NotificariMaxAggregateOutputType = {
    id: string | null
    document_id: string | null
    destinatar_id: string | null
    mesaj: string | null
    status: string | null
    created_at: Date | null
    citita: boolean | null
  }

  export type NotificariCountAggregateOutputType = {
    id: number
    document_id: number
    destinatar_id: number
    mesaj: number
    status: number
    created_at: number
    citita: number
    _all: number
  }


  export type NotificariMinAggregateInputType = {
    id?: true
    document_id?: true
    destinatar_id?: true
    mesaj?: true
    status?: true
    created_at?: true
    citita?: true
  }

  export type NotificariMaxAggregateInputType = {
    id?: true
    document_id?: true
    destinatar_id?: true
    mesaj?: true
    status?: true
    created_at?: true
    citita?: true
  }

  export type NotificariCountAggregateInputType = {
    id?: true
    document_id?: true
    destinatar_id?: true
    mesaj?: true
    status?: true
    created_at?: true
    citita?: true
    _all?: true
  }

  export type NotificariAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notificari to aggregate.
     */
    where?: notificariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificaris to fetch.
     */
    orderBy?: notificariOrderByWithRelationInput | notificariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notificaris
    **/
    _count?: true | NotificariCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificariMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificariMaxAggregateInputType
  }

  export type GetNotificariAggregateType<T extends NotificariAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificari]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificari[P]>
      : GetScalarType<T[P], AggregateNotificari[P]>
  }




  export type notificariGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificariWhereInput
    orderBy?: notificariOrderByWithAggregationInput | notificariOrderByWithAggregationInput[]
    by: NotificariScalarFieldEnum[] | NotificariScalarFieldEnum
    having?: notificariScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificariCountAggregateInputType | true
    _min?: NotificariMinAggregateInputType
    _max?: NotificariMaxAggregateInputType
  }

  export type NotificariGroupByOutputType = {
    id: string
    document_id: string | null
    destinatar_id: string
    mesaj: string
    status: string
    created_at: Date | null
    citita: boolean
    _count: NotificariCountAggregateOutputType | null
    _min: NotificariMinAggregateOutputType | null
    _max: NotificariMaxAggregateOutputType | null
  }

  type GetNotificariGroupByPayload<T extends notificariGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificariGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificariGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificariGroupByOutputType[P]>
            : GetScalarType<T[P], NotificariGroupByOutputType[P]>
        }
      >
    >


  export type notificariSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    destinatar_id?: boolean
    mesaj?: boolean
    status?: boolean
    created_at?: boolean
    citita?: boolean
    utilizatori?: boolean | utilizatoriDefaultArgs<ExtArgs>
    documente?: boolean | notificari$documenteArgs<ExtArgs>
  }, ExtArgs["result"]["notificari"]>

  export type notificariSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    destinatar_id?: boolean
    mesaj?: boolean
    status?: boolean
    created_at?: boolean
    citita?: boolean
    utilizatori?: boolean | utilizatoriDefaultArgs<ExtArgs>
    documente?: boolean | notificari$documenteArgs<ExtArgs>
  }, ExtArgs["result"]["notificari"]>

  export type notificariSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    destinatar_id?: boolean
    mesaj?: boolean
    status?: boolean
    created_at?: boolean
    citita?: boolean
    utilizatori?: boolean | utilizatoriDefaultArgs<ExtArgs>
    documente?: boolean | notificari$documenteArgs<ExtArgs>
  }, ExtArgs["result"]["notificari"]>

  export type notificariSelectScalar = {
    id?: boolean
    document_id?: boolean
    destinatar_id?: boolean
    mesaj?: boolean
    status?: boolean
    created_at?: boolean
    citita?: boolean
  }

  export type notificariOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "document_id" | "destinatar_id" | "mesaj" | "status" | "created_at" | "citita", ExtArgs["result"]["notificari"]>
  export type notificariInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizatori?: boolean | utilizatoriDefaultArgs<ExtArgs>
    documente?: boolean | notificari$documenteArgs<ExtArgs>
  }
  export type notificariIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizatori?: boolean | utilizatoriDefaultArgs<ExtArgs>
    documente?: boolean | notificari$documenteArgs<ExtArgs>
  }
  export type notificariIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizatori?: boolean | utilizatoriDefaultArgs<ExtArgs>
    documente?: boolean | notificari$documenteArgs<ExtArgs>
  }

  export type $notificariPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notificari"
    objects: {
      utilizatori: Prisma.$utilizatoriPayload<ExtArgs>
      documente: Prisma.$documentePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      document_id: string | null
      destinatar_id: string
      mesaj: string
      status: string
      created_at: Date | null
      citita: boolean
    }, ExtArgs["result"]["notificari"]>
    composites: {}
  }

  type notificariGetPayload<S extends boolean | null | undefined | notificariDefaultArgs> = $Result.GetResult<Prisma.$notificariPayload, S>

  type notificariCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificariFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificariCountAggregateInputType | true
    }

  export interface notificariDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notificari'], meta: { name: 'notificari' } }
    /**
     * Find zero or one Notificari that matches the filter.
     * @param {notificariFindUniqueArgs} args - Arguments to find a Notificari
     * @example
     * // Get one Notificari
     * const notificari = await prisma.notificari.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificariFindUniqueArgs>(args: SelectSubset<T, notificariFindUniqueArgs<ExtArgs>>): Prisma__notificariClient<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificari that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificariFindUniqueOrThrowArgs} args - Arguments to find a Notificari
     * @example
     * // Get one Notificari
     * const notificari = await prisma.notificari.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificariFindUniqueOrThrowArgs>(args: SelectSubset<T, notificariFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificariClient<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificari that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificariFindFirstArgs} args - Arguments to find a Notificari
     * @example
     * // Get one Notificari
     * const notificari = await prisma.notificari.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificariFindFirstArgs>(args?: SelectSubset<T, notificariFindFirstArgs<ExtArgs>>): Prisma__notificariClient<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificari that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificariFindFirstOrThrowArgs} args - Arguments to find a Notificari
     * @example
     * // Get one Notificari
     * const notificari = await prisma.notificari.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificariFindFirstOrThrowArgs>(args?: SelectSubset<T, notificariFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificariClient<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificaris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificariFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificaris
     * const notificaris = await prisma.notificari.findMany()
     * 
     * // Get first 10 Notificaris
     * const notificaris = await prisma.notificari.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificariWithIdOnly = await prisma.notificari.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificariFindManyArgs>(args?: SelectSubset<T, notificariFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificari.
     * @param {notificariCreateArgs} args - Arguments to create a Notificari.
     * @example
     * // Create one Notificari
     * const Notificari = await prisma.notificari.create({
     *   data: {
     *     // ... data to create a Notificari
     *   }
     * })
     * 
     */
    create<T extends notificariCreateArgs>(args: SelectSubset<T, notificariCreateArgs<ExtArgs>>): Prisma__notificariClient<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificaris.
     * @param {notificariCreateManyArgs} args - Arguments to create many Notificaris.
     * @example
     * // Create many Notificaris
     * const notificari = await prisma.notificari.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificariCreateManyArgs>(args?: SelectSubset<T, notificariCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificaris and returns the data saved in the database.
     * @param {notificariCreateManyAndReturnArgs} args - Arguments to create many Notificaris.
     * @example
     * // Create many Notificaris
     * const notificari = await prisma.notificari.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificaris and only return the `id`
     * const notificariWithIdOnly = await prisma.notificari.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificariCreateManyAndReturnArgs>(args?: SelectSubset<T, notificariCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificari.
     * @param {notificariDeleteArgs} args - Arguments to delete one Notificari.
     * @example
     * // Delete one Notificari
     * const Notificari = await prisma.notificari.delete({
     *   where: {
     *     // ... filter to delete one Notificari
     *   }
     * })
     * 
     */
    delete<T extends notificariDeleteArgs>(args: SelectSubset<T, notificariDeleteArgs<ExtArgs>>): Prisma__notificariClient<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificari.
     * @param {notificariUpdateArgs} args - Arguments to update one Notificari.
     * @example
     * // Update one Notificari
     * const notificari = await prisma.notificari.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificariUpdateArgs>(args: SelectSubset<T, notificariUpdateArgs<ExtArgs>>): Prisma__notificariClient<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificaris.
     * @param {notificariDeleteManyArgs} args - Arguments to filter Notificaris to delete.
     * @example
     * // Delete a few Notificaris
     * const { count } = await prisma.notificari.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificariDeleteManyArgs>(args?: SelectSubset<T, notificariDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificariUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificaris
     * const notificari = await prisma.notificari.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificariUpdateManyArgs>(args: SelectSubset<T, notificariUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificaris and returns the data updated in the database.
     * @param {notificariUpdateManyAndReturnArgs} args - Arguments to update many Notificaris.
     * @example
     * // Update many Notificaris
     * const notificari = await prisma.notificari.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificaris and only return the `id`
     * const notificariWithIdOnly = await prisma.notificari.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificariUpdateManyAndReturnArgs>(args: SelectSubset<T, notificariUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificari.
     * @param {notificariUpsertArgs} args - Arguments to update or create a Notificari.
     * @example
     * // Update or create a Notificari
     * const notificari = await prisma.notificari.upsert({
     *   create: {
     *     // ... data to create a Notificari
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificari we want to update
     *   }
     * })
     */
    upsert<T extends notificariUpsertArgs>(args: SelectSubset<T, notificariUpsertArgs<ExtArgs>>): Prisma__notificariClient<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificaris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificariCountArgs} args - Arguments to filter Notificaris to count.
     * @example
     * // Count the number of Notificaris
     * const count = await prisma.notificari.count({
     *   where: {
     *     // ... the filter for the Notificaris we want to count
     *   }
     * })
    **/
    count<T extends notificariCountArgs>(
      args?: Subset<T, notificariCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificariCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificariAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificariAggregateArgs>(args: Subset<T, NotificariAggregateArgs>): Prisma.PrismaPromise<GetNotificariAggregateType<T>>

    /**
     * Group by Notificari.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificariGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificariGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificariGroupByArgs['orderBy'] }
        : { orderBy?: notificariGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificariGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificariGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notificari model
   */
  readonly fields: notificariFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notificari.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificariClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilizatori<T extends utilizatoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, utilizatoriDefaultArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documente<T extends notificari$documenteArgs<ExtArgs> = {}>(args?: Subset<T, notificari$documenteArgs<ExtArgs>>): Prisma__documenteClient<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notificari model
   */
  interface notificariFieldRefs {
    readonly id: FieldRef<"notificari", 'String'>
    readonly document_id: FieldRef<"notificari", 'String'>
    readonly destinatar_id: FieldRef<"notificari", 'String'>
    readonly mesaj: FieldRef<"notificari", 'String'>
    readonly status: FieldRef<"notificari", 'String'>
    readonly created_at: FieldRef<"notificari", 'DateTime'>
    readonly citita: FieldRef<"notificari", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * notificari findUnique
   */
  export type notificariFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    /**
     * Filter, which notificari to fetch.
     */
    where: notificariWhereUniqueInput
  }

  /**
   * notificari findUniqueOrThrow
   */
  export type notificariFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    /**
     * Filter, which notificari to fetch.
     */
    where: notificariWhereUniqueInput
  }

  /**
   * notificari findFirst
   */
  export type notificariFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    /**
     * Filter, which notificari to fetch.
     */
    where?: notificariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificaris to fetch.
     */
    orderBy?: notificariOrderByWithRelationInput | notificariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notificaris.
     */
    cursor?: notificariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notificaris.
     */
    distinct?: NotificariScalarFieldEnum | NotificariScalarFieldEnum[]
  }

  /**
   * notificari findFirstOrThrow
   */
  export type notificariFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    /**
     * Filter, which notificari to fetch.
     */
    where?: notificariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificaris to fetch.
     */
    orderBy?: notificariOrderByWithRelationInput | notificariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notificaris.
     */
    cursor?: notificariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificaris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notificaris.
     */
    distinct?: NotificariScalarFieldEnum | NotificariScalarFieldEnum[]
  }

  /**
   * notificari findMany
   */
  export type notificariFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    /**
     * Filter, which notificaris to fetch.
     */
    where?: notificariWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificaris to fetch.
     */
    orderBy?: notificariOrderByWithRelationInput | notificariOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notificaris.
     */
    cursor?: notificariWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificaris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificaris.
     */
    skip?: number
    distinct?: NotificariScalarFieldEnum | NotificariScalarFieldEnum[]
  }

  /**
   * notificari create
   */
  export type notificariCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    /**
     * The data needed to create a notificari.
     */
    data: XOR<notificariCreateInput, notificariUncheckedCreateInput>
  }

  /**
   * notificari createMany
   */
  export type notificariCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notificaris.
     */
    data: notificariCreateManyInput | notificariCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notificari createManyAndReturn
   */
  export type notificariCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * The data used to create many notificaris.
     */
    data: notificariCreateManyInput | notificariCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notificari update
   */
  export type notificariUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    /**
     * The data needed to update a notificari.
     */
    data: XOR<notificariUpdateInput, notificariUncheckedUpdateInput>
    /**
     * Choose, which notificari to update.
     */
    where: notificariWhereUniqueInput
  }

  /**
   * notificari updateMany
   */
  export type notificariUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notificaris.
     */
    data: XOR<notificariUpdateManyMutationInput, notificariUncheckedUpdateManyInput>
    /**
     * Filter which notificaris to update
     */
    where?: notificariWhereInput
    /**
     * Limit how many notificaris to update.
     */
    limit?: number
  }

  /**
   * notificari updateManyAndReturn
   */
  export type notificariUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * The data used to update notificaris.
     */
    data: XOR<notificariUpdateManyMutationInput, notificariUncheckedUpdateManyInput>
    /**
     * Filter which notificaris to update
     */
    where?: notificariWhereInput
    /**
     * Limit how many notificaris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notificari upsert
   */
  export type notificariUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    /**
     * The filter to search for the notificari to update in case it exists.
     */
    where: notificariWhereUniqueInput
    /**
     * In case the notificari found by the `where` argument doesn't exist, create a new notificari with this data.
     */
    create: XOR<notificariCreateInput, notificariUncheckedCreateInput>
    /**
     * In case the notificari was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificariUpdateInput, notificariUncheckedUpdateInput>
  }

  /**
   * notificari delete
   */
  export type notificariDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    /**
     * Filter which notificari to delete.
     */
    where: notificariWhereUniqueInput
  }

  /**
   * notificari deleteMany
   */
  export type notificariDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notificaris to delete
     */
    where?: notificariWhereInput
    /**
     * Limit how many notificaris to delete.
     */
    limit?: number
  }

  /**
   * notificari.documente
   */
  export type notificari$documenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    where?: documenteWhereInput
  }

  /**
   * notificari without action
   */
  export type notificariDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
  }


  /**
   * Model tipuri_registru
   */

  export type AggregateTipuri_registru = {
    _count: Tipuri_registruCountAggregateOutputType | null
    _min: Tipuri_registruMinAggregateOutputType | null
    _max: Tipuri_registruMaxAggregateOutputType | null
  }

  export type Tipuri_registruMinAggregateOutputType = {
    id: string | null
    nume: string | null
  }

  export type Tipuri_registruMaxAggregateOutputType = {
    id: string | null
    nume: string | null
  }

  export type Tipuri_registruCountAggregateOutputType = {
    id: number
    nume: number
    _all: number
  }


  export type Tipuri_registruMinAggregateInputType = {
    id?: true
    nume?: true
  }

  export type Tipuri_registruMaxAggregateInputType = {
    id?: true
    nume?: true
  }

  export type Tipuri_registruCountAggregateInputType = {
    id?: true
    nume?: true
    _all?: true
  }

  export type Tipuri_registruAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipuri_registru to aggregate.
     */
    where?: tipuri_registruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipuri_registrus to fetch.
     */
    orderBy?: tipuri_registruOrderByWithRelationInput | tipuri_registruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipuri_registruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipuri_registrus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipuri_registrus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipuri_registrus
    **/
    _count?: true | Tipuri_registruCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipuri_registruMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipuri_registruMaxAggregateInputType
  }

  export type GetTipuri_registruAggregateType<T extends Tipuri_registruAggregateArgs> = {
        [P in keyof T & keyof AggregateTipuri_registru]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipuri_registru[P]>
      : GetScalarType<T[P], AggregateTipuri_registru[P]>
  }




  export type tipuri_registruGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipuri_registruWhereInput
    orderBy?: tipuri_registruOrderByWithAggregationInput | tipuri_registruOrderByWithAggregationInput[]
    by: Tipuri_registruScalarFieldEnum[] | Tipuri_registruScalarFieldEnum
    having?: tipuri_registruScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipuri_registruCountAggregateInputType | true
    _min?: Tipuri_registruMinAggregateInputType
    _max?: Tipuri_registruMaxAggregateInputType
  }

  export type Tipuri_registruGroupByOutputType = {
    id: string
    nume: string
    _count: Tipuri_registruCountAggregateOutputType | null
    _min: Tipuri_registruMinAggregateOutputType | null
    _max: Tipuri_registruMaxAggregateOutputType | null
  }

  type GetTipuri_registruGroupByPayload<T extends tipuri_registruGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipuri_registruGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipuri_registruGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipuri_registruGroupByOutputType[P]>
            : GetScalarType<T[P], Tipuri_registruGroupByOutputType[P]>
        }
      >
    >


  export type tipuri_registruSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    registre?: boolean | tipuri_registru$registreArgs<ExtArgs>
    _count?: boolean | Tipuri_registruCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipuri_registru"]>

  export type tipuri_registruSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
  }, ExtArgs["result"]["tipuri_registru"]>

  export type tipuri_registruSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
  }, ExtArgs["result"]["tipuri_registru"]>

  export type tipuri_registruSelectScalar = {
    id?: boolean
    nume?: boolean
  }

  export type tipuri_registruOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nume", ExtArgs["result"]["tipuri_registru"]>
  export type tipuri_registruInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registre?: boolean | tipuri_registru$registreArgs<ExtArgs>
    _count?: boolean | Tipuri_registruCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipuri_registruIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipuri_registruIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipuri_registruPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipuri_registru"
    objects: {
      registre: Prisma.$registrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nume: string
    }, ExtArgs["result"]["tipuri_registru"]>
    composites: {}
  }

  type tipuri_registruGetPayload<S extends boolean | null | undefined | tipuri_registruDefaultArgs> = $Result.GetResult<Prisma.$tipuri_registruPayload, S>

  type tipuri_registruCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipuri_registruFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipuri_registruCountAggregateInputType | true
    }

  export interface tipuri_registruDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipuri_registru'], meta: { name: 'tipuri_registru' } }
    /**
     * Find zero or one Tipuri_registru that matches the filter.
     * @param {tipuri_registruFindUniqueArgs} args - Arguments to find a Tipuri_registru
     * @example
     * // Get one Tipuri_registru
     * const tipuri_registru = await prisma.tipuri_registru.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipuri_registruFindUniqueArgs>(args: SelectSubset<T, tipuri_registruFindUniqueArgs<ExtArgs>>): Prisma__tipuri_registruClient<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipuri_registru that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipuri_registruFindUniqueOrThrowArgs} args - Arguments to find a Tipuri_registru
     * @example
     * // Get one Tipuri_registru
     * const tipuri_registru = await prisma.tipuri_registru.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipuri_registruFindUniqueOrThrowArgs>(args: SelectSubset<T, tipuri_registruFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipuri_registruClient<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipuri_registru that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_registruFindFirstArgs} args - Arguments to find a Tipuri_registru
     * @example
     * // Get one Tipuri_registru
     * const tipuri_registru = await prisma.tipuri_registru.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipuri_registruFindFirstArgs>(args?: SelectSubset<T, tipuri_registruFindFirstArgs<ExtArgs>>): Prisma__tipuri_registruClient<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipuri_registru that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_registruFindFirstOrThrowArgs} args - Arguments to find a Tipuri_registru
     * @example
     * // Get one Tipuri_registru
     * const tipuri_registru = await prisma.tipuri_registru.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipuri_registruFindFirstOrThrowArgs>(args?: SelectSubset<T, tipuri_registruFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipuri_registruClient<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipuri_registrus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_registruFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipuri_registrus
     * const tipuri_registrus = await prisma.tipuri_registru.findMany()
     * 
     * // Get first 10 Tipuri_registrus
     * const tipuri_registrus = await prisma.tipuri_registru.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipuri_registruWithIdOnly = await prisma.tipuri_registru.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tipuri_registruFindManyArgs>(args?: SelectSubset<T, tipuri_registruFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipuri_registru.
     * @param {tipuri_registruCreateArgs} args - Arguments to create a Tipuri_registru.
     * @example
     * // Create one Tipuri_registru
     * const Tipuri_registru = await prisma.tipuri_registru.create({
     *   data: {
     *     // ... data to create a Tipuri_registru
     *   }
     * })
     * 
     */
    create<T extends tipuri_registruCreateArgs>(args: SelectSubset<T, tipuri_registruCreateArgs<ExtArgs>>): Prisma__tipuri_registruClient<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipuri_registrus.
     * @param {tipuri_registruCreateManyArgs} args - Arguments to create many Tipuri_registrus.
     * @example
     * // Create many Tipuri_registrus
     * const tipuri_registru = await prisma.tipuri_registru.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipuri_registruCreateManyArgs>(args?: SelectSubset<T, tipuri_registruCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipuri_registrus and returns the data saved in the database.
     * @param {tipuri_registruCreateManyAndReturnArgs} args - Arguments to create many Tipuri_registrus.
     * @example
     * // Create many Tipuri_registrus
     * const tipuri_registru = await prisma.tipuri_registru.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipuri_registrus and only return the `id`
     * const tipuri_registruWithIdOnly = await prisma.tipuri_registru.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipuri_registruCreateManyAndReturnArgs>(args?: SelectSubset<T, tipuri_registruCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipuri_registru.
     * @param {tipuri_registruDeleteArgs} args - Arguments to delete one Tipuri_registru.
     * @example
     * // Delete one Tipuri_registru
     * const Tipuri_registru = await prisma.tipuri_registru.delete({
     *   where: {
     *     // ... filter to delete one Tipuri_registru
     *   }
     * })
     * 
     */
    delete<T extends tipuri_registruDeleteArgs>(args: SelectSubset<T, tipuri_registruDeleteArgs<ExtArgs>>): Prisma__tipuri_registruClient<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipuri_registru.
     * @param {tipuri_registruUpdateArgs} args - Arguments to update one Tipuri_registru.
     * @example
     * // Update one Tipuri_registru
     * const tipuri_registru = await prisma.tipuri_registru.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipuri_registruUpdateArgs>(args: SelectSubset<T, tipuri_registruUpdateArgs<ExtArgs>>): Prisma__tipuri_registruClient<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipuri_registrus.
     * @param {tipuri_registruDeleteManyArgs} args - Arguments to filter Tipuri_registrus to delete.
     * @example
     * // Delete a few Tipuri_registrus
     * const { count } = await prisma.tipuri_registru.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipuri_registruDeleteManyArgs>(args?: SelectSubset<T, tipuri_registruDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipuri_registrus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_registruUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipuri_registrus
     * const tipuri_registru = await prisma.tipuri_registru.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipuri_registruUpdateManyArgs>(args: SelectSubset<T, tipuri_registruUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipuri_registrus and returns the data updated in the database.
     * @param {tipuri_registruUpdateManyAndReturnArgs} args - Arguments to update many Tipuri_registrus.
     * @example
     * // Update many Tipuri_registrus
     * const tipuri_registru = await prisma.tipuri_registru.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipuri_registrus and only return the `id`
     * const tipuri_registruWithIdOnly = await prisma.tipuri_registru.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tipuri_registruUpdateManyAndReturnArgs>(args: SelectSubset<T, tipuri_registruUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipuri_registru.
     * @param {tipuri_registruUpsertArgs} args - Arguments to update or create a Tipuri_registru.
     * @example
     * // Update or create a Tipuri_registru
     * const tipuri_registru = await prisma.tipuri_registru.upsert({
     *   create: {
     *     // ... data to create a Tipuri_registru
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipuri_registru we want to update
     *   }
     * })
     */
    upsert<T extends tipuri_registruUpsertArgs>(args: SelectSubset<T, tipuri_registruUpsertArgs<ExtArgs>>): Prisma__tipuri_registruClient<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipuri_registrus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_registruCountArgs} args - Arguments to filter Tipuri_registrus to count.
     * @example
     * // Count the number of Tipuri_registrus
     * const count = await prisma.tipuri_registru.count({
     *   where: {
     *     // ... the filter for the Tipuri_registrus we want to count
     *   }
     * })
    **/
    count<T extends tipuri_registruCountArgs>(
      args?: Subset<T, tipuri_registruCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipuri_registruCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipuri_registru.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipuri_registruAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipuri_registruAggregateArgs>(args: Subset<T, Tipuri_registruAggregateArgs>): Prisma.PrismaPromise<GetTipuri_registruAggregateType<T>>

    /**
     * Group by Tipuri_registru.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_registruGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipuri_registruGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipuri_registruGroupByArgs['orderBy'] }
        : { orderBy?: tipuri_registruGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipuri_registruGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipuri_registruGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipuri_registru model
   */
  readonly fields: tipuri_registruFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipuri_registru.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipuri_registruClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registre<T extends tipuri_registru$registreArgs<ExtArgs> = {}>(args?: Subset<T, tipuri_registru$registreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipuri_registru model
   */
  interface tipuri_registruFieldRefs {
    readonly id: FieldRef<"tipuri_registru", 'String'>
    readonly nume: FieldRef<"tipuri_registru", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipuri_registru findUnique
   */
  export type tipuri_registruFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_registruInclude<ExtArgs> | null
    /**
     * Filter, which tipuri_registru to fetch.
     */
    where: tipuri_registruWhereUniqueInput
  }

  /**
   * tipuri_registru findUniqueOrThrow
   */
  export type tipuri_registruFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_registruInclude<ExtArgs> | null
    /**
     * Filter, which tipuri_registru to fetch.
     */
    where: tipuri_registruWhereUniqueInput
  }

  /**
   * tipuri_registru findFirst
   */
  export type tipuri_registruFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_registruInclude<ExtArgs> | null
    /**
     * Filter, which tipuri_registru to fetch.
     */
    where?: tipuri_registruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipuri_registrus to fetch.
     */
    orderBy?: tipuri_registruOrderByWithRelationInput | tipuri_registruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipuri_registrus.
     */
    cursor?: tipuri_registruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipuri_registrus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipuri_registrus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipuri_registrus.
     */
    distinct?: Tipuri_registruScalarFieldEnum | Tipuri_registruScalarFieldEnum[]
  }

  /**
   * tipuri_registru findFirstOrThrow
   */
  export type tipuri_registruFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_registruInclude<ExtArgs> | null
    /**
     * Filter, which tipuri_registru to fetch.
     */
    where?: tipuri_registruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipuri_registrus to fetch.
     */
    orderBy?: tipuri_registruOrderByWithRelationInput | tipuri_registruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipuri_registrus.
     */
    cursor?: tipuri_registruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipuri_registrus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipuri_registrus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipuri_registrus.
     */
    distinct?: Tipuri_registruScalarFieldEnum | Tipuri_registruScalarFieldEnum[]
  }

  /**
   * tipuri_registru findMany
   */
  export type tipuri_registruFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_registruInclude<ExtArgs> | null
    /**
     * Filter, which tipuri_registrus to fetch.
     */
    where?: tipuri_registruWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipuri_registrus to fetch.
     */
    orderBy?: tipuri_registruOrderByWithRelationInput | tipuri_registruOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipuri_registrus.
     */
    cursor?: tipuri_registruWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipuri_registrus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipuri_registrus.
     */
    skip?: number
    distinct?: Tipuri_registruScalarFieldEnum | Tipuri_registruScalarFieldEnum[]
  }

  /**
   * tipuri_registru create
   */
  export type tipuri_registruCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_registruInclude<ExtArgs> | null
    /**
     * The data needed to create a tipuri_registru.
     */
    data: XOR<tipuri_registruCreateInput, tipuri_registruUncheckedCreateInput>
  }

  /**
   * tipuri_registru createMany
   */
  export type tipuri_registruCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipuri_registrus.
     */
    data: tipuri_registruCreateManyInput | tipuri_registruCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipuri_registru createManyAndReturn
   */
  export type tipuri_registruCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * The data used to create many tipuri_registrus.
     */
    data: tipuri_registruCreateManyInput | tipuri_registruCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipuri_registru update
   */
  export type tipuri_registruUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_registruInclude<ExtArgs> | null
    /**
     * The data needed to update a tipuri_registru.
     */
    data: XOR<tipuri_registruUpdateInput, tipuri_registruUncheckedUpdateInput>
    /**
     * Choose, which tipuri_registru to update.
     */
    where: tipuri_registruWhereUniqueInput
  }

  /**
   * tipuri_registru updateMany
   */
  export type tipuri_registruUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipuri_registrus.
     */
    data: XOR<tipuri_registruUpdateManyMutationInput, tipuri_registruUncheckedUpdateManyInput>
    /**
     * Filter which tipuri_registrus to update
     */
    where?: tipuri_registruWhereInput
    /**
     * Limit how many tipuri_registrus to update.
     */
    limit?: number
  }

  /**
   * tipuri_registru updateManyAndReturn
   */
  export type tipuri_registruUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * The data used to update tipuri_registrus.
     */
    data: XOR<tipuri_registruUpdateManyMutationInput, tipuri_registruUncheckedUpdateManyInput>
    /**
     * Filter which tipuri_registrus to update
     */
    where?: tipuri_registruWhereInput
    /**
     * Limit how many tipuri_registrus to update.
     */
    limit?: number
  }

  /**
   * tipuri_registru upsert
   */
  export type tipuri_registruUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_registruInclude<ExtArgs> | null
    /**
     * The filter to search for the tipuri_registru to update in case it exists.
     */
    where: tipuri_registruWhereUniqueInput
    /**
     * In case the tipuri_registru found by the `where` argument doesn't exist, create a new tipuri_registru with this data.
     */
    create: XOR<tipuri_registruCreateInput, tipuri_registruUncheckedCreateInput>
    /**
     * In case the tipuri_registru was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipuri_registruUpdateInput, tipuri_registruUncheckedUpdateInput>
  }

  /**
   * tipuri_registru delete
   */
  export type tipuri_registruDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_registruInclude<ExtArgs> | null
    /**
     * Filter which tipuri_registru to delete.
     */
    where: tipuri_registruWhereUniqueInput
  }

  /**
   * tipuri_registru deleteMany
   */
  export type tipuri_registruDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipuri_registrus to delete
     */
    where?: tipuri_registruWhereInput
    /**
     * Limit how many tipuri_registrus to delete.
     */
    limit?: number
  }

  /**
   * tipuri_registru.registre
   */
  export type tipuri_registru$registreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    where?: registreWhereInput
    orderBy?: registreOrderByWithRelationInput | registreOrderByWithRelationInput[]
    cursor?: registreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistreScalarFieldEnum | RegistreScalarFieldEnum[]
  }

  /**
   * tipuri_registru without action
   */
  export type tipuri_registruDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_registru
     */
    select?: tipuri_registruSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_registru
     */
    omit?: tipuri_registruOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_registruInclude<ExtArgs> | null
  }


  /**
   * Model registre
   */

  export type AggregateRegistre = {
    _count: RegistreCountAggregateOutputType | null
    _avg: RegistreAvgAggregateOutputType | null
    _sum: RegistreSumAggregateOutputType | null
    _min: RegistreMinAggregateOutputType | null
    _max: RegistreMaxAggregateOutputType | null
  }

  export type RegistreAvgAggregateOutputType = {
    min_val: number | null
    max_val: number | null
    an: number | null
  }

  export type RegistreSumAggregateOutputType = {
    min_val: number | null
    max_val: number | null
    an: number | null
  }

  export type RegistreMinAggregateOutputType = {
    id: string | null
    nume: string | null
    descriere: string | null
    departament_id: string | null
    min_val: number | null
    max_val: number | null
    an: number | null
    tip_registru_id: string | null
  }

  export type RegistreMaxAggregateOutputType = {
    id: string | null
    nume: string | null
    descriere: string | null
    departament_id: string | null
    min_val: number | null
    max_val: number | null
    an: number | null
    tip_registru_id: string | null
  }

  export type RegistreCountAggregateOutputType = {
    id: number
    nume: number
    descriere: number
    departament_id: number
    min_val: number
    max_val: number
    an: number
    tip_registru_id: number
    _all: number
  }


  export type RegistreAvgAggregateInputType = {
    min_val?: true
    max_val?: true
    an?: true
  }

  export type RegistreSumAggregateInputType = {
    min_val?: true
    max_val?: true
    an?: true
  }

  export type RegistreMinAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
    departament_id?: true
    min_val?: true
    max_val?: true
    an?: true
    tip_registru_id?: true
  }

  export type RegistreMaxAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
    departament_id?: true
    min_val?: true
    max_val?: true
    an?: true
    tip_registru_id?: true
  }

  export type RegistreCountAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
    departament_id?: true
    min_val?: true
    max_val?: true
    an?: true
    tip_registru_id?: true
    _all?: true
  }

  export type RegistreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registre to aggregate.
     */
    where?: registreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registres to fetch.
     */
    orderBy?: registreOrderByWithRelationInput | registreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: registreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned registres
    **/
    _count?: true | RegistreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistreMaxAggregateInputType
  }

  export type GetRegistreAggregateType<T extends RegistreAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistre[P]>
      : GetScalarType<T[P], AggregateRegistre[P]>
  }




  export type registreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: registreWhereInput
    orderBy?: registreOrderByWithAggregationInput | registreOrderByWithAggregationInput[]
    by: RegistreScalarFieldEnum[] | RegistreScalarFieldEnum
    having?: registreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistreCountAggregateInputType | true
    _avg?: RegistreAvgAggregateInputType
    _sum?: RegistreSumAggregateInputType
    _min?: RegistreMinAggregateInputType
    _max?: RegistreMaxAggregateInputType
  }

  export type RegistreGroupByOutputType = {
    id: string
    nume: string
    descriere: string
    departament_id: string
    min_val: number | null
    max_val: number | null
    an: number
    tip_registru_id: string
    _count: RegistreCountAggregateOutputType | null
    _avg: RegistreAvgAggregateOutputType | null
    _sum: RegistreSumAggregateOutputType | null
    _min: RegistreMinAggregateOutputType | null
    _max: RegistreMaxAggregateOutputType | null
  }

  type GetRegistreGroupByPayload<T extends registreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistreGroupByOutputType[P]>
            : GetScalarType<T[P], RegistreGroupByOutputType[P]>
        }
      >
    >


  export type registreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
    departament_id?: boolean
    min_val?: boolean
    max_val?: boolean
    an?: boolean
    tip_registru_id?: boolean
    documente?: boolean | registre$documenteArgs<ExtArgs>
    departamente?: boolean | departamenteDefaultArgs<ExtArgs>
    tip_registru?: boolean | tipuri_registruDefaultArgs<ExtArgs>
    _count?: boolean | RegistreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registre"]>

  export type registreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
    departament_id?: boolean
    min_val?: boolean
    max_val?: boolean
    an?: boolean
    tip_registru_id?: boolean
    departamente?: boolean | departamenteDefaultArgs<ExtArgs>
    tip_registru?: boolean | tipuri_registruDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registre"]>

  export type registreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
    departament_id?: boolean
    min_val?: boolean
    max_val?: boolean
    an?: boolean
    tip_registru_id?: boolean
    departamente?: boolean | departamenteDefaultArgs<ExtArgs>
    tip_registru?: boolean | tipuri_registruDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registre"]>

  export type registreSelectScalar = {
    id?: boolean
    nume?: boolean
    descriere?: boolean
    departament_id?: boolean
    min_val?: boolean
    max_val?: boolean
    an?: boolean
    tip_registru_id?: boolean
  }

  export type registreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nume" | "descriere" | "departament_id" | "min_val" | "max_val" | "an" | "tip_registru_id", ExtArgs["result"]["registre"]>
  export type registreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documente?: boolean | registre$documenteArgs<ExtArgs>
    departamente?: boolean | departamenteDefaultArgs<ExtArgs>
    tip_registru?: boolean | tipuri_registruDefaultArgs<ExtArgs>
    _count?: boolean | RegistreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type registreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamente?: boolean | departamenteDefaultArgs<ExtArgs>
    tip_registru?: boolean | tipuri_registruDefaultArgs<ExtArgs>
  }
  export type registreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamente?: boolean | departamenteDefaultArgs<ExtArgs>
    tip_registru?: boolean | tipuri_registruDefaultArgs<ExtArgs>
  }

  export type $registrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "registre"
    objects: {
      documente: Prisma.$documentePayload<ExtArgs>[]
      departamente: Prisma.$departamentePayload<ExtArgs>
      tip_registru: Prisma.$tipuri_registruPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nume: string
      descriere: string
      departament_id: string
      min_val: number | null
      max_val: number | null
      an: number
      tip_registru_id: string
    }, ExtArgs["result"]["registre"]>
    composites: {}
  }

  type registreGetPayload<S extends boolean | null | undefined | registreDefaultArgs> = $Result.GetResult<Prisma.$registrePayload, S>

  type registreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<registreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistreCountAggregateInputType | true
    }

  export interface registreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['registre'], meta: { name: 'registre' } }
    /**
     * Find zero or one Registre that matches the filter.
     * @param {registreFindUniqueArgs} args - Arguments to find a Registre
     * @example
     * // Get one Registre
     * const registre = await prisma.registre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends registreFindUniqueArgs>(args: SelectSubset<T, registreFindUniqueArgs<ExtArgs>>): Prisma__registreClient<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {registreFindUniqueOrThrowArgs} args - Arguments to find a Registre
     * @example
     * // Get one Registre
     * const registre = await prisma.registre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends registreFindUniqueOrThrowArgs>(args: SelectSubset<T, registreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__registreClient<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registreFindFirstArgs} args - Arguments to find a Registre
     * @example
     * // Get one Registre
     * const registre = await prisma.registre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends registreFindFirstArgs>(args?: SelectSubset<T, registreFindFirstArgs<ExtArgs>>): Prisma__registreClient<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registreFindFirstOrThrowArgs} args - Arguments to find a Registre
     * @example
     * // Get one Registre
     * const registre = await prisma.registre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends registreFindFirstOrThrowArgs>(args?: SelectSubset<T, registreFindFirstOrThrowArgs<ExtArgs>>): Prisma__registreClient<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registres
     * const registres = await prisma.registre.findMany()
     * 
     * // Get first 10 Registres
     * const registres = await prisma.registre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registreWithIdOnly = await prisma.registre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends registreFindManyArgs>(args?: SelectSubset<T, registreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registre.
     * @param {registreCreateArgs} args - Arguments to create a Registre.
     * @example
     * // Create one Registre
     * const Registre = await prisma.registre.create({
     *   data: {
     *     // ... data to create a Registre
     *   }
     * })
     * 
     */
    create<T extends registreCreateArgs>(args: SelectSubset<T, registreCreateArgs<ExtArgs>>): Prisma__registreClient<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registres.
     * @param {registreCreateManyArgs} args - Arguments to create many Registres.
     * @example
     * // Create many Registres
     * const registre = await prisma.registre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends registreCreateManyArgs>(args?: SelectSubset<T, registreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registres and returns the data saved in the database.
     * @param {registreCreateManyAndReturnArgs} args - Arguments to create many Registres.
     * @example
     * // Create many Registres
     * const registre = await prisma.registre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registres and only return the `id`
     * const registreWithIdOnly = await prisma.registre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends registreCreateManyAndReturnArgs>(args?: SelectSubset<T, registreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registre.
     * @param {registreDeleteArgs} args - Arguments to delete one Registre.
     * @example
     * // Delete one Registre
     * const Registre = await prisma.registre.delete({
     *   where: {
     *     // ... filter to delete one Registre
     *   }
     * })
     * 
     */
    delete<T extends registreDeleteArgs>(args: SelectSubset<T, registreDeleteArgs<ExtArgs>>): Prisma__registreClient<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registre.
     * @param {registreUpdateArgs} args - Arguments to update one Registre.
     * @example
     * // Update one Registre
     * const registre = await prisma.registre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends registreUpdateArgs>(args: SelectSubset<T, registreUpdateArgs<ExtArgs>>): Prisma__registreClient<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registres.
     * @param {registreDeleteManyArgs} args - Arguments to filter Registres to delete.
     * @example
     * // Delete a few Registres
     * const { count } = await prisma.registre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends registreDeleteManyArgs>(args?: SelectSubset<T, registreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registres
     * const registre = await prisma.registre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends registreUpdateManyArgs>(args: SelectSubset<T, registreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registres and returns the data updated in the database.
     * @param {registreUpdateManyAndReturnArgs} args - Arguments to update many Registres.
     * @example
     * // Update many Registres
     * const registre = await prisma.registre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registres and only return the `id`
     * const registreWithIdOnly = await prisma.registre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends registreUpdateManyAndReturnArgs>(args: SelectSubset<T, registreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registre.
     * @param {registreUpsertArgs} args - Arguments to update or create a Registre.
     * @example
     * // Update or create a Registre
     * const registre = await prisma.registre.upsert({
     *   create: {
     *     // ... data to create a Registre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registre we want to update
     *   }
     * })
     */
    upsert<T extends registreUpsertArgs>(args: SelectSubset<T, registreUpsertArgs<ExtArgs>>): Prisma__registreClient<$Result.GetResult<Prisma.$registrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registreCountArgs} args - Arguments to filter Registres to count.
     * @example
     * // Count the number of Registres
     * const count = await prisma.registre.count({
     *   where: {
     *     // ... the filter for the Registres we want to count
     *   }
     * })
    **/
    count<T extends registreCountArgs>(
      args?: Subset<T, registreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistreAggregateArgs>(args: Subset<T, RegistreAggregateArgs>): Prisma.PrismaPromise<GetRegistreAggregateType<T>>

    /**
     * Group by Registre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {registreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends registreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: registreGroupByArgs['orderBy'] }
        : { orderBy?: registreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, registreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the registre model
   */
  readonly fields: registreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for registre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__registreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documente<T extends registre$documenteArgs<ExtArgs> = {}>(args?: Subset<T, registre$documenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departamente<T extends departamenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, departamenteDefaultArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tip_registru<T extends tipuri_registruDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipuri_registruDefaultArgs<ExtArgs>>): Prisma__tipuri_registruClient<$Result.GetResult<Prisma.$tipuri_registruPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the registre model
   */
  interface registreFieldRefs {
    readonly id: FieldRef<"registre", 'String'>
    readonly nume: FieldRef<"registre", 'String'>
    readonly descriere: FieldRef<"registre", 'String'>
    readonly departament_id: FieldRef<"registre", 'String'>
    readonly min_val: FieldRef<"registre", 'Int'>
    readonly max_val: FieldRef<"registre", 'Int'>
    readonly an: FieldRef<"registre", 'Int'>
    readonly tip_registru_id: FieldRef<"registre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * registre findUnique
   */
  export type registreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    /**
     * Filter, which registre to fetch.
     */
    where: registreWhereUniqueInput
  }

  /**
   * registre findUniqueOrThrow
   */
  export type registreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    /**
     * Filter, which registre to fetch.
     */
    where: registreWhereUniqueInput
  }

  /**
   * registre findFirst
   */
  export type registreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    /**
     * Filter, which registre to fetch.
     */
    where?: registreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registres to fetch.
     */
    orderBy?: registreOrderByWithRelationInput | registreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registres.
     */
    cursor?: registreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registres.
     */
    distinct?: RegistreScalarFieldEnum | RegistreScalarFieldEnum[]
  }

  /**
   * registre findFirstOrThrow
   */
  export type registreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    /**
     * Filter, which registre to fetch.
     */
    where?: registreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registres to fetch.
     */
    orderBy?: registreOrderByWithRelationInput | registreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for registres.
     */
    cursor?: registreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of registres.
     */
    distinct?: RegistreScalarFieldEnum | RegistreScalarFieldEnum[]
  }

  /**
   * registre findMany
   */
  export type registreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    /**
     * Filter, which registres to fetch.
     */
    where?: registreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of registres to fetch.
     */
    orderBy?: registreOrderByWithRelationInput | registreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing registres.
     */
    cursor?: registreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` registres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` registres.
     */
    skip?: number
    distinct?: RegistreScalarFieldEnum | RegistreScalarFieldEnum[]
  }

  /**
   * registre create
   */
  export type registreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    /**
     * The data needed to create a registre.
     */
    data: XOR<registreCreateInput, registreUncheckedCreateInput>
  }

  /**
   * registre createMany
   */
  export type registreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many registres.
     */
    data: registreCreateManyInput | registreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * registre createManyAndReturn
   */
  export type registreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * The data used to create many registres.
     */
    data: registreCreateManyInput | registreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * registre update
   */
  export type registreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    /**
     * The data needed to update a registre.
     */
    data: XOR<registreUpdateInput, registreUncheckedUpdateInput>
    /**
     * Choose, which registre to update.
     */
    where: registreWhereUniqueInput
  }

  /**
   * registre updateMany
   */
  export type registreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update registres.
     */
    data: XOR<registreUpdateManyMutationInput, registreUncheckedUpdateManyInput>
    /**
     * Filter which registres to update
     */
    where?: registreWhereInput
    /**
     * Limit how many registres to update.
     */
    limit?: number
  }

  /**
   * registre updateManyAndReturn
   */
  export type registreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * The data used to update registres.
     */
    data: XOR<registreUpdateManyMutationInput, registreUncheckedUpdateManyInput>
    /**
     * Filter which registres to update
     */
    where?: registreWhereInput
    /**
     * Limit how many registres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * registre upsert
   */
  export type registreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    /**
     * The filter to search for the registre to update in case it exists.
     */
    where: registreWhereUniqueInput
    /**
     * In case the registre found by the `where` argument doesn't exist, create a new registre with this data.
     */
    create: XOR<registreCreateInput, registreUncheckedCreateInput>
    /**
     * In case the registre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<registreUpdateInput, registreUncheckedUpdateInput>
  }

  /**
   * registre delete
   */
  export type registreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
    /**
     * Filter which registre to delete.
     */
    where: registreWhereUniqueInput
  }

  /**
   * registre deleteMany
   */
  export type registreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which registres to delete
     */
    where?: registreWhereInput
    /**
     * Limit how many registres to delete.
     */
    limit?: number
  }

  /**
   * registre.documente
   */
  export type registre$documenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    where?: documenteWhereInput
    orderBy?: documenteOrderByWithRelationInput | documenteOrderByWithRelationInput[]
    cursor?: documenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumenteScalarFieldEnum | DocumenteScalarFieldEnum[]
  }

  /**
   * registre without action
   */
  export type registreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the registre
     */
    select?: registreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the registre
     */
    omit?: registreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: registreInclude<ExtArgs> | null
  }


  /**
   * Model roluri
   */

  export type AggregateRoluri = {
    _count: RoluriCountAggregateOutputType | null
    _min: RoluriMinAggregateOutputType | null
    _max: RoluriMaxAggregateOutputType | null
  }

  export type RoluriMinAggregateOutputType = {
    id: string | null
    nume: string | null
    descriere: string | null
    culoare: string | null
  }

  export type RoluriMaxAggregateOutputType = {
    id: string | null
    nume: string | null
    descriere: string | null
    culoare: string | null
  }

  export type RoluriCountAggregateOutputType = {
    id: number
    nume: number
    descriere: number
    culoare: number
    _all: number
  }


  export type RoluriMinAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
    culoare?: true
  }

  export type RoluriMaxAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
    culoare?: true
  }

  export type RoluriCountAggregateInputType = {
    id?: true
    nume?: true
    descriere?: true
    culoare?: true
    _all?: true
  }

  export type RoluriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roluri to aggregate.
     */
    where?: roluriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roluris to fetch.
     */
    orderBy?: roluriOrderByWithRelationInput | roluriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roluriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roluris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roluris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roluris
    **/
    _count?: true | RoluriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoluriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoluriMaxAggregateInputType
  }

  export type GetRoluriAggregateType<T extends RoluriAggregateArgs> = {
        [P in keyof T & keyof AggregateRoluri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoluri[P]>
      : GetScalarType<T[P], AggregateRoluri[P]>
  }




  export type roluriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roluriWhereInput
    orderBy?: roluriOrderByWithAggregationInput | roluriOrderByWithAggregationInput[]
    by: RoluriScalarFieldEnum[] | RoluriScalarFieldEnum
    having?: roluriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoluriCountAggregateInputType | true
    _min?: RoluriMinAggregateInputType
    _max?: RoluriMaxAggregateInputType
  }

  export type RoluriGroupByOutputType = {
    id: string
    nume: string
    descriere: string
    culoare: string | null
    _count: RoluriCountAggregateOutputType | null
    _min: RoluriMinAggregateOutputType | null
    _max: RoluriMaxAggregateOutputType | null
  }

  type GetRoluriGroupByPayload<T extends roluriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoluriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoluriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoluriGroupByOutputType[P]>
            : GetScalarType<T[P], RoluriGroupByOutputType[P]>
        }
      >
    >


  export type roluriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
    culoare?: boolean
    utilizatori?: boolean | roluri$utilizatoriArgs<ExtArgs>
    _count?: boolean | RoluriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roluri"]>

  export type roluriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
    culoare?: boolean
  }, ExtArgs["result"]["roluri"]>

  export type roluriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    descriere?: boolean
    culoare?: boolean
  }, ExtArgs["result"]["roluri"]>

  export type roluriSelectScalar = {
    id?: boolean
    nume?: boolean
    descriere?: boolean
    culoare?: boolean
  }

  export type roluriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nume" | "descriere" | "culoare", ExtArgs["result"]["roluri"]>
  export type roluriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilizatori?: boolean | roluri$utilizatoriArgs<ExtArgs>
    _count?: boolean | RoluriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roluriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roluriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $roluriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roluri"
    objects: {
      utilizatori: Prisma.$utilizatoriPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nume: string
      descriere: string
      culoare: string | null
    }, ExtArgs["result"]["roluri"]>
    composites: {}
  }

  type roluriGetPayload<S extends boolean | null | undefined | roluriDefaultArgs> = $Result.GetResult<Prisma.$roluriPayload, S>

  type roluriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roluriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoluriCountAggregateInputType | true
    }

  export interface roluriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roluri'], meta: { name: 'roluri' } }
    /**
     * Find zero or one Roluri that matches the filter.
     * @param {roluriFindUniqueArgs} args - Arguments to find a Roluri
     * @example
     * // Get one Roluri
     * const roluri = await prisma.roluri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roluriFindUniqueArgs>(args: SelectSubset<T, roluriFindUniqueArgs<ExtArgs>>): Prisma__roluriClient<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roluri that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roluriFindUniqueOrThrowArgs} args - Arguments to find a Roluri
     * @example
     * // Get one Roluri
     * const roluri = await prisma.roluri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roluriFindUniqueOrThrowArgs>(args: SelectSubset<T, roluriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roluriClient<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roluri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roluriFindFirstArgs} args - Arguments to find a Roluri
     * @example
     * // Get one Roluri
     * const roluri = await prisma.roluri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roluriFindFirstArgs>(args?: SelectSubset<T, roluriFindFirstArgs<ExtArgs>>): Prisma__roluriClient<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roluri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roluriFindFirstOrThrowArgs} args - Arguments to find a Roluri
     * @example
     * // Get one Roluri
     * const roluri = await prisma.roluri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roluriFindFirstOrThrowArgs>(args?: SelectSubset<T, roluriFindFirstOrThrowArgs<ExtArgs>>): Prisma__roluriClient<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roluris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roluriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roluris
     * const roluris = await prisma.roluri.findMany()
     * 
     * // Get first 10 Roluris
     * const roluris = await prisma.roluri.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roluriWithIdOnly = await prisma.roluri.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roluriFindManyArgs>(args?: SelectSubset<T, roluriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roluri.
     * @param {roluriCreateArgs} args - Arguments to create a Roluri.
     * @example
     * // Create one Roluri
     * const Roluri = await prisma.roluri.create({
     *   data: {
     *     // ... data to create a Roluri
     *   }
     * })
     * 
     */
    create<T extends roluriCreateArgs>(args: SelectSubset<T, roluriCreateArgs<ExtArgs>>): Prisma__roluriClient<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roluris.
     * @param {roluriCreateManyArgs} args - Arguments to create many Roluris.
     * @example
     * // Create many Roluris
     * const roluri = await prisma.roluri.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roluriCreateManyArgs>(args?: SelectSubset<T, roluriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roluris and returns the data saved in the database.
     * @param {roluriCreateManyAndReturnArgs} args - Arguments to create many Roluris.
     * @example
     * // Create many Roluris
     * const roluri = await prisma.roluri.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roluris and only return the `id`
     * const roluriWithIdOnly = await prisma.roluri.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roluriCreateManyAndReturnArgs>(args?: SelectSubset<T, roluriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roluri.
     * @param {roluriDeleteArgs} args - Arguments to delete one Roluri.
     * @example
     * // Delete one Roluri
     * const Roluri = await prisma.roluri.delete({
     *   where: {
     *     // ... filter to delete one Roluri
     *   }
     * })
     * 
     */
    delete<T extends roluriDeleteArgs>(args: SelectSubset<T, roluriDeleteArgs<ExtArgs>>): Prisma__roluriClient<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roluri.
     * @param {roluriUpdateArgs} args - Arguments to update one Roluri.
     * @example
     * // Update one Roluri
     * const roluri = await prisma.roluri.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roluriUpdateArgs>(args: SelectSubset<T, roluriUpdateArgs<ExtArgs>>): Prisma__roluriClient<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roluris.
     * @param {roluriDeleteManyArgs} args - Arguments to filter Roluris to delete.
     * @example
     * // Delete a few Roluris
     * const { count } = await prisma.roluri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roluriDeleteManyArgs>(args?: SelectSubset<T, roluriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roluris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roluriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roluris
     * const roluri = await prisma.roluri.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roluriUpdateManyArgs>(args: SelectSubset<T, roluriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roluris and returns the data updated in the database.
     * @param {roluriUpdateManyAndReturnArgs} args - Arguments to update many Roluris.
     * @example
     * // Update many Roluris
     * const roluri = await prisma.roluri.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roluris and only return the `id`
     * const roluriWithIdOnly = await prisma.roluri.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roluriUpdateManyAndReturnArgs>(args: SelectSubset<T, roluriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roluri.
     * @param {roluriUpsertArgs} args - Arguments to update or create a Roluri.
     * @example
     * // Update or create a Roluri
     * const roluri = await prisma.roluri.upsert({
     *   create: {
     *     // ... data to create a Roluri
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roluri we want to update
     *   }
     * })
     */
    upsert<T extends roluriUpsertArgs>(args: SelectSubset<T, roluriUpsertArgs<ExtArgs>>): Prisma__roluriClient<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roluris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roluriCountArgs} args - Arguments to filter Roluris to count.
     * @example
     * // Count the number of Roluris
     * const count = await prisma.roluri.count({
     *   where: {
     *     // ... the filter for the Roluris we want to count
     *   }
     * })
    **/
    count<T extends roluriCountArgs>(
      args?: Subset<T, roluriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoluriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roluri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoluriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoluriAggregateArgs>(args: Subset<T, RoluriAggregateArgs>): Prisma.PrismaPromise<GetRoluriAggregateType<T>>

    /**
     * Group by Roluri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roluriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roluriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roluriGroupByArgs['orderBy'] }
        : { orderBy?: roluriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roluriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoluriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roluri model
   */
  readonly fields: roluriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roluri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roluriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilizatori<T extends roluri$utilizatoriArgs<ExtArgs> = {}>(args?: Subset<T, roluri$utilizatoriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roluri model
   */
  interface roluriFieldRefs {
    readonly id: FieldRef<"roluri", 'String'>
    readonly nume: FieldRef<"roluri", 'String'>
    readonly descriere: FieldRef<"roluri", 'String'>
    readonly culoare: FieldRef<"roluri", 'String'>
  }
    

  // Custom InputTypes
  /**
   * roluri findUnique
   */
  export type roluriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
    /**
     * Filter, which roluri to fetch.
     */
    where: roluriWhereUniqueInput
  }

  /**
   * roluri findUniqueOrThrow
   */
  export type roluriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
    /**
     * Filter, which roluri to fetch.
     */
    where: roluriWhereUniqueInput
  }

  /**
   * roluri findFirst
   */
  export type roluriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
    /**
     * Filter, which roluri to fetch.
     */
    where?: roluriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roluris to fetch.
     */
    orderBy?: roluriOrderByWithRelationInput | roluriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roluris.
     */
    cursor?: roluriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roluris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roluris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roluris.
     */
    distinct?: RoluriScalarFieldEnum | RoluriScalarFieldEnum[]
  }

  /**
   * roluri findFirstOrThrow
   */
  export type roluriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
    /**
     * Filter, which roluri to fetch.
     */
    where?: roluriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roluris to fetch.
     */
    orderBy?: roluriOrderByWithRelationInput | roluriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roluris.
     */
    cursor?: roluriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roluris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roluris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roluris.
     */
    distinct?: RoluriScalarFieldEnum | RoluriScalarFieldEnum[]
  }

  /**
   * roluri findMany
   */
  export type roluriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
    /**
     * Filter, which roluris to fetch.
     */
    where?: roluriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roluris to fetch.
     */
    orderBy?: roluriOrderByWithRelationInput | roluriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roluris.
     */
    cursor?: roluriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roluris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roluris.
     */
    skip?: number
    distinct?: RoluriScalarFieldEnum | RoluriScalarFieldEnum[]
  }

  /**
   * roluri create
   */
  export type roluriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
    /**
     * The data needed to create a roluri.
     */
    data: XOR<roluriCreateInput, roluriUncheckedCreateInput>
  }

  /**
   * roluri createMany
   */
  export type roluriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roluris.
     */
    data: roluriCreateManyInput | roluriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roluri createManyAndReturn
   */
  export type roluriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * The data used to create many roluris.
     */
    data: roluriCreateManyInput | roluriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roluri update
   */
  export type roluriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
    /**
     * The data needed to update a roluri.
     */
    data: XOR<roluriUpdateInput, roluriUncheckedUpdateInput>
    /**
     * Choose, which roluri to update.
     */
    where: roluriWhereUniqueInput
  }

  /**
   * roluri updateMany
   */
  export type roluriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roluris.
     */
    data: XOR<roluriUpdateManyMutationInput, roluriUncheckedUpdateManyInput>
    /**
     * Filter which roluris to update
     */
    where?: roluriWhereInput
    /**
     * Limit how many roluris to update.
     */
    limit?: number
  }

  /**
   * roluri updateManyAndReturn
   */
  export type roluriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * The data used to update roluris.
     */
    data: XOR<roluriUpdateManyMutationInput, roluriUncheckedUpdateManyInput>
    /**
     * Filter which roluris to update
     */
    where?: roluriWhereInput
    /**
     * Limit how many roluris to update.
     */
    limit?: number
  }

  /**
   * roluri upsert
   */
  export type roluriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
    /**
     * The filter to search for the roluri to update in case it exists.
     */
    where: roluriWhereUniqueInput
    /**
     * In case the roluri found by the `where` argument doesn't exist, create a new roluri with this data.
     */
    create: XOR<roluriCreateInput, roluriUncheckedCreateInput>
    /**
     * In case the roluri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roluriUpdateInput, roluriUncheckedUpdateInput>
  }

  /**
   * roluri delete
   */
  export type roluriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
    /**
     * Filter which roluri to delete.
     */
    where: roluriWhereUniqueInput
  }

  /**
   * roluri deleteMany
   */
  export type roluriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roluris to delete
     */
    where?: roluriWhereInput
    /**
     * Limit how many roluris to delete.
     */
    limit?: number
  }

  /**
   * roluri.utilizatori
   */
  export type roluri$utilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    where?: utilizatoriWhereInput
    orderBy?: utilizatoriOrderByWithRelationInput | utilizatoriOrderByWithRelationInput[]
    cursor?: utilizatoriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilizatoriScalarFieldEnum | UtilizatoriScalarFieldEnum[]
  }

  /**
   * roluri without action
   */
  export type roluriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
  }


  /**
   * Model tipuri_documente
   */

  export type AggregateTipuri_documente = {
    _count: Tipuri_documenteCountAggregateOutputType | null
    _min: Tipuri_documenteMinAggregateOutputType | null
    _max: Tipuri_documenteMaxAggregateOutputType | null
  }

  export type Tipuri_documenteMinAggregateOutputType = {
    id: string | null
    nume: string | null
  }

  export type Tipuri_documenteMaxAggregateOutputType = {
    id: string | null
    nume: string | null
  }

  export type Tipuri_documenteCountAggregateOutputType = {
    id: number
    nume: number
    _all: number
  }


  export type Tipuri_documenteMinAggregateInputType = {
    id?: true
    nume?: true
  }

  export type Tipuri_documenteMaxAggregateInputType = {
    id?: true
    nume?: true
  }

  export type Tipuri_documenteCountAggregateInputType = {
    id?: true
    nume?: true
    _all?: true
  }

  export type Tipuri_documenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipuri_documente to aggregate.
     */
    where?: tipuri_documenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipuri_documentes to fetch.
     */
    orderBy?: tipuri_documenteOrderByWithRelationInput | tipuri_documenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipuri_documenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipuri_documentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipuri_documentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipuri_documentes
    **/
    _count?: true | Tipuri_documenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipuri_documenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipuri_documenteMaxAggregateInputType
  }

  export type GetTipuri_documenteAggregateType<T extends Tipuri_documenteAggregateArgs> = {
        [P in keyof T & keyof AggregateTipuri_documente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipuri_documente[P]>
      : GetScalarType<T[P], AggregateTipuri_documente[P]>
  }




  export type tipuri_documenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipuri_documenteWhereInput
    orderBy?: tipuri_documenteOrderByWithAggregationInput | tipuri_documenteOrderByWithAggregationInput[]
    by: Tipuri_documenteScalarFieldEnum[] | Tipuri_documenteScalarFieldEnum
    having?: tipuri_documenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipuri_documenteCountAggregateInputType | true
    _min?: Tipuri_documenteMinAggregateInputType
    _max?: Tipuri_documenteMaxAggregateInputType
  }

  export type Tipuri_documenteGroupByOutputType = {
    id: string
    nume: string
    _count: Tipuri_documenteCountAggregateOutputType | null
    _min: Tipuri_documenteMinAggregateOutputType | null
    _max: Tipuri_documenteMaxAggregateOutputType | null
  }

  type GetTipuri_documenteGroupByPayload<T extends tipuri_documenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipuri_documenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipuri_documenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipuri_documenteGroupByOutputType[P]>
            : GetScalarType<T[P], Tipuri_documenteGroupByOutputType[P]>
        }
      >
    >


  export type tipuri_documenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
    documente?: boolean | tipuri_documente$documenteArgs<ExtArgs>
    _count?: boolean | Tipuri_documenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipuri_documente"]>

  export type tipuri_documenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
  }, ExtArgs["result"]["tipuri_documente"]>

  export type tipuri_documenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nume?: boolean
  }, ExtArgs["result"]["tipuri_documente"]>

  export type tipuri_documenteSelectScalar = {
    id?: boolean
    nume?: boolean
  }

  export type tipuri_documenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nume", ExtArgs["result"]["tipuri_documente"]>
  export type tipuri_documenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documente?: boolean | tipuri_documente$documenteArgs<ExtArgs>
    _count?: boolean | Tipuri_documenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipuri_documenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipuri_documenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipuri_documentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipuri_documente"
    objects: {
      documente: Prisma.$documentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nume: string
    }, ExtArgs["result"]["tipuri_documente"]>
    composites: {}
  }

  type tipuri_documenteGetPayload<S extends boolean | null | undefined | tipuri_documenteDefaultArgs> = $Result.GetResult<Prisma.$tipuri_documentePayload, S>

  type tipuri_documenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipuri_documenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipuri_documenteCountAggregateInputType | true
    }

  export interface tipuri_documenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipuri_documente'], meta: { name: 'tipuri_documente' } }
    /**
     * Find zero or one Tipuri_documente that matches the filter.
     * @param {tipuri_documenteFindUniqueArgs} args - Arguments to find a Tipuri_documente
     * @example
     * // Get one Tipuri_documente
     * const tipuri_documente = await prisma.tipuri_documente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipuri_documenteFindUniqueArgs>(args: SelectSubset<T, tipuri_documenteFindUniqueArgs<ExtArgs>>): Prisma__tipuri_documenteClient<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipuri_documente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipuri_documenteFindUniqueOrThrowArgs} args - Arguments to find a Tipuri_documente
     * @example
     * // Get one Tipuri_documente
     * const tipuri_documente = await prisma.tipuri_documente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipuri_documenteFindUniqueOrThrowArgs>(args: SelectSubset<T, tipuri_documenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipuri_documenteClient<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipuri_documente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_documenteFindFirstArgs} args - Arguments to find a Tipuri_documente
     * @example
     * // Get one Tipuri_documente
     * const tipuri_documente = await prisma.tipuri_documente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipuri_documenteFindFirstArgs>(args?: SelectSubset<T, tipuri_documenteFindFirstArgs<ExtArgs>>): Prisma__tipuri_documenteClient<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipuri_documente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_documenteFindFirstOrThrowArgs} args - Arguments to find a Tipuri_documente
     * @example
     * // Get one Tipuri_documente
     * const tipuri_documente = await prisma.tipuri_documente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipuri_documenteFindFirstOrThrowArgs>(args?: SelectSubset<T, tipuri_documenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipuri_documenteClient<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipuri_documentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_documenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipuri_documentes
     * const tipuri_documentes = await prisma.tipuri_documente.findMany()
     * 
     * // Get first 10 Tipuri_documentes
     * const tipuri_documentes = await prisma.tipuri_documente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipuri_documenteWithIdOnly = await prisma.tipuri_documente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tipuri_documenteFindManyArgs>(args?: SelectSubset<T, tipuri_documenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipuri_documente.
     * @param {tipuri_documenteCreateArgs} args - Arguments to create a Tipuri_documente.
     * @example
     * // Create one Tipuri_documente
     * const Tipuri_documente = await prisma.tipuri_documente.create({
     *   data: {
     *     // ... data to create a Tipuri_documente
     *   }
     * })
     * 
     */
    create<T extends tipuri_documenteCreateArgs>(args: SelectSubset<T, tipuri_documenteCreateArgs<ExtArgs>>): Prisma__tipuri_documenteClient<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipuri_documentes.
     * @param {tipuri_documenteCreateManyArgs} args - Arguments to create many Tipuri_documentes.
     * @example
     * // Create many Tipuri_documentes
     * const tipuri_documente = await prisma.tipuri_documente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipuri_documenteCreateManyArgs>(args?: SelectSubset<T, tipuri_documenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipuri_documentes and returns the data saved in the database.
     * @param {tipuri_documenteCreateManyAndReturnArgs} args - Arguments to create many Tipuri_documentes.
     * @example
     * // Create many Tipuri_documentes
     * const tipuri_documente = await prisma.tipuri_documente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipuri_documentes and only return the `id`
     * const tipuri_documenteWithIdOnly = await prisma.tipuri_documente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipuri_documenteCreateManyAndReturnArgs>(args?: SelectSubset<T, tipuri_documenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipuri_documente.
     * @param {tipuri_documenteDeleteArgs} args - Arguments to delete one Tipuri_documente.
     * @example
     * // Delete one Tipuri_documente
     * const Tipuri_documente = await prisma.tipuri_documente.delete({
     *   where: {
     *     // ... filter to delete one Tipuri_documente
     *   }
     * })
     * 
     */
    delete<T extends tipuri_documenteDeleteArgs>(args: SelectSubset<T, tipuri_documenteDeleteArgs<ExtArgs>>): Prisma__tipuri_documenteClient<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipuri_documente.
     * @param {tipuri_documenteUpdateArgs} args - Arguments to update one Tipuri_documente.
     * @example
     * // Update one Tipuri_documente
     * const tipuri_documente = await prisma.tipuri_documente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipuri_documenteUpdateArgs>(args: SelectSubset<T, tipuri_documenteUpdateArgs<ExtArgs>>): Prisma__tipuri_documenteClient<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipuri_documentes.
     * @param {tipuri_documenteDeleteManyArgs} args - Arguments to filter Tipuri_documentes to delete.
     * @example
     * // Delete a few Tipuri_documentes
     * const { count } = await prisma.tipuri_documente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipuri_documenteDeleteManyArgs>(args?: SelectSubset<T, tipuri_documenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipuri_documentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_documenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipuri_documentes
     * const tipuri_documente = await prisma.tipuri_documente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipuri_documenteUpdateManyArgs>(args: SelectSubset<T, tipuri_documenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipuri_documentes and returns the data updated in the database.
     * @param {tipuri_documenteUpdateManyAndReturnArgs} args - Arguments to update many Tipuri_documentes.
     * @example
     * // Update many Tipuri_documentes
     * const tipuri_documente = await prisma.tipuri_documente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipuri_documentes and only return the `id`
     * const tipuri_documenteWithIdOnly = await prisma.tipuri_documente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tipuri_documenteUpdateManyAndReturnArgs>(args: SelectSubset<T, tipuri_documenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipuri_documente.
     * @param {tipuri_documenteUpsertArgs} args - Arguments to update or create a Tipuri_documente.
     * @example
     * // Update or create a Tipuri_documente
     * const tipuri_documente = await prisma.tipuri_documente.upsert({
     *   create: {
     *     // ... data to create a Tipuri_documente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipuri_documente we want to update
     *   }
     * })
     */
    upsert<T extends tipuri_documenteUpsertArgs>(args: SelectSubset<T, tipuri_documenteUpsertArgs<ExtArgs>>): Prisma__tipuri_documenteClient<$Result.GetResult<Prisma.$tipuri_documentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipuri_documentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_documenteCountArgs} args - Arguments to filter Tipuri_documentes to count.
     * @example
     * // Count the number of Tipuri_documentes
     * const count = await prisma.tipuri_documente.count({
     *   where: {
     *     // ... the filter for the Tipuri_documentes we want to count
     *   }
     * })
    **/
    count<T extends tipuri_documenteCountArgs>(
      args?: Subset<T, tipuri_documenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipuri_documenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipuri_documente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipuri_documenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipuri_documenteAggregateArgs>(args: Subset<T, Tipuri_documenteAggregateArgs>): Prisma.PrismaPromise<GetTipuri_documenteAggregateType<T>>

    /**
     * Group by Tipuri_documente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipuri_documenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipuri_documenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipuri_documenteGroupByArgs['orderBy'] }
        : { orderBy?: tipuri_documenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipuri_documenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipuri_documenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipuri_documente model
   */
  readonly fields: tipuri_documenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipuri_documente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipuri_documenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documente<T extends tipuri_documente$documenteArgs<ExtArgs> = {}>(args?: Subset<T, tipuri_documente$documenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipuri_documente model
   */
  interface tipuri_documenteFieldRefs {
    readonly id: FieldRef<"tipuri_documente", 'String'>
    readonly nume: FieldRef<"tipuri_documente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipuri_documente findUnique
   */
  export type tipuri_documenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_documenteInclude<ExtArgs> | null
    /**
     * Filter, which tipuri_documente to fetch.
     */
    where: tipuri_documenteWhereUniqueInput
  }

  /**
   * tipuri_documente findUniqueOrThrow
   */
  export type tipuri_documenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_documenteInclude<ExtArgs> | null
    /**
     * Filter, which tipuri_documente to fetch.
     */
    where: tipuri_documenteWhereUniqueInput
  }

  /**
   * tipuri_documente findFirst
   */
  export type tipuri_documenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_documenteInclude<ExtArgs> | null
    /**
     * Filter, which tipuri_documente to fetch.
     */
    where?: tipuri_documenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipuri_documentes to fetch.
     */
    orderBy?: tipuri_documenteOrderByWithRelationInput | tipuri_documenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipuri_documentes.
     */
    cursor?: tipuri_documenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipuri_documentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipuri_documentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipuri_documentes.
     */
    distinct?: Tipuri_documenteScalarFieldEnum | Tipuri_documenteScalarFieldEnum[]
  }

  /**
   * tipuri_documente findFirstOrThrow
   */
  export type tipuri_documenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_documenteInclude<ExtArgs> | null
    /**
     * Filter, which tipuri_documente to fetch.
     */
    where?: tipuri_documenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipuri_documentes to fetch.
     */
    orderBy?: tipuri_documenteOrderByWithRelationInput | tipuri_documenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipuri_documentes.
     */
    cursor?: tipuri_documenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipuri_documentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipuri_documentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipuri_documentes.
     */
    distinct?: Tipuri_documenteScalarFieldEnum | Tipuri_documenteScalarFieldEnum[]
  }

  /**
   * tipuri_documente findMany
   */
  export type tipuri_documenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_documenteInclude<ExtArgs> | null
    /**
     * Filter, which tipuri_documentes to fetch.
     */
    where?: tipuri_documenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipuri_documentes to fetch.
     */
    orderBy?: tipuri_documenteOrderByWithRelationInput | tipuri_documenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipuri_documentes.
     */
    cursor?: tipuri_documenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipuri_documentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipuri_documentes.
     */
    skip?: number
    distinct?: Tipuri_documenteScalarFieldEnum | Tipuri_documenteScalarFieldEnum[]
  }

  /**
   * tipuri_documente create
   */
  export type tipuri_documenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_documenteInclude<ExtArgs> | null
    /**
     * The data needed to create a tipuri_documente.
     */
    data: XOR<tipuri_documenteCreateInput, tipuri_documenteUncheckedCreateInput>
  }

  /**
   * tipuri_documente createMany
   */
  export type tipuri_documenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipuri_documentes.
     */
    data: tipuri_documenteCreateManyInput | tipuri_documenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipuri_documente createManyAndReturn
   */
  export type tipuri_documenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * The data used to create many tipuri_documentes.
     */
    data: tipuri_documenteCreateManyInput | tipuri_documenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipuri_documente update
   */
  export type tipuri_documenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_documenteInclude<ExtArgs> | null
    /**
     * The data needed to update a tipuri_documente.
     */
    data: XOR<tipuri_documenteUpdateInput, tipuri_documenteUncheckedUpdateInput>
    /**
     * Choose, which tipuri_documente to update.
     */
    where: tipuri_documenteWhereUniqueInput
  }

  /**
   * tipuri_documente updateMany
   */
  export type tipuri_documenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipuri_documentes.
     */
    data: XOR<tipuri_documenteUpdateManyMutationInput, tipuri_documenteUncheckedUpdateManyInput>
    /**
     * Filter which tipuri_documentes to update
     */
    where?: tipuri_documenteWhereInput
    /**
     * Limit how many tipuri_documentes to update.
     */
    limit?: number
  }

  /**
   * tipuri_documente updateManyAndReturn
   */
  export type tipuri_documenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * The data used to update tipuri_documentes.
     */
    data: XOR<tipuri_documenteUpdateManyMutationInput, tipuri_documenteUncheckedUpdateManyInput>
    /**
     * Filter which tipuri_documentes to update
     */
    where?: tipuri_documenteWhereInput
    /**
     * Limit how many tipuri_documentes to update.
     */
    limit?: number
  }

  /**
   * tipuri_documente upsert
   */
  export type tipuri_documenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_documenteInclude<ExtArgs> | null
    /**
     * The filter to search for the tipuri_documente to update in case it exists.
     */
    where: tipuri_documenteWhereUniqueInput
    /**
     * In case the tipuri_documente found by the `where` argument doesn't exist, create a new tipuri_documente with this data.
     */
    create: XOR<tipuri_documenteCreateInput, tipuri_documenteUncheckedCreateInput>
    /**
     * In case the tipuri_documente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipuri_documenteUpdateInput, tipuri_documenteUncheckedUpdateInput>
  }

  /**
   * tipuri_documente delete
   */
  export type tipuri_documenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_documenteInclude<ExtArgs> | null
    /**
     * Filter which tipuri_documente to delete.
     */
    where: tipuri_documenteWhereUniqueInput
  }

  /**
   * tipuri_documente deleteMany
   */
  export type tipuri_documenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipuri_documentes to delete
     */
    where?: tipuri_documenteWhereInput
    /**
     * Limit how many tipuri_documentes to delete.
     */
    limit?: number
  }

  /**
   * tipuri_documente.documente
   */
  export type tipuri_documente$documenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    where?: documenteWhereInput
    orderBy?: documenteOrderByWithRelationInput | documenteOrderByWithRelationInput[]
    cursor?: documenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumenteScalarFieldEnum | DocumenteScalarFieldEnum[]
  }

  /**
   * tipuri_documente without action
   */
  export type tipuri_documenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipuri_documente
     */
    select?: tipuri_documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipuri_documente
     */
    omit?: tipuri_documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipuri_documenteInclude<ExtArgs> | null
  }


  /**
   * Model utilizatori
   */

  export type AggregateUtilizatori = {
    _count: UtilizatoriCountAggregateOutputType | null
    _min: UtilizatoriMinAggregateOutputType | null
    _max: UtilizatoriMaxAggregateOutputType | null
  }

  export type UtilizatoriMinAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    session_token: string | null
    refresh_token: string | null
    session_expires: Date | null
    nume: string | null
    departament_id: string | null
    rol_id: string | null
  }

  export type UtilizatoriMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password_hash: string | null
    session_token: string | null
    refresh_token: string | null
    session_expires: Date | null
    nume: string | null
    departament_id: string | null
    rol_id: string | null
  }

  export type UtilizatoriCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    session_token: number
    refresh_token: number
    session_expires: number
    nume: number
    departament_id: number
    rol_id: number
    _all: number
  }


  export type UtilizatoriMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    session_token?: true
    refresh_token?: true
    session_expires?: true
    nume?: true
    departament_id?: true
    rol_id?: true
  }

  export type UtilizatoriMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    session_token?: true
    refresh_token?: true
    session_expires?: true
    nume?: true
    departament_id?: true
    rol_id?: true
  }

  export type UtilizatoriCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    session_token?: true
    refresh_token?: true
    session_expires?: true
    nume?: true
    departament_id?: true
    rol_id?: true
    _all?: true
  }

  export type UtilizatoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilizatori to aggregate.
     */
    where?: utilizatoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilizatoris to fetch.
     */
    orderBy?: utilizatoriOrderByWithRelationInput | utilizatoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: utilizatoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilizatoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilizatoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned utilizatoris
    **/
    _count?: true | UtilizatoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilizatoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilizatoriMaxAggregateInputType
  }

  export type GetUtilizatoriAggregateType<T extends UtilizatoriAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilizatori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilizatori[P]>
      : GetScalarType<T[P], AggregateUtilizatori[P]>
  }




  export type utilizatoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilizatoriWhereInput
    orderBy?: utilizatoriOrderByWithAggregationInput | utilizatoriOrderByWithAggregationInput[]
    by: UtilizatoriScalarFieldEnum[] | UtilizatoriScalarFieldEnum
    having?: utilizatoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilizatoriCountAggregateInputType | true
    _min?: UtilizatoriMinAggregateInputType
    _max?: UtilizatoriMaxAggregateInputType
  }

  export type UtilizatoriGroupByOutputType = {
    id: string
    email: string
    password_hash: string
    session_token: string | null
    refresh_token: string | null
    session_expires: Date | null
    nume: string
    departament_id: string | null
    rol_id: string | null
    _count: UtilizatoriCountAggregateOutputType | null
    _min: UtilizatoriMinAggregateOutputType | null
    _max: UtilizatoriMaxAggregateOutputType | null
  }

  type GetUtilizatoriGroupByPayload<T extends utilizatoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilizatoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilizatoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilizatoriGroupByOutputType[P]>
            : GetScalarType<T[P], UtilizatoriGroupByOutputType[P]>
        }
      >
    >


  export type utilizatoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    session_token?: boolean
    refresh_token?: boolean
    session_expires?: boolean
    nume?: boolean
    departament_id?: boolean
    rol_id?: boolean
    audit_logs?: boolean | utilizatori$audit_logsArgs<ExtArgs>
    documente_documente_destinatar_idToutilizatori?: boolean | utilizatori$documente_documente_destinatar_idToutilizatoriArgs<ExtArgs>
    documente_documente_inregistrat_deToutilizatori?: boolean | utilizatori$documente_documente_inregistrat_deToutilizatoriArgs<ExtArgs>
    documente_documente_preluat_deToutilizatori?: boolean | utilizatori$documente_documente_preluat_deToutilizatoriArgs<ExtArgs>
    notificari?: boolean | utilizatori$notificariArgs<ExtArgs>
    departamente?: boolean | utilizatori$departamenteArgs<ExtArgs>
    roluri?: boolean | utilizatori$roluriArgs<ExtArgs>
    _count?: boolean | UtilizatoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilizatori"]>

  export type utilizatoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    session_token?: boolean
    refresh_token?: boolean
    session_expires?: boolean
    nume?: boolean
    departament_id?: boolean
    rol_id?: boolean
    departamente?: boolean | utilizatori$departamenteArgs<ExtArgs>
    roluri?: boolean | utilizatori$roluriArgs<ExtArgs>
  }, ExtArgs["result"]["utilizatori"]>

  export type utilizatoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    session_token?: boolean
    refresh_token?: boolean
    session_expires?: boolean
    nume?: boolean
    departament_id?: boolean
    rol_id?: boolean
    departamente?: boolean | utilizatori$departamenteArgs<ExtArgs>
    roluri?: boolean | utilizatori$roluriArgs<ExtArgs>
  }, ExtArgs["result"]["utilizatori"]>

  export type utilizatoriSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    session_token?: boolean
    refresh_token?: boolean
    session_expires?: boolean
    nume?: boolean
    departament_id?: boolean
    rol_id?: boolean
  }

  export type utilizatoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "session_token" | "refresh_token" | "session_expires" | "nume" | "departament_id" | "rol_id", ExtArgs["result"]["utilizatori"]>
  export type utilizatoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    audit_logs?: boolean | utilizatori$audit_logsArgs<ExtArgs>
    documente_documente_destinatar_idToutilizatori?: boolean | utilizatori$documente_documente_destinatar_idToutilizatoriArgs<ExtArgs>
    documente_documente_inregistrat_deToutilizatori?: boolean | utilizatori$documente_documente_inregistrat_deToutilizatoriArgs<ExtArgs>
    documente_documente_preluat_deToutilizatori?: boolean | utilizatori$documente_documente_preluat_deToutilizatoriArgs<ExtArgs>
    notificari?: boolean | utilizatori$notificariArgs<ExtArgs>
    departamente?: boolean | utilizatori$departamenteArgs<ExtArgs>
    roluri?: boolean | utilizatori$roluriArgs<ExtArgs>
    _count?: boolean | UtilizatoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type utilizatoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamente?: boolean | utilizatori$departamenteArgs<ExtArgs>
    roluri?: boolean | utilizatori$roluriArgs<ExtArgs>
  }
  export type utilizatoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamente?: boolean | utilizatori$departamenteArgs<ExtArgs>
    roluri?: boolean | utilizatori$roluriArgs<ExtArgs>
  }

  export type $utilizatoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "utilizatori"
    objects: {
      audit_logs: Prisma.$audit_logsPayload<ExtArgs>[]
      documente_documente_destinatar_idToutilizatori: Prisma.$documentePayload<ExtArgs>[]
      documente_documente_inregistrat_deToutilizatori: Prisma.$documentePayload<ExtArgs>[]
      documente_documente_preluat_deToutilizatori: Prisma.$documentePayload<ExtArgs>[]
      notificari: Prisma.$notificariPayload<ExtArgs>[]
      departamente: Prisma.$departamentePayload<ExtArgs> | null
      roluri: Prisma.$roluriPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password_hash: string
      session_token: string | null
      refresh_token: string | null
      session_expires: Date | null
      nume: string
      departament_id: string | null
      rol_id: string | null
    }, ExtArgs["result"]["utilizatori"]>
    composites: {}
  }

  type utilizatoriGetPayload<S extends boolean | null | undefined | utilizatoriDefaultArgs> = $Result.GetResult<Prisma.$utilizatoriPayload, S>

  type utilizatoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<utilizatoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilizatoriCountAggregateInputType | true
    }

  export interface utilizatoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['utilizatori'], meta: { name: 'utilizatori' } }
    /**
     * Find zero or one Utilizatori that matches the filter.
     * @param {utilizatoriFindUniqueArgs} args - Arguments to find a Utilizatori
     * @example
     * // Get one Utilizatori
     * const utilizatori = await prisma.utilizatori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends utilizatoriFindUniqueArgs>(args: SelectSubset<T, utilizatoriFindUniqueArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilizatori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {utilizatoriFindUniqueOrThrowArgs} args - Arguments to find a Utilizatori
     * @example
     * // Get one Utilizatori
     * const utilizatori = await prisma.utilizatori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends utilizatoriFindUniqueOrThrowArgs>(args: SelectSubset<T, utilizatoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilizatori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatoriFindFirstArgs} args - Arguments to find a Utilizatori
     * @example
     * // Get one Utilizatori
     * const utilizatori = await prisma.utilizatori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends utilizatoriFindFirstArgs>(args?: SelectSubset<T, utilizatoriFindFirstArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilizatori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatoriFindFirstOrThrowArgs} args - Arguments to find a Utilizatori
     * @example
     * // Get one Utilizatori
     * const utilizatori = await prisma.utilizatori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends utilizatoriFindFirstOrThrowArgs>(args?: SelectSubset<T, utilizatoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilizatoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilizatoris
     * const utilizatoris = await prisma.utilizatori.findMany()
     * 
     * // Get first 10 Utilizatoris
     * const utilizatoris = await prisma.utilizatori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilizatoriWithIdOnly = await prisma.utilizatori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends utilizatoriFindManyArgs>(args?: SelectSubset<T, utilizatoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilizatori.
     * @param {utilizatoriCreateArgs} args - Arguments to create a Utilizatori.
     * @example
     * // Create one Utilizatori
     * const Utilizatori = await prisma.utilizatori.create({
     *   data: {
     *     // ... data to create a Utilizatori
     *   }
     * })
     * 
     */
    create<T extends utilizatoriCreateArgs>(args: SelectSubset<T, utilizatoriCreateArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilizatoris.
     * @param {utilizatoriCreateManyArgs} args - Arguments to create many Utilizatoris.
     * @example
     * // Create many Utilizatoris
     * const utilizatori = await prisma.utilizatori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends utilizatoriCreateManyArgs>(args?: SelectSubset<T, utilizatoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilizatoris and returns the data saved in the database.
     * @param {utilizatoriCreateManyAndReturnArgs} args - Arguments to create many Utilizatoris.
     * @example
     * // Create many Utilizatoris
     * const utilizatori = await prisma.utilizatori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilizatoris and only return the `id`
     * const utilizatoriWithIdOnly = await prisma.utilizatori.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends utilizatoriCreateManyAndReturnArgs>(args?: SelectSubset<T, utilizatoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilizatori.
     * @param {utilizatoriDeleteArgs} args - Arguments to delete one Utilizatori.
     * @example
     * // Delete one Utilizatori
     * const Utilizatori = await prisma.utilizatori.delete({
     *   where: {
     *     // ... filter to delete one Utilizatori
     *   }
     * })
     * 
     */
    delete<T extends utilizatoriDeleteArgs>(args: SelectSubset<T, utilizatoriDeleteArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilizatori.
     * @param {utilizatoriUpdateArgs} args - Arguments to update one Utilizatori.
     * @example
     * // Update one Utilizatori
     * const utilizatori = await prisma.utilizatori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends utilizatoriUpdateArgs>(args: SelectSubset<T, utilizatoriUpdateArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilizatoris.
     * @param {utilizatoriDeleteManyArgs} args - Arguments to filter Utilizatoris to delete.
     * @example
     * // Delete a few Utilizatoris
     * const { count } = await prisma.utilizatori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends utilizatoriDeleteManyArgs>(args?: SelectSubset<T, utilizatoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilizatoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilizatoris
     * const utilizatori = await prisma.utilizatori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends utilizatoriUpdateManyArgs>(args: SelectSubset<T, utilizatoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilizatoris and returns the data updated in the database.
     * @param {utilizatoriUpdateManyAndReturnArgs} args - Arguments to update many Utilizatoris.
     * @example
     * // Update many Utilizatoris
     * const utilizatori = await prisma.utilizatori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilizatoris and only return the `id`
     * const utilizatoriWithIdOnly = await prisma.utilizatori.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends utilizatoriUpdateManyAndReturnArgs>(args: SelectSubset<T, utilizatoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilizatori.
     * @param {utilizatoriUpsertArgs} args - Arguments to update or create a Utilizatori.
     * @example
     * // Update or create a Utilizatori
     * const utilizatori = await prisma.utilizatori.upsert({
     *   create: {
     *     // ... data to create a Utilizatori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilizatori we want to update
     *   }
     * })
     */
    upsert<T extends utilizatoriUpsertArgs>(args: SelectSubset<T, utilizatoriUpsertArgs<ExtArgs>>): Prisma__utilizatoriClient<$Result.GetResult<Prisma.$utilizatoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilizatoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatoriCountArgs} args - Arguments to filter Utilizatoris to count.
     * @example
     * // Count the number of Utilizatoris
     * const count = await prisma.utilizatori.count({
     *   where: {
     *     // ... the filter for the Utilizatoris we want to count
     *   }
     * })
    **/
    count<T extends utilizatoriCountArgs>(
      args?: Subset<T, utilizatoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilizatoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilizatori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilizatoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilizatoriAggregateArgs>(args: Subset<T, UtilizatoriAggregateArgs>): Prisma.PrismaPromise<GetUtilizatoriAggregateType<T>>

    /**
     * Group by Utilizatori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilizatoriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends utilizatoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: utilizatoriGroupByArgs['orderBy'] }
        : { orderBy?: utilizatoriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, utilizatoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilizatoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the utilizatori model
   */
  readonly fields: utilizatoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for utilizatori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__utilizatoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    audit_logs<T extends utilizatori$audit_logsArgs<ExtArgs> = {}>(args?: Subset<T, utilizatori$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documente_documente_destinatar_idToutilizatori<T extends utilizatori$documente_documente_destinatar_idToutilizatoriArgs<ExtArgs> = {}>(args?: Subset<T, utilizatori$documente_documente_destinatar_idToutilizatoriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documente_documente_inregistrat_deToutilizatori<T extends utilizatori$documente_documente_inregistrat_deToutilizatoriArgs<ExtArgs> = {}>(args?: Subset<T, utilizatori$documente_documente_inregistrat_deToutilizatoriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documente_documente_preluat_deToutilizatori<T extends utilizatori$documente_documente_preluat_deToutilizatoriArgs<ExtArgs> = {}>(args?: Subset<T, utilizatori$documente_documente_preluat_deToutilizatoriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificari<T extends utilizatori$notificariArgs<ExtArgs> = {}>(args?: Subset<T, utilizatori$notificariArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificariPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departamente<T extends utilizatori$departamenteArgs<ExtArgs> = {}>(args?: Subset<T, utilizatori$departamenteArgs<ExtArgs>>): Prisma__departamenteClient<$Result.GetResult<Prisma.$departamentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    roluri<T extends utilizatori$roluriArgs<ExtArgs> = {}>(args?: Subset<T, utilizatori$roluriArgs<ExtArgs>>): Prisma__roluriClient<$Result.GetResult<Prisma.$roluriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the utilizatori model
   */
  interface utilizatoriFieldRefs {
    readonly id: FieldRef<"utilizatori", 'String'>
    readonly email: FieldRef<"utilizatori", 'String'>
    readonly password_hash: FieldRef<"utilizatori", 'String'>
    readonly session_token: FieldRef<"utilizatori", 'String'>
    readonly refresh_token: FieldRef<"utilizatori", 'String'>
    readonly session_expires: FieldRef<"utilizatori", 'DateTime'>
    readonly nume: FieldRef<"utilizatori", 'String'>
    readonly departament_id: FieldRef<"utilizatori", 'String'>
    readonly rol_id: FieldRef<"utilizatori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * utilizatori findUnique
   */
  export type utilizatoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    /**
     * Filter, which utilizatori to fetch.
     */
    where: utilizatoriWhereUniqueInput
  }

  /**
   * utilizatori findUniqueOrThrow
   */
  export type utilizatoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    /**
     * Filter, which utilizatori to fetch.
     */
    where: utilizatoriWhereUniqueInput
  }

  /**
   * utilizatori findFirst
   */
  export type utilizatoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    /**
     * Filter, which utilizatori to fetch.
     */
    where?: utilizatoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilizatoris to fetch.
     */
    orderBy?: utilizatoriOrderByWithRelationInput | utilizatoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilizatoris.
     */
    cursor?: utilizatoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilizatoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilizatoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilizatoris.
     */
    distinct?: UtilizatoriScalarFieldEnum | UtilizatoriScalarFieldEnum[]
  }

  /**
   * utilizatori findFirstOrThrow
   */
  export type utilizatoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    /**
     * Filter, which utilizatori to fetch.
     */
    where?: utilizatoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilizatoris to fetch.
     */
    orderBy?: utilizatoriOrderByWithRelationInput | utilizatoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilizatoris.
     */
    cursor?: utilizatoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilizatoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilizatoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilizatoris.
     */
    distinct?: UtilizatoriScalarFieldEnum | UtilizatoriScalarFieldEnum[]
  }

  /**
   * utilizatori findMany
   */
  export type utilizatoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    /**
     * Filter, which utilizatoris to fetch.
     */
    where?: utilizatoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilizatoris to fetch.
     */
    orderBy?: utilizatoriOrderByWithRelationInput | utilizatoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing utilizatoris.
     */
    cursor?: utilizatoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilizatoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilizatoris.
     */
    skip?: number
    distinct?: UtilizatoriScalarFieldEnum | UtilizatoriScalarFieldEnum[]
  }

  /**
   * utilizatori create
   */
  export type utilizatoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    /**
     * The data needed to create a utilizatori.
     */
    data: XOR<utilizatoriCreateInput, utilizatoriUncheckedCreateInput>
  }

  /**
   * utilizatori createMany
   */
  export type utilizatoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many utilizatoris.
     */
    data: utilizatoriCreateManyInput | utilizatoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * utilizatori createManyAndReturn
   */
  export type utilizatoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * The data used to create many utilizatoris.
     */
    data: utilizatoriCreateManyInput | utilizatoriCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * utilizatori update
   */
  export type utilizatoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    /**
     * The data needed to update a utilizatori.
     */
    data: XOR<utilizatoriUpdateInput, utilizatoriUncheckedUpdateInput>
    /**
     * Choose, which utilizatori to update.
     */
    where: utilizatoriWhereUniqueInput
  }

  /**
   * utilizatori updateMany
   */
  export type utilizatoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update utilizatoris.
     */
    data: XOR<utilizatoriUpdateManyMutationInput, utilizatoriUncheckedUpdateManyInput>
    /**
     * Filter which utilizatoris to update
     */
    where?: utilizatoriWhereInput
    /**
     * Limit how many utilizatoris to update.
     */
    limit?: number
  }

  /**
   * utilizatori updateManyAndReturn
   */
  export type utilizatoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * The data used to update utilizatoris.
     */
    data: XOR<utilizatoriUpdateManyMutationInput, utilizatoriUncheckedUpdateManyInput>
    /**
     * Filter which utilizatoris to update
     */
    where?: utilizatoriWhereInput
    /**
     * Limit how many utilizatoris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * utilizatori upsert
   */
  export type utilizatoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    /**
     * The filter to search for the utilizatori to update in case it exists.
     */
    where: utilizatoriWhereUniqueInput
    /**
     * In case the utilizatori found by the `where` argument doesn't exist, create a new utilizatori with this data.
     */
    create: XOR<utilizatoriCreateInput, utilizatoriUncheckedCreateInput>
    /**
     * In case the utilizatori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<utilizatoriUpdateInput, utilizatoriUncheckedUpdateInput>
  }

  /**
   * utilizatori delete
   */
  export type utilizatoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
    /**
     * Filter which utilizatori to delete.
     */
    where: utilizatoriWhereUniqueInput
  }

  /**
   * utilizatori deleteMany
   */
  export type utilizatoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilizatoris to delete
     */
    where?: utilizatoriWhereInput
    /**
     * Limit how many utilizatoris to delete.
     */
    limit?: number
  }

  /**
   * utilizatori.audit_logs
   */
  export type utilizatori$audit_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the audit_logs
     */
    select?: audit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the audit_logs
     */
    omit?: audit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: audit_logsInclude<ExtArgs> | null
    where?: audit_logsWhereInput
    orderBy?: audit_logsOrderByWithRelationInput | audit_logsOrderByWithRelationInput[]
    cursor?: audit_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_logsScalarFieldEnum | Audit_logsScalarFieldEnum[]
  }

  /**
   * utilizatori.documente_documente_destinatar_idToutilizatori
   */
  export type utilizatori$documente_documente_destinatar_idToutilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    where?: documenteWhereInput
    orderBy?: documenteOrderByWithRelationInput | documenteOrderByWithRelationInput[]
    cursor?: documenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumenteScalarFieldEnum | DocumenteScalarFieldEnum[]
  }

  /**
   * utilizatori.documente_documente_inregistrat_deToutilizatori
   */
  export type utilizatori$documente_documente_inregistrat_deToutilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    where?: documenteWhereInput
    orderBy?: documenteOrderByWithRelationInput | documenteOrderByWithRelationInput[]
    cursor?: documenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumenteScalarFieldEnum | DocumenteScalarFieldEnum[]
  }

  /**
   * utilizatori.documente_documente_preluat_deToutilizatori
   */
  export type utilizatori$documente_documente_preluat_deToutilizatoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documente
     */
    select?: documenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documente
     */
    omit?: documenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documenteInclude<ExtArgs> | null
    where?: documenteWhereInput
    orderBy?: documenteOrderByWithRelationInput | documenteOrderByWithRelationInput[]
    cursor?: documenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumenteScalarFieldEnum | DocumenteScalarFieldEnum[]
  }

  /**
   * utilizatori.notificari
   */
  export type utilizatori$notificariArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificari
     */
    select?: notificariSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificari
     */
    omit?: notificariOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificariInclude<ExtArgs> | null
    where?: notificariWhereInput
    orderBy?: notificariOrderByWithRelationInput | notificariOrderByWithRelationInput[]
    cursor?: notificariWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificariScalarFieldEnum | NotificariScalarFieldEnum[]
  }

  /**
   * utilizatori.departamente
   */
  export type utilizatori$departamenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departamente
     */
    select?: departamenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departamente
     */
    omit?: departamenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departamenteInclude<ExtArgs> | null
    where?: departamenteWhereInput
  }

  /**
   * utilizatori.roluri
   */
  export type utilizatori$roluriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roluri
     */
    select?: roluriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roluri
     */
    omit?: roluriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roluriInclude<ExtArgs> | null
    where?: roluriWhereInput
  }

  /**
   * utilizatori without action
   */
  export type utilizatoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilizatori
     */
    select?: utilizatoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilizatori
     */
    omit?: utilizatoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilizatoriInclude<ExtArgs> | null
  }


  /**
   * Model configurare_serie
   */

  export type AggregateConfigurare_serie = {
    _count: Configurare_serieCountAggregateOutputType | null
    _avg: Configurare_serieAvgAggregateOutputType | null
    _sum: Configurare_serieSumAggregateOutputType | null
    _min: Configurare_serieMinAggregateOutputType | null
    _max: Configurare_serieMaxAggregateOutputType | null
  }

  export type Configurare_serieAvgAggregateOutputType = {
    numar_serie: number | null
  }

  export type Configurare_serieSumAggregateOutputType = {
    numar_serie: number | null
  }

  export type Configurare_serieMinAggregateOutputType = {
    id: string | null
    numar_serie: number | null
    descriere: string | null
  }

  export type Configurare_serieMaxAggregateOutputType = {
    id: string | null
    numar_serie: number | null
    descriere: string | null
  }

  export type Configurare_serieCountAggregateOutputType = {
    id: number
    numar_serie: number
    descriere: number
    _all: number
  }


  export type Configurare_serieAvgAggregateInputType = {
    numar_serie?: true
  }

  export type Configurare_serieSumAggregateInputType = {
    numar_serie?: true
  }

  export type Configurare_serieMinAggregateInputType = {
    id?: true
    numar_serie?: true
    descriere?: true
  }

  export type Configurare_serieMaxAggregateInputType = {
    id?: true
    numar_serie?: true
    descriere?: true
  }

  export type Configurare_serieCountAggregateInputType = {
    id?: true
    numar_serie?: true
    descriere?: true
    _all?: true
  }

  export type Configurare_serieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configurare_serie to aggregate.
     */
    where?: configurare_serieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configurare_series to fetch.
     */
    orderBy?: configurare_serieOrderByWithRelationInput | configurare_serieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: configurare_serieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configurare_series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configurare_series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned configurare_series
    **/
    _count?: true | Configurare_serieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Configurare_serieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Configurare_serieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Configurare_serieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Configurare_serieMaxAggregateInputType
  }

  export type GetConfigurare_serieAggregateType<T extends Configurare_serieAggregateArgs> = {
        [P in keyof T & keyof AggregateConfigurare_serie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfigurare_serie[P]>
      : GetScalarType<T[P], AggregateConfigurare_serie[P]>
  }




  export type configurare_serieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: configurare_serieWhereInput
    orderBy?: configurare_serieOrderByWithAggregationInput | configurare_serieOrderByWithAggregationInput[]
    by: Configurare_serieScalarFieldEnum[] | Configurare_serieScalarFieldEnum
    having?: configurare_serieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Configurare_serieCountAggregateInputType | true
    _avg?: Configurare_serieAvgAggregateInputType
    _sum?: Configurare_serieSumAggregateInputType
    _min?: Configurare_serieMinAggregateInputType
    _max?: Configurare_serieMaxAggregateInputType
  }

  export type Configurare_serieGroupByOutputType = {
    id: string
    numar_serie: number
    descriere: string | null
    _count: Configurare_serieCountAggregateOutputType | null
    _avg: Configurare_serieAvgAggregateOutputType | null
    _sum: Configurare_serieSumAggregateOutputType | null
    _min: Configurare_serieMinAggregateOutputType | null
    _max: Configurare_serieMaxAggregateOutputType | null
  }

  type GetConfigurare_serieGroupByPayload<T extends configurare_serieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Configurare_serieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Configurare_serieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Configurare_serieGroupByOutputType[P]>
            : GetScalarType<T[P], Configurare_serieGroupByOutputType[P]>
        }
      >
    >


  export type configurare_serieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numar_serie?: boolean
    descriere?: boolean
  }, ExtArgs["result"]["configurare_serie"]>

  export type configurare_serieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numar_serie?: boolean
    descriere?: boolean
  }, ExtArgs["result"]["configurare_serie"]>

  export type configurare_serieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numar_serie?: boolean
    descriere?: boolean
  }, ExtArgs["result"]["configurare_serie"]>

  export type configurare_serieSelectScalar = {
    id?: boolean
    numar_serie?: boolean
    descriere?: boolean
  }

  export type configurare_serieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numar_serie" | "descriere", ExtArgs["result"]["configurare_serie"]>

  export type $configurare_seriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "configurare_serie"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numar_serie: number
      descriere: string | null
    }, ExtArgs["result"]["configurare_serie"]>
    composites: {}
  }

  type configurare_serieGetPayload<S extends boolean | null | undefined | configurare_serieDefaultArgs> = $Result.GetResult<Prisma.$configurare_seriePayload, S>

  type configurare_serieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<configurare_serieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Configurare_serieCountAggregateInputType | true
    }

  export interface configurare_serieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['configurare_serie'], meta: { name: 'configurare_serie' } }
    /**
     * Find zero or one Configurare_serie that matches the filter.
     * @param {configurare_serieFindUniqueArgs} args - Arguments to find a Configurare_serie
     * @example
     * // Get one Configurare_serie
     * const configurare_serie = await prisma.configurare_serie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends configurare_serieFindUniqueArgs>(args: SelectSubset<T, configurare_serieFindUniqueArgs<ExtArgs>>): Prisma__configurare_serieClient<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Configurare_serie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {configurare_serieFindUniqueOrThrowArgs} args - Arguments to find a Configurare_serie
     * @example
     * // Get one Configurare_serie
     * const configurare_serie = await prisma.configurare_serie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends configurare_serieFindUniqueOrThrowArgs>(args: SelectSubset<T, configurare_serieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__configurare_serieClient<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configurare_serie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurare_serieFindFirstArgs} args - Arguments to find a Configurare_serie
     * @example
     * // Get one Configurare_serie
     * const configurare_serie = await prisma.configurare_serie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends configurare_serieFindFirstArgs>(args?: SelectSubset<T, configurare_serieFindFirstArgs<ExtArgs>>): Prisma__configurare_serieClient<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Configurare_serie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurare_serieFindFirstOrThrowArgs} args - Arguments to find a Configurare_serie
     * @example
     * // Get one Configurare_serie
     * const configurare_serie = await prisma.configurare_serie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends configurare_serieFindFirstOrThrowArgs>(args?: SelectSubset<T, configurare_serieFindFirstOrThrowArgs<ExtArgs>>): Prisma__configurare_serieClient<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configurare_series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurare_serieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configurare_series
     * const configurare_series = await prisma.configurare_serie.findMany()
     * 
     * // Get first 10 Configurare_series
     * const configurare_series = await prisma.configurare_serie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configurare_serieWithIdOnly = await prisma.configurare_serie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends configurare_serieFindManyArgs>(args?: SelectSubset<T, configurare_serieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Configurare_serie.
     * @param {configurare_serieCreateArgs} args - Arguments to create a Configurare_serie.
     * @example
     * // Create one Configurare_serie
     * const Configurare_serie = await prisma.configurare_serie.create({
     *   data: {
     *     // ... data to create a Configurare_serie
     *   }
     * })
     * 
     */
    create<T extends configurare_serieCreateArgs>(args: SelectSubset<T, configurare_serieCreateArgs<ExtArgs>>): Prisma__configurare_serieClient<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configurare_series.
     * @param {configurare_serieCreateManyArgs} args - Arguments to create many Configurare_series.
     * @example
     * // Create many Configurare_series
     * const configurare_serie = await prisma.configurare_serie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends configurare_serieCreateManyArgs>(args?: SelectSubset<T, configurare_serieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configurare_series and returns the data saved in the database.
     * @param {configurare_serieCreateManyAndReturnArgs} args - Arguments to create many Configurare_series.
     * @example
     * // Create many Configurare_series
     * const configurare_serie = await prisma.configurare_serie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configurare_series and only return the `id`
     * const configurare_serieWithIdOnly = await prisma.configurare_serie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends configurare_serieCreateManyAndReturnArgs>(args?: SelectSubset<T, configurare_serieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Configurare_serie.
     * @param {configurare_serieDeleteArgs} args - Arguments to delete one Configurare_serie.
     * @example
     * // Delete one Configurare_serie
     * const Configurare_serie = await prisma.configurare_serie.delete({
     *   where: {
     *     // ... filter to delete one Configurare_serie
     *   }
     * })
     * 
     */
    delete<T extends configurare_serieDeleteArgs>(args: SelectSubset<T, configurare_serieDeleteArgs<ExtArgs>>): Prisma__configurare_serieClient<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Configurare_serie.
     * @param {configurare_serieUpdateArgs} args - Arguments to update one Configurare_serie.
     * @example
     * // Update one Configurare_serie
     * const configurare_serie = await prisma.configurare_serie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends configurare_serieUpdateArgs>(args: SelectSubset<T, configurare_serieUpdateArgs<ExtArgs>>): Prisma__configurare_serieClient<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configurare_series.
     * @param {configurare_serieDeleteManyArgs} args - Arguments to filter Configurare_series to delete.
     * @example
     * // Delete a few Configurare_series
     * const { count } = await prisma.configurare_serie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends configurare_serieDeleteManyArgs>(args?: SelectSubset<T, configurare_serieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configurare_series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurare_serieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configurare_series
     * const configurare_serie = await prisma.configurare_serie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends configurare_serieUpdateManyArgs>(args: SelectSubset<T, configurare_serieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configurare_series and returns the data updated in the database.
     * @param {configurare_serieUpdateManyAndReturnArgs} args - Arguments to update many Configurare_series.
     * @example
     * // Update many Configurare_series
     * const configurare_serie = await prisma.configurare_serie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configurare_series and only return the `id`
     * const configurare_serieWithIdOnly = await prisma.configurare_serie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends configurare_serieUpdateManyAndReturnArgs>(args: SelectSubset<T, configurare_serieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Configurare_serie.
     * @param {configurare_serieUpsertArgs} args - Arguments to update or create a Configurare_serie.
     * @example
     * // Update or create a Configurare_serie
     * const configurare_serie = await prisma.configurare_serie.upsert({
     *   create: {
     *     // ... data to create a Configurare_serie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Configurare_serie we want to update
     *   }
     * })
     */
    upsert<T extends configurare_serieUpsertArgs>(args: SelectSubset<T, configurare_serieUpsertArgs<ExtArgs>>): Prisma__configurare_serieClient<$Result.GetResult<Prisma.$configurare_seriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configurare_series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurare_serieCountArgs} args - Arguments to filter Configurare_series to count.
     * @example
     * // Count the number of Configurare_series
     * const count = await prisma.configurare_serie.count({
     *   where: {
     *     // ... the filter for the Configurare_series we want to count
     *   }
     * })
    **/
    count<T extends configurare_serieCountArgs>(
      args?: Subset<T, configurare_serieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Configurare_serieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Configurare_serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Configurare_serieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Configurare_serieAggregateArgs>(args: Subset<T, Configurare_serieAggregateArgs>): Prisma.PrismaPromise<GetConfigurare_serieAggregateType<T>>

    /**
     * Group by Configurare_serie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {configurare_serieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends configurare_serieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: configurare_serieGroupByArgs['orderBy'] }
        : { orderBy?: configurare_serieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, configurare_serieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigurare_serieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the configurare_serie model
   */
  readonly fields: configurare_serieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for configurare_serie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__configurare_serieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the configurare_serie model
   */
  interface configurare_serieFieldRefs {
    readonly id: FieldRef<"configurare_serie", 'String'>
    readonly numar_serie: FieldRef<"configurare_serie", 'Int'>
    readonly descriere: FieldRef<"configurare_serie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * configurare_serie findUnique
   */
  export type configurare_serieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * Filter, which configurare_serie to fetch.
     */
    where: configurare_serieWhereUniqueInput
  }

  /**
   * configurare_serie findUniqueOrThrow
   */
  export type configurare_serieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * Filter, which configurare_serie to fetch.
     */
    where: configurare_serieWhereUniqueInput
  }

  /**
   * configurare_serie findFirst
   */
  export type configurare_serieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * Filter, which configurare_serie to fetch.
     */
    where?: configurare_serieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configurare_series to fetch.
     */
    orderBy?: configurare_serieOrderByWithRelationInput | configurare_serieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configurare_series.
     */
    cursor?: configurare_serieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configurare_series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configurare_series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configurare_series.
     */
    distinct?: Configurare_serieScalarFieldEnum | Configurare_serieScalarFieldEnum[]
  }

  /**
   * configurare_serie findFirstOrThrow
   */
  export type configurare_serieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * Filter, which configurare_serie to fetch.
     */
    where?: configurare_serieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configurare_series to fetch.
     */
    orderBy?: configurare_serieOrderByWithRelationInput | configurare_serieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for configurare_series.
     */
    cursor?: configurare_serieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configurare_series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configurare_series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of configurare_series.
     */
    distinct?: Configurare_serieScalarFieldEnum | Configurare_serieScalarFieldEnum[]
  }

  /**
   * configurare_serie findMany
   */
  export type configurare_serieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * Filter, which configurare_series to fetch.
     */
    where?: configurare_serieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of configurare_series to fetch.
     */
    orderBy?: configurare_serieOrderByWithRelationInput | configurare_serieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing configurare_series.
     */
    cursor?: configurare_serieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` configurare_series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` configurare_series.
     */
    skip?: number
    distinct?: Configurare_serieScalarFieldEnum | Configurare_serieScalarFieldEnum[]
  }

  /**
   * configurare_serie create
   */
  export type configurare_serieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * The data needed to create a configurare_serie.
     */
    data: XOR<configurare_serieCreateInput, configurare_serieUncheckedCreateInput>
  }

  /**
   * configurare_serie createMany
   */
  export type configurare_serieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many configurare_series.
     */
    data: configurare_serieCreateManyInput | configurare_serieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configurare_serie createManyAndReturn
   */
  export type configurare_serieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * The data used to create many configurare_series.
     */
    data: configurare_serieCreateManyInput | configurare_serieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * configurare_serie update
   */
  export type configurare_serieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * The data needed to update a configurare_serie.
     */
    data: XOR<configurare_serieUpdateInput, configurare_serieUncheckedUpdateInput>
    /**
     * Choose, which configurare_serie to update.
     */
    where: configurare_serieWhereUniqueInput
  }

  /**
   * configurare_serie updateMany
   */
  export type configurare_serieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update configurare_series.
     */
    data: XOR<configurare_serieUpdateManyMutationInput, configurare_serieUncheckedUpdateManyInput>
    /**
     * Filter which configurare_series to update
     */
    where?: configurare_serieWhereInput
    /**
     * Limit how many configurare_series to update.
     */
    limit?: number
  }

  /**
   * configurare_serie updateManyAndReturn
   */
  export type configurare_serieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * The data used to update configurare_series.
     */
    data: XOR<configurare_serieUpdateManyMutationInput, configurare_serieUncheckedUpdateManyInput>
    /**
     * Filter which configurare_series to update
     */
    where?: configurare_serieWhereInput
    /**
     * Limit how many configurare_series to update.
     */
    limit?: number
  }

  /**
   * configurare_serie upsert
   */
  export type configurare_serieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * The filter to search for the configurare_serie to update in case it exists.
     */
    where: configurare_serieWhereUniqueInput
    /**
     * In case the configurare_serie found by the `where` argument doesn't exist, create a new configurare_serie with this data.
     */
    create: XOR<configurare_serieCreateInput, configurare_serieUncheckedCreateInput>
    /**
     * In case the configurare_serie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<configurare_serieUpdateInput, configurare_serieUncheckedUpdateInput>
  }

  /**
   * configurare_serie delete
   */
  export type configurare_serieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
    /**
     * Filter which configurare_serie to delete.
     */
    where: configurare_serieWhereUniqueInput
  }

  /**
   * configurare_serie deleteMany
   */
  export type configurare_serieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which configurare_series to delete
     */
    where?: configurare_serieWhereInput
    /**
     * Limit how many configurare_series to delete.
     */
    limit?: number
  }

  /**
   * configurare_serie without action
   */
  export type configurare_serieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the configurare_serie
     */
    select?: configurare_serieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the configurare_serie
     */
    omit?: configurare_serieOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Audit_logsScalarFieldEnum: {
    id: 'id',
    tabela: 'tabela',
    cheie_primara: 'cheie_primara',
    actiune: 'actiune',
    utilizator_id: 'utilizator_id',
    timestamp: 'timestamp',
    date_vechi: 'date_vechi',
    date_noi: 'date_noi',
    severitate: 'severitate',
    mesaj: 'mesaj',
    detalii_modificari: 'detalii_modificari'
  };

  export type Audit_logsScalarFieldEnum = (typeof Audit_logsScalarFieldEnum)[keyof typeof Audit_logsScalarFieldEnum]


  export const Backup_logsScalarFieldEnum: {
    id: 'id',
    data_backup: 'data_backup',
    locatie_fisier: 'locatie_fisier',
    status: 'status',
    mesaj_eroare: 'mesaj_eroare',
    created_at: 'created_at'
  };

  export type Backup_logsScalarFieldEnum = (typeof Backup_logsScalarFieldEnum)[keyof typeof Backup_logsScalarFieldEnum]


  export const DepartamenteScalarFieldEnum: {
    id: 'id',
    nume: 'nume',
    descriere: 'descriere'
  };

  export type DepartamenteScalarFieldEnum = (typeof DepartamenteScalarFieldEnum)[keyof typeof DepartamenteScalarFieldEnum]


  export const DocumenteScalarFieldEnum: {
    id: 'id',
    registru_id: 'registru_id',
    numar_inregistrare: 'numar_inregistrare',
    data: 'data',
    numar_document: 'numar_document',
    data_document: 'data_document',
    sursa: 'sursa',
    rezumat: 'rezumat',
    departament_adresat: 'departament_adresat',
    destinatar_id: 'destinatar_id',
    tip_document_id: 'tip_document_id',
    data_expedierii: 'data_expedierii',
    creat_la: 'creat_la',
    inregistrat_de: 'inregistrat_de',
    preluat_de: 'preluat_de',
    stadiu: 'stadiu'
  };

  export type DocumenteScalarFieldEnum = (typeof DocumenteScalarFieldEnum)[keyof typeof DocumenteScalarFieldEnum]


  export const NotificariScalarFieldEnum: {
    id: 'id',
    document_id: 'document_id',
    destinatar_id: 'destinatar_id',
    mesaj: 'mesaj',
    status: 'status',
    created_at: 'created_at',
    citita: 'citita'
  };

  export type NotificariScalarFieldEnum = (typeof NotificariScalarFieldEnum)[keyof typeof NotificariScalarFieldEnum]


  export const Tipuri_registruScalarFieldEnum: {
    id: 'id',
    nume: 'nume'
  };

  export type Tipuri_registruScalarFieldEnum = (typeof Tipuri_registruScalarFieldEnum)[keyof typeof Tipuri_registruScalarFieldEnum]


  export const RegistreScalarFieldEnum: {
    id: 'id',
    nume: 'nume',
    descriere: 'descriere',
    departament_id: 'departament_id',
    min_val: 'min_val',
    max_val: 'max_val',
    an: 'an',
    tip_registru_id: 'tip_registru_id'
  };

  export type RegistreScalarFieldEnum = (typeof RegistreScalarFieldEnum)[keyof typeof RegistreScalarFieldEnum]


  export const RoluriScalarFieldEnum: {
    id: 'id',
    nume: 'nume',
    descriere: 'descriere',
    culoare: 'culoare'
  };

  export type RoluriScalarFieldEnum = (typeof RoluriScalarFieldEnum)[keyof typeof RoluriScalarFieldEnum]


  export const Tipuri_documenteScalarFieldEnum: {
    id: 'id',
    nume: 'nume'
  };

  export type Tipuri_documenteScalarFieldEnum = (typeof Tipuri_documenteScalarFieldEnum)[keyof typeof Tipuri_documenteScalarFieldEnum]


  export const UtilizatoriScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    session_token: 'session_token',
    refresh_token: 'refresh_token',
    session_expires: 'session_expires',
    nume: 'nume',
    departament_id: 'departament_id',
    rol_id: 'rol_id'
  };

  export type UtilizatoriScalarFieldEnum = (typeof UtilizatoriScalarFieldEnum)[keyof typeof UtilizatoriScalarFieldEnum]


  export const Configurare_serieScalarFieldEnum: {
    id: 'id',
    numar_serie: 'numar_serie',
    descriere: 'descriere'
  };

  export type Configurare_serieScalarFieldEnum = (typeof Configurare_serieScalarFieldEnum)[keyof typeof Configurare_serieScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type audit_logsWhereInput = {
    AND?: audit_logsWhereInput | audit_logsWhereInput[]
    OR?: audit_logsWhereInput[]
    NOT?: audit_logsWhereInput | audit_logsWhereInput[]
    id?: UuidFilter<"audit_logs"> | string
    tabela?: StringFilter<"audit_logs"> | string
    cheie_primara?: StringFilter<"audit_logs"> | string
    actiune?: StringFilter<"audit_logs"> | string
    utilizator_id?: UuidNullableFilter<"audit_logs"> | string | null
    timestamp?: DateTimeNullableFilter<"audit_logs"> | Date | string | null
    date_vechi?: JsonNullableFilter<"audit_logs">
    date_noi?: JsonNullableFilter<"audit_logs">
    severitate?: StringFilter<"audit_logs"> | string
    mesaj?: StringFilter<"audit_logs"> | string
    detalii_modificari?: JsonNullableFilter<"audit_logs">
    utilizatori?: XOR<UtilizatoriNullableScalarRelationFilter, utilizatoriWhereInput> | null
  }

  export type audit_logsOrderByWithRelationInput = {
    id?: SortOrder
    tabela?: SortOrder
    cheie_primara?: SortOrder
    actiune?: SortOrder
    utilizator_id?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    date_vechi?: SortOrderInput | SortOrder
    date_noi?: SortOrderInput | SortOrder
    severitate?: SortOrder
    mesaj?: SortOrder
    detalii_modificari?: SortOrderInput | SortOrder
    utilizatori?: utilizatoriOrderByWithRelationInput
  }

  export type audit_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: audit_logsWhereInput | audit_logsWhereInput[]
    OR?: audit_logsWhereInput[]
    NOT?: audit_logsWhereInput | audit_logsWhereInput[]
    tabela?: StringFilter<"audit_logs"> | string
    cheie_primara?: StringFilter<"audit_logs"> | string
    actiune?: StringFilter<"audit_logs"> | string
    utilizator_id?: UuidNullableFilter<"audit_logs"> | string | null
    timestamp?: DateTimeNullableFilter<"audit_logs"> | Date | string | null
    date_vechi?: JsonNullableFilter<"audit_logs">
    date_noi?: JsonNullableFilter<"audit_logs">
    severitate?: StringFilter<"audit_logs"> | string
    mesaj?: StringFilter<"audit_logs"> | string
    detalii_modificari?: JsonNullableFilter<"audit_logs">
    utilizatori?: XOR<UtilizatoriNullableScalarRelationFilter, utilizatoriWhereInput> | null
  }, "id">

  export type audit_logsOrderByWithAggregationInput = {
    id?: SortOrder
    tabela?: SortOrder
    cheie_primara?: SortOrder
    actiune?: SortOrder
    utilizator_id?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    date_vechi?: SortOrderInput | SortOrder
    date_noi?: SortOrderInput | SortOrder
    severitate?: SortOrder
    mesaj?: SortOrder
    detalii_modificari?: SortOrderInput | SortOrder
    _count?: audit_logsCountOrderByAggregateInput
    _max?: audit_logsMaxOrderByAggregateInput
    _min?: audit_logsMinOrderByAggregateInput
  }

  export type audit_logsScalarWhereWithAggregatesInput = {
    AND?: audit_logsScalarWhereWithAggregatesInput | audit_logsScalarWhereWithAggregatesInput[]
    OR?: audit_logsScalarWhereWithAggregatesInput[]
    NOT?: audit_logsScalarWhereWithAggregatesInput | audit_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"audit_logs"> | string
    tabela?: StringWithAggregatesFilter<"audit_logs"> | string
    cheie_primara?: StringWithAggregatesFilter<"audit_logs"> | string
    actiune?: StringWithAggregatesFilter<"audit_logs"> | string
    utilizator_id?: UuidNullableWithAggregatesFilter<"audit_logs"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"audit_logs"> | Date | string | null
    date_vechi?: JsonNullableWithAggregatesFilter<"audit_logs">
    date_noi?: JsonNullableWithAggregatesFilter<"audit_logs">
    severitate?: StringWithAggregatesFilter<"audit_logs"> | string
    mesaj?: StringWithAggregatesFilter<"audit_logs"> | string
    detalii_modificari?: JsonNullableWithAggregatesFilter<"audit_logs">
  }

  export type backup_logsWhereInput = {
    AND?: backup_logsWhereInput | backup_logsWhereInput[]
    OR?: backup_logsWhereInput[]
    NOT?: backup_logsWhereInput | backup_logsWhereInput[]
    id?: UuidFilter<"backup_logs"> | string
    data_backup?: DateTimeFilter<"backup_logs"> | Date | string
    locatie_fisier?: StringFilter<"backup_logs"> | string
    status?: StringFilter<"backup_logs"> | string
    mesaj_eroare?: StringNullableFilter<"backup_logs"> | string | null
    created_at?: DateTimeNullableFilter<"backup_logs"> | Date | string | null
  }

  export type backup_logsOrderByWithRelationInput = {
    id?: SortOrder
    data_backup?: SortOrder
    locatie_fisier?: SortOrder
    status?: SortOrder
    mesaj_eroare?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
  }

  export type backup_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: backup_logsWhereInput | backup_logsWhereInput[]
    OR?: backup_logsWhereInput[]
    NOT?: backup_logsWhereInput | backup_logsWhereInput[]
    data_backup?: DateTimeFilter<"backup_logs"> | Date | string
    locatie_fisier?: StringFilter<"backup_logs"> | string
    status?: StringFilter<"backup_logs"> | string
    mesaj_eroare?: StringNullableFilter<"backup_logs"> | string | null
    created_at?: DateTimeNullableFilter<"backup_logs"> | Date | string | null
  }, "id">

  export type backup_logsOrderByWithAggregationInput = {
    id?: SortOrder
    data_backup?: SortOrder
    locatie_fisier?: SortOrder
    status?: SortOrder
    mesaj_eroare?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: backup_logsCountOrderByAggregateInput
    _max?: backup_logsMaxOrderByAggregateInput
    _min?: backup_logsMinOrderByAggregateInput
  }

  export type backup_logsScalarWhereWithAggregatesInput = {
    AND?: backup_logsScalarWhereWithAggregatesInput | backup_logsScalarWhereWithAggregatesInput[]
    OR?: backup_logsScalarWhereWithAggregatesInput[]
    NOT?: backup_logsScalarWhereWithAggregatesInput | backup_logsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"backup_logs"> | string
    data_backup?: DateTimeWithAggregatesFilter<"backup_logs"> | Date | string
    locatie_fisier?: StringWithAggregatesFilter<"backup_logs"> | string
    status?: StringWithAggregatesFilter<"backup_logs"> | string
    mesaj_eroare?: StringNullableWithAggregatesFilter<"backup_logs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"backup_logs"> | Date | string | null
  }

  export type departamenteWhereInput = {
    AND?: departamenteWhereInput | departamenteWhereInput[]
    OR?: departamenteWhereInput[]
    NOT?: departamenteWhereInput | departamenteWhereInput[]
    id?: UuidFilter<"departamente"> | string
    nume?: StringFilter<"departamente"> | string
    descriere?: StringFilter<"departamente"> | string
    documente?: DocumenteListRelationFilter
    registre?: RegistreListRelationFilter
    utilizatori?: UtilizatoriListRelationFilter
  }

  export type departamenteOrderByWithRelationInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    documente?: documenteOrderByRelationAggregateInput
    registre?: registreOrderByRelationAggregateInput
    utilizatori?: utilizatoriOrderByRelationAggregateInput
  }

  export type departamenteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nume?: string
    AND?: departamenteWhereInput | departamenteWhereInput[]
    OR?: departamenteWhereInput[]
    NOT?: departamenteWhereInput | departamenteWhereInput[]
    descriere?: StringFilter<"departamente"> | string
    documente?: DocumenteListRelationFilter
    registre?: RegistreListRelationFilter
    utilizatori?: UtilizatoriListRelationFilter
  }, "id" | "nume">

  export type departamenteOrderByWithAggregationInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    _count?: departamenteCountOrderByAggregateInput
    _max?: departamenteMaxOrderByAggregateInput
    _min?: departamenteMinOrderByAggregateInput
  }

  export type departamenteScalarWhereWithAggregatesInput = {
    AND?: departamenteScalarWhereWithAggregatesInput | departamenteScalarWhereWithAggregatesInput[]
    OR?: departamenteScalarWhereWithAggregatesInput[]
    NOT?: departamenteScalarWhereWithAggregatesInput | departamenteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"departamente"> | string
    nume?: StringWithAggregatesFilter<"departamente"> | string
    descriere?: StringWithAggregatesFilter<"departamente"> | string
  }

  export type documenteWhereInput = {
    AND?: documenteWhereInput | documenteWhereInput[]
    OR?: documenteWhereInput[]
    NOT?: documenteWhereInput | documenteWhereInput[]
    id?: UuidFilter<"documente"> | string
    registru_id?: UuidFilter<"documente"> | string
    numar_inregistrare?: IntNullableFilter<"documente"> | number | null
    data?: DateTimeFilter<"documente"> | Date | string
    numar_document?: StringFilter<"documente"> | string
    data_document?: DateTimeFilter<"documente"> | Date | string
    sursa?: StringFilter<"documente"> | string
    rezumat?: StringFilter<"documente"> | string
    departament_adresat?: UuidNullableFilter<"documente"> | string | null
    destinatar_id?: UuidNullableFilter<"documente"> | string | null
    tip_document_id?: UuidFilter<"documente"> | string
    data_expedierii?: DateTimeFilter<"documente"> | Date | string
    creat_la?: DateTimeNullableFilter<"documente"> | Date | string | null
    inregistrat_de?: UuidNullableFilter<"documente"> | string | null
    preluat_de?: UuidNullableFilter<"documente"> | string | null
    stadiu?: StringFilter<"documente"> | string
    departamente?: XOR<DepartamenteNullableScalarRelationFilter, departamenteWhereInput> | null
    utilizatori_documente_destinatar_idToutilizatori?: XOR<UtilizatoriNullableScalarRelationFilter, utilizatoriWhereInput> | null
    utilizatori_documente_inregistrat_deToutilizatori?: XOR<UtilizatoriNullableScalarRelationFilter, utilizatoriWhereInput> | null
    utilizatori_documente_preluat_deToutilizatori?: XOR<UtilizatoriNullableScalarRelationFilter, utilizatoriWhereInput> | null
    registre?: XOR<RegistreScalarRelationFilter, registreWhereInput>
    tipuri_documente?: XOR<Tipuri_documenteScalarRelationFilter, tipuri_documenteWhereInput>
    notificari?: NotificariListRelationFilter
  }

  export type documenteOrderByWithRelationInput = {
    id?: SortOrder
    registru_id?: SortOrder
    numar_inregistrare?: SortOrderInput | SortOrder
    data?: SortOrder
    numar_document?: SortOrder
    data_document?: SortOrder
    sursa?: SortOrder
    rezumat?: SortOrder
    departament_adresat?: SortOrderInput | SortOrder
    destinatar_id?: SortOrderInput | SortOrder
    tip_document_id?: SortOrder
    data_expedierii?: SortOrder
    creat_la?: SortOrderInput | SortOrder
    inregistrat_de?: SortOrderInput | SortOrder
    preluat_de?: SortOrderInput | SortOrder
    stadiu?: SortOrder
    departamente?: departamenteOrderByWithRelationInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriOrderByWithRelationInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriOrderByWithRelationInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriOrderByWithRelationInput
    registre?: registreOrderByWithRelationInput
    tipuri_documente?: tipuri_documenteOrderByWithRelationInput
    notificari?: notificariOrderByRelationAggregateInput
  }

  export type documenteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    registru_id_numar_inregistrare?: documenteRegistru_idNumar_inregistrareCompoundUniqueInput
    AND?: documenteWhereInput | documenteWhereInput[]
    OR?: documenteWhereInput[]
    NOT?: documenteWhereInput | documenteWhereInput[]
    registru_id?: UuidFilter<"documente"> | string
    numar_inregistrare?: IntNullableFilter<"documente"> | number | null
    data?: DateTimeFilter<"documente"> | Date | string
    numar_document?: StringFilter<"documente"> | string
    data_document?: DateTimeFilter<"documente"> | Date | string
    sursa?: StringFilter<"documente"> | string
    rezumat?: StringFilter<"documente"> | string
    departament_adresat?: UuidNullableFilter<"documente"> | string | null
    destinatar_id?: UuidNullableFilter<"documente"> | string | null
    tip_document_id?: UuidFilter<"documente"> | string
    data_expedierii?: DateTimeFilter<"documente"> | Date | string
    creat_la?: DateTimeNullableFilter<"documente"> | Date | string | null
    inregistrat_de?: UuidNullableFilter<"documente"> | string | null
    preluat_de?: UuidNullableFilter<"documente"> | string | null
    stadiu?: StringFilter<"documente"> | string
    departamente?: XOR<DepartamenteNullableScalarRelationFilter, departamenteWhereInput> | null
    utilizatori_documente_destinatar_idToutilizatori?: XOR<UtilizatoriNullableScalarRelationFilter, utilizatoriWhereInput> | null
    utilizatori_documente_inregistrat_deToutilizatori?: XOR<UtilizatoriNullableScalarRelationFilter, utilizatoriWhereInput> | null
    utilizatori_documente_preluat_deToutilizatori?: XOR<UtilizatoriNullableScalarRelationFilter, utilizatoriWhereInput> | null
    registre?: XOR<RegistreScalarRelationFilter, registreWhereInput>
    tipuri_documente?: XOR<Tipuri_documenteScalarRelationFilter, tipuri_documenteWhereInput>
    notificari?: NotificariListRelationFilter
  }, "id" | "registru_id_numar_inregistrare">

  export type documenteOrderByWithAggregationInput = {
    id?: SortOrder
    registru_id?: SortOrder
    numar_inregistrare?: SortOrderInput | SortOrder
    data?: SortOrder
    numar_document?: SortOrder
    data_document?: SortOrder
    sursa?: SortOrder
    rezumat?: SortOrder
    departament_adresat?: SortOrderInput | SortOrder
    destinatar_id?: SortOrderInput | SortOrder
    tip_document_id?: SortOrder
    data_expedierii?: SortOrder
    creat_la?: SortOrderInput | SortOrder
    inregistrat_de?: SortOrderInput | SortOrder
    preluat_de?: SortOrderInput | SortOrder
    stadiu?: SortOrder
    _count?: documenteCountOrderByAggregateInput
    _avg?: documenteAvgOrderByAggregateInput
    _max?: documenteMaxOrderByAggregateInput
    _min?: documenteMinOrderByAggregateInput
    _sum?: documenteSumOrderByAggregateInput
  }

  export type documenteScalarWhereWithAggregatesInput = {
    AND?: documenteScalarWhereWithAggregatesInput | documenteScalarWhereWithAggregatesInput[]
    OR?: documenteScalarWhereWithAggregatesInput[]
    NOT?: documenteScalarWhereWithAggregatesInput | documenteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"documente"> | string
    registru_id?: UuidWithAggregatesFilter<"documente"> | string
    numar_inregistrare?: IntNullableWithAggregatesFilter<"documente"> | number | null
    data?: DateTimeWithAggregatesFilter<"documente"> | Date | string
    numar_document?: StringWithAggregatesFilter<"documente"> | string
    data_document?: DateTimeWithAggregatesFilter<"documente"> | Date | string
    sursa?: StringWithAggregatesFilter<"documente"> | string
    rezumat?: StringWithAggregatesFilter<"documente"> | string
    departament_adresat?: UuidNullableWithAggregatesFilter<"documente"> | string | null
    destinatar_id?: UuidNullableWithAggregatesFilter<"documente"> | string | null
    tip_document_id?: UuidWithAggregatesFilter<"documente"> | string
    data_expedierii?: DateTimeWithAggregatesFilter<"documente"> | Date | string
    creat_la?: DateTimeNullableWithAggregatesFilter<"documente"> | Date | string | null
    inregistrat_de?: UuidNullableWithAggregatesFilter<"documente"> | string | null
    preluat_de?: UuidNullableWithAggregatesFilter<"documente"> | string | null
    stadiu?: StringWithAggregatesFilter<"documente"> | string
  }

  export type notificariWhereInput = {
    AND?: notificariWhereInput | notificariWhereInput[]
    OR?: notificariWhereInput[]
    NOT?: notificariWhereInput | notificariWhereInput[]
    id?: UuidFilter<"notificari"> | string
    document_id?: UuidNullableFilter<"notificari"> | string | null
    destinatar_id?: UuidFilter<"notificari"> | string
    mesaj?: StringFilter<"notificari"> | string
    status?: StringFilter<"notificari"> | string
    created_at?: DateTimeNullableFilter<"notificari"> | Date | string | null
    citita?: BoolFilter<"notificari"> | boolean
    utilizatori?: XOR<UtilizatoriScalarRelationFilter, utilizatoriWhereInput>
    documente?: XOR<DocumenteNullableScalarRelationFilter, documenteWhereInput> | null
  }

  export type notificariOrderByWithRelationInput = {
    id?: SortOrder
    document_id?: SortOrderInput | SortOrder
    destinatar_id?: SortOrder
    mesaj?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    citita?: SortOrder
    utilizatori?: utilizatoriOrderByWithRelationInput
    documente?: documenteOrderByWithRelationInput
  }

  export type notificariWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notificariWhereInput | notificariWhereInput[]
    OR?: notificariWhereInput[]
    NOT?: notificariWhereInput | notificariWhereInput[]
    document_id?: UuidNullableFilter<"notificari"> | string | null
    destinatar_id?: UuidFilter<"notificari"> | string
    mesaj?: StringFilter<"notificari"> | string
    status?: StringFilter<"notificari"> | string
    created_at?: DateTimeNullableFilter<"notificari"> | Date | string | null
    citita?: BoolFilter<"notificari"> | boolean
    utilizatori?: XOR<UtilizatoriScalarRelationFilter, utilizatoriWhereInput>
    documente?: XOR<DocumenteNullableScalarRelationFilter, documenteWhereInput> | null
  }, "id">

  export type notificariOrderByWithAggregationInput = {
    id?: SortOrder
    document_id?: SortOrderInput | SortOrder
    destinatar_id?: SortOrder
    mesaj?: SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    citita?: SortOrder
    _count?: notificariCountOrderByAggregateInput
    _max?: notificariMaxOrderByAggregateInput
    _min?: notificariMinOrderByAggregateInput
  }

  export type notificariScalarWhereWithAggregatesInput = {
    AND?: notificariScalarWhereWithAggregatesInput | notificariScalarWhereWithAggregatesInput[]
    OR?: notificariScalarWhereWithAggregatesInput[]
    NOT?: notificariScalarWhereWithAggregatesInput | notificariScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"notificari"> | string
    document_id?: UuidNullableWithAggregatesFilter<"notificari"> | string | null
    destinatar_id?: UuidWithAggregatesFilter<"notificari"> | string
    mesaj?: StringWithAggregatesFilter<"notificari"> | string
    status?: StringWithAggregatesFilter<"notificari"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"notificari"> | Date | string | null
    citita?: BoolWithAggregatesFilter<"notificari"> | boolean
  }

  export type tipuri_registruWhereInput = {
    AND?: tipuri_registruWhereInput | tipuri_registruWhereInput[]
    OR?: tipuri_registruWhereInput[]
    NOT?: tipuri_registruWhereInput | tipuri_registruWhereInput[]
    id?: UuidFilter<"tipuri_registru"> | string
    nume?: StringFilter<"tipuri_registru"> | string
    registre?: RegistreListRelationFilter
  }

  export type tipuri_registruOrderByWithRelationInput = {
    id?: SortOrder
    nume?: SortOrder
    registre?: registreOrderByRelationAggregateInput
  }

  export type tipuri_registruWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nume?: string
    AND?: tipuri_registruWhereInput | tipuri_registruWhereInput[]
    OR?: tipuri_registruWhereInput[]
    NOT?: tipuri_registruWhereInput | tipuri_registruWhereInput[]
    registre?: RegistreListRelationFilter
  }, "id" | "nume">

  export type tipuri_registruOrderByWithAggregationInput = {
    id?: SortOrder
    nume?: SortOrder
    _count?: tipuri_registruCountOrderByAggregateInput
    _max?: tipuri_registruMaxOrderByAggregateInput
    _min?: tipuri_registruMinOrderByAggregateInput
  }

  export type tipuri_registruScalarWhereWithAggregatesInput = {
    AND?: tipuri_registruScalarWhereWithAggregatesInput | tipuri_registruScalarWhereWithAggregatesInput[]
    OR?: tipuri_registruScalarWhereWithAggregatesInput[]
    NOT?: tipuri_registruScalarWhereWithAggregatesInput | tipuri_registruScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tipuri_registru"> | string
    nume?: StringWithAggregatesFilter<"tipuri_registru"> | string
  }

  export type registreWhereInput = {
    AND?: registreWhereInput | registreWhereInput[]
    OR?: registreWhereInput[]
    NOT?: registreWhereInput | registreWhereInput[]
    id?: UuidFilter<"registre"> | string
    nume?: StringFilter<"registre"> | string
    descriere?: StringFilter<"registre"> | string
    departament_id?: UuidFilter<"registre"> | string
    min_val?: IntNullableFilter<"registre"> | number | null
    max_val?: IntNullableFilter<"registre"> | number | null
    an?: IntFilter<"registre"> | number
    tip_registru_id?: UuidFilter<"registre"> | string
    documente?: DocumenteListRelationFilter
    departamente?: XOR<DepartamenteScalarRelationFilter, departamenteWhereInput>
    tip_registru?: XOR<Tipuri_registruScalarRelationFilter, tipuri_registruWhereInput>
  }

  export type registreOrderByWithRelationInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    departament_id?: SortOrder
    min_val?: SortOrderInput | SortOrder
    max_val?: SortOrderInput | SortOrder
    an?: SortOrder
    tip_registru_id?: SortOrder
    documente?: documenteOrderByRelationAggregateInput
    departamente?: departamenteOrderByWithRelationInput
    tip_registru?: tipuri_registruOrderByWithRelationInput
  }

  export type registreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nume_departament_id_an?: registreNumeDepartament_idAnCompoundUniqueInput
    AND?: registreWhereInput | registreWhereInput[]
    OR?: registreWhereInput[]
    NOT?: registreWhereInput | registreWhereInput[]
    nume?: StringFilter<"registre"> | string
    descriere?: StringFilter<"registre"> | string
    departament_id?: UuidFilter<"registre"> | string
    min_val?: IntNullableFilter<"registre"> | number | null
    max_val?: IntNullableFilter<"registre"> | number | null
    an?: IntFilter<"registre"> | number
    tip_registru_id?: UuidFilter<"registre"> | string
    documente?: DocumenteListRelationFilter
    departamente?: XOR<DepartamenteScalarRelationFilter, departamenteWhereInput>
    tip_registru?: XOR<Tipuri_registruScalarRelationFilter, tipuri_registruWhereInput>
  }, "id" | "nume_departament_id_an">

  export type registreOrderByWithAggregationInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    departament_id?: SortOrder
    min_val?: SortOrderInput | SortOrder
    max_val?: SortOrderInput | SortOrder
    an?: SortOrder
    tip_registru_id?: SortOrder
    _count?: registreCountOrderByAggregateInput
    _avg?: registreAvgOrderByAggregateInput
    _max?: registreMaxOrderByAggregateInput
    _min?: registreMinOrderByAggregateInput
    _sum?: registreSumOrderByAggregateInput
  }

  export type registreScalarWhereWithAggregatesInput = {
    AND?: registreScalarWhereWithAggregatesInput | registreScalarWhereWithAggregatesInput[]
    OR?: registreScalarWhereWithAggregatesInput[]
    NOT?: registreScalarWhereWithAggregatesInput | registreScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"registre"> | string
    nume?: StringWithAggregatesFilter<"registre"> | string
    descriere?: StringWithAggregatesFilter<"registre"> | string
    departament_id?: UuidWithAggregatesFilter<"registre"> | string
    min_val?: IntNullableWithAggregatesFilter<"registre"> | number | null
    max_val?: IntNullableWithAggregatesFilter<"registre"> | number | null
    an?: IntWithAggregatesFilter<"registre"> | number
    tip_registru_id?: UuidWithAggregatesFilter<"registre"> | string
  }

  export type roluriWhereInput = {
    AND?: roluriWhereInput | roluriWhereInput[]
    OR?: roluriWhereInput[]
    NOT?: roluriWhereInput | roluriWhereInput[]
    id?: UuidFilter<"roluri"> | string
    nume?: StringFilter<"roluri"> | string
    descriere?: StringFilter<"roluri"> | string
    culoare?: StringNullableFilter<"roluri"> | string | null
    utilizatori?: UtilizatoriListRelationFilter
  }

  export type roluriOrderByWithRelationInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    culoare?: SortOrderInput | SortOrder
    utilizatori?: utilizatoriOrderByRelationAggregateInput
  }

  export type roluriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nume?: string
    AND?: roluriWhereInput | roluriWhereInput[]
    OR?: roluriWhereInput[]
    NOT?: roluriWhereInput | roluriWhereInput[]
    descriere?: StringFilter<"roluri"> | string
    culoare?: StringNullableFilter<"roluri"> | string | null
    utilizatori?: UtilizatoriListRelationFilter
  }, "id" | "nume">

  export type roluriOrderByWithAggregationInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    culoare?: SortOrderInput | SortOrder
    _count?: roluriCountOrderByAggregateInput
    _max?: roluriMaxOrderByAggregateInput
    _min?: roluriMinOrderByAggregateInput
  }

  export type roluriScalarWhereWithAggregatesInput = {
    AND?: roluriScalarWhereWithAggregatesInput | roluriScalarWhereWithAggregatesInput[]
    OR?: roluriScalarWhereWithAggregatesInput[]
    NOT?: roluriScalarWhereWithAggregatesInput | roluriScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"roluri"> | string
    nume?: StringWithAggregatesFilter<"roluri"> | string
    descriere?: StringWithAggregatesFilter<"roluri"> | string
    culoare?: StringNullableWithAggregatesFilter<"roluri"> | string | null
  }

  export type tipuri_documenteWhereInput = {
    AND?: tipuri_documenteWhereInput | tipuri_documenteWhereInput[]
    OR?: tipuri_documenteWhereInput[]
    NOT?: tipuri_documenteWhereInput | tipuri_documenteWhereInput[]
    id?: UuidFilter<"tipuri_documente"> | string
    nume?: StringFilter<"tipuri_documente"> | string
    documente?: DocumenteListRelationFilter
  }

  export type tipuri_documenteOrderByWithRelationInput = {
    id?: SortOrder
    nume?: SortOrder
    documente?: documenteOrderByRelationAggregateInput
  }

  export type tipuri_documenteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nume?: string
    AND?: tipuri_documenteWhereInput | tipuri_documenteWhereInput[]
    OR?: tipuri_documenteWhereInput[]
    NOT?: tipuri_documenteWhereInput | tipuri_documenteWhereInput[]
    documente?: DocumenteListRelationFilter
  }, "id" | "nume">

  export type tipuri_documenteOrderByWithAggregationInput = {
    id?: SortOrder
    nume?: SortOrder
    _count?: tipuri_documenteCountOrderByAggregateInput
    _max?: tipuri_documenteMaxOrderByAggregateInput
    _min?: tipuri_documenteMinOrderByAggregateInput
  }

  export type tipuri_documenteScalarWhereWithAggregatesInput = {
    AND?: tipuri_documenteScalarWhereWithAggregatesInput | tipuri_documenteScalarWhereWithAggregatesInput[]
    OR?: tipuri_documenteScalarWhereWithAggregatesInput[]
    NOT?: tipuri_documenteScalarWhereWithAggregatesInput | tipuri_documenteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"tipuri_documente"> | string
    nume?: StringWithAggregatesFilter<"tipuri_documente"> | string
  }

  export type utilizatoriWhereInput = {
    AND?: utilizatoriWhereInput | utilizatoriWhereInput[]
    OR?: utilizatoriWhereInput[]
    NOT?: utilizatoriWhereInput | utilizatoriWhereInput[]
    id?: UuidFilter<"utilizatori"> | string
    email?: StringFilter<"utilizatori"> | string
    password_hash?: StringFilter<"utilizatori"> | string
    session_token?: StringNullableFilter<"utilizatori"> | string | null
    refresh_token?: StringNullableFilter<"utilizatori"> | string | null
    session_expires?: DateTimeNullableFilter<"utilizatori"> | Date | string | null
    nume?: StringFilter<"utilizatori"> | string
    departament_id?: UuidNullableFilter<"utilizatori"> | string | null
    rol_id?: UuidNullableFilter<"utilizatori"> | string | null
    audit_logs?: Audit_logsListRelationFilter
    documente_documente_destinatar_idToutilizatori?: DocumenteListRelationFilter
    documente_documente_inregistrat_deToutilizatori?: DocumenteListRelationFilter
    documente_documente_preluat_deToutilizatori?: DocumenteListRelationFilter
    notificari?: NotificariListRelationFilter
    departamente?: XOR<DepartamenteNullableScalarRelationFilter, departamenteWhereInput> | null
    roluri?: XOR<RoluriNullableScalarRelationFilter, roluriWhereInput> | null
  }

  export type utilizatoriOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    session_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    session_expires?: SortOrderInput | SortOrder
    nume?: SortOrder
    departament_id?: SortOrderInput | SortOrder
    rol_id?: SortOrderInput | SortOrder
    audit_logs?: audit_logsOrderByRelationAggregateInput
    documente_documente_destinatar_idToutilizatori?: documenteOrderByRelationAggregateInput
    documente_documente_inregistrat_deToutilizatori?: documenteOrderByRelationAggregateInput
    documente_documente_preluat_deToutilizatori?: documenteOrderByRelationAggregateInput
    notificari?: notificariOrderByRelationAggregateInput
    departamente?: departamenteOrderByWithRelationInput
    roluri?: roluriOrderByWithRelationInput
  }

  export type utilizatoriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: utilizatoriWhereInput | utilizatoriWhereInput[]
    OR?: utilizatoriWhereInput[]
    NOT?: utilizatoriWhereInput | utilizatoriWhereInput[]
    password_hash?: StringFilter<"utilizatori"> | string
    session_token?: StringNullableFilter<"utilizatori"> | string | null
    refresh_token?: StringNullableFilter<"utilizatori"> | string | null
    session_expires?: DateTimeNullableFilter<"utilizatori"> | Date | string | null
    nume?: StringFilter<"utilizatori"> | string
    departament_id?: UuidNullableFilter<"utilizatori"> | string | null
    rol_id?: UuidNullableFilter<"utilizatori"> | string | null
    audit_logs?: Audit_logsListRelationFilter
    documente_documente_destinatar_idToutilizatori?: DocumenteListRelationFilter
    documente_documente_inregistrat_deToutilizatori?: DocumenteListRelationFilter
    documente_documente_preluat_deToutilizatori?: DocumenteListRelationFilter
    notificari?: NotificariListRelationFilter
    departamente?: XOR<DepartamenteNullableScalarRelationFilter, departamenteWhereInput> | null
    roluri?: XOR<RoluriNullableScalarRelationFilter, roluriWhereInput> | null
  }, "id" | "email">

  export type utilizatoriOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    session_token?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    session_expires?: SortOrderInput | SortOrder
    nume?: SortOrder
    departament_id?: SortOrderInput | SortOrder
    rol_id?: SortOrderInput | SortOrder
    _count?: utilizatoriCountOrderByAggregateInput
    _max?: utilizatoriMaxOrderByAggregateInput
    _min?: utilizatoriMinOrderByAggregateInput
  }

  export type utilizatoriScalarWhereWithAggregatesInput = {
    AND?: utilizatoriScalarWhereWithAggregatesInput | utilizatoriScalarWhereWithAggregatesInput[]
    OR?: utilizatoriScalarWhereWithAggregatesInput[]
    NOT?: utilizatoriScalarWhereWithAggregatesInput | utilizatoriScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"utilizatori"> | string
    email?: StringWithAggregatesFilter<"utilizatori"> | string
    password_hash?: StringWithAggregatesFilter<"utilizatori"> | string
    session_token?: StringNullableWithAggregatesFilter<"utilizatori"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"utilizatori"> | string | null
    session_expires?: DateTimeNullableWithAggregatesFilter<"utilizatori"> | Date | string | null
    nume?: StringWithAggregatesFilter<"utilizatori"> | string
    departament_id?: UuidNullableWithAggregatesFilter<"utilizatori"> | string | null
    rol_id?: UuidNullableWithAggregatesFilter<"utilizatori"> | string | null
  }

  export type configurare_serieWhereInput = {
    AND?: configurare_serieWhereInput | configurare_serieWhereInput[]
    OR?: configurare_serieWhereInput[]
    NOT?: configurare_serieWhereInput | configurare_serieWhereInput[]
    id?: UuidFilter<"configurare_serie"> | string
    numar_serie?: IntFilter<"configurare_serie"> | number
    descriere?: StringNullableFilter<"configurare_serie"> | string | null
  }

  export type configurare_serieOrderByWithRelationInput = {
    id?: SortOrder
    numar_serie?: SortOrder
    descriere?: SortOrderInput | SortOrder
  }

  export type configurare_serieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: configurare_serieWhereInput | configurare_serieWhereInput[]
    OR?: configurare_serieWhereInput[]
    NOT?: configurare_serieWhereInput | configurare_serieWhereInput[]
    numar_serie?: IntFilter<"configurare_serie"> | number
    descriere?: StringNullableFilter<"configurare_serie"> | string | null
  }, "id">

  export type configurare_serieOrderByWithAggregationInput = {
    id?: SortOrder
    numar_serie?: SortOrder
    descriere?: SortOrderInput | SortOrder
    _count?: configurare_serieCountOrderByAggregateInput
    _avg?: configurare_serieAvgOrderByAggregateInput
    _max?: configurare_serieMaxOrderByAggregateInput
    _min?: configurare_serieMinOrderByAggregateInput
    _sum?: configurare_serieSumOrderByAggregateInput
  }

  export type configurare_serieScalarWhereWithAggregatesInput = {
    AND?: configurare_serieScalarWhereWithAggregatesInput | configurare_serieScalarWhereWithAggregatesInput[]
    OR?: configurare_serieScalarWhereWithAggregatesInput[]
    NOT?: configurare_serieScalarWhereWithAggregatesInput | configurare_serieScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"configurare_serie"> | string
    numar_serie?: IntWithAggregatesFilter<"configurare_serie"> | number
    descriere?: StringNullableWithAggregatesFilter<"configurare_serie"> | string | null
  }

  export type audit_logsCreateInput = {
    id?: string
    tabela: string
    cheie_primara: string
    actiune: string
    timestamp?: Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: string
    mesaj?: string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
    utilizatori?: utilizatoriCreateNestedOneWithoutAudit_logsInput
  }

  export type audit_logsUncheckedCreateInput = {
    id?: string
    tabela: string
    cheie_primara: string
    actiune: string
    utilizator_id?: string | null
    timestamp?: Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: string
    mesaj?: string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type audit_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabela?: StringFieldUpdateOperationsInput | string
    cheie_primara?: StringFieldUpdateOperationsInput | string
    actiune?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
    utilizatori?: utilizatoriUpdateOneWithoutAudit_logsNestedInput
  }

  export type audit_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabela?: StringFieldUpdateOperationsInput | string
    cheie_primara?: StringFieldUpdateOperationsInput | string
    actiune?: StringFieldUpdateOperationsInput | string
    utilizator_id?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type audit_logsCreateManyInput = {
    id?: string
    tabela: string
    cheie_primara: string
    actiune: string
    utilizator_id?: string | null
    timestamp?: Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: string
    mesaj?: string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type audit_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabela?: StringFieldUpdateOperationsInput | string
    cheie_primara?: StringFieldUpdateOperationsInput | string
    actiune?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type audit_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabela?: StringFieldUpdateOperationsInput | string
    cheie_primara?: StringFieldUpdateOperationsInput | string
    actiune?: StringFieldUpdateOperationsInput | string
    utilizator_id?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type backup_logsCreateInput = {
    id?: string
    data_backup?: Date | string
    locatie_fisier: string
    status: string
    mesaj_eroare?: string | null
    created_at?: Date | string | null
  }

  export type backup_logsUncheckedCreateInput = {
    id?: string
    data_backup?: Date | string
    locatie_fisier: string
    status: string
    mesaj_eroare?: string | null
    created_at?: Date | string | null
  }

  export type backup_logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_backup?: DateTimeFieldUpdateOperationsInput | Date | string
    locatie_fisier?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mesaj_eroare?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type backup_logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_backup?: DateTimeFieldUpdateOperationsInput | Date | string
    locatie_fisier?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mesaj_eroare?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type backup_logsCreateManyInput = {
    id?: string
    data_backup?: Date | string
    locatie_fisier: string
    status: string
    mesaj_eroare?: string | null
    created_at?: Date | string | null
  }

  export type backup_logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_backup?: DateTimeFieldUpdateOperationsInput | Date | string
    locatie_fisier?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mesaj_eroare?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type backup_logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_backup?: DateTimeFieldUpdateOperationsInput | Date | string
    locatie_fisier?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mesaj_eroare?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type departamenteCreateInput = {
    id?: string
    nume: string
    descriere: string
    documente?: documenteCreateNestedManyWithoutDepartamenteInput
    registre?: registreCreateNestedManyWithoutDepartamenteInput
    utilizatori?: utilizatoriCreateNestedManyWithoutDepartamenteInput
  }

  export type departamenteUncheckedCreateInput = {
    id?: string
    nume: string
    descriere: string
    documente?: documenteUncheckedCreateNestedManyWithoutDepartamenteInput
    registre?: registreUncheckedCreateNestedManyWithoutDepartamenteInput
    utilizatori?: utilizatoriUncheckedCreateNestedManyWithoutDepartamenteInput
  }

  export type departamenteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    documente?: documenteUpdateManyWithoutDepartamenteNestedInput
    registre?: registreUpdateManyWithoutDepartamenteNestedInput
    utilizatori?: utilizatoriUpdateManyWithoutDepartamenteNestedInput
  }

  export type departamenteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    documente?: documenteUncheckedUpdateManyWithoutDepartamenteNestedInput
    registre?: registreUncheckedUpdateManyWithoutDepartamenteNestedInput
    utilizatori?: utilizatoriUncheckedUpdateManyWithoutDepartamenteNestedInput
  }

  export type departamenteCreateManyInput = {
    id?: string
    nume: string
    descriere: string
  }

  export type departamenteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
  }

  export type departamenteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
  }

  export type documenteCreateInput = {
    id?: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    stadiu?: string
    departamente?: departamenteCreateNestedOneWithoutDocumenteInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_destinatar_idToutilizatoriInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_inregistrat_deToutilizatoriInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_preluat_deToutilizatoriInput
    registre: registreCreateNestedOneWithoutDocumenteInput
    tipuri_documente: tipuri_documenteCreateNestedOneWithoutDocumenteInput
    notificari?: notificariCreateNestedManyWithoutDocumenteInput
  }

  export type documenteUncheckedCreateInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
    notificari?: notificariUncheckedCreateNestedManyWithoutDocumenteInput
  }

  export type documenteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    departamente?: departamenteUpdateOneWithoutDocumenteNestedInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_destinatar_idToutilizatoriNestedInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_inregistrat_deToutilizatoriNestedInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_preluat_deToutilizatoriNestedInput
    registre?: registreUpdateOneRequiredWithoutDocumenteNestedInput
    tipuri_documente?: tipuri_documenteUpdateOneRequiredWithoutDocumenteNestedInput
    notificari?: notificariUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    notificari?: notificariUncheckedUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteCreateManyInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
  }

  export type documenteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
  }

  export type documenteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
  }

  export type notificariCreateInput = {
    id?: string
    mesaj: string
    status?: string
    created_at?: Date | string | null
    citita?: boolean
    utilizatori: utilizatoriCreateNestedOneWithoutNotificariInput
    documente?: documenteCreateNestedOneWithoutNotificariInput
  }

  export type notificariUncheckedCreateInput = {
    id?: string
    document_id?: string | null
    destinatar_id: string
    mesaj: string
    status?: string
    created_at?: Date | string | null
    citita?: boolean
  }

  export type notificariUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citita?: BoolFieldUpdateOperationsInput | boolean
    utilizatori?: utilizatoriUpdateOneRequiredWithoutNotificariNestedInput
    documente?: documenteUpdateOneWithoutNotificariNestedInput
  }

  export type notificariUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citita?: BoolFieldUpdateOperationsInput | boolean
  }

  export type notificariCreateManyInput = {
    id?: string
    document_id?: string | null
    destinatar_id: string
    mesaj: string
    status?: string
    created_at?: Date | string | null
    citita?: boolean
  }

  export type notificariUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citita?: BoolFieldUpdateOperationsInput | boolean
  }

  export type notificariUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citita?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tipuri_registruCreateInput = {
    id?: string
    nume: string
    registre?: registreCreateNestedManyWithoutTip_registruInput
  }

  export type tipuri_registruUncheckedCreateInput = {
    id?: string
    nume: string
    registre?: registreUncheckedCreateNestedManyWithoutTip_registruInput
  }

  export type tipuri_registruUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    registre?: registreUpdateManyWithoutTip_registruNestedInput
  }

  export type tipuri_registruUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    registre?: registreUncheckedUpdateManyWithoutTip_registruNestedInput
  }

  export type tipuri_registruCreateManyInput = {
    id?: string
    nume: string
  }

  export type tipuri_registruUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type tipuri_registruUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type registreCreateInput = {
    id?: string
    nume: string
    descriere: string
    min_val?: number | null
    max_val?: number | null
    an: number
    documente?: documenteCreateNestedManyWithoutRegistreInput
    departamente: departamenteCreateNestedOneWithoutRegistreInput
    tip_registru: tipuri_registruCreateNestedOneWithoutRegistreInput
  }

  export type registreUncheckedCreateInput = {
    id?: string
    nume: string
    descriere: string
    departament_id: string
    min_val?: number | null
    max_val?: number | null
    an: number
    tip_registru_id: string
    documente?: documenteUncheckedCreateNestedManyWithoutRegistreInput
  }

  export type registreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
    documente?: documenteUpdateManyWithoutRegistreNestedInput
    departamente?: departamenteUpdateOneRequiredWithoutRegistreNestedInput
    tip_registru?: tipuri_registruUpdateOneRequiredWithoutRegistreNestedInput
  }

  export type registreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    departament_id?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
    tip_registru_id?: StringFieldUpdateOperationsInput | string
    documente?: documenteUncheckedUpdateManyWithoutRegistreNestedInput
  }

  export type registreCreateManyInput = {
    id?: string
    nume: string
    descriere: string
    departament_id: string
    min_val?: number | null
    max_val?: number | null
    an: number
    tip_registru_id: string
  }

  export type registreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
  }

  export type registreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    departament_id?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
    tip_registru_id?: StringFieldUpdateOperationsInput | string
  }

  export type roluriCreateInput = {
    id?: string
    nume: string
    descriere: string
    culoare?: string | null
    utilizatori?: utilizatoriCreateNestedManyWithoutRoluriInput
  }

  export type roluriUncheckedCreateInput = {
    id?: string
    nume: string
    descriere: string
    culoare?: string | null
    utilizatori?: utilizatoriUncheckedCreateNestedManyWithoutRoluriInput
  }

  export type roluriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    culoare?: NullableStringFieldUpdateOperationsInput | string | null
    utilizatori?: utilizatoriUpdateManyWithoutRoluriNestedInput
  }

  export type roluriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    culoare?: NullableStringFieldUpdateOperationsInput | string | null
    utilizatori?: utilizatoriUncheckedUpdateManyWithoutRoluriNestedInput
  }

  export type roluriCreateManyInput = {
    id?: string
    nume: string
    descriere: string
    culoare?: string | null
  }

  export type roluriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    culoare?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roluriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    culoare?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tipuri_documenteCreateInput = {
    id?: string
    nume: string
    documente?: documenteCreateNestedManyWithoutTipuri_documenteInput
  }

  export type tipuri_documenteUncheckedCreateInput = {
    id?: string
    nume: string
    documente?: documenteUncheckedCreateNestedManyWithoutTipuri_documenteInput
  }

  export type tipuri_documenteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    documente?: documenteUpdateManyWithoutTipuri_documenteNestedInput
  }

  export type tipuri_documenteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    documente?: documenteUncheckedUpdateManyWithoutTipuri_documenteNestedInput
  }

  export type tipuri_documenteCreateManyInput = {
    id?: string
    nume: string
  }

  export type tipuri_documenteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type tipuri_documenteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type utilizatoriCreateInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    audit_logs?: audit_logsCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariCreateNestedManyWithoutUtilizatoriInput
    departamente?: departamenteCreateNestedOneWithoutUtilizatoriInput
    roluri?: roluriCreateNestedOneWithoutUtilizatoriInput
  }

  export type utilizatoriUncheckedCreateInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    departament_id?: string | null
    rol_id?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariUncheckedCreateNestedManyWithoutUtilizatoriInput
  }

  export type utilizatoriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    audit_logs?: audit_logsUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUpdateManyWithoutUtilizatoriNestedInput
    departamente?: departamenteUpdateOneWithoutUtilizatoriNestedInput
    roluri?: roluriUpdateOneWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    departament_id?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUncheckedUpdateManyWithoutUtilizatoriNestedInput
  }

  export type utilizatoriCreateManyInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    departament_id?: string | null
    rol_id?: string | null
  }

  export type utilizatoriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type utilizatoriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    departament_id?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type configurare_serieCreateInput = {
    id?: string
    numar_serie: number
    descriere?: string | null
  }

  export type configurare_serieUncheckedCreateInput = {
    id?: string
    numar_serie: number
    descriere?: string | null
  }

  export type configurare_serieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_serie?: IntFieldUpdateOperationsInput | number
    descriere?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type configurare_serieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_serie?: IntFieldUpdateOperationsInput | number
    descriere?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type configurare_serieCreateManyInput = {
    id?: string
    numar_serie: number
    descriere?: string | null
  }

  export type configurare_serieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_serie?: IntFieldUpdateOperationsInput | number
    descriere?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type configurare_serieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_serie?: IntFieldUpdateOperationsInput | number
    descriere?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UtilizatoriNullableScalarRelationFilter = {
    is?: utilizatoriWhereInput | null
    isNot?: utilizatoriWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type audit_logsCountOrderByAggregateInput = {
    id?: SortOrder
    tabela?: SortOrder
    cheie_primara?: SortOrder
    actiune?: SortOrder
    utilizator_id?: SortOrder
    timestamp?: SortOrder
    date_vechi?: SortOrder
    date_noi?: SortOrder
    severitate?: SortOrder
    mesaj?: SortOrder
    detalii_modificari?: SortOrder
  }

  export type audit_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    tabela?: SortOrder
    cheie_primara?: SortOrder
    actiune?: SortOrder
    utilizator_id?: SortOrder
    timestamp?: SortOrder
    severitate?: SortOrder
    mesaj?: SortOrder
  }

  export type audit_logsMinOrderByAggregateInput = {
    id?: SortOrder
    tabela?: SortOrder
    cheie_primara?: SortOrder
    actiune?: SortOrder
    utilizator_id?: SortOrder
    timestamp?: SortOrder
    severitate?: SortOrder
    mesaj?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type backup_logsCountOrderByAggregateInput = {
    id?: SortOrder
    data_backup?: SortOrder
    locatie_fisier?: SortOrder
    status?: SortOrder
    mesaj_eroare?: SortOrder
    created_at?: SortOrder
  }

  export type backup_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    data_backup?: SortOrder
    locatie_fisier?: SortOrder
    status?: SortOrder
    mesaj_eroare?: SortOrder
    created_at?: SortOrder
  }

  export type backup_logsMinOrderByAggregateInput = {
    id?: SortOrder
    data_backup?: SortOrder
    locatie_fisier?: SortOrder
    status?: SortOrder
    mesaj_eroare?: SortOrder
    created_at?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DocumenteListRelationFilter = {
    every?: documenteWhereInput
    some?: documenteWhereInput
    none?: documenteWhereInput
  }

  export type RegistreListRelationFilter = {
    every?: registreWhereInput
    some?: registreWhereInput
    none?: registreWhereInput
  }

  export type UtilizatoriListRelationFilter = {
    every?: utilizatoriWhereInput
    some?: utilizatoriWhereInput
    none?: utilizatoriWhereInput
  }

  export type documenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type registreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type utilizatoriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departamenteCountOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
  }

  export type departamenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
  }

  export type departamenteMinOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DepartamenteNullableScalarRelationFilter = {
    is?: departamenteWhereInput | null
    isNot?: departamenteWhereInput | null
  }

  export type RegistreScalarRelationFilter = {
    is?: registreWhereInput
    isNot?: registreWhereInput
  }

  export type Tipuri_documenteScalarRelationFilter = {
    is?: tipuri_documenteWhereInput
    isNot?: tipuri_documenteWhereInput
  }

  export type NotificariListRelationFilter = {
    every?: notificariWhereInput
    some?: notificariWhereInput
    none?: notificariWhereInput
  }

  export type notificariOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type documenteRegistru_idNumar_inregistrareCompoundUniqueInput = {
    registru_id: string
    numar_inregistrare: number
  }

  export type documenteCountOrderByAggregateInput = {
    id?: SortOrder
    registru_id?: SortOrder
    numar_inregistrare?: SortOrder
    data?: SortOrder
    numar_document?: SortOrder
    data_document?: SortOrder
    sursa?: SortOrder
    rezumat?: SortOrder
    departament_adresat?: SortOrder
    destinatar_id?: SortOrder
    tip_document_id?: SortOrder
    data_expedierii?: SortOrder
    creat_la?: SortOrder
    inregistrat_de?: SortOrder
    preluat_de?: SortOrder
    stadiu?: SortOrder
  }

  export type documenteAvgOrderByAggregateInput = {
    numar_inregistrare?: SortOrder
  }

  export type documenteMaxOrderByAggregateInput = {
    id?: SortOrder
    registru_id?: SortOrder
    numar_inregistrare?: SortOrder
    data?: SortOrder
    numar_document?: SortOrder
    data_document?: SortOrder
    sursa?: SortOrder
    rezumat?: SortOrder
    departament_adresat?: SortOrder
    destinatar_id?: SortOrder
    tip_document_id?: SortOrder
    data_expedierii?: SortOrder
    creat_la?: SortOrder
    inregistrat_de?: SortOrder
    preluat_de?: SortOrder
    stadiu?: SortOrder
  }

  export type documenteMinOrderByAggregateInput = {
    id?: SortOrder
    registru_id?: SortOrder
    numar_inregistrare?: SortOrder
    data?: SortOrder
    numar_document?: SortOrder
    data_document?: SortOrder
    sursa?: SortOrder
    rezumat?: SortOrder
    departament_adresat?: SortOrder
    destinatar_id?: SortOrder
    tip_document_id?: SortOrder
    data_expedierii?: SortOrder
    creat_la?: SortOrder
    inregistrat_de?: SortOrder
    preluat_de?: SortOrder
    stadiu?: SortOrder
  }

  export type documenteSumOrderByAggregateInput = {
    numar_inregistrare?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UtilizatoriScalarRelationFilter = {
    is?: utilizatoriWhereInput
    isNot?: utilizatoriWhereInput
  }

  export type DocumenteNullableScalarRelationFilter = {
    is?: documenteWhereInput | null
    isNot?: documenteWhereInput | null
  }

  export type notificariCountOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    destinatar_id?: SortOrder
    mesaj?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    citita?: SortOrder
  }

  export type notificariMaxOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    destinatar_id?: SortOrder
    mesaj?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    citita?: SortOrder
  }

  export type notificariMinOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    destinatar_id?: SortOrder
    mesaj?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    citita?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type tipuri_registruCountOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
  }

  export type tipuri_registruMaxOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
  }

  export type tipuri_registruMinOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DepartamenteScalarRelationFilter = {
    is?: departamenteWhereInput
    isNot?: departamenteWhereInput
  }

  export type Tipuri_registruScalarRelationFilter = {
    is?: tipuri_registruWhereInput
    isNot?: tipuri_registruWhereInput
  }

  export type registreNumeDepartament_idAnCompoundUniqueInput = {
    nume: string
    departament_id: string
    an: number
  }

  export type registreCountOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    departament_id?: SortOrder
    min_val?: SortOrder
    max_val?: SortOrder
    an?: SortOrder
    tip_registru_id?: SortOrder
  }

  export type registreAvgOrderByAggregateInput = {
    min_val?: SortOrder
    max_val?: SortOrder
    an?: SortOrder
  }

  export type registreMaxOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    departament_id?: SortOrder
    min_val?: SortOrder
    max_val?: SortOrder
    an?: SortOrder
    tip_registru_id?: SortOrder
  }

  export type registreMinOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    departament_id?: SortOrder
    min_val?: SortOrder
    max_val?: SortOrder
    an?: SortOrder
    tip_registru_id?: SortOrder
  }

  export type registreSumOrderByAggregateInput = {
    min_val?: SortOrder
    max_val?: SortOrder
    an?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type roluriCountOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    culoare?: SortOrder
  }

  export type roluriMaxOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    culoare?: SortOrder
  }

  export type roluriMinOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
    descriere?: SortOrder
    culoare?: SortOrder
  }

  export type tipuri_documenteCountOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
  }

  export type tipuri_documenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
  }

  export type tipuri_documenteMinOrderByAggregateInput = {
    id?: SortOrder
    nume?: SortOrder
  }

  export type Audit_logsListRelationFilter = {
    every?: audit_logsWhereInput
    some?: audit_logsWhereInput
    none?: audit_logsWhereInput
  }

  export type RoluriNullableScalarRelationFilter = {
    is?: roluriWhereInput | null
    isNot?: roluriWhereInput | null
  }

  export type audit_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type utilizatoriCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    session_token?: SortOrder
    refresh_token?: SortOrder
    session_expires?: SortOrder
    nume?: SortOrder
    departament_id?: SortOrder
    rol_id?: SortOrder
  }

  export type utilizatoriMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    session_token?: SortOrder
    refresh_token?: SortOrder
    session_expires?: SortOrder
    nume?: SortOrder
    departament_id?: SortOrder
    rol_id?: SortOrder
  }

  export type utilizatoriMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    session_token?: SortOrder
    refresh_token?: SortOrder
    session_expires?: SortOrder
    nume?: SortOrder
    departament_id?: SortOrder
    rol_id?: SortOrder
  }

  export type configurare_serieCountOrderByAggregateInput = {
    id?: SortOrder
    numar_serie?: SortOrder
    descriere?: SortOrder
  }

  export type configurare_serieAvgOrderByAggregateInput = {
    numar_serie?: SortOrder
  }

  export type configurare_serieMaxOrderByAggregateInput = {
    id?: SortOrder
    numar_serie?: SortOrder
    descriere?: SortOrder
  }

  export type configurare_serieMinOrderByAggregateInput = {
    id?: SortOrder
    numar_serie?: SortOrder
    descriere?: SortOrder
  }

  export type configurare_serieSumOrderByAggregateInput = {
    numar_serie?: SortOrder
  }

  export type utilizatoriCreateNestedOneWithoutAudit_logsInput = {
    create?: XOR<utilizatoriCreateWithoutAudit_logsInput, utilizatoriUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: utilizatoriCreateOrConnectWithoutAudit_logsInput
    connect?: utilizatoriWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type utilizatoriUpdateOneWithoutAudit_logsNestedInput = {
    create?: XOR<utilizatoriCreateWithoutAudit_logsInput, utilizatoriUncheckedCreateWithoutAudit_logsInput>
    connectOrCreate?: utilizatoriCreateOrConnectWithoutAudit_logsInput
    upsert?: utilizatoriUpsertWithoutAudit_logsInput
    disconnect?: utilizatoriWhereInput | boolean
    delete?: utilizatoriWhereInput | boolean
    connect?: utilizatoriWhereUniqueInput
    update?: XOR<XOR<utilizatoriUpdateToOneWithWhereWithoutAudit_logsInput, utilizatoriUpdateWithoutAudit_logsInput>, utilizatoriUncheckedUpdateWithoutAudit_logsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type documenteCreateNestedManyWithoutDepartamenteInput = {
    create?: XOR<documenteCreateWithoutDepartamenteInput, documenteUncheckedCreateWithoutDepartamenteInput> | documenteCreateWithoutDepartamenteInput[] | documenteUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutDepartamenteInput | documenteCreateOrConnectWithoutDepartamenteInput[]
    createMany?: documenteCreateManyDepartamenteInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type registreCreateNestedManyWithoutDepartamenteInput = {
    create?: XOR<registreCreateWithoutDepartamenteInput, registreUncheckedCreateWithoutDepartamenteInput> | registreCreateWithoutDepartamenteInput[] | registreUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: registreCreateOrConnectWithoutDepartamenteInput | registreCreateOrConnectWithoutDepartamenteInput[]
    createMany?: registreCreateManyDepartamenteInputEnvelope
    connect?: registreWhereUniqueInput | registreWhereUniqueInput[]
  }

  export type utilizatoriCreateNestedManyWithoutDepartamenteInput = {
    create?: XOR<utilizatoriCreateWithoutDepartamenteInput, utilizatoriUncheckedCreateWithoutDepartamenteInput> | utilizatoriCreateWithoutDepartamenteInput[] | utilizatoriUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: utilizatoriCreateOrConnectWithoutDepartamenteInput | utilizatoriCreateOrConnectWithoutDepartamenteInput[]
    createMany?: utilizatoriCreateManyDepartamenteInputEnvelope
    connect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
  }

  export type documenteUncheckedCreateNestedManyWithoutDepartamenteInput = {
    create?: XOR<documenteCreateWithoutDepartamenteInput, documenteUncheckedCreateWithoutDepartamenteInput> | documenteCreateWithoutDepartamenteInput[] | documenteUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutDepartamenteInput | documenteCreateOrConnectWithoutDepartamenteInput[]
    createMany?: documenteCreateManyDepartamenteInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type registreUncheckedCreateNestedManyWithoutDepartamenteInput = {
    create?: XOR<registreCreateWithoutDepartamenteInput, registreUncheckedCreateWithoutDepartamenteInput> | registreCreateWithoutDepartamenteInput[] | registreUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: registreCreateOrConnectWithoutDepartamenteInput | registreCreateOrConnectWithoutDepartamenteInput[]
    createMany?: registreCreateManyDepartamenteInputEnvelope
    connect?: registreWhereUniqueInput | registreWhereUniqueInput[]
  }

  export type utilizatoriUncheckedCreateNestedManyWithoutDepartamenteInput = {
    create?: XOR<utilizatoriCreateWithoutDepartamenteInput, utilizatoriUncheckedCreateWithoutDepartamenteInput> | utilizatoriCreateWithoutDepartamenteInput[] | utilizatoriUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: utilizatoriCreateOrConnectWithoutDepartamenteInput | utilizatoriCreateOrConnectWithoutDepartamenteInput[]
    createMany?: utilizatoriCreateManyDepartamenteInputEnvelope
    connect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
  }

  export type documenteUpdateManyWithoutDepartamenteNestedInput = {
    create?: XOR<documenteCreateWithoutDepartamenteInput, documenteUncheckedCreateWithoutDepartamenteInput> | documenteCreateWithoutDepartamenteInput[] | documenteUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutDepartamenteInput | documenteCreateOrConnectWithoutDepartamenteInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutDepartamenteInput | documenteUpsertWithWhereUniqueWithoutDepartamenteInput[]
    createMany?: documenteCreateManyDepartamenteInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutDepartamenteInput | documenteUpdateWithWhereUniqueWithoutDepartamenteInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutDepartamenteInput | documenteUpdateManyWithWhereWithoutDepartamenteInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type registreUpdateManyWithoutDepartamenteNestedInput = {
    create?: XOR<registreCreateWithoutDepartamenteInput, registreUncheckedCreateWithoutDepartamenteInput> | registreCreateWithoutDepartamenteInput[] | registreUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: registreCreateOrConnectWithoutDepartamenteInput | registreCreateOrConnectWithoutDepartamenteInput[]
    upsert?: registreUpsertWithWhereUniqueWithoutDepartamenteInput | registreUpsertWithWhereUniqueWithoutDepartamenteInput[]
    createMany?: registreCreateManyDepartamenteInputEnvelope
    set?: registreWhereUniqueInput | registreWhereUniqueInput[]
    disconnect?: registreWhereUniqueInput | registreWhereUniqueInput[]
    delete?: registreWhereUniqueInput | registreWhereUniqueInput[]
    connect?: registreWhereUniqueInput | registreWhereUniqueInput[]
    update?: registreUpdateWithWhereUniqueWithoutDepartamenteInput | registreUpdateWithWhereUniqueWithoutDepartamenteInput[]
    updateMany?: registreUpdateManyWithWhereWithoutDepartamenteInput | registreUpdateManyWithWhereWithoutDepartamenteInput[]
    deleteMany?: registreScalarWhereInput | registreScalarWhereInput[]
  }

  export type utilizatoriUpdateManyWithoutDepartamenteNestedInput = {
    create?: XOR<utilizatoriCreateWithoutDepartamenteInput, utilizatoriUncheckedCreateWithoutDepartamenteInput> | utilizatoriCreateWithoutDepartamenteInput[] | utilizatoriUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: utilizatoriCreateOrConnectWithoutDepartamenteInput | utilizatoriCreateOrConnectWithoutDepartamenteInput[]
    upsert?: utilizatoriUpsertWithWhereUniqueWithoutDepartamenteInput | utilizatoriUpsertWithWhereUniqueWithoutDepartamenteInput[]
    createMany?: utilizatoriCreateManyDepartamenteInputEnvelope
    set?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    disconnect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    delete?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    connect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    update?: utilizatoriUpdateWithWhereUniqueWithoutDepartamenteInput | utilizatoriUpdateWithWhereUniqueWithoutDepartamenteInput[]
    updateMany?: utilizatoriUpdateManyWithWhereWithoutDepartamenteInput | utilizatoriUpdateManyWithWhereWithoutDepartamenteInput[]
    deleteMany?: utilizatoriScalarWhereInput | utilizatoriScalarWhereInput[]
  }

  export type documenteUncheckedUpdateManyWithoutDepartamenteNestedInput = {
    create?: XOR<documenteCreateWithoutDepartamenteInput, documenteUncheckedCreateWithoutDepartamenteInput> | documenteCreateWithoutDepartamenteInput[] | documenteUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutDepartamenteInput | documenteCreateOrConnectWithoutDepartamenteInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutDepartamenteInput | documenteUpsertWithWhereUniqueWithoutDepartamenteInput[]
    createMany?: documenteCreateManyDepartamenteInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutDepartamenteInput | documenteUpdateWithWhereUniqueWithoutDepartamenteInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutDepartamenteInput | documenteUpdateManyWithWhereWithoutDepartamenteInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type registreUncheckedUpdateManyWithoutDepartamenteNestedInput = {
    create?: XOR<registreCreateWithoutDepartamenteInput, registreUncheckedCreateWithoutDepartamenteInput> | registreCreateWithoutDepartamenteInput[] | registreUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: registreCreateOrConnectWithoutDepartamenteInput | registreCreateOrConnectWithoutDepartamenteInput[]
    upsert?: registreUpsertWithWhereUniqueWithoutDepartamenteInput | registreUpsertWithWhereUniqueWithoutDepartamenteInput[]
    createMany?: registreCreateManyDepartamenteInputEnvelope
    set?: registreWhereUniqueInput | registreWhereUniqueInput[]
    disconnect?: registreWhereUniqueInput | registreWhereUniqueInput[]
    delete?: registreWhereUniqueInput | registreWhereUniqueInput[]
    connect?: registreWhereUniqueInput | registreWhereUniqueInput[]
    update?: registreUpdateWithWhereUniqueWithoutDepartamenteInput | registreUpdateWithWhereUniqueWithoutDepartamenteInput[]
    updateMany?: registreUpdateManyWithWhereWithoutDepartamenteInput | registreUpdateManyWithWhereWithoutDepartamenteInput[]
    deleteMany?: registreScalarWhereInput | registreScalarWhereInput[]
  }

  export type utilizatoriUncheckedUpdateManyWithoutDepartamenteNestedInput = {
    create?: XOR<utilizatoriCreateWithoutDepartamenteInput, utilizatoriUncheckedCreateWithoutDepartamenteInput> | utilizatoriCreateWithoutDepartamenteInput[] | utilizatoriUncheckedCreateWithoutDepartamenteInput[]
    connectOrCreate?: utilizatoriCreateOrConnectWithoutDepartamenteInput | utilizatoriCreateOrConnectWithoutDepartamenteInput[]
    upsert?: utilizatoriUpsertWithWhereUniqueWithoutDepartamenteInput | utilizatoriUpsertWithWhereUniqueWithoutDepartamenteInput[]
    createMany?: utilizatoriCreateManyDepartamenteInputEnvelope
    set?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    disconnect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    delete?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    connect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    update?: utilizatoriUpdateWithWhereUniqueWithoutDepartamenteInput | utilizatoriUpdateWithWhereUniqueWithoutDepartamenteInput[]
    updateMany?: utilizatoriUpdateManyWithWhereWithoutDepartamenteInput | utilizatoriUpdateManyWithWhereWithoutDepartamenteInput[]
    deleteMany?: utilizatoriScalarWhereInput | utilizatoriScalarWhereInput[]
  }

  export type departamenteCreateNestedOneWithoutDocumenteInput = {
    create?: XOR<departamenteCreateWithoutDocumenteInput, departamenteUncheckedCreateWithoutDocumenteInput>
    connectOrCreate?: departamenteCreateOrConnectWithoutDocumenteInput
    connect?: departamenteWhereUniqueInput
  }

  export type utilizatoriCreateNestedOneWithoutDocumente_documente_destinatar_idToutilizatoriInput = {
    create?: XOR<utilizatoriCreateWithoutDocumente_documente_destinatar_idToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_destinatar_idToutilizatoriInput>
    connectOrCreate?: utilizatoriCreateOrConnectWithoutDocumente_documente_destinatar_idToutilizatoriInput
    connect?: utilizatoriWhereUniqueInput
  }

  export type utilizatoriCreateNestedOneWithoutDocumente_documente_inregistrat_deToutilizatoriInput = {
    create?: XOR<utilizatoriCreateWithoutDocumente_documente_inregistrat_deToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_inregistrat_deToutilizatoriInput>
    connectOrCreate?: utilizatoriCreateOrConnectWithoutDocumente_documente_inregistrat_deToutilizatoriInput
    connect?: utilizatoriWhereUniqueInput
  }

  export type utilizatoriCreateNestedOneWithoutDocumente_documente_preluat_deToutilizatoriInput = {
    create?: XOR<utilizatoriCreateWithoutDocumente_documente_preluat_deToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_preluat_deToutilizatoriInput>
    connectOrCreate?: utilizatoriCreateOrConnectWithoutDocumente_documente_preluat_deToutilizatoriInput
    connect?: utilizatoriWhereUniqueInput
  }

  export type registreCreateNestedOneWithoutDocumenteInput = {
    create?: XOR<registreCreateWithoutDocumenteInput, registreUncheckedCreateWithoutDocumenteInput>
    connectOrCreate?: registreCreateOrConnectWithoutDocumenteInput
    connect?: registreWhereUniqueInput
  }

  export type tipuri_documenteCreateNestedOneWithoutDocumenteInput = {
    create?: XOR<tipuri_documenteCreateWithoutDocumenteInput, tipuri_documenteUncheckedCreateWithoutDocumenteInput>
    connectOrCreate?: tipuri_documenteCreateOrConnectWithoutDocumenteInput
    connect?: tipuri_documenteWhereUniqueInput
  }

  export type notificariCreateNestedManyWithoutDocumenteInput = {
    create?: XOR<notificariCreateWithoutDocumenteInput, notificariUncheckedCreateWithoutDocumenteInput> | notificariCreateWithoutDocumenteInput[] | notificariUncheckedCreateWithoutDocumenteInput[]
    connectOrCreate?: notificariCreateOrConnectWithoutDocumenteInput | notificariCreateOrConnectWithoutDocumenteInput[]
    createMany?: notificariCreateManyDocumenteInputEnvelope
    connect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
  }

  export type notificariUncheckedCreateNestedManyWithoutDocumenteInput = {
    create?: XOR<notificariCreateWithoutDocumenteInput, notificariUncheckedCreateWithoutDocumenteInput> | notificariCreateWithoutDocumenteInput[] | notificariUncheckedCreateWithoutDocumenteInput[]
    connectOrCreate?: notificariCreateOrConnectWithoutDocumenteInput | notificariCreateOrConnectWithoutDocumenteInput[]
    createMany?: notificariCreateManyDocumenteInputEnvelope
    connect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type departamenteUpdateOneWithoutDocumenteNestedInput = {
    create?: XOR<departamenteCreateWithoutDocumenteInput, departamenteUncheckedCreateWithoutDocumenteInput>
    connectOrCreate?: departamenteCreateOrConnectWithoutDocumenteInput
    upsert?: departamenteUpsertWithoutDocumenteInput
    disconnect?: departamenteWhereInput | boolean
    delete?: departamenteWhereInput | boolean
    connect?: departamenteWhereUniqueInput
    update?: XOR<XOR<departamenteUpdateToOneWithWhereWithoutDocumenteInput, departamenteUpdateWithoutDocumenteInput>, departamenteUncheckedUpdateWithoutDocumenteInput>
  }

  export type utilizatoriUpdateOneWithoutDocumente_documente_destinatar_idToutilizatoriNestedInput = {
    create?: XOR<utilizatoriCreateWithoutDocumente_documente_destinatar_idToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_destinatar_idToutilizatoriInput>
    connectOrCreate?: utilizatoriCreateOrConnectWithoutDocumente_documente_destinatar_idToutilizatoriInput
    upsert?: utilizatoriUpsertWithoutDocumente_documente_destinatar_idToutilizatoriInput
    disconnect?: utilizatoriWhereInput | boolean
    delete?: utilizatoriWhereInput | boolean
    connect?: utilizatoriWhereUniqueInput
    update?: XOR<XOR<utilizatoriUpdateToOneWithWhereWithoutDocumente_documente_destinatar_idToutilizatoriInput, utilizatoriUpdateWithoutDocumente_documente_destinatar_idToutilizatoriInput>, utilizatoriUncheckedUpdateWithoutDocumente_documente_destinatar_idToutilizatoriInput>
  }

  export type utilizatoriUpdateOneWithoutDocumente_documente_inregistrat_deToutilizatoriNestedInput = {
    create?: XOR<utilizatoriCreateWithoutDocumente_documente_inregistrat_deToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_inregistrat_deToutilizatoriInput>
    connectOrCreate?: utilizatoriCreateOrConnectWithoutDocumente_documente_inregistrat_deToutilizatoriInput
    upsert?: utilizatoriUpsertWithoutDocumente_documente_inregistrat_deToutilizatoriInput
    disconnect?: utilizatoriWhereInput | boolean
    delete?: utilizatoriWhereInput | boolean
    connect?: utilizatoriWhereUniqueInput
    update?: XOR<XOR<utilizatoriUpdateToOneWithWhereWithoutDocumente_documente_inregistrat_deToutilizatoriInput, utilizatoriUpdateWithoutDocumente_documente_inregistrat_deToutilizatoriInput>, utilizatoriUncheckedUpdateWithoutDocumente_documente_inregistrat_deToutilizatoriInput>
  }

  export type utilizatoriUpdateOneWithoutDocumente_documente_preluat_deToutilizatoriNestedInput = {
    create?: XOR<utilizatoriCreateWithoutDocumente_documente_preluat_deToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_preluat_deToutilizatoriInput>
    connectOrCreate?: utilizatoriCreateOrConnectWithoutDocumente_documente_preluat_deToutilizatoriInput
    upsert?: utilizatoriUpsertWithoutDocumente_documente_preluat_deToutilizatoriInput
    disconnect?: utilizatoriWhereInput | boolean
    delete?: utilizatoriWhereInput | boolean
    connect?: utilizatoriWhereUniqueInput
    update?: XOR<XOR<utilizatoriUpdateToOneWithWhereWithoutDocumente_documente_preluat_deToutilizatoriInput, utilizatoriUpdateWithoutDocumente_documente_preluat_deToutilizatoriInput>, utilizatoriUncheckedUpdateWithoutDocumente_documente_preluat_deToutilizatoriInput>
  }

  export type registreUpdateOneRequiredWithoutDocumenteNestedInput = {
    create?: XOR<registreCreateWithoutDocumenteInput, registreUncheckedCreateWithoutDocumenteInput>
    connectOrCreate?: registreCreateOrConnectWithoutDocumenteInput
    upsert?: registreUpsertWithoutDocumenteInput
    connect?: registreWhereUniqueInput
    update?: XOR<XOR<registreUpdateToOneWithWhereWithoutDocumenteInput, registreUpdateWithoutDocumenteInput>, registreUncheckedUpdateWithoutDocumenteInput>
  }

  export type tipuri_documenteUpdateOneRequiredWithoutDocumenteNestedInput = {
    create?: XOR<tipuri_documenteCreateWithoutDocumenteInput, tipuri_documenteUncheckedCreateWithoutDocumenteInput>
    connectOrCreate?: tipuri_documenteCreateOrConnectWithoutDocumenteInput
    upsert?: tipuri_documenteUpsertWithoutDocumenteInput
    connect?: tipuri_documenteWhereUniqueInput
    update?: XOR<XOR<tipuri_documenteUpdateToOneWithWhereWithoutDocumenteInput, tipuri_documenteUpdateWithoutDocumenteInput>, tipuri_documenteUncheckedUpdateWithoutDocumenteInput>
  }

  export type notificariUpdateManyWithoutDocumenteNestedInput = {
    create?: XOR<notificariCreateWithoutDocumenteInput, notificariUncheckedCreateWithoutDocumenteInput> | notificariCreateWithoutDocumenteInput[] | notificariUncheckedCreateWithoutDocumenteInput[]
    connectOrCreate?: notificariCreateOrConnectWithoutDocumenteInput | notificariCreateOrConnectWithoutDocumenteInput[]
    upsert?: notificariUpsertWithWhereUniqueWithoutDocumenteInput | notificariUpsertWithWhereUniqueWithoutDocumenteInput[]
    createMany?: notificariCreateManyDocumenteInputEnvelope
    set?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    disconnect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    delete?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    connect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    update?: notificariUpdateWithWhereUniqueWithoutDocumenteInput | notificariUpdateWithWhereUniqueWithoutDocumenteInput[]
    updateMany?: notificariUpdateManyWithWhereWithoutDocumenteInput | notificariUpdateManyWithWhereWithoutDocumenteInput[]
    deleteMany?: notificariScalarWhereInput | notificariScalarWhereInput[]
  }

  export type notificariUncheckedUpdateManyWithoutDocumenteNestedInput = {
    create?: XOR<notificariCreateWithoutDocumenteInput, notificariUncheckedCreateWithoutDocumenteInput> | notificariCreateWithoutDocumenteInput[] | notificariUncheckedCreateWithoutDocumenteInput[]
    connectOrCreate?: notificariCreateOrConnectWithoutDocumenteInput | notificariCreateOrConnectWithoutDocumenteInput[]
    upsert?: notificariUpsertWithWhereUniqueWithoutDocumenteInput | notificariUpsertWithWhereUniqueWithoutDocumenteInput[]
    createMany?: notificariCreateManyDocumenteInputEnvelope
    set?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    disconnect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    delete?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    connect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    update?: notificariUpdateWithWhereUniqueWithoutDocumenteInput | notificariUpdateWithWhereUniqueWithoutDocumenteInput[]
    updateMany?: notificariUpdateManyWithWhereWithoutDocumenteInput | notificariUpdateManyWithWhereWithoutDocumenteInput[]
    deleteMany?: notificariScalarWhereInput | notificariScalarWhereInput[]
  }

  export type utilizatoriCreateNestedOneWithoutNotificariInput = {
    create?: XOR<utilizatoriCreateWithoutNotificariInput, utilizatoriUncheckedCreateWithoutNotificariInput>
    connectOrCreate?: utilizatoriCreateOrConnectWithoutNotificariInput
    connect?: utilizatoriWhereUniqueInput
  }

  export type documenteCreateNestedOneWithoutNotificariInput = {
    create?: XOR<documenteCreateWithoutNotificariInput, documenteUncheckedCreateWithoutNotificariInput>
    connectOrCreate?: documenteCreateOrConnectWithoutNotificariInput
    connect?: documenteWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type utilizatoriUpdateOneRequiredWithoutNotificariNestedInput = {
    create?: XOR<utilizatoriCreateWithoutNotificariInput, utilizatoriUncheckedCreateWithoutNotificariInput>
    connectOrCreate?: utilizatoriCreateOrConnectWithoutNotificariInput
    upsert?: utilizatoriUpsertWithoutNotificariInput
    connect?: utilizatoriWhereUniqueInput
    update?: XOR<XOR<utilizatoriUpdateToOneWithWhereWithoutNotificariInput, utilizatoriUpdateWithoutNotificariInput>, utilizatoriUncheckedUpdateWithoutNotificariInput>
  }

  export type documenteUpdateOneWithoutNotificariNestedInput = {
    create?: XOR<documenteCreateWithoutNotificariInput, documenteUncheckedCreateWithoutNotificariInput>
    connectOrCreate?: documenteCreateOrConnectWithoutNotificariInput
    upsert?: documenteUpsertWithoutNotificariInput
    disconnect?: documenteWhereInput | boolean
    delete?: documenteWhereInput | boolean
    connect?: documenteWhereUniqueInput
    update?: XOR<XOR<documenteUpdateToOneWithWhereWithoutNotificariInput, documenteUpdateWithoutNotificariInput>, documenteUncheckedUpdateWithoutNotificariInput>
  }

  export type registreCreateNestedManyWithoutTip_registruInput = {
    create?: XOR<registreCreateWithoutTip_registruInput, registreUncheckedCreateWithoutTip_registruInput> | registreCreateWithoutTip_registruInput[] | registreUncheckedCreateWithoutTip_registruInput[]
    connectOrCreate?: registreCreateOrConnectWithoutTip_registruInput | registreCreateOrConnectWithoutTip_registruInput[]
    createMany?: registreCreateManyTip_registruInputEnvelope
    connect?: registreWhereUniqueInput | registreWhereUniqueInput[]
  }

  export type registreUncheckedCreateNestedManyWithoutTip_registruInput = {
    create?: XOR<registreCreateWithoutTip_registruInput, registreUncheckedCreateWithoutTip_registruInput> | registreCreateWithoutTip_registruInput[] | registreUncheckedCreateWithoutTip_registruInput[]
    connectOrCreate?: registreCreateOrConnectWithoutTip_registruInput | registreCreateOrConnectWithoutTip_registruInput[]
    createMany?: registreCreateManyTip_registruInputEnvelope
    connect?: registreWhereUniqueInput | registreWhereUniqueInput[]
  }

  export type registreUpdateManyWithoutTip_registruNestedInput = {
    create?: XOR<registreCreateWithoutTip_registruInput, registreUncheckedCreateWithoutTip_registruInput> | registreCreateWithoutTip_registruInput[] | registreUncheckedCreateWithoutTip_registruInput[]
    connectOrCreate?: registreCreateOrConnectWithoutTip_registruInput | registreCreateOrConnectWithoutTip_registruInput[]
    upsert?: registreUpsertWithWhereUniqueWithoutTip_registruInput | registreUpsertWithWhereUniqueWithoutTip_registruInput[]
    createMany?: registreCreateManyTip_registruInputEnvelope
    set?: registreWhereUniqueInput | registreWhereUniqueInput[]
    disconnect?: registreWhereUniqueInput | registreWhereUniqueInput[]
    delete?: registreWhereUniqueInput | registreWhereUniqueInput[]
    connect?: registreWhereUniqueInput | registreWhereUniqueInput[]
    update?: registreUpdateWithWhereUniqueWithoutTip_registruInput | registreUpdateWithWhereUniqueWithoutTip_registruInput[]
    updateMany?: registreUpdateManyWithWhereWithoutTip_registruInput | registreUpdateManyWithWhereWithoutTip_registruInput[]
    deleteMany?: registreScalarWhereInput | registreScalarWhereInput[]
  }

  export type registreUncheckedUpdateManyWithoutTip_registruNestedInput = {
    create?: XOR<registreCreateWithoutTip_registruInput, registreUncheckedCreateWithoutTip_registruInput> | registreCreateWithoutTip_registruInput[] | registreUncheckedCreateWithoutTip_registruInput[]
    connectOrCreate?: registreCreateOrConnectWithoutTip_registruInput | registreCreateOrConnectWithoutTip_registruInput[]
    upsert?: registreUpsertWithWhereUniqueWithoutTip_registruInput | registreUpsertWithWhereUniqueWithoutTip_registruInput[]
    createMany?: registreCreateManyTip_registruInputEnvelope
    set?: registreWhereUniqueInput | registreWhereUniqueInput[]
    disconnect?: registreWhereUniqueInput | registreWhereUniqueInput[]
    delete?: registreWhereUniqueInput | registreWhereUniqueInput[]
    connect?: registreWhereUniqueInput | registreWhereUniqueInput[]
    update?: registreUpdateWithWhereUniqueWithoutTip_registruInput | registreUpdateWithWhereUniqueWithoutTip_registruInput[]
    updateMany?: registreUpdateManyWithWhereWithoutTip_registruInput | registreUpdateManyWithWhereWithoutTip_registruInput[]
    deleteMany?: registreScalarWhereInput | registreScalarWhereInput[]
  }

  export type documenteCreateNestedManyWithoutRegistreInput = {
    create?: XOR<documenteCreateWithoutRegistreInput, documenteUncheckedCreateWithoutRegistreInput> | documenteCreateWithoutRegistreInput[] | documenteUncheckedCreateWithoutRegistreInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutRegistreInput | documenteCreateOrConnectWithoutRegistreInput[]
    createMany?: documenteCreateManyRegistreInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type departamenteCreateNestedOneWithoutRegistreInput = {
    create?: XOR<departamenteCreateWithoutRegistreInput, departamenteUncheckedCreateWithoutRegistreInput>
    connectOrCreate?: departamenteCreateOrConnectWithoutRegistreInput
    connect?: departamenteWhereUniqueInput
  }

  export type tipuri_registruCreateNestedOneWithoutRegistreInput = {
    create?: XOR<tipuri_registruCreateWithoutRegistreInput, tipuri_registruUncheckedCreateWithoutRegistreInput>
    connectOrCreate?: tipuri_registruCreateOrConnectWithoutRegistreInput
    connect?: tipuri_registruWhereUniqueInput
  }

  export type documenteUncheckedCreateNestedManyWithoutRegistreInput = {
    create?: XOR<documenteCreateWithoutRegistreInput, documenteUncheckedCreateWithoutRegistreInput> | documenteCreateWithoutRegistreInput[] | documenteUncheckedCreateWithoutRegistreInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutRegistreInput | documenteCreateOrConnectWithoutRegistreInput[]
    createMany?: documenteCreateManyRegistreInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type documenteUpdateManyWithoutRegistreNestedInput = {
    create?: XOR<documenteCreateWithoutRegistreInput, documenteUncheckedCreateWithoutRegistreInput> | documenteCreateWithoutRegistreInput[] | documenteUncheckedCreateWithoutRegistreInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutRegistreInput | documenteCreateOrConnectWithoutRegistreInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutRegistreInput | documenteUpsertWithWhereUniqueWithoutRegistreInput[]
    createMany?: documenteCreateManyRegistreInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutRegistreInput | documenteUpdateWithWhereUniqueWithoutRegistreInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutRegistreInput | documenteUpdateManyWithWhereWithoutRegistreInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type departamenteUpdateOneRequiredWithoutRegistreNestedInput = {
    create?: XOR<departamenteCreateWithoutRegistreInput, departamenteUncheckedCreateWithoutRegistreInput>
    connectOrCreate?: departamenteCreateOrConnectWithoutRegistreInput
    upsert?: departamenteUpsertWithoutRegistreInput
    connect?: departamenteWhereUniqueInput
    update?: XOR<XOR<departamenteUpdateToOneWithWhereWithoutRegistreInput, departamenteUpdateWithoutRegistreInput>, departamenteUncheckedUpdateWithoutRegistreInput>
  }

  export type tipuri_registruUpdateOneRequiredWithoutRegistreNestedInput = {
    create?: XOR<tipuri_registruCreateWithoutRegistreInput, tipuri_registruUncheckedCreateWithoutRegistreInput>
    connectOrCreate?: tipuri_registruCreateOrConnectWithoutRegistreInput
    upsert?: tipuri_registruUpsertWithoutRegistreInput
    connect?: tipuri_registruWhereUniqueInput
    update?: XOR<XOR<tipuri_registruUpdateToOneWithWhereWithoutRegistreInput, tipuri_registruUpdateWithoutRegistreInput>, tipuri_registruUncheckedUpdateWithoutRegistreInput>
  }

  export type documenteUncheckedUpdateManyWithoutRegistreNestedInput = {
    create?: XOR<documenteCreateWithoutRegistreInput, documenteUncheckedCreateWithoutRegistreInput> | documenteCreateWithoutRegistreInput[] | documenteUncheckedCreateWithoutRegistreInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutRegistreInput | documenteCreateOrConnectWithoutRegistreInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutRegistreInput | documenteUpsertWithWhereUniqueWithoutRegistreInput[]
    createMany?: documenteCreateManyRegistreInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutRegistreInput | documenteUpdateWithWhereUniqueWithoutRegistreInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutRegistreInput | documenteUpdateManyWithWhereWithoutRegistreInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type utilizatoriCreateNestedManyWithoutRoluriInput = {
    create?: XOR<utilizatoriCreateWithoutRoluriInput, utilizatoriUncheckedCreateWithoutRoluriInput> | utilizatoriCreateWithoutRoluriInput[] | utilizatoriUncheckedCreateWithoutRoluriInput[]
    connectOrCreate?: utilizatoriCreateOrConnectWithoutRoluriInput | utilizatoriCreateOrConnectWithoutRoluriInput[]
    createMany?: utilizatoriCreateManyRoluriInputEnvelope
    connect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
  }

  export type utilizatoriUncheckedCreateNestedManyWithoutRoluriInput = {
    create?: XOR<utilizatoriCreateWithoutRoluriInput, utilizatoriUncheckedCreateWithoutRoluriInput> | utilizatoriCreateWithoutRoluriInput[] | utilizatoriUncheckedCreateWithoutRoluriInput[]
    connectOrCreate?: utilizatoriCreateOrConnectWithoutRoluriInput | utilizatoriCreateOrConnectWithoutRoluriInput[]
    createMany?: utilizatoriCreateManyRoluriInputEnvelope
    connect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
  }

  export type utilizatoriUpdateManyWithoutRoluriNestedInput = {
    create?: XOR<utilizatoriCreateWithoutRoluriInput, utilizatoriUncheckedCreateWithoutRoluriInput> | utilizatoriCreateWithoutRoluriInput[] | utilizatoriUncheckedCreateWithoutRoluriInput[]
    connectOrCreate?: utilizatoriCreateOrConnectWithoutRoluriInput | utilizatoriCreateOrConnectWithoutRoluriInput[]
    upsert?: utilizatoriUpsertWithWhereUniqueWithoutRoluriInput | utilizatoriUpsertWithWhereUniqueWithoutRoluriInput[]
    createMany?: utilizatoriCreateManyRoluriInputEnvelope
    set?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    disconnect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    delete?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    connect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    update?: utilizatoriUpdateWithWhereUniqueWithoutRoluriInput | utilizatoriUpdateWithWhereUniqueWithoutRoluriInput[]
    updateMany?: utilizatoriUpdateManyWithWhereWithoutRoluriInput | utilizatoriUpdateManyWithWhereWithoutRoluriInput[]
    deleteMany?: utilizatoriScalarWhereInput | utilizatoriScalarWhereInput[]
  }

  export type utilizatoriUncheckedUpdateManyWithoutRoluriNestedInput = {
    create?: XOR<utilizatoriCreateWithoutRoluriInput, utilizatoriUncheckedCreateWithoutRoluriInput> | utilizatoriCreateWithoutRoluriInput[] | utilizatoriUncheckedCreateWithoutRoluriInput[]
    connectOrCreate?: utilizatoriCreateOrConnectWithoutRoluriInput | utilizatoriCreateOrConnectWithoutRoluriInput[]
    upsert?: utilizatoriUpsertWithWhereUniqueWithoutRoluriInput | utilizatoriUpsertWithWhereUniqueWithoutRoluriInput[]
    createMany?: utilizatoriCreateManyRoluriInputEnvelope
    set?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    disconnect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    delete?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    connect?: utilizatoriWhereUniqueInput | utilizatoriWhereUniqueInput[]
    update?: utilizatoriUpdateWithWhereUniqueWithoutRoluriInput | utilizatoriUpdateWithWhereUniqueWithoutRoluriInput[]
    updateMany?: utilizatoriUpdateManyWithWhereWithoutRoluriInput | utilizatoriUpdateManyWithWhereWithoutRoluriInput[]
    deleteMany?: utilizatoriScalarWhereInput | utilizatoriScalarWhereInput[]
  }

  export type documenteCreateNestedManyWithoutTipuri_documenteInput = {
    create?: XOR<documenteCreateWithoutTipuri_documenteInput, documenteUncheckedCreateWithoutTipuri_documenteInput> | documenteCreateWithoutTipuri_documenteInput[] | documenteUncheckedCreateWithoutTipuri_documenteInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutTipuri_documenteInput | documenteCreateOrConnectWithoutTipuri_documenteInput[]
    createMany?: documenteCreateManyTipuri_documenteInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type documenteUncheckedCreateNestedManyWithoutTipuri_documenteInput = {
    create?: XOR<documenteCreateWithoutTipuri_documenteInput, documenteUncheckedCreateWithoutTipuri_documenteInput> | documenteCreateWithoutTipuri_documenteInput[] | documenteUncheckedCreateWithoutTipuri_documenteInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutTipuri_documenteInput | documenteCreateOrConnectWithoutTipuri_documenteInput[]
    createMany?: documenteCreateManyTipuri_documenteInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type documenteUpdateManyWithoutTipuri_documenteNestedInput = {
    create?: XOR<documenteCreateWithoutTipuri_documenteInput, documenteUncheckedCreateWithoutTipuri_documenteInput> | documenteCreateWithoutTipuri_documenteInput[] | documenteUncheckedCreateWithoutTipuri_documenteInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutTipuri_documenteInput | documenteCreateOrConnectWithoutTipuri_documenteInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutTipuri_documenteInput | documenteUpsertWithWhereUniqueWithoutTipuri_documenteInput[]
    createMany?: documenteCreateManyTipuri_documenteInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutTipuri_documenteInput | documenteUpdateWithWhereUniqueWithoutTipuri_documenteInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutTipuri_documenteInput | documenteUpdateManyWithWhereWithoutTipuri_documenteInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type documenteUncheckedUpdateManyWithoutTipuri_documenteNestedInput = {
    create?: XOR<documenteCreateWithoutTipuri_documenteInput, documenteUncheckedCreateWithoutTipuri_documenteInput> | documenteCreateWithoutTipuri_documenteInput[] | documenteUncheckedCreateWithoutTipuri_documenteInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutTipuri_documenteInput | documenteCreateOrConnectWithoutTipuri_documenteInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutTipuri_documenteInput | documenteUpsertWithWhereUniqueWithoutTipuri_documenteInput[]
    createMany?: documenteCreateManyTipuri_documenteInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutTipuri_documenteInput | documenteUpdateWithWhereUniqueWithoutTipuri_documenteInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutTipuri_documenteInput | documenteUpdateManyWithWhereWithoutTipuri_documenteInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type audit_logsCreateNestedManyWithoutUtilizatoriInput = {
    create?: XOR<audit_logsCreateWithoutUtilizatoriInput, audit_logsUncheckedCreateWithoutUtilizatoriInput> | audit_logsCreateWithoutUtilizatoriInput[] | audit_logsUncheckedCreateWithoutUtilizatoriInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUtilizatoriInput | audit_logsCreateOrConnectWithoutUtilizatoriInput[]
    createMany?: audit_logsCreateManyUtilizatoriInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type documenteCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_destinatar_idToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_destinatar_idToutilizatoriInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type documenteCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_inregistrat_deToutilizatoriInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type documenteCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_preluat_deToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_preluat_deToutilizatoriInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type notificariCreateNestedManyWithoutUtilizatoriInput = {
    create?: XOR<notificariCreateWithoutUtilizatoriInput, notificariUncheckedCreateWithoutUtilizatoriInput> | notificariCreateWithoutUtilizatoriInput[] | notificariUncheckedCreateWithoutUtilizatoriInput[]
    connectOrCreate?: notificariCreateOrConnectWithoutUtilizatoriInput | notificariCreateOrConnectWithoutUtilizatoriInput[]
    createMany?: notificariCreateManyUtilizatoriInputEnvelope
    connect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
  }

  export type departamenteCreateNestedOneWithoutUtilizatoriInput = {
    create?: XOR<departamenteCreateWithoutUtilizatoriInput, departamenteUncheckedCreateWithoutUtilizatoriInput>
    connectOrCreate?: departamenteCreateOrConnectWithoutUtilizatoriInput
    connect?: departamenteWhereUniqueInput
  }

  export type roluriCreateNestedOneWithoutUtilizatoriInput = {
    create?: XOR<roluriCreateWithoutUtilizatoriInput, roluriUncheckedCreateWithoutUtilizatoriInput>
    connectOrCreate?: roluriCreateOrConnectWithoutUtilizatoriInput
    connect?: roluriWhereUniqueInput
  }

  export type audit_logsUncheckedCreateNestedManyWithoutUtilizatoriInput = {
    create?: XOR<audit_logsCreateWithoutUtilizatoriInput, audit_logsUncheckedCreateWithoutUtilizatoriInput> | audit_logsCreateWithoutUtilizatoriInput[] | audit_logsUncheckedCreateWithoutUtilizatoriInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUtilizatoriInput | audit_logsCreateOrConnectWithoutUtilizatoriInput[]
    createMany?: audit_logsCreateManyUtilizatoriInputEnvelope
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
  }

  export type documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_destinatar_idToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_destinatar_idToutilizatoriInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_inregistrat_deToutilizatoriInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_preluat_deToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_preluat_deToutilizatoriInputEnvelope
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
  }

  export type notificariUncheckedCreateNestedManyWithoutUtilizatoriInput = {
    create?: XOR<notificariCreateWithoutUtilizatoriInput, notificariUncheckedCreateWithoutUtilizatoriInput> | notificariCreateWithoutUtilizatoriInput[] | notificariUncheckedCreateWithoutUtilizatoriInput[]
    connectOrCreate?: notificariCreateOrConnectWithoutUtilizatoriInput | notificariCreateOrConnectWithoutUtilizatoriInput[]
    createMany?: notificariCreateManyUtilizatoriInputEnvelope
    connect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
  }

  export type audit_logsUpdateManyWithoutUtilizatoriNestedInput = {
    create?: XOR<audit_logsCreateWithoutUtilizatoriInput, audit_logsUncheckedCreateWithoutUtilizatoriInput> | audit_logsCreateWithoutUtilizatoriInput[] | audit_logsUncheckedCreateWithoutUtilizatoriInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUtilizatoriInput | audit_logsCreateOrConnectWithoutUtilizatoriInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutUtilizatoriInput | audit_logsUpsertWithWhereUniqueWithoutUtilizatoriInput[]
    createMany?: audit_logsCreateManyUtilizatoriInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutUtilizatoriInput | audit_logsUpdateWithWhereUniqueWithoutUtilizatoriInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutUtilizatoriInput | audit_logsUpdateManyWithWhereWithoutUtilizatoriInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type documenteUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_destinatar_idToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_destinatar_idToutilizatoriInput | documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_destinatar_idToutilizatoriInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_destinatar_idToutilizatoriInput | documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutUtilizatori_documente_destinatar_idToutilizatoriInput | documenteUpdateManyWithWhereWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type documenteUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_inregistrat_deToutilizatoriInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteUpdateManyWithWhereWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type documenteUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_preluat_deToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_preluat_deToutilizatoriInput | documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_preluat_deToutilizatoriInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_preluat_deToutilizatoriInput | documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutUtilizatori_documente_preluat_deToutilizatoriInput | documenteUpdateManyWithWhereWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type notificariUpdateManyWithoutUtilizatoriNestedInput = {
    create?: XOR<notificariCreateWithoutUtilizatoriInput, notificariUncheckedCreateWithoutUtilizatoriInput> | notificariCreateWithoutUtilizatoriInput[] | notificariUncheckedCreateWithoutUtilizatoriInput[]
    connectOrCreate?: notificariCreateOrConnectWithoutUtilizatoriInput | notificariCreateOrConnectWithoutUtilizatoriInput[]
    upsert?: notificariUpsertWithWhereUniqueWithoutUtilizatoriInput | notificariUpsertWithWhereUniqueWithoutUtilizatoriInput[]
    createMany?: notificariCreateManyUtilizatoriInputEnvelope
    set?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    disconnect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    delete?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    connect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    update?: notificariUpdateWithWhereUniqueWithoutUtilizatoriInput | notificariUpdateWithWhereUniqueWithoutUtilizatoriInput[]
    updateMany?: notificariUpdateManyWithWhereWithoutUtilizatoriInput | notificariUpdateManyWithWhereWithoutUtilizatoriInput[]
    deleteMany?: notificariScalarWhereInput | notificariScalarWhereInput[]
  }

  export type departamenteUpdateOneWithoutUtilizatoriNestedInput = {
    create?: XOR<departamenteCreateWithoutUtilizatoriInput, departamenteUncheckedCreateWithoutUtilizatoriInput>
    connectOrCreate?: departamenteCreateOrConnectWithoutUtilizatoriInput
    upsert?: departamenteUpsertWithoutUtilizatoriInput
    disconnect?: departamenteWhereInput | boolean
    delete?: departamenteWhereInput | boolean
    connect?: departamenteWhereUniqueInput
    update?: XOR<XOR<departamenteUpdateToOneWithWhereWithoutUtilizatoriInput, departamenteUpdateWithoutUtilizatoriInput>, departamenteUncheckedUpdateWithoutUtilizatoriInput>
  }

  export type roluriUpdateOneWithoutUtilizatoriNestedInput = {
    create?: XOR<roluriCreateWithoutUtilizatoriInput, roluriUncheckedCreateWithoutUtilizatoriInput>
    connectOrCreate?: roluriCreateOrConnectWithoutUtilizatoriInput
    upsert?: roluriUpsertWithoutUtilizatoriInput
    disconnect?: roluriWhereInput | boolean
    delete?: roluriWhereInput | boolean
    connect?: roluriWhereUniqueInput
    update?: XOR<XOR<roluriUpdateToOneWithWhereWithoutUtilizatoriInput, roluriUpdateWithoutUtilizatoriInput>, roluriUncheckedUpdateWithoutUtilizatoriInput>
  }

  export type audit_logsUncheckedUpdateManyWithoutUtilizatoriNestedInput = {
    create?: XOR<audit_logsCreateWithoutUtilizatoriInput, audit_logsUncheckedCreateWithoutUtilizatoriInput> | audit_logsCreateWithoutUtilizatoriInput[] | audit_logsUncheckedCreateWithoutUtilizatoriInput[]
    connectOrCreate?: audit_logsCreateOrConnectWithoutUtilizatoriInput | audit_logsCreateOrConnectWithoutUtilizatoriInput[]
    upsert?: audit_logsUpsertWithWhereUniqueWithoutUtilizatoriInput | audit_logsUpsertWithWhereUniqueWithoutUtilizatoriInput[]
    createMany?: audit_logsCreateManyUtilizatoriInputEnvelope
    set?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    disconnect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    delete?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    connect?: audit_logsWhereUniqueInput | audit_logsWhereUniqueInput[]
    update?: audit_logsUpdateWithWhereUniqueWithoutUtilizatoriInput | audit_logsUpdateWithWhereUniqueWithoutUtilizatoriInput[]
    updateMany?: audit_logsUpdateManyWithWhereWithoutUtilizatoriInput | audit_logsUpdateManyWithWhereWithoutUtilizatoriInput[]
    deleteMany?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
  }

  export type documenteUncheckedUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_destinatar_idToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_destinatar_idToutilizatoriInput | documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_destinatar_idToutilizatoriInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_destinatar_idToutilizatoriInput | documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutUtilizatori_documente_destinatar_idToutilizatoriInput | documenteUpdateManyWithWhereWithoutUtilizatori_documente_destinatar_idToutilizatoriInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type documenteUncheckedUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_inregistrat_deToutilizatoriInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteUpdateManyWithWhereWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type documenteUncheckedUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput = {
    create?: XOR<documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput> | documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput[] | documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    connectOrCreate?: documenteCreateOrConnectWithoutUtilizatori_documente_preluat_deToutilizatoriInput | documenteCreateOrConnectWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    upsert?: documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_preluat_deToutilizatoriInput | documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    createMany?: documenteCreateManyUtilizatori_documente_preluat_deToutilizatoriInputEnvelope
    set?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    disconnect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    delete?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    connect?: documenteWhereUniqueInput | documenteWhereUniqueInput[]
    update?: documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_preluat_deToutilizatoriInput | documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    updateMany?: documenteUpdateManyWithWhereWithoutUtilizatori_documente_preluat_deToutilizatoriInput | documenteUpdateManyWithWhereWithoutUtilizatori_documente_preluat_deToutilizatoriInput[]
    deleteMany?: documenteScalarWhereInput | documenteScalarWhereInput[]
  }

  export type notificariUncheckedUpdateManyWithoutUtilizatoriNestedInput = {
    create?: XOR<notificariCreateWithoutUtilizatoriInput, notificariUncheckedCreateWithoutUtilizatoriInput> | notificariCreateWithoutUtilizatoriInput[] | notificariUncheckedCreateWithoutUtilizatoriInput[]
    connectOrCreate?: notificariCreateOrConnectWithoutUtilizatoriInput | notificariCreateOrConnectWithoutUtilizatoriInput[]
    upsert?: notificariUpsertWithWhereUniqueWithoutUtilizatoriInput | notificariUpsertWithWhereUniqueWithoutUtilizatoriInput[]
    createMany?: notificariCreateManyUtilizatoriInputEnvelope
    set?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    disconnect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    delete?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    connect?: notificariWhereUniqueInput | notificariWhereUniqueInput[]
    update?: notificariUpdateWithWhereUniqueWithoutUtilizatoriInput | notificariUpdateWithWhereUniqueWithoutUtilizatoriInput[]
    updateMany?: notificariUpdateManyWithWhereWithoutUtilizatoriInput | notificariUpdateManyWithWhereWithoutUtilizatoriInput[]
    deleteMany?: notificariScalarWhereInput | notificariScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type utilizatoriCreateWithoutAudit_logsInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    documente_documente_destinatar_idToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariCreateNestedManyWithoutUtilizatoriInput
    departamente?: departamenteCreateNestedOneWithoutUtilizatoriInput
    roluri?: roluriCreateNestedOneWithoutUtilizatoriInput
  }

  export type utilizatoriUncheckedCreateWithoutAudit_logsInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    departament_id?: string | null
    rol_id?: string | null
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariUncheckedCreateNestedManyWithoutUtilizatoriInput
  }

  export type utilizatoriCreateOrConnectWithoutAudit_logsInput = {
    where: utilizatoriWhereUniqueInput
    create: XOR<utilizatoriCreateWithoutAudit_logsInput, utilizatoriUncheckedCreateWithoutAudit_logsInput>
  }

  export type utilizatoriUpsertWithoutAudit_logsInput = {
    update: XOR<utilizatoriUpdateWithoutAudit_logsInput, utilizatoriUncheckedUpdateWithoutAudit_logsInput>
    create: XOR<utilizatoriCreateWithoutAudit_logsInput, utilizatoriUncheckedCreateWithoutAudit_logsInput>
    where?: utilizatoriWhereInput
  }

  export type utilizatoriUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: utilizatoriWhereInput
    data: XOR<utilizatoriUpdateWithoutAudit_logsInput, utilizatoriUncheckedUpdateWithoutAudit_logsInput>
  }

  export type utilizatoriUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    documente_documente_destinatar_idToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUpdateManyWithoutUtilizatoriNestedInput
    departamente?: departamenteUpdateOneWithoutUtilizatoriNestedInput
    roluri?: roluriUpdateOneWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUncheckedUpdateWithoutAudit_logsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    departament_id?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableStringFieldUpdateOperationsInput | string | null
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUncheckedUpdateManyWithoutUtilizatoriNestedInput
  }

  export type documenteCreateWithoutDepartamenteInput = {
    id?: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    stadiu?: string
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_destinatar_idToutilizatoriInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_inregistrat_deToutilizatoriInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_preluat_deToutilizatoriInput
    registre: registreCreateNestedOneWithoutDocumenteInput
    tipuri_documente: tipuri_documenteCreateNestedOneWithoutDocumenteInput
    notificari?: notificariCreateNestedManyWithoutDocumenteInput
  }

  export type documenteUncheckedCreateWithoutDepartamenteInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
    notificari?: notificariUncheckedCreateNestedManyWithoutDocumenteInput
  }

  export type documenteCreateOrConnectWithoutDepartamenteInput = {
    where: documenteWhereUniqueInput
    create: XOR<documenteCreateWithoutDepartamenteInput, documenteUncheckedCreateWithoutDepartamenteInput>
  }

  export type documenteCreateManyDepartamenteInputEnvelope = {
    data: documenteCreateManyDepartamenteInput | documenteCreateManyDepartamenteInput[]
    skipDuplicates?: boolean
  }

  export type registreCreateWithoutDepartamenteInput = {
    id?: string
    nume: string
    descriere: string
    min_val?: number | null
    max_val?: number | null
    an: number
    documente?: documenteCreateNestedManyWithoutRegistreInput
    tip_registru: tipuri_registruCreateNestedOneWithoutRegistreInput
  }

  export type registreUncheckedCreateWithoutDepartamenteInput = {
    id?: string
    nume: string
    descriere: string
    min_val?: number | null
    max_val?: number | null
    an: number
    tip_registru_id: string
    documente?: documenteUncheckedCreateNestedManyWithoutRegistreInput
  }

  export type registreCreateOrConnectWithoutDepartamenteInput = {
    where: registreWhereUniqueInput
    create: XOR<registreCreateWithoutDepartamenteInput, registreUncheckedCreateWithoutDepartamenteInput>
  }

  export type registreCreateManyDepartamenteInputEnvelope = {
    data: registreCreateManyDepartamenteInput | registreCreateManyDepartamenteInput[]
    skipDuplicates?: boolean
  }

  export type utilizatoriCreateWithoutDepartamenteInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    audit_logs?: audit_logsCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariCreateNestedManyWithoutUtilizatoriInput
    roluri?: roluriCreateNestedOneWithoutUtilizatoriInput
  }

  export type utilizatoriUncheckedCreateWithoutDepartamenteInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    rol_id?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariUncheckedCreateNestedManyWithoutUtilizatoriInput
  }

  export type utilizatoriCreateOrConnectWithoutDepartamenteInput = {
    where: utilizatoriWhereUniqueInput
    create: XOR<utilizatoriCreateWithoutDepartamenteInput, utilizatoriUncheckedCreateWithoutDepartamenteInput>
  }

  export type utilizatoriCreateManyDepartamenteInputEnvelope = {
    data: utilizatoriCreateManyDepartamenteInput | utilizatoriCreateManyDepartamenteInput[]
    skipDuplicates?: boolean
  }

  export type documenteUpsertWithWhereUniqueWithoutDepartamenteInput = {
    where: documenteWhereUniqueInput
    update: XOR<documenteUpdateWithoutDepartamenteInput, documenteUncheckedUpdateWithoutDepartamenteInput>
    create: XOR<documenteCreateWithoutDepartamenteInput, documenteUncheckedCreateWithoutDepartamenteInput>
  }

  export type documenteUpdateWithWhereUniqueWithoutDepartamenteInput = {
    where: documenteWhereUniqueInput
    data: XOR<documenteUpdateWithoutDepartamenteInput, documenteUncheckedUpdateWithoutDepartamenteInput>
  }

  export type documenteUpdateManyWithWhereWithoutDepartamenteInput = {
    where: documenteScalarWhereInput
    data: XOR<documenteUpdateManyMutationInput, documenteUncheckedUpdateManyWithoutDepartamenteInput>
  }

  export type documenteScalarWhereInput = {
    AND?: documenteScalarWhereInput | documenteScalarWhereInput[]
    OR?: documenteScalarWhereInput[]
    NOT?: documenteScalarWhereInput | documenteScalarWhereInput[]
    id?: UuidFilter<"documente"> | string
    registru_id?: UuidFilter<"documente"> | string
    numar_inregistrare?: IntNullableFilter<"documente"> | number | null
    data?: DateTimeFilter<"documente"> | Date | string
    numar_document?: StringFilter<"documente"> | string
    data_document?: DateTimeFilter<"documente"> | Date | string
    sursa?: StringFilter<"documente"> | string
    rezumat?: StringFilter<"documente"> | string
    departament_adresat?: UuidNullableFilter<"documente"> | string | null
    destinatar_id?: UuidNullableFilter<"documente"> | string | null
    tip_document_id?: UuidFilter<"documente"> | string
    data_expedierii?: DateTimeFilter<"documente"> | Date | string
    creat_la?: DateTimeNullableFilter<"documente"> | Date | string | null
    inregistrat_de?: UuidNullableFilter<"documente"> | string | null
    preluat_de?: UuidNullableFilter<"documente"> | string | null
    stadiu?: StringFilter<"documente"> | string
  }

  export type registreUpsertWithWhereUniqueWithoutDepartamenteInput = {
    where: registreWhereUniqueInput
    update: XOR<registreUpdateWithoutDepartamenteInput, registreUncheckedUpdateWithoutDepartamenteInput>
    create: XOR<registreCreateWithoutDepartamenteInput, registreUncheckedCreateWithoutDepartamenteInput>
  }

  export type registreUpdateWithWhereUniqueWithoutDepartamenteInput = {
    where: registreWhereUniqueInput
    data: XOR<registreUpdateWithoutDepartamenteInput, registreUncheckedUpdateWithoutDepartamenteInput>
  }

  export type registreUpdateManyWithWhereWithoutDepartamenteInput = {
    where: registreScalarWhereInput
    data: XOR<registreUpdateManyMutationInput, registreUncheckedUpdateManyWithoutDepartamenteInput>
  }

  export type registreScalarWhereInput = {
    AND?: registreScalarWhereInput | registreScalarWhereInput[]
    OR?: registreScalarWhereInput[]
    NOT?: registreScalarWhereInput | registreScalarWhereInput[]
    id?: UuidFilter<"registre"> | string
    nume?: StringFilter<"registre"> | string
    descriere?: StringFilter<"registre"> | string
    departament_id?: UuidFilter<"registre"> | string
    min_val?: IntNullableFilter<"registre"> | number | null
    max_val?: IntNullableFilter<"registre"> | number | null
    an?: IntFilter<"registre"> | number
    tip_registru_id?: UuidFilter<"registre"> | string
  }

  export type utilizatoriUpsertWithWhereUniqueWithoutDepartamenteInput = {
    where: utilizatoriWhereUniqueInput
    update: XOR<utilizatoriUpdateWithoutDepartamenteInput, utilizatoriUncheckedUpdateWithoutDepartamenteInput>
    create: XOR<utilizatoriCreateWithoutDepartamenteInput, utilizatoriUncheckedCreateWithoutDepartamenteInput>
  }

  export type utilizatoriUpdateWithWhereUniqueWithoutDepartamenteInput = {
    where: utilizatoriWhereUniqueInput
    data: XOR<utilizatoriUpdateWithoutDepartamenteInput, utilizatoriUncheckedUpdateWithoutDepartamenteInput>
  }

  export type utilizatoriUpdateManyWithWhereWithoutDepartamenteInput = {
    where: utilizatoriScalarWhereInput
    data: XOR<utilizatoriUpdateManyMutationInput, utilizatoriUncheckedUpdateManyWithoutDepartamenteInput>
  }

  export type utilizatoriScalarWhereInput = {
    AND?: utilizatoriScalarWhereInput | utilizatoriScalarWhereInput[]
    OR?: utilizatoriScalarWhereInput[]
    NOT?: utilizatoriScalarWhereInput | utilizatoriScalarWhereInput[]
    id?: UuidFilter<"utilizatori"> | string
    email?: StringFilter<"utilizatori"> | string
    password_hash?: StringFilter<"utilizatori"> | string
    session_token?: StringNullableFilter<"utilizatori"> | string | null
    refresh_token?: StringNullableFilter<"utilizatori"> | string | null
    session_expires?: DateTimeNullableFilter<"utilizatori"> | Date | string | null
    nume?: StringFilter<"utilizatori"> | string
    departament_id?: UuidNullableFilter<"utilizatori"> | string | null
    rol_id?: UuidNullableFilter<"utilizatori"> | string | null
  }

  export type departamenteCreateWithoutDocumenteInput = {
    id?: string
    nume: string
    descriere: string
    registre?: registreCreateNestedManyWithoutDepartamenteInput
    utilizatori?: utilizatoriCreateNestedManyWithoutDepartamenteInput
  }

  export type departamenteUncheckedCreateWithoutDocumenteInput = {
    id?: string
    nume: string
    descriere: string
    registre?: registreUncheckedCreateNestedManyWithoutDepartamenteInput
    utilizatori?: utilizatoriUncheckedCreateNestedManyWithoutDepartamenteInput
  }

  export type departamenteCreateOrConnectWithoutDocumenteInput = {
    where: departamenteWhereUniqueInput
    create: XOR<departamenteCreateWithoutDocumenteInput, departamenteUncheckedCreateWithoutDocumenteInput>
  }

  export type utilizatoriCreateWithoutDocumente_documente_destinatar_idToutilizatoriInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    audit_logs?: audit_logsCreateNestedManyWithoutUtilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariCreateNestedManyWithoutUtilizatoriInput
    departamente?: departamenteCreateNestedOneWithoutUtilizatoriInput
    roluri?: roluriCreateNestedOneWithoutUtilizatoriInput
  }

  export type utilizatoriUncheckedCreateWithoutDocumente_documente_destinatar_idToutilizatoriInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    departament_id?: string | null
    rol_id?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUtilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariUncheckedCreateNestedManyWithoutUtilizatoriInput
  }

  export type utilizatoriCreateOrConnectWithoutDocumente_documente_destinatar_idToutilizatoriInput = {
    where: utilizatoriWhereUniqueInput
    create: XOR<utilizatoriCreateWithoutDocumente_documente_destinatar_idToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_destinatar_idToutilizatoriInput>
  }

  export type utilizatoriCreateWithoutDocumente_documente_inregistrat_deToutilizatoriInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    audit_logs?: audit_logsCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariCreateNestedManyWithoutUtilizatoriInput
    departamente?: departamenteCreateNestedOneWithoutUtilizatoriInput
    roluri?: roluriCreateNestedOneWithoutUtilizatoriInput
  }

  export type utilizatoriUncheckedCreateWithoutDocumente_documente_inregistrat_deToutilizatoriInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    departament_id?: string | null
    rol_id?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariUncheckedCreateNestedManyWithoutUtilizatoriInput
  }

  export type utilizatoriCreateOrConnectWithoutDocumente_documente_inregistrat_deToutilizatoriInput = {
    where: utilizatoriWhereUniqueInput
    create: XOR<utilizatoriCreateWithoutDocumente_documente_inregistrat_deToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_inregistrat_deToutilizatoriInput>
  }

  export type utilizatoriCreateWithoutDocumente_documente_preluat_deToutilizatoriInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    audit_logs?: audit_logsCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    notificari?: notificariCreateNestedManyWithoutUtilizatoriInput
    departamente?: departamenteCreateNestedOneWithoutUtilizatoriInput
    roluri?: roluriCreateNestedOneWithoutUtilizatoriInput
  }

  export type utilizatoriUncheckedCreateWithoutDocumente_documente_preluat_deToutilizatoriInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    departament_id?: string | null
    rol_id?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    notificari?: notificariUncheckedCreateNestedManyWithoutUtilizatoriInput
  }

  export type utilizatoriCreateOrConnectWithoutDocumente_documente_preluat_deToutilizatoriInput = {
    where: utilizatoriWhereUniqueInput
    create: XOR<utilizatoriCreateWithoutDocumente_documente_preluat_deToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_preluat_deToutilizatoriInput>
  }

  export type registreCreateWithoutDocumenteInput = {
    id?: string
    nume: string
    descriere: string
    min_val?: number | null
    max_val?: number | null
    an: number
    departamente: departamenteCreateNestedOneWithoutRegistreInput
    tip_registru: tipuri_registruCreateNestedOneWithoutRegistreInput
  }

  export type registreUncheckedCreateWithoutDocumenteInput = {
    id?: string
    nume: string
    descriere: string
    departament_id: string
    min_val?: number | null
    max_val?: number | null
    an: number
    tip_registru_id: string
  }

  export type registreCreateOrConnectWithoutDocumenteInput = {
    where: registreWhereUniqueInput
    create: XOR<registreCreateWithoutDocumenteInput, registreUncheckedCreateWithoutDocumenteInput>
  }

  export type tipuri_documenteCreateWithoutDocumenteInput = {
    id?: string
    nume: string
  }

  export type tipuri_documenteUncheckedCreateWithoutDocumenteInput = {
    id?: string
    nume: string
  }

  export type tipuri_documenteCreateOrConnectWithoutDocumenteInput = {
    where: tipuri_documenteWhereUniqueInput
    create: XOR<tipuri_documenteCreateWithoutDocumenteInput, tipuri_documenteUncheckedCreateWithoutDocumenteInput>
  }

  export type notificariCreateWithoutDocumenteInput = {
    id?: string
    mesaj: string
    status?: string
    created_at?: Date | string | null
    citita?: boolean
    utilizatori: utilizatoriCreateNestedOneWithoutNotificariInput
  }

  export type notificariUncheckedCreateWithoutDocumenteInput = {
    id?: string
    destinatar_id: string
    mesaj: string
    status?: string
    created_at?: Date | string | null
    citita?: boolean
  }

  export type notificariCreateOrConnectWithoutDocumenteInput = {
    where: notificariWhereUniqueInput
    create: XOR<notificariCreateWithoutDocumenteInput, notificariUncheckedCreateWithoutDocumenteInput>
  }

  export type notificariCreateManyDocumenteInputEnvelope = {
    data: notificariCreateManyDocumenteInput | notificariCreateManyDocumenteInput[]
    skipDuplicates?: boolean
  }

  export type departamenteUpsertWithoutDocumenteInput = {
    update: XOR<departamenteUpdateWithoutDocumenteInput, departamenteUncheckedUpdateWithoutDocumenteInput>
    create: XOR<departamenteCreateWithoutDocumenteInput, departamenteUncheckedCreateWithoutDocumenteInput>
    where?: departamenteWhereInput
  }

  export type departamenteUpdateToOneWithWhereWithoutDocumenteInput = {
    where?: departamenteWhereInput
    data: XOR<departamenteUpdateWithoutDocumenteInput, departamenteUncheckedUpdateWithoutDocumenteInput>
  }

  export type departamenteUpdateWithoutDocumenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    registre?: registreUpdateManyWithoutDepartamenteNestedInput
    utilizatori?: utilizatoriUpdateManyWithoutDepartamenteNestedInput
  }

  export type departamenteUncheckedUpdateWithoutDocumenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    registre?: registreUncheckedUpdateManyWithoutDepartamenteNestedInput
    utilizatori?: utilizatoriUncheckedUpdateManyWithoutDepartamenteNestedInput
  }

  export type utilizatoriUpsertWithoutDocumente_documente_destinatar_idToutilizatoriInput = {
    update: XOR<utilizatoriUpdateWithoutDocumente_documente_destinatar_idToutilizatoriInput, utilizatoriUncheckedUpdateWithoutDocumente_documente_destinatar_idToutilizatoriInput>
    create: XOR<utilizatoriCreateWithoutDocumente_documente_destinatar_idToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_destinatar_idToutilizatoriInput>
    where?: utilizatoriWhereInput
  }

  export type utilizatoriUpdateToOneWithWhereWithoutDocumente_documente_destinatar_idToutilizatoriInput = {
    where?: utilizatoriWhereInput
    data: XOR<utilizatoriUpdateWithoutDocumente_documente_destinatar_idToutilizatoriInput, utilizatoriUncheckedUpdateWithoutDocumente_documente_destinatar_idToutilizatoriInput>
  }

  export type utilizatoriUpdateWithoutDocumente_documente_destinatar_idToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    audit_logs?: audit_logsUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUpdateManyWithoutUtilizatoriNestedInput
    departamente?: departamenteUpdateOneWithoutUtilizatoriNestedInput
    roluri?: roluriUpdateOneWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUncheckedUpdateWithoutDocumente_documente_destinatar_idToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    departament_id?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUncheckedUpdateManyWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUpsertWithoutDocumente_documente_inregistrat_deToutilizatoriInput = {
    update: XOR<utilizatoriUpdateWithoutDocumente_documente_inregistrat_deToutilizatoriInput, utilizatoriUncheckedUpdateWithoutDocumente_documente_inregistrat_deToutilizatoriInput>
    create: XOR<utilizatoriCreateWithoutDocumente_documente_inregistrat_deToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_inregistrat_deToutilizatoriInput>
    where?: utilizatoriWhereInput
  }

  export type utilizatoriUpdateToOneWithWhereWithoutDocumente_documente_inregistrat_deToutilizatoriInput = {
    where?: utilizatoriWhereInput
    data: XOR<utilizatoriUpdateWithoutDocumente_documente_inregistrat_deToutilizatoriInput, utilizatoriUncheckedUpdateWithoutDocumente_documente_inregistrat_deToutilizatoriInput>
  }

  export type utilizatoriUpdateWithoutDocumente_documente_inregistrat_deToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    audit_logs?: audit_logsUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUpdateManyWithoutUtilizatoriNestedInput
    departamente?: departamenteUpdateOneWithoutUtilizatoriNestedInput
    roluri?: roluriUpdateOneWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUncheckedUpdateWithoutDocumente_documente_inregistrat_deToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    departament_id?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUncheckedUpdateManyWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUpsertWithoutDocumente_documente_preluat_deToutilizatoriInput = {
    update: XOR<utilizatoriUpdateWithoutDocumente_documente_preluat_deToutilizatoriInput, utilizatoriUncheckedUpdateWithoutDocumente_documente_preluat_deToutilizatoriInput>
    create: XOR<utilizatoriCreateWithoutDocumente_documente_preluat_deToutilizatoriInput, utilizatoriUncheckedCreateWithoutDocumente_documente_preluat_deToutilizatoriInput>
    where?: utilizatoriWhereInput
  }

  export type utilizatoriUpdateToOneWithWhereWithoutDocumente_documente_preluat_deToutilizatoriInput = {
    where?: utilizatoriWhereInput
    data: XOR<utilizatoriUpdateWithoutDocumente_documente_preluat_deToutilizatoriInput, utilizatoriUncheckedUpdateWithoutDocumente_documente_preluat_deToutilizatoriInput>
  }

  export type utilizatoriUpdateWithoutDocumente_documente_preluat_deToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    audit_logs?: audit_logsUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    notificari?: notificariUpdateManyWithoutUtilizatoriNestedInput
    departamente?: departamenteUpdateOneWithoutUtilizatoriNestedInput
    roluri?: roluriUpdateOneWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUncheckedUpdateWithoutDocumente_documente_preluat_deToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    departament_id?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    notificari?: notificariUncheckedUpdateManyWithoutUtilizatoriNestedInput
  }

  export type registreUpsertWithoutDocumenteInput = {
    update: XOR<registreUpdateWithoutDocumenteInput, registreUncheckedUpdateWithoutDocumenteInput>
    create: XOR<registreCreateWithoutDocumenteInput, registreUncheckedCreateWithoutDocumenteInput>
    where?: registreWhereInput
  }

  export type registreUpdateToOneWithWhereWithoutDocumenteInput = {
    where?: registreWhereInput
    data: XOR<registreUpdateWithoutDocumenteInput, registreUncheckedUpdateWithoutDocumenteInput>
  }

  export type registreUpdateWithoutDocumenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
    departamente?: departamenteUpdateOneRequiredWithoutRegistreNestedInput
    tip_registru?: tipuri_registruUpdateOneRequiredWithoutRegistreNestedInput
  }

  export type registreUncheckedUpdateWithoutDocumenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    departament_id?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
    tip_registru_id?: StringFieldUpdateOperationsInput | string
  }

  export type tipuri_documenteUpsertWithoutDocumenteInput = {
    update: XOR<tipuri_documenteUpdateWithoutDocumenteInput, tipuri_documenteUncheckedUpdateWithoutDocumenteInput>
    create: XOR<tipuri_documenteCreateWithoutDocumenteInput, tipuri_documenteUncheckedCreateWithoutDocumenteInput>
    where?: tipuri_documenteWhereInput
  }

  export type tipuri_documenteUpdateToOneWithWhereWithoutDocumenteInput = {
    where?: tipuri_documenteWhereInput
    data: XOR<tipuri_documenteUpdateWithoutDocumenteInput, tipuri_documenteUncheckedUpdateWithoutDocumenteInput>
  }

  export type tipuri_documenteUpdateWithoutDocumenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type tipuri_documenteUncheckedUpdateWithoutDocumenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type notificariUpsertWithWhereUniqueWithoutDocumenteInput = {
    where: notificariWhereUniqueInput
    update: XOR<notificariUpdateWithoutDocumenteInput, notificariUncheckedUpdateWithoutDocumenteInput>
    create: XOR<notificariCreateWithoutDocumenteInput, notificariUncheckedCreateWithoutDocumenteInput>
  }

  export type notificariUpdateWithWhereUniqueWithoutDocumenteInput = {
    where: notificariWhereUniqueInput
    data: XOR<notificariUpdateWithoutDocumenteInput, notificariUncheckedUpdateWithoutDocumenteInput>
  }

  export type notificariUpdateManyWithWhereWithoutDocumenteInput = {
    where: notificariScalarWhereInput
    data: XOR<notificariUpdateManyMutationInput, notificariUncheckedUpdateManyWithoutDocumenteInput>
  }

  export type notificariScalarWhereInput = {
    AND?: notificariScalarWhereInput | notificariScalarWhereInput[]
    OR?: notificariScalarWhereInput[]
    NOT?: notificariScalarWhereInput | notificariScalarWhereInput[]
    id?: UuidFilter<"notificari"> | string
    document_id?: UuidNullableFilter<"notificari"> | string | null
    destinatar_id?: UuidFilter<"notificari"> | string
    mesaj?: StringFilter<"notificari"> | string
    status?: StringFilter<"notificari"> | string
    created_at?: DateTimeNullableFilter<"notificari"> | Date | string | null
    citita?: BoolFilter<"notificari"> | boolean
  }

  export type utilizatoriCreateWithoutNotificariInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    audit_logs?: audit_logsCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    departamente?: departamenteCreateNestedOneWithoutUtilizatoriInput
    roluri?: roluriCreateNestedOneWithoutUtilizatoriInput
  }

  export type utilizatoriUncheckedCreateWithoutNotificariInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    departament_id?: string | null
    rol_id?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
  }

  export type utilizatoriCreateOrConnectWithoutNotificariInput = {
    where: utilizatoriWhereUniqueInput
    create: XOR<utilizatoriCreateWithoutNotificariInput, utilizatoriUncheckedCreateWithoutNotificariInput>
  }

  export type documenteCreateWithoutNotificariInput = {
    id?: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    stadiu?: string
    departamente?: departamenteCreateNestedOneWithoutDocumenteInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_destinatar_idToutilizatoriInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_inregistrat_deToutilizatoriInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_preluat_deToutilizatoriInput
    registre: registreCreateNestedOneWithoutDocumenteInput
    tipuri_documente: tipuri_documenteCreateNestedOneWithoutDocumenteInput
  }

  export type documenteUncheckedCreateWithoutNotificariInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
  }

  export type documenteCreateOrConnectWithoutNotificariInput = {
    where: documenteWhereUniqueInput
    create: XOR<documenteCreateWithoutNotificariInput, documenteUncheckedCreateWithoutNotificariInput>
  }

  export type utilizatoriUpsertWithoutNotificariInput = {
    update: XOR<utilizatoriUpdateWithoutNotificariInput, utilizatoriUncheckedUpdateWithoutNotificariInput>
    create: XOR<utilizatoriCreateWithoutNotificariInput, utilizatoriUncheckedCreateWithoutNotificariInput>
    where?: utilizatoriWhereInput
  }

  export type utilizatoriUpdateToOneWithWhereWithoutNotificariInput = {
    where?: utilizatoriWhereInput
    data: XOR<utilizatoriUpdateWithoutNotificariInput, utilizatoriUncheckedUpdateWithoutNotificariInput>
  }

  export type utilizatoriUpdateWithoutNotificariInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    audit_logs?: audit_logsUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    departamente?: departamenteUpdateOneWithoutUtilizatoriNestedInput
    roluri?: roluriUpdateOneWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUncheckedUpdateWithoutNotificariInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    departament_id?: NullableStringFieldUpdateOperationsInput | string | null
    rol_id?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
  }

  export type documenteUpsertWithoutNotificariInput = {
    update: XOR<documenteUpdateWithoutNotificariInput, documenteUncheckedUpdateWithoutNotificariInput>
    create: XOR<documenteCreateWithoutNotificariInput, documenteUncheckedCreateWithoutNotificariInput>
    where?: documenteWhereInput
  }

  export type documenteUpdateToOneWithWhereWithoutNotificariInput = {
    where?: documenteWhereInput
    data: XOR<documenteUpdateWithoutNotificariInput, documenteUncheckedUpdateWithoutNotificariInput>
  }

  export type documenteUpdateWithoutNotificariInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    departamente?: departamenteUpdateOneWithoutDocumenteNestedInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_destinatar_idToutilizatoriNestedInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_inregistrat_deToutilizatoriNestedInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_preluat_deToutilizatoriNestedInput
    registre?: registreUpdateOneRequiredWithoutDocumenteNestedInput
    tipuri_documente?: tipuri_documenteUpdateOneRequiredWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateWithoutNotificariInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
  }

  export type registreCreateWithoutTip_registruInput = {
    id?: string
    nume: string
    descriere: string
    min_val?: number | null
    max_val?: number | null
    an: number
    documente?: documenteCreateNestedManyWithoutRegistreInput
    departamente: departamenteCreateNestedOneWithoutRegistreInput
  }

  export type registreUncheckedCreateWithoutTip_registruInput = {
    id?: string
    nume: string
    descriere: string
    departament_id: string
    min_val?: number | null
    max_val?: number | null
    an: number
    documente?: documenteUncheckedCreateNestedManyWithoutRegistreInput
  }

  export type registreCreateOrConnectWithoutTip_registruInput = {
    where: registreWhereUniqueInput
    create: XOR<registreCreateWithoutTip_registruInput, registreUncheckedCreateWithoutTip_registruInput>
  }

  export type registreCreateManyTip_registruInputEnvelope = {
    data: registreCreateManyTip_registruInput | registreCreateManyTip_registruInput[]
    skipDuplicates?: boolean
  }

  export type registreUpsertWithWhereUniqueWithoutTip_registruInput = {
    where: registreWhereUniqueInput
    update: XOR<registreUpdateWithoutTip_registruInput, registreUncheckedUpdateWithoutTip_registruInput>
    create: XOR<registreCreateWithoutTip_registruInput, registreUncheckedCreateWithoutTip_registruInput>
  }

  export type registreUpdateWithWhereUniqueWithoutTip_registruInput = {
    where: registreWhereUniqueInput
    data: XOR<registreUpdateWithoutTip_registruInput, registreUncheckedUpdateWithoutTip_registruInput>
  }

  export type registreUpdateManyWithWhereWithoutTip_registruInput = {
    where: registreScalarWhereInput
    data: XOR<registreUpdateManyMutationInput, registreUncheckedUpdateManyWithoutTip_registruInput>
  }

  export type documenteCreateWithoutRegistreInput = {
    id?: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    stadiu?: string
    departamente?: departamenteCreateNestedOneWithoutDocumenteInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_destinatar_idToutilizatoriInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_inregistrat_deToutilizatoriInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_preluat_deToutilizatoriInput
    tipuri_documente: tipuri_documenteCreateNestedOneWithoutDocumenteInput
    notificari?: notificariCreateNestedManyWithoutDocumenteInput
  }

  export type documenteUncheckedCreateWithoutRegistreInput = {
    id?: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
    notificari?: notificariUncheckedCreateNestedManyWithoutDocumenteInput
  }

  export type documenteCreateOrConnectWithoutRegistreInput = {
    where: documenteWhereUniqueInput
    create: XOR<documenteCreateWithoutRegistreInput, documenteUncheckedCreateWithoutRegistreInput>
  }

  export type documenteCreateManyRegistreInputEnvelope = {
    data: documenteCreateManyRegistreInput | documenteCreateManyRegistreInput[]
    skipDuplicates?: boolean
  }

  export type departamenteCreateWithoutRegistreInput = {
    id?: string
    nume: string
    descriere: string
    documente?: documenteCreateNestedManyWithoutDepartamenteInput
    utilizatori?: utilizatoriCreateNestedManyWithoutDepartamenteInput
  }

  export type departamenteUncheckedCreateWithoutRegistreInput = {
    id?: string
    nume: string
    descriere: string
    documente?: documenteUncheckedCreateNestedManyWithoutDepartamenteInput
    utilizatori?: utilizatoriUncheckedCreateNestedManyWithoutDepartamenteInput
  }

  export type departamenteCreateOrConnectWithoutRegistreInput = {
    where: departamenteWhereUniqueInput
    create: XOR<departamenteCreateWithoutRegistreInput, departamenteUncheckedCreateWithoutRegistreInput>
  }

  export type tipuri_registruCreateWithoutRegistreInput = {
    id?: string
    nume: string
  }

  export type tipuri_registruUncheckedCreateWithoutRegistreInput = {
    id?: string
    nume: string
  }

  export type tipuri_registruCreateOrConnectWithoutRegistreInput = {
    where: tipuri_registruWhereUniqueInput
    create: XOR<tipuri_registruCreateWithoutRegistreInput, tipuri_registruUncheckedCreateWithoutRegistreInput>
  }

  export type documenteUpsertWithWhereUniqueWithoutRegistreInput = {
    where: documenteWhereUniqueInput
    update: XOR<documenteUpdateWithoutRegistreInput, documenteUncheckedUpdateWithoutRegistreInput>
    create: XOR<documenteCreateWithoutRegistreInput, documenteUncheckedCreateWithoutRegistreInput>
  }

  export type documenteUpdateWithWhereUniqueWithoutRegistreInput = {
    where: documenteWhereUniqueInput
    data: XOR<documenteUpdateWithoutRegistreInput, documenteUncheckedUpdateWithoutRegistreInput>
  }

  export type documenteUpdateManyWithWhereWithoutRegistreInput = {
    where: documenteScalarWhereInput
    data: XOR<documenteUpdateManyMutationInput, documenteUncheckedUpdateManyWithoutRegistreInput>
  }

  export type departamenteUpsertWithoutRegistreInput = {
    update: XOR<departamenteUpdateWithoutRegistreInput, departamenteUncheckedUpdateWithoutRegistreInput>
    create: XOR<departamenteCreateWithoutRegistreInput, departamenteUncheckedCreateWithoutRegistreInput>
    where?: departamenteWhereInput
  }

  export type departamenteUpdateToOneWithWhereWithoutRegistreInput = {
    where?: departamenteWhereInput
    data: XOR<departamenteUpdateWithoutRegistreInput, departamenteUncheckedUpdateWithoutRegistreInput>
  }

  export type departamenteUpdateWithoutRegistreInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    documente?: documenteUpdateManyWithoutDepartamenteNestedInput
    utilizatori?: utilizatoriUpdateManyWithoutDepartamenteNestedInput
  }

  export type departamenteUncheckedUpdateWithoutRegistreInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    documente?: documenteUncheckedUpdateManyWithoutDepartamenteNestedInput
    utilizatori?: utilizatoriUncheckedUpdateManyWithoutDepartamenteNestedInput
  }

  export type tipuri_registruUpsertWithoutRegistreInput = {
    update: XOR<tipuri_registruUpdateWithoutRegistreInput, tipuri_registruUncheckedUpdateWithoutRegistreInput>
    create: XOR<tipuri_registruCreateWithoutRegistreInput, tipuri_registruUncheckedCreateWithoutRegistreInput>
    where?: tipuri_registruWhereInput
  }

  export type tipuri_registruUpdateToOneWithWhereWithoutRegistreInput = {
    where?: tipuri_registruWhereInput
    data: XOR<tipuri_registruUpdateWithoutRegistreInput, tipuri_registruUncheckedUpdateWithoutRegistreInput>
  }

  export type tipuri_registruUpdateWithoutRegistreInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type tipuri_registruUncheckedUpdateWithoutRegistreInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
  }

  export type utilizatoriCreateWithoutRoluriInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    audit_logs?: audit_logsCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariCreateNestedManyWithoutUtilizatoriInput
    departamente?: departamenteCreateNestedOneWithoutUtilizatoriInput
  }

  export type utilizatoriUncheckedCreateWithoutRoluriInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    departament_id?: string | null
    audit_logs?: audit_logsUncheckedCreateNestedManyWithoutUtilizatoriInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedCreateNestedManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput
    notificari?: notificariUncheckedCreateNestedManyWithoutUtilizatoriInput
  }

  export type utilizatoriCreateOrConnectWithoutRoluriInput = {
    where: utilizatoriWhereUniqueInput
    create: XOR<utilizatoriCreateWithoutRoluriInput, utilizatoriUncheckedCreateWithoutRoluriInput>
  }

  export type utilizatoriCreateManyRoluriInputEnvelope = {
    data: utilizatoriCreateManyRoluriInput | utilizatoriCreateManyRoluriInput[]
    skipDuplicates?: boolean
  }

  export type utilizatoriUpsertWithWhereUniqueWithoutRoluriInput = {
    where: utilizatoriWhereUniqueInput
    update: XOR<utilizatoriUpdateWithoutRoluriInput, utilizatoriUncheckedUpdateWithoutRoluriInput>
    create: XOR<utilizatoriCreateWithoutRoluriInput, utilizatoriUncheckedCreateWithoutRoluriInput>
  }

  export type utilizatoriUpdateWithWhereUniqueWithoutRoluriInput = {
    where: utilizatoriWhereUniqueInput
    data: XOR<utilizatoriUpdateWithoutRoluriInput, utilizatoriUncheckedUpdateWithoutRoluriInput>
  }

  export type utilizatoriUpdateManyWithWhereWithoutRoluriInput = {
    where: utilizatoriScalarWhereInput
    data: XOR<utilizatoriUpdateManyMutationInput, utilizatoriUncheckedUpdateManyWithoutRoluriInput>
  }

  export type documenteCreateWithoutTipuri_documenteInput = {
    id?: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    stadiu?: string
    departamente?: departamenteCreateNestedOneWithoutDocumenteInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_destinatar_idToutilizatoriInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_inregistrat_deToutilizatoriInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_preluat_deToutilizatoriInput
    registre: registreCreateNestedOneWithoutDocumenteInput
    notificari?: notificariCreateNestedManyWithoutDocumenteInput
  }

  export type documenteUncheckedCreateWithoutTipuri_documenteInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
    notificari?: notificariUncheckedCreateNestedManyWithoutDocumenteInput
  }

  export type documenteCreateOrConnectWithoutTipuri_documenteInput = {
    where: documenteWhereUniqueInput
    create: XOR<documenteCreateWithoutTipuri_documenteInput, documenteUncheckedCreateWithoutTipuri_documenteInput>
  }

  export type documenteCreateManyTipuri_documenteInputEnvelope = {
    data: documenteCreateManyTipuri_documenteInput | documenteCreateManyTipuri_documenteInput[]
    skipDuplicates?: boolean
  }

  export type documenteUpsertWithWhereUniqueWithoutTipuri_documenteInput = {
    where: documenteWhereUniqueInput
    update: XOR<documenteUpdateWithoutTipuri_documenteInput, documenteUncheckedUpdateWithoutTipuri_documenteInput>
    create: XOR<documenteCreateWithoutTipuri_documenteInput, documenteUncheckedCreateWithoutTipuri_documenteInput>
  }

  export type documenteUpdateWithWhereUniqueWithoutTipuri_documenteInput = {
    where: documenteWhereUniqueInput
    data: XOR<documenteUpdateWithoutTipuri_documenteInput, documenteUncheckedUpdateWithoutTipuri_documenteInput>
  }

  export type documenteUpdateManyWithWhereWithoutTipuri_documenteInput = {
    where: documenteScalarWhereInput
    data: XOR<documenteUpdateManyMutationInput, documenteUncheckedUpdateManyWithoutTipuri_documenteInput>
  }

  export type audit_logsCreateWithoutUtilizatoriInput = {
    id?: string
    tabela: string
    cheie_primara: string
    actiune: string
    timestamp?: Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: string
    mesaj?: string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type audit_logsUncheckedCreateWithoutUtilizatoriInput = {
    id?: string
    tabela: string
    cheie_primara: string
    actiune: string
    timestamp?: Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: string
    mesaj?: string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type audit_logsCreateOrConnectWithoutUtilizatoriInput = {
    where: audit_logsWhereUniqueInput
    create: XOR<audit_logsCreateWithoutUtilizatoriInput, audit_logsUncheckedCreateWithoutUtilizatoriInput>
  }

  export type audit_logsCreateManyUtilizatoriInputEnvelope = {
    data: audit_logsCreateManyUtilizatoriInput | audit_logsCreateManyUtilizatoriInput[]
    skipDuplicates?: boolean
  }

  export type documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    id?: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    stadiu?: string
    departamente?: departamenteCreateNestedOneWithoutDocumenteInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_inregistrat_deToutilizatoriInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_preluat_deToutilizatoriInput
    registre: registreCreateNestedOneWithoutDocumenteInput
    tipuri_documente: tipuri_documenteCreateNestedOneWithoutDocumenteInput
    notificari?: notificariCreateNestedManyWithoutDocumenteInput
  }

  export type documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
    notificari?: notificariUncheckedCreateNestedManyWithoutDocumenteInput
  }

  export type documenteCreateOrConnectWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    where: documenteWhereUniqueInput
    create: XOR<documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput>
  }

  export type documenteCreateManyUtilizatori_documente_destinatar_idToutilizatoriInputEnvelope = {
    data: documenteCreateManyUtilizatori_documente_destinatar_idToutilizatoriInput | documenteCreateManyUtilizatori_documente_destinatar_idToutilizatoriInput[]
    skipDuplicates?: boolean
  }

  export type documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    id?: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    stadiu?: string
    departamente?: departamenteCreateNestedOneWithoutDocumenteInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_destinatar_idToutilizatoriInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_preluat_deToutilizatoriInput
    registre: registreCreateNestedOneWithoutDocumenteInput
    tipuri_documente: tipuri_documenteCreateNestedOneWithoutDocumenteInput
    notificari?: notificariCreateNestedManyWithoutDocumenteInput
  }

  export type documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    preluat_de?: string | null
    stadiu?: string
    notificari?: notificariUncheckedCreateNestedManyWithoutDocumenteInput
  }

  export type documenteCreateOrConnectWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    where: documenteWhereUniqueInput
    create: XOR<documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput>
  }

  export type documenteCreateManyUtilizatori_documente_inregistrat_deToutilizatoriInputEnvelope = {
    data: documenteCreateManyUtilizatori_documente_inregistrat_deToutilizatoriInput | documenteCreateManyUtilizatori_documente_inregistrat_deToutilizatoriInput[]
    skipDuplicates?: boolean
  }

  export type documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    id?: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    stadiu?: string
    departamente?: departamenteCreateNestedOneWithoutDocumenteInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_destinatar_idToutilizatoriInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriCreateNestedOneWithoutDocumente_documente_inregistrat_deToutilizatoriInput
    registre: registreCreateNestedOneWithoutDocumenteInput
    tipuri_documente: tipuri_documenteCreateNestedOneWithoutDocumenteInput
    notificari?: notificariCreateNestedManyWithoutDocumenteInput
  }

  export type documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    stadiu?: string
    notificari?: notificariUncheckedCreateNestedManyWithoutDocumenteInput
  }

  export type documenteCreateOrConnectWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    where: documenteWhereUniqueInput
    create: XOR<documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput>
  }

  export type documenteCreateManyUtilizatori_documente_preluat_deToutilizatoriInputEnvelope = {
    data: documenteCreateManyUtilizatori_documente_preluat_deToutilizatoriInput | documenteCreateManyUtilizatori_documente_preluat_deToutilizatoriInput[]
    skipDuplicates?: boolean
  }

  export type notificariCreateWithoutUtilizatoriInput = {
    id?: string
    mesaj: string
    status?: string
    created_at?: Date | string | null
    citita?: boolean
    documente?: documenteCreateNestedOneWithoutNotificariInput
  }

  export type notificariUncheckedCreateWithoutUtilizatoriInput = {
    id?: string
    document_id?: string | null
    mesaj: string
    status?: string
    created_at?: Date | string | null
    citita?: boolean
  }

  export type notificariCreateOrConnectWithoutUtilizatoriInput = {
    where: notificariWhereUniqueInput
    create: XOR<notificariCreateWithoutUtilizatoriInput, notificariUncheckedCreateWithoutUtilizatoriInput>
  }

  export type notificariCreateManyUtilizatoriInputEnvelope = {
    data: notificariCreateManyUtilizatoriInput | notificariCreateManyUtilizatoriInput[]
    skipDuplicates?: boolean
  }

  export type departamenteCreateWithoutUtilizatoriInput = {
    id?: string
    nume: string
    descriere: string
    documente?: documenteCreateNestedManyWithoutDepartamenteInput
    registre?: registreCreateNestedManyWithoutDepartamenteInput
  }

  export type departamenteUncheckedCreateWithoutUtilizatoriInput = {
    id?: string
    nume: string
    descriere: string
    documente?: documenteUncheckedCreateNestedManyWithoutDepartamenteInput
    registre?: registreUncheckedCreateNestedManyWithoutDepartamenteInput
  }

  export type departamenteCreateOrConnectWithoutUtilizatoriInput = {
    where: departamenteWhereUniqueInput
    create: XOR<departamenteCreateWithoutUtilizatoriInput, departamenteUncheckedCreateWithoutUtilizatoriInput>
  }

  export type roluriCreateWithoutUtilizatoriInput = {
    id?: string
    nume: string
    descriere: string
    culoare?: string | null
  }

  export type roluriUncheckedCreateWithoutUtilizatoriInput = {
    id?: string
    nume: string
    descriere: string
    culoare?: string | null
  }

  export type roluriCreateOrConnectWithoutUtilizatoriInput = {
    where: roluriWhereUniqueInput
    create: XOR<roluriCreateWithoutUtilizatoriInput, roluriUncheckedCreateWithoutUtilizatoriInput>
  }

  export type audit_logsUpsertWithWhereUniqueWithoutUtilizatoriInput = {
    where: audit_logsWhereUniqueInput
    update: XOR<audit_logsUpdateWithoutUtilizatoriInput, audit_logsUncheckedUpdateWithoutUtilizatoriInput>
    create: XOR<audit_logsCreateWithoutUtilizatoriInput, audit_logsUncheckedCreateWithoutUtilizatoriInput>
  }

  export type audit_logsUpdateWithWhereUniqueWithoutUtilizatoriInput = {
    where: audit_logsWhereUniqueInput
    data: XOR<audit_logsUpdateWithoutUtilizatoriInput, audit_logsUncheckedUpdateWithoutUtilizatoriInput>
  }

  export type audit_logsUpdateManyWithWhereWithoutUtilizatoriInput = {
    where: audit_logsScalarWhereInput
    data: XOR<audit_logsUpdateManyMutationInput, audit_logsUncheckedUpdateManyWithoutUtilizatoriInput>
  }

  export type audit_logsScalarWhereInput = {
    AND?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
    OR?: audit_logsScalarWhereInput[]
    NOT?: audit_logsScalarWhereInput | audit_logsScalarWhereInput[]
    id?: UuidFilter<"audit_logs"> | string
    tabela?: StringFilter<"audit_logs"> | string
    cheie_primara?: StringFilter<"audit_logs"> | string
    actiune?: StringFilter<"audit_logs"> | string
    utilizator_id?: UuidNullableFilter<"audit_logs"> | string | null
    timestamp?: DateTimeNullableFilter<"audit_logs"> | Date | string | null
    date_vechi?: JsonNullableFilter<"audit_logs">
    date_noi?: JsonNullableFilter<"audit_logs">
    severitate?: StringFilter<"audit_logs"> | string
    mesaj?: StringFilter<"audit_logs"> | string
    detalii_modificari?: JsonNullableFilter<"audit_logs">
  }

  export type documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    where: documenteWhereUniqueInput
    update: XOR<documenteUpdateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput, documenteUncheckedUpdateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput>
    create: XOR<documenteCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput>
  }

  export type documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    where: documenteWhereUniqueInput
    data: XOR<documenteUpdateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput, documenteUncheckedUpdateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput>
  }

  export type documenteUpdateManyWithWhereWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    where: documenteScalarWhereInput
    data: XOR<documenteUpdateManyMutationInput, documenteUncheckedUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput>
  }

  export type documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    where: documenteWhereUniqueInput
    update: XOR<documenteUpdateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput, documenteUncheckedUpdateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput>
    create: XOR<documenteCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput>
  }

  export type documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    where: documenteWhereUniqueInput
    data: XOR<documenteUpdateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput, documenteUncheckedUpdateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput>
  }

  export type documenteUpdateManyWithWhereWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    where: documenteScalarWhereInput
    data: XOR<documenteUpdateManyMutationInput, documenteUncheckedUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput>
  }

  export type documenteUpsertWithWhereUniqueWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    where: documenteWhereUniqueInput
    update: XOR<documenteUpdateWithoutUtilizatori_documente_preluat_deToutilizatoriInput, documenteUncheckedUpdateWithoutUtilizatori_documente_preluat_deToutilizatoriInput>
    create: XOR<documenteCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput, documenteUncheckedCreateWithoutUtilizatori_documente_preluat_deToutilizatoriInput>
  }

  export type documenteUpdateWithWhereUniqueWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    where: documenteWhereUniqueInput
    data: XOR<documenteUpdateWithoutUtilizatori_documente_preluat_deToutilizatoriInput, documenteUncheckedUpdateWithoutUtilizatori_documente_preluat_deToutilizatoriInput>
  }

  export type documenteUpdateManyWithWhereWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    where: documenteScalarWhereInput
    data: XOR<documenteUpdateManyMutationInput, documenteUncheckedUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput>
  }

  export type notificariUpsertWithWhereUniqueWithoutUtilizatoriInput = {
    where: notificariWhereUniqueInput
    update: XOR<notificariUpdateWithoutUtilizatoriInput, notificariUncheckedUpdateWithoutUtilizatoriInput>
    create: XOR<notificariCreateWithoutUtilizatoriInput, notificariUncheckedCreateWithoutUtilizatoriInput>
  }

  export type notificariUpdateWithWhereUniqueWithoutUtilizatoriInput = {
    where: notificariWhereUniqueInput
    data: XOR<notificariUpdateWithoutUtilizatoriInput, notificariUncheckedUpdateWithoutUtilizatoriInput>
  }

  export type notificariUpdateManyWithWhereWithoutUtilizatoriInput = {
    where: notificariScalarWhereInput
    data: XOR<notificariUpdateManyMutationInput, notificariUncheckedUpdateManyWithoutUtilizatoriInput>
  }

  export type departamenteUpsertWithoutUtilizatoriInput = {
    update: XOR<departamenteUpdateWithoutUtilizatoriInput, departamenteUncheckedUpdateWithoutUtilizatoriInput>
    create: XOR<departamenteCreateWithoutUtilizatoriInput, departamenteUncheckedCreateWithoutUtilizatoriInput>
    where?: departamenteWhereInput
  }

  export type departamenteUpdateToOneWithWhereWithoutUtilizatoriInput = {
    where?: departamenteWhereInput
    data: XOR<departamenteUpdateWithoutUtilizatoriInput, departamenteUncheckedUpdateWithoutUtilizatoriInput>
  }

  export type departamenteUpdateWithoutUtilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    documente?: documenteUpdateManyWithoutDepartamenteNestedInput
    registre?: registreUpdateManyWithoutDepartamenteNestedInput
  }

  export type departamenteUncheckedUpdateWithoutUtilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    documente?: documenteUncheckedUpdateManyWithoutDepartamenteNestedInput
    registre?: registreUncheckedUpdateManyWithoutDepartamenteNestedInput
  }

  export type roluriUpsertWithoutUtilizatoriInput = {
    update: XOR<roluriUpdateWithoutUtilizatoriInput, roluriUncheckedUpdateWithoutUtilizatoriInput>
    create: XOR<roluriCreateWithoutUtilizatoriInput, roluriUncheckedCreateWithoutUtilizatoriInput>
    where?: roluriWhereInput
  }

  export type roluriUpdateToOneWithWhereWithoutUtilizatoriInput = {
    where?: roluriWhereInput
    data: XOR<roluriUpdateWithoutUtilizatoriInput, roluriUncheckedUpdateWithoutUtilizatoriInput>
  }

  export type roluriUpdateWithoutUtilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    culoare?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roluriUncheckedUpdateWithoutUtilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    culoare?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type documenteCreateManyDepartamenteInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
  }

  export type registreCreateManyDepartamenteInput = {
    id?: string
    nume: string
    descriere: string
    min_val?: number | null
    max_val?: number | null
    an: number
    tip_registru_id: string
  }

  export type utilizatoriCreateManyDepartamenteInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    rol_id?: string | null
  }

  export type documenteUpdateWithoutDepartamenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_destinatar_idToutilizatoriNestedInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_inregistrat_deToutilizatoriNestedInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_preluat_deToutilizatoriNestedInput
    registre?: registreUpdateOneRequiredWithoutDocumenteNestedInput
    tipuri_documente?: tipuri_documenteUpdateOneRequiredWithoutDocumenteNestedInput
    notificari?: notificariUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateWithoutDepartamenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    notificari?: notificariUncheckedUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateManyWithoutDepartamenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
  }

  export type registreUpdateWithoutDepartamenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
    documente?: documenteUpdateManyWithoutRegistreNestedInput
    tip_registru?: tipuri_registruUpdateOneRequiredWithoutRegistreNestedInput
  }

  export type registreUncheckedUpdateWithoutDepartamenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
    tip_registru_id?: StringFieldUpdateOperationsInput | string
    documente?: documenteUncheckedUpdateManyWithoutRegistreNestedInput
  }

  export type registreUncheckedUpdateManyWithoutDepartamenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
    tip_registru_id?: StringFieldUpdateOperationsInput | string
  }

  export type utilizatoriUpdateWithoutDepartamenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    audit_logs?: audit_logsUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUpdateManyWithoutUtilizatoriNestedInput
    roluri?: roluriUpdateOneWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUncheckedUpdateWithoutDepartamenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    rol_id?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUncheckedUpdateManyWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUncheckedUpdateManyWithoutDepartamenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    rol_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notificariCreateManyDocumenteInput = {
    id?: string
    destinatar_id: string
    mesaj: string
    status?: string
    created_at?: Date | string | null
    citita?: boolean
  }

  export type notificariUpdateWithoutDocumenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citita?: BoolFieldUpdateOperationsInput | boolean
    utilizatori?: utilizatoriUpdateOneRequiredWithoutNotificariNestedInput
  }

  export type notificariUncheckedUpdateWithoutDocumenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinatar_id?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citita?: BoolFieldUpdateOperationsInput | boolean
  }

  export type notificariUncheckedUpdateManyWithoutDocumenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinatar_id?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citita?: BoolFieldUpdateOperationsInput | boolean
  }

  export type registreCreateManyTip_registruInput = {
    id?: string
    nume: string
    descriere: string
    departament_id: string
    min_val?: number | null
    max_val?: number | null
    an: number
  }

  export type registreUpdateWithoutTip_registruInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
    documente?: documenteUpdateManyWithoutRegistreNestedInput
    departamente?: departamenteUpdateOneRequiredWithoutRegistreNestedInput
  }

  export type registreUncheckedUpdateWithoutTip_registruInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    departament_id?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
    documente?: documenteUncheckedUpdateManyWithoutRegistreNestedInput
  }

  export type registreUncheckedUpdateManyWithoutTip_registruInput = {
    id?: StringFieldUpdateOperationsInput | string
    nume?: StringFieldUpdateOperationsInput | string
    descriere?: StringFieldUpdateOperationsInput | string
    departament_id?: StringFieldUpdateOperationsInput | string
    min_val?: NullableIntFieldUpdateOperationsInput | number | null
    max_val?: NullableIntFieldUpdateOperationsInput | number | null
    an?: IntFieldUpdateOperationsInput | number
  }

  export type documenteCreateManyRegistreInput = {
    id?: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
  }

  export type documenteUpdateWithoutRegistreInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    departamente?: departamenteUpdateOneWithoutDocumenteNestedInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_destinatar_idToutilizatoriNestedInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_inregistrat_deToutilizatoriNestedInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_preluat_deToutilizatoriNestedInput
    tipuri_documente?: tipuri_documenteUpdateOneRequiredWithoutDocumenteNestedInput
    notificari?: notificariUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateWithoutRegistreInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    notificari?: notificariUncheckedUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateManyWithoutRegistreInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
  }

  export type utilizatoriCreateManyRoluriInput = {
    id?: string
    email: string
    password_hash: string
    session_token?: string | null
    refresh_token?: string | null
    session_expires?: Date | string | null
    nume: string
    departament_id?: string | null
  }

  export type utilizatoriUpdateWithoutRoluriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    audit_logs?: audit_logsUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUpdateManyWithoutUtilizatoriNestedInput
    departamente?: departamenteUpdateOneWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUncheckedUpdateWithoutRoluriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    departament_id?: NullableStringFieldUpdateOperationsInput | string | null
    audit_logs?: audit_logsUncheckedUpdateManyWithoutUtilizatoriNestedInput
    documente_documente_destinatar_idToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriNestedInput
    documente_documente_inregistrat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriNestedInput
    documente_documente_preluat_deToutilizatori?: documenteUncheckedUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriNestedInput
    notificari?: notificariUncheckedUpdateManyWithoutUtilizatoriNestedInput
  }

  export type utilizatoriUncheckedUpdateManyWithoutRoluriInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    session_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_expires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nume?: StringFieldUpdateOperationsInput | string
    departament_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type documenteCreateManyTipuri_documenteInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
  }

  export type documenteUpdateWithoutTipuri_documenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    departamente?: departamenteUpdateOneWithoutDocumenteNestedInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_destinatar_idToutilizatoriNestedInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_inregistrat_deToutilizatoriNestedInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_preluat_deToutilizatoriNestedInput
    registre?: registreUpdateOneRequiredWithoutDocumenteNestedInput
    notificari?: notificariUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateWithoutTipuri_documenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    notificari?: notificariUncheckedUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateManyWithoutTipuri_documenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
  }

  export type audit_logsCreateManyUtilizatoriInput = {
    id?: string
    tabela: string
    cheie_primara: string
    actiune: string
    timestamp?: Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: string
    mesaj?: string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type documenteCreateManyUtilizatori_documente_destinatar_idToutilizatoriInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    preluat_de?: string | null
    stadiu?: string
  }

  export type documenteCreateManyUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    preluat_de?: string | null
    stadiu?: string
  }

  export type documenteCreateManyUtilizatori_documente_preluat_deToutilizatoriInput = {
    id?: string
    registru_id: string
    numar_inregistrare?: number | null
    data?: Date | string
    numar_document: string
    data_document: Date | string
    sursa: string
    rezumat: string
    departament_adresat?: string | null
    destinatar_id?: string | null
    tip_document_id: string
    data_expedierii: Date | string
    creat_la?: Date | string | null
    inregistrat_de?: string | null
    stadiu?: string
  }

  export type notificariCreateManyUtilizatoriInput = {
    id?: string
    document_id?: string | null
    mesaj: string
    status?: string
    created_at?: Date | string | null
    citita?: boolean
  }

  export type audit_logsUpdateWithoutUtilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabela?: StringFieldUpdateOperationsInput | string
    cheie_primara?: StringFieldUpdateOperationsInput | string
    actiune?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type audit_logsUncheckedUpdateWithoutUtilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabela?: StringFieldUpdateOperationsInput | string
    cheie_primara?: StringFieldUpdateOperationsInput | string
    actiune?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type audit_logsUncheckedUpdateManyWithoutUtilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    tabela?: StringFieldUpdateOperationsInput | string
    cheie_primara?: StringFieldUpdateOperationsInput | string
    actiune?: StringFieldUpdateOperationsInput | string
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vechi?: NullableJsonNullValueInput | InputJsonValue
    date_noi?: NullableJsonNullValueInput | InputJsonValue
    severitate?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    detalii_modificari?: NullableJsonNullValueInput | InputJsonValue
  }

  export type documenteUpdateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    departamente?: departamenteUpdateOneWithoutDocumenteNestedInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_inregistrat_deToutilizatoriNestedInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_preluat_deToutilizatoriNestedInput
    registre?: registreUpdateOneRequiredWithoutDocumenteNestedInput
    tipuri_documente?: tipuri_documenteUpdateOneRequiredWithoutDocumenteNestedInput
    notificari?: notificariUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    notificari?: notificariUncheckedUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateManyWithoutUtilizatori_documente_destinatar_idToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
  }

  export type documenteUpdateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    departamente?: departamenteUpdateOneWithoutDocumenteNestedInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_destinatar_idToutilizatoriNestedInput
    utilizatori_documente_preluat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_preluat_deToutilizatoriNestedInput
    registre?: registreUpdateOneRequiredWithoutDocumenteNestedInput
    tipuri_documente?: tipuri_documenteUpdateOneRequiredWithoutDocumenteNestedInput
    notificari?: notificariUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    notificari?: notificariUncheckedUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateManyWithoutUtilizatori_documente_inregistrat_deToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preluat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
  }

  export type documenteUpdateWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    departamente?: departamenteUpdateOneWithoutDocumenteNestedInput
    utilizatori_documente_destinatar_idToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_destinatar_idToutilizatoriNestedInput
    utilizatori_documente_inregistrat_deToutilizatori?: utilizatoriUpdateOneWithoutDocumente_documente_inregistrat_deToutilizatoriNestedInput
    registre?: registreUpdateOneRequiredWithoutDocumenteNestedInput
    tipuri_documente?: tipuri_documenteUpdateOneRequiredWithoutDocumenteNestedInput
    notificari?: notificariUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
    notificari?: notificariUncheckedUpdateManyWithoutDocumenteNestedInput
  }

  export type documenteUncheckedUpdateManyWithoutUtilizatori_documente_preluat_deToutilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    registru_id?: StringFieldUpdateOperationsInput | string
    numar_inregistrare?: NullableIntFieldUpdateOperationsInput | number | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    numar_document?: StringFieldUpdateOperationsInput | string
    data_document?: DateTimeFieldUpdateOperationsInput | Date | string
    sursa?: StringFieldUpdateOperationsInput | string
    rezumat?: StringFieldUpdateOperationsInput | string
    departament_adresat?: NullableStringFieldUpdateOperationsInput | string | null
    destinatar_id?: NullableStringFieldUpdateOperationsInput | string | null
    tip_document_id?: StringFieldUpdateOperationsInput | string
    data_expedierii?: DateTimeFieldUpdateOperationsInput | Date | string
    creat_la?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inregistrat_de?: NullableStringFieldUpdateOperationsInput | string | null
    stadiu?: StringFieldUpdateOperationsInput | string
  }

  export type notificariUpdateWithoutUtilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    mesaj?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citita?: BoolFieldUpdateOperationsInput | boolean
    documente?: documenteUpdateOneWithoutNotificariNestedInput
  }

  export type notificariUncheckedUpdateWithoutUtilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    mesaj?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citita?: BoolFieldUpdateOperationsInput | boolean
  }

  export type notificariUncheckedUpdateManyWithoutUtilizatoriInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    mesaj?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    citita?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}