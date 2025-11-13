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
  GatsbyImageData: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AvifOptions = {
  readonly lossless: InputMaybe<Scalars['Boolean']['input']>;
  readonly quality: InputMaybe<Scalars['Int']['input']>;
  readonly speed: InputMaybe<Scalars['Int']['input']>;
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

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: InputMaybe<Scalars['Int']['input']>;
};

export type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']['input']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
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

export type DuotoneGradient = {
  readonly highlight: Scalars['String']['input'];
  readonly opacity: InputMaybe<Scalars['Int']['input']>;
  readonly shadow: Scalars['String']['input'];
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
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns the first child node of type ItemsYaml or null if there are no children of given type on this node */
  readonly childItemsYaml: Maybe<ItemsYaml>;
  /** Returns the first child node of type NotesYaml or null if there are no children of given type on this node */
  readonly childNotesYaml: Maybe<NotesYaml>;
  /** Returns the first child node of type OthersYaml or null if there are no children of given type on this node */
  readonly childOthersYaml: Maybe<OthersYaml>;
  /** Returns the first child node of type PresentationsYaml or null if there are no children of given type on this node */
  readonly childPresentationsYaml: Maybe<PresentationsYaml>;
  /** Returns the first child node of type QiitaJson or null if there are no children of given type on this node */
  readonly childQiitaJson: Maybe<QiitaJson>;
  /** Returns the first child node of type SlidesYaml or null if there are no children of given type on this node */
  readonly childSlidesYaml: Maybe<SlidesYaml>;
  /** Returns the first child node of type SpeakerDecksYaml or null if there are no children of given type on this node */
  readonly childSpeakerDecksYaml: Maybe<SpeakerDecksYaml>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ArticlesYaml */
  readonly childrenArticlesYaml: Maybe<ReadonlyArray<Maybe<ArticlesYaml>>>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type ItemsYaml */
  readonly childrenItemsYaml: Maybe<ReadonlyArray<Maybe<ItemsYaml>>>;
  /** Returns all children nodes filtered by type NotesYaml */
  readonly childrenNotesYaml: Maybe<ReadonlyArray<Maybe<NotesYaml>>>;
  /** Returns all children nodes filtered by type OthersYaml */
  readonly childrenOthersYaml: Maybe<ReadonlyArray<Maybe<OthersYaml>>>;
  /** Returns all children nodes filtered by type PresentationsYaml */
  readonly childrenPresentationsYaml: Maybe<ReadonlyArray<Maybe<PresentationsYaml>>>;
  /** Returns all children nodes filtered by type QiitaJson */
  readonly childrenQiitaJson: Maybe<ReadonlyArray<Maybe<QiitaJson>>>;
  /** Returns all children nodes filtered by type SlidesYaml */
  readonly childrenSlidesYaml: Maybe<ReadonlyArray<Maybe<SlidesYaml>>>;
  /** Returns all children nodes filtered by type SpeakerDecksYaml */
  readonly childrenSpeakerDecksYaml: Maybe<ReadonlyArray<Maybe<SpeakerDecksYaml>>>;
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
  readonly childImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly childItemsYaml: InputMaybe<ItemsYamlFieldSelector>;
  readonly childNotesYaml: InputMaybe<NotesYamlFieldSelector>;
  readonly childOthersYaml: InputMaybe<OthersYamlFieldSelector>;
  readonly childPresentationsYaml: InputMaybe<PresentationsYamlFieldSelector>;
  readonly childQiitaJson: InputMaybe<QiitaJsonFieldSelector>;
  readonly childSlidesYaml: InputMaybe<SlidesYamlFieldSelector>;
  readonly childSpeakerDecksYaml: InputMaybe<SpeakerDecksYamlFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenArticlesYaml: InputMaybe<ArticlesYamlFieldSelector>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly childrenItemsYaml: InputMaybe<ItemsYamlFieldSelector>;
  readonly childrenNotesYaml: InputMaybe<NotesYamlFieldSelector>;
  readonly childrenOthersYaml: InputMaybe<OthersYamlFieldSelector>;
  readonly childrenPresentationsYaml: InputMaybe<PresentationsYamlFieldSelector>;
  readonly childrenQiitaJson: InputMaybe<QiitaJsonFieldSelector>;
  readonly childrenSlidesYaml: InputMaybe<SlidesYamlFieldSelector>;
  readonly childrenSpeakerDecksYaml: InputMaybe<SpeakerDecksYamlFieldSelector>;
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
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly childItemsYaml: InputMaybe<ItemsYamlFilterInput>;
  readonly childNotesYaml: InputMaybe<NotesYamlFilterInput>;
  readonly childOthersYaml: InputMaybe<OthersYamlFilterInput>;
  readonly childPresentationsYaml: InputMaybe<PresentationsYamlFilterInput>;
  readonly childQiitaJson: InputMaybe<QiitaJsonFilterInput>;
  readonly childSlidesYaml: InputMaybe<SlidesYamlFilterInput>;
  readonly childSpeakerDecksYaml: InputMaybe<SpeakerDecksYamlFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenArticlesYaml: InputMaybe<ArticlesYamlFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly childrenItemsYaml: InputMaybe<ItemsYamlFilterListInput>;
  readonly childrenNotesYaml: InputMaybe<NotesYamlFilterListInput>;
  readonly childrenOthersYaml: InputMaybe<OthersYamlFilterListInput>;
  readonly childrenPresentationsYaml: InputMaybe<PresentationsYamlFilterListInput>;
  readonly childrenQiitaJson: InputMaybe<QiitaJsonFilterListInput>;
  readonly childrenSlidesYaml: InputMaybe<SlidesYamlFilterListInput>;
  readonly childrenSpeakerDecksYaml: InputMaybe<SpeakerDecksYamlFilterListInput>;
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
  readonly childImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly childItemsYaml: InputMaybe<ItemsYamlSortInput>;
  readonly childNotesYaml: InputMaybe<NotesYamlSortInput>;
  readonly childOthersYaml: InputMaybe<OthersYamlSortInput>;
  readonly childPresentationsYaml: InputMaybe<PresentationsYamlSortInput>;
  readonly childQiitaJson: InputMaybe<QiitaJsonSortInput>;
  readonly childSlidesYaml: InputMaybe<SlidesYamlSortInput>;
  readonly childSpeakerDecksYaml: InputMaybe<SpeakerDecksYamlSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenArticlesYaml: InputMaybe<ArticlesYamlSortInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly childrenItemsYaml: InputMaybe<ItemsYamlSortInput>;
  readonly childrenNotesYaml: InputMaybe<NotesYamlSortInput>;
  readonly childrenOthersYaml: InputMaybe<OthersYamlSortInput>;
  readonly childrenPresentationsYaml: InputMaybe<PresentationsYamlSortInput>;
  readonly childrenQiitaJson: InputMaybe<QiitaJsonSortInput>;
  readonly childrenSlidesYaml: InputMaybe<SlidesYamlSortInput>;
  readonly childrenSpeakerDecksYaml: InputMaybe<SpeakerDecksYamlSortInput>;
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

export type GatsbyImageDataQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['GatsbyImageData']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']['input']>>>;
  readonly ne: InputMaybe<Scalars['GatsbyImageData']['input']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']['input']>>>;
};

