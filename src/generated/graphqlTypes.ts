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
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Description = 44,
  FileContentType = 45,
  FileDetailsImageHeight = 46,
  FileDetailsImageWidth = 47,
  FileDetailsSize = 48,
  FileFileName = 49,
  FileUrl = 50,
  Filename = 51,
  Filesize = 52,
  GatsbyImage = 53,
  GatsbyImageData = 54,
  Height = 55,
  Id = 56,
  InternalContent = 57,
  InternalContentDigest = 58,
  InternalContentFilePath = 59,
  InternalDescription = 60,
  InternalFieldOwners = 61,
  InternalIgnoreType = 62,
  InternalMediaType = 63,
  InternalOwner = 64,
  InternalType = 65,
  MimeType = 66,
  NodeLocale = 67,
  ParentChildren = 68,
  ParentChildrenChildren = 69,
  ParentChildrenChildrenChildren = 70,
  ParentChildrenChildrenId = 71,
  ParentChildrenId = 72,
  ParentChildrenInternalContent = 73,
  ParentChildrenInternalContentDigest = 74,
  ParentChildrenInternalContentFilePath = 75,
  ParentChildrenInternalDescription = 76,
  ParentChildrenInternalFieldOwners = 77,
  ParentChildrenInternalIgnoreType = 78,
  ParentChildrenInternalMediaType = 79,
  ParentChildrenInternalOwner = 80,
  ParentChildrenInternalType = 81,
  ParentChildrenParentChildren = 82,
  ParentChildrenParentId = 83,
  ParentId = 84,
  ParentInternalContent = 85,
  ParentInternalContentDigest = 86,
  ParentInternalContentFilePath = 87,
  ParentInternalDescription = 88,
  ParentInternalFieldOwners = 89,
  ParentInternalIgnoreType = 90,
  ParentInternalMediaType = 91,
  ParentInternalOwner = 92,
  ParentInternalType = 93,
  ParentParentChildren = 94,
  ParentParentChildrenChildren = 95,
  ParentParentChildrenId = 96,
  ParentParentId = 97,
  ParentParentInternalContent = 98,
  ParentParentInternalContentDigest = 99,
  ParentParentInternalContentFilePath = 100,
  ParentParentInternalDescription = 101,
  ParentParentInternalFieldOwners = 102,
  ParentParentInternalIgnoreType = 103,
  ParentParentInternalMediaType = 104,
  ParentParentInternalOwner = 105,
  ParentParentInternalType = 106,
  ParentParentParentChildren = 107,
  ParentParentParentId = 108,
  PlaceholderUrl = 109,
  PublicUrl = 110,
  ResizeHeight = 111,
  ResizeSrc = 112,
  ResizeWidth = 113,
  Size = 114,
  SpaceId = 115,
  SysRevision = 116,
  SysType = 117,
  Title = 118,
  UpdatedAt = 119,
  Url = 120,
  Width = 121
}

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

export type ContentfulAssetFileDetailsFilterInput = {
  readonly image: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsImage = {
  readonly height: Maybe<Scalars['Int']>;
  readonly width: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  readonly contentType: InputMaybe<StringQueryOperatorInput>;
  readonly details: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionGroupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulAssetGroupConnectionMaxArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionMinArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetGroupConnectionSumArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulAssetFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulAssetSysFilterInput = {
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  readonly thumbnail: Maybe<ContentfulAsset>;
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
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  field: ContentfulBlogPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogPostConnectionMaxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionMinArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionSumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostEdge = {
  readonly next: Maybe<ContentfulBlogPost>;
  readonly node: ContentfulBlogPost;
  readonly previous: Maybe<ContentfulBlogPost>;
};

export enum ContentfulBlogPostFieldsEnum {
  CategoryChildren = 0,
  CategoryChildrenChildren = 1,
  CategoryChildrenChildrenChildren = 2,
  CategoryChildrenChildrenId = 3,
  CategoryChildrenId = 4,
  CategoryChildrenInternalContent = 5,
  CategoryChildrenInternalContentDigest = 6,
  CategoryChildrenInternalContentFilePath = 7,
  CategoryChildrenInternalDescription = 8,
  CategoryChildrenInternalFieldOwners = 9,
  CategoryChildrenInternalIgnoreType = 10,
  CategoryChildrenInternalMediaType = 11,
  CategoryChildrenInternalOwner = 12,
  CategoryChildrenInternalType = 13,
  CategoryChildrenParentChildren = 14,
  CategoryChildrenParentId = 15,
  CategoryContentfulId = 16,
  CategoryCreatedAt = 17,
  CategoryId = 18,
  CategoryInternalContent = 19,
  CategoryInternalContentDigest = 20,
  CategoryInternalContentFilePath = 21,
  CategoryInternalDescription = 22,
  CategoryInternalFieldOwners = 23,
  CategoryInternalIgnoreType = 24,
  CategoryInternalMediaType = 25,
  CategoryInternalOwner = 26,
  CategoryInternalType = 27,
  CategoryName = 28,
  CategoryNodeLocale = 29,
  CategoryParentChildren = 30,
  CategoryParentChildrenChildren = 31,
  CategoryParentChildrenId = 32,
  CategoryParentId = 33,
  CategoryParentInternalContent = 34,
  CategoryParentInternalContentDigest = 35,
  CategoryParentInternalContentFilePath = 36,
  CategoryParentInternalDescription = 37,
  CategoryParentInternalFieldOwners = 38,
  CategoryParentInternalIgnoreType = 39,
  CategoryParentInternalMediaType = 40,
  CategoryParentInternalOwner = 41,
  CategoryParentInternalType = 42,
  CategoryParentParentChildren = 43,
  CategoryParentParentId = 44,
  CategorySlug = 45,
  CategorySortKey = 46,
  CategorySpaceId = 47,
  CategorySysRevision = 48,
  CategorySysType = 49,
  CategoryUpdatedAt = 50,
  ChildContentfulBlogPostContentTextNodeChildMdxBody = 51,
  ChildContentfulBlogPostContentTextNodeChildMdxChildren = 52,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 53,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenId = 54,
  ChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 55,
  ChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 56,
  ChildContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 57,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadings = 58,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 59,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 60,
  ChildContentfulBlogPostContentTextNodeChildMdxHtml = 61,
  ChildContentfulBlogPostContentTextNodeChildMdxId = 62,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContent = 63,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 64,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentFilePath = 65,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalDescription = 66,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 67,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 68,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 69,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalOwner = 70,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalType = 71,
  ChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 72,
  ChildContentfulBlogPostContentTextNodeChildMdxParentChildren = 73,
  ChildContentfulBlogPostContentTextNodeChildMdxParentId = 74,
  ChildContentfulBlogPostContentTextNodeChildMdxRawBody = 75,
  ChildContentfulBlogPostContentTextNodeChildMdxSlug = 76,
  ChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 77,
  ChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 78,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 79,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 80,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountWords = 81,
  ChildContentfulBlogPostContentTextNodeChildren = 82,
  ChildContentfulBlogPostContentTextNodeChildrenMdx = 83,
  ChildContentfulBlogPostContentTextNodeChildrenMdxBody = 84,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 85,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 86,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 87,
  ChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 88,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 89,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 90,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 91,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 92,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 93,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 94,
  ChildContentfulBlogPostContentTextNodeChildrenMdxId = 95,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 96,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 97,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentFilePath = 98,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 99,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 100,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 101,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 102,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 103,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalType = 104,
  ChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 105,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 106,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentId = 107,
  ChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 108,
  ChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 109,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 110,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 111,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 112,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 113,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 114,
  ChildContentfulBlogPostContentTextNodeChildrenChildren = 115,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenChildren = 116,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenId = 117,
  ChildContentfulBlogPostContentTextNodeChildrenId = 118,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContent = 119,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 120,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentFilePath = 121,
  ChildContentfulBlogPostContentTextNodeChildrenInternalDescription = 122,
  ChildContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 123,
  ChildContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 124,
  ChildContentfulBlogPostContentTextNodeChildrenInternalMediaType = 125,
  ChildContentfulBlogPostContentTextNodeChildrenInternalOwner = 126,
  ChildContentfulBlogPostContentTextNodeChildrenInternalType = 127,
  ChildContentfulBlogPostContentTextNodeChildrenParentChildren = 128,
  ChildContentfulBlogPostContentTextNodeChildrenParentId = 129,
  ChildContentfulBlogPostContentTextNodeContent = 130,
  ChildContentfulBlogPostContentTextNodeId = 131,
  ChildContentfulBlogPostContentTextNodeInternalContent = 132,
  ChildContentfulBlogPostContentTextNodeInternalContentDigest = 133,
  ChildContentfulBlogPostContentTextNodeInternalContentFilePath = 134,
  ChildContentfulBlogPostContentTextNodeInternalDescription = 135,
  ChildContentfulBlogPostContentTextNodeInternalFieldOwners = 136,
  ChildContentfulBlogPostContentTextNodeInternalIgnoreType = 137,
  ChildContentfulBlogPostContentTextNodeInternalMediaType = 138,
  ChildContentfulBlogPostContentTextNodeInternalOwner = 139,
  ChildContentfulBlogPostContentTextNodeInternalType = 140,
  ChildContentfulBlogPostContentTextNodeParentChildren = 141,
  ChildContentfulBlogPostContentTextNodeParentChildrenChildren = 142,
  ChildContentfulBlogPostContentTextNodeParentChildrenId = 143,
  ChildContentfulBlogPostContentTextNodeParentId = 144,
  ChildContentfulBlogPostContentTextNodeParentInternalContent = 145,
  ChildContentfulBlogPostContentTextNodeParentInternalContentDigest = 146,
  ChildContentfulBlogPostContentTextNodeParentInternalContentFilePath = 147,
  ChildContentfulBlogPostContentTextNodeParentInternalDescription = 148,
  ChildContentfulBlogPostContentTextNodeParentInternalFieldOwners = 149,
  ChildContentfulBlogPostContentTextNodeParentInternalIgnoreType = 150,
  ChildContentfulBlogPostContentTextNodeParentInternalMediaType = 151,
  ChildContentfulBlogPostContentTextNodeParentInternalOwner = 152,
  ChildContentfulBlogPostContentTextNodeParentInternalType = 153,
  ChildContentfulBlogPostContentTextNodeParentParentChildren = 154,
  ChildContentfulBlogPostContentTextNodeParentParentId = 155,
  ChildContentfulBlogPostContentTextNodeSysType = 156,
  Children = 157,
  ChildrenContentfulBlogPostContentTextNode = 158,
  ChildrenContentfulBlogPostContentTextNodeChildMdxBody = 159,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 160,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 161,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenId = 162,
  ChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 163,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 164,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 165,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 166,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 167,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 168,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 169,
  ChildrenContentfulBlogPostContentTextNodeChildMdxId = 170,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContent = 171,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 172,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentFilePath = 173,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalDescription = 174,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 175,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 176,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 177,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalOwner = 178,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalType = 179,
  ChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 180,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentChildren = 181,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentId = 182,
  ChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 183,
  ChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 184,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 185,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 186,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 187,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 188,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountWords = 189,
  ChildrenContentfulBlogPostContentTextNodeChildren = 190,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdx = 191,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 192,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 193,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 194,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 195,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 196,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 197,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 198,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 199,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 200,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 201,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 202,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 203,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 204,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 205,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentFilePath = 206,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 207,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 208,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 209,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 210,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 211,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalType = 212,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 213,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 214,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentId = 215,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 216,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 217,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 218,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 219,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 220,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 221,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 222,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildren = 223,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenChildren = 224,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenId = 225,
  ChildrenContentfulBlogPostContentTextNodeChildrenId = 226,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContent = 227,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 228,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentFilePath = 229,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalDescription = 230,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 231,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 232,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalMediaType = 233,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalOwner = 234,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalType = 235,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentChildren = 236,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentId = 237,
  ChildrenContentfulBlogPostContentTextNodeContent = 238,
  ChildrenContentfulBlogPostContentTextNodeId = 239,
  ChildrenContentfulBlogPostContentTextNodeInternalContent = 240,
  ChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 241,
  ChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 242,
  ChildrenContentfulBlogPostContentTextNodeInternalDescription = 243,
  ChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 244,
  ChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 245,
  ChildrenContentfulBlogPostContentTextNodeInternalMediaType = 246,
  ChildrenContentfulBlogPostContentTextNodeInternalOwner = 247,
  ChildrenContentfulBlogPostContentTextNodeInternalType = 248,
  ChildrenContentfulBlogPostContentTextNodeParentChildren = 249,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenChildren = 250,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenId = 251,
  ChildrenContentfulBlogPostContentTextNodeParentId = 252,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContent = 253,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentDigest = 254,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentFilePath = 255,
  ChildrenContentfulBlogPostContentTextNodeParentInternalDescription = 256,
  ChildrenContentfulBlogPostContentTextNodeParentInternalFieldOwners = 257,
  ChildrenContentfulBlogPostContentTextNodeParentInternalIgnoreType = 258,
  ChildrenContentfulBlogPostContentTextNodeParentInternalMediaType = 259,
  ChildrenContentfulBlogPostContentTextNodeParentInternalOwner = 260,
  ChildrenContentfulBlogPostContentTextNodeParentInternalType = 261,
  ChildrenContentfulBlogPostContentTextNodeParentParentChildren = 262,
  ChildrenContentfulBlogPostContentTextNodeParentParentId = 263,
  ChildrenContentfulBlogPostContentTextNodeSysType = 264,
  ChildrenChildren = 265,
  ChildrenChildrenChildren = 266,
  ChildrenChildrenChildrenChildren = 267,
  ChildrenChildrenChildrenId = 268,
  ChildrenChildrenId = 269,
  ChildrenChildrenInternalContent = 270,
  ChildrenChildrenInternalContentDigest = 271,
  ChildrenChildrenInternalContentFilePath = 272,
  ChildrenChildrenInternalDescription = 273,
  ChildrenChildrenInternalFieldOwners = 274,
  ChildrenChildrenInternalIgnoreType = 275,
  ChildrenChildrenInternalMediaType = 276,
  ChildrenChildrenInternalOwner = 277,
  ChildrenChildrenInternalType = 278,
  ChildrenChildrenParentChildren = 279,
  ChildrenChildrenParentId = 280,
  ChildrenId = 281,
  ChildrenInternalContent = 282,
  ChildrenInternalContentDigest = 283,
  ChildrenInternalContentFilePath = 284,
  ChildrenInternalDescription = 285,
  ChildrenInternalFieldOwners = 286,
  ChildrenInternalIgnoreType = 287,
  ChildrenInternalMediaType = 288,
  ChildrenInternalOwner = 289,
  ChildrenInternalType = 290,
  ChildrenParentChildren = 291,
  ChildrenParentChildrenChildren = 292,
  ChildrenParentChildrenId = 293,
  ChildrenParentId = 294,
  ChildrenParentInternalContent = 295,
  ChildrenParentInternalContentDigest = 296,
  ChildrenParentInternalContentFilePath = 297,
  ChildrenParentInternalDescription = 298,
  ChildrenParentInternalFieldOwners = 299,
  ChildrenParentInternalIgnoreType = 300,
  ChildrenParentInternalMediaType = 301,
  ChildrenParentInternalOwner = 302,
  ChildrenParentInternalType = 303,
  ChildrenParentParentChildren = 304,
  ChildrenParentParentId = 305,
  ContentChildMdxBody = 306,
  ContentChildMdxChildren = 307,
  ContentChildMdxChildrenChildren = 308,
  ContentChildMdxChildrenId = 309,
  ContentChildMdxExcerpt = 310,
  ContentChildMdxFileAbsolutePath = 311,
  ContentChildMdxFrontmatterTitle = 312,
  ContentChildMdxHeadings = 313,
  ContentChildMdxHeadingsDepth = 314,
  ContentChildMdxHeadingsValue = 315,
  ContentChildMdxHtml = 316,
  ContentChildMdxId = 317,
  ContentChildMdxInternalContent = 318,
  ContentChildMdxInternalContentDigest = 319,
  ContentChildMdxInternalContentFilePath = 320,
  ContentChildMdxInternalDescription = 321,
  ContentChildMdxInternalFieldOwners = 322,
  ContentChildMdxInternalIgnoreType = 323,
  ContentChildMdxInternalMediaType = 324,
  ContentChildMdxInternalOwner = 325,
  ContentChildMdxInternalType = 326,
  ContentChildMdxMdxAst = 327,
  ContentChildMdxParentChildren = 328,
  ContentChildMdxParentId = 329,
  ContentChildMdxRawBody = 330,
  ContentChildMdxSlug = 331,
  ContentChildMdxTableOfContents = 332,
  ContentChildMdxTimeToRead = 333,
  ContentChildMdxWordCountParagraphs = 334,
  ContentChildMdxWordCountSentences = 335,
  ContentChildMdxWordCountWords = 336,
  ContentChildren = 337,
  ContentChildrenMdx = 338,
  ContentChildrenMdxBody = 339,
  ContentChildrenMdxChildren = 340,
  ContentChildrenMdxChildrenChildren = 341,
  ContentChildrenMdxChildrenId = 342,
  ContentChildrenMdxExcerpt = 343,
  ContentChildrenMdxFileAbsolutePath = 344,
  ContentChildrenMdxFrontmatterTitle = 345,
  ContentChildrenMdxHeadings = 346,
  ContentChildrenMdxHeadingsDepth = 347,
  ContentChildrenMdxHeadingsValue = 348,
  ContentChildrenMdxHtml = 349,
  ContentChildrenMdxId = 350,
  ContentChildrenMdxInternalContent = 351,
  ContentChildrenMdxInternalContentDigest = 352,
  ContentChildrenMdxInternalContentFilePath = 353,
  ContentChildrenMdxInternalDescription = 354,
  ContentChildrenMdxInternalFieldOwners = 355,
  ContentChildrenMdxInternalIgnoreType = 356,
  ContentChildrenMdxInternalMediaType = 357,
  ContentChildrenMdxInternalOwner = 358,
  ContentChildrenMdxInternalType = 359,
  ContentChildrenMdxMdxAst = 360,
  ContentChildrenMdxParentChildren = 361,
  ContentChildrenMdxParentId = 362,
  ContentChildrenMdxRawBody = 363,
  ContentChildrenMdxSlug = 364,
  ContentChildrenMdxTableOfContents = 365,
  ContentChildrenMdxTimeToRead = 366,
  ContentChildrenMdxWordCountParagraphs = 367,
  ContentChildrenMdxWordCountSentences = 368,
  ContentChildrenMdxWordCountWords = 369,
  ContentChildrenChildren = 370,
  ContentChildrenChildrenChildren = 371,
  ContentChildrenChildrenId = 372,
  ContentChildrenId = 373,
  ContentChildrenInternalContent = 374,
  ContentChildrenInternalContentDigest = 375,
  ContentChildrenInternalContentFilePath = 376,
  ContentChildrenInternalDescription = 377,
  ContentChildrenInternalFieldOwners = 378,
  ContentChildrenInternalIgnoreType = 379,
  ContentChildrenInternalMediaType = 380,
  ContentChildrenInternalOwner = 381,
  ContentChildrenInternalType = 382,
  ContentChildrenParentChildren = 383,
  ContentChildrenParentId = 384,
  ContentContent = 385,
  ContentId = 386,
  ContentInternalContent = 387,
  ContentInternalContentDigest = 388,
  ContentInternalContentFilePath = 389,
  ContentInternalDescription = 390,
  ContentInternalFieldOwners = 391,
  ContentInternalIgnoreType = 392,
  ContentInternalMediaType = 393,
  ContentInternalOwner = 394,
  ContentInternalType = 395,
  ContentParentChildren = 396,
  ContentParentChildrenChildren = 397,
  ContentParentChildrenId = 398,
  ContentParentId = 399,
  ContentParentInternalContent = 400,
  ContentParentInternalContentDigest = 401,
  ContentParentInternalContentFilePath = 402,
  ContentParentInternalDescription = 403,
  ContentParentInternalFieldOwners = 404,
  ContentParentInternalIgnoreType = 405,
  ContentParentInternalMediaType = 406,
  ContentParentInternalOwner = 407,
  ContentParentInternalType = 408,
  ContentParentParentChildren = 409,
  ContentParentParentId = 410,
  ContentSysType = 411,
  ContentfulId = 412,
  Created = 413,
  CreatedAt = 414,
  Excerpt = 415,
  GatsbyPath = 416,
  Id = 417,
  InternalContent = 418,
  InternalContentDigest = 419,
  InternalContentFilePath = 420,
  InternalDescription = 421,
  InternalFieldOwners = 422,
  InternalIgnoreType = 423,
  InternalMediaType = 424,
  InternalOwner = 425,
  InternalType = 426,
  NodeLocale = 427,
  ParentChildren = 428,
  ParentChildrenChildren = 429,
  ParentChildrenChildrenChildren = 430,
  ParentChildrenChildrenId = 431,
  ParentChildrenId = 432,
  ParentChildrenInternalContent = 433,
  ParentChildrenInternalContentDigest = 434,
  ParentChildrenInternalContentFilePath = 435,
  ParentChildrenInternalDescription = 436,
  ParentChildrenInternalFieldOwners = 437,
  ParentChildrenInternalIgnoreType = 438,
  ParentChildrenInternalMediaType = 439,
  ParentChildrenInternalOwner = 440,
  ParentChildrenInternalType = 441,
  ParentChildrenParentChildren = 442,
  ParentChildrenParentId = 443,
  ParentId = 444,
  ParentInternalContent = 445,
  ParentInternalContentDigest = 446,
  ParentInternalContentFilePath = 447,
  ParentInternalDescription = 448,
  ParentInternalFieldOwners = 449,
  ParentInternalIgnoreType = 450,
  ParentInternalMediaType = 451,
  ParentInternalOwner = 452,
  ParentInternalType = 453,
  ParentParentChildren = 454,
  ParentParentChildrenChildren = 455,
  ParentParentChildrenId = 456,
  ParentParentId = 457,
  ParentParentInternalContent = 458,
  ParentParentInternalContentDigest = 459,
  ParentParentInternalContentFilePath = 460,
  ParentParentInternalDescription = 461,
  ParentParentInternalFieldOwners = 462,
  ParentParentInternalIgnoreType = 463,
  ParentParentInternalMediaType = 464,
  ParentParentInternalOwner = 465,
  ParentParentInternalType = 466,
  ParentParentParentChildren = 467,
  ParentParentParentId = 468,
  Slug = 469,
  SpaceId = 470,
  SysContentTypeSysId = 471,
  SysContentTypeSysLinkType = 472,
  SysContentTypeSysType = 473,
  SysRevision = 474,
  SysType = 475,
  Tags = 476,
  TagsBlogPost = 477,
  TagsBlogPostCategoryChildren = 478,
  TagsBlogPostCategoryContentfulId = 479,
  TagsBlogPostCategoryCreatedAt = 480,
  TagsBlogPostCategoryId = 481,
  TagsBlogPostCategoryName = 482,
  TagsBlogPostCategoryNodeLocale = 483,
  TagsBlogPostCategorySlug = 484,
  TagsBlogPostCategorySortKey = 485,
  TagsBlogPostCategorySpaceId = 486,
  TagsBlogPostCategoryUpdatedAt = 487,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 488,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 489,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 490,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 491,
  TagsBlogPostChildren = 492,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 493,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 494,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 495,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 496,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 497,
  TagsBlogPostChildrenChildren = 498,
  TagsBlogPostChildrenId = 499,
  TagsBlogPostContentChildren = 500,
  TagsBlogPostContentChildrenMdx = 501,
  TagsBlogPostContentContent = 502,
  TagsBlogPostContentId = 503,
  TagsBlogPostContentfulId = 504,
  TagsBlogPostCreated = 505,
  TagsBlogPostCreatedAt = 506,
  TagsBlogPostExcerpt = 507,
  TagsBlogPostGatsbyPath = 508,
  TagsBlogPostId = 509,
  TagsBlogPostInternalContent = 510,
  TagsBlogPostInternalContentDigest = 511,
  TagsBlogPostInternalContentFilePath = 512,
  TagsBlogPostInternalDescription = 513,
  TagsBlogPostInternalFieldOwners = 514,
  TagsBlogPostInternalIgnoreType = 515,
  TagsBlogPostInternalMediaType = 516,
  TagsBlogPostInternalOwner = 517,
  TagsBlogPostInternalType = 518,
  TagsBlogPostNodeLocale = 519,
  TagsBlogPostParentChildren = 520,
  TagsBlogPostParentId = 521,
  TagsBlogPostSlug = 522,
  TagsBlogPostSpaceId = 523,
  TagsBlogPostSysRevision = 524,
  TagsBlogPostSysType = 525,
  TagsBlogPostTags = 526,
  TagsBlogPostTagsBlogPost = 527,
  TagsBlogPostTagsChildren = 528,
  TagsBlogPostTagsContentfulId = 529,
  TagsBlogPostTagsCreatedAt = 530,
  TagsBlogPostTagsId = 531,
  TagsBlogPostTagsLevel = 532,
  TagsBlogPostTagsName = 533,
  TagsBlogPostTagsNodeLocale = 534,
  TagsBlogPostTagsOss = 535,
  TagsBlogPostTagsProject = 536,
  TagsBlogPostTagsSkillGrpup = 537,
  TagsBlogPostTagsSkillMap = 538,
  TagsBlogPostTagsSpaceId = 539,
  TagsBlogPostTagsUpdatedAt = 540,
  TagsBlogPostThumbnailChildren = 541,
  TagsBlogPostThumbnailContentfulId = 542,
  TagsBlogPostThumbnailCreatedAt = 543,
  TagsBlogPostThumbnailDescription = 544,
  TagsBlogPostThumbnailFilename = 545,
  TagsBlogPostThumbnailFilesize = 546,
  TagsBlogPostThumbnailGatsbyImage = 547,
  TagsBlogPostThumbnailGatsbyImageData = 548,
  TagsBlogPostThumbnailHeight = 549,
  TagsBlogPostThumbnailId = 550,
  TagsBlogPostThumbnailMimeType = 551,
  TagsBlogPostThumbnailNodeLocale = 552,
  TagsBlogPostThumbnailPlaceholderUrl = 553,
  TagsBlogPostThumbnailPublicUrl = 554,
  TagsBlogPostThumbnailSize = 555,
  TagsBlogPostThumbnailSpaceId = 556,
  TagsBlogPostThumbnailTitle = 557,
  TagsBlogPostThumbnailUpdatedAt = 558,
  TagsBlogPostThumbnailUrl = 559,
  TagsBlogPostThumbnailWidth = 560,
  TagsBlogPostTitle = 561,
  TagsBlogPostUpdated = 562,
  TagsBlogPostUpdatedAt = 563,
  TagsChildren = 564,
  TagsChildrenChildren = 565,
  TagsChildrenChildrenChildren = 566,
  TagsChildrenChildrenId = 567,
  TagsChildrenId = 568,
  TagsChildrenInternalContent = 569,
  TagsChildrenInternalContentDigest = 570,
  TagsChildrenInternalContentFilePath = 571,
  TagsChildrenInternalDescription = 572,
  TagsChildrenInternalFieldOwners = 573,
  TagsChildrenInternalIgnoreType = 574,
  TagsChildrenInternalMediaType = 575,
  TagsChildrenInternalOwner = 576,
  TagsChildrenInternalType = 577,
  TagsChildrenParentChildren = 578,
  TagsChildrenParentId = 579,
  TagsContentfulId = 580,
  TagsCreatedAt = 581,
  TagsId = 582,
  TagsInternalContent = 583,
  TagsInternalContentDigest = 584,
  TagsInternalContentFilePath = 585,
  TagsInternalDescription = 586,
  TagsInternalFieldOwners = 587,
  TagsInternalIgnoreType = 588,
  TagsInternalMediaType = 589,
  TagsInternalOwner = 590,
  TagsInternalType = 591,
  TagsLevel = 592,
  TagsName = 593,
  TagsNodeLocale = 594,
  TagsOss = 595,
  TagsOssChildContentfulOssDetailTextNodeChildren = 596,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 597,
  TagsOssChildContentfulOssDetailTextNodeDetail = 598,
  TagsOssChildContentfulOssDetailTextNodeId = 599,
  TagsOssChildren = 600,
  TagsOssChildrenContentfulOssDetailTextNode = 601,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 602,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 603,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 604,
  TagsOssChildrenContentfulOssDetailTextNodeId = 605,
  TagsOssChildrenChildren = 606,
  TagsOssChildrenId = 607,
  TagsOssContentfulId = 608,
  TagsOssCreatedAt = 609,
  TagsOssDetailChildren = 610,
  TagsOssDetailChildrenMdx = 611,
  TagsOssDetailDetail = 612,
  TagsOssDetailId = 613,
  TagsOssHref = 614,
  TagsOssIconChildren = 615,
  TagsOssIconChildrenContentfulIconSvgTextNode = 616,
  TagsOssIconContact = 617,
  TagsOssIconContentfulId = 618,
  TagsOssIconCreatedAt = 619,
  TagsOssIconHistory = 620,
  TagsOssIconId = 621,
  TagsOssIconName = 622,
  TagsOssIconNodeLocale = 623,
  TagsOssIconOss = 624,
  TagsOssIconProject = 625,
  TagsOssIconSpaceId = 626,
  TagsOssIconUpdatedAt = 627,
  TagsOssIconWhatICanDo = 628,
  TagsOssId = 629,
  TagsOssImageChildren = 630,
  TagsOssImageContentfulId = 631,
  TagsOssImageCreatedAt = 632,
  TagsOssImageDescription = 633,
  TagsOssImageFilename = 634,
  TagsOssImageFilesize = 635,
  TagsOssImageGatsbyImage = 636,
  TagsOssImageGatsbyImageData = 637,
  TagsOssImageHeight = 638,
  TagsOssImageId = 639,
  TagsOssImageMimeType = 640,
  TagsOssImageNodeLocale = 641,
  TagsOssImagePlaceholderUrl = 642,
  TagsOssImagePublicUrl = 643,
  TagsOssImageSize = 644,
  TagsOssImageSpaceId = 645,
  TagsOssImageTitle = 646,
  TagsOssImageUpdatedAt = 647,
  TagsOssImageUrl = 648,
  TagsOssImageWidth = 649,
  TagsOssInternalContent = 650,
  TagsOssInternalContentDigest = 651,
  TagsOssInternalContentFilePath = 652,
  TagsOssInternalDescription = 653,
  TagsOssInternalFieldOwners = 654,
  TagsOssInternalIgnoreType = 655,
  TagsOssInternalMediaType = 656,
  TagsOssInternalOwner = 657,
  TagsOssInternalType = 658,
  TagsOssName = 659,
  TagsOssNodeLocale = 660,
  TagsOssParentChildren = 661,
  TagsOssParentId = 662,
  TagsOssSpaceId = 663,
  TagsOssStartDate = 664,
  TagsOssSubName = 665,
  TagsOssSysRevision = 666,
  TagsOssSysType = 667,
  TagsOssTags = 668,
  TagsOssTagsBlogPost = 669,
  TagsOssTagsChildren = 670,
  TagsOssTagsContentfulId = 671,
  TagsOssTagsCreatedAt = 672,
  TagsOssTagsId = 673,
  TagsOssTagsLevel = 674,
  TagsOssTagsName = 675,
  TagsOssTagsNodeLocale = 676,
  TagsOssTagsOss = 677,
  TagsOssTagsProject = 678,
  TagsOssTagsSkillGrpup = 679,
  TagsOssTagsSkillMap = 680,
  TagsOssTagsSpaceId = 681,
  TagsOssTagsUpdatedAt = 682,
  TagsOssUpdatedAt = 683,
  TagsParentChildren = 684,
  TagsParentChildrenChildren = 685,
  TagsParentChildrenId = 686,
  TagsParentId = 687,
  TagsParentInternalContent = 688,
  TagsParentInternalContentDigest = 689,
  TagsParentInternalContentFilePath = 690,
  TagsParentInternalDescription = 691,
  TagsParentInternalFieldOwners = 692,
  TagsParentInternalIgnoreType = 693,
  TagsParentInternalMediaType = 694,
  TagsParentInternalOwner = 695,
  TagsParentInternalType = 696,
  TagsParentParentChildren = 697,
  TagsParentParentId = 698,
  TagsProject = 699,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 700,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 701,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 702,
  TagsProjectChildContentfulProjectDetailTextNodeId = 703,
  TagsProjectChildren = 704,
  TagsProjectChildrenContentfulProjectDetailTextNode = 705,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 706,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 707,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 708,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 709,
  TagsProjectChildrenChildren = 710,
  TagsProjectChildrenId = 711,
  TagsProjectContentfulId = 712,
  TagsProjectCreatedAt = 713,
  TagsProjectDetailChildren = 714,
  TagsProjectDetailChildrenMdx = 715,
  TagsProjectDetailDetail = 716,
  TagsProjectDetailId = 717,
  TagsProjectEndDate = 718,
  TagsProjectIconChildren = 719,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 720,
  TagsProjectIconContact = 721,
  TagsProjectIconContentfulId = 722,
  TagsProjectIconCreatedAt = 723,
  TagsProjectIconHistory = 724,
  TagsProjectIconId = 725,
  TagsProjectIconName = 726,
  TagsProjectIconNodeLocale = 727,
  TagsProjectIconOss = 728,
  TagsProjectIconProject = 729,
  TagsProjectIconSpaceId = 730,
  TagsProjectIconUpdatedAt = 731,
  TagsProjectIconWhatICanDo = 732,
  TagsProjectId = 733,
  TagsProjectInternalContent = 734,
  TagsProjectInternalContentDigest = 735,
  TagsProjectInternalContentFilePath = 736,
  TagsProjectInternalDescription = 737,
  TagsProjectInternalFieldOwners = 738,
  TagsProjectInternalIgnoreType = 739,
  TagsProjectInternalMediaType = 740,
  TagsProjectInternalOwner = 741,
  TagsProjectInternalType = 742,
  TagsProjectName = 743,
  TagsProjectNodeLocale = 744,
  TagsProjectParentChildren = 745,
  TagsProjectParentId = 746,
  TagsProjectSpaceId = 747,
  TagsProjectStartDate = 748,
  TagsProjectSubName = 749,
  TagsProjectSysRevision = 750,
  TagsProjectSysType = 751,
  TagsProjectTags = 752,
  TagsProjectTagsBlogPost = 753,
  TagsProjectTagsChildren = 754,
  TagsProjectTagsContentfulId = 755,
  TagsProjectTagsCreatedAt = 756,
  TagsProjectTagsId = 757,
  TagsProjectTagsLevel = 758,
  TagsProjectTagsName = 759,
  TagsProjectTagsNodeLocale = 760,
  TagsProjectTagsOss = 761,
  TagsProjectTagsProject = 762,
  TagsProjectTagsSkillGrpup = 763,
  TagsProjectTagsSkillMap = 764,
  TagsProjectTagsSpaceId = 765,
  TagsProjectTagsUpdatedAt = 766,
  TagsProjectUpdatedAt = 767,
  TagsSkillGrpup = 768,
  TagsSkillGrpupChildren = 769,
  TagsSkillGrpupChildrenChildren = 770,
  TagsSkillGrpupChildrenId = 771,
  TagsSkillGrpupContentfulId = 772,
  TagsSkillGrpupCreatedAt = 773,
  TagsSkillGrpupId = 774,
  TagsSkillGrpupInternalContent = 775,
  TagsSkillGrpupInternalContentDigest = 776,
  TagsSkillGrpupInternalContentFilePath = 777,
  TagsSkillGrpupInternalDescription = 778,
  TagsSkillGrpupInternalFieldOwners = 779,
  TagsSkillGrpupInternalIgnoreType = 780,
  TagsSkillGrpupInternalMediaType = 781,
  TagsSkillGrpupInternalOwner = 782,
  TagsSkillGrpupInternalType = 783,
  TagsSkillGrpupName = 784,
  TagsSkillGrpupNodeLocale = 785,
  TagsSkillGrpupParentChildren = 786,
  TagsSkillGrpupParentId = 787,
  TagsSkillGrpupSkillMap = 788,
  TagsSkillGrpupSkillMapChildren = 789,
  TagsSkillGrpupSkillMapContentfulId = 790,
  TagsSkillGrpupSkillMapCreatedAt = 791,
  TagsSkillGrpupSkillMapExpanded = 792,
  TagsSkillGrpupSkillMapId = 793,
  TagsSkillGrpupSkillMapName = 794,
  TagsSkillGrpupSkillMapNodeLocale = 795,
  TagsSkillGrpupSkillMapSkillGroups = 796,
  TagsSkillGrpupSkillMapSkills = 797,
  TagsSkillGrpupSkillMapSortKey = 798,
  TagsSkillGrpupSkillMapSpaceId = 799,
  TagsSkillGrpupSkillMapUpdatedAt = 800,
  TagsSkillGrpupSkills = 801,
  TagsSkillGrpupSkillsBlogPost = 802,
  TagsSkillGrpupSkillsChildren = 803,
  TagsSkillGrpupSkillsContentfulId = 804,
  TagsSkillGrpupSkillsCreatedAt = 805,
  TagsSkillGrpupSkillsId = 806,
  TagsSkillGrpupSkillsLevel = 807,
  TagsSkillGrpupSkillsName = 808,
  TagsSkillGrpupSkillsNodeLocale = 809,
  TagsSkillGrpupSkillsOss = 810,
  TagsSkillGrpupSkillsProject = 811,
  TagsSkillGrpupSkillsSkillGrpup = 812,
  TagsSkillGrpupSkillsSkillMap = 813,
  TagsSkillGrpupSkillsSpaceId = 814,
  TagsSkillGrpupSkillsUpdatedAt = 815,
  TagsSkillGrpupSpaceId = 816,
  TagsSkillGrpupSysRevision = 817,
  TagsSkillGrpupSysType = 818,
  TagsSkillGrpupUpdatedAt = 819,
  TagsSkillMap = 820,
  TagsSkillMapChildren = 821,
  TagsSkillMapChildrenChildren = 822,
  TagsSkillMapChildrenId = 823,
  TagsSkillMapContentfulId = 824,
  TagsSkillMapCreatedAt = 825,
  TagsSkillMapExpanded = 826,
  TagsSkillMapId = 827,
  TagsSkillMapInternalContent = 828,
  TagsSkillMapInternalContentDigest = 829,
  TagsSkillMapInternalContentFilePath = 830,
  TagsSkillMapInternalDescription = 831,
  TagsSkillMapInternalFieldOwners = 832,
  TagsSkillMapInternalIgnoreType = 833,
  TagsSkillMapInternalMediaType = 834,
  TagsSkillMapInternalOwner = 835,
  TagsSkillMapInternalType = 836,
  TagsSkillMapName = 837,
  TagsSkillMapNodeLocale = 838,
  TagsSkillMapParentChildren = 839,
  TagsSkillMapParentId = 840,
  TagsSkillMapSkillGroups = 841,
  TagsSkillMapSkillGroupsChildren = 842,
  TagsSkillMapSkillGroupsContentfulId = 843,
  TagsSkillMapSkillGroupsCreatedAt = 844,
  TagsSkillMapSkillGroupsId = 845,
  TagsSkillMapSkillGroupsName = 846,
  TagsSkillMapSkillGroupsNodeLocale = 847,
  TagsSkillMapSkillGroupsSkillMap = 848,
  TagsSkillMapSkillGroupsSkills = 849,
  TagsSkillMapSkillGroupsSpaceId = 850,
  TagsSkillMapSkillGroupsUpdatedAt = 851,
  TagsSkillMapSkills = 852,
  TagsSkillMapSkillsBlogPost = 853,
  TagsSkillMapSkillsChildren = 854,
  TagsSkillMapSkillsContentfulId = 855,
  TagsSkillMapSkillsCreatedAt = 856,
  TagsSkillMapSkillsId = 857,
  TagsSkillMapSkillsLevel = 858,
  TagsSkillMapSkillsName = 859,
  TagsSkillMapSkillsNodeLocale = 860,
  TagsSkillMapSkillsOss = 861,
  TagsSkillMapSkillsProject = 862,
  TagsSkillMapSkillsSkillGrpup = 863,
  TagsSkillMapSkillsSkillMap = 864,
  TagsSkillMapSkillsSpaceId = 865,
  TagsSkillMapSkillsUpdatedAt = 866,
  TagsSkillMapSortKey = 867,
  TagsSkillMapSpaceId = 868,
  TagsSkillMapSysRevision = 869,
  TagsSkillMapSysType = 870,
  TagsSkillMapUpdatedAt = 871,
  TagsSpaceId = 872,
  TagsSysRevision = 873,
  TagsSysType = 874,
  TagsUpdatedAt = 875,
  ThumbnailChildren = 876,
  ThumbnailChildrenChildren = 877,
  ThumbnailChildrenChildrenChildren = 878,
  ThumbnailChildrenChildrenId = 879,
  ThumbnailChildrenId = 880,
  ThumbnailChildrenInternalContent = 881,
  ThumbnailChildrenInternalContentDigest = 882,
  ThumbnailChildrenInternalContentFilePath = 883,
  ThumbnailChildrenInternalDescription = 884,
  ThumbnailChildrenInternalFieldOwners = 885,
  ThumbnailChildrenInternalIgnoreType = 886,
  ThumbnailChildrenInternalMediaType = 887,
  ThumbnailChildrenInternalOwner = 888,
  ThumbnailChildrenInternalType = 889,
  ThumbnailChildrenParentChildren = 890,
  ThumbnailChildrenParentId = 891,
  ThumbnailContentfulId = 892,
  ThumbnailCreatedAt = 893,
  ThumbnailDescription = 894,
  ThumbnailFileContentType = 895,
  ThumbnailFileDetailsSize = 896,
  ThumbnailFileFileName = 897,
  ThumbnailFileUrl = 898,
  ThumbnailFilename = 899,
  ThumbnailFilesize = 900,
  ThumbnailGatsbyImage = 901,
  ThumbnailGatsbyImageData = 902,
  ThumbnailHeight = 903,
  ThumbnailId = 904,
  ThumbnailInternalContent = 905,
  ThumbnailInternalContentDigest = 906,
  ThumbnailInternalContentFilePath = 907,
  ThumbnailInternalDescription = 908,
  ThumbnailInternalFieldOwners = 909,
  ThumbnailInternalIgnoreType = 910,
  ThumbnailInternalMediaType = 911,
  ThumbnailInternalOwner = 912,
  ThumbnailInternalType = 913,
  ThumbnailMimeType = 914,
  ThumbnailNodeLocale = 915,
  ThumbnailParentChildren = 916,
  ThumbnailParentChildrenChildren = 917,
  ThumbnailParentChildrenId = 918,
  ThumbnailParentId = 919,
  ThumbnailParentInternalContent = 920,
  ThumbnailParentInternalContentDigest = 921,
  ThumbnailParentInternalContentFilePath = 922,
  ThumbnailParentInternalDescription = 923,
  ThumbnailParentInternalFieldOwners = 924,
  ThumbnailParentInternalIgnoreType = 925,
  ThumbnailParentInternalMediaType = 926,
  ThumbnailParentInternalOwner = 927,
  ThumbnailParentInternalType = 928,
  ThumbnailParentParentChildren = 929,
  ThumbnailParentParentId = 930,
  ThumbnailPlaceholderUrl = 931,
  ThumbnailPublicUrl = 932,
  ThumbnailResizeHeight = 933,
  ThumbnailResizeSrc = 934,
  ThumbnailResizeWidth = 935,
  ThumbnailSize = 936,
  ThumbnailSpaceId = 937,
  ThumbnailSysRevision = 938,
  ThumbnailSysType = 939,
  ThumbnailTitle = 940,
  ThumbnailUpdatedAt = 941,
  ThumbnailUrl = 942,
  ThumbnailWidth = 943,
  Title = 944,
  Updated = 945,
  UpdatedAt = 946
}

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
  readonly thumbnail: InputMaybe<ContentfulAssetFilterInput>;
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
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostGroupConnectionGroupArgs = {
  field: ContentfulBlogPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogPostGroupConnectionMaxArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostGroupConnectionMinArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostGroupConnectionSumArgs = {
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulBlogPostFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  readonly contentType: Maybe<ContentfulBlogPostSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentType = {
  readonly sys: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulBlogPostSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulCategory = ContentfulEntry & ContentfulReference & Node & {
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
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionGroupArgs = {
  field: ContentfulCategoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulCategoryConnectionMaxArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionMinArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionSumArgs = {
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategoryEdge = {
  readonly next: Maybe<ContentfulCategory>;
  readonly node: ContentfulCategory;
  readonly previous: Maybe<ContentfulCategory>;
};

export enum ContentfulCategoryFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Id = 44,
  InternalContent = 45,
  InternalContentDigest = 46,
  InternalContentFilePath = 47,
  InternalDescription = 48,
  InternalFieldOwners = 49,
  InternalIgnoreType = 50,
  InternalMediaType = 51,
  InternalOwner = 52,
  InternalType = 53,
  Name = 54,
  NodeLocale = 55,
  ParentChildren = 56,
  ParentChildrenChildren = 57,
  ParentChildrenChildrenChildren = 58,
  ParentChildrenChildrenId = 59,
  ParentChildrenId = 60,
  ParentChildrenInternalContent = 61,
  ParentChildrenInternalContentDigest = 62,
  ParentChildrenInternalContentFilePath = 63,
  ParentChildrenInternalDescription = 64,
  ParentChildrenInternalFieldOwners = 65,
  ParentChildrenInternalIgnoreType = 66,
  ParentChildrenInternalMediaType = 67,
  ParentChildrenInternalOwner = 68,
  ParentChildrenInternalType = 69,
  ParentChildrenParentChildren = 70,
  ParentChildrenParentId = 71,
  ParentId = 72,
  ParentInternalContent = 73,
  ParentInternalContentDigest = 74,
  ParentInternalContentFilePath = 75,
  ParentInternalDescription = 76,
  ParentInternalFieldOwners = 77,
  ParentInternalIgnoreType = 78,
  ParentInternalMediaType = 79,
  ParentInternalOwner = 80,
  ParentInternalType = 81,
  ParentParentChildren = 82,
  ParentParentChildrenChildren = 83,
  ParentParentChildrenId = 84,
  ParentParentId = 85,
  ParentParentInternalContent = 86,
  ParentParentInternalContentDigest = 87,
  ParentParentInternalContentFilePath = 88,
  ParentParentInternalDescription = 89,
  ParentParentInternalFieldOwners = 90,
  ParentParentInternalIgnoreType = 91,
  ParentParentInternalMediaType = 92,
  ParentParentInternalOwner = 93,
  ParentParentInternalType = 94,
  ParentParentParentChildren = 95,
  ParentParentParentId = 96,
  Slug = 97,
  SortKey = 98,
  SpaceId = 99,
  SysContentTypeSysId = 100,
  SysContentTypeSysLinkType = 101,
  SysContentTypeSysType = 102,
  SysRevision = 103,
  SysType = 104,
  UpdatedAt = 105
}

export type ContentfulCategoryFilterInput = {
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
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryGroupConnectionGroupArgs = {
  field: ContentfulCategoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulCategoryGroupConnectionMaxArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryGroupConnectionMinArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryGroupConnectionSumArgs = {
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategorySortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulCategoryFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulCategorySys = {
  readonly contentType: Maybe<ContentfulCategorySysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulCategorySysContentType = {
  readonly sys: Maybe<ContentfulCategorySysContentTypeSys>;
};

export type ContentfulCategorySysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulCategorySysContentTypeSysFilterInput>;
};

export type ContentfulCategorySysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulCategorySysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulCategorySysFilterInput = {
  readonly contentType: InputMaybe<ContentfulCategorySysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactConnectionGroupArgs = {
  field: ContentfulContactFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulContactConnectionMaxArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactConnectionMinArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactConnectionSumArgs = {
  field: ContentfulContactFieldsEnum;
};

export type ContentfulContactEdge = {
  readonly next: Maybe<ContentfulContact>;
  readonly node: ContentfulContact;
  readonly previous: Maybe<ContentfulContact>;
};

export enum ContentfulContactFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Href = 44,
  IconSvgDarkChildren = 45,
  IconSvgDarkChildrenChildren = 46,
  IconSvgDarkChildrenChildrenChildren = 47,
  IconSvgDarkChildrenChildrenId = 48,
  IconSvgDarkChildrenId = 49,
  IconSvgDarkChildrenInternalContent = 50,
  IconSvgDarkChildrenInternalContentDigest = 51,
  IconSvgDarkChildrenInternalContentFilePath = 52,
  IconSvgDarkChildrenInternalDescription = 53,
  IconSvgDarkChildrenInternalFieldOwners = 54,
  IconSvgDarkChildrenInternalIgnoreType = 55,
  IconSvgDarkChildrenInternalMediaType = 56,
  IconSvgDarkChildrenInternalOwner = 57,
  IconSvgDarkChildrenInternalType = 58,
  IconSvgDarkChildrenParentChildren = 59,
  IconSvgDarkChildrenParentId = 60,
  IconSvgDarkContentfulId = 61,
  IconSvgDarkCreatedAt = 62,
  IconSvgDarkDescription = 63,
  IconSvgDarkFileContentType = 64,
  IconSvgDarkFileDetailsSize = 65,
  IconSvgDarkFileFileName = 66,
  IconSvgDarkFileUrl = 67,
  IconSvgDarkFilename = 68,
  IconSvgDarkFilesize = 69,
  IconSvgDarkGatsbyImage = 70,
  IconSvgDarkGatsbyImageData = 71,
  IconSvgDarkHeight = 72,
  IconSvgDarkId = 73,
  IconSvgDarkInternalContent = 74,
  IconSvgDarkInternalContentDigest = 75,
  IconSvgDarkInternalContentFilePath = 76,
  IconSvgDarkInternalDescription = 77,
  IconSvgDarkInternalFieldOwners = 78,
  IconSvgDarkInternalIgnoreType = 79,
  IconSvgDarkInternalMediaType = 80,
  IconSvgDarkInternalOwner = 81,
  IconSvgDarkInternalType = 82,
  IconSvgDarkMimeType = 83,
  IconSvgDarkNodeLocale = 84,
  IconSvgDarkParentChildren = 85,
  IconSvgDarkParentChildrenChildren = 86,
  IconSvgDarkParentChildrenId = 87,
  IconSvgDarkParentId = 88,
  IconSvgDarkParentInternalContent = 89,
  IconSvgDarkParentInternalContentDigest = 90,
  IconSvgDarkParentInternalContentFilePath = 91,
  IconSvgDarkParentInternalDescription = 92,
  IconSvgDarkParentInternalFieldOwners = 93,
  IconSvgDarkParentInternalIgnoreType = 94,
  IconSvgDarkParentInternalMediaType = 95,
  IconSvgDarkParentInternalOwner = 96,
  IconSvgDarkParentInternalType = 97,
  IconSvgDarkParentParentChildren = 98,
  IconSvgDarkParentParentId = 99,
  IconSvgDarkPlaceholderUrl = 100,
  IconSvgDarkPublicUrl = 101,
  IconSvgDarkResizeHeight = 102,
  IconSvgDarkResizeSrc = 103,
  IconSvgDarkResizeWidth = 104,
  IconSvgDarkSize = 105,
  IconSvgDarkSpaceId = 106,
  IconSvgDarkSysRevision = 107,
  IconSvgDarkSysType = 108,
  IconSvgDarkTitle = 109,
  IconSvgDarkUpdatedAt = 110,
  IconSvgDarkUrl = 111,
  IconSvgDarkWidth = 112,
  IconSvgLightChildren = 113,
  IconSvgLightChildrenChildren = 114,
  IconSvgLightChildrenChildrenChildren = 115,
  IconSvgLightChildrenChildrenId = 116,
  IconSvgLightChildrenId = 117,
  IconSvgLightChildrenInternalContent = 118,
  IconSvgLightChildrenInternalContentDigest = 119,
  IconSvgLightChildrenInternalContentFilePath = 120,
  IconSvgLightChildrenInternalDescription = 121,
  IconSvgLightChildrenInternalFieldOwners = 122,
  IconSvgLightChildrenInternalIgnoreType = 123,
  IconSvgLightChildrenInternalMediaType = 124,
  IconSvgLightChildrenInternalOwner = 125,
  IconSvgLightChildrenInternalType = 126,
  IconSvgLightChildrenParentChildren = 127,
  IconSvgLightChildrenParentId = 128,
  IconSvgLightContentfulId = 129,
  IconSvgLightCreatedAt = 130,
  IconSvgLightDescription = 131,
  IconSvgLightFileContentType = 132,
  IconSvgLightFileDetailsSize = 133,
  IconSvgLightFileFileName = 134,
  IconSvgLightFileUrl = 135,
  IconSvgLightFilename = 136,
  IconSvgLightFilesize = 137,
  IconSvgLightGatsbyImage = 138,
  IconSvgLightGatsbyImageData = 139,
  IconSvgLightHeight = 140,
  IconSvgLightId = 141,
  IconSvgLightInternalContent = 142,
  IconSvgLightInternalContentDigest = 143,
  IconSvgLightInternalContentFilePath = 144,
  IconSvgLightInternalDescription = 145,
  IconSvgLightInternalFieldOwners = 146,
  IconSvgLightInternalIgnoreType = 147,
  IconSvgLightInternalMediaType = 148,
  IconSvgLightInternalOwner = 149,
  IconSvgLightInternalType = 150,
  IconSvgLightMimeType = 151,
  IconSvgLightNodeLocale = 152,
  IconSvgLightParentChildren = 153,
  IconSvgLightParentChildrenChildren = 154,
  IconSvgLightParentChildrenId = 155,
  IconSvgLightParentId = 156,
  IconSvgLightParentInternalContent = 157,
  IconSvgLightParentInternalContentDigest = 158,
  IconSvgLightParentInternalContentFilePath = 159,
  IconSvgLightParentInternalDescription = 160,
  IconSvgLightParentInternalFieldOwners = 161,
  IconSvgLightParentInternalIgnoreType = 162,
  IconSvgLightParentInternalMediaType = 163,
  IconSvgLightParentInternalOwner = 164,
  IconSvgLightParentInternalType = 165,
  IconSvgLightParentParentChildren = 166,
  IconSvgLightParentParentId = 167,
  IconSvgLightPlaceholderUrl = 168,
  IconSvgLightPublicUrl = 169,
  IconSvgLightResizeHeight = 170,
  IconSvgLightResizeSrc = 171,
  IconSvgLightResizeWidth = 172,
  IconSvgLightSize = 173,
  IconSvgLightSpaceId = 174,
  IconSvgLightSysRevision = 175,
  IconSvgLightSysType = 176,
  IconSvgLightTitle = 177,
  IconSvgLightUpdatedAt = 178,
  IconSvgLightUrl = 179,
  IconSvgLightWidth = 180,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 181,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 182,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 183,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 184,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 185,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 186,
  IconChildContentfulIconSvgTextNodeChildMdxId = 187,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 188,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 189,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 190,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 191,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 192,
  IconChildContentfulIconSvgTextNodeChildren = 193,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 194,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 195,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 196,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 197,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 198,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 199,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 200,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 201,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 202,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 203,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 204,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 205,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 206,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 207,
  IconChildContentfulIconSvgTextNodeChildrenId = 208,
  IconChildContentfulIconSvgTextNodeId = 209,
  IconChildContentfulIconSvgTextNodeInternalContent = 210,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 211,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 212,
  IconChildContentfulIconSvgTextNodeInternalDescription = 213,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 214,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 215,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 216,
  IconChildContentfulIconSvgTextNodeInternalOwner = 217,
  IconChildContentfulIconSvgTextNodeInternalType = 218,
  IconChildContentfulIconSvgTextNodeParentChildren = 219,
  IconChildContentfulIconSvgTextNodeParentId = 220,
  IconChildContentfulIconSvgTextNodeSvg = 221,
  IconChildContentfulIconSvgTextNodeSysType = 222,
  IconChildren = 223,
  IconChildrenContentfulIconSvgTextNode = 224,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 225,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 226,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 227,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 228,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 229,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 230,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 231,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 232,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 233,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 234,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 235,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 236,
  IconChildrenContentfulIconSvgTextNodeChildren = 237,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 238,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 239,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 240,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 241,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 242,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 243,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 244,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 245,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 246,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 247,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 248,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 249,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 250,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 251,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 252,
  IconChildrenContentfulIconSvgTextNodeId = 253,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 254,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 255,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 256,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 257,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 258,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 259,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 260,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 261,
  IconChildrenContentfulIconSvgTextNodeInternalType = 262,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 263,
  IconChildrenContentfulIconSvgTextNodeParentId = 264,
  IconChildrenContentfulIconSvgTextNodeSvg = 265,
  IconChildrenContentfulIconSvgTextNodeSysType = 266,
  IconChildrenChildren = 267,
  IconChildrenChildrenChildren = 268,
  IconChildrenChildrenId = 269,
  IconChildrenId = 270,
  IconChildrenInternalContent = 271,
  IconChildrenInternalContentDigest = 272,
  IconChildrenInternalContentFilePath = 273,
  IconChildrenInternalDescription = 274,
  IconChildrenInternalFieldOwners = 275,
  IconChildrenInternalIgnoreType = 276,
  IconChildrenInternalMediaType = 277,
  IconChildrenInternalOwner = 278,
  IconChildrenInternalType = 279,
  IconChildrenParentChildren = 280,
  IconChildrenParentId = 281,
  IconContact = 282,
  IconContactChildren = 283,
  IconContactChildrenChildren = 284,
  IconContactChildrenId = 285,
  IconContactContentfulId = 286,
  IconContactCreatedAt = 287,
  IconContactHref = 288,
  IconContactIconSvgDarkChildren = 289,
  IconContactIconSvgDarkContentfulId = 290,
  IconContactIconSvgDarkCreatedAt = 291,
  IconContactIconSvgDarkDescription = 292,
  IconContactIconSvgDarkFilename = 293,
  IconContactIconSvgDarkFilesize = 294,
  IconContactIconSvgDarkGatsbyImage = 295,
  IconContactIconSvgDarkGatsbyImageData = 296,
  IconContactIconSvgDarkHeight = 297,
  IconContactIconSvgDarkId = 298,
  IconContactIconSvgDarkMimeType = 299,
  IconContactIconSvgDarkNodeLocale = 300,
  IconContactIconSvgDarkPlaceholderUrl = 301,
  IconContactIconSvgDarkPublicUrl = 302,
  IconContactIconSvgDarkSize = 303,
  IconContactIconSvgDarkSpaceId = 304,
  IconContactIconSvgDarkTitle = 305,
  IconContactIconSvgDarkUpdatedAt = 306,
  IconContactIconSvgDarkUrl = 307,
  IconContactIconSvgDarkWidth = 308,
  IconContactIconSvgLightChildren = 309,
  IconContactIconSvgLightContentfulId = 310,
  IconContactIconSvgLightCreatedAt = 311,
  IconContactIconSvgLightDescription = 312,
  IconContactIconSvgLightFilename = 313,
  IconContactIconSvgLightFilesize = 314,
  IconContactIconSvgLightGatsbyImage = 315,
  IconContactIconSvgLightGatsbyImageData = 316,
  IconContactIconSvgLightHeight = 317,
  IconContactIconSvgLightId = 318,
  IconContactIconSvgLightMimeType = 319,
  IconContactIconSvgLightNodeLocale = 320,
  IconContactIconSvgLightPlaceholderUrl = 321,
  IconContactIconSvgLightPublicUrl = 322,
  IconContactIconSvgLightSize = 323,
  IconContactIconSvgLightSpaceId = 324,
  IconContactIconSvgLightTitle = 325,
  IconContactIconSvgLightUpdatedAt = 326,
  IconContactIconSvgLightUrl = 327,
  IconContactIconSvgLightWidth = 328,
  IconContactIconChildren = 329,
  IconContactIconChildrenContentfulIconSvgTextNode = 330,
  IconContactIconContact = 331,
  IconContactIconContentfulId = 332,
  IconContactIconCreatedAt = 333,
  IconContactIconHistory = 334,
  IconContactIconId = 335,
  IconContactIconName = 336,
  IconContactIconNodeLocale = 337,
  IconContactIconOss = 338,
  IconContactIconProject = 339,
  IconContactIconSpaceId = 340,
  IconContactIconUpdatedAt = 341,
  IconContactIconWhatICanDo = 342,
  IconContactId = 343,
  IconContactInternalContent = 344,
  IconContactInternalContentDigest = 345,
  IconContactInternalContentFilePath = 346,
  IconContactInternalDescription = 347,
  IconContactInternalFieldOwners = 348,
  IconContactInternalIgnoreType = 349,
  IconContactInternalMediaType = 350,
  IconContactInternalOwner = 351,
  IconContactInternalType = 352,
  IconContactName = 353,
  IconContactNodeLocale = 354,
  IconContactParentChildren = 355,
  IconContactParentId = 356,
  IconContactSortKey = 357,
  IconContactSpaceId = 358,
  IconContactSubName = 359,
  IconContactSysRevision = 360,
  IconContactSysType = 361,
  IconContactUpdatedAt = 362,
  IconContentfulId = 363,
  IconCreatedAt = 364,
  IconHistory = 365,
  IconHistoryChildren = 366,
  IconHistoryChildrenChildren = 367,
  IconHistoryChildrenId = 368,
  IconHistoryContentfulId = 369,
  IconHistoryCreatedAt = 370,
  IconHistoryDate = 371,
  IconHistoryIconChildren = 372,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 373,
  IconHistoryIconContact = 374,
  IconHistoryIconContentfulId = 375,
  IconHistoryIconCreatedAt = 376,
  IconHistoryIconHistory = 377,
  IconHistoryIconId = 378,
  IconHistoryIconName = 379,
  IconHistoryIconNodeLocale = 380,
  IconHistoryIconOss = 381,
  IconHistoryIconProject = 382,
  IconHistoryIconSpaceId = 383,
  IconHistoryIconUpdatedAt = 384,
  IconHistoryIconWhatICanDo = 385,
  IconHistoryId = 386,
  IconHistoryInternalContent = 387,
  IconHistoryInternalContentDigest = 388,
  IconHistoryInternalContentFilePath = 389,
  IconHistoryInternalDescription = 390,
  IconHistoryInternalFieldOwners = 391,
  IconHistoryInternalIgnoreType = 392,
  IconHistoryInternalMediaType = 393,
  IconHistoryInternalOwner = 394,
  IconHistoryInternalType = 395,
  IconHistoryName = 396,
  IconHistoryNodeLocale = 397,
  IconHistoryParentChildren = 398,
  IconHistoryParentId = 399,
  IconHistorySpaceId = 400,
  IconHistorySubName = 401,
  IconHistorySysRevision = 402,
  IconHistorySysType = 403,
  IconHistoryUpdatedAt = 404,
  IconId = 405,
  IconInternalContent = 406,
  IconInternalContentDigest = 407,
  IconInternalContentFilePath = 408,
  IconInternalDescription = 409,
  IconInternalFieldOwners = 410,
  IconInternalIgnoreType = 411,
  IconInternalMediaType = 412,
  IconInternalOwner = 413,
  IconInternalType = 414,
  IconName = 415,
  IconNodeLocale = 416,
  IconOss = 417,
  IconOssChildContentfulOssDetailTextNodeChildren = 418,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 419,
  IconOssChildContentfulOssDetailTextNodeDetail = 420,
  IconOssChildContentfulOssDetailTextNodeId = 421,
  IconOssChildren = 422,
  IconOssChildrenContentfulOssDetailTextNode = 423,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 424,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 425,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 426,
  IconOssChildrenContentfulOssDetailTextNodeId = 427,
  IconOssChildrenChildren = 428,
  IconOssChildrenId = 429,
  IconOssContentfulId = 430,
  IconOssCreatedAt = 431,
  IconOssDetailChildren = 432,
  IconOssDetailChildrenMdx = 433,
  IconOssDetailDetail = 434,
  IconOssDetailId = 435,
  IconOssHref = 436,
  IconOssIconChildren = 437,
  IconOssIconChildrenContentfulIconSvgTextNode = 438,
  IconOssIconContact = 439,
  IconOssIconContentfulId = 440,
  IconOssIconCreatedAt = 441,
  IconOssIconHistory = 442,
  IconOssIconId = 443,
  IconOssIconName = 444,
  IconOssIconNodeLocale = 445,
  IconOssIconOss = 446,
  IconOssIconProject = 447,
  IconOssIconSpaceId = 448,
  IconOssIconUpdatedAt = 449,
  IconOssIconWhatICanDo = 450,
  IconOssId = 451,
  IconOssImageChildren = 452,
  IconOssImageContentfulId = 453,
  IconOssImageCreatedAt = 454,
  IconOssImageDescription = 455,
  IconOssImageFilename = 456,
  IconOssImageFilesize = 457,
  IconOssImageGatsbyImage = 458,
  IconOssImageGatsbyImageData = 459,
  IconOssImageHeight = 460,
  IconOssImageId = 461,
  IconOssImageMimeType = 462,
  IconOssImageNodeLocale = 463,
  IconOssImagePlaceholderUrl = 464,
  IconOssImagePublicUrl = 465,
  IconOssImageSize = 466,
  IconOssImageSpaceId = 467,
  IconOssImageTitle = 468,
  IconOssImageUpdatedAt = 469,
  IconOssImageUrl = 470,
  IconOssImageWidth = 471,
  IconOssInternalContent = 472,
  IconOssInternalContentDigest = 473,
  IconOssInternalContentFilePath = 474,
  IconOssInternalDescription = 475,
  IconOssInternalFieldOwners = 476,
  IconOssInternalIgnoreType = 477,
  IconOssInternalMediaType = 478,
  IconOssInternalOwner = 479,
  IconOssInternalType = 480,
  IconOssName = 481,
  IconOssNodeLocale = 482,
  IconOssParentChildren = 483,
  IconOssParentId = 484,
  IconOssSpaceId = 485,
  IconOssStartDate = 486,
  IconOssSubName = 487,
  IconOssSysRevision = 488,
  IconOssSysType = 489,
  IconOssTags = 490,
  IconOssTagsBlogPost = 491,
  IconOssTagsChildren = 492,
  IconOssTagsContentfulId = 493,
  IconOssTagsCreatedAt = 494,
  IconOssTagsId = 495,
  IconOssTagsLevel = 496,
  IconOssTagsName = 497,
  IconOssTagsNodeLocale = 498,
  IconOssTagsOss = 499,
  IconOssTagsProject = 500,
  IconOssTagsSkillGrpup = 501,
  IconOssTagsSkillMap = 502,
  IconOssTagsSpaceId = 503,
  IconOssTagsUpdatedAt = 504,
  IconOssUpdatedAt = 505,
  IconParentChildren = 506,
  IconParentChildrenChildren = 507,
  IconParentChildrenId = 508,
  IconParentId = 509,
  IconParentInternalContent = 510,
  IconParentInternalContentDigest = 511,
  IconParentInternalContentFilePath = 512,
  IconParentInternalDescription = 513,
  IconParentInternalFieldOwners = 514,
  IconParentInternalIgnoreType = 515,
  IconParentInternalMediaType = 516,
  IconParentInternalOwner = 517,
  IconParentInternalType = 518,
  IconParentParentChildren = 519,
  IconParentParentId = 520,
  IconProject = 521,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 522,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 523,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 524,
  IconProjectChildContentfulProjectDetailTextNodeId = 525,
  IconProjectChildren = 526,
  IconProjectChildrenContentfulProjectDetailTextNode = 527,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 528,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 529,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 530,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 531,
  IconProjectChildrenChildren = 532,
  IconProjectChildrenId = 533,
  IconProjectContentfulId = 534,
  IconProjectCreatedAt = 535,
  IconProjectDetailChildren = 536,
  IconProjectDetailChildrenMdx = 537,
  IconProjectDetailDetail = 538,
  IconProjectDetailId = 539,
  IconProjectEndDate = 540,
  IconProjectIconChildren = 541,
  IconProjectIconChildrenContentfulIconSvgTextNode = 542,
  IconProjectIconContact = 543,
  IconProjectIconContentfulId = 544,
  IconProjectIconCreatedAt = 545,
  IconProjectIconHistory = 546,
  IconProjectIconId = 547,
  IconProjectIconName = 548,
  IconProjectIconNodeLocale = 549,
  IconProjectIconOss = 550,
  IconProjectIconProject = 551,
  IconProjectIconSpaceId = 552,
  IconProjectIconUpdatedAt = 553,
  IconProjectIconWhatICanDo = 554,
  IconProjectId = 555,
  IconProjectInternalContent = 556,
  IconProjectInternalContentDigest = 557,
  IconProjectInternalContentFilePath = 558,
  IconProjectInternalDescription = 559,
  IconProjectInternalFieldOwners = 560,
  IconProjectInternalIgnoreType = 561,
  IconProjectInternalMediaType = 562,
  IconProjectInternalOwner = 563,
  IconProjectInternalType = 564,
  IconProjectName = 565,
  IconProjectNodeLocale = 566,
  IconProjectParentChildren = 567,
  IconProjectParentId = 568,
  IconProjectSpaceId = 569,
  IconProjectStartDate = 570,
  IconProjectSubName = 571,
  IconProjectSysRevision = 572,
  IconProjectSysType = 573,
  IconProjectTags = 574,
  IconProjectTagsBlogPost = 575,
  IconProjectTagsChildren = 576,
  IconProjectTagsContentfulId = 577,
  IconProjectTagsCreatedAt = 578,
  IconProjectTagsId = 579,
  IconProjectTagsLevel = 580,
  IconProjectTagsName = 581,
  IconProjectTagsNodeLocale = 582,
  IconProjectTagsOss = 583,
  IconProjectTagsProject = 584,
  IconProjectTagsSkillGrpup = 585,
  IconProjectTagsSkillMap = 586,
  IconProjectTagsSpaceId = 587,
  IconProjectTagsUpdatedAt = 588,
  IconProjectUpdatedAt = 589,
  IconSpaceId = 590,
  IconSvgChildMdxBody = 591,
  IconSvgChildMdxChildren = 592,
  IconSvgChildMdxExcerpt = 593,
  IconSvgChildMdxFileAbsolutePath = 594,
  IconSvgChildMdxHeadings = 595,
  IconSvgChildMdxHtml = 596,
  IconSvgChildMdxId = 597,
  IconSvgChildMdxMdxAst = 598,
  IconSvgChildMdxRawBody = 599,
  IconSvgChildMdxSlug = 600,
  IconSvgChildMdxTableOfContents = 601,
  IconSvgChildMdxTimeToRead = 602,
  IconSvgChildren = 603,
  IconSvgChildrenMdx = 604,
  IconSvgChildrenMdxBody = 605,
  IconSvgChildrenMdxChildren = 606,
  IconSvgChildrenMdxExcerpt = 607,
  IconSvgChildrenMdxFileAbsolutePath = 608,
  IconSvgChildrenMdxHeadings = 609,
  IconSvgChildrenMdxHtml = 610,
  IconSvgChildrenMdxId = 611,
  IconSvgChildrenMdxMdxAst = 612,
  IconSvgChildrenMdxRawBody = 613,
  IconSvgChildrenMdxSlug = 614,
  IconSvgChildrenMdxTableOfContents = 615,
  IconSvgChildrenMdxTimeToRead = 616,
  IconSvgChildrenChildren = 617,
  IconSvgChildrenId = 618,
  IconSvgId = 619,
  IconSvgInternalContent = 620,
  IconSvgInternalContentDigest = 621,
  IconSvgInternalContentFilePath = 622,
  IconSvgInternalDescription = 623,
  IconSvgInternalFieldOwners = 624,
  IconSvgInternalIgnoreType = 625,
  IconSvgInternalMediaType = 626,
  IconSvgInternalOwner = 627,
  IconSvgInternalType = 628,
  IconSvgParentChildren = 629,
  IconSvgParentId = 630,
  IconSvgSvg = 631,
  IconSvgSysType = 632,
  IconSysRevision = 633,
  IconSysType = 634,
  IconUpdatedAt = 635,
  IconWhatICanDo = 636,
  IconWhatICanDoChildren = 637,
  IconWhatICanDoChildrenChildren = 638,
  IconWhatICanDoChildrenId = 639,
  IconWhatICanDoContentfulId = 640,
  IconWhatICanDoCreatedAt = 641,
  IconWhatICanDoIconChildren = 642,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 643,
  IconWhatICanDoIconContact = 644,
  IconWhatICanDoIconContentfulId = 645,
  IconWhatICanDoIconCreatedAt = 646,
  IconWhatICanDoIconHistory = 647,
  IconWhatICanDoIconId = 648,
  IconWhatICanDoIconName = 649,
  IconWhatICanDoIconNodeLocale = 650,
  IconWhatICanDoIconOss = 651,
  IconWhatICanDoIconProject = 652,
  IconWhatICanDoIconSpaceId = 653,
  IconWhatICanDoIconUpdatedAt = 654,
  IconWhatICanDoIconWhatICanDo = 655,
  IconWhatICanDoId = 656,
  IconWhatICanDoInternalContent = 657,
  IconWhatICanDoInternalContentDigest = 658,
  IconWhatICanDoInternalContentFilePath = 659,
  IconWhatICanDoInternalDescription = 660,
  IconWhatICanDoInternalFieldOwners = 661,
  IconWhatICanDoInternalIgnoreType = 662,
  IconWhatICanDoInternalMediaType = 663,
  IconWhatICanDoInternalOwner = 664,
  IconWhatICanDoInternalType = 665,
  IconWhatICanDoName = 666,
  IconWhatICanDoNodeLocale = 667,
  IconWhatICanDoParentChildren = 668,
  IconWhatICanDoParentId = 669,
  IconWhatICanDoSortKey = 670,
  IconWhatICanDoSpaceId = 671,
  IconWhatICanDoSubName = 672,
  IconWhatICanDoSysRevision = 673,
  IconWhatICanDoSysType = 674,
  IconWhatICanDoUpdatedAt = 675,
  Id = 676,
  InternalContent = 677,
  InternalContentDigest = 678,
  InternalContentFilePath = 679,
  InternalDescription = 680,
  InternalFieldOwners = 681,
  InternalIgnoreType = 682,
  InternalMediaType = 683,
  InternalOwner = 684,
  InternalType = 685,
  Name = 686,
  NodeLocale = 687,
  ParentChildren = 688,
  ParentChildrenChildren = 689,
  ParentChildrenChildrenChildren = 690,
  ParentChildrenChildrenId = 691,
  ParentChildrenId = 692,
  ParentChildrenInternalContent = 693,
  ParentChildrenInternalContentDigest = 694,
  ParentChildrenInternalContentFilePath = 695,
  ParentChildrenInternalDescription = 696,
  ParentChildrenInternalFieldOwners = 697,
  ParentChildrenInternalIgnoreType = 698,
  ParentChildrenInternalMediaType = 699,
  ParentChildrenInternalOwner = 700,
  ParentChildrenInternalType = 701,
  ParentChildrenParentChildren = 702,
  ParentChildrenParentId = 703,
  ParentId = 704,
  ParentInternalContent = 705,
  ParentInternalContentDigest = 706,
  ParentInternalContentFilePath = 707,
  ParentInternalDescription = 708,
  ParentInternalFieldOwners = 709,
  ParentInternalIgnoreType = 710,
  ParentInternalMediaType = 711,
  ParentInternalOwner = 712,
  ParentInternalType = 713,
  ParentParentChildren = 714,
  ParentParentChildrenChildren = 715,
  ParentParentChildrenId = 716,
  ParentParentId = 717,
  ParentParentInternalContent = 718,
  ParentParentInternalContentDigest = 719,
  ParentParentInternalContentFilePath = 720,
  ParentParentInternalDescription = 721,
  ParentParentInternalFieldOwners = 722,
  ParentParentInternalIgnoreType = 723,
  ParentParentInternalMediaType = 724,
  ParentParentInternalOwner = 725,
  ParentParentInternalType = 726,
  ParentParentParentChildren = 727,
  ParentParentParentId = 728,
  SortKey = 729,
  SpaceId = 730,
  SubName = 731,
  SysContentTypeSysId = 732,
  SysContentTypeSysLinkType = 733,
  SysContentTypeSysType = 734,
  SysRevision = 735,
  SysType = 736,
  UpdatedAt = 737
}

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
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactGroupConnectionGroupArgs = {
  field: ContentfulContactFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulContactGroupConnectionMaxArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactGroupConnectionMinArgs = {
  field: ContentfulContactFieldsEnum;
};


export type ContentfulContactGroupConnectionSumArgs = {
  field: ContentfulContactFieldsEnum;
};

export type ContentfulContactSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulContactFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContactSys = {
  readonly contentType: Maybe<ContentfulContactSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulContactSysContentType = {
  readonly sys: Maybe<ContentfulContactSysContentTypeSys>;
};

export type ContentfulContactSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulContactSysContentTypeSysFilterInput>;
};

export type ContentfulContactSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulContactSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulContactSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulContactSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulContentTypeConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  Description = 42,
  DisplayField = 43,
  Id = 44,
  InternalContent = 45,
  InternalContentDigest = 46,
  InternalContentFilePath = 47,
  InternalDescription = 48,
  InternalFieldOwners = 49,
  InternalIgnoreType = 50,
  InternalMediaType = 51,
  InternalOwner = 52,
  InternalType = 53,
  Name = 54,
  ParentChildren = 55,
  ParentChildrenChildren = 56,
  ParentChildrenChildrenChildren = 57,
  ParentChildrenChildrenId = 58,
  ParentChildrenId = 59,
  ParentChildrenInternalContent = 60,
  ParentChildrenInternalContentDigest = 61,
  ParentChildrenInternalContentFilePath = 62,
  ParentChildrenInternalDescription = 63,
  ParentChildrenInternalFieldOwners = 64,
  ParentChildrenInternalIgnoreType = 65,
  ParentChildrenInternalMediaType = 66,
  ParentChildrenInternalOwner = 67,
  ParentChildrenInternalType = 68,
  ParentChildrenParentChildren = 69,
  ParentChildrenParentId = 70,
  ParentId = 71,
  ParentInternalContent = 72,
  ParentInternalContentDigest = 73,
  ParentInternalContentFilePath = 74,
  ParentInternalDescription = 75,
  ParentInternalFieldOwners = 76,
  ParentInternalIgnoreType = 77,
  ParentInternalMediaType = 78,
  ParentInternalOwner = 79,
  ParentInternalType = 80,
  ParentParentChildren = 81,
  ParentParentChildrenChildren = 82,
  ParentParentChildrenId = 83,
  ParentParentId = 84,
  ParentParentInternalContent = 85,
  ParentParentInternalContentDigest = 86,
  ParentParentInternalContentFilePath = 87,
  ParentParentInternalDescription = 88,
  ParentParentInternalFieldOwners = 89,
  ParentParentInternalIgnoreType = 90,
  ParentParentInternalMediaType = 91,
  ParentParentInternalOwner = 92,
  ParentParentInternalType = 93,
  ParentParentParentChildren = 94,
  ParentParentParentId = 95,
  SysType = 96
}

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
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionGroupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulContentTypeGroupConnectionMaxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionMinArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeGroupConnectionSumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulEntryConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  Id = 43,
  InternalContent = 44,
  InternalContentDigest = 45,
  InternalContentFilePath = 46,
  InternalDescription = 47,
  InternalFieldOwners = 48,
  InternalIgnoreType = 49,
  InternalMediaType = 50,
  InternalOwner = 51,
  InternalType = 52,
  NodeLocale = 53,
  ParentChildren = 54,
  ParentChildrenChildren = 55,
  ParentChildrenChildrenChildren = 56,
  ParentChildrenChildrenId = 57,
  ParentChildrenId = 58,
  ParentChildrenInternalContent = 59,
  ParentChildrenInternalContentDigest = 60,
  ParentChildrenInternalContentFilePath = 61,
  ParentChildrenInternalDescription = 62,
  ParentChildrenInternalFieldOwners = 63,
  ParentChildrenInternalIgnoreType = 64,
  ParentChildrenInternalMediaType = 65,
  ParentChildrenInternalOwner = 66,
  ParentChildrenInternalType = 67,
  ParentChildrenParentChildren = 68,
  ParentChildrenParentId = 69,
  ParentId = 70,
  ParentInternalContent = 71,
  ParentInternalContentDigest = 72,
  ParentInternalContentFilePath = 73,
  ParentInternalDescription = 74,
  ParentInternalFieldOwners = 75,
  ParentInternalIgnoreType = 76,
  ParentInternalMediaType = 77,
  ParentInternalOwner = 78,
  ParentInternalType = 79,
  ParentParentChildren = 80,
  ParentParentChildrenChildren = 81,
  ParentParentChildrenId = 82,
  ParentParentId = 83,
  ParentParentInternalContent = 84,
  ParentParentInternalContentDigest = 85,
  ParentParentInternalContentFilePath = 86,
  ParentParentInternalDescription = 87,
  ParentParentInternalFieldOwners = 88,
  ParentParentInternalIgnoreType = 89,
  ParentParentInternalMediaType = 90,
  ParentParentInternalOwner = 91,
  ParentParentInternalType = 92,
  ParentParentParentChildren = 93,
  ParentParentParentId = 94
}

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
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionGroupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulEntryGroupConnectionMaxArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionMinArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryGroupConnectionSumArgs = {
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntrySortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulEntryFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
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
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloConnectionGroupArgs = {
  field: ContentfulHelloFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulHelloConnectionMaxArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloConnectionMinArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloConnectionSumArgs = {
  field: ContentfulHelloFieldsEnum;
};

export type ContentfulHelloEdge = {
  readonly next: Maybe<ContentfulHello>;
  readonly node: ContentfulHello;
  readonly previous: Maybe<ContentfulHello>;
};

export enum ContentfulHelloFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Href = 44,
  Id = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  Name = 55,
  NodeLocale = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  SortKey = 98,
  SpaceId = 99,
  SysContentTypeSysId = 100,
  SysContentTypeSysLinkType = 101,
  SysContentTypeSysType = 102,
  SysRevision = 103,
  SysType = 104,
  UpdatedAt = 105
}

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
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloGroupConnectionGroupArgs = {
  field: ContentfulHelloFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulHelloGroupConnectionMaxArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloGroupConnectionMinArgs = {
  field: ContentfulHelloFieldsEnum;
};


export type ContentfulHelloGroupConnectionSumArgs = {
  field: ContentfulHelloFieldsEnum;
};

export type ContentfulHelloSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulHelloFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulHelloSys = {
  readonly contentType: Maybe<ContentfulHelloSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulHelloSysContentType = {
  readonly sys: Maybe<ContentfulHelloSysContentTypeSys>;
};

export type ContentfulHelloSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulHelloSysContentTypeSysFilterInput>;
};

export type ContentfulHelloSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulHelloSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHelloSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulHelloSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryConnectionGroupArgs = {
  field: ContentfulHistoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulHistoryConnectionMaxArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryConnectionMinArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryConnectionSumArgs = {
  field: ContentfulHistoryFieldsEnum;
};

export type ContentfulHistoryEdge = {
  readonly next: Maybe<ContentfulHistory>;
  readonly node: ContentfulHistory;
  readonly previous: Maybe<ContentfulHistory>;
};

export enum ContentfulHistoryFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Date = 44,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 45,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 46,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 47,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 48,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 49,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 50,
  IconChildContentfulIconSvgTextNodeChildMdxId = 51,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 52,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 53,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 54,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 55,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 56,
  IconChildContentfulIconSvgTextNodeChildren = 57,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 58,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 59,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 60,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 61,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 62,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 63,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 64,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 65,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 66,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 67,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 68,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 69,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 70,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 71,
  IconChildContentfulIconSvgTextNodeChildrenId = 72,
  IconChildContentfulIconSvgTextNodeId = 73,
  IconChildContentfulIconSvgTextNodeInternalContent = 74,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 75,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 76,
  IconChildContentfulIconSvgTextNodeInternalDescription = 77,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 78,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 79,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 80,
  IconChildContentfulIconSvgTextNodeInternalOwner = 81,
  IconChildContentfulIconSvgTextNodeInternalType = 82,
  IconChildContentfulIconSvgTextNodeParentChildren = 83,
  IconChildContentfulIconSvgTextNodeParentId = 84,
  IconChildContentfulIconSvgTextNodeSvg = 85,
  IconChildContentfulIconSvgTextNodeSysType = 86,
  IconChildren = 87,
  IconChildrenContentfulIconSvgTextNode = 88,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 89,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 90,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 91,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 92,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 93,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 94,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 95,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 96,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 97,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 98,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 99,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 100,
  IconChildrenContentfulIconSvgTextNodeChildren = 101,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 102,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 103,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 104,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 105,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 106,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 107,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 108,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 109,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 110,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 111,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 112,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 113,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 114,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 115,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 116,
  IconChildrenContentfulIconSvgTextNodeId = 117,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 118,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 119,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 120,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 121,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 122,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 123,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 124,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 125,
  IconChildrenContentfulIconSvgTextNodeInternalType = 126,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 127,
  IconChildrenContentfulIconSvgTextNodeParentId = 128,
  IconChildrenContentfulIconSvgTextNodeSvg = 129,
  IconChildrenContentfulIconSvgTextNodeSysType = 130,
  IconChildrenChildren = 131,
  IconChildrenChildrenChildren = 132,
  IconChildrenChildrenId = 133,
  IconChildrenId = 134,
  IconChildrenInternalContent = 135,
  IconChildrenInternalContentDigest = 136,
  IconChildrenInternalContentFilePath = 137,
  IconChildrenInternalDescription = 138,
  IconChildrenInternalFieldOwners = 139,
  IconChildrenInternalIgnoreType = 140,
  IconChildrenInternalMediaType = 141,
  IconChildrenInternalOwner = 142,
  IconChildrenInternalType = 143,
  IconChildrenParentChildren = 144,
  IconChildrenParentId = 145,
  IconContact = 146,
  IconContactChildren = 147,
  IconContactChildrenChildren = 148,
  IconContactChildrenId = 149,
  IconContactContentfulId = 150,
  IconContactCreatedAt = 151,
  IconContactHref = 152,
  IconContactIconSvgDarkChildren = 153,
  IconContactIconSvgDarkContentfulId = 154,
  IconContactIconSvgDarkCreatedAt = 155,
  IconContactIconSvgDarkDescription = 156,
  IconContactIconSvgDarkFilename = 157,
  IconContactIconSvgDarkFilesize = 158,
  IconContactIconSvgDarkGatsbyImage = 159,
  IconContactIconSvgDarkGatsbyImageData = 160,
  IconContactIconSvgDarkHeight = 161,
  IconContactIconSvgDarkId = 162,
  IconContactIconSvgDarkMimeType = 163,
  IconContactIconSvgDarkNodeLocale = 164,
  IconContactIconSvgDarkPlaceholderUrl = 165,
  IconContactIconSvgDarkPublicUrl = 166,
  IconContactIconSvgDarkSize = 167,
  IconContactIconSvgDarkSpaceId = 168,
  IconContactIconSvgDarkTitle = 169,
  IconContactIconSvgDarkUpdatedAt = 170,
  IconContactIconSvgDarkUrl = 171,
  IconContactIconSvgDarkWidth = 172,
  IconContactIconSvgLightChildren = 173,
  IconContactIconSvgLightContentfulId = 174,
  IconContactIconSvgLightCreatedAt = 175,
  IconContactIconSvgLightDescription = 176,
  IconContactIconSvgLightFilename = 177,
  IconContactIconSvgLightFilesize = 178,
  IconContactIconSvgLightGatsbyImage = 179,
  IconContactIconSvgLightGatsbyImageData = 180,
  IconContactIconSvgLightHeight = 181,
  IconContactIconSvgLightId = 182,
  IconContactIconSvgLightMimeType = 183,
  IconContactIconSvgLightNodeLocale = 184,
  IconContactIconSvgLightPlaceholderUrl = 185,
  IconContactIconSvgLightPublicUrl = 186,
  IconContactIconSvgLightSize = 187,
  IconContactIconSvgLightSpaceId = 188,
  IconContactIconSvgLightTitle = 189,
  IconContactIconSvgLightUpdatedAt = 190,
  IconContactIconSvgLightUrl = 191,
  IconContactIconSvgLightWidth = 192,
  IconContactIconChildren = 193,
  IconContactIconChildrenContentfulIconSvgTextNode = 194,
  IconContactIconContact = 195,
  IconContactIconContentfulId = 196,
  IconContactIconCreatedAt = 197,
  IconContactIconHistory = 198,
  IconContactIconId = 199,
  IconContactIconName = 200,
  IconContactIconNodeLocale = 201,
  IconContactIconOss = 202,
  IconContactIconProject = 203,
  IconContactIconSpaceId = 204,
  IconContactIconUpdatedAt = 205,
  IconContactIconWhatICanDo = 206,
  IconContactId = 207,
  IconContactInternalContent = 208,
  IconContactInternalContentDigest = 209,
  IconContactInternalContentFilePath = 210,
  IconContactInternalDescription = 211,
  IconContactInternalFieldOwners = 212,
  IconContactInternalIgnoreType = 213,
  IconContactInternalMediaType = 214,
  IconContactInternalOwner = 215,
  IconContactInternalType = 216,
  IconContactName = 217,
  IconContactNodeLocale = 218,
  IconContactParentChildren = 219,
  IconContactParentId = 220,
  IconContactSortKey = 221,
  IconContactSpaceId = 222,
  IconContactSubName = 223,
  IconContactSysRevision = 224,
  IconContactSysType = 225,
  IconContactUpdatedAt = 226,
  IconContentfulId = 227,
  IconCreatedAt = 228,
  IconHistory = 229,
  IconHistoryChildren = 230,
  IconHistoryChildrenChildren = 231,
  IconHistoryChildrenId = 232,
  IconHistoryContentfulId = 233,
  IconHistoryCreatedAt = 234,
  IconHistoryDate = 235,
  IconHistoryIconChildren = 236,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 237,
  IconHistoryIconContact = 238,
  IconHistoryIconContentfulId = 239,
  IconHistoryIconCreatedAt = 240,
  IconHistoryIconHistory = 241,
  IconHistoryIconId = 242,
  IconHistoryIconName = 243,
  IconHistoryIconNodeLocale = 244,
  IconHistoryIconOss = 245,
  IconHistoryIconProject = 246,
  IconHistoryIconSpaceId = 247,
  IconHistoryIconUpdatedAt = 248,
  IconHistoryIconWhatICanDo = 249,
  IconHistoryId = 250,
  IconHistoryInternalContent = 251,
  IconHistoryInternalContentDigest = 252,
  IconHistoryInternalContentFilePath = 253,
  IconHistoryInternalDescription = 254,
  IconHistoryInternalFieldOwners = 255,
  IconHistoryInternalIgnoreType = 256,
  IconHistoryInternalMediaType = 257,
  IconHistoryInternalOwner = 258,
  IconHistoryInternalType = 259,
  IconHistoryName = 260,
  IconHistoryNodeLocale = 261,
  IconHistoryParentChildren = 262,
  IconHistoryParentId = 263,
  IconHistorySpaceId = 264,
  IconHistorySubName = 265,
  IconHistorySysRevision = 266,
  IconHistorySysType = 267,
  IconHistoryUpdatedAt = 268,
  IconId = 269,
  IconInternalContent = 270,
  IconInternalContentDigest = 271,
  IconInternalContentFilePath = 272,
  IconInternalDescription = 273,
  IconInternalFieldOwners = 274,
  IconInternalIgnoreType = 275,
  IconInternalMediaType = 276,
  IconInternalOwner = 277,
  IconInternalType = 278,
  IconName = 279,
  IconNodeLocale = 280,
  IconOss = 281,
  IconOssChildContentfulOssDetailTextNodeChildren = 282,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 283,
  IconOssChildContentfulOssDetailTextNodeDetail = 284,
  IconOssChildContentfulOssDetailTextNodeId = 285,
  IconOssChildren = 286,
  IconOssChildrenContentfulOssDetailTextNode = 287,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 288,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 289,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 290,
  IconOssChildrenContentfulOssDetailTextNodeId = 291,
  IconOssChildrenChildren = 292,
  IconOssChildrenId = 293,
  IconOssContentfulId = 294,
  IconOssCreatedAt = 295,
  IconOssDetailChildren = 296,
  IconOssDetailChildrenMdx = 297,
  IconOssDetailDetail = 298,
  IconOssDetailId = 299,
  IconOssHref = 300,
  IconOssIconChildren = 301,
  IconOssIconChildrenContentfulIconSvgTextNode = 302,
  IconOssIconContact = 303,
  IconOssIconContentfulId = 304,
  IconOssIconCreatedAt = 305,
  IconOssIconHistory = 306,
  IconOssIconId = 307,
  IconOssIconName = 308,
  IconOssIconNodeLocale = 309,
  IconOssIconOss = 310,
  IconOssIconProject = 311,
  IconOssIconSpaceId = 312,
  IconOssIconUpdatedAt = 313,
  IconOssIconWhatICanDo = 314,
  IconOssId = 315,
  IconOssImageChildren = 316,
  IconOssImageContentfulId = 317,
  IconOssImageCreatedAt = 318,
  IconOssImageDescription = 319,
  IconOssImageFilename = 320,
  IconOssImageFilesize = 321,
  IconOssImageGatsbyImage = 322,
  IconOssImageGatsbyImageData = 323,
  IconOssImageHeight = 324,
  IconOssImageId = 325,
  IconOssImageMimeType = 326,
  IconOssImageNodeLocale = 327,
  IconOssImagePlaceholderUrl = 328,
  IconOssImagePublicUrl = 329,
  IconOssImageSize = 330,
  IconOssImageSpaceId = 331,
  IconOssImageTitle = 332,
  IconOssImageUpdatedAt = 333,
  IconOssImageUrl = 334,
  IconOssImageWidth = 335,
  IconOssInternalContent = 336,
  IconOssInternalContentDigest = 337,
  IconOssInternalContentFilePath = 338,
  IconOssInternalDescription = 339,
  IconOssInternalFieldOwners = 340,
  IconOssInternalIgnoreType = 341,
  IconOssInternalMediaType = 342,
  IconOssInternalOwner = 343,
  IconOssInternalType = 344,
  IconOssName = 345,
  IconOssNodeLocale = 346,
  IconOssParentChildren = 347,
  IconOssParentId = 348,
  IconOssSpaceId = 349,
  IconOssStartDate = 350,
  IconOssSubName = 351,
  IconOssSysRevision = 352,
  IconOssSysType = 353,
  IconOssTags = 354,
  IconOssTagsBlogPost = 355,
  IconOssTagsChildren = 356,
  IconOssTagsContentfulId = 357,
  IconOssTagsCreatedAt = 358,
  IconOssTagsId = 359,
  IconOssTagsLevel = 360,
  IconOssTagsName = 361,
  IconOssTagsNodeLocale = 362,
  IconOssTagsOss = 363,
  IconOssTagsProject = 364,
  IconOssTagsSkillGrpup = 365,
  IconOssTagsSkillMap = 366,
  IconOssTagsSpaceId = 367,
  IconOssTagsUpdatedAt = 368,
  IconOssUpdatedAt = 369,
  IconParentChildren = 370,
  IconParentChildrenChildren = 371,
  IconParentChildrenId = 372,
  IconParentId = 373,
  IconParentInternalContent = 374,
  IconParentInternalContentDigest = 375,
  IconParentInternalContentFilePath = 376,
  IconParentInternalDescription = 377,
  IconParentInternalFieldOwners = 378,
  IconParentInternalIgnoreType = 379,
  IconParentInternalMediaType = 380,
  IconParentInternalOwner = 381,
  IconParentInternalType = 382,
  IconParentParentChildren = 383,
  IconParentParentId = 384,
  IconProject = 385,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 386,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 387,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 388,
  IconProjectChildContentfulProjectDetailTextNodeId = 389,
  IconProjectChildren = 390,
  IconProjectChildrenContentfulProjectDetailTextNode = 391,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 392,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 393,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 394,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 395,
  IconProjectChildrenChildren = 396,
  IconProjectChildrenId = 397,
  IconProjectContentfulId = 398,
  IconProjectCreatedAt = 399,
  IconProjectDetailChildren = 400,
  IconProjectDetailChildrenMdx = 401,
  IconProjectDetailDetail = 402,
  IconProjectDetailId = 403,
  IconProjectEndDate = 404,
  IconProjectIconChildren = 405,
  IconProjectIconChildrenContentfulIconSvgTextNode = 406,
  IconProjectIconContact = 407,
  IconProjectIconContentfulId = 408,
  IconProjectIconCreatedAt = 409,
  IconProjectIconHistory = 410,
  IconProjectIconId = 411,
  IconProjectIconName = 412,
  IconProjectIconNodeLocale = 413,
  IconProjectIconOss = 414,
  IconProjectIconProject = 415,
  IconProjectIconSpaceId = 416,
  IconProjectIconUpdatedAt = 417,
  IconProjectIconWhatICanDo = 418,
  IconProjectId = 419,
  IconProjectInternalContent = 420,
  IconProjectInternalContentDigest = 421,
  IconProjectInternalContentFilePath = 422,
  IconProjectInternalDescription = 423,
  IconProjectInternalFieldOwners = 424,
  IconProjectInternalIgnoreType = 425,
  IconProjectInternalMediaType = 426,
  IconProjectInternalOwner = 427,
  IconProjectInternalType = 428,
  IconProjectName = 429,
  IconProjectNodeLocale = 430,
  IconProjectParentChildren = 431,
  IconProjectParentId = 432,
  IconProjectSpaceId = 433,
  IconProjectStartDate = 434,
  IconProjectSubName = 435,
  IconProjectSysRevision = 436,
  IconProjectSysType = 437,
  IconProjectTags = 438,
  IconProjectTagsBlogPost = 439,
  IconProjectTagsChildren = 440,
  IconProjectTagsContentfulId = 441,
  IconProjectTagsCreatedAt = 442,
  IconProjectTagsId = 443,
  IconProjectTagsLevel = 444,
  IconProjectTagsName = 445,
  IconProjectTagsNodeLocale = 446,
  IconProjectTagsOss = 447,
  IconProjectTagsProject = 448,
  IconProjectTagsSkillGrpup = 449,
  IconProjectTagsSkillMap = 450,
  IconProjectTagsSpaceId = 451,
  IconProjectTagsUpdatedAt = 452,
  IconProjectUpdatedAt = 453,
  IconSpaceId = 454,
  IconSvgChildMdxBody = 455,
  IconSvgChildMdxChildren = 456,
  IconSvgChildMdxExcerpt = 457,
  IconSvgChildMdxFileAbsolutePath = 458,
  IconSvgChildMdxHeadings = 459,
  IconSvgChildMdxHtml = 460,
  IconSvgChildMdxId = 461,
  IconSvgChildMdxMdxAst = 462,
  IconSvgChildMdxRawBody = 463,
  IconSvgChildMdxSlug = 464,
  IconSvgChildMdxTableOfContents = 465,
  IconSvgChildMdxTimeToRead = 466,
  IconSvgChildren = 467,
  IconSvgChildrenMdx = 468,
  IconSvgChildrenMdxBody = 469,
  IconSvgChildrenMdxChildren = 470,
  IconSvgChildrenMdxExcerpt = 471,
  IconSvgChildrenMdxFileAbsolutePath = 472,
  IconSvgChildrenMdxHeadings = 473,
  IconSvgChildrenMdxHtml = 474,
  IconSvgChildrenMdxId = 475,
  IconSvgChildrenMdxMdxAst = 476,
  IconSvgChildrenMdxRawBody = 477,
  IconSvgChildrenMdxSlug = 478,
  IconSvgChildrenMdxTableOfContents = 479,
  IconSvgChildrenMdxTimeToRead = 480,
  IconSvgChildrenChildren = 481,
  IconSvgChildrenId = 482,
  IconSvgId = 483,
  IconSvgInternalContent = 484,
  IconSvgInternalContentDigest = 485,
  IconSvgInternalContentFilePath = 486,
  IconSvgInternalDescription = 487,
  IconSvgInternalFieldOwners = 488,
  IconSvgInternalIgnoreType = 489,
  IconSvgInternalMediaType = 490,
  IconSvgInternalOwner = 491,
  IconSvgInternalType = 492,
  IconSvgParentChildren = 493,
  IconSvgParentId = 494,
  IconSvgSvg = 495,
  IconSvgSysType = 496,
  IconSysRevision = 497,
  IconSysType = 498,
  IconUpdatedAt = 499,
  IconWhatICanDo = 500,
  IconWhatICanDoChildren = 501,
  IconWhatICanDoChildrenChildren = 502,
  IconWhatICanDoChildrenId = 503,
  IconWhatICanDoContentfulId = 504,
  IconWhatICanDoCreatedAt = 505,
  IconWhatICanDoIconChildren = 506,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 507,
  IconWhatICanDoIconContact = 508,
  IconWhatICanDoIconContentfulId = 509,
  IconWhatICanDoIconCreatedAt = 510,
  IconWhatICanDoIconHistory = 511,
  IconWhatICanDoIconId = 512,
  IconWhatICanDoIconName = 513,
  IconWhatICanDoIconNodeLocale = 514,
  IconWhatICanDoIconOss = 515,
  IconWhatICanDoIconProject = 516,
  IconWhatICanDoIconSpaceId = 517,
  IconWhatICanDoIconUpdatedAt = 518,
  IconWhatICanDoIconWhatICanDo = 519,
  IconWhatICanDoId = 520,
  IconWhatICanDoInternalContent = 521,
  IconWhatICanDoInternalContentDigest = 522,
  IconWhatICanDoInternalContentFilePath = 523,
  IconWhatICanDoInternalDescription = 524,
  IconWhatICanDoInternalFieldOwners = 525,
  IconWhatICanDoInternalIgnoreType = 526,
  IconWhatICanDoInternalMediaType = 527,
  IconWhatICanDoInternalOwner = 528,
  IconWhatICanDoInternalType = 529,
  IconWhatICanDoName = 530,
  IconWhatICanDoNodeLocale = 531,
  IconWhatICanDoParentChildren = 532,
  IconWhatICanDoParentId = 533,
  IconWhatICanDoSortKey = 534,
  IconWhatICanDoSpaceId = 535,
  IconWhatICanDoSubName = 536,
  IconWhatICanDoSysRevision = 537,
  IconWhatICanDoSysType = 538,
  IconWhatICanDoUpdatedAt = 539,
  Id = 540,
  InternalContent = 541,
  InternalContentDigest = 542,
  InternalContentFilePath = 543,
  InternalDescription = 544,
  InternalFieldOwners = 545,
  InternalIgnoreType = 546,
  InternalMediaType = 547,
  InternalOwner = 548,
  InternalType = 549,
  Name = 550,
  NodeLocale = 551,
  ParentChildren = 552,
  ParentChildrenChildren = 553,
  ParentChildrenChildrenChildren = 554,
  ParentChildrenChildrenId = 555,
  ParentChildrenId = 556,
  ParentChildrenInternalContent = 557,
  ParentChildrenInternalContentDigest = 558,
  ParentChildrenInternalContentFilePath = 559,
  ParentChildrenInternalDescription = 560,
  ParentChildrenInternalFieldOwners = 561,
  ParentChildrenInternalIgnoreType = 562,
  ParentChildrenInternalMediaType = 563,
  ParentChildrenInternalOwner = 564,
  ParentChildrenInternalType = 565,
  ParentChildrenParentChildren = 566,
  ParentChildrenParentId = 567,
  ParentId = 568,
  ParentInternalContent = 569,
  ParentInternalContentDigest = 570,
  ParentInternalContentFilePath = 571,
  ParentInternalDescription = 572,
  ParentInternalFieldOwners = 573,
  ParentInternalIgnoreType = 574,
  ParentInternalMediaType = 575,
  ParentInternalOwner = 576,
  ParentInternalType = 577,
  ParentParentChildren = 578,
  ParentParentChildrenChildren = 579,
  ParentParentChildrenId = 580,
  ParentParentId = 581,
  ParentParentInternalContent = 582,
  ParentParentInternalContentDigest = 583,
  ParentParentInternalContentFilePath = 584,
  ParentParentInternalDescription = 585,
  ParentParentInternalFieldOwners = 586,
  ParentParentInternalIgnoreType = 587,
  ParentParentInternalMediaType = 588,
  ParentParentInternalOwner = 589,
  ParentParentInternalType = 590,
  ParentParentParentChildren = 591,
  ParentParentParentId = 592,
  SpaceId = 593,
  SubName = 594,
  SysContentTypeSysId = 595,
  SysContentTypeSysLinkType = 596,
  SysContentTypeSysType = 597,
  SysRevision = 598,
  SysType = 599,
  UpdatedAt = 600
}

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
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryGroupConnectionGroupArgs = {
  field: ContentfulHistoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulHistoryGroupConnectionMaxArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryGroupConnectionMinArgs = {
  field: ContentfulHistoryFieldsEnum;
};


export type ContentfulHistoryGroupConnectionSumArgs = {
  field: ContentfulHistoryFieldsEnum;
};

export type ContentfulHistorySortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulHistoryFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulHistorySys = {
  readonly contentType: Maybe<ContentfulHistorySysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulHistorySysContentType = {
  readonly sys: Maybe<ContentfulHistorySysContentTypeSys>;
};

export type ContentfulHistorySysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulHistorySysContentTypeSysFilterInput>;
};

export type ContentfulHistorySysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulHistorySysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulHistorySysFilterInput = {
  readonly contentType: InputMaybe<ContentfulHistorySysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconConnectionGroupArgs = {
  field: ContentfulIconFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulIconConnectionMaxArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconConnectionMinArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconConnectionSumArgs = {
  field: ContentfulIconFieldsEnum;
};

export type ContentfulIconEdge = {
  readonly next: Maybe<ContentfulIcon>;
  readonly node: ContentfulIcon;
  readonly previous: Maybe<ContentfulIcon>;
};

export enum ContentfulIconFieldsEnum {
  ChildContentfulIconSvgTextNodeChildMdxBody = 0,
  ChildContentfulIconSvgTextNodeChildMdxChildren = 1,
  ChildContentfulIconSvgTextNodeChildMdxChildrenChildren = 2,
  ChildContentfulIconSvgTextNodeChildMdxChildrenId = 3,
  ChildContentfulIconSvgTextNodeChildMdxExcerpt = 4,
  ChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 5,
  ChildContentfulIconSvgTextNodeChildMdxFrontmatterTitle = 6,
  ChildContentfulIconSvgTextNodeChildMdxHeadings = 7,
  ChildContentfulIconSvgTextNodeChildMdxHeadingsDepth = 8,
  ChildContentfulIconSvgTextNodeChildMdxHeadingsValue = 9,
  ChildContentfulIconSvgTextNodeChildMdxHtml = 10,
  ChildContentfulIconSvgTextNodeChildMdxId = 11,
  ChildContentfulIconSvgTextNodeChildMdxInternalContent = 12,
  ChildContentfulIconSvgTextNodeChildMdxInternalContentDigest = 13,
  ChildContentfulIconSvgTextNodeChildMdxInternalContentFilePath = 14,
  ChildContentfulIconSvgTextNodeChildMdxInternalDescription = 15,
  ChildContentfulIconSvgTextNodeChildMdxInternalFieldOwners = 16,
  ChildContentfulIconSvgTextNodeChildMdxInternalIgnoreType = 17,
  ChildContentfulIconSvgTextNodeChildMdxInternalMediaType = 18,
  ChildContentfulIconSvgTextNodeChildMdxInternalOwner = 19,
  ChildContentfulIconSvgTextNodeChildMdxInternalType = 20,
  ChildContentfulIconSvgTextNodeChildMdxMdxAst = 21,
  ChildContentfulIconSvgTextNodeChildMdxParentChildren = 22,
  ChildContentfulIconSvgTextNodeChildMdxParentId = 23,
  ChildContentfulIconSvgTextNodeChildMdxRawBody = 24,
  ChildContentfulIconSvgTextNodeChildMdxSlug = 25,
  ChildContentfulIconSvgTextNodeChildMdxTableOfContents = 26,
  ChildContentfulIconSvgTextNodeChildMdxTimeToRead = 27,
  ChildContentfulIconSvgTextNodeChildMdxWordCountParagraphs = 28,
  ChildContentfulIconSvgTextNodeChildMdxWordCountSentences = 29,
  ChildContentfulIconSvgTextNodeChildMdxWordCountWords = 30,
  ChildContentfulIconSvgTextNodeChildren = 31,
  ChildContentfulIconSvgTextNodeChildrenMdx = 32,
  ChildContentfulIconSvgTextNodeChildrenMdxBody = 33,
  ChildContentfulIconSvgTextNodeChildrenMdxChildren = 34,
  ChildContentfulIconSvgTextNodeChildrenMdxChildrenChildren = 35,
  ChildContentfulIconSvgTextNodeChildrenMdxChildrenId = 36,
  ChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 37,
  ChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 38,
  ChildContentfulIconSvgTextNodeChildrenMdxFrontmatterTitle = 39,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadings = 40,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadingsDepth = 41,
  ChildContentfulIconSvgTextNodeChildrenMdxHeadingsValue = 42,
  ChildContentfulIconSvgTextNodeChildrenMdxHtml = 43,
  ChildContentfulIconSvgTextNodeChildrenMdxId = 44,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalContent = 45,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalContentDigest = 46,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalContentFilePath = 47,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalDescription = 48,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalFieldOwners = 49,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalIgnoreType = 50,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalMediaType = 51,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalOwner = 52,
  ChildContentfulIconSvgTextNodeChildrenMdxInternalType = 53,
  ChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 54,
  ChildContentfulIconSvgTextNodeChildrenMdxParentChildren = 55,
  ChildContentfulIconSvgTextNodeChildrenMdxParentId = 56,
  ChildContentfulIconSvgTextNodeChildrenMdxRawBody = 57,
  ChildContentfulIconSvgTextNodeChildrenMdxSlug = 58,
  ChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 59,
  ChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 60,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountParagraphs = 61,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountSentences = 62,
  ChildContentfulIconSvgTextNodeChildrenMdxWordCountWords = 63,
  ChildContentfulIconSvgTextNodeChildrenChildren = 64,
  ChildContentfulIconSvgTextNodeChildrenChildrenChildren = 65,
  ChildContentfulIconSvgTextNodeChildrenChildrenId = 66,
  ChildContentfulIconSvgTextNodeChildrenId = 67,
  ChildContentfulIconSvgTextNodeChildrenInternalContent = 68,
  ChildContentfulIconSvgTextNodeChildrenInternalContentDigest = 69,
  ChildContentfulIconSvgTextNodeChildrenInternalContentFilePath = 70,
  ChildContentfulIconSvgTextNodeChildrenInternalDescription = 71,
  ChildContentfulIconSvgTextNodeChildrenInternalFieldOwners = 72,
  ChildContentfulIconSvgTextNodeChildrenInternalIgnoreType = 73,
  ChildContentfulIconSvgTextNodeChildrenInternalMediaType = 74,
  ChildContentfulIconSvgTextNodeChildrenInternalOwner = 75,
  ChildContentfulIconSvgTextNodeChildrenInternalType = 76,
  ChildContentfulIconSvgTextNodeChildrenParentChildren = 77,
  ChildContentfulIconSvgTextNodeChildrenParentId = 78,
  ChildContentfulIconSvgTextNodeId = 79,
  ChildContentfulIconSvgTextNodeInternalContent = 80,
  ChildContentfulIconSvgTextNodeInternalContentDigest = 81,
  ChildContentfulIconSvgTextNodeInternalContentFilePath = 82,
  ChildContentfulIconSvgTextNodeInternalDescription = 83,
  ChildContentfulIconSvgTextNodeInternalFieldOwners = 84,
  ChildContentfulIconSvgTextNodeInternalIgnoreType = 85,
  ChildContentfulIconSvgTextNodeInternalMediaType = 86,
  ChildContentfulIconSvgTextNodeInternalOwner = 87,
  ChildContentfulIconSvgTextNodeInternalType = 88,
  ChildContentfulIconSvgTextNodeParentChildren = 89,
  ChildContentfulIconSvgTextNodeParentChildrenChildren = 90,
  ChildContentfulIconSvgTextNodeParentChildrenId = 91,
  ChildContentfulIconSvgTextNodeParentId = 92,
  ChildContentfulIconSvgTextNodeParentInternalContent = 93,
  ChildContentfulIconSvgTextNodeParentInternalContentDigest = 94,
  ChildContentfulIconSvgTextNodeParentInternalContentFilePath = 95,
  ChildContentfulIconSvgTextNodeParentInternalDescription = 96,
  ChildContentfulIconSvgTextNodeParentInternalFieldOwners = 97,
  ChildContentfulIconSvgTextNodeParentInternalIgnoreType = 98,
  ChildContentfulIconSvgTextNodeParentInternalMediaType = 99,
  ChildContentfulIconSvgTextNodeParentInternalOwner = 100,
  ChildContentfulIconSvgTextNodeParentInternalType = 101,
  ChildContentfulIconSvgTextNodeParentParentChildren = 102,
  ChildContentfulIconSvgTextNodeParentParentId = 103,
  ChildContentfulIconSvgTextNodeSvg = 104,
  ChildContentfulIconSvgTextNodeSysType = 105,
  Children = 106,
  ChildrenContentfulIconSvgTextNode = 107,
  ChildrenContentfulIconSvgTextNodeChildMdxBody = 108,
  ChildrenContentfulIconSvgTextNodeChildMdxChildren = 109,
  ChildrenContentfulIconSvgTextNodeChildMdxChildrenChildren = 110,
  ChildrenContentfulIconSvgTextNodeChildMdxChildrenId = 111,
  ChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 112,
  ChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 113,
  ChildrenContentfulIconSvgTextNodeChildMdxFrontmatterTitle = 114,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadings = 115,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadingsDepth = 116,
  ChildrenContentfulIconSvgTextNodeChildMdxHeadingsValue = 117,
  ChildrenContentfulIconSvgTextNodeChildMdxHtml = 118,
  ChildrenContentfulIconSvgTextNodeChildMdxId = 119,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalContent = 120,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalContentDigest = 121,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalContentFilePath = 122,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalDescription = 123,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalFieldOwners = 124,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalIgnoreType = 125,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalMediaType = 126,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalOwner = 127,
  ChildrenContentfulIconSvgTextNodeChildMdxInternalType = 128,
  ChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 129,
  ChildrenContentfulIconSvgTextNodeChildMdxParentChildren = 130,
  ChildrenContentfulIconSvgTextNodeChildMdxParentId = 131,
  ChildrenContentfulIconSvgTextNodeChildMdxRawBody = 132,
  ChildrenContentfulIconSvgTextNodeChildMdxSlug = 133,
  ChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 134,
  ChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 135,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountParagraphs = 136,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountSentences = 137,
  ChildrenContentfulIconSvgTextNodeChildMdxWordCountWords = 138,
  ChildrenContentfulIconSvgTextNodeChildren = 139,
  ChildrenContentfulIconSvgTextNodeChildrenMdx = 140,
  ChildrenContentfulIconSvgTextNodeChildrenMdxBody = 141,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 142,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildrenChildren = 143,
  ChildrenContentfulIconSvgTextNodeChildrenMdxChildrenId = 144,
  ChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 145,
  ChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 146,
  ChildrenContentfulIconSvgTextNodeChildrenMdxFrontmatterTitle = 147,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 148,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadingsDepth = 149,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHeadingsValue = 150,
  ChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 151,
  ChildrenContentfulIconSvgTextNodeChildrenMdxId = 152,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalContent = 153,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalContentDigest = 154,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalContentFilePath = 155,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalDescription = 156,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalFieldOwners = 157,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalIgnoreType = 158,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalMediaType = 159,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalOwner = 160,
  ChildrenContentfulIconSvgTextNodeChildrenMdxInternalType = 161,
  ChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 162,
  ChildrenContentfulIconSvgTextNodeChildrenMdxParentChildren = 163,
  ChildrenContentfulIconSvgTextNodeChildrenMdxParentId = 164,
  ChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 165,
  ChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 166,
  ChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 167,
  ChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 168,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountParagraphs = 169,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountSentences = 170,
  ChildrenContentfulIconSvgTextNodeChildrenMdxWordCountWords = 171,
  ChildrenContentfulIconSvgTextNodeChildrenChildren = 172,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenChildren = 173,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenId = 174,
  ChildrenContentfulIconSvgTextNodeChildrenId = 175,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContent = 176,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContentDigest = 177,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContentFilePath = 178,
  ChildrenContentfulIconSvgTextNodeChildrenInternalDescription = 179,
  ChildrenContentfulIconSvgTextNodeChildrenInternalFieldOwners = 180,
  ChildrenContentfulIconSvgTextNodeChildrenInternalIgnoreType = 181,
  ChildrenContentfulIconSvgTextNodeChildrenInternalMediaType = 182,
  ChildrenContentfulIconSvgTextNodeChildrenInternalOwner = 183,
  ChildrenContentfulIconSvgTextNodeChildrenInternalType = 184,
  ChildrenContentfulIconSvgTextNodeChildrenParentChildren = 185,
  ChildrenContentfulIconSvgTextNodeChildrenParentId = 186,
  ChildrenContentfulIconSvgTextNodeId = 187,
  ChildrenContentfulIconSvgTextNodeInternalContent = 188,
  ChildrenContentfulIconSvgTextNodeInternalContentDigest = 189,
  ChildrenContentfulIconSvgTextNodeInternalContentFilePath = 190,
  ChildrenContentfulIconSvgTextNodeInternalDescription = 191,
  ChildrenContentfulIconSvgTextNodeInternalFieldOwners = 192,
  ChildrenContentfulIconSvgTextNodeInternalIgnoreType = 193,
  ChildrenContentfulIconSvgTextNodeInternalMediaType = 194,
  ChildrenContentfulIconSvgTextNodeInternalOwner = 195,
  ChildrenContentfulIconSvgTextNodeInternalType = 196,
  ChildrenContentfulIconSvgTextNodeParentChildren = 197,
  ChildrenContentfulIconSvgTextNodeParentChildrenChildren = 198,
  ChildrenContentfulIconSvgTextNodeParentChildrenId = 199,
  ChildrenContentfulIconSvgTextNodeParentId = 200,
  ChildrenContentfulIconSvgTextNodeParentInternalContent = 201,
  ChildrenContentfulIconSvgTextNodeParentInternalContentDigest = 202,
  ChildrenContentfulIconSvgTextNodeParentInternalContentFilePath = 203,
  ChildrenContentfulIconSvgTextNodeParentInternalDescription = 204,
  ChildrenContentfulIconSvgTextNodeParentInternalFieldOwners = 205,
  ChildrenContentfulIconSvgTextNodeParentInternalIgnoreType = 206,
  ChildrenContentfulIconSvgTextNodeParentInternalMediaType = 207,
  ChildrenContentfulIconSvgTextNodeParentInternalOwner = 208,
  ChildrenContentfulIconSvgTextNodeParentInternalType = 209,
  ChildrenContentfulIconSvgTextNodeParentParentChildren = 210,
  ChildrenContentfulIconSvgTextNodeParentParentId = 211,
  ChildrenContentfulIconSvgTextNodeSvg = 212,
  ChildrenContentfulIconSvgTextNodeSysType = 213,
  ChildrenChildren = 214,
  ChildrenChildrenChildren = 215,
  ChildrenChildrenChildrenChildren = 216,
  ChildrenChildrenChildrenId = 217,
  ChildrenChildrenId = 218,
  ChildrenChildrenInternalContent = 219,
  ChildrenChildrenInternalContentDigest = 220,
  ChildrenChildrenInternalContentFilePath = 221,
  ChildrenChildrenInternalDescription = 222,
  ChildrenChildrenInternalFieldOwners = 223,
  ChildrenChildrenInternalIgnoreType = 224,
  ChildrenChildrenInternalMediaType = 225,
  ChildrenChildrenInternalOwner = 226,
  ChildrenChildrenInternalType = 227,
  ChildrenChildrenParentChildren = 228,
  ChildrenChildrenParentId = 229,
  ChildrenId = 230,
  ChildrenInternalContent = 231,
  ChildrenInternalContentDigest = 232,
  ChildrenInternalContentFilePath = 233,
  ChildrenInternalDescription = 234,
  ChildrenInternalFieldOwners = 235,
  ChildrenInternalIgnoreType = 236,
  ChildrenInternalMediaType = 237,
  ChildrenInternalOwner = 238,
  ChildrenInternalType = 239,
  ChildrenParentChildren = 240,
  ChildrenParentChildrenChildren = 241,
  ChildrenParentChildrenId = 242,
  ChildrenParentId = 243,
  ChildrenParentInternalContent = 244,
  ChildrenParentInternalContentDigest = 245,
  ChildrenParentInternalContentFilePath = 246,
  ChildrenParentInternalDescription = 247,
  ChildrenParentInternalFieldOwners = 248,
  ChildrenParentInternalIgnoreType = 249,
  ChildrenParentInternalMediaType = 250,
  ChildrenParentInternalOwner = 251,
  ChildrenParentInternalType = 252,
  ChildrenParentParentChildren = 253,
  ChildrenParentParentId = 254,
  Contact = 255,
  ContactChildren = 256,
  ContactChildrenChildren = 257,
  ContactChildrenChildrenChildren = 258,
  ContactChildrenChildrenId = 259,
  ContactChildrenId = 260,
  ContactChildrenInternalContent = 261,
  ContactChildrenInternalContentDigest = 262,
  ContactChildrenInternalContentFilePath = 263,
  ContactChildrenInternalDescription = 264,
  ContactChildrenInternalFieldOwners = 265,
  ContactChildrenInternalIgnoreType = 266,
  ContactChildrenInternalMediaType = 267,
  ContactChildrenInternalOwner = 268,
  ContactChildrenInternalType = 269,
  ContactChildrenParentChildren = 270,
  ContactChildrenParentId = 271,
  ContactContentfulId = 272,
  ContactCreatedAt = 273,
  ContactHref = 274,
  ContactIconSvgDarkChildren = 275,
  ContactIconSvgDarkChildrenChildren = 276,
  ContactIconSvgDarkChildrenId = 277,
  ContactIconSvgDarkContentfulId = 278,
  ContactIconSvgDarkCreatedAt = 279,
  ContactIconSvgDarkDescription = 280,
  ContactIconSvgDarkFileContentType = 281,
  ContactIconSvgDarkFileFileName = 282,
  ContactIconSvgDarkFileUrl = 283,
  ContactIconSvgDarkFilename = 284,
  ContactIconSvgDarkFilesize = 285,
  ContactIconSvgDarkGatsbyImage = 286,
  ContactIconSvgDarkGatsbyImageData = 287,
  ContactIconSvgDarkHeight = 288,
  ContactIconSvgDarkId = 289,
  ContactIconSvgDarkInternalContent = 290,
  ContactIconSvgDarkInternalContentDigest = 291,
  ContactIconSvgDarkInternalContentFilePath = 292,
  ContactIconSvgDarkInternalDescription = 293,
  ContactIconSvgDarkInternalFieldOwners = 294,
  ContactIconSvgDarkInternalIgnoreType = 295,
  ContactIconSvgDarkInternalMediaType = 296,
  ContactIconSvgDarkInternalOwner = 297,
  ContactIconSvgDarkInternalType = 298,
  ContactIconSvgDarkMimeType = 299,
  ContactIconSvgDarkNodeLocale = 300,
  ContactIconSvgDarkParentChildren = 301,
  ContactIconSvgDarkParentId = 302,
  ContactIconSvgDarkPlaceholderUrl = 303,
  ContactIconSvgDarkPublicUrl = 304,
  ContactIconSvgDarkResizeHeight = 305,
  ContactIconSvgDarkResizeSrc = 306,
  ContactIconSvgDarkResizeWidth = 307,
  ContactIconSvgDarkSize = 308,
  ContactIconSvgDarkSpaceId = 309,
  ContactIconSvgDarkSysRevision = 310,
  ContactIconSvgDarkSysType = 311,
  ContactIconSvgDarkTitle = 312,
  ContactIconSvgDarkUpdatedAt = 313,
  ContactIconSvgDarkUrl = 314,
  ContactIconSvgDarkWidth = 315,
  ContactIconSvgLightChildren = 316,
  ContactIconSvgLightChildrenChildren = 317,
  ContactIconSvgLightChildrenId = 318,
  ContactIconSvgLightContentfulId = 319,
  ContactIconSvgLightCreatedAt = 320,
  ContactIconSvgLightDescription = 321,
  ContactIconSvgLightFileContentType = 322,
  ContactIconSvgLightFileFileName = 323,
  ContactIconSvgLightFileUrl = 324,
  ContactIconSvgLightFilename = 325,
  ContactIconSvgLightFilesize = 326,
  ContactIconSvgLightGatsbyImage = 327,
  ContactIconSvgLightGatsbyImageData = 328,
  ContactIconSvgLightHeight = 329,
  ContactIconSvgLightId = 330,
  ContactIconSvgLightInternalContent = 331,
  ContactIconSvgLightInternalContentDigest = 332,
  ContactIconSvgLightInternalContentFilePath = 333,
  ContactIconSvgLightInternalDescription = 334,
  ContactIconSvgLightInternalFieldOwners = 335,
  ContactIconSvgLightInternalIgnoreType = 336,
  ContactIconSvgLightInternalMediaType = 337,
  ContactIconSvgLightInternalOwner = 338,
  ContactIconSvgLightInternalType = 339,
  ContactIconSvgLightMimeType = 340,
  ContactIconSvgLightNodeLocale = 341,
  ContactIconSvgLightParentChildren = 342,
  ContactIconSvgLightParentId = 343,
  ContactIconSvgLightPlaceholderUrl = 344,
  ContactIconSvgLightPublicUrl = 345,
  ContactIconSvgLightResizeHeight = 346,
  ContactIconSvgLightResizeSrc = 347,
  ContactIconSvgLightResizeWidth = 348,
  ContactIconSvgLightSize = 349,
  ContactIconSvgLightSpaceId = 350,
  ContactIconSvgLightSysRevision = 351,
  ContactIconSvgLightSysType = 352,
  ContactIconSvgLightTitle = 353,
  ContactIconSvgLightUpdatedAt = 354,
  ContactIconSvgLightUrl = 355,
  ContactIconSvgLightWidth = 356,
  ContactIconChildContentfulIconSvgTextNodeChildren = 357,
  ContactIconChildContentfulIconSvgTextNodeChildrenMdx = 358,
  ContactIconChildContentfulIconSvgTextNodeId = 359,
  ContactIconChildContentfulIconSvgTextNodeSvg = 360,
  ContactIconChildren = 361,
  ContactIconChildrenContentfulIconSvgTextNode = 362,
  ContactIconChildrenContentfulIconSvgTextNodeChildren = 363,
  ContactIconChildrenContentfulIconSvgTextNodeChildrenMdx = 364,
  ContactIconChildrenContentfulIconSvgTextNodeId = 365,
  ContactIconChildrenContentfulIconSvgTextNodeSvg = 366,
  ContactIconChildrenChildren = 367,
  ContactIconChildrenId = 368,
  ContactIconContact = 369,
  ContactIconContactChildren = 370,
  ContactIconContactContentfulId = 371,
  ContactIconContactCreatedAt = 372,
  ContactIconContactHref = 373,
  ContactIconContactId = 374,
  ContactIconContactName = 375,
  ContactIconContactNodeLocale = 376,
  ContactIconContactSortKey = 377,
  ContactIconContactSpaceId = 378,
  ContactIconContactSubName = 379,
  ContactIconContactUpdatedAt = 380,
  ContactIconContentfulId = 381,
  ContactIconCreatedAt = 382,
  ContactIconHistory = 383,
  ContactIconHistoryChildren = 384,
  ContactIconHistoryContentfulId = 385,
  ContactIconHistoryCreatedAt = 386,
  ContactIconHistoryDate = 387,
  ContactIconHistoryId = 388,
  ContactIconHistoryName = 389,
  ContactIconHistoryNodeLocale = 390,
  ContactIconHistorySpaceId = 391,
  ContactIconHistorySubName = 392,
  ContactIconHistoryUpdatedAt = 393,
  ContactIconId = 394,
  ContactIconInternalContent = 395,
  ContactIconInternalContentDigest = 396,
  ContactIconInternalContentFilePath = 397,
  ContactIconInternalDescription = 398,
  ContactIconInternalFieldOwners = 399,
  ContactIconInternalIgnoreType = 400,
  ContactIconInternalMediaType = 401,
  ContactIconInternalOwner = 402,
  ContactIconInternalType = 403,
  ContactIconName = 404,
  ContactIconNodeLocale = 405,
  ContactIconOss = 406,
  ContactIconOssChildren = 407,
  ContactIconOssChildrenContentfulOssDetailTextNode = 408,
  ContactIconOssContentfulId = 409,
  ContactIconOssCreatedAt = 410,
  ContactIconOssHref = 411,
  ContactIconOssId = 412,
  ContactIconOssName = 413,
  ContactIconOssNodeLocale = 414,
  ContactIconOssSpaceId = 415,
  ContactIconOssStartDate = 416,
  ContactIconOssSubName = 417,
  ContactIconOssTags = 418,
  ContactIconOssUpdatedAt = 419,
  ContactIconParentChildren = 420,
  ContactIconParentId = 421,
  ContactIconProject = 422,
  ContactIconProjectChildren = 423,
  ContactIconProjectChildrenContentfulProjectDetailTextNode = 424,
  ContactIconProjectContentfulId = 425,
  ContactIconProjectCreatedAt = 426,
  ContactIconProjectEndDate = 427,
  ContactIconProjectId = 428,
  ContactIconProjectName = 429,
  ContactIconProjectNodeLocale = 430,
  ContactIconProjectSpaceId = 431,
  ContactIconProjectStartDate = 432,
  ContactIconProjectSubName = 433,
  ContactIconProjectTags = 434,
  ContactIconProjectUpdatedAt = 435,
  ContactIconSpaceId = 436,
  ContactIconSvgChildren = 437,
  ContactIconSvgChildrenMdx = 438,
  ContactIconSvgId = 439,
  ContactIconSvgSvg = 440,
  ContactIconSysRevision = 441,
  ContactIconSysType = 442,
  ContactIconUpdatedAt = 443,
  ContactIconWhatICanDo = 444,
  ContactIconWhatICanDoChildren = 445,
  ContactIconWhatICanDoContentfulId = 446,
  ContactIconWhatICanDoCreatedAt = 447,
  ContactIconWhatICanDoId = 448,
  ContactIconWhatICanDoName = 449,
  ContactIconWhatICanDoNodeLocale = 450,
  ContactIconWhatICanDoSortKey = 451,
  ContactIconWhatICanDoSpaceId = 452,
  ContactIconWhatICanDoSubName = 453,
  ContactIconWhatICanDoUpdatedAt = 454,
  ContactId = 455,
  ContactInternalContent = 456,
  ContactInternalContentDigest = 457,
  ContactInternalContentFilePath = 458,
  ContactInternalDescription = 459,
  ContactInternalFieldOwners = 460,
  ContactInternalIgnoreType = 461,
  ContactInternalMediaType = 462,
  ContactInternalOwner = 463,
  ContactInternalType = 464,
  ContactName = 465,
  ContactNodeLocale = 466,
  ContactParentChildren = 467,
  ContactParentChildrenChildren = 468,
  ContactParentChildrenId = 469,
  ContactParentId = 470,
  ContactParentInternalContent = 471,
  ContactParentInternalContentDigest = 472,
  ContactParentInternalContentFilePath = 473,
  ContactParentInternalDescription = 474,
  ContactParentInternalFieldOwners = 475,
  ContactParentInternalIgnoreType = 476,
  ContactParentInternalMediaType = 477,
  ContactParentInternalOwner = 478,
  ContactParentInternalType = 479,
  ContactParentParentChildren = 480,
  ContactParentParentId = 481,
  ContactSortKey = 482,
  ContactSpaceId = 483,
  ContactSubName = 484,
  ContactSysRevision = 485,
  ContactSysType = 486,
  ContactUpdatedAt = 487,
  ContentfulId = 488,
  CreatedAt = 489,
  History = 490,
  HistoryChildren = 491,
  HistoryChildrenChildren = 492,
  HistoryChildrenChildrenChildren = 493,
  HistoryChildrenChildrenId = 494,
  HistoryChildrenId = 495,
  HistoryChildrenInternalContent = 496,
  HistoryChildrenInternalContentDigest = 497,
  HistoryChildrenInternalContentFilePath = 498,
  HistoryChildrenInternalDescription = 499,
  HistoryChildrenInternalFieldOwners = 500,
  HistoryChildrenInternalIgnoreType = 501,
  HistoryChildrenInternalMediaType = 502,
  HistoryChildrenInternalOwner = 503,
  HistoryChildrenInternalType = 504,
  HistoryChildrenParentChildren = 505,
  HistoryChildrenParentId = 506,
  HistoryContentfulId = 507,
  HistoryCreatedAt = 508,
  HistoryDate = 509,
  HistoryIconChildContentfulIconSvgTextNodeChildren = 510,
  HistoryIconChildContentfulIconSvgTextNodeChildrenMdx = 511,
  HistoryIconChildContentfulIconSvgTextNodeId = 512,
  HistoryIconChildContentfulIconSvgTextNodeSvg = 513,
  HistoryIconChildren = 514,
  HistoryIconChildrenContentfulIconSvgTextNode = 515,
  HistoryIconChildrenContentfulIconSvgTextNodeChildren = 516,
  HistoryIconChildrenContentfulIconSvgTextNodeChildrenMdx = 517,
  HistoryIconChildrenContentfulIconSvgTextNodeId = 518,
  HistoryIconChildrenContentfulIconSvgTextNodeSvg = 519,
  HistoryIconChildrenChildren = 520,
  HistoryIconChildrenId = 521,
  HistoryIconContact = 522,
  HistoryIconContactChildren = 523,
  HistoryIconContactContentfulId = 524,
  HistoryIconContactCreatedAt = 525,
  HistoryIconContactHref = 526,
  HistoryIconContactId = 527,
  HistoryIconContactName = 528,
  HistoryIconContactNodeLocale = 529,
  HistoryIconContactSortKey = 530,
  HistoryIconContactSpaceId = 531,
  HistoryIconContactSubName = 532,
  HistoryIconContactUpdatedAt = 533,
  HistoryIconContentfulId = 534,
  HistoryIconCreatedAt = 535,
  HistoryIconHistory = 536,
  HistoryIconHistoryChildren = 537,
  HistoryIconHistoryContentfulId = 538,
  HistoryIconHistoryCreatedAt = 539,
  HistoryIconHistoryDate = 540,
  HistoryIconHistoryId = 541,
  HistoryIconHistoryName = 542,
  HistoryIconHistoryNodeLocale = 543,
  HistoryIconHistorySpaceId = 544,
  HistoryIconHistorySubName = 545,
  HistoryIconHistoryUpdatedAt = 546,
  HistoryIconId = 547,
  HistoryIconInternalContent = 548,
  HistoryIconInternalContentDigest = 549,
  HistoryIconInternalContentFilePath = 550,
  HistoryIconInternalDescription = 551,
  HistoryIconInternalFieldOwners = 552,
  HistoryIconInternalIgnoreType = 553,
  HistoryIconInternalMediaType = 554,
  HistoryIconInternalOwner = 555,
  HistoryIconInternalType = 556,
  HistoryIconName = 557,
  HistoryIconNodeLocale = 558,
  HistoryIconOss = 559,
  HistoryIconOssChildren = 560,
  HistoryIconOssChildrenContentfulOssDetailTextNode = 561,
  HistoryIconOssContentfulId = 562,
  HistoryIconOssCreatedAt = 563,
  HistoryIconOssHref = 564,
  HistoryIconOssId = 565,
  HistoryIconOssName = 566,
  HistoryIconOssNodeLocale = 567,
  HistoryIconOssSpaceId = 568,
  HistoryIconOssStartDate = 569,
  HistoryIconOssSubName = 570,
  HistoryIconOssTags = 571,
  HistoryIconOssUpdatedAt = 572,
  HistoryIconParentChildren = 573,
  HistoryIconParentId = 574,
  HistoryIconProject = 575,
  HistoryIconProjectChildren = 576,
  HistoryIconProjectChildrenContentfulProjectDetailTextNode = 577,
  HistoryIconProjectContentfulId = 578,
  HistoryIconProjectCreatedAt = 579,
  HistoryIconProjectEndDate = 580,
  HistoryIconProjectId = 581,
  HistoryIconProjectName = 582,
  HistoryIconProjectNodeLocale = 583,
  HistoryIconProjectSpaceId = 584,
  HistoryIconProjectStartDate = 585,
  HistoryIconProjectSubName = 586,
  HistoryIconProjectTags = 587,
  HistoryIconProjectUpdatedAt = 588,
  HistoryIconSpaceId = 589,
  HistoryIconSvgChildren = 590,
  HistoryIconSvgChildrenMdx = 591,
  HistoryIconSvgId = 592,
  HistoryIconSvgSvg = 593,
  HistoryIconSysRevision = 594,
  HistoryIconSysType = 595,
  HistoryIconUpdatedAt = 596,
  HistoryIconWhatICanDo = 597,
  HistoryIconWhatICanDoChildren = 598,
  HistoryIconWhatICanDoContentfulId = 599,
  HistoryIconWhatICanDoCreatedAt = 600,
  HistoryIconWhatICanDoId = 601,
  HistoryIconWhatICanDoName = 602,
  HistoryIconWhatICanDoNodeLocale = 603,
  HistoryIconWhatICanDoSortKey = 604,
  HistoryIconWhatICanDoSpaceId = 605,
  HistoryIconWhatICanDoSubName = 606,
  HistoryIconWhatICanDoUpdatedAt = 607,
  HistoryId = 608,
  HistoryInternalContent = 609,
  HistoryInternalContentDigest = 610,
  HistoryInternalContentFilePath = 611,
  HistoryInternalDescription = 612,
  HistoryInternalFieldOwners = 613,
  HistoryInternalIgnoreType = 614,
  HistoryInternalMediaType = 615,
  HistoryInternalOwner = 616,
  HistoryInternalType = 617,
  HistoryName = 618,
  HistoryNodeLocale = 619,
  HistoryParentChildren = 620,
  HistoryParentChildrenChildren = 621,
  HistoryParentChildrenId = 622,
  HistoryParentId = 623,
  HistoryParentInternalContent = 624,
  HistoryParentInternalContentDigest = 625,
  HistoryParentInternalContentFilePath = 626,
  HistoryParentInternalDescription = 627,
  HistoryParentInternalFieldOwners = 628,
  HistoryParentInternalIgnoreType = 629,
  HistoryParentInternalMediaType = 630,
  HistoryParentInternalOwner = 631,
  HistoryParentInternalType = 632,
  HistoryParentParentChildren = 633,
  HistoryParentParentId = 634,
  HistorySpaceId = 635,
  HistorySubName = 636,
  HistorySysRevision = 637,
  HistorySysType = 638,
  HistoryUpdatedAt = 639,
  Id = 640,
  InternalContent = 641,
  InternalContentDigest = 642,
  InternalContentFilePath = 643,
  InternalDescription = 644,
  InternalFieldOwners = 645,
  InternalIgnoreType = 646,
  InternalMediaType = 647,
  InternalOwner = 648,
  InternalType = 649,
  Name = 650,
  NodeLocale = 651,
  Oss = 652,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 653,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 654,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 655,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 656,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 657,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 658,
  OssChildContentfulOssDetailTextNodeChildMdxId = 659,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 660,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 661,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 662,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 663,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 664,
  OssChildContentfulOssDetailTextNodeChildren = 665,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 666,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 667,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 668,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 669,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 670,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 671,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 672,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 673,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 674,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 675,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 676,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 677,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 678,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 679,
  OssChildContentfulOssDetailTextNodeChildrenId = 680,
  OssChildContentfulOssDetailTextNodeDetail = 681,
  OssChildContentfulOssDetailTextNodeId = 682,
  OssChildContentfulOssDetailTextNodeInternalContent = 683,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 684,
  OssChildContentfulOssDetailTextNodeInternalContentFilePath = 685,
  OssChildContentfulOssDetailTextNodeInternalDescription = 686,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 687,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 688,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 689,
  OssChildContentfulOssDetailTextNodeInternalOwner = 690,
  OssChildContentfulOssDetailTextNodeInternalType = 691,
  OssChildContentfulOssDetailTextNodeParentChildren = 692,
  OssChildContentfulOssDetailTextNodeParentId = 693,
  OssChildContentfulOssDetailTextNodeSysType = 694,
  OssChildren = 695,
  OssChildrenContentfulOssDetailTextNode = 696,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 697,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 698,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 699,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 700,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 701,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 702,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 703,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 704,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 705,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 706,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 707,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 708,
  OssChildrenContentfulOssDetailTextNodeChildren = 709,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 710,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 711,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 712,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 713,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 714,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 715,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 716,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 717,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 718,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 719,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 720,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 721,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 722,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 723,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 724,
  OssChildrenContentfulOssDetailTextNodeDetail = 725,
  OssChildrenContentfulOssDetailTextNodeId = 726,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 727,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 728,
  OssChildrenContentfulOssDetailTextNodeInternalContentFilePath = 729,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 730,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 731,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 732,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 733,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 734,
  OssChildrenContentfulOssDetailTextNodeInternalType = 735,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 736,
  OssChildrenContentfulOssDetailTextNodeParentId = 737,
  OssChildrenContentfulOssDetailTextNodeSysType = 738,
  OssChildrenChildren = 739,
  OssChildrenChildrenChildren = 740,
  OssChildrenChildrenId = 741,
  OssChildrenId = 742,
  OssChildrenInternalContent = 743,
  OssChildrenInternalContentDigest = 744,
  OssChildrenInternalContentFilePath = 745,
  OssChildrenInternalDescription = 746,
  OssChildrenInternalFieldOwners = 747,
  OssChildrenInternalIgnoreType = 748,
  OssChildrenInternalMediaType = 749,
  OssChildrenInternalOwner = 750,
  OssChildrenInternalType = 751,
  OssChildrenParentChildren = 752,
  OssChildrenParentId = 753,
  OssContentfulId = 754,
  OssCreatedAt = 755,
  OssDetailChildMdxBody = 756,
  OssDetailChildMdxChildren = 757,
  OssDetailChildMdxExcerpt = 758,
  OssDetailChildMdxFileAbsolutePath = 759,
  OssDetailChildMdxHeadings = 760,
  OssDetailChildMdxHtml = 761,
  OssDetailChildMdxId = 762,
  OssDetailChildMdxMdxAst = 763,
  OssDetailChildMdxRawBody = 764,
  OssDetailChildMdxSlug = 765,
  OssDetailChildMdxTableOfContents = 766,
  OssDetailChildMdxTimeToRead = 767,
  OssDetailChildren = 768,
  OssDetailChildrenMdx = 769,
  OssDetailChildrenMdxBody = 770,
  OssDetailChildrenMdxChildren = 771,
  OssDetailChildrenMdxExcerpt = 772,
  OssDetailChildrenMdxFileAbsolutePath = 773,
  OssDetailChildrenMdxHeadings = 774,
  OssDetailChildrenMdxHtml = 775,
  OssDetailChildrenMdxId = 776,
  OssDetailChildrenMdxMdxAst = 777,
  OssDetailChildrenMdxRawBody = 778,
  OssDetailChildrenMdxSlug = 779,
  OssDetailChildrenMdxTableOfContents = 780,
  OssDetailChildrenMdxTimeToRead = 781,
  OssDetailChildrenChildren = 782,
  OssDetailChildrenId = 783,
  OssDetailDetail = 784,
  OssDetailId = 785,
  OssDetailInternalContent = 786,
  OssDetailInternalContentDigest = 787,
  OssDetailInternalContentFilePath = 788,
  OssDetailInternalDescription = 789,
  OssDetailInternalFieldOwners = 790,
  OssDetailInternalIgnoreType = 791,
  OssDetailInternalMediaType = 792,
  OssDetailInternalOwner = 793,
  OssDetailInternalType = 794,
  OssDetailParentChildren = 795,
  OssDetailParentId = 796,
  OssDetailSysType = 797,
  OssHref = 798,
  OssIconChildContentfulIconSvgTextNodeChildren = 799,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 800,
  OssIconChildContentfulIconSvgTextNodeId = 801,
  OssIconChildContentfulIconSvgTextNodeSvg = 802,
  OssIconChildren = 803,
  OssIconChildrenContentfulIconSvgTextNode = 804,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 805,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 806,
  OssIconChildrenContentfulIconSvgTextNodeId = 807,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 808,
  OssIconChildrenChildren = 809,
  OssIconChildrenId = 810,
  OssIconContact = 811,
  OssIconContactChildren = 812,
  OssIconContactContentfulId = 813,
  OssIconContactCreatedAt = 814,
  OssIconContactHref = 815,
  OssIconContactId = 816,
  OssIconContactName = 817,
  OssIconContactNodeLocale = 818,
  OssIconContactSortKey = 819,
  OssIconContactSpaceId = 820,
  OssIconContactSubName = 821,
  OssIconContactUpdatedAt = 822,
  OssIconContentfulId = 823,
  OssIconCreatedAt = 824,
  OssIconHistory = 825,
  OssIconHistoryChildren = 826,
  OssIconHistoryContentfulId = 827,
  OssIconHistoryCreatedAt = 828,
  OssIconHistoryDate = 829,
  OssIconHistoryId = 830,
  OssIconHistoryName = 831,
  OssIconHistoryNodeLocale = 832,
  OssIconHistorySpaceId = 833,
  OssIconHistorySubName = 834,
  OssIconHistoryUpdatedAt = 835,
  OssIconId = 836,
  OssIconInternalContent = 837,
  OssIconInternalContentDigest = 838,
  OssIconInternalContentFilePath = 839,
  OssIconInternalDescription = 840,
  OssIconInternalFieldOwners = 841,
  OssIconInternalIgnoreType = 842,
  OssIconInternalMediaType = 843,
  OssIconInternalOwner = 844,
  OssIconInternalType = 845,
  OssIconName = 846,
  OssIconNodeLocale = 847,
  OssIconOss = 848,
  OssIconOssChildren = 849,
  OssIconOssChildrenContentfulOssDetailTextNode = 850,
  OssIconOssContentfulId = 851,
  OssIconOssCreatedAt = 852,
  OssIconOssHref = 853,
  OssIconOssId = 854,
  OssIconOssName = 855,
  OssIconOssNodeLocale = 856,
  OssIconOssSpaceId = 857,
  OssIconOssStartDate = 858,
  OssIconOssSubName = 859,
  OssIconOssTags = 860,
  OssIconOssUpdatedAt = 861,
  OssIconParentChildren = 862,
  OssIconParentId = 863,
  OssIconProject = 864,
  OssIconProjectChildren = 865,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 866,
  OssIconProjectContentfulId = 867,
  OssIconProjectCreatedAt = 868,
  OssIconProjectEndDate = 869,
  OssIconProjectId = 870,
  OssIconProjectName = 871,
  OssIconProjectNodeLocale = 872,
  OssIconProjectSpaceId = 873,
  OssIconProjectStartDate = 874,
  OssIconProjectSubName = 875,
  OssIconProjectTags = 876,
  OssIconProjectUpdatedAt = 877,
  OssIconSpaceId = 878,
  OssIconSvgChildren = 879,
  OssIconSvgChildrenMdx = 880,
  OssIconSvgId = 881,
  OssIconSvgSvg = 882,
  OssIconSysRevision = 883,
  OssIconSysType = 884,
  OssIconUpdatedAt = 885,
  OssIconWhatICanDo = 886,
  OssIconWhatICanDoChildren = 887,
  OssIconWhatICanDoContentfulId = 888,
  OssIconWhatICanDoCreatedAt = 889,
  OssIconWhatICanDoId = 890,
  OssIconWhatICanDoName = 891,
  OssIconWhatICanDoNodeLocale = 892,
  OssIconWhatICanDoSortKey = 893,
  OssIconWhatICanDoSpaceId = 894,
  OssIconWhatICanDoSubName = 895,
  OssIconWhatICanDoUpdatedAt = 896,
  OssId = 897,
  OssImageChildren = 898,
  OssImageChildrenChildren = 899,
  OssImageChildrenId = 900,
  OssImageContentfulId = 901,
  OssImageCreatedAt = 902,
  OssImageDescription = 903,
  OssImageFileContentType = 904,
  OssImageFileFileName = 905,
  OssImageFileUrl = 906,
  OssImageFilename = 907,
  OssImageFilesize = 908,
  OssImageGatsbyImage = 909,
  OssImageGatsbyImageData = 910,
  OssImageHeight = 911,
  OssImageId = 912,
  OssImageInternalContent = 913,
  OssImageInternalContentDigest = 914,
  OssImageInternalContentFilePath = 915,
  OssImageInternalDescription = 916,
  OssImageInternalFieldOwners = 917,
  OssImageInternalIgnoreType = 918,
  OssImageInternalMediaType = 919,
  OssImageInternalOwner = 920,
  OssImageInternalType = 921,
  OssImageMimeType = 922,
  OssImageNodeLocale = 923,
  OssImageParentChildren = 924,
  OssImageParentId = 925,
  OssImagePlaceholderUrl = 926,
  OssImagePublicUrl = 927,
  OssImageResizeHeight = 928,
  OssImageResizeSrc = 929,
  OssImageResizeWidth = 930,
  OssImageSize = 931,
  OssImageSpaceId = 932,
  OssImageSysRevision = 933,
  OssImageSysType = 934,
  OssImageTitle = 935,
  OssImageUpdatedAt = 936,
  OssImageUrl = 937,
  OssImageWidth = 938,
  OssInternalContent = 939,
  OssInternalContentDigest = 940,
  OssInternalContentFilePath = 941,
  OssInternalDescription = 942,
  OssInternalFieldOwners = 943,
  OssInternalIgnoreType = 944,
  OssInternalMediaType = 945,
  OssInternalOwner = 946,
  OssInternalType = 947,
  OssName = 948,
  OssNodeLocale = 949,
  OssParentChildren = 950,
  OssParentChildrenChildren = 951,
  OssParentChildrenId = 952,
  OssParentId = 953,
  OssParentInternalContent = 954,
  OssParentInternalContentDigest = 955,
  OssParentInternalContentFilePath = 956,
  OssParentInternalDescription = 957,
  OssParentInternalFieldOwners = 958,
  OssParentInternalIgnoreType = 959,
  OssParentInternalMediaType = 960,
  OssParentInternalOwner = 961,
  OssParentInternalType = 962,
  OssParentParentChildren = 963,
  OssParentParentId = 964,
  OssSpaceId = 965,
  OssStartDate = 966,
  OssSubName = 967,
  OssSysRevision = 968,
  OssSysType = 969,
  OssTags = 970,
  OssTagsBlogPost = 971,
  OssTagsBlogPostChildren = 972,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 973,
  OssTagsBlogPostContentfulId = 974,
  OssTagsBlogPostCreated = 975,
  OssTagsBlogPostCreatedAt = 976,
  OssTagsBlogPostExcerpt = 977,
  OssTagsBlogPostGatsbyPath = 978,
  OssTagsBlogPostId = 979,
  OssTagsBlogPostNodeLocale = 980,
  OssTagsBlogPostSlug = 981,
  OssTagsBlogPostSpaceId = 982,
  OssTagsBlogPostTags = 983,
  OssTagsBlogPostTitle = 984,
  OssTagsBlogPostUpdated = 985,
  OssTagsBlogPostUpdatedAt = 986,
  OssTagsChildren = 987,
  OssTagsChildrenChildren = 988,
  OssTagsChildrenId = 989,
  OssTagsContentfulId = 990,
  OssTagsCreatedAt = 991,
  OssTagsId = 992,
  OssTagsInternalContent = 993,
  OssTagsInternalContentDigest = 994,
  OssTagsInternalContentFilePath = 995,
  OssTagsInternalDescription = 996,
  OssTagsInternalFieldOwners = 997,
  OssTagsInternalIgnoreType = 998,
  OssTagsInternalMediaType = 999,
  OssTagsInternalOwner = 1000,
  OssTagsInternalType = 1001,
  OssTagsLevel = 1002,
  OssTagsName = 1003,
  OssTagsNodeLocale = 1004,
  OssTagsOss = 1005,
  OssTagsOssChildren = 1006,
  OssTagsOssChildrenContentfulOssDetailTextNode = 1007,
  OssTagsOssContentfulId = 1008,
  OssTagsOssCreatedAt = 1009,
  OssTagsOssHref = 1010,
  OssTagsOssId = 1011,
  OssTagsOssName = 1012,
  OssTagsOssNodeLocale = 1013,
  OssTagsOssSpaceId = 1014,
  OssTagsOssStartDate = 1015,
  OssTagsOssSubName = 1016,
  OssTagsOssTags = 1017,
  OssTagsOssUpdatedAt = 1018,
  OssTagsParentChildren = 1019,
  OssTagsParentId = 1020,
  OssTagsProject = 1021,
  OssTagsProjectChildren = 1022,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 1023,
  OssTagsProjectContentfulId = 1024,
  OssTagsProjectCreatedAt = 1025,
  OssTagsProjectEndDate = 1026,
  OssTagsProjectId = 1027,
  OssTagsProjectName = 1028,
  OssTagsProjectNodeLocale = 1029,
  OssTagsProjectSpaceId = 1030,
  OssTagsProjectStartDate = 1031,
  OssTagsProjectSubName = 1032,
  OssTagsProjectTags = 1033,
  OssTagsProjectUpdatedAt = 1034,
  OssTagsSkillGrpup = 1035,
  OssTagsSkillGrpupChildren = 1036,
  OssTagsSkillGrpupContentfulId = 1037,
  OssTagsSkillGrpupCreatedAt = 1038,
  OssTagsSkillGrpupId = 1039,
  OssTagsSkillGrpupName = 1040,
  OssTagsSkillGrpupNodeLocale = 1041,
  OssTagsSkillGrpupSkillMap = 1042,
  OssTagsSkillGrpupSkills = 1043,
  OssTagsSkillGrpupSpaceId = 1044,
  OssTagsSkillGrpupUpdatedAt = 1045,
  OssTagsSkillMap = 1046,
  OssTagsSkillMapChildren = 1047,
  OssTagsSkillMapContentfulId = 1048,
  OssTagsSkillMapCreatedAt = 1049,
  OssTagsSkillMapExpanded = 1050,
  OssTagsSkillMapId = 1051,
  OssTagsSkillMapName = 1052,
  OssTagsSkillMapNodeLocale = 1053,
  OssTagsSkillMapSkillGroups = 1054,
  OssTagsSkillMapSkills = 1055,
  OssTagsSkillMapSortKey = 1056,
  OssTagsSkillMapSpaceId = 1057,
  OssTagsSkillMapUpdatedAt = 1058,
  OssTagsSpaceId = 1059,
  OssTagsSysRevision = 1060,
  OssTagsSysType = 1061,
  OssTagsUpdatedAt = 1062,
  OssUpdatedAt = 1063,
  ParentChildren = 1064,
  ParentChildrenChildren = 1065,
  ParentChildrenChildrenChildren = 1066,
  ParentChildrenChildrenId = 1067,
  ParentChildrenId = 1068,
  ParentChildrenInternalContent = 1069,
  ParentChildrenInternalContentDigest = 1070,
  ParentChildrenInternalContentFilePath = 1071,
  ParentChildrenInternalDescription = 1072,
  ParentChildrenInternalFieldOwners = 1073,
  ParentChildrenInternalIgnoreType = 1074,
  ParentChildrenInternalMediaType = 1075,
  ParentChildrenInternalOwner = 1076,
  ParentChildrenInternalType = 1077,
  ParentChildrenParentChildren = 1078,
  ParentChildrenParentId = 1079,
  ParentId = 1080,
  ParentInternalContent = 1081,
  ParentInternalContentDigest = 1082,
  ParentInternalContentFilePath = 1083,
  ParentInternalDescription = 1084,
  ParentInternalFieldOwners = 1085,
  ParentInternalIgnoreType = 1086,
  ParentInternalMediaType = 1087,
  ParentInternalOwner = 1088,
  ParentInternalType = 1089,
  ParentParentChildren = 1090,
  ParentParentChildrenChildren = 1091,
  ParentParentChildrenId = 1092,
  ParentParentId = 1093,
  ParentParentInternalContent = 1094,
  ParentParentInternalContentDigest = 1095,
  ParentParentInternalContentFilePath = 1096,
  ParentParentInternalDescription = 1097,
  ParentParentInternalFieldOwners = 1098,
  ParentParentInternalIgnoreType = 1099,
  ParentParentInternalMediaType = 1100,
  ParentParentInternalOwner = 1101,
  ParentParentInternalType = 1102,
  ParentParentParentChildren = 1103,
  ParentParentParentId = 1104,
  Project = 1105,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 1106,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 1107,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 1108,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1109,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 1110,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 1111,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 1112,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 1113,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 1114,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 1115,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 1116,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 1117,
  ProjectChildContentfulProjectDetailTextNodeChildren = 1118,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1119,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 1120,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 1121,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1122,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1123,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 1124,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 1125,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 1126,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1127,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 1128,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 1129,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1130,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1131,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 1132,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 1133,
  ProjectChildContentfulProjectDetailTextNodeDetail = 1134,
  ProjectChildContentfulProjectDetailTextNodeId = 1135,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 1136,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 1137,
  ProjectChildContentfulProjectDetailTextNodeInternalContentFilePath = 1138,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 1139,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 1140,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 1141,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 1142,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 1143,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 1144,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 1145,
  ProjectChildContentfulProjectDetailTextNodeParentId = 1146,
  ProjectChildContentfulProjectDetailTextNodeSysType = 1147,
  ProjectChildren = 1148,
  ProjectChildrenContentfulProjectDetailTextNode = 1149,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 1150,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 1151,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 1152,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 1153,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 1154,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 1155,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 1156,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 1157,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 1158,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 1159,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 1160,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 1161,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 1162,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1163,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 1164,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 1165,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 1166,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 1167,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 1168,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 1169,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 1170,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 1171,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 1172,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 1173,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 1174,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 1175,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 1176,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 1177,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 1178,
  ProjectChildrenContentfulProjectDetailTextNodeId = 1179,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 1180,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 1181,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentFilePath = 1182,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 1183,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 1184,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 1185,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 1186,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 1187,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 1188,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 1189,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 1190,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 1191,
  ProjectChildrenChildren = 1192,
  ProjectChildrenChildrenChildren = 1193,
  ProjectChildrenChildrenId = 1194,
  ProjectChildrenId = 1195,
  ProjectChildrenInternalContent = 1196,
  ProjectChildrenInternalContentDigest = 1197,
  ProjectChildrenInternalContentFilePath = 1198,
  ProjectChildrenInternalDescription = 1199,
  ProjectChildrenInternalFieldOwners = 1200,
  ProjectChildrenInternalIgnoreType = 1201,
  ProjectChildrenInternalMediaType = 1202,
  ProjectChildrenInternalOwner = 1203,
  ProjectChildrenInternalType = 1204,
  ProjectChildrenParentChildren = 1205,
  ProjectChildrenParentId = 1206,
  ProjectContentfulId = 1207,
  ProjectCreatedAt = 1208,
  ProjectDetailChildMdxBody = 1209,
  ProjectDetailChildMdxChildren = 1210,
  ProjectDetailChildMdxExcerpt = 1211,
  ProjectDetailChildMdxFileAbsolutePath = 1212,
  ProjectDetailChildMdxHeadings = 1213,
  ProjectDetailChildMdxHtml = 1214,
  ProjectDetailChildMdxId = 1215,
  ProjectDetailChildMdxMdxAst = 1216,
  ProjectDetailChildMdxRawBody = 1217,
  ProjectDetailChildMdxSlug = 1218,
  ProjectDetailChildMdxTableOfContents = 1219,
  ProjectDetailChildMdxTimeToRead = 1220,
  ProjectDetailChildren = 1221,
  ProjectDetailChildrenMdx = 1222,
  ProjectDetailChildrenMdxBody = 1223,
  ProjectDetailChildrenMdxChildren = 1224,
  ProjectDetailChildrenMdxExcerpt = 1225,
  ProjectDetailChildrenMdxFileAbsolutePath = 1226,
  ProjectDetailChildrenMdxHeadings = 1227,
  ProjectDetailChildrenMdxHtml = 1228,
  ProjectDetailChildrenMdxId = 1229,
  ProjectDetailChildrenMdxMdxAst = 1230,
  ProjectDetailChildrenMdxRawBody = 1231,
  ProjectDetailChildrenMdxSlug = 1232,
  ProjectDetailChildrenMdxTableOfContents = 1233,
  ProjectDetailChildrenMdxTimeToRead = 1234,
  ProjectDetailChildrenChildren = 1235,
  ProjectDetailChildrenId = 1236,
  ProjectDetailDetail = 1237,
  ProjectDetailId = 1238,
  ProjectDetailInternalContent = 1239,
  ProjectDetailInternalContentDigest = 1240,
  ProjectDetailInternalContentFilePath = 1241,
  ProjectDetailInternalDescription = 1242,
  ProjectDetailInternalFieldOwners = 1243,
  ProjectDetailInternalIgnoreType = 1244,
  ProjectDetailInternalMediaType = 1245,
  ProjectDetailInternalOwner = 1246,
  ProjectDetailInternalType = 1247,
  ProjectDetailParentChildren = 1248,
  ProjectDetailParentId = 1249,
  ProjectDetailSysType = 1250,
  ProjectEndDate = 1251,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1252,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1253,
  ProjectIconChildContentfulIconSvgTextNodeId = 1254,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1255,
  ProjectIconChildren = 1256,
  ProjectIconChildrenContentfulIconSvgTextNode = 1257,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1258,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1259,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1260,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1261,
  ProjectIconChildrenChildren = 1262,
  ProjectIconChildrenId = 1263,
  ProjectIconContact = 1264,
  ProjectIconContactChildren = 1265,
  ProjectIconContactContentfulId = 1266,
  ProjectIconContactCreatedAt = 1267,
  ProjectIconContactHref = 1268,
  ProjectIconContactId = 1269,
  ProjectIconContactName = 1270,
  ProjectIconContactNodeLocale = 1271,
  ProjectIconContactSortKey = 1272,
  ProjectIconContactSpaceId = 1273,
  ProjectIconContactSubName = 1274,
  ProjectIconContactUpdatedAt = 1275,
  ProjectIconContentfulId = 1276,
  ProjectIconCreatedAt = 1277,
  ProjectIconHistory = 1278,
  ProjectIconHistoryChildren = 1279,
  ProjectIconHistoryContentfulId = 1280,
  ProjectIconHistoryCreatedAt = 1281,
  ProjectIconHistoryDate = 1282,
  ProjectIconHistoryId = 1283,
  ProjectIconHistoryName = 1284,
  ProjectIconHistoryNodeLocale = 1285,
  ProjectIconHistorySpaceId = 1286,
  ProjectIconHistorySubName = 1287,
  ProjectIconHistoryUpdatedAt = 1288,
  ProjectIconId = 1289,
  ProjectIconInternalContent = 1290,
  ProjectIconInternalContentDigest = 1291,
  ProjectIconInternalContentFilePath = 1292,
  ProjectIconInternalDescription = 1293,
  ProjectIconInternalFieldOwners = 1294,
  ProjectIconInternalIgnoreType = 1295,
  ProjectIconInternalMediaType = 1296,
  ProjectIconInternalOwner = 1297,
  ProjectIconInternalType = 1298,
  ProjectIconName = 1299,
  ProjectIconNodeLocale = 1300,
  ProjectIconOss = 1301,
  ProjectIconOssChildren = 1302,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1303,
  ProjectIconOssContentfulId = 1304,
  ProjectIconOssCreatedAt = 1305,
  ProjectIconOssHref = 1306,
  ProjectIconOssId = 1307,
  ProjectIconOssName = 1308,
  ProjectIconOssNodeLocale = 1309,
  ProjectIconOssSpaceId = 1310,
  ProjectIconOssStartDate = 1311,
  ProjectIconOssSubName = 1312,
  ProjectIconOssTags = 1313,
  ProjectIconOssUpdatedAt = 1314,
  ProjectIconParentChildren = 1315,
  ProjectIconParentId = 1316,
  ProjectIconProject = 1317,
  ProjectIconProjectChildren = 1318,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1319,
  ProjectIconProjectContentfulId = 1320,
  ProjectIconProjectCreatedAt = 1321,
  ProjectIconProjectEndDate = 1322,
  ProjectIconProjectId = 1323,
  ProjectIconProjectName = 1324,
  ProjectIconProjectNodeLocale = 1325,
  ProjectIconProjectSpaceId = 1326,
  ProjectIconProjectStartDate = 1327,
  ProjectIconProjectSubName = 1328,
  ProjectIconProjectTags = 1329,
  ProjectIconProjectUpdatedAt = 1330,
  ProjectIconSpaceId = 1331,
  ProjectIconSvgChildren = 1332,
  ProjectIconSvgChildrenMdx = 1333,
  ProjectIconSvgId = 1334,
  ProjectIconSvgSvg = 1335,
  ProjectIconSysRevision = 1336,
  ProjectIconSysType = 1337,
  ProjectIconUpdatedAt = 1338,
  ProjectIconWhatICanDo = 1339,
  ProjectIconWhatICanDoChildren = 1340,
  ProjectIconWhatICanDoContentfulId = 1341,
  ProjectIconWhatICanDoCreatedAt = 1342,
  ProjectIconWhatICanDoId = 1343,
  ProjectIconWhatICanDoName = 1344,
  ProjectIconWhatICanDoNodeLocale = 1345,
  ProjectIconWhatICanDoSortKey = 1346,
  ProjectIconWhatICanDoSpaceId = 1347,
  ProjectIconWhatICanDoSubName = 1348,
  ProjectIconWhatICanDoUpdatedAt = 1349,
  ProjectId = 1350,
  ProjectInternalContent = 1351,
  ProjectInternalContentDigest = 1352,
  ProjectInternalContentFilePath = 1353,
  ProjectInternalDescription = 1354,
  ProjectInternalFieldOwners = 1355,
  ProjectInternalIgnoreType = 1356,
  ProjectInternalMediaType = 1357,
  ProjectInternalOwner = 1358,
  ProjectInternalType = 1359,
  ProjectName = 1360,
  ProjectNodeLocale = 1361,
  ProjectParentChildren = 1362,
  ProjectParentChildrenChildren = 1363,
  ProjectParentChildrenId = 1364,
  ProjectParentId = 1365,
  ProjectParentInternalContent = 1366,
  ProjectParentInternalContentDigest = 1367,
  ProjectParentInternalContentFilePath = 1368,
  ProjectParentInternalDescription = 1369,
  ProjectParentInternalFieldOwners = 1370,
  ProjectParentInternalIgnoreType = 1371,
  ProjectParentInternalMediaType = 1372,
  ProjectParentInternalOwner = 1373,
  ProjectParentInternalType = 1374,
  ProjectParentParentChildren = 1375,
  ProjectParentParentId = 1376,
  ProjectSpaceId = 1377,
  ProjectStartDate = 1378,
  ProjectSubName = 1379,
  ProjectSysRevision = 1380,
  ProjectSysType = 1381,
  ProjectTags = 1382,
  ProjectTagsBlogPost = 1383,
  ProjectTagsBlogPostChildren = 1384,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1385,
  ProjectTagsBlogPostContentfulId = 1386,
  ProjectTagsBlogPostCreated = 1387,
  ProjectTagsBlogPostCreatedAt = 1388,
  ProjectTagsBlogPostExcerpt = 1389,
  ProjectTagsBlogPostGatsbyPath = 1390,
  ProjectTagsBlogPostId = 1391,
  ProjectTagsBlogPostNodeLocale = 1392,
  ProjectTagsBlogPostSlug = 1393,
  ProjectTagsBlogPostSpaceId = 1394,
  ProjectTagsBlogPostTags = 1395,
  ProjectTagsBlogPostTitle = 1396,
  ProjectTagsBlogPostUpdated = 1397,
  ProjectTagsBlogPostUpdatedAt = 1398,
  ProjectTagsChildren = 1399,
  ProjectTagsChildrenChildren = 1400,
  ProjectTagsChildrenId = 1401,
  ProjectTagsContentfulId = 1402,
  ProjectTagsCreatedAt = 1403,
  ProjectTagsId = 1404,
  ProjectTagsInternalContent = 1405,
  ProjectTagsInternalContentDigest = 1406,
  ProjectTagsInternalContentFilePath = 1407,
  ProjectTagsInternalDescription = 1408,
  ProjectTagsInternalFieldOwners = 1409,
  ProjectTagsInternalIgnoreType = 1410,
  ProjectTagsInternalMediaType = 1411,
  ProjectTagsInternalOwner = 1412,
  ProjectTagsInternalType = 1413,
  ProjectTagsLevel = 1414,
  ProjectTagsName = 1415,
  ProjectTagsNodeLocale = 1416,
  ProjectTagsOss = 1417,
  ProjectTagsOssChildren = 1418,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1419,
  ProjectTagsOssContentfulId = 1420,
  ProjectTagsOssCreatedAt = 1421,
  ProjectTagsOssHref = 1422,
  ProjectTagsOssId = 1423,
  ProjectTagsOssName = 1424,
  ProjectTagsOssNodeLocale = 1425,
  ProjectTagsOssSpaceId = 1426,
  ProjectTagsOssStartDate = 1427,
  ProjectTagsOssSubName = 1428,
  ProjectTagsOssTags = 1429,
  ProjectTagsOssUpdatedAt = 1430,
  ProjectTagsParentChildren = 1431,
  ProjectTagsParentId = 1432,
  ProjectTagsProject = 1433,
  ProjectTagsProjectChildren = 1434,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1435,
  ProjectTagsProjectContentfulId = 1436,
  ProjectTagsProjectCreatedAt = 1437,
  ProjectTagsProjectEndDate = 1438,
  ProjectTagsProjectId = 1439,
  ProjectTagsProjectName = 1440,
  ProjectTagsProjectNodeLocale = 1441,
  ProjectTagsProjectSpaceId = 1442,
  ProjectTagsProjectStartDate = 1443,
  ProjectTagsProjectSubName = 1444,
  ProjectTagsProjectTags = 1445,
  ProjectTagsProjectUpdatedAt = 1446,
  ProjectTagsSkillGrpup = 1447,
  ProjectTagsSkillGrpupChildren = 1448,
  ProjectTagsSkillGrpupContentfulId = 1449,
  ProjectTagsSkillGrpupCreatedAt = 1450,
  ProjectTagsSkillGrpupId = 1451,
  ProjectTagsSkillGrpupName = 1452,
  ProjectTagsSkillGrpupNodeLocale = 1453,
  ProjectTagsSkillGrpupSkillMap = 1454,
  ProjectTagsSkillGrpupSkills = 1455,
  ProjectTagsSkillGrpupSpaceId = 1456,
  ProjectTagsSkillGrpupUpdatedAt = 1457,
  ProjectTagsSkillMap = 1458,
  ProjectTagsSkillMapChildren = 1459,
  ProjectTagsSkillMapContentfulId = 1460,
  ProjectTagsSkillMapCreatedAt = 1461,
  ProjectTagsSkillMapExpanded = 1462,
  ProjectTagsSkillMapId = 1463,
  ProjectTagsSkillMapName = 1464,
  ProjectTagsSkillMapNodeLocale = 1465,
  ProjectTagsSkillMapSkillGroups = 1466,
  ProjectTagsSkillMapSkills = 1467,
  ProjectTagsSkillMapSortKey = 1468,
  ProjectTagsSkillMapSpaceId = 1469,
  ProjectTagsSkillMapUpdatedAt = 1470,
  ProjectTagsSpaceId = 1471,
  ProjectTagsSysRevision = 1472,
  ProjectTagsSysType = 1473,
  ProjectTagsUpdatedAt = 1474,
  ProjectUpdatedAt = 1475,
  SpaceId = 1476,
  SvgChildMdxBody = 1477,
  SvgChildMdxChildren = 1478,
  SvgChildMdxChildrenChildren = 1479,
  SvgChildMdxChildrenId = 1480,
  SvgChildMdxExcerpt = 1481,
  SvgChildMdxFileAbsolutePath = 1482,
  SvgChildMdxFrontmatterTitle = 1483,
  SvgChildMdxHeadings = 1484,
  SvgChildMdxHeadingsDepth = 1485,
  SvgChildMdxHeadingsValue = 1486,
  SvgChildMdxHtml = 1487,
  SvgChildMdxId = 1488,
  SvgChildMdxInternalContent = 1489,
  SvgChildMdxInternalContentDigest = 1490,
  SvgChildMdxInternalContentFilePath = 1491,
  SvgChildMdxInternalDescription = 1492,
  SvgChildMdxInternalFieldOwners = 1493,
  SvgChildMdxInternalIgnoreType = 1494,
  SvgChildMdxInternalMediaType = 1495,
  SvgChildMdxInternalOwner = 1496,
  SvgChildMdxInternalType = 1497,
  SvgChildMdxMdxAst = 1498,
  SvgChildMdxParentChildren = 1499,
  SvgChildMdxParentId = 1500,
  SvgChildMdxRawBody = 1501,
  SvgChildMdxSlug = 1502,
  SvgChildMdxTableOfContents = 1503,
  SvgChildMdxTimeToRead = 1504,
  SvgChildMdxWordCountParagraphs = 1505,
  SvgChildMdxWordCountSentences = 1506,
  SvgChildMdxWordCountWords = 1507,
  SvgChildren = 1508,
  SvgChildrenMdx = 1509,
  SvgChildrenMdxBody = 1510,
  SvgChildrenMdxChildren = 1511,
  SvgChildrenMdxChildrenChildren = 1512,
  SvgChildrenMdxChildrenId = 1513,
  SvgChildrenMdxExcerpt = 1514,
  SvgChildrenMdxFileAbsolutePath = 1515,
  SvgChildrenMdxFrontmatterTitle = 1516,
  SvgChildrenMdxHeadings = 1517,
  SvgChildrenMdxHeadingsDepth = 1518,
  SvgChildrenMdxHeadingsValue = 1519,
  SvgChildrenMdxHtml = 1520,
  SvgChildrenMdxId = 1521,
  SvgChildrenMdxInternalContent = 1522,
  SvgChildrenMdxInternalContentDigest = 1523,
  SvgChildrenMdxInternalContentFilePath = 1524,
  SvgChildrenMdxInternalDescription = 1525,
  SvgChildrenMdxInternalFieldOwners = 1526,
  SvgChildrenMdxInternalIgnoreType = 1527,
  SvgChildrenMdxInternalMediaType = 1528,
  SvgChildrenMdxInternalOwner = 1529,
  SvgChildrenMdxInternalType = 1530,
  SvgChildrenMdxMdxAst = 1531,
  SvgChildrenMdxParentChildren = 1532,
  SvgChildrenMdxParentId = 1533,
  SvgChildrenMdxRawBody = 1534,
  SvgChildrenMdxSlug = 1535,
  SvgChildrenMdxTableOfContents = 1536,
  SvgChildrenMdxTimeToRead = 1537,
  SvgChildrenMdxWordCountParagraphs = 1538,
  SvgChildrenMdxWordCountSentences = 1539,
  SvgChildrenMdxWordCountWords = 1540,
  SvgChildrenChildren = 1541,
  SvgChildrenChildrenChildren = 1542,
  SvgChildrenChildrenId = 1543,
  SvgChildrenId = 1544,
  SvgChildrenInternalContent = 1545,
  SvgChildrenInternalContentDigest = 1546,
  SvgChildrenInternalContentFilePath = 1547,
  SvgChildrenInternalDescription = 1548,
  SvgChildrenInternalFieldOwners = 1549,
  SvgChildrenInternalIgnoreType = 1550,
  SvgChildrenInternalMediaType = 1551,
  SvgChildrenInternalOwner = 1552,
  SvgChildrenInternalType = 1553,
  SvgChildrenParentChildren = 1554,
  SvgChildrenParentId = 1555,
  SvgId = 1556,
  SvgInternalContent = 1557,
  SvgInternalContentDigest = 1558,
  SvgInternalContentFilePath = 1559,
  SvgInternalDescription = 1560,
  SvgInternalFieldOwners = 1561,
  SvgInternalIgnoreType = 1562,
  SvgInternalMediaType = 1563,
  SvgInternalOwner = 1564,
  SvgInternalType = 1565,
  SvgParentChildren = 1566,
  SvgParentChildrenChildren = 1567,
  SvgParentChildrenId = 1568,
  SvgParentId = 1569,
  SvgParentInternalContent = 1570,
  SvgParentInternalContentDigest = 1571,
  SvgParentInternalContentFilePath = 1572,
  SvgParentInternalDescription = 1573,
  SvgParentInternalFieldOwners = 1574,
  SvgParentInternalIgnoreType = 1575,
  SvgParentInternalMediaType = 1576,
  SvgParentInternalOwner = 1577,
  SvgParentInternalType = 1578,
  SvgParentParentChildren = 1579,
  SvgParentParentId = 1580,
  SvgSvg = 1581,
  SvgSysType = 1582,
  SysContentTypeSysId = 1583,
  SysContentTypeSysLinkType = 1584,
  SysContentTypeSysType = 1585,
  SysRevision = 1586,
  SysType = 1587,
  UpdatedAt = 1588,
  WhatICanDo = 1589,
  WhatICanDoChildren = 1590,
  WhatICanDoChildrenChildren = 1591,
  WhatICanDoChildrenChildrenChildren = 1592,
  WhatICanDoChildrenChildrenId = 1593,
  WhatICanDoChildrenId = 1594,
  WhatICanDoChildrenInternalContent = 1595,
  WhatICanDoChildrenInternalContentDigest = 1596,
  WhatICanDoChildrenInternalContentFilePath = 1597,
  WhatICanDoChildrenInternalDescription = 1598,
  WhatICanDoChildrenInternalFieldOwners = 1599,
  WhatICanDoChildrenInternalIgnoreType = 1600,
  WhatICanDoChildrenInternalMediaType = 1601,
  WhatICanDoChildrenInternalOwner = 1602,
  WhatICanDoChildrenInternalType = 1603,
  WhatICanDoChildrenParentChildren = 1604,
  WhatICanDoChildrenParentId = 1605,
  WhatICanDoContentfulId = 1606,
  WhatICanDoCreatedAt = 1607,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildren = 1608,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildrenMdx = 1609,
  WhatICanDoIconChildContentfulIconSvgTextNodeId = 1610,
  WhatICanDoIconChildContentfulIconSvgTextNodeSvg = 1611,
  WhatICanDoIconChildren = 1612,
  WhatICanDoIconChildrenContentfulIconSvgTextNode = 1613,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildren = 1614,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1615,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeId = 1616,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeSvg = 1617,
  WhatICanDoIconChildrenChildren = 1618,
  WhatICanDoIconChildrenId = 1619,
  WhatICanDoIconContact = 1620,
  WhatICanDoIconContactChildren = 1621,
  WhatICanDoIconContactContentfulId = 1622,
  WhatICanDoIconContactCreatedAt = 1623,
  WhatICanDoIconContactHref = 1624,
  WhatICanDoIconContactId = 1625,
  WhatICanDoIconContactName = 1626,
  WhatICanDoIconContactNodeLocale = 1627,
  WhatICanDoIconContactSortKey = 1628,
  WhatICanDoIconContactSpaceId = 1629,
  WhatICanDoIconContactSubName = 1630,
  WhatICanDoIconContactUpdatedAt = 1631,
  WhatICanDoIconContentfulId = 1632,
  WhatICanDoIconCreatedAt = 1633,
  WhatICanDoIconHistory = 1634,
  WhatICanDoIconHistoryChildren = 1635,
  WhatICanDoIconHistoryContentfulId = 1636,
  WhatICanDoIconHistoryCreatedAt = 1637,
  WhatICanDoIconHistoryDate = 1638,
  WhatICanDoIconHistoryId = 1639,
  WhatICanDoIconHistoryName = 1640,
  WhatICanDoIconHistoryNodeLocale = 1641,
  WhatICanDoIconHistorySpaceId = 1642,
  WhatICanDoIconHistorySubName = 1643,
  WhatICanDoIconHistoryUpdatedAt = 1644,
  WhatICanDoIconId = 1645,
  WhatICanDoIconInternalContent = 1646,
  WhatICanDoIconInternalContentDigest = 1647,
  WhatICanDoIconInternalContentFilePath = 1648,
  WhatICanDoIconInternalDescription = 1649,
  WhatICanDoIconInternalFieldOwners = 1650,
  WhatICanDoIconInternalIgnoreType = 1651,
  WhatICanDoIconInternalMediaType = 1652,
  WhatICanDoIconInternalOwner = 1653,
  WhatICanDoIconInternalType = 1654,
  WhatICanDoIconName = 1655,
  WhatICanDoIconNodeLocale = 1656,
  WhatICanDoIconOss = 1657,
  WhatICanDoIconOssChildren = 1658,
  WhatICanDoIconOssChildrenContentfulOssDetailTextNode = 1659,
  WhatICanDoIconOssContentfulId = 1660,
  WhatICanDoIconOssCreatedAt = 1661,
  WhatICanDoIconOssHref = 1662,
  WhatICanDoIconOssId = 1663,
  WhatICanDoIconOssName = 1664,
  WhatICanDoIconOssNodeLocale = 1665,
  WhatICanDoIconOssSpaceId = 1666,
  WhatICanDoIconOssStartDate = 1667,
  WhatICanDoIconOssSubName = 1668,
  WhatICanDoIconOssTags = 1669,
  WhatICanDoIconOssUpdatedAt = 1670,
  WhatICanDoIconParentChildren = 1671,
  WhatICanDoIconParentId = 1672,
  WhatICanDoIconProject = 1673,
  WhatICanDoIconProjectChildren = 1674,
  WhatICanDoIconProjectChildrenContentfulProjectDetailTextNode = 1675,
  WhatICanDoIconProjectContentfulId = 1676,
  WhatICanDoIconProjectCreatedAt = 1677,
  WhatICanDoIconProjectEndDate = 1678,
  WhatICanDoIconProjectId = 1679,
  WhatICanDoIconProjectName = 1680,
  WhatICanDoIconProjectNodeLocale = 1681,
  WhatICanDoIconProjectSpaceId = 1682,
  WhatICanDoIconProjectStartDate = 1683,
  WhatICanDoIconProjectSubName = 1684,
  WhatICanDoIconProjectTags = 1685,
  WhatICanDoIconProjectUpdatedAt = 1686,
  WhatICanDoIconSpaceId = 1687,
  WhatICanDoIconSvgChildren = 1688,
  WhatICanDoIconSvgChildrenMdx = 1689,
  WhatICanDoIconSvgId = 1690,
  WhatICanDoIconSvgSvg = 1691,
  WhatICanDoIconSysRevision = 1692,
  WhatICanDoIconSysType = 1693,
  WhatICanDoIconUpdatedAt = 1694,
  WhatICanDoIconWhatICanDo = 1695,
  WhatICanDoIconWhatICanDoChildren = 1696,
  WhatICanDoIconWhatICanDoContentfulId = 1697,
  WhatICanDoIconWhatICanDoCreatedAt = 1698,
  WhatICanDoIconWhatICanDoId = 1699,
  WhatICanDoIconWhatICanDoName = 1700,
  WhatICanDoIconWhatICanDoNodeLocale = 1701,
  WhatICanDoIconWhatICanDoSortKey = 1702,
  WhatICanDoIconWhatICanDoSpaceId = 1703,
  WhatICanDoIconWhatICanDoSubName = 1704,
  WhatICanDoIconWhatICanDoUpdatedAt = 1705,
  WhatICanDoId = 1706,
  WhatICanDoInternalContent = 1707,
  WhatICanDoInternalContentDigest = 1708,
  WhatICanDoInternalContentFilePath = 1709,
  WhatICanDoInternalDescription = 1710,
  WhatICanDoInternalFieldOwners = 1711,
  WhatICanDoInternalIgnoreType = 1712,
  WhatICanDoInternalMediaType = 1713,
  WhatICanDoInternalOwner = 1714,
  WhatICanDoInternalType = 1715,
  WhatICanDoName = 1716,
  WhatICanDoNodeLocale = 1717,
  WhatICanDoParentChildren = 1718,
  WhatICanDoParentChildrenChildren = 1719,
  WhatICanDoParentChildrenId = 1720,
  WhatICanDoParentId = 1721,
  WhatICanDoParentInternalContent = 1722,
  WhatICanDoParentInternalContentDigest = 1723,
  WhatICanDoParentInternalContentFilePath = 1724,
  WhatICanDoParentInternalDescription = 1725,
  WhatICanDoParentInternalFieldOwners = 1726,
  WhatICanDoParentInternalIgnoreType = 1727,
  WhatICanDoParentInternalMediaType = 1728,
  WhatICanDoParentInternalOwner = 1729,
  WhatICanDoParentInternalType = 1730,
  WhatICanDoParentParentChildren = 1731,
  WhatICanDoParentParentId = 1732,
  WhatICanDoSortKey = 1733,
  WhatICanDoSpaceId = 1734,
  WhatICanDoSubName = 1735,
  WhatICanDoSysRevision = 1736,
  WhatICanDoSysType = 1737,
  WhatICanDoUpdatedAt = 1738
}

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
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconGroupConnectionGroupArgs = {
  field: ContentfulIconFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulIconGroupConnectionMaxArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconGroupConnectionMinArgs = {
  field: ContentfulIconFieldsEnum;
};


export type ContentfulIconGroupConnectionSumArgs = {
  field: ContentfulIconFieldsEnum;
};

export type ContentfulIconSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulIconFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulIconSys = {
  readonly contentType: Maybe<ContentfulIconSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulIconSysContentType = {
  readonly sys: Maybe<ContentfulIconSysContentTypeSys>;
};

export type ContentfulIconSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulIconSysContentTypeSysFilterInput>;
};

export type ContentfulIconSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulIconSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulIconSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulIconSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssConnectionGroupArgs = {
  field: ContentfulOssFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulOssConnectionMaxArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssConnectionMinArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssConnectionSumArgs = {
  field: ContentfulOssFieldsEnum;
};

export type ContentfulOssEdge = {
  readonly next: Maybe<ContentfulOss>;
  readonly node: ContentfulOss;
  readonly previous: Maybe<ContentfulOss>;
};

export enum ContentfulOssFieldsEnum {
  ChildContentfulOssDetailTextNodeChildMdxBody = 0,
  ChildContentfulOssDetailTextNodeChildMdxChildren = 1,
  ChildContentfulOssDetailTextNodeChildMdxChildrenChildren = 2,
  ChildContentfulOssDetailTextNodeChildMdxChildrenId = 3,
  ChildContentfulOssDetailTextNodeChildMdxExcerpt = 4,
  ChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 5,
  ChildContentfulOssDetailTextNodeChildMdxFrontmatterTitle = 6,
  ChildContentfulOssDetailTextNodeChildMdxHeadings = 7,
  ChildContentfulOssDetailTextNodeChildMdxHeadingsDepth = 8,
  ChildContentfulOssDetailTextNodeChildMdxHeadingsValue = 9,
  ChildContentfulOssDetailTextNodeChildMdxHtml = 10,
  ChildContentfulOssDetailTextNodeChildMdxId = 11,
  ChildContentfulOssDetailTextNodeChildMdxInternalContent = 12,
  ChildContentfulOssDetailTextNodeChildMdxInternalContentDigest = 13,
  ChildContentfulOssDetailTextNodeChildMdxInternalContentFilePath = 14,
  ChildContentfulOssDetailTextNodeChildMdxInternalDescription = 15,
  ChildContentfulOssDetailTextNodeChildMdxInternalFieldOwners = 16,
  ChildContentfulOssDetailTextNodeChildMdxInternalIgnoreType = 17,
  ChildContentfulOssDetailTextNodeChildMdxInternalMediaType = 18,
  ChildContentfulOssDetailTextNodeChildMdxInternalOwner = 19,
  ChildContentfulOssDetailTextNodeChildMdxInternalType = 20,
  ChildContentfulOssDetailTextNodeChildMdxMdxAst = 21,
  ChildContentfulOssDetailTextNodeChildMdxParentChildren = 22,
  ChildContentfulOssDetailTextNodeChildMdxParentId = 23,
  ChildContentfulOssDetailTextNodeChildMdxRawBody = 24,
  ChildContentfulOssDetailTextNodeChildMdxSlug = 25,
  ChildContentfulOssDetailTextNodeChildMdxTableOfContents = 26,
  ChildContentfulOssDetailTextNodeChildMdxTimeToRead = 27,
  ChildContentfulOssDetailTextNodeChildMdxWordCountParagraphs = 28,
  ChildContentfulOssDetailTextNodeChildMdxWordCountSentences = 29,
  ChildContentfulOssDetailTextNodeChildMdxWordCountWords = 30,
  ChildContentfulOssDetailTextNodeChildren = 31,
  ChildContentfulOssDetailTextNodeChildrenMdx = 32,
  ChildContentfulOssDetailTextNodeChildrenMdxBody = 33,
  ChildContentfulOssDetailTextNodeChildrenMdxChildren = 34,
  ChildContentfulOssDetailTextNodeChildrenMdxChildrenChildren = 35,
  ChildContentfulOssDetailTextNodeChildrenMdxChildrenId = 36,
  ChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 37,
  ChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 38,
  ChildContentfulOssDetailTextNodeChildrenMdxFrontmatterTitle = 39,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadings = 40,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadingsDepth = 41,
  ChildContentfulOssDetailTextNodeChildrenMdxHeadingsValue = 42,
  ChildContentfulOssDetailTextNodeChildrenMdxHtml = 43,
  ChildContentfulOssDetailTextNodeChildrenMdxId = 44,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalContent = 45,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalContentDigest = 46,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalContentFilePath = 47,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalDescription = 48,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalFieldOwners = 49,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalIgnoreType = 50,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalMediaType = 51,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalOwner = 52,
  ChildContentfulOssDetailTextNodeChildrenMdxInternalType = 53,
  ChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 54,
  ChildContentfulOssDetailTextNodeChildrenMdxParentChildren = 55,
  ChildContentfulOssDetailTextNodeChildrenMdxParentId = 56,
  ChildContentfulOssDetailTextNodeChildrenMdxRawBody = 57,
  ChildContentfulOssDetailTextNodeChildrenMdxSlug = 58,
  ChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 59,
  ChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 60,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountParagraphs = 61,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountSentences = 62,
  ChildContentfulOssDetailTextNodeChildrenMdxWordCountWords = 63,
  ChildContentfulOssDetailTextNodeChildrenChildren = 64,
  ChildContentfulOssDetailTextNodeChildrenChildrenChildren = 65,
  ChildContentfulOssDetailTextNodeChildrenChildrenId = 66,
  ChildContentfulOssDetailTextNodeChildrenId = 67,
  ChildContentfulOssDetailTextNodeChildrenInternalContent = 68,
  ChildContentfulOssDetailTextNodeChildrenInternalContentDigest = 69,
  ChildContentfulOssDetailTextNodeChildrenInternalContentFilePath = 70,
  ChildContentfulOssDetailTextNodeChildrenInternalDescription = 71,
  ChildContentfulOssDetailTextNodeChildrenInternalFieldOwners = 72,
  ChildContentfulOssDetailTextNodeChildrenInternalIgnoreType = 73,
  ChildContentfulOssDetailTextNodeChildrenInternalMediaType = 74,
  ChildContentfulOssDetailTextNodeChildrenInternalOwner = 75,
  ChildContentfulOssDetailTextNodeChildrenInternalType = 76,
  ChildContentfulOssDetailTextNodeChildrenParentChildren = 77,
  ChildContentfulOssDetailTextNodeChildrenParentId = 78,
  ChildContentfulOssDetailTextNodeDetail = 79,
  ChildContentfulOssDetailTextNodeId = 80,
  ChildContentfulOssDetailTextNodeInternalContent = 81,
  ChildContentfulOssDetailTextNodeInternalContentDigest = 82,
  ChildContentfulOssDetailTextNodeInternalContentFilePath = 83,
  ChildContentfulOssDetailTextNodeInternalDescription = 84,
  ChildContentfulOssDetailTextNodeInternalFieldOwners = 85,
  ChildContentfulOssDetailTextNodeInternalIgnoreType = 86,
  ChildContentfulOssDetailTextNodeInternalMediaType = 87,
  ChildContentfulOssDetailTextNodeInternalOwner = 88,
  ChildContentfulOssDetailTextNodeInternalType = 89,
  ChildContentfulOssDetailTextNodeParentChildren = 90,
  ChildContentfulOssDetailTextNodeParentChildrenChildren = 91,
  ChildContentfulOssDetailTextNodeParentChildrenId = 92,
  ChildContentfulOssDetailTextNodeParentId = 93,
  ChildContentfulOssDetailTextNodeParentInternalContent = 94,
  ChildContentfulOssDetailTextNodeParentInternalContentDigest = 95,
  ChildContentfulOssDetailTextNodeParentInternalContentFilePath = 96,
  ChildContentfulOssDetailTextNodeParentInternalDescription = 97,
  ChildContentfulOssDetailTextNodeParentInternalFieldOwners = 98,
  ChildContentfulOssDetailTextNodeParentInternalIgnoreType = 99,
  ChildContentfulOssDetailTextNodeParentInternalMediaType = 100,
  ChildContentfulOssDetailTextNodeParentInternalOwner = 101,
  ChildContentfulOssDetailTextNodeParentInternalType = 102,
  ChildContentfulOssDetailTextNodeParentParentChildren = 103,
  ChildContentfulOssDetailTextNodeParentParentId = 104,
  ChildContentfulOssDetailTextNodeSysType = 105,
  Children = 106,
  ChildrenContentfulOssDetailTextNode = 107,
  ChildrenContentfulOssDetailTextNodeChildMdxBody = 108,
  ChildrenContentfulOssDetailTextNodeChildMdxChildren = 109,
  ChildrenContentfulOssDetailTextNodeChildMdxChildrenChildren = 110,
  ChildrenContentfulOssDetailTextNodeChildMdxChildrenId = 111,
  ChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 112,
  ChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 113,
  ChildrenContentfulOssDetailTextNodeChildMdxFrontmatterTitle = 114,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadings = 115,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadingsDepth = 116,
  ChildrenContentfulOssDetailTextNodeChildMdxHeadingsValue = 117,
  ChildrenContentfulOssDetailTextNodeChildMdxHtml = 118,
  ChildrenContentfulOssDetailTextNodeChildMdxId = 119,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalContent = 120,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalContentDigest = 121,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalContentFilePath = 122,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalDescription = 123,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalFieldOwners = 124,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalIgnoreType = 125,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalMediaType = 126,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalOwner = 127,
  ChildrenContentfulOssDetailTextNodeChildMdxInternalType = 128,
  ChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 129,
  ChildrenContentfulOssDetailTextNodeChildMdxParentChildren = 130,
  ChildrenContentfulOssDetailTextNodeChildMdxParentId = 131,
  ChildrenContentfulOssDetailTextNodeChildMdxRawBody = 132,
  ChildrenContentfulOssDetailTextNodeChildMdxSlug = 133,
  ChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 134,
  ChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 135,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountParagraphs = 136,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountSentences = 137,
  ChildrenContentfulOssDetailTextNodeChildMdxWordCountWords = 138,
  ChildrenContentfulOssDetailTextNodeChildren = 139,
  ChildrenContentfulOssDetailTextNodeChildrenMdx = 140,
  ChildrenContentfulOssDetailTextNodeChildrenMdxBody = 141,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 142,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildrenChildren = 143,
  ChildrenContentfulOssDetailTextNodeChildrenMdxChildrenId = 144,
  ChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 145,
  ChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 146,
  ChildrenContentfulOssDetailTextNodeChildrenMdxFrontmatterTitle = 147,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 148,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadingsDepth = 149,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHeadingsValue = 150,
  ChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 151,
  ChildrenContentfulOssDetailTextNodeChildrenMdxId = 152,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalContent = 153,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalContentDigest = 154,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalContentFilePath = 155,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalDescription = 156,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalFieldOwners = 157,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalIgnoreType = 158,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalMediaType = 159,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalOwner = 160,
  ChildrenContentfulOssDetailTextNodeChildrenMdxInternalType = 161,
  ChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 162,
  ChildrenContentfulOssDetailTextNodeChildrenMdxParentChildren = 163,
  ChildrenContentfulOssDetailTextNodeChildrenMdxParentId = 164,
  ChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 165,
  ChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 166,
  ChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 167,
  ChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 168,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountParagraphs = 169,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountSentences = 170,
  ChildrenContentfulOssDetailTextNodeChildrenMdxWordCountWords = 171,
  ChildrenContentfulOssDetailTextNodeChildrenChildren = 172,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenChildren = 173,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenId = 174,
  ChildrenContentfulOssDetailTextNodeChildrenId = 175,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContent = 176,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContentDigest = 177,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContentFilePath = 178,
  ChildrenContentfulOssDetailTextNodeChildrenInternalDescription = 179,
  ChildrenContentfulOssDetailTextNodeChildrenInternalFieldOwners = 180,
  ChildrenContentfulOssDetailTextNodeChildrenInternalIgnoreType = 181,
  ChildrenContentfulOssDetailTextNodeChildrenInternalMediaType = 182,
  ChildrenContentfulOssDetailTextNodeChildrenInternalOwner = 183,
  ChildrenContentfulOssDetailTextNodeChildrenInternalType = 184,
  ChildrenContentfulOssDetailTextNodeChildrenParentChildren = 185,
  ChildrenContentfulOssDetailTextNodeChildrenParentId = 186,
  ChildrenContentfulOssDetailTextNodeDetail = 187,
  ChildrenContentfulOssDetailTextNodeId = 188,
  ChildrenContentfulOssDetailTextNodeInternalContent = 189,
  ChildrenContentfulOssDetailTextNodeInternalContentDigest = 190,
  ChildrenContentfulOssDetailTextNodeInternalContentFilePath = 191,
  ChildrenContentfulOssDetailTextNodeInternalDescription = 192,
  ChildrenContentfulOssDetailTextNodeInternalFieldOwners = 193,
  ChildrenContentfulOssDetailTextNodeInternalIgnoreType = 194,
  ChildrenContentfulOssDetailTextNodeInternalMediaType = 195,
  ChildrenContentfulOssDetailTextNodeInternalOwner = 196,
  ChildrenContentfulOssDetailTextNodeInternalType = 197,
  ChildrenContentfulOssDetailTextNodeParentChildren = 198,
  ChildrenContentfulOssDetailTextNodeParentChildrenChildren = 199,
  ChildrenContentfulOssDetailTextNodeParentChildrenId = 200,
  ChildrenContentfulOssDetailTextNodeParentId = 201,
  ChildrenContentfulOssDetailTextNodeParentInternalContent = 202,
  ChildrenContentfulOssDetailTextNodeParentInternalContentDigest = 203,
  ChildrenContentfulOssDetailTextNodeParentInternalContentFilePath = 204,
  ChildrenContentfulOssDetailTextNodeParentInternalDescription = 205,
  ChildrenContentfulOssDetailTextNodeParentInternalFieldOwners = 206,
  ChildrenContentfulOssDetailTextNodeParentInternalIgnoreType = 207,
  ChildrenContentfulOssDetailTextNodeParentInternalMediaType = 208,
  ChildrenContentfulOssDetailTextNodeParentInternalOwner = 209,
  ChildrenContentfulOssDetailTextNodeParentInternalType = 210,
  ChildrenContentfulOssDetailTextNodeParentParentChildren = 211,
  ChildrenContentfulOssDetailTextNodeParentParentId = 212,
  ChildrenContentfulOssDetailTextNodeSysType = 213,
  ChildrenChildren = 214,
  ChildrenChildrenChildren = 215,
  ChildrenChildrenChildrenChildren = 216,
  ChildrenChildrenChildrenId = 217,
  ChildrenChildrenId = 218,
  ChildrenChildrenInternalContent = 219,
  ChildrenChildrenInternalContentDigest = 220,
  ChildrenChildrenInternalContentFilePath = 221,
  ChildrenChildrenInternalDescription = 222,
  ChildrenChildrenInternalFieldOwners = 223,
  ChildrenChildrenInternalIgnoreType = 224,
  ChildrenChildrenInternalMediaType = 225,
  ChildrenChildrenInternalOwner = 226,
  ChildrenChildrenInternalType = 227,
  ChildrenChildrenParentChildren = 228,
  ChildrenChildrenParentId = 229,
  ChildrenId = 230,
  ChildrenInternalContent = 231,
  ChildrenInternalContentDigest = 232,
  ChildrenInternalContentFilePath = 233,
  ChildrenInternalDescription = 234,
  ChildrenInternalFieldOwners = 235,
  ChildrenInternalIgnoreType = 236,
  ChildrenInternalMediaType = 237,
  ChildrenInternalOwner = 238,
  ChildrenInternalType = 239,
  ChildrenParentChildren = 240,
  ChildrenParentChildrenChildren = 241,
  ChildrenParentChildrenId = 242,
  ChildrenParentId = 243,
  ChildrenParentInternalContent = 244,
  ChildrenParentInternalContentDigest = 245,
  ChildrenParentInternalContentFilePath = 246,
  ChildrenParentInternalDescription = 247,
  ChildrenParentInternalFieldOwners = 248,
  ChildrenParentInternalIgnoreType = 249,
  ChildrenParentInternalMediaType = 250,
  ChildrenParentInternalOwner = 251,
  ChildrenParentInternalType = 252,
  ChildrenParentParentChildren = 253,
  ChildrenParentParentId = 254,
  ContentfulId = 255,
  CreatedAt = 256,
  DetailChildMdxBody = 257,
  DetailChildMdxChildren = 258,
  DetailChildMdxChildrenChildren = 259,
  DetailChildMdxChildrenId = 260,
  DetailChildMdxExcerpt = 261,
  DetailChildMdxFileAbsolutePath = 262,
  DetailChildMdxFrontmatterTitle = 263,
  DetailChildMdxHeadings = 264,
  DetailChildMdxHeadingsDepth = 265,
  DetailChildMdxHeadingsValue = 266,
  DetailChildMdxHtml = 267,
  DetailChildMdxId = 268,
  DetailChildMdxInternalContent = 269,
  DetailChildMdxInternalContentDigest = 270,
  DetailChildMdxInternalContentFilePath = 271,
  DetailChildMdxInternalDescription = 272,
  DetailChildMdxInternalFieldOwners = 273,
  DetailChildMdxInternalIgnoreType = 274,
  DetailChildMdxInternalMediaType = 275,
  DetailChildMdxInternalOwner = 276,
  DetailChildMdxInternalType = 277,
  DetailChildMdxMdxAst = 278,
  DetailChildMdxParentChildren = 279,
  DetailChildMdxParentId = 280,
  DetailChildMdxRawBody = 281,
  DetailChildMdxSlug = 282,
  DetailChildMdxTableOfContents = 283,
  DetailChildMdxTimeToRead = 284,
  DetailChildMdxWordCountParagraphs = 285,
  DetailChildMdxWordCountSentences = 286,
  DetailChildMdxWordCountWords = 287,
  DetailChildren = 288,
  DetailChildrenMdx = 289,
  DetailChildrenMdxBody = 290,
  DetailChildrenMdxChildren = 291,
  DetailChildrenMdxChildrenChildren = 292,
  DetailChildrenMdxChildrenId = 293,
  DetailChildrenMdxExcerpt = 294,
  DetailChildrenMdxFileAbsolutePath = 295,
  DetailChildrenMdxFrontmatterTitle = 296,
  DetailChildrenMdxHeadings = 297,
  DetailChildrenMdxHeadingsDepth = 298,
  DetailChildrenMdxHeadingsValue = 299,
  DetailChildrenMdxHtml = 300,
  DetailChildrenMdxId = 301,
  DetailChildrenMdxInternalContent = 302,
  DetailChildrenMdxInternalContentDigest = 303,
  DetailChildrenMdxInternalContentFilePath = 304,
  DetailChildrenMdxInternalDescription = 305,
  DetailChildrenMdxInternalFieldOwners = 306,
  DetailChildrenMdxInternalIgnoreType = 307,
  DetailChildrenMdxInternalMediaType = 308,
  DetailChildrenMdxInternalOwner = 309,
  DetailChildrenMdxInternalType = 310,
  DetailChildrenMdxMdxAst = 311,
  DetailChildrenMdxParentChildren = 312,
  DetailChildrenMdxParentId = 313,
  DetailChildrenMdxRawBody = 314,
  DetailChildrenMdxSlug = 315,
  DetailChildrenMdxTableOfContents = 316,
  DetailChildrenMdxTimeToRead = 317,
  DetailChildrenMdxWordCountParagraphs = 318,
  DetailChildrenMdxWordCountSentences = 319,
  DetailChildrenMdxWordCountWords = 320,
  DetailChildrenChildren = 321,
  DetailChildrenChildrenChildren = 322,
  DetailChildrenChildrenId = 323,
  DetailChildrenId = 324,
  DetailChildrenInternalContent = 325,
  DetailChildrenInternalContentDigest = 326,
  DetailChildrenInternalContentFilePath = 327,
  DetailChildrenInternalDescription = 328,
  DetailChildrenInternalFieldOwners = 329,
  DetailChildrenInternalIgnoreType = 330,
  DetailChildrenInternalMediaType = 331,
  DetailChildrenInternalOwner = 332,
  DetailChildrenInternalType = 333,
  DetailChildrenParentChildren = 334,
  DetailChildrenParentId = 335,
  DetailDetail = 336,
  DetailId = 337,
  DetailInternalContent = 338,
  DetailInternalContentDigest = 339,
  DetailInternalContentFilePath = 340,
  DetailInternalDescription = 341,
  DetailInternalFieldOwners = 342,
  DetailInternalIgnoreType = 343,
  DetailInternalMediaType = 344,
  DetailInternalOwner = 345,
  DetailInternalType = 346,
  DetailParentChildren = 347,
  DetailParentChildrenChildren = 348,
  DetailParentChildrenId = 349,
  DetailParentId = 350,
  DetailParentInternalContent = 351,
  DetailParentInternalContentDigest = 352,
  DetailParentInternalContentFilePath = 353,
  DetailParentInternalDescription = 354,
  DetailParentInternalFieldOwners = 355,
  DetailParentInternalIgnoreType = 356,
  DetailParentInternalMediaType = 357,
  DetailParentInternalOwner = 358,
  DetailParentInternalType = 359,
  DetailParentParentChildren = 360,
  DetailParentParentId = 361,
  DetailSysType = 362,
  Href = 363,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 364,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 365,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 366,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 367,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 368,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 369,
  IconChildContentfulIconSvgTextNodeChildMdxId = 370,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 371,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 372,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 373,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 374,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 375,
  IconChildContentfulIconSvgTextNodeChildren = 376,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 377,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 378,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 379,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 380,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 381,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 382,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 383,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 384,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 385,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 386,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 387,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 388,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 389,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 390,
  IconChildContentfulIconSvgTextNodeChildrenId = 391,
  IconChildContentfulIconSvgTextNodeId = 392,
  IconChildContentfulIconSvgTextNodeInternalContent = 393,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 394,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 395,
  IconChildContentfulIconSvgTextNodeInternalDescription = 396,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 397,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 398,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 399,
  IconChildContentfulIconSvgTextNodeInternalOwner = 400,
  IconChildContentfulIconSvgTextNodeInternalType = 401,
  IconChildContentfulIconSvgTextNodeParentChildren = 402,
  IconChildContentfulIconSvgTextNodeParentId = 403,
  IconChildContentfulIconSvgTextNodeSvg = 404,
  IconChildContentfulIconSvgTextNodeSysType = 405,
  IconChildren = 406,
  IconChildrenContentfulIconSvgTextNode = 407,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 408,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 409,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 410,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 411,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 412,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 413,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 414,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 415,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 416,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 417,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 418,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 419,
  IconChildrenContentfulIconSvgTextNodeChildren = 420,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 421,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 422,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 423,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 424,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 425,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 426,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 427,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 428,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 429,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 430,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 431,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 432,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 433,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 434,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 435,
  IconChildrenContentfulIconSvgTextNodeId = 436,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 437,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 438,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 439,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 440,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 441,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 442,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 443,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 444,
  IconChildrenContentfulIconSvgTextNodeInternalType = 445,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 446,
  IconChildrenContentfulIconSvgTextNodeParentId = 447,
  IconChildrenContentfulIconSvgTextNodeSvg = 448,
  IconChildrenContentfulIconSvgTextNodeSysType = 449,
  IconChildrenChildren = 450,
  IconChildrenChildrenChildren = 451,
  IconChildrenChildrenId = 452,
  IconChildrenId = 453,
  IconChildrenInternalContent = 454,
  IconChildrenInternalContentDigest = 455,
  IconChildrenInternalContentFilePath = 456,
  IconChildrenInternalDescription = 457,
  IconChildrenInternalFieldOwners = 458,
  IconChildrenInternalIgnoreType = 459,
  IconChildrenInternalMediaType = 460,
  IconChildrenInternalOwner = 461,
  IconChildrenInternalType = 462,
  IconChildrenParentChildren = 463,
  IconChildrenParentId = 464,
  IconContact = 465,
  IconContactChildren = 466,
  IconContactChildrenChildren = 467,
  IconContactChildrenId = 468,
  IconContactContentfulId = 469,
  IconContactCreatedAt = 470,
  IconContactHref = 471,
  IconContactIconSvgDarkChildren = 472,
  IconContactIconSvgDarkContentfulId = 473,
  IconContactIconSvgDarkCreatedAt = 474,
  IconContactIconSvgDarkDescription = 475,
  IconContactIconSvgDarkFilename = 476,
  IconContactIconSvgDarkFilesize = 477,
  IconContactIconSvgDarkGatsbyImage = 478,
  IconContactIconSvgDarkGatsbyImageData = 479,
  IconContactIconSvgDarkHeight = 480,
  IconContactIconSvgDarkId = 481,
  IconContactIconSvgDarkMimeType = 482,
  IconContactIconSvgDarkNodeLocale = 483,
  IconContactIconSvgDarkPlaceholderUrl = 484,
  IconContactIconSvgDarkPublicUrl = 485,
  IconContactIconSvgDarkSize = 486,
  IconContactIconSvgDarkSpaceId = 487,
  IconContactIconSvgDarkTitle = 488,
  IconContactIconSvgDarkUpdatedAt = 489,
  IconContactIconSvgDarkUrl = 490,
  IconContactIconSvgDarkWidth = 491,
  IconContactIconSvgLightChildren = 492,
  IconContactIconSvgLightContentfulId = 493,
  IconContactIconSvgLightCreatedAt = 494,
  IconContactIconSvgLightDescription = 495,
  IconContactIconSvgLightFilename = 496,
  IconContactIconSvgLightFilesize = 497,
  IconContactIconSvgLightGatsbyImage = 498,
  IconContactIconSvgLightGatsbyImageData = 499,
  IconContactIconSvgLightHeight = 500,
  IconContactIconSvgLightId = 501,
  IconContactIconSvgLightMimeType = 502,
  IconContactIconSvgLightNodeLocale = 503,
  IconContactIconSvgLightPlaceholderUrl = 504,
  IconContactIconSvgLightPublicUrl = 505,
  IconContactIconSvgLightSize = 506,
  IconContactIconSvgLightSpaceId = 507,
  IconContactIconSvgLightTitle = 508,
  IconContactIconSvgLightUpdatedAt = 509,
  IconContactIconSvgLightUrl = 510,
  IconContactIconSvgLightWidth = 511,
  IconContactIconChildren = 512,
  IconContactIconChildrenContentfulIconSvgTextNode = 513,
  IconContactIconContact = 514,
  IconContactIconContentfulId = 515,
  IconContactIconCreatedAt = 516,
  IconContactIconHistory = 517,
  IconContactIconId = 518,
  IconContactIconName = 519,
  IconContactIconNodeLocale = 520,
  IconContactIconOss = 521,
  IconContactIconProject = 522,
  IconContactIconSpaceId = 523,
  IconContactIconUpdatedAt = 524,
  IconContactIconWhatICanDo = 525,
  IconContactId = 526,
  IconContactInternalContent = 527,
  IconContactInternalContentDigest = 528,
  IconContactInternalContentFilePath = 529,
  IconContactInternalDescription = 530,
  IconContactInternalFieldOwners = 531,
  IconContactInternalIgnoreType = 532,
  IconContactInternalMediaType = 533,
  IconContactInternalOwner = 534,
  IconContactInternalType = 535,
  IconContactName = 536,
  IconContactNodeLocale = 537,
  IconContactParentChildren = 538,
  IconContactParentId = 539,
  IconContactSortKey = 540,
  IconContactSpaceId = 541,
  IconContactSubName = 542,
  IconContactSysRevision = 543,
  IconContactSysType = 544,
  IconContactUpdatedAt = 545,
  IconContentfulId = 546,
  IconCreatedAt = 547,
  IconHistory = 548,
  IconHistoryChildren = 549,
  IconHistoryChildrenChildren = 550,
  IconHistoryChildrenId = 551,
  IconHistoryContentfulId = 552,
  IconHistoryCreatedAt = 553,
  IconHistoryDate = 554,
  IconHistoryIconChildren = 555,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 556,
  IconHistoryIconContact = 557,
  IconHistoryIconContentfulId = 558,
  IconHistoryIconCreatedAt = 559,
  IconHistoryIconHistory = 560,
  IconHistoryIconId = 561,
  IconHistoryIconName = 562,
  IconHistoryIconNodeLocale = 563,
  IconHistoryIconOss = 564,
  IconHistoryIconProject = 565,
  IconHistoryIconSpaceId = 566,
  IconHistoryIconUpdatedAt = 567,
  IconHistoryIconWhatICanDo = 568,
  IconHistoryId = 569,
  IconHistoryInternalContent = 570,
  IconHistoryInternalContentDigest = 571,
  IconHistoryInternalContentFilePath = 572,
  IconHistoryInternalDescription = 573,
  IconHistoryInternalFieldOwners = 574,
  IconHistoryInternalIgnoreType = 575,
  IconHistoryInternalMediaType = 576,
  IconHistoryInternalOwner = 577,
  IconHistoryInternalType = 578,
  IconHistoryName = 579,
  IconHistoryNodeLocale = 580,
  IconHistoryParentChildren = 581,
  IconHistoryParentId = 582,
  IconHistorySpaceId = 583,
  IconHistorySubName = 584,
  IconHistorySysRevision = 585,
  IconHistorySysType = 586,
  IconHistoryUpdatedAt = 587,
  IconId = 588,
  IconInternalContent = 589,
  IconInternalContentDigest = 590,
  IconInternalContentFilePath = 591,
  IconInternalDescription = 592,
  IconInternalFieldOwners = 593,
  IconInternalIgnoreType = 594,
  IconInternalMediaType = 595,
  IconInternalOwner = 596,
  IconInternalType = 597,
  IconName = 598,
  IconNodeLocale = 599,
  IconOss = 600,
  IconOssChildContentfulOssDetailTextNodeChildren = 601,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 602,
  IconOssChildContentfulOssDetailTextNodeDetail = 603,
  IconOssChildContentfulOssDetailTextNodeId = 604,
  IconOssChildren = 605,
  IconOssChildrenContentfulOssDetailTextNode = 606,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 607,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 608,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 609,
  IconOssChildrenContentfulOssDetailTextNodeId = 610,
  IconOssChildrenChildren = 611,
  IconOssChildrenId = 612,
  IconOssContentfulId = 613,
  IconOssCreatedAt = 614,
  IconOssDetailChildren = 615,
  IconOssDetailChildrenMdx = 616,
  IconOssDetailDetail = 617,
  IconOssDetailId = 618,
  IconOssHref = 619,
  IconOssIconChildren = 620,
  IconOssIconChildrenContentfulIconSvgTextNode = 621,
  IconOssIconContact = 622,
  IconOssIconContentfulId = 623,
  IconOssIconCreatedAt = 624,
  IconOssIconHistory = 625,
  IconOssIconId = 626,
  IconOssIconName = 627,
  IconOssIconNodeLocale = 628,
  IconOssIconOss = 629,
  IconOssIconProject = 630,
  IconOssIconSpaceId = 631,
  IconOssIconUpdatedAt = 632,
  IconOssIconWhatICanDo = 633,
  IconOssId = 634,
  IconOssImageChildren = 635,
  IconOssImageContentfulId = 636,
  IconOssImageCreatedAt = 637,
  IconOssImageDescription = 638,
  IconOssImageFilename = 639,
  IconOssImageFilesize = 640,
  IconOssImageGatsbyImage = 641,
  IconOssImageGatsbyImageData = 642,
  IconOssImageHeight = 643,
  IconOssImageId = 644,
  IconOssImageMimeType = 645,
  IconOssImageNodeLocale = 646,
  IconOssImagePlaceholderUrl = 647,
  IconOssImagePublicUrl = 648,
  IconOssImageSize = 649,
  IconOssImageSpaceId = 650,
  IconOssImageTitle = 651,
  IconOssImageUpdatedAt = 652,
  IconOssImageUrl = 653,
  IconOssImageWidth = 654,
  IconOssInternalContent = 655,
  IconOssInternalContentDigest = 656,
  IconOssInternalContentFilePath = 657,
  IconOssInternalDescription = 658,
  IconOssInternalFieldOwners = 659,
  IconOssInternalIgnoreType = 660,
  IconOssInternalMediaType = 661,
  IconOssInternalOwner = 662,
  IconOssInternalType = 663,
  IconOssName = 664,
  IconOssNodeLocale = 665,
  IconOssParentChildren = 666,
  IconOssParentId = 667,
  IconOssSpaceId = 668,
  IconOssStartDate = 669,
  IconOssSubName = 670,
  IconOssSysRevision = 671,
  IconOssSysType = 672,
  IconOssTags = 673,
  IconOssTagsBlogPost = 674,
  IconOssTagsChildren = 675,
  IconOssTagsContentfulId = 676,
  IconOssTagsCreatedAt = 677,
  IconOssTagsId = 678,
  IconOssTagsLevel = 679,
  IconOssTagsName = 680,
  IconOssTagsNodeLocale = 681,
  IconOssTagsOss = 682,
  IconOssTagsProject = 683,
  IconOssTagsSkillGrpup = 684,
  IconOssTagsSkillMap = 685,
  IconOssTagsSpaceId = 686,
  IconOssTagsUpdatedAt = 687,
  IconOssUpdatedAt = 688,
  IconParentChildren = 689,
  IconParentChildrenChildren = 690,
  IconParentChildrenId = 691,
  IconParentId = 692,
  IconParentInternalContent = 693,
  IconParentInternalContentDigest = 694,
  IconParentInternalContentFilePath = 695,
  IconParentInternalDescription = 696,
  IconParentInternalFieldOwners = 697,
  IconParentInternalIgnoreType = 698,
  IconParentInternalMediaType = 699,
  IconParentInternalOwner = 700,
  IconParentInternalType = 701,
  IconParentParentChildren = 702,
  IconParentParentId = 703,
  IconProject = 704,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 705,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 706,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 707,
  IconProjectChildContentfulProjectDetailTextNodeId = 708,
  IconProjectChildren = 709,
  IconProjectChildrenContentfulProjectDetailTextNode = 710,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 711,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 712,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 713,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 714,
  IconProjectChildrenChildren = 715,
  IconProjectChildrenId = 716,
  IconProjectContentfulId = 717,
  IconProjectCreatedAt = 718,
  IconProjectDetailChildren = 719,
  IconProjectDetailChildrenMdx = 720,
  IconProjectDetailDetail = 721,
  IconProjectDetailId = 722,
  IconProjectEndDate = 723,
  IconProjectIconChildren = 724,
  IconProjectIconChildrenContentfulIconSvgTextNode = 725,
  IconProjectIconContact = 726,
  IconProjectIconContentfulId = 727,
  IconProjectIconCreatedAt = 728,
  IconProjectIconHistory = 729,
  IconProjectIconId = 730,
  IconProjectIconName = 731,
  IconProjectIconNodeLocale = 732,
  IconProjectIconOss = 733,
  IconProjectIconProject = 734,
  IconProjectIconSpaceId = 735,
  IconProjectIconUpdatedAt = 736,
  IconProjectIconWhatICanDo = 737,
  IconProjectId = 738,
  IconProjectInternalContent = 739,
  IconProjectInternalContentDigest = 740,
  IconProjectInternalContentFilePath = 741,
  IconProjectInternalDescription = 742,
  IconProjectInternalFieldOwners = 743,
  IconProjectInternalIgnoreType = 744,
  IconProjectInternalMediaType = 745,
  IconProjectInternalOwner = 746,
  IconProjectInternalType = 747,
  IconProjectName = 748,
  IconProjectNodeLocale = 749,
  IconProjectParentChildren = 750,
  IconProjectParentId = 751,
  IconProjectSpaceId = 752,
  IconProjectStartDate = 753,
  IconProjectSubName = 754,
  IconProjectSysRevision = 755,
  IconProjectSysType = 756,
  IconProjectTags = 757,
  IconProjectTagsBlogPost = 758,
  IconProjectTagsChildren = 759,
  IconProjectTagsContentfulId = 760,
  IconProjectTagsCreatedAt = 761,
  IconProjectTagsId = 762,
  IconProjectTagsLevel = 763,
  IconProjectTagsName = 764,
  IconProjectTagsNodeLocale = 765,
  IconProjectTagsOss = 766,
  IconProjectTagsProject = 767,
  IconProjectTagsSkillGrpup = 768,
  IconProjectTagsSkillMap = 769,
  IconProjectTagsSpaceId = 770,
  IconProjectTagsUpdatedAt = 771,
  IconProjectUpdatedAt = 772,
  IconSpaceId = 773,
  IconSvgChildMdxBody = 774,
  IconSvgChildMdxChildren = 775,
  IconSvgChildMdxExcerpt = 776,
  IconSvgChildMdxFileAbsolutePath = 777,
  IconSvgChildMdxHeadings = 778,
  IconSvgChildMdxHtml = 779,
  IconSvgChildMdxId = 780,
  IconSvgChildMdxMdxAst = 781,
  IconSvgChildMdxRawBody = 782,
  IconSvgChildMdxSlug = 783,
  IconSvgChildMdxTableOfContents = 784,
  IconSvgChildMdxTimeToRead = 785,
  IconSvgChildren = 786,
  IconSvgChildrenMdx = 787,
  IconSvgChildrenMdxBody = 788,
  IconSvgChildrenMdxChildren = 789,
  IconSvgChildrenMdxExcerpt = 790,
  IconSvgChildrenMdxFileAbsolutePath = 791,
  IconSvgChildrenMdxHeadings = 792,
  IconSvgChildrenMdxHtml = 793,
  IconSvgChildrenMdxId = 794,
  IconSvgChildrenMdxMdxAst = 795,
  IconSvgChildrenMdxRawBody = 796,
  IconSvgChildrenMdxSlug = 797,
  IconSvgChildrenMdxTableOfContents = 798,
  IconSvgChildrenMdxTimeToRead = 799,
  IconSvgChildrenChildren = 800,
  IconSvgChildrenId = 801,
  IconSvgId = 802,
  IconSvgInternalContent = 803,
  IconSvgInternalContentDigest = 804,
  IconSvgInternalContentFilePath = 805,
  IconSvgInternalDescription = 806,
  IconSvgInternalFieldOwners = 807,
  IconSvgInternalIgnoreType = 808,
  IconSvgInternalMediaType = 809,
  IconSvgInternalOwner = 810,
  IconSvgInternalType = 811,
  IconSvgParentChildren = 812,
  IconSvgParentId = 813,
  IconSvgSvg = 814,
  IconSvgSysType = 815,
  IconSysRevision = 816,
  IconSysType = 817,
  IconUpdatedAt = 818,
  IconWhatICanDo = 819,
  IconWhatICanDoChildren = 820,
  IconWhatICanDoChildrenChildren = 821,
  IconWhatICanDoChildrenId = 822,
  IconWhatICanDoContentfulId = 823,
  IconWhatICanDoCreatedAt = 824,
  IconWhatICanDoIconChildren = 825,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 826,
  IconWhatICanDoIconContact = 827,
  IconWhatICanDoIconContentfulId = 828,
  IconWhatICanDoIconCreatedAt = 829,
  IconWhatICanDoIconHistory = 830,
  IconWhatICanDoIconId = 831,
  IconWhatICanDoIconName = 832,
  IconWhatICanDoIconNodeLocale = 833,
  IconWhatICanDoIconOss = 834,
  IconWhatICanDoIconProject = 835,
  IconWhatICanDoIconSpaceId = 836,
  IconWhatICanDoIconUpdatedAt = 837,
  IconWhatICanDoIconWhatICanDo = 838,
  IconWhatICanDoId = 839,
  IconWhatICanDoInternalContent = 840,
  IconWhatICanDoInternalContentDigest = 841,
  IconWhatICanDoInternalContentFilePath = 842,
  IconWhatICanDoInternalDescription = 843,
  IconWhatICanDoInternalFieldOwners = 844,
  IconWhatICanDoInternalIgnoreType = 845,
  IconWhatICanDoInternalMediaType = 846,
  IconWhatICanDoInternalOwner = 847,
  IconWhatICanDoInternalType = 848,
  IconWhatICanDoName = 849,
  IconWhatICanDoNodeLocale = 850,
  IconWhatICanDoParentChildren = 851,
  IconWhatICanDoParentId = 852,
  IconWhatICanDoSortKey = 853,
  IconWhatICanDoSpaceId = 854,
  IconWhatICanDoSubName = 855,
  IconWhatICanDoSysRevision = 856,
  IconWhatICanDoSysType = 857,
  IconWhatICanDoUpdatedAt = 858,
  Id = 859,
  ImageChildren = 860,
  ImageChildrenChildren = 861,
  ImageChildrenChildrenChildren = 862,
  ImageChildrenChildrenId = 863,
  ImageChildrenId = 864,
  ImageChildrenInternalContent = 865,
  ImageChildrenInternalContentDigest = 866,
  ImageChildrenInternalContentFilePath = 867,
  ImageChildrenInternalDescription = 868,
  ImageChildrenInternalFieldOwners = 869,
  ImageChildrenInternalIgnoreType = 870,
  ImageChildrenInternalMediaType = 871,
  ImageChildrenInternalOwner = 872,
  ImageChildrenInternalType = 873,
  ImageChildrenParentChildren = 874,
  ImageChildrenParentId = 875,
  ImageContentfulId = 876,
  ImageCreatedAt = 877,
  ImageDescription = 878,
  ImageFileContentType = 879,
  ImageFileDetailsSize = 880,
  ImageFileFileName = 881,
  ImageFileUrl = 882,
  ImageFilename = 883,
  ImageFilesize = 884,
  ImageGatsbyImage = 885,
  ImageGatsbyImageData = 886,
  ImageHeight = 887,
  ImageId = 888,
  ImageInternalContent = 889,
  ImageInternalContentDigest = 890,
  ImageInternalContentFilePath = 891,
  ImageInternalDescription = 892,
  ImageInternalFieldOwners = 893,
  ImageInternalIgnoreType = 894,
  ImageInternalMediaType = 895,
  ImageInternalOwner = 896,
  ImageInternalType = 897,
  ImageMimeType = 898,
  ImageNodeLocale = 899,
  ImageParentChildren = 900,
  ImageParentChildrenChildren = 901,
  ImageParentChildrenId = 902,
  ImageParentId = 903,
  ImageParentInternalContent = 904,
  ImageParentInternalContentDigest = 905,
  ImageParentInternalContentFilePath = 906,
  ImageParentInternalDescription = 907,
  ImageParentInternalFieldOwners = 908,
  ImageParentInternalIgnoreType = 909,
  ImageParentInternalMediaType = 910,
  ImageParentInternalOwner = 911,
  ImageParentInternalType = 912,
  ImageParentParentChildren = 913,
  ImageParentParentId = 914,
  ImagePlaceholderUrl = 915,
  ImagePublicUrl = 916,
  ImageResizeHeight = 917,
  ImageResizeSrc = 918,
  ImageResizeWidth = 919,
  ImageSize = 920,
  ImageSpaceId = 921,
  ImageSysRevision = 922,
  ImageSysType = 923,
  ImageTitle = 924,
  ImageUpdatedAt = 925,
  ImageUrl = 926,
  ImageWidth = 927,
  InternalContent = 928,
  InternalContentDigest = 929,
  InternalContentFilePath = 930,
  InternalDescription = 931,
  InternalFieldOwners = 932,
  InternalIgnoreType = 933,
  InternalMediaType = 934,
  InternalOwner = 935,
  InternalType = 936,
  Name = 937,
  NodeLocale = 938,
  ParentChildren = 939,
  ParentChildrenChildren = 940,
  ParentChildrenChildrenChildren = 941,
  ParentChildrenChildrenId = 942,
  ParentChildrenId = 943,
  ParentChildrenInternalContent = 944,
  ParentChildrenInternalContentDigest = 945,
  ParentChildrenInternalContentFilePath = 946,
  ParentChildrenInternalDescription = 947,
  ParentChildrenInternalFieldOwners = 948,
  ParentChildrenInternalIgnoreType = 949,
  ParentChildrenInternalMediaType = 950,
  ParentChildrenInternalOwner = 951,
  ParentChildrenInternalType = 952,
  ParentChildrenParentChildren = 953,
  ParentChildrenParentId = 954,
  ParentId = 955,
  ParentInternalContent = 956,
  ParentInternalContentDigest = 957,
  ParentInternalContentFilePath = 958,
  ParentInternalDescription = 959,
  ParentInternalFieldOwners = 960,
  ParentInternalIgnoreType = 961,
  ParentInternalMediaType = 962,
  ParentInternalOwner = 963,
  ParentInternalType = 964,
  ParentParentChildren = 965,
  ParentParentChildrenChildren = 966,
  ParentParentChildrenId = 967,
  ParentParentId = 968,
  ParentParentInternalContent = 969,
  ParentParentInternalContentDigest = 970,
  ParentParentInternalContentFilePath = 971,
  ParentParentInternalDescription = 972,
  ParentParentInternalFieldOwners = 973,
  ParentParentInternalIgnoreType = 974,
  ParentParentInternalMediaType = 975,
  ParentParentInternalOwner = 976,
  ParentParentInternalType = 977,
  ParentParentParentChildren = 978,
  ParentParentParentId = 979,
  SpaceId = 980,
  StartDate = 981,
  SubName = 982,
  SysContentTypeSysId = 983,
  SysContentTypeSysLinkType = 984,
  SysContentTypeSysType = 985,
  SysRevision = 986,
  SysType = 987,
  Tags = 988,
  TagsBlogPost = 989,
  TagsBlogPostCategoryChildren = 990,
  TagsBlogPostCategoryContentfulId = 991,
  TagsBlogPostCategoryCreatedAt = 992,
  TagsBlogPostCategoryId = 993,
  TagsBlogPostCategoryName = 994,
  TagsBlogPostCategoryNodeLocale = 995,
  TagsBlogPostCategorySlug = 996,
  TagsBlogPostCategorySortKey = 997,
  TagsBlogPostCategorySpaceId = 998,
  TagsBlogPostCategoryUpdatedAt = 999,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 1000,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 1001,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 1002,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 1003,
  TagsBlogPostChildren = 1004,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 1005,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 1006,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 1007,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 1008,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 1009,
  TagsBlogPostChildrenChildren = 1010,
  TagsBlogPostChildrenId = 1011,
  TagsBlogPostContentChildren = 1012,
  TagsBlogPostContentChildrenMdx = 1013,
  TagsBlogPostContentContent = 1014,
  TagsBlogPostContentId = 1015,
  TagsBlogPostContentfulId = 1016,
  TagsBlogPostCreated = 1017,
  TagsBlogPostCreatedAt = 1018,
  TagsBlogPostExcerpt = 1019,
  TagsBlogPostGatsbyPath = 1020,
  TagsBlogPostId = 1021,
  TagsBlogPostInternalContent = 1022,
  TagsBlogPostInternalContentDigest = 1023,
  TagsBlogPostInternalContentFilePath = 1024,
  TagsBlogPostInternalDescription = 1025,
  TagsBlogPostInternalFieldOwners = 1026,
  TagsBlogPostInternalIgnoreType = 1027,
  TagsBlogPostInternalMediaType = 1028,
  TagsBlogPostInternalOwner = 1029,
  TagsBlogPostInternalType = 1030,
  TagsBlogPostNodeLocale = 1031,
  TagsBlogPostParentChildren = 1032,
  TagsBlogPostParentId = 1033,
  TagsBlogPostSlug = 1034,
  TagsBlogPostSpaceId = 1035,
  TagsBlogPostSysRevision = 1036,
  TagsBlogPostSysType = 1037,
  TagsBlogPostTags = 1038,
  TagsBlogPostTagsBlogPost = 1039,
  TagsBlogPostTagsChildren = 1040,
  TagsBlogPostTagsContentfulId = 1041,
  TagsBlogPostTagsCreatedAt = 1042,
  TagsBlogPostTagsId = 1043,
  TagsBlogPostTagsLevel = 1044,
  TagsBlogPostTagsName = 1045,
  TagsBlogPostTagsNodeLocale = 1046,
  TagsBlogPostTagsOss = 1047,
  TagsBlogPostTagsProject = 1048,
  TagsBlogPostTagsSkillGrpup = 1049,
  TagsBlogPostTagsSkillMap = 1050,
  TagsBlogPostTagsSpaceId = 1051,
  TagsBlogPostTagsUpdatedAt = 1052,
  TagsBlogPostThumbnailChildren = 1053,
  TagsBlogPostThumbnailContentfulId = 1054,
  TagsBlogPostThumbnailCreatedAt = 1055,
  TagsBlogPostThumbnailDescription = 1056,
  TagsBlogPostThumbnailFilename = 1057,
  TagsBlogPostThumbnailFilesize = 1058,
  TagsBlogPostThumbnailGatsbyImage = 1059,
  TagsBlogPostThumbnailGatsbyImageData = 1060,
  TagsBlogPostThumbnailHeight = 1061,
  TagsBlogPostThumbnailId = 1062,
  TagsBlogPostThumbnailMimeType = 1063,
  TagsBlogPostThumbnailNodeLocale = 1064,
  TagsBlogPostThumbnailPlaceholderUrl = 1065,
  TagsBlogPostThumbnailPublicUrl = 1066,
  TagsBlogPostThumbnailSize = 1067,
  TagsBlogPostThumbnailSpaceId = 1068,
  TagsBlogPostThumbnailTitle = 1069,
  TagsBlogPostThumbnailUpdatedAt = 1070,
  TagsBlogPostThumbnailUrl = 1071,
  TagsBlogPostThumbnailWidth = 1072,
  TagsBlogPostTitle = 1073,
  TagsBlogPostUpdated = 1074,
  TagsBlogPostUpdatedAt = 1075,
  TagsChildren = 1076,
  TagsChildrenChildren = 1077,
  TagsChildrenChildrenChildren = 1078,
  TagsChildrenChildrenId = 1079,
  TagsChildrenId = 1080,
  TagsChildrenInternalContent = 1081,
  TagsChildrenInternalContentDigest = 1082,
  TagsChildrenInternalContentFilePath = 1083,
  TagsChildrenInternalDescription = 1084,
  TagsChildrenInternalFieldOwners = 1085,
  TagsChildrenInternalIgnoreType = 1086,
  TagsChildrenInternalMediaType = 1087,
  TagsChildrenInternalOwner = 1088,
  TagsChildrenInternalType = 1089,
  TagsChildrenParentChildren = 1090,
  TagsChildrenParentId = 1091,
  TagsContentfulId = 1092,
  TagsCreatedAt = 1093,
  TagsId = 1094,
  TagsInternalContent = 1095,
  TagsInternalContentDigest = 1096,
  TagsInternalContentFilePath = 1097,
  TagsInternalDescription = 1098,
  TagsInternalFieldOwners = 1099,
  TagsInternalIgnoreType = 1100,
  TagsInternalMediaType = 1101,
  TagsInternalOwner = 1102,
  TagsInternalType = 1103,
  TagsLevel = 1104,
  TagsName = 1105,
  TagsNodeLocale = 1106,
  TagsOss = 1107,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1108,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1109,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1110,
  TagsOssChildContentfulOssDetailTextNodeId = 1111,
  TagsOssChildren = 1112,
  TagsOssChildrenContentfulOssDetailTextNode = 1113,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1114,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1115,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1116,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1117,
  TagsOssChildrenChildren = 1118,
  TagsOssChildrenId = 1119,
  TagsOssContentfulId = 1120,
  TagsOssCreatedAt = 1121,
  TagsOssDetailChildren = 1122,
  TagsOssDetailChildrenMdx = 1123,
  TagsOssDetailDetail = 1124,
  TagsOssDetailId = 1125,
  TagsOssHref = 1126,
  TagsOssIconChildren = 1127,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1128,
  TagsOssIconContact = 1129,
  TagsOssIconContentfulId = 1130,
  TagsOssIconCreatedAt = 1131,
  TagsOssIconHistory = 1132,
  TagsOssIconId = 1133,
  TagsOssIconName = 1134,
  TagsOssIconNodeLocale = 1135,
  TagsOssIconOss = 1136,
  TagsOssIconProject = 1137,
  TagsOssIconSpaceId = 1138,
  TagsOssIconUpdatedAt = 1139,
  TagsOssIconWhatICanDo = 1140,
  TagsOssId = 1141,
  TagsOssImageChildren = 1142,
  TagsOssImageContentfulId = 1143,
  TagsOssImageCreatedAt = 1144,
  TagsOssImageDescription = 1145,
  TagsOssImageFilename = 1146,
  TagsOssImageFilesize = 1147,
  TagsOssImageGatsbyImage = 1148,
  TagsOssImageGatsbyImageData = 1149,
  TagsOssImageHeight = 1150,
  TagsOssImageId = 1151,
  TagsOssImageMimeType = 1152,
  TagsOssImageNodeLocale = 1153,
  TagsOssImagePlaceholderUrl = 1154,
  TagsOssImagePublicUrl = 1155,
  TagsOssImageSize = 1156,
  TagsOssImageSpaceId = 1157,
  TagsOssImageTitle = 1158,
  TagsOssImageUpdatedAt = 1159,
  TagsOssImageUrl = 1160,
  TagsOssImageWidth = 1161,
  TagsOssInternalContent = 1162,
  TagsOssInternalContentDigest = 1163,
  TagsOssInternalContentFilePath = 1164,
  TagsOssInternalDescription = 1165,
  TagsOssInternalFieldOwners = 1166,
  TagsOssInternalIgnoreType = 1167,
  TagsOssInternalMediaType = 1168,
  TagsOssInternalOwner = 1169,
  TagsOssInternalType = 1170,
  TagsOssName = 1171,
  TagsOssNodeLocale = 1172,
  TagsOssParentChildren = 1173,
  TagsOssParentId = 1174,
  TagsOssSpaceId = 1175,
  TagsOssStartDate = 1176,
  TagsOssSubName = 1177,
  TagsOssSysRevision = 1178,
  TagsOssSysType = 1179,
  TagsOssTags = 1180,
  TagsOssTagsBlogPost = 1181,
  TagsOssTagsChildren = 1182,
  TagsOssTagsContentfulId = 1183,
  TagsOssTagsCreatedAt = 1184,
  TagsOssTagsId = 1185,
  TagsOssTagsLevel = 1186,
  TagsOssTagsName = 1187,
  TagsOssTagsNodeLocale = 1188,
  TagsOssTagsOss = 1189,
  TagsOssTagsProject = 1190,
  TagsOssTagsSkillGrpup = 1191,
  TagsOssTagsSkillMap = 1192,
  TagsOssTagsSpaceId = 1193,
  TagsOssTagsUpdatedAt = 1194,
  TagsOssUpdatedAt = 1195,
  TagsParentChildren = 1196,
  TagsParentChildrenChildren = 1197,
  TagsParentChildrenId = 1198,
  TagsParentId = 1199,
  TagsParentInternalContent = 1200,
  TagsParentInternalContentDigest = 1201,
  TagsParentInternalContentFilePath = 1202,
  TagsParentInternalDescription = 1203,
  TagsParentInternalFieldOwners = 1204,
  TagsParentInternalIgnoreType = 1205,
  TagsParentInternalMediaType = 1206,
  TagsParentInternalOwner = 1207,
  TagsParentInternalType = 1208,
  TagsParentParentChildren = 1209,
  TagsParentParentId = 1210,
  TagsProject = 1211,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1212,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1213,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1214,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1215,
  TagsProjectChildren = 1216,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1217,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1218,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1219,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1220,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1221,
  TagsProjectChildrenChildren = 1222,
  TagsProjectChildrenId = 1223,
  TagsProjectContentfulId = 1224,
  TagsProjectCreatedAt = 1225,
  TagsProjectDetailChildren = 1226,
  TagsProjectDetailChildrenMdx = 1227,
  TagsProjectDetailDetail = 1228,
  TagsProjectDetailId = 1229,
  TagsProjectEndDate = 1230,
  TagsProjectIconChildren = 1231,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1232,
  TagsProjectIconContact = 1233,
  TagsProjectIconContentfulId = 1234,
  TagsProjectIconCreatedAt = 1235,
  TagsProjectIconHistory = 1236,
  TagsProjectIconId = 1237,
  TagsProjectIconName = 1238,
  TagsProjectIconNodeLocale = 1239,
  TagsProjectIconOss = 1240,
  TagsProjectIconProject = 1241,
  TagsProjectIconSpaceId = 1242,
  TagsProjectIconUpdatedAt = 1243,
  TagsProjectIconWhatICanDo = 1244,
  TagsProjectId = 1245,
  TagsProjectInternalContent = 1246,
  TagsProjectInternalContentDigest = 1247,
  TagsProjectInternalContentFilePath = 1248,
  TagsProjectInternalDescription = 1249,
  TagsProjectInternalFieldOwners = 1250,
  TagsProjectInternalIgnoreType = 1251,
  TagsProjectInternalMediaType = 1252,
  TagsProjectInternalOwner = 1253,
  TagsProjectInternalType = 1254,
  TagsProjectName = 1255,
  TagsProjectNodeLocale = 1256,
  TagsProjectParentChildren = 1257,
  TagsProjectParentId = 1258,
  TagsProjectSpaceId = 1259,
  TagsProjectStartDate = 1260,
  TagsProjectSubName = 1261,
  TagsProjectSysRevision = 1262,
  TagsProjectSysType = 1263,
  TagsProjectTags = 1264,
  TagsProjectTagsBlogPost = 1265,
  TagsProjectTagsChildren = 1266,
  TagsProjectTagsContentfulId = 1267,
  TagsProjectTagsCreatedAt = 1268,
  TagsProjectTagsId = 1269,
  TagsProjectTagsLevel = 1270,
  TagsProjectTagsName = 1271,
  TagsProjectTagsNodeLocale = 1272,
  TagsProjectTagsOss = 1273,
  TagsProjectTagsProject = 1274,
  TagsProjectTagsSkillGrpup = 1275,
  TagsProjectTagsSkillMap = 1276,
  TagsProjectTagsSpaceId = 1277,
  TagsProjectTagsUpdatedAt = 1278,
  TagsProjectUpdatedAt = 1279,
  TagsSkillGrpup = 1280,
  TagsSkillGrpupChildren = 1281,
  TagsSkillGrpupChildrenChildren = 1282,
  TagsSkillGrpupChildrenId = 1283,
  TagsSkillGrpupContentfulId = 1284,
  TagsSkillGrpupCreatedAt = 1285,
  TagsSkillGrpupId = 1286,
  TagsSkillGrpupInternalContent = 1287,
  TagsSkillGrpupInternalContentDigest = 1288,
  TagsSkillGrpupInternalContentFilePath = 1289,
  TagsSkillGrpupInternalDescription = 1290,
  TagsSkillGrpupInternalFieldOwners = 1291,
  TagsSkillGrpupInternalIgnoreType = 1292,
  TagsSkillGrpupInternalMediaType = 1293,
  TagsSkillGrpupInternalOwner = 1294,
  TagsSkillGrpupInternalType = 1295,
  TagsSkillGrpupName = 1296,
  TagsSkillGrpupNodeLocale = 1297,
  TagsSkillGrpupParentChildren = 1298,
  TagsSkillGrpupParentId = 1299,
  TagsSkillGrpupSkillMap = 1300,
  TagsSkillGrpupSkillMapChildren = 1301,
  TagsSkillGrpupSkillMapContentfulId = 1302,
  TagsSkillGrpupSkillMapCreatedAt = 1303,
  TagsSkillGrpupSkillMapExpanded = 1304,
  TagsSkillGrpupSkillMapId = 1305,
  TagsSkillGrpupSkillMapName = 1306,
  TagsSkillGrpupSkillMapNodeLocale = 1307,
  TagsSkillGrpupSkillMapSkillGroups = 1308,
  TagsSkillGrpupSkillMapSkills = 1309,
  TagsSkillGrpupSkillMapSortKey = 1310,
  TagsSkillGrpupSkillMapSpaceId = 1311,
  TagsSkillGrpupSkillMapUpdatedAt = 1312,
  TagsSkillGrpupSkills = 1313,
  TagsSkillGrpupSkillsBlogPost = 1314,
  TagsSkillGrpupSkillsChildren = 1315,
  TagsSkillGrpupSkillsContentfulId = 1316,
  TagsSkillGrpupSkillsCreatedAt = 1317,
  TagsSkillGrpupSkillsId = 1318,
  TagsSkillGrpupSkillsLevel = 1319,
  TagsSkillGrpupSkillsName = 1320,
  TagsSkillGrpupSkillsNodeLocale = 1321,
  TagsSkillGrpupSkillsOss = 1322,
  TagsSkillGrpupSkillsProject = 1323,
  TagsSkillGrpupSkillsSkillGrpup = 1324,
  TagsSkillGrpupSkillsSkillMap = 1325,
  TagsSkillGrpupSkillsSpaceId = 1326,
  TagsSkillGrpupSkillsUpdatedAt = 1327,
  TagsSkillGrpupSpaceId = 1328,
  TagsSkillGrpupSysRevision = 1329,
  TagsSkillGrpupSysType = 1330,
  TagsSkillGrpupUpdatedAt = 1331,
  TagsSkillMap = 1332,
  TagsSkillMapChildren = 1333,
  TagsSkillMapChildrenChildren = 1334,
  TagsSkillMapChildrenId = 1335,
  TagsSkillMapContentfulId = 1336,
  TagsSkillMapCreatedAt = 1337,
  TagsSkillMapExpanded = 1338,
  TagsSkillMapId = 1339,
  TagsSkillMapInternalContent = 1340,
  TagsSkillMapInternalContentDigest = 1341,
  TagsSkillMapInternalContentFilePath = 1342,
  TagsSkillMapInternalDescription = 1343,
  TagsSkillMapInternalFieldOwners = 1344,
  TagsSkillMapInternalIgnoreType = 1345,
  TagsSkillMapInternalMediaType = 1346,
  TagsSkillMapInternalOwner = 1347,
  TagsSkillMapInternalType = 1348,
  TagsSkillMapName = 1349,
  TagsSkillMapNodeLocale = 1350,
  TagsSkillMapParentChildren = 1351,
  TagsSkillMapParentId = 1352,
  TagsSkillMapSkillGroups = 1353,
  TagsSkillMapSkillGroupsChildren = 1354,
  TagsSkillMapSkillGroupsContentfulId = 1355,
  TagsSkillMapSkillGroupsCreatedAt = 1356,
  TagsSkillMapSkillGroupsId = 1357,
  TagsSkillMapSkillGroupsName = 1358,
  TagsSkillMapSkillGroupsNodeLocale = 1359,
  TagsSkillMapSkillGroupsSkillMap = 1360,
  TagsSkillMapSkillGroupsSkills = 1361,
  TagsSkillMapSkillGroupsSpaceId = 1362,
  TagsSkillMapSkillGroupsUpdatedAt = 1363,
  TagsSkillMapSkills = 1364,
  TagsSkillMapSkillsBlogPost = 1365,
  TagsSkillMapSkillsChildren = 1366,
  TagsSkillMapSkillsContentfulId = 1367,
  TagsSkillMapSkillsCreatedAt = 1368,
  TagsSkillMapSkillsId = 1369,
  TagsSkillMapSkillsLevel = 1370,
  TagsSkillMapSkillsName = 1371,
  TagsSkillMapSkillsNodeLocale = 1372,
  TagsSkillMapSkillsOss = 1373,
  TagsSkillMapSkillsProject = 1374,
  TagsSkillMapSkillsSkillGrpup = 1375,
  TagsSkillMapSkillsSkillMap = 1376,
  TagsSkillMapSkillsSpaceId = 1377,
  TagsSkillMapSkillsUpdatedAt = 1378,
  TagsSkillMapSortKey = 1379,
  TagsSkillMapSpaceId = 1380,
  TagsSkillMapSysRevision = 1381,
  TagsSkillMapSysType = 1382,
  TagsSkillMapUpdatedAt = 1383,
  TagsSpaceId = 1384,
  TagsSysRevision = 1385,
  TagsSysType = 1386,
  TagsUpdatedAt = 1387,
  UpdatedAt = 1388
}

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
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssGroupConnectionGroupArgs = {
  field: ContentfulOssFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulOssGroupConnectionMaxArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssGroupConnectionMinArgs = {
  field: ContentfulOssFieldsEnum;
};


export type ContentfulOssGroupConnectionSumArgs = {
  field: ContentfulOssFieldsEnum;
};

export type ContentfulOssSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulOssFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulOssSys = {
  readonly contentType: Maybe<ContentfulOssSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulOssSysContentType = {
  readonly sys: Maybe<ContentfulOssSysContentTypeSys>;
};

export type ContentfulOssSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulOssSysContentTypeSysFilterInput>;
};

export type ContentfulOssSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulOssSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulOssSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulOssSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionGroupArgs = {
  field: ContentfulProjectFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulProjectConnectionMaxArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionMinArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectConnectionSumArgs = {
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectEdge = {
  readonly next: Maybe<ContentfulProject>;
  readonly node: ContentfulProject;
  readonly previous: Maybe<ContentfulProject>;
};

export enum ContentfulProjectFieldsEnum {
  ChildContentfulProjectDetailTextNodeChildMdxBody = 0,
  ChildContentfulProjectDetailTextNodeChildMdxChildren = 1,
  ChildContentfulProjectDetailTextNodeChildMdxChildrenChildren = 2,
  ChildContentfulProjectDetailTextNodeChildMdxChildrenId = 3,
  ChildContentfulProjectDetailTextNodeChildMdxExcerpt = 4,
  ChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 5,
  ChildContentfulProjectDetailTextNodeChildMdxFrontmatterTitle = 6,
  ChildContentfulProjectDetailTextNodeChildMdxHeadings = 7,
  ChildContentfulProjectDetailTextNodeChildMdxHeadingsDepth = 8,
  ChildContentfulProjectDetailTextNodeChildMdxHeadingsValue = 9,
  ChildContentfulProjectDetailTextNodeChildMdxHtml = 10,
  ChildContentfulProjectDetailTextNodeChildMdxId = 11,
  ChildContentfulProjectDetailTextNodeChildMdxInternalContent = 12,
  ChildContentfulProjectDetailTextNodeChildMdxInternalContentDigest = 13,
  ChildContentfulProjectDetailTextNodeChildMdxInternalContentFilePath = 14,
  ChildContentfulProjectDetailTextNodeChildMdxInternalDescription = 15,
  ChildContentfulProjectDetailTextNodeChildMdxInternalFieldOwners = 16,
  ChildContentfulProjectDetailTextNodeChildMdxInternalIgnoreType = 17,
  ChildContentfulProjectDetailTextNodeChildMdxInternalMediaType = 18,
  ChildContentfulProjectDetailTextNodeChildMdxInternalOwner = 19,
  ChildContentfulProjectDetailTextNodeChildMdxInternalType = 20,
  ChildContentfulProjectDetailTextNodeChildMdxMdxAst = 21,
  ChildContentfulProjectDetailTextNodeChildMdxParentChildren = 22,
  ChildContentfulProjectDetailTextNodeChildMdxParentId = 23,
  ChildContentfulProjectDetailTextNodeChildMdxRawBody = 24,
  ChildContentfulProjectDetailTextNodeChildMdxSlug = 25,
  ChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 26,
  ChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 27,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountParagraphs = 28,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountSentences = 29,
  ChildContentfulProjectDetailTextNodeChildMdxWordCountWords = 30,
  ChildContentfulProjectDetailTextNodeChildren = 31,
  ChildContentfulProjectDetailTextNodeChildrenMdx = 32,
  ChildContentfulProjectDetailTextNodeChildrenMdxBody = 33,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildren = 34,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildrenChildren = 35,
  ChildContentfulProjectDetailTextNodeChildrenMdxChildrenId = 36,
  ChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 37,
  ChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 38,
  ChildContentfulProjectDetailTextNodeChildrenMdxFrontmatterTitle = 39,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 40,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadingsDepth = 41,
  ChildContentfulProjectDetailTextNodeChildrenMdxHeadingsValue = 42,
  ChildContentfulProjectDetailTextNodeChildrenMdxHtml = 43,
  ChildContentfulProjectDetailTextNodeChildrenMdxId = 44,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalContent = 45,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalContentDigest = 46,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalContentFilePath = 47,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalDescription = 48,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalFieldOwners = 49,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalIgnoreType = 50,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalMediaType = 51,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalOwner = 52,
  ChildContentfulProjectDetailTextNodeChildrenMdxInternalType = 53,
  ChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 54,
  ChildContentfulProjectDetailTextNodeChildrenMdxParentChildren = 55,
  ChildContentfulProjectDetailTextNodeChildrenMdxParentId = 56,
  ChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 57,
  ChildContentfulProjectDetailTextNodeChildrenMdxSlug = 58,
  ChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 59,
  ChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 60,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountParagraphs = 61,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountSentences = 62,
  ChildContentfulProjectDetailTextNodeChildrenMdxWordCountWords = 63,
  ChildContentfulProjectDetailTextNodeChildrenChildren = 64,
  ChildContentfulProjectDetailTextNodeChildrenChildrenChildren = 65,
  ChildContentfulProjectDetailTextNodeChildrenChildrenId = 66,
  ChildContentfulProjectDetailTextNodeChildrenId = 67,
  ChildContentfulProjectDetailTextNodeChildrenInternalContent = 68,
  ChildContentfulProjectDetailTextNodeChildrenInternalContentDigest = 69,
  ChildContentfulProjectDetailTextNodeChildrenInternalContentFilePath = 70,
  ChildContentfulProjectDetailTextNodeChildrenInternalDescription = 71,
  ChildContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 72,
  ChildContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 73,
  ChildContentfulProjectDetailTextNodeChildrenInternalMediaType = 74,
  ChildContentfulProjectDetailTextNodeChildrenInternalOwner = 75,
  ChildContentfulProjectDetailTextNodeChildrenInternalType = 76,
  ChildContentfulProjectDetailTextNodeChildrenParentChildren = 77,
  ChildContentfulProjectDetailTextNodeChildrenParentId = 78,
  ChildContentfulProjectDetailTextNodeDetail = 79,
  ChildContentfulProjectDetailTextNodeId = 80,
  ChildContentfulProjectDetailTextNodeInternalContent = 81,
  ChildContentfulProjectDetailTextNodeInternalContentDigest = 82,
  ChildContentfulProjectDetailTextNodeInternalContentFilePath = 83,
  ChildContentfulProjectDetailTextNodeInternalDescription = 84,
  ChildContentfulProjectDetailTextNodeInternalFieldOwners = 85,
  ChildContentfulProjectDetailTextNodeInternalIgnoreType = 86,
  ChildContentfulProjectDetailTextNodeInternalMediaType = 87,
  ChildContentfulProjectDetailTextNodeInternalOwner = 88,
  ChildContentfulProjectDetailTextNodeInternalType = 89,
  ChildContentfulProjectDetailTextNodeParentChildren = 90,
  ChildContentfulProjectDetailTextNodeParentChildrenChildren = 91,
  ChildContentfulProjectDetailTextNodeParentChildrenId = 92,
  ChildContentfulProjectDetailTextNodeParentId = 93,
  ChildContentfulProjectDetailTextNodeParentInternalContent = 94,
  ChildContentfulProjectDetailTextNodeParentInternalContentDigest = 95,
  ChildContentfulProjectDetailTextNodeParentInternalContentFilePath = 96,
  ChildContentfulProjectDetailTextNodeParentInternalDescription = 97,
  ChildContentfulProjectDetailTextNodeParentInternalFieldOwners = 98,
  ChildContentfulProjectDetailTextNodeParentInternalIgnoreType = 99,
  ChildContentfulProjectDetailTextNodeParentInternalMediaType = 100,
  ChildContentfulProjectDetailTextNodeParentInternalOwner = 101,
  ChildContentfulProjectDetailTextNodeParentInternalType = 102,
  ChildContentfulProjectDetailTextNodeParentParentChildren = 103,
  ChildContentfulProjectDetailTextNodeParentParentId = 104,
  ChildContentfulProjectDetailTextNodeSysType = 105,
  Children = 106,
  ChildrenContentfulProjectDetailTextNode = 107,
  ChildrenContentfulProjectDetailTextNodeChildMdxBody = 108,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildren = 109,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildrenChildren = 110,
  ChildrenContentfulProjectDetailTextNodeChildMdxChildrenId = 111,
  ChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 112,
  ChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 113,
  ChildrenContentfulProjectDetailTextNodeChildMdxFrontmatterTitle = 114,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 115,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadingsDepth = 116,
  ChildrenContentfulProjectDetailTextNodeChildMdxHeadingsValue = 117,
  ChildrenContentfulProjectDetailTextNodeChildMdxHtml = 118,
  ChildrenContentfulProjectDetailTextNodeChildMdxId = 119,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalContent = 120,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalContentDigest = 121,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalContentFilePath = 122,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalDescription = 123,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalFieldOwners = 124,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalIgnoreType = 125,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalMediaType = 126,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalOwner = 127,
  ChildrenContentfulProjectDetailTextNodeChildMdxInternalType = 128,
  ChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 129,
  ChildrenContentfulProjectDetailTextNodeChildMdxParentChildren = 130,
  ChildrenContentfulProjectDetailTextNodeChildMdxParentId = 131,
  ChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 132,
  ChildrenContentfulProjectDetailTextNodeChildMdxSlug = 133,
  ChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 134,
  ChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 135,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountParagraphs = 136,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountSentences = 137,
  ChildrenContentfulProjectDetailTextNodeChildMdxWordCountWords = 138,
  ChildrenContentfulProjectDetailTextNodeChildren = 139,
  ChildrenContentfulProjectDetailTextNodeChildrenMdx = 140,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 141,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 142,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildrenChildren = 143,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxChildrenId = 144,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 145,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 146,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxFrontmatterTitle = 147,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 148,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadingsDepth = 149,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHeadingsValue = 150,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 151,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxId = 152,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalContent = 153,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalContentDigest = 154,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalContentFilePath = 155,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalDescription = 156,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalFieldOwners = 157,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalIgnoreType = 158,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalMediaType = 159,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalOwner = 160,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxInternalType = 161,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 162,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxParentChildren = 163,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxParentId = 164,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 165,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 166,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 167,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 168,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountParagraphs = 169,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountSentences = 170,
  ChildrenContentfulProjectDetailTextNodeChildrenMdxWordCountWords = 171,
  ChildrenContentfulProjectDetailTextNodeChildrenChildren = 172,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenChildren = 173,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenId = 174,
  ChildrenContentfulProjectDetailTextNodeChildrenId = 175,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContent = 176,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContentDigest = 177,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContentFilePath = 178,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalDescription = 179,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 180,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 181,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalMediaType = 182,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalOwner = 183,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalType = 184,
  ChildrenContentfulProjectDetailTextNodeChildrenParentChildren = 185,
  ChildrenContentfulProjectDetailTextNodeChildrenParentId = 186,
  ChildrenContentfulProjectDetailTextNodeDetail = 187,
  ChildrenContentfulProjectDetailTextNodeId = 188,
  ChildrenContentfulProjectDetailTextNodeInternalContent = 189,
  ChildrenContentfulProjectDetailTextNodeInternalContentDigest = 190,
  ChildrenContentfulProjectDetailTextNodeInternalContentFilePath = 191,
  ChildrenContentfulProjectDetailTextNodeInternalDescription = 192,
  ChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 193,
  ChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 194,
  ChildrenContentfulProjectDetailTextNodeInternalMediaType = 195,
  ChildrenContentfulProjectDetailTextNodeInternalOwner = 196,
  ChildrenContentfulProjectDetailTextNodeInternalType = 197,
  ChildrenContentfulProjectDetailTextNodeParentChildren = 198,
  ChildrenContentfulProjectDetailTextNodeParentChildrenChildren = 199,
  ChildrenContentfulProjectDetailTextNodeParentChildrenId = 200,
  ChildrenContentfulProjectDetailTextNodeParentId = 201,
  ChildrenContentfulProjectDetailTextNodeParentInternalContent = 202,
  ChildrenContentfulProjectDetailTextNodeParentInternalContentDigest = 203,
  ChildrenContentfulProjectDetailTextNodeParentInternalContentFilePath = 204,
  ChildrenContentfulProjectDetailTextNodeParentInternalDescription = 205,
  ChildrenContentfulProjectDetailTextNodeParentInternalFieldOwners = 206,
  ChildrenContentfulProjectDetailTextNodeParentInternalIgnoreType = 207,
  ChildrenContentfulProjectDetailTextNodeParentInternalMediaType = 208,
  ChildrenContentfulProjectDetailTextNodeParentInternalOwner = 209,
  ChildrenContentfulProjectDetailTextNodeParentInternalType = 210,
  ChildrenContentfulProjectDetailTextNodeParentParentChildren = 211,
  ChildrenContentfulProjectDetailTextNodeParentParentId = 212,
  ChildrenContentfulProjectDetailTextNodeSysType = 213,
  ChildrenChildren = 214,
  ChildrenChildrenChildren = 215,
  ChildrenChildrenChildrenChildren = 216,
  ChildrenChildrenChildrenId = 217,
  ChildrenChildrenId = 218,
  ChildrenChildrenInternalContent = 219,
  ChildrenChildrenInternalContentDigest = 220,
  ChildrenChildrenInternalContentFilePath = 221,
  ChildrenChildrenInternalDescription = 222,
  ChildrenChildrenInternalFieldOwners = 223,
  ChildrenChildrenInternalIgnoreType = 224,
  ChildrenChildrenInternalMediaType = 225,
  ChildrenChildrenInternalOwner = 226,
  ChildrenChildrenInternalType = 227,
  ChildrenChildrenParentChildren = 228,
  ChildrenChildrenParentId = 229,
  ChildrenId = 230,
  ChildrenInternalContent = 231,
  ChildrenInternalContentDigest = 232,
  ChildrenInternalContentFilePath = 233,
  ChildrenInternalDescription = 234,
  ChildrenInternalFieldOwners = 235,
  ChildrenInternalIgnoreType = 236,
  ChildrenInternalMediaType = 237,
  ChildrenInternalOwner = 238,
  ChildrenInternalType = 239,
  ChildrenParentChildren = 240,
  ChildrenParentChildrenChildren = 241,
  ChildrenParentChildrenId = 242,
  ChildrenParentId = 243,
  ChildrenParentInternalContent = 244,
  ChildrenParentInternalContentDigest = 245,
  ChildrenParentInternalContentFilePath = 246,
  ChildrenParentInternalDescription = 247,
  ChildrenParentInternalFieldOwners = 248,
  ChildrenParentInternalIgnoreType = 249,
  ChildrenParentInternalMediaType = 250,
  ChildrenParentInternalOwner = 251,
  ChildrenParentInternalType = 252,
  ChildrenParentParentChildren = 253,
  ChildrenParentParentId = 254,
  ContentfulId = 255,
  CreatedAt = 256,
  DetailChildMdxBody = 257,
  DetailChildMdxChildren = 258,
  DetailChildMdxChildrenChildren = 259,
  DetailChildMdxChildrenId = 260,
  DetailChildMdxExcerpt = 261,
  DetailChildMdxFileAbsolutePath = 262,
  DetailChildMdxFrontmatterTitle = 263,
  DetailChildMdxHeadings = 264,
  DetailChildMdxHeadingsDepth = 265,
  DetailChildMdxHeadingsValue = 266,
  DetailChildMdxHtml = 267,
  DetailChildMdxId = 268,
  DetailChildMdxInternalContent = 269,
  DetailChildMdxInternalContentDigest = 270,
  DetailChildMdxInternalContentFilePath = 271,
  DetailChildMdxInternalDescription = 272,
  DetailChildMdxInternalFieldOwners = 273,
  DetailChildMdxInternalIgnoreType = 274,
  DetailChildMdxInternalMediaType = 275,
  DetailChildMdxInternalOwner = 276,
  DetailChildMdxInternalType = 277,
  DetailChildMdxMdxAst = 278,
  DetailChildMdxParentChildren = 279,
  DetailChildMdxParentId = 280,
  DetailChildMdxRawBody = 281,
  DetailChildMdxSlug = 282,
  DetailChildMdxTableOfContents = 283,
  DetailChildMdxTimeToRead = 284,
  DetailChildMdxWordCountParagraphs = 285,
  DetailChildMdxWordCountSentences = 286,
  DetailChildMdxWordCountWords = 287,
  DetailChildren = 288,
  DetailChildrenMdx = 289,
  DetailChildrenMdxBody = 290,
  DetailChildrenMdxChildren = 291,
  DetailChildrenMdxChildrenChildren = 292,
  DetailChildrenMdxChildrenId = 293,
  DetailChildrenMdxExcerpt = 294,
  DetailChildrenMdxFileAbsolutePath = 295,
  DetailChildrenMdxFrontmatterTitle = 296,
  DetailChildrenMdxHeadings = 297,
  DetailChildrenMdxHeadingsDepth = 298,
  DetailChildrenMdxHeadingsValue = 299,
  DetailChildrenMdxHtml = 300,
  DetailChildrenMdxId = 301,
  DetailChildrenMdxInternalContent = 302,
  DetailChildrenMdxInternalContentDigest = 303,
  DetailChildrenMdxInternalContentFilePath = 304,
  DetailChildrenMdxInternalDescription = 305,
  DetailChildrenMdxInternalFieldOwners = 306,
  DetailChildrenMdxInternalIgnoreType = 307,
  DetailChildrenMdxInternalMediaType = 308,
  DetailChildrenMdxInternalOwner = 309,
  DetailChildrenMdxInternalType = 310,
  DetailChildrenMdxMdxAst = 311,
  DetailChildrenMdxParentChildren = 312,
  DetailChildrenMdxParentId = 313,
  DetailChildrenMdxRawBody = 314,
  DetailChildrenMdxSlug = 315,
  DetailChildrenMdxTableOfContents = 316,
  DetailChildrenMdxTimeToRead = 317,
  DetailChildrenMdxWordCountParagraphs = 318,
  DetailChildrenMdxWordCountSentences = 319,
  DetailChildrenMdxWordCountWords = 320,
  DetailChildrenChildren = 321,
  DetailChildrenChildrenChildren = 322,
  DetailChildrenChildrenId = 323,
  DetailChildrenId = 324,
  DetailChildrenInternalContent = 325,
  DetailChildrenInternalContentDigest = 326,
  DetailChildrenInternalContentFilePath = 327,
  DetailChildrenInternalDescription = 328,
  DetailChildrenInternalFieldOwners = 329,
  DetailChildrenInternalIgnoreType = 330,
  DetailChildrenInternalMediaType = 331,
  DetailChildrenInternalOwner = 332,
  DetailChildrenInternalType = 333,
  DetailChildrenParentChildren = 334,
  DetailChildrenParentId = 335,
  DetailDetail = 336,
  DetailId = 337,
  DetailInternalContent = 338,
  DetailInternalContentDigest = 339,
  DetailInternalContentFilePath = 340,
  DetailInternalDescription = 341,
  DetailInternalFieldOwners = 342,
  DetailInternalIgnoreType = 343,
  DetailInternalMediaType = 344,
  DetailInternalOwner = 345,
  DetailInternalType = 346,
  DetailParentChildren = 347,
  DetailParentChildrenChildren = 348,
  DetailParentChildrenId = 349,
  DetailParentId = 350,
  DetailParentInternalContent = 351,
  DetailParentInternalContentDigest = 352,
  DetailParentInternalContentFilePath = 353,
  DetailParentInternalDescription = 354,
  DetailParentInternalFieldOwners = 355,
  DetailParentInternalIgnoreType = 356,
  DetailParentInternalMediaType = 357,
  DetailParentInternalOwner = 358,
  DetailParentInternalType = 359,
  DetailParentParentChildren = 360,
  DetailParentParentId = 361,
  DetailSysType = 362,
  EndDate = 363,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 364,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 365,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 366,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 367,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 368,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 369,
  IconChildContentfulIconSvgTextNodeChildMdxId = 370,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 371,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 372,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 373,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 374,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 375,
  IconChildContentfulIconSvgTextNodeChildren = 376,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 377,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 378,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 379,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 380,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 381,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 382,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 383,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 384,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 385,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 386,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 387,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 388,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 389,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 390,
  IconChildContentfulIconSvgTextNodeChildrenId = 391,
  IconChildContentfulIconSvgTextNodeId = 392,
  IconChildContentfulIconSvgTextNodeInternalContent = 393,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 394,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 395,
  IconChildContentfulIconSvgTextNodeInternalDescription = 396,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 397,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 398,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 399,
  IconChildContentfulIconSvgTextNodeInternalOwner = 400,
  IconChildContentfulIconSvgTextNodeInternalType = 401,
  IconChildContentfulIconSvgTextNodeParentChildren = 402,
  IconChildContentfulIconSvgTextNodeParentId = 403,
  IconChildContentfulIconSvgTextNodeSvg = 404,
  IconChildContentfulIconSvgTextNodeSysType = 405,
  IconChildren = 406,
  IconChildrenContentfulIconSvgTextNode = 407,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 408,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 409,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 410,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 411,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 412,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 413,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 414,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 415,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 416,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 417,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 418,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 419,
  IconChildrenContentfulIconSvgTextNodeChildren = 420,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 421,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 422,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 423,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 424,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 425,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 426,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 427,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 428,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 429,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 430,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 431,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 432,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 433,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 434,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 435,
  IconChildrenContentfulIconSvgTextNodeId = 436,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 437,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 438,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 439,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 440,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 441,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 442,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 443,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 444,
  IconChildrenContentfulIconSvgTextNodeInternalType = 445,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 446,
  IconChildrenContentfulIconSvgTextNodeParentId = 447,
  IconChildrenContentfulIconSvgTextNodeSvg = 448,
  IconChildrenContentfulIconSvgTextNodeSysType = 449,
  IconChildrenChildren = 450,
  IconChildrenChildrenChildren = 451,
  IconChildrenChildrenId = 452,
  IconChildrenId = 453,
  IconChildrenInternalContent = 454,
  IconChildrenInternalContentDigest = 455,
  IconChildrenInternalContentFilePath = 456,
  IconChildrenInternalDescription = 457,
  IconChildrenInternalFieldOwners = 458,
  IconChildrenInternalIgnoreType = 459,
  IconChildrenInternalMediaType = 460,
  IconChildrenInternalOwner = 461,
  IconChildrenInternalType = 462,
  IconChildrenParentChildren = 463,
  IconChildrenParentId = 464,
  IconContact = 465,
  IconContactChildren = 466,
  IconContactChildrenChildren = 467,
  IconContactChildrenId = 468,
  IconContactContentfulId = 469,
  IconContactCreatedAt = 470,
  IconContactHref = 471,
  IconContactIconSvgDarkChildren = 472,
  IconContactIconSvgDarkContentfulId = 473,
  IconContactIconSvgDarkCreatedAt = 474,
  IconContactIconSvgDarkDescription = 475,
  IconContactIconSvgDarkFilename = 476,
  IconContactIconSvgDarkFilesize = 477,
  IconContactIconSvgDarkGatsbyImage = 478,
  IconContactIconSvgDarkGatsbyImageData = 479,
  IconContactIconSvgDarkHeight = 480,
  IconContactIconSvgDarkId = 481,
  IconContactIconSvgDarkMimeType = 482,
  IconContactIconSvgDarkNodeLocale = 483,
  IconContactIconSvgDarkPlaceholderUrl = 484,
  IconContactIconSvgDarkPublicUrl = 485,
  IconContactIconSvgDarkSize = 486,
  IconContactIconSvgDarkSpaceId = 487,
  IconContactIconSvgDarkTitle = 488,
  IconContactIconSvgDarkUpdatedAt = 489,
  IconContactIconSvgDarkUrl = 490,
  IconContactIconSvgDarkWidth = 491,
  IconContactIconSvgLightChildren = 492,
  IconContactIconSvgLightContentfulId = 493,
  IconContactIconSvgLightCreatedAt = 494,
  IconContactIconSvgLightDescription = 495,
  IconContactIconSvgLightFilename = 496,
  IconContactIconSvgLightFilesize = 497,
  IconContactIconSvgLightGatsbyImage = 498,
  IconContactIconSvgLightGatsbyImageData = 499,
  IconContactIconSvgLightHeight = 500,
  IconContactIconSvgLightId = 501,
  IconContactIconSvgLightMimeType = 502,
  IconContactIconSvgLightNodeLocale = 503,
  IconContactIconSvgLightPlaceholderUrl = 504,
  IconContactIconSvgLightPublicUrl = 505,
  IconContactIconSvgLightSize = 506,
  IconContactIconSvgLightSpaceId = 507,
  IconContactIconSvgLightTitle = 508,
  IconContactIconSvgLightUpdatedAt = 509,
  IconContactIconSvgLightUrl = 510,
  IconContactIconSvgLightWidth = 511,
  IconContactIconChildren = 512,
  IconContactIconChildrenContentfulIconSvgTextNode = 513,
  IconContactIconContact = 514,
  IconContactIconContentfulId = 515,
  IconContactIconCreatedAt = 516,
  IconContactIconHistory = 517,
  IconContactIconId = 518,
  IconContactIconName = 519,
  IconContactIconNodeLocale = 520,
  IconContactIconOss = 521,
  IconContactIconProject = 522,
  IconContactIconSpaceId = 523,
  IconContactIconUpdatedAt = 524,
  IconContactIconWhatICanDo = 525,
  IconContactId = 526,
  IconContactInternalContent = 527,
  IconContactInternalContentDigest = 528,
  IconContactInternalContentFilePath = 529,
  IconContactInternalDescription = 530,
  IconContactInternalFieldOwners = 531,
  IconContactInternalIgnoreType = 532,
  IconContactInternalMediaType = 533,
  IconContactInternalOwner = 534,
  IconContactInternalType = 535,
  IconContactName = 536,
  IconContactNodeLocale = 537,
  IconContactParentChildren = 538,
  IconContactParentId = 539,
  IconContactSortKey = 540,
  IconContactSpaceId = 541,
  IconContactSubName = 542,
  IconContactSysRevision = 543,
  IconContactSysType = 544,
  IconContactUpdatedAt = 545,
  IconContentfulId = 546,
  IconCreatedAt = 547,
  IconHistory = 548,
  IconHistoryChildren = 549,
  IconHistoryChildrenChildren = 550,
  IconHistoryChildrenId = 551,
  IconHistoryContentfulId = 552,
  IconHistoryCreatedAt = 553,
  IconHistoryDate = 554,
  IconHistoryIconChildren = 555,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 556,
  IconHistoryIconContact = 557,
  IconHistoryIconContentfulId = 558,
  IconHistoryIconCreatedAt = 559,
  IconHistoryIconHistory = 560,
  IconHistoryIconId = 561,
  IconHistoryIconName = 562,
  IconHistoryIconNodeLocale = 563,
  IconHistoryIconOss = 564,
  IconHistoryIconProject = 565,
  IconHistoryIconSpaceId = 566,
  IconHistoryIconUpdatedAt = 567,
  IconHistoryIconWhatICanDo = 568,
  IconHistoryId = 569,
  IconHistoryInternalContent = 570,
  IconHistoryInternalContentDigest = 571,
  IconHistoryInternalContentFilePath = 572,
  IconHistoryInternalDescription = 573,
  IconHistoryInternalFieldOwners = 574,
  IconHistoryInternalIgnoreType = 575,
  IconHistoryInternalMediaType = 576,
  IconHistoryInternalOwner = 577,
  IconHistoryInternalType = 578,
  IconHistoryName = 579,
  IconHistoryNodeLocale = 580,
  IconHistoryParentChildren = 581,
  IconHistoryParentId = 582,
  IconHistorySpaceId = 583,
  IconHistorySubName = 584,
  IconHistorySysRevision = 585,
  IconHistorySysType = 586,
  IconHistoryUpdatedAt = 587,
  IconId = 588,
  IconInternalContent = 589,
  IconInternalContentDigest = 590,
  IconInternalContentFilePath = 591,
  IconInternalDescription = 592,
  IconInternalFieldOwners = 593,
  IconInternalIgnoreType = 594,
  IconInternalMediaType = 595,
  IconInternalOwner = 596,
  IconInternalType = 597,
  IconName = 598,
  IconNodeLocale = 599,
  IconOss = 600,
  IconOssChildContentfulOssDetailTextNodeChildren = 601,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 602,
  IconOssChildContentfulOssDetailTextNodeDetail = 603,
  IconOssChildContentfulOssDetailTextNodeId = 604,
  IconOssChildren = 605,
  IconOssChildrenContentfulOssDetailTextNode = 606,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 607,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 608,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 609,
  IconOssChildrenContentfulOssDetailTextNodeId = 610,
  IconOssChildrenChildren = 611,
  IconOssChildrenId = 612,
  IconOssContentfulId = 613,
  IconOssCreatedAt = 614,
  IconOssDetailChildren = 615,
  IconOssDetailChildrenMdx = 616,
  IconOssDetailDetail = 617,
  IconOssDetailId = 618,
  IconOssHref = 619,
  IconOssIconChildren = 620,
  IconOssIconChildrenContentfulIconSvgTextNode = 621,
  IconOssIconContact = 622,
  IconOssIconContentfulId = 623,
  IconOssIconCreatedAt = 624,
  IconOssIconHistory = 625,
  IconOssIconId = 626,
  IconOssIconName = 627,
  IconOssIconNodeLocale = 628,
  IconOssIconOss = 629,
  IconOssIconProject = 630,
  IconOssIconSpaceId = 631,
  IconOssIconUpdatedAt = 632,
  IconOssIconWhatICanDo = 633,
  IconOssId = 634,
  IconOssImageChildren = 635,
  IconOssImageContentfulId = 636,
  IconOssImageCreatedAt = 637,
  IconOssImageDescription = 638,
  IconOssImageFilename = 639,
  IconOssImageFilesize = 640,
  IconOssImageGatsbyImage = 641,
  IconOssImageGatsbyImageData = 642,
  IconOssImageHeight = 643,
  IconOssImageId = 644,
  IconOssImageMimeType = 645,
  IconOssImageNodeLocale = 646,
  IconOssImagePlaceholderUrl = 647,
  IconOssImagePublicUrl = 648,
  IconOssImageSize = 649,
  IconOssImageSpaceId = 650,
  IconOssImageTitle = 651,
  IconOssImageUpdatedAt = 652,
  IconOssImageUrl = 653,
  IconOssImageWidth = 654,
  IconOssInternalContent = 655,
  IconOssInternalContentDigest = 656,
  IconOssInternalContentFilePath = 657,
  IconOssInternalDescription = 658,
  IconOssInternalFieldOwners = 659,
  IconOssInternalIgnoreType = 660,
  IconOssInternalMediaType = 661,
  IconOssInternalOwner = 662,
  IconOssInternalType = 663,
  IconOssName = 664,
  IconOssNodeLocale = 665,
  IconOssParentChildren = 666,
  IconOssParentId = 667,
  IconOssSpaceId = 668,
  IconOssStartDate = 669,
  IconOssSubName = 670,
  IconOssSysRevision = 671,
  IconOssSysType = 672,
  IconOssTags = 673,
  IconOssTagsBlogPost = 674,
  IconOssTagsChildren = 675,
  IconOssTagsContentfulId = 676,
  IconOssTagsCreatedAt = 677,
  IconOssTagsId = 678,
  IconOssTagsLevel = 679,
  IconOssTagsName = 680,
  IconOssTagsNodeLocale = 681,
  IconOssTagsOss = 682,
  IconOssTagsProject = 683,
  IconOssTagsSkillGrpup = 684,
  IconOssTagsSkillMap = 685,
  IconOssTagsSpaceId = 686,
  IconOssTagsUpdatedAt = 687,
  IconOssUpdatedAt = 688,
  IconParentChildren = 689,
  IconParentChildrenChildren = 690,
  IconParentChildrenId = 691,
  IconParentId = 692,
  IconParentInternalContent = 693,
  IconParentInternalContentDigest = 694,
  IconParentInternalContentFilePath = 695,
  IconParentInternalDescription = 696,
  IconParentInternalFieldOwners = 697,
  IconParentInternalIgnoreType = 698,
  IconParentInternalMediaType = 699,
  IconParentInternalOwner = 700,
  IconParentInternalType = 701,
  IconParentParentChildren = 702,
  IconParentParentId = 703,
  IconProject = 704,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 705,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 706,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 707,
  IconProjectChildContentfulProjectDetailTextNodeId = 708,
  IconProjectChildren = 709,
  IconProjectChildrenContentfulProjectDetailTextNode = 710,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 711,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 712,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 713,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 714,
  IconProjectChildrenChildren = 715,
  IconProjectChildrenId = 716,
  IconProjectContentfulId = 717,
  IconProjectCreatedAt = 718,
  IconProjectDetailChildren = 719,
  IconProjectDetailChildrenMdx = 720,
  IconProjectDetailDetail = 721,
  IconProjectDetailId = 722,
  IconProjectEndDate = 723,
  IconProjectIconChildren = 724,
  IconProjectIconChildrenContentfulIconSvgTextNode = 725,
  IconProjectIconContact = 726,
  IconProjectIconContentfulId = 727,
  IconProjectIconCreatedAt = 728,
  IconProjectIconHistory = 729,
  IconProjectIconId = 730,
  IconProjectIconName = 731,
  IconProjectIconNodeLocale = 732,
  IconProjectIconOss = 733,
  IconProjectIconProject = 734,
  IconProjectIconSpaceId = 735,
  IconProjectIconUpdatedAt = 736,
  IconProjectIconWhatICanDo = 737,
  IconProjectId = 738,
  IconProjectInternalContent = 739,
  IconProjectInternalContentDigest = 740,
  IconProjectInternalContentFilePath = 741,
  IconProjectInternalDescription = 742,
  IconProjectInternalFieldOwners = 743,
  IconProjectInternalIgnoreType = 744,
  IconProjectInternalMediaType = 745,
  IconProjectInternalOwner = 746,
  IconProjectInternalType = 747,
  IconProjectName = 748,
  IconProjectNodeLocale = 749,
  IconProjectParentChildren = 750,
  IconProjectParentId = 751,
  IconProjectSpaceId = 752,
  IconProjectStartDate = 753,
  IconProjectSubName = 754,
  IconProjectSysRevision = 755,
  IconProjectSysType = 756,
  IconProjectTags = 757,
  IconProjectTagsBlogPost = 758,
  IconProjectTagsChildren = 759,
  IconProjectTagsContentfulId = 760,
  IconProjectTagsCreatedAt = 761,
  IconProjectTagsId = 762,
  IconProjectTagsLevel = 763,
  IconProjectTagsName = 764,
  IconProjectTagsNodeLocale = 765,
  IconProjectTagsOss = 766,
  IconProjectTagsProject = 767,
  IconProjectTagsSkillGrpup = 768,
  IconProjectTagsSkillMap = 769,
  IconProjectTagsSpaceId = 770,
  IconProjectTagsUpdatedAt = 771,
  IconProjectUpdatedAt = 772,
  IconSpaceId = 773,
  IconSvgChildMdxBody = 774,
  IconSvgChildMdxChildren = 775,
  IconSvgChildMdxExcerpt = 776,
  IconSvgChildMdxFileAbsolutePath = 777,
  IconSvgChildMdxHeadings = 778,
  IconSvgChildMdxHtml = 779,
  IconSvgChildMdxId = 780,
  IconSvgChildMdxMdxAst = 781,
  IconSvgChildMdxRawBody = 782,
  IconSvgChildMdxSlug = 783,
  IconSvgChildMdxTableOfContents = 784,
  IconSvgChildMdxTimeToRead = 785,
  IconSvgChildren = 786,
  IconSvgChildrenMdx = 787,
  IconSvgChildrenMdxBody = 788,
  IconSvgChildrenMdxChildren = 789,
  IconSvgChildrenMdxExcerpt = 790,
  IconSvgChildrenMdxFileAbsolutePath = 791,
  IconSvgChildrenMdxHeadings = 792,
  IconSvgChildrenMdxHtml = 793,
  IconSvgChildrenMdxId = 794,
  IconSvgChildrenMdxMdxAst = 795,
  IconSvgChildrenMdxRawBody = 796,
  IconSvgChildrenMdxSlug = 797,
  IconSvgChildrenMdxTableOfContents = 798,
  IconSvgChildrenMdxTimeToRead = 799,
  IconSvgChildrenChildren = 800,
  IconSvgChildrenId = 801,
  IconSvgId = 802,
  IconSvgInternalContent = 803,
  IconSvgInternalContentDigest = 804,
  IconSvgInternalContentFilePath = 805,
  IconSvgInternalDescription = 806,
  IconSvgInternalFieldOwners = 807,
  IconSvgInternalIgnoreType = 808,
  IconSvgInternalMediaType = 809,
  IconSvgInternalOwner = 810,
  IconSvgInternalType = 811,
  IconSvgParentChildren = 812,
  IconSvgParentId = 813,
  IconSvgSvg = 814,
  IconSvgSysType = 815,
  IconSysRevision = 816,
  IconSysType = 817,
  IconUpdatedAt = 818,
  IconWhatICanDo = 819,
  IconWhatICanDoChildren = 820,
  IconWhatICanDoChildrenChildren = 821,
  IconWhatICanDoChildrenId = 822,
  IconWhatICanDoContentfulId = 823,
  IconWhatICanDoCreatedAt = 824,
  IconWhatICanDoIconChildren = 825,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 826,
  IconWhatICanDoIconContact = 827,
  IconWhatICanDoIconContentfulId = 828,
  IconWhatICanDoIconCreatedAt = 829,
  IconWhatICanDoIconHistory = 830,
  IconWhatICanDoIconId = 831,
  IconWhatICanDoIconName = 832,
  IconWhatICanDoIconNodeLocale = 833,
  IconWhatICanDoIconOss = 834,
  IconWhatICanDoIconProject = 835,
  IconWhatICanDoIconSpaceId = 836,
  IconWhatICanDoIconUpdatedAt = 837,
  IconWhatICanDoIconWhatICanDo = 838,
  IconWhatICanDoId = 839,
  IconWhatICanDoInternalContent = 840,
  IconWhatICanDoInternalContentDigest = 841,
  IconWhatICanDoInternalContentFilePath = 842,
  IconWhatICanDoInternalDescription = 843,
  IconWhatICanDoInternalFieldOwners = 844,
  IconWhatICanDoInternalIgnoreType = 845,
  IconWhatICanDoInternalMediaType = 846,
  IconWhatICanDoInternalOwner = 847,
  IconWhatICanDoInternalType = 848,
  IconWhatICanDoName = 849,
  IconWhatICanDoNodeLocale = 850,
  IconWhatICanDoParentChildren = 851,
  IconWhatICanDoParentId = 852,
  IconWhatICanDoSortKey = 853,
  IconWhatICanDoSpaceId = 854,
  IconWhatICanDoSubName = 855,
  IconWhatICanDoSysRevision = 856,
  IconWhatICanDoSysType = 857,
  IconWhatICanDoUpdatedAt = 858,
  Id = 859,
  InternalContent = 860,
  InternalContentDigest = 861,
  InternalContentFilePath = 862,
  InternalDescription = 863,
  InternalFieldOwners = 864,
  InternalIgnoreType = 865,
  InternalMediaType = 866,
  InternalOwner = 867,
  InternalType = 868,
  Name = 869,
  NodeLocale = 870,
  ParentChildren = 871,
  ParentChildrenChildren = 872,
  ParentChildrenChildrenChildren = 873,
  ParentChildrenChildrenId = 874,
  ParentChildrenId = 875,
  ParentChildrenInternalContent = 876,
  ParentChildrenInternalContentDigest = 877,
  ParentChildrenInternalContentFilePath = 878,
  ParentChildrenInternalDescription = 879,
  ParentChildrenInternalFieldOwners = 880,
  ParentChildrenInternalIgnoreType = 881,
  ParentChildrenInternalMediaType = 882,
  ParentChildrenInternalOwner = 883,
  ParentChildrenInternalType = 884,
  ParentChildrenParentChildren = 885,
  ParentChildrenParentId = 886,
  ParentId = 887,
  ParentInternalContent = 888,
  ParentInternalContentDigest = 889,
  ParentInternalContentFilePath = 890,
  ParentInternalDescription = 891,
  ParentInternalFieldOwners = 892,
  ParentInternalIgnoreType = 893,
  ParentInternalMediaType = 894,
  ParentInternalOwner = 895,
  ParentInternalType = 896,
  ParentParentChildren = 897,
  ParentParentChildrenChildren = 898,
  ParentParentChildrenId = 899,
  ParentParentId = 900,
  ParentParentInternalContent = 901,
  ParentParentInternalContentDigest = 902,
  ParentParentInternalContentFilePath = 903,
  ParentParentInternalDescription = 904,
  ParentParentInternalFieldOwners = 905,
  ParentParentInternalIgnoreType = 906,
  ParentParentInternalMediaType = 907,
  ParentParentInternalOwner = 908,
  ParentParentInternalType = 909,
  ParentParentParentChildren = 910,
  ParentParentParentId = 911,
  SpaceId = 912,
  StartDate = 913,
  SubName = 914,
  SysContentTypeSysId = 915,
  SysContentTypeSysLinkType = 916,
  SysContentTypeSysType = 917,
  SysRevision = 918,
  SysType = 919,
  Tags = 920,
  TagsBlogPost = 921,
  TagsBlogPostCategoryChildren = 922,
  TagsBlogPostCategoryContentfulId = 923,
  TagsBlogPostCategoryCreatedAt = 924,
  TagsBlogPostCategoryId = 925,
  TagsBlogPostCategoryName = 926,
  TagsBlogPostCategoryNodeLocale = 927,
  TagsBlogPostCategorySlug = 928,
  TagsBlogPostCategorySortKey = 929,
  TagsBlogPostCategorySpaceId = 930,
  TagsBlogPostCategoryUpdatedAt = 931,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 932,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 933,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 934,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 935,
  TagsBlogPostChildren = 936,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 937,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 938,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 939,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 940,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 941,
  TagsBlogPostChildrenChildren = 942,
  TagsBlogPostChildrenId = 943,
  TagsBlogPostContentChildren = 944,
  TagsBlogPostContentChildrenMdx = 945,
  TagsBlogPostContentContent = 946,
  TagsBlogPostContentId = 947,
  TagsBlogPostContentfulId = 948,
  TagsBlogPostCreated = 949,
  TagsBlogPostCreatedAt = 950,
  TagsBlogPostExcerpt = 951,
  TagsBlogPostGatsbyPath = 952,
  TagsBlogPostId = 953,
  TagsBlogPostInternalContent = 954,
  TagsBlogPostInternalContentDigest = 955,
  TagsBlogPostInternalContentFilePath = 956,
  TagsBlogPostInternalDescription = 957,
  TagsBlogPostInternalFieldOwners = 958,
  TagsBlogPostInternalIgnoreType = 959,
  TagsBlogPostInternalMediaType = 960,
  TagsBlogPostInternalOwner = 961,
  TagsBlogPostInternalType = 962,
  TagsBlogPostNodeLocale = 963,
  TagsBlogPostParentChildren = 964,
  TagsBlogPostParentId = 965,
  TagsBlogPostSlug = 966,
  TagsBlogPostSpaceId = 967,
  TagsBlogPostSysRevision = 968,
  TagsBlogPostSysType = 969,
  TagsBlogPostTags = 970,
  TagsBlogPostTagsBlogPost = 971,
  TagsBlogPostTagsChildren = 972,
  TagsBlogPostTagsContentfulId = 973,
  TagsBlogPostTagsCreatedAt = 974,
  TagsBlogPostTagsId = 975,
  TagsBlogPostTagsLevel = 976,
  TagsBlogPostTagsName = 977,
  TagsBlogPostTagsNodeLocale = 978,
  TagsBlogPostTagsOss = 979,
  TagsBlogPostTagsProject = 980,
  TagsBlogPostTagsSkillGrpup = 981,
  TagsBlogPostTagsSkillMap = 982,
  TagsBlogPostTagsSpaceId = 983,
  TagsBlogPostTagsUpdatedAt = 984,
  TagsBlogPostThumbnailChildren = 985,
  TagsBlogPostThumbnailContentfulId = 986,
  TagsBlogPostThumbnailCreatedAt = 987,
  TagsBlogPostThumbnailDescription = 988,
  TagsBlogPostThumbnailFilename = 989,
  TagsBlogPostThumbnailFilesize = 990,
  TagsBlogPostThumbnailGatsbyImage = 991,
  TagsBlogPostThumbnailGatsbyImageData = 992,
  TagsBlogPostThumbnailHeight = 993,
  TagsBlogPostThumbnailId = 994,
  TagsBlogPostThumbnailMimeType = 995,
  TagsBlogPostThumbnailNodeLocale = 996,
  TagsBlogPostThumbnailPlaceholderUrl = 997,
  TagsBlogPostThumbnailPublicUrl = 998,
  TagsBlogPostThumbnailSize = 999,
  TagsBlogPostThumbnailSpaceId = 1000,
  TagsBlogPostThumbnailTitle = 1001,
  TagsBlogPostThumbnailUpdatedAt = 1002,
  TagsBlogPostThumbnailUrl = 1003,
  TagsBlogPostThumbnailWidth = 1004,
  TagsBlogPostTitle = 1005,
  TagsBlogPostUpdated = 1006,
  TagsBlogPostUpdatedAt = 1007,
  TagsChildren = 1008,
  TagsChildrenChildren = 1009,
  TagsChildrenChildrenChildren = 1010,
  TagsChildrenChildrenId = 1011,
  TagsChildrenId = 1012,
  TagsChildrenInternalContent = 1013,
  TagsChildrenInternalContentDigest = 1014,
  TagsChildrenInternalContentFilePath = 1015,
  TagsChildrenInternalDescription = 1016,
  TagsChildrenInternalFieldOwners = 1017,
  TagsChildrenInternalIgnoreType = 1018,
  TagsChildrenInternalMediaType = 1019,
  TagsChildrenInternalOwner = 1020,
  TagsChildrenInternalType = 1021,
  TagsChildrenParentChildren = 1022,
  TagsChildrenParentId = 1023,
  TagsContentfulId = 1024,
  TagsCreatedAt = 1025,
  TagsId = 1026,
  TagsInternalContent = 1027,
  TagsInternalContentDigest = 1028,
  TagsInternalContentFilePath = 1029,
  TagsInternalDescription = 1030,
  TagsInternalFieldOwners = 1031,
  TagsInternalIgnoreType = 1032,
  TagsInternalMediaType = 1033,
  TagsInternalOwner = 1034,
  TagsInternalType = 1035,
  TagsLevel = 1036,
  TagsName = 1037,
  TagsNodeLocale = 1038,
  TagsOss = 1039,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1040,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1041,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1042,
  TagsOssChildContentfulOssDetailTextNodeId = 1043,
  TagsOssChildren = 1044,
  TagsOssChildrenContentfulOssDetailTextNode = 1045,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1046,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1047,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1048,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1049,
  TagsOssChildrenChildren = 1050,
  TagsOssChildrenId = 1051,
  TagsOssContentfulId = 1052,
  TagsOssCreatedAt = 1053,
  TagsOssDetailChildren = 1054,
  TagsOssDetailChildrenMdx = 1055,
  TagsOssDetailDetail = 1056,
  TagsOssDetailId = 1057,
  TagsOssHref = 1058,
  TagsOssIconChildren = 1059,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1060,
  TagsOssIconContact = 1061,
  TagsOssIconContentfulId = 1062,
  TagsOssIconCreatedAt = 1063,
  TagsOssIconHistory = 1064,
  TagsOssIconId = 1065,
  TagsOssIconName = 1066,
  TagsOssIconNodeLocale = 1067,
  TagsOssIconOss = 1068,
  TagsOssIconProject = 1069,
  TagsOssIconSpaceId = 1070,
  TagsOssIconUpdatedAt = 1071,
  TagsOssIconWhatICanDo = 1072,
  TagsOssId = 1073,
  TagsOssImageChildren = 1074,
  TagsOssImageContentfulId = 1075,
  TagsOssImageCreatedAt = 1076,
  TagsOssImageDescription = 1077,
  TagsOssImageFilename = 1078,
  TagsOssImageFilesize = 1079,
  TagsOssImageGatsbyImage = 1080,
  TagsOssImageGatsbyImageData = 1081,
  TagsOssImageHeight = 1082,
  TagsOssImageId = 1083,
  TagsOssImageMimeType = 1084,
  TagsOssImageNodeLocale = 1085,
  TagsOssImagePlaceholderUrl = 1086,
  TagsOssImagePublicUrl = 1087,
  TagsOssImageSize = 1088,
  TagsOssImageSpaceId = 1089,
  TagsOssImageTitle = 1090,
  TagsOssImageUpdatedAt = 1091,
  TagsOssImageUrl = 1092,
  TagsOssImageWidth = 1093,
  TagsOssInternalContent = 1094,
  TagsOssInternalContentDigest = 1095,
  TagsOssInternalContentFilePath = 1096,
  TagsOssInternalDescription = 1097,
  TagsOssInternalFieldOwners = 1098,
  TagsOssInternalIgnoreType = 1099,
  TagsOssInternalMediaType = 1100,
  TagsOssInternalOwner = 1101,
  TagsOssInternalType = 1102,
  TagsOssName = 1103,
  TagsOssNodeLocale = 1104,
  TagsOssParentChildren = 1105,
  TagsOssParentId = 1106,
  TagsOssSpaceId = 1107,
  TagsOssStartDate = 1108,
  TagsOssSubName = 1109,
  TagsOssSysRevision = 1110,
  TagsOssSysType = 1111,
  TagsOssTags = 1112,
  TagsOssTagsBlogPost = 1113,
  TagsOssTagsChildren = 1114,
  TagsOssTagsContentfulId = 1115,
  TagsOssTagsCreatedAt = 1116,
  TagsOssTagsId = 1117,
  TagsOssTagsLevel = 1118,
  TagsOssTagsName = 1119,
  TagsOssTagsNodeLocale = 1120,
  TagsOssTagsOss = 1121,
  TagsOssTagsProject = 1122,
  TagsOssTagsSkillGrpup = 1123,
  TagsOssTagsSkillMap = 1124,
  TagsOssTagsSpaceId = 1125,
  TagsOssTagsUpdatedAt = 1126,
  TagsOssUpdatedAt = 1127,
  TagsParentChildren = 1128,
  TagsParentChildrenChildren = 1129,
  TagsParentChildrenId = 1130,
  TagsParentId = 1131,
  TagsParentInternalContent = 1132,
  TagsParentInternalContentDigest = 1133,
  TagsParentInternalContentFilePath = 1134,
  TagsParentInternalDescription = 1135,
  TagsParentInternalFieldOwners = 1136,
  TagsParentInternalIgnoreType = 1137,
  TagsParentInternalMediaType = 1138,
  TagsParentInternalOwner = 1139,
  TagsParentInternalType = 1140,
  TagsParentParentChildren = 1141,
  TagsParentParentId = 1142,
  TagsProject = 1143,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1144,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1145,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1146,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1147,
  TagsProjectChildren = 1148,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1149,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1150,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1151,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1152,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1153,
  TagsProjectChildrenChildren = 1154,
  TagsProjectChildrenId = 1155,
  TagsProjectContentfulId = 1156,
  TagsProjectCreatedAt = 1157,
  TagsProjectDetailChildren = 1158,
  TagsProjectDetailChildrenMdx = 1159,
  TagsProjectDetailDetail = 1160,
  TagsProjectDetailId = 1161,
  TagsProjectEndDate = 1162,
  TagsProjectIconChildren = 1163,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1164,
  TagsProjectIconContact = 1165,
  TagsProjectIconContentfulId = 1166,
  TagsProjectIconCreatedAt = 1167,
  TagsProjectIconHistory = 1168,
  TagsProjectIconId = 1169,
  TagsProjectIconName = 1170,
  TagsProjectIconNodeLocale = 1171,
  TagsProjectIconOss = 1172,
  TagsProjectIconProject = 1173,
  TagsProjectIconSpaceId = 1174,
  TagsProjectIconUpdatedAt = 1175,
  TagsProjectIconWhatICanDo = 1176,
  TagsProjectId = 1177,
  TagsProjectInternalContent = 1178,
  TagsProjectInternalContentDigest = 1179,
  TagsProjectInternalContentFilePath = 1180,
  TagsProjectInternalDescription = 1181,
  TagsProjectInternalFieldOwners = 1182,
  TagsProjectInternalIgnoreType = 1183,
  TagsProjectInternalMediaType = 1184,
  TagsProjectInternalOwner = 1185,
  TagsProjectInternalType = 1186,
  TagsProjectName = 1187,
  TagsProjectNodeLocale = 1188,
  TagsProjectParentChildren = 1189,
  TagsProjectParentId = 1190,
  TagsProjectSpaceId = 1191,
  TagsProjectStartDate = 1192,
  TagsProjectSubName = 1193,
  TagsProjectSysRevision = 1194,
  TagsProjectSysType = 1195,
  TagsProjectTags = 1196,
  TagsProjectTagsBlogPost = 1197,
  TagsProjectTagsChildren = 1198,
  TagsProjectTagsContentfulId = 1199,
  TagsProjectTagsCreatedAt = 1200,
  TagsProjectTagsId = 1201,
  TagsProjectTagsLevel = 1202,
  TagsProjectTagsName = 1203,
  TagsProjectTagsNodeLocale = 1204,
  TagsProjectTagsOss = 1205,
  TagsProjectTagsProject = 1206,
  TagsProjectTagsSkillGrpup = 1207,
  TagsProjectTagsSkillMap = 1208,
  TagsProjectTagsSpaceId = 1209,
  TagsProjectTagsUpdatedAt = 1210,
  TagsProjectUpdatedAt = 1211,
  TagsSkillGrpup = 1212,
  TagsSkillGrpupChildren = 1213,
  TagsSkillGrpupChildrenChildren = 1214,
  TagsSkillGrpupChildrenId = 1215,
  TagsSkillGrpupContentfulId = 1216,
  TagsSkillGrpupCreatedAt = 1217,
  TagsSkillGrpupId = 1218,
  TagsSkillGrpupInternalContent = 1219,
  TagsSkillGrpupInternalContentDigest = 1220,
  TagsSkillGrpupInternalContentFilePath = 1221,
  TagsSkillGrpupInternalDescription = 1222,
  TagsSkillGrpupInternalFieldOwners = 1223,
  TagsSkillGrpupInternalIgnoreType = 1224,
  TagsSkillGrpupInternalMediaType = 1225,
  TagsSkillGrpupInternalOwner = 1226,
  TagsSkillGrpupInternalType = 1227,
  TagsSkillGrpupName = 1228,
  TagsSkillGrpupNodeLocale = 1229,
  TagsSkillGrpupParentChildren = 1230,
  TagsSkillGrpupParentId = 1231,
  TagsSkillGrpupSkillMap = 1232,
  TagsSkillGrpupSkillMapChildren = 1233,
  TagsSkillGrpupSkillMapContentfulId = 1234,
  TagsSkillGrpupSkillMapCreatedAt = 1235,
  TagsSkillGrpupSkillMapExpanded = 1236,
  TagsSkillGrpupSkillMapId = 1237,
  TagsSkillGrpupSkillMapName = 1238,
  TagsSkillGrpupSkillMapNodeLocale = 1239,
  TagsSkillGrpupSkillMapSkillGroups = 1240,
  TagsSkillGrpupSkillMapSkills = 1241,
  TagsSkillGrpupSkillMapSortKey = 1242,
  TagsSkillGrpupSkillMapSpaceId = 1243,
  TagsSkillGrpupSkillMapUpdatedAt = 1244,
  TagsSkillGrpupSkills = 1245,
  TagsSkillGrpupSkillsBlogPost = 1246,
  TagsSkillGrpupSkillsChildren = 1247,
  TagsSkillGrpupSkillsContentfulId = 1248,
  TagsSkillGrpupSkillsCreatedAt = 1249,
  TagsSkillGrpupSkillsId = 1250,
  TagsSkillGrpupSkillsLevel = 1251,
  TagsSkillGrpupSkillsName = 1252,
  TagsSkillGrpupSkillsNodeLocale = 1253,
  TagsSkillGrpupSkillsOss = 1254,
  TagsSkillGrpupSkillsProject = 1255,
  TagsSkillGrpupSkillsSkillGrpup = 1256,
  TagsSkillGrpupSkillsSkillMap = 1257,
  TagsSkillGrpupSkillsSpaceId = 1258,
  TagsSkillGrpupSkillsUpdatedAt = 1259,
  TagsSkillGrpupSpaceId = 1260,
  TagsSkillGrpupSysRevision = 1261,
  TagsSkillGrpupSysType = 1262,
  TagsSkillGrpupUpdatedAt = 1263,
  TagsSkillMap = 1264,
  TagsSkillMapChildren = 1265,
  TagsSkillMapChildrenChildren = 1266,
  TagsSkillMapChildrenId = 1267,
  TagsSkillMapContentfulId = 1268,
  TagsSkillMapCreatedAt = 1269,
  TagsSkillMapExpanded = 1270,
  TagsSkillMapId = 1271,
  TagsSkillMapInternalContent = 1272,
  TagsSkillMapInternalContentDigest = 1273,
  TagsSkillMapInternalContentFilePath = 1274,
  TagsSkillMapInternalDescription = 1275,
  TagsSkillMapInternalFieldOwners = 1276,
  TagsSkillMapInternalIgnoreType = 1277,
  TagsSkillMapInternalMediaType = 1278,
  TagsSkillMapInternalOwner = 1279,
  TagsSkillMapInternalType = 1280,
  TagsSkillMapName = 1281,
  TagsSkillMapNodeLocale = 1282,
  TagsSkillMapParentChildren = 1283,
  TagsSkillMapParentId = 1284,
  TagsSkillMapSkillGroups = 1285,
  TagsSkillMapSkillGroupsChildren = 1286,
  TagsSkillMapSkillGroupsContentfulId = 1287,
  TagsSkillMapSkillGroupsCreatedAt = 1288,
  TagsSkillMapSkillGroupsId = 1289,
  TagsSkillMapSkillGroupsName = 1290,
  TagsSkillMapSkillGroupsNodeLocale = 1291,
  TagsSkillMapSkillGroupsSkillMap = 1292,
  TagsSkillMapSkillGroupsSkills = 1293,
  TagsSkillMapSkillGroupsSpaceId = 1294,
  TagsSkillMapSkillGroupsUpdatedAt = 1295,
  TagsSkillMapSkills = 1296,
  TagsSkillMapSkillsBlogPost = 1297,
  TagsSkillMapSkillsChildren = 1298,
  TagsSkillMapSkillsContentfulId = 1299,
  TagsSkillMapSkillsCreatedAt = 1300,
  TagsSkillMapSkillsId = 1301,
  TagsSkillMapSkillsLevel = 1302,
  TagsSkillMapSkillsName = 1303,
  TagsSkillMapSkillsNodeLocale = 1304,
  TagsSkillMapSkillsOss = 1305,
  TagsSkillMapSkillsProject = 1306,
  TagsSkillMapSkillsSkillGrpup = 1307,
  TagsSkillMapSkillsSkillMap = 1308,
  TagsSkillMapSkillsSpaceId = 1309,
  TagsSkillMapSkillsUpdatedAt = 1310,
  TagsSkillMapSortKey = 1311,
  TagsSkillMapSpaceId = 1312,
  TagsSkillMapSysRevision = 1313,
  TagsSkillMapSysType = 1314,
  TagsSkillMapUpdatedAt = 1315,
  TagsSpaceId = 1316,
  TagsSysRevision = 1317,
  TagsSysType = 1318,
  TagsUpdatedAt = 1319,
  UpdatedAt = 1320
}

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
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectGroupConnectionGroupArgs = {
  field: ContentfulProjectFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulProjectGroupConnectionMaxArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectGroupConnectionMinArgs = {
  field: ContentfulProjectFieldsEnum;
};


export type ContentfulProjectGroupConnectionSumArgs = {
  field: ContentfulProjectFieldsEnum;
};

export type ContentfulProjectSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulProjectFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectSys = {
  readonly contentType: Maybe<ContentfulProjectSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentType = {
  readonly sys: Maybe<ContentfulProjectSysContentTypeSys>;
};

export type ContentfulProjectSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulProjectSysContentTypeSysFilterInput>;
};

export type ContentfulProjectSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulProjectSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulProjectSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulProjectSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualification = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly qualification_map: Maybe<ReadonlyArray<Maybe<ContentfulQualificationMap>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulQualificationSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
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
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationConnectionGroupArgs = {
  field: ContentfulQualificationFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulQualificationConnectionMaxArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationConnectionMinArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationConnectionSumArgs = {
  field: ContentfulQualificationFieldsEnum;
};

export type ContentfulQualificationEdge = {
  readonly next: Maybe<ContentfulQualification>;
  readonly node: ContentfulQualification;
  readonly previous: Maybe<ContentfulQualification>;
};

export enum ContentfulQualificationFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Date = 44,
  Id = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  Name = 55,
  NodeLocale = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  QualificationMap = 98,
  QualificationMapChildren = 99,
  QualificationMapChildrenChildren = 100,
  QualificationMapChildrenChildrenChildren = 101,
  QualificationMapChildrenChildrenId = 102,
  QualificationMapChildrenId = 103,
  QualificationMapChildrenInternalContent = 104,
  QualificationMapChildrenInternalContentDigest = 105,
  QualificationMapChildrenInternalContentFilePath = 106,
  QualificationMapChildrenInternalDescription = 107,
  QualificationMapChildrenInternalFieldOwners = 108,
  QualificationMapChildrenInternalIgnoreType = 109,
  QualificationMapChildrenInternalMediaType = 110,
  QualificationMapChildrenInternalOwner = 111,
  QualificationMapChildrenInternalType = 112,
  QualificationMapChildrenParentChildren = 113,
  QualificationMapChildrenParentId = 114,
  QualificationMapContentfulId = 115,
  QualificationMapCreatedAt = 116,
  QualificationMapExpanded = 117,
  QualificationMapId = 118,
  QualificationMapInternalContent = 119,
  QualificationMapInternalContentDigest = 120,
  QualificationMapInternalContentFilePath = 121,
  QualificationMapInternalDescription = 122,
  QualificationMapInternalFieldOwners = 123,
  QualificationMapInternalIgnoreType = 124,
  QualificationMapInternalMediaType = 125,
  QualificationMapInternalOwner = 126,
  QualificationMapInternalType = 127,
  QualificationMapName = 128,
  QualificationMapNodeLocale = 129,
  QualificationMapParentChildren = 130,
  QualificationMapParentChildrenChildren = 131,
  QualificationMapParentChildrenId = 132,
  QualificationMapParentId = 133,
  QualificationMapParentInternalContent = 134,
  QualificationMapParentInternalContentDigest = 135,
  QualificationMapParentInternalContentFilePath = 136,
  QualificationMapParentInternalDescription = 137,
  QualificationMapParentInternalFieldOwners = 138,
  QualificationMapParentInternalIgnoreType = 139,
  QualificationMapParentInternalMediaType = 140,
  QualificationMapParentInternalOwner = 141,
  QualificationMapParentInternalType = 142,
  QualificationMapParentParentChildren = 143,
  QualificationMapParentParentId = 144,
  QualificationMapQualifications = 145,
  QualificationMapQualificationsChildren = 146,
  QualificationMapQualificationsChildrenChildren = 147,
  QualificationMapQualificationsChildrenId = 148,
  QualificationMapQualificationsContentfulId = 149,
  QualificationMapQualificationsCreatedAt = 150,
  QualificationMapQualificationsDate = 151,
  QualificationMapQualificationsId = 152,
  QualificationMapQualificationsInternalContent = 153,
  QualificationMapQualificationsInternalContentDigest = 154,
  QualificationMapQualificationsInternalContentFilePath = 155,
  QualificationMapQualificationsInternalDescription = 156,
  QualificationMapQualificationsInternalFieldOwners = 157,
  QualificationMapQualificationsInternalIgnoreType = 158,
  QualificationMapQualificationsInternalMediaType = 159,
  QualificationMapQualificationsInternalOwner = 160,
  QualificationMapQualificationsInternalType = 161,
  QualificationMapQualificationsName = 162,
  QualificationMapQualificationsNodeLocale = 163,
  QualificationMapQualificationsParentChildren = 164,
  QualificationMapQualificationsParentId = 165,
  QualificationMapQualificationsQualificationMap = 166,
  QualificationMapQualificationsQualificationMapChildren = 167,
  QualificationMapQualificationsQualificationMapContentfulId = 168,
  QualificationMapQualificationsQualificationMapCreatedAt = 169,
  QualificationMapQualificationsQualificationMapExpanded = 170,
  QualificationMapQualificationsQualificationMapId = 171,
  QualificationMapQualificationsQualificationMapName = 172,
  QualificationMapQualificationsQualificationMapNodeLocale = 173,
  QualificationMapQualificationsQualificationMapQualifications = 174,
  QualificationMapQualificationsQualificationMapSortKey = 175,
  QualificationMapQualificationsQualificationMapSpaceId = 176,
  QualificationMapQualificationsQualificationMapUpdatedAt = 177,
  QualificationMapQualificationsSpaceId = 178,
  QualificationMapQualificationsSysRevision = 179,
  QualificationMapQualificationsSysType = 180,
  QualificationMapQualificationsUpdatedAt = 181,
  QualificationMapSortKey = 182,
  QualificationMapSpaceId = 183,
  QualificationMapSysRevision = 184,
  QualificationMapSysType = 185,
  QualificationMapUpdatedAt = 186,
  SpaceId = 187,
  SysContentTypeSysId = 188,
  SysContentTypeSysLinkType = 189,
  SysContentTypeSysType = 190,
  SysRevision = 191,
  SysType = 192,
  UpdatedAt = 193
}

export type ContentfulQualificationFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly date: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly qualification_map: InputMaybe<ContentfulQualificationMapFilterListInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulQualificationSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
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
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationGroupConnectionGroupArgs = {
  field: ContentfulQualificationFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulQualificationGroupConnectionMaxArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationGroupConnectionMinArgs = {
  field: ContentfulQualificationFieldsEnum;
};


export type ContentfulQualificationGroupConnectionSumArgs = {
  field: ContentfulQualificationFieldsEnum;
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
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapConnectionGroupArgs = {
  field: ContentfulQualificationMapFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulQualificationMapConnectionMaxArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapConnectionMinArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapConnectionSumArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};

export type ContentfulQualificationMapEdge = {
  readonly next: Maybe<ContentfulQualificationMap>;
  readonly node: ContentfulQualificationMap;
  readonly previous: Maybe<ContentfulQualificationMap>;
};

export enum ContentfulQualificationMapFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Expanded = 44,
  Id = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  Name = 55,
  NodeLocale = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  Qualifications = 98,
  QualificationsChildren = 99,
  QualificationsChildrenChildren = 100,
  QualificationsChildrenChildrenChildren = 101,
  QualificationsChildrenChildrenId = 102,
  QualificationsChildrenId = 103,
  QualificationsChildrenInternalContent = 104,
  QualificationsChildrenInternalContentDigest = 105,
  QualificationsChildrenInternalContentFilePath = 106,
  QualificationsChildrenInternalDescription = 107,
  QualificationsChildrenInternalFieldOwners = 108,
  QualificationsChildrenInternalIgnoreType = 109,
  QualificationsChildrenInternalMediaType = 110,
  QualificationsChildrenInternalOwner = 111,
  QualificationsChildrenInternalType = 112,
  QualificationsChildrenParentChildren = 113,
  QualificationsChildrenParentId = 114,
  QualificationsContentfulId = 115,
  QualificationsCreatedAt = 116,
  QualificationsDate = 117,
  QualificationsId = 118,
  QualificationsInternalContent = 119,
  QualificationsInternalContentDigest = 120,
  QualificationsInternalContentFilePath = 121,
  QualificationsInternalDescription = 122,
  QualificationsInternalFieldOwners = 123,
  QualificationsInternalIgnoreType = 124,
  QualificationsInternalMediaType = 125,
  QualificationsInternalOwner = 126,
  QualificationsInternalType = 127,
  QualificationsName = 128,
  QualificationsNodeLocale = 129,
  QualificationsParentChildren = 130,
  QualificationsParentChildrenChildren = 131,
  QualificationsParentChildrenId = 132,
  QualificationsParentId = 133,
  QualificationsParentInternalContent = 134,
  QualificationsParentInternalContentDigest = 135,
  QualificationsParentInternalContentFilePath = 136,
  QualificationsParentInternalDescription = 137,
  QualificationsParentInternalFieldOwners = 138,
  QualificationsParentInternalIgnoreType = 139,
  QualificationsParentInternalMediaType = 140,
  QualificationsParentInternalOwner = 141,
  QualificationsParentInternalType = 142,
  QualificationsParentParentChildren = 143,
  QualificationsParentParentId = 144,
  QualificationsQualificationMap = 145,
  QualificationsQualificationMapChildren = 146,
  QualificationsQualificationMapChildrenChildren = 147,
  QualificationsQualificationMapChildrenId = 148,
  QualificationsQualificationMapContentfulId = 149,
  QualificationsQualificationMapCreatedAt = 150,
  QualificationsQualificationMapExpanded = 151,
  QualificationsQualificationMapId = 152,
  QualificationsQualificationMapInternalContent = 153,
  QualificationsQualificationMapInternalContentDigest = 154,
  QualificationsQualificationMapInternalContentFilePath = 155,
  QualificationsQualificationMapInternalDescription = 156,
  QualificationsQualificationMapInternalFieldOwners = 157,
  QualificationsQualificationMapInternalIgnoreType = 158,
  QualificationsQualificationMapInternalMediaType = 159,
  QualificationsQualificationMapInternalOwner = 160,
  QualificationsQualificationMapInternalType = 161,
  QualificationsQualificationMapName = 162,
  QualificationsQualificationMapNodeLocale = 163,
  QualificationsQualificationMapParentChildren = 164,
  QualificationsQualificationMapParentId = 165,
  QualificationsQualificationMapQualifications = 166,
  QualificationsQualificationMapQualificationsChildren = 167,
  QualificationsQualificationMapQualificationsContentfulId = 168,
  QualificationsQualificationMapQualificationsCreatedAt = 169,
  QualificationsQualificationMapQualificationsDate = 170,
  QualificationsQualificationMapQualificationsId = 171,
  QualificationsQualificationMapQualificationsName = 172,
  QualificationsQualificationMapQualificationsNodeLocale = 173,
  QualificationsQualificationMapQualificationsQualificationMap = 174,
  QualificationsQualificationMapQualificationsSpaceId = 175,
  QualificationsQualificationMapQualificationsUpdatedAt = 176,
  QualificationsQualificationMapSortKey = 177,
  QualificationsQualificationMapSpaceId = 178,
  QualificationsQualificationMapSysRevision = 179,
  QualificationsQualificationMapSysType = 180,
  QualificationsQualificationMapUpdatedAt = 181,
  QualificationsSpaceId = 182,
  QualificationsSysRevision = 183,
  QualificationsSysType = 184,
  QualificationsUpdatedAt = 185,
  SortKey = 186,
  SpaceId = 187,
  SysContentTypeSysId = 188,
  SysContentTypeSysLinkType = 189,
  SysContentTypeSysType = 190,
  SysRevision = 191,
  SysType = 192,
  UpdatedAt = 193
}

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
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapGroupConnectionGroupArgs = {
  field: ContentfulQualificationMapFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulQualificationMapGroupConnectionMaxArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapGroupConnectionMinArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};


export type ContentfulQualificationMapGroupConnectionSumArgs = {
  field: ContentfulQualificationMapFieldsEnum;
};

export type ContentfulQualificationMapSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulQualificationMapFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulQualificationMapSys = {
  readonly contentType: Maybe<ContentfulQualificationMapSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapSysContentType = {
  readonly sys: Maybe<ContentfulQualificationMapSysContentTypeSys>;
};

export type ContentfulQualificationMapSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulQualificationMapSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationMapSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulQualificationMapSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationMapSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulQualificationMapSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulQualificationFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulQualificationSys = {
  readonly contentType: Maybe<ContentfulQualificationSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulQualificationSysContentType = {
  readonly sys: Maybe<ContentfulQualificationSysContentTypeSys>;
};

export type ContentfulQualificationSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulQualificationSysContentTypeSysFilterInput>;
};

export type ContentfulQualificationSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulQualificationSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulQualificationSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulQualificationSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupConnectionGroupArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulSkillGrpupConnectionMaxArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupConnectionMinArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupConnectionSumArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};

export type ContentfulSkillGrpupEdge = {
  readonly next: Maybe<ContentfulSkillGrpup>;
  readonly node: ContentfulSkillGrpup;
  readonly previous: Maybe<ContentfulSkillGrpup>;
};

export enum ContentfulSkillGrpupFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Id = 44,
  InternalContent = 45,
  InternalContentDigest = 46,
  InternalContentFilePath = 47,
  InternalDescription = 48,
  InternalFieldOwners = 49,
  InternalIgnoreType = 50,
  InternalMediaType = 51,
  InternalOwner = 52,
  InternalType = 53,
  Name = 54,
  NodeLocale = 55,
  ParentChildren = 56,
  ParentChildrenChildren = 57,
  ParentChildrenChildrenChildren = 58,
  ParentChildrenChildrenId = 59,
  ParentChildrenId = 60,
  ParentChildrenInternalContent = 61,
  ParentChildrenInternalContentDigest = 62,
  ParentChildrenInternalContentFilePath = 63,
  ParentChildrenInternalDescription = 64,
  ParentChildrenInternalFieldOwners = 65,
  ParentChildrenInternalIgnoreType = 66,
  ParentChildrenInternalMediaType = 67,
  ParentChildrenInternalOwner = 68,
  ParentChildrenInternalType = 69,
  ParentChildrenParentChildren = 70,
  ParentChildrenParentId = 71,
  ParentId = 72,
  ParentInternalContent = 73,
  ParentInternalContentDigest = 74,
  ParentInternalContentFilePath = 75,
  ParentInternalDescription = 76,
  ParentInternalFieldOwners = 77,
  ParentInternalIgnoreType = 78,
  ParentInternalMediaType = 79,
  ParentInternalOwner = 80,
  ParentInternalType = 81,
  ParentParentChildren = 82,
  ParentParentChildrenChildren = 83,
  ParentParentChildrenId = 84,
  ParentParentId = 85,
  ParentParentInternalContent = 86,
  ParentParentInternalContentDigest = 87,
  ParentParentInternalContentFilePath = 88,
  ParentParentInternalDescription = 89,
  ParentParentInternalFieldOwners = 90,
  ParentParentInternalIgnoreType = 91,
  ParentParentInternalMediaType = 92,
  ParentParentInternalOwner = 93,
  ParentParentInternalType = 94,
  ParentParentParentChildren = 95,
  ParentParentParentId = 96,
  SkillMap = 97,
  SkillMapChildren = 98,
  SkillMapChildrenChildren = 99,
  SkillMapChildrenChildrenChildren = 100,
  SkillMapChildrenChildrenId = 101,
  SkillMapChildrenId = 102,
  SkillMapChildrenInternalContent = 103,
  SkillMapChildrenInternalContentDigest = 104,
  SkillMapChildrenInternalContentFilePath = 105,
  SkillMapChildrenInternalDescription = 106,
  SkillMapChildrenInternalFieldOwners = 107,
  SkillMapChildrenInternalIgnoreType = 108,
  SkillMapChildrenInternalMediaType = 109,
  SkillMapChildrenInternalOwner = 110,
  SkillMapChildrenInternalType = 111,
  SkillMapChildrenParentChildren = 112,
  SkillMapChildrenParentId = 113,
  SkillMapContentfulId = 114,
  SkillMapCreatedAt = 115,
  SkillMapExpanded = 116,
  SkillMapId = 117,
  SkillMapInternalContent = 118,
  SkillMapInternalContentDigest = 119,
  SkillMapInternalContentFilePath = 120,
  SkillMapInternalDescription = 121,
  SkillMapInternalFieldOwners = 122,
  SkillMapInternalIgnoreType = 123,
  SkillMapInternalMediaType = 124,
  SkillMapInternalOwner = 125,
  SkillMapInternalType = 126,
  SkillMapName = 127,
  SkillMapNodeLocale = 128,
  SkillMapParentChildren = 129,
  SkillMapParentChildrenChildren = 130,
  SkillMapParentChildrenId = 131,
  SkillMapParentId = 132,
  SkillMapParentInternalContent = 133,
  SkillMapParentInternalContentDigest = 134,
  SkillMapParentInternalContentFilePath = 135,
  SkillMapParentInternalDescription = 136,
  SkillMapParentInternalFieldOwners = 137,
  SkillMapParentInternalIgnoreType = 138,
  SkillMapParentInternalMediaType = 139,
  SkillMapParentInternalOwner = 140,
  SkillMapParentInternalType = 141,
  SkillMapParentParentChildren = 142,
  SkillMapParentParentId = 143,
  SkillMapSkillGroups = 144,
  SkillMapSkillGroupsChildren = 145,
  SkillMapSkillGroupsChildrenChildren = 146,
  SkillMapSkillGroupsChildrenId = 147,
  SkillMapSkillGroupsContentfulId = 148,
  SkillMapSkillGroupsCreatedAt = 149,
  SkillMapSkillGroupsId = 150,
  SkillMapSkillGroupsInternalContent = 151,
  SkillMapSkillGroupsInternalContentDigest = 152,
  SkillMapSkillGroupsInternalContentFilePath = 153,
  SkillMapSkillGroupsInternalDescription = 154,
  SkillMapSkillGroupsInternalFieldOwners = 155,
  SkillMapSkillGroupsInternalIgnoreType = 156,
  SkillMapSkillGroupsInternalMediaType = 157,
  SkillMapSkillGroupsInternalOwner = 158,
  SkillMapSkillGroupsInternalType = 159,
  SkillMapSkillGroupsName = 160,
  SkillMapSkillGroupsNodeLocale = 161,
  SkillMapSkillGroupsParentChildren = 162,
  SkillMapSkillGroupsParentId = 163,
  SkillMapSkillGroupsSkillMap = 164,
  SkillMapSkillGroupsSkillMapChildren = 165,
  SkillMapSkillGroupsSkillMapContentfulId = 166,
  SkillMapSkillGroupsSkillMapCreatedAt = 167,
  SkillMapSkillGroupsSkillMapExpanded = 168,
  SkillMapSkillGroupsSkillMapId = 169,
  SkillMapSkillGroupsSkillMapName = 170,
  SkillMapSkillGroupsSkillMapNodeLocale = 171,
  SkillMapSkillGroupsSkillMapSkillGroups = 172,
  SkillMapSkillGroupsSkillMapSkills = 173,
  SkillMapSkillGroupsSkillMapSortKey = 174,
  SkillMapSkillGroupsSkillMapSpaceId = 175,
  SkillMapSkillGroupsSkillMapUpdatedAt = 176,
  SkillMapSkillGroupsSkills = 177,
  SkillMapSkillGroupsSkillsBlogPost = 178,
  SkillMapSkillGroupsSkillsChildren = 179,
  SkillMapSkillGroupsSkillsContentfulId = 180,
  SkillMapSkillGroupsSkillsCreatedAt = 181,
  SkillMapSkillGroupsSkillsId = 182,
  SkillMapSkillGroupsSkillsLevel = 183,
  SkillMapSkillGroupsSkillsName = 184,
  SkillMapSkillGroupsSkillsNodeLocale = 185,
  SkillMapSkillGroupsSkillsOss = 186,
  SkillMapSkillGroupsSkillsProject = 187,
  SkillMapSkillGroupsSkillsSkillGrpup = 188,
  SkillMapSkillGroupsSkillsSkillMap = 189,
  SkillMapSkillGroupsSkillsSpaceId = 190,
  SkillMapSkillGroupsSkillsUpdatedAt = 191,
  SkillMapSkillGroupsSpaceId = 192,
  SkillMapSkillGroupsSysRevision = 193,
  SkillMapSkillGroupsSysType = 194,
  SkillMapSkillGroupsUpdatedAt = 195,
  SkillMapSkills = 196,
  SkillMapSkillsBlogPost = 197,
  SkillMapSkillsBlogPostChildren = 198,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 199,
  SkillMapSkillsBlogPostContentfulId = 200,
  SkillMapSkillsBlogPostCreated = 201,
  SkillMapSkillsBlogPostCreatedAt = 202,
  SkillMapSkillsBlogPostExcerpt = 203,
  SkillMapSkillsBlogPostGatsbyPath = 204,
  SkillMapSkillsBlogPostId = 205,
  SkillMapSkillsBlogPostNodeLocale = 206,
  SkillMapSkillsBlogPostSlug = 207,
  SkillMapSkillsBlogPostSpaceId = 208,
  SkillMapSkillsBlogPostTags = 209,
  SkillMapSkillsBlogPostTitle = 210,
  SkillMapSkillsBlogPostUpdated = 211,
  SkillMapSkillsBlogPostUpdatedAt = 212,
  SkillMapSkillsChildren = 213,
  SkillMapSkillsChildrenChildren = 214,
  SkillMapSkillsChildrenId = 215,
  SkillMapSkillsContentfulId = 216,
  SkillMapSkillsCreatedAt = 217,
  SkillMapSkillsId = 218,
  SkillMapSkillsInternalContent = 219,
  SkillMapSkillsInternalContentDigest = 220,
  SkillMapSkillsInternalContentFilePath = 221,
  SkillMapSkillsInternalDescription = 222,
  SkillMapSkillsInternalFieldOwners = 223,
  SkillMapSkillsInternalIgnoreType = 224,
  SkillMapSkillsInternalMediaType = 225,
  SkillMapSkillsInternalOwner = 226,
  SkillMapSkillsInternalType = 227,
  SkillMapSkillsLevel = 228,
  SkillMapSkillsName = 229,
  SkillMapSkillsNodeLocale = 230,
  SkillMapSkillsOss = 231,
  SkillMapSkillsOssChildren = 232,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 233,
  SkillMapSkillsOssContentfulId = 234,
  SkillMapSkillsOssCreatedAt = 235,
  SkillMapSkillsOssHref = 236,
  SkillMapSkillsOssId = 237,
  SkillMapSkillsOssName = 238,
  SkillMapSkillsOssNodeLocale = 239,
  SkillMapSkillsOssSpaceId = 240,
  SkillMapSkillsOssStartDate = 241,
  SkillMapSkillsOssSubName = 242,
  SkillMapSkillsOssTags = 243,
  SkillMapSkillsOssUpdatedAt = 244,
  SkillMapSkillsParentChildren = 245,
  SkillMapSkillsParentId = 246,
  SkillMapSkillsProject = 247,
  SkillMapSkillsProjectChildren = 248,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 249,
  SkillMapSkillsProjectContentfulId = 250,
  SkillMapSkillsProjectCreatedAt = 251,
  SkillMapSkillsProjectEndDate = 252,
  SkillMapSkillsProjectId = 253,
  SkillMapSkillsProjectName = 254,
  SkillMapSkillsProjectNodeLocale = 255,
  SkillMapSkillsProjectSpaceId = 256,
  SkillMapSkillsProjectStartDate = 257,
  SkillMapSkillsProjectSubName = 258,
  SkillMapSkillsProjectTags = 259,
  SkillMapSkillsProjectUpdatedAt = 260,
  SkillMapSkillsSkillGrpup = 261,
  SkillMapSkillsSkillGrpupChildren = 262,
  SkillMapSkillsSkillGrpupContentfulId = 263,
  SkillMapSkillsSkillGrpupCreatedAt = 264,
  SkillMapSkillsSkillGrpupId = 265,
  SkillMapSkillsSkillGrpupName = 266,
  SkillMapSkillsSkillGrpupNodeLocale = 267,
  SkillMapSkillsSkillGrpupSkillMap = 268,
  SkillMapSkillsSkillGrpupSkills = 269,
  SkillMapSkillsSkillGrpupSpaceId = 270,
  SkillMapSkillsSkillGrpupUpdatedAt = 271,
  SkillMapSkillsSkillMap = 272,
  SkillMapSkillsSkillMapChildren = 273,
  SkillMapSkillsSkillMapContentfulId = 274,
  SkillMapSkillsSkillMapCreatedAt = 275,
  SkillMapSkillsSkillMapExpanded = 276,
  SkillMapSkillsSkillMapId = 277,
  SkillMapSkillsSkillMapName = 278,
  SkillMapSkillsSkillMapNodeLocale = 279,
  SkillMapSkillsSkillMapSkillGroups = 280,
  SkillMapSkillsSkillMapSkills = 281,
  SkillMapSkillsSkillMapSortKey = 282,
  SkillMapSkillsSkillMapSpaceId = 283,
  SkillMapSkillsSkillMapUpdatedAt = 284,
  SkillMapSkillsSpaceId = 285,
  SkillMapSkillsSysRevision = 286,
  SkillMapSkillsSysType = 287,
  SkillMapSkillsUpdatedAt = 288,
  SkillMapSortKey = 289,
  SkillMapSpaceId = 290,
  SkillMapSysRevision = 291,
  SkillMapSysType = 292,
  SkillMapUpdatedAt = 293,
  Skills = 294,
  SkillsBlogPost = 295,
  SkillsBlogPostCategoryChildren = 296,
  SkillsBlogPostCategoryContentfulId = 297,
  SkillsBlogPostCategoryCreatedAt = 298,
  SkillsBlogPostCategoryId = 299,
  SkillsBlogPostCategoryName = 300,
  SkillsBlogPostCategoryNodeLocale = 301,
  SkillsBlogPostCategorySlug = 302,
  SkillsBlogPostCategorySortKey = 303,
  SkillsBlogPostCategorySpaceId = 304,
  SkillsBlogPostCategoryUpdatedAt = 305,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 306,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 307,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 308,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 309,
  SkillsBlogPostChildren = 310,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 311,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 312,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 313,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 314,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 315,
  SkillsBlogPostChildrenChildren = 316,
  SkillsBlogPostChildrenId = 317,
  SkillsBlogPostContentChildren = 318,
  SkillsBlogPostContentChildrenMdx = 319,
  SkillsBlogPostContentContent = 320,
  SkillsBlogPostContentId = 321,
  SkillsBlogPostContentfulId = 322,
  SkillsBlogPostCreated = 323,
  SkillsBlogPostCreatedAt = 324,
  SkillsBlogPostExcerpt = 325,
  SkillsBlogPostGatsbyPath = 326,
  SkillsBlogPostId = 327,
  SkillsBlogPostInternalContent = 328,
  SkillsBlogPostInternalContentDigest = 329,
  SkillsBlogPostInternalContentFilePath = 330,
  SkillsBlogPostInternalDescription = 331,
  SkillsBlogPostInternalFieldOwners = 332,
  SkillsBlogPostInternalIgnoreType = 333,
  SkillsBlogPostInternalMediaType = 334,
  SkillsBlogPostInternalOwner = 335,
  SkillsBlogPostInternalType = 336,
  SkillsBlogPostNodeLocale = 337,
  SkillsBlogPostParentChildren = 338,
  SkillsBlogPostParentId = 339,
  SkillsBlogPostSlug = 340,
  SkillsBlogPostSpaceId = 341,
  SkillsBlogPostSysRevision = 342,
  SkillsBlogPostSysType = 343,
  SkillsBlogPostTags = 344,
  SkillsBlogPostTagsBlogPost = 345,
  SkillsBlogPostTagsChildren = 346,
  SkillsBlogPostTagsContentfulId = 347,
  SkillsBlogPostTagsCreatedAt = 348,
  SkillsBlogPostTagsId = 349,
  SkillsBlogPostTagsLevel = 350,
  SkillsBlogPostTagsName = 351,
  SkillsBlogPostTagsNodeLocale = 352,
  SkillsBlogPostTagsOss = 353,
  SkillsBlogPostTagsProject = 354,
  SkillsBlogPostTagsSkillGrpup = 355,
  SkillsBlogPostTagsSkillMap = 356,
  SkillsBlogPostTagsSpaceId = 357,
  SkillsBlogPostTagsUpdatedAt = 358,
  SkillsBlogPostThumbnailChildren = 359,
  SkillsBlogPostThumbnailContentfulId = 360,
  SkillsBlogPostThumbnailCreatedAt = 361,
  SkillsBlogPostThumbnailDescription = 362,
  SkillsBlogPostThumbnailFilename = 363,
  SkillsBlogPostThumbnailFilesize = 364,
  SkillsBlogPostThumbnailGatsbyImage = 365,
  SkillsBlogPostThumbnailGatsbyImageData = 366,
  SkillsBlogPostThumbnailHeight = 367,
  SkillsBlogPostThumbnailId = 368,
  SkillsBlogPostThumbnailMimeType = 369,
  SkillsBlogPostThumbnailNodeLocale = 370,
  SkillsBlogPostThumbnailPlaceholderUrl = 371,
  SkillsBlogPostThumbnailPublicUrl = 372,
  SkillsBlogPostThumbnailSize = 373,
  SkillsBlogPostThumbnailSpaceId = 374,
  SkillsBlogPostThumbnailTitle = 375,
  SkillsBlogPostThumbnailUpdatedAt = 376,
  SkillsBlogPostThumbnailUrl = 377,
  SkillsBlogPostThumbnailWidth = 378,
  SkillsBlogPostTitle = 379,
  SkillsBlogPostUpdated = 380,
  SkillsBlogPostUpdatedAt = 381,
  SkillsChildren = 382,
  SkillsChildrenChildren = 383,
  SkillsChildrenChildrenChildren = 384,
  SkillsChildrenChildrenId = 385,
  SkillsChildrenId = 386,
  SkillsChildrenInternalContent = 387,
  SkillsChildrenInternalContentDigest = 388,
  SkillsChildrenInternalContentFilePath = 389,
  SkillsChildrenInternalDescription = 390,
  SkillsChildrenInternalFieldOwners = 391,
  SkillsChildrenInternalIgnoreType = 392,
  SkillsChildrenInternalMediaType = 393,
  SkillsChildrenInternalOwner = 394,
  SkillsChildrenInternalType = 395,
  SkillsChildrenParentChildren = 396,
  SkillsChildrenParentId = 397,
  SkillsContentfulId = 398,
  SkillsCreatedAt = 399,
  SkillsId = 400,
  SkillsInternalContent = 401,
  SkillsInternalContentDigest = 402,
  SkillsInternalContentFilePath = 403,
  SkillsInternalDescription = 404,
  SkillsInternalFieldOwners = 405,
  SkillsInternalIgnoreType = 406,
  SkillsInternalMediaType = 407,
  SkillsInternalOwner = 408,
  SkillsInternalType = 409,
  SkillsLevel = 410,
  SkillsName = 411,
  SkillsNodeLocale = 412,
  SkillsOss = 413,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 414,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 415,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 416,
  SkillsOssChildContentfulOssDetailTextNodeId = 417,
  SkillsOssChildren = 418,
  SkillsOssChildrenContentfulOssDetailTextNode = 419,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 420,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 421,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 422,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 423,
  SkillsOssChildrenChildren = 424,
  SkillsOssChildrenId = 425,
  SkillsOssContentfulId = 426,
  SkillsOssCreatedAt = 427,
  SkillsOssDetailChildren = 428,
  SkillsOssDetailChildrenMdx = 429,
  SkillsOssDetailDetail = 430,
  SkillsOssDetailId = 431,
  SkillsOssHref = 432,
  SkillsOssIconChildren = 433,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 434,
  SkillsOssIconContact = 435,
  SkillsOssIconContentfulId = 436,
  SkillsOssIconCreatedAt = 437,
  SkillsOssIconHistory = 438,
  SkillsOssIconId = 439,
  SkillsOssIconName = 440,
  SkillsOssIconNodeLocale = 441,
  SkillsOssIconOss = 442,
  SkillsOssIconProject = 443,
  SkillsOssIconSpaceId = 444,
  SkillsOssIconUpdatedAt = 445,
  SkillsOssIconWhatICanDo = 446,
  SkillsOssId = 447,
  SkillsOssImageChildren = 448,
  SkillsOssImageContentfulId = 449,
  SkillsOssImageCreatedAt = 450,
  SkillsOssImageDescription = 451,
  SkillsOssImageFilename = 452,
  SkillsOssImageFilesize = 453,
  SkillsOssImageGatsbyImage = 454,
  SkillsOssImageGatsbyImageData = 455,
  SkillsOssImageHeight = 456,
  SkillsOssImageId = 457,
  SkillsOssImageMimeType = 458,
  SkillsOssImageNodeLocale = 459,
  SkillsOssImagePlaceholderUrl = 460,
  SkillsOssImagePublicUrl = 461,
  SkillsOssImageSize = 462,
  SkillsOssImageSpaceId = 463,
  SkillsOssImageTitle = 464,
  SkillsOssImageUpdatedAt = 465,
  SkillsOssImageUrl = 466,
  SkillsOssImageWidth = 467,
  SkillsOssInternalContent = 468,
  SkillsOssInternalContentDigest = 469,
  SkillsOssInternalContentFilePath = 470,
  SkillsOssInternalDescription = 471,
  SkillsOssInternalFieldOwners = 472,
  SkillsOssInternalIgnoreType = 473,
  SkillsOssInternalMediaType = 474,
  SkillsOssInternalOwner = 475,
  SkillsOssInternalType = 476,
  SkillsOssName = 477,
  SkillsOssNodeLocale = 478,
  SkillsOssParentChildren = 479,
  SkillsOssParentId = 480,
  SkillsOssSpaceId = 481,
  SkillsOssStartDate = 482,
  SkillsOssSubName = 483,
  SkillsOssSysRevision = 484,
  SkillsOssSysType = 485,
  SkillsOssTags = 486,
  SkillsOssTagsBlogPost = 487,
  SkillsOssTagsChildren = 488,
  SkillsOssTagsContentfulId = 489,
  SkillsOssTagsCreatedAt = 490,
  SkillsOssTagsId = 491,
  SkillsOssTagsLevel = 492,
  SkillsOssTagsName = 493,
  SkillsOssTagsNodeLocale = 494,
  SkillsOssTagsOss = 495,
  SkillsOssTagsProject = 496,
  SkillsOssTagsSkillGrpup = 497,
  SkillsOssTagsSkillMap = 498,
  SkillsOssTagsSpaceId = 499,
  SkillsOssTagsUpdatedAt = 500,
  SkillsOssUpdatedAt = 501,
  SkillsParentChildren = 502,
  SkillsParentChildrenChildren = 503,
  SkillsParentChildrenId = 504,
  SkillsParentId = 505,
  SkillsParentInternalContent = 506,
  SkillsParentInternalContentDigest = 507,
  SkillsParentInternalContentFilePath = 508,
  SkillsParentInternalDescription = 509,
  SkillsParentInternalFieldOwners = 510,
  SkillsParentInternalIgnoreType = 511,
  SkillsParentInternalMediaType = 512,
  SkillsParentInternalOwner = 513,
  SkillsParentInternalType = 514,
  SkillsParentParentChildren = 515,
  SkillsParentParentId = 516,
  SkillsProject = 517,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 518,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 519,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 520,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 521,
  SkillsProjectChildren = 522,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 523,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 524,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 525,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 526,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 527,
  SkillsProjectChildrenChildren = 528,
  SkillsProjectChildrenId = 529,
  SkillsProjectContentfulId = 530,
  SkillsProjectCreatedAt = 531,
  SkillsProjectDetailChildren = 532,
  SkillsProjectDetailChildrenMdx = 533,
  SkillsProjectDetailDetail = 534,
  SkillsProjectDetailId = 535,
  SkillsProjectEndDate = 536,
  SkillsProjectIconChildren = 537,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 538,
  SkillsProjectIconContact = 539,
  SkillsProjectIconContentfulId = 540,
  SkillsProjectIconCreatedAt = 541,
  SkillsProjectIconHistory = 542,
  SkillsProjectIconId = 543,
  SkillsProjectIconName = 544,
  SkillsProjectIconNodeLocale = 545,
  SkillsProjectIconOss = 546,
  SkillsProjectIconProject = 547,
  SkillsProjectIconSpaceId = 548,
  SkillsProjectIconUpdatedAt = 549,
  SkillsProjectIconWhatICanDo = 550,
  SkillsProjectId = 551,
  SkillsProjectInternalContent = 552,
  SkillsProjectInternalContentDigest = 553,
  SkillsProjectInternalContentFilePath = 554,
  SkillsProjectInternalDescription = 555,
  SkillsProjectInternalFieldOwners = 556,
  SkillsProjectInternalIgnoreType = 557,
  SkillsProjectInternalMediaType = 558,
  SkillsProjectInternalOwner = 559,
  SkillsProjectInternalType = 560,
  SkillsProjectName = 561,
  SkillsProjectNodeLocale = 562,
  SkillsProjectParentChildren = 563,
  SkillsProjectParentId = 564,
  SkillsProjectSpaceId = 565,
  SkillsProjectStartDate = 566,
  SkillsProjectSubName = 567,
  SkillsProjectSysRevision = 568,
  SkillsProjectSysType = 569,
  SkillsProjectTags = 570,
  SkillsProjectTagsBlogPost = 571,
  SkillsProjectTagsChildren = 572,
  SkillsProjectTagsContentfulId = 573,
  SkillsProjectTagsCreatedAt = 574,
  SkillsProjectTagsId = 575,
  SkillsProjectTagsLevel = 576,
  SkillsProjectTagsName = 577,
  SkillsProjectTagsNodeLocale = 578,
  SkillsProjectTagsOss = 579,
  SkillsProjectTagsProject = 580,
  SkillsProjectTagsSkillGrpup = 581,
  SkillsProjectTagsSkillMap = 582,
  SkillsProjectTagsSpaceId = 583,
  SkillsProjectTagsUpdatedAt = 584,
  SkillsProjectUpdatedAt = 585,
  SkillsSkillGrpup = 586,
  SkillsSkillGrpupChildren = 587,
  SkillsSkillGrpupChildrenChildren = 588,
  SkillsSkillGrpupChildrenId = 589,
  SkillsSkillGrpupContentfulId = 590,
  SkillsSkillGrpupCreatedAt = 591,
  SkillsSkillGrpupId = 592,
  SkillsSkillGrpupInternalContent = 593,
  SkillsSkillGrpupInternalContentDigest = 594,
  SkillsSkillGrpupInternalContentFilePath = 595,
  SkillsSkillGrpupInternalDescription = 596,
  SkillsSkillGrpupInternalFieldOwners = 597,
  SkillsSkillGrpupInternalIgnoreType = 598,
  SkillsSkillGrpupInternalMediaType = 599,
  SkillsSkillGrpupInternalOwner = 600,
  SkillsSkillGrpupInternalType = 601,
  SkillsSkillGrpupName = 602,
  SkillsSkillGrpupNodeLocale = 603,
  SkillsSkillGrpupParentChildren = 604,
  SkillsSkillGrpupParentId = 605,
  SkillsSkillGrpupSkillMap = 606,
  SkillsSkillGrpupSkillMapChildren = 607,
  SkillsSkillGrpupSkillMapContentfulId = 608,
  SkillsSkillGrpupSkillMapCreatedAt = 609,
  SkillsSkillGrpupSkillMapExpanded = 610,
  SkillsSkillGrpupSkillMapId = 611,
  SkillsSkillGrpupSkillMapName = 612,
  SkillsSkillGrpupSkillMapNodeLocale = 613,
  SkillsSkillGrpupSkillMapSkillGroups = 614,
  SkillsSkillGrpupSkillMapSkills = 615,
  SkillsSkillGrpupSkillMapSortKey = 616,
  SkillsSkillGrpupSkillMapSpaceId = 617,
  SkillsSkillGrpupSkillMapUpdatedAt = 618,
  SkillsSkillGrpupSkills = 619,
  SkillsSkillGrpupSkillsBlogPost = 620,
  SkillsSkillGrpupSkillsChildren = 621,
  SkillsSkillGrpupSkillsContentfulId = 622,
  SkillsSkillGrpupSkillsCreatedAt = 623,
  SkillsSkillGrpupSkillsId = 624,
  SkillsSkillGrpupSkillsLevel = 625,
  SkillsSkillGrpupSkillsName = 626,
  SkillsSkillGrpupSkillsNodeLocale = 627,
  SkillsSkillGrpupSkillsOss = 628,
  SkillsSkillGrpupSkillsProject = 629,
  SkillsSkillGrpupSkillsSkillGrpup = 630,
  SkillsSkillGrpupSkillsSkillMap = 631,
  SkillsSkillGrpupSkillsSpaceId = 632,
  SkillsSkillGrpupSkillsUpdatedAt = 633,
  SkillsSkillGrpupSpaceId = 634,
  SkillsSkillGrpupSysRevision = 635,
  SkillsSkillGrpupSysType = 636,
  SkillsSkillGrpupUpdatedAt = 637,
  SkillsSkillMap = 638,
  SkillsSkillMapChildren = 639,
  SkillsSkillMapChildrenChildren = 640,
  SkillsSkillMapChildrenId = 641,
  SkillsSkillMapContentfulId = 642,
  SkillsSkillMapCreatedAt = 643,
  SkillsSkillMapExpanded = 644,
  SkillsSkillMapId = 645,
  SkillsSkillMapInternalContent = 646,
  SkillsSkillMapInternalContentDigest = 647,
  SkillsSkillMapInternalContentFilePath = 648,
  SkillsSkillMapInternalDescription = 649,
  SkillsSkillMapInternalFieldOwners = 650,
  SkillsSkillMapInternalIgnoreType = 651,
  SkillsSkillMapInternalMediaType = 652,
  SkillsSkillMapInternalOwner = 653,
  SkillsSkillMapInternalType = 654,
  SkillsSkillMapName = 655,
  SkillsSkillMapNodeLocale = 656,
  SkillsSkillMapParentChildren = 657,
  SkillsSkillMapParentId = 658,
  SkillsSkillMapSkillGroups = 659,
  SkillsSkillMapSkillGroupsChildren = 660,
  SkillsSkillMapSkillGroupsContentfulId = 661,
  SkillsSkillMapSkillGroupsCreatedAt = 662,
  SkillsSkillMapSkillGroupsId = 663,
  SkillsSkillMapSkillGroupsName = 664,
  SkillsSkillMapSkillGroupsNodeLocale = 665,
  SkillsSkillMapSkillGroupsSkillMap = 666,
  SkillsSkillMapSkillGroupsSkills = 667,
  SkillsSkillMapSkillGroupsSpaceId = 668,
  SkillsSkillMapSkillGroupsUpdatedAt = 669,
  SkillsSkillMapSkills = 670,
  SkillsSkillMapSkillsBlogPost = 671,
  SkillsSkillMapSkillsChildren = 672,
  SkillsSkillMapSkillsContentfulId = 673,
  SkillsSkillMapSkillsCreatedAt = 674,
  SkillsSkillMapSkillsId = 675,
  SkillsSkillMapSkillsLevel = 676,
  SkillsSkillMapSkillsName = 677,
  SkillsSkillMapSkillsNodeLocale = 678,
  SkillsSkillMapSkillsOss = 679,
  SkillsSkillMapSkillsProject = 680,
  SkillsSkillMapSkillsSkillGrpup = 681,
  SkillsSkillMapSkillsSkillMap = 682,
  SkillsSkillMapSkillsSpaceId = 683,
  SkillsSkillMapSkillsUpdatedAt = 684,
  SkillsSkillMapSortKey = 685,
  SkillsSkillMapSpaceId = 686,
  SkillsSkillMapSysRevision = 687,
  SkillsSkillMapSysType = 688,
  SkillsSkillMapUpdatedAt = 689,
  SkillsSpaceId = 690,
  SkillsSysRevision = 691,
  SkillsSysType = 692,
  SkillsUpdatedAt = 693,
  SpaceId = 694,
  SysContentTypeSysId = 695,
  SysContentTypeSysLinkType = 696,
  SysContentTypeSysType = 697,
  SysRevision = 698,
  SysType = 699,
  UpdatedAt = 700
}

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
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupGroupConnectionGroupArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulSkillGrpupGroupConnectionMaxArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupGroupConnectionMinArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};


export type ContentfulSkillGrpupGroupConnectionSumArgs = {
  field: ContentfulSkillGrpupFieldsEnum;
};

export type ContentfulSkillGrpupSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulSkillGrpupFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulSkillGrpupSys = {
  readonly contentType: Maybe<ContentfulSkillGrpupSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulSkillGrpupSysContentType = {
  readonly sys: Maybe<ContentfulSkillGrpupSysContentTypeSys>;
};

export type ContentfulSkillGrpupSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulSkillGrpupSysContentTypeSysFilterInput>;
};

export type ContentfulSkillGrpupSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulSkillGrpupSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSkillGrpupSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulSkillGrpupSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapConnectionGroupArgs = {
  field: ContentfulSkillMapFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulSkillMapConnectionMaxArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapConnectionMinArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapConnectionSumArgs = {
  field: ContentfulSkillMapFieldsEnum;
};

export type ContentfulSkillMapEdge = {
  readonly next: Maybe<ContentfulSkillMap>;
  readonly node: ContentfulSkillMap;
  readonly previous: Maybe<ContentfulSkillMap>;
};

export enum ContentfulSkillMapFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  Expanded = 44,
  Id = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  Name = 55,
  NodeLocale = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  SkillGroups = 98,
  SkillGroupsChildren = 99,
  SkillGroupsChildrenChildren = 100,
  SkillGroupsChildrenChildrenChildren = 101,
  SkillGroupsChildrenChildrenId = 102,
  SkillGroupsChildrenId = 103,
  SkillGroupsChildrenInternalContent = 104,
  SkillGroupsChildrenInternalContentDigest = 105,
  SkillGroupsChildrenInternalContentFilePath = 106,
  SkillGroupsChildrenInternalDescription = 107,
  SkillGroupsChildrenInternalFieldOwners = 108,
  SkillGroupsChildrenInternalIgnoreType = 109,
  SkillGroupsChildrenInternalMediaType = 110,
  SkillGroupsChildrenInternalOwner = 111,
  SkillGroupsChildrenInternalType = 112,
  SkillGroupsChildrenParentChildren = 113,
  SkillGroupsChildrenParentId = 114,
  SkillGroupsContentfulId = 115,
  SkillGroupsCreatedAt = 116,
  SkillGroupsId = 117,
  SkillGroupsInternalContent = 118,
  SkillGroupsInternalContentDigest = 119,
  SkillGroupsInternalContentFilePath = 120,
  SkillGroupsInternalDescription = 121,
  SkillGroupsInternalFieldOwners = 122,
  SkillGroupsInternalIgnoreType = 123,
  SkillGroupsInternalMediaType = 124,
  SkillGroupsInternalOwner = 125,
  SkillGroupsInternalType = 126,
  SkillGroupsName = 127,
  SkillGroupsNodeLocale = 128,
  SkillGroupsParentChildren = 129,
  SkillGroupsParentChildrenChildren = 130,
  SkillGroupsParentChildrenId = 131,
  SkillGroupsParentId = 132,
  SkillGroupsParentInternalContent = 133,
  SkillGroupsParentInternalContentDigest = 134,
  SkillGroupsParentInternalContentFilePath = 135,
  SkillGroupsParentInternalDescription = 136,
  SkillGroupsParentInternalFieldOwners = 137,
  SkillGroupsParentInternalIgnoreType = 138,
  SkillGroupsParentInternalMediaType = 139,
  SkillGroupsParentInternalOwner = 140,
  SkillGroupsParentInternalType = 141,
  SkillGroupsParentParentChildren = 142,
  SkillGroupsParentParentId = 143,
  SkillGroupsSkillMap = 144,
  SkillGroupsSkillMapChildren = 145,
  SkillGroupsSkillMapChildrenChildren = 146,
  SkillGroupsSkillMapChildrenId = 147,
  SkillGroupsSkillMapContentfulId = 148,
  SkillGroupsSkillMapCreatedAt = 149,
  SkillGroupsSkillMapExpanded = 150,
  SkillGroupsSkillMapId = 151,
  SkillGroupsSkillMapInternalContent = 152,
  SkillGroupsSkillMapInternalContentDigest = 153,
  SkillGroupsSkillMapInternalContentFilePath = 154,
  SkillGroupsSkillMapInternalDescription = 155,
  SkillGroupsSkillMapInternalFieldOwners = 156,
  SkillGroupsSkillMapInternalIgnoreType = 157,
  SkillGroupsSkillMapInternalMediaType = 158,
  SkillGroupsSkillMapInternalOwner = 159,
  SkillGroupsSkillMapInternalType = 160,
  SkillGroupsSkillMapName = 161,
  SkillGroupsSkillMapNodeLocale = 162,
  SkillGroupsSkillMapParentChildren = 163,
  SkillGroupsSkillMapParentId = 164,
  SkillGroupsSkillMapSkillGroups = 165,
  SkillGroupsSkillMapSkillGroupsChildren = 166,
  SkillGroupsSkillMapSkillGroupsContentfulId = 167,
  SkillGroupsSkillMapSkillGroupsCreatedAt = 168,
  SkillGroupsSkillMapSkillGroupsId = 169,
  SkillGroupsSkillMapSkillGroupsName = 170,
  SkillGroupsSkillMapSkillGroupsNodeLocale = 171,
  SkillGroupsSkillMapSkillGroupsSkillMap = 172,
  SkillGroupsSkillMapSkillGroupsSkills = 173,
  SkillGroupsSkillMapSkillGroupsSpaceId = 174,
  SkillGroupsSkillMapSkillGroupsUpdatedAt = 175,
  SkillGroupsSkillMapSkills = 176,
  SkillGroupsSkillMapSkillsBlogPost = 177,
  SkillGroupsSkillMapSkillsChildren = 178,
  SkillGroupsSkillMapSkillsContentfulId = 179,
  SkillGroupsSkillMapSkillsCreatedAt = 180,
  SkillGroupsSkillMapSkillsId = 181,
  SkillGroupsSkillMapSkillsLevel = 182,
  SkillGroupsSkillMapSkillsName = 183,
  SkillGroupsSkillMapSkillsNodeLocale = 184,
  SkillGroupsSkillMapSkillsOss = 185,
  SkillGroupsSkillMapSkillsProject = 186,
  SkillGroupsSkillMapSkillsSkillGrpup = 187,
  SkillGroupsSkillMapSkillsSkillMap = 188,
  SkillGroupsSkillMapSkillsSpaceId = 189,
  SkillGroupsSkillMapSkillsUpdatedAt = 190,
  SkillGroupsSkillMapSortKey = 191,
  SkillGroupsSkillMapSpaceId = 192,
  SkillGroupsSkillMapSysRevision = 193,
  SkillGroupsSkillMapSysType = 194,
  SkillGroupsSkillMapUpdatedAt = 195,
  SkillGroupsSkills = 196,
  SkillGroupsSkillsBlogPost = 197,
  SkillGroupsSkillsBlogPostChildren = 198,
  SkillGroupsSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 199,
  SkillGroupsSkillsBlogPostContentfulId = 200,
  SkillGroupsSkillsBlogPostCreated = 201,
  SkillGroupsSkillsBlogPostCreatedAt = 202,
  SkillGroupsSkillsBlogPostExcerpt = 203,
  SkillGroupsSkillsBlogPostGatsbyPath = 204,
  SkillGroupsSkillsBlogPostId = 205,
  SkillGroupsSkillsBlogPostNodeLocale = 206,
  SkillGroupsSkillsBlogPostSlug = 207,
  SkillGroupsSkillsBlogPostSpaceId = 208,
  SkillGroupsSkillsBlogPostTags = 209,
  SkillGroupsSkillsBlogPostTitle = 210,
  SkillGroupsSkillsBlogPostUpdated = 211,
  SkillGroupsSkillsBlogPostUpdatedAt = 212,
  SkillGroupsSkillsChildren = 213,
  SkillGroupsSkillsChildrenChildren = 214,
  SkillGroupsSkillsChildrenId = 215,
  SkillGroupsSkillsContentfulId = 216,
  SkillGroupsSkillsCreatedAt = 217,
  SkillGroupsSkillsId = 218,
  SkillGroupsSkillsInternalContent = 219,
  SkillGroupsSkillsInternalContentDigest = 220,
  SkillGroupsSkillsInternalContentFilePath = 221,
  SkillGroupsSkillsInternalDescription = 222,
  SkillGroupsSkillsInternalFieldOwners = 223,
  SkillGroupsSkillsInternalIgnoreType = 224,
  SkillGroupsSkillsInternalMediaType = 225,
  SkillGroupsSkillsInternalOwner = 226,
  SkillGroupsSkillsInternalType = 227,
  SkillGroupsSkillsLevel = 228,
  SkillGroupsSkillsName = 229,
  SkillGroupsSkillsNodeLocale = 230,
  SkillGroupsSkillsOss = 231,
  SkillGroupsSkillsOssChildren = 232,
  SkillGroupsSkillsOssChildrenContentfulOssDetailTextNode = 233,
  SkillGroupsSkillsOssContentfulId = 234,
  SkillGroupsSkillsOssCreatedAt = 235,
  SkillGroupsSkillsOssHref = 236,
  SkillGroupsSkillsOssId = 237,
  SkillGroupsSkillsOssName = 238,
  SkillGroupsSkillsOssNodeLocale = 239,
  SkillGroupsSkillsOssSpaceId = 240,
  SkillGroupsSkillsOssStartDate = 241,
  SkillGroupsSkillsOssSubName = 242,
  SkillGroupsSkillsOssTags = 243,
  SkillGroupsSkillsOssUpdatedAt = 244,
  SkillGroupsSkillsParentChildren = 245,
  SkillGroupsSkillsParentId = 246,
  SkillGroupsSkillsProject = 247,
  SkillGroupsSkillsProjectChildren = 248,
  SkillGroupsSkillsProjectChildrenContentfulProjectDetailTextNode = 249,
  SkillGroupsSkillsProjectContentfulId = 250,
  SkillGroupsSkillsProjectCreatedAt = 251,
  SkillGroupsSkillsProjectEndDate = 252,
  SkillGroupsSkillsProjectId = 253,
  SkillGroupsSkillsProjectName = 254,
  SkillGroupsSkillsProjectNodeLocale = 255,
  SkillGroupsSkillsProjectSpaceId = 256,
  SkillGroupsSkillsProjectStartDate = 257,
  SkillGroupsSkillsProjectSubName = 258,
  SkillGroupsSkillsProjectTags = 259,
  SkillGroupsSkillsProjectUpdatedAt = 260,
  SkillGroupsSkillsSkillGrpup = 261,
  SkillGroupsSkillsSkillGrpupChildren = 262,
  SkillGroupsSkillsSkillGrpupContentfulId = 263,
  SkillGroupsSkillsSkillGrpupCreatedAt = 264,
  SkillGroupsSkillsSkillGrpupId = 265,
  SkillGroupsSkillsSkillGrpupName = 266,
  SkillGroupsSkillsSkillGrpupNodeLocale = 267,
  SkillGroupsSkillsSkillGrpupSkillMap = 268,
  SkillGroupsSkillsSkillGrpupSkills = 269,
  SkillGroupsSkillsSkillGrpupSpaceId = 270,
  SkillGroupsSkillsSkillGrpupUpdatedAt = 271,
  SkillGroupsSkillsSkillMap = 272,
  SkillGroupsSkillsSkillMapChildren = 273,
  SkillGroupsSkillsSkillMapContentfulId = 274,
  SkillGroupsSkillsSkillMapCreatedAt = 275,
  SkillGroupsSkillsSkillMapExpanded = 276,
  SkillGroupsSkillsSkillMapId = 277,
  SkillGroupsSkillsSkillMapName = 278,
  SkillGroupsSkillsSkillMapNodeLocale = 279,
  SkillGroupsSkillsSkillMapSkillGroups = 280,
  SkillGroupsSkillsSkillMapSkills = 281,
  SkillGroupsSkillsSkillMapSortKey = 282,
  SkillGroupsSkillsSkillMapSpaceId = 283,
  SkillGroupsSkillsSkillMapUpdatedAt = 284,
  SkillGroupsSkillsSpaceId = 285,
  SkillGroupsSkillsSysRevision = 286,
  SkillGroupsSkillsSysType = 287,
  SkillGroupsSkillsUpdatedAt = 288,
  SkillGroupsSpaceId = 289,
  SkillGroupsSysRevision = 290,
  SkillGroupsSysType = 291,
  SkillGroupsUpdatedAt = 292,
  Skills = 293,
  SkillsBlogPost = 294,
  SkillsBlogPostCategoryChildren = 295,
  SkillsBlogPostCategoryContentfulId = 296,
  SkillsBlogPostCategoryCreatedAt = 297,
  SkillsBlogPostCategoryId = 298,
  SkillsBlogPostCategoryName = 299,
  SkillsBlogPostCategoryNodeLocale = 300,
  SkillsBlogPostCategorySlug = 301,
  SkillsBlogPostCategorySortKey = 302,
  SkillsBlogPostCategorySpaceId = 303,
  SkillsBlogPostCategoryUpdatedAt = 304,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 305,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 306,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 307,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 308,
  SkillsBlogPostChildren = 309,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 310,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 311,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 312,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 313,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 314,
  SkillsBlogPostChildrenChildren = 315,
  SkillsBlogPostChildrenId = 316,
  SkillsBlogPostContentChildren = 317,
  SkillsBlogPostContentChildrenMdx = 318,
  SkillsBlogPostContentContent = 319,
  SkillsBlogPostContentId = 320,
  SkillsBlogPostContentfulId = 321,
  SkillsBlogPostCreated = 322,
  SkillsBlogPostCreatedAt = 323,
  SkillsBlogPostExcerpt = 324,
  SkillsBlogPostGatsbyPath = 325,
  SkillsBlogPostId = 326,
  SkillsBlogPostInternalContent = 327,
  SkillsBlogPostInternalContentDigest = 328,
  SkillsBlogPostInternalContentFilePath = 329,
  SkillsBlogPostInternalDescription = 330,
  SkillsBlogPostInternalFieldOwners = 331,
  SkillsBlogPostInternalIgnoreType = 332,
  SkillsBlogPostInternalMediaType = 333,
  SkillsBlogPostInternalOwner = 334,
  SkillsBlogPostInternalType = 335,
  SkillsBlogPostNodeLocale = 336,
  SkillsBlogPostParentChildren = 337,
  SkillsBlogPostParentId = 338,
  SkillsBlogPostSlug = 339,
  SkillsBlogPostSpaceId = 340,
  SkillsBlogPostSysRevision = 341,
  SkillsBlogPostSysType = 342,
  SkillsBlogPostTags = 343,
  SkillsBlogPostTagsBlogPost = 344,
  SkillsBlogPostTagsChildren = 345,
  SkillsBlogPostTagsContentfulId = 346,
  SkillsBlogPostTagsCreatedAt = 347,
  SkillsBlogPostTagsId = 348,
  SkillsBlogPostTagsLevel = 349,
  SkillsBlogPostTagsName = 350,
  SkillsBlogPostTagsNodeLocale = 351,
  SkillsBlogPostTagsOss = 352,
  SkillsBlogPostTagsProject = 353,
  SkillsBlogPostTagsSkillGrpup = 354,
  SkillsBlogPostTagsSkillMap = 355,
  SkillsBlogPostTagsSpaceId = 356,
  SkillsBlogPostTagsUpdatedAt = 357,
  SkillsBlogPostThumbnailChildren = 358,
  SkillsBlogPostThumbnailContentfulId = 359,
  SkillsBlogPostThumbnailCreatedAt = 360,
  SkillsBlogPostThumbnailDescription = 361,
  SkillsBlogPostThumbnailFilename = 362,
  SkillsBlogPostThumbnailFilesize = 363,
  SkillsBlogPostThumbnailGatsbyImage = 364,
  SkillsBlogPostThumbnailGatsbyImageData = 365,
  SkillsBlogPostThumbnailHeight = 366,
  SkillsBlogPostThumbnailId = 367,
  SkillsBlogPostThumbnailMimeType = 368,
  SkillsBlogPostThumbnailNodeLocale = 369,
  SkillsBlogPostThumbnailPlaceholderUrl = 370,
  SkillsBlogPostThumbnailPublicUrl = 371,
  SkillsBlogPostThumbnailSize = 372,
  SkillsBlogPostThumbnailSpaceId = 373,
  SkillsBlogPostThumbnailTitle = 374,
  SkillsBlogPostThumbnailUpdatedAt = 375,
  SkillsBlogPostThumbnailUrl = 376,
  SkillsBlogPostThumbnailWidth = 377,
  SkillsBlogPostTitle = 378,
  SkillsBlogPostUpdated = 379,
  SkillsBlogPostUpdatedAt = 380,
  SkillsChildren = 381,
  SkillsChildrenChildren = 382,
  SkillsChildrenChildrenChildren = 383,
  SkillsChildrenChildrenId = 384,
  SkillsChildrenId = 385,
  SkillsChildrenInternalContent = 386,
  SkillsChildrenInternalContentDigest = 387,
  SkillsChildrenInternalContentFilePath = 388,
  SkillsChildrenInternalDescription = 389,
  SkillsChildrenInternalFieldOwners = 390,
  SkillsChildrenInternalIgnoreType = 391,
  SkillsChildrenInternalMediaType = 392,
  SkillsChildrenInternalOwner = 393,
  SkillsChildrenInternalType = 394,
  SkillsChildrenParentChildren = 395,
  SkillsChildrenParentId = 396,
  SkillsContentfulId = 397,
  SkillsCreatedAt = 398,
  SkillsId = 399,
  SkillsInternalContent = 400,
  SkillsInternalContentDigest = 401,
  SkillsInternalContentFilePath = 402,
  SkillsInternalDescription = 403,
  SkillsInternalFieldOwners = 404,
  SkillsInternalIgnoreType = 405,
  SkillsInternalMediaType = 406,
  SkillsInternalOwner = 407,
  SkillsInternalType = 408,
  SkillsLevel = 409,
  SkillsName = 410,
  SkillsNodeLocale = 411,
  SkillsOss = 412,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 413,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 414,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 415,
  SkillsOssChildContentfulOssDetailTextNodeId = 416,
  SkillsOssChildren = 417,
  SkillsOssChildrenContentfulOssDetailTextNode = 418,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 419,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 420,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 421,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 422,
  SkillsOssChildrenChildren = 423,
  SkillsOssChildrenId = 424,
  SkillsOssContentfulId = 425,
  SkillsOssCreatedAt = 426,
  SkillsOssDetailChildren = 427,
  SkillsOssDetailChildrenMdx = 428,
  SkillsOssDetailDetail = 429,
  SkillsOssDetailId = 430,
  SkillsOssHref = 431,
  SkillsOssIconChildren = 432,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 433,
  SkillsOssIconContact = 434,
  SkillsOssIconContentfulId = 435,
  SkillsOssIconCreatedAt = 436,
  SkillsOssIconHistory = 437,
  SkillsOssIconId = 438,
  SkillsOssIconName = 439,
  SkillsOssIconNodeLocale = 440,
  SkillsOssIconOss = 441,
  SkillsOssIconProject = 442,
  SkillsOssIconSpaceId = 443,
  SkillsOssIconUpdatedAt = 444,
  SkillsOssIconWhatICanDo = 445,
  SkillsOssId = 446,
  SkillsOssImageChildren = 447,
  SkillsOssImageContentfulId = 448,
  SkillsOssImageCreatedAt = 449,
  SkillsOssImageDescription = 450,
  SkillsOssImageFilename = 451,
  SkillsOssImageFilesize = 452,
  SkillsOssImageGatsbyImage = 453,
  SkillsOssImageGatsbyImageData = 454,
  SkillsOssImageHeight = 455,
  SkillsOssImageId = 456,
  SkillsOssImageMimeType = 457,
  SkillsOssImageNodeLocale = 458,
  SkillsOssImagePlaceholderUrl = 459,
  SkillsOssImagePublicUrl = 460,
  SkillsOssImageSize = 461,
  SkillsOssImageSpaceId = 462,
  SkillsOssImageTitle = 463,
  SkillsOssImageUpdatedAt = 464,
  SkillsOssImageUrl = 465,
  SkillsOssImageWidth = 466,
  SkillsOssInternalContent = 467,
  SkillsOssInternalContentDigest = 468,
  SkillsOssInternalContentFilePath = 469,
  SkillsOssInternalDescription = 470,
  SkillsOssInternalFieldOwners = 471,
  SkillsOssInternalIgnoreType = 472,
  SkillsOssInternalMediaType = 473,
  SkillsOssInternalOwner = 474,
  SkillsOssInternalType = 475,
  SkillsOssName = 476,
  SkillsOssNodeLocale = 477,
  SkillsOssParentChildren = 478,
  SkillsOssParentId = 479,
  SkillsOssSpaceId = 480,
  SkillsOssStartDate = 481,
  SkillsOssSubName = 482,
  SkillsOssSysRevision = 483,
  SkillsOssSysType = 484,
  SkillsOssTags = 485,
  SkillsOssTagsBlogPost = 486,
  SkillsOssTagsChildren = 487,
  SkillsOssTagsContentfulId = 488,
  SkillsOssTagsCreatedAt = 489,
  SkillsOssTagsId = 490,
  SkillsOssTagsLevel = 491,
  SkillsOssTagsName = 492,
  SkillsOssTagsNodeLocale = 493,
  SkillsOssTagsOss = 494,
  SkillsOssTagsProject = 495,
  SkillsOssTagsSkillGrpup = 496,
  SkillsOssTagsSkillMap = 497,
  SkillsOssTagsSpaceId = 498,
  SkillsOssTagsUpdatedAt = 499,
  SkillsOssUpdatedAt = 500,
  SkillsParentChildren = 501,
  SkillsParentChildrenChildren = 502,
  SkillsParentChildrenId = 503,
  SkillsParentId = 504,
  SkillsParentInternalContent = 505,
  SkillsParentInternalContentDigest = 506,
  SkillsParentInternalContentFilePath = 507,
  SkillsParentInternalDescription = 508,
  SkillsParentInternalFieldOwners = 509,
  SkillsParentInternalIgnoreType = 510,
  SkillsParentInternalMediaType = 511,
  SkillsParentInternalOwner = 512,
  SkillsParentInternalType = 513,
  SkillsParentParentChildren = 514,
  SkillsParentParentId = 515,
  SkillsProject = 516,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 517,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 518,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 519,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 520,
  SkillsProjectChildren = 521,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 522,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 523,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 524,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 525,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 526,
  SkillsProjectChildrenChildren = 527,
  SkillsProjectChildrenId = 528,
  SkillsProjectContentfulId = 529,
  SkillsProjectCreatedAt = 530,
  SkillsProjectDetailChildren = 531,
  SkillsProjectDetailChildrenMdx = 532,
  SkillsProjectDetailDetail = 533,
  SkillsProjectDetailId = 534,
  SkillsProjectEndDate = 535,
  SkillsProjectIconChildren = 536,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 537,
  SkillsProjectIconContact = 538,
  SkillsProjectIconContentfulId = 539,
  SkillsProjectIconCreatedAt = 540,
  SkillsProjectIconHistory = 541,
  SkillsProjectIconId = 542,
  SkillsProjectIconName = 543,
  SkillsProjectIconNodeLocale = 544,
  SkillsProjectIconOss = 545,
  SkillsProjectIconProject = 546,
  SkillsProjectIconSpaceId = 547,
  SkillsProjectIconUpdatedAt = 548,
  SkillsProjectIconWhatICanDo = 549,
  SkillsProjectId = 550,
  SkillsProjectInternalContent = 551,
  SkillsProjectInternalContentDigest = 552,
  SkillsProjectInternalContentFilePath = 553,
  SkillsProjectInternalDescription = 554,
  SkillsProjectInternalFieldOwners = 555,
  SkillsProjectInternalIgnoreType = 556,
  SkillsProjectInternalMediaType = 557,
  SkillsProjectInternalOwner = 558,
  SkillsProjectInternalType = 559,
  SkillsProjectName = 560,
  SkillsProjectNodeLocale = 561,
  SkillsProjectParentChildren = 562,
  SkillsProjectParentId = 563,
  SkillsProjectSpaceId = 564,
  SkillsProjectStartDate = 565,
  SkillsProjectSubName = 566,
  SkillsProjectSysRevision = 567,
  SkillsProjectSysType = 568,
  SkillsProjectTags = 569,
  SkillsProjectTagsBlogPost = 570,
  SkillsProjectTagsChildren = 571,
  SkillsProjectTagsContentfulId = 572,
  SkillsProjectTagsCreatedAt = 573,
  SkillsProjectTagsId = 574,
  SkillsProjectTagsLevel = 575,
  SkillsProjectTagsName = 576,
  SkillsProjectTagsNodeLocale = 577,
  SkillsProjectTagsOss = 578,
  SkillsProjectTagsProject = 579,
  SkillsProjectTagsSkillGrpup = 580,
  SkillsProjectTagsSkillMap = 581,
  SkillsProjectTagsSpaceId = 582,
  SkillsProjectTagsUpdatedAt = 583,
  SkillsProjectUpdatedAt = 584,
  SkillsSkillGrpup = 585,
  SkillsSkillGrpupChildren = 586,
  SkillsSkillGrpupChildrenChildren = 587,
  SkillsSkillGrpupChildrenId = 588,
  SkillsSkillGrpupContentfulId = 589,
  SkillsSkillGrpupCreatedAt = 590,
  SkillsSkillGrpupId = 591,
  SkillsSkillGrpupInternalContent = 592,
  SkillsSkillGrpupInternalContentDigest = 593,
  SkillsSkillGrpupInternalContentFilePath = 594,
  SkillsSkillGrpupInternalDescription = 595,
  SkillsSkillGrpupInternalFieldOwners = 596,
  SkillsSkillGrpupInternalIgnoreType = 597,
  SkillsSkillGrpupInternalMediaType = 598,
  SkillsSkillGrpupInternalOwner = 599,
  SkillsSkillGrpupInternalType = 600,
  SkillsSkillGrpupName = 601,
  SkillsSkillGrpupNodeLocale = 602,
  SkillsSkillGrpupParentChildren = 603,
  SkillsSkillGrpupParentId = 604,
  SkillsSkillGrpupSkillMap = 605,
  SkillsSkillGrpupSkillMapChildren = 606,
  SkillsSkillGrpupSkillMapContentfulId = 607,
  SkillsSkillGrpupSkillMapCreatedAt = 608,
  SkillsSkillGrpupSkillMapExpanded = 609,
  SkillsSkillGrpupSkillMapId = 610,
  SkillsSkillGrpupSkillMapName = 611,
  SkillsSkillGrpupSkillMapNodeLocale = 612,
  SkillsSkillGrpupSkillMapSkillGroups = 613,
  SkillsSkillGrpupSkillMapSkills = 614,
  SkillsSkillGrpupSkillMapSortKey = 615,
  SkillsSkillGrpupSkillMapSpaceId = 616,
  SkillsSkillGrpupSkillMapUpdatedAt = 617,
  SkillsSkillGrpupSkills = 618,
  SkillsSkillGrpupSkillsBlogPost = 619,
  SkillsSkillGrpupSkillsChildren = 620,
  SkillsSkillGrpupSkillsContentfulId = 621,
  SkillsSkillGrpupSkillsCreatedAt = 622,
  SkillsSkillGrpupSkillsId = 623,
  SkillsSkillGrpupSkillsLevel = 624,
  SkillsSkillGrpupSkillsName = 625,
  SkillsSkillGrpupSkillsNodeLocale = 626,
  SkillsSkillGrpupSkillsOss = 627,
  SkillsSkillGrpupSkillsProject = 628,
  SkillsSkillGrpupSkillsSkillGrpup = 629,
  SkillsSkillGrpupSkillsSkillMap = 630,
  SkillsSkillGrpupSkillsSpaceId = 631,
  SkillsSkillGrpupSkillsUpdatedAt = 632,
  SkillsSkillGrpupSpaceId = 633,
  SkillsSkillGrpupSysRevision = 634,
  SkillsSkillGrpupSysType = 635,
  SkillsSkillGrpupUpdatedAt = 636,
  SkillsSkillMap = 637,
  SkillsSkillMapChildren = 638,
  SkillsSkillMapChildrenChildren = 639,
  SkillsSkillMapChildrenId = 640,
  SkillsSkillMapContentfulId = 641,
  SkillsSkillMapCreatedAt = 642,
  SkillsSkillMapExpanded = 643,
  SkillsSkillMapId = 644,
  SkillsSkillMapInternalContent = 645,
  SkillsSkillMapInternalContentDigest = 646,
  SkillsSkillMapInternalContentFilePath = 647,
  SkillsSkillMapInternalDescription = 648,
  SkillsSkillMapInternalFieldOwners = 649,
  SkillsSkillMapInternalIgnoreType = 650,
  SkillsSkillMapInternalMediaType = 651,
  SkillsSkillMapInternalOwner = 652,
  SkillsSkillMapInternalType = 653,
  SkillsSkillMapName = 654,
  SkillsSkillMapNodeLocale = 655,
  SkillsSkillMapParentChildren = 656,
  SkillsSkillMapParentId = 657,
  SkillsSkillMapSkillGroups = 658,
  SkillsSkillMapSkillGroupsChildren = 659,
  SkillsSkillMapSkillGroupsContentfulId = 660,
  SkillsSkillMapSkillGroupsCreatedAt = 661,
  SkillsSkillMapSkillGroupsId = 662,
  SkillsSkillMapSkillGroupsName = 663,
  SkillsSkillMapSkillGroupsNodeLocale = 664,
  SkillsSkillMapSkillGroupsSkillMap = 665,
  SkillsSkillMapSkillGroupsSkills = 666,
  SkillsSkillMapSkillGroupsSpaceId = 667,
  SkillsSkillMapSkillGroupsUpdatedAt = 668,
  SkillsSkillMapSkills = 669,
  SkillsSkillMapSkillsBlogPost = 670,
  SkillsSkillMapSkillsChildren = 671,
  SkillsSkillMapSkillsContentfulId = 672,
  SkillsSkillMapSkillsCreatedAt = 673,
  SkillsSkillMapSkillsId = 674,
  SkillsSkillMapSkillsLevel = 675,
  SkillsSkillMapSkillsName = 676,
  SkillsSkillMapSkillsNodeLocale = 677,
  SkillsSkillMapSkillsOss = 678,
  SkillsSkillMapSkillsProject = 679,
  SkillsSkillMapSkillsSkillGrpup = 680,
  SkillsSkillMapSkillsSkillMap = 681,
  SkillsSkillMapSkillsSpaceId = 682,
  SkillsSkillMapSkillsUpdatedAt = 683,
  SkillsSkillMapSortKey = 684,
  SkillsSkillMapSpaceId = 685,
  SkillsSkillMapSysRevision = 686,
  SkillsSkillMapSysType = 687,
  SkillsSkillMapUpdatedAt = 688,
  SkillsSpaceId = 689,
  SkillsSysRevision = 690,
  SkillsSysType = 691,
  SkillsUpdatedAt = 692,
  SortKey = 693,
  SpaceId = 694,
  SysContentTypeSysId = 695,
  SysContentTypeSysLinkType = 696,
  SysContentTypeSysType = 697,
  SysRevision = 698,
  SysType = 699,
  UpdatedAt = 700
}

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
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapGroupConnectionGroupArgs = {
  field: ContentfulSkillMapFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulSkillMapGroupConnectionMaxArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapGroupConnectionMinArgs = {
  field: ContentfulSkillMapFieldsEnum;
};


export type ContentfulSkillMapGroupConnectionSumArgs = {
  field: ContentfulSkillMapFieldsEnum;
};

export type ContentfulSkillMapSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulSkillMapFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulSkillMapSys = {
  readonly contentType: Maybe<ContentfulSkillMapSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSysContentType = {
  readonly sys: Maybe<ContentfulSkillMapSysContentTypeSys>;
};

export type ContentfulSkillMapSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulSkillMapSysContentTypeSysFilterInput>;
};

export type ContentfulSkillMapSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulSkillMapSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulSkillMapSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulSkillMapSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionGroupArgs = {
  field: ContentfulTagFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulTagConnectionMaxArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionMinArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagConnectionSumArgs = {
  field: ContentfulTagFieldsEnum;
};

export type ContentfulTagEdge = {
  readonly next: Maybe<ContentfulTag>;
  readonly node: ContentfulTag;
  readonly previous: Maybe<ContentfulTag>;
};

export enum ContentfulTagFieldsEnum {
  BlogPost = 0,
  BlogPostCategoryChildren = 1,
  BlogPostCategoryChildrenChildren = 2,
  BlogPostCategoryChildrenId = 3,
  BlogPostCategoryContentfulId = 4,
  BlogPostCategoryCreatedAt = 5,
  BlogPostCategoryId = 6,
  BlogPostCategoryInternalContent = 7,
  BlogPostCategoryInternalContentDigest = 8,
  BlogPostCategoryInternalContentFilePath = 9,
  BlogPostCategoryInternalDescription = 10,
  BlogPostCategoryInternalFieldOwners = 11,
  BlogPostCategoryInternalIgnoreType = 12,
  BlogPostCategoryInternalMediaType = 13,
  BlogPostCategoryInternalOwner = 14,
  BlogPostCategoryInternalType = 15,
  BlogPostCategoryName = 16,
  BlogPostCategoryNodeLocale = 17,
  BlogPostCategoryParentChildren = 18,
  BlogPostCategoryParentId = 19,
  BlogPostCategorySlug = 20,
  BlogPostCategorySortKey = 21,
  BlogPostCategorySpaceId = 22,
  BlogPostCategorySysRevision = 23,
  BlogPostCategorySysType = 24,
  BlogPostCategoryUpdatedAt = 25,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxBody = 26,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxChildren = 27,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 28,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 29,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHeadings = 30,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHtml = 31,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxId = 32,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 33,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxRawBody = 34,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxSlug = 35,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 36,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 37,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 38,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 39,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxBody = 40,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 41,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 42,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 43,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 44,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 45,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxId = 46,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 47,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 48,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 49,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 50,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 51,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 52,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 53,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 54,
  BlogPostChildContentfulBlogPostContentTextNodeId = 55,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 56,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 57,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentFilePath = 58,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 59,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 60,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 61,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 62,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 63,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 64,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 65,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 66,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 67,
  BlogPostChildren = 68,
  BlogPostChildrenContentfulBlogPostContentTextNode = 69,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxBody = 70,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 71,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 72,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 73,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 74,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 75,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxId = 76,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 77,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 78,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 79,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 80,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 81,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 82,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 83,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 84,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 85,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 86,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 87,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 88,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 89,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 90,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 91,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 92,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 93,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 94,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 95,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 96,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 97,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 98,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 99,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 100,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 101,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 102,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 103,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 104,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 105,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 106,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 107,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 108,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 109,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 110,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 111,
  BlogPostChildrenChildren = 112,
  BlogPostChildrenChildrenChildren = 113,
  BlogPostChildrenChildrenId = 114,
  BlogPostChildrenId = 115,
  BlogPostChildrenInternalContent = 116,
  BlogPostChildrenInternalContentDigest = 117,
  BlogPostChildrenInternalContentFilePath = 118,
  BlogPostChildrenInternalDescription = 119,
  BlogPostChildrenInternalFieldOwners = 120,
  BlogPostChildrenInternalIgnoreType = 121,
  BlogPostChildrenInternalMediaType = 122,
  BlogPostChildrenInternalOwner = 123,
  BlogPostChildrenInternalType = 124,
  BlogPostChildrenParentChildren = 125,
  BlogPostChildrenParentId = 126,
  BlogPostContentChildMdxBody = 127,
  BlogPostContentChildMdxChildren = 128,
  BlogPostContentChildMdxExcerpt = 129,
  BlogPostContentChildMdxFileAbsolutePath = 130,
  BlogPostContentChildMdxHeadings = 131,
  BlogPostContentChildMdxHtml = 132,
  BlogPostContentChildMdxId = 133,
  BlogPostContentChildMdxMdxAst = 134,
  BlogPostContentChildMdxRawBody = 135,
  BlogPostContentChildMdxSlug = 136,
  BlogPostContentChildMdxTableOfContents = 137,
  BlogPostContentChildMdxTimeToRead = 138,
  BlogPostContentChildren = 139,
  BlogPostContentChildrenMdx = 140,
  BlogPostContentChildrenMdxBody = 141,
  BlogPostContentChildrenMdxChildren = 142,
  BlogPostContentChildrenMdxExcerpt = 143,
  BlogPostContentChildrenMdxFileAbsolutePath = 144,
  BlogPostContentChildrenMdxHeadings = 145,
  BlogPostContentChildrenMdxHtml = 146,
  BlogPostContentChildrenMdxId = 147,
  BlogPostContentChildrenMdxMdxAst = 148,
  BlogPostContentChildrenMdxRawBody = 149,
  BlogPostContentChildrenMdxSlug = 150,
  BlogPostContentChildrenMdxTableOfContents = 151,
  BlogPostContentChildrenMdxTimeToRead = 152,
  BlogPostContentChildrenChildren = 153,
  BlogPostContentChildrenId = 154,
  BlogPostContentContent = 155,
  BlogPostContentId = 156,
  BlogPostContentInternalContent = 157,
  BlogPostContentInternalContentDigest = 158,
  BlogPostContentInternalContentFilePath = 159,
  BlogPostContentInternalDescription = 160,
  BlogPostContentInternalFieldOwners = 161,
  BlogPostContentInternalIgnoreType = 162,
  BlogPostContentInternalMediaType = 163,
  BlogPostContentInternalOwner = 164,
  BlogPostContentInternalType = 165,
  BlogPostContentParentChildren = 166,
  BlogPostContentParentId = 167,
  BlogPostContentSysType = 168,
  BlogPostContentfulId = 169,
  BlogPostCreated = 170,
  BlogPostCreatedAt = 171,
  BlogPostExcerpt = 172,
  BlogPostGatsbyPath = 173,
  BlogPostId = 174,
  BlogPostInternalContent = 175,
  BlogPostInternalContentDigest = 176,
  BlogPostInternalContentFilePath = 177,
  BlogPostInternalDescription = 178,
  BlogPostInternalFieldOwners = 179,
  BlogPostInternalIgnoreType = 180,
  BlogPostInternalMediaType = 181,
  BlogPostInternalOwner = 182,
  BlogPostInternalType = 183,
  BlogPostNodeLocale = 184,
  BlogPostParentChildren = 185,
  BlogPostParentChildrenChildren = 186,
  BlogPostParentChildrenId = 187,
  BlogPostParentId = 188,
  BlogPostParentInternalContent = 189,
  BlogPostParentInternalContentDigest = 190,
  BlogPostParentInternalContentFilePath = 191,
  BlogPostParentInternalDescription = 192,
  BlogPostParentInternalFieldOwners = 193,
  BlogPostParentInternalIgnoreType = 194,
  BlogPostParentInternalMediaType = 195,
  BlogPostParentInternalOwner = 196,
  BlogPostParentInternalType = 197,
  BlogPostParentParentChildren = 198,
  BlogPostParentParentId = 199,
  BlogPostSlug = 200,
  BlogPostSpaceId = 201,
  BlogPostSysRevision = 202,
  BlogPostSysType = 203,
  BlogPostTags = 204,
  BlogPostTagsBlogPost = 205,
  BlogPostTagsBlogPostChildren = 206,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 207,
  BlogPostTagsBlogPostContentfulId = 208,
  BlogPostTagsBlogPostCreated = 209,
  BlogPostTagsBlogPostCreatedAt = 210,
  BlogPostTagsBlogPostExcerpt = 211,
  BlogPostTagsBlogPostGatsbyPath = 212,
  BlogPostTagsBlogPostId = 213,
  BlogPostTagsBlogPostNodeLocale = 214,
  BlogPostTagsBlogPostSlug = 215,
  BlogPostTagsBlogPostSpaceId = 216,
  BlogPostTagsBlogPostTags = 217,
  BlogPostTagsBlogPostTitle = 218,
  BlogPostTagsBlogPostUpdated = 219,
  BlogPostTagsBlogPostUpdatedAt = 220,
  BlogPostTagsChildren = 221,
  BlogPostTagsChildrenChildren = 222,
  BlogPostTagsChildrenId = 223,
  BlogPostTagsContentfulId = 224,
  BlogPostTagsCreatedAt = 225,
  BlogPostTagsId = 226,
  BlogPostTagsInternalContent = 227,
  BlogPostTagsInternalContentDigest = 228,
  BlogPostTagsInternalContentFilePath = 229,
  BlogPostTagsInternalDescription = 230,
  BlogPostTagsInternalFieldOwners = 231,
  BlogPostTagsInternalIgnoreType = 232,
  BlogPostTagsInternalMediaType = 233,
  BlogPostTagsInternalOwner = 234,
  BlogPostTagsInternalType = 235,
  BlogPostTagsLevel = 236,
  BlogPostTagsName = 237,
  BlogPostTagsNodeLocale = 238,
  BlogPostTagsOss = 239,
  BlogPostTagsOssChildren = 240,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 241,
  BlogPostTagsOssContentfulId = 242,
  BlogPostTagsOssCreatedAt = 243,
  BlogPostTagsOssHref = 244,
  BlogPostTagsOssId = 245,
  BlogPostTagsOssName = 246,
  BlogPostTagsOssNodeLocale = 247,
  BlogPostTagsOssSpaceId = 248,
  BlogPostTagsOssStartDate = 249,
  BlogPostTagsOssSubName = 250,
  BlogPostTagsOssTags = 251,
  BlogPostTagsOssUpdatedAt = 252,
  BlogPostTagsParentChildren = 253,
  BlogPostTagsParentId = 254,
  BlogPostTagsProject = 255,
  BlogPostTagsProjectChildren = 256,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 257,
  BlogPostTagsProjectContentfulId = 258,
  BlogPostTagsProjectCreatedAt = 259,
  BlogPostTagsProjectEndDate = 260,
  BlogPostTagsProjectId = 261,
  BlogPostTagsProjectName = 262,
  BlogPostTagsProjectNodeLocale = 263,
  BlogPostTagsProjectSpaceId = 264,
  BlogPostTagsProjectStartDate = 265,
  BlogPostTagsProjectSubName = 266,
  BlogPostTagsProjectTags = 267,
  BlogPostTagsProjectUpdatedAt = 268,
  BlogPostTagsSkillGrpup = 269,
  BlogPostTagsSkillGrpupChildren = 270,
  BlogPostTagsSkillGrpupContentfulId = 271,
  BlogPostTagsSkillGrpupCreatedAt = 272,
  BlogPostTagsSkillGrpupId = 273,
  BlogPostTagsSkillGrpupName = 274,
  BlogPostTagsSkillGrpupNodeLocale = 275,
  BlogPostTagsSkillGrpupSkillMap = 276,
  BlogPostTagsSkillGrpupSkills = 277,
  BlogPostTagsSkillGrpupSpaceId = 278,
  BlogPostTagsSkillGrpupUpdatedAt = 279,
  BlogPostTagsSkillMap = 280,
  BlogPostTagsSkillMapChildren = 281,
  BlogPostTagsSkillMapContentfulId = 282,
  BlogPostTagsSkillMapCreatedAt = 283,
  BlogPostTagsSkillMapExpanded = 284,
  BlogPostTagsSkillMapId = 285,
  BlogPostTagsSkillMapName = 286,
  BlogPostTagsSkillMapNodeLocale = 287,
  BlogPostTagsSkillMapSkillGroups = 288,
  BlogPostTagsSkillMapSkills = 289,
  BlogPostTagsSkillMapSortKey = 290,
  BlogPostTagsSkillMapSpaceId = 291,
  BlogPostTagsSkillMapUpdatedAt = 292,
  BlogPostTagsSpaceId = 293,
  BlogPostTagsSysRevision = 294,
  BlogPostTagsSysType = 295,
  BlogPostTagsUpdatedAt = 296,
  BlogPostThumbnailChildren = 297,
  BlogPostThumbnailChildrenChildren = 298,
  BlogPostThumbnailChildrenId = 299,
  BlogPostThumbnailContentfulId = 300,
  BlogPostThumbnailCreatedAt = 301,
  BlogPostThumbnailDescription = 302,
  BlogPostThumbnailFileContentType = 303,
  BlogPostThumbnailFileFileName = 304,
  BlogPostThumbnailFileUrl = 305,
  BlogPostThumbnailFilename = 306,
  BlogPostThumbnailFilesize = 307,
  BlogPostThumbnailGatsbyImage = 308,
  BlogPostThumbnailGatsbyImageData = 309,
  BlogPostThumbnailHeight = 310,
  BlogPostThumbnailId = 311,
  BlogPostThumbnailInternalContent = 312,
  BlogPostThumbnailInternalContentDigest = 313,
  BlogPostThumbnailInternalContentFilePath = 314,
  BlogPostThumbnailInternalDescription = 315,
  BlogPostThumbnailInternalFieldOwners = 316,
  BlogPostThumbnailInternalIgnoreType = 317,
  BlogPostThumbnailInternalMediaType = 318,
  BlogPostThumbnailInternalOwner = 319,
  BlogPostThumbnailInternalType = 320,
  BlogPostThumbnailMimeType = 321,
  BlogPostThumbnailNodeLocale = 322,
  BlogPostThumbnailParentChildren = 323,
  BlogPostThumbnailParentId = 324,
  BlogPostThumbnailPlaceholderUrl = 325,
  BlogPostThumbnailPublicUrl = 326,
  BlogPostThumbnailResizeHeight = 327,
  BlogPostThumbnailResizeSrc = 328,
  BlogPostThumbnailResizeWidth = 329,
  BlogPostThumbnailSize = 330,
  BlogPostThumbnailSpaceId = 331,
  BlogPostThumbnailSysRevision = 332,
  BlogPostThumbnailSysType = 333,
  BlogPostThumbnailTitle = 334,
  BlogPostThumbnailUpdatedAt = 335,
  BlogPostThumbnailUrl = 336,
  BlogPostThumbnailWidth = 337,
  BlogPostTitle = 338,
  BlogPostUpdated = 339,
  BlogPostUpdatedAt = 340,
  Children = 341,
  ChildrenChildren = 342,
  ChildrenChildrenChildren = 343,
  ChildrenChildrenChildrenChildren = 344,
  ChildrenChildrenChildrenId = 345,
  ChildrenChildrenId = 346,
  ChildrenChildrenInternalContent = 347,
  ChildrenChildrenInternalContentDigest = 348,
  ChildrenChildrenInternalContentFilePath = 349,
  ChildrenChildrenInternalDescription = 350,
  ChildrenChildrenInternalFieldOwners = 351,
  ChildrenChildrenInternalIgnoreType = 352,
  ChildrenChildrenInternalMediaType = 353,
  ChildrenChildrenInternalOwner = 354,
  ChildrenChildrenInternalType = 355,
  ChildrenChildrenParentChildren = 356,
  ChildrenChildrenParentId = 357,
  ChildrenId = 358,
  ChildrenInternalContent = 359,
  ChildrenInternalContentDigest = 360,
  ChildrenInternalContentFilePath = 361,
  ChildrenInternalDescription = 362,
  ChildrenInternalFieldOwners = 363,
  ChildrenInternalIgnoreType = 364,
  ChildrenInternalMediaType = 365,
  ChildrenInternalOwner = 366,
  ChildrenInternalType = 367,
  ChildrenParentChildren = 368,
  ChildrenParentChildrenChildren = 369,
  ChildrenParentChildrenId = 370,
  ChildrenParentId = 371,
  ChildrenParentInternalContent = 372,
  ChildrenParentInternalContentDigest = 373,
  ChildrenParentInternalContentFilePath = 374,
  ChildrenParentInternalDescription = 375,
  ChildrenParentInternalFieldOwners = 376,
  ChildrenParentInternalIgnoreType = 377,
  ChildrenParentInternalMediaType = 378,
  ChildrenParentInternalOwner = 379,
  ChildrenParentInternalType = 380,
  ChildrenParentParentChildren = 381,
  ChildrenParentParentId = 382,
  ContentfulId = 383,
  CreatedAt = 384,
  Id = 385,
  InternalContent = 386,
  InternalContentDigest = 387,
  InternalContentFilePath = 388,
  InternalDescription = 389,
  InternalFieldOwners = 390,
  InternalIgnoreType = 391,
  InternalMediaType = 392,
  InternalOwner = 393,
  InternalType = 394,
  Level = 395,
  Name = 396,
  NodeLocale = 397,
  Oss = 398,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 399,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 400,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 401,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 402,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 403,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 404,
  OssChildContentfulOssDetailTextNodeChildMdxId = 405,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 406,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 407,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 408,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 409,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 410,
  OssChildContentfulOssDetailTextNodeChildren = 411,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 412,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 413,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 414,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 415,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 416,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 417,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 418,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 419,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 420,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 421,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 422,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 423,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 424,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 425,
  OssChildContentfulOssDetailTextNodeChildrenId = 426,
  OssChildContentfulOssDetailTextNodeDetail = 427,
  OssChildContentfulOssDetailTextNodeId = 428,
  OssChildContentfulOssDetailTextNodeInternalContent = 429,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 430,
  OssChildContentfulOssDetailTextNodeInternalContentFilePath = 431,
  OssChildContentfulOssDetailTextNodeInternalDescription = 432,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 433,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 434,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 435,
  OssChildContentfulOssDetailTextNodeInternalOwner = 436,
  OssChildContentfulOssDetailTextNodeInternalType = 437,
  OssChildContentfulOssDetailTextNodeParentChildren = 438,
  OssChildContentfulOssDetailTextNodeParentId = 439,
  OssChildContentfulOssDetailTextNodeSysType = 440,
  OssChildren = 441,
  OssChildrenContentfulOssDetailTextNode = 442,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 443,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 444,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 445,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 446,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 447,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 448,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 449,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 450,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 451,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 452,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 453,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 454,
  OssChildrenContentfulOssDetailTextNodeChildren = 455,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 456,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 457,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 458,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 459,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 460,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 461,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 462,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 463,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 464,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 465,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 466,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 467,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 468,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 469,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 470,
  OssChildrenContentfulOssDetailTextNodeDetail = 471,
  OssChildrenContentfulOssDetailTextNodeId = 472,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 473,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 474,
  OssChildrenContentfulOssDetailTextNodeInternalContentFilePath = 475,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 476,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 477,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 478,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 479,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 480,
  OssChildrenContentfulOssDetailTextNodeInternalType = 481,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 482,
  OssChildrenContentfulOssDetailTextNodeParentId = 483,
  OssChildrenContentfulOssDetailTextNodeSysType = 484,
  OssChildrenChildren = 485,
  OssChildrenChildrenChildren = 486,
  OssChildrenChildrenId = 487,
  OssChildrenId = 488,
  OssChildrenInternalContent = 489,
  OssChildrenInternalContentDigest = 490,
  OssChildrenInternalContentFilePath = 491,
  OssChildrenInternalDescription = 492,
  OssChildrenInternalFieldOwners = 493,
  OssChildrenInternalIgnoreType = 494,
  OssChildrenInternalMediaType = 495,
  OssChildrenInternalOwner = 496,
  OssChildrenInternalType = 497,
  OssChildrenParentChildren = 498,
  OssChildrenParentId = 499,
  OssContentfulId = 500,
  OssCreatedAt = 501,
  OssDetailChildMdxBody = 502,
  OssDetailChildMdxChildren = 503,
  OssDetailChildMdxExcerpt = 504,
  OssDetailChildMdxFileAbsolutePath = 505,
  OssDetailChildMdxHeadings = 506,
  OssDetailChildMdxHtml = 507,
  OssDetailChildMdxId = 508,
  OssDetailChildMdxMdxAst = 509,
  OssDetailChildMdxRawBody = 510,
  OssDetailChildMdxSlug = 511,
  OssDetailChildMdxTableOfContents = 512,
  OssDetailChildMdxTimeToRead = 513,
  OssDetailChildren = 514,
  OssDetailChildrenMdx = 515,
  OssDetailChildrenMdxBody = 516,
  OssDetailChildrenMdxChildren = 517,
  OssDetailChildrenMdxExcerpt = 518,
  OssDetailChildrenMdxFileAbsolutePath = 519,
  OssDetailChildrenMdxHeadings = 520,
  OssDetailChildrenMdxHtml = 521,
  OssDetailChildrenMdxId = 522,
  OssDetailChildrenMdxMdxAst = 523,
  OssDetailChildrenMdxRawBody = 524,
  OssDetailChildrenMdxSlug = 525,
  OssDetailChildrenMdxTableOfContents = 526,
  OssDetailChildrenMdxTimeToRead = 527,
  OssDetailChildrenChildren = 528,
  OssDetailChildrenId = 529,
  OssDetailDetail = 530,
  OssDetailId = 531,
  OssDetailInternalContent = 532,
  OssDetailInternalContentDigest = 533,
  OssDetailInternalContentFilePath = 534,
  OssDetailInternalDescription = 535,
  OssDetailInternalFieldOwners = 536,
  OssDetailInternalIgnoreType = 537,
  OssDetailInternalMediaType = 538,
  OssDetailInternalOwner = 539,
  OssDetailInternalType = 540,
  OssDetailParentChildren = 541,
  OssDetailParentId = 542,
  OssDetailSysType = 543,
  OssHref = 544,
  OssIconChildContentfulIconSvgTextNodeChildren = 545,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 546,
  OssIconChildContentfulIconSvgTextNodeId = 547,
  OssIconChildContentfulIconSvgTextNodeSvg = 548,
  OssIconChildren = 549,
  OssIconChildrenContentfulIconSvgTextNode = 550,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 551,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 552,
  OssIconChildrenContentfulIconSvgTextNodeId = 553,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 554,
  OssIconChildrenChildren = 555,
  OssIconChildrenId = 556,
  OssIconContact = 557,
  OssIconContactChildren = 558,
  OssIconContactContentfulId = 559,
  OssIconContactCreatedAt = 560,
  OssIconContactHref = 561,
  OssIconContactId = 562,
  OssIconContactName = 563,
  OssIconContactNodeLocale = 564,
  OssIconContactSortKey = 565,
  OssIconContactSpaceId = 566,
  OssIconContactSubName = 567,
  OssIconContactUpdatedAt = 568,
  OssIconContentfulId = 569,
  OssIconCreatedAt = 570,
  OssIconHistory = 571,
  OssIconHistoryChildren = 572,
  OssIconHistoryContentfulId = 573,
  OssIconHistoryCreatedAt = 574,
  OssIconHistoryDate = 575,
  OssIconHistoryId = 576,
  OssIconHistoryName = 577,
  OssIconHistoryNodeLocale = 578,
  OssIconHistorySpaceId = 579,
  OssIconHistorySubName = 580,
  OssIconHistoryUpdatedAt = 581,
  OssIconId = 582,
  OssIconInternalContent = 583,
  OssIconInternalContentDigest = 584,
  OssIconInternalContentFilePath = 585,
  OssIconInternalDescription = 586,
  OssIconInternalFieldOwners = 587,
  OssIconInternalIgnoreType = 588,
  OssIconInternalMediaType = 589,
  OssIconInternalOwner = 590,
  OssIconInternalType = 591,
  OssIconName = 592,
  OssIconNodeLocale = 593,
  OssIconOss = 594,
  OssIconOssChildren = 595,
  OssIconOssChildrenContentfulOssDetailTextNode = 596,
  OssIconOssContentfulId = 597,
  OssIconOssCreatedAt = 598,
  OssIconOssHref = 599,
  OssIconOssId = 600,
  OssIconOssName = 601,
  OssIconOssNodeLocale = 602,
  OssIconOssSpaceId = 603,
  OssIconOssStartDate = 604,
  OssIconOssSubName = 605,
  OssIconOssTags = 606,
  OssIconOssUpdatedAt = 607,
  OssIconParentChildren = 608,
  OssIconParentId = 609,
  OssIconProject = 610,
  OssIconProjectChildren = 611,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 612,
  OssIconProjectContentfulId = 613,
  OssIconProjectCreatedAt = 614,
  OssIconProjectEndDate = 615,
  OssIconProjectId = 616,
  OssIconProjectName = 617,
  OssIconProjectNodeLocale = 618,
  OssIconProjectSpaceId = 619,
  OssIconProjectStartDate = 620,
  OssIconProjectSubName = 621,
  OssIconProjectTags = 622,
  OssIconProjectUpdatedAt = 623,
  OssIconSpaceId = 624,
  OssIconSvgChildren = 625,
  OssIconSvgChildrenMdx = 626,
  OssIconSvgId = 627,
  OssIconSvgSvg = 628,
  OssIconSysRevision = 629,
  OssIconSysType = 630,
  OssIconUpdatedAt = 631,
  OssIconWhatICanDo = 632,
  OssIconWhatICanDoChildren = 633,
  OssIconWhatICanDoContentfulId = 634,
  OssIconWhatICanDoCreatedAt = 635,
  OssIconWhatICanDoId = 636,
  OssIconWhatICanDoName = 637,
  OssIconWhatICanDoNodeLocale = 638,
  OssIconWhatICanDoSortKey = 639,
  OssIconWhatICanDoSpaceId = 640,
  OssIconWhatICanDoSubName = 641,
  OssIconWhatICanDoUpdatedAt = 642,
  OssId = 643,
  OssImageChildren = 644,
  OssImageChildrenChildren = 645,
  OssImageChildrenId = 646,
  OssImageContentfulId = 647,
  OssImageCreatedAt = 648,
  OssImageDescription = 649,
  OssImageFileContentType = 650,
  OssImageFileFileName = 651,
  OssImageFileUrl = 652,
  OssImageFilename = 653,
  OssImageFilesize = 654,
  OssImageGatsbyImage = 655,
  OssImageGatsbyImageData = 656,
  OssImageHeight = 657,
  OssImageId = 658,
  OssImageInternalContent = 659,
  OssImageInternalContentDigest = 660,
  OssImageInternalContentFilePath = 661,
  OssImageInternalDescription = 662,
  OssImageInternalFieldOwners = 663,
  OssImageInternalIgnoreType = 664,
  OssImageInternalMediaType = 665,
  OssImageInternalOwner = 666,
  OssImageInternalType = 667,
  OssImageMimeType = 668,
  OssImageNodeLocale = 669,
  OssImageParentChildren = 670,
  OssImageParentId = 671,
  OssImagePlaceholderUrl = 672,
  OssImagePublicUrl = 673,
  OssImageResizeHeight = 674,
  OssImageResizeSrc = 675,
  OssImageResizeWidth = 676,
  OssImageSize = 677,
  OssImageSpaceId = 678,
  OssImageSysRevision = 679,
  OssImageSysType = 680,
  OssImageTitle = 681,
  OssImageUpdatedAt = 682,
  OssImageUrl = 683,
  OssImageWidth = 684,
  OssInternalContent = 685,
  OssInternalContentDigest = 686,
  OssInternalContentFilePath = 687,
  OssInternalDescription = 688,
  OssInternalFieldOwners = 689,
  OssInternalIgnoreType = 690,
  OssInternalMediaType = 691,
  OssInternalOwner = 692,
  OssInternalType = 693,
  OssName = 694,
  OssNodeLocale = 695,
  OssParentChildren = 696,
  OssParentChildrenChildren = 697,
  OssParentChildrenId = 698,
  OssParentId = 699,
  OssParentInternalContent = 700,
  OssParentInternalContentDigest = 701,
  OssParentInternalContentFilePath = 702,
  OssParentInternalDescription = 703,
  OssParentInternalFieldOwners = 704,
  OssParentInternalIgnoreType = 705,
  OssParentInternalMediaType = 706,
  OssParentInternalOwner = 707,
  OssParentInternalType = 708,
  OssParentParentChildren = 709,
  OssParentParentId = 710,
  OssSpaceId = 711,
  OssStartDate = 712,
  OssSubName = 713,
  OssSysRevision = 714,
  OssSysType = 715,
  OssTags = 716,
  OssTagsBlogPost = 717,
  OssTagsBlogPostChildren = 718,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 719,
  OssTagsBlogPostContentfulId = 720,
  OssTagsBlogPostCreated = 721,
  OssTagsBlogPostCreatedAt = 722,
  OssTagsBlogPostExcerpt = 723,
  OssTagsBlogPostGatsbyPath = 724,
  OssTagsBlogPostId = 725,
  OssTagsBlogPostNodeLocale = 726,
  OssTagsBlogPostSlug = 727,
  OssTagsBlogPostSpaceId = 728,
  OssTagsBlogPostTags = 729,
  OssTagsBlogPostTitle = 730,
  OssTagsBlogPostUpdated = 731,
  OssTagsBlogPostUpdatedAt = 732,
  OssTagsChildren = 733,
  OssTagsChildrenChildren = 734,
  OssTagsChildrenId = 735,
  OssTagsContentfulId = 736,
  OssTagsCreatedAt = 737,
  OssTagsId = 738,
  OssTagsInternalContent = 739,
  OssTagsInternalContentDigest = 740,
  OssTagsInternalContentFilePath = 741,
  OssTagsInternalDescription = 742,
  OssTagsInternalFieldOwners = 743,
  OssTagsInternalIgnoreType = 744,
  OssTagsInternalMediaType = 745,
  OssTagsInternalOwner = 746,
  OssTagsInternalType = 747,
  OssTagsLevel = 748,
  OssTagsName = 749,
  OssTagsNodeLocale = 750,
  OssTagsOss = 751,
  OssTagsOssChildren = 752,
  OssTagsOssChildrenContentfulOssDetailTextNode = 753,
  OssTagsOssContentfulId = 754,
  OssTagsOssCreatedAt = 755,
  OssTagsOssHref = 756,
  OssTagsOssId = 757,
  OssTagsOssName = 758,
  OssTagsOssNodeLocale = 759,
  OssTagsOssSpaceId = 760,
  OssTagsOssStartDate = 761,
  OssTagsOssSubName = 762,
  OssTagsOssTags = 763,
  OssTagsOssUpdatedAt = 764,
  OssTagsParentChildren = 765,
  OssTagsParentId = 766,
  OssTagsProject = 767,
  OssTagsProjectChildren = 768,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 769,
  OssTagsProjectContentfulId = 770,
  OssTagsProjectCreatedAt = 771,
  OssTagsProjectEndDate = 772,
  OssTagsProjectId = 773,
  OssTagsProjectName = 774,
  OssTagsProjectNodeLocale = 775,
  OssTagsProjectSpaceId = 776,
  OssTagsProjectStartDate = 777,
  OssTagsProjectSubName = 778,
  OssTagsProjectTags = 779,
  OssTagsProjectUpdatedAt = 780,
  OssTagsSkillGrpup = 781,
  OssTagsSkillGrpupChildren = 782,
  OssTagsSkillGrpupContentfulId = 783,
  OssTagsSkillGrpupCreatedAt = 784,
  OssTagsSkillGrpupId = 785,
  OssTagsSkillGrpupName = 786,
  OssTagsSkillGrpupNodeLocale = 787,
  OssTagsSkillGrpupSkillMap = 788,
  OssTagsSkillGrpupSkills = 789,
  OssTagsSkillGrpupSpaceId = 790,
  OssTagsSkillGrpupUpdatedAt = 791,
  OssTagsSkillMap = 792,
  OssTagsSkillMapChildren = 793,
  OssTagsSkillMapContentfulId = 794,
  OssTagsSkillMapCreatedAt = 795,
  OssTagsSkillMapExpanded = 796,
  OssTagsSkillMapId = 797,
  OssTagsSkillMapName = 798,
  OssTagsSkillMapNodeLocale = 799,
  OssTagsSkillMapSkillGroups = 800,
  OssTagsSkillMapSkills = 801,
  OssTagsSkillMapSortKey = 802,
  OssTagsSkillMapSpaceId = 803,
  OssTagsSkillMapUpdatedAt = 804,
  OssTagsSpaceId = 805,
  OssTagsSysRevision = 806,
  OssTagsSysType = 807,
  OssTagsUpdatedAt = 808,
  OssUpdatedAt = 809,
  ParentChildren = 810,
  ParentChildrenChildren = 811,
  ParentChildrenChildrenChildren = 812,
  ParentChildrenChildrenId = 813,
  ParentChildrenId = 814,
  ParentChildrenInternalContent = 815,
  ParentChildrenInternalContentDigest = 816,
  ParentChildrenInternalContentFilePath = 817,
  ParentChildrenInternalDescription = 818,
  ParentChildrenInternalFieldOwners = 819,
  ParentChildrenInternalIgnoreType = 820,
  ParentChildrenInternalMediaType = 821,
  ParentChildrenInternalOwner = 822,
  ParentChildrenInternalType = 823,
  ParentChildrenParentChildren = 824,
  ParentChildrenParentId = 825,
  ParentId = 826,
  ParentInternalContent = 827,
  ParentInternalContentDigest = 828,
  ParentInternalContentFilePath = 829,
  ParentInternalDescription = 830,
  ParentInternalFieldOwners = 831,
  ParentInternalIgnoreType = 832,
  ParentInternalMediaType = 833,
  ParentInternalOwner = 834,
  ParentInternalType = 835,
  ParentParentChildren = 836,
  ParentParentChildrenChildren = 837,
  ParentParentChildrenId = 838,
  ParentParentId = 839,
  ParentParentInternalContent = 840,
  ParentParentInternalContentDigest = 841,
  ParentParentInternalContentFilePath = 842,
  ParentParentInternalDescription = 843,
  ParentParentInternalFieldOwners = 844,
  ParentParentInternalIgnoreType = 845,
  ParentParentInternalMediaType = 846,
  ParentParentInternalOwner = 847,
  ParentParentInternalType = 848,
  ParentParentParentChildren = 849,
  ParentParentParentId = 850,
  Project = 851,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 852,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 853,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 854,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 855,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 856,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 857,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 858,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 859,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 860,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 861,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 862,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 863,
  ProjectChildContentfulProjectDetailTextNodeChildren = 864,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 865,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 866,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 867,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 868,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 869,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 870,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 871,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 872,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 873,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 874,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 875,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 876,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 877,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 878,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 879,
  ProjectChildContentfulProjectDetailTextNodeDetail = 880,
  ProjectChildContentfulProjectDetailTextNodeId = 881,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 882,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 883,
  ProjectChildContentfulProjectDetailTextNodeInternalContentFilePath = 884,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 885,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 886,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 887,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 888,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 889,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 890,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 891,
  ProjectChildContentfulProjectDetailTextNodeParentId = 892,
  ProjectChildContentfulProjectDetailTextNodeSysType = 893,
  ProjectChildren = 894,
  ProjectChildrenContentfulProjectDetailTextNode = 895,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 896,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 897,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 898,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 899,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 900,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 901,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 902,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 903,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 904,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 905,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 906,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 907,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 908,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 909,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 910,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 911,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 912,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 913,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 914,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 915,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 916,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 917,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 918,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 919,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 920,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 921,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 922,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 923,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 924,
  ProjectChildrenContentfulProjectDetailTextNodeId = 925,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 926,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 927,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentFilePath = 928,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 929,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 930,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 931,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 932,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 933,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 934,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 935,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 936,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 937,
  ProjectChildrenChildren = 938,
  ProjectChildrenChildrenChildren = 939,
  ProjectChildrenChildrenId = 940,
  ProjectChildrenId = 941,
  ProjectChildrenInternalContent = 942,
  ProjectChildrenInternalContentDigest = 943,
  ProjectChildrenInternalContentFilePath = 944,
  ProjectChildrenInternalDescription = 945,
  ProjectChildrenInternalFieldOwners = 946,
  ProjectChildrenInternalIgnoreType = 947,
  ProjectChildrenInternalMediaType = 948,
  ProjectChildrenInternalOwner = 949,
  ProjectChildrenInternalType = 950,
  ProjectChildrenParentChildren = 951,
  ProjectChildrenParentId = 952,
  ProjectContentfulId = 953,
  ProjectCreatedAt = 954,
  ProjectDetailChildMdxBody = 955,
  ProjectDetailChildMdxChildren = 956,
  ProjectDetailChildMdxExcerpt = 957,
  ProjectDetailChildMdxFileAbsolutePath = 958,
  ProjectDetailChildMdxHeadings = 959,
  ProjectDetailChildMdxHtml = 960,
  ProjectDetailChildMdxId = 961,
  ProjectDetailChildMdxMdxAst = 962,
  ProjectDetailChildMdxRawBody = 963,
  ProjectDetailChildMdxSlug = 964,
  ProjectDetailChildMdxTableOfContents = 965,
  ProjectDetailChildMdxTimeToRead = 966,
  ProjectDetailChildren = 967,
  ProjectDetailChildrenMdx = 968,
  ProjectDetailChildrenMdxBody = 969,
  ProjectDetailChildrenMdxChildren = 970,
  ProjectDetailChildrenMdxExcerpt = 971,
  ProjectDetailChildrenMdxFileAbsolutePath = 972,
  ProjectDetailChildrenMdxHeadings = 973,
  ProjectDetailChildrenMdxHtml = 974,
  ProjectDetailChildrenMdxId = 975,
  ProjectDetailChildrenMdxMdxAst = 976,
  ProjectDetailChildrenMdxRawBody = 977,
  ProjectDetailChildrenMdxSlug = 978,
  ProjectDetailChildrenMdxTableOfContents = 979,
  ProjectDetailChildrenMdxTimeToRead = 980,
  ProjectDetailChildrenChildren = 981,
  ProjectDetailChildrenId = 982,
  ProjectDetailDetail = 983,
  ProjectDetailId = 984,
  ProjectDetailInternalContent = 985,
  ProjectDetailInternalContentDigest = 986,
  ProjectDetailInternalContentFilePath = 987,
  ProjectDetailInternalDescription = 988,
  ProjectDetailInternalFieldOwners = 989,
  ProjectDetailInternalIgnoreType = 990,
  ProjectDetailInternalMediaType = 991,
  ProjectDetailInternalOwner = 992,
  ProjectDetailInternalType = 993,
  ProjectDetailParentChildren = 994,
  ProjectDetailParentId = 995,
  ProjectDetailSysType = 996,
  ProjectEndDate = 997,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 998,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 999,
  ProjectIconChildContentfulIconSvgTextNodeId = 1000,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1001,
  ProjectIconChildren = 1002,
  ProjectIconChildrenContentfulIconSvgTextNode = 1003,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1004,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1005,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1006,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1007,
  ProjectIconChildrenChildren = 1008,
  ProjectIconChildrenId = 1009,
  ProjectIconContact = 1010,
  ProjectIconContactChildren = 1011,
  ProjectIconContactContentfulId = 1012,
  ProjectIconContactCreatedAt = 1013,
  ProjectIconContactHref = 1014,
  ProjectIconContactId = 1015,
  ProjectIconContactName = 1016,
  ProjectIconContactNodeLocale = 1017,
  ProjectIconContactSortKey = 1018,
  ProjectIconContactSpaceId = 1019,
  ProjectIconContactSubName = 1020,
  ProjectIconContactUpdatedAt = 1021,
  ProjectIconContentfulId = 1022,
  ProjectIconCreatedAt = 1023,
  ProjectIconHistory = 1024,
  ProjectIconHistoryChildren = 1025,
  ProjectIconHistoryContentfulId = 1026,
  ProjectIconHistoryCreatedAt = 1027,
  ProjectIconHistoryDate = 1028,
  ProjectIconHistoryId = 1029,
  ProjectIconHistoryName = 1030,
  ProjectIconHistoryNodeLocale = 1031,
  ProjectIconHistorySpaceId = 1032,
  ProjectIconHistorySubName = 1033,
  ProjectIconHistoryUpdatedAt = 1034,
  ProjectIconId = 1035,
  ProjectIconInternalContent = 1036,
  ProjectIconInternalContentDigest = 1037,
  ProjectIconInternalContentFilePath = 1038,
  ProjectIconInternalDescription = 1039,
  ProjectIconInternalFieldOwners = 1040,
  ProjectIconInternalIgnoreType = 1041,
  ProjectIconInternalMediaType = 1042,
  ProjectIconInternalOwner = 1043,
  ProjectIconInternalType = 1044,
  ProjectIconName = 1045,
  ProjectIconNodeLocale = 1046,
  ProjectIconOss = 1047,
  ProjectIconOssChildren = 1048,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1049,
  ProjectIconOssContentfulId = 1050,
  ProjectIconOssCreatedAt = 1051,
  ProjectIconOssHref = 1052,
  ProjectIconOssId = 1053,
  ProjectIconOssName = 1054,
  ProjectIconOssNodeLocale = 1055,
  ProjectIconOssSpaceId = 1056,
  ProjectIconOssStartDate = 1057,
  ProjectIconOssSubName = 1058,
  ProjectIconOssTags = 1059,
  ProjectIconOssUpdatedAt = 1060,
  ProjectIconParentChildren = 1061,
  ProjectIconParentId = 1062,
  ProjectIconProject = 1063,
  ProjectIconProjectChildren = 1064,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1065,
  ProjectIconProjectContentfulId = 1066,
  ProjectIconProjectCreatedAt = 1067,
  ProjectIconProjectEndDate = 1068,
  ProjectIconProjectId = 1069,
  ProjectIconProjectName = 1070,
  ProjectIconProjectNodeLocale = 1071,
  ProjectIconProjectSpaceId = 1072,
  ProjectIconProjectStartDate = 1073,
  ProjectIconProjectSubName = 1074,
  ProjectIconProjectTags = 1075,
  ProjectIconProjectUpdatedAt = 1076,
  ProjectIconSpaceId = 1077,
  ProjectIconSvgChildren = 1078,
  ProjectIconSvgChildrenMdx = 1079,
  ProjectIconSvgId = 1080,
  ProjectIconSvgSvg = 1081,
  ProjectIconSysRevision = 1082,
  ProjectIconSysType = 1083,
  ProjectIconUpdatedAt = 1084,
  ProjectIconWhatICanDo = 1085,
  ProjectIconWhatICanDoChildren = 1086,
  ProjectIconWhatICanDoContentfulId = 1087,
  ProjectIconWhatICanDoCreatedAt = 1088,
  ProjectIconWhatICanDoId = 1089,
  ProjectIconWhatICanDoName = 1090,
  ProjectIconWhatICanDoNodeLocale = 1091,
  ProjectIconWhatICanDoSortKey = 1092,
  ProjectIconWhatICanDoSpaceId = 1093,
  ProjectIconWhatICanDoSubName = 1094,
  ProjectIconWhatICanDoUpdatedAt = 1095,
  ProjectId = 1096,
  ProjectInternalContent = 1097,
  ProjectInternalContentDigest = 1098,
  ProjectInternalContentFilePath = 1099,
  ProjectInternalDescription = 1100,
  ProjectInternalFieldOwners = 1101,
  ProjectInternalIgnoreType = 1102,
  ProjectInternalMediaType = 1103,
  ProjectInternalOwner = 1104,
  ProjectInternalType = 1105,
  ProjectName = 1106,
  ProjectNodeLocale = 1107,
  ProjectParentChildren = 1108,
  ProjectParentChildrenChildren = 1109,
  ProjectParentChildrenId = 1110,
  ProjectParentId = 1111,
  ProjectParentInternalContent = 1112,
  ProjectParentInternalContentDigest = 1113,
  ProjectParentInternalContentFilePath = 1114,
  ProjectParentInternalDescription = 1115,
  ProjectParentInternalFieldOwners = 1116,
  ProjectParentInternalIgnoreType = 1117,
  ProjectParentInternalMediaType = 1118,
  ProjectParentInternalOwner = 1119,
  ProjectParentInternalType = 1120,
  ProjectParentParentChildren = 1121,
  ProjectParentParentId = 1122,
  ProjectSpaceId = 1123,
  ProjectStartDate = 1124,
  ProjectSubName = 1125,
  ProjectSysRevision = 1126,
  ProjectSysType = 1127,
  ProjectTags = 1128,
  ProjectTagsBlogPost = 1129,
  ProjectTagsBlogPostChildren = 1130,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1131,
  ProjectTagsBlogPostContentfulId = 1132,
  ProjectTagsBlogPostCreated = 1133,
  ProjectTagsBlogPostCreatedAt = 1134,
  ProjectTagsBlogPostExcerpt = 1135,
  ProjectTagsBlogPostGatsbyPath = 1136,
  ProjectTagsBlogPostId = 1137,
  ProjectTagsBlogPostNodeLocale = 1138,
  ProjectTagsBlogPostSlug = 1139,
  ProjectTagsBlogPostSpaceId = 1140,
  ProjectTagsBlogPostTags = 1141,
  ProjectTagsBlogPostTitle = 1142,
  ProjectTagsBlogPostUpdated = 1143,
  ProjectTagsBlogPostUpdatedAt = 1144,
  ProjectTagsChildren = 1145,
  ProjectTagsChildrenChildren = 1146,
  ProjectTagsChildrenId = 1147,
  ProjectTagsContentfulId = 1148,
  ProjectTagsCreatedAt = 1149,
  ProjectTagsId = 1150,
  ProjectTagsInternalContent = 1151,
  ProjectTagsInternalContentDigest = 1152,
  ProjectTagsInternalContentFilePath = 1153,
  ProjectTagsInternalDescription = 1154,
  ProjectTagsInternalFieldOwners = 1155,
  ProjectTagsInternalIgnoreType = 1156,
  ProjectTagsInternalMediaType = 1157,
  ProjectTagsInternalOwner = 1158,
  ProjectTagsInternalType = 1159,
  ProjectTagsLevel = 1160,
  ProjectTagsName = 1161,
  ProjectTagsNodeLocale = 1162,
  ProjectTagsOss = 1163,
  ProjectTagsOssChildren = 1164,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1165,
  ProjectTagsOssContentfulId = 1166,
  ProjectTagsOssCreatedAt = 1167,
  ProjectTagsOssHref = 1168,
  ProjectTagsOssId = 1169,
  ProjectTagsOssName = 1170,
  ProjectTagsOssNodeLocale = 1171,
  ProjectTagsOssSpaceId = 1172,
  ProjectTagsOssStartDate = 1173,
  ProjectTagsOssSubName = 1174,
  ProjectTagsOssTags = 1175,
  ProjectTagsOssUpdatedAt = 1176,
  ProjectTagsParentChildren = 1177,
  ProjectTagsParentId = 1178,
  ProjectTagsProject = 1179,
  ProjectTagsProjectChildren = 1180,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1181,
  ProjectTagsProjectContentfulId = 1182,
  ProjectTagsProjectCreatedAt = 1183,
  ProjectTagsProjectEndDate = 1184,
  ProjectTagsProjectId = 1185,
  ProjectTagsProjectName = 1186,
  ProjectTagsProjectNodeLocale = 1187,
  ProjectTagsProjectSpaceId = 1188,
  ProjectTagsProjectStartDate = 1189,
  ProjectTagsProjectSubName = 1190,
  ProjectTagsProjectTags = 1191,
  ProjectTagsProjectUpdatedAt = 1192,
  ProjectTagsSkillGrpup = 1193,
  ProjectTagsSkillGrpupChildren = 1194,
  ProjectTagsSkillGrpupContentfulId = 1195,
  ProjectTagsSkillGrpupCreatedAt = 1196,
  ProjectTagsSkillGrpupId = 1197,
  ProjectTagsSkillGrpupName = 1198,
  ProjectTagsSkillGrpupNodeLocale = 1199,
  ProjectTagsSkillGrpupSkillMap = 1200,
  ProjectTagsSkillGrpupSkills = 1201,
  ProjectTagsSkillGrpupSpaceId = 1202,
  ProjectTagsSkillGrpupUpdatedAt = 1203,
  ProjectTagsSkillMap = 1204,
  ProjectTagsSkillMapChildren = 1205,
  ProjectTagsSkillMapContentfulId = 1206,
  ProjectTagsSkillMapCreatedAt = 1207,
  ProjectTagsSkillMapExpanded = 1208,
  ProjectTagsSkillMapId = 1209,
  ProjectTagsSkillMapName = 1210,
  ProjectTagsSkillMapNodeLocale = 1211,
  ProjectTagsSkillMapSkillGroups = 1212,
  ProjectTagsSkillMapSkills = 1213,
  ProjectTagsSkillMapSortKey = 1214,
  ProjectTagsSkillMapSpaceId = 1215,
  ProjectTagsSkillMapUpdatedAt = 1216,
  ProjectTagsSpaceId = 1217,
  ProjectTagsSysRevision = 1218,
  ProjectTagsSysType = 1219,
  ProjectTagsUpdatedAt = 1220,
  ProjectUpdatedAt = 1221,
  SkillGrpup = 1222,
  SkillGrpupChildren = 1223,
  SkillGrpupChildrenChildren = 1224,
  SkillGrpupChildrenChildrenChildren = 1225,
  SkillGrpupChildrenChildrenId = 1226,
  SkillGrpupChildrenId = 1227,
  SkillGrpupChildrenInternalContent = 1228,
  SkillGrpupChildrenInternalContentDigest = 1229,
  SkillGrpupChildrenInternalContentFilePath = 1230,
  SkillGrpupChildrenInternalDescription = 1231,
  SkillGrpupChildrenInternalFieldOwners = 1232,
  SkillGrpupChildrenInternalIgnoreType = 1233,
  SkillGrpupChildrenInternalMediaType = 1234,
  SkillGrpupChildrenInternalOwner = 1235,
  SkillGrpupChildrenInternalType = 1236,
  SkillGrpupChildrenParentChildren = 1237,
  SkillGrpupChildrenParentId = 1238,
  SkillGrpupContentfulId = 1239,
  SkillGrpupCreatedAt = 1240,
  SkillGrpupId = 1241,
  SkillGrpupInternalContent = 1242,
  SkillGrpupInternalContentDigest = 1243,
  SkillGrpupInternalContentFilePath = 1244,
  SkillGrpupInternalDescription = 1245,
  SkillGrpupInternalFieldOwners = 1246,
  SkillGrpupInternalIgnoreType = 1247,
  SkillGrpupInternalMediaType = 1248,
  SkillGrpupInternalOwner = 1249,
  SkillGrpupInternalType = 1250,
  SkillGrpupName = 1251,
  SkillGrpupNodeLocale = 1252,
  SkillGrpupParentChildren = 1253,
  SkillGrpupParentChildrenChildren = 1254,
  SkillGrpupParentChildrenId = 1255,
  SkillGrpupParentId = 1256,
  SkillGrpupParentInternalContent = 1257,
  SkillGrpupParentInternalContentDigest = 1258,
  SkillGrpupParentInternalContentFilePath = 1259,
  SkillGrpupParentInternalDescription = 1260,
  SkillGrpupParentInternalFieldOwners = 1261,
  SkillGrpupParentInternalIgnoreType = 1262,
  SkillGrpupParentInternalMediaType = 1263,
  SkillGrpupParentInternalOwner = 1264,
  SkillGrpupParentInternalType = 1265,
  SkillGrpupParentParentChildren = 1266,
  SkillGrpupParentParentId = 1267,
  SkillGrpupSkillMap = 1268,
  SkillGrpupSkillMapChildren = 1269,
  SkillGrpupSkillMapChildrenChildren = 1270,
  SkillGrpupSkillMapChildrenId = 1271,
  SkillGrpupSkillMapContentfulId = 1272,
  SkillGrpupSkillMapCreatedAt = 1273,
  SkillGrpupSkillMapExpanded = 1274,
  SkillGrpupSkillMapId = 1275,
  SkillGrpupSkillMapInternalContent = 1276,
  SkillGrpupSkillMapInternalContentDigest = 1277,
  SkillGrpupSkillMapInternalContentFilePath = 1278,
  SkillGrpupSkillMapInternalDescription = 1279,
  SkillGrpupSkillMapInternalFieldOwners = 1280,
  SkillGrpupSkillMapInternalIgnoreType = 1281,
  SkillGrpupSkillMapInternalMediaType = 1282,
  SkillGrpupSkillMapInternalOwner = 1283,
  SkillGrpupSkillMapInternalType = 1284,
  SkillGrpupSkillMapName = 1285,
  SkillGrpupSkillMapNodeLocale = 1286,
  SkillGrpupSkillMapParentChildren = 1287,
  SkillGrpupSkillMapParentId = 1288,
  SkillGrpupSkillMapSkillGroups = 1289,
  SkillGrpupSkillMapSkillGroupsChildren = 1290,
  SkillGrpupSkillMapSkillGroupsContentfulId = 1291,
  SkillGrpupSkillMapSkillGroupsCreatedAt = 1292,
  SkillGrpupSkillMapSkillGroupsId = 1293,
  SkillGrpupSkillMapSkillGroupsName = 1294,
  SkillGrpupSkillMapSkillGroupsNodeLocale = 1295,
  SkillGrpupSkillMapSkillGroupsSkillMap = 1296,
  SkillGrpupSkillMapSkillGroupsSkills = 1297,
  SkillGrpupSkillMapSkillGroupsSpaceId = 1298,
  SkillGrpupSkillMapSkillGroupsUpdatedAt = 1299,
  SkillGrpupSkillMapSkills = 1300,
  SkillGrpupSkillMapSkillsBlogPost = 1301,
  SkillGrpupSkillMapSkillsChildren = 1302,
  SkillGrpupSkillMapSkillsContentfulId = 1303,
  SkillGrpupSkillMapSkillsCreatedAt = 1304,
  SkillGrpupSkillMapSkillsId = 1305,
  SkillGrpupSkillMapSkillsLevel = 1306,
  SkillGrpupSkillMapSkillsName = 1307,
  SkillGrpupSkillMapSkillsNodeLocale = 1308,
  SkillGrpupSkillMapSkillsOss = 1309,
  SkillGrpupSkillMapSkillsProject = 1310,
  SkillGrpupSkillMapSkillsSkillGrpup = 1311,
  SkillGrpupSkillMapSkillsSkillMap = 1312,
  SkillGrpupSkillMapSkillsSpaceId = 1313,
  SkillGrpupSkillMapSkillsUpdatedAt = 1314,
  SkillGrpupSkillMapSortKey = 1315,
  SkillGrpupSkillMapSpaceId = 1316,
  SkillGrpupSkillMapSysRevision = 1317,
  SkillGrpupSkillMapSysType = 1318,
  SkillGrpupSkillMapUpdatedAt = 1319,
  SkillGrpupSkills = 1320,
  SkillGrpupSkillsBlogPost = 1321,
  SkillGrpupSkillsBlogPostChildren = 1322,
  SkillGrpupSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1323,
  SkillGrpupSkillsBlogPostContentfulId = 1324,
  SkillGrpupSkillsBlogPostCreated = 1325,
  SkillGrpupSkillsBlogPostCreatedAt = 1326,
  SkillGrpupSkillsBlogPostExcerpt = 1327,
  SkillGrpupSkillsBlogPostGatsbyPath = 1328,
  SkillGrpupSkillsBlogPostId = 1329,
  SkillGrpupSkillsBlogPostNodeLocale = 1330,
  SkillGrpupSkillsBlogPostSlug = 1331,
  SkillGrpupSkillsBlogPostSpaceId = 1332,
  SkillGrpupSkillsBlogPostTags = 1333,
  SkillGrpupSkillsBlogPostTitle = 1334,
  SkillGrpupSkillsBlogPostUpdated = 1335,
  SkillGrpupSkillsBlogPostUpdatedAt = 1336,
  SkillGrpupSkillsChildren = 1337,
  SkillGrpupSkillsChildrenChildren = 1338,
  SkillGrpupSkillsChildrenId = 1339,
  SkillGrpupSkillsContentfulId = 1340,
  SkillGrpupSkillsCreatedAt = 1341,
  SkillGrpupSkillsId = 1342,
  SkillGrpupSkillsInternalContent = 1343,
  SkillGrpupSkillsInternalContentDigest = 1344,
  SkillGrpupSkillsInternalContentFilePath = 1345,
  SkillGrpupSkillsInternalDescription = 1346,
  SkillGrpupSkillsInternalFieldOwners = 1347,
  SkillGrpupSkillsInternalIgnoreType = 1348,
  SkillGrpupSkillsInternalMediaType = 1349,
  SkillGrpupSkillsInternalOwner = 1350,
  SkillGrpupSkillsInternalType = 1351,
  SkillGrpupSkillsLevel = 1352,
  SkillGrpupSkillsName = 1353,
  SkillGrpupSkillsNodeLocale = 1354,
  SkillGrpupSkillsOss = 1355,
  SkillGrpupSkillsOssChildren = 1356,
  SkillGrpupSkillsOssChildrenContentfulOssDetailTextNode = 1357,
  SkillGrpupSkillsOssContentfulId = 1358,
  SkillGrpupSkillsOssCreatedAt = 1359,
  SkillGrpupSkillsOssHref = 1360,
  SkillGrpupSkillsOssId = 1361,
  SkillGrpupSkillsOssName = 1362,
  SkillGrpupSkillsOssNodeLocale = 1363,
  SkillGrpupSkillsOssSpaceId = 1364,
  SkillGrpupSkillsOssStartDate = 1365,
  SkillGrpupSkillsOssSubName = 1366,
  SkillGrpupSkillsOssTags = 1367,
  SkillGrpupSkillsOssUpdatedAt = 1368,
  SkillGrpupSkillsParentChildren = 1369,
  SkillGrpupSkillsParentId = 1370,
  SkillGrpupSkillsProject = 1371,
  SkillGrpupSkillsProjectChildren = 1372,
  SkillGrpupSkillsProjectChildrenContentfulProjectDetailTextNode = 1373,
  SkillGrpupSkillsProjectContentfulId = 1374,
  SkillGrpupSkillsProjectCreatedAt = 1375,
  SkillGrpupSkillsProjectEndDate = 1376,
  SkillGrpupSkillsProjectId = 1377,
  SkillGrpupSkillsProjectName = 1378,
  SkillGrpupSkillsProjectNodeLocale = 1379,
  SkillGrpupSkillsProjectSpaceId = 1380,
  SkillGrpupSkillsProjectStartDate = 1381,
  SkillGrpupSkillsProjectSubName = 1382,
  SkillGrpupSkillsProjectTags = 1383,
  SkillGrpupSkillsProjectUpdatedAt = 1384,
  SkillGrpupSkillsSkillGrpup = 1385,
  SkillGrpupSkillsSkillGrpupChildren = 1386,
  SkillGrpupSkillsSkillGrpupContentfulId = 1387,
  SkillGrpupSkillsSkillGrpupCreatedAt = 1388,
  SkillGrpupSkillsSkillGrpupId = 1389,
  SkillGrpupSkillsSkillGrpupName = 1390,
  SkillGrpupSkillsSkillGrpupNodeLocale = 1391,
  SkillGrpupSkillsSkillGrpupSkillMap = 1392,
  SkillGrpupSkillsSkillGrpupSkills = 1393,
  SkillGrpupSkillsSkillGrpupSpaceId = 1394,
  SkillGrpupSkillsSkillGrpupUpdatedAt = 1395,
  SkillGrpupSkillsSkillMap = 1396,
  SkillGrpupSkillsSkillMapChildren = 1397,
  SkillGrpupSkillsSkillMapContentfulId = 1398,
  SkillGrpupSkillsSkillMapCreatedAt = 1399,
  SkillGrpupSkillsSkillMapExpanded = 1400,
  SkillGrpupSkillsSkillMapId = 1401,
  SkillGrpupSkillsSkillMapName = 1402,
  SkillGrpupSkillsSkillMapNodeLocale = 1403,
  SkillGrpupSkillsSkillMapSkillGroups = 1404,
  SkillGrpupSkillsSkillMapSkills = 1405,
  SkillGrpupSkillsSkillMapSortKey = 1406,
  SkillGrpupSkillsSkillMapSpaceId = 1407,
  SkillGrpupSkillsSkillMapUpdatedAt = 1408,
  SkillGrpupSkillsSpaceId = 1409,
  SkillGrpupSkillsSysRevision = 1410,
  SkillGrpupSkillsSysType = 1411,
  SkillGrpupSkillsUpdatedAt = 1412,
  SkillGrpupSpaceId = 1413,
  SkillGrpupSysRevision = 1414,
  SkillGrpupSysType = 1415,
  SkillGrpupUpdatedAt = 1416,
  SkillMap = 1417,
  SkillMapChildren = 1418,
  SkillMapChildrenChildren = 1419,
  SkillMapChildrenChildrenChildren = 1420,
  SkillMapChildrenChildrenId = 1421,
  SkillMapChildrenId = 1422,
  SkillMapChildrenInternalContent = 1423,
  SkillMapChildrenInternalContentDigest = 1424,
  SkillMapChildrenInternalContentFilePath = 1425,
  SkillMapChildrenInternalDescription = 1426,
  SkillMapChildrenInternalFieldOwners = 1427,
  SkillMapChildrenInternalIgnoreType = 1428,
  SkillMapChildrenInternalMediaType = 1429,
  SkillMapChildrenInternalOwner = 1430,
  SkillMapChildrenInternalType = 1431,
  SkillMapChildrenParentChildren = 1432,
  SkillMapChildrenParentId = 1433,
  SkillMapContentfulId = 1434,
  SkillMapCreatedAt = 1435,
  SkillMapExpanded = 1436,
  SkillMapId = 1437,
  SkillMapInternalContent = 1438,
  SkillMapInternalContentDigest = 1439,
  SkillMapInternalContentFilePath = 1440,
  SkillMapInternalDescription = 1441,
  SkillMapInternalFieldOwners = 1442,
  SkillMapInternalIgnoreType = 1443,
  SkillMapInternalMediaType = 1444,
  SkillMapInternalOwner = 1445,
  SkillMapInternalType = 1446,
  SkillMapName = 1447,
  SkillMapNodeLocale = 1448,
  SkillMapParentChildren = 1449,
  SkillMapParentChildrenChildren = 1450,
  SkillMapParentChildrenId = 1451,
  SkillMapParentId = 1452,
  SkillMapParentInternalContent = 1453,
  SkillMapParentInternalContentDigest = 1454,
  SkillMapParentInternalContentFilePath = 1455,
  SkillMapParentInternalDescription = 1456,
  SkillMapParentInternalFieldOwners = 1457,
  SkillMapParentInternalIgnoreType = 1458,
  SkillMapParentInternalMediaType = 1459,
  SkillMapParentInternalOwner = 1460,
  SkillMapParentInternalType = 1461,
  SkillMapParentParentChildren = 1462,
  SkillMapParentParentId = 1463,
  SkillMapSkillGroups = 1464,
  SkillMapSkillGroupsChildren = 1465,
  SkillMapSkillGroupsChildrenChildren = 1466,
  SkillMapSkillGroupsChildrenId = 1467,
  SkillMapSkillGroupsContentfulId = 1468,
  SkillMapSkillGroupsCreatedAt = 1469,
  SkillMapSkillGroupsId = 1470,
  SkillMapSkillGroupsInternalContent = 1471,
  SkillMapSkillGroupsInternalContentDigest = 1472,
  SkillMapSkillGroupsInternalContentFilePath = 1473,
  SkillMapSkillGroupsInternalDescription = 1474,
  SkillMapSkillGroupsInternalFieldOwners = 1475,
  SkillMapSkillGroupsInternalIgnoreType = 1476,
  SkillMapSkillGroupsInternalMediaType = 1477,
  SkillMapSkillGroupsInternalOwner = 1478,
  SkillMapSkillGroupsInternalType = 1479,
  SkillMapSkillGroupsName = 1480,
  SkillMapSkillGroupsNodeLocale = 1481,
  SkillMapSkillGroupsParentChildren = 1482,
  SkillMapSkillGroupsParentId = 1483,
  SkillMapSkillGroupsSkillMap = 1484,
  SkillMapSkillGroupsSkillMapChildren = 1485,
  SkillMapSkillGroupsSkillMapContentfulId = 1486,
  SkillMapSkillGroupsSkillMapCreatedAt = 1487,
  SkillMapSkillGroupsSkillMapExpanded = 1488,
  SkillMapSkillGroupsSkillMapId = 1489,
  SkillMapSkillGroupsSkillMapName = 1490,
  SkillMapSkillGroupsSkillMapNodeLocale = 1491,
  SkillMapSkillGroupsSkillMapSkillGroups = 1492,
  SkillMapSkillGroupsSkillMapSkills = 1493,
  SkillMapSkillGroupsSkillMapSortKey = 1494,
  SkillMapSkillGroupsSkillMapSpaceId = 1495,
  SkillMapSkillGroupsSkillMapUpdatedAt = 1496,
  SkillMapSkillGroupsSkills = 1497,
  SkillMapSkillGroupsSkillsBlogPost = 1498,
  SkillMapSkillGroupsSkillsChildren = 1499,
  SkillMapSkillGroupsSkillsContentfulId = 1500,
  SkillMapSkillGroupsSkillsCreatedAt = 1501,
  SkillMapSkillGroupsSkillsId = 1502,
  SkillMapSkillGroupsSkillsLevel = 1503,
  SkillMapSkillGroupsSkillsName = 1504,
  SkillMapSkillGroupsSkillsNodeLocale = 1505,
  SkillMapSkillGroupsSkillsOss = 1506,
  SkillMapSkillGroupsSkillsProject = 1507,
  SkillMapSkillGroupsSkillsSkillGrpup = 1508,
  SkillMapSkillGroupsSkillsSkillMap = 1509,
  SkillMapSkillGroupsSkillsSpaceId = 1510,
  SkillMapSkillGroupsSkillsUpdatedAt = 1511,
  SkillMapSkillGroupsSpaceId = 1512,
  SkillMapSkillGroupsSysRevision = 1513,
  SkillMapSkillGroupsSysType = 1514,
  SkillMapSkillGroupsUpdatedAt = 1515,
  SkillMapSkills = 1516,
  SkillMapSkillsBlogPost = 1517,
  SkillMapSkillsBlogPostChildren = 1518,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1519,
  SkillMapSkillsBlogPostContentfulId = 1520,
  SkillMapSkillsBlogPostCreated = 1521,
  SkillMapSkillsBlogPostCreatedAt = 1522,
  SkillMapSkillsBlogPostExcerpt = 1523,
  SkillMapSkillsBlogPostGatsbyPath = 1524,
  SkillMapSkillsBlogPostId = 1525,
  SkillMapSkillsBlogPostNodeLocale = 1526,
  SkillMapSkillsBlogPostSlug = 1527,
  SkillMapSkillsBlogPostSpaceId = 1528,
  SkillMapSkillsBlogPostTags = 1529,
  SkillMapSkillsBlogPostTitle = 1530,
  SkillMapSkillsBlogPostUpdated = 1531,
  SkillMapSkillsBlogPostUpdatedAt = 1532,
  SkillMapSkillsChildren = 1533,
  SkillMapSkillsChildrenChildren = 1534,
  SkillMapSkillsChildrenId = 1535,
  SkillMapSkillsContentfulId = 1536,
  SkillMapSkillsCreatedAt = 1537,
  SkillMapSkillsId = 1538,
  SkillMapSkillsInternalContent = 1539,
  SkillMapSkillsInternalContentDigest = 1540,
  SkillMapSkillsInternalContentFilePath = 1541,
  SkillMapSkillsInternalDescription = 1542,
  SkillMapSkillsInternalFieldOwners = 1543,
  SkillMapSkillsInternalIgnoreType = 1544,
  SkillMapSkillsInternalMediaType = 1545,
  SkillMapSkillsInternalOwner = 1546,
  SkillMapSkillsInternalType = 1547,
  SkillMapSkillsLevel = 1548,
  SkillMapSkillsName = 1549,
  SkillMapSkillsNodeLocale = 1550,
  SkillMapSkillsOss = 1551,
  SkillMapSkillsOssChildren = 1552,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1553,
  SkillMapSkillsOssContentfulId = 1554,
  SkillMapSkillsOssCreatedAt = 1555,
  SkillMapSkillsOssHref = 1556,
  SkillMapSkillsOssId = 1557,
  SkillMapSkillsOssName = 1558,
  SkillMapSkillsOssNodeLocale = 1559,
  SkillMapSkillsOssSpaceId = 1560,
  SkillMapSkillsOssStartDate = 1561,
  SkillMapSkillsOssSubName = 1562,
  SkillMapSkillsOssTags = 1563,
  SkillMapSkillsOssUpdatedAt = 1564,
  SkillMapSkillsParentChildren = 1565,
  SkillMapSkillsParentId = 1566,
  SkillMapSkillsProject = 1567,
  SkillMapSkillsProjectChildren = 1568,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1569,
  SkillMapSkillsProjectContentfulId = 1570,
  SkillMapSkillsProjectCreatedAt = 1571,
  SkillMapSkillsProjectEndDate = 1572,
  SkillMapSkillsProjectId = 1573,
  SkillMapSkillsProjectName = 1574,
  SkillMapSkillsProjectNodeLocale = 1575,
  SkillMapSkillsProjectSpaceId = 1576,
  SkillMapSkillsProjectStartDate = 1577,
  SkillMapSkillsProjectSubName = 1578,
  SkillMapSkillsProjectTags = 1579,
  SkillMapSkillsProjectUpdatedAt = 1580,
  SkillMapSkillsSkillGrpup = 1581,
  SkillMapSkillsSkillGrpupChildren = 1582,
  SkillMapSkillsSkillGrpupContentfulId = 1583,
  SkillMapSkillsSkillGrpupCreatedAt = 1584,
  SkillMapSkillsSkillGrpupId = 1585,
  SkillMapSkillsSkillGrpupName = 1586,
  SkillMapSkillsSkillGrpupNodeLocale = 1587,
  SkillMapSkillsSkillGrpupSkillMap = 1588,
  SkillMapSkillsSkillGrpupSkills = 1589,
  SkillMapSkillsSkillGrpupSpaceId = 1590,
  SkillMapSkillsSkillGrpupUpdatedAt = 1591,
  SkillMapSkillsSkillMap = 1592,
  SkillMapSkillsSkillMapChildren = 1593,
  SkillMapSkillsSkillMapContentfulId = 1594,
  SkillMapSkillsSkillMapCreatedAt = 1595,
  SkillMapSkillsSkillMapExpanded = 1596,
  SkillMapSkillsSkillMapId = 1597,
  SkillMapSkillsSkillMapName = 1598,
  SkillMapSkillsSkillMapNodeLocale = 1599,
  SkillMapSkillsSkillMapSkillGroups = 1600,
  SkillMapSkillsSkillMapSkills = 1601,
  SkillMapSkillsSkillMapSortKey = 1602,
  SkillMapSkillsSkillMapSpaceId = 1603,
  SkillMapSkillsSkillMapUpdatedAt = 1604,
  SkillMapSkillsSpaceId = 1605,
  SkillMapSkillsSysRevision = 1606,
  SkillMapSkillsSysType = 1607,
  SkillMapSkillsUpdatedAt = 1608,
  SkillMapSortKey = 1609,
  SkillMapSpaceId = 1610,
  SkillMapSysRevision = 1611,
  SkillMapSysType = 1612,
  SkillMapUpdatedAt = 1613,
  SpaceId = 1614,
  SysContentTypeSysId = 1615,
  SysContentTypeSysLinkType = 1616,
  SysContentTypeSysType = 1617,
  SysRevision = 1618,
  SysType = 1619,
  UpdatedAt = 1620
}

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
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagGroupConnectionGroupArgs = {
  field: ContentfulTagFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulTagGroupConnectionMaxArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagGroupConnectionMinArgs = {
  field: ContentfulTagFieldsEnum;
};


export type ContentfulTagGroupConnectionSumArgs = {
  field: ContentfulTagFieldsEnum;
};

export type ContentfulTagSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulTagFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulTagSys = {
  readonly contentType: Maybe<ContentfulTagSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulTagSysContentType = {
  readonly sys: Maybe<ContentfulTagSysContentTypeSys>;
};

export type ContentfulTagSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulTagSysContentTypeSysFilterInput>;
};

export type ContentfulTagSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulTagSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulTagSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulTagSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoConnectionGroupArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulWhatICanDoConnectionMaxArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoConnectionMinArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoConnectionSumArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};

export type ContentfulWhatICanDoEdge = {
  readonly next: Maybe<ContentfulWhatICanDo>;
  readonly node: ContentfulWhatICanDo;
  readonly previous: Maybe<ContentfulWhatICanDo>;
};

export enum ContentfulWhatICanDoFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  ContentfulId = 42,
  CreatedAt = 43,
  IconChildContentfulIconSvgTextNodeChildMdxBody = 44,
  IconChildContentfulIconSvgTextNodeChildMdxChildren = 45,
  IconChildContentfulIconSvgTextNodeChildMdxExcerpt = 46,
  IconChildContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 47,
  IconChildContentfulIconSvgTextNodeChildMdxHeadings = 48,
  IconChildContentfulIconSvgTextNodeChildMdxHtml = 49,
  IconChildContentfulIconSvgTextNodeChildMdxId = 50,
  IconChildContentfulIconSvgTextNodeChildMdxMdxAst = 51,
  IconChildContentfulIconSvgTextNodeChildMdxRawBody = 52,
  IconChildContentfulIconSvgTextNodeChildMdxSlug = 53,
  IconChildContentfulIconSvgTextNodeChildMdxTableOfContents = 54,
  IconChildContentfulIconSvgTextNodeChildMdxTimeToRead = 55,
  IconChildContentfulIconSvgTextNodeChildren = 56,
  IconChildContentfulIconSvgTextNodeChildrenMdx = 57,
  IconChildContentfulIconSvgTextNodeChildrenMdxBody = 58,
  IconChildContentfulIconSvgTextNodeChildrenMdxChildren = 59,
  IconChildContentfulIconSvgTextNodeChildrenMdxExcerpt = 60,
  IconChildContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 61,
  IconChildContentfulIconSvgTextNodeChildrenMdxHeadings = 62,
  IconChildContentfulIconSvgTextNodeChildrenMdxHtml = 63,
  IconChildContentfulIconSvgTextNodeChildrenMdxId = 64,
  IconChildContentfulIconSvgTextNodeChildrenMdxMdxAst = 65,
  IconChildContentfulIconSvgTextNodeChildrenMdxRawBody = 66,
  IconChildContentfulIconSvgTextNodeChildrenMdxSlug = 67,
  IconChildContentfulIconSvgTextNodeChildrenMdxTableOfContents = 68,
  IconChildContentfulIconSvgTextNodeChildrenMdxTimeToRead = 69,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 70,
  IconChildContentfulIconSvgTextNodeChildrenId = 71,
  IconChildContentfulIconSvgTextNodeId = 72,
  IconChildContentfulIconSvgTextNodeInternalContent = 73,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 74,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 75,
  IconChildContentfulIconSvgTextNodeInternalDescription = 76,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 77,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 78,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 79,
  IconChildContentfulIconSvgTextNodeInternalOwner = 80,
  IconChildContentfulIconSvgTextNodeInternalType = 81,
  IconChildContentfulIconSvgTextNodeParentChildren = 82,
  IconChildContentfulIconSvgTextNodeParentId = 83,
  IconChildContentfulIconSvgTextNodeSvg = 84,
  IconChildContentfulIconSvgTextNodeSysType = 85,
  IconChildren = 86,
  IconChildrenContentfulIconSvgTextNode = 87,
  IconChildrenContentfulIconSvgTextNodeChildMdxBody = 88,
  IconChildrenContentfulIconSvgTextNodeChildMdxChildren = 89,
  IconChildrenContentfulIconSvgTextNodeChildMdxExcerpt = 90,
  IconChildrenContentfulIconSvgTextNodeChildMdxFileAbsolutePath = 91,
  IconChildrenContentfulIconSvgTextNodeChildMdxHeadings = 92,
  IconChildrenContentfulIconSvgTextNodeChildMdxHtml = 93,
  IconChildrenContentfulIconSvgTextNodeChildMdxId = 94,
  IconChildrenContentfulIconSvgTextNodeChildMdxMdxAst = 95,
  IconChildrenContentfulIconSvgTextNodeChildMdxRawBody = 96,
  IconChildrenContentfulIconSvgTextNodeChildMdxSlug = 97,
  IconChildrenContentfulIconSvgTextNodeChildMdxTableOfContents = 98,
  IconChildrenContentfulIconSvgTextNodeChildMdxTimeToRead = 99,
  IconChildrenContentfulIconSvgTextNodeChildren = 100,
  IconChildrenContentfulIconSvgTextNodeChildrenMdx = 101,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxBody = 102,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxChildren = 103,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxExcerpt = 104,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxFileAbsolutePath = 105,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHeadings = 106,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxHtml = 107,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxId = 108,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxMdxAst = 109,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxRawBody = 110,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxSlug = 111,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTableOfContents = 112,
  IconChildrenContentfulIconSvgTextNodeChildrenMdxTimeToRead = 113,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 114,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 115,
  IconChildrenContentfulIconSvgTextNodeId = 116,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 117,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 118,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 119,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 120,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 121,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 122,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 123,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 124,
  IconChildrenContentfulIconSvgTextNodeInternalType = 125,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 126,
  IconChildrenContentfulIconSvgTextNodeParentId = 127,
  IconChildrenContentfulIconSvgTextNodeSvg = 128,
  IconChildrenContentfulIconSvgTextNodeSysType = 129,
  IconChildrenChildren = 130,
  IconChildrenChildrenChildren = 131,
  IconChildrenChildrenId = 132,
  IconChildrenId = 133,
  IconChildrenInternalContent = 134,
  IconChildrenInternalContentDigest = 135,
  IconChildrenInternalContentFilePath = 136,
  IconChildrenInternalDescription = 137,
  IconChildrenInternalFieldOwners = 138,
  IconChildrenInternalIgnoreType = 139,
  IconChildrenInternalMediaType = 140,
  IconChildrenInternalOwner = 141,
  IconChildrenInternalType = 142,
  IconChildrenParentChildren = 143,
  IconChildrenParentId = 144,
  IconContact = 145,
  IconContactChildren = 146,
  IconContactChildrenChildren = 147,
  IconContactChildrenId = 148,
  IconContactContentfulId = 149,
  IconContactCreatedAt = 150,
  IconContactHref = 151,
  IconContactIconSvgDarkChildren = 152,
  IconContactIconSvgDarkContentfulId = 153,
  IconContactIconSvgDarkCreatedAt = 154,
  IconContactIconSvgDarkDescription = 155,
  IconContactIconSvgDarkFilename = 156,
  IconContactIconSvgDarkFilesize = 157,
  IconContactIconSvgDarkGatsbyImage = 158,
  IconContactIconSvgDarkGatsbyImageData = 159,
  IconContactIconSvgDarkHeight = 160,
  IconContactIconSvgDarkId = 161,
  IconContactIconSvgDarkMimeType = 162,
  IconContactIconSvgDarkNodeLocale = 163,
  IconContactIconSvgDarkPlaceholderUrl = 164,
  IconContactIconSvgDarkPublicUrl = 165,
  IconContactIconSvgDarkSize = 166,
  IconContactIconSvgDarkSpaceId = 167,
  IconContactIconSvgDarkTitle = 168,
  IconContactIconSvgDarkUpdatedAt = 169,
  IconContactIconSvgDarkUrl = 170,
  IconContactIconSvgDarkWidth = 171,
  IconContactIconSvgLightChildren = 172,
  IconContactIconSvgLightContentfulId = 173,
  IconContactIconSvgLightCreatedAt = 174,
  IconContactIconSvgLightDescription = 175,
  IconContactIconSvgLightFilename = 176,
  IconContactIconSvgLightFilesize = 177,
  IconContactIconSvgLightGatsbyImage = 178,
  IconContactIconSvgLightGatsbyImageData = 179,
  IconContactIconSvgLightHeight = 180,
  IconContactIconSvgLightId = 181,
  IconContactIconSvgLightMimeType = 182,
  IconContactIconSvgLightNodeLocale = 183,
  IconContactIconSvgLightPlaceholderUrl = 184,
  IconContactIconSvgLightPublicUrl = 185,
  IconContactIconSvgLightSize = 186,
  IconContactIconSvgLightSpaceId = 187,
  IconContactIconSvgLightTitle = 188,
  IconContactIconSvgLightUpdatedAt = 189,
  IconContactIconSvgLightUrl = 190,
  IconContactIconSvgLightWidth = 191,
  IconContactIconChildren = 192,
  IconContactIconChildrenContentfulIconSvgTextNode = 193,
  IconContactIconContact = 194,
  IconContactIconContentfulId = 195,
  IconContactIconCreatedAt = 196,
  IconContactIconHistory = 197,
  IconContactIconId = 198,
  IconContactIconName = 199,
  IconContactIconNodeLocale = 200,
  IconContactIconOss = 201,
  IconContactIconProject = 202,
  IconContactIconSpaceId = 203,
  IconContactIconUpdatedAt = 204,
  IconContactIconWhatICanDo = 205,
  IconContactId = 206,
  IconContactInternalContent = 207,
  IconContactInternalContentDigest = 208,
  IconContactInternalContentFilePath = 209,
  IconContactInternalDescription = 210,
  IconContactInternalFieldOwners = 211,
  IconContactInternalIgnoreType = 212,
  IconContactInternalMediaType = 213,
  IconContactInternalOwner = 214,
  IconContactInternalType = 215,
  IconContactName = 216,
  IconContactNodeLocale = 217,
  IconContactParentChildren = 218,
  IconContactParentId = 219,
  IconContactSortKey = 220,
  IconContactSpaceId = 221,
  IconContactSubName = 222,
  IconContactSysRevision = 223,
  IconContactSysType = 224,
  IconContactUpdatedAt = 225,
  IconContentfulId = 226,
  IconCreatedAt = 227,
  IconHistory = 228,
  IconHistoryChildren = 229,
  IconHistoryChildrenChildren = 230,
  IconHistoryChildrenId = 231,
  IconHistoryContentfulId = 232,
  IconHistoryCreatedAt = 233,
  IconHistoryDate = 234,
  IconHistoryIconChildren = 235,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 236,
  IconHistoryIconContact = 237,
  IconHistoryIconContentfulId = 238,
  IconHistoryIconCreatedAt = 239,
  IconHistoryIconHistory = 240,
  IconHistoryIconId = 241,
  IconHistoryIconName = 242,
  IconHistoryIconNodeLocale = 243,
  IconHistoryIconOss = 244,
  IconHistoryIconProject = 245,
  IconHistoryIconSpaceId = 246,
  IconHistoryIconUpdatedAt = 247,
  IconHistoryIconWhatICanDo = 248,
  IconHistoryId = 249,
  IconHistoryInternalContent = 250,
  IconHistoryInternalContentDigest = 251,
  IconHistoryInternalContentFilePath = 252,
  IconHistoryInternalDescription = 253,
  IconHistoryInternalFieldOwners = 254,
  IconHistoryInternalIgnoreType = 255,
  IconHistoryInternalMediaType = 256,
  IconHistoryInternalOwner = 257,
  IconHistoryInternalType = 258,
  IconHistoryName = 259,
  IconHistoryNodeLocale = 260,
  IconHistoryParentChildren = 261,
  IconHistoryParentId = 262,
  IconHistorySpaceId = 263,
  IconHistorySubName = 264,
  IconHistorySysRevision = 265,
  IconHistorySysType = 266,
  IconHistoryUpdatedAt = 267,
  IconId = 268,
  IconInternalContent = 269,
  IconInternalContentDigest = 270,
  IconInternalContentFilePath = 271,
  IconInternalDescription = 272,
  IconInternalFieldOwners = 273,
  IconInternalIgnoreType = 274,
  IconInternalMediaType = 275,
  IconInternalOwner = 276,
  IconInternalType = 277,
  IconName = 278,
  IconNodeLocale = 279,
  IconOss = 280,
  IconOssChildContentfulOssDetailTextNodeChildren = 281,
  IconOssChildContentfulOssDetailTextNodeChildrenMdx = 282,
  IconOssChildContentfulOssDetailTextNodeDetail = 283,
  IconOssChildContentfulOssDetailTextNodeId = 284,
  IconOssChildren = 285,
  IconOssChildrenContentfulOssDetailTextNode = 286,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 287,
  IconOssChildrenContentfulOssDetailTextNodeChildrenMdx = 288,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 289,
  IconOssChildrenContentfulOssDetailTextNodeId = 290,
  IconOssChildrenChildren = 291,
  IconOssChildrenId = 292,
  IconOssContentfulId = 293,
  IconOssCreatedAt = 294,
  IconOssDetailChildren = 295,
  IconOssDetailChildrenMdx = 296,
  IconOssDetailDetail = 297,
  IconOssDetailId = 298,
  IconOssHref = 299,
  IconOssIconChildren = 300,
  IconOssIconChildrenContentfulIconSvgTextNode = 301,
  IconOssIconContact = 302,
  IconOssIconContentfulId = 303,
  IconOssIconCreatedAt = 304,
  IconOssIconHistory = 305,
  IconOssIconId = 306,
  IconOssIconName = 307,
  IconOssIconNodeLocale = 308,
  IconOssIconOss = 309,
  IconOssIconProject = 310,
  IconOssIconSpaceId = 311,
  IconOssIconUpdatedAt = 312,
  IconOssIconWhatICanDo = 313,
  IconOssId = 314,
  IconOssImageChildren = 315,
  IconOssImageContentfulId = 316,
  IconOssImageCreatedAt = 317,
  IconOssImageDescription = 318,
  IconOssImageFilename = 319,
  IconOssImageFilesize = 320,
  IconOssImageGatsbyImage = 321,
  IconOssImageGatsbyImageData = 322,
  IconOssImageHeight = 323,
  IconOssImageId = 324,
  IconOssImageMimeType = 325,
  IconOssImageNodeLocale = 326,
  IconOssImagePlaceholderUrl = 327,
  IconOssImagePublicUrl = 328,
  IconOssImageSize = 329,
  IconOssImageSpaceId = 330,
  IconOssImageTitle = 331,
  IconOssImageUpdatedAt = 332,
  IconOssImageUrl = 333,
  IconOssImageWidth = 334,
  IconOssInternalContent = 335,
  IconOssInternalContentDigest = 336,
  IconOssInternalContentFilePath = 337,
  IconOssInternalDescription = 338,
  IconOssInternalFieldOwners = 339,
  IconOssInternalIgnoreType = 340,
  IconOssInternalMediaType = 341,
  IconOssInternalOwner = 342,
  IconOssInternalType = 343,
  IconOssName = 344,
  IconOssNodeLocale = 345,
  IconOssParentChildren = 346,
  IconOssParentId = 347,
  IconOssSpaceId = 348,
  IconOssStartDate = 349,
  IconOssSubName = 350,
  IconOssSysRevision = 351,
  IconOssSysType = 352,
  IconOssTags = 353,
  IconOssTagsBlogPost = 354,
  IconOssTagsChildren = 355,
  IconOssTagsContentfulId = 356,
  IconOssTagsCreatedAt = 357,
  IconOssTagsId = 358,
  IconOssTagsLevel = 359,
  IconOssTagsName = 360,
  IconOssTagsNodeLocale = 361,
  IconOssTagsOss = 362,
  IconOssTagsProject = 363,
  IconOssTagsSkillGrpup = 364,
  IconOssTagsSkillMap = 365,
  IconOssTagsSpaceId = 366,
  IconOssTagsUpdatedAt = 367,
  IconOssUpdatedAt = 368,
  IconParentChildren = 369,
  IconParentChildrenChildren = 370,
  IconParentChildrenId = 371,
  IconParentId = 372,
  IconParentInternalContent = 373,
  IconParentInternalContentDigest = 374,
  IconParentInternalContentFilePath = 375,
  IconParentInternalDescription = 376,
  IconParentInternalFieldOwners = 377,
  IconParentInternalIgnoreType = 378,
  IconParentInternalMediaType = 379,
  IconParentInternalOwner = 380,
  IconParentInternalType = 381,
  IconParentParentChildren = 382,
  IconParentParentId = 383,
  IconProject = 384,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 385,
  IconProjectChildContentfulProjectDetailTextNodeChildrenMdx = 386,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 387,
  IconProjectChildContentfulProjectDetailTextNodeId = 388,
  IconProjectChildren = 389,
  IconProjectChildrenContentfulProjectDetailTextNode = 390,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 391,
  IconProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 392,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 393,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 394,
  IconProjectChildrenChildren = 395,
  IconProjectChildrenId = 396,
  IconProjectContentfulId = 397,
  IconProjectCreatedAt = 398,
  IconProjectDetailChildren = 399,
  IconProjectDetailChildrenMdx = 400,
  IconProjectDetailDetail = 401,
  IconProjectDetailId = 402,
  IconProjectEndDate = 403,
  IconProjectIconChildren = 404,
  IconProjectIconChildrenContentfulIconSvgTextNode = 405,
  IconProjectIconContact = 406,
  IconProjectIconContentfulId = 407,
  IconProjectIconCreatedAt = 408,
  IconProjectIconHistory = 409,
  IconProjectIconId = 410,
  IconProjectIconName = 411,
  IconProjectIconNodeLocale = 412,
  IconProjectIconOss = 413,
  IconProjectIconProject = 414,
  IconProjectIconSpaceId = 415,
  IconProjectIconUpdatedAt = 416,
  IconProjectIconWhatICanDo = 417,
  IconProjectId = 418,
  IconProjectInternalContent = 419,
  IconProjectInternalContentDigest = 420,
  IconProjectInternalContentFilePath = 421,
  IconProjectInternalDescription = 422,
  IconProjectInternalFieldOwners = 423,
  IconProjectInternalIgnoreType = 424,
  IconProjectInternalMediaType = 425,
  IconProjectInternalOwner = 426,
  IconProjectInternalType = 427,
  IconProjectName = 428,
  IconProjectNodeLocale = 429,
  IconProjectParentChildren = 430,
  IconProjectParentId = 431,
  IconProjectSpaceId = 432,
  IconProjectStartDate = 433,
  IconProjectSubName = 434,
  IconProjectSysRevision = 435,
  IconProjectSysType = 436,
  IconProjectTags = 437,
  IconProjectTagsBlogPost = 438,
  IconProjectTagsChildren = 439,
  IconProjectTagsContentfulId = 440,
  IconProjectTagsCreatedAt = 441,
  IconProjectTagsId = 442,
  IconProjectTagsLevel = 443,
  IconProjectTagsName = 444,
  IconProjectTagsNodeLocale = 445,
  IconProjectTagsOss = 446,
  IconProjectTagsProject = 447,
  IconProjectTagsSkillGrpup = 448,
  IconProjectTagsSkillMap = 449,
  IconProjectTagsSpaceId = 450,
  IconProjectTagsUpdatedAt = 451,
  IconProjectUpdatedAt = 452,
  IconSpaceId = 453,
  IconSvgChildMdxBody = 454,
  IconSvgChildMdxChildren = 455,
  IconSvgChildMdxExcerpt = 456,
  IconSvgChildMdxFileAbsolutePath = 457,
  IconSvgChildMdxHeadings = 458,
  IconSvgChildMdxHtml = 459,
  IconSvgChildMdxId = 460,
  IconSvgChildMdxMdxAst = 461,
  IconSvgChildMdxRawBody = 462,
  IconSvgChildMdxSlug = 463,
  IconSvgChildMdxTableOfContents = 464,
  IconSvgChildMdxTimeToRead = 465,
  IconSvgChildren = 466,
  IconSvgChildrenMdx = 467,
  IconSvgChildrenMdxBody = 468,
  IconSvgChildrenMdxChildren = 469,
  IconSvgChildrenMdxExcerpt = 470,
  IconSvgChildrenMdxFileAbsolutePath = 471,
  IconSvgChildrenMdxHeadings = 472,
  IconSvgChildrenMdxHtml = 473,
  IconSvgChildrenMdxId = 474,
  IconSvgChildrenMdxMdxAst = 475,
  IconSvgChildrenMdxRawBody = 476,
  IconSvgChildrenMdxSlug = 477,
  IconSvgChildrenMdxTableOfContents = 478,
  IconSvgChildrenMdxTimeToRead = 479,
  IconSvgChildrenChildren = 480,
  IconSvgChildrenId = 481,
  IconSvgId = 482,
  IconSvgInternalContent = 483,
  IconSvgInternalContentDigest = 484,
  IconSvgInternalContentFilePath = 485,
  IconSvgInternalDescription = 486,
  IconSvgInternalFieldOwners = 487,
  IconSvgInternalIgnoreType = 488,
  IconSvgInternalMediaType = 489,
  IconSvgInternalOwner = 490,
  IconSvgInternalType = 491,
  IconSvgParentChildren = 492,
  IconSvgParentId = 493,
  IconSvgSvg = 494,
  IconSvgSysType = 495,
  IconSysRevision = 496,
  IconSysType = 497,
  IconUpdatedAt = 498,
  IconWhatICanDo = 499,
  IconWhatICanDoChildren = 500,
  IconWhatICanDoChildrenChildren = 501,
  IconWhatICanDoChildrenId = 502,
  IconWhatICanDoContentfulId = 503,
  IconWhatICanDoCreatedAt = 504,
  IconWhatICanDoIconChildren = 505,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 506,
  IconWhatICanDoIconContact = 507,
  IconWhatICanDoIconContentfulId = 508,
  IconWhatICanDoIconCreatedAt = 509,
  IconWhatICanDoIconHistory = 510,
  IconWhatICanDoIconId = 511,
  IconWhatICanDoIconName = 512,
  IconWhatICanDoIconNodeLocale = 513,
  IconWhatICanDoIconOss = 514,
  IconWhatICanDoIconProject = 515,
  IconWhatICanDoIconSpaceId = 516,
  IconWhatICanDoIconUpdatedAt = 517,
  IconWhatICanDoIconWhatICanDo = 518,
  IconWhatICanDoId = 519,
  IconWhatICanDoInternalContent = 520,
  IconWhatICanDoInternalContentDigest = 521,
  IconWhatICanDoInternalContentFilePath = 522,
  IconWhatICanDoInternalDescription = 523,
  IconWhatICanDoInternalFieldOwners = 524,
  IconWhatICanDoInternalIgnoreType = 525,
  IconWhatICanDoInternalMediaType = 526,
  IconWhatICanDoInternalOwner = 527,
  IconWhatICanDoInternalType = 528,
  IconWhatICanDoName = 529,
  IconWhatICanDoNodeLocale = 530,
  IconWhatICanDoParentChildren = 531,
  IconWhatICanDoParentId = 532,
  IconWhatICanDoSortKey = 533,
  IconWhatICanDoSpaceId = 534,
  IconWhatICanDoSubName = 535,
  IconWhatICanDoSysRevision = 536,
  IconWhatICanDoSysType = 537,
  IconWhatICanDoUpdatedAt = 538,
  Id = 539,
  InternalContent = 540,
  InternalContentDigest = 541,
  InternalContentFilePath = 542,
  InternalDescription = 543,
  InternalFieldOwners = 544,
  InternalIgnoreType = 545,
  InternalMediaType = 546,
  InternalOwner = 547,
  InternalType = 548,
  Name = 549,
  NodeLocale = 550,
  ParentChildren = 551,
  ParentChildrenChildren = 552,
  ParentChildrenChildrenChildren = 553,
  ParentChildrenChildrenId = 554,
  ParentChildrenId = 555,
  ParentChildrenInternalContent = 556,
  ParentChildrenInternalContentDigest = 557,
  ParentChildrenInternalContentFilePath = 558,
  ParentChildrenInternalDescription = 559,
  ParentChildrenInternalFieldOwners = 560,
  ParentChildrenInternalIgnoreType = 561,
  ParentChildrenInternalMediaType = 562,
  ParentChildrenInternalOwner = 563,
  ParentChildrenInternalType = 564,
  ParentChildrenParentChildren = 565,
  ParentChildrenParentId = 566,
  ParentId = 567,
  ParentInternalContent = 568,
  ParentInternalContentDigest = 569,
  ParentInternalContentFilePath = 570,
  ParentInternalDescription = 571,
  ParentInternalFieldOwners = 572,
  ParentInternalIgnoreType = 573,
  ParentInternalMediaType = 574,
  ParentInternalOwner = 575,
  ParentInternalType = 576,
  ParentParentChildren = 577,
  ParentParentChildrenChildren = 578,
  ParentParentChildrenId = 579,
  ParentParentId = 580,
  ParentParentInternalContent = 581,
  ParentParentInternalContentDigest = 582,
  ParentParentInternalContentFilePath = 583,
  ParentParentInternalDescription = 584,
  ParentParentInternalFieldOwners = 585,
  ParentParentInternalIgnoreType = 586,
  ParentParentInternalMediaType = 587,
  ParentParentInternalOwner = 588,
  ParentParentInternalType = 589,
  ParentParentParentChildren = 590,
  ParentParentParentId = 591,
  SortKey = 592,
  SpaceId = 593,
  SubName = 594,
  SysContentTypeSysId = 595,
  SysContentTypeSysLinkType = 596,
  SysContentTypeSysType = 597,
  SysRevision = 598,
  SysType = 599,
  UpdatedAt = 600
}

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
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoGroupConnectionGroupArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulWhatICanDoGroupConnectionMaxArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoGroupConnectionMinArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};


export type ContentfulWhatICanDoGroupConnectionSumArgs = {
  field: ContentfulWhatICanDoFieldsEnum;
};

export type ContentfulWhatICanDoSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulWhatICanDoFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulWhatICanDoSys = {
  readonly contentType: Maybe<ContentfulWhatICanDoSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoSysContentType = {
  readonly sys: Maybe<ContentfulWhatICanDoSysContentTypeSys>;
};

export type ContentfulWhatICanDoSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulWhatICanDoSysContentTypeSysFilterInput>;
};

export type ContentfulWhatICanDoSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulWhatICanDoSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type ContentfulWhatICanDoSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulWhatICanDoSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 0,
  AccessTime = 1,
  Atime = 2,
  AtimeMs = 3,
  Base = 4,
  BirthTime = 5,
  Birthtime = 6,
  BirthtimeMs = 7,
  ChangeTime = 8,
  Children = 9,
  ChildrenChildren = 10,
  ChildrenChildrenChildren = 11,
  ChildrenChildrenChildrenChildren = 12,
  ChildrenChildrenChildrenId = 13,
  ChildrenChildrenId = 14,
  ChildrenChildrenInternalContent = 15,
  ChildrenChildrenInternalContentDigest = 16,
  ChildrenChildrenInternalContentFilePath = 17,
  ChildrenChildrenInternalDescription = 18,
  ChildrenChildrenInternalFieldOwners = 19,
  ChildrenChildrenInternalIgnoreType = 20,
  ChildrenChildrenInternalMediaType = 21,
  ChildrenChildrenInternalOwner = 22,
  ChildrenChildrenInternalType = 23,
  ChildrenChildrenParentChildren = 24,
  ChildrenChildrenParentId = 25,
  ChildrenId = 26,
  ChildrenInternalContent = 27,
  ChildrenInternalContentDigest = 28,
  ChildrenInternalContentFilePath = 29,
  ChildrenInternalDescription = 30,
  ChildrenInternalFieldOwners = 31,
  ChildrenInternalIgnoreType = 32,
  ChildrenInternalMediaType = 33,
  ChildrenInternalOwner = 34,
  ChildrenInternalType = 35,
  ChildrenParentChildren = 36,
  ChildrenParentChildrenChildren = 37,
  ChildrenParentChildrenId = 38,
  ChildrenParentId = 39,
  ChildrenParentInternalContent = 40,
  ChildrenParentInternalContentDigest = 41,
  ChildrenParentInternalContentFilePath = 42,
  ChildrenParentInternalDescription = 43,
  ChildrenParentInternalFieldOwners = 44,
  ChildrenParentInternalIgnoreType = 45,
  ChildrenParentInternalMediaType = 46,
  ChildrenParentInternalOwner = 47,
  ChildrenParentInternalType = 48,
  ChildrenParentParentChildren = 49,
  ChildrenParentParentId = 50,
  Ctime = 51,
  CtimeMs = 52,
  Dev = 53,
  Dir = 54,
  Ext = 55,
  Extension = 56,
  Gid = 57,
  Id = 58,
  Ino = 59,
  InternalContent = 60,
  InternalContentDigest = 61,
  InternalContentFilePath = 62,
  InternalDescription = 63,
  InternalFieldOwners = 64,
  InternalIgnoreType = 65,
  InternalMediaType = 66,
  InternalOwner = 67,
  InternalType = 68,
  Mode = 69,
  ModifiedTime = 70,
  Mtime = 71,
  MtimeMs = 72,
  Name = 73,
  Nlink = 74,
  ParentChildren = 75,
  ParentChildrenChildren = 76,
  ParentChildrenChildrenChildren = 77,
  ParentChildrenChildrenId = 78,
  ParentChildrenId = 79,
  ParentChildrenInternalContent = 80,
  ParentChildrenInternalContentDigest = 81,
  ParentChildrenInternalContentFilePath = 82,
  ParentChildrenInternalDescription = 83,
  ParentChildrenInternalFieldOwners = 84,
  ParentChildrenInternalIgnoreType = 85,
  ParentChildrenInternalMediaType = 86,
  ParentChildrenInternalOwner = 87,
  ParentChildrenInternalType = 88,
  ParentChildrenParentChildren = 89,
  ParentChildrenParentId = 90,
  ParentId = 91,
  ParentInternalContent = 92,
  ParentInternalContentDigest = 93,
  ParentInternalContentFilePath = 94,
  ParentInternalDescription = 95,
  ParentInternalFieldOwners = 96,
  ParentInternalIgnoreType = 97,
  ParentInternalMediaType = 98,
  ParentInternalOwner = 99,
  ParentInternalType = 100,
  ParentParentChildren = 101,
  ParentParentChildrenChildren = 102,
  ParentParentChildrenId = 103,
  ParentParentId = 104,
  ParentParentInternalContent = 105,
  ParentParentInternalContentDigest = 106,
  ParentParentInternalContentFilePath = 107,
  ParentParentInternalDescription = 108,
  ParentParentInternalFieldOwners = 109,
  ParentParentInternalIgnoreType = 110,
  ParentParentInternalMediaType = 111,
  ParentParentInternalOwner = 112,
  ParentParentInternalType = 113,
  ParentParentParentChildren = 114,
  ParentParentParentId = 115,
  PrettySize = 116,
  Rdev = 117,
  RelativeDirectory = 118,
  RelativePath = 119,
  Root = 120,
  Size = 121,
  SourceInstanceName = 122,
  Uid = 123
}

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
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<DirectoryFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly opacity: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

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
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns the first child node of type Locale or null if there are no children of given type on this node */
  readonly childLocale: Maybe<Locale>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type Locale */
  readonly childrenLocale: Maybe<ReadonlyArray<Maybe<Locale>>>;
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
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
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
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 0,
  AccessTime = 1,
  Atime = 2,
  AtimeMs = 3,
  Base = 4,
  BirthTime = 5,
  Birthtime = 6,
  BirthtimeMs = 7,
  Blksize = 8,
  Blocks = 9,
  ChangeTime = 10,
  ChildImageSharpChildren = 11,
  ChildImageSharpChildrenChildren = 12,
  ChildImageSharpChildrenChildrenChildren = 13,
  ChildImageSharpChildrenChildrenId = 14,
  ChildImageSharpChildrenId = 15,
  ChildImageSharpChildrenInternalContent = 16,
  ChildImageSharpChildrenInternalContentDigest = 17,
  ChildImageSharpChildrenInternalContentFilePath = 18,
  ChildImageSharpChildrenInternalDescription = 19,
  ChildImageSharpChildrenInternalFieldOwners = 20,
  ChildImageSharpChildrenInternalIgnoreType = 21,
  ChildImageSharpChildrenInternalMediaType = 22,
  ChildImageSharpChildrenInternalOwner = 23,
  ChildImageSharpChildrenInternalType = 24,
  ChildImageSharpChildrenParentChildren = 25,
  ChildImageSharpChildrenParentId = 26,
  ChildImageSharpFixedAspectRatio = 27,
  ChildImageSharpFixedBase64 = 28,
  ChildImageSharpFixedHeight = 29,
  ChildImageSharpFixedOriginalName = 30,
  ChildImageSharpFixedSrc = 31,
  ChildImageSharpFixedSrcSet = 32,
  ChildImageSharpFixedSrcSetWebp = 33,
  ChildImageSharpFixedSrcWebp = 34,
  ChildImageSharpFixedTracedSvg = 35,
  ChildImageSharpFixedWidth = 36,
  ChildImageSharpFluidAspectRatio = 37,
  ChildImageSharpFluidBase64 = 38,
  ChildImageSharpFluidOriginalImg = 39,
  ChildImageSharpFluidOriginalName = 40,
  ChildImageSharpFluidPresentationHeight = 41,
  ChildImageSharpFluidPresentationWidth = 42,
  ChildImageSharpFluidSizes = 43,
  ChildImageSharpFluidSrc = 44,
  ChildImageSharpFluidSrcSet = 45,
  ChildImageSharpFluidSrcSetWebp = 46,
  ChildImageSharpFluidSrcWebp = 47,
  ChildImageSharpFluidTracedSvg = 48,
  ChildImageSharpGatsbyImageData = 49,
  ChildImageSharpId = 50,
  ChildImageSharpInternalContent = 51,
  ChildImageSharpInternalContentDigest = 52,
  ChildImageSharpInternalContentFilePath = 53,
  ChildImageSharpInternalDescription = 54,
  ChildImageSharpInternalFieldOwners = 55,
  ChildImageSharpInternalIgnoreType = 56,
  ChildImageSharpInternalMediaType = 57,
  ChildImageSharpInternalOwner = 58,
  ChildImageSharpInternalType = 59,
  ChildImageSharpOriginalHeight = 60,
  ChildImageSharpOriginalSrc = 61,
  ChildImageSharpOriginalWidth = 62,
  ChildImageSharpParentChildren = 63,
  ChildImageSharpParentChildrenChildren = 64,
  ChildImageSharpParentChildrenId = 65,
  ChildImageSharpParentId = 66,
  ChildImageSharpParentInternalContent = 67,
  ChildImageSharpParentInternalContentDigest = 68,
  ChildImageSharpParentInternalContentFilePath = 69,
  ChildImageSharpParentInternalDescription = 70,
  ChildImageSharpParentInternalFieldOwners = 71,
  ChildImageSharpParentInternalIgnoreType = 72,
  ChildImageSharpParentInternalMediaType = 73,
  ChildImageSharpParentInternalOwner = 74,
  ChildImageSharpParentInternalType = 75,
  ChildImageSharpParentParentChildren = 76,
  ChildImageSharpParentParentId = 77,
  ChildImageSharpResizeAspectRatio = 78,
  ChildImageSharpResizeHeight = 79,
  ChildImageSharpResizeOriginalName = 80,
  ChildImageSharpResizeSrc = 81,
  ChildImageSharpResizeTracedSvg = 82,
  ChildImageSharpResizeWidth = 83,
  ChildLocaleChildren = 84,
  ChildLocaleChildrenChildren = 85,
  ChildLocaleChildrenChildrenChildren = 86,
  ChildLocaleChildrenChildrenId = 87,
  ChildLocaleChildrenId = 88,
  ChildLocaleChildrenInternalContent = 89,
  ChildLocaleChildrenInternalContentDigest = 90,
  ChildLocaleChildrenInternalContentFilePath = 91,
  ChildLocaleChildrenInternalDescription = 92,
  ChildLocaleChildrenInternalFieldOwners = 93,
  ChildLocaleChildrenInternalIgnoreType = 94,
  ChildLocaleChildrenInternalMediaType = 95,
  ChildLocaleChildrenInternalOwner = 96,
  ChildLocaleChildrenInternalType = 97,
  ChildLocaleChildrenParentChildren = 98,
  ChildLocaleChildrenParentId = 99,
  ChildLocaleData = 100,
  ChildLocaleFileAbsolutePath = 101,
  ChildLocaleId = 102,
  ChildLocaleInternalContent = 103,
  ChildLocaleInternalContentDigest = 104,
  ChildLocaleInternalContentFilePath = 105,
  ChildLocaleInternalDescription = 106,
  ChildLocaleInternalFieldOwners = 107,
  ChildLocaleInternalIgnoreType = 108,
  ChildLocaleInternalMediaType = 109,
  ChildLocaleInternalOwner = 110,
  ChildLocaleInternalType = 111,
  ChildLocaleLanguage = 112,
  ChildLocaleNs = 113,
  ChildLocaleParentChildren = 114,
  ChildLocaleParentChildrenChildren = 115,
  ChildLocaleParentChildrenId = 116,
  ChildLocaleParentId = 117,
  ChildLocaleParentInternalContent = 118,
  ChildLocaleParentInternalContentDigest = 119,
  ChildLocaleParentInternalContentFilePath = 120,
  ChildLocaleParentInternalDescription = 121,
  ChildLocaleParentInternalFieldOwners = 122,
  ChildLocaleParentInternalIgnoreType = 123,
  ChildLocaleParentInternalMediaType = 124,
  ChildLocaleParentInternalOwner = 125,
  ChildLocaleParentInternalType = 126,
  ChildLocaleParentParentChildren = 127,
  ChildLocaleParentParentId = 128,
  Children = 129,
  ChildrenImageSharp = 130,
  ChildrenImageSharpChildren = 131,
  ChildrenImageSharpChildrenChildren = 132,
  ChildrenImageSharpChildrenChildrenChildren = 133,
  ChildrenImageSharpChildrenChildrenId = 134,
  ChildrenImageSharpChildrenId = 135,
  ChildrenImageSharpChildrenInternalContent = 136,
  ChildrenImageSharpChildrenInternalContentDigest = 137,
  ChildrenImageSharpChildrenInternalContentFilePath = 138,
  ChildrenImageSharpChildrenInternalDescription = 139,
  ChildrenImageSharpChildrenInternalFieldOwners = 140,
  ChildrenImageSharpChildrenInternalIgnoreType = 141,
  ChildrenImageSharpChildrenInternalMediaType = 142,
  ChildrenImageSharpChildrenInternalOwner = 143,
  ChildrenImageSharpChildrenInternalType = 144,
  ChildrenImageSharpChildrenParentChildren = 145,
  ChildrenImageSharpChildrenParentId = 146,
  ChildrenImageSharpFixedAspectRatio = 147,
  ChildrenImageSharpFixedBase64 = 148,
  ChildrenImageSharpFixedHeight = 149,
  ChildrenImageSharpFixedOriginalName = 150,
  ChildrenImageSharpFixedSrc = 151,
  ChildrenImageSharpFixedSrcSet = 152,
  ChildrenImageSharpFixedSrcSetWebp = 153,
  ChildrenImageSharpFixedSrcWebp = 154,
  ChildrenImageSharpFixedTracedSvg = 155,
  ChildrenImageSharpFixedWidth = 156,
  ChildrenImageSharpFluidAspectRatio = 157,
  ChildrenImageSharpFluidBase64 = 158,
  ChildrenImageSharpFluidOriginalImg = 159,
  ChildrenImageSharpFluidOriginalName = 160,
  ChildrenImageSharpFluidPresentationHeight = 161,
  ChildrenImageSharpFluidPresentationWidth = 162,
  ChildrenImageSharpFluidSizes = 163,
  ChildrenImageSharpFluidSrc = 164,
  ChildrenImageSharpFluidSrcSet = 165,
  ChildrenImageSharpFluidSrcSetWebp = 166,
  ChildrenImageSharpFluidSrcWebp = 167,
  ChildrenImageSharpFluidTracedSvg = 168,
  ChildrenImageSharpGatsbyImageData = 169,
  ChildrenImageSharpId = 170,
  ChildrenImageSharpInternalContent = 171,
  ChildrenImageSharpInternalContentDigest = 172,
  ChildrenImageSharpInternalContentFilePath = 173,
  ChildrenImageSharpInternalDescription = 174,
  ChildrenImageSharpInternalFieldOwners = 175,
  ChildrenImageSharpInternalIgnoreType = 176,
  ChildrenImageSharpInternalMediaType = 177,
  ChildrenImageSharpInternalOwner = 178,
  ChildrenImageSharpInternalType = 179,
  ChildrenImageSharpOriginalHeight = 180,
  ChildrenImageSharpOriginalSrc = 181,
  ChildrenImageSharpOriginalWidth = 182,
  ChildrenImageSharpParentChildren = 183,
  ChildrenImageSharpParentChildrenChildren = 184,
  ChildrenImageSharpParentChildrenId = 185,
  ChildrenImageSharpParentId = 186,
  ChildrenImageSharpParentInternalContent = 187,
  ChildrenImageSharpParentInternalContentDigest = 188,
  ChildrenImageSharpParentInternalContentFilePath = 189,
  ChildrenImageSharpParentInternalDescription = 190,
  ChildrenImageSharpParentInternalFieldOwners = 191,
  ChildrenImageSharpParentInternalIgnoreType = 192,
  ChildrenImageSharpParentInternalMediaType = 193,
  ChildrenImageSharpParentInternalOwner = 194,
  ChildrenImageSharpParentInternalType = 195,
  ChildrenImageSharpParentParentChildren = 196,
  ChildrenImageSharpParentParentId = 197,
  ChildrenImageSharpResizeAspectRatio = 198,
  ChildrenImageSharpResizeHeight = 199,
  ChildrenImageSharpResizeOriginalName = 200,
  ChildrenImageSharpResizeSrc = 201,
  ChildrenImageSharpResizeTracedSvg = 202,
  ChildrenImageSharpResizeWidth = 203,
  ChildrenLocale = 204,
  ChildrenLocaleChildren = 205,
  ChildrenLocaleChildrenChildren = 206,
  ChildrenLocaleChildrenChildrenChildren = 207,
  ChildrenLocaleChildrenChildrenId = 208,
  ChildrenLocaleChildrenId = 209,
  ChildrenLocaleChildrenInternalContent = 210,
  ChildrenLocaleChildrenInternalContentDigest = 211,
  ChildrenLocaleChildrenInternalContentFilePath = 212,
  ChildrenLocaleChildrenInternalDescription = 213,
  ChildrenLocaleChildrenInternalFieldOwners = 214,
  ChildrenLocaleChildrenInternalIgnoreType = 215,
  ChildrenLocaleChildrenInternalMediaType = 216,
  ChildrenLocaleChildrenInternalOwner = 217,
  ChildrenLocaleChildrenInternalType = 218,
  ChildrenLocaleChildrenParentChildren = 219,
  ChildrenLocaleChildrenParentId = 220,
  ChildrenLocaleData = 221,
  ChildrenLocaleFileAbsolutePath = 222,
  ChildrenLocaleId = 223,
  ChildrenLocaleInternalContent = 224,
  ChildrenLocaleInternalContentDigest = 225,
  ChildrenLocaleInternalContentFilePath = 226,
  ChildrenLocaleInternalDescription = 227,
  ChildrenLocaleInternalFieldOwners = 228,
  ChildrenLocaleInternalIgnoreType = 229,
  ChildrenLocaleInternalMediaType = 230,
  ChildrenLocaleInternalOwner = 231,
  ChildrenLocaleInternalType = 232,
  ChildrenLocaleLanguage = 233,
  ChildrenLocaleNs = 234,
  ChildrenLocaleParentChildren = 235,
  ChildrenLocaleParentChildrenChildren = 236,
  ChildrenLocaleParentChildrenId = 237,
  ChildrenLocaleParentId = 238,
  ChildrenLocaleParentInternalContent = 239,
  ChildrenLocaleParentInternalContentDigest = 240,
  ChildrenLocaleParentInternalContentFilePath = 241,
  ChildrenLocaleParentInternalDescription = 242,
  ChildrenLocaleParentInternalFieldOwners = 243,
  ChildrenLocaleParentInternalIgnoreType = 244,
  ChildrenLocaleParentInternalMediaType = 245,
  ChildrenLocaleParentInternalOwner = 246,
  ChildrenLocaleParentInternalType = 247,
  ChildrenLocaleParentParentChildren = 248,
  ChildrenLocaleParentParentId = 249,
  ChildrenChildren = 250,
  ChildrenChildrenChildren = 251,
  ChildrenChildrenChildrenChildren = 252,
  ChildrenChildrenChildrenId = 253,
  ChildrenChildrenId = 254,
  ChildrenChildrenInternalContent = 255,
  ChildrenChildrenInternalContentDigest = 256,
  ChildrenChildrenInternalContentFilePath = 257,
  ChildrenChildrenInternalDescription = 258,
  ChildrenChildrenInternalFieldOwners = 259,
  ChildrenChildrenInternalIgnoreType = 260,
  ChildrenChildrenInternalMediaType = 261,
  ChildrenChildrenInternalOwner = 262,
  ChildrenChildrenInternalType = 263,
  ChildrenChildrenParentChildren = 264,
  ChildrenChildrenParentId = 265,
  ChildrenId = 266,
  ChildrenInternalContent = 267,
  ChildrenInternalContentDigest = 268,
  ChildrenInternalContentFilePath = 269,
  ChildrenInternalDescription = 270,
  ChildrenInternalFieldOwners = 271,
  ChildrenInternalIgnoreType = 272,
  ChildrenInternalMediaType = 273,
  ChildrenInternalOwner = 274,
  ChildrenInternalType = 275,
  ChildrenParentChildren = 276,
  ChildrenParentChildrenChildren = 277,
  ChildrenParentChildrenId = 278,
  ChildrenParentId = 279,
  ChildrenParentInternalContent = 280,
  ChildrenParentInternalContentDigest = 281,
  ChildrenParentInternalContentFilePath = 282,
  ChildrenParentInternalDescription = 283,
  ChildrenParentInternalFieldOwners = 284,
  ChildrenParentInternalIgnoreType = 285,
  ChildrenParentInternalMediaType = 286,
  ChildrenParentInternalOwner = 287,
  ChildrenParentInternalType = 288,
  ChildrenParentParentChildren = 289,
  ChildrenParentParentId = 290,
  Ctime = 291,
  CtimeMs = 292,
  Dev = 293,
  Dir = 294,
  Ext = 295,
  Extension = 296,
  Gid = 297,
  Id = 298,
  Ino = 299,
  InternalContent = 300,
  InternalContentDigest = 301,
  InternalContentFilePath = 302,
  InternalDescription = 303,
  InternalFieldOwners = 304,
  InternalIgnoreType = 305,
  InternalMediaType = 306,
  InternalOwner = 307,
  InternalType = 308,
  Mode = 309,
  ModifiedTime = 310,
  Mtime = 311,
  MtimeMs = 312,
  Name = 313,
  Nlink = 314,
  ParentChildren = 315,
  ParentChildrenChildren = 316,
  ParentChildrenChildrenChildren = 317,
  ParentChildrenChildrenId = 318,
  ParentChildrenId = 319,
  ParentChildrenInternalContent = 320,
  ParentChildrenInternalContentDigest = 321,
  ParentChildrenInternalContentFilePath = 322,
  ParentChildrenInternalDescription = 323,
  ParentChildrenInternalFieldOwners = 324,
  ParentChildrenInternalIgnoreType = 325,
  ParentChildrenInternalMediaType = 326,
  ParentChildrenInternalOwner = 327,
  ParentChildrenInternalType = 328,
  ParentChildrenParentChildren = 329,
  ParentChildrenParentId = 330,
  ParentId = 331,
  ParentInternalContent = 332,
  ParentInternalContentDigest = 333,
  ParentInternalContentFilePath = 334,
  ParentInternalDescription = 335,
  ParentInternalFieldOwners = 336,
  ParentInternalIgnoreType = 337,
  ParentInternalMediaType = 338,
  ParentInternalOwner = 339,
  ParentInternalType = 340,
  ParentParentChildren = 341,
  ParentParentChildrenChildren = 342,
  ParentParentChildrenId = 343,
  ParentParentId = 344,
  ParentParentInternalContent = 345,
  ParentParentInternalContentDigest = 346,
  ParentParentInternalContentFilePath = 347,
  ParentParentInternalDescription = 348,
  ParentParentInternalFieldOwners = 349,
  ParentParentInternalIgnoreType = 350,
  ParentParentInternalMediaType = 351,
  ParentParentInternalOwner = 352,
  ParentParentInternalType = 353,
  ParentParentParentChildren = 354,
  ParentParentParentId = 355,
  PrettySize = 356,
  PublicUrl = 357,
  Rdev = 358,
  RelativeDirectory = 359,
  RelativePath = 360,
  Root = 361,
  Size = 362,
  SourceInstanceName = 363,
  Uid = 364
}

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
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly childLocale: InputMaybe<LocaleFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly childrenLocale: InputMaybe<LocaleFilterListInput>;
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
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<FileFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
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
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  FixedAspectRatio = 42,
  FixedBase64 = 43,
  FixedHeight = 44,
  FixedOriginalName = 45,
  FixedSrc = 46,
  FixedSrcSet = 47,
  FixedSrcSetWebp = 48,
  FixedSrcWebp = 49,
  FixedTracedSvg = 50,
  FixedWidth = 51,
  FluidAspectRatio = 52,
  FluidBase64 = 53,
  FluidOriginalImg = 54,
  FluidOriginalName = 55,
  FluidPresentationHeight = 56,
  FluidPresentationWidth = 57,
  FluidSizes = 58,
  FluidSrc = 59,
  FluidSrcSet = 60,
  FluidSrcSetWebp = 61,
  FluidSrcWebp = 62,
  FluidTracedSvg = 63,
  GatsbyImageData = 64,
  Id = 65,
  InternalContent = 66,
  InternalContentDigest = 67,
  InternalContentFilePath = 68,
  InternalDescription = 69,
  InternalFieldOwners = 70,
  InternalIgnoreType = 71,
  InternalMediaType = 72,
  InternalOwner = 73,
  InternalType = 74,
  OriginalHeight = 75,
  OriginalSrc = 76,
  OriginalWidth = 77,
  ParentChildren = 78,
  ParentChildrenChildren = 79,
  ParentChildrenChildrenChildren = 80,
  ParentChildrenChildrenId = 81,
  ParentChildrenId = 82,
  ParentChildrenInternalContent = 83,
  ParentChildrenInternalContentDigest = 84,
  ParentChildrenInternalContentFilePath = 85,
  ParentChildrenInternalDescription = 86,
  ParentChildrenInternalFieldOwners = 87,
  ParentChildrenInternalIgnoreType = 88,
  ParentChildrenInternalMediaType = 89,
  ParentChildrenInternalOwner = 90,
  ParentChildrenInternalType = 91,
  ParentChildrenParentChildren = 92,
  ParentChildrenParentId = 93,
  ParentId = 94,
  ParentInternalContent = 95,
  ParentInternalContentDigest = 96,
  ParentInternalContentFilePath = 97,
  ParentInternalDescription = 98,
  ParentInternalFieldOwners = 99,
  ParentInternalIgnoreType = 100,
  ParentInternalMediaType = 101,
  ParentInternalOwner = 102,
  ParentInternalType = 103,
  ParentParentChildren = 104,
  ParentParentChildrenChildren = 105,
  ParentParentChildrenId = 106,
  ParentParentId = 107,
  ParentParentInternalContent = 108,
  ParentParentInternalContentDigest = 109,
  ParentParentInternalContentFilePath = 110,
  ParentParentInternalDescription = 111,
  ParentParentInternalFieldOwners = 112,
  ParentParentInternalIgnoreType = 113,
  ParentParentInternalMediaType = 114,
  ParentParentInternalOwner = 115,
  ParentParentInternalType = 116,
  ParentParentParentChildren = 117,
  ParentParentParentId = 118,
  ResizeAspectRatio = 119,
  ResizeHeight = 120,
  ResizeOriginalName = 121,
  ResizeSrc = 122,
  ResizeTracedSvg = 123,
  ResizeWidth = 124
}

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
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
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

export type Locale = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly data: Maybe<Scalars['String']>;
  readonly fileAbsolutePath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly language: Maybe<Scalars['String']>;
  readonly ns: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
};

export type LocaleConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<LocaleEdge>;
  readonly group: ReadonlyArray<LocaleGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Locale>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type LocaleConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionGroupArgs = {
  field: LocaleFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type LocaleConnectionMaxArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionMinArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleConnectionSumArgs = {
  field: LocaleFieldsEnum;
};

export type LocaleEdge = {
  readonly next: Maybe<Locale>;
  readonly node: Locale;
  readonly previous: Maybe<Locale>;
};

export enum LocaleFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  Data = 42,
  FileAbsolutePath = 43,
  Id = 44,
  InternalContent = 45,
  InternalContentDigest = 46,
  InternalContentFilePath = 47,
  InternalDescription = 48,
  InternalFieldOwners = 49,
  InternalIgnoreType = 50,
  InternalMediaType = 51,
  InternalOwner = 52,
  InternalType = 53,
  Language = 54,
  Ns = 55,
  ParentChildren = 56,
  ParentChildrenChildren = 57,
  ParentChildrenChildrenChildren = 58,
  ParentChildrenChildrenId = 59,
  ParentChildrenId = 60,
  ParentChildrenInternalContent = 61,
  ParentChildrenInternalContentDigest = 62,
  ParentChildrenInternalContentFilePath = 63,
  ParentChildrenInternalDescription = 64,
  ParentChildrenInternalFieldOwners = 65,
  ParentChildrenInternalIgnoreType = 66,
  ParentChildrenInternalMediaType = 67,
  ParentChildrenInternalOwner = 68,
  ParentChildrenInternalType = 69,
  ParentChildrenParentChildren = 70,
  ParentChildrenParentId = 71,
  ParentId = 72,
  ParentInternalContent = 73,
  ParentInternalContentDigest = 74,
  ParentInternalContentFilePath = 75,
  ParentInternalDescription = 76,
  ParentInternalFieldOwners = 77,
  ParentInternalIgnoreType = 78,
  ParentInternalMediaType = 79,
  ParentInternalOwner = 80,
  ParentInternalType = 81,
  ParentParentChildren = 82,
  ParentParentChildrenChildren = 83,
  ParentParentChildrenId = 84,
  ParentParentId = 85,
  ParentParentInternalContent = 86,
  ParentParentInternalContentDigest = 87,
  ParentParentInternalContentFilePath = 88,
  ParentParentInternalDescription = 89,
  ParentParentInternalFieldOwners = 90,
  ParentParentInternalIgnoreType = 91,
  ParentParentInternalMediaType = 92,
  ParentParentInternalOwner = 93,
  ParentParentInternalType = 94,
  ParentParentParentChildren = 95,
  ParentParentParentId = 96
}

export type LocaleFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly language: InputMaybe<StringQueryOperatorInput>;
  readonly ns: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

export type LocaleFilterListInput = {
  readonly elemMatch: InputMaybe<LocaleFilterInput>;
};

export type LocaleGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<LocaleEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<LocaleGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Locale>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


export type LocaleGroupConnectionDistinctArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionGroupArgs = {
  field: LocaleFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type LocaleGroupConnectionMaxArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionMinArgs = {
  field: LocaleFieldsEnum;
};


export type LocaleGroupConnectionSumArgs = {
  field: LocaleFieldsEnum;
};

export type LocaleSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<LocaleFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
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
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  readonly next: Maybe<Mdx>;
  readonly node: Mdx;
  readonly previous: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
  Body = 0,
  Children = 1,
  ChildrenChildren = 2,
  ChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenChildren = 4,
  ChildrenChildrenChildrenId = 5,
  ChildrenChildrenId = 6,
  ChildrenChildrenInternalContent = 7,
  ChildrenChildrenInternalContentDigest = 8,
  ChildrenChildrenInternalContentFilePath = 9,
  ChildrenChildrenInternalDescription = 10,
  ChildrenChildrenInternalFieldOwners = 11,
  ChildrenChildrenInternalIgnoreType = 12,
  ChildrenChildrenInternalMediaType = 13,
  ChildrenChildrenInternalOwner = 14,
  ChildrenChildrenInternalType = 15,
  ChildrenChildrenParentChildren = 16,
  ChildrenChildrenParentId = 17,
  ChildrenId = 18,
  ChildrenInternalContent = 19,
  ChildrenInternalContentDigest = 20,
  ChildrenInternalContentFilePath = 21,
  ChildrenInternalDescription = 22,
  ChildrenInternalFieldOwners = 23,
  ChildrenInternalIgnoreType = 24,
  ChildrenInternalMediaType = 25,
  ChildrenInternalOwner = 26,
  ChildrenInternalType = 27,
  ChildrenParentChildren = 28,
  ChildrenParentChildrenChildren = 29,
  ChildrenParentChildrenId = 30,
  ChildrenParentId = 31,
  ChildrenParentInternalContent = 32,
  ChildrenParentInternalContentDigest = 33,
  ChildrenParentInternalContentFilePath = 34,
  ChildrenParentInternalDescription = 35,
  ChildrenParentInternalFieldOwners = 36,
  ChildrenParentInternalIgnoreType = 37,
  ChildrenParentInternalMediaType = 38,
  ChildrenParentInternalOwner = 39,
  ChildrenParentInternalType = 40,
  ChildrenParentParentChildren = 41,
  ChildrenParentParentId = 42,
  Excerpt = 43,
  FileAbsolutePath = 44,
  FrontmatterTitle = 45,
  Headings = 46,
  HeadingsDepth = 47,
  HeadingsValue = 48,
  Html = 49,
  Id = 50,
  InternalContent = 51,
  InternalContentDigest = 52,
  InternalContentFilePath = 53,
  InternalDescription = 54,
  InternalFieldOwners = 55,
  InternalIgnoreType = 56,
  InternalMediaType = 57,
  InternalOwner = 58,
  InternalType = 59,
  MdxAst = 60,
  ParentChildren = 61,
  ParentChildrenChildren = 62,
  ParentChildrenChildrenChildren = 63,
  ParentChildrenChildrenId = 64,
  ParentChildrenId = 65,
  ParentChildrenInternalContent = 66,
  ParentChildrenInternalContentDigest = 67,
  ParentChildrenInternalContentFilePath = 68,
  ParentChildrenInternalDescription = 69,
  ParentChildrenInternalFieldOwners = 70,
  ParentChildrenInternalIgnoreType = 71,
  ParentChildrenInternalMediaType = 72,
  ParentChildrenInternalOwner = 73,
  ParentChildrenInternalType = 74,
  ParentChildrenParentChildren = 75,
  ParentChildrenParentId = 76,
  ParentId = 77,
  ParentInternalContent = 78,
  ParentInternalContentDigest = 79,
  ParentInternalContentFilePath = 80,
  ParentInternalDescription = 81,
  ParentInternalFieldOwners = 82,
  ParentInternalIgnoreType = 83,
  ParentInternalMediaType = 84,
  ParentInternalOwner = 85,
  ParentInternalType = 86,
  ParentParentChildren = 87,
  ParentParentChildrenChildren = 88,
  ParentParentChildrenId = 89,
  ParentParentId = 90,
  ParentParentInternalContent = 91,
  ParentParentInternalContentDigest = 92,
  ParentParentInternalContentFilePath = 93,
  ParentParentInternalDescription = 94,
  ParentParentInternalFieldOwners = 95,
  ParentParentInternalIgnoreType = 96,
  ParentParentInternalMediaType = 97,
  ParentParentInternalOwner = 98,
  ParentParentInternalType = 99,
  ParentParentParentChildren = 100,
  ParentParentParentId = 101,
  RawBody = 102,
  Slug = 103,
  TableOfContents = 104,
  TimeToRead = 105,
  WordCountParagraphs = 106,
  WordCountSentences = 107,
  WordCountWords = 108
}

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

export type MdxFrontmatterFilterInput = {
  readonly title: InputMaybe<StringQueryOperatorInput>;
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
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  readonly depth: Maybe<Scalars['Int']>;
  readonly value: Maybe<Scalars['String']>;
};

export type MdxHeadingMdxFilterInput = {
  readonly depth: InputMaybe<IntQueryOperatorInput>;
  readonly value: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  readonly elemMatch: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<MdxFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  readonly paragraphs: InputMaybe<IntQueryOperatorInput>;
  readonly sentences: InputMaybe<IntQueryOperatorInput>;
  readonly words: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
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
  readonly allLocale: LocaleConnection;
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
  readonly locale: Maybe<Locale>;
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
  sort: InputMaybe<ContentfulAssetSortInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter: InputMaybe<ContentfulBlogPostFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulBlogPostSortInput>;
};


export type QueryAllContentfulBlogPostContentTextNodeArgs = {
  filter: InputMaybe<ContentfulBlogPostContentTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulBlogPostContentTextNodeSortInput>;
};


export type QueryAllContentfulCategoryArgs = {
  filter: InputMaybe<ContentfulCategoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulCategorySortInput>;
};


export type QueryAllContentfulContactArgs = {
  filter: InputMaybe<ContentfulContactFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulContactSortInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter: InputMaybe<ContentfulContentTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulContentTypeSortInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter: InputMaybe<ContentfulEntryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulEntrySortInput>;
};


export type QueryAllContentfulHelloArgs = {
  filter: InputMaybe<ContentfulHelloFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulHelloSortInput>;
};


export type QueryAllContentfulHistoryArgs = {
  filter: InputMaybe<ContentfulHistoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulHistorySortInput>;
};


export type QueryAllContentfulIconArgs = {
  filter: InputMaybe<ContentfulIconFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulIconSortInput>;
};


export type QueryAllContentfulIconSvgTextNodeArgs = {
  filter: InputMaybe<ContentfulIconSvgTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulIconSvgTextNodeSortInput>;
};


export type QueryAllContentfulOssArgs = {
  filter: InputMaybe<ContentfulOssFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulOssSortInput>;
};


export type QueryAllContentfulOssDetailTextNodeArgs = {
  filter: InputMaybe<ContentfulOssDetailTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulOssDetailTextNodeSortInput>;
};


export type QueryAllContentfulProjectArgs = {
  filter: InputMaybe<ContentfulProjectFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulProjectSortInput>;
};


export type QueryAllContentfulProjectDetailTextNodeArgs = {
  filter: InputMaybe<ContentfulProjectDetailTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulProjectDetailTextNodeSortInput>;
};


export type QueryAllContentfulQualificationArgs = {
  filter: InputMaybe<ContentfulQualificationFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulQualificationSortInput>;
};


export type QueryAllContentfulQualificationMapArgs = {
  filter: InputMaybe<ContentfulQualificationMapFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulQualificationMapSortInput>;
};


export type QueryAllContentfulSkillGrpupArgs = {
  filter: InputMaybe<ContentfulSkillGrpupFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulSkillGrpupSortInput>;
};


export type QueryAllContentfulSkillMapArgs = {
  filter: InputMaybe<ContentfulSkillMapFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulSkillMapSortInput>;
};


export type QueryAllContentfulTagArgs = {
  filter: InputMaybe<ContentfulTagFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulTagSortInput>;
};


export type QueryAllContentfulWhatICanDoArgs = {
  filter: InputMaybe<ContentfulWhatICanDoFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulWhatICanDoSortInput>;
};


export type QueryAllDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllLocaleArgs = {
  filter: InputMaybe<LocaleFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<LocaleSortInput>;
};


export type QueryAllMdxArgs = {
  filter: InputMaybe<MdxFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<MdxSortInput>;
};


export type QueryAllSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePluginSortInput>;
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
  thumbnail: InputMaybe<ContentfulAssetFilterInput>;
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
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  qualification_map: InputMaybe<ContentfulQualificationMapFilterListInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulQualificationSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
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
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  childLocale: InputMaybe<LocaleFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  childrenLocale: InputMaybe<LocaleFilterListInput>;
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


export type QueryLocaleArgs = {
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<StringQueryOperatorInput>;
  fileAbsolutePath: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  language: InputMaybe<StringQueryOperatorInput>;
  ns: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
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

export type RemoteFileResizeFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
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
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 0,
  Children = 1,
  ChildrenChildren = 2,
  ChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenChildren = 4,
  ChildrenChildrenChildrenId = 5,
  ChildrenChildrenId = 6,
  ChildrenChildrenInternalContent = 7,
  ChildrenChildrenInternalContentDigest = 8,
  ChildrenChildrenInternalContentFilePath = 9,
  ChildrenChildrenInternalDescription = 10,
  ChildrenChildrenInternalFieldOwners = 11,
  ChildrenChildrenInternalIgnoreType = 12,
  ChildrenChildrenInternalMediaType = 13,
  ChildrenChildrenInternalOwner = 14,
  ChildrenChildrenInternalType = 15,
  ChildrenChildrenParentChildren = 16,
  ChildrenChildrenParentId = 17,
  ChildrenId = 18,
  ChildrenInternalContent = 19,
  ChildrenInternalContentDigest = 20,
  ChildrenInternalContentFilePath = 21,
  ChildrenInternalDescription = 22,
  ChildrenInternalFieldOwners = 23,
  ChildrenInternalIgnoreType = 24,
  ChildrenInternalMediaType = 25,
  ChildrenInternalOwner = 26,
  ChildrenInternalType = 27,
  ChildrenParentChildren = 28,
  ChildrenParentChildrenChildren = 29,
  ChildrenParentChildrenId = 30,
  ChildrenParentId = 31,
  ChildrenParentInternalContent = 32,
  ChildrenParentInternalContentDigest = 33,
  ChildrenParentInternalContentFilePath = 34,
  ChildrenParentInternalDescription = 35,
  ChildrenParentInternalFieldOwners = 36,
  ChildrenParentInternalIgnoreType = 37,
  ChildrenParentInternalMediaType = 38,
  ChildrenParentInternalOwner = 39,
  ChildrenParentInternalType = 40,
  ChildrenParentParentChildren = 41,
  ChildrenParentParentId = 42,
  Id = 43,
  InternalContent = 44,
  InternalContentDigest = 45,
  InternalContentFilePath = 46,
  InternalDescription = 47,
  InternalFieldOwners = 48,
  InternalIgnoreType = 49,
  InternalMediaType = 50,
  InternalOwner = 51,
  InternalType = 52,
  ParentChildren = 53,
  ParentChildrenChildren = 54,
  ParentChildrenChildrenChildren = 55,
  ParentChildrenChildrenId = 56,
  ParentChildrenId = 57,
  ParentChildrenInternalContent = 58,
  ParentChildrenInternalContentDigest = 59,
  ParentChildrenInternalContentFilePath = 60,
  ParentChildrenInternalDescription = 61,
  ParentChildrenInternalFieldOwners = 62,
  ParentChildrenInternalIgnoreType = 63,
  ParentChildrenInternalMediaType = 64,
  ParentChildrenInternalOwner = 65,
  ParentChildrenInternalType = 66,
  ParentChildrenParentChildren = 67,
  ParentChildrenParentId = 68,
  ParentId = 69,
  ParentInternalContent = 70,
  ParentInternalContentDigest = 71,
  ParentInternalContentFilePath = 72,
  ParentInternalDescription = 73,
  ParentInternalFieldOwners = 74,
  ParentInternalIgnoreType = 75,
  ParentInternalMediaType = 76,
  ParentInternalOwner = 77,
  ParentInternalType = 78,
  ParentParentChildren = 79,
  ParentParentChildrenChildren = 80,
  ParentParentChildrenId = 81,
  ParentParentId = 82,
  ParentParentInternalContent = 83,
  ParentParentInternalContentDigest = 84,
  ParentParentInternalContentFilePath = 85,
  ParentParentInternalDescription = 86,
  ParentParentInternalFieldOwners = 87,
  ParentParentInternalIgnoreType = 88,
  ParentParentInternalMediaType = 89,
  ParentParentInternalOwner = 90,
  ParentParentInternalType = 91,
  ParentParentParentChildren = 92,
  ParentParentParentId = 93
}

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
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
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
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 0,
  Children = 1,
  ChildrenChildren = 2,
  ChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenChildren = 4,
  ChildrenChildrenChildrenId = 5,
  ChildrenChildrenId = 6,
  ChildrenChildrenInternalContent = 7,
  ChildrenChildrenInternalContentDigest = 8,
  ChildrenChildrenInternalContentFilePath = 9,
  ChildrenChildrenInternalDescription = 10,
  ChildrenChildrenInternalFieldOwners = 11,
  ChildrenChildrenInternalIgnoreType = 12,
  ChildrenChildrenInternalMediaType = 13,
  ChildrenChildrenInternalOwner = 14,
  ChildrenChildrenInternalType = 15,
  ChildrenChildrenParentChildren = 16,
  ChildrenChildrenParentId = 17,
  ChildrenId = 18,
  ChildrenInternalContent = 19,
  ChildrenInternalContentDigest = 20,
  ChildrenInternalContentFilePath = 21,
  ChildrenInternalDescription = 22,
  ChildrenInternalFieldOwners = 23,
  ChildrenInternalIgnoreType = 24,
  ChildrenInternalMediaType = 25,
  ChildrenInternalOwner = 26,
  ChildrenInternalType = 27,
  ChildrenParentChildren = 28,
  ChildrenParentChildrenChildren = 29,
  ChildrenParentChildrenId = 30,
  ChildrenParentId = 31,
  ChildrenParentInternalContent = 32,
  ChildrenParentInternalContentDigest = 33,
  ChildrenParentInternalContentFilePath = 34,
  ChildrenParentInternalDescription = 35,
  ChildrenParentInternalFieldOwners = 36,
  ChildrenParentInternalIgnoreType = 37,
  ChildrenParentInternalMediaType = 38,
  ChildrenParentInternalOwner = 39,
  ChildrenParentInternalType = 40,
  ChildrenParentParentChildren = 41,
  ChildrenParentParentId = 42,
  GraphqlTypegen = 43,
  Host = 44,
  Id = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  JsxImportSource = 55,
  JsxRuntime = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  PathPrefix = 98,
  Polyfill = 99,
  Port = 100,
  SiteMetadataDescription = 101,
  SiteMetadataSiteUrl = 102,
  SiteMetadataTitle = 103,
  TrailingSlash = 104
}

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
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 0,
  Children = 1,
  ChildrenChildren = 2,
  ChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenChildren = 4,
  ChildrenChildrenChildrenId = 5,
  ChildrenChildrenId = 6,
  ChildrenChildrenInternalContent = 7,
  ChildrenChildrenInternalContentDigest = 8,
  ChildrenChildrenInternalContentFilePath = 9,
  ChildrenChildrenInternalDescription = 10,
  ChildrenChildrenInternalFieldOwners = 11,
  ChildrenChildrenInternalIgnoreType = 12,
  ChildrenChildrenInternalMediaType = 13,
  ChildrenChildrenInternalOwner = 14,
  ChildrenChildrenInternalType = 15,
  ChildrenChildrenParentChildren = 16,
  ChildrenChildrenParentId = 17,
  ChildrenId = 18,
  ChildrenInternalContent = 19,
  ChildrenInternalContentDigest = 20,
  ChildrenInternalContentFilePath = 21,
  ChildrenInternalDescription = 22,
  ChildrenInternalFieldOwners = 23,
  ChildrenInternalIgnoreType = 24,
  ChildrenInternalMediaType = 25,
  ChildrenInternalOwner = 26,
  ChildrenInternalType = 27,
  ChildrenParentChildren = 28,
  ChildrenParentChildrenChildren = 29,
  ChildrenParentChildrenId = 30,
  ChildrenParentId = 31,
  ChildrenParentInternalContent = 32,
  ChildrenParentInternalContentDigest = 33,
  ChildrenParentInternalContentFilePath = 34,
  ChildrenParentInternalDescription = 35,
  ChildrenParentInternalFieldOwners = 36,
  ChildrenParentInternalIgnoreType = 37,
  ChildrenParentInternalMediaType = 38,
  ChildrenParentInternalOwner = 39,
  ChildrenParentInternalType = 40,
  ChildrenParentParentChildren = 41,
  ChildrenParentParentId = 42,
  FunctionRoute = 43,
  Id = 44,
  InternalContent = 45,
  InternalContentDigest = 46,
  InternalContentFilePath = 47,
  InternalDescription = 48,
  InternalFieldOwners = 49,
  InternalIgnoreType = 50,
  InternalMediaType = 51,
  InternalOwner = 52,
  InternalType = 53,
  MatchPath = 54,
  OriginalAbsoluteFilePath = 55,
  OriginalRelativeFilePath = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  PluginName = 98,
  RelativeCompiledFilePath = 99
}

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
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
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
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
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
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 0,
  ChildrenChildren = 1,
  ChildrenChildrenChildren = 2,
  ChildrenChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenId = 4,
  ChildrenChildrenId = 5,
  ChildrenChildrenInternalContent = 6,
  ChildrenChildrenInternalContentDigest = 7,
  ChildrenChildrenInternalContentFilePath = 8,
  ChildrenChildrenInternalDescription = 9,
  ChildrenChildrenInternalFieldOwners = 10,
  ChildrenChildrenInternalIgnoreType = 11,
  ChildrenChildrenInternalMediaType = 12,
  ChildrenChildrenInternalOwner = 13,
  ChildrenChildrenInternalType = 14,
  ChildrenChildrenParentChildren = 15,
  ChildrenChildrenParentId = 16,
  ChildrenId = 17,
  ChildrenInternalContent = 18,
  ChildrenInternalContentDigest = 19,
  ChildrenInternalContentFilePath = 20,
  ChildrenInternalDescription = 21,
  ChildrenInternalFieldOwners = 22,
  ChildrenInternalIgnoreType = 23,
  ChildrenInternalMediaType = 24,
  ChildrenInternalOwner = 25,
  ChildrenInternalType = 26,
  ChildrenParentChildren = 27,
  ChildrenParentChildrenChildren = 28,
  ChildrenParentChildrenId = 29,
  ChildrenParentId = 30,
  ChildrenParentInternalContent = 31,
  ChildrenParentInternalContentDigest = 32,
  ChildrenParentInternalContentFilePath = 33,
  ChildrenParentInternalDescription = 34,
  ChildrenParentInternalFieldOwners = 35,
  ChildrenParentInternalIgnoreType = 36,
  ChildrenParentInternalMediaType = 37,
  ChildrenParentInternalOwner = 38,
  ChildrenParentInternalType = 39,
  ChildrenParentParentChildren = 40,
  ChildrenParentParentId = 41,
  Component = 42,
  ComponentChunkName = 43,
  Id = 44,
  InternalComponentName = 45,
  InternalContent = 46,
  InternalContentDigest = 47,
  InternalContentFilePath = 48,
  InternalDescription = 49,
  InternalFieldOwners = 50,
  InternalIgnoreType = 51,
  InternalMediaType = 52,
  InternalOwner = 53,
  InternalType = 54,
  MatchPath = 55,
  PageContext = 56,
  ParentChildren = 57,
  ParentChildrenChildren = 58,
  ParentChildrenChildrenChildren = 59,
  ParentChildrenChildrenId = 60,
  ParentChildrenId = 61,
  ParentChildrenInternalContent = 62,
  ParentChildrenInternalContentDigest = 63,
  ParentChildrenInternalContentFilePath = 64,
  ParentChildrenInternalDescription = 65,
  ParentChildrenInternalFieldOwners = 66,
  ParentChildrenInternalIgnoreType = 67,
  ParentChildrenInternalMediaType = 68,
  ParentChildrenInternalOwner = 69,
  ParentChildrenInternalType = 70,
  ParentChildrenParentChildren = 71,
  ParentChildrenParentId = 72,
  ParentId = 73,
  ParentInternalContent = 74,
  ParentInternalContentDigest = 75,
  ParentInternalContentFilePath = 76,
  ParentInternalDescription = 77,
  ParentInternalFieldOwners = 78,
  ParentInternalIgnoreType = 79,
  ParentInternalMediaType = 80,
  ParentInternalOwner = 81,
  ParentInternalType = 82,
  ParentParentChildren = 83,
  ParentParentChildrenChildren = 84,
  ParentParentChildrenId = 85,
  ParentParentId = 86,
  ParentParentInternalContent = 87,
  ParentParentInternalContentDigest = 88,
  ParentParentInternalContentFilePath = 89,
  ParentParentInternalDescription = 90,
  ParentParentInternalFieldOwners = 91,
  ParentParentInternalIgnoreType = 92,
  ParentParentInternalMediaType = 93,
  ParentParentInternalOwner = 94,
  ParentParentInternalType = 95,
  ParentParentParentChildren = 96,
  ParentParentParentId = 97,
  Path = 98,
  PluginCreatorBrowserApIs = 99,
  PluginCreatorChildren = 100,
  PluginCreatorChildrenChildren = 101,
  PluginCreatorChildrenChildrenChildren = 102,
  PluginCreatorChildrenChildrenId = 103,
  PluginCreatorChildrenId = 104,
  PluginCreatorChildrenInternalContent = 105,
  PluginCreatorChildrenInternalContentDigest = 106,
  PluginCreatorChildrenInternalContentFilePath = 107,
  PluginCreatorChildrenInternalDescription = 108,
  PluginCreatorChildrenInternalFieldOwners = 109,
  PluginCreatorChildrenInternalIgnoreType = 110,
  PluginCreatorChildrenInternalMediaType = 111,
  PluginCreatorChildrenInternalOwner = 112,
  PluginCreatorChildrenInternalType = 113,
  PluginCreatorChildrenParentChildren = 114,
  PluginCreatorChildrenParentId = 115,
  PluginCreatorId = 116,
  PluginCreatorInternalContent = 117,
  PluginCreatorInternalContentDigest = 118,
  PluginCreatorInternalContentFilePath = 119,
  PluginCreatorInternalDescription = 120,
  PluginCreatorInternalFieldOwners = 121,
  PluginCreatorInternalIgnoreType = 122,
  PluginCreatorInternalMediaType = 123,
  PluginCreatorInternalOwner = 124,
  PluginCreatorInternalType = 125,
  PluginCreatorName = 126,
  PluginCreatorNodeApIs = 127,
  PluginCreatorPackageJson = 128,
  PluginCreatorParentChildren = 129,
  PluginCreatorParentChildrenChildren = 130,
  PluginCreatorParentChildrenId = 131,
  PluginCreatorParentId = 132,
  PluginCreatorParentInternalContent = 133,
  PluginCreatorParentInternalContentDigest = 134,
  PluginCreatorParentInternalContentFilePath = 135,
  PluginCreatorParentInternalDescription = 136,
  PluginCreatorParentInternalFieldOwners = 137,
  PluginCreatorParentInternalIgnoreType = 138,
  PluginCreatorParentInternalMediaType = 139,
  PluginCreatorParentInternalOwner = 140,
  PluginCreatorParentInternalType = 141,
  PluginCreatorParentParentChildren = 142,
  PluginCreatorParentParentId = 143,
  PluginCreatorPluginFilepath = 144,
  PluginCreatorPluginOptions = 145,
  PluginCreatorResolve = 146,
  PluginCreatorSsrApIs = 147,
  PluginCreatorVersion = 148
}

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
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePageFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
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
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 0,
  Children = 1,
  ChildrenChildren = 2,
  ChildrenChildrenChildren = 3,
  ChildrenChildrenChildrenChildren = 4,
  ChildrenChildrenChildrenId = 5,
  ChildrenChildrenId = 6,
  ChildrenChildrenInternalContent = 7,
  ChildrenChildrenInternalContentDigest = 8,
  ChildrenChildrenInternalContentFilePath = 9,
  ChildrenChildrenInternalDescription = 10,
  ChildrenChildrenInternalFieldOwners = 11,
  ChildrenChildrenInternalIgnoreType = 12,
  ChildrenChildrenInternalMediaType = 13,
  ChildrenChildrenInternalOwner = 14,
  ChildrenChildrenInternalType = 15,
  ChildrenChildrenParentChildren = 16,
  ChildrenChildrenParentId = 17,
  ChildrenId = 18,
  ChildrenInternalContent = 19,
  ChildrenInternalContentDigest = 20,
  ChildrenInternalContentFilePath = 21,
  ChildrenInternalDescription = 22,
  ChildrenInternalFieldOwners = 23,
  ChildrenInternalIgnoreType = 24,
  ChildrenInternalMediaType = 25,
  ChildrenInternalOwner = 26,
  ChildrenInternalType = 27,
  ChildrenParentChildren = 28,
  ChildrenParentChildrenChildren = 29,
  ChildrenParentChildrenId = 30,
  ChildrenParentId = 31,
  ChildrenParentInternalContent = 32,
  ChildrenParentInternalContentDigest = 33,
  ChildrenParentInternalContentFilePath = 34,
  ChildrenParentInternalDescription = 35,
  ChildrenParentInternalFieldOwners = 36,
  ChildrenParentInternalIgnoreType = 37,
  ChildrenParentInternalMediaType = 38,
  ChildrenParentInternalOwner = 39,
  ChildrenParentInternalType = 40,
  ChildrenParentParentChildren = 41,
  ChildrenParentParentId = 42,
  Id = 43,
  InternalContent = 44,
  InternalContentDigest = 45,
  InternalContentFilePath = 46,
  InternalDescription = 47,
  InternalFieldOwners = 48,
  InternalIgnoreType = 49,
  InternalMediaType = 50,
  InternalOwner = 51,
  InternalType = 52,
  Name = 53,
  NodeApIs = 54,
  PackageJson = 55,
  ParentChildren = 56,
  ParentChildrenChildren = 57,
  ParentChildrenChildrenChildren = 58,
  ParentChildrenChildrenId = 59,
  ParentChildrenId = 60,
  ParentChildrenInternalContent = 61,
  ParentChildrenInternalContentDigest = 62,
  ParentChildrenInternalContentFilePath = 63,
  ParentChildrenInternalDescription = 64,
  ParentChildrenInternalFieldOwners = 65,
  ParentChildrenInternalIgnoreType = 66,
  ParentChildrenInternalMediaType = 67,
  ParentChildrenInternalOwner = 68,
  ParentChildrenInternalType = 69,
  ParentChildrenParentChildren = 70,
  ParentChildrenParentId = 71,
  ParentId = 72,
  ParentInternalContent = 73,
  ParentInternalContentDigest = 74,
  ParentInternalContentFilePath = 75,
  ParentInternalDescription = 76,
  ParentInternalFieldOwners = 77,
  ParentInternalIgnoreType = 78,
  ParentInternalMediaType = 79,
  ParentInternalOwner = 80,
  ParentInternalType = 81,
  ParentParentChildren = 82,
  ParentParentChildrenChildren = 83,
  ParentParentChildrenId = 84,
  ParentParentId = 85,
  ParentParentInternalContent = 86,
  ParentParentInternalContentDigest = 87,
  ParentParentInternalContentFilePath = 88,
  ParentParentInternalDescription = 89,
  ParentParentInternalFieldOwners = 90,
  ParentParentInternalIgnoreType = 91,
  ParentParentInternalMediaType = 92,
  ParentParentInternalOwner = 93,
  ParentParentInternalType = 94,
  ParentParentParentChildren = 95,
  ParentParentParentId = 96,
  PluginFilepath = 97,
  PluginOptions = 98,
  Resolve = 99,
  SsrApIs = 100,
  Version = 101
}

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
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePluginFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
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
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeConnectionGroupArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogPostContentTextNodeConnectionMaxArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeConnectionMinArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeConnectionSumArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};

export type ContentfulBlogPostContentTextNodeEdge = {
  readonly next: Maybe<ContentfulBlogPostContentTextNode>;
  readonly node: ContentfulBlogPostContentTextNode;
  readonly previous: Maybe<ContentfulBlogPostContentTextNode>;
};

export enum ContentfulBlogPostContentTextNodeFieldsEnum {
  ChildMdxBody = 0,
  ChildMdxChildren = 1,
  ChildMdxChildrenChildren = 2,
  ChildMdxChildrenChildrenChildren = 3,
  ChildMdxChildrenChildrenId = 4,
  ChildMdxChildrenId = 5,
  ChildMdxChildrenInternalContent = 6,
  ChildMdxChildrenInternalContentDigest = 7,
  ChildMdxChildrenInternalContentFilePath = 8,
  ChildMdxChildrenInternalDescription = 9,
  ChildMdxChildrenInternalFieldOwners = 10,
  ChildMdxChildrenInternalIgnoreType = 11,
  ChildMdxChildrenInternalMediaType = 12,
  ChildMdxChildrenInternalOwner = 13,
  ChildMdxChildrenInternalType = 14,
  ChildMdxChildrenParentChildren = 15,
  ChildMdxChildrenParentId = 16,
  ChildMdxExcerpt = 17,
  ChildMdxFileAbsolutePath = 18,
  ChildMdxFrontmatterTitle = 19,
  ChildMdxHeadings = 20,
  ChildMdxHeadingsDepth = 21,
  ChildMdxHeadingsValue = 22,
  ChildMdxHtml = 23,
  ChildMdxId = 24,
  ChildMdxInternalContent = 25,
  ChildMdxInternalContentDigest = 26,
  ChildMdxInternalContentFilePath = 27,
  ChildMdxInternalDescription = 28,
  ChildMdxInternalFieldOwners = 29,
  ChildMdxInternalIgnoreType = 30,
  ChildMdxInternalMediaType = 31,
  ChildMdxInternalOwner = 32,
  ChildMdxInternalType = 33,
  ChildMdxMdxAst = 34,
  ChildMdxParentChildren = 35,
  ChildMdxParentChildrenChildren = 36,
  ChildMdxParentChildrenId = 37,
  ChildMdxParentId = 38,
  ChildMdxParentInternalContent = 39,
  ChildMdxParentInternalContentDigest = 40,
  ChildMdxParentInternalContentFilePath = 41,
  ChildMdxParentInternalDescription = 42,
  ChildMdxParentInternalFieldOwners = 43,
  ChildMdxParentInternalIgnoreType = 44,
  ChildMdxParentInternalMediaType = 45,
  ChildMdxParentInternalOwner = 46,
  ChildMdxParentInternalType = 47,
  ChildMdxParentParentChildren = 48,
  ChildMdxParentParentId = 49,
  ChildMdxRawBody = 50,
  ChildMdxSlug = 51,
  ChildMdxTableOfContents = 52,
  ChildMdxTimeToRead = 53,
  ChildMdxWordCountParagraphs = 54,
  ChildMdxWordCountSentences = 55,
  ChildMdxWordCountWords = 56,
  Children = 57,
  ChildrenMdx = 58,
  ChildrenMdxBody = 59,
  ChildrenMdxChildren = 60,
  ChildrenMdxChildrenChildren = 61,
  ChildrenMdxChildrenChildrenChildren = 62,
  ChildrenMdxChildrenChildrenId = 63,
  ChildrenMdxChildrenId = 64,
  ChildrenMdxChildrenInternalContent = 65,
  ChildrenMdxChildrenInternalContentDigest = 66,
  ChildrenMdxChildrenInternalContentFilePath = 67,
  ChildrenMdxChildrenInternalDescription = 68,
  ChildrenMdxChildrenInternalFieldOwners = 69,
  ChildrenMdxChildrenInternalIgnoreType = 70,
  ChildrenMdxChildrenInternalMediaType = 71,
  ChildrenMdxChildrenInternalOwner = 72,
  ChildrenMdxChildrenInternalType = 73,
  ChildrenMdxChildrenParentChildren = 74,
  ChildrenMdxChildrenParentId = 75,
  ChildrenMdxExcerpt = 76,
  ChildrenMdxFileAbsolutePath = 77,
  ChildrenMdxFrontmatterTitle = 78,
  ChildrenMdxHeadings = 79,
  ChildrenMdxHeadingsDepth = 80,
  ChildrenMdxHeadingsValue = 81,
  ChildrenMdxHtml = 82,
  ChildrenMdxId = 83,
  ChildrenMdxInternalContent = 84,
  ChildrenMdxInternalContentDigest = 85,
  ChildrenMdxInternalContentFilePath = 86,
  ChildrenMdxInternalDescription = 87,
  ChildrenMdxInternalFieldOwners = 88,
  ChildrenMdxInternalIgnoreType = 89,
  ChildrenMdxInternalMediaType = 90,
  ChildrenMdxInternalOwner = 91,
  ChildrenMdxInternalType = 92,
  ChildrenMdxMdxAst = 93,
  ChildrenMdxParentChildren = 94,
  ChildrenMdxParentChildrenChildren = 95,
  ChildrenMdxParentChildrenId = 96,
  ChildrenMdxParentId = 97,
  ChildrenMdxParentInternalContent = 98,
  ChildrenMdxParentInternalContentDigest = 99,
  ChildrenMdxParentInternalContentFilePath = 100,
  ChildrenMdxParentInternalDescription = 101,
  ChildrenMdxParentInternalFieldOwners = 102,
  ChildrenMdxParentInternalIgnoreType = 103,
  ChildrenMdxParentInternalMediaType = 104,
  ChildrenMdxParentInternalOwner = 105,
  ChildrenMdxParentInternalType = 106,
  ChildrenMdxParentParentChildren = 107,
  ChildrenMdxParentParentId = 108,
  ChildrenMdxRawBody = 109,
  ChildrenMdxSlug = 110,
  ChildrenMdxTableOfContents = 111,
  ChildrenMdxTimeToRead = 112,
  ChildrenMdxWordCountParagraphs = 113,
  ChildrenMdxWordCountSentences = 114,
  ChildrenMdxWordCountWords = 115,
  ChildrenChildren = 116,
  ChildrenChildrenChildren = 117,
  ChildrenChildrenChildrenChildren = 118,
  ChildrenChildrenChildrenId = 119,
  ChildrenChildrenId = 120,
  ChildrenChildrenInternalContent = 121,
  ChildrenChildrenInternalContentDigest = 122,
  ChildrenChildrenInternalContentFilePath = 123,
  ChildrenChildrenInternalDescription = 124,
  ChildrenChildrenInternalFieldOwners = 125,
  ChildrenChildrenInternalIgnoreType = 126,
  ChildrenChildrenInternalMediaType = 127,
  ChildrenChildrenInternalOwner = 128,
  ChildrenChildrenInternalType = 129,
  ChildrenChildrenParentChildren = 130,
  ChildrenChildrenParentId = 131,
  ChildrenId = 132,
  ChildrenInternalContent = 133,
  ChildrenInternalContentDigest = 134,
  ChildrenInternalContentFilePath = 135,
  ChildrenInternalDescription = 136,
  ChildrenInternalFieldOwners = 137,
  ChildrenInternalIgnoreType = 138,
  ChildrenInternalMediaType = 139,
  ChildrenInternalOwner = 140,
  ChildrenInternalType = 141,
  ChildrenParentChildren = 142,
  ChildrenParentChildrenChildren = 143,
  ChildrenParentChildrenId = 144,
  ChildrenParentId = 145,
  ChildrenParentInternalContent = 146,
  ChildrenParentInternalContentDigest = 147,
  ChildrenParentInternalContentFilePath = 148,
  ChildrenParentInternalDescription = 149,
  ChildrenParentInternalFieldOwners = 150,
  ChildrenParentInternalIgnoreType = 151,
  ChildrenParentInternalMediaType = 152,
  ChildrenParentInternalOwner = 153,
  ChildrenParentInternalType = 154,
  ChildrenParentParentChildren = 155,
  ChildrenParentParentId = 156,
  Content = 157,
  Id = 158,
  InternalContent = 159,
  InternalContentDigest = 160,
  InternalContentFilePath = 161,
  InternalDescription = 162,
  InternalFieldOwners = 163,
  InternalIgnoreType = 164,
  InternalMediaType = 165,
  InternalOwner = 166,
  InternalType = 167,
  ParentChildren = 168,
  ParentChildrenChildren = 169,
  ParentChildrenChildrenChildren = 170,
  ParentChildrenChildrenId = 171,
  ParentChildrenId = 172,
  ParentChildrenInternalContent = 173,
  ParentChildrenInternalContentDigest = 174,
  ParentChildrenInternalContentFilePath = 175,
  ParentChildrenInternalDescription = 176,
  ParentChildrenInternalFieldOwners = 177,
  ParentChildrenInternalIgnoreType = 178,
  ParentChildrenInternalMediaType = 179,
  ParentChildrenInternalOwner = 180,
  ParentChildrenInternalType = 181,
  ParentChildrenParentChildren = 182,
  ParentChildrenParentId = 183,
  ParentId = 184,
  ParentInternalContent = 185,
  ParentInternalContentDigest = 186,
  ParentInternalContentFilePath = 187,
  ParentInternalDescription = 188,
  ParentInternalFieldOwners = 189,
  ParentInternalIgnoreType = 190,
  ParentInternalMediaType = 191,
  ParentInternalOwner = 192,
  ParentInternalType = 193,
  ParentParentChildren = 194,
  ParentParentChildrenChildren = 195,
  ParentParentChildrenId = 196,
  ParentParentId = 197,
  ParentParentInternalContent = 198,
  ParentParentInternalContentDigest = 199,
  ParentParentInternalContentFilePath = 200,
  ParentParentInternalDescription = 201,
  ParentParentInternalFieldOwners = 202,
  ParentParentInternalIgnoreType = 203,
  ParentParentInternalMediaType = 204,
  ParentParentInternalOwner = 205,
  ParentParentInternalType = 206,
  ParentParentParentChildren = 207,
  ParentParentParentId = 208,
  SysType = 209
}

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
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionGroupArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionMaxArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionMinArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};


export type ContentfulBlogPostContentTextNodeGroupConnectionSumArgs = {
  field: ContentfulBlogPostContentTextNodeFieldsEnum;
};

export type ContentfulBlogPostContentTextNodeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulBlogPostContentTextNodeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostContentTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostContentTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeConnectionGroupArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulIconSvgTextNodeConnectionMaxArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeConnectionMinArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeConnectionSumArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};

export type ContentfulIconSvgTextNodeEdge = {
  readonly next: Maybe<ContentfulIconSvgTextNode>;
  readonly node: ContentfulIconSvgTextNode;
  readonly previous: Maybe<ContentfulIconSvgTextNode>;
};

export enum ContentfulIconSvgTextNodeFieldsEnum {
  ChildMdxBody = 0,
  ChildMdxChildren = 1,
  ChildMdxChildrenChildren = 2,
  ChildMdxChildrenChildrenChildren = 3,
  ChildMdxChildrenChildrenId = 4,
  ChildMdxChildrenId = 5,
  ChildMdxChildrenInternalContent = 6,
  ChildMdxChildrenInternalContentDigest = 7,
  ChildMdxChildrenInternalContentFilePath = 8,
  ChildMdxChildrenInternalDescription = 9,
  ChildMdxChildrenInternalFieldOwners = 10,
  ChildMdxChildrenInternalIgnoreType = 11,
  ChildMdxChildrenInternalMediaType = 12,
  ChildMdxChildrenInternalOwner = 13,
  ChildMdxChildrenInternalType = 14,
  ChildMdxChildrenParentChildren = 15,
  ChildMdxChildrenParentId = 16,
  ChildMdxExcerpt = 17,
  ChildMdxFileAbsolutePath = 18,
  ChildMdxFrontmatterTitle = 19,
  ChildMdxHeadings = 20,
  ChildMdxHeadingsDepth = 21,
  ChildMdxHeadingsValue = 22,
  ChildMdxHtml = 23,
  ChildMdxId = 24,
  ChildMdxInternalContent = 25,
  ChildMdxInternalContentDigest = 26,
  ChildMdxInternalContentFilePath = 27,
  ChildMdxInternalDescription = 28,
  ChildMdxInternalFieldOwners = 29,
  ChildMdxInternalIgnoreType = 30,
  ChildMdxInternalMediaType = 31,
  ChildMdxInternalOwner = 32,
  ChildMdxInternalType = 33,
  ChildMdxMdxAst = 34,
  ChildMdxParentChildren = 35,
  ChildMdxParentChildrenChildren = 36,
  ChildMdxParentChildrenId = 37,
  ChildMdxParentId = 38,
  ChildMdxParentInternalContent = 39,
  ChildMdxParentInternalContentDigest = 40,
  ChildMdxParentInternalContentFilePath = 41,
  ChildMdxParentInternalDescription = 42,
  ChildMdxParentInternalFieldOwners = 43,
  ChildMdxParentInternalIgnoreType = 44,
  ChildMdxParentInternalMediaType = 45,
  ChildMdxParentInternalOwner = 46,
  ChildMdxParentInternalType = 47,
  ChildMdxParentParentChildren = 48,
  ChildMdxParentParentId = 49,
  ChildMdxRawBody = 50,
  ChildMdxSlug = 51,
  ChildMdxTableOfContents = 52,
  ChildMdxTimeToRead = 53,
  ChildMdxWordCountParagraphs = 54,
  ChildMdxWordCountSentences = 55,
  ChildMdxWordCountWords = 56,
  Children = 57,
  ChildrenMdx = 58,
  ChildrenMdxBody = 59,
  ChildrenMdxChildren = 60,
  ChildrenMdxChildrenChildren = 61,
  ChildrenMdxChildrenChildrenChildren = 62,
  ChildrenMdxChildrenChildrenId = 63,
  ChildrenMdxChildrenId = 64,
  ChildrenMdxChildrenInternalContent = 65,
  ChildrenMdxChildrenInternalContentDigest = 66,
  ChildrenMdxChildrenInternalContentFilePath = 67,
  ChildrenMdxChildrenInternalDescription = 68,
  ChildrenMdxChildrenInternalFieldOwners = 69,
  ChildrenMdxChildrenInternalIgnoreType = 70,
  ChildrenMdxChildrenInternalMediaType = 71,
  ChildrenMdxChildrenInternalOwner = 72,
  ChildrenMdxChildrenInternalType = 73,
  ChildrenMdxChildrenParentChildren = 74,
  ChildrenMdxChildrenParentId = 75,
  ChildrenMdxExcerpt = 76,
  ChildrenMdxFileAbsolutePath = 77,
  ChildrenMdxFrontmatterTitle = 78,
  ChildrenMdxHeadings = 79,
  ChildrenMdxHeadingsDepth = 80,
  ChildrenMdxHeadingsValue = 81,
  ChildrenMdxHtml = 82,
  ChildrenMdxId = 83,
  ChildrenMdxInternalContent = 84,
  ChildrenMdxInternalContentDigest = 85,
  ChildrenMdxInternalContentFilePath = 86,
  ChildrenMdxInternalDescription = 87,
  ChildrenMdxInternalFieldOwners = 88,
  ChildrenMdxInternalIgnoreType = 89,
  ChildrenMdxInternalMediaType = 90,
  ChildrenMdxInternalOwner = 91,
  ChildrenMdxInternalType = 92,
  ChildrenMdxMdxAst = 93,
  ChildrenMdxParentChildren = 94,
  ChildrenMdxParentChildrenChildren = 95,
  ChildrenMdxParentChildrenId = 96,
  ChildrenMdxParentId = 97,
  ChildrenMdxParentInternalContent = 98,
  ChildrenMdxParentInternalContentDigest = 99,
  ChildrenMdxParentInternalContentFilePath = 100,
  ChildrenMdxParentInternalDescription = 101,
  ChildrenMdxParentInternalFieldOwners = 102,
  ChildrenMdxParentInternalIgnoreType = 103,
  ChildrenMdxParentInternalMediaType = 104,
  ChildrenMdxParentInternalOwner = 105,
  ChildrenMdxParentInternalType = 106,
  ChildrenMdxParentParentChildren = 107,
  ChildrenMdxParentParentId = 108,
  ChildrenMdxRawBody = 109,
  ChildrenMdxSlug = 110,
  ChildrenMdxTableOfContents = 111,
  ChildrenMdxTimeToRead = 112,
  ChildrenMdxWordCountParagraphs = 113,
  ChildrenMdxWordCountSentences = 114,
  ChildrenMdxWordCountWords = 115,
  ChildrenChildren = 116,
  ChildrenChildrenChildren = 117,
  ChildrenChildrenChildrenChildren = 118,
  ChildrenChildrenChildrenId = 119,
  ChildrenChildrenId = 120,
  ChildrenChildrenInternalContent = 121,
  ChildrenChildrenInternalContentDigest = 122,
  ChildrenChildrenInternalContentFilePath = 123,
  ChildrenChildrenInternalDescription = 124,
  ChildrenChildrenInternalFieldOwners = 125,
  ChildrenChildrenInternalIgnoreType = 126,
  ChildrenChildrenInternalMediaType = 127,
  ChildrenChildrenInternalOwner = 128,
  ChildrenChildrenInternalType = 129,
  ChildrenChildrenParentChildren = 130,
  ChildrenChildrenParentId = 131,
  ChildrenId = 132,
  ChildrenInternalContent = 133,
  ChildrenInternalContentDigest = 134,
  ChildrenInternalContentFilePath = 135,
  ChildrenInternalDescription = 136,
  ChildrenInternalFieldOwners = 137,
  ChildrenInternalIgnoreType = 138,
  ChildrenInternalMediaType = 139,
  ChildrenInternalOwner = 140,
  ChildrenInternalType = 141,
  ChildrenParentChildren = 142,
  ChildrenParentChildrenChildren = 143,
  ChildrenParentChildrenId = 144,
  ChildrenParentId = 145,
  ChildrenParentInternalContent = 146,
  ChildrenParentInternalContentDigest = 147,
  ChildrenParentInternalContentFilePath = 148,
  ChildrenParentInternalDescription = 149,
  ChildrenParentInternalFieldOwners = 150,
  ChildrenParentInternalIgnoreType = 151,
  ChildrenParentInternalMediaType = 152,
  ChildrenParentInternalOwner = 153,
  ChildrenParentInternalType = 154,
  ChildrenParentParentChildren = 155,
  ChildrenParentParentId = 156,
  Id = 157,
  InternalContent = 158,
  InternalContentDigest = 159,
  InternalContentFilePath = 160,
  InternalDescription = 161,
  InternalFieldOwners = 162,
  InternalIgnoreType = 163,
  InternalMediaType = 164,
  InternalOwner = 165,
  InternalType = 166,
  ParentChildren = 167,
  ParentChildrenChildren = 168,
  ParentChildrenChildrenChildren = 169,
  ParentChildrenChildrenId = 170,
  ParentChildrenId = 171,
  ParentChildrenInternalContent = 172,
  ParentChildrenInternalContentDigest = 173,
  ParentChildrenInternalContentFilePath = 174,
  ParentChildrenInternalDescription = 175,
  ParentChildrenInternalFieldOwners = 176,
  ParentChildrenInternalIgnoreType = 177,
  ParentChildrenInternalMediaType = 178,
  ParentChildrenInternalOwner = 179,
  ParentChildrenInternalType = 180,
  ParentChildrenParentChildren = 181,
  ParentChildrenParentId = 182,
  ParentId = 183,
  ParentInternalContent = 184,
  ParentInternalContentDigest = 185,
  ParentInternalContentFilePath = 186,
  ParentInternalDescription = 187,
  ParentInternalFieldOwners = 188,
  ParentInternalIgnoreType = 189,
  ParentInternalMediaType = 190,
  ParentInternalOwner = 191,
  ParentInternalType = 192,
  ParentParentChildren = 193,
  ParentParentChildrenChildren = 194,
  ParentParentChildrenId = 195,
  ParentParentId = 196,
  ParentParentInternalContent = 197,
  ParentParentInternalContentDigest = 198,
  ParentParentInternalContentFilePath = 199,
  ParentParentInternalDescription = 200,
  ParentParentInternalFieldOwners = 201,
  ParentParentInternalIgnoreType = 202,
  ParentParentInternalMediaType = 203,
  ParentParentInternalOwner = 204,
  ParentParentInternalType = 205,
  ParentParentParentChildren = 206,
  ParentParentParentId = 207,
  Svg = 208,
  SysType = 209
}

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
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeGroupConnectionGroupArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulIconSvgTextNodeGroupConnectionMaxArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeGroupConnectionMinArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};


export type ContentfulIconSvgTextNodeGroupConnectionSumArgs = {
  field: ContentfulIconSvgTextNodeFieldsEnum;
};

export type ContentfulIconSvgTextNodeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulIconSvgTextNodeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulIconSvgTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulIconSvgTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeConnectionGroupArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulOssDetailTextNodeConnectionMaxArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeConnectionMinArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeConnectionSumArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};

export type ContentfulOssDetailTextNodeEdge = {
  readonly next: Maybe<ContentfulOssDetailTextNode>;
  readonly node: ContentfulOssDetailTextNode;
  readonly previous: Maybe<ContentfulOssDetailTextNode>;
};

export enum ContentfulOssDetailTextNodeFieldsEnum {
  ChildMdxBody = 0,
  ChildMdxChildren = 1,
  ChildMdxChildrenChildren = 2,
  ChildMdxChildrenChildrenChildren = 3,
  ChildMdxChildrenChildrenId = 4,
  ChildMdxChildrenId = 5,
  ChildMdxChildrenInternalContent = 6,
  ChildMdxChildrenInternalContentDigest = 7,
  ChildMdxChildrenInternalContentFilePath = 8,
  ChildMdxChildrenInternalDescription = 9,
  ChildMdxChildrenInternalFieldOwners = 10,
  ChildMdxChildrenInternalIgnoreType = 11,
  ChildMdxChildrenInternalMediaType = 12,
  ChildMdxChildrenInternalOwner = 13,
  ChildMdxChildrenInternalType = 14,
  ChildMdxChildrenParentChildren = 15,
  ChildMdxChildrenParentId = 16,
  ChildMdxExcerpt = 17,
  ChildMdxFileAbsolutePath = 18,
  ChildMdxFrontmatterTitle = 19,
  ChildMdxHeadings = 20,
  ChildMdxHeadingsDepth = 21,
  ChildMdxHeadingsValue = 22,
  ChildMdxHtml = 23,
  ChildMdxId = 24,
  ChildMdxInternalContent = 25,
  ChildMdxInternalContentDigest = 26,
  ChildMdxInternalContentFilePath = 27,
  ChildMdxInternalDescription = 28,
  ChildMdxInternalFieldOwners = 29,
  ChildMdxInternalIgnoreType = 30,
  ChildMdxInternalMediaType = 31,
  ChildMdxInternalOwner = 32,
  ChildMdxInternalType = 33,
  ChildMdxMdxAst = 34,
  ChildMdxParentChildren = 35,
  ChildMdxParentChildrenChildren = 36,
  ChildMdxParentChildrenId = 37,
  ChildMdxParentId = 38,
  ChildMdxParentInternalContent = 39,
  ChildMdxParentInternalContentDigest = 40,
  ChildMdxParentInternalContentFilePath = 41,
  ChildMdxParentInternalDescription = 42,
  ChildMdxParentInternalFieldOwners = 43,
  ChildMdxParentInternalIgnoreType = 44,
  ChildMdxParentInternalMediaType = 45,
  ChildMdxParentInternalOwner = 46,
  ChildMdxParentInternalType = 47,
  ChildMdxParentParentChildren = 48,
  ChildMdxParentParentId = 49,
  ChildMdxRawBody = 50,
  ChildMdxSlug = 51,
  ChildMdxTableOfContents = 52,
  ChildMdxTimeToRead = 53,
  ChildMdxWordCountParagraphs = 54,
  ChildMdxWordCountSentences = 55,
  ChildMdxWordCountWords = 56,
  Children = 57,
  ChildrenMdx = 58,
  ChildrenMdxBody = 59,
  ChildrenMdxChildren = 60,
  ChildrenMdxChildrenChildren = 61,
  ChildrenMdxChildrenChildrenChildren = 62,
  ChildrenMdxChildrenChildrenId = 63,
  ChildrenMdxChildrenId = 64,
  ChildrenMdxChildrenInternalContent = 65,
  ChildrenMdxChildrenInternalContentDigest = 66,
  ChildrenMdxChildrenInternalContentFilePath = 67,
  ChildrenMdxChildrenInternalDescription = 68,
  ChildrenMdxChildrenInternalFieldOwners = 69,
  ChildrenMdxChildrenInternalIgnoreType = 70,
  ChildrenMdxChildrenInternalMediaType = 71,
  ChildrenMdxChildrenInternalOwner = 72,
  ChildrenMdxChildrenInternalType = 73,
  ChildrenMdxChildrenParentChildren = 74,
  ChildrenMdxChildrenParentId = 75,
  ChildrenMdxExcerpt = 76,
  ChildrenMdxFileAbsolutePath = 77,
  ChildrenMdxFrontmatterTitle = 78,
  ChildrenMdxHeadings = 79,
  ChildrenMdxHeadingsDepth = 80,
  ChildrenMdxHeadingsValue = 81,
  ChildrenMdxHtml = 82,
  ChildrenMdxId = 83,
  ChildrenMdxInternalContent = 84,
  ChildrenMdxInternalContentDigest = 85,
  ChildrenMdxInternalContentFilePath = 86,
  ChildrenMdxInternalDescription = 87,
  ChildrenMdxInternalFieldOwners = 88,
  ChildrenMdxInternalIgnoreType = 89,
  ChildrenMdxInternalMediaType = 90,
  ChildrenMdxInternalOwner = 91,
  ChildrenMdxInternalType = 92,
  ChildrenMdxMdxAst = 93,
  ChildrenMdxParentChildren = 94,
  ChildrenMdxParentChildrenChildren = 95,
  ChildrenMdxParentChildrenId = 96,
  ChildrenMdxParentId = 97,
  ChildrenMdxParentInternalContent = 98,
  ChildrenMdxParentInternalContentDigest = 99,
  ChildrenMdxParentInternalContentFilePath = 100,
  ChildrenMdxParentInternalDescription = 101,
  ChildrenMdxParentInternalFieldOwners = 102,
  ChildrenMdxParentInternalIgnoreType = 103,
  ChildrenMdxParentInternalMediaType = 104,
  ChildrenMdxParentInternalOwner = 105,
  ChildrenMdxParentInternalType = 106,
  ChildrenMdxParentParentChildren = 107,
  ChildrenMdxParentParentId = 108,
  ChildrenMdxRawBody = 109,
  ChildrenMdxSlug = 110,
  ChildrenMdxTableOfContents = 111,
  ChildrenMdxTimeToRead = 112,
  ChildrenMdxWordCountParagraphs = 113,
  ChildrenMdxWordCountSentences = 114,
  ChildrenMdxWordCountWords = 115,
  ChildrenChildren = 116,
  ChildrenChildrenChildren = 117,
  ChildrenChildrenChildrenChildren = 118,
  ChildrenChildrenChildrenId = 119,
  ChildrenChildrenId = 120,
  ChildrenChildrenInternalContent = 121,
  ChildrenChildrenInternalContentDigest = 122,
  ChildrenChildrenInternalContentFilePath = 123,
  ChildrenChildrenInternalDescription = 124,
  ChildrenChildrenInternalFieldOwners = 125,
  ChildrenChildrenInternalIgnoreType = 126,
  ChildrenChildrenInternalMediaType = 127,
  ChildrenChildrenInternalOwner = 128,
  ChildrenChildrenInternalType = 129,
  ChildrenChildrenParentChildren = 130,
  ChildrenChildrenParentId = 131,
  ChildrenId = 132,
  ChildrenInternalContent = 133,
  ChildrenInternalContentDigest = 134,
  ChildrenInternalContentFilePath = 135,
  ChildrenInternalDescription = 136,
  ChildrenInternalFieldOwners = 137,
  ChildrenInternalIgnoreType = 138,
  ChildrenInternalMediaType = 139,
  ChildrenInternalOwner = 140,
  ChildrenInternalType = 141,
  ChildrenParentChildren = 142,
  ChildrenParentChildrenChildren = 143,
  ChildrenParentChildrenId = 144,
  ChildrenParentId = 145,
  ChildrenParentInternalContent = 146,
  ChildrenParentInternalContentDigest = 147,
  ChildrenParentInternalContentFilePath = 148,
  ChildrenParentInternalDescription = 149,
  ChildrenParentInternalFieldOwners = 150,
  ChildrenParentInternalIgnoreType = 151,
  ChildrenParentInternalMediaType = 152,
  ChildrenParentInternalOwner = 153,
  ChildrenParentInternalType = 154,
  ChildrenParentParentChildren = 155,
  ChildrenParentParentId = 156,
  Detail = 157,
  Id = 158,
  InternalContent = 159,
  InternalContentDigest = 160,
  InternalContentFilePath = 161,
  InternalDescription = 162,
  InternalFieldOwners = 163,
  InternalIgnoreType = 164,
  InternalMediaType = 165,
  InternalOwner = 166,
  InternalType = 167,
  ParentChildren = 168,
  ParentChildrenChildren = 169,
  ParentChildrenChildrenChildren = 170,
  ParentChildrenChildrenId = 171,
  ParentChildrenId = 172,
  ParentChildrenInternalContent = 173,
  ParentChildrenInternalContentDigest = 174,
  ParentChildrenInternalContentFilePath = 175,
  ParentChildrenInternalDescription = 176,
  ParentChildrenInternalFieldOwners = 177,
  ParentChildrenInternalIgnoreType = 178,
  ParentChildrenInternalMediaType = 179,
  ParentChildrenInternalOwner = 180,
  ParentChildrenInternalType = 181,
  ParentChildrenParentChildren = 182,
  ParentChildrenParentId = 183,
  ParentId = 184,
  ParentInternalContent = 185,
  ParentInternalContentDigest = 186,
  ParentInternalContentFilePath = 187,
  ParentInternalDescription = 188,
  ParentInternalFieldOwners = 189,
  ParentInternalIgnoreType = 190,
  ParentInternalMediaType = 191,
  ParentInternalOwner = 192,
  ParentInternalType = 193,
  ParentParentChildren = 194,
  ParentParentChildrenChildren = 195,
  ParentParentChildrenId = 196,
  ParentParentId = 197,
  ParentParentInternalContent = 198,
  ParentParentInternalContentDigest = 199,
  ParentParentInternalContentFilePath = 200,
  ParentParentInternalDescription = 201,
  ParentParentInternalFieldOwners = 202,
  ParentParentInternalIgnoreType = 203,
  ParentParentInternalMediaType = 204,
  ParentParentInternalOwner = 205,
  ParentParentInternalType = 206,
  ParentParentParentChildren = 207,
  ParentParentParentId = 208,
  SysType = 209
}

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
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeGroupConnectionGroupArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulOssDetailTextNodeGroupConnectionMaxArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeGroupConnectionMinArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};


export type ContentfulOssDetailTextNodeGroupConnectionSumArgs = {
  field: ContentfulOssDetailTextNodeFieldsEnum;
};

export type ContentfulOssDetailTextNodeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulOssDetailTextNodeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulOssDetailTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulOssDetailTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
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
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeConnectionGroupArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulProjectDetailTextNodeConnectionMaxArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeConnectionMinArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeConnectionSumArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};

export type ContentfulProjectDetailTextNodeEdge = {
  readonly next: Maybe<ContentfulProjectDetailTextNode>;
  readonly node: ContentfulProjectDetailTextNode;
  readonly previous: Maybe<ContentfulProjectDetailTextNode>;
};

export enum ContentfulProjectDetailTextNodeFieldsEnum {
  ChildMdxBody = 0,
  ChildMdxChildren = 1,
  ChildMdxChildrenChildren = 2,
  ChildMdxChildrenChildrenChildren = 3,
  ChildMdxChildrenChildrenId = 4,
  ChildMdxChildrenId = 5,
  ChildMdxChildrenInternalContent = 6,
  ChildMdxChildrenInternalContentDigest = 7,
  ChildMdxChildrenInternalContentFilePath = 8,
  ChildMdxChildrenInternalDescription = 9,
  ChildMdxChildrenInternalFieldOwners = 10,
  ChildMdxChildrenInternalIgnoreType = 11,
  ChildMdxChildrenInternalMediaType = 12,
  ChildMdxChildrenInternalOwner = 13,
  ChildMdxChildrenInternalType = 14,
  ChildMdxChildrenParentChildren = 15,
  ChildMdxChildrenParentId = 16,
  ChildMdxExcerpt = 17,
  ChildMdxFileAbsolutePath = 18,
  ChildMdxFrontmatterTitle = 19,
  ChildMdxHeadings = 20,
  ChildMdxHeadingsDepth = 21,
  ChildMdxHeadingsValue = 22,
  ChildMdxHtml = 23,
  ChildMdxId = 24,
  ChildMdxInternalContent = 25,
  ChildMdxInternalContentDigest = 26,
  ChildMdxInternalContentFilePath = 27,
  ChildMdxInternalDescription = 28,
  ChildMdxInternalFieldOwners = 29,
  ChildMdxInternalIgnoreType = 30,
  ChildMdxInternalMediaType = 31,
  ChildMdxInternalOwner = 32,
  ChildMdxInternalType = 33,
  ChildMdxMdxAst = 34,
  ChildMdxParentChildren = 35,
  ChildMdxParentChildrenChildren = 36,
  ChildMdxParentChildrenId = 37,
  ChildMdxParentId = 38,
  ChildMdxParentInternalContent = 39,
  ChildMdxParentInternalContentDigest = 40,
  ChildMdxParentInternalContentFilePath = 41,
  ChildMdxParentInternalDescription = 42,
  ChildMdxParentInternalFieldOwners = 43,
  ChildMdxParentInternalIgnoreType = 44,
  ChildMdxParentInternalMediaType = 45,
  ChildMdxParentInternalOwner = 46,
  ChildMdxParentInternalType = 47,
  ChildMdxParentParentChildren = 48,
  ChildMdxParentParentId = 49,
  ChildMdxRawBody = 50,
  ChildMdxSlug = 51,
  ChildMdxTableOfContents = 52,
  ChildMdxTimeToRead = 53,
  ChildMdxWordCountParagraphs = 54,
  ChildMdxWordCountSentences = 55,
  ChildMdxWordCountWords = 56,
  Children = 57,
  ChildrenMdx = 58,
  ChildrenMdxBody = 59,
  ChildrenMdxChildren = 60,
  ChildrenMdxChildrenChildren = 61,
  ChildrenMdxChildrenChildrenChildren = 62,
  ChildrenMdxChildrenChildrenId = 63,
  ChildrenMdxChildrenId = 64,
  ChildrenMdxChildrenInternalContent = 65,
  ChildrenMdxChildrenInternalContentDigest = 66,
  ChildrenMdxChildrenInternalContentFilePath = 67,
  ChildrenMdxChildrenInternalDescription = 68,
  ChildrenMdxChildrenInternalFieldOwners = 69,
  ChildrenMdxChildrenInternalIgnoreType = 70,
  ChildrenMdxChildrenInternalMediaType = 71,
  ChildrenMdxChildrenInternalOwner = 72,
  ChildrenMdxChildrenInternalType = 73,
  ChildrenMdxChildrenParentChildren = 74,
  ChildrenMdxChildrenParentId = 75,
  ChildrenMdxExcerpt = 76,
  ChildrenMdxFileAbsolutePath = 77,
  ChildrenMdxFrontmatterTitle = 78,
  ChildrenMdxHeadings = 79,
  ChildrenMdxHeadingsDepth = 80,
  ChildrenMdxHeadingsValue = 81,
  ChildrenMdxHtml = 82,
  ChildrenMdxId = 83,
  ChildrenMdxInternalContent = 84,
  ChildrenMdxInternalContentDigest = 85,
  ChildrenMdxInternalContentFilePath = 86,
  ChildrenMdxInternalDescription = 87,
  ChildrenMdxInternalFieldOwners = 88,
  ChildrenMdxInternalIgnoreType = 89,
  ChildrenMdxInternalMediaType = 90,
  ChildrenMdxInternalOwner = 91,
  ChildrenMdxInternalType = 92,
  ChildrenMdxMdxAst = 93,
  ChildrenMdxParentChildren = 94,
  ChildrenMdxParentChildrenChildren = 95,
  ChildrenMdxParentChildrenId = 96,
  ChildrenMdxParentId = 97,
  ChildrenMdxParentInternalContent = 98,
  ChildrenMdxParentInternalContentDigest = 99,
  ChildrenMdxParentInternalContentFilePath = 100,
  ChildrenMdxParentInternalDescription = 101,
  ChildrenMdxParentInternalFieldOwners = 102,
  ChildrenMdxParentInternalIgnoreType = 103,
  ChildrenMdxParentInternalMediaType = 104,
  ChildrenMdxParentInternalOwner = 105,
  ChildrenMdxParentInternalType = 106,
  ChildrenMdxParentParentChildren = 107,
  ChildrenMdxParentParentId = 108,
  ChildrenMdxRawBody = 109,
  ChildrenMdxSlug = 110,
  ChildrenMdxTableOfContents = 111,
  ChildrenMdxTimeToRead = 112,
  ChildrenMdxWordCountParagraphs = 113,
  ChildrenMdxWordCountSentences = 114,
  ChildrenMdxWordCountWords = 115,
  ChildrenChildren = 116,
  ChildrenChildrenChildren = 117,
  ChildrenChildrenChildrenChildren = 118,
  ChildrenChildrenChildrenId = 119,
  ChildrenChildrenId = 120,
  ChildrenChildrenInternalContent = 121,
  ChildrenChildrenInternalContentDigest = 122,
  ChildrenChildrenInternalContentFilePath = 123,
  ChildrenChildrenInternalDescription = 124,
  ChildrenChildrenInternalFieldOwners = 125,
  ChildrenChildrenInternalIgnoreType = 126,
  ChildrenChildrenInternalMediaType = 127,
  ChildrenChildrenInternalOwner = 128,
  ChildrenChildrenInternalType = 129,
  ChildrenChildrenParentChildren = 130,
  ChildrenChildrenParentId = 131,
  ChildrenId = 132,
  ChildrenInternalContent = 133,
  ChildrenInternalContentDigest = 134,
  ChildrenInternalContentFilePath = 135,
  ChildrenInternalDescription = 136,
  ChildrenInternalFieldOwners = 137,
  ChildrenInternalIgnoreType = 138,
  ChildrenInternalMediaType = 139,
  ChildrenInternalOwner = 140,
  ChildrenInternalType = 141,
  ChildrenParentChildren = 142,
  ChildrenParentChildrenChildren = 143,
  ChildrenParentChildrenId = 144,
  ChildrenParentId = 145,
  ChildrenParentInternalContent = 146,
  ChildrenParentInternalContentDigest = 147,
  ChildrenParentInternalContentFilePath = 148,
  ChildrenParentInternalDescription = 149,
  ChildrenParentInternalFieldOwners = 150,
  ChildrenParentInternalIgnoreType = 151,
  ChildrenParentInternalMediaType = 152,
  ChildrenParentInternalOwner = 153,
  ChildrenParentInternalType = 154,
  ChildrenParentParentChildren = 155,
  ChildrenParentParentId = 156,
  Detail = 157,
  Id = 158,
  InternalContent = 159,
  InternalContentDigest = 160,
  InternalContentFilePath = 161,
  InternalDescription = 162,
  InternalFieldOwners = 163,
  InternalIgnoreType = 164,
  InternalMediaType = 165,
  InternalOwner = 166,
  InternalType = 167,
  ParentChildren = 168,
  ParentChildrenChildren = 169,
  ParentChildrenChildrenChildren = 170,
  ParentChildrenChildrenId = 171,
  ParentChildrenId = 172,
  ParentChildrenInternalContent = 173,
  ParentChildrenInternalContentDigest = 174,
  ParentChildrenInternalContentFilePath = 175,
  ParentChildrenInternalDescription = 176,
  ParentChildrenInternalFieldOwners = 177,
  ParentChildrenInternalIgnoreType = 178,
  ParentChildrenInternalMediaType = 179,
  ParentChildrenInternalOwner = 180,
  ParentChildrenInternalType = 181,
  ParentChildrenParentChildren = 182,
  ParentChildrenParentId = 183,
  ParentId = 184,
  ParentInternalContent = 185,
  ParentInternalContentDigest = 186,
  ParentInternalContentFilePath = 187,
  ParentInternalDescription = 188,
  ParentInternalFieldOwners = 189,
  ParentInternalIgnoreType = 190,
  ParentInternalMediaType = 191,
  ParentInternalOwner = 192,
  ParentInternalType = 193,
  ParentParentChildren = 194,
  ParentParentChildrenChildren = 195,
  ParentParentChildrenId = 196,
  ParentParentId = 197,
  ParentParentInternalContent = 198,
  ParentParentInternalContentDigest = 199,
  ParentParentInternalContentFilePath = 200,
  ParentParentInternalDescription = 201,
  ParentParentInternalFieldOwners = 202,
  ParentParentInternalIgnoreType = 203,
  ParentParentInternalMediaType = 204,
  ParentParentInternalOwner = 205,
  ParentParentInternalType = 206,
  ParentParentParentChildren = 207,
  ParentParentParentId = 208,
  SysType = 209
}

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
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeGroupConnectionGroupArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


export type ContentfulProjectDetailTextNodeGroupConnectionMaxArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeGroupConnectionMinArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};


export type ContentfulProjectDetailTextNodeGroupConnectionSumArgs = {
  field: ContentfulProjectDetailTextNodeFieldsEnum;
};

export type ContentfulProjectDetailTextNodeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulProjectDetailTextNodeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

export type ContentfulProjectDetailTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

export type ContentfulProjectDetailTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

export type OnCreatePagesStatefullyQueryVariables = Exact<{ [key: string]: never; }>;


export type OnCreatePagesStatefullyQuery = { readonly allContentfulBlogPost: { readonly nodes: ReadonlyArray<Pick<ContentfulBlogPost, 'title' | 'slug' | 'excerpt'>> } };

export type BlogPostDetailFragment = { readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body'>> }> };

export type BlogPostCardFragment = Pick<ContentfulBlogPost, 'title' | 'slug' | 'created'>;

export type BlogPostListFragment = Pick<ContentfulBlogPost, 'id' | 'title' | 'slug' | 'created'>;

export type PortfolioCertificationCardFragment = (
  Pick<ContentfulQualificationMap, 'id' | 'name' | 'expanded'>
  & { readonly qualifications: Maybe<ReadonlyArray<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date'>>>> }
);

export type PortfolioCertificationDetailFragment = Pick<ContentfulQualification, 'name' | 'date'>;

export type PortfolioCertificationListFragment = (
  Pick<ContentfulQualificationMap, 'id' | 'name' | 'expanded'>
  & { readonly qualifications: Maybe<ReadonlyArray<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date'>>>> }
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
  Pick<ContentfulProject, 'id' | 'name' | 'startDate' | 'subName'>
  & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )>, readonly detail: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body'>> }> }
);

export type PortfolioProjectDetailFragment = (
  Pick<ContentfulProject, 'subName'>
  & { readonly detail: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body'>> }> }
);

export type PortfolioProjectListFragment = (
  Pick<ContentfulProject, 'id' | 'name' | 'startDate' | 'subName'>
  & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )>, readonly detail: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body'>> }> }
);

export type PortfolioSkillCardFragment = (
  Pick<ContentfulSkillMap, 'id' | 'name' | 'expanded'>
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
  Pick<ContentfulSkillMap, 'id' | 'name' | 'expanded'>
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

export type UseUrlFragment = Pick<Locale, 'ns' | 'data' | 'language'>;

export type NotFoundPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type NotFoundPageQuery = { readonly locales: { readonly edges: ReadonlyArray<{ readonly node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type BlogPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type BlogPageQuery = { readonly blogPostList: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulBlogPost, 'title' | 'created' | 'id' | 'slug'>
      & { readonly thumbnail: Maybe<{ readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }>, readonly category: Maybe<Pick<ContentfulCategory, 'id'>> }
    )> }, readonly categoryList: { readonly nodes: ReadonlyArray<Pick<ContentfulCategory, 'id' | 'slug' | 'name'>> }, readonly locales: { readonly edges: ReadonlyArray<{ readonly node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type IndexPageQueryVariables = Exact<{
  language: Scalars['String'];
}>;


export type IndexPageQuery = { readonly links: { readonly nodes: ReadonlyArray<Pick<ContentfulHello, 'id' | 'href' | 'name'>> }, readonly whatICanDos: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulWhatICanDo, 'id' | 'name' | 'subName'>
      & { readonly icon: Maybe<(
        Pick<ContentfulIcon, 'name'>
        & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
      )> }
    )> }, readonly projects: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulProject, 'id' | 'name' | 'startDate' | 'subName'>
      & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
        Pick<ContentfulIcon, 'name'>
        & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
      )>, readonly detail: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body'>> }> }
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
      Pick<ContentfulSkillMap, 'id' | 'name' | 'expanded'>
      & { readonly skillGroups: Maybe<ReadonlyArray<Maybe<(
        Pick<ContentfulSkillGrpup, 'id' | 'name'>
        & { readonly skills: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'id' | 'level' | 'name'>>>> }
      )>>> }
    )> }, readonly certification: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulQualificationMap, 'id' | 'name' | 'expanded'>
      & { readonly qualifications: Maybe<ReadonlyArray<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date'>>>> }
    )> }, readonly locales: { readonly edges: ReadonlyArray<{ readonly node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

export type BlogPostPageQueryVariables = Exact<{
  id: Scalars['String'];
  language: Scalars['String'];
}>;


export type BlogPostPageQuery = { readonly post: Maybe<(
    Pick<ContentfulBlogPost, 'title' | 'excerpt' | 'created' | 'updated'>
    & { readonly category: Maybe<Pick<ContentfulCategory, 'name'>>, readonly tags: Maybe<ReadonlyArray<Maybe<(
      Pick<ContentfulTag, 'name'>
      & { readonly blog_post: Maybe<ReadonlyArray<Maybe<(
        Pick<ContentfulBlogPost, 'id' | 'title' | 'slug'>
        & { createdDateTime: ContentfulBlogPost['created'] }
      )>>> }
    )>>>, readonly thumbnail: Maybe<(
      Pick<ContentfulAsset, 'title'>
      & { readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }
    )>, readonly content: Maybe<{ readonly childMdx: Maybe<Pick<Mdx, 'body'>> }> }
  )>, readonly links: { readonly nodes: ReadonlyArray<Pick<ContentfulHello, 'id' | 'href' | 'name'>> }, readonly locales: { readonly edges: ReadonlyArray<{ readonly node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };
