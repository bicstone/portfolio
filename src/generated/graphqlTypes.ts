export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GatsbyImageData: any;
  JSON: any;
};

export type AvifOptions = {
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
  readonly speed: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<Scalars['String']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly filename: Scalars['String'];
  readonly filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['GatsbyImageData']>;
  readonly gatsbyImageData: Maybe<Scalars['GatsbyImageData']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly mimeType: Scalars['String'];
  readonly node_locale: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly placeholderUrl: Maybe<Scalars['String']>;
  readonly publicUrl: Scalars['String'];
  readonly resize: Maybe<RemoteFileResize>;
  readonly size: Maybe<Scalars['Int']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


export type ContentfulAssetCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulAssetGatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<ReadonlyArray<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  cropFocus: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<ReadonlyArray<InputMaybe<GatsbyImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<GatsbyImagePlaceholder>;
  quality: InputMaybe<Scalars['Int']>;
  resizingBehavior: InputMaybe<ImageResizingBehavior>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetResizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly contentType: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
  readonly size: Maybe<Scalars['Int']>;
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
  readonly height: Maybe<Scalars['Int']>;
  readonly width: Maybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulAssetGroupConnectionDistinctArgs = {
  field: ContentfulAssetFieldSelector;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly created: Maybe<Scalars['Date']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly gatsbyPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly slug: Maybe<Scalars['String']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulBlogPostSys>;
  readonly tags: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly title: Maybe<Scalars['String']>;
  readonly updated: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulBlogPostCreatedArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogPostGatsbyPathArgs = {
  filePath: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulBlogPostConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly group: ReadonlyArray<ContentfulBlogPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldSelector;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  field: ContentfulBlogPostFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly gatsbyPath: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly node_locale: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
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
  readonly gatsbyPath: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulBlogPostEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulBlogPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulBlogPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulBlogPostGroupConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldSelector;
};


export type ContentfulBlogPostGroupConnectionGroupArgs = {
  field: ContentfulBlogPostFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly gatsbyPath: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly node_locale: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly slug: Maybe<Scalars['String']>;
  readonly sortKey: Maybe<Scalars['Int']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulCategorySys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulCategoryCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulCategoryUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulCategoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulCategoryEdge>;
  readonly group: ReadonlyArray<ContentfulCategoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulCategory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulCategoryConnectionDistinctArgs = {
  field: ContentfulCategoryFieldSelector;
};


export type ContentfulCategoryConnectionGroupArgs = {
  field: ContentfulCategoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulCategoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulCategoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulCategory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulCategoryGroupConnectionDistinctArgs = {
  field: ContentfulCategoryFieldSelector;
};


export type ContentfulCategoryGroupConnectionGroupArgs = {
  field: ContentfulCategoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly href: Maybe<Scalars['String']>;
  readonly icon: Maybe<ContentfulIcon>;
  readonly iconSvgDark: Maybe<ContentfulAsset>;
  readonly iconSvgLight: Maybe<ContentfulAsset>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly sortKey: Maybe<Scalars['Int']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly subName: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContactSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulContactCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulContactUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulContactConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulContactEdge>;
  readonly group: ReadonlyArray<ContentfulContactGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulContact>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulContactConnectionDistinctArgs = {
  field: ContentfulContactFieldSelector;
};


export type ContentfulContactConnectionGroupArgs = {
  field: ContentfulContactFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulContactEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulContactGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulContact>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulContactGroupConnectionDistinctArgs = {
  field: ContentfulContactFieldSelector;
};


export type ContentfulContactGroupConnectionGroupArgs = {
  field: ContentfulContactFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly description: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulContentTypeGroupConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldSelector;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
};

export type ContentfulEntryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulEntryGroupConnectionDistinctArgs = {
  field: ContentfulEntryFieldSelector;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly href: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly sortKey: Maybe<Scalars['Int']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulHelloSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulHelloCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulHelloUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulHelloConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulHelloEdge>;
  readonly group: ReadonlyArray<ContentfulHelloGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulHello>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulHelloConnectionDistinctArgs = {
  field: ContentfulHelloFieldSelector;
};


export type ContentfulHelloConnectionGroupArgs = {
  field: ContentfulHelloFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulHelloEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulHelloGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulHello>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulHelloGroupConnectionDistinctArgs = {
  field: ContentfulHelloFieldSelector;
};


export type ContentfulHelloGroupConnectionGroupArgs = {
  field: ContentfulHelloFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly icon: Maybe<ContentfulIcon>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly subName: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulHistorySys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulHistoryCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulHistoryDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulHistoryUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulHistoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulHistoryEdge>;
  readonly group: ReadonlyArray<ContentfulHistoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulHistory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulHistoryConnectionDistinctArgs = {
  field: ContentfulHistoryFieldSelector;
};


export type ContentfulHistoryConnectionGroupArgs = {
  field: ContentfulHistoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulHistoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulHistoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulHistory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulHistoryGroupConnectionDistinctArgs = {
  field: ContentfulHistoryFieldSelector;
};


export type ContentfulHistoryGroupConnectionGroupArgs = {
  field: ContentfulHistoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly history: Maybe<ReadonlyArray<Maybe<ContentfulHistory>>>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly oss: Maybe<ReadonlyArray<Maybe<ContentfulOss>>>;
  readonly parent: Maybe<Node>;
  readonly project: Maybe<ReadonlyArray<Maybe<ContentfulProject>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly svg: Maybe<ContentfulIconSvgTextNode>;
  readonly sys: Maybe<ContentfulIconSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly what_i_can_do: Maybe<ReadonlyArray<Maybe<ContentfulWhatICanDo>>>;
};


export type ContentfulIconCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulIconUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulIconConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulIconEdge>;
  readonly group: ReadonlyArray<ContentfulIconGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulIcon>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulIconConnectionDistinctArgs = {
  field: ContentfulIconFieldSelector;
};


export type ContentfulIconConnectionGroupArgs = {
  field: ContentfulIconFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulIconEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulIconGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulIcon>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulIconGroupConnectionDistinctArgs = {
  field: ContentfulIconFieldSelector;
};


export type ContentfulIconGroupConnectionGroupArgs = {
  field: ContentfulIconFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly detail: Maybe<ContentfulOssDetailTextNode>;
  readonly href: Maybe<Scalars['String']>;
  readonly icon: Maybe<ContentfulIcon>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly startDate: Maybe<Scalars['Date']>;
  readonly subName: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulOssSys>;
  readonly tags: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulOssCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulOssStartDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulOssUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulOssConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulOssEdge>;
  readonly group: ReadonlyArray<ContentfulOssGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulOss>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulOssConnectionDistinctArgs = {
  field: ContentfulOssFieldSelector;
};


export type ContentfulOssConnectionGroupArgs = {
  field: ContentfulOssFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulOssEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulOssGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulOss>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulOssGroupConnectionDistinctArgs = {
  field: ContentfulOssFieldSelector;
};


export type ContentfulOssGroupConnectionGroupArgs = {
  field: ContentfulOssFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly detail: Maybe<ContentfulProjectDetailTextNode>;
  readonly endDate: Maybe<Scalars['Date']>;
  readonly icon: Maybe<ContentfulIcon>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly startDate: Maybe<Scalars['Date']>;
  readonly subName: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulProjectSys>;
  readonly tags: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulProjectCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulProjectEndDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulProjectStartDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulProjectUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulProjectConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulProjectEdge>;
  readonly group: ReadonlyArray<ContentfulProjectGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulProject>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulProjectConnectionDistinctArgs = {
  field: ContentfulProjectFieldSelector;
};


export type ContentfulProjectConnectionGroupArgs = {
  field: ContentfulProjectFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulProjectEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulProjectGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulProject>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulProjectGroupConnectionDistinctArgs = {
  field: ContentfulProjectFieldSelector;
};


export type ContentfulProjectGroupConnectionGroupArgs = {
  field: ContentfulProjectFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly endDate: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly qualification_map: Maybe<ReadonlyArray<Maybe<ContentfulQualificationMap>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulQualificationSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
};


export type ContentfulQualificationCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulQualificationDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulQualificationEndDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulQualificationUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulQualificationConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulQualificationEdge>;
  readonly group: ReadonlyArray<ContentfulQualificationGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulQualification>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulQualificationConnectionDistinctArgs = {
  field: ContentfulQualificationFieldSelector;
};


export type ContentfulQualificationConnectionGroupArgs = {
  field: ContentfulQualificationFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulQualificationEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulQualificationGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulQualification>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulQualificationGroupConnectionDistinctArgs = {
  field: ContentfulQualificationFieldSelector;
};


export type ContentfulQualificationGroupConnectionGroupArgs = {
  field: ContentfulQualificationFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly qualifications: Maybe<ReadonlyArray<Maybe<ContentfulQualification>>>;
  readonly sortKey: Maybe<Scalars['Int']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulQualificationMapSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulQualificationMapCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulQualificationMapUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulQualificationMapConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulQualificationMapEdge>;
  readonly group: ReadonlyArray<ContentfulQualificationMapGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulQualificationMap>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulQualificationMapConnectionDistinctArgs = {
  field: ContentfulQualificationMapFieldSelector;
};


export type ContentfulQualificationMapConnectionGroupArgs = {
  field: ContentfulQualificationMapFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulQualificationMapEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulQualificationMapGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulQualificationMap>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulQualificationMapGroupConnectionDistinctArgs = {
  field: ContentfulQualificationMapFieldSelector;
};


export type ContentfulQualificationMapGroupConnectionGroupArgs = {
  field: ContentfulQualificationMapFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

export type ContentfulSkillGrpup = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly skill_map: Maybe<ReadonlyArray<Maybe<ContentfulSkillMap>>>;
  readonly skills: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulSkillGrpupSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulSkillGrpupCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulSkillGrpupUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulSkillGrpupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulSkillGrpupEdge>;
  readonly group: ReadonlyArray<ContentfulSkillGrpupGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulSkillGrpup>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulSkillGrpupConnectionDistinctArgs = {
  field: ContentfulSkillGrpupFieldSelector;
};


export type ContentfulSkillGrpupConnectionGroupArgs = {
  field: ContentfulSkillGrpupFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulSkillGrpupEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulSkillGrpupGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulSkillGrpup>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulSkillGrpupGroupConnectionDistinctArgs = {
  field: ContentfulSkillGrpupFieldSelector;
};


export type ContentfulSkillGrpupGroupConnectionGroupArgs = {
  field: ContentfulSkillGrpupFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly skillGroups: Maybe<ReadonlyArray<Maybe<ContentfulSkillGrpup>>>;
  readonly skills: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly sortKey: Maybe<Scalars['Int']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulSkillMapSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulSkillMapCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulSkillMapUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulSkillMapConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulSkillMapEdge>;
  readonly group: ReadonlyArray<ContentfulSkillMapGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulSkillMap>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulSkillMapConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldSelector;
};


export type ContentfulSkillMapConnectionGroupArgs = {
  field: ContentfulSkillMapFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulSkillMapEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulSkillMapGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulSkillMap>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulSkillMapGroupConnectionDistinctArgs = {
  field: ContentfulSkillMapFieldSelector;
};


export type ContentfulSkillMapGroupConnectionGroupArgs = {
  field: ContentfulSkillMapFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly level: Maybe<Scalars['Int']>;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly oss: Maybe<ReadonlyArray<Maybe<ContentfulOss>>>;
  readonly parent: Maybe<Node>;
  readonly project: Maybe<ReadonlyArray<Maybe<ContentfulProject>>>;
  readonly skill_grpup: Maybe<ReadonlyArray<Maybe<ContentfulSkillGrpup>>>;
  readonly skill_map: Maybe<ReadonlyArray<Maybe<ContentfulSkillMap>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulTagSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulTagCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulTagUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulTagConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly group: ReadonlyArray<ContentfulTagGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulTagConnectionDistinctArgs = {
  field: ContentfulTagFieldSelector;
};


export type ContentfulTagConnectionGroupArgs = {
  field: ContentfulTagFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulTagGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulTagGroupConnectionDistinctArgs = {
  field: ContentfulTagFieldSelector;
};


export type ContentfulTagGroupConnectionGroupArgs = {
  field: ContentfulTagFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly icon: Maybe<ContentfulIcon>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly sortKey: Maybe<Scalars['Int']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly subName: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulWhatICanDoSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


export type ContentfulWhatICanDoCreatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type ContentfulWhatICanDoUpdatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type ContentfulWhatICanDoConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulWhatICanDoEdge>;
  readonly group: ReadonlyArray<ContentfulWhatICanDoGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulWhatICanDo>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulWhatICanDoConnectionDistinctArgs = {
  field: ContentfulWhatICanDoFieldSelector;
};


export type ContentfulWhatICanDoConnectionGroupArgs = {
  field: ContentfulWhatICanDoFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulWhatICanDoEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulWhatICanDoGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulWhatICanDo>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulWhatICanDoGroupConnectionDistinctArgs = {
  field: ContentfulWhatICanDoFieldSelector;
};


export type ContentfulWhatICanDoGroupConnectionGroupArgs = {
  field: ContentfulWhatICanDoFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
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
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly highlight: Scalars['String'];
  readonly opacity: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

export enum FieldSelectorEnum {
  Select = 0
}

export type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileConnectionGroupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly changeTime: InputMaybe<FieldSelectorEnum>;
  readonly childImageSharp: InputMaybe<ImageSharpFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFieldSelector>;
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

export type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
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

export type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly changeTime: InputMaybe<SortOrderEnum>;
  readonly childImageSharp: InputMaybe<ImageSharpSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpSortInput>;
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

export type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

export type GatsbyImageDataQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['GatsbyImageData']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
  readonly ne: InputMaybe<Scalars['GatsbyImageData']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GatsbyImageData']>>>;
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

export enum HeadingsMdx {
  H1 = 0,
  H2 = 1,
  H3 = 2,
  H4 = 3,
  H5 = 4,
  H6 = 5
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
  readonly gatsbyImageData: Scalars['GatsbyImageData'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AvifOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PngOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly base64: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
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
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Maybe<Scalars['String']>;
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
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
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
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
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly contentFilePath: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
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
  readonly progressive: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  readonly body: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Scalars['String'];
  readonly fileAbsolutePath: Scalars['String'];
  readonly frontmatter: Maybe<MdxFrontmatter>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MdxHeadingMdx>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly mdxAST: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly rawBody: Scalars['String'];
  readonly slug: Maybe<Scalars['String']>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MdxWordCount>;
};


export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth: InputMaybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth: InputMaybe<Scalars['Int']>;
};

export type MdxConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldSelector;
};


export type MdxConnectionGroupArgs = {
  field: MdxFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly fileAbsolutePath: InputMaybe<FieldSelectorEnum>;
  readonly frontmatter: InputMaybe<MdxFrontmatterFieldSelector>;
  readonly headings: InputMaybe<MdxHeadingMdxFieldSelector>;
  readonly html: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly mdxAST: InputMaybe<FieldSelectorEnum>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly rawBody: InputMaybe<FieldSelectorEnum>;
  readonly slug: InputMaybe<FieldSelectorEnum>;
  readonly tableOfContents: InputMaybe<FieldSelectorEnum>;
  readonly timeToRead: InputMaybe<FieldSelectorEnum>;
  readonly wordCount: InputMaybe<MdxWordCountFieldSelector>;
};

export type MdxFilterInput = {
  readonly body: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly frontmatter: InputMaybe<MdxFrontmatterFilterInput>;
  readonly headings: InputMaybe<MdxHeadingMdxFilterListInput>;
  readonly html: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mdxAST: InputMaybe<JsonQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly rawBody: InputMaybe<StringQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly tableOfContents: InputMaybe<JsonQueryOperatorInput>;
  readonly timeToRead: InputMaybe<IntQueryOperatorInput>;
  readonly wordCount: InputMaybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  readonly elemMatch: InputMaybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  readonly title: Scalars['String'];
};

export type MdxFrontmatterFieldSelector = {
  readonly title: InputMaybe<FieldSelectorEnum>;
};

export type MdxFrontmatterFilterInput = {
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

export type MdxFrontmatterSortInput = {
  readonly title: InputMaybe<SortOrderEnum>;
};

export type MdxGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MdxEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MdxGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Mdx>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldSelector;
};


export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

export type MdxHeadingMdx = {
  readonly depth: Maybe<Scalars['Int']>;
  readonly value: Maybe<Scalars['String']>;
};

export type MdxHeadingMdxFieldSelector = {
  readonly depth: InputMaybe<FieldSelectorEnum>;
  readonly value: InputMaybe<FieldSelectorEnum>;
};

export type MdxHeadingMdxFilterInput = {
  readonly depth: InputMaybe<IntQueryOperatorInput>;
  readonly value: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxHeadingMdxSortInput = {
  readonly depth: InputMaybe<SortOrderEnum>;
  readonly value: InputMaybe<SortOrderEnum>;
};

export type MdxSortInput = {
  readonly body: InputMaybe<SortOrderEnum>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly excerpt: InputMaybe<SortOrderEnum>;
  readonly fileAbsolutePath: InputMaybe<SortOrderEnum>;
  readonly frontmatter: InputMaybe<MdxFrontmatterSortInput>;
  readonly headings: InputMaybe<MdxHeadingMdxSortInput>;
  readonly html: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly mdxAST: InputMaybe<SortOrderEnum>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly rawBody: InputMaybe<SortOrderEnum>;
  readonly slug: InputMaybe<SortOrderEnum>;
  readonly tableOfContents: InputMaybe<SortOrderEnum>;
  readonly timeToRead: InputMaybe<SortOrderEnum>;
  readonly wordCount: InputMaybe<MdxWordCountSortInput>;
};

export type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

export type MdxWordCountFieldSelector = {
  readonly paragraphs: InputMaybe<FieldSelectorEnum>;
  readonly sentences: InputMaybe<FieldSelectorEnum>;
  readonly words: InputMaybe<FieldSelectorEnum>;
};

export type MdxWordCountFilterInput = {
  readonly paragraphs: InputMaybe<IntQueryOperatorInput>;
  readonly sentences: InputMaybe<IntQueryOperatorInput>;
  readonly words: InputMaybe<IntQueryOperatorInput>;
};

export type MdxWordCountSortInput = {
  readonly paragraphs: InputMaybe<SortOrderEnum>;
  readonly sentences: InputMaybe<SortOrderEnum>;
  readonly words: InputMaybe<SortOrderEnum>;
};

/** Node Interface */
export type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
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

export type PngOptions = {
  readonly compressionSpeed: InputMaybe<Scalars['Int']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

export type Potrace = {
  readonly alphaMax: InputMaybe<Scalars['Float']>;
  readonly background: InputMaybe<Scalars['String']>;
  readonly blackOnWhite: InputMaybe<Scalars['Boolean']>;
  readonly color: InputMaybe<Scalars['String']>;
  readonly optCurve: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance: InputMaybe<Scalars['Float']>;
  readonly threshold: InputMaybe<Scalars['Int']>;
  readonly turdSize: InputMaybe<Scalars['Float']>;
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
  readonly allImageSharp: ImageSharpConnection;
  readonly allMdx: MdxConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
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
  readonly imageSharp: Maybe<ImageSharp>;
  readonly mdx: Maybe<Mdx>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
};


export type QueryAllContentfulAssetArgs = {
  filter: InputMaybe<ContentfulAssetFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulAssetSortInput>>>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter: InputMaybe<ContentfulBlogPostFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulBlogPostSortInput>>>;
};


export type QueryAllContentfulBlogPostContentTextNodeArgs = {
  filter: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulBlogPostContentTextNodeSortInput>>>;
};


export type QueryAllContentfulCategoryArgs = {
  filter: InputMaybe<ContentfulCategoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulCategorySortInput>>>;
};


export type QueryAllContentfulContactArgs = {
  filter: InputMaybe<ContentfulContactFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulContactSortInput>>>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter: InputMaybe<ContentfulContentTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulContentTypeSortInput>>>;
};


export type QueryAllContentfulEntryArgs = {
  filter: InputMaybe<ContentfulEntryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulEntrySortInput>>>;
};


export type QueryAllContentfulHelloArgs = {
  filter: InputMaybe<ContentfulHelloFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulHelloSortInput>>>;
};


export type QueryAllContentfulHistoryArgs = {
  filter: InputMaybe<ContentfulHistoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulHistorySortInput>>>;
};


export type QueryAllContentfulIconArgs = {
  filter: InputMaybe<ContentfulIconFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulIconSortInput>>>;
};


export type QueryAllContentfulIconSvgTextNodeArgs = {
  filter: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulIconSvgTextNodeSortInput>>>;
};


export type QueryAllContentfulOssArgs = {
  filter: InputMaybe<ContentfulOssFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulOssSortInput>>>;
};


export type QueryAllContentfulOssDetailTextNodeArgs = {
  filter: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulOssDetailTextNodeSortInput>>>;
};


export type QueryAllContentfulProjectArgs = {
  filter: InputMaybe<ContentfulProjectFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulProjectSortInput>>>;
};


export type QueryAllContentfulProjectDetailTextNodeArgs = {
  filter: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulProjectDetailTextNodeSortInput>>>;
};


export type QueryAllContentfulQualificationArgs = {
  filter: InputMaybe<ContentfulQualificationFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulQualificationSortInput>>>;
};


export type QueryAllContentfulQualificationMapArgs = {
  filter: InputMaybe<ContentfulQualificationMapFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulQualificationMapSortInput>>>;
};


export type QueryAllContentfulSkillGrpupArgs = {
  filter: InputMaybe<ContentfulSkillGrpupFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulSkillGrpupSortInput>>>;
};


export type QueryAllContentfulSkillMapArgs = {
  filter: InputMaybe<ContentfulSkillMapFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulSkillMapSortInput>>>;
};


export type QueryAllContentfulTagArgs = {
  filter: InputMaybe<ContentfulTagFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulTagSortInput>>>;
};


export type QueryAllContentfulWhatICanDoArgs = {
  filter: InputMaybe<ContentfulWhatICanDoFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ContentfulWhatICanDoSortInput>>>;
};


export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<DirectorySortInput>>>;
};


export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<FileSortInput>>>;
};


export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpSortInput>>>;
};


export type QueryAllMdxArgs = {
  filter: InputMaybe<MdxFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<MdxSortInput>>>;
};


export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteSortInput>>>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataSortInput>>>;
};


export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionSortInput>>>;
};


export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePageSortInput>>>;
};


export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<SitePluginSortInput>>>;
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
  gatsbyPath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulBlogPostSysFilterInput>;
  tags: InputMaybe<ContentfulTagFilterListInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updated: InputMaybe<DateQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


export type QueryContentfulBlogPostContentTextNodeArgs = {
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
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
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
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
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
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
  childMdx: InputMaybe<MdxFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMdx: InputMaybe<MdxFilterListInput>;
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
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
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
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>;
  frontmatter: InputMaybe<MdxFrontmatterFilterInput>;
  headings: InputMaybe<MdxHeadingMdxFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mdxAST: InputMaybe<JsonQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  rawBody: InputMaybe<StringQueryOperatorInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  tableOfContents: InputMaybe<JsonQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MdxWordCountFilterInput>;
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
  readonly filename: Scalars['String'];
  readonly filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['GatsbyImageData']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly mimeType: Scalars['String'];
  readonly publicUrl: Scalars['String'];
  readonly resize: Maybe<RemoteFileResize>;
  readonly width: Maybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<ReadonlyArray<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
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
  readonly height: Maybe<Scalars['Int']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
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
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly graphqlTypegen: Maybe<Scalars['Boolean']>;
  readonly host: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxImportSource: Maybe<Scalars['String']>;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly port: Maybe<Scalars['Int']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


export type SiteBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
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
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  readonly cropFocus: InputMaybe<ImageCropFocus>;
  readonly duotone: InputMaybe<DuotoneGradient>;
  readonly fit: InputMaybe<ImageFit>;
  readonly grayscale: InputMaybe<Scalars['Boolean']>;
  readonly rotate: InputMaybe<Scalars['Int']>;
  readonly trim: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  readonly quality: InputMaybe<Scalars['Int']>;
};

export type ContentfulBlogPostContentTextNode = Node & {
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  readonly content: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<ContentfulBlogPostContentTextNodeSys>;
};

export type ContentfulBlogPostContentTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulBlogPostContentTextNodeEdge>;
  readonly group: ReadonlyArray<ContentfulBlogPostContentTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulBlogPostContentTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulBlogPostContentTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
};


export type ContentfulBlogPostContentTextNodeConnectionGroupArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly childMdx: InputMaybe<MdxFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenMdx: InputMaybe<MdxFieldSelector>;
  readonly content: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<ContentfulBlogPostContentTextNodeSysFieldSelector>;
};

export type ContentfulBlogPostContentTextNodeFilterInput = {
  readonly childMdx: InputMaybe<MdxFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenMdx: InputMaybe<MdxFilterListInput>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulBlogPostContentTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulBlogPostContentTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulBlogPostContentTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulBlogPostContentTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionGroupArgs = {
  field: ContentfulBlogPostContentTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly childMdx: InputMaybe<MdxSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenMdx: InputMaybe<MdxSortInput>;
  readonly content: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<ContentfulBlogPostContentTextNodeSysSortInput>;
};

export type ContentfulBlogPostContentTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
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
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly svg: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulIconSvgTextNodeSys>;
};

export type ContentfulIconSvgTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulIconSvgTextNodeEdge>;
  readonly group: ReadonlyArray<ContentfulIconSvgTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulIconSvgTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulIconSvgTextNodeConnectionDistinctArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
};


export type ContentfulIconSvgTextNodeConnectionGroupArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly childMdx: InputMaybe<MdxFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenMdx: InputMaybe<MdxFieldSelector>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly svg: InputMaybe<FieldSelectorEnum>;
  readonly sys: InputMaybe<ContentfulIconSvgTextNodeSysFieldSelector>;
};

export type ContentfulIconSvgTextNodeFilterInput = {
  readonly childMdx: InputMaybe<MdxFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenMdx: InputMaybe<MdxFilterListInput>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulIconSvgTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulIconSvgTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulIconSvgTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulIconSvgTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
};


export type ContentfulIconSvgTextNodeGroupConnectionGroupArgs = {
  field: ContentfulIconSvgTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly childMdx: InputMaybe<MdxSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenMdx: InputMaybe<MdxSortInput>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly svg: InputMaybe<SortOrderEnum>;
  readonly sys: InputMaybe<ContentfulIconSvgTextNodeSysSortInput>;
};

export type ContentfulIconSvgTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
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
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  readonly detail: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<ContentfulOssDetailTextNodeSys>;
};

export type ContentfulOssDetailTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulOssDetailTextNodeEdge>;
  readonly group: ReadonlyArray<ContentfulOssDetailTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulOssDetailTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulOssDetailTextNodeConnectionDistinctArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
};


export type ContentfulOssDetailTextNodeConnectionGroupArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly childMdx: InputMaybe<MdxFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenMdx: InputMaybe<MdxFieldSelector>;
  readonly detail: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<ContentfulOssDetailTextNodeSysFieldSelector>;
};

export type ContentfulOssDetailTextNodeFilterInput = {
  readonly childMdx: InputMaybe<MdxFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenMdx: InputMaybe<MdxFilterListInput>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulOssDetailTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulOssDetailTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulOssDetailTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulOssDetailTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
};


export type ContentfulOssDetailTextNodeGroupConnectionGroupArgs = {
  field: ContentfulOssDetailTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly childMdx: InputMaybe<MdxSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenMdx: InputMaybe<MdxSortInput>;
  readonly detail: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<ContentfulOssDetailTextNodeSysSortInput>;
};

export type ContentfulOssDetailTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
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
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  readonly childMdx: Maybe<Mdx>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type Mdx */
  readonly childrenMdx: Maybe<ReadonlyArray<Maybe<Mdx>>>;
  readonly detail: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<ContentfulProjectDetailTextNodeSys>;
};

export type ContentfulProjectDetailTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulProjectDetailTextNodeEdge>;
  readonly group: ReadonlyArray<ContentfulProjectDetailTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulProjectDetailTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulProjectDetailTextNodeConnectionDistinctArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
};


export type ContentfulProjectDetailTextNodeConnectionGroupArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly childMdx: InputMaybe<MdxFieldSelector>;
  readonly children: InputMaybe<NodeFieldSelector>;
  readonly childrenMdx: InputMaybe<MdxFieldSelector>;
  readonly detail: InputMaybe<FieldSelectorEnum>;
  readonly id: InputMaybe<FieldSelectorEnum>;
  readonly internal: InputMaybe<InternalFieldSelector>;
  readonly parent: InputMaybe<NodeFieldSelector>;
  readonly sys: InputMaybe<ContentfulProjectDetailTextNodeSysFieldSelector>;
};

export type ContentfulProjectDetailTextNodeFilterInput = {
  readonly childMdx: InputMaybe<MdxFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenMdx: InputMaybe<MdxFilterListInput>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulProjectDetailTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulProjectDetailTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulProjectDetailTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type ContentfulProjectDetailTextNodeGroupConnectionDistinctArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
};


export type ContentfulProjectDetailTextNodeGroupConnectionGroupArgs = {
  field: ContentfulProjectDetailTextNodeFieldSelector;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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
  readonly childMdx: InputMaybe<MdxSortInput>;
  readonly children: InputMaybe<NodeSortInput>;
  readonly childrenMdx: InputMaybe<MdxSortInput>;
  readonly detail: InputMaybe<SortOrderEnum>;
  readonly id: InputMaybe<SortOrderEnum>;
  readonly internal: InputMaybe<InternalSortInput>;
  readonly parent: InputMaybe<NodeSortInput>;
  readonly sys: InputMaybe<ContentfulProjectDetailTextNodeSysSortInput>;
};

export type ContentfulProjectDetailTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
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

export type OnCreatePagesStatefullyQueryVariables = Exact<{ [key: string]: never; }>;


export type OnCreatePagesStatefullyQuery = { readonly allContentfulBlogPost: { readonly nodes: ReadonlyArray<Pick<ContentfulBlogPost, 'title' | 'slug' | 'excerpt'>> } };

export type BlogPostDetailFragment = { readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body'>> }> };

export type BlogPostCardFragment = Pick<ContentfulBlogPost, 'title' | 'slug' | 'created'>;

export type BlogPostListFragment = Pick<ContentfulBlogPost, 'id' | 'title' | 'slug' | 'created'>;

export type BlogPostTableOfContentFragment = { readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'tableOfContents'>> }> };

export type PortfolioCertificationCardFragment = (
  Pick<ContentfulQualificationMap, 'id' | 'name'>
  & { readonly qualifications: Maybe<ReadonlyArray<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date' | 'endDate' | 'url'>>>> }
);

export type PortfolioCertificationDetailFragment = Pick<ContentfulQualification, 'name' | 'date' | 'endDate' | 'url'>;

export type PortfolioCertificationListFragment = (
  Pick<ContentfulQualificationMap, 'id' | 'name'>
  & { readonly qualifications: Maybe<ReadonlyArray<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date' | 'endDate' | 'url'>>>> }
);

export type PortfolioHelloContentFragment = Pick<ContentfulHello, 'id' | 'href' | 'name'>;

export type SocialLinksFragment = Pick<ContentfulHello, 'id' | 'href' | 'name'>;

export type PortfolioHistoryCardFragment = (
  Pick<ContentfulHistory, 'id' | 'date' | 'name' | 'subName'>
  & { readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )> }
);

export type PortfolioHistoryListFragment = (
  Pick<ContentfulHistory, 'id' | 'date' | 'name' | 'subName'>
  & { readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )> }
);

export type PortfolioOssCardFragment = (
  Pick<ContentfulOss, 'name' | 'startDate' | 'href'>
  & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )> }
);

export type PortfolioOssListFragment = (
  Pick<ContentfulOss, 'id' | 'name' | 'startDate' | 'href'>
  & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )> }
);

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

export type PortfolioSkillCardFragment = (
  Pick<ContentfulSkillMap, 'id' | 'name'>
  & { readonly skillGroups: Maybe<ReadonlyArray<Maybe<(
    Pick<ContentfulSkillGrpup, 'id' | 'name'>
    & { readonly skills: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'id' | 'level' | 'name'>>>> }
  )>>> }
);

export type PortfolioSkillGroupDetailFragment = (
  Pick<ContentfulSkillGrpup, 'name'>
  & { readonly skills: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'id' | 'level' | 'name'>>>> }
);

export type PortfolioSkillListFragment = (
  Pick<ContentfulSkillMap, 'id' | 'name'>
  & { readonly skillGroups: Maybe<ReadonlyArray<Maybe<(
    Pick<ContentfulSkillGrpup, 'id' | 'name'>
    & { readonly skills: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'id' | 'level' | 'name'>>>> }
  )>>> }
);

export type PortfolioWhatICanDoCardFragment = (
  Pick<ContentfulWhatICanDo, 'name' | 'subName'>
  & { readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )> }
);

export type PortfolioWhatICanDoListFragment = (
  Pick<ContentfulWhatICanDo, 'id' | 'name' | 'subName'>
  & { readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )> }
);

export type RelatedBlogPostCardFragment = Pick<ContentfulBlogPost, 'title' | 'slug'>;

export type RelatedBlogPostListFragment = Pick<ContentfulBlogPost, 'id' | 'title' | 'slug'>;

export type BuildTimeDataQueryVariables = Exact<{ [key: string]: never; }>;


export type BuildTimeDataQuery = { readonly site: Maybe<Pick<Site, 'buildTime'>> };

export type BlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogPageQuery = { readonly blogPostList: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulBlogPost, 'title' | 'created' | 'id' | 'slug'>
      & { readonly category: Maybe<Pick<ContentfulCategory, 'id'>> }
    )> }, readonly categoryList: { readonly nodes: ReadonlyArray<Pick<ContentfulCategory, 'id' | 'slug' | 'name'>> } };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { readonly links: { readonly nodes: ReadonlyArray<Pick<ContentfulHello, 'id' | 'href' | 'name'>> }, readonly whatICanDos: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulWhatICanDo, 'id' | 'name' | 'subName'>
      & { readonly icon: Maybe<(
        Pick<ContentfulIcon, 'name'>
        & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
      )> }
    )> }, readonly projects: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulProject, 'id' | 'name' | 'startDate'>
      & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
        Pick<ContentfulIcon, 'name'>
        & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
      )> }
    )> }, readonly histories: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulHistory, 'id' | 'date' | 'name' | 'subName'>
      & { readonly icon: Maybe<(
        Pick<ContentfulIcon, 'name'>
        & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
      )> }
    )> }, readonly osses: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulOss, 'id' | 'name' | 'startDate' | 'href'>
      & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
        Pick<ContentfulIcon, 'name'>
        & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
      )> }
    )> }, readonly skills: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulSkillMap, 'id' | 'name'>
      & { readonly skillGroups: Maybe<ReadonlyArray<Maybe<(
        Pick<ContentfulSkillGrpup, 'id' | 'name'>
        & { readonly skills: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'id' | 'level' | 'name'>>>> }
      )>>> }
    )> }, readonly certification: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulQualificationMap, 'id' | 'name'>
      & { readonly qualifications: Maybe<ReadonlyArray<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date' | 'endDate' | 'url'>>>> }
    )> } };

export type BlogPostPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type BlogPostPageQuery = { readonly post: Maybe<(
    Pick<ContentfulBlogPost, 'slug' | 'title' | 'excerpt' | 'created' | 'updated'>
    & { createdDateTime: ContentfulBlogPost['created'] }
    & { readonly category: Maybe<Pick<ContentfulCategory, 'name'>>, readonly tags: Maybe<ReadonlyArray<Maybe<(
      Pick<ContentfulTag, 'name'>
      & { readonly blog_post: Maybe<ReadonlyArray<Maybe<(
        Pick<ContentfulBlogPost, 'id' | 'title' | 'slug'>
        & { createdDateTime: ContentfulBlogPost['created'] }
      )>>> }
    )>>>, readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body' | 'tableOfContents'>> }> }
  )>, readonly links: { readonly nodes: ReadonlyArray<Pick<ContentfulHello, 'id' | 'href' | 'name'>> } };