export enum GatsbyImageFormat {
  Auto = 0,
  Avif = 1,
  Jpg = 2,
  NoChange = 3,
  Png = 4,
  Webp = 5
}

export enum GatsbyImageLayout {
  Constrained = 0,
  Fixed = 1,
  FullWidth = 2
}

export enum GatsbyImagePlaceholder {
  Blurred = 0,
  DominantColor = 1,
  None = 2,
  TracedSvg = 3
}

export enum ImageCropFocus {
  Attention = 0,
  Center = 1,
  East = 2,
  Entropy = 3,
  North = 4,
  Northeast = 5,
  Northwest = 6,
  South = 7,
  Southeast = 8,
  Southwest = 9,
  West = 10
}

export enum ImageFit {
  Contain = 0,
  Cover = 1,
  Fill = 2,
  Inside = 3,
  Outside = 4
}

export enum ImageFormat {
  Auto = 0,
  Avif = 1,
  Jpg = 2,
  NoChange = 3,
  Png = 4,
  Webp = 5
}

export enum ImageLayout {
  Constrained = 0,
  Fixed = 1,
  FullWidth = 2
}

export enum ImagePlaceholder {
  Blurred = 0,
  DominantColor = 1,
  None = 2,
  TracedSvg = 3
}

export type ImageSharp = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['GatsbyImageData']['output'];
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64Width: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality: InputMaybe<Scalars['Int']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality: InputMaybe<Scalars['Int']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64Width: InputMaybe<Scalars['Int']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality: InputMaybe<Scalars['Int']['input']>;
  maxHeight: InputMaybe<Scalars['Int']['input']>;
  maxWidth: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality: InputMaybe<Scalars['Int']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  sizes?: InputMaybe<Scalars['String']['input']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']['input']>;
  avifOptions: InputMaybe<AvifOptions>;
  backgroundColor: InputMaybe<Scalars['String']['input']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']['input']>;
  jpgOptions: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PngOptions>;
  quality: InputMaybe<Scalars['Int']['input']>;
  sizes: InputMaybe<Scalars['String']['input']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  base64?: InputMaybe<Scalars['Boolean']['input']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  jpegQuality: InputMaybe<Scalars['Int']['input']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']['input']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']['input']>;
  pngQuality: InputMaybe<Scalars['Int']['input']>;
  quality: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']['input']>;
  webpQuality: InputMaybe<Scalars['Int']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

export type ImageSharpFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly fixed: InputMaybe<ImageSharpFixedFieldSelector>;
  readonly fluid: InputMaybe<ImageSharpFluidFieldSelector>;
  readonly gatsbyImageData: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly original: InputMaybe<ImageSharpOriginalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly resize: InputMaybe<ImageSharpResizeFieldSelector>;
};

export type ImageSharpFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  readonly aspectRatio: Maybe<Scalars['Float']['output']>;
  readonly base64: Maybe<Scalars['String']['output']>;
  readonly height: Scalars['Float']['output'];
  readonly originalName: Maybe<Scalars['String']['output']>;
  readonly src: Scalars['String']['output'];
  readonly srcSet: Scalars['String']['output'];
  readonly srcSetWebp: Maybe<Scalars['String']['output']>;
  readonly srcWebp: Maybe<Scalars['String']['output']>;
  readonly tracedSVG: Maybe<Scalars['String']['output']>;
  readonly width: Scalars['Float']['output'];
};

export type ImageSharpFixedFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly base64: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFixedFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFixedSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly base64: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp: InputMaybe<SortOrderEnum>;
  readonly srcWebp: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluid = {
  readonly aspectRatio: Scalars['Float']['output'];
  readonly base64: Maybe<Scalars['String']['output']>;
  readonly originalImg: Maybe<Scalars['String']['output']>;
  readonly originalName: Maybe<Scalars['String']['output']>;
  readonly presentationHeight: Scalars['Int']['output'];
  readonly presentationWidth: Scalars['Int']['output'];
  readonly sizes: Scalars['String']['output'];
  readonly src: Scalars['String']['output'];
  readonly srcSet: Scalars['String']['output'];
  readonly srcSetWebp: Maybe<Scalars['String']['output']>;
  readonly srcWebp: Maybe<Scalars['String']['output']>;
  readonly tracedSVG: Maybe<Scalars['String']['output']>;
};

export type ImageSharpFluidFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly base64: InputMaybe<FieldSelectorEnum>;
  readonly originalImg: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly presentationHeight: InputMaybe<FieldSelectorEnum>;
  readonly presentationWidth: InputMaybe<FieldSelectorEnum>;
  readonly sizes: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly srcSet: InputMaybe<FieldSelectorEnum>;
  readonly srcSetWebp: InputMaybe<FieldSelectorEnum>;
  readonly srcWebp: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg: InputMaybe<StringQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly base64: InputMaybe<SortOrderEnum>;
  readonly originalImg: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly presentationHeight: InputMaybe<SortOrderEnum>;
  readonly presentationWidth: InputMaybe<SortOrderEnum>;
  readonly sizes: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly srcSet: InputMaybe<SortOrderEnum>;
  readonly srcSetWebp: InputMaybe<SortOrderEnum>;
  readonly srcWebp: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
};

export type ImageSharpGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpOriginal = {
  readonly height: Maybe<Scalars['Float']['output']>;
  readonly src: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Float']['output']>;
};

