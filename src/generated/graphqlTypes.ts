export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
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

export type CertificationsYaml = Node & {
  readonly category: Maybe<Scalars['String']['output']>;
  readonly children: ReadonlyArray<Node>;
  readonly endDate: Maybe<Scalars['Date']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly parent: Maybe<Node>;
  readonly startDate: Maybe<Scalars['Date']['output']>;
};


export type CertificationsYamlEndDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type CertificationsYamlStartDateArgs = {
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
  readonly endDate: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly startDate: InputMaybe<FieldSelectorEnum>;
};

export type CertificationsYamlFilterInput = {
  readonly category: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly endDate: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly startDate: InputMaybe<DateQueryOperatorInput>;
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
  readonly endDate: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly startDate: InputMaybe<SortOrderEnum>;
};

export type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly filename: Scalars['String']['output'];
  readonly filesize: Maybe<Scalars['Int']['output']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['GatsbyImageData']['output']>;
  readonly gatsbyImageData: Maybe<Scalars['GatsbyImageData']['output']>;
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly mimeType: Scalars['String']['output'];
  readonly node_locale: Maybe<Scalars['String']['output']>;
  readonly parent: Maybe<Node>;
  readonly placeholderUrl: Maybe<Scalars['String']['output']>;
  readonly publicUrl: Scalars['String']['output'];
  readonly resize: Maybe<RemoteFileResize>;
  readonly size: Maybe<Scalars['Int']['output']>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Int']['output']>;
};


export type ContentfulAssetCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulAssetGatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']['input']>;
  backgroundColor: InputMaybe<Scalars['String']['input']>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<ReadonlyArray<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']['input']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  sizes: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']['input']>;
  backgroundColor: InputMaybe<Scalars['String']['input']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  cropFocus: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<ReadonlyArray<InputMaybe<GatsbyImageFormat>>>;
  height: InputMaybe<Scalars['Int']['input']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']['input']>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  placeholder: InputMaybe<GatsbyImagePlaceholder>;
  quality: InputMaybe<Scalars['Int']['input']>;
  resizingBehavior: InputMaybe<ImageResizingBehavior>;
  sizes: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetResizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']['input']>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulAssetConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldSelector;
};

export type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly file: InputMaybe<ContentfulAssetFileFieldSelector>;
  readonly filename: InputMaybe<FieldSelectorEnum>;
  readonly filesize: InputMaybe<FieldSelectorEnum>;
  readonly gatsbyImage: InputMaybe<FieldSelectorEnum>;
  readonly gatsbyImageData: InputMaybe<FieldSelectorEnum>;
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mimeType: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly placeholderUrl: InputMaybe<FieldSelectorEnum>;
  readonly publicUrl: InputMaybe<FieldSelectorEnum>;
  readonly resize: InputMaybe<RemoteFileResizeFieldSelector>;
  readonly size: InputMaybe<FieldSelectorEnum>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulAssetSysFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetFile = {
  readonly contentType: Maybe<Scalars['String']['output']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
};

export type ContentfulAssetFileDetails = {
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
  readonly size: Maybe<Scalars['Int']['output']>;
};

