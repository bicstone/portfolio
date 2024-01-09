export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type ArticlesYaml = Node & Output & Timeline & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};


export type ArticlesYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ArticlesYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ArticlesYamlEdge>;
  readonly group: ReadonlyArray<ArticlesYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ArticlesYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ArticlesYamlConnectionDistinctArgs = {
  field: ArticlesYamlFieldSelector;
};


export type ArticlesYamlConnectionGroupArgs = {
  field: ArticlesYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ArticlesYamlConnectionMaxArgs = {
  field: ArticlesYamlFieldSelector;
};


export type ArticlesYamlConnectionMinArgs = {
  field: ArticlesYamlFieldSelector;
};


export type ArticlesYamlConnectionSumArgs = {
  field: ArticlesYamlFieldSelector;
};

export type ArticlesYamlEdge = {
  readonly next: Maybe<ArticlesYaml>;
  readonly node: ArticlesYaml;
  readonly previous: Maybe<ArticlesYaml>;
};

export type ArticlesYamlFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type ArticlesYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type ArticlesYamlFilterListInput = {
  readonly elemMatch: InputMaybe<ArticlesYamlFilterInput>;
};

export type ArticlesYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ArticlesYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ArticlesYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ArticlesYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ArticlesYamlGroupConnectionDistinctArgs = {
  field: ArticlesYamlFieldSelector;
};


export type ArticlesYamlGroupConnectionGroupArgs = {
  field: ArticlesYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ArticlesYamlGroupConnectionMaxArgs = {
  field: ArticlesYamlFieldSelector;
};


export type ArticlesYamlGroupConnectionMinArgs = {
  field: ArticlesYamlFieldSelector;
};


export type ArticlesYamlGroupConnectionSumArgs = {
  field: ArticlesYamlFieldSelector;
};

export type ArticlesYamlSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

export type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type CertificationsYaml = History & Node & Timeline & {
  readonly category: Scalars['String']['output'];
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly endDate: Maybe<Scalars['Date']['output']>;
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
};


export type CertificationsYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type CertificationsYamlEndDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type CertificationsYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<CertificationsYamlEdge>;
  readonly group: ReadonlyArray<CertificationsYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<CertificationsYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type CertificationsYamlConnectionDistinctArgs = {
  field: CertificationsYamlFieldSelector;
};


export type CertificationsYamlConnectionGroupArgs = {
  field: CertificationsYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type CertificationsYamlConnectionMaxArgs = {
  field: CertificationsYamlFieldSelector;
};


export type CertificationsYamlConnectionMinArgs = {
  field: CertificationsYamlFieldSelector;
};


export type CertificationsYamlConnectionSumArgs = {
  field: CertificationsYamlFieldSelector;
};

export type CertificationsYamlEdge = {
  readonly next: Maybe<CertificationsYaml>;
  readonly node: CertificationsYaml;
  readonly previous: Maybe<CertificationsYaml>;
};

export type CertificationsYamlFieldSelector = {
  readonly category: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly endDate: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

export type CertificationsYamlFilterInput = {
  readonly category: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly endDate: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

export type CertificationsYamlFilterListInput = {
  readonly elemMatch: InputMaybe<CertificationsYamlFilterInput>;
};

export type CertificationsYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<CertificationsYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<CertificationsYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<CertificationsYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type CertificationsYamlGroupConnectionDistinctArgs = {
  field: CertificationsYamlFieldSelector;
};


export type CertificationsYamlGroupConnectionGroupArgs = {
  field: CertificationsYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type CertificationsYamlGroupConnectionMaxArgs = {
  field: CertificationsYamlFieldSelector;
};


export type CertificationsYamlGroupConnectionMinArgs = {
  field: CertificationsYamlFieldSelector;
};


export type CertificationsYamlGroupConnectionSumArgs = {
  field: CertificationsYamlFieldSelector;
};

export type CertificationsYamlSortInput = {
  readonly category: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly endDate: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

export type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']['input']>;
  readonly gt: InputMaybe<Scalars['Date']['input']>;
  readonly gte: InputMaybe<Scalars['Date']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
  readonly lt: InputMaybe<Scalars['Date']['input']>;
  readonly lte: InputMaybe<Scalars['Date']['input']>;
  readonly ne: InputMaybe<Scalars['Date']['input']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']['input']>>>;
};

export type Directory = Node & {
  readonly absolutePath: Scalars['String']['output'];
  readonly accessTime: Scalars['Date']['output'];
  readonly atime: Scalars['Date']['output'];
  readonly atimeMs: Scalars['Float']['output'];
  readonly base: Scalars['String']['output'];
  readonly birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']['output']>;
  readonly changeTime: Scalars['Date']['output'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date']['output'];
  readonly ctimeMs: Scalars['Float']['output'];
  readonly dev: Scalars['Int']['output'];
  readonly dir: Scalars['String']['output'];
  readonly ext: Scalars['String']['output'];
  readonly extension: Scalars['String']['output'];
  readonly gid: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly ino: Scalars['Float']['output'];
  readonly internal: Internal;
  readonly mode: Scalars['Int']['output'];
  readonly modifiedTime: Scalars['Date']['output'];
  readonly mtime: Scalars['Date']['output'];
  readonly mtimeMs: Scalars['Float']['output'];
  readonly name: Scalars['String']['output'];
  readonly nlink: Scalars['Int']['output'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String']['output'];
  readonly rdev: Scalars['Int']['output'];
  readonly relativeDirectory: Scalars['String']['output'];
  readonly relativePath: Scalars['String']['output'];
  readonly root: Scalars['String']['output'];
  readonly size: Scalars['Int']['output'];
  readonly sourceInstanceName: Scalars['String']['output'];
  readonly uid: Scalars['Int']['output'];
};


export type DirectoryAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

export type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectorySortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

export enum FieldSelectorEnum {
  Select = 0
}

export type File = Node & {
  readonly absolutePath: Scalars['String']['output'];
  readonly accessTime: Scalars['Date']['output'];
  readonly atime: Scalars['Date']['output'];
  readonly atimeMs: Scalars['Float']['output'];
  readonly base: Scalars['String']['output'];
  readonly birthTime: Scalars['Date']['output'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']['output']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']['output']>;
  readonly blksize: Maybe<Scalars['Int']['output']>;
  readonly blocks: Maybe<Scalars['Int']['output']>;
  readonly changeTime: Scalars['Date']['output'];
  /** Returns the first child node of type ArticlesYaml or null if there are no children of given type on this node */
  readonly childArticlesYaml: Maybe<ArticlesYaml>;
  /** Returns the first child node of type CertificationsYaml or null if there are no children of given type on this node */
  readonly childCertificationsYaml: Maybe<CertificationsYaml>;
  /** Returns the first child node of type HistoriesYaml or null if there are no children of given type on this node */
  readonly childHistoriesYaml: Maybe<HistoriesYaml>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  /** Returns the first child node of type NotesYaml or null if there are no children of given type on this node */
  readonly childNotesYaml: Maybe<NotesYaml>;
  /** Returns the first child node of type OssesYaml or null if there are no children of given type on this node */
  readonly childOssesYaml: Maybe<OssesYaml>;
  /** Returns the first child node of type ProjectsYaml or null if there are no children of given type on this node */
  readonly childProjectsYaml: Maybe<ProjectsYaml>;
  /** Returns the first child node of type SlidesYaml or null if there are no children of given type on this node */
  readonly childSlidesYaml: Maybe<SlidesYaml>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ArticlesYaml */
  readonly childrenArticlesYaml: Maybe<ReadonlyArray<Maybe<ArticlesYaml>>>;
  /** Returns all children nodes filtered by type CertificationsYaml */
  readonly childrenCertificationsYaml: Maybe<ReadonlyArray<Maybe<CertificationsYaml>>>;
  /** Returns all children nodes filtered by type HistoriesYaml */
  readonly childrenHistoriesYaml: Maybe<ReadonlyArray<Maybe<HistoriesYaml>>>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns all children nodes filtered by type NotesYaml */
  readonly childrenNotesYaml: Maybe<ReadonlyArray<Maybe<NotesYaml>>>;
  /** Returns all children nodes filtered by type OssesYaml */
  readonly childrenOssesYaml: Maybe<ReadonlyArray<Maybe<OssesYaml>>>;
  /** Returns all children nodes filtered by type ProjectsYaml */
  readonly childrenProjectsYaml: Maybe<ReadonlyArray<Maybe<ProjectsYaml>>>;
  /** Returns all children nodes filtered by type SlidesYaml */
  readonly childrenSlidesYaml: Maybe<ReadonlyArray<Maybe<SlidesYaml>>>;
  readonly ctime: Scalars['Date']['output'];
  readonly ctimeMs: Scalars['Float']['output'];
  readonly dev: Scalars['Int']['output'];
  readonly dir: Scalars['String']['output'];
  readonly ext: Scalars['String']['output'];
  readonly extension: Scalars['String']['output'];
  readonly gid: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly ino: Scalars['Float']['output'];
  readonly internal: Internal;
  readonly mode: Scalars['Int']['output'];
  readonly modifiedTime: Scalars['Date']['output'];
  readonly mtime: Scalars['Date']['output'];
  readonly mtimeMs: Scalars['Float']['output'];
  readonly name: Scalars['String']['output'];
  readonly nlink: Scalars['Int']['output'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String']['output'];
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']['output']>;
  readonly rdev: Scalars['Int']['output'];
  readonly relativeDirectory: Scalars['String']['output'];
  readonly relativePath: Scalars['String']['output'];
  readonly root: Scalars['String']['output'];
  readonly size: Scalars['Int']['output'];
  readonly sourceInstanceName: Scalars['String']['output'];
  readonly uid: Scalars['Int']['output'];
};


export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type FileAtimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type FileCtimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type FileMtimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

export type FileFieldSelector = {
  readonly absolutePath: InputMaybe<FieldSelectorEnum>;
  readonly accessTime: InputMaybe<FieldSelectorEnum>;
  readonly atime: InputMaybe<FieldSelectorEnum>;
  readonly atimeMs: InputMaybe<FieldSelectorEnum>;
  readonly base: InputMaybe<FieldSelectorEnum>;
  readonly birthTime: InputMaybe<FieldSelectorEnum>;
  readonly birthtime: InputMaybe<FieldSelectorEnum>;
  readonly birthtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly blksize: InputMaybe<FieldSelectorEnum>;
  readonly blocks: InputMaybe<FieldSelectorEnum>;
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly childArticlesYaml: InputMaybe<ArticlesYamlFieldSelector>;
  readonly childCertificationsYaml: InputMaybe<CertificationsYamlFieldSelector>;
  readonly childHistoriesYaml: InputMaybe<HistoriesYamlFieldSelector>;
  readonly childMdx: InputMaybe<MdxFieldSelector>;
  readonly childNotesYaml: InputMaybe<NotesYamlFieldSelector>;
  readonly childOssesYaml: InputMaybe<OssesYamlFieldSelector>;
  readonly childProjectsYaml: InputMaybe<ProjectsYamlFieldSelector>;
  readonly childSlidesYaml: InputMaybe<SlidesYamlFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenArticlesYaml: InputMaybe<ArticlesYamlFieldSelector>;
  readonly childrenCertificationsYaml: InputMaybe<CertificationsYamlFieldSelector>;
  readonly childrenHistoriesYaml: InputMaybe<HistoriesYamlFieldSelector>;
  readonly childrenMdx: InputMaybe<MdxFieldSelector>;
  readonly childrenNotesYaml: InputMaybe<NotesYamlFieldSelector>;
  readonly childrenOssesYaml: InputMaybe<OssesYamlFieldSelector>;
  readonly childrenProjectsYaml: InputMaybe<ProjectsYamlFieldSelector>;
  readonly childrenSlidesYaml: InputMaybe<SlidesYamlFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
  readonly gid: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly ino: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mode: InputMaybe<FieldSelectorEnum>;
  readonly modifiedTime: InputMaybe<FieldSelectorEnum>;
  readonly mtime: InputMaybe<FieldSelectorEnum>;
  readonly mtimeMs: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nlink: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly prettySize: InputMaybe<FieldSelectorEnum>;
  readonly publicURL: InputMaybe<FieldSelectorEnum>;
  readonly rdev: InputMaybe<FieldSelectorEnum>;
  readonly relativeDirectory: InputMaybe<FieldSelectorEnum>;
  readonly relativePath: InputMaybe<FieldSelectorEnum>;
  readonly root: InputMaybe<FieldSelectorEnum>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly sourceInstanceName: InputMaybe<FieldSelectorEnum>;
  readonly uid: InputMaybe<FieldSelectorEnum>;
};

export type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize: InputMaybe<IntQueryOperatorInput>;
  readonly blocks: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly childArticlesYaml: InputMaybe<ArticlesYamlFilterInput>;
  readonly childCertificationsYaml: InputMaybe<CertificationsYamlFilterInput>;
  readonly childHistoriesYaml: InputMaybe<HistoriesYamlFilterInput>;
  readonly childMdx: InputMaybe<MdxFilterInput>;
  readonly childNotesYaml: InputMaybe<NotesYamlFilterInput>;
  readonly childOssesYaml: InputMaybe<OssesYamlFilterInput>;
  readonly childProjectsYaml: InputMaybe<ProjectsYamlFilterInput>;
  readonly childSlidesYaml: InputMaybe<SlidesYamlFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenArticlesYaml: InputMaybe<ArticlesYamlFilterListInput>;
  readonly childrenCertificationsYaml: InputMaybe<CertificationsYamlFilterListInput>;
  readonly childrenHistoriesYaml: InputMaybe<HistoriesYamlFilterListInput>;
  readonly childrenMdx: InputMaybe<MdxFilterListInput>;
  readonly childrenNotesYaml: InputMaybe<NotesYamlFilterListInput>;
  readonly childrenOssesYaml: InputMaybe<OssesYamlFilterListInput>;
  readonly childrenProjectsYaml: InputMaybe<ProjectsYamlFilterListInput>;
  readonly childrenSlidesYaml: InputMaybe<SlidesYamlFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly publicURL: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileSortInput = {
  readonly absolutePath: InputMaybe<SortOrderEnum>;
  readonly accessTime: InputMaybe<SortOrderEnum>;
  readonly atime: InputMaybe<SortOrderEnum>;
  readonly atimeMs: InputMaybe<SortOrderEnum>;
  readonly base: InputMaybe<SortOrderEnum>;
  readonly birthTime: InputMaybe<SortOrderEnum>;
  readonly birthtime: InputMaybe<SortOrderEnum>;
  readonly birthtimeMs: InputMaybe<SortOrderEnum>;
  readonly blksize: InputMaybe<SortOrderEnum>;
  readonly blocks: InputMaybe<SortOrderEnum>;
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly childArticlesYaml: InputMaybe<ArticlesYamlSortInput>;
  readonly childCertificationsYaml: InputMaybe<CertificationsYamlSortInput>;
  readonly childHistoriesYaml: InputMaybe<HistoriesYamlSortInput>;
  readonly childMdx: InputMaybe<MdxSortInput>;
  readonly childNotesYaml: InputMaybe<NotesYamlSortInput>;
  readonly childOssesYaml: InputMaybe<OssesYamlSortInput>;
  readonly childProjectsYaml: InputMaybe<ProjectsYamlSortInput>;
  readonly childSlidesYaml: InputMaybe<SlidesYamlSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenArticlesYaml: InputMaybe<ArticlesYamlSortInput>;
  readonly childrenCertificationsYaml: InputMaybe<CertificationsYamlSortInput>;
  readonly childrenHistoriesYaml: InputMaybe<HistoriesYamlSortInput>;
  readonly childrenMdx: InputMaybe<MdxSortInput>;
  readonly childrenNotesYaml: InputMaybe<NotesYamlSortInput>;
  readonly childrenOssesYaml: InputMaybe<OssesYamlSortInput>;
  readonly childrenProjectsYaml: InputMaybe<ProjectsYamlSortInput>;
  readonly childrenSlidesYaml: InputMaybe<SlidesYamlSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
  readonly gid: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly ino: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mode: InputMaybe<SortOrderEnum>;
  readonly modifiedTime: InputMaybe<SortOrderEnum>;
  readonly mtime: InputMaybe<SortOrderEnum>;
  readonly mtimeMs: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nlink: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly prettySize: InputMaybe<SortOrderEnum>;
  readonly publicURL: InputMaybe<SortOrderEnum>;
  readonly rdev: InputMaybe<SortOrderEnum>;
  readonly relativeDirectory: InputMaybe<SortOrderEnum>;
  readonly relativePath: InputMaybe<SortOrderEnum>;
  readonly root: InputMaybe<SortOrderEnum>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly sourceInstanceName: InputMaybe<SortOrderEnum>;
  readonly uid: InputMaybe<SortOrderEnum>;
};

export type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']['input']>;
  readonly gt: InputMaybe<Scalars['Float']['input']>;
  readonly gte: InputMaybe<Scalars['Float']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt: InputMaybe<Scalars['Float']['input']>;
  readonly lte: InputMaybe<Scalars['Float']['input']>;
  readonly ne: InputMaybe<Scalars['Float']['input']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
};

export type HistoriesYaml = History & Node & Timeline & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly excerpt: Scalars['String']['output'];
  readonly fields: TimelineFields;
  readonly icon: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
};


export type HistoriesYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type HistoriesYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<HistoriesYamlEdge>;
  readonly group: ReadonlyArray<HistoriesYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<HistoriesYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type HistoriesYamlConnectionDistinctArgs = {
  field: HistoriesYamlFieldSelector;
};


export type HistoriesYamlConnectionGroupArgs = {
  field: HistoriesYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type HistoriesYamlConnectionMaxArgs = {
  field: HistoriesYamlFieldSelector;
};


export type HistoriesYamlConnectionMinArgs = {
  field: HistoriesYamlFieldSelector;
};


export type HistoriesYamlConnectionSumArgs = {
  field: HistoriesYamlFieldSelector;
};

export type HistoriesYamlEdge = {
  readonly next: Maybe<HistoriesYaml>;
  readonly node: HistoriesYaml;
  readonly previous: Maybe<HistoriesYaml>;
};

export type HistoriesYamlFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly icon: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

export type HistoriesYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly icon: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

export type HistoriesYamlFilterListInput = {
  readonly elemMatch: InputMaybe<HistoriesYamlFilterInput>;
};

export type HistoriesYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<HistoriesYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<HistoriesYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<HistoriesYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type HistoriesYamlGroupConnectionDistinctArgs = {
  field: HistoriesYamlFieldSelector;
};


export type HistoriesYamlGroupConnectionGroupArgs = {
  field: HistoriesYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type HistoriesYamlGroupConnectionMaxArgs = {
  field: HistoriesYamlFieldSelector;
};


export type HistoriesYamlGroupConnectionMinArgs = {
  field: HistoriesYamlFieldSelector;
};


export type HistoriesYamlGroupConnectionSumArgs = {
  field: HistoriesYamlFieldSelector;
};

export type HistoriesYamlSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly icon: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

export type History = {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
};


export type HistoryDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type HistoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<HistoryEdge>;
  readonly group: ReadonlyArray<HistoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<History>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type HistoryConnectionDistinctArgs = {
  field: HistoryFieldSelector;
};


export type HistoryConnectionGroupArgs = {
  field: HistoryFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type HistoryConnectionMaxArgs = {
  field: HistoryFieldSelector;
};


export type HistoryConnectionMinArgs = {
  field: HistoryFieldSelector;
};


export type HistoryConnectionSumArgs = {
  field: HistoryFieldSelector;
};

export type HistoryEdge = {
  readonly next: Maybe<History>;
  readonly node: History;
  readonly previous: Maybe<History>;
};

export type HistoryFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

export type HistoryFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

export type HistoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<HistoryEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<HistoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<History>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type HistoryGroupConnectionDistinctArgs = {
  field: HistoryFieldSelector;
};


export type HistoryGroupConnectionGroupArgs = {
  field: HistoryFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type HistoryGroupConnectionMaxArgs = {
  field: HistoryFieldSelector;
};


export type HistoryGroupConnectionMinArgs = {
  field: HistoryFieldSelector;
};


export type HistoryGroupConnectionSumArgs = {
  field: HistoryFieldSelector;
};

export type HistorySortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

export type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']['input']>;
  readonly gt: InputMaybe<Scalars['Int']['input']>;
  readonly gte: InputMaybe<Scalars['Int']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt: InputMaybe<Scalars['Int']['input']>;
  readonly lte: InputMaybe<Scalars['Int']['input']>;
  readonly ne: InputMaybe<Scalars['Int']['input']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
};

export type Internal = {
  readonly content: Maybe<Scalars['String']['output']>;
  readonly contentDigest: Scalars['String']['output'];
  readonly contentFilePath: Maybe<Scalars['String']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']['output']>;
  readonly mediaType: Maybe<Scalars['String']['output']>;
  readonly owner: Scalars['String']['output'];
  readonly type: Scalars['String']['output'];
};

export type InternalFieldSelector = {
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly contentDigest: InputMaybe<FieldSelectorEnum>;
  readonly contentFilePath: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly fieldOwners: InputMaybe<FieldSelectorEnum>;
  readonly ignoreType: InputMaybe<FieldSelectorEnum>;
  readonly mediaType: InputMaybe<FieldSelectorEnum>;
  readonly owner: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly contentFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type InternalSortInput = {
  readonly content: InputMaybe<SortOrderEnum>;
  readonly contentDigest: InputMaybe<SortOrderEnum>;
  readonly contentFilePath: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly fieldOwners: InputMaybe<SortOrderEnum>;
  readonly ignoreType: InputMaybe<SortOrderEnum>;
  readonly mediaType: InputMaybe<SortOrderEnum>;
  readonly owner: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type JsonQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly glob: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly regex: InputMaybe<Scalars['JSON']['input']>;
};

export type Mdx = Node & Output & Timeline & {
  readonly body: Scalars['String']['output'];
  readonly category: Scalars['String']['output'];
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly excerpt: Maybe<Scalars['String']['output']>;
  readonly fields: TimelineFields;
  readonly frontmatter: MdxFrontmatter;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly slug: Scalars['String']['output'];
  readonly tableOfContents: Scalars['JSON']['output'];
  readonly tags: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly title: Scalars['String']['output'];
  readonly updateDate: Maybe<Scalars['Date']['output']>;
};


export type MdxDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']['input']>;
};


export type MdxUpdateDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type MdxConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldSelector;
};


export type MdxConnectionGroupArgs = {
  field: MdxFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldSelector;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldSelector;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldSelector;
};

export type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

export type MdxFieldSelector = {
  readonly body: InputMaybe<FieldSelectorEnum>;
  readonly category: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly frontmatter: InputMaybe<MdxFrontmatterFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly tableOfContents: InputMaybe<FieldSelectorEnum>;
  readonly tags: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updateDate: InputMaybe<FieldSelectorEnum>;
};

export type MdxFilterInput = {
  readonly body: InputMaybe<StringQueryOperatorInput>;
  readonly category: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly frontmatter: InputMaybe<MdxFrontmatterFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly tableOfContents: InputMaybe<JsonQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updateDate: InputMaybe<DateQueryOperatorInput>;
};

export type MdxFilterListInput = {
  readonly elemMatch: InputMaybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  readonly category: Scalars['String']['output'];
  readonly date: Scalars['Date']['output'];
  readonly excerpt: Scalars['String']['output'];
  readonly slug: Scalars['String']['output'];
  readonly tags: Maybe<ReadonlyArray<Scalars['String']['output']>>;
  readonly title: Scalars['String']['output'];
  readonly updateDate: Maybe<Scalars['Date']['output']>;
};


export type MdxFrontmatterDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type MdxFrontmatterUpdateDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type MdxFrontmatterFieldSelector = {
  readonly category: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly tags: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updateDate: InputMaybe<FieldSelectorEnum>;
};

export type MdxFrontmatterFilterInput = {
  readonly category: InputMaybe<StringQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updateDate: InputMaybe<DateQueryOperatorInput>;
};

export type MdxFrontmatterSortInput = {
  readonly category: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly tags: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updateDate: InputMaybe<SortOrderEnum>;
};

export type MdxGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldSelector;
};


export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldSelector;
};


export type MdxGroupConnectionMinArgs = {
  field: MdxFieldSelector;
};


export type MdxGroupConnectionSumArgs = {
  field: MdxFieldSelector;
};

export type MdxSortInput = {
  readonly body: InputMaybe<SortOrderEnum>;
  readonly category: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly frontmatter: InputMaybe<MdxFrontmatterSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly tableOfContents: InputMaybe<SortOrderEnum>;
  readonly tags: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updateDate: InputMaybe<SortOrderEnum>;
};

/** Node Interface */
export type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

export type NodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

export type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

export type NodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

export type NotesYaml = Node & Output & Timeline & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};


export type NotesYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type NotesYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<NotesYamlEdge>;
  readonly group: ReadonlyArray<NotesYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<NotesYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type NotesYamlConnectionDistinctArgs = {
  field: NotesYamlFieldSelector;
};


export type NotesYamlConnectionGroupArgs = {
  field: NotesYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type NotesYamlConnectionMaxArgs = {
  field: NotesYamlFieldSelector;
};


export type NotesYamlConnectionMinArgs = {
  field: NotesYamlFieldSelector;
};


export type NotesYamlConnectionSumArgs = {
  field: NotesYamlFieldSelector;
};

export type NotesYamlEdge = {
  readonly next: Maybe<NotesYaml>;
  readonly node: NotesYaml;
  readonly previous: Maybe<NotesYaml>;
};

export type NotesYamlFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type NotesYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type NotesYamlFilterListInput = {
  readonly elemMatch: InputMaybe<NotesYamlFilterInput>;
};

export type NotesYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<NotesYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<NotesYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<NotesYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type NotesYamlGroupConnectionDistinctArgs = {
  field: NotesYamlFieldSelector;
};


export type NotesYamlGroupConnectionGroupArgs = {
  field: NotesYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type NotesYamlGroupConnectionMaxArgs = {
  field: NotesYamlFieldSelector;
};


export type NotesYamlGroupConnectionMinArgs = {
  field: NotesYamlFieldSelector;
};


export type NotesYamlGroupConnectionSumArgs = {
  field: NotesYamlFieldSelector;
};

export type NotesYamlSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

export type OssesYaml = Node & Output & Project & Timeline & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly tags: ReadonlyArray<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};


export type OssesYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type OssesYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<OssesYamlEdge>;
  readonly group: ReadonlyArray<OssesYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<OssesYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type OssesYamlConnectionDistinctArgs = {
  field: OssesYamlFieldSelector;
};


export type OssesYamlConnectionGroupArgs = {
  field: OssesYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type OssesYamlConnectionMaxArgs = {
  field: OssesYamlFieldSelector;
};


export type OssesYamlConnectionMinArgs = {
  field: OssesYamlFieldSelector;
};


export type OssesYamlConnectionSumArgs = {
  field: OssesYamlFieldSelector;
};

export type OssesYamlEdge = {
  readonly next: Maybe<OssesYaml>;
  readonly node: OssesYaml;
  readonly previous: Maybe<OssesYaml>;
};

export type OssesYamlFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly tags: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type OssesYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type OssesYamlFilterListInput = {
  readonly elemMatch: InputMaybe<OssesYamlFilterInput>;
};

export type OssesYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<OssesYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<OssesYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<OssesYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type OssesYamlGroupConnectionDistinctArgs = {
  field: OssesYamlFieldSelector;
};


export type OssesYamlGroupConnectionGroupArgs = {
  field: OssesYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type OssesYamlGroupConnectionMaxArgs = {
  field: OssesYamlFieldSelector;
};


export type OssesYamlGroupConnectionMinArgs = {
  field: OssesYamlFieldSelector;
};


export type OssesYamlGroupConnectionSumArgs = {
  field: OssesYamlFieldSelector;
};

export type OssesYamlSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly tags: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

export type Output = {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
};


export type OutputDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type OutputConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<OutputEdge>;
  readonly group: ReadonlyArray<OutputGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Output>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type OutputConnectionDistinctArgs = {
  field: OutputFieldSelector;
};


export type OutputConnectionGroupArgs = {
  field: OutputFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type OutputConnectionMaxArgs = {
  field: OutputFieldSelector;
};


export type OutputConnectionMinArgs = {
  field: OutputFieldSelector;
};


export type OutputConnectionSumArgs = {
  field: OutputFieldSelector;
};

export type OutputEdge = {
  readonly next: Maybe<Output>;
  readonly node: Output;
  readonly previous: Maybe<Output>;
};

export type OutputFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

export type OutputFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

export type OutputGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<OutputEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<OutputGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Output>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type OutputGroupConnectionDistinctArgs = {
  field: OutputFieldSelector;
};


export type OutputGroupConnectionGroupArgs = {
  field: OutputFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type OutputGroupConnectionMaxArgs = {
  field: OutputFieldSelector;
};


export type OutputGroupConnectionMinArgs = {
  field: OutputFieldSelector;
};


export type OutputGroupConnectionSumArgs = {
  field: OutputFieldSelector;
};

export type OutputSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

export type PageInfo = {
  readonly currentPage: Scalars['Int']['output'];
  readonly hasNextPage: Scalars['Boolean']['output'];
  readonly hasPreviousPage: Scalars['Boolean']['output'];
  readonly itemCount: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly perPage: Maybe<Scalars['Int']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};

export type Project = {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
};


export type ProjectDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ProjectConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ProjectEdge>;
  readonly group: ReadonlyArray<ProjectGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Project>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ProjectConnectionDistinctArgs = {
  field: ProjectFieldSelector;
};


export type ProjectConnectionGroupArgs = {
  field: ProjectFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectConnectionMaxArgs = {
  field: ProjectFieldSelector;
};


export type ProjectConnectionMinArgs = {
  field: ProjectFieldSelector;
};


export type ProjectConnectionSumArgs = {
  field: ProjectFieldSelector;
};

export type ProjectEdge = {
  readonly next: Maybe<Project>;
  readonly node: Project;
  readonly previous: Maybe<Project>;
};

export type ProjectFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

export type ProjectFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

export type ProjectGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ProjectEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ProjectGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Project>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ProjectGroupConnectionDistinctArgs = {
  field: ProjectFieldSelector;
};


export type ProjectGroupConnectionGroupArgs = {
  field: ProjectFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectGroupConnectionMaxArgs = {
  field: ProjectFieldSelector;
};


export type ProjectGroupConnectionMinArgs = {
  field: ProjectFieldSelector;
};


export type ProjectGroupConnectionSumArgs = {
  field: ProjectFieldSelector;
};

export type ProjectSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

export type ProjectsYaml = Node & Project & Timeline & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly endDate: Maybe<Scalars['Date']['output']>;
  readonly fields: TimelineFields;
  readonly icon: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly tags: ReadonlyArray<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
};


export type ProjectsYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ProjectsYamlEndDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ProjectsYamlEdge>;
  readonly group: ReadonlyArray<ProjectsYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ProjectsYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ProjectsYamlConnectionDistinctArgs = {
  field: ProjectsYamlFieldSelector;
};


export type ProjectsYamlConnectionGroupArgs = {
  field: ProjectsYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectsYamlConnectionMaxArgs = {
  field: ProjectsYamlFieldSelector;
};


export type ProjectsYamlConnectionMinArgs = {
  field: ProjectsYamlFieldSelector;
};


export type ProjectsYamlConnectionSumArgs = {
  field: ProjectsYamlFieldSelector;
};

export type ProjectsYamlEdge = {
  readonly next: Maybe<ProjectsYaml>;
  readonly node: ProjectsYaml;
  readonly previous: Maybe<ProjectsYaml>;
};

export type ProjectsYamlFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly endDate: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly icon: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly tags: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

export type ProjectsYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly endDate: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly icon: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

export type ProjectsYamlFilterListInput = {
  readonly elemMatch: InputMaybe<ProjectsYamlFilterInput>;
};

export type ProjectsYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ProjectsYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ProjectsYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ProjectsYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ProjectsYamlGroupConnectionDistinctArgs = {
  field: ProjectsYamlFieldSelector;
};


export type ProjectsYamlGroupConnectionGroupArgs = {
  field: ProjectsYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectsYamlGroupConnectionMaxArgs = {
  field: ProjectsYamlFieldSelector;
};


export type ProjectsYamlGroupConnectionMinArgs = {
  field: ProjectsYamlFieldSelector;
};


export type ProjectsYamlGroupConnectionSumArgs = {
  field: ProjectsYamlFieldSelector;
};

export type ProjectsYamlSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly endDate: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly icon: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly tags: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

export type Query = {
  readonly allArticlesYaml: ArticlesYamlConnection;
  readonly allCertificationsYaml: CertificationsYamlConnection;
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allHistoriesYaml: HistoriesYamlConnection;
  readonly allHistory: HistoryConnection;
  readonly allMdx: MdxConnection;
  readonly allNotesYaml: NotesYamlConnection;
  readonly allOssesYaml: OssesYamlConnection;
  readonly allOutput: OutputConnection;
  readonly allProject: ProjectConnection;
  readonly allProjectsYaml: ProjectsYamlConnection;
  readonly allSearch: SearchConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly allSlidesYaml: SlidesYamlConnection;
  readonly allTimeline: TimelineConnection;
  readonly articlesYaml: Maybe<ArticlesYaml>;
  readonly certificationsYaml: Maybe<CertificationsYaml>;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly historiesYaml: Maybe<HistoriesYaml>;
  readonly history: Maybe<History>;
  readonly mdx: Maybe<Mdx>;
  readonly notesYaml: Maybe<NotesYaml>;
  readonly ossesYaml: Maybe<OssesYaml>;
  readonly output: Maybe<Output>;
  readonly project: Maybe<Project>;
  readonly projectsYaml: Maybe<ProjectsYaml>;
  readonly search: Maybe<Search>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly slidesYaml: Maybe<SlidesYaml>;
  readonly timeline: Maybe<Timeline>;
};


export type QueryAllArticlesYamlArgs = {
  filter: InputMaybe<ArticlesYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ArticlesYamlSortInput>>>;
};


export type QueryAllCertificationsYamlArgs = {
  filter: InputMaybe<CertificationsYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<CertificationsYamlSortInput>>>;
};


export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<DirectorySortInput>>>;
};


export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FileSortInput>>>;
};


export type QueryAllHistoriesYamlArgs = {
  filter: InputMaybe<HistoriesYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<HistoriesYamlSortInput>>>;
};


export type QueryAllHistoryArgs = {
  filter: InputMaybe<HistoryFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<HistorySortInput>>>;
};


export type QueryAllMdxArgs = {
  filter: InputMaybe<MdxFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<MdxSortInput>>>;
};


export type QueryAllNotesYamlArgs = {
  filter: InputMaybe<NotesYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<NotesYamlSortInput>>>;
};


export type QueryAllOssesYamlArgs = {
  filter: InputMaybe<OssesYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<OssesYamlSortInput>>>;
};


export type QueryAllOutputArgs = {
  filter: InputMaybe<OutputFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<OutputSortInput>>>;
};


export type QueryAllProjectArgs = {
  filter: InputMaybe<ProjectFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ProjectSortInput>>>;
};


export type QueryAllProjectsYamlArgs = {
  filter: InputMaybe<ProjectsYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ProjectsYamlSortInput>>>;
};


export type QueryAllSearchArgs = {
  filter: InputMaybe<SearchFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SearchSortInput>>>;
};


export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteSortInput>>>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataSortInput>>>;
};


export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionSortInput>>>;
};


export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePageSortInput>>>;
};


export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePluginSortInput>>>;
};


export type QueryAllSlidesYamlArgs = {
  filter: InputMaybe<SlidesYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SlidesYamlSortInput>>>;
};


export type QueryAllTimelineArgs = {
  filter: InputMaybe<TimelineFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<TimelineSortInput>>>;
};


export type QueryArticlesYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QueryCertificationsYamlArgs = {
  category: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  endDate: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryDirectoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childArticlesYaml: InputMaybe<ArticlesYamlFilterInput>;
  childCertificationsYaml: InputMaybe<CertificationsYamlFilterInput>;
  childHistoriesYaml: InputMaybe<HistoriesYamlFilterInput>;
  childMdx: InputMaybe<MdxFilterInput>;
  childNotesYaml: InputMaybe<NotesYamlFilterInput>;
  childOssesYaml: InputMaybe<OssesYamlFilterInput>;
  childProjectsYaml: InputMaybe<ProjectsYamlFilterInput>;
  childSlidesYaml: InputMaybe<SlidesYamlFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenArticlesYaml: InputMaybe<ArticlesYamlFilterListInput>;
  childrenCertificationsYaml: InputMaybe<CertificationsYamlFilterListInput>;
  childrenHistoriesYaml: InputMaybe<HistoriesYamlFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
  childrenNotesYaml: InputMaybe<NotesYamlFilterListInput>;
  childrenOssesYaml: InputMaybe<OssesYamlFilterListInput>;
  childrenProjectsYaml: InputMaybe<ProjectsYamlFilterListInput>;
  childrenSlidesYaml: InputMaybe<SlidesYamlFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  publicURL: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


export type QueryHistoriesYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  icon: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryHistoryArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryMdxArgs = {
  body: InputMaybe<StringQueryOperatorInput>;
  category: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  frontmatter: InputMaybe<MdxFrontmatterFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tableOfContents: InputMaybe<JsonQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updateDate: InputMaybe<DateQueryOperatorInput>;
};


export type QueryNotesYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QueryOssesYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QueryOutputArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryProjectArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QueryProjectsYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  endDate: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  icon: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySearchArgs = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  host: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxImportSource: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  port: InputMaybe<IntQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySlidesYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QueryTimelineArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
};

export type Search = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly slug: Maybe<Scalars['String']['output']>;
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};

export type SearchConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SearchEdge>;
  readonly group: ReadonlyArray<SearchGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Search>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SearchConnectionDistinctArgs = {
  field: SearchFieldSelector;
};


export type SearchConnectionGroupArgs = {
  field: SearchFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SearchConnectionMaxArgs = {
  field: SearchFieldSelector;
};


export type SearchConnectionMinArgs = {
  field: SearchFieldSelector;
};


export type SearchConnectionSumArgs = {
  field: SearchFieldSelector;
};

export type SearchEdge = {
  readonly next: Maybe<Search>;
  readonly node: Search;
  readonly previous: Maybe<Search>;
};

export type SearchFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type SearchFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type SearchGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SearchEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SearchGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Search>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SearchGroupConnectionDistinctArgs = {
  field: SearchFieldSelector;
};


export type SearchGroupConnectionGroupArgs = {
  field: SearchFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SearchGroupConnectionMaxArgs = {
  field: SearchFieldSelector;
};


export type SearchGroupConnectionMinArgs = {
  field: SearchFieldSelector;
};


export type SearchGroupConnectionSumArgs = {
  field: SearchFieldSelector;
};

export type SearchSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

export type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']['output']>;
  readonly children: ReadonlyArray<Node>;
  readonly graphqlTypegen: Maybe<Scalars['Boolean']['output']>;
  readonly host: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly jsxImportSource: Maybe<Scalars['String']['output']>;
  readonly jsxRuntime: Maybe<Scalars['String']['output']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']['output']>;
  readonly polyfill: Maybe<Scalars['Boolean']['output']>;
  readonly port: Maybe<Scalars['Int']['output']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']['output']>;
};


export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']['output']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

export type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
};

export type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

export type SiteFieldSelector = {
  readonly buildTime: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly graphqlTypegen: InputMaybe<FieldSelectorEnum>;
  readonly host: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly jsxImportSource: InputMaybe<FieldSelectorEnum>;
  readonly jsxRuntime: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pathPrefix: InputMaybe<FieldSelectorEnum>;
  readonly polyfill: InputMaybe<FieldSelectorEnum>;
  readonly port: InputMaybe<FieldSelectorEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFieldSelector>;
  readonly trailingSlash: InputMaybe<FieldSelectorEnum>;
};

export type SiteFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly graphqlTypegen: InputMaybe<BooleanQueryOperatorInput>;
  readonly host: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxImportSource: InputMaybe<StringQueryOperatorInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly port: InputMaybe<IntQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String']['output'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']['output']>;
  readonly originalAbsoluteFilePath: Scalars['String']['output'];
  readonly originalRelativeFilePath: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String']['output'];
  readonly relativeCompiledFilePath: Scalars['String']['output'];
};

export type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  readonly absoluteCompiledFilePath: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly functionRoute: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<FieldSelectorEnum>;
  readonly originalRelativeFilePath: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginName: InputMaybe<FieldSelectorEnum>;
  readonly relativeCompiledFilePath: InputMaybe<FieldSelectorEnum>;
};

export type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionSortInput = {
  readonly absoluteCompiledFilePath: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly functionRoute: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly originalAbsoluteFilePath: InputMaybe<SortOrderEnum>;
  readonly originalRelativeFilePath: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginName: InputMaybe<SortOrderEnum>;
  readonly relativeCompiledFilePath: InputMaybe<SortOrderEnum>;
};

export type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String']['output'];
  readonly componentChunkName: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String']['output'];
  readonly matchPath: Maybe<Scalars['String']['output']>;
  readonly pageContext: Maybe<Scalars['JSON']['output']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String']['output'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly component: InputMaybe<FieldSelectorEnum>;
  readonly componentChunkName: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly internalComponentName: InputMaybe<FieldSelectorEnum>;
  readonly matchPath: InputMaybe<FieldSelectorEnum>;
  readonly pageContext: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly path: InputMaybe<FieldSelectorEnum>;
  readonly pluginCreator: InputMaybe<SitePluginFieldSelector>;
};

export type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JsonQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly component: InputMaybe<SortOrderEnum>;
  readonly componentChunkName: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly internalComponentName: InputMaybe<SortOrderEnum>;
  readonly matchPath: InputMaybe<SortOrderEnum>;
  readonly pageContext: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly path: InputMaybe<SortOrderEnum>;
  readonly pluginCreator: InputMaybe<SitePluginSortInput>;
};

export type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly packageJson: Maybe<Scalars['JSON']['output']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']['output']>;
  readonly pluginOptions: Maybe<Scalars['JSON']['output']>;
  readonly resolve: Maybe<Scalars['String']['output']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly version: Maybe<Scalars['String']['output']>;
};

export type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

export type SitePluginFieldSelector = {
  readonly browserAPIs: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly nodeAPIs: InputMaybe<FieldSelectorEnum>;
  readonly packageJson: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly pluginFilepath: InputMaybe<FieldSelectorEnum>;
  readonly pluginOptions: InputMaybe<FieldSelectorEnum>;
  readonly resolve: InputMaybe<FieldSelectorEnum>;
  readonly ssrAPIs: InputMaybe<FieldSelectorEnum>;
  readonly version: InputMaybe<FieldSelectorEnum>;
};

export type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JsonQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JsonQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginSortInput = {
  readonly browserAPIs: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly nodeAPIs: InputMaybe<SortOrderEnum>;
  readonly packageJson: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pluginFilepath: InputMaybe<SortOrderEnum>;
  readonly pluginOptions: InputMaybe<SortOrderEnum>;
  readonly resolve: InputMaybe<SortOrderEnum>;
  readonly ssrAPIs: InputMaybe<SortOrderEnum>;
  readonly version: InputMaybe<SortOrderEnum>;
};

export type SiteSiteMetadata = {
  readonly description: Maybe<Scalars['String']['output']>;
  readonly siteUrl: Maybe<Scalars['String']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type SiteSiteMetadataFieldSelector = {
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly siteUrl: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

export type SiteSiteMetadataFilterInput = {
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSortInput = {
  readonly description: InputMaybe<SortOrderEnum>;
  readonly siteUrl: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
};

export type SiteSortInput = {
  readonly buildTime: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly graphqlTypegen: InputMaybe<SortOrderEnum>;
  readonly host: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly jsxImportSource: InputMaybe<SortOrderEnum>;
  readonly jsxRuntime: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly pathPrefix: InputMaybe<SortOrderEnum>;
  readonly polyfill: InputMaybe<SortOrderEnum>;
  readonly port: InputMaybe<SortOrderEnum>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataSortInput>;
  readonly trailingSlash: InputMaybe<SortOrderEnum>;
};

export type SlidesYaml = Node & Output & Timeline & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};


export type SlidesYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type SlidesYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SlidesYamlEdge>;
  readonly group: ReadonlyArray<SlidesYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SlidesYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SlidesYamlConnectionDistinctArgs = {
  field: SlidesYamlFieldSelector;
};


export type SlidesYamlConnectionGroupArgs = {
  field: SlidesYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SlidesYamlConnectionMaxArgs = {
  field: SlidesYamlFieldSelector;
};


export type SlidesYamlConnectionMinArgs = {
  field: SlidesYamlFieldSelector;
};


export type SlidesYamlConnectionSumArgs = {
  field: SlidesYamlFieldSelector;
};

export type SlidesYamlEdge = {
  readonly next: Maybe<SlidesYaml>;
  readonly node: SlidesYaml;
  readonly previous: Maybe<SlidesYaml>;
};

export type SlidesYamlFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type SlidesYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type SlidesYamlFilterListInput = {
  readonly elemMatch: InputMaybe<SlidesYamlFilterInput>;
};

export type SlidesYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SlidesYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SlidesYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SlidesYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SlidesYamlGroupConnectionDistinctArgs = {
  field: SlidesYamlFieldSelector;
};


export type SlidesYamlGroupConnectionGroupArgs = {
  field: SlidesYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SlidesYamlGroupConnectionMaxArgs = {
  field: SlidesYamlFieldSelector;
};


export type SlidesYamlGroupConnectionMinArgs = {
  field: SlidesYamlFieldSelector;
};


export type SlidesYamlGroupConnectionSumArgs = {
  field: SlidesYamlFieldSelector;
};

export type SlidesYamlSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  Asc = 0,
  Desc = 1
}

export type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']['input']>;
  readonly glob: InputMaybe<Scalars['String']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly ne: InputMaybe<Scalars['String']['input']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly regex: InputMaybe<Scalars['String']['input']>;
};

export type Timeline = {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
};


export type TimelineDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type TimelineConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<TimelineEdge>;
  readonly group: ReadonlyArray<TimelineGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Timeline>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type TimelineConnectionDistinctArgs = {
  field: TimelineFieldSelector;
};


export type TimelineConnectionGroupArgs = {
  field: TimelineFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type TimelineConnectionMaxArgs = {
  field: TimelineFieldSelector;
};


export type TimelineConnectionMinArgs = {
  field: TimelineFieldSelector;
};


export type TimelineConnectionSumArgs = {
  field: TimelineFieldSelector;
};

export type TimelineEdge = {
  readonly next: Maybe<Timeline>;
  readonly node: Timeline;
  readonly previous: Maybe<Timeline>;
};

export type TimelineFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
};

export type TimelineFields = {
  readonly dateYear: Scalars['Int']['output'];
  readonly endDateYear: Maybe<Scalars['Int']['output']>;
};

export type TimelineFieldsFieldSelector = {
  readonly dateYear: InputMaybe<FieldSelectorEnum>;
  readonly endDateYear: InputMaybe<FieldSelectorEnum>;
};

export type TimelineFieldsFilterInput = {
  readonly dateYear: InputMaybe<IntQueryOperatorInput>;
  readonly endDateYear: InputMaybe<IntQueryOperatorInput>;
};

export type TimelineFieldsSortInput = {
  readonly dateYear: InputMaybe<SortOrderEnum>;
  readonly endDateYear: InputMaybe<SortOrderEnum>;
};

export type TimelineFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

export type TimelineGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<TimelineEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<TimelineGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<Timeline>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type TimelineGroupConnectionDistinctArgs = {
  field: TimelineFieldSelector;
};


export type TimelineGroupConnectionGroupArgs = {
  field: TimelineFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type TimelineGroupConnectionMaxArgs = {
  field: TimelineFieldSelector;
};


export type TimelineGroupConnectionMinArgs = {
  field: TimelineFieldSelector;
};


export type TimelineGroupConnectionSumArgs = {
  field: TimelineFieldSelector;
};

export type TimelineSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
};

export type GatsbyPluginFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GatsbyPluginFeedQuery = { readonly allOutput: { readonly nodes: ReadonlyArray<(
      { readonly __typename: 'ArticlesYaml' }
      & Pick<ArticlesYaml, 'url' | 'title' | 'date'>
    ) | (
      { readonly __typename: 'Mdx' }
      & Pick<Mdx, 'slug' | 'title' | 'date'>
      & { readonly frontmatter: Pick<MdxFrontmatter, 'excerpt'> }
    ) | (
      { readonly __typename: 'NotesYaml' }
      & Pick<NotesYaml, 'url' | 'title' | 'date'>
    ) | (
      { readonly __typename: 'OssesYaml' }
      & Pick<OssesYaml, 'url' | 'title' | 'date'>
    ) | (
      { readonly __typename: 'SlidesYaml' }
      & Pick<SlidesYaml, 'url' | 'title' | 'date'>
    )> } };

export type GatsbyPluginSitemapQueryVariables = Exact<{ [key: string]: never; }>;


export type GatsbyPluginSitemapQuery = { readonly site: Maybe<Pick<Site, 'buildTime'>>, readonly allMdx: { readonly nodes: ReadonlyArray<{ readonly frontmatter: Pick<MdxFrontmatter, 'slug' | 'date' | 'updateDate'> }> } };

export type OnCreatePagesQueryVariables = Exact<{ [key: string]: never; }>;


export type OnCreatePagesQuery = { readonly allMdx: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'id'>
      & { readonly frontmatter: Pick<MdxFrontmatter, 'slug' | 'tags'>, readonly internal: Pick<Internal, 'contentFilePath'> }
    )> } };

export type OnCreatePagesStatefullyQueryVariables = Exact<{ [key: string]: never; }>;


export type OnCreatePagesStatefullyQuery = { readonly blogPosts: { readonly nodes: ReadonlyArray<{ readonly frontmatter: Pick<MdxFrontmatter, 'title' | 'slug' | 'excerpt'> }> }, readonly timelineItems: { readonly nodes: ReadonlyArray<(
      { readonly __typename: 'ArticlesYaml' }
      & Pick<ArticlesYaml, 'url' | 'title' | 'date'>
    ) | (
      { readonly __typename: 'CertificationsYaml' }
      & Pick<CertificationsYaml, 'title' | 'date'>
    ) | (
      { readonly __typename: 'HistoriesYaml' }
      & Pick<HistoriesYaml, 'title' | 'date'>
    ) | (
      { readonly __typename: 'Mdx' }
      & Pick<Mdx, 'slug' | 'title' | 'date'>
      & { readonly frontmatter: Pick<MdxFrontmatter, 'excerpt'> }
    ) | (
      { readonly __typename: 'NotesYaml' }
      & Pick<NotesYaml, 'url' | 'title' | 'date'>
    ) | (
      { readonly __typename: 'OssesYaml' }
      & Pick<OssesYaml, 'url' | 'title' | 'date'>
    ) | (
      { readonly __typename: 'ProjectsYaml' }
      & Pick<ProjectsYaml, 'title' | 'date'>
    ) | (
      { readonly __typename: 'SlidesYaml' }
      & Pick<SlidesYaml, 'url' | 'title' | 'date'>
    )> } };

export type BlogPostTableOfContentFragment = Pick<Mdx, 'tableOfContents'>;

export type RelatedBlogPostCardFragment = { readonly frontmatter: Pick<MdxFrontmatter, 'title' | 'slug'> };

export type RelatedBlogPostListFragment = (
  Pick<Mdx, 'id'>
  & { readonly frontmatter: Pick<MdxFrontmatter, 'title' | 'slug'> }
);

export type TimelineArticleCardFragment = Pick<ArticlesYaml, 'title' | 'date' | 'url'>;

export type TimelineCertificationCardFragment = Pick<CertificationsYaml, 'title' | 'date' | 'endDate'>;

export type TimelineHistoryCardFragment = Pick<HistoriesYaml, 'title' | 'date'>;

export type TimelineListTimelineFragment = { readonly group: ReadonlyArray<(
    { dateYear: TimelineGroupConnection['fieldValue'] }
    & { readonly nodes: ReadonlyArray<(
      { readonly __typename: 'ArticlesYaml' }
      & Pick<ArticlesYaml, 'id' | 'title' | 'date' | 'url'>
    ) | (
      { readonly __typename: 'CertificationsYaml' }
      & Pick<CertificationsYaml, 'id' | 'title' | 'date' | 'endDate'>
    ) | (
      { readonly __typename: 'HistoriesYaml' }
      & Pick<HistoriesYaml, 'id' | 'title' | 'date'>
    ) | (
      { readonly __typename: 'Mdx' }
      & Pick<Mdx, 'id' | 'title' | 'date' | 'slug'>
    ) | (
      { readonly __typename: 'NotesYaml' }
      & Pick<NotesYaml, 'id' | 'title' | 'date' | 'url'>
    ) | (
      { readonly __typename: 'OssesYaml' }
      & Pick<OssesYaml, 'id' | 'title' | 'date' | 'url'>
    ) | (
      { readonly __typename: 'ProjectsYaml' }
      & Pick<ProjectsYaml, 'id' | 'title' | 'date' | 'endDate'>
      & { readonly fields: Pick<TimelineFields, 'dateYear' | 'endDateYear'> }
    ) | (
      { readonly __typename: 'SlidesYaml' }
      & Pick<SlidesYaml, 'id' | 'title' | 'date' | 'url'>
    )> }
  )> };

export type TimelineListHistoryFragment = { readonly group: ReadonlyArray<(
    { dateYear: HistoryGroupConnection['fieldValue'] }
    & { readonly nodes: ReadonlyArray<(
      { readonly __typename: 'CertificationsYaml' }
      & Pick<CertificationsYaml, 'id' | 'title' | 'date' | 'endDate'>
    ) | (
      { readonly __typename: 'HistoriesYaml' }
      & Pick<HistoriesYaml, 'id' | 'title' | 'date'>
    )> }
  )> };

export type TimelineListOutputFragment = { readonly group: ReadonlyArray<(
    { dateYear: OutputGroupConnection['fieldValue'] }
    & { readonly nodes: ReadonlyArray<(
      { readonly __typename: 'ArticlesYaml' }
      & Pick<ArticlesYaml, 'id' | 'title' | 'date' | 'url'>
    ) | (
      { readonly __typename: 'Mdx' }
      & Pick<Mdx, 'id' | 'title' | 'date' | 'slug'>
    ) | (
      { readonly __typename: 'NotesYaml' }
      & Pick<NotesYaml, 'id' | 'title' | 'date' | 'url'>
    ) | (
      { readonly __typename: 'OssesYaml' }
      & Pick<OssesYaml, 'id' | 'title' | 'date' | 'url'>
    ) | (
      { readonly __typename: 'SlidesYaml' }
      & Pick<SlidesYaml, 'id' | 'title' | 'date' | 'url'>
    )> }
  )> };

export type TimelineListProjectFragment = { readonly group: ReadonlyArray<(
    { dateYear: ProjectGroupConnection['fieldValue'] }
    & { readonly nodes: ReadonlyArray<(
      { readonly __typename: 'OssesYaml' }
      & Pick<OssesYaml, 'id' | 'title' | 'date' | 'url'>
    ) | (
      { readonly __typename: 'ProjectsYaml' }
      & Pick<ProjectsYaml, 'id' | 'title' | 'date' | 'endDate'>
      & { readonly fields: Pick<TimelineFields, 'dateYear' | 'endDateYear'> }
    )> }
  )> };

export type TimelineMdxCardFragment = Pick<Mdx, 'title' | 'date' | 'slug'>;

export type TimelineNoteCardFragment = Pick<NotesYaml, 'title' | 'date' | 'url'>;

export type TimelineOssCardFragment = Pick<OssesYaml, 'title' | 'date' | 'url'>;

export type TimelineProjectCardFragment = (
  Pick<ProjectsYaml, 'title' | 'date' | 'endDate'>
  & { readonly fields: Pick<TimelineFields, 'dateYear' | 'endDateYear'> }
);

export type TimelineSlideCardFragment = Pick<SlidesYaml, 'title' | 'date' | 'url'>;

export type TimelineVirtualizedListTimelineFragment = { readonly nodes: ReadonlyArray<(
    { readonly __typename: 'ArticlesYaml' }
    & Pick<ArticlesYaml, 'id' | 'title' | 'date' | 'url'>
    & { dateX: ArticlesYaml['date'] }
  ) | (
    { readonly __typename: 'CertificationsYaml' }
    & Pick<CertificationsYaml, 'id' | 'title' | 'date' | 'endDate'>
    & { dateX: CertificationsYaml['date'] }
  ) | (
    { readonly __typename: 'HistoriesYaml' }
    & Pick<HistoriesYaml, 'id' | 'title' | 'date'>
    & { dateX: HistoriesYaml['date'] }
  ) | (
    { readonly __typename: 'Mdx' }
    & Pick<Mdx, 'id' | 'title' | 'date' | 'slug'>
    & { dateX: Mdx['date'] }
  ) | (
    { readonly __typename: 'NotesYaml' }
    & Pick<NotesYaml, 'id' | 'title' | 'date' | 'url'>
    & { dateX: NotesYaml['date'] }
  ) | (
    { readonly __typename: 'OssesYaml' }
    & Pick<OssesYaml, 'id' | 'title' | 'date' | 'url'>
    & { dateX: OssesYaml['date'] }
  ) | (
    { readonly __typename: 'ProjectsYaml' }
    & Pick<ProjectsYaml, 'id' | 'title' | 'date' | 'endDate'>
    & { dateX: ProjectsYaml['date'] }
    & { readonly fields: Pick<TimelineFields, 'dateYear' | 'endDateYear'> }
  ) | (
    { readonly __typename: 'SlidesYaml' }
    & Pick<SlidesYaml, 'id' | 'title' | 'date' | 'url'>
    & { dateX: SlidesYaml['date'] }
  )> };

export type UseSearchQueryVariables = Exact<{ [key: string]: never; }>;


export type UseSearchQuery = { readonly allSearch: { readonly nodes: ReadonlyArray<Pick<Search, 'title' | 'excerpt' | 'url' | 'slug'>> } };

export type HistoryPageQueryVariables = Exact<{ [key: string]: never; }>;


export type HistoryPageQuery = { readonly histories: { readonly group: ReadonlyArray<(
      { dateYear: HistoryGroupConnection['fieldValue'] }
      & { readonly nodes: ReadonlyArray<(
        { readonly __typename: 'CertificationsYaml' }
        & Pick<CertificationsYaml, 'id' | 'title' | 'date' | 'endDate'>
      ) | (
        { readonly __typename: 'HistoriesYaml' }
        & Pick<HistoriesYaml, 'id' | 'title' | 'date'>
      )> }
    )> } };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { readonly timelineItems: { readonly nodes: ReadonlyArray<(
      { readonly __typename: 'ArticlesYaml' }
      & Pick<ArticlesYaml, 'id' | 'title' | 'date' | 'url'>
      & { dateX: ArticlesYaml['date'] }
    ) | (
      { readonly __typename: 'CertificationsYaml' }
      & Pick<CertificationsYaml, 'id' | 'title' | 'date' | 'endDate'>
      & { dateX: CertificationsYaml['date'] }
    ) | (
      { readonly __typename: 'HistoriesYaml' }
      & Pick<HistoriesYaml, 'id' | 'title' | 'date'>
      & { dateX: HistoriesYaml['date'] }
    ) | (
      { readonly __typename: 'Mdx' }
      & Pick<Mdx, 'id' | 'title' | 'date' | 'slug'>
      & { dateX: Mdx['date'] }
    ) | (
      { readonly __typename: 'NotesYaml' }
      & Pick<NotesYaml, 'id' | 'title' | 'date' | 'url'>
      & { dateX: NotesYaml['date'] }
    ) | (
      { readonly __typename: 'OssesYaml' }
      & Pick<OssesYaml, 'id' | 'title' | 'date' | 'url'>
      & { dateX: OssesYaml['date'] }
    ) | (
      { readonly __typename: 'ProjectsYaml' }
      & Pick<ProjectsYaml, 'id' | 'title' | 'date' | 'endDate'>
      & { dateX: ProjectsYaml['date'] }
      & { readonly fields: Pick<TimelineFields, 'dateYear' | 'endDateYear'> }
    ) | (
      { readonly __typename: 'SlidesYaml' }
      & Pick<SlidesYaml, 'id' | 'title' | 'date' | 'url'>
      & { dateX: SlidesYaml['date'] }
    )> } };

export type OutputsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type OutputsPageQuery = { readonly outputs: { readonly group: ReadonlyArray<(
      { dateYear: OutputGroupConnection['fieldValue'] }
      & { readonly nodes: ReadonlyArray<(
        { readonly __typename: 'ArticlesYaml' }
        & Pick<ArticlesYaml, 'id' | 'title' | 'date' | 'url'>
      ) | (
        { readonly __typename: 'Mdx' }
        & Pick<Mdx, 'id' | 'title' | 'date' | 'slug'>
      ) | (
        { readonly __typename: 'NotesYaml' }
        & Pick<NotesYaml, 'id' | 'title' | 'date' | 'url'>
      ) | (
        { readonly __typename: 'OssesYaml' }
        & Pick<OssesYaml, 'id' | 'title' | 'date' | 'url'>
      ) | (
        { readonly __typename: 'SlidesYaml' }
        & Pick<SlidesYaml, 'id' | 'title' | 'date' | 'url'>
      )> }
    )> }, readonly site: Maybe<Pick<Site, 'buildTime'>> };

export type ProjectsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsPageQuery = { readonly projects: { readonly group: ReadonlyArray<(
      { dateYear: ProjectGroupConnection['fieldValue'] }
      & { readonly nodes: ReadonlyArray<(
        { readonly __typename: 'OssesYaml' }
        & Pick<OssesYaml, 'id' | 'title' | 'date' | 'url'>
      ) | (
        { readonly __typename: 'ProjectsYaml' }
        & Pick<ProjectsYaml, 'id' | 'title' | 'date' | 'endDate'>
        & { readonly fields: Pick<TimelineFields, 'dateYear' | 'endDateYear'> }
      )> }
    )> } };

export type BlogPostTemplateQueryVariables = Exact<{
  id: Scalars['String']['input'];
  tags: ReadonlyArray<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type BlogPostTemplateQuery = { readonly post: Maybe<(
    Pick<Mdx, 'id' | 'tableOfContents'>
    & { readonly frontmatter: Pick<MdxFrontmatter, 'slug' | 'title' | 'excerpt' | 'date' | 'updateDate' | 'category' | 'tags'> }
  )>, readonly relatedPosts: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'id'>
      & { readonly frontmatter: Pick<MdxFrontmatter, 'date' | 'title' | 'slug'> }
    )> } };