export type ImageSharpOriginalFieldSelector = {
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFilterInput = {
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpOriginalSortInput = {
  readonly height: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResize = {
  readonly aspectRatio: Maybe<Scalars['Float']['output']>;
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly originalName: Maybe<Scalars['String']['output']>;
  readonly src: Maybe<Scalars['String']['output']>;
  readonly tracedSVG: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type ImageSharpResizeFieldSelector = {
  readonly aspectRatio: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly originalName: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly tracedSVG: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpResizeSortInput = {
  readonly aspectRatio: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly originalName: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly tracedSVG: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

export type ImageSharpSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly fixed: InputMaybe<ImageSharpFixedSortInput>;
  readonly fluid: InputMaybe<ImageSharpFluidSortInput>;
  readonly gatsbyImageData: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly original: InputMaybe<ImageSharpOriginalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly resize: InputMaybe<ImageSharpResizeSortInput>;
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

export type ItemsYaml = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Maybe<Scalars['Date']['output']>;
  readonly fields: Maybe<ItemsYamlFields>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
};


export type ItemsYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ItemsYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ItemsYamlEdge>;
  readonly group: ReadonlyArray<ItemsYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ItemsYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ItemsYamlConnectionDistinctArgs = {
  field: ItemsYamlFieldSelector;
};


export type ItemsYamlConnectionGroupArgs = {
  field: ItemsYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ItemsYamlConnectionMaxArgs = {
  field: ItemsYamlFieldSelector;
};


export type ItemsYamlConnectionMinArgs = {
  field: ItemsYamlFieldSelector;
};


export type ItemsYamlConnectionSumArgs = {
  field: ItemsYamlFieldSelector;
};

export type ItemsYamlEdge = {
  readonly next: Maybe<ItemsYaml>;
  readonly node: ItemsYaml;
  readonly previous: Maybe<ItemsYaml>;
};

export type ItemsYamlFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<ItemsYamlFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type ItemsYamlFields = {
  readonly dateYear: Maybe<Scalars['Int']['output']>;
};

export type ItemsYamlFieldsFieldSelector = {
  readonly dateYear: InputMaybe<FieldSelectorEnum>;
};

export type ItemsYamlFieldsFilterInput = {
  readonly dateYear: InputMaybe<IntQueryOperatorInput>;
};

export type ItemsYamlFieldsSortInput = {
  readonly dateYear: InputMaybe<SortOrderEnum>;
};

export type ItemsYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<ItemsYamlFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type ItemsYamlFilterListInput = {
  readonly elemMatch: InputMaybe<ItemsYamlFilterInput>;
};

export type ItemsYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ItemsYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ItemsYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ItemsYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ItemsYamlGroupConnectionDistinctArgs = {
  field: ItemsYamlFieldSelector;
};


export type ItemsYamlGroupConnectionGroupArgs = {
  field: ItemsYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ItemsYamlGroupConnectionMaxArgs = {
  field: ItemsYamlFieldSelector;
};


export type ItemsYamlGroupConnectionMinArgs = {
  field: ItemsYamlFieldSelector;
};


export type ItemsYamlGroupConnectionSumArgs = {
  field: ItemsYamlFieldSelector;
};

export type ItemsYamlSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<ItemsYamlFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

export type JpgOptions = {
  readonly progressive: InputMaybe<Scalars['Boolean']['input']>;
  readonly quality: InputMaybe<Scalars['Int']['input']>;
};

export type JsonQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']['input']>;
  readonly glob: InputMaybe<Scalars['JSON']['input']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly ne: InputMaybe<Scalars['JSON']['input']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly regex: InputMaybe<Scalars['JSON']['input']>;
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

export type OthersYaml = Node & Output & Timeline & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};


export type OthersYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type OthersYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<OthersYamlEdge>;
  readonly group: ReadonlyArray<OthersYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<OthersYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type OthersYamlConnectionDistinctArgs = {
  field: OthersYamlFieldSelector;
};


export type OthersYamlConnectionGroupArgs = {
  field: OthersYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type OthersYamlConnectionMaxArgs = {
  field: OthersYamlFieldSelector;
};


export type OthersYamlConnectionMinArgs = {
  field: OthersYamlFieldSelector;
};


export type OthersYamlConnectionSumArgs = {
  field: OthersYamlFieldSelector;
};

export type OthersYamlEdge = {
  readonly next: Maybe<OthersYaml>;
  readonly node: OthersYaml;
  readonly previous: Maybe<OthersYaml>;
};

export type OthersYamlFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type OthersYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type OthersYamlFilterListInput = {
  readonly elemMatch: InputMaybe<OthersYamlFilterInput>;
};

export type OthersYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<OthersYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<OthersYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<OthersYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type OthersYamlGroupConnectionDistinctArgs = {
  field: OthersYamlFieldSelector;
};


export type OthersYamlGroupConnectionGroupArgs = {
  field: OthersYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type OthersYamlGroupConnectionMaxArgs = {
  field: OthersYamlFieldSelector;
};


export type OthersYamlGroupConnectionMinArgs = {
  field: OthersYamlFieldSelector;
};


export type OthersYamlGroupConnectionSumArgs = {
  field: OthersYamlFieldSelector;
};

export type OthersYamlSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
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

export type PngOptions = {
  readonly compressionSpeed: InputMaybe<Scalars['Int']['input']>;
  readonly quality: InputMaybe<Scalars['Int']['input']>;
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

export type Potrace = {
  readonly alphaMax: InputMaybe<Scalars['Float']['input']>;
  readonly background: InputMaybe<Scalars['String']['input']>;
  readonly blackOnWhite: InputMaybe<Scalars['Boolean']['input']>;
  readonly color: InputMaybe<Scalars['String']['input']>;
  readonly optCurve: InputMaybe<Scalars['Boolean']['input']>;
  readonly optTolerance: InputMaybe<Scalars['Float']['input']>;
  readonly threshold: InputMaybe<Scalars['Int']['input']>;
  readonly turdSize: InputMaybe<Scalars['Float']['input']>;
  readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 0,
  TurnpolicyLeft = 1,
  TurnpolicyMajority = 2,
  TurnpolicyMinority = 3,
  TurnpolicyRight = 4,
  TurnpolicyWhite = 5
}

export type PresentationsYaml = Node & Output & Timeline & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly fields: TimelineFields;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};


export type PresentationsYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type PresentationsYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<PresentationsYamlEdge>;
  readonly group: ReadonlyArray<PresentationsYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<PresentationsYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type PresentationsYamlConnectionDistinctArgs = {
  field: PresentationsYamlFieldSelector;
};


export type PresentationsYamlConnectionGroupArgs = {
  field: PresentationsYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type PresentationsYamlConnectionMaxArgs = {
  field: PresentationsYamlFieldSelector;
};


export type PresentationsYamlConnectionMinArgs = {
  field: PresentationsYamlFieldSelector;
};


export type PresentationsYamlConnectionSumArgs = {
  field: PresentationsYamlFieldSelector;
};

export type PresentationsYamlEdge = {
  readonly next: Maybe<PresentationsYaml>;
  readonly node: PresentationsYaml;
  readonly previous: Maybe<PresentationsYaml>;
};

export type PresentationsYamlFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly fields: InputMaybe<TimelineFieldsFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type PresentationsYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly fields: InputMaybe<TimelineFieldsFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type PresentationsYamlFilterListInput = {
  readonly elemMatch: InputMaybe<PresentationsYamlFilterInput>;
};

export type PresentationsYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<PresentationsYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<PresentationsYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<PresentationsYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type PresentationsYamlGroupConnectionDistinctArgs = {
  field: PresentationsYamlFieldSelector;
};


export type PresentationsYamlGroupConnectionGroupArgs = {
  field: PresentationsYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type PresentationsYamlGroupConnectionMaxArgs = {
  field: PresentationsYamlFieldSelector;
};


export type PresentationsYamlGroupConnectionMinArgs = {
  field: PresentationsYamlFieldSelector;
};


export type PresentationsYamlGroupConnectionSumArgs = {
  field: PresentationsYamlFieldSelector;
};

export type PresentationsYamlSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly fields: InputMaybe<TimelineFieldsSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

export type QiitaJson = Node & {
  readonly body: Maybe<Scalars['String']['output']>;
  readonly children: ReadonlyArray<Node>;
  readonly coediting: Maybe<Scalars['Boolean']['output']>;
  readonly comments_count: Maybe<Scalars['Int']['output']>;
  readonly created_at: Maybe<Scalars['Date']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly jsonId: Maybe<Scalars['String']['output']>;
  readonly likes_count: Maybe<Scalars['Int']['output']>;
  readonly parent: Maybe<Node>;
  readonly private: Maybe<Scalars['Boolean']['output']>;
  readonly reactions_count: Maybe<Scalars['Int']['output']>;
  readonly rendered_body: Maybe<Scalars['String']['output']>;
  readonly slide: Maybe<Scalars['Boolean']['output']>;
  readonly stocks_count: Maybe<Scalars['Int']['output']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<QiitaJsonTags>>>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updated_at: Maybe<Scalars['Date']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
  readonly user: Maybe<QiitaJsonUser>;
};


export type QiitaJsonCreated_AtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type QiitaJsonUpdated_AtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type QiitaJsonConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<QiitaJsonEdge>;
  readonly group: ReadonlyArray<QiitaJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<QiitaJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type QiitaJsonConnectionDistinctArgs = {
  field: QiitaJsonFieldSelector;
};


export type QiitaJsonConnectionGroupArgs = {
  field: QiitaJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type QiitaJsonConnectionMaxArgs = {
  field: QiitaJsonFieldSelector;
};


export type QiitaJsonConnectionMinArgs = {
  field: QiitaJsonFieldSelector;
};


export type QiitaJsonConnectionSumArgs = {
  field: QiitaJsonFieldSelector;
};

export type QiitaJsonEdge = {
  readonly next: Maybe<QiitaJson>;
  readonly node: QiitaJson;
  readonly previous: Maybe<QiitaJson>;
};

export type QiitaJsonFieldSelector = {
  readonly body: InputMaybe<FieldSelectorEnum>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly coediting: InputMaybe<FieldSelectorEnum>;
  readonly comments_count: InputMaybe<FieldSelectorEnum>;
  readonly created_at: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly jsonId: InputMaybe<FieldSelectorEnum>;
  readonly likes_count: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly private: InputMaybe<FieldSelectorEnum>;
  readonly reactions_count: InputMaybe<FieldSelectorEnum>;
  readonly rendered_body: InputMaybe<FieldSelectorEnum>;
  readonly slide: InputMaybe<FieldSelectorEnum>;
  readonly stocks_count: InputMaybe<FieldSelectorEnum>;
  readonly tags: InputMaybe<QiitaJsonTagsFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updated_at: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly user: InputMaybe<QiitaJsonUserFieldSelector>;
};

export type QiitaJsonFilterInput = {
  readonly body: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly coediting: InputMaybe<BooleanQueryOperatorInput>;
  readonly comments_count: InputMaybe<IntQueryOperatorInput>;
  readonly created_at: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsonId: InputMaybe<StringQueryOperatorInput>;
  readonly likes_count: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly private: InputMaybe<BooleanQueryOperatorInput>;
  readonly reactions_count: InputMaybe<IntQueryOperatorInput>;
  readonly rendered_body: InputMaybe<StringQueryOperatorInput>;
  readonly slide: InputMaybe<BooleanQueryOperatorInput>;
  readonly stocks_count: InputMaybe<IntQueryOperatorInput>;
  readonly tags: InputMaybe<QiitaJsonTagsFilterListInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updated_at: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly user: InputMaybe<QiitaJsonUserFilterInput>;
};

export type QiitaJsonFilterListInput = {
  readonly elemMatch: InputMaybe<QiitaJsonFilterInput>;
};

export type QiitaJsonGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<QiitaJsonEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<QiitaJsonGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<QiitaJson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type QiitaJsonGroupConnectionDistinctArgs = {
  field: QiitaJsonFieldSelector;
};


export type QiitaJsonGroupConnectionGroupArgs = {
  field: QiitaJsonFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type QiitaJsonGroupConnectionMaxArgs = {
  field: QiitaJsonFieldSelector;
};


export type QiitaJsonGroupConnectionMinArgs = {
  field: QiitaJsonFieldSelector;
};


export type QiitaJsonGroupConnectionSumArgs = {
  field: QiitaJsonFieldSelector;
};

export type QiitaJsonSortInput = {
  readonly body: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly coediting: InputMaybe<SortOrderEnum>;
  readonly comments_count: InputMaybe<SortOrderEnum>;
  readonly created_at: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly jsonId: InputMaybe<SortOrderEnum>;
  readonly likes_count: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly private: InputMaybe<SortOrderEnum>;
  readonly reactions_count: InputMaybe<SortOrderEnum>;
  readonly rendered_body: InputMaybe<SortOrderEnum>;
  readonly slide: InputMaybe<SortOrderEnum>;
  readonly stocks_count: InputMaybe<SortOrderEnum>;
  readonly tags: InputMaybe<QiitaJsonTagsSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updated_at: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly user: InputMaybe<QiitaJsonUserSortInput>;
};

export type QiitaJsonTags = {
  readonly name: Maybe<Scalars['String']['output']>;
};

export type QiitaJsonTagsFieldSelector = {
  readonly name: InputMaybe<FieldSelectorEnum>;
};

export type QiitaJsonTagsFilterInput = {
  readonly name: InputMaybe<StringQueryOperatorInput>;
};

export type QiitaJsonTagsFilterListInput = {
  readonly elemMatch: InputMaybe<QiitaJsonTagsFilterInput>;
};

export type QiitaJsonTagsSortInput = {
  readonly name: InputMaybe<SortOrderEnum>;
};

export type QiitaJsonUser = {
  readonly description: Maybe<Scalars['String']['output']>;
  readonly facebook_id: Maybe<Scalars['String']['output']>;
  readonly followees_count: Maybe<Scalars['Int']['output']>;
  readonly followers_count: Maybe<Scalars['Int']['output']>;
  readonly github_login_name: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['String']['output']>;
  readonly items_count: Maybe<Scalars['Int']['output']>;
  readonly linkedin_id: Maybe<Scalars['String']['output']>;
  readonly location: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly organization: Maybe<Scalars['String']['output']>;
  readonly permanent_id: Maybe<Scalars['Int']['output']>;
  readonly profile_image_url: Maybe<Scalars['String']['output']>;
  readonly team_only: Maybe<Scalars['Boolean']['output']>;
  readonly twitter_screen_name: Maybe<Scalars['String']['output']>;
  readonly website_url: Maybe<Scalars['String']['output']>;
};

export type QiitaJsonUserFieldSelector = {
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly facebook_id: InputMaybe<FieldSelectorEnum>;
  readonly followees_count: InputMaybe<FieldSelectorEnum>;
  readonly followers_count: InputMaybe<FieldSelectorEnum>;
  readonly github_login_name: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly items_count: InputMaybe<FieldSelectorEnum>;
  readonly linkedin_id: InputMaybe<FieldSelectorEnum>;
  readonly location: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly organization: InputMaybe<FieldSelectorEnum>;
  readonly permanent_id: InputMaybe<FieldSelectorEnum>;
  readonly profile_image_url: InputMaybe<FieldSelectorEnum>;
  readonly team_only: InputMaybe<FieldSelectorEnum>;
  readonly twitter_screen_name: InputMaybe<FieldSelectorEnum>;
  readonly website_url: InputMaybe<FieldSelectorEnum>;
};

export type QiitaJsonUserFilterInput = {
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly facebook_id: InputMaybe<StringQueryOperatorInput>;
  readonly followees_count: InputMaybe<IntQueryOperatorInput>;
  readonly followers_count: InputMaybe<IntQueryOperatorInput>;
  readonly github_login_name: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly items_count: InputMaybe<IntQueryOperatorInput>;
  readonly linkedin_id: InputMaybe<StringQueryOperatorInput>;
  readonly location: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly organization: InputMaybe<StringQueryOperatorInput>;
  readonly permanent_id: InputMaybe<IntQueryOperatorInput>;
  readonly profile_image_url: InputMaybe<StringQueryOperatorInput>;
  readonly team_only: InputMaybe<BooleanQueryOperatorInput>;
  readonly twitter_screen_name: InputMaybe<StringQueryOperatorInput>;
  readonly website_url: InputMaybe<StringQueryOperatorInput>;
};

export type QiitaJsonUserSortInput = {
  readonly description: InputMaybe<SortOrderEnum>;
  readonly facebook_id: InputMaybe<SortOrderEnum>;
  readonly followees_count: InputMaybe<SortOrderEnum>;
  readonly followers_count: InputMaybe<SortOrderEnum>;
  readonly github_login_name: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly items_count: InputMaybe<SortOrderEnum>;
  readonly linkedin_id: InputMaybe<SortOrderEnum>;
  readonly location: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly organization: InputMaybe<SortOrderEnum>;
  readonly permanent_id: InputMaybe<SortOrderEnum>;
  readonly profile_image_url: InputMaybe<SortOrderEnum>;
  readonly team_only: InputMaybe<SortOrderEnum>;
  readonly twitter_screen_name: InputMaybe<SortOrderEnum>;
  readonly website_url: InputMaybe<SortOrderEnum>;
};

export type Query = {
  readonly allArticlesYaml: ArticlesYamlConnection;
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allItemsYaml: ItemsYamlConnection;
  readonly allNotesYaml: NotesYamlConnection;
  readonly allOthersYaml: OthersYamlConnection;
  readonly allOutput: OutputConnection;
  readonly allPresentationsYaml: PresentationsYamlConnection;
  readonly allQiitaJson: QiitaJsonConnection;
  readonly allSearch: SearchConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly allSlidesYaml: SlidesYamlConnection;
  readonly allSpeakerDecksYaml: SpeakerDecksYamlConnection;
  readonly allStaticImage: StaticImageConnection;
  readonly allTimeline: TimelineConnection;
  readonly articlesYaml: Maybe<ArticlesYaml>;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly itemsYaml: Maybe<ItemsYaml>;
  readonly notesYaml: Maybe<NotesYaml>;
  readonly othersYaml: Maybe<OthersYaml>;
  readonly output: Maybe<Output>;
  readonly presentationsYaml: Maybe<PresentationsYaml>;
  readonly qiitaJson: Maybe<QiitaJson>;
  readonly search: Maybe<Search>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly slidesYaml: Maybe<SlidesYaml>;
  readonly speakerDecksYaml: Maybe<SpeakerDecksYaml>;
  readonly staticImage: Maybe<StaticImage>;
  readonly timeline: Maybe<Timeline>;
};


export type QueryAllArticlesYamlArgs = {
  filter: InputMaybe<ArticlesYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ArticlesYamlSortInput>>>;
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


export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpSortInput>>>;
};


export type QueryAllItemsYamlArgs = {
  filter: InputMaybe<ItemsYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ItemsYamlSortInput>>>;
};


export type QueryAllNotesYamlArgs = {
  filter: InputMaybe<NotesYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<NotesYamlSortInput>>>;
};


export type QueryAllOthersYamlArgs = {
  filter: InputMaybe<OthersYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<OthersYamlSortInput>>>;
};


export type QueryAllOutputArgs = {
  filter: InputMaybe<OutputFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<OutputSortInput>>>;
};


export type QueryAllPresentationsYamlArgs = {
  filter: InputMaybe<PresentationsYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<PresentationsYamlSortInput>>>;
};


export type QueryAllQiitaJsonArgs = {
  filter: InputMaybe<QiitaJsonFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<QiitaJsonSortInput>>>;
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


export type QueryAllSpeakerDecksYamlArgs = {
  filter: InputMaybe<SpeakerDecksYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SpeakerDecksYamlSortInput>>>;
};


export type QueryAllStaticImageArgs = {
  filter: InputMaybe<StaticImageFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<StaticImageSortInput>>>;
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
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  childItemsYaml: InputMaybe<ItemsYamlFilterInput>;
  childNotesYaml: InputMaybe<NotesYamlFilterInput>;
  childOthersYaml: InputMaybe<OthersYamlFilterInput>;
  childPresentationsYaml: InputMaybe<PresentationsYamlFilterInput>;
  childQiitaJson: InputMaybe<QiitaJsonFilterInput>;
  childSlidesYaml: InputMaybe<SlidesYamlFilterInput>;
  childSpeakerDecksYaml: InputMaybe<SpeakerDecksYamlFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenArticlesYaml: InputMaybe<ArticlesYamlFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  childrenItemsYaml: InputMaybe<ItemsYamlFilterListInput>;
  childrenNotesYaml: InputMaybe<NotesYamlFilterListInput>;
  childrenOthersYaml: InputMaybe<OthersYamlFilterListInput>;
  childrenPresentationsYaml: InputMaybe<PresentationsYamlFilterListInput>;
  childrenQiitaJson: InputMaybe<QiitaJsonFilterListInput>;
  childrenSlidesYaml: InputMaybe<SlidesYamlFilterListInput>;
  childrenSpeakerDecksYaml: InputMaybe<SpeakerDecksYamlFilterListInput>;
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


export type QueryImageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QueryItemsYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<ItemsYamlFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
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


export type QueryOthersYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
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


export type QueryPresentationsYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  fields: InputMaybe<TimelineFieldsFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QueryQiitaJsonArgs = {
  body: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  coediting: InputMaybe<BooleanQueryOperatorInput>;
  comments_count: InputMaybe<IntQueryOperatorInput>;
  created_at: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsonId: InputMaybe<StringQueryOperatorInput>;
  likes_count: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  private: InputMaybe<BooleanQueryOperatorInput>;
  reactions_count: InputMaybe<IntQueryOperatorInput>;
  rendered_body: InputMaybe<StringQueryOperatorInput>;
  slide: InputMaybe<BooleanQueryOperatorInput>;
  stocks_count: InputMaybe<IntQueryOperatorInput>;
  tags: InputMaybe<QiitaJsonTagsFilterListInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updated_at: InputMaybe<DateQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  user: InputMaybe<QiitaJsonUserFilterInput>;
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


export type QuerySpeakerDecksYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  playerId: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QueryStaticImageArgs = {
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
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
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

export type SpeakerDecksYaml = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Scalars['Date']['output'];
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly playerId: Scalars['String']['output'];
  readonly title: Scalars['String']['output'];
  readonly url: Scalars['String']['output'];
};


export type SpeakerDecksYamlDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type SpeakerDecksYamlConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SpeakerDecksYamlEdge>;
  readonly group: ReadonlyArray<SpeakerDecksYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SpeakerDecksYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SpeakerDecksYamlConnectionDistinctArgs = {
  field: SpeakerDecksYamlFieldSelector;
};


export type SpeakerDecksYamlConnectionGroupArgs = {
  field: SpeakerDecksYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SpeakerDecksYamlConnectionMaxArgs = {
  field: SpeakerDecksYamlFieldSelector;
};


export type SpeakerDecksYamlConnectionMinArgs = {
  field: SpeakerDecksYamlFieldSelector;
};


export type SpeakerDecksYamlConnectionSumArgs = {
  field: SpeakerDecksYamlFieldSelector;
};

export type SpeakerDecksYamlEdge = {
  readonly next: Maybe<SpeakerDecksYaml>;
  readonly node: SpeakerDecksYaml;
  readonly previous: Maybe<SpeakerDecksYaml>;
};

export type SpeakerDecksYamlFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly playerId: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type SpeakerDecksYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly playerId: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type SpeakerDecksYamlFilterListInput = {
  readonly elemMatch: InputMaybe<SpeakerDecksYamlFilterInput>;
};

export type SpeakerDecksYamlGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<SpeakerDecksYamlEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<SpeakerDecksYamlGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<SpeakerDecksYaml>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type SpeakerDecksYamlGroupConnectionDistinctArgs = {
  field: SpeakerDecksYamlFieldSelector;
};


export type SpeakerDecksYamlGroupConnectionGroupArgs = {
  field: SpeakerDecksYamlFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type SpeakerDecksYamlGroupConnectionMaxArgs = {
  field: SpeakerDecksYamlFieldSelector;
};


export type SpeakerDecksYamlGroupConnectionMinArgs = {
  field: SpeakerDecksYamlFieldSelector;
};


export type SpeakerDecksYamlGroupConnectionSumArgs = {
  field: SpeakerDecksYamlFieldSelector;
};

export type SpeakerDecksYamlSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly playerId: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

export type StaticImage = Node & {
  readonly absolutePath: Maybe<Scalars['String']['output']>;
  readonly accessTime: Maybe<Scalars['Date']['output']>;
  readonly atime: Maybe<Scalars['Date']['output']>;
  readonly atimeMs: Maybe<Scalars['Float']['output']>;
  readonly base: Maybe<Scalars['String']['output']>;
  readonly birthTime: Maybe<Scalars['Date']['output']>;
  readonly birthtime: Maybe<Scalars['Date']['output']>;
  readonly birthtimeMs: Maybe<Scalars['Float']['output']>;
  readonly blksize: Maybe<Scalars['Int']['output']>;
  readonly blocks: Maybe<Scalars['Int']['output']>;
  readonly changeTime: Maybe<Scalars['Date']['output']>;
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Maybe<Scalars['Date']['output']>;
  readonly ctimeMs: Maybe<Scalars['Float']['output']>;
  readonly dev: Maybe<Scalars['Int']['output']>;
  readonly dir: Maybe<Scalars['String']['output']>;
  readonly ext: Maybe<Scalars['String']['output']>;
  readonly extension: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly ino: Maybe<Scalars['Float']['output']>;
  readonly internal: Internal;
  readonly mode: Maybe<Scalars['Int']['output']>;
  readonly modifiedTime: Maybe<Scalars['Date']['output']>;
  readonly mtime: Maybe<Scalars['Date']['output']>;
  readonly mtimeMs: Maybe<Scalars['Float']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly nlink: Maybe<Scalars['Int']['output']>;
  readonly parent: Maybe<Node>;
  readonly prettySize: Maybe<Scalars['String']['output']>;
  readonly rdev: Maybe<Scalars['Int']['output']>;
  readonly relativeDirectory: Maybe<Scalars['String']['output']>;
  readonly relativePath: Maybe<Scalars['String']['output']>;
  readonly root: Maybe<Scalars['String']['output']>;
  readonly size: Maybe<Scalars['Int']['output']>;
  readonly sourceInstanceName: Maybe<Scalars['String']['output']>;
  readonly uid: Maybe<Scalars['Int']['output']>;
};


export type StaticImageAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type StaticImageAtimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type StaticImageBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type StaticImageBirthtimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type StaticImageChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type StaticImageCtimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type StaticImageModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type StaticImageMtimeArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type StaticImageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<StaticImageEdge>;
  readonly group: ReadonlyArray<StaticImageGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<StaticImage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageConnectionGroupArgs = {
  field: StaticImageFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type StaticImageConnectionMaxArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageConnectionMinArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageConnectionSumArgs = {
  field: StaticImageFieldSelector;
};

export type StaticImageEdge = {
  readonly next: Maybe<StaticImage>;
  readonly node: StaticImage;
  readonly previous: Maybe<StaticImage>;
};

export type StaticImageFieldSelector = {
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
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly ctime: InputMaybe<FieldSelectorEnum>;
  readonly ctimeMs: InputMaybe<FieldSelectorEnum>;
  readonly dev: InputMaybe<FieldSelectorEnum>;
  readonly dir: InputMaybe<FieldSelectorEnum>;
  readonly ext: InputMaybe<FieldSelectorEnum>;
  readonly extension: InputMaybe<FieldSelectorEnum>;
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

export type StaticImageFilterInput = {
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
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
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

export type StaticImageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<StaticImageEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<StaticImageGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<StaticImage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type StaticImageGroupConnectionDistinctArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageGroupConnectionGroupArgs = {
  field: StaticImageFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type StaticImageGroupConnectionMaxArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageGroupConnectionMinArgs = {
  field: StaticImageFieldSelector;
};


export type StaticImageGroupConnectionSumArgs = {
  field: StaticImageFieldSelector;
};

export type StaticImageSortInput = {
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
  readonly children: InputMaybe<NodeSortInput>;
  readonly ctime: InputMaybe<SortOrderEnum>;
  readonly ctimeMs: InputMaybe<SortOrderEnum>;
  readonly dev: InputMaybe<SortOrderEnum>;
  readonly dir: InputMaybe<SortOrderEnum>;
  readonly ext: InputMaybe<SortOrderEnum>;
  readonly extension: InputMaybe<SortOrderEnum>;
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

export type TransformOptions = {
  readonly cropFocus: InputMaybe<ImageCropFocus>;
  readonly duotone: InputMaybe<DuotoneGradient>;
  readonly fit: InputMaybe<ImageFit>;
  readonly grayscale: InputMaybe<Scalars['Boolean']['input']>;
  readonly rotate: InputMaybe<Scalars['Int']['input']>;
  readonly trim: InputMaybe<Scalars['Float']['input']>;
};

export type WebPOptions = {
  readonly quality: InputMaybe<Scalars['Int']['input']>;
};

export type GatsbyPluginFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GatsbyPluginFeedQuery = { readonly allTimeline: { readonly nodes: ReadonlyArray<
      | (
        { readonly __typename: 'ArticlesYaml' }
        & Pick<ArticlesYaml, 'url' | 'title' | 'date'>
      )
      | (
        { readonly __typename: 'NotesYaml' }
        & Pick<NotesYaml, 'url' | 'title' | 'date'>
      )
      | (
        { readonly __typename: 'OthersYaml' }
        & Pick<OthersYaml, 'url' | 'title' | 'date'>
      )
      | (
        { readonly __typename: 'PresentationsYaml' }
        & Pick<PresentationsYaml, 'url' | 'title' | 'date'>
      )
      | (
        { readonly __typename: 'SlidesYaml' }
        & Pick<SlidesYaml, 'url' | 'title' | 'date'>
      )
    > } };

export type GatsbyPluginSitemapQueryVariables = Exact<{ [key: string]: never; }>;


export type GatsbyPluginSitemapQuery = { readonly site: Maybe<Pick<Site, 'buildTime'>> };

export type OnCreatePagesStatefullyQueryVariables = Exact<{ [key: string]: never; }>;


export type OnCreatePagesStatefullyQuery = {
    readonly timelineItems: { readonly nodes: ReadonlyArray<
        | (
          { readonly __typename: 'ArticlesYaml' }
          & Pick<ArticlesYaml, 'url' | 'title' | 'date'>
        )
        | (
          { readonly __typename: 'NotesYaml' }
          & Pick<NotesYaml, 'url' | 'title' | 'date'>
        )
        | (
          { readonly __typename: 'OthersYaml' }
          & Pick<OthersYaml, 'url' | 'title' | 'date'>
        )
        | (
          { readonly __typename: 'PresentationsYaml' }
          & Pick<PresentationsYaml, 'url' | 'title' | 'date'>
        )
        | (
          { readonly __typename: 'SlidesYaml' }
          & Pick<SlidesYaml, 'url' | 'title' | 'date'>
        )
      > },
    readonly qiitaItems: { readonly nodes: ReadonlyArray<Pick<QiitaJson, 'title' | 'url'>> },
  };

export type TalkCardFragment = Pick<SpeakerDecksYaml, 'title' | 'playerId'>;

export type TalksListFragment = { readonly nodes: ReadonlyArray<Pick<SpeakerDecksYaml, 'title' | 'playerId'>> };

export type TimelineArticleCardFragment = Pick<ArticlesYaml, 'title' | 'date' | 'url'>;

export type TimelineItemCardFragment = Pick<QiitaJson, 'title' | 'url'>;

export type TimelineListTimelineFragment = { readonly group: ReadonlyArray<(
    { dateYear: TimelineGroupConnection['fieldValue'] }
    & { readonly nodes: ReadonlyArray<
      | (
        { readonly __typename: 'ArticlesYaml' }
        & Pick<
          ArticlesYaml,
          | 'id'
          | 'title'
          | 'date'
          | 'url'
        >
      )
      | (
        { readonly __typename: 'NotesYaml' }
        & Pick<
          NotesYaml,
          | 'id'
          | 'title'
          | 'date'
          | 'url'
        >
      )
      | (
        { readonly __typename: 'OthersYaml' }
        & Pick<
          OthersYaml,
          | 'id'
          | 'title'
          | 'date'
          | 'url'
        >
      )
      | (
        { readonly __typename: 'PresentationsYaml' }
        & Pick<
          PresentationsYaml,
          | 'id'
          | 'title'
          | 'date'
          | 'url'
        >
      )
      | (
        { readonly __typename: 'SlidesYaml' }
        & Pick<
          SlidesYaml,
          | 'id'
          | 'title'
          | 'date'
          | 'url'
        >
      )
    > }
  )> };

export type TimelineListOutputFragment = { readonly group: ReadonlyArray<(
    { dateYear: OutputGroupConnection['fieldValue'] }
    & { readonly nodes: ReadonlyArray<
      | (
        { readonly __typename: 'ArticlesYaml' }
        & Pick<
          ArticlesYaml,
          | 'id'
          | 'title'
          | 'date'
          | 'url'
        >
      )
      | (
        { readonly __typename: 'NotesYaml' }
        & Pick<
          NotesYaml,
          | 'id'
          | 'title'
          | 'date'
          | 'url'
        >
      )
      | (
        { readonly __typename: 'OthersYaml' }
        & Pick<
          OthersYaml,
          | 'id'
          | 'title'
          | 'date'
          | 'url'
        >
      )
      | (
        { readonly __typename: 'PresentationsYaml' }
        & Pick<
          PresentationsYaml,
          | 'id'
          | 'title'
          | 'date'
          | 'url'
        >
      )
      | (
        { readonly __typename: 'SlidesYaml' }
        & Pick<
          SlidesYaml,
          | 'id'
          | 'title'
          | 'date'
          | 'url'
        >
      )
    > }
  )> };

export type TimelineNoteCardFragment = Pick<NotesYaml, 'title' | 'date' | 'url'>;

export type TimelineOtherCardFragment = Pick<OthersYaml, 'title' | 'date' | 'url'>;

export type TimelinePresentationCardFragment = Pick<PresentationsYaml, 'title' | 'date' | 'url'>;

export type TimelineSlideCardFragment = Pick<SlidesYaml, 'title' | 'date' | 'url'>;

export type TimelineVirtualizedListTimelineFragment = { readonly nodes: ReadonlyArray<
    | (
      { readonly __typename: 'ArticlesYaml' }
      & Pick<
        ArticlesYaml,
        | 'id'
        | 'title'
        | 'date'
        | 'url'
      >
      & { dateX: ArticlesYaml['date'] }
    )
    | (
      { readonly __typename: 'NotesYaml' }
      & Pick<
        NotesYaml,
        | 'id'
        | 'title'
        | 'date'
        | 'url'
      >
      & { dateX: NotesYaml['date'] }
    )
    | (
      { readonly __typename: 'OthersYaml' }
      & Pick<
        OthersYaml,
        | 'id'
        | 'title'
        | 'date'
        | 'url'
      >
      & { dateX: OthersYaml['date'] }
    )
    | (
      { readonly __typename: 'PresentationsYaml' }
      & Pick<
        PresentationsYaml,
        | 'id'
        | 'title'
        | 'date'
        | 'url'
      >
      & { dateX: PresentationsYaml['date'] }
    )
    | (
      { readonly __typename: 'SlidesYaml' }
      & Pick<
        SlidesYaml,
        | 'id'
        | 'title'
        | 'date'
        | 'url'
      >
      & { dateX: SlidesYaml['date'] }
    )
  > };

export type TimelineVirtualizedListArchivedFragment = { readonly nodes: ReadonlyArray<(
    { readonly __typename: 'QiitaJson' }
    & Pick<QiitaJson, 'id' | 'title' | 'url'>
    & { dateX: QiitaJson['created_at'] }
  )> };

export type TimelineArchivedListFragment = { readonly nodes: ReadonlyArray<Pick<QiitaJson, 'id' | 'title' | 'url'>> };

export type UseSearchQueryVariables = Exact<{ [key: string]: never; }>;


export type UseSearchQuery = { readonly allSearch: { readonly nodes: ReadonlyArray<Pick<
        Search,
        | 'title'
        | 'excerpt'
        | 'url'
        | 'slug'
      >> } };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = {
    readonly timelineItems: { readonly nodes: ReadonlyArray<
        | (
          { readonly __typename: 'ArticlesYaml' }
          & Pick<
            ArticlesYaml,
            | 'id'
            | 'title'
            | 'date'
            | 'url'
          >
          & { dateX: ArticlesYaml['date'] }
        )
        | (
          { readonly __typename: 'NotesYaml' }
          & Pick<
            NotesYaml,
            | 'id'
            | 'title'
            | 'date'
            | 'url'
          >
          & { dateX: NotesYaml['date'] }
        )
        | (
          { readonly __typename: 'OthersYaml' }
          & Pick<
            OthersYaml,
            | 'id'
            | 'title'
            | 'date'
            | 'url'
          >
          & { dateX: OthersYaml['date'] }
        )
        | (
          { readonly __typename: 'PresentationsYaml' }
          & Pick<
            PresentationsYaml,
            | 'id'
            | 'title'
            | 'date'
            | 'url'
          >
          & { dateX: PresentationsYaml['date'] }
        )
        | (
          { readonly __typename: 'SlidesYaml' }
          & Pick<
            SlidesYaml,
            | 'id'
            | 'title'
            | 'date'
            | 'url'
          >
          & { dateX: SlidesYaml['date'] }
        )
      > },
    readonly qiitaItems: { readonly nodes: ReadonlyArray<(
        { readonly __typename: 'QiitaJson' }
        & Pick<QiitaJson, 'id' | 'title' | 'url'>
        & { dateX: QiitaJson['created_at'] }
      )> },
    readonly speakerDecksItems: { readonly nodes: ReadonlyArray<Pick<SpeakerDecksYaml, 'title' | 'playerId'>> },
  };

export type OutputsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type OutputsPageQuery = {
    readonly outputs: { readonly group: ReadonlyArray<(
        { dateYear: OutputGroupConnection['fieldValue'] }
        & { readonly nodes: ReadonlyArray<
          | (
            { readonly __typename: 'ArticlesYaml' }
            & Pick<
              ArticlesYaml,
              | 'id'
              | 'title'
              | 'date'
              | 'url'
            >
          )
          | (
            { readonly __typename: 'NotesYaml' }
            & Pick<
              NotesYaml,
              | 'id'
              | 'title'
              | 'date'
              | 'url'
            >
          )
          | (
            { readonly __typename: 'OthersYaml' }
            & Pick<
              OthersYaml,
              | 'id'
              | 'title'
              | 'date'
              | 'url'
            >
          )
          | (
            { readonly __typename: 'PresentationsYaml' }
            & Pick<
              PresentationsYaml,
              | 'id'
              | 'title'
              | 'date'
              | 'url'
            >
          )
          | (
            { readonly __typename: 'SlidesYaml' }
            & Pick<
              SlidesYaml,
              | 'id'
              | 'title'
              | 'date'
              | 'url'
            >
          )
        > }
      )> },
    readonly qiitaItems: { readonly nodes: ReadonlyArray<Pick<QiitaJson, 'id' | 'title' | 'url'>> },
    readonly site: Maybe<Pick<Site, 'buildTime'>>,
  };