export type ContentfulAssetFileDetailsFieldSelector = {
  readonly image: InputMaybe<ContentfulAssetFileDetailsImageFieldSelector>;
  readonly size: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  readonly image: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImage = {
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type ContentfulAssetFileDetailsImageFieldSelector = {
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImageSortInput = {
  readonly height: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetFileDetailsSortInput = {
  readonly image: InputMaybe<ContentfulAssetFileDetailsImageSortInput>;
  readonly size: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetFileFieldSelector = {
  readonly contentType: InputMaybe<FieldSelectorEnum>;
  readonly details: InputMaybe<ContentfulAssetFileDetailsFieldSelector>;
  readonly fileName: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetFileFilterInput = {
  readonly contentType: InputMaybe<StringQueryOperatorInput>;
  readonly details: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileSortInput = {
  readonly contentType: InputMaybe<SortOrderEnum>;
  readonly details: InputMaybe<ContentfulAssetFileDetailsSortInput>;
  readonly fileName: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly file: InputMaybe<ContentfulAssetFileFilterInput>;
  readonly filename: InputMaybe<StringQueryOperatorInput>;
  readonly filesize: InputMaybe<IntQueryOperatorInput>;
  readonly gatsbyImage: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mimeType: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly placeholderUrl: InputMaybe<StringQueryOperatorInput>;
  readonly publicUrl: InputMaybe<StringQueryOperatorInput>;
  readonly resize: InputMaybe<RemoteFileResizeFilterInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulAssetSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldSelector;
};

export type ContentfulAssetSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly file: InputMaybe<ContentfulAssetFileSortInput>;
  readonly filename: InputMaybe<SortOrderEnum>;
  readonly filesize: InputMaybe<SortOrderEnum>;
  readonly gatsbyImage: InputMaybe<SortOrderEnum>;
  readonly gatsbyImageData: InputMaybe<SortOrderEnum>;
  readonly height: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mimeType: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly placeholderUrl: InputMaybe<SortOrderEnum>;
  readonly publicUrl: InputMaybe<SortOrderEnum>;
  readonly resize: InputMaybe<RemoteFileResizeSortInput>;
  readonly size: InputMaybe<SortOrderEnum>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulAssetSysSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
};

export type ContentfulAssetSys = {
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulAssetSysFieldSelector = {
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulAssetSysFilterInput = {
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulAssetSysSortInput = {
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulBlogPost = ContentfulEntry & ContentfulReference & Node & {
  readonly category: Maybe<ContentfulCategory>;
  /** Returns the first child node of type contentfulBlogPostContentTextNode or null if there are no children of given type on this node */
  readonly childContentfulBlogPostContentTextNode: Maybe<ContentfulBlogPostContentTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulBlogPostContentTextNode */
  readonly childrenContentfulBlogPostContentTextNode: Maybe<ReadonlyArray<Maybe<ContentfulBlogPostContentTextNode>>>;
  readonly content: Maybe<ContentfulBlogPostContentTextNode>;
  readonly contentful_id: Scalars['String']['output'];
  readonly created: Maybe<Scalars['Date']['output']>;
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly excerpt: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly redirect: Maybe<Scalars['String']['output']>;
  readonly slug: Maybe<Scalars['String']['output']>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulBlogPostSys>;
  readonly tags: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly updated: Maybe<Scalars['Date']['output']>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulBlogPostCreatedArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulBlogPostUpdatedArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulBlogPostConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly group: ReadonlyArray<ContentfulBlogPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldSelector;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  field: ContentfulBlogPostFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulBlogPostConnectionMaxArgs = {
  field: ContentfulBlogPostFieldSelector;
};


export type ContentfulBlogPostConnectionMinArgs = {
  field: ContentfulBlogPostFieldSelector;
};


export type ContentfulBlogPostConnectionSumArgs = {
  field: ContentfulBlogPostFieldSelector;
};

export type ContentfulBlogPostEdge = {
  readonly next: Maybe<ContentfulBlogPost>;
  readonly node: ContentfulBlogPost;
  readonly previous: Maybe<ContentfulBlogPost>;
};

export type ContentfulBlogPostFieldSelector = {
  readonly category: InputMaybe<ContentfulCategoryFieldSelector>;
  readonly childContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeFieldSelector>;
  readonly content: InputMaybe<ContentfulBlogPostContentTextNodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly created: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly redirect: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulBlogPostSysFieldSelector>;
  readonly tags: InputMaybe<ContentfulTagFieldSelector>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly updated: InputMaybe<FieldSelectorEnum>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulBlogPostFilterInput = {
  readonly category: InputMaybe<ContentfulCategoryFilterInput>;
  readonly childContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeFilterListInput>;
  readonly content: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly created: InputMaybe<DateQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly redirect: InputMaybe<StringQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulBlogPostSysFilterInput>;
  readonly tags: InputMaybe<ContentfulTagFilterListInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updated: InputMaybe<DateQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulBlogPostFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulBlogPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulBlogPostGroupConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldSelector;
};


export type ContentfulBlogPostGroupConnectionGroupArgs = {
  field: ContentfulBlogPostFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulBlogPostGroupConnectionMaxArgs = {
  field: ContentfulBlogPostFieldSelector;
};


export type ContentfulBlogPostGroupConnectionMinArgs = {
  field: ContentfulBlogPostFieldSelector;
};


export type ContentfulBlogPostGroupConnectionSumArgs = {
  field: ContentfulBlogPostFieldSelector;
};

export type ContentfulBlogPostSortInput = {
  readonly category: InputMaybe<ContentfulCategorySortInput>;
  readonly childContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeSortInput>;
  readonly content: InputMaybe<ContentfulBlogPostContentTextNodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly created: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly redirect: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulBlogPostSysSortInput>;
  readonly tags: InputMaybe<ContentfulTagSortInput>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly updated: InputMaybe<SortOrderEnum>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulBlogPostSys = {
  readonly contentType: Maybe<ContentfulBlogPostSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulBlogPostSysContentType = {
  readonly sys: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulBlogPostSysContentTypeSysFieldSelector>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulBlogPostSysContentTypeSysSortInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulBlogPostSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulBlogPostSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulBlogPostSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulBlogPostSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulBlogPostSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysSortInput = {
  readonly contentType: InputMaybe<ContentfulBlogPostSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulCategory = ContentfulEntry & ContentfulReference & Node & {
  readonly blog_post: Maybe<ReadonlyArray<Maybe<ContentfulBlogPost>>>;
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly slug: Maybe<Scalars['String']['output']>;
  readonly sortKey: Maybe<Scalars['Int']['output']>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulCategorySys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulCategoryCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulCategoryUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulCategoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulCategoryEdge>;
  readonly group: ReadonlyArray<ContentfulCategoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulCategory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulCategoryConnectionDistinctArgs = {
  field: ContentfulCategoryFieldSelector;
};


export type ContentfulCategoryConnectionGroupArgs = {
  field: ContentfulCategoryFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulCategoryConnectionMaxArgs = {
  field: ContentfulCategoryFieldSelector;
};


export type ContentfulCategoryConnectionMinArgs = {
  field: ContentfulCategoryFieldSelector;
};


export type ContentfulCategoryConnectionSumArgs = {
  field: ContentfulCategoryFieldSelector;
};

export type ContentfulCategoryEdge = {
  readonly next: Maybe<ContentfulCategory>;
  readonly node: ContentfulCategory;
  readonly previous: Maybe<ContentfulCategory>;
};

export type ContentfulCategoryFieldSelector = {
  readonly blog_post: InputMaybe<ContentfulBlogPostFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly sortKey: InputMaybe<FieldSelectorEnum>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulCategorySysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulCategoryFilterInput = {
  readonly blog_post: InputMaybe<ContentfulBlogPostFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly sortKey: InputMaybe<IntQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulCategorySysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulCategoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulCategoryEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulCategoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulCategory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulCategoryGroupConnectionDistinctArgs = {
  field: ContentfulCategoryFieldSelector;
};


export type ContentfulCategoryGroupConnectionGroupArgs = {
  field: ContentfulCategoryFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulCategoryGroupConnectionMaxArgs = {
  field: ContentfulCategoryFieldSelector;
};


export type ContentfulCategoryGroupConnectionMinArgs = {
  field: ContentfulCategoryFieldSelector;
};


export type ContentfulCategoryGroupConnectionSumArgs = {
  field: ContentfulCategoryFieldSelector;
};

export type ContentfulCategorySortInput = {
  readonly blog_post: InputMaybe<ContentfulBlogPostSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly sortKey: InputMaybe<SortOrderEnum>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulCategorySysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulCategorySys = {
  readonly contentType: Maybe<ContentfulCategorySysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulCategorySysContentType = {
  readonly sys: Maybe<ContentfulCategorySysContentTypeSys>;
};

export type ContentfulCategorySysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulCategorySysContentTypeSysFieldSelector>;
};

export type ContentfulCategorySysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulCategorySysContentTypeSysFilterInput>;
};

export type ContentfulCategorySysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulCategorySysContentTypeSysSortInput>;
};

export type ContentfulCategorySysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulCategorySysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulCategorySysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulCategorySysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulCategorySysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulCategorySysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulCategorySysFilterInput = {
  readonly contentType: InputMaybe<ContentfulCategorySysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulCategorySysSortInput = {
  readonly contentType: InputMaybe<ContentfulCategorySysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulContact = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly href: Maybe<Scalars['String']['output']>;
  readonly icon: Maybe<ContentfulIcon>;
  readonly iconSvgDark: Maybe<ContentfulAsset>;
  readonly iconSvgLight: Maybe<ContentfulAsset>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly sortKey: Maybe<Scalars['Int']['output']>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly subName: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulContactSys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulContactCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulContactUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulContactConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulContactEdge>;
  readonly group: ReadonlyArray<ContentfulContactGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulContact>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulContactConnectionDistinctArgs = {
  field: ContentfulContactFieldSelector;
};


export type ContentfulContactConnectionGroupArgs = {
  field: ContentfulContactFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulContactConnectionMaxArgs = {
  field: ContentfulContactFieldSelector;
};


export type ContentfulContactConnectionMinArgs = {
  field: ContentfulContactFieldSelector;
};


export type ContentfulContactConnectionSumArgs = {
  field: ContentfulContactFieldSelector;
};

export type ContentfulContactEdge = {
  readonly next: Maybe<ContentfulContact>;
  readonly node: ContentfulContact;
  readonly previous: Maybe<ContentfulContact>;
};

export type ContentfulContactFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly href: InputMaybe<FieldSelectorEnum>;
  readonly icon: InputMaybe<ContentfulIconFieldSelector>;
  readonly iconSvgDark: InputMaybe<ContentfulAssetFieldSelector>;
  readonly iconSvgLight: InputMaybe<ContentfulAssetFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sortKey: InputMaybe<FieldSelectorEnum>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly subName: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulContactSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulContactFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly icon: InputMaybe<ContentfulIconFilterInput>;
  readonly iconSvgDark: InputMaybe<ContentfulAssetFilterInput>;
  readonly iconSvgLight: InputMaybe<ContentfulAssetFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sortKey: InputMaybe<IntQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly subName: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulContactSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulContactFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulContactFilterInput>;
};

export type ContentfulContactGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulContactEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulContactGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulContact>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulContactGroupConnectionDistinctArgs = {
  field: ContentfulContactFieldSelector;
};


export type ContentfulContactGroupConnectionGroupArgs = {
  field: ContentfulContactFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulContactGroupConnectionMaxArgs = {
  field: ContentfulContactFieldSelector;
};


export type ContentfulContactGroupConnectionMinArgs = {
  field: ContentfulContactFieldSelector;
};


export type ContentfulContactGroupConnectionSumArgs = {
  field: ContentfulContactFieldSelector;
};

export type ContentfulContactSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly href: InputMaybe<SortOrderEnum>;
  readonly icon: InputMaybe<ContentfulIconSortInput>;
  readonly iconSvgDark: InputMaybe<ContentfulAssetSortInput>;
  readonly iconSvgLight: InputMaybe<ContentfulAssetSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sortKey: InputMaybe<SortOrderEnum>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly subName: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulContactSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulContactSys = {
  readonly contentType: Maybe<ContentfulContactSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulContactSysContentType = {
  readonly sys: Maybe<ContentfulContactSysContentTypeSys>;
};

export type ContentfulContactSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulContactSysContentTypeSysFieldSelector>;
};

export type ContentfulContactSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulContactSysContentTypeSysFilterInput>;
};

export type ContentfulContactSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulContactSysContentTypeSysSortInput>;
};

export type ContentfulContactSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulContactSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulContactSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContactSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulContactSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulContactSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulContactSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulContactSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContactSysSortInput = {
  readonly contentType: InputMaybe<ContentfulContactSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulContentType = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly displayField: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldSelector;
};

export type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly description: InputMaybe<FieldSelectorEnum>;
  readonly displayField: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<ContentfulContentTypeSysFieldSelector>;
};

export type ContentfulContentTypeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly displayField: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldSelector;
};

export type ContentfulContentTypeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly description: InputMaybe<SortOrderEnum>;
  readonly displayField: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<ContentfulContentTypeSysSortInput>;
};

export type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulContentTypeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulContentTypeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulEntry = {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
};

export type ContentfulEntryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldSelector;
};

export type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

export type ContentfulEntryFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

export type ContentfulEntryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldSelector;
};

export type ContentfulEntrySortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

export type ContentfulHello = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly href: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly sortKey: Maybe<Scalars['Int']['output']>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulHelloSys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulHelloCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulHelloUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulHelloConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulHelloEdge>;
  readonly group: ReadonlyArray<ContentfulHelloGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulHello>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulHelloConnectionDistinctArgs = {
  field: ContentfulHelloFieldSelector;
};


export type ContentfulHelloConnectionGroupArgs = {
  field: ContentfulHelloFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulHelloConnectionMaxArgs = {
  field: ContentfulHelloFieldSelector;
};


export type ContentfulHelloConnectionMinArgs = {
  field: ContentfulHelloFieldSelector;
};


export type ContentfulHelloConnectionSumArgs = {
  field: ContentfulHelloFieldSelector;
};

export type ContentfulHelloEdge = {
  readonly next: Maybe<ContentfulHello>;
  readonly node: ContentfulHello;
  readonly previous: Maybe<ContentfulHello>;
};

export type ContentfulHelloFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly href: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sortKey: InputMaybe<FieldSelectorEnum>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulHelloSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulHelloFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sortKey: InputMaybe<IntQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulHelloSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulHelloGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulHelloEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulHelloGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulHello>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulHelloGroupConnectionDistinctArgs = {
  field: ContentfulHelloFieldSelector;
};


export type ContentfulHelloGroupConnectionGroupArgs = {
  field: ContentfulHelloFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulHelloGroupConnectionMaxArgs = {
  field: ContentfulHelloFieldSelector;
};


export type ContentfulHelloGroupConnectionMinArgs = {
  field: ContentfulHelloFieldSelector;
};


export type ContentfulHelloGroupConnectionSumArgs = {
  field: ContentfulHelloFieldSelector;
};

export type ContentfulHelloSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly href: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sortKey: InputMaybe<SortOrderEnum>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulHelloSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulHelloSys = {
  readonly contentType: Maybe<ContentfulHelloSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulHelloSysContentType = {
  readonly sys: Maybe<ContentfulHelloSysContentTypeSys>;
};

export type ContentfulHelloSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulHelloSysContentTypeSysFieldSelector>;
};

export type ContentfulHelloSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulHelloSysContentTypeSysFilterInput>;
};

export type ContentfulHelloSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulHelloSysContentTypeSysSortInput>;
};

export type ContentfulHelloSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulHelloSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulHelloSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHelloSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulHelloSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulHelloSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulHelloSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulHelloSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHelloSysSortInput = {
  readonly contentType: InputMaybe<ContentfulHelloSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulHistory = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly date: Maybe<Scalars['Date']['output']>;
  readonly icon: Maybe<ContentfulIcon>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly subName: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulHistorySys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulHistoryCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulHistoryDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulHistoryUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulHistoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulHistoryEdge>;
  readonly group: ReadonlyArray<ContentfulHistoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulHistory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulHistoryConnectionDistinctArgs = {
  field: ContentfulHistoryFieldSelector;
};


export type ContentfulHistoryConnectionGroupArgs = {
  field: ContentfulHistoryFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulHistoryConnectionMaxArgs = {
  field: ContentfulHistoryFieldSelector;
};


export type ContentfulHistoryConnectionMinArgs = {
  field: ContentfulHistoryFieldSelector;
};


export type ContentfulHistoryConnectionSumArgs = {
  field: ContentfulHistoryFieldSelector;
};

export type ContentfulHistoryEdge = {
  readonly next: Maybe<ContentfulHistory>;
  readonly node: ContentfulHistory;
  readonly previous: Maybe<ContentfulHistory>;
};

export type ContentfulHistoryFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly icon: InputMaybe<ContentfulIconFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly subName: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulHistorySysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulHistoryFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly icon: InputMaybe<ContentfulIconFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly subName: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulHistorySysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulHistoryFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulHistoryFilterInput>;
};

export type ContentfulHistoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulHistoryEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulHistoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulHistory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulHistoryGroupConnectionDistinctArgs = {
  field: ContentfulHistoryFieldSelector;
};


export type ContentfulHistoryGroupConnectionGroupArgs = {
  field: ContentfulHistoryFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulHistoryGroupConnectionMaxArgs = {
  field: ContentfulHistoryFieldSelector;
};


export type ContentfulHistoryGroupConnectionMinArgs = {
  field: ContentfulHistoryFieldSelector;
};


export type ContentfulHistoryGroupConnectionSumArgs = {
  field: ContentfulHistoryFieldSelector;
};

export type ContentfulHistorySortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly icon: InputMaybe<ContentfulIconSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly subName: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulHistorySysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulHistorySys = {
  readonly contentType: Maybe<ContentfulHistorySysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulHistorySysContentType = {
  readonly sys: Maybe<ContentfulHistorySysContentTypeSys>;
};

export type ContentfulHistorySysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulHistorySysContentTypeSysFieldSelector>;
};

export type ContentfulHistorySysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulHistorySysContentTypeSysFilterInput>;
};

export type ContentfulHistorySysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulHistorySysContentTypeSysSortInput>;
};

export type ContentfulHistorySysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulHistorySysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulHistorySysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHistorySysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulHistorySysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulHistorySysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulHistorySysFilterInput = {
  readonly contentType: InputMaybe<ContentfulHistorySysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHistorySysSortInput = {
  readonly contentType: InputMaybe<ContentfulHistorySysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulIcon = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulIconSvgTextNode or null if there are no children of given type on this node */
  readonly childContentfulIconSvgTextNode: Maybe<ContentfulIconSvgTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulIconSvgTextNode */
  readonly childrenContentfulIconSvgTextNode: Maybe<ReadonlyArray<Maybe<ContentfulIconSvgTextNode>>>;
  readonly contact: Maybe<ReadonlyArray<Maybe<ContentfulContact>>>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly history: Maybe<ReadonlyArray<Maybe<ContentfulHistory>>>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly oss: Maybe<ReadonlyArray<Maybe<ContentfulOss>>>;
  readonly parent: Maybe<Node>;
  readonly project: Maybe<ReadonlyArray<Maybe<ContentfulProject>>>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly svg: Maybe<ContentfulIconSvgTextNode>;
  readonly sys: Maybe<ContentfulIconSys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
  readonly what_i_can_do: Maybe<ReadonlyArray<Maybe<ContentfulWhatICanDo>>>;
};


export type ContentfulIconCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulIconUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulIconConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulIconEdge>;
  readonly group: ReadonlyArray<ContentfulIconGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulIcon>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulIconConnectionDistinctArgs = {
  field: ContentfulIconFieldSelector;
};


export type ContentfulIconConnectionGroupArgs = {
  field: ContentfulIconFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulIconConnectionMaxArgs = {
  field: ContentfulIconFieldSelector;
};


export type ContentfulIconConnectionMinArgs = {
  field: ContentfulIconFieldSelector;
};


export type ContentfulIconConnectionSumArgs = {
  field: ContentfulIconFieldSelector;
};

export type ContentfulIconEdge = {
  readonly next: Maybe<ContentfulIcon>;
  readonly node: ContentfulIcon;
  readonly previous: Maybe<ContentfulIcon>;
};

export type ContentfulIconFieldSelector = {
  readonly childContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeFieldSelector>;
  readonly contact: InputMaybe<ContentfulContactFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly history: InputMaybe<ContentfulHistoryFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly oss: InputMaybe<ContentfulOssFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly project: InputMaybe<ContentfulProjectFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly svg: InputMaybe<ContentfulIconSvgTextNodeFieldSelector>;
  readonly sys: InputMaybe<ContentfulIconSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly what_i_can_do: InputMaybe<ContentfulWhatICanDoFieldSelector>;
};

export type ContentfulIconFilterInput = {
  readonly childContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeFilterListInput>;
  readonly contact: InputMaybe<ContentfulContactFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly history: InputMaybe<ContentfulHistoryFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly oss: InputMaybe<ContentfulOssFilterListInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly project: InputMaybe<ContentfulProjectFilterListInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly svg: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  readonly sys: InputMaybe<ContentfulIconSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly what_i_can_do: InputMaybe<ContentfulWhatICanDoFilterListInput>;
};

export type ContentfulIconGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulIconEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulIconGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulIcon>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulIconGroupConnectionDistinctArgs = {
  field: ContentfulIconFieldSelector;
};


export type ContentfulIconGroupConnectionGroupArgs = {
  field: ContentfulIconFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulIconGroupConnectionMaxArgs = {
  field: ContentfulIconFieldSelector;
};


export type ContentfulIconGroupConnectionMinArgs = {
  field: ContentfulIconFieldSelector;
};


export type ContentfulIconGroupConnectionSumArgs = {
  field: ContentfulIconFieldSelector;
};

export type ContentfulIconSortInput = {
  readonly childContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeSortInput>;
  readonly contact: InputMaybe<ContentfulContactSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly history: InputMaybe<ContentfulHistorySortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly oss: InputMaybe<ContentfulOssSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly project: InputMaybe<ContentfulProjectSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly svg: InputMaybe<ContentfulIconSvgTextNodeSortInput>;
  readonly sys: InputMaybe<ContentfulIconSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly what_i_can_do: InputMaybe<ContentfulWhatICanDoSortInput>;
};

export type ContentfulIconSys = {
  readonly contentType: Maybe<ContentfulIconSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulIconSysContentType = {
  readonly sys: Maybe<ContentfulIconSysContentTypeSys>;
};

export type ContentfulIconSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulIconSysContentTypeSysFieldSelector>;
};

export type ContentfulIconSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulIconSysContentTypeSysFilterInput>;
};

export type ContentfulIconSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulIconSysContentTypeSysSortInput>;
};

export type ContentfulIconSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulIconSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulIconSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulIconSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulIconSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulIconSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulIconSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulIconSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulIconSysSortInput = {
  readonly contentType: InputMaybe<ContentfulIconSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export enum ContentfulImageCropFocus {
  Bottom = 0,
  BottomLeft = 1,
  BottomRight = 2,
  Center = 3,
  Face = 4,
  Faces = 5,
  Left = 6,
  Right = 7,
  Top = 8,
  TopLeft = 9,
  TopRight = 10
}

export type ContentfulOss = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulOssDetailTextNode or null if there are no children of given type on this node */
  readonly childContentfulOssDetailTextNode: Maybe<ContentfulOssDetailTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulOssDetailTextNode */
  readonly childrenContentfulOssDetailTextNode: Maybe<ReadonlyArray<Maybe<ContentfulOssDetailTextNode>>>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly detail: Maybe<ContentfulOssDetailTextNode>;
  readonly href: Maybe<Scalars['String']['output']>;
  readonly icon: Maybe<ContentfulIcon>;
  readonly id: Scalars['ID']['output'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly startDate: Maybe<Scalars['Date']['output']>;
  readonly subName: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulOssSys>;
  readonly tags: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulOssCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulOssStartDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulOssUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulOssConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulOssEdge>;
  readonly group: ReadonlyArray<ContentfulOssGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulOss>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulOssConnectionDistinctArgs = {
  field: ContentfulOssFieldSelector;
};


export type ContentfulOssConnectionGroupArgs = {
  field: ContentfulOssFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulOssConnectionMaxArgs = {
  field: ContentfulOssFieldSelector;
};


export type ContentfulOssConnectionMinArgs = {
  field: ContentfulOssFieldSelector;
};


export type ContentfulOssConnectionSumArgs = {
  field: ContentfulOssFieldSelector;
};

export type ContentfulOssEdge = {
  readonly next: Maybe<ContentfulOss>;
  readonly node: ContentfulOss;
  readonly previous: Maybe<ContentfulOss>;
};

export type ContentfulOssFieldSelector = {
  readonly childContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly detail: InputMaybe<ContentfulOssDetailTextNodeFieldSelector>;
  readonly href: InputMaybe<FieldSelectorEnum>;
  readonly icon: InputMaybe<ContentfulIconFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly image: InputMaybe<ContentfulAssetFieldSelector>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly startDate: InputMaybe<FieldSelectorEnum>;
  readonly subName: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulOssSysFieldSelector>;
  readonly tags: InputMaybe<ContentfulTagFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulOssFilterInput = {
  readonly childContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly detail: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly icon: InputMaybe<ContentfulIconFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<ContentfulAssetFilterInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly startDate: InputMaybe<DateQueryOperatorInput>;
  readonly subName: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulOssSysFilterInput>;
  readonly tags: InputMaybe<ContentfulTagFilterListInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulOssFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulOssFilterInput>;
};

export type ContentfulOssGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulOssEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulOssGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulOss>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulOssGroupConnectionDistinctArgs = {
  field: ContentfulOssFieldSelector;
};


export type ContentfulOssGroupConnectionGroupArgs = {
  field: ContentfulOssFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulOssGroupConnectionMaxArgs = {
  field: ContentfulOssFieldSelector;
};


export type ContentfulOssGroupConnectionMinArgs = {
  field: ContentfulOssFieldSelector;
};


export type ContentfulOssGroupConnectionSumArgs = {
  field: ContentfulOssFieldSelector;
};

export type ContentfulOssSortInput = {
  readonly childContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly detail: InputMaybe<ContentfulOssDetailTextNodeSortInput>;
  readonly href: InputMaybe<SortOrderEnum>;
  readonly icon: InputMaybe<ContentfulIconSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly image: InputMaybe<ContentfulAssetSortInput>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly startDate: InputMaybe<SortOrderEnum>;
  readonly subName: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulOssSysSortInput>;
  readonly tags: InputMaybe<ContentfulTagSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulOssSys = {
  readonly contentType: Maybe<ContentfulOssSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulOssSysContentType = {
  readonly sys: Maybe<ContentfulOssSysContentTypeSys>;
};

export type ContentfulOssSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulOssSysContentTypeSysFieldSelector>;
};

export type ContentfulOssSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulOssSysContentTypeSysFilterInput>;
};

export type ContentfulOssSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulOssSysContentTypeSysSortInput>;
};

export type ContentfulOssSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulOssSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulOssSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulOssSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulOssSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulOssSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulOssSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulOssSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulOssSysSortInput = {
  readonly contentType: InputMaybe<ContentfulOssSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulProject = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulProjectDetailTextNode or null if there are no children of given type on this node */
  readonly childContentfulProjectDetailTextNode: Maybe<ContentfulProjectDetailTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulProjectDetailTextNode */
  readonly childrenContentfulProjectDetailTextNode: Maybe<ReadonlyArray<Maybe<ContentfulProjectDetailTextNode>>>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly detail: Maybe<ContentfulProjectDetailTextNode>;
  readonly endDate: Maybe<Scalars['Date']['output']>;
  readonly icon: Maybe<ContentfulIcon>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly startDate: Maybe<Scalars['Date']['output']>;
  readonly subName: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulProjectSys>;
  readonly tags: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulProjectCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulProjectEndDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulProjectStartDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulProjectUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulProjectConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulProjectEdge>;
  readonly group: ReadonlyArray<ContentfulProjectGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulProject>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldSelector;
};


export type ContentfulProjectConnectionGroupArgs = {
  field: ContentfulProjectFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulProjectConnectionMaxArgs = {
  field: ContentfulProjectFieldSelector;
};


export type ContentfulProjectConnectionMinArgs = {
  field: ContentfulProjectFieldSelector;
};


export type ContentfulProjectConnectionSumArgs = {
  field: ContentfulProjectFieldSelector;
};

export type ContentfulProjectEdge = {
  readonly next: Maybe<ContentfulProject>;
  readonly node: ContentfulProject;
  readonly previous: Maybe<ContentfulProject>;
};

export type ContentfulProjectFieldSelector = {
  readonly childContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly detail: InputMaybe<ContentfulProjectDetailTextNodeFieldSelector>;
  readonly endDate: InputMaybe<FieldSelectorEnum>;
  readonly icon: InputMaybe<ContentfulIconFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly startDate: InputMaybe<FieldSelectorEnum>;
  readonly subName: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulProjectSysFieldSelector>;
  readonly tags: InputMaybe<ContentfulTagFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulProjectFilterInput = {
  readonly childContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly detail: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  readonly endDate: InputMaybe<DateQueryOperatorInput>;
  readonly icon: InputMaybe<ContentfulIconFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly startDate: InputMaybe<DateQueryOperatorInput>;
  readonly subName: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulProjectSysFilterInput>;
  readonly tags: InputMaybe<ContentfulTagFilterListInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulProjectFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulProjectFilterInput>;
};

export type ContentfulProjectGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulProjectEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulProjectGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulProject>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulProjectGroupConnectionDistinctArgs = {
  field: ContentfulProjectFieldSelector;
};


export type ContentfulProjectGroupConnectionGroupArgs = {
  field: ContentfulProjectFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulProjectGroupConnectionMaxArgs = {
  field: ContentfulProjectFieldSelector;
};


export type ContentfulProjectGroupConnectionMinArgs = {
  field: ContentfulProjectFieldSelector;
};


export type ContentfulProjectGroupConnectionSumArgs = {
  field: ContentfulProjectFieldSelector;
};

export type ContentfulProjectSortInput = {
  readonly childContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly detail: InputMaybe<ContentfulProjectDetailTextNodeSortInput>;
  readonly endDate: InputMaybe<SortOrderEnum>;
  readonly icon: InputMaybe<ContentfulIconSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly startDate: InputMaybe<SortOrderEnum>;
  readonly subName: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulProjectSysSortInput>;
  readonly tags: InputMaybe<ContentfulTagSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulProjectSys = {
  readonly contentType: Maybe<ContentfulProjectSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulProjectSysContentType = {
  readonly sys: Maybe<ContentfulProjectSysContentTypeSys>;
};

export type ContentfulProjectSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulProjectSysContentTypeSysFieldSelector>;
};

export type ContentfulProjectSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulProjectSysContentTypeSysFilterInput>;
};

export type ContentfulProjectSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulProjectSysContentTypeSysSortInput>;
};

export type ContentfulProjectSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulProjectSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulProjectSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulProjectSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulProjectSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulProjectSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulProjectSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysSortInput = {
  readonly contentType: InputMaybe<ContentfulProjectSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulQualification = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly date: Maybe<Scalars['Date']['output']>;
  readonly endDate: Maybe<Scalars['Date']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly qualification_map: Maybe<ReadonlyArray<Maybe<ContentfulQualificationMap>>>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulQualificationSys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
  readonly url: Maybe<Scalars['String']['output']>;
};


export type ContentfulQualificationCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulQualificationDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulQualificationEndDateArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulQualificationUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulQualificationConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulQualificationEdge>;
  readonly group: ReadonlyArray<ContentfulQualificationGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulQualification>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulQualificationConnectionDistinctArgs = {
  field: ContentfulQualificationFieldSelector;
};


export type ContentfulQualificationConnectionGroupArgs = {
  field: ContentfulQualificationFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulQualificationConnectionMaxArgs = {
  field: ContentfulQualificationFieldSelector;
};


export type ContentfulQualificationConnectionMinArgs = {
  field: ContentfulQualificationFieldSelector;
};


export type ContentfulQualificationConnectionSumArgs = {
  field: ContentfulQualificationFieldSelector;
};

export type ContentfulQualificationEdge = {
  readonly next: Maybe<ContentfulQualification>;
  readonly node: ContentfulQualification;
  readonly previous: Maybe<ContentfulQualification>;
};

export type ContentfulQualificationFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly date: InputMaybe<FieldSelectorEnum>;
  readonly endDate: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly qualification_map: InputMaybe<ContentfulQualificationMapFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulQualificationSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
  readonly url: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulQualificationFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly endDate: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly qualification_map: InputMaybe<ContentfulQualificationMapFilterListInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulQualificationSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulQualificationFilterInput>;
};

export type ContentfulQualificationGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulQualificationEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulQualificationGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulQualification>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulQualificationGroupConnectionDistinctArgs = {
  field: ContentfulQualificationFieldSelector;
};


export type ContentfulQualificationGroupConnectionGroupArgs = {
  field: ContentfulQualificationFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulQualificationGroupConnectionMaxArgs = {
  field: ContentfulQualificationFieldSelector;
};


export type ContentfulQualificationGroupConnectionMinArgs = {
  field: ContentfulQualificationFieldSelector;
};


export type ContentfulQualificationGroupConnectionSumArgs = {
  field: ContentfulQualificationFieldSelector;
};

export type ContentfulQualificationMap = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly expanded: Maybe<Scalars['Boolean']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly qualifications: Maybe<ReadonlyArray<Maybe<ContentfulQualification>>>;
  readonly sortKey: Maybe<Scalars['Int']['output']>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulQualificationMapSys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulQualificationMapCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulQualificationMapUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulQualificationMapConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulQualificationMapEdge>;
  readonly group: ReadonlyArray<ContentfulQualificationMapGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulQualificationMap>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulQualificationMapConnectionDistinctArgs = {
  field: ContentfulQualificationMapFieldSelector;
};


export type ContentfulQualificationMapConnectionGroupArgs = {
  field: ContentfulQualificationMapFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulQualificationMapConnectionMaxArgs = {
  field: ContentfulQualificationMapFieldSelector;
};


export type ContentfulQualificationMapConnectionMinArgs = {
  field: ContentfulQualificationMapFieldSelector;
};


export type ContentfulQualificationMapConnectionSumArgs = {
  field: ContentfulQualificationMapFieldSelector;
};

export type ContentfulQualificationMapEdge = {
  readonly next: Maybe<ContentfulQualificationMap>;
  readonly node: ContentfulQualificationMap;
  readonly previous: Maybe<ContentfulQualificationMap>;
};

export type ContentfulQualificationMapFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly expanded: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly qualifications: InputMaybe<ContentfulQualificationFieldSelector>;
  readonly sortKey: InputMaybe<FieldSelectorEnum>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulQualificationMapSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulQualificationMapFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly expanded: InputMaybe<BooleanQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly qualifications: InputMaybe<ContentfulQualificationFilterListInput>;
  readonly sortKey: InputMaybe<IntQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulQualificationMapSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulQualificationMapFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulQualificationMapFilterInput>;
};

export type ContentfulQualificationMapGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulQualificationMapEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulQualificationMapGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulQualificationMap>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulQualificationMapGroupConnectionDistinctArgs = {
  field: ContentfulQualificationMapFieldSelector;
};


export type ContentfulQualificationMapGroupConnectionGroupArgs = {
  field: ContentfulQualificationMapFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulQualificationMapGroupConnectionMaxArgs = {
  field: ContentfulQualificationMapFieldSelector;
};


export type ContentfulQualificationMapGroupConnectionMinArgs = {
  field: ContentfulQualificationMapFieldSelector;
};


export type ContentfulQualificationMapGroupConnectionSumArgs = {
  field: ContentfulQualificationMapFieldSelector;
};

export type ContentfulQualificationMapSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly expanded: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly qualifications: InputMaybe<ContentfulQualificationSortInput>;
  readonly sortKey: InputMaybe<SortOrderEnum>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulQualificationMapSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulQualificationMapSys = {
  readonly contentType: Maybe<ContentfulQualificationMapSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulQualificationMapSysContentType = {
  readonly sys: Maybe<ContentfulQualificationMapSysContentTypeSys>;
};

export type ContentfulQualificationMapSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulQualificationMapSysContentTypeSysFieldSelector>;
};

export type ContentfulQualificationMapSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulQualificationMapSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationMapSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulQualificationMapSysContentTypeSysSortInput>;
};

export type ContentfulQualificationMapSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulQualificationMapSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulQualificationMapSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationMapSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulQualificationMapSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulQualificationMapSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulQualificationMapSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulQualificationMapSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationMapSysSortInput = {
  readonly contentType: InputMaybe<ContentfulQualificationMapSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulQualificationSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly date: InputMaybe<SortOrderEnum>;
  readonly endDate: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly qualification_map: InputMaybe<ContentfulQualificationMapSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulQualificationSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
  readonly url: InputMaybe<SortOrderEnum>;
};

export type ContentfulQualificationSys = {
  readonly contentType: Maybe<ContentfulQualificationSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulQualificationSysContentType = {
  readonly sys: Maybe<ContentfulQualificationSysContentTypeSys>;
};

export type ContentfulQualificationSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulQualificationSysContentTypeSysFieldSelector>;
};

export type ContentfulQualificationSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulQualificationSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulQualificationSysContentTypeSysSortInput>;
};

export type ContentfulQualificationSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulQualificationSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulQualificationSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulQualificationSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulQualificationSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulQualificationSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulQualificationSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationSysSortInput = {
  readonly contentType: InputMaybe<ContentfulQualificationSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulReference = {
  readonly contentful_id: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
};

export type ContentfulSkillGrpup = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly skill_map: Maybe<ReadonlyArray<Maybe<ContentfulSkillMap>>>;
  readonly skills: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulSkillGrpupSys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulSkillGrpupCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulSkillGrpupUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulSkillGrpupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulSkillGrpupEdge>;
  readonly group: ReadonlyArray<ContentfulSkillGrpupGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulSkillGrpup>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulSkillGrpupConnectionDistinctArgs = {
  field: ContentfulSkillGrpupFieldSelector;
};


export type ContentfulSkillGrpupConnectionGroupArgs = {
  field: ContentfulSkillGrpupFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulSkillGrpupConnectionMaxArgs = {
  field: ContentfulSkillGrpupFieldSelector;
};


export type ContentfulSkillGrpupConnectionMinArgs = {
  field: ContentfulSkillGrpupFieldSelector;
};


export type ContentfulSkillGrpupConnectionSumArgs = {
  field: ContentfulSkillGrpupFieldSelector;
};

export type ContentfulSkillGrpupEdge = {
  readonly next: Maybe<ContentfulSkillGrpup>;
  readonly node: ContentfulSkillGrpup;
  readonly previous: Maybe<ContentfulSkillGrpup>;
};

export type ContentfulSkillGrpupFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly skill_map: InputMaybe<ContentfulSkillMapFieldSelector>;
  readonly skills: InputMaybe<ContentfulTagFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulSkillGrpupSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSkillGrpupFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly skill_map: InputMaybe<ContentfulSkillMapFilterListInput>;
  readonly skills: InputMaybe<ContentfulTagFilterListInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulSkillGrpupSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulSkillGrpupFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulSkillGrpupFilterInput>;
};

export type ContentfulSkillGrpupGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulSkillGrpupEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulSkillGrpupGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulSkillGrpup>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulSkillGrpupGroupConnectionDistinctArgs = {
  field: ContentfulSkillGrpupFieldSelector;
};


export type ContentfulSkillGrpupGroupConnectionGroupArgs = {
  field: ContentfulSkillGrpupFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulSkillGrpupGroupConnectionMaxArgs = {
  field: ContentfulSkillGrpupFieldSelector;
};


export type ContentfulSkillGrpupGroupConnectionMinArgs = {
  field: ContentfulSkillGrpupFieldSelector;
};


export type ContentfulSkillGrpupGroupConnectionSumArgs = {
  field: ContentfulSkillGrpupFieldSelector;
};

export type ContentfulSkillGrpupSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly skill_map: InputMaybe<ContentfulSkillMapSortInput>;
  readonly skills: InputMaybe<ContentfulTagSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulSkillGrpupSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulSkillGrpupSys = {
  readonly contentType: Maybe<ContentfulSkillGrpupSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulSkillGrpupSysContentType = {
  readonly sys: Maybe<ContentfulSkillGrpupSysContentTypeSys>;
};

export type ContentfulSkillGrpupSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulSkillGrpupSysContentTypeSysFieldSelector>;
};

export type ContentfulSkillGrpupSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulSkillGrpupSysContentTypeSysFilterInput>;
};

export type ContentfulSkillGrpupSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulSkillGrpupSysContentTypeSysSortInput>;
};

export type ContentfulSkillGrpupSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulSkillGrpupSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSkillGrpupSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSkillGrpupSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulSkillGrpupSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulSkillGrpupSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSkillGrpupSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulSkillGrpupSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSkillGrpupSysSortInput = {
  readonly contentType: InputMaybe<ContentfulSkillGrpupSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulSkillMap = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly expanded: Maybe<Scalars['Boolean']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly skillGroups: Maybe<ReadonlyArray<Maybe<ContentfulSkillGrpup>>>;
  readonly skills: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly sortKey: Maybe<Scalars['Int']['output']>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulSkillMapSys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulSkillMapCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulSkillMapUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulSkillMapConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulSkillMapEdge>;
  readonly group: ReadonlyArray<ContentfulSkillMapGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulSkillMap>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulSkillMapConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldSelector;
};


export type ContentfulSkillMapConnectionGroupArgs = {
  field: ContentfulSkillMapFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulSkillMapConnectionMaxArgs = {
  field: ContentfulSkillMapFieldSelector;
};


export type ContentfulSkillMapConnectionMinArgs = {
  field: ContentfulSkillMapFieldSelector;
};


export type ContentfulSkillMapConnectionSumArgs = {
  field: ContentfulSkillMapFieldSelector;
};

export type ContentfulSkillMapEdge = {
  readonly next: Maybe<ContentfulSkillMap>;
  readonly node: ContentfulSkillMap;
  readonly previous: Maybe<ContentfulSkillMap>;
};

export type ContentfulSkillMapFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly expanded: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly skillGroups: InputMaybe<ContentfulSkillGrpupFieldSelector>;
  readonly skills: InputMaybe<ContentfulTagFieldSelector>;
  readonly sortKey: InputMaybe<FieldSelectorEnum>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulSkillMapSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSkillMapFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly expanded: InputMaybe<BooleanQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly skillGroups: InputMaybe<ContentfulSkillGrpupFilterListInput>;
  readonly skills: InputMaybe<ContentfulTagFilterListInput>;
  readonly sortKey: InputMaybe<IntQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulSkillMapSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulSkillMapFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulSkillMapFilterInput>;
};

export type ContentfulSkillMapGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulSkillMapEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulSkillMapGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulSkillMap>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulSkillMapGroupConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldSelector;
};


export type ContentfulSkillMapGroupConnectionGroupArgs = {
  field: ContentfulSkillMapFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulSkillMapGroupConnectionMaxArgs = {
  field: ContentfulSkillMapFieldSelector;
};


export type ContentfulSkillMapGroupConnectionMinArgs = {
  field: ContentfulSkillMapFieldSelector;
};


export type ContentfulSkillMapGroupConnectionSumArgs = {
  field: ContentfulSkillMapFieldSelector;
};

export type ContentfulSkillMapSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly expanded: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly skillGroups: InputMaybe<ContentfulSkillGrpupSortInput>;
  readonly skills: InputMaybe<ContentfulTagSortInput>;
  readonly sortKey: InputMaybe<SortOrderEnum>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulSkillMapSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulSkillMapSys = {
  readonly contentType: Maybe<ContentfulSkillMapSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulSkillMapSysContentType = {
  readonly sys: Maybe<ContentfulSkillMapSysContentTypeSys>;
};

export type ContentfulSkillMapSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulSkillMapSysContentTypeSysFieldSelector>;
};

export type ContentfulSkillMapSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulSkillMapSysContentTypeSysFilterInput>;
};

export type ContentfulSkillMapSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulSkillMapSysContentTypeSysSortInput>;
};

export type ContentfulSkillMapSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulSkillMapSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSkillMapSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSkillMapSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulSkillMapSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulSkillMapSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulSkillMapSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulSkillMapSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSkillMapSysSortInput = {
  readonly contentType: InputMaybe<ContentfulSkillMapSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulTag = ContentfulEntry & ContentfulReference & Node & {
  readonly blog_post: Maybe<ReadonlyArray<Maybe<ContentfulBlogPost>>>;
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly level: Maybe<Scalars['Int']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly oss: Maybe<ReadonlyArray<Maybe<ContentfulOss>>>;
  readonly parent: Maybe<Node>;
  readonly project: Maybe<ReadonlyArray<Maybe<ContentfulProject>>>;
  readonly skill_grpup: Maybe<ReadonlyArray<Maybe<ContentfulSkillGrpup>>>;
  readonly skill_map: Maybe<ReadonlyArray<Maybe<ContentfulSkillMap>>>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulTagSys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulTagCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulTagUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulTagConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly group: ReadonlyArray<ContentfulTagGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulTagConnectionDistinctArgs = {
  field: ContentfulTagFieldSelector;
};


export type ContentfulTagConnectionGroupArgs = {
  field: ContentfulTagFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulTagConnectionMaxArgs = {
  field: ContentfulTagFieldSelector;
};


export type ContentfulTagConnectionMinArgs = {
  field: ContentfulTagFieldSelector;
};


export type ContentfulTagConnectionSumArgs = {
  field: ContentfulTagFieldSelector;
};

export type ContentfulTagEdge = {
  readonly next: Maybe<ContentfulTag>;
  readonly node: ContentfulTag;
  readonly previous: Maybe<ContentfulTag>;
};

export type ContentfulTagFieldSelector = {
  readonly blog_post: InputMaybe<ContentfulBlogPostFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly level: InputMaybe<FieldSelectorEnum>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly oss: InputMaybe<ContentfulOssFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly project: InputMaybe<ContentfulProjectFieldSelector>;
  readonly skill_grpup: InputMaybe<ContentfulSkillGrpupFieldSelector>;
  readonly skill_map: InputMaybe<ContentfulSkillMapFieldSelector>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulTagSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulTagFilterInput = {
  readonly blog_post: InputMaybe<ContentfulBlogPostFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly level: InputMaybe<IntQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly oss: InputMaybe<ContentfulOssFilterListInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly project: InputMaybe<ContentfulProjectFilterListInput>;
  readonly skill_grpup: InputMaybe<ContentfulSkillGrpupFilterListInput>;
  readonly skill_map: InputMaybe<ContentfulSkillMapFilterListInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulTagSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulTagFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulTagFilterInput>;
};

export type ContentfulTagGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulTagGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulTagGroupConnectionDistinctArgs = {
  field: ContentfulTagFieldSelector;
};


export type ContentfulTagGroupConnectionGroupArgs = {
  field: ContentfulTagFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulTagGroupConnectionMaxArgs = {
  field: ContentfulTagFieldSelector;
};


export type ContentfulTagGroupConnectionMinArgs = {
  field: ContentfulTagFieldSelector;
};


export type ContentfulTagGroupConnectionSumArgs = {
  field: ContentfulTagFieldSelector;
};

export type ContentfulTagSortInput = {
  readonly blog_post: InputMaybe<ContentfulBlogPostSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly level: InputMaybe<SortOrderEnum>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly oss: InputMaybe<ContentfulOssSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly project: InputMaybe<ContentfulProjectSortInput>;
  readonly skill_grpup: InputMaybe<ContentfulSkillGrpupSortInput>;
  readonly skill_map: InputMaybe<ContentfulSkillMapSortInput>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulTagSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulTagSys = {
  readonly contentType: Maybe<ContentfulTagSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulTagSysContentType = {
  readonly sys: Maybe<ContentfulTagSysContentTypeSys>;
};

export type ContentfulTagSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulTagSysContentTypeSysFieldSelector>;
};

export type ContentfulTagSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulTagSysContentTypeSysFilterInput>;
};

export type ContentfulTagSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulTagSysContentTypeSysSortInput>;
};

export type ContentfulTagSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulTagSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulTagSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTagSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulTagSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulTagSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulTagSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulTagSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTagSysSortInput = {
  readonly contentType: InputMaybe<ContentfulTagSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulWhatICanDo = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String']['output'];
  readonly createdAt: Maybe<Scalars['Date']['output']>;
  readonly icon: Maybe<ContentfulIcon>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly node_locale: Scalars['String']['output'];
  readonly parent: Maybe<Node>;
  readonly sortKey: Maybe<Scalars['Int']['output']>;
  readonly spaceId: Maybe<Scalars['String']['output']>;
  readonly subName: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulWhatICanDoSys>;
  readonly updatedAt: Maybe<Scalars['Date']['output']>;
};


export type ContentfulWhatICanDoCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type ContentfulWhatICanDoUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulWhatICanDoConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulWhatICanDoEdge>;
  readonly group: ReadonlyArray<ContentfulWhatICanDoGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulWhatICanDo>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulWhatICanDoConnectionDistinctArgs = {
  field: ContentfulWhatICanDoFieldSelector;
};


export type ContentfulWhatICanDoConnectionGroupArgs = {
  field: ContentfulWhatICanDoFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulWhatICanDoConnectionMaxArgs = {
  field: ContentfulWhatICanDoFieldSelector;
};


export type ContentfulWhatICanDoConnectionMinArgs = {
  field: ContentfulWhatICanDoFieldSelector;
};


export type ContentfulWhatICanDoConnectionSumArgs = {
  field: ContentfulWhatICanDoFieldSelector;
};

export type ContentfulWhatICanDoEdge = {
  readonly next: Maybe<ContentfulWhatICanDo>;
  readonly node: ContentfulWhatICanDo;
  readonly previous: Maybe<ContentfulWhatICanDo>;
};

export type ContentfulWhatICanDoFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly contentful_id: InputMaybe<FieldSelectorEnum>;
  readonly createdAt: InputMaybe<FieldSelectorEnum>;
  readonly icon: InputMaybe<ContentfulIconFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sortKey: InputMaybe<FieldSelectorEnum>;
  readonly spaceId: InputMaybe<FieldSelectorEnum>;
  readonly subName: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulWhatICanDoSysFieldSelector>;
  readonly updatedAt: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulWhatICanDoFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly icon: InputMaybe<ContentfulIconFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sortKey: InputMaybe<IntQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly subName: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulWhatICanDoSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

export type ContentfulWhatICanDoFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulWhatICanDoFilterInput>;
};

export type ContentfulWhatICanDoGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulWhatICanDoEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulWhatICanDoGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulWhatICanDo>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulWhatICanDoGroupConnectionDistinctArgs = {
  field: ContentfulWhatICanDoFieldSelector;
};


export type ContentfulWhatICanDoGroupConnectionGroupArgs = {
  field: ContentfulWhatICanDoFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulWhatICanDoGroupConnectionMaxArgs = {
  field: ContentfulWhatICanDoFieldSelector;
};


export type ContentfulWhatICanDoGroupConnectionMinArgs = {
  field: ContentfulWhatICanDoFieldSelector;
};


export type ContentfulWhatICanDoGroupConnectionSumArgs = {
  field: ContentfulWhatICanDoFieldSelector;
};

export type ContentfulWhatICanDoSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly contentful_id: InputMaybe<SortOrderEnum>;
  readonly createdAt: InputMaybe<SortOrderEnum>;
  readonly icon: InputMaybe<ContentfulIconSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sortKey: InputMaybe<SortOrderEnum>;
  readonly spaceId: InputMaybe<SortOrderEnum>;
  readonly subName: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulWhatICanDoSysSortInput>;
  readonly updatedAt: InputMaybe<SortOrderEnum>;
};

export type ContentfulWhatICanDoSys = {
  readonly contentType: Maybe<ContentfulWhatICanDoSysContentType>;
  readonly revision: Maybe<Scalars['Int']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulWhatICanDoSysContentType = {
  readonly sys: Maybe<ContentfulWhatICanDoSysContentTypeSys>;
};

export type ContentfulWhatICanDoSysContentTypeFieldSelector = {
  readonly sys: InputMaybe<ContentfulWhatICanDoSysContentTypeSysFieldSelector>;
};

export type ContentfulWhatICanDoSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulWhatICanDoSysContentTypeSysFilterInput>;
};

export type ContentfulWhatICanDoSysContentTypeSortInput = {
  readonly sys: InputMaybe<ContentfulWhatICanDoSysContentTypeSysSortInput>;
};

export type ContentfulWhatICanDoSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']['output']>;
  readonly linkType: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulWhatICanDoSysContentTypeSysFieldSelector = {
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly linkType: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulWhatICanDoSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulWhatICanDoSysContentTypeSysSortInput = {
  readonly id: InputMaybe<SortOrderEnum>;
  readonly linkType: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulWhatICanDoSysFieldSelector = {
  readonly contentType: InputMaybe<ContentfulWhatICanDoSysContentTypeFieldSelector>;
  readonly revision: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulWhatICanDoSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulWhatICanDoSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulWhatICanDoSysSortInput = {
  readonly contentType: InputMaybe<ContentfulWhatICanDoSysContentTypeSortInput>;
  readonly revision: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
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
  /** Returns the first child node of type CertificationsYaml or null if there are no children of given type on this node */
  readonly childCertificationsYaml: Maybe<CertificationsYaml>;
  /** Returns the first child node of type HistoriesYaml or null if there are no children of given type on this node */
  readonly childHistoriesYaml: Maybe<HistoriesYaml>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  /** Returns the first child node of type OssesYaml or null if there are no children of given type on this node */
  readonly childOssesYaml: Maybe<OssesYaml>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type CertificationsYaml */
  readonly childrenCertificationsYaml: Maybe<ReadonlyArray<Maybe<CertificationsYaml>>>;
  /** Returns all children nodes filtered by type HistoriesYaml */
  readonly childrenHistoriesYaml: Maybe<ReadonlyArray<Maybe<HistoriesYaml>>>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  /** Returns all children nodes filtered by type OssesYaml */
  readonly childrenOssesYaml: Maybe<ReadonlyArray<Maybe<OssesYaml>>>;
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
  readonly childCertificationsYaml: InputMaybe<CertificationsYamlFieldSelector>;
  readonly childHistoriesYaml: InputMaybe<HistoriesYamlFieldSelector>;
  readonly childImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly childMdx: InputMaybe<MdxFieldSelector>;
  readonly childOssesYaml: InputMaybe<OssesYamlFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenCertificationsYaml: InputMaybe<CertificationsYamlFieldSelector>;
  readonly childrenHistoriesYaml: InputMaybe<HistoriesYamlFieldSelector>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly childrenMdx: InputMaybe<MdxFieldSelector>;
  readonly childrenOssesYaml: InputMaybe<OssesYamlFieldSelector>;
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
  readonly childCertificationsYaml: InputMaybe<CertificationsYamlFilterInput>;
  readonly childHistoriesYaml: InputMaybe<HistoriesYamlFilterInput>;
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly childMdx: InputMaybe<MdxFilterInput>;
  readonly childOssesYaml: InputMaybe<OssesYamlFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenCertificationsYaml: InputMaybe<CertificationsYamlFilterListInput>;
  readonly childrenHistoriesYaml: InputMaybe<HistoriesYamlFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly childrenMdx: InputMaybe<MdxFilterListInput>;
  readonly childrenOssesYaml: InputMaybe<OssesYamlFilterListInput>;
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
  readonly childCertificationsYaml: InputMaybe<CertificationsYamlSortInput>;
  readonly childHistoriesYaml: InputMaybe<HistoriesYamlSortInput>;
  readonly childImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly childMdx: InputMaybe<MdxSortInput>;
  readonly childOssesYaml: InputMaybe<OssesYamlSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenCertificationsYaml: InputMaybe<CertificationsYamlSortInput>;
  readonly childrenHistoriesYaml: InputMaybe<HistoriesYamlSortInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly childrenMdx: InputMaybe<MdxSortInput>;
  readonly childrenOssesYaml: InputMaybe<OssesYamlSortInput>;
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

export type HistoriesYaml = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly date: Maybe<Scalars['Date']['output']>;
  readonly excerpt: Maybe<Scalars['String']['output']>;
  readonly icon: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly parent: Maybe<Node>;
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
  readonly icon: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
};

export type HistoriesYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly icon: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
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
  readonly icon: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
};

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

export enum ImageResizingBehavior {
  /** Crop a part of the original image to match the specified size. */
  Crop = 0,
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  Fill = 1,
  NoChange = 2,
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 3,
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 4,
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 5
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

export type Mdx = Node & {
  readonly body: Maybe<Scalars['String']['output']>;
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Maybe<Scalars['String']['output']>;
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly tableOfContents: Maybe<Scalars['JSON']['output']>;
};


export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']['input']>;
};


export type MdxTableOfContentsArgs = {
  maxDepth: InputMaybe<Scalars['Int']['input']>;
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
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly frontmatter: InputMaybe<MdxFrontmatterFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly tableOfContents: InputMaybe<FieldSelectorEnum>;
};

export type MdxFilterInput = {
  readonly body: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly frontmatter: InputMaybe<MdxFrontmatterFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly tableOfContents: InputMaybe<JsonQueryOperatorInput>;
};

export type MdxFilterListInput = {
  readonly elemMatch: InputMaybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  readonly category: Maybe<Scalars['String']['output']>;
  readonly created: Maybe<Scalars['Date']['output']>;
  readonly excerpt: Maybe<Scalars['String']['output']>;
  readonly redirect: Maybe<Scalars['String']['output']>;
  readonly slug: Maybe<Scalars['String']['output']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly updated: Maybe<Scalars['Date']['output']>;
};


export type MdxFrontmatterCreatedArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};


export type MdxFrontmatterUpdatedArgs = {
  difference: InputMaybe<Scalars['String']['input']>;
  formatString: InputMaybe<Scalars['String']['input']>;
  fromNow: InputMaybe<Scalars['Boolean']['input']>;
  locale: InputMaybe<Scalars['String']['input']>;
};

export type MdxFrontmatterFieldSelector = {
  readonly category: InputMaybe<FieldSelectorEnum>;
  readonly created: InputMaybe<FieldSelectorEnum>;
  readonly excerpt: InputMaybe<FieldSelectorEnum>;
  readonly redirect: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly tags: InputMaybe<FieldSelectorEnum>;
  readonly title: InputMaybe<FieldSelectorEnum>;
  readonly type: InputMaybe<FieldSelectorEnum>;
  readonly updated: InputMaybe<FieldSelectorEnum>;
};

export type MdxFrontmatterFilterInput = {
  readonly category: InputMaybe<StringQueryOperatorInput>;
  readonly created: InputMaybe<DateQueryOperatorInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly redirect: InputMaybe<StringQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly updated: InputMaybe<DateQueryOperatorInput>;
};

export type MdxFrontmatterSortInput = {
  readonly category: InputMaybe<SortOrderEnum>;
  readonly created: InputMaybe<SortOrderEnum>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly redirect: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly tags: InputMaybe<SortOrderEnum>;
  readonly title: InputMaybe<SortOrderEnum>;
  readonly type: InputMaybe<SortOrderEnum>;
  readonly updated: InputMaybe<SortOrderEnum>;
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
  readonly children: InputMaybe<NodeSortInput>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly frontmatter: InputMaybe<MdxFrontmatterSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly tableOfContents: InputMaybe<SortOrderEnum>;
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

export type OssesYaml = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly href: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly parent: Maybe<Node>;
  readonly startDate: Maybe<Scalars['Date']['output']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']['output']>>>;
};


export type OssesYamlStartDateArgs = {
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
  readonly href: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly name: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly startDate: InputMaybe<FieldSelectorEnum>;
  readonly tags: InputMaybe<FieldSelectorEnum>;
};

export type OssesYamlFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly startDate: InputMaybe<DateQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
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
  readonly href: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly name: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly startDate: InputMaybe<SortOrderEnum>;
  readonly tags: InputMaybe<SortOrderEnum>;
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

export type Query = {
  readonly allCertificationsYaml: CertificationsYamlConnection;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly allContentfulBlogPost: ContentfulBlogPostConnection;
  readonly allContentfulBlogPostContentTextNode: ContentfulBlogPostContentTextNodeConnection;
  readonly allContentfulCategory: ContentfulCategoryConnection;
  readonly allContentfulContact: ContentfulContactConnection;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly allContentfulHello: ContentfulHelloConnection;
  readonly allContentfulHistory: ContentfulHistoryConnection;
  readonly allContentfulIcon: ContentfulIconConnection;
  readonly allContentfulIconSvgTextNode: ContentfulIconSvgTextNodeConnection;
  readonly allContentfulOss: ContentfulOssConnection;
  readonly allContentfulOssDetailTextNode: ContentfulOssDetailTextNodeConnection;
  readonly allContentfulProject: ContentfulProjectConnection;
  readonly allContentfulProjectDetailTextNode: ContentfulProjectDetailTextNodeConnection;
  readonly allContentfulQualification: ContentfulQualificationConnection;
  readonly allContentfulQualificationMap: ContentfulQualificationMapConnection;
  readonly allContentfulSkillGrpup: ContentfulSkillGrpupConnection;
  readonly allContentfulSkillMap: ContentfulSkillMapConnection;
  readonly allContentfulTag: ContentfulTagConnection;
  readonly allContentfulWhatICanDo: ContentfulWhatICanDoConnection;
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allHistoriesYaml: HistoriesYamlConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allMdx: MdxConnection;
  readonly allOssesYaml: OssesYamlConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly certificationsYaml: Maybe<CertificationsYaml>;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly contentfulBlogPost: Maybe<ContentfulBlogPost>;
  readonly contentfulBlogPostContentTextNode: Maybe<ContentfulBlogPostContentTextNode>;
  readonly contentfulCategory: Maybe<ContentfulCategory>;
  readonly contentfulContact: Maybe<ContentfulContact>;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly contentfulHello: Maybe<ContentfulHello>;
  readonly contentfulHistory: Maybe<ContentfulHistory>;
  readonly contentfulIcon: Maybe<ContentfulIcon>;
  readonly contentfulIconSvgTextNode: Maybe<ContentfulIconSvgTextNode>;
  readonly contentfulOss: Maybe<ContentfulOss>;
  readonly contentfulOssDetailTextNode: Maybe<ContentfulOssDetailTextNode>;
  readonly contentfulProject: Maybe<ContentfulProject>;
  readonly contentfulProjectDetailTextNode: Maybe<ContentfulProjectDetailTextNode>;
  readonly contentfulQualification: Maybe<ContentfulQualification>;
  readonly contentfulQualificationMap: Maybe<ContentfulQualificationMap>;
  readonly contentfulSkillGrpup: Maybe<ContentfulSkillGrpup>;
  readonly contentfulSkillMap: Maybe<ContentfulSkillMap>;
  readonly contentfulTag: Maybe<ContentfulTag>;
  readonly contentfulWhatICanDo: Maybe<ContentfulWhatICanDo>;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly historiesYaml: Maybe<HistoriesYaml>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly mdx: Maybe<Mdx>;
  readonly ossesYaml: Maybe<OssesYaml>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
};


export type QueryAllCertificationsYamlArgs = {
  filter: InputMaybe<CertificationsYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<CertificationsYamlSortInput>>>;
};


export type QueryAllContentfulAssetArgs = {
  filter: InputMaybe<ContentfulAssetFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulAssetSortInput>>>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter: InputMaybe<ContentfulBlogPostFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulBlogPostSortInput>>>;
};


export type QueryAllContentfulBlogPostContentTextNodeArgs = {
  filter: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulBlogPostContentTextNodeSortInput>>>;
};


export type QueryAllContentfulCategoryArgs = {
  filter: InputMaybe<ContentfulCategoryFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulCategorySortInput>>>;
};


export type QueryAllContentfulContactArgs = {
  filter: InputMaybe<ContentfulContactFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulContactSortInput>>>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter: InputMaybe<ContentfulContentTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulContentTypeSortInput>>>;
};


export type QueryAllContentfulEntryArgs = {
  filter: InputMaybe<ContentfulEntryFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulEntrySortInput>>>;
};


export type QueryAllContentfulHelloArgs = {
  filter: InputMaybe<ContentfulHelloFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulHelloSortInput>>>;
};


export type QueryAllContentfulHistoryArgs = {
  filter: InputMaybe<ContentfulHistoryFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulHistorySortInput>>>;
};


export type QueryAllContentfulIconArgs = {
  filter: InputMaybe<ContentfulIconFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulIconSortInput>>>;
};


export type QueryAllContentfulIconSvgTextNodeArgs = {
  filter: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulIconSvgTextNodeSortInput>>>;
};


export type QueryAllContentfulOssArgs = {
  filter: InputMaybe<ContentfulOssFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulOssSortInput>>>;
};


export type QueryAllContentfulOssDetailTextNodeArgs = {
  filter: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulOssDetailTextNodeSortInput>>>;
};


export type QueryAllContentfulProjectArgs = {
  filter: InputMaybe<ContentfulProjectFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulProjectSortInput>>>;
};


export type QueryAllContentfulProjectDetailTextNodeArgs = {
  filter: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulProjectDetailTextNodeSortInput>>>;
};


export type QueryAllContentfulQualificationArgs = {
  filter: InputMaybe<ContentfulQualificationFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulQualificationSortInput>>>;
};


export type QueryAllContentfulQualificationMapArgs = {
  filter: InputMaybe<ContentfulQualificationMapFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulQualificationMapSortInput>>>;
};


export type QueryAllContentfulSkillGrpupArgs = {
  filter: InputMaybe<ContentfulSkillGrpupFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulSkillGrpupSortInput>>>;
};


export type QueryAllContentfulSkillMapArgs = {
  filter: InputMaybe<ContentfulSkillMapFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulSkillMapSortInput>>>;
};


export type QueryAllContentfulTagArgs = {
  filter: InputMaybe<ContentfulTagFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulTagSortInput>>>;
};


export type QueryAllContentfulWhatICanDoArgs = {
  filter: InputMaybe<ContentfulWhatICanDoFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulWhatICanDoSortInput>>>;
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


export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpSortInput>>>;
};


export type QueryAllMdxArgs = {
  filter: InputMaybe<MdxFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<MdxSortInput>>>;
};


export type QueryAllOssesYamlArgs = {
  filter: InputMaybe<OssesYamlFilterInput>;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<OssesYamlSortInput>>>;
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


export type QueryCertificationsYamlArgs = {
  category: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  endDate: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  startDate: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulAssetArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  file: InputMaybe<ContentfulAssetFileFilterInput>;
  filename: InputMaybe<StringQueryOperatorInput>;
  filesize: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  gatsbyImageData: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  placeholderUrl: InputMaybe<StringQueryOperatorInput>;
  publicUrl: InputMaybe<StringQueryOperatorInput>;
  resize: InputMaybe<RemoteFileResizeFilterInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulAssetSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};


export type QueryContentfulBlogPostArgs = {
  category: InputMaybe<ContentfulCategoryFilterInput>;
  childContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulBlogPostContentTextNode: InputMaybe<ContentfulBlogPostContentTextNodeFilterListInput>;
  content: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  created: InputMaybe<DateQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  redirect: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulBlogPostSysFilterInput>;
  tags: InputMaybe<ContentfulTagFilterListInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updated: InputMaybe<DateQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulBlogPostContentTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulBlogPostContentTextNodeSysFilterInput>;
};


export type QueryContentfulCategoryArgs = {
  blog_post: InputMaybe<ContentfulBlogPostFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulCategorySysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulContactArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  iconSvgDark: InputMaybe<ContentfulAssetFilterInput>;
  iconSvgLight: InputMaybe<ContentfulAssetFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulContactSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulContentTypeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  displayField: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryContentfulEntryArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


export type QueryContentfulHelloArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulHelloSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulHistoryArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulHistorySysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulIconArgs = {
  childContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulIconSvgTextNode: InputMaybe<ContentfulIconSvgTextNodeFilterListInput>;
  contact: InputMaybe<ContentfulContactFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  history: InputMaybe<ContentfulHistoryFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  oss: InputMaybe<ContentfulOssFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  project: InputMaybe<ContentfulProjectFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  svg: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  sys: InputMaybe<ContentfulIconSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  what_i_can_do: InputMaybe<ContentfulWhatICanDoFilterListInput>;
};


export type QueryContentfulIconSvgTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  svg: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulIconSvgTextNodeSysFilterInput>;
};


export type QueryContentfulOssArgs = {
  childContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulOssDetailTextNode: InputMaybe<ContentfulOssDetailTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  detail: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  startDate: InputMaybe<DateQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulOssSysFilterInput>;
  tags: InputMaybe<ContentfulTagFilterListInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulOssDetailTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  detail: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulOssDetailTextNodeSysFilterInput>;
};


export type QueryContentfulProjectArgs = {
  childContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulProjectDetailTextNode: InputMaybe<ContentfulProjectDetailTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  detail: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  endDate: InputMaybe<DateQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  startDate: InputMaybe<DateQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulProjectSysFilterInput>;
  tags: InputMaybe<ContentfulTagFilterListInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulProjectDetailTextNodeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  detail: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulProjectDetailTextNodeSysFilterInput>;
};


export type QueryContentfulQualificationArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  date: InputMaybe<DateQueryOperatorInput>;
  endDate: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  qualification_map: InputMaybe<ContentfulQualificationMapFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulQualificationSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


export type QueryContentfulQualificationMapArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  expanded: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  qualifications: InputMaybe<ContentfulQualificationFilterListInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulQualificationMapSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulSkillGrpupArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  skill_map: InputMaybe<ContentfulSkillMapFilterListInput>;
  skills: InputMaybe<ContentfulTagFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulSkillGrpupSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulSkillMapArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  expanded: InputMaybe<BooleanQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  skillGroups: InputMaybe<ContentfulSkillGrpupFilterListInput>;
  skills: InputMaybe<ContentfulTagFilterListInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulSkillMapSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulTagArgs = {
  blog_post: InputMaybe<ContentfulBlogPostFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  level: InputMaybe<IntQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  oss: InputMaybe<ContentfulOssFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  project: InputMaybe<ContentfulProjectFilterListInput>;
  skill_grpup: InputMaybe<ContentfulSkillGrpupFilterListInput>;
  skill_map: InputMaybe<ContentfulSkillMapFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulTagSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulWhatICanDoArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  icon: InputMaybe<ContentfulIconFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sortKey: InputMaybe<IntQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  subName: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulWhatICanDoSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
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
  childCertificationsYaml: InputMaybe<CertificationsYamlFilterInput>;
  childHistoriesYaml: InputMaybe<HistoriesYamlFilterInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  childMdx: InputMaybe<MdxFilterInput>;
  childOssesYaml: InputMaybe<OssesYamlFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenCertificationsYaml: InputMaybe<CertificationsYamlFilterListInput>;
  childrenHistoriesYaml: InputMaybe<HistoriesYamlFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
  childrenOssesYaml: InputMaybe<OssesYamlFilterListInput>;
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
  icon: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
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


export type QueryMdxArgs = {
  body: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  frontmatter: InputMaybe<MdxFrontmatterFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  tableOfContents: InputMaybe<JsonQueryOperatorInput>;
};


export type QueryOssesYamlArgs = {
  children: InputMaybe<NodeFilterListInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  startDate: InputMaybe<DateQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
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

/** Remote Interface */
export type RemoteFile = {
  readonly filename: Scalars['String']['output'];
  readonly filesize: Maybe<Scalars['Int']['output']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['GatsbyImageData']['output']>;
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly mimeType: Scalars['String']['output'];
  readonly publicUrl: Scalars['String']['output'];
  readonly resize: Maybe<RemoteFileResize>;
  readonly width: Maybe<Scalars['Int']['output']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']['input']>;
  backgroundColor: InputMaybe<Scalars['String']['input']>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<ReadonlyArray<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']['input']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  sizes: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']['input']>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export enum RemoteFileCropFocus {
  Bottom = 0,
  Center = 1,
  Edges = 2,
  Entropy = 3,
  Faces = 4,
  Left = 5,
  Right = 6,
  Top = 7
}

export enum RemoteFileFit {
  Contain = 0,
  Cover = 1,
  Fill = 2,
  Outside = 3
}

export enum RemoteFileFormat {
  Auto = 0,
  Avif = 1,
  Jpg = 2,
  Png = 3,
  Webp = 4
}

export enum RemoteFileLayout {
  Constrained = 0,
  Fixed = 1,
  FullWidth = 2
}

export enum RemoteFilePlaceholder {
  Blurred = 0,
  DominantColor = 1,
  None = 2,
  TracedSvg = 3
}

export type RemoteFileResize = {
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly src: Maybe<Scalars['String']['output']>;
  readonly width: Maybe<Scalars['Int']['output']>;
};

export type RemoteFileResizeFieldSelector = {
  readonly height: InputMaybe<FieldSelectorEnum>;
  readonly src: InputMaybe<FieldSelectorEnum>;
  readonly width: InputMaybe<FieldSelectorEnum>;
};

export type RemoteFileResizeFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

export type RemoteFileResizeSortInput = {
  readonly height: InputMaybe<SortOrderEnum>;
  readonly src: InputMaybe<SortOrderEnum>;
  readonly width: InputMaybe<SortOrderEnum>;
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

export type ContentfulBlogPostContentTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly content: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<ContentfulBlogPostContentTextNodeSys>;
};

export type ContentfulBlogPostContentTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulBlogPostContentTextNodeEdge>;
  readonly group: ReadonlyArray<ContentfulBlogPostContentTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulBlogPostContentTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulBlogPostContentTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
};


export type ContentfulBlogPostContentTextNodeConnectionGroupArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulBlogPostContentTextNodeConnectionMaxArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
};


export type ContentfulBlogPostContentTextNodeConnectionMinArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
};


export type ContentfulBlogPostContentTextNodeConnectionSumArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
};

export type ContentfulBlogPostContentTextNodeEdge = {
  readonly next: Maybe<ContentfulBlogPostContentTextNode>;
  readonly node: ContentfulBlogPostContentTextNode;
  readonly previous: Maybe<ContentfulBlogPostContentTextNode>;
};

export type ContentfulBlogPostContentTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<ContentfulBlogPostContentTextNodeSysFieldSelector>;
};

export type ContentfulBlogPostContentTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<ContentfulBlogPostContentTextNodeSysFilterInput>;
};

export type ContentfulBlogPostContentTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
};

export type ContentfulBlogPostContentTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulBlogPostContentTextNodeEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulBlogPostContentTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulBlogPostContentTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulBlogPostContentTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionGroupArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionMaxArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionMinArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionSumArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
};

export type ContentfulBlogPostContentTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly content: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<ContentfulBlogPostContentTextNodeSysSortInput>;
};

export type ContentfulBlogPostContentTextNodeSys = {
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulBlogPostContentTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulBlogPostContentTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostContentTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulIconSvgTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly svg: Maybe<Scalars['String']['output']>;
  readonly sys: Maybe<ContentfulIconSvgTextNodeSys>;
};

export type ContentfulIconSvgTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulIconSvgTextNodeEdge>;
  readonly group: ReadonlyArray<ContentfulIconSvgTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulIconSvgTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulIconSvgTextNodeConnectionDistinctArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
};


export type ContentfulIconSvgTextNodeConnectionGroupArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulIconSvgTextNodeConnectionMaxArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
};


export type ContentfulIconSvgTextNodeConnectionMinArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
};


export type ContentfulIconSvgTextNodeConnectionSumArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
};

export type ContentfulIconSvgTextNodeEdge = {
  readonly next: Maybe<ContentfulIconSvgTextNode>;
  readonly node: ContentfulIconSvgTextNode;
  readonly previous: Maybe<ContentfulIconSvgTextNode>;
};

export type ContentfulIconSvgTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly svg: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulIconSvgTextNodeSysFieldSelector>;
};

export type ContentfulIconSvgTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly svg: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulIconSvgTextNodeSysFilterInput>;
};

export type ContentfulIconSvgTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
};

export type ContentfulIconSvgTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulIconSvgTextNodeEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulIconSvgTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulIconSvgTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulIconSvgTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
};


export type ContentfulIconSvgTextNodeGroupConnectionGroupArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulIconSvgTextNodeGroupConnectionMaxArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
};


export type ContentfulIconSvgTextNodeGroupConnectionMinArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
};


export type ContentfulIconSvgTextNodeGroupConnectionSumArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
};

export type ContentfulIconSvgTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly svg: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulIconSvgTextNodeSysSortInput>;
};

export type ContentfulIconSvgTextNodeSys = {
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulIconSvgTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulIconSvgTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulIconSvgTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulOssDetailTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly detail: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<ContentfulOssDetailTextNodeSys>;
};

export type ContentfulOssDetailTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulOssDetailTextNodeEdge>;
  readonly group: ReadonlyArray<ContentfulOssDetailTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulOssDetailTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulOssDetailTextNodeConnectionDistinctArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
};


export type ContentfulOssDetailTextNodeConnectionGroupArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulOssDetailTextNodeConnectionMaxArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
};


export type ContentfulOssDetailTextNodeConnectionMinArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
};


export type ContentfulOssDetailTextNodeConnectionSumArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
};

export type ContentfulOssDetailTextNodeEdge = {
  readonly next: Maybe<ContentfulOssDetailTextNode>;
  readonly node: ContentfulOssDetailTextNode;
  readonly previous: Maybe<ContentfulOssDetailTextNode>;
};

export type ContentfulOssDetailTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly detail: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<ContentfulOssDetailTextNodeSysFieldSelector>;
};

export type ContentfulOssDetailTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly detail: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<ContentfulOssDetailTextNodeSysFilterInput>;
};

export type ContentfulOssDetailTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
};

export type ContentfulOssDetailTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulOssDetailTextNodeEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulOssDetailTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulOssDetailTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulOssDetailTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
};


export type ContentfulOssDetailTextNodeGroupConnectionGroupArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulOssDetailTextNodeGroupConnectionMaxArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
};


