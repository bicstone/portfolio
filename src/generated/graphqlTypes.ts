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
  CategoryBlogPost = 0,
  CategoryBlogPostCategoryBlogPost = 1,
  CategoryBlogPostCategoryChildren = 2,
  CategoryBlogPostCategoryContentfulId = 3,
  CategoryBlogPostCategoryCreatedAt = 4,
  CategoryBlogPostCategoryId = 5,
  CategoryBlogPostCategoryName = 6,
  CategoryBlogPostCategoryNodeLocale = 7,
  CategoryBlogPostCategorySortKey = 8,
  CategoryBlogPostCategorySpaceId = 9,
  CategoryBlogPostCategoryUpdatedAt = 10,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeChildren = 11,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeContent = 12,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeId = 13,
  CategoryBlogPostChildren = 14,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNode = 15,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 16,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeContent = 17,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeId = 18,
  CategoryBlogPostChildrenChildren = 19,
  CategoryBlogPostChildrenId = 20,
  CategoryBlogPostContentChildren = 21,
  CategoryBlogPostContentContent = 22,
  CategoryBlogPostContentId = 23,
  CategoryBlogPostContentfulId = 24,
  CategoryBlogPostCreated = 25,
  CategoryBlogPostCreatedAt = 26,
  CategoryBlogPostExcerpt = 27,
  CategoryBlogPostGatsbyPath = 28,
  CategoryBlogPostId = 29,
  CategoryBlogPostInternalContent = 30,
  CategoryBlogPostInternalContentDigest = 31,
  CategoryBlogPostInternalContentFilePath = 32,
  CategoryBlogPostInternalDescription = 33,
  CategoryBlogPostInternalFieldOwners = 34,
  CategoryBlogPostInternalIgnoreType = 35,
  CategoryBlogPostInternalMediaType = 36,
  CategoryBlogPostInternalOwner = 37,
  CategoryBlogPostInternalType = 38,
  CategoryBlogPostNodeLocale = 39,
  CategoryBlogPostParentChildren = 40,
  CategoryBlogPostParentId = 41,
  CategoryBlogPostSlug = 42,
  CategoryBlogPostSpaceId = 43,
  CategoryBlogPostSysRevision = 44,
  CategoryBlogPostSysType = 45,
  CategoryBlogPostTags = 46,
  CategoryBlogPostTagsBlogPost = 47,
  CategoryBlogPostTagsChildren = 48,
  CategoryBlogPostTagsContentfulId = 49,
  CategoryBlogPostTagsCreatedAt = 50,
  CategoryBlogPostTagsId = 51,
  CategoryBlogPostTagsLevel = 52,
  CategoryBlogPostTagsName = 53,
  CategoryBlogPostTagsNodeLocale = 54,
  CategoryBlogPostTagsOss = 55,
  CategoryBlogPostTagsProject = 56,
  CategoryBlogPostTagsSkillGrpup = 57,
  CategoryBlogPostTagsSkillMap = 58,
  CategoryBlogPostTagsSpaceId = 59,
  CategoryBlogPostTagsUpdatedAt = 60,
  CategoryBlogPostThumbnailChildren = 61,
  CategoryBlogPostThumbnailContentfulId = 62,
  CategoryBlogPostThumbnailCreatedAt = 63,
  CategoryBlogPostThumbnailDescription = 64,
  CategoryBlogPostThumbnailFilename = 65,
  CategoryBlogPostThumbnailFilesize = 66,
  CategoryBlogPostThumbnailGatsbyImage = 67,
  CategoryBlogPostThumbnailGatsbyImageData = 68,
  CategoryBlogPostThumbnailHeight = 69,
  CategoryBlogPostThumbnailId = 70,
  CategoryBlogPostThumbnailMimeType = 71,
  CategoryBlogPostThumbnailNodeLocale = 72,
  CategoryBlogPostThumbnailPlaceholderUrl = 73,
  CategoryBlogPostThumbnailPublicUrl = 74,
  CategoryBlogPostThumbnailSize = 75,
  CategoryBlogPostThumbnailSpaceId = 76,
  CategoryBlogPostThumbnailTitle = 77,
  CategoryBlogPostThumbnailUpdatedAt = 78,
  CategoryBlogPostThumbnailUrl = 79,
  CategoryBlogPostThumbnailWidth = 80,
  CategoryBlogPostTitle = 81,
  CategoryBlogPostUpdated = 82,
  CategoryBlogPostUpdatedAt = 83,
  CategoryChildren = 84,
  CategoryChildrenChildren = 85,
  CategoryChildrenChildrenChildren = 86,
  CategoryChildrenChildrenId = 87,
  CategoryChildrenId = 88,
  CategoryChildrenInternalContent = 89,
  CategoryChildrenInternalContentDigest = 90,
  CategoryChildrenInternalContentFilePath = 91,
  CategoryChildrenInternalDescription = 92,
  CategoryChildrenInternalFieldOwners = 93,
  CategoryChildrenInternalIgnoreType = 94,
  CategoryChildrenInternalMediaType = 95,
  CategoryChildrenInternalOwner = 96,
  CategoryChildrenInternalType = 97,
  CategoryChildrenParentChildren = 98,
  CategoryChildrenParentId = 99,
  CategoryContentfulId = 100,
  CategoryCreatedAt = 101,
  CategoryId = 102,
  CategoryInternalContent = 103,
  CategoryInternalContentDigest = 104,
  CategoryInternalContentFilePath = 105,
  CategoryInternalDescription = 106,
  CategoryInternalFieldOwners = 107,
  CategoryInternalIgnoreType = 108,
  CategoryInternalMediaType = 109,
  CategoryInternalOwner = 110,
  CategoryInternalType = 111,
  CategoryName = 112,
  CategoryNodeLocale = 113,
  CategoryParentChildren = 114,
  CategoryParentChildrenChildren = 115,
  CategoryParentChildrenId = 116,
  CategoryParentId = 117,
  CategoryParentInternalContent = 118,
  CategoryParentInternalContentDigest = 119,
  CategoryParentInternalContentFilePath = 120,
  CategoryParentInternalDescription = 121,
  CategoryParentInternalFieldOwners = 122,
  CategoryParentInternalIgnoreType = 123,
  CategoryParentInternalMediaType = 124,
  CategoryParentInternalOwner = 125,
  CategoryParentInternalType = 126,
  CategoryParentParentChildren = 127,
  CategoryParentParentId = 128,
  CategorySortKey = 129,
  CategorySpaceId = 130,
  CategorySysRevision = 131,
  CategorySysType = 132,
  CategoryUpdatedAt = 133,
  ChildContentfulBlogPostContentTextNodeChildren = 134,
  ChildContentfulBlogPostContentTextNodeChildrenChildren = 135,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenChildren = 136,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenId = 137,
  ChildContentfulBlogPostContentTextNodeChildrenId = 138,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContent = 139,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 140,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentFilePath = 141,
  ChildContentfulBlogPostContentTextNodeChildrenInternalDescription = 142,
  ChildContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 143,
  ChildContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 144,
  ChildContentfulBlogPostContentTextNodeChildrenInternalMediaType = 145,
  ChildContentfulBlogPostContentTextNodeChildrenInternalOwner = 146,
  ChildContentfulBlogPostContentTextNodeChildrenInternalType = 147,
  ChildContentfulBlogPostContentTextNodeChildrenParentChildren = 148,
  ChildContentfulBlogPostContentTextNodeChildrenParentId = 149,
  ChildContentfulBlogPostContentTextNodeContent = 150,
  ChildContentfulBlogPostContentTextNodeId = 151,
  ChildContentfulBlogPostContentTextNodeInternalContent = 152,
  ChildContentfulBlogPostContentTextNodeInternalContentDigest = 153,
  ChildContentfulBlogPostContentTextNodeInternalContentFilePath = 154,
  ChildContentfulBlogPostContentTextNodeInternalDescription = 155,
  ChildContentfulBlogPostContentTextNodeInternalFieldOwners = 156,
  ChildContentfulBlogPostContentTextNodeInternalIgnoreType = 157,
  ChildContentfulBlogPostContentTextNodeInternalMediaType = 158,
  ChildContentfulBlogPostContentTextNodeInternalOwner = 159,
  ChildContentfulBlogPostContentTextNodeInternalType = 160,
  ChildContentfulBlogPostContentTextNodeParentChildren = 161,
  ChildContentfulBlogPostContentTextNodeParentChildrenChildren = 162,
  ChildContentfulBlogPostContentTextNodeParentChildrenId = 163,
  ChildContentfulBlogPostContentTextNodeParentId = 164,
  ChildContentfulBlogPostContentTextNodeParentInternalContent = 165,
  ChildContentfulBlogPostContentTextNodeParentInternalContentDigest = 166,
  ChildContentfulBlogPostContentTextNodeParentInternalContentFilePath = 167,
  ChildContentfulBlogPostContentTextNodeParentInternalDescription = 168,
  ChildContentfulBlogPostContentTextNodeParentInternalFieldOwners = 169,
  ChildContentfulBlogPostContentTextNodeParentInternalIgnoreType = 170,
  ChildContentfulBlogPostContentTextNodeParentInternalMediaType = 171,
  ChildContentfulBlogPostContentTextNodeParentInternalOwner = 172,
  ChildContentfulBlogPostContentTextNodeParentInternalType = 173,
  ChildContentfulBlogPostContentTextNodeParentParentChildren = 174,
  ChildContentfulBlogPostContentTextNodeParentParentId = 175,
  ChildContentfulBlogPostContentTextNodeSysType = 176,
  Children = 177,
  ChildrenContentfulBlogPostContentTextNode = 178,
  ChildrenContentfulBlogPostContentTextNodeChildren = 179,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildren = 180,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenChildren = 181,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenId = 182,
  ChildrenContentfulBlogPostContentTextNodeChildrenId = 183,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContent = 184,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 185,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentFilePath = 186,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalDescription = 187,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 188,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 189,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalMediaType = 190,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalOwner = 191,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalType = 192,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentChildren = 193,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentId = 194,
  ChildrenContentfulBlogPostContentTextNodeContent = 195,
  ChildrenContentfulBlogPostContentTextNodeId = 196,
  ChildrenContentfulBlogPostContentTextNodeInternalContent = 197,
  ChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 198,
  ChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 199,
  ChildrenContentfulBlogPostContentTextNodeInternalDescription = 200,
  ChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 201,
  ChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 202,
  ChildrenContentfulBlogPostContentTextNodeInternalMediaType = 203,
  ChildrenContentfulBlogPostContentTextNodeInternalOwner = 204,
  ChildrenContentfulBlogPostContentTextNodeInternalType = 205,
  ChildrenContentfulBlogPostContentTextNodeParentChildren = 206,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenChildren = 207,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenId = 208,
  ChildrenContentfulBlogPostContentTextNodeParentId = 209,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContent = 210,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentDigest = 211,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentFilePath = 212,
  ChildrenContentfulBlogPostContentTextNodeParentInternalDescription = 213,
  ChildrenContentfulBlogPostContentTextNodeParentInternalFieldOwners = 214,
  ChildrenContentfulBlogPostContentTextNodeParentInternalIgnoreType = 215,
  ChildrenContentfulBlogPostContentTextNodeParentInternalMediaType = 216,
  ChildrenContentfulBlogPostContentTextNodeParentInternalOwner = 217,
  ChildrenContentfulBlogPostContentTextNodeParentInternalType = 218,
  ChildrenContentfulBlogPostContentTextNodeParentParentChildren = 219,
  ChildrenContentfulBlogPostContentTextNodeParentParentId = 220,
  ChildrenContentfulBlogPostContentTextNodeSysType = 221,
  ChildrenChildren = 222,
  ChildrenChildrenChildren = 223,
  ChildrenChildrenChildrenChildren = 224,
  ChildrenChildrenChildrenId = 225,
  ChildrenChildrenId = 226,
  ChildrenChildrenInternalContent = 227,
  ChildrenChildrenInternalContentDigest = 228,
  ChildrenChildrenInternalContentFilePath = 229,
  ChildrenChildrenInternalDescription = 230,
  ChildrenChildrenInternalFieldOwners = 231,
  ChildrenChildrenInternalIgnoreType = 232,
  ChildrenChildrenInternalMediaType = 233,
  ChildrenChildrenInternalOwner = 234,
  ChildrenChildrenInternalType = 235,
  ChildrenChildrenParentChildren = 236,
  ChildrenChildrenParentId = 237,
  ChildrenId = 238,
  ChildrenInternalContent = 239,
  ChildrenInternalContentDigest = 240,
  ChildrenInternalContentFilePath = 241,
  ChildrenInternalDescription = 242,
  ChildrenInternalFieldOwners = 243,
  ChildrenInternalIgnoreType = 244,
  ChildrenInternalMediaType = 245,
  ChildrenInternalOwner = 246,
  ChildrenInternalType = 247,
  ChildrenParentChildren = 248,
  ChildrenParentChildrenChildren = 249,
  ChildrenParentChildrenId = 250,
  ChildrenParentId = 251,
  ChildrenParentInternalContent = 252,
  ChildrenParentInternalContentDigest = 253,
  ChildrenParentInternalContentFilePath = 254,
  ChildrenParentInternalDescription = 255,
  ChildrenParentInternalFieldOwners = 256,
  ChildrenParentInternalIgnoreType = 257,
  ChildrenParentInternalMediaType = 258,
  ChildrenParentInternalOwner = 259,
  ChildrenParentInternalType = 260,
  ChildrenParentParentChildren = 261,
  ChildrenParentParentId = 262,
  ContentChildren = 263,
  ContentChildrenChildren = 264,
  ContentChildrenChildrenChildren = 265,
  ContentChildrenChildrenId = 266,
  ContentChildrenId = 267,
  ContentChildrenInternalContent = 268,
  ContentChildrenInternalContentDigest = 269,
  ContentChildrenInternalContentFilePath = 270,
  ContentChildrenInternalDescription = 271,
  ContentChildrenInternalFieldOwners = 272,
  ContentChildrenInternalIgnoreType = 273,
  ContentChildrenInternalMediaType = 274,
  ContentChildrenInternalOwner = 275,
  ContentChildrenInternalType = 276,
  ContentChildrenParentChildren = 277,
  ContentChildrenParentId = 278,
  ContentContent = 279,
  ContentId = 280,
  ContentInternalContent = 281,
  ContentInternalContentDigest = 282,
  ContentInternalContentFilePath = 283,
  ContentInternalDescription = 284,
  ContentInternalFieldOwners = 285,
  ContentInternalIgnoreType = 286,
  ContentInternalMediaType = 287,
  ContentInternalOwner = 288,
  ContentInternalType = 289,
  ContentParentChildren = 290,
  ContentParentChildrenChildren = 291,
  ContentParentChildrenId = 292,
  ContentParentId = 293,
  ContentParentInternalContent = 294,
  ContentParentInternalContentDigest = 295,
  ContentParentInternalContentFilePath = 296,
  ContentParentInternalDescription = 297,
  ContentParentInternalFieldOwners = 298,
  ContentParentInternalIgnoreType = 299,
  ContentParentInternalMediaType = 300,
  ContentParentInternalOwner = 301,
  ContentParentInternalType = 302,
  ContentParentParentChildren = 303,
  ContentParentParentId = 304,
  ContentSysType = 305,
  ContentfulId = 306,
  Created = 307,
  CreatedAt = 308,
  Excerpt = 309,
  GatsbyPath = 310,
  Id = 311,
  InternalContent = 312,
  InternalContentDigest = 313,
  InternalContentFilePath = 314,
  InternalDescription = 315,
  InternalFieldOwners = 316,
  InternalIgnoreType = 317,
  InternalMediaType = 318,
  InternalOwner = 319,
  InternalType = 320,
  NodeLocale = 321,
  ParentChildren = 322,
  ParentChildrenChildren = 323,
  ParentChildrenChildrenChildren = 324,
  ParentChildrenChildrenId = 325,
  ParentChildrenId = 326,
  ParentChildrenInternalContent = 327,
  ParentChildrenInternalContentDigest = 328,
  ParentChildrenInternalContentFilePath = 329,
  ParentChildrenInternalDescription = 330,
  ParentChildrenInternalFieldOwners = 331,
  ParentChildrenInternalIgnoreType = 332,
  ParentChildrenInternalMediaType = 333,
  ParentChildrenInternalOwner = 334,
  ParentChildrenInternalType = 335,
  ParentChildrenParentChildren = 336,
  ParentChildrenParentId = 337,
  ParentId = 338,
  ParentInternalContent = 339,
  ParentInternalContentDigest = 340,
  ParentInternalContentFilePath = 341,
  ParentInternalDescription = 342,
  ParentInternalFieldOwners = 343,
  ParentInternalIgnoreType = 344,
  ParentInternalMediaType = 345,
  ParentInternalOwner = 346,
  ParentInternalType = 347,
  ParentParentChildren = 348,
  ParentParentChildrenChildren = 349,
  ParentParentChildrenId = 350,
  ParentParentId = 351,
  ParentParentInternalContent = 352,
  ParentParentInternalContentDigest = 353,
  ParentParentInternalContentFilePath = 354,
  ParentParentInternalDescription = 355,
  ParentParentInternalFieldOwners = 356,
  ParentParentInternalIgnoreType = 357,
  ParentParentInternalMediaType = 358,
  ParentParentInternalOwner = 359,
  ParentParentInternalType = 360,
  ParentParentParentChildren = 361,
  ParentParentParentId = 362,
  Slug = 363,
  SpaceId = 364,
  SysContentTypeSysId = 365,
  SysContentTypeSysLinkType = 366,
  SysContentTypeSysType = 367,
  SysRevision = 368,
  SysType = 369,
  Tags = 370,
  TagsBlogPost = 371,
  TagsBlogPostCategoryBlogPost = 372,
  TagsBlogPostCategoryChildren = 373,
  TagsBlogPostCategoryContentfulId = 374,
  TagsBlogPostCategoryCreatedAt = 375,
  TagsBlogPostCategoryId = 376,
  TagsBlogPostCategoryName = 377,
  TagsBlogPostCategoryNodeLocale = 378,
  TagsBlogPostCategorySortKey = 379,
  TagsBlogPostCategorySpaceId = 380,
  TagsBlogPostCategoryUpdatedAt = 381,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 382,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 383,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 384,
  TagsBlogPostChildren = 385,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 386,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 387,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 388,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 389,
  TagsBlogPostChildrenChildren = 390,
  TagsBlogPostChildrenId = 391,
  TagsBlogPostContentChildren = 392,
  TagsBlogPostContentContent = 393,
  TagsBlogPostContentId = 394,
  TagsBlogPostContentfulId = 395,
  TagsBlogPostCreated = 396,
  TagsBlogPostCreatedAt = 397,
  TagsBlogPostExcerpt = 398,
  TagsBlogPostGatsbyPath = 399,
  TagsBlogPostId = 400,
  TagsBlogPostInternalContent = 401,
  TagsBlogPostInternalContentDigest = 402,
  TagsBlogPostInternalContentFilePath = 403,
  TagsBlogPostInternalDescription = 404,
  TagsBlogPostInternalFieldOwners = 405,
  TagsBlogPostInternalIgnoreType = 406,
  TagsBlogPostInternalMediaType = 407,
  TagsBlogPostInternalOwner = 408,
  TagsBlogPostInternalType = 409,
  TagsBlogPostNodeLocale = 410,
  TagsBlogPostParentChildren = 411,
  TagsBlogPostParentId = 412,
  TagsBlogPostSlug = 413,
  TagsBlogPostSpaceId = 414,
  TagsBlogPostSysRevision = 415,
  TagsBlogPostSysType = 416,
  TagsBlogPostTags = 417,
  TagsBlogPostTagsBlogPost = 418,
  TagsBlogPostTagsChildren = 419,
  TagsBlogPostTagsContentfulId = 420,
  TagsBlogPostTagsCreatedAt = 421,
  TagsBlogPostTagsId = 422,
  TagsBlogPostTagsLevel = 423,
  TagsBlogPostTagsName = 424,
  TagsBlogPostTagsNodeLocale = 425,
  TagsBlogPostTagsOss = 426,
  TagsBlogPostTagsProject = 427,
  TagsBlogPostTagsSkillGrpup = 428,
  TagsBlogPostTagsSkillMap = 429,
  TagsBlogPostTagsSpaceId = 430,
  TagsBlogPostTagsUpdatedAt = 431,
  TagsBlogPostThumbnailChildren = 432,
  TagsBlogPostThumbnailContentfulId = 433,
  TagsBlogPostThumbnailCreatedAt = 434,
  TagsBlogPostThumbnailDescription = 435,
  TagsBlogPostThumbnailFilename = 436,
  TagsBlogPostThumbnailFilesize = 437,
  TagsBlogPostThumbnailGatsbyImage = 438,
  TagsBlogPostThumbnailGatsbyImageData = 439,
  TagsBlogPostThumbnailHeight = 440,
  TagsBlogPostThumbnailId = 441,
  TagsBlogPostThumbnailMimeType = 442,
  TagsBlogPostThumbnailNodeLocale = 443,
  TagsBlogPostThumbnailPlaceholderUrl = 444,
  TagsBlogPostThumbnailPublicUrl = 445,
  TagsBlogPostThumbnailSize = 446,
  TagsBlogPostThumbnailSpaceId = 447,
  TagsBlogPostThumbnailTitle = 448,
  TagsBlogPostThumbnailUpdatedAt = 449,
  TagsBlogPostThumbnailUrl = 450,
  TagsBlogPostThumbnailWidth = 451,
  TagsBlogPostTitle = 452,
  TagsBlogPostUpdated = 453,
  TagsBlogPostUpdatedAt = 454,
  TagsChildren = 455,
  TagsChildrenChildren = 456,
  TagsChildrenChildrenChildren = 457,
  TagsChildrenChildrenId = 458,
  TagsChildrenId = 459,
  TagsChildrenInternalContent = 460,
  TagsChildrenInternalContentDigest = 461,
  TagsChildrenInternalContentFilePath = 462,
  TagsChildrenInternalDescription = 463,
  TagsChildrenInternalFieldOwners = 464,
  TagsChildrenInternalIgnoreType = 465,
  TagsChildrenInternalMediaType = 466,
  TagsChildrenInternalOwner = 467,
  TagsChildrenInternalType = 468,
  TagsChildrenParentChildren = 469,
  TagsChildrenParentId = 470,
  TagsContentfulId = 471,
  TagsCreatedAt = 472,
  TagsId = 473,
  TagsInternalContent = 474,
  TagsInternalContentDigest = 475,
  TagsInternalContentFilePath = 476,
  TagsInternalDescription = 477,
  TagsInternalFieldOwners = 478,
  TagsInternalIgnoreType = 479,
  TagsInternalMediaType = 480,
  TagsInternalOwner = 481,
  TagsInternalType = 482,
  TagsLevel = 483,
  TagsName = 484,
  TagsNodeLocale = 485,
  TagsOss = 486,
  TagsOssChildContentfulOssDetailTextNodeChildren = 487,
  TagsOssChildContentfulOssDetailTextNodeDetail = 488,
  TagsOssChildContentfulOssDetailTextNodeId = 489,
  TagsOssChildren = 490,
  TagsOssChildrenContentfulOssDetailTextNode = 491,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 492,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 493,
  TagsOssChildrenContentfulOssDetailTextNodeId = 494,
  TagsOssChildrenChildren = 495,
  TagsOssChildrenId = 496,
  TagsOssContentfulId = 497,
  TagsOssCreatedAt = 498,
  TagsOssDetailChildren = 499,
  TagsOssDetailDetail = 500,
  TagsOssDetailId = 501,
  TagsOssHref = 502,
  TagsOssIconChildren = 503,
  TagsOssIconChildrenContentfulIconSvgTextNode = 504,
  TagsOssIconContact = 505,
  TagsOssIconContentfulId = 506,
  TagsOssIconCreatedAt = 507,
  TagsOssIconHistory = 508,
  TagsOssIconId = 509,
  TagsOssIconName = 510,
  TagsOssIconNodeLocale = 511,
  TagsOssIconOss = 512,
  TagsOssIconProject = 513,
  TagsOssIconSpaceId = 514,
  TagsOssIconUpdatedAt = 515,
  TagsOssIconWhatICanDo = 516,
  TagsOssId = 517,
  TagsOssImageChildren = 518,
  TagsOssImageContentfulId = 519,
  TagsOssImageCreatedAt = 520,
  TagsOssImageDescription = 521,
  TagsOssImageFilename = 522,
  TagsOssImageFilesize = 523,
  TagsOssImageGatsbyImage = 524,
  TagsOssImageGatsbyImageData = 525,
  TagsOssImageHeight = 526,
  TagsOssImageId = 527,
  TagsOssImageMimeType = 528,
  TagsOssImageNodeLocale = 529,
  TagsOssImagePlaceholderUrl = 530,
  TagsOssImagePublicUrl = 531,
  TagsOssImageSize = 532,
  TagsOssImageSpaceId = 533,
  TagsOssImageTitle = 534,
  TagsOssImageUpdatedAt = 535,
  TagsOssImageUrl = 536,
  TagsOssImageWidth = 537,
  TagsOssInternalContent = 538,
  TagsOssInternalContentDigest = 539,
  TagsOssInternalContentFilePath = 540,
  TagsOssInternalDescription = 541,
  TagsOssInternalFieldOwners = 542,
  TagsOssInternalIgnoreType = 543,
  TagsOssInternalMediaType = 544,
  TagsOssInternalOwner = 545,
  TagsOssInternalType = 546,
  TagsOssName = 547,
  TagsOssNodeLocale = 548,
  TagsOssParentChildren = 549,
  TagsOssParentId = 550,
  TagsOssSpaceId = 551,
  TagsOssStartDate = 552,
  TagsOssSubName = 553,
  TagsOssSysRevision = 554,
  TagsOssSysType = 555,
  TagsOssTags = 556,
  TagsOssTagsBlogPost = 557,
  TagsOssTagsChildren = 558,
  TagsOssTagsContentfulId = 559,
  TagsOssTagsCreatedAt = 560,
  TagsOssTagsId = 561,
  TagsOssTagsLevel = 562,
  TagsOssTagsName = 563,
  TagsOssTagsNodeLocale = 564,
  TagsOssTagsOss = 565,
  TagsOssTagsProject = 566,
  TagsOssTagsSkillGrpup = 567,
  TagsOssTagsSkillMap = 568,
  TagsOssTagsSpaceId = 569,
  TagsOssTagsUpdatedAt = 570,
  TagsOssUpdatedAt = 571,
  TagsParentChildren = 572,
  TagsParentChildrenChildren = 573,
  TagsParentChildrenId = 574,
  TagsParentId = 575,
  TagsParentInternalContent = 576,
  TagsParentInternalContentDigest = 577,
  TagsParentInternalContentFilePath = 578,
  TagsParentInternalDescription = 579,
  TagsParentInternalFieldOwners = 580,
  TagsParentInternalIgnoreType = 581,
  TagsParentInternalMediaType = 582,
  TagsParentInternalOwner = 583,
  TagsParentInternalType = 584,
  TagsParentParentChildren = 585,
  TagsParentParentId = 586,
  TagsProject = 587,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 588,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 589,
  TagsProjectChildContentfulProjectDetailTextNodeId = 590,
  TagsProjectChildren = 591,
  TagsProjectChildrenContentfulProjectDetailTextNode = 592,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 593,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 594,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 595,
  TagsProjectChildrenChildren = 596,
  TagsProjectChildrenId = 597,
  TagsProjectContentfulId = 598,
  TagsProjectCreatedAt = 599,
  TagsProjectDetailChildren = 600,
  TagsProjectDetailDetail = 601,
  TagsProjectDetailId = 602,
  TagsProjectEndDate = 603,
  TagsProjectIconChildren = 604,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 605,
  TagsProjectIconContact = 606,
  TagsProjectIconContentfulId = 607,
  TagsProjectIconCreatedAt = 608,
  TagsProjectIconHistory = 609,
  TagsProjectIconId = 610,
  TagsProjectIconName = 611,
  TagsProjectIconNodeLocale = 612,
  TagsProjectIconOss = 613,
  TagsProjectIconProject = 614,
  TagsProjectIconSpaceId = 615,
  TagsProjectIconUpdatedAt = 616,
  TagsProjectIconWhatICanDo = 617,
  TagsProjectId = 618,
  TagsProjectInternalContent = 619,
  TagsProjectInternalContentDigest = 620,
  TagsProjectInternalContentFilePath = 621,
  TagsProjectInternalDescription = 622,
  TagsProjectInternalFieldOwners = 623,
  TagsProjectInternalIgnoreType = 624,
  TagsProjectInternalMediaType = 625,
  TagsProjectInternalOwner = 626,
  TagsProjectInternalType = 627,
  TagsProjectName = 628,
  TagsProjectNodeLocale = 629,
  TagsProjectParentChildren = 630,
  TagsProjectParentId = 631,
  TagsProjectSpaceId = 632,
  TagsProjectStartDate = 633,
  TagsProjectSubName = 634,
  TagsProjectSysRevision = 635,
  TagsProjectSysType = 636,
  TagsProjectTags = 637,
  TagsProjectTagsBlogPost = 638,
  TagsProjectTagsChildren = 639,
  TagsProjectTagsContentfulId = 640,
  TagsProjectTagsCreatedAt = 641,
  TagsProjectTagsId = 642,
  TagsProjectTagsLevel = 643,
  TagsProjectTagsName = 644,
  TagsProjectTagsNodeLocale = 645,
  TagsProjectTagsOss = 646,
  TagsProjectTagsProject = 647,
  TagsProjectTagsSkillGrpup = 648,
  TagsProjectTagsSkillMap = 649,
  TagsProjectTagsSpaceId = 650,
  TagsProjectTagsUpdatedAt = 651,
  TagsProjectUpdatedAt = 652,
  TagsSkillGrpup = 653,
  TagsSkillGrpupChildren = 654,
  TagsSkillGrpupChildrenChildren = 655,
  TagsSkillGrpupChildrenId = 656,
  TagsSkillGrpupContentfulId = 657,
  TagsSkillGrpupCreatedAt = 658,
  TagsSkillGrpupId = 659,
  TagsSkillGrpupInternalContent = 660,
  TagsSkillGrpupInternalContentDigest = 661,
  TagsSkillGrpupInternalContentFilePath = 662,
  TagsSkillGrpupInternalDescription = 663,
  TagsSkillGrpupInternalFieldOwners = 664,
  TagsSkillGrpupInternalIgnoreType = 665,
  TagsSkillGrpupInternalMediaType = 666,
  TagsSkillGrpupInternalOwner = 667,
  TagsSkillGrpupInternalType = 668,
  TagsSkillGrpupName = 669,
  TagsSkillGrpupNodeLocale = 670,
  TagsSkillGrpupParentChildren = 671,
  TagsSkillGrpupParentId = 672,
  TagsSkillGrpupSkillMap = 673,
  TagsSkillGrpupSkillMapChildren = 674,
  TagsSkillGrpupSkillMapContentfulId = 675,
  TagsSkillGrpupSkillMapCreatedAt = 676,
  TagsSkillGrpupSkillMapExpanded = 677,
  TagsSkillGrpupSkillMapId = 678,
  TagsSkillGrpupSkillMapName = 679,
  TagsSkillGrpupSkillMapNodeLocale = 680,
  TagsSkillGrpupSkillMapSkillGroups = 681,
  TagsSkillGrpupSkillMapSkills = 682,
  TagsSkillGrpupSkillMapSortKey = 683,
  TagsSkillGrpupSkillMapSpaceId = 684,
  TagsSkillGrpupSkillMapUpdatedAt = 685,
  TagsSkillGrpupSkills = 686,
  TagsSkillGrpupSkillsBlogPost = 687,
  TagsSkillGrpupSkillsChildren = 688,
  TagsSkillGrpupSkillsContentfulId = 689,
  TagsSkillGrpupSkillsCreatedAt = 690,
  TagsSkillGrpupSkillsId = 691,
  TagsSkillGrpupSkillsLevel = 692,
  TagsSkillGrpupSkillsName = 693,
  TagsSkillGrpupSkillsNodeLocale = 694,
  TagsSkillGrpupSkillsOss = 695,
  TagsSkillGrpupSkillsProject = 696,
  TagsSkillGrpupSkillsSkillGrpup = 697,
  TagsSkillGrpupSkillsSkillMap = 698,
  TagsSkillGrpupSkillsSpaceId = 699,
  TagsSkillGrpupSkillsUpdatedAt = 700,
  TagsSkillGrpupSpaceId = 701,
  TagsSkillGrpupSysRevision = 702,
  TagsSkillGrpupSysType = 703,
  TagsSkillGrpupUpdatedAt = 704,
  TagsSkillMap = 705,
  TagsSkillMapChildren = 706,
  TagsSkillMapChildrenChildren = 707,
  TagsSkillMapChildrenId = 708,
  TagsSkillMapContentfulId = 709,
  TagsSkillMapCreatedAt = 710,
  TagsSkillMapExpanded = 711,
  TagsSkillMapId = 712,
  TagsSkillMapInternalContent = 713,
  TagsSkillMapInternalContentDigest = 714,
  TagsSkillMapInternalContentFilePath = 715,
  TagsSkillMapInternalDescription = 716,
  TagsSkillMapInternalFieldOwners = 717,
  TagsSkillMapInternalIgnoreType = 718,
  TagsSkillMapInternalMediaType = 719,
  TagsSkillMapInternalOwner = 720,
  TagsSkillMapInternalType = 721,
  TagsSkillMapName = 722,
  TagsSkillMapNodeLocale = 723,
  TagsSkillMapParentChildren = 724,
  TagsSkillMapParentId = 725,
  TagsSkillMapSkillGroups = 726,
  TagsSkillMapSkillGroupsChildren = 727,
  TagsSkillMapSkillGroupsContentfulId = 728,
  TagsSkillMapSkillGroupsCreatedAt = 729,
  TagsSkillMapSkillGroupsId = 730,
  TagsSkillMapSkillGroupsName = 731,
  TagsSkillMapSkillGroupsNodeLocale = 732,
  TagsSkillMapSkillGroupsSkillMap = 733,
  TagsSkillMapSkillGroupsSkills = 734,
  TagsSkillMapSkillGroupsSpaceId = 735,
  TagsSkillMapSkillGroupsUpdatedAt = 736,
  TagsSkillMapSkills = 737,
  TagsSkillMapSkillsBlogPost = 738,
  TagsSkillMapSkillsChildren = 739,
  TagsSkillMapSkillsContentfulId = 740,
  TagsSkillMapSkillsCreatedAt = 741,
  TagsSkillMapSkillsId = 742,
  TagsSkillMapSkillsLevel = 743,
  TagsSkillMapSkillsName = 744,
  TagsSkillMapSkillsNodeLocale = 745,
  TagsSkillMapSkillsOss = 746,
  TagsSkillMapSkillsProject = 747,
  TagsSkillMapSkillsSkillGrpup = 748,
  TagsSkillMapSkillsSkillMap = 749,
  TagsSkillMapSkillsSpaceId = 750,
  TagsSkillMapSkillsUpdatedAt = 751,
  TagsSkillMapSortKey = 752,
  TagsSkillMapSpaceId = 753,
  TagsSkillMapSysRevision = 754,
  TagsSkillMapSysType = 755,
  TagsSkillMapUpdatedAt = 756,
  TagsSpaceId = 757,
  TagsSysRevision = 758,
  TagsSysType = 759,
  TagsUpdatedAt = 760,
  ThumbnailChildren = 761,
  ThumbnailChildrenChildren = 762,
  ThumbnailChildrenChildrenChildren = 763,
  ThumbnailChildrenChildrenId = 764,
  ThumbnailChildrenId = 765,
  ThumbnailChildrenInternalContent = 766,
  ThumbnailChildrenInternalContentDigest = 767,
  ThumbnailChildrenInternalContentFilePath = 768,
  ThumbnailChildrenInternalDescription = 769,
  ThumbnailChildrenInternalFieldOwners = 770,
  ThumbnailChildrenInternalIgnoreType = 771,
  ThumbnailChildrenInternalMediaType = 772,
  ThumbnailChildrenInternalOwner = 773,
  ThumbnailChildrenInternalType = 774,
  ThumbnailChildrenParentChildren = 775,
  ThumbnailChildrenParentId = 776,
  ThumbnailContentfulId = 777,
  ThumbnailCreatedAt = 778,
  ThumbnailDescription = 779,
  ThumbnailFileContentType = 780,
  ThumbnailFileDetailsSize = 781,
  ThumbnailFileFileName = 782,
  ThumbnailFileUrl = 783,
  ThumbnailFilename = 784,
  ThumbnailFilesize = 785,
  ThumbnailGatsbyImage = 786,
  ThumbnailGatsbyImageData = 787,
  ThumbnailHeight = 788,
  ThumbnailId = 789,
  ThumbnailInternalContent = 790,
  ThumbnailInternalContentDigest = 791,
  ThumbnailInternalContentFilePath = 792,
  ThumbnailInternalDescription = 793,
  ThumbnailInternalFieldOwners = 794,
  ThumbnailInternalIgnoreType = 795,
  ThumbnailInternalMediaType = 796,
  ThumbnailInternalOwner = 797,
  ThumbnailInternalType = 798,
  ThumbnailMimeType = 799,
  ThumbnailNodeLocale = 800,
  ThumbnailParentChildren = 801,
  ThumbnailParentChildrenChildren = 802,
  ThumbnailParentChildrenId = 803,
  ThumbnailParentId = 804,
  ThumbnailParentInternalContent = 805,
  ThumbnailParentInternalContentDigest = 806,
  ThumbnailParentInternalContentFilePath = 807,
  ThumbnailParentInternalDescription = 808,
  ThumbnailParentInternalFieldOwners = 809,
  ThumbnailParentInternalIgnoreType = 810,
  ThumbnailParentInternalMediaType = 811,
  ThumbnailParentInternalOwner = 812,
  ThumbnailParentInternalType = 813,
  ThumbnailParentParentChildren = 814,
  ThumbnailParentParentId = 815,
  ThumbnailPlaceholderUrl = 816,
  ThumbnailPublicUrl = 817,
  ThumbnailResizeHeight = 818,
  ThumbnailResizeSrc = 819,
  ThumbnailResizeWidth = 820,
  ThumbnailSize = 821,
  ThumbnailSpaceId = 822,
  ThumbnailSysRevision = 823,
  ThumbnailSysType = 824,
  ThumbnailTitle = 825,
  ThumbnailUpdatedAt = 826,
  ThumbnailUrl = 827,
  ThumbnailWidth = 828,
  Title = 829,
  Updated = 830,
  UpdatedAt = 831
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
  readonly blog_post: Maybe<ReadonlyArray<Maybe<ContentfulBlogPost>>>;
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
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
  BlogPost = 0,
  BlogPostCategoryBlogPost = 1,
  BlogPostCategoryBlogPostChildren = 2,
  BlogPostCategoryBlogPostChildrenContentfulBlogPostContentTextNode = 3,
  BlogPostCategoryBlogPostContentfulId = 4,
  BlogPostCategoryBlogPostCreated = 5,
  BlogPostCategoryBlogPostCreatedAt = 6,
  BlogPostCategoryBlogPostExcerpt = 7,
  BlogPostCategoryBlogPostGatsbyPath = 8,
  BlogPostCategoryBlogPostId = 9,
  BlogPostCategoryBlogPostNodeLocale = 10,
  BlogPostCategoryBlogPostSlug = 11,
  BlogPostCategoryBlogPostSpaceId = 12,
  BlogPostCategoryBlogPostTags = 13,
  BlogPostCategoryBlogPostTitle = 14,
  BlogPostCategoryBlogPostUpdated = 15,
  BlogPostCategoryBlogPostUpdatedAt = 16,
  BlogPostCategoryChildren = 17,
  BlogPostCategoryChildrenChildren = 18,
  BlogPostCategoryChildrenId = 19,
  BlogPostCategoryContentfulId = 20,
  BlogPostCategoryCreatedAt = 21,
  BlogPostCategoryId = 22,
  BlogPostCategoryInternalContent = 23,
  BlogPostCategoryInternalContentDigest = 24,
  BlogPostCategoryInternalContentFilePath = 25,
  BlogPostCategoryInternalDescription = 26,
  BlogPostCategoryInternalFieldOwners = 27,
  BlogPostCategoryInternalIgnoreType = 28,
  BlogPostCategoryInternalMediaType = 29,
  BlogPostCategoryInternalOwner = 30,
  BlogPostCategoryInternalType = 31,
  BlogPostCategoryName = 32,
  BlogPostCategoryNodeLocale = 33,
  BlogPostCategoryParentChildren = 34,
  BlogPostCategoryParentId = 35,
  BlogPostCategorySortKey = 36,
  BlogPostCategorySpaceId = 37,
  BlogPostCategorySysRevision = 38,
  BlogPostCategorySysType = 39,
  BlogPostCategoryUpdatedAt = 40,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 41,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 42,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 43,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 44,
  BlogPostChildContentfulBlogPostContentTextNodeId = 45,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 46,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 47,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentFilePath = 48,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 49,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 50,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 51,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 52,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 53,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 54,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 55,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 56,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 57,
  BlogPostChildren = 58,
  BlogPostChildrenContentfulBlogPostContentTextNode = 59,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 60,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 61,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 62,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 63,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 64,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 65,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 66,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 67,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 68,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 69,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 70,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 71,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 72,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 73,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 74,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 75,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 76,
  BlogPostChildrenChildren = 77,
  BlogPostChildrenChildrenChildren = 78,
  BlogPostChildrenChildrenId = 79,
  BlogPostChildrenId = 80,
  BlogPostChildrenInternalContent = 81,
  BlogPostChildrenInternalContentDigest = 82,
  BlogPostChildrenInternalContentFilePath = 83,
  BlogPostChildrenInternalDescription = 84,
  BlogPostChildrenInternalFieldOwners = 85,
  BlogPostChildrenInternalIgnoreType = 86,
  BlogPostChildrenInternalMediaType = 87,
  BlogPostChildrenInternalOwner = 88,
  BlogPostChildrenInternalType = 89,
  BlogPostChildrenParentChildren = 90,
  BlogPostChildrenParentId = 91,
  BlogPostContentChildren = 92,
  BlogPostContentChildrenChildren = 93,
  BlogPostContentChildrenId = 94,
  BlogPostContentContent = 95,
  BlogPostContentId = 96,
  BlogPostContentInternalContent = 97,
  BlogPostContentInternalContentDigest = 98,
  BlogPostContentInternalContentFilePath = 99,
  BlogPostContentInternalDescription = 100,
  BlogPostContentInternalFieldOwners = 101,
  BlogPostContentInternalIgnoreType = 102,
  BlogPostContentInternalMediaType = 103,
  BlogPostContentInternalOwner = 104,
  BlogPostContentInternalType = 105,
  BlogPostContentParentChildren = 106,
  BlogPostContentParentId = 107,
  BlogPostContentSysType = 108,
  BlogPostContentfulId = 109,
  BlogPostCreated = 110,
  BlogPostCreatedAt = 111,
  BlogPostExcerpt = 112,
  BlogPostGatsbyPath = 113,
  BlogPostId = 114,
  BlogPostInternalContent = 115,
  BlogPostInternalContentDigest = 116,
  BlogPostInternalContentFilePath = 117,
  BlogPostInternalDescription = 118,
  BlogPostInternalFieldOwners = 119,
  BlogPostInternalIgnoreType = 120,
  BlogPostInternalMediaType = 121,
  BlogPostInternalOwner = 122,
  BlogPostInternalType = 123,
  BlogPostNodeLocale = 124,
  BlogPostParentChildren = 125,
  BlogPostParentChildrenChildren = 126,
  BlogPostParentChildrenId = 127,
  BlogPostParentId = 128,
  BlogPostParentInternalContent = 129,
  BlogPostParentInternalContentDigest = 130,
  BlogPostParentInternalContentFilePath = 131,
  BlogPostParentInternalDescription = 132,
  BlogPostParentInternalFieldOwners = 133,
  BlogPostParentInternalIgnoreType = 134,
  BlogPostParentInternalMediaType = 135,
  BlogPostParentInternalOwner = 136,
  BlogPostParentInternalType = 137,
  BlogPostParentParentChildren = 138,
  BlogPostParentParentId = 139,
  BlogPostSlug = 140,
  BlogPostSpaceId = 141,
  BlogPostSysRevision = 142,
  BlogPostSysType = 143,
  BlogPostTags = 144,
  BlogPostTagsBlogPost = 145,
  BlogPostTagsBlogPostChildren = 146,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 147,
  BlogPostTagsBlogPostContentfulId = 148,
  BlogPostTagsBlogPostCreated = 149,
  BlogPostTagsBlogPostCreatedAt = 150,
  BlogPostTagsBlogPostExcerpt = 151,
  BlogPostTagsBlogPostGatsbyPath = 152,
  BlogPostTagsBlogPostId = 153,
  BlogPostTagsBlogPostNodeLocale = 154,
  BlogPostTagsBlogPostSlug = 155,
  BlogPostTagsBlogPostSpaceId = 156,
  BlogPostTagsBlogPostTags = 157,
  BlogPostTagsBlogPostTitle = 158,
  BlogPostTagsBlogPostUpdated = 159,
  BlogPostTagsBlogPostUpdatedAt = 160,
  BlogPostTagsChildren = 161,
  BlogPostTagsChildrenChildren = 162,
  BlogPostTagsChildrenId = 163,
  BlogPostTagsContentfulId = 164,
  BlogPostTagsCreatedAt = 165,
  BlogPostTagsId = 166,
  BlogPostTagsInternalContent = 167,
  BlogPostTagsInternalContentDigest = 168,
  BlogPostTagsInternalContentFilePath = 169,
  BlogPostTagsInternalDescription = 170,
  BlogPostTagsInternalFieldOwners = 171,
  BlogPostTagsInternalIgnoreType = 172,
  BlogPostTagsInternalMediaType = 173,
  BlogPostTagsInternalOwner = 174,
  BlogPostTagsInternalType = 175,
  BlogPostTagsLevel = 176,
  BlogPostTagsName = 177,
  BlogPostTagsNodeLocale = 178,
  BlogPostTagsOss = 179,
  BlogPostTagsOssChildren = 180,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 181,
  BlogPostTagsOssContentfulId = 182,
  BlogPostTagsOssCreatedAt = 183,
  BlogPostTagsOssHref = 184,
  BlogPostTagsOssId = 185,
  BlogPostTagsOssName = 186,
  BlogPostTagsOssNodeLocale = 187,
  BlogPostTagsOssSpaceId = 188,
  BlogPostTagsOssStartDate = 189,
  BlogPostTagsOssSubName = 190,
  BlogPostTagsOssTags = 191,
  BlogPostTagsOssUpdatedAt = 192,
  BlogPostTagsParentChildren = 193,
  BlogPostTagsParentId = 194,
  BlogPostTagsProject = 195,
  BlogPostTagsProjectChildren = 196,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 197,
  BlogPostTagsProjectContentfulId = 198,
  BlogPostTagsProjectCreatedAt = 199,
  BlogPostTagsProjectEndDate = 200,
  BlogPostTagsProjectId = 201,
  BlogPostTagsProjectName = 202,
  BlogPostTagsProjectNodeLocale = 203,
  BlogPostTagsProjectSpaceId = 204,
  BlogPostTagsProjectStartDate = 205,
  BlogPostTagsProjectSubName = 206,
  BlogPostTagsProjectTags = 207,
  BlogPostTagsProjectUpdatedAt = 208,
  BlogPostTagsSkillGrpup = 209,
  BlogPostTagsSkillGrpupChildren = 210,
  BlogPostTagsSkillGrpupContentfulId = 211,
  BlogPostTagsSkillGrpupCreatedAt = 212,
  BlogPostTagsSkillGrpupId = 213,
  BlogPostTagsSkillGrpupName = 214,
  BlogPostTagsSkillGrpupNodeLocale = 215,
  BlogPostTagsSkillGrpupSkillMap = 216,
  BlogPostTagsSkillGrpupSkills = 217,
  BlogPostTagsSkillGrpupSpaceId = 218,
  BlogPostTagsSkillGrpupUpdatedAt = 219,
  BlogPostTagsSkillMap = 220,
  BlogPostTagsSkillMapChildren = 221,
  BlogPostTagsSkillMapContentfulId = 222,
  BlogPostTagsSkillMapCreatedAt = 223,
  BlogPostTagsSkillMapExpanded = 224,
  BlogPostTagsSkillMapId = 225,
  BlogPostTagsSkillMapName = 226,
  BlogPostTagsSkillMapNodeLocale = 227,
  BlogPostTagsSkillMapSkillGroups = 228,
  BlogPostTagsSkillMapSkills = 229,
  BlogPostTagsSkillMapSortKey = 230,
  BlogPostTagsSkillMapSpaceId = 231,
  BlogPostTagsSkillMapUpdatedAt = 232,
  BlogPostTagsSpaceId = 233,
  BlogPostTagsSysRevision = 234,
  BlogPostTagsSysType = 235,
  BlogPostTagsUpdatedAt = 236,
  BlogPostThumbnailChildren = 237,
  BlogPostThumbnailChildrenChildren = 238,
  BlogPostThumbnailChildrenId = 239,
  BlogPostThumbnailContentfulId = 240,
  BlogPostThumbnailCreatedAt = 241,
  BlogPostThumbnailDescription = 242,
  BlogPostThumbnailFileContentType = 243,
  BlogPostThumbnailFileFileName = 244,
  BlogPostThumbnailFileUrl = 245,
  BlogPostThumbnailFilename = 246,
  BlogPostThumbnailFilesize = 247,
  BlogPostThumbnailGatsbyImage = 248,
  BlogPostThumbnailGatsbyImageData = 249,
  BlogPostThumbnailHeight = 250,
  BlogPostThumbnailId = 251,
  BlogPostThumbnailInternalContent = 252,
  BlogPostThumbnailInternalContentDigest = 253,
  BlogPostThumbnailInternalContentFilePath = 254,
  BlogPostThumbnailInternalDescription = 255,
  BlogPostThumbnailInternalFieldOwners = 256,
  BlogPostThumbnailInternalIgnoreType = 257,
  BlogPostThumbnailInternalMediaType = 258,
  BlogPostThumbnailInternalOwner = 259,
  BlogPostThumbnailInternalType = 260,
  BlogPostThumbnailMimeType = 261,
  BlogPostThumbnailNodeLocale = 262,
  BlogPostThumbnailParentChildren = 263,
  BlogPostThumbnailParentId = 264,
  BlogPostThumbnailPlaceholderUrl = 265,
  BlogPostThumbnailPublicUrl = 266,
  BlogPostThumbnailResizeHeight = 267,
  BlogPostThumbnailResizeSrc = 268,
  BlogPostThumbnailResizeWidth = 269,
  BlogPostThumbnailSize = 270,
  BlogPostThumbnailSpaceId = 271,
  BlogPostThumbnailSysRevision = 272,
  BlogPostThumbnailSysType = 273,
  BlogPostThumbnailTitle = 274,
  BlogPostThumbnailUpdatedAt = 275,
  BlogPostThumbnailUrl = 276,
  BlogPostThumbnailWidth = 277,
  BlogPostTitle = 278,
  BlogPostUpdated = 279,
  BlogPostUpdatedAt = 280,
  Children = 281,
  ChildrenChildren = 282,
  ChildrenChildrenChildren = 283,
  ChildrenChildrenChildrenChildren = 284,
  ChildrenChildrenChildrenId = 285,
  ChildrenChildrenId = 286,
  ChildrenChildrenInternalContent = 287,
  ChildrenChildrenInternalContentDigest = 288,
  ChildrenChildrenInternalContentFilePath = 289,
  ChildrenChildrenInternalDescription = 290,
  ChildrenChildrenInternalFieldOwners = 291,
  ChildrenChildrenInternalIgnoreType = 292,
  ChildrenChildrenInternalMediaType = 293,
  ChildrenChildrenInternalOwner = 294,
  ChildrenChildrenInternalType = 295,
  ChildrenChildrenParentChildren = 296,
  ChildrenChildrenParentId = 297,
  ChildrenId = 298,
  ChildrenInternalContent = 299,
  ChildrenInternalContentDigest = 300,
  ChildrenInternalContentFilePath = 301,
  ChildrenInternalDescription = 302,
  ChildrenInternalFieldOwners = 303,
  ChildrenInternalIgnoreType = 304,
  ChildrenInternalMediaType = 305,
  ChildrenInternalOwner = 306,
  ChildrenInternalType = 307,
  ChildrenParentChildren = 308,
  ChildrenParentChildrenChildren = 309,
  ChildrenParentChildrenId = 310,
  ChildrenParentId = 311,
  ChildrenParentInternalContent = 312,
  ChildrenParentInternalContentDigest = 313,
  ChildrenParentInternalContentFilePath = 314,
  ChildrenParentInternalDescription = 315,
  ChildrenParentInternalFieldOwners = 316,
  ChildrenParentInternalIgnoreType = 317,
  ChildrenParentInternalMediaType = 318,
  ChildrenParentInternalOwner = 319,
  ChildrenParentInternalType = 320,
  ChildrenParentParentChildren = 321,
  ChildrenParentParentId = 322,
  ContentfulId = 323,
  CreatedAt = 324,
  Id = 325,
  InternalContent = 326,
  InternalContentDigest = 327,
  InternalContentFilePath = 328,
  InternalDescription = 329,
  InternalFieldOwners = 330,
  InternalIgnoreType = 331,
  InternalMediaType = 332,
  InternalOwner = 333,
  InternalType = 334,
  Name = 335,
  NodeLocale = 336,
  ParentChildren = 337,
  ParentChildrenChildren = 338,
  ParentChildrenChildrenChildren = 339,
  ParentChildrenChildrenId = 340,
  ParentChildrenId = 341,
  ParentChildrenInternalContent = 342,
  ParentChildrenInternalContentDigest = 343,
  ParentChildrenInternalContentFilePath = 344,
  ParentChildrenInternalDescription = 345,
  ParentChildrenInternalFieldOwners = 346,
  ParentChildrenInternalIgnoreType = 347,
  ParentChildrenInternalMediaType = 348,
  ParentChildrenInternalOwner = 349,
  ParentChildrenInternalType = 350,
  ParentChildrenParentChildren = 351,
  ParentChildrenParentId = 352,
  ParentId = 353,
  ParentInternalContent = 354,
  ParentInternalContentDigest = 355,
  ParentInternalContentFilePath = 356,
  ParentInternalDescription = 357,
  ParentInternalFieldOwners = 358,
  ParentInternalIgnoreType = 359,
  ParentInternalMediaType = 360,
  ParentInternalOwner = 361,
  ParentInternalType = 362,
  ParentParentChildren = 363,
  ParentParentChildrenChildren = 364,
  ParentParentChildrenId = 365,
  ParentParentId = 366,
  ParentParentInternalContent = 367,
  ParentParentInternalContentDigest = 368,
  ParentParentInternalContentFilePath = 369,
  ParentParentInternalDescription = 370,
  ParentParentInternalFieldOwners = 371,
  ParentParentInternalIgnoreType = 372,
  ParentParentInternalMediaType = 373,
  ParentParentInternalOwner = 374,
  ParentParentInternalType = 375,
  ParentParentParentChildren = 376,
  ParentParentParentId = 377,
  SortKey = 378,
  SpaceId = 379,
  SysContentTypeSysId = 380,
  SysContentTypeSysLinkType = 381,
  SysContentTypeSysType = 382,
  SysRevision = 383,
  SysType = 384,
  UpdatedAt = 385
}

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
  IconChildContentfulIconSvgTextNodeChildren = 181,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 182,
  IconChildContentfulIconSvgTextNodeChildrenId = 183,
  IconChildContentfulIconSvgTextNodeId = 184,
  IconChildContentfulIconSvgTextNodeInternalContent = 185,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 186,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 187,
  IconChildContentfulIconSvgTextNodeInternalDescription = 188,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 189,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 190,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 191,
  IconChildContentfulIconSvgTextNodeInternalOwner = 192,
  IconChildContentfulIconSvgTextNodeInternalType = 193,
  IconChildContentfulIconSvgTextNodeParentChildren = 194,
  IconChildContentfulIconSvgTextNodeParentId = 195,
  IconChildContentfulIconSvgTextNodeSvg = 196,
  IconChildContentfulIconSvgTextNodeSysType = 197,
  IconChildren = 198,
  IconChildrenContentfulIconSvgTextNode = 199,
  IconChildrenContentfulIconSvgTextNodeChildren = 200,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 201,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 202,
  IconChildrenContentfulIconSvgTextNodeId = 203,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 204,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 205,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 206,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 207,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 208,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 209,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 210,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 211,
  IconChildrenContentfulIconSvgTextNodeInternalType = 212,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 213,
  IconChildrenContentfulIconSvgTextNodeParentId = 214,
  IconChildrenContentfulIconSvgTextNodeSvg = 215,
  IconChildrenContentfulIconSvgTextNodeSysType = 216,
  IconChildrenChildren = 217,
  IconChildrenChildrenChildren = 218,
  IconChildrenChildrenId = 219,
  IconChildrenId = 220,
  IconChildrenInternalContent = 221,
  IconChildrenInternalContentDigest = 222,
  IconChildrenInternalContentFilePath = 223,
  IconChildrenInternalDescription = 224,
  IconChildrenInternalFieldOwners = 225,
  IconChildrenInternalIgnoreType = 226,
  IconChildrenInternalMediaType = 227,
  IconChildrenInternalOwner = 228,
  IconChildrenInternalType = 229,
  IconChildrenParentChildren = 230,
  IconChildrenParentId = 231,
  IconContact = 232,
  IconContactChildren = 233,
  IconContactChildrenChildren = 234,
  IconContactChildrenId = 235,
  IconContactContentfulId = 236,
  IconContactCreatedAt = 237,
  IconContactHref = 238,
  IconContactIconSvgDarkChildren = 239,
  IconContactIconSvgDarkContentfulId = 240,
  IconContactIconSvgDarkCreatedAt = 241,
  IconContactIconSvgDarkDescription = 242,
  IconContactIconSvgDarkFilename = 243,
  IconContactIconSvgDarkFilesize = 244,
  IconContactIconSvgDarkGatsbyImage = 245,
  IconContactIconSvgDarkGatsbyImageData = 246,
  IconContactIconSvgDarkHeight = 247,
  IconContactIconSvgDarkId = 248,
  IconContactIconSvgDarkMimeType = 249,
  IconContactIconSvgDarkNodeLocale = 250,
  IconContactIconSvgDarkPlaceholderUrl = 251,
  IconContactIconSvgDarkPublicUrl = 252,
  IconContactIconSvgDarkSize = 253,
  IconContactIconSvgDarkSpaceId = 254,
  IconContactIconSvgDarkTitle = 255,
  IconContactIconSvgDarkUpdatedAt = 256,
  IconContactIconSvgDarkUrl = 257,
  IconContactIconSvgDarkWidth = 258,
  IconContactIconSvgLightChildren = 259,
  IconContactIconSvgLightContentfulId = 260,
  IconContactIconSvgLightCreatedAt = 261,
  IconContactIconSvgLightDescription = 262,
  IconContactIconSvgLightFilename = 263,
  IconContactIconSvgLightFilesize = 264,
  IconContactIconSvgLightGatsbyImage = 265,
  IconContactIconSvgLightGatsbyImageData = 266,
  IconContactIconSvgLightHeight = 267,
  IconContactIconSvgLightId = 268,
  IconContactIconSvgLightMimeType = 269,
  IconContactIconSvgLightNodeLocale = 270,
  IconContactIconSvgLightPlaceholderUrl = 271,
  IconContactIconSvgLightPublicUrl = 272,
  IconContactIconSvgLightSize = 273,
  IconContactIconSvgLightSpaceId = 274,
  IconContactIconSvgLightTitle = 275,
  IconContactIconSvgLightUpdatedAt = 276,
  IconContactIconSvgLightUrl = 277,
  IconContactIconSvgLightWidth = 278,
  IconContactIconChildren = 279,
  IconContactIconChildrenContentfulIconSvgTextNode = 280,
  IconContactIconContact = 281,
  IconContactIconContentfulId = 282,
  IconContactIconCreatedAt = 283,
  IconContactIconHistory = 284,
  IconContactIconId = 285,
  IconContactIconName = 286,
  IconContactIconNodeLocale = 287,
  IconContactIconOss = 288,
  IconContactIconProject = 289,
  IconContactIconSpaceId = 290,
  IconContactIconUpdatedAt = 291,
  IconContactIconWhatICanDo = 292,
  IconContactId = 293,
  IconContactInternalContent = 294,
  IconContactInternalContentDigest = 295,
  IconContactInternalContentFilePath = 296,
  IconContactInternalDescription = 297,
  IconContactInternalFieldOwners = 298,
  IconContactInternalIgnoreType = 299,
  IconContactInternalMediaType = 300,
  IconContactInternalOwner = 301,
  IconContactInternalType = 302,
  IconContactName = 303,
  IconContactNodeLocale = 304,
  IconContactParentChildren = 305,
  IconContactParentId = 306,
  IconContactSortKey = 307,
  IconContactSpaceId = 308,
  IconContactSubName = 309,
  IconContactSysRevision = 310,
  IconContactSysType = 311,
  IconContactUpdatedAt = 312,
  IconContentfulId = 313,
  IconCreatedAt = 314,
  IconHistory = 315,
  IconHistoryChildren = 316,
  IconHistoryChildrenChildren = 317,
  IconHistoryChildrenId = 318,
  IconHistoryContentfulId = 319,
  IconHistoryCreatedAt = 320,
  IconHistoryDate = 321,
  IconHistoryIconChildren = 322,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 323,
  IconHistoryIconContact = 324,
  IconHistoryIconContentfulId = 325,
  IconHistoryIconCreatedAt = 326,
  IconHistoryIconHistory = 327,
  IconHistoryIconId = 328,
  IconHistoryIconName = 329,
  IconHistoryIconNodeLocale = 330,
  IconHistoryIconOss = 331,
  IconHistoryIconProject = 332,
  IconHistoryIconSpaceId = 333,
  IconHistoryIconUpdatedAt = 334,
  IconHistoryIconWhatICanDo = 335,
  IconHistoryId = 336,
  IconHistoryInternalContent = 337,
  IconHistoryInternalContentDigest = 338,
  IconHistoryInternalContentFilePath = 339,
  IconHistoryInternalDescription = 340,
  IconHistoryInternalFieldOwners = 341,
  IconHistoryInternalIgnoreType = 342,
  IconHistoryInternalMediaType = 343,
  IconHistoryInternalOwner = 344,
  IconHistoryInternalType = 345,
  IconHistoryName = 346,
  IconHistoryNodeLocale = 347,
  IconHistoryParentChildren = 348,
  IconHistoryParentId = 349,
  IconHistorySpaceId = 350,
  IconHistorySubName = 351,
  IconHistorySysRevision = 352,
  IconHistorySysType = 353,
  IconHistoryUpdatedAt = 354,
  IconId = 355,
  IconInternalContent = 356,
  IconInternalContentDigest = 357,
  IconInternalContentFilePath = 358,
  IconInternalDescription = 359,
  IconInternalFieldOwners = 360,
  IconInternalIgnoreType = 361,
  IconInternalMediaType = 362,
  IconInternalOwner = 363,
  IconInternalType = 364,
  IconName = 365,
  IconNodeLocale = 366,
  IconOss = 367,
  IconOssChildContentfulOssDetailTextNodeChildren = 368,
  IconOssChildContentfulOssDetailTextNodeDetail = 369,
  IconOssChildContentfulOssDetailTextNodeId = 370,
  IconOssChildren = 371,
  IconOssChildrenContentfulOssDetailTextNode = 372,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 373,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 374,
  IconOssChildrenContentfulOssDetailTextNodeId = 375,
  IconOssChildrenChildren = 376,
  IconOssChildrenId = 377,
  IconOssContentfulId = 378,
  IconOssCreatedAt = 379,
  IconOssDetailChildren = 380,
  IconOssDetailDetail = 381,
  IconOssDetailId = 382,
  IconOssHref = 383,
  IconOssIconChildren = 384,
  IconOssIconChildrenContentfulIconSvgTextNode = 385,
  IconOssIconContact = 386,
  IconOssIconContentfulId = 387,
  IconOssIconCreatedAt = 388,
  IconOssIconHistory = 389,
  IconOssIconId = 390,
  IconOssIconName = 391,
  IconOssIconNodeLocale = 392,
  IconOssIconOss = 393,
  IconOssIconProject = 394,
  IconOssIconSpaceId = 395,
  IconOssIconUpdatedAt = 396,
  IconOssIconWhatICanDo = 397,
  IconOssId = 398,
  IconOssImageChildren = 399,
  IconOssImageContentfulId = 400,
  IconOssImageCreatedAt = 401,
  IconOssImageDescription = 402,
  IconOssImageFilename = 403,
  IconOssImageFilesize = 404,
  IconOssImageGatsbyImage = 405,
  IconOssImageGatsbyImageData = 406,
  IconOssImageHeight = 407,
  IconOssImageId = 408,
  IconOssImageMimeType = 409,
  IconOssImageNodeLocale = 410,
  IconOssImagePlaceholderUrl = 411,
  IconOssImagePublicUrl = 412,
  IconOssImageSize = 413,
  IconOssImageSpaceId = 414,
  IconOssImageTitle = 415,
  IconOssImageUpdatedAt = 416,
  IconOssImageUrl = 417,
  IconOssImageWidth = 418,
  IconOssInternalContent = 419,
  IconOssInternalContentDigest = 420,
  IconOssInternalContentFilePath = 421,
  IconOssInternalDescription = 422,
  IconOssInternalFieldOwners = 423,
  IconOssInternalIgnoreType = 424,
  IconOssInternalMediaType = 425,
  IconOssInternalOwner = 426,
  IconOssInternalType = 427,
  IconOssName = 428,
  IconOssNodeLocale = 429,
  IconOssParentChildren = 430,
  IconOssParentId = 431,
  IconOssSpaceId = 432,
  IconOssStartDate = 433,
  IconOssSubName = 434,
  IconOssSysRevision = 435,
  IconOssSysType = 436,
  IconOssTags = 437,
  IconOssTagsBlogPost = 438,
  IconOssTagsChildren = 439,
  IconOssTagsContentfulId = 440,
  IconOssTagsCreatedAt = 441,
  IconOssTagsId = 442,
  IconOssTagsLevel = 443,
  IconOssTagsName = 444,
  IconOssTagsNodeLocale = 445,
  IconOssTagsOss = 446,
  IconOssTagsProject = 447,
  IconOssTagsSkillGrpup = 448,
  IconOssTagsSkillMap = 449,
  IconOssTagsSpaceId = 450,
  IconOssTagsUpdatedAt = 451,
  IconOssUpdatedAt = 452,
  IconParentChildren = 453,
  IconParentChildrenChildren = 454,
  IconParentChildrenId = 455,
  IconParentId = 456,
  IconParentInternalContent = 457,
  IconParentInternalContentDigest = 458,
  IconParentInternalContentFilePath = 459,
  IconParentInternalDescription = 460,
  IconParentInternalFieldOwners = 461,
  IconParentInternalIgnoreType = 462,
  IconParentInternalMediaType = 463,
  IconParentInternalOwner = 464,
  IconParentInternalType = 465,
  IconParentParentChildren = 466,
  IconParentParentId = 467,
  IconProject = 468,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 469,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 470,
  IconProjectChildContentfulProjectDetailTextNodeId = 471,
  IconProjectChildren = 472,
  IconProjectChildrenContentfulProjectDetailTextNode = 473,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 474,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 475,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 476,
  IconProjectChildrenChildren = 477,
  IconProjectChildrenId = 478,
  IconProjectContentfulId = 479,
  IconProjectCreatedAt = 480,
  IconProjectDetailChildren = 481,
  IconProjectDetailDetail = 482,
  IconProjectDetailId = 483,
  IconProjectEndDate = 484,
  IconProjectIconChildren = 485,
  IconProjectIconChildrenContentfulIconSvgTextNode = 486,
  IconProjectIconContact = 487,
  IconProjectIconContentfulId = 488,
  IconProjectIconCreatedAt = 489,
  IconProjectIconHistory = 490,
  IconProjectIconId = 491,
  IconProjectIconName = 492,
  IconProjectIconNodeLocale = 493,
  IconProjectIconOss = 494,
  IconProjectIconProject = 495,
  IconProjectIconSpaceId = 496,
  IconProjectIconUpdatedAt = 497,
  IconProjectIconWhatICanDo = 498,
  IconProjectId = 499,
  IconProjectInternalContent = 500,
  IconProjectInternalContentDigest = 501,
  IconProjectInternalContentFilePath = 502,
  IconProjectInternalDescription = 503,
  IconProjectInternalFieldOwners = 504,
  IconProjectInternalIgnoreType = 505,
  IconProjectInternalMediaType = 506,
  IconProjectInternalOwner = 507,
  IconProjectInternalType = 508,
  IconProjectName = 509,
  IconProjectNodeLocale = 510,
  IconProjectParentChildren = 511,
  IconProjectParentId = 512,
  IconProjectSpaceId = 513,
  IconProjectStartDate = 514,
  IconProjectSubName = 515,
  IconProjectSysRevision = 516,
  IconProjectSysType = 517,
  IconProjectTags = 518,
  IconProjectTagsBlogPost = 519,
  IconProjectTagsChildren = 520,
  IconProjectTagsContentfulId = 521,
  IconProjectTagsCreatedAt = 522,
  IconProjectTagsId = 523,
  IconProjectTagsLevel = 524,
  IconProjectTagsName = 525,
  IconProjectTagsNodeLocale = 526,
  IconProjectTagsOss = 527,
  IconProjectTagsProject = 528,
  IconProjectTagsSkillGrpup = 529,
  IconProjectTagsSkillMap = 530,
  IconProjectTagsSpaceId = 531,
  IconProjectTagsUpdatedAt = 532,
  IconProjectUpdatedAt = 533,
  IconSpaceId = 534,
  IconSvgChildren = 535,
  IconSvgChildrenChildren = 536,
  IconSvgChildrenId = 537,
  IconSvgId = 538,
  IconSvgInternalContent = 539,
  IconSvgInternalContentDigest = 540,
  IconSvgInternalContentFilePath = 541,
  IconSvgInternalDescription = 542,
  IconSvgInternalFieldOwners = 543,
  IconSvgInternalIgnoreType = 544,
  IconSvgInternalMediaType = 545,
  IconSvgInternalOwner = 546,
  IconSvgInternalType = 547,
  IconSvgParentChildren = 548,
  IconSvgParentId = 549,
  IconSvgSvg = 550,
  IconSvgSysType = 551,
  IconSysRevision = 552,
  IconSysType = 553,
  IconUpdatedAt = 554,
  IconWhatICanDo = 555,
  IconWhatICanDoChildren = 556,
  IconWhatICanDoChildrenChildren = 557,
  IconWhatICanDoChildrenId = 558,
  IconWhatICanDoContentfulId = 559,
  IconWhatICanDoCreatedAt = 560,
  IconWhatICanDoIconChildren = 561,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 562,
  IconWhatICanDoIconContact = 563,
  IconWhatICanDoIconContentfulId = 564,
  IconWhatICanDoIconCreatedAt = 565,
  IconWhatICanDoIconHistory = 566,
  IconWhatICanDoIconId = 567,
  IconWhatICanDoIconName = 568,
  IconWhatICanDoIconNodeLocale = 569,
  IconWhatICanDoIconOss = 570,
  IconWhatICanDoIconProject = 571,
  IconWhatICanDoIconSpaceId = 572,
  IconWhatICanDoIconUpdatedAt = 573,
  IconWhatICanDoIconWhatICanDo = 574,
  IconWhatICanDoId = 575,
  IconWhatICanDoInternalContent = 576,
  IconWhatICanDoInternalContentDigest = 577,
  IconWhatICanDoInternalContentFilePath = 578,
  IconWhatICanDoInternalDescription = 579,
  IconWhatICanDoInternalFieldOwners = 580,
  IconWhatICanDoInternalIgnoreType = 581,
  IconWhatICanDoInternalMediaType = 582,
  IconWhatICanDoInternalOwner = 583,
  IconWhatICanDoInternalType = 584,
  IconWhatICanDoName = 585,
  IconWhatICanDoNodeLocale = 586,
  IconWhatICanDoParentChildren = 587,
  IconWhatICanDoParentId = 588,
  IconWhatICanDoSortKey = 589,
  IconWhatICanDoSpaceId = 590,
  IconWhatICanDoSubName = 591,
  IconWhatICanDoSysRevision = 592,
  IconWhatICanDoSysType = 593,
  IconWhatICanDoUpdatedAt = 594,
  Id = 595,
  InternalContent = 596,
  InternalContentDigest = 597,
  InternalContentFilePath = 598,
  InternalDescription = 599,
  InternalFieldOwners = 600,
  InternalIgnoreType = 601,
  InternalMediaType = 602,
  InternalOwner = 603,
  InternalType = 604,
  Name = 605,
  NodeLocale = 606,
  ParentChildren = 607,
  ParentChildrenChildren = 608,
  ParentChildrenChildrenChildren = 609,
  ParentChildrenChildrenId = 610,
  ParentChildrenId = 611,
  ParentChildrenInternalContent = 612,
  ParentChildrenInternalContentDigest = 613,
  ParentChildrenInternalContentFilePath = 614,
  ParentChildrenInternalDescription = 615,
  ParentChildrenInternalFieldOwners = 616,
  ParentChildrenInternalIgnoreType = 617,
  ParentChildrenInternalMediaType = 618,
  ParentChildrenInternalOwner = 619,
  ParentChildrenInternalType = 620,
  ParentChildrenParentChildren = 621,
  ParentChildrenParentId = 622,
  ParentId = 623,
  ParentInternalContent = 624,
  ParentInternalContentDigest = 625,
  ParentInternalContentFilePath = 626,
  ParentInternalDescription = 627,
  ParentInternalFieldOwners = 628,
  ParentInternalIgnoreType = 629,
  ParentInternalMediaType = 630,
  ParentInternalOwner = 631,
  ParentInternalType = 632,
  ParentParentChildren = 633,
  ParentParentChildrenChildren = 634,
  ParentParentChildrenId = 635,
  ParentParentId = 636,
  ParentParentInternalContent = 637,
  ParentParentInternalContentDigest = 638,
  ParentParentInternalContentFilePath = 639,
  ParentParentInternalDescription = 640,
  ParentParentInternalFieldOwners = 641,
  ParentParentInternalIgnoreType = 642,
  ParentParentInternalMediaType = 643,
  ParentParentInternalOwner = 644,
  ParentParentInternalType = 645,
  ParentParentParentChildren = 646,
  ParentParentParentId = 647,
  SortKey = 648,
  SpaceId = 649,
  SubName = 650,
  SysContentTypeSysId = 651,
  SysContentTypeSysLinkType = 652,
  SysContentTypeSysType = 653,
  SysRevision = 654,
  SysType = 655,
  UpdatedAt = 656
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
  IconChildContentfulIconSvgTextNodeChildren = 45,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 46,
  IconChildContentfulIconSvgTextNodeChildrenId = 47,
  IconChildContentfulIconSvgTextNodeId = 48,
  IconChildContentfulIconSvgTextNodeInternalContent = 49,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 50,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 51,
  IconChildContentfulIconSvgTextNodeInternalDescription = 52,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 53,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 54,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 55,
  IconChildContentfulIconSvgTextNodeInternalOwner = 56,
  IconChildContentfulIconSvgTextNodeInternalType = 57,
  IconChildContentfulIconSvgTextNodeParentChildren = 58,
  IconChildContentfulIconSvgTextNodeParentId = 59,
  IconChildContentfulIconSvgTextNodeSvg = 60,
  IconChildContentfulIconSvgTextNodeSysType = 61,
  IconChildren = 62,
  IconChildrenContentfulIconSvgTextNode = 63,
  IconChildrenContentfulIconSvgTextNodeChildren = 64,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 65,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 66,
  IconChildrenContentfulIconSvgTextNodeId = 67,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 68,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 69,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 70,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 71,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 72,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 73,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 74,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 75,
  IconChildrenContentfulIconSvgTextNodeInternalType = 76,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 77,
  IconChildrenContentfulIconSvgTextNodeParentId = 78,
  IconChildrenContentfulIconSvgTextNodeSvg = 79,
  IconChildrenContentfulIconSvgTextNodeSysType = 80,
  IconChildrenChildren = 81,
  IconChildrenChildrenChildren = 82,
  IconChildrenChildrenId = 83,
  IconChildrenId = 84,
  IconChildrenInternalContent = 85,
  IconChildrenInternalContentDigest = 86,
  IconChildrenInternalContentFilePath = 87,
  IconChildrenInternalDescription = 88,
  IconChildrenInternalFieldOwners = 89,
  IconChildrenInternalIgnoreType = 90,
  IconChildrenInternalMediaType = 91,
  IconChildrenInternalOwner = 92,
  IconChildrenInternalType = 93,
  IconChildrenParentChildren = 94,
  IconChildrenParentId = 95,
  IconContact = 96,
  IconContactChildren = 97,
  IconContactChildrenChildren = 98,
  IconContactChildrenId = 99,
  IconContactContentfulId = 100,
  IconContactCreatedAt = 101,
  IconContactHref = 102,
  IconContactIconSvgDarkChildren = 103,
  IconContactIconSvgDarkContentfulId = 104,
  IconContactIconSvgDarkCreatedAt = 105,
  IconContactIconSvgDarkDescription = 106,
  IconContactIconSvgDarkFilename = 107,
  IconContactIconSvgDarkFilesize = 108,
  IconContactIconSvgDarkGatsbyImage = 109,
  IconContactIconSvgDarkGatsbyImageData = 110,
  IconContactIconSvgDarkHeight = 111,
  IconContactIconSvgDarkId = 112,
  IconContactIconSvgDarkMimeType = 113,
  IconContactIconSvgDarkNodeLocale = 114,
  IconContactIconSvgDarkPlaceholderUrl = 115,
  IconContactIconSvgDarkPublicUrl = 116,
  IconContactIconSvgDarkSize = 117,
  IconContactIconSvgDarkSpaceId = 118,
  IconContactIconSvgDarkTitle = 119,
  IconContactIconSvgDarkUpdatedAt = 120,
  IconContactIconSvgDarkUrl = 121,
  IconContactIconSvgDarkWidth = 122,
  IconContactIconSvgLightChildren = 123,
  IconContactIconSvgLightContentfulId = 124,
  IconContactIconSvgLightCreatedAt = 125,
  IconContactIconSvgLightDescription = 126,
  IconContactIconSvgLightFilename = 127,
  IconContactIconSvgLightFilesize = 128,
  IconContactIconSvgLightGatsbyImage = 129,
  IconContactIconSvgLightGatsbyImageData = 130,
  IconContactIconSvgLightHeight = 131,
  IconContactIconSvgLightId = 132,
  IconContactIconSvgLightMimeType = 133,
  IconContactIconSvgLightNodeLocale = 134,
  IconContactIconSvgLightPlaceholderUrl = 135,
  IconContactIconSvgLightPublicUrl = 136,
  IconContactIconSvgLightSize = 137,
  IconContactIconSvgLightSpaceId = 138,
  IconContactIconSvgLightTitle = 139,
  IconContactIconSvgLightUpdatedAt = 140,
  IconContactIconSvgLightUrl = 141,
  IconContactIconSvgLightWidth = 142,
  IconContactIconChildren = 143,
  IconContactIconChildrenContentfulIconSvgTextNode = 144,
  IconContactIconContact = 145,
  IconContactIconContentfulId = 146,
  IconContactIconCreatedAt = 147,
  IconContactIconHistory = 148,
  IconContactIconId = 149,
  IconContactIconName = 150,
  IconContactIconNodeLocale = 151,
  IconContactIconOss = 152,
  IconContactIconProject = 153,
  IconContactIconSpaceId = 154,
  IconContactIconUpdatedAt = 155,
  IconContactIconWhatICanDo = 156,
  IconContactId = 157,
  IconContactInternalContent = 158,
  IconContactInternalContentDigest = 159,
  IconContactInternalContentFilePath = 160,
  IconContactInternalDescription = 161,
  IconContactInternalFieldOwners = 162,
  IconContactInternalIgnoreType = 163,
  IconContactInternalMediaType = 164,
  IconContactInternalOwner = 165,
  IconContactInternalType = 166,
  IconContactName = 167,
  IconContactNodeLocale = 168,
  IconContactParentChildren = 169,
  IconContactParentId = 170,
  IconContactSortKey = 171,
  IconContactSpaceId = 172,
  IconContactSubName = 173,
  IconContactSysRevision = 174,
  IconContactSysType = 175,
  IconContactUpdatedAt = 176,
  IconContentfulId = 177,
  IconCreatedAt = 178,
  IconHistory = 179,
  IconHistoryChildren = 180,
  IconHistoryChildrenChildren = 181,
  IconHistoryChildrenId = 182,
  IconHistoryContentfulId = 183,
  IconHistoryCreatedAt = 184,
  IconHistoryDate = 185,
  IconHistoryIconChildren = 186,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 187,
  IconHistoryIconContact = 188,
  IconHistoryIconContentfulId = 189,
  IconHistoryIconCreatedAt = 190,
  IconHistoryIconHistory = 191,
  IconHistoryIconId = 192,
  IconHistoryIconName = 193,
  IconHistoryIconNodeLocale = 194,
  IconHistoryIconOss = 195,
  IconHistoryIconProject = 196,
  IconHistoryIconSpaceId = 197,
  IconHistoryIconUpdatedAt = 198,
  IconHistoryIconWhatICanDo = 199,
  IconHistoryId = 200,
  IconHistoryInternalContent = 201,
  IconHistoryInternalContentDigest = 202,
  IconHistoryInternalContentFilePath = 203,
  IconHistoryInternalDescription = 204,
  IconHistoryInternalFieldOwners = 205,
  IconHistoryInternalIgnoreType = 206,
  IconHistoryInternalMediaType = 207,
  IconHistoryInternalOwner = 208,
  IconHistoryInternalType = 209,
  IconHistoryName = 210,
  IconHistoryNodeLocale = 211,
  IconHistoryParentChildren = 212,
  IconHistoryParentId = 213,
  IconHistorySpaceId = 214,
  IconHistorySubName = 215,
  IconHistorySysRevision = 216,
  IconHistorySysType = 217,
  IconHistoryUpdatedAt = 218,
  IconId = 219,
  IconInternalContent = 220,
  IconInternalContentDigest = 221,
  IconInternalContentFilePath = 222,
  IconInternalDescription = 223,
  IconInternalFieldOwners = 224,
  IconInternalIgnoreType = 225,
  IconInternalMediaType = 226,
  IconInternalOwner = 227,
  IconInternalType = 228,
  IconName = 229,
  IconNodeLocale = 230,
  IconOss = 231,
  IconOssChildContentfulOssDetailTextNodeChildren = 232,
  IconOssChildContentfulOssDetailTextNodeDetail = 233,
  IconOssChildContentfulOssDetailTextNodeId = 234,
  IconOssChildren = 235,
  IconOssChildrenContentfulOssDetailTextNode = 236,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 237,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 238,
  IconOssChildrenContentfulOssDetailTextNodeId = 239,
  IconOssChildrenChildren = 240,
  IconOssChildrenId = 241,
  IconOssContentfulId = 242,
  IconOssCreatedAt = 243,
  IconOssDetailChildren = 244,
  IconOssDetailDetail = 245,
  IconOssDetailId = 246,
  IconOssHref = 247,
  IconOssIconChildren = 248,
  IconOssIconChildrenContentfulIconSvgTextNode = 249,
  IconOssIconContact = 250,
  IconOssIconContentfulId = 251,
  IconOssIconCreatedAt = 252,
  IconOssIconHistory = 253,
  IconOssIconId = 254,
  IconOssIconName = 255,
  IconOssIconNodeLocale = 256,
  IconOssIconOss = 257,
  IconOssIconProject = 258,
  IconOssIconSpaceId = 259,
  IconOssIconUpdatedAt = 260,
  IconOssIconWhatICanDo = 261,
  IconOssId = 262,
  IconOssImageChildren = 263,
  IconOssImageContentfulId = 264,
  IconOssImageCreatedAt = 265,
  IconOssImageDescription = 266,
  IconOssImageFilename = 267,
  IconOssImageFilesize = 268,
  IconOssImageGatsbyImage = 269,
  IconOssImageGatsbyImageData = 270,
  IconOssImageHeight = 271,
  IconOssImageId = 272,
  IconOssImageMimeType = 273,
  IconOssImageNodeLocale = 274,
  IconOssImagePlaceholderUrl = 275,
  IconOssImagePublicUrl = 276,
  IconOssImageSize = 277,
  IconOssImageSpaceId = 278,
  IconOssImageTitle = 279,
  IconOssImageUpdatedAt = 280,
  IconOssImageUrl = 281,
  IconOssImageWidth = 282,
  IconOssInternalContent = 283,
  IconOssInternalContentDigest = 284,
  IconOssInternalContentFilePath = 285,
  IconOssInternalDescription = 286,
  IconOssInternalFieldOwners = 287,
  IconOssInternalIgnoreType = 288,
  IconOssInternalMediaType = 289,
  IconOssInternalOwner = 290,
  IconOssInternalType = 291,
  IconOssName = 292,
  IconOssNodeLocale = 293,
  IconOssParentChildren = 294,
  IconOssParentId = 295,
  IconOssSpaceId = 296,
  IconOssStartDate = 297,
  IconOssSubName = 298,
  IconOssSysRevision = 299,
  IconOssSysType = 300,
  IconOssTags = 301,
  IconOssTagsBlogPost = 302,
  IconOssTagsChildren = 303,
  IconOssTagsContentfulId = 304,
  IconOssTagsCreatedAt = 305,
  IconOssTagsId = 306,
  IconOssTagsLevel = 307,
  IconOssTagsName = 308,
  IconOssTagsNodeLocale = 309,
  IconOssTagsOss = 310,
  IconOssTagsProject = 311,
  IconOssTagsSkillGrpup = 312,
  IconOssTagsSkillMap = 313,
  IconOssTagsSpaceId = 314,
  IconOssTagsUpdatedAt = 315,
  IconOssUpdatedAt = 316,
  IconParentChildren = 317,
  IconParentChildrenChildren = 318,
  IconParentChildrenId = 319,
  IconParentId = 320,
  IconParentInternalContent = 321,
  IconParentInternalContentDigest = 322,
  IconParentInternalContentFilePath = 323,
  IconParentInternalDescription = 324,
  IconParentInternalFieldOwners = 325,
  IconParentInternalIgnoreType = 326,
  IconParentInternalMediaType = 327,
  IconParentInternalOwner = 328,
  IconParentInternalType = 329,
  IconParentParentChildren = 330,
  IconParentParentId = 331,
  IconProject = 332,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 333,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 334,
  IconProjectChildContentfulProjectDetailTextNodeId = 335,
  IconProjectChildren = 336,
  IconProjectChildrenContentfulProjectDetailTextNode = 337,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 338,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 339,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 340,
  IconProjectChildrenChildren = 341,
  IconProjectChildrenId = 342,
  IconProjectContentfulId = 343,
  IconProjectCreatedAt = 344,
  IconProjectDetailChildren = 345,
  IconProjectDetailDetail = 346,
  IconProjectDetailId = 347,
  IconProjectEndDate = 348,
  IconProjectIconChildren = 349,
  IconProjectIconChildrenContentfulIconSvgTextNode = 350,
  IconProjectIconContact = 351,
  IconProjectIconContentfulId = 352,
  IconProjectIconCreatedAt = 353,
  IconProjectIconHistory = 354,
  IconProjectIconId = 355,
  IconProjectIconName = 356,
  IconProjectIconNodeLocale = 357,
  IconProjectIconOss = 358,
  IconProjectIconProject = 359,
  IconProjectIconSpaceId = 360,
  IconProjectIconUpdatedAt = 361,
  IconProjectIconWhatICanDo = 362,
  IconProjectId = 363,
  IconProjectInternalContent = 364,
  IconProjectInternalContentDigest = 365,
  IconProjectInternalContentFilePath = 366,
  IconProjectInternalDescription = 367,
  IconProjectInternalFieldOwners = 368,
  IconProjectInternalIgnoreType = 369,
  IconProjectInternalMediaType = 370,
  IconProjectInternalOwner = 371,
  IconProjectInternalType = 372,
  IconProjectName = 373,
  IconProjectNodeLocale = 374,
  IconProjectParentChildren = 375,
  IconProjectParentId = 376,
  IconProjectSpaceId = 377,
  IconProjectStartDate = 378,
  IconProjectSubName = 379,
  IconProjectSysRevision = 380,
  IconProjectSysType = 381,
  IconProjectTags = 382,
  IconProjectTagsBlogPost = 383,
  IconProjectTagsChildren = 384,
  IconProjectTagsContentfulId = 385,
  IconProjectTagsCreatedAt = 386,
  IconProjectTagsId = 387,
  IconProjectTagsLevel = 388,
  IconProjectTagsName = 389,
  IconProjectTagsNodeLocale = 390,
  IconProjectTagsOss = 391,
  IconProjectTagsProject = 392,
  IconProjectTagsSkillGrpup = 393,
  IconProjectTagsSkillMap = 394,
  IconProjectTagsSpaceId = 395,
  IconProjectTagsUpdatedAt = 396,
  IconProjectUpdatedAt = 397,
  IconSpaceId = 398,
  IconSvgChildren = 399,
  IconSvgChildrenChildren = 400,
  IconSvgChildrenId = 401,
  IconSvgId = 402,
  IconSvgInternalContent = 403,
  IconSvgInternalContentDigest = 404,
  IconSvgInternalContentFilePath = 405,
  IconSvgInternalDescription = 406,
  IconSvgInternalFieldOwners = 407,
  IconSvgInternalIgnoreType = 408,
  IconSvgInternalMediaType = 409,
  IconSvgInternalOwner = 410,
  IconSvgInternalType = 411,
  IconSvgParentChildren = 412,
  IconSvgParentId = 413,
  IconSvgSvg = 414,
  IconSvgSysType = 415,
  IconSysRevision = 416,
  IconSysType = 417,
  IconUpdatedAt = 418,
  IconWhatICanDo = 419,
  IconWhatICanDoChildren = 420,
  IconWhatICanDoChildrenChildren = 421,
  IconWhatICanDoChildrenId = 422,
  IconWhatICanDoContentfulId = 423,
  IconWhatICanDoCreatedAt = 424,
  IconWhatICanDoIconChildren = 425,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 426,
  IconWhatICanDoIconContact = 427,
  IconWhatICanDoIconContentfulId = 428,
  IconWhatICanDoIconCreatedAt = 429,
  IconWhatICanDoIconHistory = 430,
  IconWhatICanDoIconId = 431,
  IconWhatICanDoIconName = 432,
  IconWhatICanDoIconNodeLocale = 433,
  IconWhatICanDoIconOss = 434,
  IconWhatICanDoIconProject = 435,
  IconWhatICanDoIconSpaceId = 436,
  IconWhatICanDoIconUpdatedAt = 437,
  IconWhatICanDoIconWhatICanDo = 438,
  IconWhatICanDoId = 439,
  IconWhatICanDoInternalContent = 440,
  IconWhatICanDoInternalContentDigest = 441,
  IconWhatICanDoInternalContentFilePath = 442,
  IconWhatICanDoInternalDescription = 443,
  IconWhatICanDoInternalFieldOwners = 444,
  IconWhatICanDoInternalIgnoreType = 445,
  IconWhatICanDoInternalMediaType = 446,
  IconWhatICanDoInternalOwner = 447,
  IconWhatICanDoInternalType = 448,
  IconWhatICanDoName = 449,
  IconWhatICanDoNodeLocale = 450,
  IconWhatICanDoParentChildren = 451,
  IconWhatICanDoParentId = 452,
  IconWhatICanDoSortKey = 453,
  IconWhatICanDoSpaceId = 454,
  IconWhatICanDoSubName = 455,
  IconWhatICanDoSysRevision = 456,
  IconWhatICanDoSysType = 457,
  IconWhatICanDoUpdatedAt = 458,
  Id = 459,
  InternalContent = 460,
  InternalContentDigest = 461,
  InternalContentFilePath = 462,
  InternalDescription = 463,
  InternalFieldOwners = 464,
  InternalIgnoreType = 465,
  InternalMediaType = 466,
  InternalOwner = 467,
  InternalType = 468,
  Name = 469,
  NodeLocale = 470,
  ParentChildren = 471,
  ParentChildrenChildren = 472,
  ParentChildrenChildrenChildren = 473,
  ParentChildrenChildrenId = 474,
  ParentChildrenId = 475,
  ParentChildrenInternalContent = 476,
  ParentChildrenInternalContentDigest = 477,
  ParentChildrenInternalContentFilePath = 478,
  ParentChildrenInternalDescription = 479,
  ParentChildrenInternalFieldOwners = 480,
  ParentChildrenInternalIgnoreType = 481,
  ParentChildrenInternalMediaType = 482,
  ParentChildrenInternalOwner = 483,
  ParentChildrenInternalType = 484,
  ParentChildrenParentChildren = 485,
  ParentChildrenParentId = 486,
  ParentId = 487,
  ParentInternalContent = 488,
  ParentInternalContentDigest = 489,
  ParentInternalContentFilePath = 490,
  ParentInternalDescription = 491,
  ParentInternalFieldOwners = 492,
  ParentInternalIgnoreType = 493,
  ParentInternalMediaType = 494,
  ParentInternalOwner = 495,
  ParentInternalType = 496,
  ParentParentChildren = 497,
  ParentParentChildrenChildren = 498,
  ParentParentChildrenId = 499,
  ParentParentId = 500,
  ParentParentInternalContent = 501,
  ParentParentInternalContentDigest = 502,
  ParentParentInternalContentFilePath = 503,
  ParentParentInternalDescription = 504,
  ParentParentInternalFieldOwners = 505,
  ParentParentInternalIgnoreType = 506,
  ParentParentInternalMediaType = 507,
  ParentParentInternalOwner = 508,
  ParentParentInternalType = 509,
  ParentParentParentChildren = 510,
  ParentParentParentId = 511,
  SpaceId = 512,
  SubName = 513,
  SysContentTypeSysId = 514,
  SysContentTypeSysLinkType = 515,
  SysContentTypeSysType = 516,
  SysRevision = 517,
  SysType = 518,
  UpdatedAt = 519
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
  ChildContentfulIconSvgTextNodeChildren = 0,
  ChildContentfulIconSvgTextNodeChildrenChildren = 1,
  ChildContentfulIconSvgTextNodeChildrenChildrenChildren = 2,
  ChildContentfulIconSvgTextNodeChildrenChildrenId = 3,
  ChildContentfulIconSvgTextNodeChildrenId = 4,
  ChildContentfulIconSvgTextNodeChildrenInternalContent = 5,
  ChildContentfulIconSvgTextNodeChildrenInternalContentDigest = 6,
  ChildContentfulIconSvgTextNodeChildrenInternalContentFilePath = 7,
  ChildContentfulIconSvgTextNodeChildrenInternalDescription = 8,
  ChildContentfulIconSvgTextNodeChildrenInternalFieldOwners = 9,
  ChildContentfulIconSvgTextNodeChildrenInternalIgnoreType = 10,
  ChildContentfulIconSvgTextNodeChildrenInternalMediaType = 11,
  ChildContentfulIconSvgTextNodeChildrenInternalOwner = 12,
  ChildContentfulIconSvgTextNodeChildrenInternalType = 13,
  ChildContentfulIconSvgTextNodeChildrenParentChildren = 14,
  ChildContentfulIconSvgTextNodeChildrenParentId = 15,
  ChildContentfulIconSvgTextNodeId = 16,
  ChildContentfulIconSvgTextNodeInternalContent = 17,
  ChildContentfulIconSvgTextNodeInternalContentDigest = 18,
  ChildContentfulIconSvgTextNodeInternalContentFilePath = 19,
  ChildContentfulIconSvgTextNodeInternalDescription = 20,
  ChildContentfulIconSvgTextNodeInternalFieldOwners = 21,
  ChildContentfulIconSvgTextNodeInternalIgnoreType = 22,
  ChildContentfulIconSvgTextNodeInternalMediaType = 23,
  ChildContentfulIconSvgTextNodeInternalOwner = 24,
  ChildContentfulIconSvgTextNodeInternalType = 25,
  ChildContentfulIconSvgTextNodeParentChildren = 26,
  ChildContentfulIconSvgTextNodeParentChildrenChildren = 27,
  ChildContentfulIconSvgTextNodeParentChildrenId = 28,
  ChildContentfulIconSvgTextNodeParentId = 29,
  ChildContentfulIconSvgTextNodeParentInternalContent = 30,
  ChildContentfulIconSvgTextNodeParentInternalContentDigest = 31,
  ChildContentfulIconSvgTextNodeParentInternalContentFilePath = 32,
  ChildContentfulIconSvgTextNodeParentInternalDescription = 33,
  ChildContentfulIconSvgTextNodeParentInternalFieldOwners = 34,
  ChildContentfulIconSvgTextNodeParentInternalIgnoreType = 35,
  ChildContentfulIconSvgTextNodeParentInternalMediaType = 36,
  ChildContentfulIconSvgTextNodeParentInternalOwner = 37,
  ChildContentfulIconSvgTextNodeParentInternalType = 38,
  ChildContentfulIconSvgTextNodeParentParentChildren = 39,
  ChildContentfulIconSvgTextNodeParentParentId = 40,
  ChildContentfulIconSvgTextNodeSvg = 41,
  ChildContentfulIconSvgTextNodeSysType = 42,
  Children = 43,
  ChildrenContentfulIconSvgTextNode = 44,
  ChildrenContentfulIconSvgTextNodeChildren = 45,
  ChildrenContentfulIconSvgTextNodeChildrenChildren = 46,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenChildren = 47,
  ChildrenContentfulIconSvgTextNodeChildrenChildrenId = 48,
  ChildrenContentfulIconSvgTextNodeChildrenId = 49,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContent = 50,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContentDigest = 51,
  ChildrenContentfulIconSvgTextNodeChildrenInternalContentFilePath = 52,
  ChildrenContentfulIconSvgTextNodeChildrenInternalDescription = 53,
  ChildrenContentfulIconSvgTextNodeChildrenInternalFieldOwners = 54,
  ChildrenContentfulIconSvgTextNodeChildrenInternalIgnoreType = 55,
  ChildrenContentfulIconSvgTextNodeChildrenInternalMediaType = 56,
  ChildrenContentfulIconSvgTextNodeChildrenInternalOwner = 57,
  ChildrenContentfulIconSvgTextNodeChildrenInternalType = 58,
  ChildrenContentfulIconSvgTextNodeChildrenParentChildren = 59,
  ChildrenContentfulIconSvgTextNodeChildrenParentId = 60,
  ChildrenContentfulIconSvgTextNodeId = 61,
  ChildrenContentfulIconSvgTextNodeInternalContent = 62,
  ChildrenContentfulIconSvgTextNodeInternalContentDigest = 63,
  ChildrenContentfulIconSvgTextNodeInternalContentFilePath = 64,
  ChildrenContentfulIconSvgTextNodeInternalDescription = 65,
  ChildrenContentfulIconSvgTextNodeInternalFieldOwners = 66,
  ChildrenContentfulIconSvgTextNodeInternalIgnoreType = 67,
  ChildrenContentfulIconSvgTextNodeInternalMediaType = 68,
  ChildrenContentfulIconSvgTextNodeInternalOwner = 69,
  ChildrenContentfulIconSvgTextNodeInternalType = 70,
  ChildrenContentfulIconSvgTextNodeParentChildren = 71,
  ChildrenContentfulIconSvgTextNodeParentChildrenChildren = 72,
  ChildrenContentfulIconSvgTextNodeParentChildrenId = 73,
  ChildrenContentfulIconSvgTextNodeParentId = 74,
  ChildrenContentfulIconSvgTextNodeParentInternalContent = 75,
  ChildrenContentfulIconSvgTextNodeParentInternalContentDigest = 76,
  ChildrenContentfulIconSvgTextNodeParentInternalContentFilePath = 77,
  ChildrenContentfulIconSvgTextNodeParentInternalDescription = 78,
  ChildrenContentfulIconSvgTextNodeParentInternalFieldOwners = 79,
  ChildrenContentfulIconSvgTextNodeParentInternalIgnoreType = 80,
  ChildrenContentfulIconSvgTextNodeParentInternalMediaType = 81,
  ChildrenContentfulIconSvgTextNodeParentInternalOwner = 82,
  ChildrenContentfulIconSvgTextNodeParentInternalType = 83,
  ChildrenContentfulIconSvgTextNodeParentParentChildren = 84,
  ChildrenContentfulIconSvgTextNodeParentParentId = 85,
  ChildrenContentfulIconSvgTextNodeSvg = 86,
  ChildrenContentfulIconSvgTextNodeSysType = 87,
  ChildrenChildren = 88,
  ChildrenChildrenChildren = 89,
  ChildrenChildrenChildrenChildren = 90,
  ChildrenChildrenChildrenId = 91,
  ChildrenChildrenId = 92,
  ChildrenChildrenInternalContent = 93,
  ChildrenChildrenInternalContentDigest = 94,
  ChildrenChildrenInternalContentFilePath = 95,
  ChildrenChildrenInternalDescription = 96,
  ChildrenChildrenInternalFieldOwners = 97,
  ChildrenChildrenInternalIgnoreType = 98,
  ChildrenChildrenInternalMediaType = 99,
  ChildrenChildrenInternalOwner = 100,
  ChildrenChildrenInternalType = 101,
  ChildrenChildrenParentChildren = 102,
  ChildrenChildrenParentId = 103,
  ChildrenId = 104,
  ChildrenInternalContent = 105,
  ChildrenInternalContentDigest = 106,
  ChildrenInternalContentFilePath = 107,
  ChildrenInternalDescription = 108,
  ChildrenInternalFieldOwners = 109,
  ChildrenInternalIgnoreType = 110,
  ChildrenInternalMediaType = 111,
  ChildrenInternalOwner = 112,
  ChildrenInternalType = 113,
  ChildrenParentChildren = 114,
  ChildrenParentChildrenChildren = 115,
  ChildrenParentChildrenId = 116,
  ChildrenParentId = 117,
  ChildrenParentInternalContent = 118,
  ChildrenParentInternalContentDigest = 119,
  ChildrenParentInternalContentFilePath = 120,
  ChildrenParentInternalDescription = 121,
  ChildrenParentInternalFieldOwners = 122,
  ChildrenParentInternalIgnoreType = 123,
  ChildrenParentInternalMediaType = 124,
  ChildrenParentInternalOwner = 125,
  ChildrenParentInternalType = 126,
  ChildrenParentParentChildren = 127,
  ChildrenParentParentId = 128,
  Contact = 129,
  ContactChildren = 130,
  ContactChildrenChildren = 131,
  ContactChildrenChildrenChildren = 132,
  ContactChildrenChildrenId = 133,
  ContactChildrenId = 134,
  ContactChildrenInternalContent = 135,
  ContactChildrenInternalContentDigest = 136,
  ContactChildrenInternalContentFilePath = 137,
  ContactChildrenInternalDescription = 138,
  ContactChildrenInternalFieldOwners = 139,
  ContactChildrenInternalIgnoreType = 140,
  ContactChildrenInternalMediaType = 141,
  ContactChildrenInternalOwner = 142,
  ContactChildrenInternalType = 143,
  ContactChildrenParentChildren = 144,
  ContactChildrenParentId = 145,
  ContactContentfulId = 146,
  ContactCreatedAt = 147,
  ContactHref = 148,
  ContactIconSvgDarkChildren = 149,
  ContactIconSvgDarkChildrenChildren = 150,
  ContactIconSvgDarkChildrenId = 151,
  ContactIconSvgDarkContentfulId = 152,
  ContactIconSvgDarkCreatedAt = 153,
  ContactIconSvgDarkDescription = 154,
  ContactIconSvgDarkFileContentType = 155,
  ContactIconSvgDarkFileFileName = 156,
  ContactIconSvgDarkFileUrl = 157,
  ContactIconSvgDarkFilename = 158,
  ContactIconSvgDarkFilesize = 159,
  ContactIconSvgDarkGatsbyImage = 160,
  ContactIconSvgDarkGatsbyImageData = 161,
  ContactIconSvgDarkHeight = 162,
  ContactIconSvgDarkId = 163,
  ContactIconSvgDarkInternalContent = 164,
  ContactIconSvgDarkInternalContentDigest = 165,
  ContactIconSvgDarkInternalContentFilePath = 166,
  ContactIconSvgDarkInternalDescription = 167,
  ContactIconSvgDarkInternalFieldOwners = 168,
  ContactIconSvgDarkInternalIgnoreType = 169,
  ContactIconSvgDarkInternalMediaType = 170,
  ContactIconSvgDarkInternalOwner = 171,
  ContactIconSvgDarkInternalType = 172,
  ContactIconSvgDarkMimeType = 173,
  ContactIconSvgDarkNodeLocale = 174,
  ContactIconSvgDarkParentChildren = 175,
  ContactIconSvgDarkParentId = 176,
  ContactIconSvgDarkPlaceholderUrl = 177,
  ContactIconSvgDarkPublicUrl = 178,
  ContactIconSvgDarkResizeHeight = 179,
  ContactIconSvgDarkResizeSrc = 180,
  ContactIconSvgDarkResizeWidth = 181,
  ContactIconSvgDarkSize = 182,
  ContactIconSvgDarkSpaceId = 183,
  ContactIconSvgDarkSysRevision = 184,
  ContactIconSvgDarkSysType = 185,
  ContactIconSvgDarkTitle = 186,
  ContactIconSvgDarkUpdatedAt = 187,
  ContactIconSvgDarkUrl = 188,
  ContactIconSvgDarkWidth = 189,
  ContactIconSvgLightChildren = 190,
  ContactIconSvgLightChildrenChildren = 191,
  ContactIconSvgLightChildrenId = 192,
  ContactIconSvgLightContentfulId = 193,
  ContactIconSvgLightCreatedAt = 194,
  ContactIconSvgLightDescription = 195,
  ContactIconSvgLightFileContentType = 196,
  ContactIconSvgLightFileFileName = 197,
  ContactIconSvgLightFileUrl = 198,
  ContactIconSvgLightFilename = 199,
  ContactIconSvgLightFilesize = 200,
  ContactIconSvgLightGatsbyImage = 201,
  ContactIconSvgLightGatsbyImageData = 202,
  ContactIconSvgLightHeight = 203,
  ContactIconSvgLightId = 204,
  ContactIconSvgLightInternalContent = 205,
  ContactIconSvgLightInternalContentDigest = 206,
  ContactIconSvgLightInternalContentFilePath = 207,
  ContactIconSvgLightInternalDescription = 208,
  ContactIconSvgLightInternalFieldOwners = 209,
  ContactIconSvgLightInternalIgnoreType = 210,
  ContactIconSvgLightInternalMediaType = 211,
  ContactIconSvgLightInternalOwner = 212,
  ContactIconSvgLightInternalType = 213,
  ContactIconSvgLightMimeType = 214,
  ContactIconSvgLightNodeLocale = 215,
  ContactIconSvgLightParentChildren = 216,
  ContactIconSvgLightParentId = 217,
  ContactIconSvgLightPlaceholderUrl = 218,
  ContactIconSvgLightPublicUrl = 219,
  ContactIconSvgLightResizeHeight = 220,
  ContactIconSvgLightResizeSrc = 221,
  ContactIconSvgLightResizeWidth = 222,
  ContactIconSvgLightSize = 223,
  ContactIconSvgLightSpaceId = 224,
  ContactIconSvgLightSysRevision = 225,
  ContactIconSvgLightSysType = 226,
  ContactIconSvgLightTitle = 227,
  ContactIconSvgLightUpdatedAt = 228,
  ContactIconSvgLightUrl = 229,
  ContactIconSvgLightWidth = 230,
  ContactIconChildContentfulIconSvgTextNodeChildren = 231,
  ContactIconChildContentfulIconSvgTextNodeId = 232,
  ContactIconChildContentfulIconSvgTextNodeSvg = 233,
  ContactIconChildren = 234,
  ContactIconChildrenContentfulIconSvgTextNode = 235,
  ContactIconChildrenContentfulIconSvgTextNodeChildren = 236,
  ContactIconChildrenContentfulIconSvgTextNodeId = 237,
  ContactIconChildrenContentfulIconSvgTextNodeSvg = 238,
  ContactIconChildrenChildren = 239,
  ContactIconChildrenId = 240,
  ContactIconContact = 241,
  ContactIconContactChildren = 242,
  ContactIconContactContentfulId = 243,
  ContactIconContactCreatedAt = 244,
  ContactIconContactHref = 245,
  ContactIconContactId = 246,
  ContactIconContactName = 247,
  ContactIconContactNodeLocale = 248,
  ContactIconContactSortKey = 249,
  ContactIconContactSpaceId = 250,
  ContactIconContactSubName = 251,
  ContactIconContactUpdatedAt = 252,
  ContactIconContentfulId = 253,
  ContactIconCreatedAt = 254,
  ContactIconHistory = 255,
  ContactIconHistoryChildren = 256,
  ContactIconHistoryContentfulId = 257,
  ContactIconHistoryCreatedAt = 258,
  ContactIconHistoryDate = 259,
  ContactIconHistoryId = 260,
  ContactIconHistoryName = 261,
  ContactIconHistoryNodeLocale = 262,
  ContactIconHistorySpaceId = 263,
  ContactIconHistorySubName = 264,
  ContactIconHistoryUpdatedAt = 265,
  ContactIconId = 266,
  ContactIconInternalContent = 267,
  ContactIconInternalContentDigest = 268,
  ContactIconInternalContentFilePath = 269,
  ContactIconInternalDescription = 270,
  ContactIconInternalFieldOwners = 271,
  ContactIconInternalIgnoreType = 272,
  ContactIconInternalMediaType = 273,
  ContactIconInternalOwner = 274,
  ContactIconInternalType = 275,
  ContactIconName = 276,
  ContactIconNodeLocale = 277,
  ContactIconOss = 278,
  ContactIconOssChildren = 279,
  ContactIconOssChildrenContentfulOssDetailTextNode = 280,
  ContactIconOssContentfulId = 281,
  ContactIconOssCreatedAt = 282,
  ContactIconOssHref = 283,
  ContactIconOssId = 284,
  ContactIconOssName = 285,
  ContactIconOssNodeLocale = 286,
  ContactIconOssSpaceId = 287,
  ContactIconOssStartDate = 288,
  ContactIconOssSubName = 289,
  ContactIconOssTags = 290,
  ContactIconOssUpdatedAt = 291,
  ContactIconParentChildren = 292,
  ContactIconParentId = 293,
  ContactIconProject = 294,
  ContactIconProjectChildren = 295,
  ContactIconProjectChildrenContentfulProjectDetailTextNode = 296,
  ContactIconProjectContentfulId = 297,
  ContactIconProjectCreatedAt = 298,
  ContactIconProjectEndDate = 299,
  ContactIconProjectId = 300,
  ContactIconProjectName = 301,
  ContactIconProjectNodeLocale = 302,
  ContactIconProjectSpaceId = 303,
  ContactIconProjectStartDate = 304,
  ContactIconProjectSubName = 305,
  ContactIconProjectTags = 306,
  ContactIconProjectUpdatedAt = 307,
  ContactIconSpaceId = 308,
  ContactIconSvgChildren = 309,
  ContactIconSvgId = 310,
  ContactIconSvgSvg = 311,
  ContactIconSysRevision = 312,
  ContactIconSysType = 313,
  ContactIconUpdatedAt = 314,
  ContactIconWhatICanDo = 315,
  ContactIconWhatICanDoChildren = 316,
  ContactIconWhatICanDoContentfulId = 317,
  ContactIconWhatICanDoCreatedAt = 318,
  ContactIconWhatICanDoId = 319,
  ContactIconWhatICanDoName = 320,
  ContactIconWhatICanDoNodeLocale = 321,
  ContactIconWhatICanDoSortKey = 322,
  ContactIconWhatICanDoSpaceId = 323,
  ContactIconWhatICanDoSubName = 324,
  ContactIconWhatICanDoUpdatedAt = 325,
  ContactId = 326,
  ContactInternalContent = 327,
  ContactInternalContentDigest = 328,
  ContactInternalContentFilePath = 329,
  ContactInternalDescription = 330,
  ContactInternalFieldOwners = 331,
  ContactInternalIgnoreType = 332,
  ContactInternalMediaType = 333,
  ContactInternalOwner = 334,
  ContactInternalType = 335,
  ContactName = 336,
  ContactNodeLocale = 337,
  ContactParentChildren = 338,
  ContactParentChildrenChildren = 339,
  ContactParentChildrenId = 340,
  ContactParentId = 341,
  ContactParentInternalContent = 342,
  ContactParentInternalContentDigest = 343,
  ContactParentInternalContentFilePath = 344,
  ContactParentInternalDescription = 345,
  ContactParentInternalFieldOwners = 346,
  ContactParentInternalIgnoreType = 347,
  ContactParentInternalMediaType = 348,
  ContactParentInternalOwner = 349,
  ContactParentInternalType = 350,
  ContactParentParentChildren = 351,
  ContactParentParentId = 352,
  ContactSortKey = 353,
  ContactSpaceId = 354,
  ContactSubName = 355,
  ContactSysRevision = 356,
  ContactSysType = 357,
  ContactUpdatedAt = 358,
  ContentfulId = 359,
  CreatedAt = 360,
  History = 361,
  HistoryChildren = 362,
  HistoryChildrenChildren = 363,
  HistoryChildrenChildrenChildren = 364,
  HistoryChildrenChildrenId = 365,
  HistoryChildrenId = 366,
  HistoryChildrenInternalContent = 367,
  HistoryChildrenInternalContentDigest = 368,
  HistoryChildrenInternalContentFilePath = 369,
  HistoryChildrenInternalDescription = 370,
  HistoryChildrenInternalFieldOwners = 371,
  HistoryChildrenInternalIgnoreType = 372,
  HistoryChildrenInternalMediaType = 373,
  HistoryChildrenInternalOwner = 374,
  HistoryChildrenInternalType = 375,
  HistoryChildrenParentChildren = 376,
  HistoryChildrenParentId = 377,
  HistoryContentfulId = 378,
  HistoryCreatedAt = 379,
  HistoryDate = 380,
  HistoryIconChildContentfulIconSvgTextNodeChildren = 381,
  HistoryIconChildContentfulIconSvgTextNodeId = 382,
  HistoryIconChildContentfulIconSvgTextNodeSvg = 383,
  HistoryIconChildren = 384,
  HistoryIconChildrenContentfulIconSvgTextNode = 385,
  HistoryIconChildrenContentfulIconSvgTextNodeChildren = 386,
  HistoryIconChildrenContentfulIconSvgTextNodeId = 387,
  HistoryIconChildrenContentfulIconSvgTextNodeSvg = 388,
  HistoryIconChildrenChildren = 389,
  HistoryIconChildrenId = 390,
  HistoryIconContact = 391,
  HistoryIconContactChildren = 392,
  HistoryIconContactContentfulId = 393,
  HistoryIconContactCreatedAt = 394,
  HistoryIconContactHref = 395,
  HistoryIconContactId = 396,
  HistoryIconContactName = 397,
  HistoryIconContactNodeLocale = 398,
  HistoryIconContactSortKey = 399,
  HistoryIconContactSpaceId = 400,
  HistoryIconContactSubName = 401,
  HistoryIconContactUpdatedAt = 402,
  HistoryIconContentfulId = 403,
  HistoryIconCreatedAt = 404,
  HistoryIconHistory = 405,
  HistoryIconHistoryChildren = 406,
  HistoryIconHistoryContentfulId = 407,
  HistoryIconHistoryCreatedAt = 408,
  HistoryIconHistoryDate = 409,
  HistoryIconHistoryId = 410,
  HistoryIconHistoryName = 411,
  HistoryIconHistoryNodeLocale = 412,
  HistoryIconHistorySpaceId = 413,
  HistoryIconHistorySubName = 414,
  HistoryIconHistoryUpdatedAt = 415,
  HistoryIconId = 416,
  HistoryIconInternalContent = 417,
  HistoryIconInternalContentDigest = 418,
  HistoryIconInternalContentFilePath = 419,
  HistoryIconInternalDescription = 420,
  HistoryIconInternalFieldOwners = 421,
  HistoryIconInternalIgnoreType = 422,
  HistoryIconInternalMediaType = 423,
  HistoryIconInternalOwner = 424,
  HistoryIconInternalType = 425,
  HistoryIconName = 426,
  HistoryIconNodeLocale = 427,
  HistoryIconOss = 428,
  HistoryIconOssChildren = 429,
  HistoryIconOssChildrenContentfulOssDetailTextNode = 430,
  HistoryIconOssContentfulId = 431,
  HistoryIconOssCreatedAt = 432,
  HistoryIconOssHref = 433,
  HistoryIconOssId = 434,
  HistoryIconOssName = 435,
  HistoryIconOssNodeLocale = 436,
  HistoryIconOssSpaceId = 437,
  HistoryIconOssStartDate = 438,
  HistoryIconOssSubName = 439,
  HistoryIconOssTags = 440,
  HistoryIconOssUpdatedAt = 441,
  HistoryIconParentChildren = 442,
  HistoryIconParentId = 443,
  HistoryIconProject = 444,
  HistoryIconProjectChildren = 445,
  HistoryIconProjectChildrenContentfulProjectDetailTextNode = 446,
  HistoryIconProjectContentfulId = 447,
  HistoryIconProjectCreatedAt = 448,
  HistoryIconProjectEndDate = 449,
  HistoryIconProjectId = 450,
  HistoryIconProjectName = 451,
  HistoryIconProjectNodeLocale = 452,
  HistoryIconProjectSpaceId = 453,
  HistoryIconProjectStartDate = 454,
  HistoryIconProjectSubName = 455,
  HistoryIconProjectTags = 456,
  HistoryIconProjectUpdatedAt = 457,
  HistoryIconSpaceId = 458,
  HistoryIconSvgChildren = 459,
  HistoryIconSvgId = 460,
  HistoryIconSvgSvg = 461,
  HistoryIconSysRevision = 462,
  HistoryIconSysType = 463,
  HistoryIconUpdatedAt = 464,
  HistoryIconWhatICanDo = 465,
  HistoryIconWhatICanDoChildren = 466,
  HistoryIconWhatICanDoContentfulId = 467,
  HistoryIconWhatICanDoCreatedAt = 468,
  HistoryIconWhatICanDoId = 469,
  HistoryIconWhatICanDoName = 470,
  HistoryIconWhatICanDoNodeLocale = 471,
  HistoryIconWhatICanDoSortKey = 472,
  HistoryIconWhatICanDoSpaceId = 473,
  HistoryIconWhatICanDoSubName = 474,
  HistoryIconWhatICanDoUpdatedAt = 475,
  HistoryId = 476,
  HistoryInternalContent = 477,
  HistoryInternalContentDigest = 478,
  HistoryInternalContentFilePath = 479,
  HistoryInternalDescription = 480,
  HistoryInternalFieldOwners = 481,
  HistoryInternalIgnoreType = 482,
  HistoryInternalMediaType = 483,
  HistoryInternalOwner = 484,
  HistoryInternalType = 485,
  HistoryName = 486,
  HistoryNodeLocale = 487,
  HistoryParentChildren = 488,
  HistoryParentChildrenChildren = 489,
  HistoryParentChildrenId = 490,
  HistoryParentId = 491,
  HistoryParentInternalContent = 492,
  HistoryParentInternalContentDigest = 493,
  HistoryParentInternalContentFilePath = 494,
  HistoryParentInternalDescription = 495,
  HistoryParentInternalFieldOwners = 496,
  HistoryParentInternalIgnoreType = 497,
  HistoryParentInternalMediaType = 498,
  HistoryParentInternalOwner = 499,
  HistoryParentInternalType = 500,
  HistoryParentParentChildren = 501,
  HistoryParentParentId = 502,
  HistorySpaceId = 503,
  HistorySubName = 504,
  HistorySysRevision = 505,
  HistorySysType = 506,
  HistoryUpdatedAt = 507,
  Id = 508,
  InternalContent = 509,
  InternalContentDigest = 510,
  InternalContentFilePath = 511,
  InternalDescription = 512,
  InternalFieldOwners = 513,
  InternalIgnoreType = 514,
  InternalMediaType = 515,
  InternalOwner = 516,
  InternalType = 517,
  Name = 518,
  NodeLocale = 519,
  Oss = 520,
  OssChildContentfulOssDetailTextNodeChildren = 521,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 522,
  OssChildContentfulOssDetailTextNodeChildrenId = 523,
  OssChildContentfulOssDetailTextNodeDetail = 524,
  OssChildContentfulOssDetailTextNodeId = 525,
  OssChildContentfulOssDetailTextNodeInternalContent = 526,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 527,
  OssChildContentfulOssDetailTextNodeInternalContentFilePath = 528,
  OssChildContentfulOssDetailTextNodeInternalDescription = 529,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 530,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 531,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 532,
  OssChildContentfulOssDetailTextNodeInternalOwner = 533,
  OssChildContentfulOssDetailTextNodeInternalType = 534,
  OssChildContentfulOssDetailTextNodeParentChildren = 535,
  OssChildContentfulOssDetailTextNodeParentId = 536,
  OssChildContentfulOssDetailTextNodeSysType = 537,
  OssChildren = 538,
  OssChildrenContentfulOssDetailTextNode = 539,
  OssChildrenContentfulOssDetailTextNodeChildren = 540,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 541,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 542,
  OssChildrenContentfulOssDetailTextNodeDetail = 543,
  OssChildrenContentfulOssDetailTextNodeId = 544,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 545,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 546,
  OssChildrenContentfulOssDetailTextNodeInternalContentFilePath = 547,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 548,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 549,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 550,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 551,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 552,
  OssChildrenContentfulOssDetailTextNodeInternalType = 553,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 554,
  OssChildrenContentfulOssDetailTextNodeParentId = 555,
  OssChildrenContentfulOssDetailTextNodeSysType = 556,
  OssChildrenChildren = 557,
  OssChildrenChildrenChildren = 558,
  OssChildrenChildrenId = 559,
  OssChildrenId = 560,
  OssChildrenInternalContent = 561,
  OssChildrenInternalContentDigest = 562,
  OssChildrenInternalContentFilePath = 563,
  OssChildrenInternalDescription = 564,
  OssChildrenInternalFieldOwners = 565,
  OssChildrenInternalIgnoreType = 566,
  OssChildrenInternalMediaType = 567,
  OssChildrenInternalOwner = 568,
  OssChildrenInternalType = 569,
  OssChildrenParentChildren = 570,
  OssChildrenParentId = 571,
  OssContentfulId = 572,
  OssCreatedAt = 573,
  OssDetailChildren = 574,
  OssDetailChildrenChildren = 575,
  OssDetailChildrenId = 576,
  OssDetailDetail = 577,
  OssDetailId = 578,
  OssDetailInternalContent = 579,
  OssDetailInternalContentDigest = 580,
  OssDetailInternalContentFilePath = 581,
  OssDetailInternalDescription = 582,
  OssDetailInternalFieldOwners = 583,
  OssDetailInternalIgnoreType = 584,
  OssDetailInternalMediaType = 585,
  OssDetailInternalOwner = 586,
  OssDetailInternalType = 587,
  OssDetailParentChildren = 588,
  OssDetailParentId = 589,
  OssDetailSysType = 590,
  OssHref = 591,
  OssIconChildContentfulIconSvgTextNodeChildren = 592,
  OssIconChildContentfulIconSvgTextNodeId = 593,
  OssIconChildContentfulIconSvgTextNodeSvg = 594,
  OssIconChildren = 595,
  OssIconChildrenContentfulIconSvgTextNode = 596,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 597,
  OssIconChildrenContentfulIconSvgTextNodeId = 598,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 599,
  OssIconChildrenChildren = 600,
  OssIconChildrenId = 601,
  OssIconContact = 602,
  OssIconContactChildren = 603,
  OssIconContactContentfulId = 604,
  OssIconContactCreatedAt = 605,
  OssIconContactHref = 606,
  OssIconContactId = 607,
  OssIconContactName = 608,
  OssIconContactNodeLocale = 609,
  OssIconContactSortKey = 610,
  OssIconContactSpaceId = 611,
  OssIconContactSubName = 612,
  OssIconContactUpdatedAt = 613,
  OssIconContentfulId = 614,
  OssIconCreatedAt = 615,
  OssIconHistory = 616,
  OssIconHistoryChildren = 617,
  OssIconHistoryContentfulId = 618,
  OssIconHistoryCreatedAt = 619,
  OssIconHistoryDate = 620,
  OssIconHistoryId = 621,
  OssIconHistoryName = 622,
  OssIconHistoryNodeLocale = 623,
  OssIconHistorySpaceId = 624,
  OssIconHistorySubName = 625,
  OssIconHistoryUpdatedAt = 626,
  OssIconId = 627,
  OssIconInternalContent = 628,
  OssIconInternalContentDigest = 629,
  OssIconInternalContentFilePath = 630,
  OssIconInternalDescription = 631,
  OssIconInternalFieldOwners = 632,
  OssIconInternalIgnoreType = 633,
  OssIconInternalMediaType = 634,
  OssIconInternalOwner = 635,
  OssIconInternalType = 636,
  OssIconName = 637,
  OssIconNodeLocale = 638,
  OssIconOss = 639,
  OssIconOssChildren = 640,
  OssIconOssChildrenContentfulOssDetailTextNode = 641,
  OssIconOssContentfulId = 642,
  OssIconOssCreatedAt = 643,
  OssIconOssHref = 644,
  OssIconOssId = 645,
  OssIconOssName = 646,
  OssIconOssNodeLocale = 647,
  OssIconOssSpaceId = 648,
  OssIconOssStartDate = 649,
  OssIconOssSubName = 650,
  OssIconOssTags = 651,
  OssIconOssUpdatedAt = 652,
  OssIconParentChildren = 653,
  OssIconParentId = 654,
  OssIconProject = 655,
  OssIconProjectChildren = 656,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 657,
  OssIconProjectContentfulId = 658,
  OssIconProjectCreatedAt = 659,
  OssIconProjectEndDate = 660,
  OssIconProjectId = 661,
  OssIconProjectName = 662,
  OssIconProjectNodeLocale = 663,
  OssIconProjectSpaceId = 664,
  OssIconProjectStartDate = 665,
  OssIconProjectSubName = 666,
  OssIconProjectTags = 667,
  OssIconProjectUpdatedAt = 668,
  OssIconSpaceId = 669,
  OssIconSvgChildren = 670,
  OssIconSvgId = 671,
  OssIconSvgSvg = 672,
  OssIconSysRevision = 673,
  OssIconSysType = 674,
  OssIconUpdatedAt = 675,
  OssIconWhatICanDo = 676,
  OssIconWhatICanDoChildren = 677,
  OssIconWhatICanDoContentfulId = 678,
  OssIconWhatICanDoCreatedAt = 679,
  OssIconWhatICanDoId = 680,
  OssIconWhatICanDoName = 681,
  OssIconWhatICanDoNodeLocale = 682,
  OssIconWhatICanDoSortKey = 683,
  OssIconWhatICanDoSpaceId = 684,
  OssIconWhatICanDoSubName = 685,
  OssIconWhatICanDoUpdatedAt = 686,
  OssId = 687,
  OssImageChildren = 688,
  OssImageChildrenChildren = 689,
  OssImageChildrenId = 690,
  OssImageContentfulId = 691,
  OssImageCreatedAt = 692,
  OssImageDescription = 693,
  OssImageFileContentType = 694,
  OssImageFileFileName = 695,
  OssImageFileUrl = 696,
  OssImageFilename = 697,
  OssImageFilesize = 698,
  OssImageGatsbyImage = 699,
  OssImageGatsbyImageData = 700,
  OssImageHeight = 701,
  OssImageId = 702,
  OssImageInternalContent = 703,
  OssImageInternalContentDigest = 704,
  OssImageInternalContentFilePath = 705,
  OssImageInternalDescription = 706,
  OssImageInternalFieldOwners = 707,
  OssImageInternalIgnoreType = 708,
  OssImageInternalMediaType = 709,
  OssImageInternalOwner = 710,
  OssImageInternalType = 711,
  OssImageMimeType = 712,
  OssImageNodeLocale = 713,
  OssImageParentChildren = 714,
  OssImageParentId = 715,
  OssImagePlaceholderUrl = 716,
  OssImagePublicUrl = 717,
  OssImageResizeHeight = 718,
  OssImageResizeSrc = 719,
  OssImageResizeWidth = 720,
  OssImageSize = 721,
  OssImageSpaceId = 722,
  OssImageSysRevision = 723,
  OssImageSysType = 724,
  OssImageTitle = 725,
  OssImageUpdatedAt = 726,
  OssImageUrl = 727,
  OssImageWidth = 728,
  OssInternalContent = 729,
  OssInternalContentDigest = 730,
  OssInternalContentFilePath = 731,
  OssInternalDescription = 732,
  OssInternalFieldOwners = 733,
  OssInternalIgnoreType = 734,
  OssInternalMediaType = 735,
  OssInternalOwner = 736,
  OssInternalType = 737,
  OssName = 738,
  OssNodeLocale = 739,
  OssParentChildren = 740,
  OssParentChildrenChildren = 741,
  OssParentChildrenId = 742,
  OssParentId = 743,
  OssParentInternalContent = 744,
  OssParentInternalContentDigest = 745,
  OssParentInternalContentFilePath = 746,
  OssParentInternalDescription = 747,
  OssParentInternalFieldOwners = 748,
  OssParentInternalIgnoreType = 749,
  OssParentInternalMediaType = 750,
  OssParentInternalOwner = 751,
  OssParentInternalType = 752,
  OssParentParentChildren = 753,
  OssParentParentId = 754,
  OssSpaceId = 755,
  OssStartDate = 756,
  OssSubName = 757,
  OssSysRevision = 758,
  OssSysType = 759,
  OssTags = 760,
  OssTagsBlogPost = 761,
  OssTagsBlogPostChildren = 762,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 763,
  OssTagsBlogPostContentfulId = 764,
  OssTagsBlogPostCreated = 765,
  OssTagsBlogPostCreatedAt = 766,
  OssTagsBlogPostExcerpt = 767,
  OssTagsBlogPostGatsbyPath = 768,
  OssTagsBlogPostId = 769,
  OssTagsBlogPostNodeLocale = 770,
  OssTagsBlogPostSlug = 771,
  OssTagsBlogPostSpaceId = 772,
  OssTagsBlogPostTags = 773,
  OssTagsBlogPostTitle = 774,
  OssTagsBlogPostUpdated = 775,
  OssTagsBlogPostUpdatedAt = 776,
  OssTagsChildren = 777,
  OssTagsChildrenChildren = 778,
  OssTagsChildrenId = 779,
  OssTagsContentfulId = 780,
  OssTagsCreatedAt = 781,
  OssTagsId = 782,
  OssTagsInternalContent = 783,
  OssTagsInternalContentDigest = 784,
  OssTagsInternalContentFilePath = 785,
  OssTagsInternalDescription = 786,
  OssTagsInternalFieldOwners = 787,
  OssTagsInternalIgnoreType = 788,
  OssTagsInternalMediaType = 789,
  OssTagsInternalOwner = 790,
  OssTagsInternalType = 791,
  OssTagsLevel = 792,
  OssTagsName = 793,
  OssTagsNodeLocale = 794,
  OssTagsOss = 795,
  OssTagsOssChildren = 796,
  OssTagsOssChildrenContentfulOssDetailTextNode = 797,
  OssTagsOssContentfulId = 798,
  OssTagsOssCreatedAt = 799,
  OssTagsOssHref = 800,
  OssTagsOssId = 801,
  OssTagsOssName = 802,
  OssTagsOssNodeLocale = 803,
  OssTagsOssSpaceId = 804,
  OssTagsOssStartDate = 805,
  OssTagsOssSubName = 806,
  OssTagsOssTags = 807,
  OssTagsOssUpdatedAt = 808,
  OssTagsParentChildren = 809,
  OssTagsParentId = 810,
  OssTagsProject = 811,
  OssTagsProjectChildren = 812,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 813,
  OssTagsProjectContentfulId = 814,
  OssTagsProjectCreatedAt = 815,
  OssTagsProjectEndDate = 816,
  OssTagsProjectId = 817,
  OssTagsProjectName = 818,
  OssTagsProjectNodeLocale = 819,
  OssTagsProjectSpaceId = 820,
  OssTagsProjectStartDate = 821,
  OssTagsProjectSubName = 822,
  OssTagsProjectTags = 823,
  OssTagsProjectUpdatedAt = 824,
  OssTagsSkillGrpup = 825,
  OssTagsSkillGrpupChildren = 826,
  OssTagsSkillGrpupContentfulId = 827,
  OssTagsSkillGrpupCreatedAt = 828,
  OssTagsSkillGrpupId = 829,
  OssTagsSkillGrpupName = 830,
  OssTagsSkillGrpupNodeLocale = 831,
  OssTagsSkillGrpupSkillMap = 832,
  OssTagsSkillGrpupSkills = 833,
  OssTagsSkillGrpupSpaceId = 834,
  OssTagsSkillGrpupUpdatedAt = 835,
  OssTagsSkillMap = 836,
  OssTagsSkillMapChildren = 837,
  OssTagsSkillMapContentfulId = 838,
  OssTagsSkillMapCreatedAt = 839,
  OssTagsSkillMapExpanded = 840,
  OssTagsSkillMapId = 841,
  OssTagsSkillMapName = 842,
  OssTagsSkillMapNodeLocale = 843,
  OssTagsSkillMapSkillGroups = 844,
  OssTagsSkillMapSkills = 845,
  OssTagsSkillMapSortKey = 846,
  OssTagsSkillMapSpaceId = 847,
  OssTagsSkillMapUpdatedAt = 848,
  OssTagsSpaceId = 849,
  OssTagsSysRevision = 850,
  OssTagsSysType = 851,
  OssTagsUpdatedAt = 852,
  OssUpdatedAt = 853,
  ParentChildren = 854,
  ParentChildrenChildren = 855,
  ParentChildrenChildrenChildren = 856,
  ParentChildrenChildrenId = 857,
  ParentChildrenId = 858,
  ParentChildrenInternalContent = 859,
  ParentChildrenInternalContentDigest = 860,
  ParentChildrenInternalContentFilePath = 861,
  ParentChildrenInternalDescription = 862,
  ParentChildrenInternalFieldOwners = 863,
  ParentChildrenInternalIgnoreType = 864,
  ParentChildrenInternalMediaType = 865,
  ParentChildrenInternalOwner = 866,
  ParentChildrenInternalType = 867,
  ParentChildrenParentChildren = 868,
  ParentChildrenParentId = 869,
  ParentId = 870,
  ParentInternalContent = 871,
  ParentInternalContentDigest = 872,
  ParentInternalContentFilePath = 873,
  ParentInternalDescription = 874,
  ParentInternalFieldOwners = 875,
  ParentInternalIgnoreType = 876,
  ParentInternalMediaType = 877,
  ParentInternalOwner = 878,
  ParentInternalType = 879,
  ParentParentChildren = 880,
  ParentParentChildrenChildren = 881,
  ParentParentChildrenId = 882,
  ParentParentId = 883,
  ParentParentInternalContent = 884,
  ParentParentInternalContentDigest = 885,
  ParentParentInternalContentFilePath = 886,
  ParentParentInternalDescription = 887,
  ParentParentInternalFieldOwners = 888,
  ParentParentInternalIgnoreType = 889,
  ParentParentInternalMediaType = 890,
  ParentParentInternalOwner = 891,
  ParentParentInternalType = 892,
  ParentParentParentChildren = 893,
  ParentParentParentId = 894,
  Project = 895,
  ProjectChildContentfulProjectDetailTextNodeChildren = 896,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 897,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 898,
  ProjectChildContentfulProjectDetailTextNodeDetail = 899,
  ProjectChildContentfulProjectDetailTextNodeId = 900,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 901,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 902,
  ProjectChildContentfulProjectDetailTextNodeInternalContentFilePath = 903,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 904,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 905,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 906,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 907,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 908,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 909,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 910,
  ProjectChildContentfulProjectDetailTextNodeParentId = 911,
  ProjectChildContentfulProjectDetailTextNodeSysType = 912,
  ProjectChildren = 913,
  ProjectChildrenContentfulProjectDetailTextNode = 914,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 915,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 916,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 917,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 918,
  ProjectChildrenContentfulProjectDetailTextNodeId = 919,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 920,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 921,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentFilePath = 922,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 923,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 924,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 925,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 926,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 927,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 928,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 929,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 930,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 931,
  ProjectChildrenChildren = 932,
  ProjectChildrenChildrenChildren = 933,
  ProjectChildrenChildrenId = 934,
  ProjectChildrenId = 935,
  ProjectChildrenInternalContent = 936,
  ProjectChildrenInternalContentDigest = 937,
  ProjectChildrenInternalContentFilePath = 938,
  ProjectChildrenInternalDescription = 939,
  ProjectChildrenInternalFieldOwners = 940,
  ProjectChildrenInternalIgnoreType = 941,
  ProjectChildrenInternalMediaType = 942,
  ProjectChildrenInternalOwner = 943,
  ProjectChildrenInternalType = 944,
  ProjectChildrenParentChildren = 945,
  ProjectChildrenParentId = 946,
  ProjectContentfulId = 947,
  ProjectCreatedAt = 948,
  ProjectDetailChildren = 949,
  ProjectDetailChildrenChildren = 950,
  ProjectDetailChildrenId = 951,
  ProjectDetailDetail = 952,
  ProjectDetailId = 953,
  ProjectDetailInternalContent = 954,
  ProjectDetailInternalContentDigest = 955,
  ProjectDetailInternalContentFilePath = 956,
  ProjectDetailInternalDescription = 957,
  ProjectDetailInternalFieldOwners = 958,
  ProjectDetailInternalIgnoreType = 959,
  ProjectDetailInternalMediaType = 960,
  ProjectDetailInternalOwner = 961,
  ProjectDetailInternalType = 962,
  ProjectDetailParentChildren = 963,
  ProjectDetailParentId = 964,
  ProjectDetailSysType = 965,
  ProjectEndDate = 966,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 967,
  ProjectIconChildContentfulIconSvgTextNodeId = 968,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 969,
  ProjectIconChildren = 970,
  ProjectIconChildrenContentfulIconSvgTextNode = 971,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 972,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 973,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 974,
  ProjectIconChildrenChildren = 975,
  ProjectIconChildrenId = 976,
  ProjectIconContact = 977,
  ProjectIconContactChildren = 978,
  ProjectIconContactContentfulId = 979,
  ProjectIconContactCreatedAt = 980,
  ProjectIconContactHref = 981,
  ProjectIconContactId = 982,
  ProjectIconContactName = 983,
  ProjectIconContactNodeLocale = 984,
  ProjectIconContactSortKey = 985,
  ProjectIconContactSpaceId = 986,
  ProjectIconContactSubName = 987,
  ProjectIconContactUpdatedAt = 988,
  ProjectIconContentfulId = 989,
  ProjectIconCreatedAt = 990,
  ProjectIconHistory = 991,
  ProjectIconHistoryChildren = 992,
  ProjectIconHistoryContentfulId = 993,
  ProjectIconHistoryCreatedAt = 994,
  ProjectIconHistoryDate = 995,
  ProjectIconHistoryId = 996,
  ProjectIconHistoryName = 997,
  ProjectIconHistoryNodeLocale = 998,
  ProjectIconHistorySpaceId = 999,
  ProjectIconHistorySubName = 1000,
  ProjectIconHistoryUpdatedAt = 1001,
  ProjectIconId = 1002,
  ProjectIconInternalContent = 1003,
  ProjectIconInternalContentDigest = 1004,
  ProjectIconInternalContentFilePath = 1005,
  ProjectIconInternalDescription = 1006,
  ProjectIconInternalFieldOwners = 1007,
  ProjectIconInternalIgnoreType = 1008,
  ProjectIconInternalMediaType = 1009,
  ProjectIconInternalOwner = 1010,
  ProjectIconInternalType = 1011,
  ProjectIconName = 1012,
  ProjectIconNodeLocale = 1013,
  ProjectIconOss = 1014,
  ProjectIconOssChildren = 1015,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1016,
  ProjectIconOssContentfulId = 1017,
  ProjectIconOssCreatedAt = 1018,
  ProjectIconOssHref = 1019,
  ProjectIconOssId = 1020,
  ProjectIconOssName = 1021,
  ProjectIconOssNodeLocale = 1022,
  ProjectIconOssSpaceId = 1023,
  ProjectIconOssStartDate = 1024,
  ProjectIconOssSubName = 1025,
  ProjectIconOssTags = 1026,
  ProjectIconOssUpdatedAt = 1027,
  ProjectIconParentChildren = 1028,
  ProjectIconParentId = 1029,
  ProjectIconProject = 1030,
  ProjectIconProjectChildren = 1031,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1032,
  ProjectIconProjectContentfulId = 1033,
  ProjectIconProjectCreatedAt = 1034,
  ProjectIconProjectEndDate = 1035,
  ProjectIconProjectId = 1036,
  ProjectIconProjectName = 1037,
  ProjectIconProjectNodeLocale = 1038,
  ProjectIconProjectSpaceId = 1039,
  ProjectIconProjectStartDate = 1040,
  ProjectIconProjectSubName = 1041,
  ProjectIconProjectTags = 1042,
  ProjectIconProjectUpdatedAt = 1043,
  ProjectIconSpaceId = 1044,
  ProjectIconSvgChildren = 1045,
  ProjectIconSvgId = 1046,
  ProjectIconSvgSvg = 1047,
  ProjectIconSysRevision = 1048,
  ProjectIconSysType = 1049,
  ProjectIconUpdatedAt = 1050,
  ProjectIconWhatICanDo = 1051,
  ProjectIconWhatICanDoChildren = 1052,
  ProjectIconWhatICanDoContentfulId = 1053,
  ProjectIconWhatICanDoCreatedAt = 1054,
  ProjectIconWhatICanDoId = 1055,
  ProjectIconWhatICanDoName = 1056,
  ProjectIconWhatICanDoNodeLocale = 1057,
  ProjectIconWhatICanDoSortKey = 1058,
  ProjectIconWhatICanDoSpaceId = 1059,
  ProjectIconWhatICanDoSubName = 1060,
  ProjectIconWhatICanDoUpdatedAt = 1061,
  ProjectId = 1062,
  ProjectInternalContent = 1063,
  ProjectInternalContentDigest = 1064,
  ProjectInternalContentFilePath = 1065,
  ProjectInternalDescription = 1066,
  ProjectInternalFieldOwners = 1067,
  ProjectInternalIgnoreType = 1068,
  ProjectInternalMediaType = 1069,
  ProjectInternalOwner = 1070,
  ProjectInternalType = 1071,
  ProjectName = 1072,
  ProjectNodeLocale = 1073,
  ProjectParentChildren = 1074,
  ProjectParentChildrenChildren = 1075,
  ProjectParentChildrenId = 1076,
  ProjectParentId = 1077,
  ProjectParentInternalContent = 1078,
  ProjectParentInternalContentDigest = 1079,
  ProjectParentInternalContentFilePath = 1080,
  ProjectParentInternalDescription = 1081,
  ProjectParentInternalFieldOwners = 1082,
  ProjectParentInternalIgnoreType = 1083,
  ProjectParentInternalMediaType = 1084,
  ProjectParentInternalOwner = 1085,
  ProjectParentInternalType = 1086,
  ProjectParentParentChildren = 1087,
  ProjectParentParentId = 1088,
  ProjectSpaceId = 1089,
  ProjectStartDate = 1090,
  ProjectSubName = 1091,
  ProjectSysRevision = 1092,
  ProjectSysType = 1093,
  ProjectTags = 1094,
  ProjectTagsBlogPost = 1095,
  ProjectTagsBlogPostChildren = 1096,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1097,
  ProjectTagsBlogPostContentfulId = 1098,
  ProjectTagsBlogPostCreated = 1099,
  ProjectTagsBlogPostCreatedAt = 1100,
  ProjectTagsBlogPostExcerpt = 1101,
  ProjectTagsBlogPostGatsbyPath = 1102,
  ProjectTagsBlogPostId = 1103,
  ProjectTagsBlogPostNodeLocale = 1104,
  ProjectTagsBlogPostSlug = 1105,
  ProjectTagsBlogPostSpaceId = 1106,
  ProjectTagsBlogPostTags = 1107,
  ProjectTagsBlogPostTitle = 1108,
  ProjectTagsBlogPostUpdated = 1109,
  ProjectTagsBlogPostUpdatedAt = 1110,
  ProjectTagsChildren = 1111,
  ProjectTagsChildrenChildren = 1112,
  ProjectTagsChildrenId = 1113,
  ProjectTagsContentfulId = 1114,
  ProjectTagsCreatedAt = 1115,
  ProjectTagsId = 1116,
  ProjectTagsInternalContent = 1117,
  ProjectTagsInternalContentDigest = 1118,
  ProjectTagsInternalContentFilePath = 1119,
  ProjectTagsInternalDescription = 1120,
  ProjectTagsInternalFieldOwners = 1121,
  ProjectTagsInternalIgnoreType = 1122,
  ProjectTagsInternalMediaType = 1123,
  ProjectTagsInternalOwner = 1124,
  ProjectTagsInternalType = 1125,
  ProjectTagsLevel = 1126,
  ProjectTagsName = 1127,
  ProjectTagsNodeLocale = 1128,
  ProjectTagsOss = 1129,
  ProjectTagsOssChildren = 1130,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1131,
  ProjectTagsOssContentfulId = 1132,
  ProjectTagsOssCreatedAt = 1133,
  ProjectTagsOssHref = 1134,
  ProjectTagsOssId = 1135,
  ProjectTagsOssName = 1136,
  ProjectTagsOssNodeLocale = 1137,
  ProjectTagsOssSpaceId = 1138,
  ProjectTagsOssStartDate = 1139,
  ProjectTagsOssSubName = 1140,
  ProjectTagsOssTags = 1141,
  ProjectTagsOssUpdatedAt = 1142,
  ProjectTagsParentChildren = 1143,
  ProjectTagsParentId = 1144,
  ProjectTagsProject = 1145,
  ProjectTagsProjectChildren = 1146,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1147,
  ProjectTagsProjectContentfulId = 1148,
  ProjectTagsProjectCreatedAt = 1149,
  ProjectTagsProjectEndDate = 1150,
  ProjectTagsProjectId = 1151,
  ProjectTagsProjectName = 1152,
  ProjectTagsProjectNodeLocale = 1153,
  ProjectTagsProjectSpaceId = 1154,
  ProjectTagsProjectStartDate = 1155,
  ProjectTagsProjectSubName = 1156,
  ProjectTagsProjectTags = 1157,
  ProjectTagsProjectUpdatedAt = 1158,
  ProjectTagsSkillGrpup = 1159,
  ProjectTagsSkillGrpupChildren = 1160,
  ProjectTagsSkillGrpupContentfulId = 1161,
  ProjectTagsSkillGrpupCreatedAt = 1162,
  ProjectTagsSkillGrpupId = 1163,
  ProjectTagsSkillGrpupName = 1164,
  ProjectTagsSkillGrpupNodeLocale = 1165,
  ProjectTagsSkillGrpupSkillMap = 1166,
  ProjectTagsSkillGrpupSkills = 1167,
  ProjectTagsSkillGrpupSpaceId = 1168,
  ProjectTagsSkillGrpupUpdatedAt = 1169,
  ProjectTagsSkillMap = 1170,
  ProjectTagsSkillMapChildren = 1171,
  ProjectTagsSkillMapContentfulId = 1172,
  ProjectTagsSkillMapCreatedAt = 1173,
  ProjectTagsSkillMapExpanded = 1174,
  ProjectTagsSkillMapId = 1175,
  ProjectTagsSkillMapName = 1176,
  ProjectTagsSkillMapNodeLocale = 1177,
  ProjectTagsSkillMapSkillGroups = 1178,
  ProjectTagsSkillMapSkills = 1179,
  ProjectTagsSkillMapSortKey = 1180,
  ProjectTagsSkillMapSpaceId = 1181,
  ProjectTagsSkillMapUpdatedAt = 1182,
  ProjectTagsSpaceId = 1183,
  ProjectTagsSysRevision = 1184,
  ProjectTagsSysType = 1185,
  ProjectTagsUpdatedAt = 1186,
  ProjectUpdatedAt = 1187,
  SpaceId = 1188,
  SvgChildren = 1189,
  SvgChildrenChildren = 1190,
  SvgChildrenChildrenChildren = 1191,
  SvgChildrenChildrenId = 1192,
  SvgChildrenId = 1193,
  SvgChildrenInternalContent = 1194,
  SvgChildrenInternalContentDigest = 1195,
  SvgChildrenInternalContentFilePath = 1196,
  SvgChildrenInternalDescription = 1197,
  SvgChildrenInternalFieldOwners = 1198,
  SvgChildrenInternalIgnoreType = 1199,
  SvgChildrenInternalMediaType = 1200,
  SvgChildrenInternalOwner = 1201,
  SvgChildrenInternalType = 1202,
  SvgChildrenParentChildren = 1203,
  SvgChildrenParentId = 1204,
  SvgId = 1205,
  SvgInternalContent = 1206,
  SvgInternalContentDigest = 1207,
  SvgInternalContentFilePath = 1208,
  SvgInternalDescription = 1209,
  SvgInternalFieldOwners = 1210,
  SvgInternalIgnoreType = 1211,
  SvgInternalMediaType = 1212,
  SvgInternalOwner = 1213,
  SvgInternalType = 1214,
  SvgParentChildren = 1215,
  SvgParentChildrenChildren = 1216,
  SvgParentChildrenId = 1217,
  SvgParentId = 1218,
  SvgParentInternalContent = 1219,
  SvgParentInternalContentDigest = 1220,
  SvgParentInternalContentFilePath = 1221,
  SvgParentInternalDescription = 1222,
  SvgParentInternalFieldOwners = 1223,
  SvgParentInternalIgnoreType = 1224,
  SvgParentInternalMediaType = 1225,
  SvgParentInternalOwner = 1226,
  SvgParentInternalType = 1227,
  SvgParentParentChildren = 1228,
  SvgParentParentId = 1229,
  SvgSvg = 1230,
  SvgSysType = 1231,
  SysContentTypeSysId = 1232,
  SysContentTypeSysLinkType = 1233,
  SysContentTypeSysType = 1234,
  SysRevision = 1235,
  SysType = 1236,
  UpdatedAt = 1237,
  WhatICanDo = 1238,
  WhatICanDoChildren = 1239,
  WhatICanDoChildrenChildren = 1240,
  WhatICanDoChildrenChildrenChildren = 1241,
  WhatICanDoChildrenChildrenId = 1242,
  WhatICanDoChildrenId = 1243,
  WhatICanDoChildrenInternalContent = 1244,
  WhatICanDoChildrenInternalContentDigest = 1245,
  WhatICanDoChildrenInternalContentFilePath = 1246,
  WhatICanDoChildrenInternalDescription = 1247,
  WhatICanDoChildrenInternalFieldOwners = 1248,
  WhatICanDoChildrenInternalIgnoreType = 1249,
  WhatICanDoChildrenInternalMediaType = 1250,
  WhatICanDoChildrenInternalOwner = 1251,
  WhatICanDoChildrenInternalType = 1252,
  WhatICanDoChildrenParentChildren = 1253,
  WhatICanDoChildrenParentId = 1254,
  WhatICanDoContentfulId = 1255,
  WhatICanDoCreatedAt = 1256,
  WhatICanDoIconChildContentfulIconSvgTextNodeChildren = 1257,
  WhatICanDoIconChildContentfulIconSvgTextNodeId = 1258,
  WhatICanDoIconChildContentfulIconSvgTextNodeSvg = 1259,
  WhatICanDoIconChildren = 1260,
  WhatICanDoIconChildrenContentfulIconSvgTextNode = 1261,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeChildren = 1262,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeId = 1263,
  WhatICanDoIconChildrenContentfulIconSvgTextNodeSvg = 1264,
  WhatICanDoIconChildrenChildren = 1265,
  WhatICanDoIconChildrenId = 1266,
  WhatICanDoIconContact = 1267,
  WhatICanDoIconContactChildren = 1268,
  WhatICanDoIconContactContentfulId = 1269,
  WhatICanDoIconContactCreatedAt = 1270,
  WhatICanDoIconContactHref = 1271,
  WhatICanDoIconContactId = 1272,
  WhatICanDoIconContactName = 1273,
  WhatICanDoIconContactNodeLocale = 1274,
  WhatICanDoIconContactSortKey = 1275,
  WhatICanDoIconContactSpaceId = 1276,
  WhatICanDoIconContactSubName = 1277,
  WhatICanDoIconContactUpdatedAt = 1278,
  WhatICanDoIconContentfulId = 1279,
  WhatICanDoIconCreatedAt = 1280,
  WhatICanDoIconHistory = 1281,
  WhatICanDoIconHistoryChildren = 1282,
  WhatICanDoIconHistoryContentfulId = 1283,
  WhatICanDoIconHistoryCreatedAt = 1284,
  WhatICanDoIconHistoryDate = 1285,
  WhatICanDoIconHistoryId = 1286,
  WhatICanDoIconHistoryName = 1287,
  WhatICanDoIconHistoryNodeLocale = 1288,
  WhatICanDoIconHistorySpaceId = 1289,
  WhatICanDoIconHistorySubName = 1290,
  WhatICanDoIconHistoryUpdatedAt = 1291,
  WhatICanDoIconId = 1292,
  WhatICanDoIconInternalContent = 1293,
  WhatICanDoIconInternalContentDigest = 1294,
  WhatICanDoIconInternalContentFilePath = 1295,
  WhatICanDoIconInternalDescription = 1296,
  WhatICanDoIconInternalFieldOwners = 1297,
  WhatICanDoIconInternalIgnoreType = 1298,
  WhatICanDoIconInternalMediaType = 1299,
  WhatICanDoIconInternalOwner = 1300,
  WhatICanDoIconInternalType = 1301,
  WhatICanDoIconName = 1302,
  WhatICanDoIconNodeLocale = 1303,
  WhatICanDoIconOss = 1304,
  WhatICanDoIconOssChildren = 1305,
  WhatICanDoIconOssChildrenContentfulOssDetailTextNode = 1306,
  WhatICanDoIconOssContentfulId = 1307,
  WhatICanDoIconOssCreatedAt = 1308,
  WhatICanDoIconOssHref = 1309,
  WhatICanDoIconOssId = 1310,
  WhatICanDoIconOssName = 1311,
  WhatICanDoIconOssNodeLocale = 1312,
  WhatICanDoIconOssSpaceId = 1313,
  WhatICanDoIconOssStartDate = 1314,
  WhatICanDoIconOssSubName = 1315,
  WhatICanDoIconOssTags = 1316,
  WhatICanDoIconOssUpdatedAt = 1317,
  WhatICanDoIconParentChildren = 1318,
  WhatICanDoIconParentId = 1319,
  WhatICanDoIconProject = 1320,
  WhatICanDoIconProjectChildren = 1321,
  WhatICanDoIconProjectChildrenContentfulProjectDetailTextNode = 1322,
  WhatICanDoIconProjectContentfulId = 1323,
  WhatICanDoIconProjectCreatedAt = 1324,
  WhatICanDoIconProjectEndDate = 1325,
  WhatICanDoIconProjectId = 1326,
  WhatICanDoIconProjectName = 1327,
  WhatICanDoIconProjectNodeLocale = 1328,
  WhatICanDoIconProjectSpaceId = 1329,
  WhatICanDoIconProjectStartDate = 1330,
  WhatICanDoIconProjectSubName = 1331,
  WhatICanDoIconProjectTags = 1332,
  WhatICanDoIconProjectUpdatedAt = 1333,
  WhatICanDoIconSpaceId = 1334,
  WhatICanDoIconSvgChildren = 1335,
  WhatICanDoIconSvgId = 1336,
  WhatICanDoIconSvgSvg = 1337,
  WhatICanDoIconSysRevision = 1338,
  WhatICanDoIconSysType = 1339,
  WhatICanDoIconUpdatedAt = 1340,
  WhatICanDoIconWhatICanDo = 1341,
  WhatICanDoIconWhatICanDoChildren = 1342,
  WhatICanDoIconWhatICanDoContentfulId = 1343,
  WhatICanDoIconWhatICanDoCreatedAt = 1344,
  WhatICanDoIconWhatICanDoId = 1345,
  WhatICanDoIconWhatICanDoName = 1346,
  WhatICanDoIconWhatICanDoNodeLocale = 1347,
  WhatICanDoIconWhatICanDoSortKey = 1348,
  WhatICanDoIconWhatICanDoSpaceId = 1349,
  WhatICanDoIconWhatICanDoSubName = 1350,
  WhatICanDoIconWhatICanDoUpdatedAt = 1351,
  WhatICanDoId = 1352,
  WhatICanDoInternalContent = 1353,
  WhatICanDoInternalContentDigest = 1354,
  WhatICanDoInternalContentFilePath = 1355,
  WhatICanDoInternalDescription = 1356,
  WhatICanDoInternalFieldOwners = 1357,
  WhatICanDoInternalIgnoreType = 1358,
  WhatICanDoInternalMediaType = 1359,
  WhatICanDoInternalOwner = 1360,
  WhatICanDoInternalType = 1361,
  WhatICanDoName = 1362,
  WhatICanDoNodeLocale = 1363,
  WhatICanDoParentChildren = 1364,
  WhatICanDoParentChildrenChildren = 1365,
  WhatICanDoParentChildrenId = 1366,
  WhatICanDoParentId = 1367,
  WhatICanDoParentInternalContent = 1368,
  WhatICanDoParentInternalContentDigest = 1369,
  WhatICanDoParentInternalContentFilePath = 1370,
  WhatICanDoParentInternalDescription = 1371,
  WhatICanDoParentInternalFieldOwners = 1372,
  WhatICanDoParentInternalIgnoreType = 1373,
  WhatICanDoParentInternalMediaType = 1374,
  WhatICanDoParentInternalOwner = 1375,
  WhatICanDoParentInternalType = 1376,
  WhatICanDoParentParentChildren = 1377,
  WhatICanDoParentParentId = 1378,
  WhatICanDoSortKey = 1379,
  WhatICanDoSpaceId = 1380,
  WhatICanDoSubName = 1381,
  WhatICanDoSysRevision = 1382,
  WhatICanDoSysType = 1383,
  WhatICanDoUpdatedAt = 1384
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
  ChildContentfulOssDetailTextNodeChildren = 0,
  ChildContentfulOssDetailTextNodeChildrenChildren = 1,
  ChildContentfulOssDetailTextNodeChildrenChildrenChildren = 2,
  ChildContentfulOssDetailTextNodeChildrenChildrenId = 3,
  ChildContentfulOssDetailTextNodeChildrenId = 4,
  ChildContentfulOssDetailTextNodeChildrenInternalContent = 5,
  ChildContentfulOssDetailTextNodeChildrenInternalContentDigest = 6,
  ChildContentfulOssDetailTextNodeChildrenInternalContentFilePath = 7,
  ChildContentfulOssDetailTextNodeChildrenInternalDescription = 8,
  ChildContentfulOssDetailTextNodeChildrenInternalFieldOwners = 9,
  ChildContentfulOssDetailTextNodeChildrenInternalIgnoreType = 10,
  ChildContentfulOssDetailTextNodeChildrenInternalMediaType = 11,
  ChildContentfulOssDetailTextNodeChildrenInternalOwner = 12,
  ChildContentfulOssDetailTextNodeChildrenInternalType = 13,
  ChildContentfulOssDetailTextNodeChildrenParentChildren = 14,
  ChildContentfulOssDetailTextNodeChildrenParentId = 15,
  ChildContentfulOssDetailTextNodeDetail = 16,
  ChildContentfulOssDetailTextNodeId = 17,
  ChildContentfulOssDetailTextNodeInternalContent = 18,
  ChildContentfulOssDetailTextNodeInternalContentDigest = 19,
  ChildContentfulOssDetailTextNodeInternalContentFilePath = 20,
  ChildContentfulOssDetailTextNodeInternalDescription = 21,
  ChildContentfulOssDetailTextNodeInternalFieldOwners = 22,
  ChildContentfulOssDetailTextNodeInternalIgnoreType = 23,
  ChildContentfulOssDetailTextNodeInternalMediaType = 24,
  ChildContentfulOssDetailTextNodeInternalOwner = 25,
  ChildContentfulOssDetailTextNodeInternalType = 26,
  ChildContentfulOssDetailTextNodeParentChildren = 27,
  ChildContentfulOssDetailTextNodeParentChildrenChildren = 28,
  ChildContentfulOssDetailTextNodeParentChildrenId = 29,
  ChildContentfulOssDetailTextNodeParentId = 30,
  ChildContentfulOssDetailTextNodeParentInternalContent = 31,
  ChildContentfulOssDetailTextNodeParentInternalContentDigest = 32,
  ChildContentfulOssDetailTextNodeParentInternalContentFilePath = 33,
  ChildContentfulOssDetailTextNodeParentInternalDescription = 34,
  ChildContentfulOssDetailTextNodeParentInternalFieldOwners = 35,
  ChildContentfulOssDetailTextNodeParentInternalIgnoreType = 36,
  ChildContentfulOssDetailTextNodeParentInternalMediaType = 37,
  ChildContentfulOssDetailTextNodeParentInternalOwner = 38,
  ChildContentfulOssDetailTextNodeParentInternalType = 39,
  ChildContentfulOssDetailTextNodeParentParentChildren = 40,
  ChildContentfulOssDetailTextNodeParentParentId = 41,
  ChildContentfulOssDetailTextNodeSysType = 42,
  Children = 43,
  ChildrenContentfulOssDetailTextNode = 44,
  ChildrenContentfulOssDetailTextNodeChildren = 45,
  ChildrenContentfulOssDetailTextNodeChildrenChildren = 46,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenChildren = 47,
  ChildrenContentfulOssDetailTextNodeChildrenChildrenId = 48,
  ChildrenContentfulOssDetailTextNodeChildrenId = 49,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContent = 50,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContentDigest = 51,
  ChildrenContentfulOssDetailTextNodeChildrenInternalContentFilePath = 52,
  ChildrenContentfulOssDetailTextNodeChildrenInternalDescription = 53,
  ChildrenContentfulOssDetailTextNodeChildrenInternalFieldOwners = 54,
  ChildrenContentfulOssDetailTextNodeChildrenInternalIgnoreType = 55,
  ChildrenContentfulOssDetailTextNodeChildrenInternalMediaType = 56,
  ChildrenContentfulOssDetailTextNodeChildrenInternalOwner = 57,
  ChildrenContentfulOssDetailTextNodeChildrenInternalType = 58,
  ChildrenContentfulOssDetailTextNodeChildrenParentChildren = 59,
  ChildrenContentfulOssDetailTextNodeChildrenParentId = 60,
  ChildrenContentfulOssDetailTextNodeDetail = 61,
  ChildrenContentfulOssDetailTextNodeId = 62,
  ChildrenContentfulOssDetailTextNodeInternalContent = 63,
  ChildrenContentfulOssDetailTextNodeInternalContentDigest = 64,
  ChildrenContentfulOssDetailTextNodeInternalContentFilePath = 65,
  ChildrenContentfulOssDetailTextNodeInternalDescription = 66,
  ChildrenContentfulOssDetailTextNodeInternalFieldOwners = 67,
  ChildrenContentfulOssDetailTextNodeInternalIgnoreType = 68,
  ChildrenContentfulOssDetailTextNodeInternalMediaType = 69,
  ChildrenContentfulOssDetailTextNodeInternalOwner = 70,
  ChildrenContentfulOssDetailTextNodeInternalType = 71,
  ChildrenContentfulOssDetailTextNodeParentChildren = 72,
  ChildrenContentfulOssDetailTextNodeParentChildrenChildren = 73,
  ChildrenContentfulOssDetailTextNodeParentChildrenId = 74,
  ChildrenContentfulOssDetailTextNodeParentId = 75,
  ChildrenContentfulOssDetailTextNodeParentInternalContent = 76,
  ChildrenContentfulOssDetailTextNodeParentInternalContentDigest = 77,
  ChildrenContentfulOssDetailTextNodeParentInternalContentFilePath = 78,
  ChildrenContentfulOssDetailTextNodeParentInternalDescription = 79,
  ChildrenContentfulOssDetailTextNodeParentInternalFieldOwners = 80,
  ChildrenContentfulOssDetailTextNodeParentInternalIgnoreType = 81,
  ChildrenContentfulOssDetailTextNodeParentInternalMediaType = 82,
  ChildrenContentfulOssDetailTextNodeParentInternalOwner = 83,
  ChildrenContentfulOssDetailTextNodeParentInternalType = 84,
  ChildrenContentfulOssDetailTextNodeParentParentChildren = 85,
  ChildrenContentfulOssDetailTextNodeParentParentId = 86,
  ChildrenContentfulOssDetailTextNodeSysType = 87,
  ChildrenChildren = 88,
  ChildrenChildrenChildren = 89,
  ChildrenChildrenChildrenChildren = 90,
  ChildrenChildrenChildrenId = 91,
  ChildrenChildrenId = 92,
  ChildrenChildrenInternalContent = 93,
  ChildrenChildrenInternalContentDigest = 94,
  ChildrenChildrenInternalContentFilePath = 95,
  ChildrenChildrenInternalDescription = 96,
  ChildrenChildrenInternalFieldOwners = 97,
  ChildrenChildrenInternalIgnoreType = 98,
  ChildrenChildrenInternalMediaType = 99,
  ChildrenChildrenInternalOwner = 100,
  ChildrenChildrenInternalType = 101,
  ChildrenChildrenParentChildren = 102,
  ChildrenChildrenParentId = 103,
  ChildrenId = 104,
  ChildrenInternalContent = 105,
  ChildrenInternalContentDigest = 106,
  ChildrenInternalContentFilePath = 107,
  ChildrenInternalDescription = 108,
  ChildrenInternalFieldOwners = 109,
  ChildrenInternalIgnoreType = 110,
  ChildrenInternalMediaType = 111,
  ChildrenInternalOwner = 112,
  ChildrenInternalType = 113,
  ChildrenParentChildren = 114,
  ChildrenParentChildrenChildren = 115,
  ChildrenParentChildrenId = 116,
  ChildrenParentId = 117,
  ChildrenParentInternalContent = 118,
  ChildrenParentInternalContentDigest = 119,
  ChildrenParentInternalContentFilePath = 120,
  ChildrenParentInternalDescription = 121,
  ChildrenParentInternalFieldOwners = 122,
  ChildrenParentInternalIgnoreType = 123,
  ChildrenParentInternalMediaType = 124,
  ChildrenParentInternalOwner = 125,
  ChildrenParentInternalType = 126,
  ChildrenParentParentChildren = 127,
  ChildrenParentParentId = 128,
  ContentfulId = 129,
  CreatedAt = 130,
  DetailChildren = 131,
  DetailChildrenChildren = 132,
  DetailChildrenChildrenChildren = 133,
  DetailChildrenChildrenId = 134,
  DetailChildrenId = 135,
  DetailChildrenInternalContent = 136,
  DetailChildrenInternalContentDigest = 137,
  DetailChildrenInternalContentFilePath = 138,
  DetailChildrenInternalDescription = 139,
  DetailChildrenInternalFieldOwners = 140,
  DetailChildrenInternalIgnoreType = 141,
  DetailChildrenInternalMediaType = 142,
  DetailChildrenInternalOwner = 143,
  DetailChildrenInternalType = 144,
  DetailChildrenParentChildren = 145,
  DetailChildrenParentId = 146,
  DetailDetail = 147,
  DetailId = 148,
  DetailInternalContent = 149,
  DetailInternalContentDigest = 150,
  DetailInternalContentFilePath = 151,
  DetailInternalDescription = 152,
  DetailInternalFieldOwners = 153,
  DetailInternalIgnoreType = 154,
  DetailInternalMediaType = 155,
  DetailInternalOwner = 156,
  DetailInternalType = 157,
  DetailParentChildren = 158,
  DetailParentChildrenChildren = 159,
  DetailParentChildrenId = 160,
  DetailParentId = 161,
  DetailParentInternalContent = 162,
  DetailParentInternalContentDigest = 163,
  DetailParentInternalContentFilePath = 164,
  DetailParentInternalDescription = 165,
  DetailParentInternalFieldOwners = 166,
  DetailParentInternalIgnoreType = 167,
  DetailParentInternalMediaType = 168,
  DetailParentInternalOwner = 169,
  DetailParentInternalType = 170,
  DetailParentParentChildren = 171,
  DetailParentParentId = 172,
  DetailSysType = 173,
  Href = 174,
  IconChildContentfulIconSvgTextNodeChildren = 175,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 176,
  IconChildContentfulIconSvgTextNodeChildrenId = 177,
  IconChildContentfulIconSvgTextNodeId = 178,
  IconChildContentfulIconSvgTextNodeInternalContent = 179,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 180,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 181,
  IconChildContentfulIconSvgTextNodeInternalDescription = 182,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 183,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 184,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 185,
  IconChildContentfulIconSvgTextNodeInternalOwner = 186,
  IconChildContentfulIconSvgTextNodeInternalType = 187,
  IconChildContentfulIconSvgTextNodeParentChildren = 188,
  IconChildContentfulIconSvgTextNodeParentId = 189,
  IconChildContentfulIconSvgTextNodeSvg = 190,
  IconChildContentfulIconSvgTextNodeSysType = 191,
  IconChildren = 192,
  IconChildrenContentfulIconSvgTextNode = 193,
  IconChildrenContentfulIconSvgTextNodeChildren = 194,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 195,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 196,
  IconChildrenContentfulIconSvgTextNodeId = 197,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 198,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 199,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 200,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 201,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 202,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 203,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 204,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 205,
  IconChildrenContentfulIconSvgTextNodeInternalType = 206,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 207,
  IconChildrenContentfulIconSvgTextNodeParentId = 208,
  IconChildrenContentfulIconSvgTextNodeSvg = 209,
  IconChildrenContentfulIconSvgTextNodeSysType = 210,
  IconChildrenChildren = 211,
  IconChildrenChildrenChildren = 212,
  IconChildrenChildrenId = 213,
  IconChildrenId = 214,
  IconChildrenInternalContent = 215,
  IconChildrenInternalContentDigest = 216,
  IconChildrenInternalContentFilePath = 217,
  IconChildrenInternalDescription = 218,
  IconChildrenInternalFieldOwners = 219,
  IconChildrenInternalIgnoreType = 220,
  IconChildrenInternalMediaType = 221,
  IconChildrenInternalOwner = 222,
  IconChildrenInternalType = 223,
  IconChildrenParentChildren = 224,
  IconChildrenParentId = 225,
  IconContact = 226,
  IconContactChildren = 227,
  IconContactChildrenChildren = 228,
  IconContactChildrenId = 229,
  IconContactContentfulId = 230,
  IconContactCreatedAt = 231,
  IconContactHref = 232,
  IconContactIconSvgDarkChildren = 233,
  IconContactIconSvgDarkContentfulId = 234,
  IconContactIconSvgDarkCreatedAt = 235,
  IconContactIconSvgDarkDescription = 236,
  IconContactIconSvgDarkFilename = 237,
  IconContactIconSvgDarkFilesize = 238,
  IconContactIconSvgDarkGatsbyImage = 239,
  IconContactIconSvgDarkGatsbyImageData = 240,
  IconContactIconSvgDarkHeight = 241,
  IconContactIconSvgDarkId = 242,
  IconContactIconSvgDarkMimeType = 243,
  IconContactIconSvgDarkNodeLocale = 244,
  IconContactIconSvgDarkPlaceholderUrl = 245,
  IconContactIconSvgDarkPublicUrl = 246,
  IconContactIconSvgDarkSize = 247,
  IconContactIconSvgDarkSpaceId = 248,
  IconContactIconSvgDarkTitle = 249,
  IconContactIconSvgDarkUpdatedAt = 250,
  IconContactIconSvgDarkUrl = 251,
  IconContactIconSvgDarkWidth = 252,
  IconContactIconSvgLightChildren = 253,
  IconContactIconSvgLightContentfulId = 254,
  IconContactIconSvgLightCreatedAt = 255,
  IconContactIconSvgLightDescription = 256,
  IconContactIconSvgLightFilename = 257,
  IconContactIconSvgLightFilesize = 258,
  IconContactIconSvgLightGatsbyImage = 259,
  IconContactIconSvgLightGatsbyImageData = 260,
  IconContactIconSvgLightHeight = 261,
  IconContactIconSvgLightId = 262,
  IconContactIconSvgLightMimeType = 263,
  IconContactIconSvgLightNodeLocale = 264,
  IconContactIconSvgLightPlaceholderUrl = 265,
  IconContactIconSvgLightPublicUrl = 266,
  IconContactIconSvgLightSize = 267,
  IconContactIconSvgLightSpaceId = 268,
  IconContactIconSvgLightTitle = 269,
  IconContactIconSvgLightUpdatedAt = 270,
  IconContactIconSvgLightUrl = 271,
  IconContactIconSvgLightWidth = 272,
  IconContactIconChildren = 273,
  IconContactIconChildrenContentfulIconSvgTextNode = 274,
  IconContactIconContact = 275,
  IconContactIconContentfulId = 276,
  IconContactIconCreatedAt = 277,
  IconContactIconHistory = 278,
  IconContactIconId = 279,
  IconContactIconName = 280,
  IconContactIconNodeLocale = 281,
  IconContactIconOss = 282,
  IconContactIconProject = 283,
  IconContactIconSpaceId = 284,
  IconContactIconUpdatedAt = 285,
  IconContactIconWhatICanDo = 286,
  IconContactId = 287,
  IconContactInternalContent = 288,
  IconContactInternalContentDigest = 289,
  IconContactInternalContentFilePath = 290,
  IconContactInternalDescription = 291,
  IconContactInternalFieldOwners = 292,
  IconContactInternalIgnoreType = 293,
  IconContactInternalMediaType = 294,
  IconContactInternalOwner = 295,
  IconContactInternalType = 296,
  IconContactName = 297,
  IconContactNodeLocale = 298,
  IconContactParentChildren = 299,
  IconContactParentId = 300,
  IconContactSortKey = 301,
  IconContactSpaceId = 302,
  IconContactSubName = 303,
  IconContactSysRevision = 304,
  IconContactSysType = 305,
  IconContactUpdatedAt = 306,
  IconContentfulId = 307,
  IconCreatedAt = 308,
  IconHistory = 309,
  IconHistoryChildren = 310,
  IconHistoryChildrenChildren = 311,
  IconHistoryChildrenId = 312,
  IconHistoryContentfulId = 313,
  IconHistoryCreatedAt = 314,
  IconHistoryDate = 315,
  IconHistoryIconChildren = 316,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 317,
  IconHistoryIconContact = 318,
  IconHistoryIconContentfulId = 319,
  IconHistoryIconCreatedAt = 320,
  IconHistoryIconHistory = 321,
  IconHistoryIconId = 322,
  IconHistoryIconName = 323,
  IconHistoryIconNodeLocale = 324,
  IconHistoryIconOss = 325,
  IconHistoryIconProject = 326,
  IconHistoryIconSpaceId = 327,
  IconHistoryIconUpdatedAt = 328,
  IconHistoryIconWhatICanDo = 329,
  IconHistoryId = 330,
  IconHistoryInternalContent = 331,
  IconHistoryInternalContentDigest = 332,
  IconHistoryInternalContentFilePath = 333,
  IconHistoryInternalDescription = 334,
  IconHistoryInternalFieldOwners = 335,
  IconHistoryInternalIgnoreType = 336,
  IconHistoryInternalMediaType = 337,
  IconHistoryInternalOwner = 338,
  IconHistoryInternalType = 339,
  IconHistoryName = 340,
  IconHistoryNodeLocale = 341,
  IconHistoryParentChildren = 342,
  IconHistoryParentId = 343,
  IconHistorySpaceId = 344,
  IconHistorySubName = 345,
  IconHistorySysRevision = 346,
  IconHistorySysType = 347,
  IconHistoryUpdatedAt = 348,
  IconId = 349,
  IconInternalContent = 350,
  IconInternalContentDigest = 351,
  IconInternalContentFilePath = 352,
  IconInternalDescription = 353,
  IconInternalFieldOwners = 354,
  IconInternalIgnoreType = 355,
  IconInternalMediaType = 356,
  IconInternalOwner = 357,
  IconInternalType = 358,
  IconName = 359,
  IconNodeLocale = 360,
  IconOss = 361,
  IconOssChildContentfulOssDetailTextNodeChildren = 362,
  IconOssChildContentfulOssDetailTextNodeDetail = 363,
  IconOssChildContentfulOssDetailTextNodeId = 364,
  IconOssChildren = 365,
  IconOssChildrenContentfulOssDetailTextNode = 366,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 367,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 368,
  IconOssChildrenContentfulOssDetailTextNodeId = 369,
  IconOssChildrenChildren = 370,
  IconOssChildrenId = 371,
  IconOssContentfulId = 372,
  IconOssCreatedAt = 373,
  IconOssDetailChildren = 374,
  IconOssDetailDetail = 375,
  IconOssDetailId = 376,
  IconOssHref = 377,
  IconOssIconChildren = 378,
  IconOssIconChildrenContentfulIconSvgTextNode = 379,
  IconOssIconContact = 380,
  IconOssIconContentfulId = 381,
  IconOssIconCreatedAt = 382,
  IconOssIconHistory = 383,
  IconOssIconId = 384,
  IconOssIconName = 385,
  IconOssIconNodeLocale = 386,
  IconOssIconOss = 387,
  IconOssIconProject = 388,
  IconOssIconSpaceId = 389,
  IconOssIconUpdatedAt = 390,
  IconOssIconWhatICanDo = 391,
  IconOssId = 392,
  IconOssImageChildren = 393,
  IconOssImageContentfulId = 394,
  IconOssImageCreatedAt = 395,
  IconOssImageDescription = 396,
  IconOssImageFilename = 397,
  IconOssImageFilesize = 398,
  IconOssImageGatsbyImage = 399,
  IconOssImageGatsbyImageData = 400,
  IconOssImageHeight = 401,
  IconOssImageId = 402,
  IconOssImageMimeType = 403,
  IconOssImageNodeLocale = 404,
  IconOssImagePlaceholderUrl = 405,
  IconOssImagePublicUrl = 406,
  IconOssImageSize = 407,
  IconOssImageSpaceId = 408,
  IconOssImageTitle = 409,
  IconOssImageUpdatedAt = 410,
  IconOssImageUrl = 411,
  IconOssImageWidth = 412,
  IconOssInternalContent = 413,
  IconOssInternalContentDigest = 414,
  IconOssInternalContentFilePath = 415,
  IconOssInternalDescription = 416,
  IconOssInternalFieldOwners = 417,
  IconOssInternalIgnoreType = 418,
  IconOssInternalMediaType = 419,
  IconOssInternalOwner = 420,
  IconOssInternalType = 421,
  IconOssName = 422,
  IconOssNodeLocale = 423,
  IconOssParentChildren = 424,
  IconOssParentId = 425,
  IconOssSpaceId = 426,
  IconOssStartDate = 427,
  IconOssSubName = 428,
  IconOssSysRevision = 429,
  IconOssSysType = 430,
  IconOssTags = 431,
  IconOssTagsBlogPost = 432,
  IconOssTagsChildren = 433,
  IconOssTagsContentfulId = 434,
  IconOssTagsCreatedAt = 435,
  IconOssTagsId = 436,
  IconOssTagsLevel = 437,
  IconOssTagsName = 438,
  IconOssTagsNodeLocale = 439,
  IconOssTagsOss = 440,
  IconOssTagsProject = 441,
  IconOssTagsSkillGrpup = 442,
  IconOssTagsSkillMap = 443,
  IconOssTagsSpaceId = 444,
  IconOssTagsUpdatedAt = 445,
  IconOssUpdatedAt = 446,
  IconParentChildren = 447,
  IconParentChildrenChildren = 448,
  IconParentChildrenId = 449,
  IconParentId = 450,
  IconParentInternalContent = 451,
  IconParentInternalContentDigest = 452,
  IconParentInternalContentFilePath = 453,
  IconParentInternalDescription = 454,
  IconParentInternalFieldOwners = 455,
  IconParentInternalIgnoreType = 456,
  IconParentInternalMediaType = 457,
  IconParentInternalOwner = 458,
  IconParentInternalType = 459,
  IconParentParentChildren = 460,
  IconParentParentId = 461,
  IconProject = 462,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 463,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 464,
  IconProjectChildContentfulProjectDetailTextNodeId = 465,
  IconProjectChildren = 466,
  IconProjectChildrenContentfulProjectDetailTextNode = 467,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 468,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 469,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 470,
  IconProjectChildrenChildren = 471,
  IconProjectChildrenId = 472,
  IconProjectContentfulId = 473,
  IconProjectCreatedAt = 474,
  IconProjectDetailChildren = 475,
  IconProjectDetailDetail = 476,
  IconProjectDetailId = 477,
  IconProjectEndDate = 478,
  IconProjectIconChildren = 479,
  IconProjectIconChildrenContentfulIconSvgTextNode = 480,
  IconProjectIconContact = 481,
  IconProjectIconContentfulId = 482,
  IconProjectIconCreatedAt = 483,
  IconProjectIconHistory = 484,
  IconProjectIconId = 485,
  IconProjectIconName = 486,
  IconProjectIconNodeLocale = 487,
  IconProjectIconOss = 488,
  IconProjectIconProject = 489,
  IconProjectIconSpaceId = 490,
  IconProjectIconUpdatedAt = 491,
  IconProjectIconWhatICanDo = 492,
  IconProjectId = 493,
  IconProjectInternalContent = 494,
  IconProjectInternalContentDigest = 495,
  IconProjectInternalContentFilePath = 496,
  IconProjectInternalDescription = 497,
  IconProjectInternalFieldOwners = 498,
  IconProjectInternalIgnoreType = 499,
  IconProjectInternalMediaType = 500,
  IconProjectInternalOwner = 501,
  IconProjectInternalType = 502,
  IconProjectName = 503,
  IconProjectNodeLocale = 504,
  IconProjectParentChildren = 505,
  IconProjectParentId = 506,
  IconProjectSpaceId = 507,
  IconProjectStartDate = 508,
  IconProjectSubName = 509,
  IconProjectSysRevision = 510,
  IconProjectSysType = 511,
  IconProjectTags = 512,
  IconProjectTagsBlogPost = 513,
  IconProjectTagsChildren = 514,
  IconProjectTagsContentfulId = 515,
  IconProjectTagsCreatedAt = 516,
  IconProjectTagsId = 517,
  IconProjectTagsLevel = 518,
  IconProjectTagsName = 519,
  IconProjectTagsNodeLocale = 520,
  IconProjectTagsOss = 521,
  IconProjectTagsProject = 522,
  IconProjectTagsSkillGrpup = 523,
  IconProjectTagsSkillMap = 524,
  IconProjectTagsSpaceId = 525,
  IconProjectTagsUpdatedAt = 526,
  IconProjectUpdatedAt = 527,
  IconSpaceId = 528,
  IconSvgChildren = 529,
  IconSvgChildrenChildren = 530,
  IconSvgChildrenId = 531,
  IconSvgId = 532,
  IconSvgInternalContent = 533,
  IconSvgInternalContentDigest = 534,
  IconSvgInternalContentFilePath = 535,
  IconSvgInternalDescription = 536,
  IconSvgInternalFieldOwners = 537,
  IconSvgInternalIgnoreType = 538,
  IconSvgInternalMediaType = 539,
  IconSvgInternalOwner = 540,
  IconSvgInternalType = 541,
  IconSvgParentChildren = 542,
  IconSvgParentId = 543,
  IconSvgSvg = 544,
  IconSvgSysType = 545,
  IconSysRevision = 546,
  IconSysType = 547,
  IconUpdatedAt = 548,
  IconWhatICanDo = 549,
  IconWhatICanDoChildren = 550,
  IconWhatICanDoChildrenChildren = 551,
  IconWhatICanDoChildrenId = 552,
  IconWhatICanDoContentfulId = 553,
  IconWhatICanDoCreatedAt = 554,
  IconWhatICanDoIconChildren = 555,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 556,
  IconWhatICanDoIconContact = 557,
  IconWhatICanDoIconContentfulId = 558,
  IconWhatICanDoIconCreatedAt = 559,
  IconWhatICanDoIconHistory = 560,
  IconWhatICanDoIconId = 561,
  IconWhatICanDoIconName = 562,
  IconWhatICanDoIconNodeLocale = 563,
  IconWhatICanDoIconOss = 564,
  IconWhatICanDoIconProject = 565,
  IconWhatICanDoIconSpaceId = 566,
  IconWhatICanDoIconUpdatedAt = 567,
  IconWhatICanDoIconWhatICanDo = 568,
  IconWhatICanDoId = 569,
  IconWhatICanDoInternalContent = 570,
  IconWhatICanDoInternalContentDigest = 571,
  IconWhatICanDoInternalContentFilePath = 572,
  IconWhatICanDoInternalDescription = 573,
  IconWhatICanDoInternalFieldOwners = 574,
  IconWhatICanDoInternalIgnoreType = 575,
  IconWhatICanDoInternalMediaType = 576,
  IconWhatICanDoInternalOwner = 577,
  IconWhatICanDoInternalType = 578,
  IconWhatICanDoName = 579,
  IconWhatICanDoNodeLocale = 580,
  IconWhatICanDoParentChildren = 581,
  IconWhatICanDoParentId = 582,
  IconWhatICanDoSortKey = 583,
  IconWhatICanDoSpaceId = 584,
  IconWhatICanDoSubName = 585,
  IconWhatICanDoSysRevision = 586,
  IconWhatICanDoSysType = 587,
  IconWhatICanDoUpdatedAt = 588,
  Id = 589,
  ImageChildren = 590,
  ImageChildrenChildren = 591,
  ImageChildrenChildrenChildren = 592,
  ImageChildrenChildrenId = 593,
  ImageChildrenId = 594,
  ImageChildrenInternalContent = 595,
  ImageChildrenInternalContentDigest = 596,
  ImageChildrenInternalContentFilePath = 597,
  ImageChildrenInternalDescription = 598,
  ImageChildrenInternalFieldOwners = 599,
  ImageChildrenInternalIgnoreType = 600,
  ImageChildrenInternalMediaType = 601,
  ImageChildrenInternalOwner = 602,
  ImageChildrenInternalType = 603,
  ImageChildrenParentChildren = 604,
  ImageChildrenParentId = 605,
  ImageContentfulId = 606,
  ImageCreatedAt = 607,
  ImageDescription = 608,
  ImageFileContentType = 609,
  ImageFileDetailsSize = 610,
  ImageFileFileName = 611,
  ImageFileUrl = 612,
  ImageFilename = 613,
  ImageFilesize = 614,
  ImageGatsbyImage = 615,
  ImageGatsbyImageData = 616,
  ImageHeight = 617,
  ImageId = 618,
  ImageInternalContent = 619,
  ImageInternalContentDigest = 620,
  ImageInternalContentFilePath = 621,
  ImageInternalDescription = 622,
  ImageInternalFieldOwners = 623,
  ImageInternalIgnoreType = 624,
  ImageInternalMediaType = 625,
  ImageInternalOwner = 626,
  ImageInternalType = 627,
  ImageMimeType = 628,
  ImageNodeLocale = 629,
  ImageParentChildren = 630,
  ImageParentChildrenChildren = 631,
  ImageParentChildrenId = 632,
  ImageParentId = 633,
  ImageParentInternalContent = 634,
  ImageParentInternalContentDigest = 635,
  ImageParentInternalContentFilePath = 636,
  ImageParentInternalDescription = 637,
  ImageParentInternalFieldOwners = 638,
  ImageParentInternalIgnoreType = 639,
  ImageParentInternalMediaType = 640,
  ImageParentInternalOwner = 641,
  ImageParentInternalType = 642,
  ImageParentParentChildren = 643,
  ImageParentParentId = 644,
  ImagePlaceholderUrl = 645,
  ImagePublicUrl = 646,
  ImageResizeHeight = 647,
  ImageResizeSrc = 648,
  ImageResizeWidth = 649,
  ImageSize = 650,
  ImageSpaceId = 651,
  ImageSysRevision = 652,
  ImageSysType = 653,
  ImageTitle = 654,
  ImageUpdatedAt = 655,
  ImageUrl = 656,
  ImageWidth = 657,
  InternalContent = 658,
  InternalContentDigest = 659,
  InternalContentFilePath = 660,
  InternalDescription = 661,
  InternalFieldOwners = 662,
  InternalIgnoreType = 663,
  InternalMediaType = 664,
  InternalOwner = 665,
  InternalType = 666,
  Name = 667,
  NodeLocale = 668,
  ParentChildren = 669,
  ParentChildrenChildren = 670,
  ParentChildrenChildrenChildren = 671,
  ParentChildrenChildrenId = 672,
  ParentChildrenId = 673,
  ParentChildrenInternalContent = 674,
  ParentChildrenInternalContentDigest = 675,
  ParentChildrenInternalContentFilePath = 676,
  ParentChildrenInternalDescription = 677,
  ParentChildrenInternalFieldOwners = 678,
  ParentChildrenInternalIgnoreType = 679,
  ParentChildrenInternalMediaType = 680,
  ParentChildrenInternalOwner = 681,
  ParentChildrenInternalType = 682,
  ParentChildrenParentChildren = 683,
  ParentChildrenParentId = 684,
  ParentId = 685,
  ParentInternalContent = 686,
  ParentInternalContentDigest = 687,
  ParentInternalContentFilePath = 688,
  ParentInternalDescription = 689,
  ParentInternalFieldOwners = 690,
  ParentInternalIgnoreType = 691,
  ParentInternalMediaType = 692,
  ParentInternalOwner = 693,
  ParentInternalType = 694,
  ParentParentChildren = 695,
  ParentParentChildrenChildren = 696,
  ParentParentChildrenId = 697,
  ParentParentId = 698,
  ParentParentInternalContent = 699,
  ParentParentInternalContentDigest = 700,
  ParentParentInternalContentFilePath = 701,
  ParentParentInternalDescription = 702,
  ParentParentInternalFieldOwners = 703,
  ParentParentInternalIgnoreType = 704,
  ParentParentInternalMediaType = 705,
  ParentParentInternalOwner = 706,
  ParentParentInternalType = 707,
  ParentParentParentChildren = 708,
  ParentParentParentId = 709,
  SpaceId = 710,
  StartDate = 711,
  SubName = 712,
  SysContentTypeSysId = 713,
  SysContentTypeSysLinkType = 714,
  SysContentTypeSysType = 715,
  SysRevision = 716,
  SysType = 717,
  Tags = 718,
  TagsBlogPost = 719,
  TagsBlogPostCategoryBlogPost = 720,
  TagsBlogPostCategoryChildren = 721,
  TagsBlogPostCategoryContentfulId = 722,
  TagsBlogPostCategoryCreatedAt = 723,
  TagsBlogPostCategoryId = 724,
  TagsBlogPostCategoryName = 725,
  TagsBlogPostCategoryNodeLocale = 726,
  TagsBlogPostCategorySortKey = 727,
  TagsBlogPostCategorySpaceId = 728,
  TagsBlogPostCategoryUpdatedAt = 729,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 730,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 731,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 732,
  TagsBlogPostChildren = 733,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 734,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 735,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 736,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 737,
  TagsBlogPostChildrenChildren = 738,
  TagsBlogPostChildrenId = 739,
  TagsBlogPostContentChildren = 740,
  TagsBlogPostContentContent = 741,
  TagsBlogPostContentId = 742,
  TagsBlogPostContentfulId = 743,
  TagsBlogPostCreated = 744,
  TagsBlogPostCreatedAt = 745,
  TagsBlogPostExcerpt = 746,
  TagsBlogPostGatsbyPath = 747,
  TagsBlogPostId = 748,
  TagsBlogPostInternalContent = 749,
  TagsBlogPostInternalContentDigest = 750,
  TagsBlogPostInternalContentFilePath = 751,
  TagsBlogPostInternalDescription = 752,
  TagsBlogPostInternalFieldOwners = 753,
  TagsBlogPostInternalIgnoreType = 754,
  TagsBlogPostInternalMediaType = 755,
  TagsBlogPostInternalOwner = 756,
  TagsBlogPostInternalType = 757,
  TagsBlogPostNodeLocale = 758,
  TagsBlogPostParentChildren = 759,
  TagsBlogPostParentId = 760,
  TagsBlogPostSlug = 761,
  TagsBlogPostSpaceId = 762,
  TagsBlogPostSysRevision = 763,
  TagsBlogPostSysType = 764,
  TagsBlogPostTags = 765,
  TagsBlogPostTagsBlogPost = 766,
  TagsBlogPostTagsChildren = 767,
  TagsBlogPostTagsContentfulId = 768,
  TagsBlogPostTagsCreatedAt = 769,
  TagsBlogPostTagsId = 770,
  TagsBlogPostTagsLevel = 771,
  TagsBlogPostTagsName = 772,
  TagsBlogPostTagsNodeLocale = 773,
  TagsBlogPostTagsOss = 774,
  TagsBlogPostTagsProject = 775,
  TagsBlogPostTagsSkillGrpup = 776,
  TagsBlogPostTagsSkillMap = 777,
  TagsBlogPostTagsSpaceId = 778,
  TagsBlogPostTagsUpdatedAt = 779,
  TagsBlogPostThumbnailChildren = 780,
  TagsBlogPostThumbnailContentfulId = 781,
  TagsBlogPostThumbnailCreatedAt = 782,
  TagsBlogPostThumbnailDescription = 783,
  TagsBlogPostThumbnailFilename = 784,
  TagsBlogPostThumbnailFilesize = 785,
  TagsBlogPostThumbnailGatsbyImage = 786,
  TagsBlogPostThumbnailGatsbyImageData = 787,
  TagsBlogPostThumbnailHeight = 788,
  TagsBlogPostThumbnailId = 789,
  TagsBlogPostThumbnailMimeType = 790,
  TagsBlogPostThumbnailNodeLocale = 791,
  TagsBlogPostThumbnailPlaceholderUrl = 792,
  TagsBlogPostThumbnailPublicUrl = 793,
  TagsBlogPostThumbnailSize = 794,
  TagsBlogPostThumbnailSpaceId = 795,
  TagsBlogPostThumbnailTitle = 796,
  TagsBlogPostThumbnailUpdatedAt = 797,
  TagsBlogPostThumbnailUrl = 798,
  TagsBlogPostThumbnailWidth = 799,
  TagsBlogPostTitle = 800,
  TagsBlogPostUpdated = 801,
  TagsBlogPostUpdatedAt = 802,
  TagsChildren = 803,
  TagsChildrenChildren = 804,
  TagsChildrenChildrenChildren = 805,
  TagsChildrenChildrenId = 806,
  TagsChildrenId = 807,
  TagsChildrenInternalContent = 808,
  TagsChildrenInternalContentDigest = 809,
  TagsChildrenInternalContentFilePath = 810,
  TagsChildrenInternalDescription = 811,
  TagsChildrenInternalFieldOwners = 812,
  TagsChildrenInternalIgnoreType = 813,
  TagsChildrenInternalMediaType = 814,
  TagsChildrenInternalOwner = 815,
  TagsChildrenInternalType = 816,
  TagsChildrenParentChildren = 817,
  TagsChildrenParentId = 818,
  TagsContentfulId = 819,
  TagsCreatedAt = 820,
  TagsId = 821,
  TagsInternalContent = 822,
  TagsInternalContentDigest = 823,
  TagsInternalContentFilePath = 824,
  TagsInternalDescription = 825,
  TagsInternalFieldOwners = 826,
  TagsInternalIgnoreType = 827,
  TagsInternalMediaType = 828,
  TagsInternalOwner = 829,
  TagsInternalType = 830,
  TagsLevel = 831,
  TagsName = 832,
  TagsNodeLocale = 833,
  TagsOss = 834,
  TagsOssChildContentfulOssDetailTextNodeChildren = 835,
  TagsOssChildContentfulOssDetailTextNodeDetail = 836,
  TagsOssChildContentfulOssDetailTextNodeId = 837,
  TagsOssChildren = 838,
  TagsOssChildrenContentfulOssDetailTextNode = 839,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 840,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 841,
  TagsOssChildrenContentfulOssDetailTextNodeId = 842,
  TagsOssChildrenChildren = 843,
  TagsOssChildrenId = 844,
  TagsOssContentfulId = 845,
  TagsOssCreatedAt = 846,
  TagsOssDetailChildren = 847,
  TagsOssDetailDetail = 848,
  TagsOssDetailId = 849,
  TagsOssHref = 850,
  TagsOssIconChildren = 851,
  TagsOssIconChildrenContentfulIconSvgTextNode = 852,
  TagsOssIconContact = 853,
  TagsOssIconContentfulId = 854,
  TagsOssIconCreatedAt = 855,
  TagsOssIconHistory = 856,
  TagsOssIconId = 857,
  TagsOssIconName = 858,
  TagsOssIconNodeLocale = 859,
  TagsOssIconOss = 860,
  TagsOssIconProject = 861,
  TagsOssIconSpaceId = 862,
  TagsOssIconUpdatedAt = 863,
  TagsOssIconWhatICanDo = 864,
  TagsOssId = 865,
  TagsOssImageChildren = 866,
  TagsOssImageContentfulId = 867,
  TagsOssImageCreatedAt = 868,
  TagsOssImageDescription = 869,
  TagsOssImageFilename = 870,
  TagsOssImageFilesize = 871,
  TagsOssImageGatsbyImage = 872,
  TagsOssImageGatsbyImageData = 873,
  TagsOssImageHeight = 874,
  TagsOssImageId = 875,
  TagsOssImageMimeType = 876,
  TagsOssImageNodeLocale = 877,
  TagsOssImagePlaceholderUrl = 878,
  TagsOssImagePublicUrl = 879,
  TagsOssImageSize = 880,
  TagsOssImageSpaceId = 881,
  TagsOssImageTitle = 882,
  TagsOssImageUpdatedAt = 883,
  TagsOssImageUrl = 884,
  TagsOssImageWidth = 885,
  TagsOssInternalContent = 886,
  TagsOssInternalContentDigest = 887,
  TagsOssInternalContentFilePath = 888,
  TagsOssInternalDescription = 889,
  TagsOssInternalFieldOwners = 890,
  TagsOssInternalIgnoreType = 891,
  TagsOssInternalMediaType = 892,
  TagsOssInternalOwner = 893,
  TagsOssInternalType = 894,
  TagsOssName = 895,
  TagsOssNodeLocale = 896,
  TagsOssParentChildren = 897,
  TagsOssParentId = 898,
  TagsOssSpaceId = 899,
  TagsOssStartDate = 900,
  TagsOssSubName = 901,
  TagsOssSysRevision = 902,
  TagsOssSysType = 903,
  TagsOssTags = 904,
  TagsOssTagsBlogPost = 905,
  TagsOssTagsChildren = 906,
  TagsOssTagsContentfulId = 907,
  TagsOssTagsCreatedAt = 908,
  TagsOssTagsId = 909,
  TagsOssTagsLevel = 910,
  TagsOssTagsName = 911,
  TagsOssTagsNodeLocale = 912,
  TagsOssTagsOss = 913,
  TagsOssTagsProject = 914,
  TagsOssTagsSkillGrpup = 915,
  TagsOssTagsSkillMap = 916,
  TagsOssTagsSpaceId = 917,
  TagsOssTagsUpdatedAt = 918,
  TagsOssUpdatedAt = 919,
  TagsParentChildren = 920,
  TagsParentChildrenChildren = 921,
  TagsParentChildrenId = 922,
  TagsParentId = 923,
  TagsParentInternalContent = 924,
  TagsParentInternalContentDigest = 925,
  TagsParentInternalContentFilePath = 926,
  TagsParentInternalDescription = 927,
  TagsParentInternalFieldOwners = 928,
  TagsParentInternalIgnoreType = 929,
  TagsParentInternalMediaType = 930,
  TagsParentInternalOwner = 931,
  TagsParentInternalType = 932,
  TagsParentParentChildren = 933,
  TagsParentParentId = 934,
  TagsProject = 935,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 936,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 937,
  TagsProjectChildContentfulProjectDetailTextNodeId = 938,
  TagsProjectChildren = 939,
  TagsProjectChildrenContentfulProjectDetailTextNode = 940,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 941,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 942,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 943,
  TagsProjectChildrenChildren = 944,
  TagsProjectChildrenId = 945,
  TagsProjectContentfulId = 946,
  TagsProjectCreatedAt = 947,
  TagsProjectDetailChildren = 948,
  TagsProjectDetailDetail = 949,
  TagsProjectDetailId = 950,
  TagsProjectEndDate = 951,
  TagsProjectIconChildren = 952,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 953,
  TagsProjectIconContact = 954,
  TagsProjectIconContentfulId = 955,
  TagsProjectIconCreatedAt = 956,
  TagsProjectIconHistory = 957,
  TagsProjectIconId = 958,
  TagsProjectIconName = 959,
  TagsProjectIconNodeLocale = 960,
  TagsProjectIconOss = 961,
  TagsProjectIconProject = 962,
  TagsProjectIconSpaceId = 963,
  TagsProjectIconUpdatedAt = 964,
  TagsProjectIconWhatICanDo = 965,
  TagsProjectId = 966,
  TagsProjectInternalContent = 967,
  TagsProjectInternalContentDigest = 968,
  TagsProjectInternalContentFilePath = 969,
  TagsProjectInternalDescription = 970,
  TagsProjectInternalFieldOwners = 971,
  TagsProjectInternalIgnoreType = 972,
  TagsProjectInternalMediaType = 973,
  TagsProjectInternalOwner = 974,
  TagsProjectInternalType = 975,
  TagsProjectName = 976,
  TagsProjectNodeLocale = 977,
  TagsProjectParentChildren = 978,
  TagsProjectParentId = 979,
  TagsProjectSpaceId = 980,
  TagsProjectStartDate = 981,
  TagsProjectSubName = 982,
  TagsProjectSysRevision = 983,
  TagsProjectSysType = 984,
  TagsProjectTags = 985,
  TagsProjectTagsBlogPost = 986,
  TagsProjectTagsChildren = 987,
  TagsProjectTagsContentfulId = 988,
  TagsProjectTagsCreatedAt = 989,
  TagsProjectTagsId = 990,
  TagsProjectTagsLevel = 991,
  TagsProjectTagsName = 992,
  TagsProjectTagsNodeLocale = 993,
  TagsProjectTagsOss = 994,
  TagsProjectTagsProject = 995,
  TagsProjectTagsSkillGrpup = 996,
  TagsProjectTagsSkillMap = 997,
  TagsProjectTagsSpaceId = 998,
  TagsProjectTagsUpdatedAt = 999,
  TagsProjectUpdatedAt = 1000,
  TagsSkillGrpup = 1001,
  TagsSkillGrpupChildren = 1002,
  TagsSkillGrpupChildrenChildren = 1003,
  TagsSkillGrpupChildrenId = 1004,
  TagsSkillGrpupContentfulId = 1005,
  TagsSkillGrpupCreatedAt = 1006,
  TagsSkillGrpupId = 1007,
  TagsSkillGrpupInternalContent = 1008,
  TagsSkillGrpupInternalContentDigest = 1009,
  TagsSkillGrpupInternalContentFilePath = 1010,
  TagsSkillGrpupInternalDescription = 1011,
  TagsSkillGrpupInternalFieldOwners = 1012,
  TagsSkillGrpupInternalIgnoreType = 1013,
  TagsSkillGrpupInternalMediaType = 1014,
  TagsSkillGrpupInternalOwner = 1015,
  TagsSkillGrpupInternalType = 1016,
  TagsSkillGrpupName = 1017,
  TagsSkillGrpupNodeLocale = 1018,
  TagsSkillGrpupParentChildren = 1019,
  TagsSkillGrpupParentId = 1020,
  TagsSkillGrpupSkillMap = 1021,
  TagsSkillGrpupSkillMapChildren = 1022,
  TagsSkillGrpupSkillMapContentfulId = 1023,
  TagsSkillGrpupSkillMapCreatedAt = 1024,
  TagsSkillGrpupSkillMapExpanded = 1025,
  TagsSkillGrpupSkillMapId = 1026,
  TagsSkillGrpupSkillMapName = 1027,
  TagsSkillGrpupSkillMapNodeLocale = 1028,
  TagsSkillGrpupSkillMapSkillGroups = 1029,
  TagsSkillGrpupSkillMapSkills = 1030,
  TagsSkillGrpupSkillMapSortKey = 1031,
  TagsSkillGrpupSkillMapSpaceId = 1032,
  TagsSkillGrpupSkillMapUpdatedAt = 1033,
  TagsSkillGrpupSkills = 1034,
  TagsSkillGrpupSkillsBlogPost = 1035,
  TagsSkillGrpupSkillsChildren = 1036,
  TagsSkillGrpupSkillsContentfulId = 1037,
  TagsSkillGrpupSkillsCreatedAt = 1038,
  TagsSkillGrpupSkillsId = 1039,
  TagsSkillGrpupSkillsLevel = 1040,
  TagsSkillGrpupSkillsName = 1041,
  TagsSkillGrpupSkillsNodeLocale = 1042,
  TagsSkillGrpupSkillsOss = 1043,
  TagsSkillGrpupSkillsProject = 1044,
  TagsSkillGrpupSkillsSkillGrpup = 1045,
  TagsSkillGrpupSkillsSkillMap = 1046,
  TagsSkillGrpupSkillsSpaceId = 1047,
  TagsSkillGrpupSkillsUpdatedAt = 1048,
  TagsSkillGrpupSpaceId = 1049,
  TagsSkillGrpupSysRevision = 1050,
  TagsSkillGrpupSysType = 1051,
  TagsSkillGrpupUpdatedAt = 1052,
  TagsSkillMap = 1053,
  TagsSkillMapChildren = 1054,
  TagsSkillMapChildrenChildren = 1055,
  TagsSkillMapChildrenId = 1056,
  TagsSkillMapContentfulId = 1057,
  TagsSkillMapCreatedAt = 1058,
  TagsSkillMapExpanded = 1059,
  TagsSkillMapId = 1060,
  TagsSkillMapInternalContent = 1061,
  TagsSkillMapInternalContentDigest = 1062,
  TagsSkillMapInternalContentFilePath = 1063,
  TagsSkillMapInternalDescription = 1064,
  TagsSkillMapInternalFieldOwners = 1065,
  TagsSkillMapInternalIgnoreType = 1066,
  TagsSkillMapInternalMediaType = 1067,
  TagsSkillMapInternalOwner = 1068,
  TagsSkillMapInternalType = 1069,
  TagsSkillMapName = 1070,
  TagsSkillMapNodeLocale = 1071,
  TagsSkillMapParentChildren = 1072,
  TagsSkillMapParentId = 1073,
  TagsSkillMapSkillGroups = 1074,
  TagsSkillMapSkillGroupsChildren = 1075,
  TagsSkillMapSkillGroupsContentfulId = 1076,
  TagsSkillMapSkillGroupsCreatedAt = 1077,
  TagsSkillMapSkillGroupsId = 1078,
  TagsSkillMapSkillGroupsName = 1079,
  TagsSkillMapSkillGroupsNodeLocale = 1080,
  TagsSkillMapSkillGroupsSkillMap = 1081,
  TagsSkillMapSkillGroupsSkills = 1082,
  TagsSkillMapSkillGroupsSpaceId = 1083,
  TagsSkillMapSkillGroupsUpdatedAt = 1084,
  TagsSkillMapSkills = 1085,
  TagsSkillMapSkillsBlogPost = 1086,
  TagsSkillMapSkillsChildren = 1087,
  TagsSkillMapSkillsContentfulId = 1088,
  TagsSkillMapSkillsCreatedAt = 1089,
  TagsSkillMapSkillsId = 1090,
  TagsSkillMapSkillsLevel = 1091,
  TagsSkillMapSkillsName = 1092,
  TagsSkillMapSkillsNodeLocale = 1093,
  TagsSkillMapSkillsOss = 1094,
  TagsSkillMapSkillsProject = 1095,
  TagsSkillMapSkillsSkillGrpup = 1096,
  TagsSkillMapSkillsSkillMap = 1097,
  TagsSkillMapSkillsSpaceId = 1098,
  TagsSkillMapSkillsUpdatedAt = 1099,
  TagsSkillMapSortKey = 1100,
  TagsSkillMapSpaceId = 1101,
  TagsSkillMapSysRevision = 1102,
  TagsSkillMapSysType = 1103,
  TagsSkillMapUpdatedAt = 1104,
  TagsSpaceId = 1105,
  TagsSysRevision = 1106,
  TagsSysType = 1107,
  TagsUpdatedAt = 1108,
  UpdatedAt = 1109
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
  ChildContentfulProjectDetailTextNodeChildren = 0,
  ChildContentfulProjectDetailTextNodeChildrenChildren = 1,
  ChildContentfulProjectDetailTextNodeChildrenChildrenChildren = 2,
  ChildContentfulProjectDetailTextNodeChildrenChildrenId = 3,
  ChildContentfulProjectDetailTextNodeChildrenId = 4,
  ChildContentfulProjectDetailTextNodeChildrenInternalContent = 5,
  ChildContentfulProjectDetailTextNodeChildrenInternalContentDigest = 6,
  ChildContentfulProjectDetailTextNodeChildrenInternalContentFilePath = 7,
  ChildContentfulProjectDetailTextNodeChildrenInternalDescription = 8,
  ChildContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 9,
  ChildContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 10,
  ChildContentfulProjectDetailTextNodeChildrenInternalMediaType = 11,
  ChildContentfulProjectDetailTextNodeChildrenInternalOwner = 12,
  ChildContentfulProjectDetailTextNodeChildrenInternalType = 13,
  ChildContentfulProjectDetailTextNodeChildrenParentChildren = 14,
  ChildContentfulProjectDetailTextNodeChildrenParentId = 15,
  ChildContentfulProjectDetailTextNodeDetail = 16,
  ChildContentfulProjectDetailTextNodeId = 17,
  ChildContentfulProjectDetailTextNodeInternalContent = 18,
  ChildContentfulProjectDetailTextNodeInternalContentDigest = 19,
  ChildContentfulProjectDetailTextNodeInternalContentFilePath = 20,
  ChildContentfulProjectDetailTextNodeInternalDescription = 21,
  ChildContentfulProjectDetailTextNodeInternalFieldOwners = 22,
  ChildContentfulProjectDetailTextNodeInternalIgnoreType = 23,
  ChildContentfulProjectDetailTextNodeInternalMediaType = 24,
  ChildContentfulProjectDetailTextNodeInternalOwner = 25,
  ChildContentfulProjectDetailTextNodeInternalType = 26,
  ChildContentfulProjectDetailTextNodeParentChildren = 27,
  ChildContentfulProjectDetailTextNodeParentChildrenChildren = 28,
  ChildContentfulProjectDetailTextNodeParentChildrenId = 29,
  ChildContentfulProjectDetailTextNodeParentId = 30,
  ChildContentfulProjectDetailTextNodeParentInternalContent = 31,
  ChildContentfulProjectDetailTextNodeParentInternalContentDigest = 32,
  ChildContentfulProjectDetailTextNodeParentInternalContentFilePath = 33,
  ChildContentfulProjectDetailTextNodeParentInternalDescription = 34,
  ChildContentfulProjectDetailTextNodeParentInternalFieldOwners = 35,
  ChildContentfulProjectDetailTextNodeParentInternalIgnoreType = 36,
  ChildContentfulProjectDetailTextNodeParentInternalMediaType = 37,
  ChildContentfulProjectDetailTextNodeParentInternalOwner = 38,
  ChildContentfulProjectDetailTextNodeParentInternalType = 39,
  ChildContentfulProjectDetailTextNodeParentParentChildren = 40,
  ChildContentfulProjectDetailTextNodeParentParentId = 41,
  ChildContentfulProjectDetailTextNodeSysType = 42,
  Children = 43,
  ChildrenContentfulProjectDetailTextNode = 44,
  ChildrenContentfulProjectDetailTextNodeChildren = 45,
  ChildrenContentfulProjectDetailTextNodeChildrenChildren = 46,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenChildren = 47,
  ChildrenContentfulProjectDetailTextNodeChildrenChildrenId = 48,
  ChildrenContentfulProjectDetailTextNodeChildrenId = 49,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContent = 50,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContentDigest = 51,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalContentFilePath = 52,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalDescription = 53,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalFieldOwners = 54,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalIgnoreType = 55,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalMediaType = 56,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalOwner = 57,
  ChildrenContentfulProjectDetailTextNodeChildrenInternalType = 58,
  ChildrenContentfulProjectDetailTextNodeChildrenParentChildren = 59,
  ChildrenContentfulProjectDetailTextNodeChildrenParentId = 60,
  ChildrenContentfulProjectDetailTextNodeDetail = 61,
  ChildrenContentfulProjectDetailTextNodeId = 62,
  ChildrenContentfulProjectDetailTextNodeInternalContent = 63,
  ChildrenContentfulProjectDetailTextNodeInternalContentDigest = 64,
  ChildrenContentfulProjectDetailTextNodeInternalContentFilePath = 65,
  ChildrenContentfulProjectDetailTextNodeInternalDescription = 66,
  ChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 67,
  ChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 68,
  ChildrenContentfulProjectDetailTextNodeInternalMediaType = 69,
  ChildrenContentfulProjectDetailTextNodeInternalOwner = 70,
  ChildrenContentfulProjectDetailTextNodeInternalType = 71,
  ChildrenContentfulProjectDetailTextNodeParentChildren = 72,
  ChildrenContentfulProjectDetailTextNodeParentChildrenChildren = 73,
  ChildrenContentfulProjectDetailTextNodeParentChildrenId = 74,
  ChildrenContentfulProjectDetailTextNodeParentId = 75,
  ChildrenContentfulProjectDetailTextNodeParentInternalContent = 76,
  ChildrenContentfulProjectDetailTextNodeParentInternalContentDigest = 77,
  ChildrenContentfulProjectDetailTextNodeParentInternalContentFilePath = 78,
  ChildrenContentfulProjectDetailTextNodeParentInternalDescription = 79,
  ChildrenContentfulProjectDetailTextNodeParentInternalFieldOwners = 80,
  ChildrenContentfulProjectDetailTextNodeParentInternalIgnoreType = 81,
  ChildrenContentfulProjectDetailTextNodeParentInternalMediaType = 82,
  ChildrenContentfulProjectDetailTextNodeParentInternalOwner = 83,
  ChildrenContentfulProjectDetailTextNodeParentInternalType = 84,
  ChildrenContentfulProjectDetailTextNodeParentParentChildren = 85,
  ChildrenContentfulProjectDetailTextNodeParentParentId = 86,
  ChildrenContentfulProjectDetailTextNodeSysType = 87,
  ChildrenChildren = 88,
  ChildrenChildrenChildren = 89,
  ChildrenChildrenChildrenChildren = 90,
  ChildrenChildrenChildrenId = 91,
  ChildrenChildrenId = 92,
  ChildrenChildrenInternalContent = 93,
  ChildrenChildrenInternalContentDigest = 94,
  ChildrenChildrenInternalContentFilePath = 95,
  ChildrenChildrenInternalDescription = 96,
  ChildrenChildrenInternalFieldOwners = 97,
  ChildrenChildrenInternalIgnoreType = 98,
  ChildrenChildrenInternalMediaType = 99,
  ChildrenChildrenInternalOwner = 100,
  ChildrenChildrenInternalType = 101,
  ChildrenChildrenParentChildren = 102,
  ChildrenChildrenParentId = 103,
  ChildrenId = 104,
  ChildrenInternalContent = 105,
  ChildrenInternalContentDigest = 106,
  ChildrenInternalContentFilePath = 107,
  ChildrenInternalDescription = 108,
  ChildrenInternalFieldOwners = 109,
  ChildrenInternalIgnoreType = 110,
  ChildrenInternalMediaType = 111,
  ChildrenInternalOwner = 112,
  ChildrenInternalType = 113,
  ChildrenParentChildren = 114,
  ChildrenParentChildrenChildren = 115,
  ChildrenParentChildrenId = 116,
  ChildrenParentId = 117,
  ChildrenParentInternalContent = 118,
  ChildrenParentInternalContentDigest = 119,
  ChildrenParentInternalContentFilePath = 120,
  ChildrenParentInternalDescription = 121,
  ChildrenParentInternalFieldOwners = 122,
  ChildrenParentInternalIgnoreType = 123,
  ChildrenParentInternalMediaType = 124,
  ChildrenParentInternalOwner = 125,
  ChildrenParentInternalType = 126,
  ChildrenParentParentChildren = 127,
  ChildrenParentParentId = 128,
  ContentfulId = 129,
  CreatedAt = 130,
  DetailChildren = 131,
  DetailChildrenChildren = 132,
  DetailChildrenChildrenChildren = 133,
  DetailChildrenChildrenId = 134,
  DetailChildrenId = 135,
  DetailChildrenInternalContent = 136,
  DetailChildrenInternalContentDigest = 137,
  DetailChildrenInternalContentFilePath = 138,
  DetailChildrenInternalDescription = 139,
  DetailChildrenInternalFieldOwners = 140,
  DetailChildrenInternalIgnoreType = 141,
  DetailChildrenInternalMediaType = 142,
  DetailChildrenInternalOwner = 143,
  DetailChildrenInternalType = 144,
  DetailChildrenParentChildren = 145,
  DetailChildrenParentId = 146,
  DetailDetail = 147,
  DetailId = 148,
  DetailInternalContent = 149,
  DetailInternalContentDigest = 150,
  DetailInternalContentFilePath = 151,
  DetailInternalDescription = 152,
  DetailInternalFieldOwners = 153,
  DetailInternalIgnoreType = 154,
  DetailInternalMediaType = 155,
  DetailInternalOwner = 156,
  DetailInternalType = 157,
  DetailParentChildren = 158,
  DetailParentChildrenChildren = 159,
  DetailParentChildrenId = 160,
  DetailParentId = 161,
  DetailParentInternalContent = 162,
  DetailParentInternalContentDigest = 163,
  DetailParentInternalContentFilePath = 164,
  DetailParentInternalDescription = 165,
  DetailParentInternalFieldOwners = 166,
  DetailParentInternalIgnoreType = 167,
  DetailParentInternalMediaType = 168,
  DetailParentInternalOwner = 169,
  DetailParentInternalType = 170,
  DetailParentParentChildren = 171,
  DetailParentParentId = 172,
  DetailSysType = 173,
  EndDate = 174,
  IconChildContentfulIconSvgTextNodeChildren = 175,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 176,
  IconChildContentfulIconSvgTextNodeChildrenId = 177,
  IconChildContentfulIconSvgTextNodeId = 178,
  IconChildContentfulIconSvgTextNodeInternalContent = 179,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 180,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 181,
  IconChildContentfulIconSvgTextNodeInternalDescription = 182,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 183,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 184,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 185,
  IconChildContentfulIconSvgTextNodeInternalOwner = 186,
  IconChildContentfulIconSvgTextNodeInternalType = 187,
  IconChildContentfulIconSvgTextNodeParentChildren = 188,
  IconChildContentfulIconSvgTextNodeParentId = 189,
  IconChildContentfulIconSvgTextNodeSvg = 190,
  IconChildContentfulIconSvgTextNodeSysType = 191,
  IconChildren = 192,
  IconChildrenContentfulIconSvgTextNode = 193,
  IconChildrenContentfulIconSvgTextNodeChildren = 194,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 195,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 196,
  IconChildrenContentfulIconSvgTextNodeId = 197,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 198,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 199,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 200,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 201,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 202,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 203,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 204,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 205,
  IconChildrenContentfulIconSvgTextNodeInternalType = 206,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 207,
  IconChildrenContentfulIconSvgTextNodeParentId = 208,
  IconChildrenContentfulIconSvgTextNodeSvg = 209,
  IconChildrenContentfulIconSvgTextNodeSysType = 210,
  IconChildrenChildren = 211,
  IconChildrenChildrenChildren = 212,
  IconChildrenChildrenId = 213,
  IconChildrenId = 214,
  IconChildrenInternalContent = 215,
  IconChildrenInternalContentDigest = 216,
  IconChildrenInternalContentFilePath = 217,
  IconChildrenInternalDescription = 218,
  IconChildrenInternalFieldOwners = 219,
  IconChildrenInternalIgnoreType = 220,
  IconChildrenInternalMediaType = 221,
  IconChildrenInternalOwner = 222,
  IconChildrenInternalType = 223,
  IconChildrenParentChildren = 224,
  IconChildrenParentId = 225,
  IconContact = 226,
  IconContactChildren = 227,
  IconContactChildrenChildren = 228,
  IconContactChildrenId = 229,
  IconContactContentfulId = 230,
  IconContactCreatedAt = 231,
  IconContactHref = 232,
  IconContactIconSvgDarkChildren = 233,
  IconContactIconSvgDarkContentfulId = 234,
  IconContactIconSvgDarkCreatedAt = 235,
  IconContactIconSvgDarkDescription = 236,
  IconContactIconSvgDarkFilename = 237,
  IconContactIconSvgDarkFilesize = 238,
  IconContactIconSvgDarkGatsbyImage = 239,
  IconContactIconSvgDarkGatsbyImageData = 240,
  IconContactIconSvgDarkHeight = 241,
  IconContactIconSvgDarkId = 242,
  IconContactIconSvgDarkMimeType = 243,
  IconContactIconSvgDarkNodeLocale = 244,
  IconContactIconSvgDarkPlaceholderUrl = 245,
  IconContactIconSvgDarkPublicUrl = 246,
  IconContactIconSvgDarkSize = 247,
  IconContactIconSvgDarkSpaceId = 248,
  IconContactIconSvgDarkTitle = 249,
  IconContactIconSvgDarkUpdatedAt = 250,
  IconContactIconSvgDarkUrl = 251,
  IconContactIconSvgDarkWidth = 252,
  IconContactIconSvgLightChildren = 253,
  IconContactIconSvgLightContentfulId = 254,
  IconContactIconSvgLightCreatedAt = 255,
  IconContactIconSvgLightDescription = 256,
  IconContactIconSvgLightFilename = 257,
  IconContactIconSvgLightFilesize = 258,
  IconContactIconSvgLightGatsbyImage = 259,
  IconContactIconSvgLightGatsbyImageData = 260,
  IconContactIconSvgLightHeight = 261,
  IconContactIconSvgLightId = 262,
  IconContactIconSvgLightMimeType = 263,
  IconContactIconSvgLightNodeLocale = 264,
  IconContactIconSvgLightPlaceholderUrl = 265,
  IconContactIconSvgLightPublicUrl = 266,
  IconContactIconSvgLightSize = 267,
  IconContactIconSvgLightSpaceId = 268,
  IconContactIconSvgLightTitle = 269,
  IconContactIconSvgLightUpdatedAt = 270,
  IconContactIconSvgLightUrl = 271,
  IconContactIconSvgLightWidth = 272,
  IconContactIconChildren = 273,
  IconContactIconChildrenContentfulIconSvgTextNode = 274,
  IconContactIconContact = 275,
  IconContactIconContentfulId = 276,
  IconContactIconCreatedAt = 277,
  IconContactIconHistory = 278,
  IconContactIconId = 279,
  IconContactIconName = 280,
  IconContactIconNodeLocale = 281,
  IconContactIconOss = 282,
  IconContactIconProject = 283,
  IconContactIconSpaceId = 284,
  IconContactIconUpdatedAt = 285,
  IconContactIconWhatICanDo = 286,
  IconContactId = 287,
  IconContactInternalContent = 288,
  IconContactInternalContentDigest = 289,
  IconContactInternalContentFilePath = 290,
  IconContactInternalDescription = 291,
  IconContactInternalFieldOwners = 292,
  IconContactInternalIgnoreType = 293,
  IconContactInternalMediaType = 294,
  IconContactInternalOwner = 295,
  IconContactInternalType = 296,
  IconContactName = 297,
  IconContactNodeLocale = 298,
  IconContactParentChildren = 299,
  IconContactParentId = 300,
  IconContactSortKey = 301,
  IconContactSpaceId = 302,
  IconContactSubName = 303,
  IconContactSysRevision = 304,
  IconContactSysType = 305,
  IconContactUpdatedAt = 306,
  IconContentfulId = 307,
  IconCreatedAt = 308,
  IconHistory = 309,
  IconHistoryChildren = 310,
  IconHistoryChildrenChildren = 311,
  IconHistoryChildrenId = 312,
  IconHistoryContentfulId = 313,
  IconHistoryCreatedAt = 314,
  IconHistoryDate = 315,
  IconHistoryIconChildren = 316,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 317,
  IconHistoryIconContact = 318,
  IconHistoryIconContentfulId = 319,
  IconHistoryIconCreatedAt = 320,
  IconHistoryIconHistory = 321,
  IconHistoryIconId = 322,
  IconHistoryIconName = 323,
  IconHistoryIconNodeLocale = 324,
  IconHistoryIconOss = 325,
  IconHistoryIconProject = 326,
  IconHistoryIconSpaceId = 327,
  IconHistoryIconUpdatedAt = 328,
  IconHistoryIconWhatICanDo = 329,
  IconHistoryId = 330,
  IconHistoryInternalContent = 331,
  IconHistoryInternalContentDigest = 332,
  IconHistoryInternalContentFilePath = 333,
  IconHistoryInternalDescription = 334,
  IconHistoryInternalFieldOwners = 335,
  IconHistoryInternalIgnoreType = 336,
  IconHistoryInternalMediaType = 337,
  IconHistoryInternalOwner = 338,
  IconHistoryInternalType = 339,
  IconHistoryName = 340,
  IconHistoryNodeLocale = 341,
  IconHistoryParentChildren = 342,
  IconHistoryParentId = 343,
  IconHistorySpaceId = 344,
  IconHistorySubName = 345,
  IconHistorySysRevision = 346,
  IconHistorySysType = 347,
  IconHistoryUpdatedAt = 348,
  IconId = 349,
  IconInternalContent = 350,
  IconInternalContentDigest = 351,
  IconInternalContentFilePath = 352,
  IconInternalDescription = 353,
  IconInternalFieldOwners = 354,
  IconInternalIgnoreType = 355,
  IconInternalMediaType = 356,
  IconInternalOwner = 357,
  IconInternalType = 358,
  IconName = 359,
  IconNodeLocale = 360,
  IconOss = 361,
  IconOssChildContentfulOssDetailTextNodeChildren = 362,
  IconOssChildContentfulOssDetailTextNodeDetail = 363,
  IconOssChildContentfulOssDetailTextNodeId = 364,
  IconOssChildren = 365,
  IconOssChildrenContentfulOssDetailTextNode = 366,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 367,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 368,
  IconOssChildrenContentfulOssDetailTextNodeId = 369,
  IconOssChildrenChildren = 370,
  IconOssChildrenId = 371,
  IconOssContentfulId = 372,
  IconOssCreatedAt = 373,
  IconOssDetailChildren = 374,
  IconOssDetailDetail = 375,
  IconOssDetailId = 376,
  IconOssHref = 377,
  IconOssIconChildren = 378,
  IconOssIconChildrenContentfulIconSvgTextNode = 379,
  IconOssIconContact = 380,
  IconOssIconContentfulId = 381,
  IconOssIconCreatedAt = 382,
  IconOssIconHistory = 383,
  IconOssIconId = 384,
  IconOssIconName = 385,
  IconOssIconNodeLocale = 386,
  IconOssIconOss = 387,
  IconOssIconProject = 388,
  IconOssIconSpaceId = 389,
  IconOssIconUpdatedAt = 390,
  IconOssIconWhatICanDo = 391,
  IconOssId = 392,
  IconOssImageChildren = 393,
  IconOssImageContentfulId = 394,
  IconOssImageCreatedAt = 395,
  IconOssImageDescription = 396,
  IconOssImageFilename = 397,
  IconOssImageFilesize = 398,
  IconOssImageGatsbyImage = 399,
  IconOssImageGatsbyImageData = 400,
  IconOssImageHeight = 401,
  IconOssImageId = 402,
  IconOssImageMimeType = 403,
  IconOssImageNodeLocale = 404,
  IconOssImagePlaceholderUrl = 405,
  IconOssImagePublicUrl = 406,
  IconOssImageSize = 407,
  IconOssImageSpaceId = 408,
  IconOssImageTitle = 409,
  IconOssImageUpdatedAt = 410,
  IconOssImageUrl = 411,
  IconOssImageWidth = 412,
  IconOssInternalContent = 413,
  IconOssInternalContentDigest = 414,
  IconOssInternalContentFilePath = 415,
  IconOssInternalDescription = 416,
  IconOssInternalFieldOwners = 417,
  IconOssInternalIgnoreType = 418,
  IconOssInternalMediaType = 419,
  IconOssInternalOwner = 420,
  IconOssInternalType = 421,
  IconOssName = 422,
  IconOssNodeLocale = 423,
  IconOssParentChildren = 424,
  IconOssParentId = 425,
  IconOssSpaceId = 426,
  IconOssStartDate = 427,
  IconOssSubName = 428,
  IconOssSysRevision = 429,
  IconOssSysType = 430,
  IconOssTags = 431,
  IconOssTagsBlogPost = 432,
  IconOssTagsChildren = 433,
  IconOssTagsContentfulId = 434,
  IconOssTagsCreatedAt = 435,
  IconOssTagsId = 436,
  IconOssTagsLevel = 437,
  IconOssTagsName = 438,
  IconOssTagsNodeLocale = 439,
  IconOssTagsOss = 440,
  IconOssTagsProject = 441,
  IconOssTagsSkillGrpup = 442,
  IconOssTagsSkillMap = 443,
  IconOssTagsSpaceId = 444,
  IconOssTagsUpdatedAt = 445,
  IconOssUpdatedAt = 446,
  IconParentChildren = 447,
  IconParentChildrenChildren = 448,
  IconParentChildrenId = 449,
  IconParentId = 450,
  IconParentInternalContent = 451,
  IconParentInternalContentDigest = 452,
  IconParentInternalContentFilePath = 453,
  IconParentInternalDescription = 454,
  IconParentInternalFieldOwners = 455,
  IconParentInternalIgnoreType = 456,
  IconParentInternalMediaType = 457,
  IconParentInternalOwner = 458,
  IconParentInternalType = 459,
  IconParentParentChildren = 460,
  IconParentParentId = 461,
  IconProject = 462,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 463,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 464,
  IconProjectChildContentfulProjectDetailTextNodeId = 465,
  IconProjectChildren = 466,
  IconProjectChildrenContentfulProjectDetailTextNode = 467,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 468,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 469,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 470,
  IconProjectChildrenChildren = 471,
  IconProjectChildrenId = 472,
  IconProjectContentfulId = 473,
  IconProjectCreatedAt = 474,
  IconProjectDetailChildren = 475,
  IconProjectDetailDetail = 476,
  IconProjectDetailId = 477,
  IconProjectEndDate = 478,
  IconProjectIconChildren = 479,
  IconProjectIconChildrenContentfulIconSvgTextNode = 480,
  IconProjectIconContact = 481,
  IconProjectIconContentfulId = 482,
  IconProjectIconCreatedAt = 483,
  IconProjectIconHistory = 484,
  IconProjectIconId = 485,
  IconProjectIconName = 486,
  IconProjectIconNodeLocale = 487,
  IconProjectIconOss = 488,
  IconProjectIconProject = 489,
  IconProjectIconSpaceId = 490,
  IconProjectIconUpdatedAt = 491,
  IconProjectIconWhatICanDo = 492,
  IconProjectId = 493,
  IconProjectInternalContent = 494,
  IconProjectInternalContentDigest = 495,
  IconProjectInternalContentFilePath = 496,
  IconProjectInternalDescription = 497,
  IconProjectInternalFieldOwners = 498,
  IconProjectInternalIgnoreType = 499,
  IconProjectInternalMediaType = 500,
  IconProjectInternalOwner = 501,
  IconProjectInternalType = 502,
  IconProjectName = 503,
  IconProjectNodeLocale = 504,
  IconProjectParentChildren = 505,
  IconProjectParentId = 506,
  IconProjectSpaceId = 507,
  IconProjectStartDate = 508,
  IconProjectSubName = 509,
  IconProjectSysRevision = 510,
  IconProjectSysType = 511,
  IconProjectTags = 512,
  IconProjectTagsBlogPost = 513,
  IconProjectTagsChildren = 514,
  IconProjectTagsContentfulId = 515,
  IconProjectTagsCreatedAt = 516,
  IconProjectTagsId = 517,
  IconProjectTagsLevel = 518,
  IconProjectTagsName = 519,
  IconProjectTagsNodeLocale = 520,
  IconProjectTagsOss = 521,
  IconProjectTagsProject = 522,
  IconProjectTagsSkillGrpup = 523,
  IconProjectTagsSkillMap = 524,
  IconProjectTagsSpaceId = 525,
  IconProjectTagsUpdatedAt = 526,
  IconProjectUpdatedAt = 527,
  IconSpaceId = 528,
  IconSvgChildren = 529,
  IconSvgChildrenChildren = 530,
  IconSvgChildrenId = 531,
  IconSvgId = 532,
  IconSvgInternalContent = 533,
  IconSvgInternalContentDigest = 534,
  IconSvgInternalContentFilePath = 535,
  IconSvgInternalDescription = 536,
  IconSvgInternalFieldOwners = 537,
  IconSvgInternalIgnoreType = 538,
  IconSvgInternalMediaType = 539,
  IconSvgInternalOwner = 540,
  IconSvgInternalType = 541,
  IconSvgParentChildren = 542,
  IconSvgParentId = 543,
  IconSvgSvg = 544,
  IconSvgSysType = 545,
  IconSysRevision = 546,
  IconSysType = 547,
  IconUpdatedAt = 548,
  IconWhatICanDo = 549,
  IconWhatICanDoChildren = 550,
  IconWhatICanDoChildrenChildren = 551,
  IconWhatICanDoChildrenId = 552,
  IconWhatICanDoContentfulId = 553,
  IconWhatICanDoCreatedAt = 554,
  IconWhatICanDoIconChildren = 555,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 556,
  IconWhatICanDoIconContact = 557,
  IconWhatICanDoIconContentfulId = 558,
  IconWhatICanDoIconCreatedAt = 559,
  IconWhatICanDoIconHistory = 560,
  IconWhatICanDoIconId = 561,
  IconWhatICanDoIconName = 562,
  IconWhatICanDoIconNodeLocale = 563,
  IconWhatICanDoIconOss = 564,
  IconWhatICanDoIconProject = 565,
  IconWhatICanDoIconSpaceId = 566,
  IconWhatICanDoIconUpdatedAt = 567,
  IconWhatICanDoIconWhatICanDo = 568,
  IconWhatICanDoId = 569,
  IconWhatICanDoInternalContent = 570,
  IconWhatICanDoInternalContentDigest = 571,
  IconWhatICanDoInternalContentFilePath = 572,
  IconWhatICanDoInternalDescription = 573,
  IconWhatICanDoInternalFieldOwners = 574,
  IconWhatICanDoInternalIgnoreType = 575,
  IconWhatICanDoInternalMediaType = 576,
  IconWhatICanDoInternalOwner = 577,
  IconWhatICanDoInternalType = 578,
  IconWhatICanDoName = 579,
  IconWhatICanDoNodeLocale = 580,
  IconWhatICanDoParentChildren = 581,
  IconWhatICanDoParentId = 582,
  IconWhatICanDoSortKey = 583,
  IconWhatICanDoSpaceId = 584,
  IconWhatICanDoSubName = 585,
  IconWhatICanDoSysRevision = 586,
  IconWhatICanDoSysType = 587,
  IconWhatICanDoUpdatedAt = 588,
  Id = 589,
  InternalContent = 590,
  InternalContentDigest = 591,
  InternalContentFilePath = 592,
  InternalDescription = 593,
  InternalFieldOwners = 594,
  InternalIgnoreType = 595,
  InternalMediaType = 596,
  InternalOwner = 597,
  InternalType = 598,
  Name = 599,
  NodeLocale = 600,
  ParentChildren = 601,
  ParentChildrenChildren = 602,
  ParentChildrenChildrenChildren = 603,
  ParentChildrenChildrenId = 604,
  ParentChildrenId = 605,
  ParentChildrenInternalContent = 606,
  ParentChildrenInternalContentDigest = 607,
  ParentChildrenInternalContentFilePath = 608,
  ParentChildrenInternalDescription = 609,
  ParentChildrenInternalFieldOwners = 610,
  ParentChildrenInternalIgnoreType = 611,
  ParentChildrenInternalMediaType = 612,
  ParentChildrenInternalOwner = 613,
  ParentChildrenInternalType = 614,
  ParentChildrenParentChildren = 615,
  ParentChildrenParentId = 616,
  ParentId = 617,
  ParentInternalContent = 618,
  ParentInternalContentDigest = 619,
  ParentInternalContentFilePath = 620,
  ParentInternalDescription = 621,
  ParentInternalFieldOwners = 622,
  ParentInternalIgnoreType = 623,
  ParentInternalMediaType = 624,
  ParentInternalOwner = 625,
  ParentInternalType = 626,
  ParentParentChildren = 627,
  ParentParentChildrenChildren = 628,
  ParentParentChildrenId = 629,
  ParentParentId = 630,
  ParentParentInternalContent = 631,
  ParentParentInternalContentDigest = 632,
  ParentParentInternalContentFilePath = 633,
  ParentParentInternalDescription = 634,
  ParentParentInternalFieldOwners = 635,
  ParentParentInternalIgnoreType = 636,
  ParentParentInternalMediaType = 637,
  ParentParentInternalOwner = 638,
  ParentParentInternalType = 639,
  ParentParentParentChildren = 640,
  ParentParentParentId = 641,
  SpaceId = 642,
  StartDate = 643,
  SubName = 644,
  SysContentTypeSysId = 645,
  SysContentTypeSysLinkType = 646,
  SysContentTypeSysType = 647,
  SysRevision = 648,
  SysType = 649,
  Tags = 650,
  TagsBlogPost = 651,
  TagsBlogPostCategoryBlogPost = 652,
  TagsBlogPostCategoryChildren = 653,
  TagsBlogPostCategoryContentfulId = 654,
  TagsBlogPostCategoryCreatedAt = 655,
  TagsBlogPostCategoryId = 656,
  TagsBlogPostCategoryName = 657,
  TagsBlogPostCategoryNodeLocale = 658,
  TagsBlogPostCategorySortKey = 659,
  TagsBlogPostCategorySpaceId = 660,
  TagsBlogPostCategoryUpdatedAt = 661,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 662,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 663,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 664,
  TagsBlogPostChildren = 665,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 666,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 667,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 668,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 669,
  TagsBlogPostChildrenChildren = 670,
  TagsBlogPostChildrenId = 671,
  TagsBlogPostContentChildren = 672,
  TagsBlogPostContentContent = 673,
  TagsBlogPostContentId = 674,
  TagsBlogPostContentfulId = 675,
  TagsBlogPostCreated = 676,
  TagsBlogPostCreatedAt = 677,
  TagsBlogPostExcerpt = 678,
  TagsBlogPostGatsbyPath = 679,
  TagsBlogPostId = 680,
  TagsBlogPostInternalContent = 681,
  TagsBlogPostInternalContentDigest = 682,
  TagsBlogPostInternalContentFilePath = 683,
  TagsBlogPostInternalDescription = 684,
  TagsBlogPostInternalFieldOwners = 685,
  TagsBlogPostInternalIgnoreType = 686,
  TagsBlogPostInternalMediaType = 687,
  TagsBlogPostInternalOwner = 688,
  TagsBlogPostInternalType = 689,
  TagsBlogPostNodeLocale = 690,
  TagsBlogPostParentChildren = 691,
  TagsBlogPostParentId = 692,
  TagsBlogPostSlug = 693,
  TagsBlogPostSpaceId = 694,
  TagsBlogPostSysRevision = 695,
  TagsBlogPostSysType = 696,
  TagsBlogPostTags = 697,
  TagsBlogPostTagsBlogPost = 698,
  TagsBlogPostTagsChildren = 699,
  TagsBlogPostTagsContentfulId = 700,
  TagsBlogPostTagsCreatedAt = 701,
  TagsBlogPostTagsId = 702,
  TagsBlogPostTagsLevel = 703,
  TagsBlogPostTagsName = 704,
  TagsBlogPostTagsNodeLocale = 705,
  TagsBlogPostTagsOss = 706,
  TagsBlogPostTagsProject = 707,
  TagsBlogPostTagsSkillGrpup = 708,
  TagsBlogPostTagsSkillMap = 709,
  TagsBlogPostTagsSpaceId = 710,
  TagsBlogPostTagsUpdatedAt = 711,
  TagsBlogPostThumbnailChildren = 712,
  TagsBlogPostThumbnailContentfulId = 713,
  TagsBlogPostThumbnailCreatedAt = 714,
  TagsBlogPostThumbnailDescription = 715,
  TagsBlogPostThumbnailFilename = 716,
  TagsBlogPostThumbnailFilesize = 717,
  TagsBlogPostThumbnailGatsbyImage = 718,
  TagsBlogPostThumbnailGatsbyImageData = 719,
  TagsBlogPostThumbnailHeight = 720,
  TagsBlogPostThumbnailId = 721,
  TagsBlogPostThumbnailMimeType = 722,
  TagsBlogPostThumbnailNodeLocale = 723,
  TagsBlogPostThumbnailPlaceholderUrl = 724,
  TagsBlogPostThumbnailPublicUrl = 725,
  TagsBlogPostThumbnailSize = 726,
  TagsBlogPostThumbnailSpaceId = 727,
  TagsBlogPostThumbnailTitle = 728,
  TagsBlogPostThumbnailUpdatedAt = 729,
  TagsBlogPostThumbnailUrl = 730,
  TagsBlogPostThumbnailWidth = 731,
  TagsBlogPostTitle = 732,
  TagsBlogPostUpdated = 733,
  TagsBlogPostUpdatedAt = 734,
  TagsChildren = 735,
  TagsChildrenChildren = 736,
  TagsChildrenChildrenChildren = 737,
  TagsChildrenChildrenId = 738,
  TagsChildrenId = 739,
  TagsChildrenInternalContent = 740,
  TagsChildrenInternalContentDigest = 741,
  TagsChildrenInternalContentFilePath = 742,
  TagsChildrenInternalDescription = 743,
  TagsChildrenInternalFieldOwners = 744,
  TagsChildrenInternalIgnoreType = 745,
  TagsChildrenInternalMediaType = 746,
  TagsChildrenInternalOwner = 747,
  TagsChildrenInternalType = 748,
  TagsChildrenParentChildren = 749,
  TagsChildrenParentId = 750,
  TagsContentfulId = 751,
  TagsCreatedAt = 752,
  TagsId = 753,
  TagsInternalContent = 754,
  TagsInternalContentDigest = 755,
  TagsInternalContentFilePath = 756,
  TagsInternalDescription = 757,
  TagsInternalFieldOwners = 758,
  TagsInternalIgnoreType = 759,
  TagsInternalMediaType = 760,
  TagsInternalOwner = 761,
  TagsInternalType = 762,
  TagsLevel = 763,
  TagsName = 764,
  TagsNodeLocale = 765,
  TagsOss = 766,
  TagsOssChildContentfulOssDetailTextNodeChildren = 767,
  TagsOssChildContentfulOssDetailTextNodeDetail = 768,
  TagsOssChildContentfulOssDetailTextNodeId = 769,
  TagsOssChildren = 770,
  TagsOssChildrenContentfulOssDetailTextNode = 771,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 772,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 773,
  TagsOssChildrenContentfulOssDetailTextNodeId = 774,
  TagsOssChildrenChildren = 775,
  TagsOssChildrenId = 776,
  TagsOssContentfulId = 777,
  TagsOssCreatedAt = 778,
  TagsOssDetailChildren = 779,
  TagsOssDetailDetail = 780,
  TagsOssDetailId = 781,
  TagsOssHref = 782,
  TagsOssIconChildren = 783,
  TagsOssIconChildrenContentfulIconSvgTextNode = 784,
  TagsOssIconContact = 785,
  TagsOssIconContentfulId = 786,
  TagsOssIconCreatedAt = 787,
  TagsOssIconHistory = 788,
  TagsOssIconId = 789,
  TagsOssIconName = 790,
  TagsOssIconNodeLocale = 791,
  TagsOssIconOss = 792,
  TagsOssIconProject = 793,
  TagsOssIconSpaceId = 794,
  TagsOssIconUpdatedAt = 795,
  TagsOssIconWhatICanDo = 796,
  TagsOssId = 797,
  TagsOssImageChildren = 798,
  TagsOssImageContentfulId = 799,
  TagsOssImageCreatedAt = 800,
  TagsOssImageDescription = 801,
  TagsOssImageFilename = 802,
  TagsOssImageFilesize = 803,
  TagsOssImageGatsbyImage = 804,
  TagsOssImageGatsbyImageData = 805,
  TagsOssImageHeight = 806,
  TagsOssImageId = 807,
  TagsOssImageMimeType = 808,
  TagsOssImageNodeLocale = 809,
  TagsOssImagePlaceholderUrl = 810,
  TagsOssImagePublicUrl = 811,
  TagsOssImageSize = 812,
  TagsOssImageSpaceId = 813,
  TagsOssImageTitle = 814,
  TagsOssImageUpdatedAt = 815,
  TagsOssImageUrl = 816,
  TagsOssImageWidth = 817,
  TagsOssInternalContent = 818,
  TagsOssInternalContentDigest = 819,
  TagsOssInternalContentFilePath = 820,
  TagsOssInternalDescription = 821,
  TagsOssInternalFieldOwners = 822,
  TagsOssInternalIgnoreType = 823,
  TagsOssInternalMediaType = 824,
  TagsOssInternalOwner = 825,
  TagsOssInternalType = 826,
  TagsOssName = 827,
  TagsOssNodeLocale = 828,
  TagsOssParentChildren = 829,
  TagsOssParentId = 830,
  TagsOssSpaceId = 831,
  TagsOssStartDate = 832,
  TagsOssSubName = 833,
  TagsOssSysRevision = 834,
  TagsOssSysType = 835,
  TagsOssTags = 836,
  TagsOssTagsBlogPost = 837,
  TagsOssTagsChildren = 838,
  TagsOssTagsContentfulId = 839,
  TagsOssTagsCreatedAt = 840,
  TagsOssTagsId = 841,
  TagsOssTagsLevel = 842,
  TagsOssTagsName = 843,
  TagsOssTagsNodeLocale = 844,
  TagsOssTagsOss = 845,
  TagsOssTagsProject = 846,
  TagsOssTagsSkillGrpup = 847,
  TagsOssTagsSkillMap = 848,
  TagsOssTagsSpaceId = 849,
  TagsOssTagsUpdatedAt = 850,
  TagsOssUpdatedAt = 851,
  TagsParentChildren = 852,
  TagsParentChildrenChildren = 853,
  TagsParentChildrenId = 854,
  TagsParentId = 855,
  TagsParentInternalContent = 856,
  TagsParentInternalContentDigest = 857,
  TagsParentInternalContentFilePath = 858,
  TagsParentInternalDescription = 859,
  TagsParentInternalFieldOwners = 860,
  TagsParentInternalIgnoreType = 861,
  TagsParentInternalMediaType = 862,
  TagsParentInternalOwner = 863,
  TagsParentInternalType = 864,
  TagsParentParentChildren = 865,
  TagsParentParentId = 866,
  TagsProject = 867,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 868,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 869,
  TagsProjectChildContentfulProjectDetailTextNodeId = 870,
  TagsProjectChildren = 871,
  TagsProjectChildrenContentfulProjectDetailTextNode = 872,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 873,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 874,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 875,
  TagsProjectChildrenChildren = 876,
  TagsProjectChildrenId = 877,
  TagsProjectContentfulId = 878,
  TagsProjectCreatedAt = 879,
  TagsProjectDetailChildren = 880,
  TagsProjectDetailDetail = 881,
  TagsProjectDetailId = 882,
  TagsProjectEndDate = 883,
  TagsProjectIconChildren = 884,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 885,
  TagsProjectIconContact = 886,
  TagsProjectIconContentfulId = 887,
  TagsProjectIconCreatedAt = 888,
  TagsProjectIconHistory = 889,
  TagsProjectIconId = 890,
  TagsProjectIconName = 891,
  TagsProjectIconNodeLocale = 892,
  TagsProjectIconOss = 893,
  TagsProjectIconProject = 894,
  TagsProjectIconSpaceId = 895,
  TagsProjectIconUpdatedAt = 896,
  TagsProjectIconWhatICanDo = 897,
  TagsProjectId = 898,
  TagsProjectInternalContent = 899,
  TagsProjectInternalContentDigest = 900,
  TagsProjectInternalContentFilePath = 901,
  TagsProjectInternalDescription = 902,
  TagsProjectInternalFieldOwners = 903,
  TagsProjectInternalIgnoreType = 904,
  TagsProjectInternalMediaType = 905,
  TagsProjectInternalOwner = 906,
  TagsProjectInternalType = 907,
  TagsProjectName = 908,
  TagsProjectNodeLocale = 909,
  TagsProjectParentChildren = 910,
  TagsProjectParentId = 911,
  TagsProjectSpaceId = 912,
  TagsProjectStartDate = 913,
  TagsProjectSubName = 914,
  TagsProjectSysRevision = 915,
  TagsProjectSysType = 916,
  TagsProjectTags = 917,
  TagsProjectTagsBlogPost = 918,
  TagsProjectTagsChildren = 919,
  TagsProjectTagsContentfulId = 920,
  TagsProjectTagsCreatedAt = 921,
  TagsProjectTagsId = 922,
  TagsProjectTagsLevel = 923,
  TagsProjectTagsName = 924,
  TagsProjectTagsNodeLocale = 925,
  TagsProjectTagsOss = 926,
  TagsProjectTagsProject = 927,
  TagsProjectTagsSkillGrpup = 928,
  TagsProjectTagsSkillMap = 929,
  TagsProjectTagsSpaceId = 930,
  TagsProjectTagsUpdatedAt = 931,
  TagsProjectUpdatedAt = 932,
  TagsSkillGrpup = 933,
  TagsSkillGrpupChildren = 934,
  TagsSkillGrpupChildrenChildren = 935,
  TagsSkillGrpupChildrenId = 936,
  TagsSkillGrpupContentfulId = 937,
  TagsSkillGrpupCreatedAt = 938,
  TagsSkillGrpupId = 939,
  TagsSkillGrpupInternalContent = 940,
  TagsSkillGrpupInternalContentDigest = 941,
  TagsSkillGrpupInternalContentFilePath = 942,
  TagsSkillGrpupInternalDescription = 943,
  TagsSkillGrpupInternalFieldOwners = 944,
  TagsSkillGrpupInternalIgnoreType = 945,
  TagsSkillGrpupInternalMediaType = 946,
  TagsSkillGrpupInternalOwner = 947,
  TagsSkillGrpupInternalType = 948,
  TagsSkillGrpupName = 949,
  TagsSkillGrpupNodeLocale = 950,
  TagsSkillGrpupParentChildren = 951,
  TagsSkillGrpupParentId = 952,
  TagsSkillGrpupSkillMap = 953,
  TagsSkillGrpupSkillMapChildren = 954,
  TagsSkillGrpupSkillMapContentfulId = 955,
  TagsSkillGrpupSkillMapCreatedAt = 956,
  TagsSkillGrpupSkillMapExpanded = 957,
  TagsSkillGrpupSkillMapId = 958,
  TagsSkillGrpupSkillMapName = 959,
  TagsSkillGrpupSkillMapNodeLocale = 960,
  TagsSkillGrpupSkillMapSkillGroups = 961,
  TagsSkillGrpupSkillMapSkills = 962,
  TagsSkillGrpupSkillMapSortKey = 963,
  TagsSkillGrpupSkillMapSpaceId = 964,
  TagsSkillGrpupSkillMapUpdatedAt = 965,
  TagsSkillGrpupSkills = 966,
  TagsSkillGrpupSkillsBlogPost = 967,
  TagsSkillGrpupSkillsChildren = 968,
  TagsSkillGrpupSkillsContentfulId = 969,
  TagsSkillGrpupSkillsCreatedAt = 970,
  TagsSkillGrpupSkillsId = 971,
  TagsSkillGrpupSkillsLevel = 972,
  TagsSkillGrpupSkillsName = 973,
  TagsSkillGrpupSkillsNodeLocale = 974,
  TagsSkillGrpupSkillsOss = 975,
  TagsSkillGrpupSkillsProject = 976,
  TagsSkillGrpupSkillsSkillGrpup = 977,
  TagsSkillGrpupSkillsSkillMap = 978,
  TagsSkillGrpupSkillsSpaceId = 979,
  TagsSkillGrpupSkillsUpdatedAt = 980,
  TagsSkillGrpupSpaceId = 981,
  TagsSkillGrpupSysRevision = 982,
  TagsSkillGrpupSysType = 983,
  TagsSkillGrpupUpdatedAt = 984,
  TagsSkillMap = 985,
  TagsSkillMapChildren = 986,
  TagsSkillMapChildrenChildren = 987,
  TagsSkillMapChildrenId = 988,
  TagsSkillMapContentfulId = 989,
  TagsSkillMapCreatedAt = 990,
  TagsSkillMapExpanded = 991,
  TagsSkillMapId = 992,
  TagsSkillMapInternalContent = 993,
  TagsSkillMapInternalContentDigest = 994,
  TagsSkillMapInternalContentFilePath = 995,
  TagsSkillMapInternalDescription = 996,
  TagsSkillMapInternalFieldOwners = 997,
  TagsSkillMapInternalIgnoreType = 998,
  TagsSkillMapInternalMediaType = 999,
  TagsSkillMapInternalOwner = 1000,
  TagsSkillMapInternalType = 1001,
  TagsSkillMapName = 1002,
  TagsSkillMapNodeLocale = 1003,
  TagsSkillMapParentChildren = 1004,
  TagsSkillMapParentId = 1005,
  TagsSkillMapSkillGroups = 1006,
  TagsSkillMapSkillGroupsChildren = 1007,
  TagsSkillMapSkillGroupsContentfulId = 1008,
  TagsSkillMapSkillGroupsCreatedAt = 1009,
  TagsSkillMapSkillGroupsId = 1010,
  TagsSkillMapSkillGroupsName = 1011,
  TagsSkillMapSkillGroupsNodeLocale = 1012,
  TagsSkillMapSkillGroupsSkillMap = 1013,
  TagsSkillMapSkillGroupsSkills = 1014,
  TagsSkillMapSkillGroupsSpaceId = 1015,
  TagsSkillMapSkillGroupsUpdatedAt = 1016,
  TagsSkillMapSkills = 1017,
  TagsSkillMapSkillsBlogPost = 1018,
  TagsSkillMapSkillsChildren = 1019,
  TagsSkillMapSkillsContentfulId = 1020,
  TagsSkillMapSkillsCreatedAt = 1021,
  TagsSkillMapSkillsId = 1022,
  TagsSkillMapSkillsLevel = 1023,
  TagsSkillMapSkillsName = 1024,
  TagsSkillMapSkillsNodeLocale = 1025,
  TagsSkillMapSkillsOss = 1026,
  TagsSkillMapSkillsProject = 1027,
  TagsSkillMapSkillsSkillGrpup = 1028,
  TagsSkillMapSkillsSkillMap = 1029,
  TagsSkillMapSkillsSpaceId = 1030,
  TagsSkillMapSkillsUpdatedAt = 1031,
  TagsSkillMapSortKey = 1032,
  TagsSkillMapSpaceId = 1033,
  TagsSkillMapSysRevision = 1034,
  TagsSkillMapSysType = 1035,
  TagsSkillMapUpdatedAt = 1036,
  TagsSpaceId = 1037,
  TagsSysRevision = 1038,
  TagsSysType = 1039,
  TagsUpdatedAt = 1040,
  UpdatedAt = 1041
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
  SkillsBlogPostCategoryBlogPost = 296,
  SkillsBlogPostCategoryChildren = 297,
  SkillsBlogPostCategoryContentfulId = 298,
  SkillsBlogPostCategoryCreatedAt = 299,
  SkillsBlogPostCategoryId = 300,
  SkillsBlogPostCategoryName = 301,
  SkillsBlogPostCategoryNodeLocale = 302,
  SkillsBlogPostCategorySortKey = 303,
  SkillsBlogPostCategorySpaceId = 304,
  SkillsBlogPostCategoryUpdatedAt = 305,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 306,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 307,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 308,
  SkillsBlogPostChildren = 309,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 310,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 311,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 312,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 313,
  SkillsBlogPostChildrenChildren = 314,
  SkillsBlogPostChildrenId = 315,
  SkillsBlogPostContentChildren = 316,
  SkillsBlogPostContentContent = 317,
  SkillsBlogPostContentId = 318,
  SkillsBlogPostContentfulId = 319,
  SkillsBlogPostCreated = 320,
  SkillsBlogPostCreatedAt = 321,
  SkillsBlogPostExcerpt = 322,
  SkillsBlogPostGatsbyPath = 323,
  SkillsBlogPostId = 324,
  SkillsBlogPostInternalContent = 325,
  SkillsBlogPostInternalContentDigest = 326,
  SkillsBlogPostInternalContentFilePath = 327,
  SkillsBlogPostInternalDescription = 328,
  SkillsBlogPostInternalFieldOwners = 329,
  SkillsBlogPostInternalIgnoreType = 330,
  SkillsBlogPostInternalMediaType = 331,
  SkillsBlogPostInternalOwner = 332,
  SkillsBlogPostInternalType = 333,
  SkillsBlogPostNodeLocale = 334,
  SkillsBlogPostParentChildren = 335,
  SkillsBlogPostParentId = 336,
  SkillsBlogPostSlug = 337,
  SkillsBlogPostSpaceId = 338,
  SkillsBlogPostSysRevision = 339,
  SkillsBlogPostSysType = 340,
  SkillsBlogPostTags = 341,
  SkillsBlogPostTagsBlogPost = 342,
  SkillsBlogPostTagsChildren = 343,
  SkillsBlogPostTagsContentfulId = 344,
  SkillsBlogPostTagsCreatedAt = 345,
  SkillsBlogPostTagsId = 346,
  SkillsBlogPostTagsLevel = 347,
  SkillsBlogPostTagsName = 348,
  SkillsBlogPostTagsNodeLocale = 349,
  SkillsBlogPostTagsOss = 350,
  SkillsBlogPostTagsProject = 351,
  SkillsBlogPostTagsSkillGrpup = 352,
  SkillsBlogPostTagsSkillMap = 353,
  SkillsBlogPostTagsSpaceId = 354,
  SkillsBlogPostTagsUpdatedAt = 355,
  SkillsBlogPostThumbnailChildren = 356,
  SkillsBlogPostThumbnailContentfulId = 357,
  SkillsBlogPostThumbnailCreatedAt = 358,
  SkillsBlogPostThumbnailDescription = 359,
  SkillsBlogPostThumbnailFilename = 360,
  SkillsBlogPostThumbnailFilesize = 361,
  SkillsBlogPostThumbnailGatsbyImage = 362,
  SkillsBlogPostThumbnailGatsbyImageData = 363,
  SkillsBlogPostThumbnailHeight = 364,
  SkillsBlogPostThumbnailId = 365,
  SkillsBlogPostThumbnailMimeType = 366,
  SkillsBlogPostThumbnailNodeLocale = 367,
  SkillsBlogPostThumbnailPlaceholderUrl = 368,
  SkillsBlogPostThumbnailPublicUrl = 369,
  SkillsBlogPostThumbnailSize = 370,
  SkillsBlogPostThumbnailSpaceId = 371,
  SkillsBlogPostThumbnailTitle = 372,
  SkillsBlogPostThumbnailUpdatedAt = 373,
  SkillsBlogPostThumbnailUrl = 374,
  SkillsBlogPostThumbnailWidth = 375,
  SkillsBlogPostTitle = 376,
  SkillsBlogPostUpdated = 377,
  SkillsBlogPostUpdatedAt = 378,
  SkillsChildren = 379,
  SkillsChildrenChildren = 380,
  SkillsChildrenChildrenChildren = 381,
  SkillsChildrenChildrenId = 382,
  SkillsChildrenId = 383,
  SkillsChildrenInternalContent = 384,
  SkillsChildrenInternalContentDigest = 385,
  SkillsChildrenInternalContentFilePath = 386,
  SkillsChildrenInternalDescription = 387,
  SkillsChildrenInternalFieldOwners = 388,
  SkillsChildrenInternalIgnoreType = 389,
  SkillsChildrenInternalMediaType = 390,
  SkillsChildrenInternalOwner = 391,
  SkillsChildrenInternalType = 392,
  SkillsChildrenParentChildren = 393,
  SkillsChildrenParentId = 394,
  SkillsContentfulId = 395,
  SkillsCreatedAt = 396,
  SkillsId = 397,
  SkillsInternalContent = 398,
  SkillsInternalContentDigest = 399,
  SkillsInternalContentFilePath = 400,
  SkillsInternalDescription = 401,
  SkillsInternalFieldOwners = 402,
  SkillsInternalIgnoreType = 403,
  SkillsInternalMediaType = 404,
  SkillsInternalOwner = 405,
  SkillsInternalType = 406,
  SkillsLevel = 407,
  SkillsName = 408,
  SkillsNodeLocale = 409,
  SkillsOss = 410,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 411,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 412,
  SkillsOssChildContentfulOssDetailTextNodeId = 413,
  SkillsOssChildren = 414,
  SkillsOssChildrenContentfulOssDetailTextNode = 415,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 416,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 417,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 418,
  SkillsOssChildrenChildren = 419,
  SkillsOssChildrenId = 420,
  SkillsOssContentfulId = 421,
  SkillsOssCreatedAt = 422,
  SkillsOssDetailChildren = 423,
  SkillsOssDetailDetail = 424,
  SkillsOssDetailId = 425,
  SkillsOssHref = 426,
  SkillsOssIconChildren = 427,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 428,
  SkillsOssIconContact = 429,
  SkillsOssIconContentfulId = 430,
  SkillsOssIconCreatedAt = 431,
  SkillsOssIconHistory = 432,
  SkillsOssIconId = 433,
  SkillsOssIconName = 434,
  SkillsOssIconNodeLocale = 435,
  SkillsOssIconOss = 436,
  SkillsOssIconProject = 437,
  SkillsOssIconSpaceId = 438,
  SkillsOssIconUpdatedAt = 439,
  SkillsOssIconWhatICanDo = 440,
  SkillsOssId = 441,
  SkillsOssImageChildren = 442,
  SkillsOssImageContentfulId = 443,
  SkillsOssImageCreatedAt = 444,
  SkillsOssImageDescription = 445,
  SkillsOssImageFilename = 446,
  SkillsOssImageFilesize = 447,
  SkillsOssImageGatsbyImage = 448,
  SkillsOssImageGatsbyImageData = 449,
  SkillsOssImageHeight = 450,
  SkillsOssImageId = 451,
  SkillsOssImageMimeType = 452,
  SkillsOssImageNodeLocale = 453,
  SkillsOssImagePlaceholderUrl = 454,
  SkillsOssImagePublicUrl = 455,
  SkillsOssImageSize = 456,
  SkillsOssImageSpaceId = 457,
  SkillsOssImageTitle = 458,
  SkillsOssImageUpdatedAt = 459,
  SkillsOssImageUrl = 460,
  SkillsOssImageWidth = 461,
  SkillsOssInternalContent = 462,
  SkillsOssInternalContentDigest = 463,
  SkillsOssInternalContentFilePath = 464,
  SkillsOssInternalDescription = 465,
  SkillsOssInternalFieldOwners = 466,
  SkillsOssInternalIgnoreType = 467,
  SkillsOssInternalMediaType = 468,
  SkillsOssInternalOwner = 469,
  SkillsOssInternalType = 470,
  SkillsOssName = 471,
  SkillsOssNodeLocale = 472,
  SkillsOssParentChildren = 473,
  SkillsOssParentId = 474,
  SkillsOssSpaceId = 475,
  SkillsOssStartDate = 476,
  SkillsOssSubName = 477,
  SkillsOssSysRevision = 478,
  SkillsOssSysType = 479,
  SkillsOssTags = 480,
  SkillsOssTagsBlogPost = 481,
  SkillsOssTagsChildren = 482,
  SkillsOssTagsContentfulId = 483,
  SkillsOssTagsCreatedAt = 484,
  SkillsOssTagsId = 485,
  SkillsOssTagsLevel = 486,
  SkillsOssTagsName = 487,
  SkillsOssTagsNodeLocale = 488,
  SkillsOssTagsOss = 489,
  SkillsOssTagsProject = 490,
  SkillsOssTagsSkillGrpup = 491,
  SkillsOssTagsSkillMap = 492,
  SkillsOssTagsSpaceId = 493,
  SkillsOssTagsUpdatedAt = 494,
  SkillsOssUpdatedAt = 495,
  SkillsParentChildren = 496,
  SkillsParentChildrenChildren = 497,
  SkillsParentChildrenId = 498,
  SkillsParentId = 499,
  SkillsParentInternalContent = 500,
  SkillsParentInternalContentDigest = 501,
  SkillsParentInternalContentFilePath = 502,
  SkillsParentInternalDescription = 503,
  SkillsParentInternalFieldOwners = 504,
  SkillsParentInternalIgnoreType = 505,
  SkillsParentInternalMediaType = 506,
  SkillsParentInternalOwner = 507,
  SkillsParentInternalType = 508,
  SkillsParentParentChildren = 509,
  SkillsParentParentId = 510,
  SkillsProject = 511,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 512,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 513,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 514,
  SkillsProjectChildren = 515,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 516,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 517,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 518,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 519,
  SkillsProjectChildrenChildren = 520,
  SkillsProjectChildrenId = 521,
  SkillsProjectContentfulId = 522,
  SkillsProjectCreatedAt = 523,
  SkillsProjectDetailChildren = 524,
  SkillsProjectDetailDetail = 525,
  SkillsProjectDetailId = 526,
  SkillsProjectEndDate = 527,
  SkillsProjectIconChildren = 528,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 529,
  SkillsProjectIconContact = 530,
  SkillsProjectIconContentfulId = 531,
  SkillsProjectIconCreatedAt = 532,
  SkillsProjectIconHistory = 533,
  SkillsProjectIconId = 534,
  SkillsProjectIconName = 535,
  SkillsProjectIconNodeLocale = 536,
  SkillsProjectIconOss = 537,
  SkillsProjectIconProject = 538,
  SkillsProjectIconSpaceId = 539,
  SkillsProjectIconUpdatedAt = 540,
  SkillsProjectIconWhatICanDo = 541,
  SkillsProjectId = 542,
  SkillsProjectInternalContent = 543,
  SkillsProjectInternalContentDigest = 544,
  SkillsProjectInternalContentFilePath = 545,
  SkillsProjectInternalDescription = 546,
  SkillsProjectInternalFieldOwners = 547,
  SkillsProjectInternalIgnoreType = 548,
  SkillsProjectInternalMediaType = 549,
  SkillsProjectInternalOwner = 550,
  SkillsProjectInternalType = 551,
  SkillsProjectName = 552,
  SkillsProjectNodeLocale = 553,
  SkillsProjectParentChildren = 554,
  SkillsProjectParentId = 555,
  SkillsProjectSpaceId = 556,
  SkillsProjectStartDate = 557,
  SkillsProjectSubName = 558,
  SkillsProjectSysRevision = 559,
  SkillsProjectSysType = 560,
  SkillsProjectTags = 561,
  SkillsProjectTagsBlogPost = 562,
  SkillsProjectTagsChildren = 563,
  SkillsProjectTagsContentfulId = 564,
  SkillsProjectTagsCreatedAt = 565,
  SkillsProjectTagsId = 566,
  SkillsProjectTagsLevel = 567,
  SkillsProjectTagsName = 568,
  SkillsProjectTagsNodeLocale = 569,
  SkillsProjectTagsOss = 570,
  SkillsProjectTagsProject = 571,
  SkillsProjectTagsSkillGrpup = 572,
  SkillsProjectTagsSkillMap = 573,
  SkillsProjectTagsSpaceId = 574,
  SkillsProjectTagsUpdatedAt = 575,
  SkillsProjectUpdatedAt = 576,
  SkillsSkillGrpup = 577,
  SkillsSkillGrpupChildren = 578,
  SkillsSkillGrpupChildrenChildren = 579,
  SkillsSkillGrpupChildrenId = 580,
  SkillsSkillGrpupContentfulId = 581,
  SkillsSkillGrpupCreatedAt = 582,
  SkillsSkillGrpupId = 583,
  SkillsSkillGrpupInternalContent = 584,
  SkillsSkillGrpupInternalContentDigest = 585,
  SkillsSkillGrpupInternalContentFilePath = 586,
  SkillsSkillGrpupInternalDescription = 587,
  SkillsSkillGrpupInternalFieldOwners = 588,
  SkillsSkillGrpupInternalIgnoreType = 589,
  SkillsSkillGrpupInternalMediaType = 590,
  SkillsSkillGrpupInternalOwner = 591,
  SkillsSkillGrpupInternalType = 592,
  SkillsSkillGrpupName = 593,
  SkillsSkillGrpupNodeLocale = 594,
  SkillsSkillGrpupParentChildren = 595,
  SkillsSkillGrpupParentId = 596,
  SkillsSkillGrpupSkillMap = 597,
  SkillsSkillGrpupSkillMapChildren = 598,
  SkillsSkillGrpupSkillMapContentfulId = 599,
  SkillsSkillGrpupSkillMapCreatedAt = 600,
  SkillsSkillGrpupSkillMapExpanded = 601,
  SkillsSkillGrpupSkillMapId = 602,
  SkillsSkillGrpupSkillMapName = 603,
  SkillsSkillGrpupSkillMapNodeLocale = 604,
  SkillsSkillGrpupSkillMapSkillGroups = 605,
  SkillsSkillGrpupSkillMapSkills = 606,
  SkillsSkillGrpupSkillMapSortKey = 607,
  SkillsSkillGrpupSkillMapSpaceId = 608,
  SkillsSkillGrpupSkillMapUpdatedAt = 609,
  SkillsSkillGrpupSkills = 610,
  SkillsSkillGrpupSkillsBlogPost = 611,
  SkillsSkillGrpupSkillsChildren = 612,
  SkillsSkillGrpupSkillsContentfulId = 613,
  SkillsSkillGrpupSkillsCreatedAt = 614,
  SkillsSkillGrpupSkillsId = 615,
  SkillsSkillGrpupSkillsLevel = 616,
  SkillsSkillGrpupSkillsName = 617,
  SkillsSkillGrpupSkillsNodeLocale = 618,
  SkillsSkillGrpupSkillsOss = 619,
  SkillsSkillGrpupSkillsProject = 620,
  SkillsSkillGrpupSkillsSkillGrpup = 621,
  SkillsSkillGrpupSkillsSkillMap = 622,
  SkillsSkillGrpupSkillsSpaceId = 623,
  SkillsSkillGrpupSkillsUpdatedAt = 624,
  SkillsSkillGrpupSpaceId = 625,
  SkillsSkillGrpupSysRevision = 626,
  SkillsSkillGrpupSysType = 627,
  SkillsSkillGrpupUpdatedAt = 628,
  SkillsSkillMap = 629,
  SkillsSkillMapChildren = 630,
  SkillsSkillMapChildrenChildren = 631,
  SkillsSkillMapChildrenId = 632,
  SkillsSkillMapContentfulId = 633,
  SkillsSkillMapCreatedAt = 634,
  SkillsSkillMapExpanded = 635,
  SkillsSkillMapId = 636,
  SkillsSkillMapInternalContent = 637,
  SkillsSkillMapInternalContentDigest = 638,
  SkillsSkillMapInternalContentFilePath = 639,
  SkillsSkillMapInternalDescription = 640,
  SkillsSkillMapInternalFieldOwners = 641,
  SkillsSkillMapInternalIgnoreType = 642,
  SkillsSkillMapInternalMediaType = 643,
  SkillsSkillMapInternalOwner = 644,
  SkillsSkillMapInternalType = 645,
  SkillsSkillMapName = 646,
  SkillsSkillMapNodeLocale = 647,
  SkillsSkillMapParentChildren = 648,
  SkillsSkillMapParentId = 649,
  SkillsSkillMapSkillGroups = 650,
  SkillsSkillMapSkillGroupsChildren = 651,
  SkillsSkillMapSkillGroupsContentfulId = 652,
  SkillsSkillMapSkillGroupsCreatedAt = 653,
  SkillsSkillMapSkillGroupsId = 654,
  SkillsSkillMapSkillGroupsName = 655,
  SkillsSkillMapSkillGroupsNodeLocale = 656,
  SkillsSkillMapSkillGroupsSkillMap = 657,
  SkillsSkillMapSkillGroupsSkills = 658,
  SkillsSkillMapSkillGroupsSpaceId = 659,
  SkillsSkillMapSkillGroupsUpdatedAt = 660,
  SkillsSkillMapSkills = 661,
  SkillsSkillMapSkillsBlogPost = 662,
  SkillsSkillMapSkillsChildren = 663,
  SkillsSkillMapSkillsContentfulId = 664,
  SkillsSkillMapSkillsCreatedAt = 665,
  SkillsSkillMapSkillsId = 666,
  SkillsSkillMapSkillsLevel = 667,
  SkillsSkillMapSkillsName = 668,
  SkillsSkillMapSkillsNodeLocale = 669,
  SkillsSkillMapSkillsOss = 670,
  SkillsSkillMapSkillsProject = 671,
  SkillsSkillMapSkillsSkillGrpup = 672,
  SkillsSkillMapSkillsSkillMap = 673,
  SkillsSkillMapSkillsSpaceId = 674,
  SkillsSkillMapSkillsUpdatedAt = 675,
  SkillsSkillMapSortKey = 676,
  SkillsSkillMapSpaceId = 677,
  SkillsSkillMapSysRevision = 678,
  SkillsSkillMapSysType = 679,
  SkillsSkillMapUpdatedAt = 680,
  SkillsSpaceId = 681,
  SkillsSysRevision = 682,
  SkillsSysType = 683,
  SkillsUpdatedAt = 684,
  SpaceId = 685,
  SysContentTypeSysId = 686,
  SysContentTypeSysLinkType = 687,
  SysContentTypeSysType = 688,
  SysRevision = 689,
  SysType = 690,
  UpdatedAt = 691
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
  SkillsBlogPostCategoryBlogPost = 295,
  SkillsBlogPostCategoryChildren = 296,
  SkillsBlogPostCategoryContentfulId = 297,
  SkillsBlogPostCategoryCreatedAt = 298,
  SkillsBlogPostCategoryId = 299,
  SkillsBlogPostCategoryName = 300,
  SkillsBlogPostCategoryNodeLocale = 301,
  SkillsBlogPostCategorySortKey = 302,
  SkillsBlogPostCategorySpaceId = 303,
  SkillsBlogPostCategoryUpdatedAt = 304,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 305,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 306,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 307,
  SkillsBlogPostChildren = 308,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 309,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 310,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 311,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 312,
  SkillsBlogPostChildrenChildren = 313,
  SkillsBlogPostChildrenId = 314,
  SkillsBlogPostContentChildren = 315,
  SkillsBlogPostContentContent = 316,
  SkillsBlogPostContentId = 317,
  SkillsBlogPostContentfulId = 318,
  SkillsBlogPostCreated = 319,
  SkillsBlogPostCreatedAt = 320,
  SkillsBlogPostExcerpt = 321,
  SkillsBlogPostGatsbyPath = 322,
  SkillsBlogPostId = 323,
  SkillsBlogPostInternalContent = 324,
  SkillsBlogPostInternalContentDigest = 325,
  SkillsBlogPostInternalContentFilePath = 326,
  SkillsBlogPostInternalDescription = 327,
  SkillsBlogPostInternalFieldOwners = 328,
  SkillsBlogPostInternalIgnoreType = 329,
  SkillsBlogPostInternalMediaType = 330,
  SkillsBlogPostInternalOwner = 331,
  SkillsBlogPostInternalType = 332,
  SkillsBlogPostNodeLocale = 333,
  SkillsBlogPostParentChildren = 334,
  SkillsBlogPostParentId = 335,
  SkillsBlogPostSlug = 336,
  SkillsBlogPostSpaceId = 337,
  SkillsBlogPostSysRevision = 338,
  SkillsBlogPostSysType = 339,
  SkillsBlogPostTags = 340,
  SkillsBlogPostTagsBlogPost = 341,
  SkillsBlogPostTagsChildren = 342,
  SkillsBlogPostTagsContentfulId = 343,
  SkillsBlogPostTagsCreatedAt = 344,
  SkillsBlogPostTagsId = 345,
  SkillsBlogPostTagsLevel = 346,
  SkillsBlogPostTagsName = 347,
  SkillsBlogPostTagsNodeLocale = 348,
  SkillsBlogPostTagsOss = 349,
  SkillsBlogPostTagsProject = 350,
  SkillsBlogPostTagsSkillGrpup = 351,
  SkillsBlogPostTagsSkillMap = 352,
  SkillsBlogPostTagsSpaceId = 353,
  SkillsBlogPostTagsUpdatedAt = 354,
  SkillsBlogPostThumbnailChildren = 355,
  SkillsBlogPostThumbnailContentfulId = 356,
  SkillsBlogPostThumbnailCreatedAt = 357,
  SkillsBlogPostThumbnailDescription = 358,
  SkillsBlogPostThumbnailFilename = 359,
  SkillsBlogPostThumbnailFilesize = 360,
  SkillsBlogPostThumbnailGatsbyImage = 361,
  SkillsBlogPostThumbnailGatsbyImageData = 362,
  SkillsBlogPostThumbnailHeight = 363,
  SkillsBlogPostThumbnailId = 364,
  SkillsBlogPostThumbnailMimeType = 365,
  SkillsBlogPostThumbnailNodeLocale = 366,
  SkillsBlogPostThumbnailPlaceholderUrl = 367,
  SkillsBlogPostThumbnailPublicUrl = 368,
  SkillsBlogPostThumbnailSize = 369,
  SkillsBlogPostThumbnailSpaceId = 370,
  SkillsBlogPostThumbnailTitle = 371,
  SkillsBlogPostThumbnailUpdatedAt = 372,
  SkillsBlogPostThumbnailUrl = 373,
  SkillsBlogPostThumbnailWidth = 374,
  SkillsBlogPostTitle = 375,
  SkillsBlogPostUpdated = 376,
  SkillsBlogPostUpdatedAt = 377,
  SkillsChildren = 378,
  SkillsChildrenChildren = 379,
  SkillsChildrenChildrenChildren = 380,
  SkillsChildrenChildrenId = 381,
  SkillsChildrenId = 382,
  SkillsChildrenInternalContent = 383,
  SkillsChildrenInternalContentDigest = 384,
  SkillsChildrenInternalContentFilePath = 385,
  SkillsChildrenInternalDescription = 386,
  SkillsChildrenInternalFieldOwners = 387,
  SkillsChildrenInternalIgnoreType = 388,
  SkillsChildrenInternalMediaType = 389,
  SkillsChildrenInternalOwner = 390,
  SkillsChildrenInternalType = 391,
  SkillsChildrenParentChildren = 392,
  SkillsChildrenParentId = 393,
  SkillsContentfulId = 394,
  SkillsCreatedAt = 395,
  SkillsId = 396,
  SkillsInternalContent = 397,
  SkillsInternalContentDigest = 398,
  SkillsInternalContentFilePath = 399,
  SkillsInternalDescription = 400,
  SkillsInternalFieldOwners = 401,
  SkillsInternalIgnoreType = 402,
  SkillsInternalMediaType = 403,
  SkillsInternalOwner = 404,
  SkillsInternalType = 405,
  SkillsLevel = 406,
  SkillsName = 407,
  SkillsNodeLocale = 408,
  SkillsOss = 409,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 410,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 411,
  SkillsOssChildContentfulOssDetailTextNodeId = 412,
  SkillsOssChildren = 413,
  SkillsOssChildrenContentfulOssDetailTextNode = 414,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 415,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 416,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 417,
  SkillsOssChildrenChildren = 418,
  SkillsOssChildrenId = 419,
  SkillsOssContentfulId = 420,
  SkillsOssCreatedAt = 421,
  SkillsOssDetailChildren = 422,
  SkillsOssDetailDetail = 423,
  SkillsOssDetailId = 424,
  SkillsOssHref = 425,
  SkillsOssIconChildren = 426,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 427,
  SkillsOssIconContact = 428,
  SkillsOssIconContentfulId = 429,
  SkillsOssIconCreatedAt = 430,
  SkillsOssIconHistory = 431,
  SkillsOssIconId = 432,
  SkillsOssIconName = 433,
  SkillsOssIconNodeLocale = 434,
  SkillsOssIconOss = 435,
  SkillsOssIconProject = 436,
  SkillsOssIconSpaceId = 437,
  SkillsOssIconUpdatedAt = 438,
  SkillsOssIconWhatICanDo = 439,
  SkillsOssId = 440,
  SkillsOssImageChildren = 441,
  SkillsOssImageContentfulId = 442,
  SkillsOssImageCreatedAt = 443,
  SkillsOssImageDescription = 444,
  SkillsOssImageFilename = 445,
  SkillsOssImageFilesize = 446,
  SkillsOssImageGatsbyImage = 447,
  SkillsOssImageGatsbyImageData = 448,
  SkillsOssImageHeight = 449,
  SkillsOssImageId = 450,
  SkillsOssImageMimeType = 451,
  SkillsOssImageNodeLocale = 452,
  SkillsOssImagePlaceholderUrl = 453,
  SkillsOssImagePublicUrl = 454,
  SkillsOssImageSize = 455,
  SkillsOssImageSpaceId = 456,
  SkillsOssImageTitle = 457,
  SkillsOssImageUpdatedAt = 458,
  SkillsOssImageUrl = 459,
  SkillsOssImageWidth = 460,
  SkillsOssInternalContent = 461,
  SkillsOssInternalContentDigest = 462,
  SkillsOssInternalContentFilePath = 463,
  SkillsOssInternalDescription = 464,
  SkillsOssInternalFieldOwners = 465,
  SkillsOssInternalIgnoreType = 466,
  SkillsOssInternalMediaType = 467,
  SkillsOssInternalOwner = 468,
  SkillsOssInternalType = 469,
  SkillsOssName = 470,
  SkillsOssNodeLocale = 471,
  SkillsOssParentChildren = 472,
  SkillsOssParentId = 473,
  SkillsOssSpaceId = 474,
  SkillsOssStartDate = 475,
  SkillsOssSubName = 476,
  SkillsOssSysRevision = 477,
  SkillsOssSysType = 478,
  SkillsOssTags = 479,
  SkillsOssTagsBlogPost = 480,
  SkillsOssTagsChildren = 481,
  SkillsOssTagsContentfulId = 482,
  SkillsOssTagsCreatedAt = 483,
  SkillsOssTagsId = 484,
  SkillsOssTagsLevel = 485,
  SkillsOssTagsName = 486,
  SkillsOssTagsNodeLocale = 487,
  SkillsOssTagsOss = 488,
  SkillsOssTagsProject = 489,
  SkillsOssTagsSkillGrpup = 490,
  SkillsOssTagsSkillMap = 491,
  SkillsOssTagsSpaceId = 492,
  SkillsOssTagsUpdatedAt = 493,
  SkillsOssUpdatedAt = 494,
  SkillsParentChildren = 495,
  SkillsParentChildrenChildren = 496,
  SkillsParentChildrenId = 497,
  SkillsParentId = 498,
  SkillsParentInternalContent = 499,
  SkillsParentInternalContentDigest = 500,
  SkillsParentInternalContentFilePath = 501,
  SkillsParentInternalDescription = 502,
  SkillsParentInternalFieldOwners = 503,
  SkillsParentInternalIgnoreType = 504,
  SkillsParentInternalMediaType = 505,
  SkillsParentInternalOwner = 506,
  SkillsParentInternalType = 507,
  SkillsParentParentChildren = 508,
  SkillsParentParentId = 509,
  SkillsProject = 510,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 511,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 512,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 513,
  SkillsProjectChildren = 514,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 515,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 516,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 517,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 518,
  SkillsProjectChildrenChildren = 519,
  SkillsProjectChildrenId = 520,
  SkillsProjectContentfulId = 521,
  SkillsProjectCreatedAt = 522,
  SkillsProjectDetailChildren = 523,
  SkillsProjectDetailDetail = 524,
  SkillsProjectDetailId = 525,
  SkillsProjectEndDate = 526,
  SkillsProjectIconChildren = 527,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 528,
  SkillsProjectIconContact = 529,
  SkillsProjectIconContentfulId = 530,
  SkillsProjectIconCreatedAt = 531,
  SkillsProjectIconHistory = 532,
  SkillsProjectIconId = 533,
  SkillsProjectIconName = 534,
  SkillsProjectIconNodeLocale = 535,
  SkillsProjectIconOss = 536,
  SkillsProjectIconProject = 537,
  SkillsProjectIconSpaceId = 538,
  SkillsProjectIconUpdatedAt = 539,
  SkillsProjectIconWhatICanDo = 540,
  SkillsProjectId = 541,
  SkillsProjectInternalContent = 542,
  SkillsProjectInternalContentDigest = 543,
  SkillsProjectInternalContentFilePath = 544,
  SkillsProjectInternalDescription = 545,
  SkillsProjectInternalFieldOwners = 546,
  SkillsProjectInternalIgnoreType = 547,
  SkillsProjectInternalMediaType = 548,
  SkillsProjectInternalOwner = 549,
  SkillsProjectInternalType = 550,
  SkillsProjectName = 551,
  SkillsProjectNodeLocale = 552,
  SkillsProjectParentChildren = 553,
  SkillsProjectParentId = 554,
  SkillsProjectSpaceId = 555,
  SkillsProjectStartDate = 556,
  SkillsProjectSubName = 557,
  SkillsProjectSysRevision = 558,
  SkillsProjectSysType = 559,
  SkillsProjectTags = 560,
  SkillsProjectTagsBlogPost = 561,
  SkillsProjectTagsChildren = 562,
  SkillsProjectTagsContentfulId = 563,
  SkillsProjectTagsCreatedAt = 564,
  SkillsProjectTagsId = 565,
  SkillsProjectTagsLevel = 566,
  SkillsProjectTagsName = 567,
  SkillsProjectTagsNodeLocale = 568,
  SkillsProjectTagsOss = 569,
  SkillsProjectTagsProject = 570,
  SkillsProjectTagsSkillGrpup = 571,
  SkillsProjectTagsSkillMap = 572,
  SkillsProjectTagsSpaceId = 573,
  SkillsProjectTagsUpdatedAt = 574,
  SkillsProjectUpdatedAt = 575,
  SkillsSkillGrpup = 576,
  SkillsSkillGrpupChildren = 577,
  SkillsSkillGrpupChildrenChildren = 578,
  SkillsSkillGrpupChildrenId = 579,
  SkillsSkillGrpupContentfulId = 580,
  SkillsSkillGrpupCreatedAt = 581,
  SkillsSkillGrpupId = 582,
  SkillsSkillGrpupInternalContent = 583,
  SkillsSkillGrpupInternalContentDigest = 584,
  SkillsSkillGrpupInternalContentFilePath = 585,
  SkillsSkillGrpupInternalDescription = 586,
  SkillsSkillGrpupInternalFieldOwners = 587,
  SkillsSkillGrpupInternalIgnoreType = 588,
  SkillsSkillGrpupInternalMediaType = 589,
  SkillsSkillGrpupInternalOwner = 590,
  SkillsSkillGrpupInternalType = 591,
  SkillsSkillGrpupName = 592,
  SkillsSkillGrpupNodeLocale = 593,
  SkillsSkillGrpupParentChildren = 594,
  SkillsSkillGrpupParentId = 595,
  SkillsSkillGrpupSkillMap = 596,
  SkillsSkillGrpupSkillMapChildren = 597,
  SkillsSkillGrpupSkillMapContentfulId = 598,
  SkillsSkillGrpupSkillMapCreatedAt = 599,
  SkillsSkillGrpupSkillMapExpanded = 600,
  SkillsSkillGrpupSkillMapId = 601,
  SkillsSkillGrpupSkillMapName = 602,
  SkillsSkillGrpupSkillMapNodeLocale = 603,
  SkillsSkillGrpupSkillMapSkillGroups = 604,
  SkillsSkillGrpupSkillMapSkills = 605,
  SkillsSkillGrpupSkillMapSortKey = 606,
  SkillsSkillGrpupSkillMapSpaceId = 607,
  SkillsSkillGrpupSkillMapUpdatedAt = 608,
  SkillsSkillGrpupSkills = 609,
  SkillsSkillGrpupSkillsBlogPost = 610,
  SkillsSkillGrpupSkillsChildren = 611,
  SkillsSkillGrpupSkillsContentfulId = 612,
  SkillsSkillGrpupSkillsCreatedAt = 613,
  SkillsSkillGrpupSkillsId = 614,
  SkillsSkillGrpupSkillsLevel = 615,
  SkillsSkillGrpupSkillsName = 616,
  SkillsSkillGrpupSkillsNodeLocale = 617,
  SkillsSkillGrpupSkillsOss = 618,
  SkillsSkillGrpupSkillsProject = 619,
  SkillsSkillGrpupSkillsSkillGrpup = 620,
  SkillsSkillGrpupSkillsSkillMap = 621,
  SkillsSkillGrpupSkillsSpaceId = 622,
  SkillsSkillGrpupSkillsUpdatedAt = 623,
  SkillsSkillGrpupSpaceId = 624,
  SkillsSkillGrpupSysRevision = 625,
  SkillsSkillGrpupSysType = 626,
  SkillsSkillGrpupUpdatedAt = 627,
  SkillsSkillMap = 628,
  SkillsSkillMapChildren = 629,
  SkillsSkillMapChildrenChildren = 630,
  SkillsSkillMapChildrenId = 631,
  SkillsSkillMapContentfulId = 632,
  SkillsSkillMapCreatedAt = 633,
  SkillsSkillMapExpanded = 634,
  SkillsSkillMapId = 635,
  SkillsSkillMapInternalContent = 636,
  SkillsSkillMapInternalContentDigest = 637,
  SkillsSkillMapInternalContentFilePath = 638,
  SkillsSkillMapInternalDescription = 639,
  SkillsSkillMapInternalFieldOwners = 640,
  SkillsSkillMapInternalIgnoreType = 641,
  SkillsSkillMapInternalMediaType = 642,
  SkillsSkillMapInternalOwner = 643,
  SkillsSkillMapInternalType = 644,
  SkillsSkillMapName = 645,
  SkillsSkillMapNodeLocale = 646,
  SkillsSkillMapParentChildren = 647,
  SkillsSkillMapParentId = 648,
  SkillsSkillMapSkillGroups = 649,
  SkillsSkillMapSkillGroupsChildren = 650,
  SkillsSkillMapSkillGroupsContentfulId = 651,
  SkillsSkillMapSkillGroupsCreatedAt = 652,
  SkillsSkillMapSkillGroupsId = 653,
  SkillsSkillMapSkillGroupsName = 654,
  SkillsSkillMapSkillGroupsNodeLocale = 655,
  SkillsSkillMapSkillGroupsSkillMap = 656,
  SkillsSkillMapSkillGroupsSkills = 657,
  SkillsSkillMapSkillGroupsSpaceId = 658,
  SkillsSkillMapSkillGroupsUpdatedAt = 659,
  SkillsSkillMapSkills = 660,
  SkillsSkillMapSkillsBlogPost = 661,
  SkillsSkillMapSkillsChildren = 662,
  SkillsSkillMapSkillsContentfulId = 663,
  SkillsSkillMapSkillsCreatedAt = 664,
  SkillsSkillMapSkillsId = 665,
  SkillsSkillMapSkillsLevel = 666,
  SkillsSkillMapSkillsName = 667,
  SkillsSkillMapSkillsNodeLocale = 668,
  SkillsSkillMapSkillsOss = 669,
  SkillsSkillMapSkillsProject = 670,
  SkillsSkillMapSkillsSkillGrpup = 671,
  SkillsSkillMapSkillsSkillMap = 672,
  SkillsSkillMapSkillsSpaceId = 673,
  SkillsSkillMapSkillsUpdatedAt = 674,
  SkillsSkillMapSortKey = 675,
  SkillsSkillMapSpaceId = 676,
  SkillsSkillMapSysRevision = 677,
  SkillsSkillMapSysType = 678,
  SkillsSkillMapUpdatedAt = 679,
  SkillsSpaceId = 680,
  SkillsSysRevision = 681,
  SkillsSysType = 682,
  SkillsUpdatedAt = 683,
  SortKey = 684,
  SpaceId = 685,
  SysContentTypeSysId = 686,
  SysContentTypeSysLinkType = 687,
  SysContentTypeSysType = 688,
  SysRevision = 689,
  SysType = 690,
  UpdatedAt = 691
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
  BlogPostCategoryBlogPost = 1,
  BlogPostCategoryBlogPostChildren = 2,
  BlogPostCategoryBlogPostChildrenContentfulBlogPostContentTextNode = 3,
  BlogPostCategoryBlogPostContentfulId = 4,
  BlogPostCategoryBlogPostCreated = 5,
  BlogPostCategoryBlogPostCreatedAt = 6,
  BlogPostCategoryBlogPostExcerpt = 7,
  BlogPostCategoryBlogPostGatsbyPath = 8,
  BlogPostCategoryBlogPostId = 9,
  BlogPostCategoryBlogPostNodeLocale = 10,
  BlogPostCategoryBlogPostSlug = 11,
  BlogPostCategoryBlogPostSpaceId = 12,
  BlogPostCategoryBlogPostTags = 13,
  BlogPostCategoryBlogPostTitle = 14,
  BlogPostCategoryBlogPostUpdated = 15,
  BlogPostCategoryBlogPostUpdatedAt = 16,
  BlogPostCategoryChildren = 17,
  BlogPostCategoryChildrenChildren = 18,
  BlogPostCategoryChildrenId = 19,
  BlogPostCategoryContentfulId = 20,
  BlogPostCategoryCreatedAt = 21,
  BlogPostCategoryId = 22,
  BlogPostCategoryInternalContent = 23,
  BlogPostCategoryInternalContentDigest = 24,
  BlogPostCategoryInternalContentFilePath = 25,
  BlogPostCategoryInternalDescription = 26,
  BlogPostCategoryInternalFieldOwners = 27,
  BlogPostCategoryInternalIgnoreType = 28,
  BlogPostCategoryInternalMediaType = 29,
  BlogPostCategoryInternalOwner = 30,
  BlogPostCategoryInternalType = 31,
  BlogPostCategoryName = 32,
  BlogPostCategoryNodeLocale = 33,
  BlogPostCategoryParentChildren = 34,
  BlogPostCategoryParentId = 35,
  BlogPostCategorySortKey = 36,
  BlogPostCategorySpaceId = 37,
  BlogPostCategorySysRevision = 38,
  BlogPostCategorySysType = 39,
  BlogPostCategoryUpdatedAt = 40,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 41,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 42,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 43,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 44,
  BlogPostChildContentfulBlogPostContentTextNodeId = 45,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 46,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 47,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentFilePath = 48,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 49,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 50,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 51,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 52,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 53,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 54,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 55,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 56,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 57,
  BlogPostChildren = 58,
  BlogPostChildrenContentfulBlogPostContentTextNode = 59,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 60,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 61,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 62,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 63,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 64,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 65,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 66,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 67,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 68,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 69,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 70,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 71,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 72,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 73,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 74,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 75,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 76,
  BlogPostChildrenChildren = 77,
  BlogPostChildrenChildrenChildren = 78,
  BlogPostChildrenChildrenId = 79,
  BlogPostChildrenId = 80,
  BlogPostChildrenInternalContent = 81,
  BlogPostChildrenInternalContentDigest = 82,
  BlogPostChildrenInternalContentFilePath = 83,
  BlogPostChildrenInternalDescription = 84,
  BlogPostChildrenInternalFieldOwners = 85,
  BlogPostChildrenInternalIgnoreType = 86,
  BlogPostChildrenInternalMediaType = 87,
  BlogPostChildrenInternalOwner = 88,
  BlogPostChildrenInternalType = 89,
  BlogPostChildrenParentChildren = 90,
  BlogPostChildrenParentId = 91,
  BlogPostContentChildren = 92,
  BlogPostContentChildrenChildren = 93,
  BlogPostContentChildrenId = 94,
  BlogPostContentContent = 95,
  BlogPostContentId = 96,
  BlogPostContentInternalContent = 97,
  BlogPostContentInternalContentDigest = 98,
  BlogPostContentInternalContentFilePath = 99,
  BlogPostContentInternalDescription = 100,
  BlogPostContentInternalFieldOwners = 101,
  BlogPostContentInternalIgnoreType = 102,
  BlogPostContentInternalMediaType = 103,
  BlogPostContentInternalOwner = 104,
  BlogPostContentInternalType = 105,
  BlogPostContentParentChildren = 106,
  BlogPostContentParentId = 107,
  BlogPostContentSysType = 108,
  BlogPostContentfulId = 109,
  BlogPostCreated = 110,
  BlogPostCreatedAt = 111,
  BlogPostExcerpt = 112,
  BlogPostGatsbyPath = 113,
  BlogPostId = 114,
  BlogPostInternalContent = 115,
  BlogPostInternalContentDigest = 116,
  BlogPostInternalContentFilePath = 117,
  BlogPostInternalDescription = 118,
  BlogPostInternalFieldOwners = 119,
  BlogPostInternalIgnoreType = 120,
  BlogPostInternalMediaType = 121,
  BlogPostInternalOwner = 122,
  BlogPostInternalType = 123,
  BlogPostNodeLocale = 124,
  BlogPostParentChildren = 125,
  BlogPostParentChildrenChildren = 126,
  BlogPostParentChildrenId = 127,
  BlogPostParentId = 128,
  BlogPostParentInternalContent = 129,
  BlogPostParentInternalContentDigest = 130,
  BlogPostParentInternalContentFilePath = 131,
  BlogPostParentInternalDescription = 132,
  BlogPostParentInternalFieldOwners = 133,
  BlogPostParentInternalIgnoreType = 134,
  BlogPostParentInternalMediaType = 135,
  BlogPostParentInternalOwner = 136,
  BlogPostParentInternalType = 137,
  BlogPostParentParentChildren = 138,
  BlogPostParentParentId = 139,
  BlogPostSlug = 140,
  BlogPostSpaceId = 141,
  BlogPostSysRevision = 142,
  BlogPostSysType = 143,
  BlogPostTags = 144,
  BlogPostTagsBlogPost = 145,
  BlogPostTagsBlogPostChildren = 146,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 147,
  BlogPostTagsBlogPostContentfulId = 148,
  BlogPostTagsBlogPostCreated = 149,
  BlogPostTagsBlogPostCreatedAt = 150,
  BlogPostTagsBlogPostExcerpt = 151,
  BlogPostTagsBlogPostGatsbyPath = 152,
  BlogPostTagsBlogPostId = 153,
  BlogPostTagsBlogPostNodeLocale = 154,
  BlogPostTagsBlogPostSlug = 155,
  BlogPostTagsBlogPostSpaceId = 156,
  BlogPostTagsBlogPostTags = 157,
  BlogPostTagsBlogPostTitle = 158,
  BlogPostTagsBlogPostUpdated = 159,
  BlogPostTagsBlogPostUpdatedAt = 160,
  BlogPostTagsChildren = 161,
  BlogPostTagsChildrenChildren = 162,
  BlogPostTagsChildrenId = 163,
  BlogPostTagsContentfulId = 164,
  BlogPostTagsCreatedAt = 165,
  BlogPostTagsId = 166,
  BlogPostTagsInternalContent = 167,
  BlogPostTagsInternalContentDigest = 168,
  BlogPostTagsInternalContentFilePath = 169,
  BlogPostTagsInternalDescription = 170,
  BlogPostTagsInternalFieldOwners = 171,
  BlogPostTagsInternalIgnoreType = 172,
  BlogPostTagsInternalMediaType = 173,
  BlogPostTagsInternalOwner = 174,
  BlogPostTagsInternalType = 175,
  BlogPostTagsLevel = 176,
  BlogPostTagsName = 177,
  BlogPostTagsNodeLocale = 178,
  BlogPostTagsOss = 179,
  BlogPostTagsOssChildren = 180,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 181,
  BlogPostTagsOssContentfulId = 182,
  BlogPostTagsOssCreatedAt = 183,
  BlogPostTagsOssHref = 184,
  BlogPostTagsOssId = 185,
  BlogPostTagsOssName = 186,
  BlogPostTagsOssNodeLocale = 187,
  BlogPostTagsOssSpaceId = 188,
  BlogPostTagsOssStartDate = 189,
  BlogPostTagsOssSubName = 190,
  BlogPostTagsOssTags = 191,
  BlogPostTagsOssUpdatedAt = 192,
  BlogPostTagsParentChildren = 193,
  BlogPostTagsParentId = 194,
  BlogPostTagsProject = 195,
  BlogPostTagsProjectChildren = 196,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 197,
  BlogPostTagsProjectContentfulId = 198,
  BlogPostTagsProjectCreatedAt = 199,
  BlogPostTagsProjectEndDate = 200,
  BlogPostTagsProjectId = 201,
  BlogPostTagsProjectName = 202,
  BlogPostTagsProjectNodeLocale = 203,
  BlogPostTagsProjectSpaceId = 204,
  BlogPostTagsProjectStartDate = 205,
  BlogPostTagsProjectSubName = 206,
  BlogPostTagsProjectTags = 207,
  BlogPostTagsProjectUpdatedAt = 208,
  BlogPostTagsSkillGrpup = 209,
  BlogPostTagsSkillGrpupChildren = 210,
  BlogPostTagsSkillGrpupContentfulId = 211,
  BlogPostTagsSkillGrpupCreatedAt = 212,
  BlogPostTagsSkillGrpupId = 213,
  BlogPostTagsSkillGrpupName = 214,
  BlogPostTagsSkillGrpupNodeLocale = 215,
  BlogPostTagsSkillGrpupSkillMap = 216,
  BlogPostTagsSkillGrpupSkills = 217,
  BlogPostTagsSkillGrpupSpaceId = 218,
  BlogPostTagsSkillGrpupUpdatedAt = 219,
  BlogPostTagsSkillMap = 220,
  BlogPostTagsSkillMapChildren = 221,
  BlogPostTagsSkillMapContentfulId = 222,
  BlogPostTagsSkillMapCreatedAt = 223,
  BlogPostTagsSkillMapExpanded = 224,
  BlogPostTagsSkillMapId = 225,
  BlogPostTagsSkillMapName = 226,
  BlogPostTagsSkillMapNodeLocale = 227,
  BlogPostTagsSkillMapSkillGroups = 228,
  BlogPostTagsSkillMapSkills = 229,
  BlogPostTagsSkillMapSortKey = 230,
  BlogPostTagsSkillMapSpaceId = 231,
  BlogPostTagsSkillMapUpdatedAt = 232,
  BlogPostTagsSpaceId = 233,
  BlogPostTagsSysRevision = 234,
  BlogPostTagsSysType = 235,
  BlogPostTagsUpdatedAt = 236,
  BlogPostThumbnailChildren = 237,
  BlogPostThumbnailChildrenChildren = 238,
  BlogPostThumbnailChildrenId = 239,
  BlogPostThumbnailContentfulId = 240,
  BlogPostThumbnailCreatedAt = 241,
  BlogPostThumbnailDescription = 242,
  BlogPostThumbnailFileContentType = 243,
  BlogPostThumbnailFileFileName = 244,
  BlogPostThumbnailFileUrl = 245,
  BlogPostThumbnailFilename = 246,
  BlogPostThumbnailFilesize = 247,
  BlogPostThumbnailGatsbyImage = 248,
  BlogPostThumbnailGatsbyImageData = 249,
  BlogPostThumbnailHeight = 250,
  BlogPostThumbnailId = 251,
  BlogPostThumbnailInternalContent = 252,
  BlogPostThumbnailInternalContentDigest = 253,
  BlogPostThumbnailInternalContentFilePath = 254,
  BlogPostThumbnailInternalDescription = 255,
  BlogPostThumbnailInternalFieldOwners = 256,
  BlogPostThumbnailInternalIgnoreType = 257,
  BlogPostThumbnailInternalMediaType = 258,
  BlogPostThumbnailInternalOwner = 259,
  BlogPostThumbnailInternalType = 260,
  BlogPostThumbnailMimeType = 261,
  BlogPostThumbnailNodeLocale = 262,
  BlogPostThumbnailParentChildren = 263,
  BlogPostThumbnailParentId = 264,
  BlogPostThumbnailPlaceholderUrl = 265,
  BlogPostThumbnailPublicUrl = 266,
  BlogPostThumbnailResizeHeight = 267,
  BlogPostThumbnailResizeSrc = 268,
  BlogPostThumbnailResizeWidth = 269,
  BlogPostThumbnailSize = 270,
  BlogPostThumbnailSpaceId = 271,
  BlogPostThumbnailSysRevision = 272,
  BlogPostThumbnailSysType = 273,
  BlogPostThumbnailTitle = 274,
  BlogPostThumbnailUpdatedAt = 275,
  BlogPostThumbnailUrl = 276,
  BlogPostThumbnailWidth = 277,
  BlogPostTitle = 278,
  BlogPostUpdated = 279,
  BlogPostUpdatedAt = 280,
  Children = 281,
  ChildrenChildren = 282,
  ChildrenChildrenChildren = 283,
  ChildrenChildrenChildrenChildren = 284,
  ChildrenChildrenChildrenId = 285,
  ChildrenChildrenId = 286,
  ChildrenChildrenInternalContent = 287,
  ChildrenChildrenInternalContentDigest = 288,
  ChildrenChildrenInternalContentFilePath = 289,
  ChildrenChildrenInternalDescription = 290,
  ChildrenChildrenInternalFieldOwners = 291,
  ChildrenChildrenInternalIgnoreType = 292,
  ChildrenChildrenInternalMediaType = 293,
  ChildrenChildrenInternalOwner = 294,
  ChildrenChildrenInternalType = 295,
  ChildrenChildrenParentChildren = 296,
  ChildrenChildrenParentId = 297,
  ChildrenId = 298,
  ChildrenInternalContent = 299,
  ChildrenInternalContentDigest = 300,
  ChildrenInternalContentFilePath = 301,
  ChildrenInternalDescription = 302,
  ChildrenInternalFieldOwners = 303,
  ChildrenInternalIgnoreType = 304,
  ChildrenInternalMediaType = 305,
  ChildrenInternalOwner = 306,
  ChildrenInternalType = 307,
  ChildrenParentChildren = 308,
  ChildrenParentChildrenChildren = 309,
  ChildrenParentChildrenId = 310,
  ChildrenParentId = 311,
  ChildrenParentInternalContent = 312,
  ChildrenParentInternalContentDigest = 313,
  ChildrenParentInternalContentFilePath = 314,
  ChildrenParentInternalDescription = 315,
  ChildrenParentInternalFieldOwners = 316,
  ChildrenParentInternalIgnoreType = 317,
  ChildrenParentInternalMediaType = 318,
  ChildrenParentInternalOwner = 319,
  ChildrenParentInternalType = 320,
  ChildrenParentParentChildren = 321,
  ChildrenParentParentId = 322,
  ContentfulId = 323,
  CreatedAt = 324,
  Id = 325,
  InternalContent = 326,
  InternalContentDigest = 327,
  InternalContentFilePath = 328,
  InternalDescription = 329,
  InternalFieldOwners = 330,
  InternalIgnoreType = 331,
  InternalMediaType = 332,
  InternalOwner = 333,
  InternalType = 334,
  Level = 335,
  Name = 336,
  NodeLocale = 337,
  Oss = 338,
  OssChildContentfulOssDetailTextNodeChildren = 339,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 340,
  OssChildContentfulOssDetailTextNodeChildrenId = 341,
  OssChildContentfulOssDetailTextNodeDetail = 342,
  OssChildContentfulOssDetailTextNodeId = 343,
  OssChildContentfulOssDetailTextNodeInternalContent = 344,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 345,
  OssChildContentfulOssDetailTextNodeInternalContentFilePath = 346,
  OssChildContentfulOssDetailTextNodeInternalDescription = 347,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 348,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 349,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 350,
  OssChildContentfulOssDetailTextNodeInternalOwner = 351,
  OssChildContentfulOssDetailTextNodeInternalType = 352,
  OssChildContentfulOssDetailTextNodeParentChildren = 353,
  OssChildContentfulOssDetailTextNodeParentId = 354,
  OssChildContentfulOssDetailTextNodeSysType = 355,
  OssChildren = 356,
  OssChildrenContentfulOssDetailTextNode = 357,
  OssChildrenContentfulOssDetailTextNodeChildren = 358,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 359,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 360,
  OssChildrenContentfulOssDetailTextNodeDetail = 361,
  OssChildrenContentfulOssDetailTextNodeId = 362,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 363,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 364,
  OssChildrenContentfulOssDetailTextNodeInternalContentFilePath = 365,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 366,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 367,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 368,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 369,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 370,
  OssChildrenContentfulOssDetailTextNodeInternalType = 371,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 372,
  OssChildrenContentfulOssDetailTextNodeParentId = 373,
  OssChildrenContentfulOssDetailTextNodeSysType = 374,
  OssChildrenChildren = 375,
  OssChildrenChildrenChildren = 376,
  OssChildrenChildrenId = 377,
  OssChildrenId = 378,
  OssChildrenInternalContent = 379,
  OssChildrenInternalContentDigest = 380,
  OssChildrenInternalContentFilePath = 381,
  OssChildrenInternalDescription = 382,
  OssChildrenInternalFieldOwners = 383,
  OssChildrenInternalIgnoreType = 384,
  OssChildrenInternalMediaType = 385,
  OssChildrenInternalOwner = 386,
  OssChildrenInternalType = 387,
  OssChildrenParentChildren = 388,
  OssChildrenParentId = 389,
  OssContentfulId = 390,
  OssCreatedAt = 391,
  OssDetailChildren = 392,
  OssDetailChildrenChildren = 393,
  OssDetailChildrenId = 394,
  OssDetailDetail = 395,
  OssDetailId = 396,
  OssDetailInternalContent = 397,
  OssDetailInternalContentDigest = 398,
  OssDetailInternalContentFilePath = 399,
  OssDetailInternalDescription = 400,
  OssDetailInternalFieldOwners = 401,
  OssDetailInternalIgnoreType = 402,
  OssDetailInternalMediaType = 403,
  OssDetailInternalOwner = 404,
  OssDetailInternalType = 405,
  OssDetailParentChildren = 406,
  OssDetailParentId = 407,
  OssDetailSysType = 408,
  OssHref = 409,
  OssIconChildContentfulIconSvgTextNodeChildren = 410,
  OssIconChildContentfulIconSvgTextNodeId = 411,
  OssIconChildContentfulIconSvgTextNodeSvg = 412,
  OssIconChildren = 413,
  OssIconChildrenContentfulIconSvgTextNode = 414,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 415,
  OssIconChildrenContentfulIconSvgTextNodeId = 416,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 417,
  OssIconChildrenChildren = 418,
  OssIconChildrenId = 419,
  OssIconContact = 420,
  OssIconContactChildren = 421,
  OssIconContactContentfulId = 422,
  OssIconContactCreatedAt = 423,
  OssIconContactHref = 424,
  OssIconContactId = 425,
  OssIconContactName = 426,
  OssIconContactNodeLocale = 427,
  OssIconContactSortKey = 428,
  OssIconContactSpaceId = 429,
  OssIconContactSubName = 430,
  OssIconContactUpdatedAt = 431,
  OssIconContentfulId = 432,
  OssIconCreatedAt = 433,
  OssIconHistory = 434,
  OssIconHistoryChildren = 435,
  OssIconHistoryContentfulId = 436,
  OssIconHistoryCreatedAt = 437,
  OssIconHistoryDate = 438,
  OssIconHistoryId = 439,
  OssIconHistoryName = 440,
  OssIconHistoryNodeLocale = 441,
  OssIconHistorySpaceId = 442,
  OssIconHistorySubName = 443,
  OssIconHistoryUpdatedAt = 444,
  OssIconId = 445,
  OssIconInternalContent = 446,
  OssIconInternalContentDigest = 447,
  OssIconInternalContentFilePath = 448,
  OssIconInternalDescription = 449,
  OssIconInternalFieldOwners = 450,
  OssIconInternalIgnoreType = 451,
  OssIconInternalMediaType = 452,
  OssIconInternalOwner = 453,
  OssIconInternalType = 454,
  OssIconName = 455,
  OssIconNodeLocale = 456,
  OssIconOss = 457,
  OssIconOssChildren = 458,
  OssIconOssChildrenContentfulOssDetailTextNode = 459,
  OssIconOssContentfulId = 460,
  OssIconOssCreatedAt = 461,
  OssIconOssHref = 462,
  OssIconOssId = 463,
  OssIconOssName = 464,
  OssIconOssNodeLocale = 465,
  OssIconOssSpaceId = 466,
  OssIconOssStartDate = 467,
  OssIconOssSubName = 468,
  OssIconOssTags = 469,
  OssIconOssUpdatedAt = 470,
  OssIconParentChildren = 471,
  OssIconParentId = 472,
  OssIconProject = 473,
  OssIconProjectChildren = 474,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 475,
  OssIconProjectContentfulId = 476,
  OssIconProjectCreatedAt = 477,
  OssIconProjectEndDate = 478,
  OssIconProjectId = 479,
  OssIconProjectName = 480,
  OssIconProjectNodeLocale = 481,
  OssIconProjectSpaceId = 482,
  OssIconProjectStartDate = 483,
  OssIconProjectSubName = 484,
  OssIconProjectTags = 485,
  OssIconProjectUpdatedAt = 486,
  OssIconSpaceId = 487,
  OssIconSvgChildren = 488,
  OssIconSvgId = 489,
  OssIconSvgSvg = 490,
  OssIconSysRevision = 491,
  OssIconSysType = 492,
  OssIconUpdatedAt = 493,
  OssIconWhatICanDo = 494,
  OssIconWhatICanDoChildren = 495,
  OssIconWhatICanDoContentfulId = 496,
  OssIconWhatICanDoCreatedAt = 497,
  OssIconWhatICanDoId = 498,
  OssIconWhatICanDoName = 499,
  OssIconWhatICanDoNodeLocale = 500,
  OssIconWhatICanDoSortKey = 501,
  OssIconWhatICanDoSpaceId = 502,
  OssIconWhatICanDoSubName = 503,
  OssIconWhatICanDoUpdatedAt = 504,
  OssId = 505,
  OssImageChildren = 506,
  OssImageChildrenChildren = 507,
  OssImageChildrenId = 508,
  OssImageContentfulId = 509,
  OssImageCreatedAt = 510,
  OssImageDescription = 511,
  OssImageFileContentType = 512,
  OssImageFileFileName = 513,
  OssImageFileUrl = 514,
  OssImageFilename = 515,
  OssImageFilesize = 516,
  OssImageGatsbyImage = 517,
  OssImageGatsbyImageData = 518,
  OssImageHeight = 519,
  OssImageId = 520,
  OssImageInternalContent = 521,
  OssImageInternalContentDigest = 522,
  OssImageInternalContentFilePath = 523,
  OssImageInternalDescription = 524,
  OssImageInternalFieldOwners = 525,
  OssImageInternalIgnoreType = 526,
  OssImageInternalMediaType = 527,
  OssImageInternalOwner = 528,
  OssImageInternalType = 529,
  OssImageMimeType = 530,
  OssImageNodeLocale = 531,
  OssImageParentChildren = 532,
  OssImageParentId = 533,
  OssImagePlaceholderUrl = 534,
  OssImagePublicUrl = 535,
  OssImageResizeHeight = 536,
  OssImageResizeSrc = 537,
  OssImageResizeWidth = 538,
  OssImageSize = 539,
  OssImageSpaceId = 540,
  OssImageSysRevision = 541,
  OssImageSysType = 542,
  OssImageTitle = 543,
  OssImageUpdatedAt = 544,
  OssImageUrl = 545,
  OssImageWidth = 546,
  OssInternalContent = 547,
  OssInternalContentDigest = 548,
  OssInternalContentFilePath = 549,
  OssInternalDescription = 550,
  OssInternalFieldOwners = 551,
  OssInternalIgnoreType = 552,
  OssInternalMediaType = 553,
  OssInternalOwner = 554,
  OssInternalType = 555,
  OssName = 556,
  OssNodeLocale = 557,
  OssParentChildren = 558,
  OssParentChildrenChildren = 559,
  OssParentChildrenId = 560,
  OssParentId = 561,
  OssParentInternalContent = 562,
  OssParentInternalContentDigest = 563,
  OssParentInternalContentFilePath = 564,
  OssParentInternalDescription = 565,
  OssParentInternalFieldOwners = 566,
  OssParentInternalIgnoreType = 567,
  OssParentInternalMediaType = 568,
  OssParentInternalOwner = 569,
  OssParentInternalType = 570,
  OssParentParentChildren = 571,
  OssParentParentId = 572,
  OssSpaceId = 573,
  OssStartDate = 574,
  OssSubName = 575,
  OssSysRevision = 576,
  OssSysType = 577,
  OssTags = 578,
  OssTagsBlogPost = 579,
  OssTagsBlogPostChildren = 580,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 581,
  OssTagsBlogPostContentfulId = 582,
  OssTagsBlogPostCreated = 583,
  OssTagsBlogPostCreatedAt = 584,
  OssTagsBlogPostExcerpt = 585,
  OssTagsBlogPostGatsbyPath = 586,
  OssTagsBlogPostId = 587,
  OssTagsBlogPostNodeLocale = 588,
  OssTagsBlogPostSlug = 589,
  OssTagsBlogPostSpaceId = 590,
  OssTagsBlogPostTags = 591,
  OssTagsBlogPostTitle = 592,
  OssTagsBlogPostUpdated = 593,
  OssTagsBlogPostUpdatedAt = 594,
  OssTagsChildren = 595,
  OssTagsChildrenChildren = 596,
  OssTagsChildrenId = 597,
  OssTagsContentfulId = 598,
  OssTagsCreatedAt = 599,
  OssTagsId = 600,
  OssTagsInternalContent = 601,
  OssTagsInternalContentDigest = 602,
  OssTagsInternalContentFilePath = 603,
  OssTagsInternalDescription = 604,
  OssTagsInternalFieldOwners = 605,
  OssTagsInternalIgnoreType = 606,
  OssTagsInternalMediaType = 607,
  OssTagsInternalOwner = 608,
  OssTagsInternalType = 609,
  OssTagsLevel = 610,
  OssTagsName = 611,
  OssTagsNodeLocale = 612,
  OssTagsOss = 613,
  OssTagsOssChildren = 614,
  OssTagsOssChildrenContentfulOssDetailTextNode = 615,
  OssTagsOssContentfulId = 616,
  OssTagsOssCreatedAt = 617,
  OssTagsOssHref = 618,
  OssTagsOssId = 619,
  OssTagsOssName = 620,
  OssTagsOssNodeLocale = 621,
  OssTagsOssSpaceId = 622,
  OssTagsOssStartDate = 623,
  OssTagsOssSubName = 624,
  OssTagsOssTags = 625,
  OssTagsOssUpdatedAt = 626,
  OssTagsParentChildren = 627,
  OssTagsParentId = 628,
  OssTagsProject = 629,
  OssTagsProjectChildren = 630,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 631,
  OssTagsProjectContentfulId = 632,
  OssTagsProjectCreatedAt = 633,
  OssTagsProjectEndDate = 634,
  OssTagsProjectId = 635,
  OssTagsProjectName = 636,
  OssTagsProjectNodeLocale = 637,
  OssTagsProjectSpaceId = 638,
  OssTagsProjectStartDate = 639,
  OssTagsProjectSubName = 640,
  OssTagsProjectTags = 641,
  OssTagsProjectUpdatedAt = 642,
  OssTagsSkillGrpup = 643,
  OssTagsSkillGrpupChildren = 644,
  OssTagsSkillGrpupContentfulId = 645,
  OssTagsSkillGrpupCreatedAt = 646,
  OssTagsSkillGrpupId = 647,
  OssTagsSkillGrpupName = 648,
  OssTagsSkillGrpupNodeLocale = 649,
  OssTagsSkillGrpupSkillMap = 650,
  OssTagsSkillGrpupSkills = 651,
  OssTagsSkillGrpupSpaceId = 652,
  OssTagsSkillGrpupUpdatedAt = 653,
  OssTagsSkillMap = 654,
  OssTagsSkillMapChildren = 655,
  OssTagsSkillMapContentfulId = 656,
  OssTagsSkillMapCreatedAt = 657,
  OssTagsSkillMapExpanded = 658,
  OssTagsSkillMapId = 659,
  OssTagsSkillMapName = 660,
  OssTagsSkillMapNodeLocale = 661,
  OssTagsSkillMapSkillGroups = 662,
  OssTagsSkillMapSkills = 663,
  OssTagsSkillMapSortKey = 664,
  OssTagsSkillMapSpaceId = 665,
  OssTagsSkillMapUpdatedAt = 666,
  OssTagsSpaceId = 667,
  OssTagsSysRevision = 668,
  OssTagsSysType = 669,
  OssTagsUpdatedAt = 670,
  OssUpdatedAt = 671,
  ParentChildren = 672,
  ParentChildrenChildren = 673,
  ParentChildrenChildrenChildren = 674,
  ParentChildrenChildrenId = 675,
  ParentChildrenId = 676,
  ParentChildrenInternalContent = 677,
  ParentChildrenInternalContentDigest = 678,
  ParentChildrenInternalContentFilePath = 679,
  ParentChildrenInternalDescription = 680,
  ParentChildrenInternalFieldOwners = 681,
  ParentChildrenInternalIgnoreType = 682,
  ParentChildrenInternalMediaType = 683,
  ParentChildrenInternalOwner = 684,
  ParentChildrenInternalType = 685,
  ParentChildrenParentChildren = 686,
  ParentChildrenParentId = 687,
  ParentId = 688,
  ParentInternalContent = 689,
  ParentInternalContentDigest = 690,
  ParentInternalContentFilePath = 691,
  ParentInternalDescription = 692,
  ParentInternalFieldOwners = 693,
  ParentInternalIgnoreType = 694,
  ParentInternalMediaType = 695,
  ParentInternalOwner = 696,
  ParentInternalType = 697,
  ParentParentChildren = 698,
  ParentParentChildrenChildren = 699,
  ParentParentChildrenId = 700,
  ParentParentId = 701,
  ParentParentInternalContent = 702,
  ParentParentInternalContentDigest = 703,
  ParentParentInternalContentFilePath = 704,
  ParentParentInternalDescription = 705,
  ParentParentInternalFieldOwners = 706,
  ParentParentInternalIgnoreType = 707,
  ParentParentInternalMediaType = 708,
  ParentParentInternalOwner = 709,
  ParentParentInternalType = 710,
  ParentParentParentChildren = 711,
  ParentParentParentId = 712,
  Project = 713,
  ProjectChildContentfulProjectDetailTextNodeChildren = 714,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 715,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 716,
  ProjectChildContentfulProjectDetailTextNodeDetail = 717,
  ProjectChildContentfulProjectDetailTextNodeId = 718,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 719,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 720,
  ProjectChildContentfulProjectDetailTextNodeInternalContentFilePath = 721,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 722,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 723,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 724,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 725,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 726,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 727,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 728,
  ProjectChildContentfulProjectDetailTextNodeParentId = 729,
  ProjectChildContentfulProjectDetailTextNodeSysType = 730,
  ProjectChildren = 731,
  ProjectChildrenContentfulProjectDetailTextNode = 732,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 733,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 734,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 735,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 736,
  ProjectChildrenContentfulProjectDetailTextNodeId = 737,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 738,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 739,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentFilePath = 740,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 741,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 742,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 743,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 744,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 745,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 746,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 747,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 748,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 749,
  ProjectChildrenChildren = 750,
  ProjectChildrenChildrenChildren = 751,
  ProjectChildrenChildrenId = 752,
  ProjectChildrenId = 753,
  ProjectChildrenInternalContent = 754,
  ProjectChildrenInternalContentDigest = 755,
  ProjectChildrenInternalContentFilePath = 756,
  ProjectChildrenInternalDescription = 757,
  ProjectChildrenInternalFieldOwners = 758,
  ProjectChildrenInternalIgnoreType = 759,
  ProjectChildrenInternalMediaType = 760,
  ProjectChildrenInternalOwner = 761,
  ProjectChildrenInternalType = 762,
  ProjectChildrenParentChildren = 763,
  ProjectChildrenParentId = 764,
  ProjectContentfulId = 765,
  ProjectCreatedAt = 766,
  ProjectDetailChildren = 767,
  ProjectDetailChildrenChildren = 768,
  ProjectDetailChildrenId = 769,
  ProjectDetailDetail = 770,
  ProjectDetailId = 771,
  ProjectDetailInternalContent = 772,
  ProjectDetailInternalContentDigest = 773,
  ProjectDetailInternalContentFilePath = 774,
  ProjectDetailInternalDescription = 775,
  ProjectDetailInternalFieldOwners = 776,
  ProjectDetailInternalIgnoreType = 777,
  ProjectDetailInternalMediaType = 778,
  ProjectDetailInternalOwner = 779,
  ProjectDetailInternalType = 780,
  ProjectDetailParentChildren = 781,
  ProjectDetailParentId = 782,
  ProjectDetailSysType = 783,
  ProjectEndDate = 784,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 785,
  ProjectIconChildContentfulIconSvgTextNodeId = 786,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 787,
  ProjectIconChildren = 788,
  ProjectIconChildrenContentfulIconSvgTextNode = 789,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 790,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 791,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 792,
  ProjectIconChildrenChildren = 793,
  ProjectIconChildrenId = 794,
  ProjectIconContact = 795,
  ProjectIconContactChildren = 796,
  ProjectIconContactContentfulId = 797,
  ProjectIconContactCreatedAt = 798,
  ProjectIconContactHref = 799,
  ProjectIconContactId = 800,
  ProjectIconContactName = 801,
  ProjectIconContactNodeLocale = 802,
  ProjectIconContactSortKey = 803,
  ProjectIconContactSpaceId = 804,
  ProjectIconContactSubName = 805,
  ProjectIconContactUpdatedAt = 806,
  ProjectIconContentfulId = 807,
  ProjectIconCreatedAt = 808,
  ProjectIconHistory = 809,
  ProjectIconHistoryChildren = 810,
  ProjectIconHistoryContentfulId = 811,
  ProjectIconHistoryCreatedAt = 812,
  ProjectIconHistoryDate = 813,
  ProjectIconHistoryId = 814,
  ProjectIconHistoryName = 815,
  ProjectIconHistoryNodeLocale = 816,
  ProjectIconHistorySpaceId = 817,
  ProjectIconHistorySubName = 818,
  ProjectIconHistoryUpdatedAt = 819,
  ProjectIconId = 820,
  ProjectIconInternalContent = 821,
  ProjectIconInternalContentDigest = 822,
  ProjectIconInternalContentFilePath = 823,
  ProjectIconInternalDescription = 824,
  ProjectIconInternalFieldOwners = 825,
  ProjectIconInternalIgnoreType = 826,
  ProjectIconInternalMediaType = 827,
  ProjectIconInternalOwner = 828,
  ProjectIconInternalType = 829,
  ProjectIconName = 830,
  ProjectIconNodeLocale = 831,
  ProjectIconOss = 832,
  ProjectIconOssChildren = 833,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 834,
  ProjectIconOssContentfulId = 835,
  ProjectIconOssCreatedAt = 836,
  ProjectIconOssHref = 837,
  ProjectIconOssId = 838,
  ProjectIconOssName = 839,
  ProjectIconOssNodeLocale = 840,
  ProjectIconOssSpaceId = 841,
  ProjectIconOssStartDate = 842,
  ProjectIconOssSubName = 843,
  ProjectIconOssTags = 844,
  ProjectIconOssUpdatedAt = 845,
  ProjectIconParentChildren = 846,
  ProjectIconParentId = 847,
  ProjectIconProject = 848,
  ProjectIconProjectChildren = 849,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 850,
  ProjectIconProjectContentfulId = 851,
  ProjectIconProjectCreatedAt = 852,
  ProjectIconProjectEndDate = 853,
  ProjectIconProjectId = 854,
  ProjectIconProjectName = 855,
  ProjectIconProjectNodeLocale = 856,
  ProjectIconProjectSpaceId = 857,
  ProjectIconProjectStartDate = 858,
  ProjectIconProjectSubName = 859,
  ProjectIconProjectTags = 860,
  ProjectIconProjectUpdatedAt = 861,
  ProjectIconSpaceId = 862,
  ProjectIconSvgChildren = 863,
  ProjectIconSvgId = 864,
  ProjectIconSvgSvg = 865,
  ProjectIconSysRevision = 866,
  ProjectIconSysType = 867,
  ProjectIconUpdatedAt = 868,
  ProjectIconWhatICanDo = 869,
  ProjectIconWhatICanDoChildren = 870,
  ProjectIconWhatICanDoContentfulId = 871,
  ProjectIconWhatICanDoCreatedAt = 872,
  ProjectIconWhatICanDoId = 873,
  ProjectIconWhatICanDoName = 874,
  ProjectIconWhatICanDoNodeLocale = 875,
  ProjectIconWhatICanDoSortKey = 876,
  ProjectIconWhatICanDoSpaceId = 877,
  ProjectIconWhatICanDoSubName = 878,
  ProjectIconWhatICanDoUpdatedAt = 879,
  ProjectId = 880,
  ProjectInternalContent = 881,
  ProjectInternalContentDigest = 882,
  ProjectInternalContentFilePath = 883,
  ProjectInternalDescription = 884,
  ProjectInternalFieldOwners = 885,
  ProjectInternalIgnoreType = 886,
  ProjectInternalMediaType = 887,
  ProjectInternalOwner = 888,
  ProjectInternalType = 889,
  ProjectName = 890,
  ProjectNodeLocale = 891,
  ProjectParentChildren = 892,
  ProjectParentChildrenChildren = 893,
  ProjectParentChildrenId = 894,
  ProjectParentId = 895,
  ProjectParentInternalContent = 896,
  ProjectParentInternalContentDigest = 897,
  ProjectParentInternalContentFilePath = 898,
  ProjectParentInternalDescription = 899,
  ProjectParentInternalFieldOwners = 900,
  ProjectParentInternalIgnoreType = 901,
  ProjectParentInternalMediaType = 902,
  ProjectParentInternalOwner = 903,
  ProjectParentInternalType = 904,
  ProjectParentParentChildren = 905,
  ProjectParentParentId = 906,
  ProjectSpaceId = 907,
  ProjectStartDate = 908,
  ProjectSubName = 909,
  ProjectSysRevision = 910,
  ProjectSysType = 911,
  ProjectTags = 912,
  ProjectTagsBlogPost = 913,
  ProjectTagsBlogPostChildren = 914,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 915,
  ProjectTagsBlogPostContentfulId = 916,
  ProjectTagsBlogPostCreated = 917,
  ProjectTagsBlogPostCreatedAt = 918,
  ProjectTagsBlogPostExcerpt = 919,
  ProjectTagsBlogPostGatsbyPath = 920,
  ProjectTagsBlogPostId = 921,
  ProjectTagsBlogPostNodeLocale = 922,
  ProjectTagsBlogPostSlug = 923,
  ProjectTagsBlogPostSpaceId = 924,
  ProjectTagsBlogPostTags = 925,
  ProjectTagsBlogPostTitle = 926,
  ProjectTagsBlogPostUpdated = 927,
  ProjectTagsBlogPostUpdatedAt = 928,
  ProjectTagsChildren = 929,
  ProjectTagsChildrenChildren = 930,
  ProjectTagsChildrenId = 931,
  ProjectTagsContentfulId = 932,
  ProjectTagsCreatedAt = 933,
  ProjectTagsId = 934,
  ProjectTagsInternalContent = 935,
  ProjectTagsInternalContentDigest = 936,
  ProjectTagsInternalContentFilePath = 937,
  ProjectTagsInternalDescription = 938,
  ProjectTagsInternalFieldOwners = 939,
  ProjectTagsInternalIgnoreType = 940,
  ProjectTagsInternalMediaType = 941,
  ProjectTagsInternalOwner = 942,
  ProjectTagsInternalType = 943,
  ProjectTagsLevel = 944,
  ProjectTagsName = 945,
  ProjectTagsNodeLocale = 946,
  ProjectTagsOss = 947,
  ProjectTagsOssChildren = 948,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 949,
  ProjectTagsOssContentfulId = 950,
  ProjectTagsOssCreatedAt = 951,
  ProjectTagsOssHref = 952,
  ProjectTagsOssId = 953,
  ProjectTagsOssName = 954,
  ProjectTagsOssNodeLocale = 955,
  ProjectTagsOssSpaceId = 956,
  ProjectTagsOssStartDate = 957,
  ProjectTagsOssSubName = 958,
  ProjectTagsOssTags = 959,
  ProjectTagsOssUpdatedAt = 960,
  ProjectTagsParentChildren = 961,
  ProjectTagsParentId = 962,
  ProjectTagsProject = 963,
  ProjectTagsProjectChildren = 964,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 965,
  ProjectTagsProjectContentfulId = 966,
  ProjectTagsProjectCreatedAt = 967,
  ProjectTagsProjectEndDate = 968,
  ProjectTagsProjectId = 969,
  ProjectTagsProjectName = 970,
  ProjectTagsProjectNodeLocale = 971,
  ProjectTagsProjectSpaceId = 972,
  ProjectTagsProjectStartDate = 973,
  ProjectTagsProjectSubName = 974,
  ProjectTagsProjectTags = 975,
  ProjectTagsProjectUpdatedAt = 976,
  ProjectTagsSkillGrpup = 977,
  ProjectTagsSkillGrpupChildren = 978,
  ProjectTagsSkillGrpupContentfulId = 979,
  ProjectTagsSkillGrpupCreatedAt = 980,
  ProjectTagsSkillGrpupId = 981,
  ProjectTagsSkillGrpupName = 982,
  ProjectTagsSkillGrpupNodeLocale = 983,
  ProjectTagsSkillGrpupSkillMap = 984,
  ProjectTagsSkillGrpupSkills = 985,
  ProjectTagsSkillGrpupSpaceId = 986,
  ProjectTagsSkillGrpupUpdatedAt = 987,
  ProjectTagsSkillMap = 988,
  ProjectTagsSkillMapChildren = 989,
  ProjectTagsSkillMapContentfulId = 990,
  ProjectTagsSkillMapCreatedAt = 991,
  ProjectTagsSkillMapExpanded = 992,
  ProjectTagsSkillMapId = 993,
  ProjectTagsSkillMapName = 994,
  ProjectTagsSkillMapNodeLocale = 995,
  ProjectTagsSkillMapSkillGroups = 996,
  ProjectTagsSkillMapSkills = 997,
  ProjectTagsSkillMapSortKey = 998,
  ProjectTagsSkillMapSpaceId = 999,
  ProjectTagsSkillMapUpdatedAt = 1000,
  ProjectTagsSpaceId = 1001,
  ProjectTagsSysRevision = 1002,
  ProjectTagsSysType = 1003,
  ProjectTagsUpdatedAt = 1004,
  ProjectUpdatedAt = 1005,
  SkillGrpup = 1006,
  SkillGrpupChildren = 1007,
  SkillGrpupChildrenChildren = 1008,
  SkillGrpupChildrenChildrenChildren = 1009,
  SkillGrpupChildrenChildrenId = 1010,
  SkillGrpupChildrenId = 1011,
  SkillGrpupChildrenInternalContent = 1012,
  SkillGrpupChildrenInternalContentDigest = 1013,
  SkillGrpupChildrenInternalContentFilePath = 1014,
  SkillGrpupChildrenInternalDescription = 1015,
  SkillGrpupChildrenInternalFieldOwners = 1016,
  SkillGrpupChildrenInternalIgnoreType = 1017,
  SkillGrpupChildrenInternalMediaType = 1018,
  SkillGrpupChildrenInternalOwner = 1019,
  SkillGrpupChildrenInternalType = 1020,
  SkillGrpupChildrenParentChildren = 1021,
  SkillGrpupChildrenParentId = 1022,
  SkillGrpupContentfulId = 1023,
  SkillGrpupCreatedAt = 1024,
  SkillGrpupId = 1025,
  SkillGrpupInternalContent = 1026,
  SkillGrpupInternalContentDigest = 1027,
  SkillGrpupInternalContentFilePath = 1028,
  SkillGrpupInternalDescription = 1029,
  SkillGrpupInternalFieldOwners = 1030,
  SkillGrpupInternalIgnoreType = 1031,
  SkillGrpupInternalMediaType = 1032,
  SkillGrpupInternalOwner = 1033,
  SkillGrpupInternalType = 1034,
  SkillGrpupName = 1035,
  SkillGrpupNodeLocale = 1036,
  SkillGrpupParentChildren = 1037,
  SkillGrpupParentChildrenChildren = 1038,
  SkillGrpupParentChildrenId = 1039,
  SkillGrpupParentId = 1040,
  SkillGrpupParentInternalContent = 1041,
  SkillGrpupParentInternalContentDigest = 1042,
  SkillGrpupParentInternalContentFilePath = 1043,
  SkillGrpupParentInternalDescription = 1044,
  SkillGrpupParentInternalFieldOwners = 1045,
  SkillGrpupParentInternalIgnoreType = 1046,
  SkillGrpupParentInternalMediaType = 1047,
  SkillGrpupParentInternalOwner = 1048,
  SkillGrpupParentInternalType = 1049,
  SkillGrpupParentParentChildren = 1050,
  SkillGrpupParentParentId = 1051,
  SkillGrpupSkillMap = 1052,
  SkillGrpupSkillMapChildren = 1053,
  SkillGrpupSkillMapChildrenChildren = 1054,
  SkillGrpupSkillMapChildrenId = 1055,
  SkillGrpupSkillMapContentfulId = 1056,
  SkillGrpupSkillMapCreatedAt = 1057,
  SkillGrpupSkillMapExpanded = 1058,
  SkillGrpupSkillMapId = 1059,
  SkillGrpupSkillMapInternalContent = 1060,
  SkillGrpupSkillMapInternalContentDigest = 1061,
  SkillGrpupSkillMapInternalContentFilePath = 1062,
  SkillGrpupSkillMapInternalDescription = 1063,
  SkillGrpupSkillMapInternalFieldOwners = 1064,
  SkillGrpupSkillMapInternalIgnoreType = 1065,
  SkillGrpupSkillMapInternalMediaType = 1066,
  SkillGrpupSkillMapInternalOwner = 1067,
  SkillGrpupSkillMapInternalType = 1068,
  SkillGrpupSkillMapName = 1069,
  SkillGrpupSkillMapNodeLocale = 1070,
  SkillGrpupSkillMapParentChildren = 1071,
  SkillGrpupSkillMapParentId = 1072,
  SkillGrpupSkillMapSkillGroups = 1073,
  SkillGrpupSkillMapSkillGroupsChildren = 1074,
  SkillGrpupSkillMapSkillGroupsContentfulId = 1075,
  SkillGrpupSkillMapSkillGroupsCreatedAt = 1076,
  SkillGrpupSkillMapSkillGroupsId = 1077,
  SkillGrpupSkillMapSkillGroupsName = 1078,
  SkillGrpupSkillMapSkillGroupsNodeLocale = 1079,
  SkillGrpupSkillMapSkillGroupsSkillMap = 1080,
  SkillGrpupSkillMapSkillGroupsSkills = 1081,
  SkillGrpupSkillMapSkillGroupsSpaceId = 1082,
  SkillGrpupSkillMapSkillGroupsUpdatedAt = 1083,
  SkillGrpupSkillMapSkills = 1084,
  SkillGrpupSkillMapSkillsBlogPost = 1085,
  SkillGrpupSkillMapSkillsChildren = 1086,
  SkillGrpupSkillMapSkillsContentfulId = 1087,
  SkillGrpupSkillMapSkillsCreatedAt = 1088,
  SkillGrpupSkillMapSkillsId = 1089,
  SkillGrpupSkillMapSkillsLevel = 1090,
  SkillGrpupSkillMapSkillsName = 1091,
  SkillGrpupSkillMapSkillsNodeLocale = 1092,
  SkillGrpupSkillMapSkillsOss = 1093,
  SkillGrpupSkillMapSkillsProject = 1094,
  SkillGrpupSkillMapSkillsSkillGrpup = 1095,
  SkillGrpupSkillMapSkillsSkillMap = 1096,
  SkillGrpupSkillMapSkillsSpaceId = 1097,
  SkillGrpupSkillMapSkillsUpdatedAt = 1098,
  SkillGrpupSkillMapSortKey = 1099,
  SkillGrpupSkillMapSpaceId = 1100,
  SkillGrpupSkillMapSysRevision = 1101,
  SkillGrpupSkillMapSysType = 1102,
  SkillGrpupSkillMapUpdatedAt = 1103,
  SkillGrpupSkills = 1104,
  SkillGrpupSkillsBlogPost = 1105,
  SkillGrpupSkillsBlogPostChildren = 1106,
  SkillGrpupSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1107,
  SkillGrpupSkillsBlogPostContentfulId = 1108,
  SkillGrpupSkillsBlogPostCreated = 1109,
  SkillGrpupSkillsBlogPostCreatedAt = 1110,
  SkillGrpupSkillsBlogPostExcerpt = 1111,
  SkillGrpupSkillsBlogPostGatsbyPath = 1112,
  SkillGrpupSkillsBlogPostId = 1113,
  SkillGrpupSkillsBlogPostNodeLocale = 1114,
  SkillGrpupSkillsBlogPostSlug = 1115,
  SkillGrpupSkillsBlogPostSpaceId = 1116,
  SkillGrpupSkillsBlogPostTags = 1117,
  SkillGrpupSkillsBlogPostTitle = 1118,
  SkillGrpupSkillsBlogPostUpdated = 1119,
  SkillGrpupSkillsBlogPostUpdatedAt = 1120,
  SkillGrpupSkillsChildren = 1121,
  SkillGrpupSkillsChildrenChildren = 1122,
  SkillGrpupSkillsChildrenId = 1123,
  SkillGrpupSkillsContentfulId = 1124,
  SkillGrpupSkillsCreatedAt = 1125,
  SkillGrpupSkillsId = 1126,
  SkillGrpupSkillsInternalContent = 1127,
  SkillGrpupSkillsInternalContentDigest = 1128,
  SkillGrpupSkillsInternalContentFilePath = 1129,
  SkillGrpupSkillsInternalDescription = 1130,
  SkillGrpupSkillsInternalFieldOwners = 1131,
  SkillGrpupSkillsInternalIgnoreType = 1132,
  SkillGrpupSkillsInternalMediaType = 1133,
  SkillGrpupSkillsInternalOwner = 1134,
  SkillGrpupSkillsInternalType = 1135,
  SkillGrpupSkillsLevel = 1136,
  SkillGrpupSkillsName = 1137,
  SkillGrpupSkillsNodeLocale = 1138,
  SkillGrpupSkillsOss = 1139,
  SkillGrpupSkillsOssChildren = 1140,
  SkillGrpupSkillsOssChildrenContentfulOssDetailTextNode = 1141,
  SkillGrpupSkillsOssContentfulId = 1142,
  SkillGrpupSkillsOssCreatedAt = 1143,
  SkillGrpupSkillsOssHref = 1144,
  SkillGrpupSkillsOssId = 1145,
  SkillGrpupSkillsOssName = 1146,
  SkillGrpupSkillsOssNodeLocale = 1147,
  SkillGrpupSkillsOssSpaceId = 1148,
  SkillGrpupSkillsOssStartDate = 1149,
  SkillGrpupSkillsOssSubName = 1150,
  SkillGrpupSkillsOssTags = 1151,
  SkillGrpupSkillsOssUpdatedAt = 1152,
  SkillGrpupSkillsParentChildren = 1153,
  SkillGrpupSkillsParentId = 1154,
  SkillGrpupSkillsProject = 1155,
  SkillGrpupSkillsProjectChildren = 1156,
  SkillGrpupSkillsProjectChildrenContentfulProjectDetailTextNode = 1157,
  SkillGrpupSkillsProjectContentfulId = 1158,
  SkillGrpupSkillsProjectCreatedAt = 1159,
  SkillGrpupSkillsProjectEndDate = 1160,
  SkillGrpupSkillsProjectId = 1161,
  SkillGrpupSkillsProjectName = 1162,
  SkillGrpupSkillsProjectNodeLocale = 1163,
  SkillGrpupSkillsProjectSpaceId = 1164,
  SkillGrpupSkillsProjectStartDate = 1165,
  SkillGrpupSkillsProjectSubName = 1166,
  SkillGrpupSkillsProjectTags = 1167,
  SkillGrpupSkillsProjectUpdatedAt = 1168,
  SkillGrpupSkillsSkillGrpup = 1169,
  SkillGrpupSkillsSkillGrpupChildren = 1170,
  SkillGrpupSkillsSkillGrpupContentfulId = 1171,
  SkillGrpupSkillsSkillGrpupCreatedAt = 1172,
  SkillGrpupSkillsSkillGrpupId = 1173,
  SkillGrpupSkillsSkillGrpupName = 1174,
  SkillGrpupSkillsSkillGrpupNodeLocale = 1175,
  SkillGrpupSkillsSkillGrpupSkillMap = 1176,
  SkillGrpupSkillsSkillGrpupSkills = 1177,
  SkillGrpupSkillsSkillGrpupSpaceId = 1178,
  SkillGrpupSkillsSkillGrpupUpdatedAt = 1179,
  SkillGrpupSkillsSkillMap = 1180,
  SkillGrpupSkillsSkillMapChildren = 1181,
  SkillGrpupSkillsSkillMapContentfulId = 1182,
  SkillGrpupSkillsSkillMapCreatedAt = 1183,
  SkillGrpupSkillsSkillMapExpanded = 1184,
  SkillGrpupSkillsSkillMapId = 1185,
  SkillGrpupSkillsSkillMapName = 1186,
  SkillGrpupSkillsSkillMapNodeLocale = 1187,
  SkillGrpupSkillsSkillMapSkillGroups = 1188,
  SkillGrpupSkillsSkillMapSkills = 1189,
  SkillGrpupSkillsSkillMapSortKey = 1190,
  SkillGrpupSkillsSkillMapSpaceId = 1191,
  SkillGrpupSkillsSkillMapUpdatedAt = 1192,
  SkillGrpupSkillsSpaceId = 1193,
  SkillGrpupSkillsSysRevision = 1194,
  SkillGrpupSkillsSysType = 1195,
  SkillGrpupSkillsUpdatedAt = 1196,
  SkillGrpupSpaceId = 1197,
  SkillGrpupSysRevision = 1198,
  SkillGrpupSysType = 1199,
  SkillGrpupUpdatedAt = 1200,
  SkillMap = 1201,
  SkillMapChildren = 1202,
  SkillMapChildrenChildren = 1203,
  SkillMapChildrenChildrenChildren = 1204,
  SkillMapChildrenChildrenId = 1205,
  SkillMapChildrenId = 1206,
  SkillMapChildrenInternalContent = 1207,
  SkillMapChildrenInternalContentDigest = 1208,
  SkillMapChildrenInternalContentFilePath = 1209,
  SkillMapChildrenInternalDescription = 1210,
  SkillMapChildrenInternalFieldOwners = 1211,
  SkillMapChildrenInternalIgnoreType = 1212,
  SkillMapChildrenInternalMediaType = 1213,
  SkillMapChildrenInternalOwner = 1214,
  SkillMapChildrenInternalType = 1215,
  SkillMapChildrenParentChildren = 1216,
  SkillMapChildrenParentId = 1217,
  SkillMapContentfulId = 1218,
  SkillMapCreatedAt = 1219,
  SkillMapExpanded = 1220,
  SkillMapId = 1221,
  SkillMapInternalContent = 1222,
  SkillMapInternalContentDigest = 1223,
  SkillMapInternalContentFilePath = 1224,
  SkillMapInternalDescription = 1225,
  SkillMapInternalFieldOwners = 1226,
  SkillMapInternalIgnoreType = 1227,
  SkillMapInternalMediaType = 1228,
  SkillMapInternalOwner = 1229,
  SkillMapInternalType = 1230,
  SkillMapName = 1231,
  SkillMapNodeLocale = 1232,
  SkillMapParentChildren = 1233,
  SkillMapParentChildrenChildren = 1234,
  SkillMapParentChildrenId = 1235,
  SkillMapParentId = 1236,
  SkillMapParentInternalContent = 1237,
  SkillMapParentInternalContentDigest = 1238,
  SkillMapParentInternalContentFilePath = 1239,
  SkillMapParentInternalDescription = 1240,
  SkillMapParentInternalFieldOwners = 1241,
  SkillMapParentInternalIgnoreType = 1242,
  SkillMapParentInternalMediaType = 1243,
  SkillMapParentInternalOwner = 1244,
  SkillMapParentInternalType = 1245,
  SkillMapParentParentChildren = 1246,
  SkillMapParentParentId = 1247,
  SkillMapSkillGroups = 1248,
  SkillMapSkillGroupsChildren = 1249,
  SkillMapSkillGroupsChildrenChildren = 1250,
  SkillMapSkillGroupsChildrenId = 1251,
  SkillMapSkillGroupsContentfulId = 1252,
  SkillMapSkillGroupsCreatedAt = 1253,
  SkillMapSkillGroupsId = 1254,
  SkillMapSkillGroupsInternalContent = 1255,
  SkillMapSkillGroupsInternalContentDigest = 1256,
  SkillMapSkillGroupsInternalContentFilePath = 1257,
  SkillMapSkillGroupsInternalDescription = 1258,
  SkillMapSkillGroupsInternalFieldOwners = 1259,
  SkillMapSkillGroupsInternalIgnoreType = 1260,
  SkillMapSkillGroupsInternalMediaType = 1261,
  SkillMapSkillGroupsInternalOwner = 1262,
  SkillMapSkillGroupsInternalType = 1263,
  SkillMapSkillGroupsName = 1264,
  SkillMapSkillGroupsNodeLocale = 1265,
  SkillMapSkillGroupsParentChildren = 1266,
  SkillMapSkillGroupsParentId = 1267,
  SkillMapSkillGroupsSkillMap = 1268,
  SkillMapSkillGroupsSkillMapChildren = 1269,
  SkillMapSkillGroupsSkillMapContentfulId = 1270,
  SkillMapSkillGroupsSkillMapCreatedAt = 1271,
  SkillMapSkillGroupsSkillMapExpanded = 1272,
  SkillMapSkillGroupsSkillMapId = 1273,
  SkillMapSkillGroupsSkillMapName = 1274,
  SkillMapSkillGroupsSkillMapNodeLocale = 1275,
  SkillMapSkillGroupsSkillMapSkillGroups = 1276,
  SkillMapSkillGroupsSkillMapSkills = 1277,
  SkillMapSkillGroupsSkillMapSortKey = 1278,
  SkillMapSkillGroupsSkillMapSpaceId = 1279,
  SkillMapSkillGroupsSkillMapUpdatedAt = 1280,
  SkillMapSkillGroupsSkills = 1281,
  SkillMapSkillGroupsSkillsBlogPost = 1282,
  SkillMapSkillGroupsSkillsChildren = 1283,
  SkillMapSkillGroupsSkillsContentfulId = 1284,
  SkillMapSkillGroupsSkillsCreatedAt = 1285,
  SkillMapSkillGroupsSkillsId = 1286,
  SkillMapSkillGroupsSkillsLevel = 1287,
  SkillMapSkillGroupsSkillsName = 1288,
  SkillMapSkillGroupsSkillsNodeLocale = 1289,
  SkillMapSkillGroupsSkillsOss = 1290,
  SkillMapSkillGroupsSkillsProject = 1291,
  SkillMapSkillGroupsSkillsSkillGrpup = 1292,
  SkillMapSkillGroupsSkillsSkillMap = 1293,
  SkillMapSkillGroupsSkillsSpaceId = 1294,
  SkillMapSkillGroupsSkillsUpdatedAt = 1295,
  SkillMapSkillGroupsSpaceId = 1296,
  SkillMapSkillGroupsSysRevision = 1297,
  SkillMapSkillGroupsSysType = 1298,
  SkillMapSkillGroupsUpdatedAt = 1299,
  SkillMapSkills = 1300,
  SkillMapSkillsBlogPost = 1301,
  SkillMapSkillsBlogPostChildren = 1302,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1303,
  SkillMapSkillsBlogPostContentfulId = 1304,
  SkillMapSkillsBlogPostCreated = 1305,
  SkillMapSkillsBlogPostCreatedAt = 1306,
  SkillMapSkillsBlogPostExcerpt = 1307,
  SkillMapSkillsBlogPostGatsbyPath = 1308,
  SkillMapSkillsBlogPostId = 1309,
  SkillMapSkillsBlogPostNodeLocale = 1310,
  SkillMapSkillsBlogPostSlug = 1311,
  SkillMapSkillsBlogPostSpaceId = 1312,
  SkillMapSkillsBlogPostTags = 1313,
  SkillMapSkillsBlogPostTitle = 1314,
  SkillMapSkillsBlogPostUpdated = 1315,
  SkillMapSkillsBlogPostUpdatedAt = 1316,
  SkillMapSkillsChildren = 1317,
  SkillMapSkillsChildrenChildren = 1318,
  SkillMapSkillsChildrenId = 1319,
  SkillMapSkillsContentfulId = 1320,
  SkillMapSkillsCreatedAt = 1321,
  SkillMapSkillsId = 1322,
  SkillMapSkillsInternalContent = 1323,
  SkillMapSkillsInternalContentDigest = 1324,
  SkillMapSkillsInternalContentFilePath = 1325,
  SkillMapSkillsInternalDescription = 1326,
  SkillMapSkillsInternalFieldOwners = 1327,
  SkillMapSkillsInternalIgnoreType = 1328,
  SkillMapSkillsInternalMediaType = 1329,
  SkillMapSkillsInternalOwner = 1330,
  SkillMapSkillsInternalType = 1331,
  SkillMapSkillsLevel = 1332,
  SkillMapSkillsName = 1333,
  SkillMapSkillsNodeLocale = 1334,
  SkillMapSkillsOss = 1335,
  SkillMapSkillsOssChildren = 1336,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1337,
  SkillMapSkillsOssContentfulId = 1338,
  SkillMapSkillsOssCreatedAt = 1339,
  SkillMapSkillsOssHref = 1340,
  SkillMapSkillsOssId = 1341,
  SkillMapSkillsOssName = 1342,
  SkillMapSkillsOssNodeLocale = 1343,
  SkillMapSkillsOssSpaceId = 1344,
  SkillMapSkillsOssStartDate = 1345,
  SkillMapSkillsOssSubName = 1346,
  SkillMapSkillsOssTags = 1347,
  SkillMapSkillsOssUpdatedAt = 1348,
  SkillMapSkillsParentChildren = 1349,
  SkillMapSkillsParentId = 1350,
  SkillMapSkillsProject = 1351,
  SkillMapSkillsProjectChildren = 1352,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1353,
  SkillMapSkillsProjectContentfulId = 1354,
  SkillMapSkillsProjectCreatedAt = 1355,
  SkillMapSkillsProjectEndDate = 1356,
  SkillMapSkillsProjectId = 1357,
  SkillMapSkillsProjectName = 1358,
  SkillMapSkillsProjectNodeLocale = 1359,
  SkillMapSkillsProjectSpaceId = 1360,
  SkillMapSkillsProjectStartDate = 1361,
  SkillMapSkillsProjectSubName = 1362,
  SkillMapSkillsProjectTags = 1363,
  SkillMapSkillsProjectUpdatedAt = 1364,
  SkillMapSkillsSkillGrpup = 1365,
  SkillMapSkillsSkillGrpupChildren = 1366,
  SkillMapSkillsSkillGrpupContentfulId = 1367,
  SkillMapSkillsSkillGrpupCreatedAt = 1368,
  SkillMapSkillsSkillGrpupId = 1369,
  SkillMapSkillsSkillGrpupName = 1370,
  SkillMapSkillsSkillGrpupNodeLocale = 1371,
  SkillMapSkillsSkillGrpupSkillMap = 1372,
  SkillMapSkillsSkillGrpupSkills = 1373,
  SkillMapSkillsSkillGrpupSpaceId = 1374,
  SkillMapSkillsSkillGrpupUpdatedAt = 1375,
  SkillMapSkillsSkillMap = 1376,
  SkillMapSkillsSkillMapChildren = 1377,
  SkillMapSkillsSkillMapContentfulId = 1378,
  SkillMapSkillsSkillMapCreatedAt = 1379,
  SkillMapSkillsSkillMapExpanded = 1380,
  SkillMapSkillsSkillMapId = 1381,
  SkillMapSkillsSkillMapName = 1382,
  SkillMapSkillsSkillMapNodeLocale = 1383,
  SkillMapSkillsSkillMapSkillGroups = 1384,
  SkillMapSkillsSkillMapSkills = 1385,
  SkillMapSkillsSkillMapSortKey = 1386,
  SkillMapSkillsSkillMapSpaceId = 1387,
  SkillMapSkillsSkillMapUpdatedAt = 1388,
  SkillMapSkillsSpaceId = 1389,
  SkillMapSkillsSysRevision = 1390,
  SkillMapSkillsSysType = 1391,
  SkillMapSkillsUpdatedAt = 1392,
  SkillMapSortKey = 1393,
  SkillMapSpaceId = 1394,
  SkillMapSysRevision = 1395,
  SkillMapSysType = 1396,
  SkillMapUpdatedAt = 1397,
  SpaceId = 1398,
  SysContentTypeSysId = 1399,
  SysContentTypeSysLinkType = 1400,
  SysContentTypeSysType = 1401,
  SysRevision = 1402,
  SysType = 1403,
  UpdatedAt = 1404
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
  IconChildContentfulIconSvgTextNodeChildren = 44,
  IconChildContentfulIconSvgTextNodeChildrenChildren = 45,
  IconChildContentfulIconSvgTextNodeChildrenId = 46,
  IconChildContentfulIconSvgTextNodeId = 47,
  IconChildContentfulIconSvgTextNodeInternalContent = 48,
  IconChildContentfulIconSvgTextNodeInternalContentDigest = 49,
  IconChildContentfulIconSvgTextNodeInternalContentFilePath = 50,
  IconChildContentfulIconSvgTextNodeInternalDescription = 51,
  IconChildContentfulIconSvgTextNodeInternalFieldOwners = 52,
  IconChildContentfulIconSvgTextNodeInternalIgnoreType = 53,
  IconChildContentfulIconSvgTextNodeInternalMediaType = 54,
  IconChildContentfulIconSvgTextNodeInternalOwner = 55,
  IconChildContentfulIconSvgTextNodeInternalType = 56,
  IconChildContentfulIconSvgTextNodeParentChildren = 57,
  IconChildContentfulIconSvgTextNodeParentId = 58,
  IconChildContentfulIconSvgTextNodeSvg = 59,
  IconChildContentfulIconSvgTextNodeSysType = 60,
  IconChildren = 61,
  IconChildrenContentfulIconSvgTextNode = 62,
  IconChildrenContentfulIconSvgTextNodeChildren = 63,
  IconChildrenContentfulIconSvgTextNodeChildrenChildren = 64,
  IconChildrenContentfulIconSvgTextNodeChildrenId = 65,
  IconChildrenContentfulIconSvgTextNodeId = 66,
  IconChildrenContentfulIconSvgTextNodeInternalContent = 67,
  IconChildrenContentfulIconSvgTextNodeInternalContentDigest = 68,
  IconChildrenContentfulIconSvgTextNodeInternalContentFilePath = 69,
  IconChildrenContentfulIconSvgTextNodeInternalDescription = 70,
  IconChildrenContentfulIconSvgTextNodeInternalFieldOwners = 71,
  IconChildrenContentfulIconSvgTextNodeInternalIgnoreType = 72,
  IconChildrenContentfulIconSvgTextNodeInternalMediaType = 73,
  IconChildrenContentfulIconSvgTextNodeInternalOwner = 74,
  IconChildrenContentfulIconSvgTextNodeInternalType = 75,
  IconChildrenContentfulIconSvgTextNodeParentChildren = 76,
  IconChildrenContentfulIconSvgTextNodeParentId = 77,
  IconChildrenContentfulIconSvgTextNodeSvg = 78,
  IconChildrenContentfulIconSvgTextNodeSysType = 79,
  IconChildrenChildren = 80,
  IconChildrenChildrenChildren = 81,
  IconChildrenChildrenId = 82,
  IconChildrenId = 83,
  IconChildrenInternalContent = 84,
  IconChildrenInternalContentDigest = 85,
  IconChildrenInternalContentFilePath = 86,
  IconChildrenInternalDescription = 87,
  IconChildrenInternalFieldOwners = 88,
  IconChildrenInternalIgnoreType = 89,
  IconChildrenInternalMediaType = 90,
  IconChildrenInternalOwner = 91,
  IconChildrenInternalType = 92,
  IconChildrenParentChildren = 93,
  IconChildrenParentId = 94,
  IconContact = 95,
  IconContactChildren = 96,
  IconContactChildrenChildren = 97,
  IconContactChildrenId = 98,
  IconContactContentfulId = 99,
  IconContactCreatedAt = 100,
  IconContactHref = 101,
  IconContactIconSvgDarkChildren = 102,
  IconContactIconSvgDarkContentfulId = 103,
  IconContactIconSvgDarkCreatedAt = 104,
  IconContactIconSvgDarkDescription = 105,
  IconContactIconSvgDarkFilename = 106,
  IconContactIconSvgDarkFilesize = 107,
  IconContactIconSvgDarkGatsbyImage = 108,
  IconContactIconSvgDarkGatsbyImageData = 109,
  IconContactIconSvgDarkHeight = 110,
  IconContactIconSvgDarkId = 111,
  IconContactIconSvgDarkMimeType = 112,
  IconContactIconSvgDarkNodeLocale = 113,
  IconContactIconSvgDarkPlaceholderUrl = 114,
  IconContactIconSvgDarkPublicUrl = 115,
  IconContactIconSvgDarkSize = 116,
  IconContactIconSvgDarkSpaceId = 117,
  IconContactIconSvgDarkTitle = 118,
  IconContactIconSvgDarkUpdatedAt = 119,
  IconContactIconSvgDarkUrl = 120,
  IconContactIconSvgDarkWidth = 121,
  IconContactIconSvgLightChildren = 122,
  IconContactIconSvgLightContentfulId = 123,
  IconContactIconSvgLightCreatedAt = 124,
  IconContactIconSvgLightDescription = 125,
  IconContactIconSvgLightFilename = 126,
  IconContactIconSvgLightFilesize = 127,
  IconContactIconSvgLightGatsbyImage = 128,
  IconContactIconSvgLightGatsbyImageData = 129,
  IconContactIconSvgLightHeight = 130,
  IconContactIconSvgLightId = 131,
  IconContactIconSvgLightMimeType = 132,
  IconContactIconSvgLightNodeLocale = 133,
  IconContactIconSvgLightPlaceholderUrl = 134,
  IconContactIconSvgLightPublicUrl = 135,
  IconContactIconSvgLightSize = 136,
  IconContactIconSvgLightSpaceId = 137,
  IconContactIconSvgLightTitle = 138,
  IconContactIconSvgLightUpdatedAt = 139,
  IconContactIconSvgLightUrl = 140,
  IconContactIconSvgLightWidth = 141,
  IconContactIconChildren = 142,
  IconContactIconChildrenContentfulIconSvgTextNode = 143,
  IconContactIconContact = 144,
  IconContactIconContentfulId = 145,
  IconContactIconCreatedAt = 146,
  IconContactIconHistory = 147,
  IconContactIconId = 148,
  IconContactIconName = 149,
  IconContactIconNodeLocale = 150,
  IconContactIconOss = 151,
  IconContactIconProject = 152,
  IconContactIconSpaceId = 153,
  IconContactIconUpdatedAt = 154,
  IconContactIconWhatICanDo = 155,
  IconContactId = 156,
  IconContactInternalContent = 157,
  IconContactInternalContentDigest = 158,
  IconContactInternalContentFilePath = 159,
  IconContactInternalDescription = 160,
  IconContactInternalFieldOwners = 161,
  IconContactInternalIgnoreType = 162,
  IconContactInternalMediaType = 163,
  IconContactInternalOwner = 164,
  IconContactInternalType = 165,
  IconContactName = 166,
  IconContactNodeLocale = 167,
  IconContactParentChildren = 168,
  IconContactParentId = 169,
  IconContactSortKey = 170,
  IconContactSpaceId = 171,
  IconContactSubName = 172,
  IconContactSysRevision = 173,
  IconContactSysType = 174,
  IconContactUpdatedAt = 175,
  IconContentfulId = 176,
  IconCreatedAt = 177,
  IconHistory = 178,
  IconHistoryChildren = 179,
  IconHistoryChildrenChildren = 180,
  IconHistoryChildrenId = 181,
  IconHistoryContentfulId = 182,
  IconHistoryCreatedAt = 183,
  IconHistoryDate = 184,
  IconHistoryIconChildren = 185,
  IconHistoryIconChildrenContentfulIconSvgTextNode = 186,
  IconHistoryIconContact = 187,
  IconHistoryIconContentfulId = 188,
  IconHistoryIconCreatedAt = 189,
  IconHistoryIconHistory = 190,
  IconHistoryIconId = 191,
  IconHistoryIconName = 192,
  IconHistoryIconNodeLocale = 193,
  IconHistoryIconOss = 194,
  IconHistoryIconProject = 195,
  IconHistoryIconSpaceId = 196,
  IconHistoryIconUpdatedAt = 197,
  IconHistoryIconWhatICanDo = 198,
  IconHistoryId = 199,
  IconHistoryInternalContent = 200,
  IconHistoryInternalContentDigest = 201,
  IconHistoryInternalContentFilePath = 202,
  IconHistoryInternalDescription = 203,
  IconHistoryInternalFieldOwners = 204,
  IconHistoryInternalIgnoreType = 205,
  IconHistoryInternalMediaType = 206,
  IconHistoryInternalOwner = 207,
  IconHistoryInternalType = 208,
  IconHistoryName = 209,
  IconHistoryNodeLocale = 210,
  IconHistoryParentChildren = 211,
  IconHistoryParentId = 212,
  IconHistorySpaceId = 213,
  IconHistorySubName = 214,
  IconHistorySysRevision = 215,
  IconHistorySysType = 216,
  IconHistoryUpdatedAt = 217,
  IconId = 218,
  IconInternalContent = 219,
  IconInternalContentDigest = 220,
  IconInternalContentFilePath = 221,
  IconInternalDescription = 222,
  IconInternalFieldOwners = 223,
  IconInternalIgnoreType = 224,
  IconInternalMediaType = 225,
  IconInternalOwner = 226,
  IconInternalType = 227,
  IconName = 228,
  IconNodeLocale = 229,
  IconOss = 230,
  IconOssChildContentfulOssDetailTextNodeChildren = 231,
  IconOssChildContentfulOssDetailTextNodeDetail = 232,
  IconOssChildContentfulOssDetailTextNodeId = 233,
  IconOssChildren = 234,
  IconOssChildrenContentfulOssDetailTextNode = 235,
  IconOssChildrenContentfulOssDetailTextNodeChildren = 236,
  IconOssChildrenContentfulOssDetailTextNodeDetail = 237,
  IconOssChildrenContentfulOssDetailTextNodeId = 238,
  IconOssChildrenChildren = 239,
  IconOssChildrenId = 240,
  IconOssContentfulId = 241,
  IconOssCreatedAt = 242,
  IconOssDetailChildren = 243,
  IconOssDetailDetail = 244,
  IconOssDetailId = 245,
  IconOssHref = 246,
  IconOssIconChildren = 247,
  IconOssIconChildrenContentfulIconSvgTextNode = 248,
  IconOssIconContact = 249,
  IconOssIconContentfulId = 250,
  IconOssIconCreatedAt = 251,
  IconOssIconHistory = 252,
  IconOssIconId = 253,
  IconOssIconName = 254,
  IconOssIconNodeLocale = 255,
  IconOssIconOss = 256,
  IconOssIconProject = 257,
  IconOssIconSpaceId = 258,
  IconOssIconUpdatedAt = 259,
  IconOssIconWhatICanDo = 260,
  IconOssId = 261,
  IconOssImageChildren = 262,
  IconOssImageContentfulId = 263,
  IconOssImageCreatedAt = 264,
  IconOssImageDescription = 265,
  IconOssImageFilename = 266,
  IconOssImageFilesize = 267,
  IconOssImageGatsbyImage = 268,
  IconOssImageGatsbyImageData = 269,
  IconOssImageHeight = 270,
  IconOssImageId = 271,
  IconOssImageMimeType = 272,
  IconOssImageNodeLocale = 273,
  IconOssImagePlaceholderUrl = 274,
  IconOssImagePublicUrl = 275,
  IconOssImageSize = 276,
  IconOssImageSpaceId = 277,
  IconOssImageTitle = 278,
  IconOssImageUpdatedAt = 279,
  IconOssImageUrl = 280,
  IconOssImageWidth = 281,
  IconOssInternalContent = 282,
  IconOssInternalContentDigest = 283,
  IconOssInternalContentFilePath = 284,
  IconOssInternalDescription = 285,
  IconOssInternalFieldOwners = 286,
  IconOssInternalIgnoreType = 287,
  IconOssInternalMediaType = 288,
  IconOssInternalOwner = 289,
  IconOssInternalType = 290,
  IconOssName = 291,
  IconOssNodeLocale = 292,
  IconOssParentChildren = 293,
  IconOssParentId = 294,
  IconOssSpaceId = 295,
  IconOssStartDate = 296,
  IconOssSubName = 297,
  IconOssSysRevision = 298,
  IconOssSysType = 299,
  IconOssTags = 300,
  IconOssTagsBlogPost = 301,
  IconOssTagsChildren = 302,
  IconOssTagsContentfulId = 303,
  IconOssTagsCreatedAt = 304,
  IconOssTagsId = 305,
  IconOssTagsLevel = 306,
  IconOssTagsName = 307,
  IconOssTagsNodeLocale = 308,
  IconOssTagsOss = 309,
  IconOssTagsProject = 310,
  IconOssTagsSkillGrpup = 311,
  IconOssTagsSkillMap = 312,
  IconOssTagsSpaceId = 313,
  IconOssTagsUpdatedAt = 314,
  IconOssUpdatedAt = 315,
  IconParentChildren = 316,
  IconParentChildrenChildren = 317,
  IconParentChildrenId = 318,
  IconParentId = 319,
  IconParentInternalContent = 320,
  IconParentInternalContentDigest = 321,
  IconParentInternalContentFilePath = 322,
  IconParentInternalDescription = 323,
  IconParentInternalFieldOwners = 324,
  IconParentInternalIgnoreType = 325,
  IconParentInternalMediaType = 326,
  IconParentInternalOwner = 327,
  IconParentInternalType = 328,
  IconParentParentChildren = 329,
  IconParentParentId = 330,
  IconProject = 331,
  IconProjectChildContentfulProjectDetailTextNodeChildren = 332,
  IconProjectChildContentfulProjectDetailTextNodeDetail = 333,
  IconProjectChildContentfulProjectDetailTextNodeId = 334,
  IconProjectChildren = 335,
  IconProjectChildrenContentfulProjectDetailTextNode = 336,
  IconProjectChildrenContentfulProjectDetailTextNodeChildren = 337,
  IconProjectChildrenContentfulProjectDetailTextNodeDetail = 338,
  IconProjectChildrenContentfulProjectDetailTextNodeId = 339,
  IconProjectChildrenChildren = 340,
  IconProjectChildrenId = 341,
  IconProjectContentfulId = 342,
  IconProjectCreatedAt = 343,
  IconProjectDetailChildren = 344,
  IconProjectDetailDetail = 345,
  IconProjectDetailId = 346,
  IconProjectEndDate = 347,
  IconProjectIconChildren = 348,
  IconProjectIconChildrenContentfulIconSvgTextNode = 349,
  IconProjectIconContact = 350,
  IconProjectIconContentfulId = 351,
  IconProjectIconCreatedAt = 352,
  IconProjectIconHistory = 353,
  IconProjectIconId = 354,
  IconProjectIconName = 355,
  IconProjectIconNodeLocale = 356,
  IconProjectIconOss = 357,
  IconProjectIconProject = 358,
  IconProjectIconSpaceId = 359,
  IconProjectIconUpdatedAt = 360,
  IconProjectIconWhatICanDo = 361,
  IconProjectId = 362,
  IconProjectInternalContent = 363,
  IconProjectInternalContentDigest = 364,
  IconProjectInternalContentFilePath = 365,
  IconProjectInternalDescription = 366,
  IconProjectInternalFieldOwners = 367,
  IconProjectInternalIgnoreType = 368,
  IconProjectInternalMediaType = 369,
  IconProjectInternalOwner = 370,
  IconProjectInternalType = 371,
  IconProjectName = 372,
  IconProjectNodeLocale = 373,
  IconProjectParentChildren = 374,
  IconProjectParentId = 375,
  IconProjectSpaceId = 376,
  IconProjectStartDate = 377,
  IconProjectSubName = 378,
  IconProjectSysRevision = 379,
  IconProjectSysType = 380,
  IconProjectTags = 381,
  IconProjectTagsBlogPost = 382,
  IconProjectTagsChildren = 383,
  IconProjectTagsContentfulId = 384,
  IconProjectTagsCreatedAt = 385,
  IconProjectTagsId = 386,
  IconProjectTagsLevel = 387,
  IconProjectTagsName = 388,
  IconProjectTagsNodeLocale = 389,
  IconProjectTagsOss = 390,
  IconProjectTagsProject = 391,
  IconProjectTagsSkillGrpup = 392,
  IconProjectTagsSkillMap = 393,
  IconProjectTagsSpaceId = 394,
  IconProjectTagsUpdatedAt = 395,
  IconProjectUpdatedAt = 396,
  IconSpaceId = 397,
  IconSvgChildren = 398,
  IconSvgChildrenChildren = 399,
  IconSvgChildrenId = 400,
  IconSvgId = 401,
  IconSvgInternalContent = 402,
  IconSvgInternalContentDigest = 403,
  IconSvgInternalContentFilePath = 404,
  IconSvgInternalDescription = 405,
  IconSvgInternalFieldOwners = 406,
  IconSvgInternalIgnoreType = 407,
  IconSvgInternalMediaType = 408,
  IconSvgInternalOwner = 409,
  IconSvgInternalType = 410,
  IconSvgParentChildren = 411,
  IconSvgParentId = 412,
  IconSvgSvg = 413,
  IconSvgSysType = 414,
  IconSysRevision = 415,
  IconSysType = 416,
  IconUpdatedAt = 417,
  IconWhatICanDo = 418,
  IconWhatICanDoChildren = 419,
  IconWhatICanDoChildrenChildren = 420,
  IconWhatICanDoChildrenId = 421,
  IconWhatICanDoContentfulId = 422,
  IconWhatICanDoCreatedAt = 423,
  IconWhatICanDoIconChildren = 424,
  IconWhatICanDoIconChildrenContentfulIconSvgTextNode = 425,
  IconWhatICanDoIconContact = 426,
  IconWhatICanDoIconContentfulId = 427,
  IconWhatICanDoIconCreatedAt = 428,
  IconWhatICanDoIconHistory = 429,
  IconWhatICanDoIconId = 430,
  IconWhatICanDoIconName = 431,
  IconWhatICanDoIconNodeLocale = 432,
  IconWhatICanDoIconOss = 433,
  IconWhatICanDoIconProject = 434,
  IconWhatICanDoIconSpaceId = 435,
  IconWhatICanDoIconUpdatedAt = 436,
  IconWhatICanDoIconWhatICanDo = 437,
  IconWhatICanDoId = 438,
  IconWhatICanDoInternalContent = 439,
  IconWhatICanDoInternalContentDigest = 440,
  IconWhatICanDoInternalContentFilePath = 441,
  IconWhatICanDoInternalDescription = 442,
  IconWhatICanDoInternalFieldOwners = 443,
  IconWhatICanDoInternalIgnoreType = 444,
  IconWhatICanDoInternalMediaType = 445,
  IconWhatICanDoInternalOwner = 446,
  IconWhatICanDoInternalType = 447,
  IconWhatICanDoName = 448,
  IconWhatICanDoNodeLocale = 449,
  IconWhatICanDoParentChildren = 450,
  IconWhatICanDoParentId = 451,
  IconWhatICanDoSortKey = 452,
  IconWhatICanDoSpaceId = 453,
  IconWhatICanDoSubName = 454,
  IconWhatICanDoSysRevision = 455,
  IconWhatICanDoSysType = 456,
  IconWhatICanDoUpdatedAt = 457,
  Id = 458,
  InternalContent = 459,
  InternalContentDigest = 460,
  InternalContentFilePath = 461,
  InternalDescription = 462,
  InternalFieldOwners = 463,
  InternalIgnoreType = 464,
  InternalMediaType = 465,
  InternalOwner = 466,
  InternalType = 467,
  Name = 468,
  NodeLocale = 469,
  ParentChildren = 470,
  ParentChildrenChildren = 471,
  ParentChildrenChildrenChildren = 472,
  ParentChildrenChildrenId = 473,
  ParentChildrenId = 474,
  ParentChildrenInternalContent = 475,
  ParentChildrenInternalContentDigest = 476,
  ParentChildrenInternalContentFilePath = 477,
  ParentChildrenInternalDescription = 478,
  ParentChildrenInternalFieldOwners = 479,
  ParentChildrenInternalIgnoreType = 480,
  ParentChildrenInternalMediaType = 481,
  ParentChildrenInternalOwner = 482,
  ParentChildrenInternalType = 483,
  ParentChildrenParentChildren = 484,
  ParentChildrenParentId = 485,
  ParentId = 486,
  ParentInternalContent = 487,
  ParentInternalContentDigest = 488,
  ParentInternalContentFilePath = 489,
  ParentInternalDescription = 490,
  ParentInternalFieldOwners = 491,
  ParentInternalIgnoreType = 492,
  ParentInternalMediaType = 493,
  ParentInternalOwner = 494,
  ParentInternalType = 495,
  ParentParentChildren = 496,
  ParentParentChildrenChildren = 497,
  ParentParentChildrenId = 498,
  ParentParentId = 499,
  ParentParentInternalContent = 500,
  ParentParentInternalContentDigest = 501,
  ParentParentInternalContentFilePath = 502,
  ParentParentInternalDescription = 503,
  ParentParentInternalFieldOwners = 504,
  ParentParentInternalIgnoreType = 505,
  ParentParentInternalMediaType = 506,
  ParentParentInternalOwner = 507,
  ParentParentInternalType = 508,
  ParentParentParentChildren = 509,
  ParentParentParentId = 510,
  SortKey = 511,
  SpaceId = 512,
  SubName = 513,
  SysContentTypeSysId = 514,
  SysContentTypeSysLinkType = 515,
  SysContentTypeSysType = 516,
  SysRevision = 517,
  SysType = 518,
  UpdatedAt = 519
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
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly tableOfContents: Maybe<Scalars['JSON']>;
};


export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
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
  Excerpt = 42,
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
  ParentParentParentId = 93,
  TableOfContents = 94
}

export type MdxFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly tableOfContents: InputMaybe<JsonQueryOperatorInput>;
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

export type MdxSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<MdxFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
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
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  tableOfContents: InputMaybe<JsonQueryOperatorInput>;
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
  readonly children: ReadonlyArray<Node>;
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
  Content = 42,
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
  ParentParentParentId = 93,
  SysType = 94
}

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
  readonly children: ReadonlyArray<Node>;
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
  Id = 42,
  InternalContent = 43,
  InternalContentDigest = 44,
  InternalContentFilePath = 45,
  InternalDescription = 46,
  InternalFieldOwners = 47,
  InternalIgnoreType = 48,
  InternalMediaType = 49,
  InternalOwner = 50,
  InternalType = 51,
  ParentChildren = 52,
  ParentChildrenChildren = 53,
  ParentChildrenChildrenChildren = 54,
  ParentChildrenChildrenId = 55,
  ParentChildrenId = 56,
  ParentChildrenInternalContent = 57,
  ParentChildrenInternalContentDigest = 58,
  ParentChildrenInternalContentFilePath = 59,
  ParentChildrenInternalDescription = 60,
  ParentChildrenInternalFieldOwners = 61,
  ParentChildrenInternalIgnoreType = 62,
  ParentChildrenInternalMediaType = 63,
  ParentChildrenInternalOwner = 64,
  ParentChildrenInternalType = 65,
  ParentChildrenParentChildren = 66,
  ParentChildrenParentId = 67,
  ParentId = 68,
  ParentInternalContent = 69,
  ParentInternalContentDigest = 70,
  ParentInternalContentFilePath = 71,
  ParentInternalDescription = 72,
  ParentInternalFieldOwners = 73,
  ParentInternalIgnoreType = 74,
  ParentInternalMediaType = 75,
  ParentInternalOwner = 76,
  ParentInternalType = 77,
  ParentParentChildren = 78,
  ParentParentChildrenChildren = 79,
  ParentParentChildrenId = 80,
  ParentParentId = 81,
  ParentParentInternalContent = 82,
  ParentParentInternalContentDigest = 83,
  ParentParentInternalContentFilePath = 84,
  ParentParentInternalDescription = 85,
  ParentParentInternalFieldOwners = 86,
  ParentParentInternalIgnoreType = 87,
  ParentParentInternalMediaType = 88,
  ParentParentInternalOwner = 89,
  ParentParentInternalType = 90,
  ParentParentParentChildren = 91,
  ParentParentParentId = 92,
  Svg = 93,
  SysType = 94
}

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
  readonly children: ReadonlyArray<Node>;
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
  Detail = 42,
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
  ParentParentParentId = 93,
  SysType = 94
}

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
  readonly children: ReadonlyArray<Node>;
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
  Detail = 42,
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
  ParentParentParentId = 93,
  SysType = 94
}

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

export type BlogPostDetailFragment = { readonly content: Maybe<Pick<ContentfulBlogPostContentTextNode, 'content'>> };

export type BlogPostCardFragment = Pick<ContentfulBlogPost, 'title' | 'slug' | 'created' | 'updated' | 'excerpt'>;

export type BlogPostListFragment = Pick<ContentfulBlogPost, 'id' | 'title' | 'slug' | 'created' | 'updated' | 'excerpt'>;

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
  Pick<ContentfulHistory, 'date' | 'name' | 'subName'>
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
  )>, readonly detail: Maybe<Pick<ContentfulProjectDetailTextNode, 'detail'>> }
);

export type PortfolioProjectDetailFragment = (
  Pick<ContentfulProject, 'subName'>
  & { readonly detail: Maybe<Pick<ContentfulProjectDetailTextNode, 'detail'>> }
);

export type PortfolioProjectListFragment = (
  Pick<ContentfulProject, 'id' | 'name' | 'startDate' | 'subName'>
  & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'name'>>>>, readonly icon: Maybe<(
    Pick<ContentfulIcon, 'name'>
    & { readonly svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
  )>, readonly detail: Maybe<Pick<ContentfulProjectDetailTextNode, 'detail'>> }
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
      Pick<ContentfulBlogPost, 'title' | 'created' | 'id' | 'slug' | 'updated' | 'excerpt'>
      & { readonly thumbnail: Maybe<{ readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }
    )> }, readonly locales: { readonly edges: ReadonlyArray<{ readonly node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };

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
      )>, readonly detail: Maybe<Pick<ContentfulProjectDetailTextNode, 'detail'>> }
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
    )>, readonly content: Maybe<Pick<ContentfulBlogPostContentTextNode, 'content'>> }
  )>, readonly links: { readonly nodes: ReadonlyArray<Pick<ContentfulHello, 'id' | 'href' | 'name'>> }, readonly locales: { readonly edges: ReadonlyArray<{ readonly node: Pick<Locale, 'ns' | 'data' | 'language'> }> } };