export type ContentfulOssDetailTextNodeGroupConnectionMinArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
};


export type ContentfulOssDetailTextNodeGroupConnectionSumArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
};

export type ContentfulOssDetailTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly detail: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<ContentfulOssDetailTextNodeSysSortInput>;
};

export type ContentfulOssDetailTextNodeSys = {
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulOssDetailTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulOssDetailTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulOssDetailTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

export type ContentfulProjectDetailTextNode = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly detail: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<ContentfulProjectDetailTextNodeSys>;
};

export type ContentfulProjectDetailTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulProjectDetailTextNodeEdge>;
  readonly group: ReadonlyArray<ContentfulProjectDetailTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulProjectDetailTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulProjectDetailTextNodeConnectionDistinctArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
};


export type ContentfulProjectDetailTextNodeConnectionGroupArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulProjectDetailTextNodeConnectionMaxArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
};


export type ContentfulProjectDetailTextNodeConnectionMinArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
};


export type ContentfulProjectDetailTextNodeConnectionSumArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
};

export type ContentfulProjectDetailTextNodeEdge = {
  readonly next: Maybe<ContentfulProjectDetailTextNode>;
  readonly node: ContentfulProjectDetailTextNode;
  readonly previous: Maybe<ContentfulProjectDetailTextNode>;
};

export type ContentfulProjectDetailTextNodeFieldSelector = {
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly detail: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<ContentfulProjectDetailTextNodeSysFieldSelector>;
};

export type ContentfulProjectDetailTextNodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly detail: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<ContentfulProjectDetailTextNodeSysFilterInput>;
};

export type ContentfulProjectDetailTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
};

export type ContentfulProjectDetailTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']['output']>;
  readonly edges: ReadonlyArray<ContentfulProjectDetailTextNodeEdge>;
  readonly field: Scalars['String']['output'];
  readonly fieldValue: Maybe<Scalars['String']['output']>;
  readonly group: ReadonlyArray<ContentfulProjectDetailTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']['output']>;
  readonly min: Maybe<Scalars['Float']['output']>;
  readonly nodes: ReadonlyArray<ContentfulProjectDetailTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']['output']>;
  readonly totalCount: Scalars['Int']['output'];
};


export type ContentfulProjectDetailTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
};


export type ContentfulProjectDetailTextNodeGroupConnectionGroupArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']['input']>;
  skip: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulProjectDetailTextNodeGroupConnectionMaxArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
};


export type ContentfulProjectDetailTextNodeGroupConnectionMinArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
};


export type ContentfulProjectDetailTextNodeGroupConnectionSumArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
};

export type ContentfulProjectDetailTextNodeSortInput = {
  readonly children: InputMaybe<NodeSortInput>;
  readonly detail: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<ContentfulProjectDetailTextNodeSysSortInput>;
};

export type ContentfulProjectDetailTextNodeSys = {
  readonly type: Maybe<Scalars['String']['output']>;
};

export type ContentfulProjectDetailTextNodeSysFieldSelector = {
  readonly type: InputMaybe<FieldSelectorEnum>;
};

export type ContentfulProjectDetailTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectDetailTextNodeSysSortInput = {
  readonly type: InputMaybe<SortOrderEnum>;
};

export type OnCreatePagesQueryVariables = Exact<{ [key: string]: never; }>;


export type OnCreatePagesQuery = { readonly allMdx: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'id'>
      & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'slug' | 'tags'>>, readonly internal: Pick<Internal, 'contentFilePath'> }
    )> } };

export type OnCreatePagesStatefullyQueryVariables = Exact<{ [key: string]: never; }>;


export type OnCreatePagesStatefullyQuery = { readonly allMdx: { readonly nodes: ReadonlyArray<{ readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'slug' | 'excerpt'>> }> } };

export type BlogPostCardFragment = { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'slug' | 'created' | 'redirect'>> };

export type BlogPostListFragment = (
  Pick<Mdx, 'id'>
  & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'slug' | 'created' | 'redirect'>> }
);

export type BlogPostTableOfContentFragment = Pick<Mdx, 'tableOfContents'>;

export type PortfolioCertificationCardFragment = Pick<CertificationsYaml, 'name' | 'startDate' | 'endDate'>;

export type PortfolioCertificationDetailFragment = Pick<CertificationsYaml, 'name' | 'startDate' | 'endDate'>;

export type PortfolioCertificationListFragment = { readonly group: ReadonlyArray<(
    Pick<CertificationsYamlGroupConnection, 'fieldValue'>
    & { readonly nodes: ReadonlyArray<Pick<CertificationsYaml, 'name' | 'startDate' | 'endDate'>> }
  )> };

export type PortfolioHistoryCardFragment = Pick<HistoriesYaml, 'name' | 'date' | 'excerpt' | 'icon'>;

export type PortfolioHistoryListFragment = { readonly nodes: ReadonlyArray<Pick<HistoriesYaml, 'name' | 'date' | 'excerpt' | 'icon'>> };

export type PortfolioOssCardFragment = Pick<OssesYaml, 'name' | 'tags' | 'startDate' | 'href'>;

export type PortfolioOssListFragment = { readonly nodes: ReadonlyArray<Pick<OssesYaml, 'name' | 'tags' | 'startDate' | 'href'>> };

export type PortfolioProjectCardFragment = (
  Pick<ContentfulProject, 'id' | 'name' | 'startDate'>
  & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )> }
);

export type PortfolioProjectListFragment = (
  Pick<ContentfulProject, 'id' | 'name' | 'startDate'>
  & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )> }
);

export type RelatedBlogPostCardFragment = { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'slug' | 'redirect'>> };

export type RelatedBlogPostListFragment = (
  Pick<Mdx, 'id'>
  & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'slug' | 'redirect'>> }
);

export type BuildTimeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type BuildTimeDataQuery = { readonly site: Maybe<Pick<Site, 'buildTime'>> };

export type BlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPageQuery = { readonly blogPostList: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'id'>
      & { readonly frontmatter: Maybe<Pick<MdxFrontmatter, 'title' | 'created' | 'category' | 'slug' | 'redirect'>> }
    )> } };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { readonly projects: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulProject, 'id' | 'name' | 'startDate'>
      & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
        Pick<ContentfulIcon, 'name'>
        & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
      )> }
    )> }, readonly histories: { readonly nodes: ReadonlyArray<Pick<HistoriesYaml, 'name' | 'date' | 'excerpt' | 'icon'>> }, readonly osses: { readonly nodes: ReadonlyArray<Pick<OssesYaml, 'name' | 'tags' | 'startDate' | 'href'>> }, readonly certifications: { readonly group: ReadonlyArray<(
      Pick<CertificationsYamlGroupConnection, 'fieldValue'>
      & { readonly nodes: ReadonlyArray<Pick<CertificationsYaml, 'name' | 'startDate' | 'endDate'>> }
    )> } };

export type BlogPostTemplateQueryVariables = Exact<{
  id: Scalars['String']['input'];
  tags: ReadonlyArray<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type BlogPostTemplateQuery = { readonly post: Maybe<(
    Pick<Mdx, 'id' | 'tableOfContents'>
    & { readonly frontmatter: Maybe<(
      Pick<MdxFrontmatter, 'slug' | 'redirect' | 'title' | 'excerpt' | 'created' | 'updated' | 'category' | 'tags'>
      & { createdTime: MdxFrontmatter['created'] }
    )> }
  )>, readonly relatedPosts: { readonly nodes: ReadonlyArray<(
      Pick<Mdx, 'id'>
      & { readonly frontmatter: Maybe<(
        Pick<MdxFrontmatter, 'title' | 'slug' | 'redirect'>
        & { createdTime: MdxFrontmatter['created'] }
      )> }
    )> } };
