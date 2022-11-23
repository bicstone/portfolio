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
  CategoryBlogPostCategorySlug = 8,
  CategoryBlogPostCategorySortKey = 9,
  CategoryBlogPostCategorySpaceId = 10,
  CategoryBlogPostCategoryUpdatedAt = 11,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeChildren = 12,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 13,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeContent = 14,
  CategoryBlogPostChildContentfulBlogPostContentTextNodeId = 15,
  CategoryBlogPostChildren = 16,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNode = 17,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 18,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 19,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeContent = 20,
  CategoryBlogPostChildrenContentfulBlogPostContentTextNodeId = 21,
  CategoryBlogPostChildrenChildren = 22,
  CategoryBlogPostChildrenId = 23,
  CategoryBlogPostContentChildren = 24,
  CategoryBlogPostContentChildrenMdx = 25,
  CategoryBlogPostContentContent = 26,
  CategoryBlogPostContentId = 27,
  CategoryBlogPostContentfulId = 28,
  CategoryBlogPostCreated = 29,
  CategoryBlogPostCreatedAt = 30,
  CategoryBlogPostExcerpt = 31,
  CategoryBlogPostGatsbyPath = 32,
  CategoryBlogPostId = 33,
  CategoryBlogPostInternalContent = 34,
  CategoryBlogPostInternalContentDigest = 35,
  CategoryBlogPostInternalContentFilePath = 36,
  CategoryBlogPostInternalDescription = 37,
  CategoryBlogPostInternalFieldOwners = 38,
  CategoryBlogPostInternalIgnoreType = 39,
  CategoryBlogPostInternalMediaType = 40,
  CategoryBlogPostInternalOwner = 41,
  CategoryBlogPostInternalType = 42,
  CategoryBlogPostNodeLocale = 43,
  CategoryBlogPostParentChildren = 44,
  CategoryBlogPostParentId = 45,
  CategoryBlogPostSlug = 46,
  CategoryBlogPostSpaceId = 47,
  CategoryBlogPostSysRevision = 48,
  CategoryBlogPostSysType = 49,
  CategoryBlogPostTags = 50,
  CategoryBlogPostTagsBlogPost = 51,
  CategoryBlogPostTagsChildren = 52,
  CategoryBlogPostTagsContentfulId = 53,
  CategoryBlogPostTagsCreatedAt = 54,
  CategoryBlogPostTagsId = 55,
  CategoryBlogPostTagsLevel = 56,
  CategoryBlogPostTagsName = 57,
  CategoryBlogPostTagsNodeLocale = 58,
  CategoryBlogPostTagsOss = 59,
  CategoryBlogPostTagsProject = 60,
  CategoryBlogPostTagsSkillGrpup = 61,
  CategoryBlogPostTagsSkillMap = 62,
  CategoryBlogPostTagsSpaceId = 63,
  CategoryBlogPostTagsUpdatedAt = 64,
  CategoryBlogPostThumbnailChildren = 65,
  CategoryBlogPostThumbnailContentfulId = 66,
  CategoryBlogPostThumbnailCreatedAt = 67,
  CategoryBlogPostThumbnailDescription = 68,
  CategoryBlogPostThumbnailFilename = 69,
  CategoryBlogPostThumbnailFilesize = 70,
  CategoryBlogPostThumbnailGatsbyImage = 71,
  CategoryBlogPostThumbnailGatsbyImageData = 72,
  CategoryBlogPostThumbnailHeight = 73,
  CategoryBlogPostThumbnailId = 74,
  CategoryBlogPostThumbnailMimeType = 75,
  CategoryBlogPostThumbnailNodeLocale = 76,
  CategoryBlogPostThumbnailPlaceholderUrl = 77,
  CategoryBlogPostThumbnailPublicUrl = 78,
  CategoryBlogPostThumbnailSize = 79,
  CategoryBlogPostThumbnailSpaceId = 80,
  CategoryBlogPostThumbnailTitle = 81,
  CategoryBlogPostThumbnailUpdatedAt = 82,
  CategoryBlogPostThumbnailUrl = 83,
  CategoryBlogPostThumbnailWidth = 84,
  CategoryBlogPostTitle = 85,
  CategoryBlogPostUpdated = 86,
  CategoryBlogPostUpdatedAt = 87,
  CategoryChildren = 88,
  CategoryChildrenChildren = 89,
  CategoryChildrenChildrenChildren = 90,
  CategoryChildrenChildrenId = 91,
  CategoryChildrenId = 92,
  CategoryChildrenInternalContent = 93,
  CategoryChildrenInternalContentDigest = 94,
  CategoryChildrenInternalContentFilePath = 95,
  CategoryChildrenInternalDescription = 96,
  CategoryChildrenInternalFieldOwners = 97,
  CategoryChildrenInternalIgnoreType = 98,
  CategoryChildrenInternalMediaType = 99,
  CategoryChildrenInternalOwner = 100,
  CategoryChildrenInternalType = 101,
  CategoryChildrenParentChildren = 102,
  CategoryChildrenParentId = 103,
  CategoryContentfulId = 104,
  CategoryCreatedAt = 105,
  CategoryId = 106,
  CategoryInternalContent = 107,
  CategoryInternalContentDigest = 108,
  CategoryInternalContentFilePath = 109,
  CategoryInternalDescription = 110,
  CategoryInternalFieldOwners = 111,
  CategoryInternalIgnoreType = 112,
  CategoryInternalMediaType = 113,
  CategoryInternalOwner = 114,
  CategoryInternalType = 115,
  CategoryName = 116,
  CategoryNodeLocale = 117,
  CategoryParentChildren = 118,
  CategoryParentChildrenChildren = 119,
  CategoryParentChildrenId = 120,
  CategoryParentId = 121,
  CategoryParentInternalContent = 122,
  CategoryParentInternalContentDigest = 123,
  CategoryParentInternalContentFilePath = 124,
  CategoryParentInternalDescription = 125,
  CategoryParentInternalFieldOwners = 126,
  CategoryParentInternalIgnoreType = 127,
  CategoryParentInternalMediaType = 128,
  CategoryParentInternalOwner = 129,
  CategoryParentInternalType = 130,
  CategoryParentParentChildren = 131,
  CategoryParentParentId = 132,
  CategorySlug = 133,
  CategorySortKey = 134,
  CategorySpaceId = 135,
  CategorySysRevision = 136,
  CategorySysType = 137,
  CategoryUpdatedAt = 138,
  ChildContentfulBlogPostContentTextNodeChildMdxBody = 139,
  ChildContentfulBlogPostContentTextNodeChildMdxChildren = 140,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 141,
  ChildContentfulBlogPostContentTextNodeChildMdxChildrenId = 142,
  ChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 143,
  ChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 144,
  ChildContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 145,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadings = 146,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 147,
  ChildContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 148,
  ChildContentfulBlogPostContentTextNodeChildMdxHtml = 149,
  ChildContentfulBlogPostContentTextNodeChildMdxId = 150,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContent = 151,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 152,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalContentFilePath = 153,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalDescription = 154,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 155,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 156,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 157,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalOwner = 158,
  ChildContentfulBlogPostContentTextNodeChildMdxInternalType = 159,
  ChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 160,
  ChildContentfulBlogPostContentTextNodeChildMdxParentChildren = 161,
  ChildContentfulBlogPostContentTextNodeChildMdxParentId = 162,
  ChildContentfulBlogPostContentTextNodeChildMdxRawBody = 163,
  ChildContentfulBlogPostContentTextNodeChildMdxSlug = 164,
  ChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 165,
  ChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 166,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 167,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 168,
  ChildContentfulBlogPostContentTextNodeChildMdxWordCountWords = 169,
  ChildContentfulBlogPostContentTextNodeChildren = 170,
  ChildContentfulBlogPostContentTextNodeChildrenMdx = 171,
  ChildContentfulBlogPostContentTextNodeChildrenMdxBody = 172,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 173,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 174,
  ChildContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 175,
  ChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 176,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 177,
  ChildContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 178,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 179,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 180,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 181,
  ChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 182,
  ChildContentfulBlogPostContentTextNodeChildrenMdxId = 183,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 184,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 185,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalContentFilePath = 186,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 187,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 188,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 189,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 190,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 191,
  ChildContentfulBlogPostContentTextNodeChildrenMdxInternalType = 192,
  ChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 193,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 194,
  ChildContentfulBlogPostContentTextNodeChildrenMdxParentId = 195,
  ChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 196,
  ChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 197,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 198,
  ChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 199,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 200,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 201,
  ChildContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 202,
  ChildContentfulBlogPostContentTextNodeChildrenChildren = 203,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenChildren = 204,
  ChildContentfulBlogPostContentTextNodeChildrenChildrenId = 205,
  ChildContentfulBlogPostContentTextNodeChildrenId = 206,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContent = 207,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 208,
  ChildContentfulBlogPostContentTextNodeChildrenInternalContentFilePath = 209,
  ChildContentfulBlogPostContentTextNodeChildrenInternalDescription = 210,
  ChildContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 211,
  ChildContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 212,
  ChildContentfulBlogPostContentTextNodeChildrenInternalMediaType = 213,
  ChildContentfulBlogPostContentTextNodeChildrenInternalOwner = 214,
  ChildContentfulBlogPostContentTextNodeChildrenInternalType = 215,
  ChildContentfulBlogPostContentTextNodeChildrenParentChildren = 216,
  ChildContentfulBlogPostContentTextNodeChildrenParentId = 217,
  ChildContentfulBlogPostContentTextNodeContent = 218,
  ChildContentfulBlogPostContentTextNodeId = 219,
  ChildContentfulBlogPostContentTextNodeInternalContent = 220,
  ChildContentfulBlogPostContentTextNodeInternalContentDigest = 221,
  ChildContentfulBlogPostContentTextNodeInternalContentFilePath = 222,
  ChildContentfulBlogPostContentTextNodeInternalDescription = 223,
  ChildContentfulBlogPostContentTextNodeInternalFieldOwners = 224,
  ChildContentfulBlogPostContentTextNodeInternalIgnoreType = 225,
  ChildContentfulBlogPostContentTextNodeInternalMediaType = 226,
  ChildContentfulBlogPostContentTextNodeInternalOwner = 227,
  ChildContentfulBlogPostContentTextNodeInternalType = 228,
  ChildContentfulBlogPostContentTextNodeParentChildren = 229,
  ChildContentfulBlogPostContentTextNodeParentChildrenChildren = 230,
  ChildContentfulBlogPostContentTextNodeParentChildrenId = 231,
  ChildContentfulBlogPostContentTextNodeParentId = 232,
  ChildContentfulBlogPostContentTextNodeParentInternalContent = 233,
  ChildContentfulBlogPostContentTextNodeParentInternalContentDigest = 234,
  ChildContentfulBlogPostContentTextNodeParentInternalContentFilePath = 235,
  ChildContentfulBlogPostContentTextNodeParentInternalDescription = 236,
  ChildContentfulBlogPostContentTextNodeParentInternalFieldOwners = 237,
  ChildContentfulBlogPostContentTextNodeParentInternalIgnoreType = 238,
  ChildContentfulBlogPostContentTextNodeParentInternalMediaType = 239,
  ChildContentfulBlogPostContentTextNodeParentInternalOwner = 240,
  ChildContentfulBlogPostContentTextNodeParentInternalType = 241,
  ChildContentfulBlogPostContentTextNodeParentParentChildren = 242,
  ChildContentfulBlogPostContentTextNodeParentParentId = 243,
  ChildContentfulBlogPostContentTextNodeSysType = 244,
  Children = 245,
  ChildrenContentfulBlogPostContentTextNode = 246,
  ChildrenContentfulBlogPostContentTextNodeChildMdxBody = 247,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 248,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenChildren = 249,
  ChildrenContentfulBlogPostContentTextNodeChildMdxChildrenId = 250,
  ChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 251,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 252,
  ChildrenContentfulBlogPostContentTextNodeChildMdxFrontmatterTitle = 253,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 254,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsDepth = 255,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHeadingsValue = 256,
  ChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 257,
  ChildrenContentfulBlogPostContentTextNodeChildMdxId = 258,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContent = 259,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentDigest = 260,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalContentFilePath = 261,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalDescription = 262,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalFieldOwners = 263,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalIgnoreType = 264,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalMediaType = 265,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalOwner = 266,
  ChildrenContentfulBlogPostContentTextNodeChildMdxInternalType = 267,
  ChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 268,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentChildren = 269,
  ChildrenContentfulBlogPostContentTextNodeChildMdxParentId = 270,
  ChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 271,
  ChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 272,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 273,
  ChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 274,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountParagraphs = 275,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountSentences = 276,
  ChildrenContentfulBlogPostContentTextNodeChildMdxWordCountWords = 277,
  ChildrenContentfulBlogPostContentTextNodeChildren = 278,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdx = 279,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 280,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 281,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenChildren = 282,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxChildrenId = 283,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 284,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 285,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxFrontmatterTitle = 286,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 287,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsDepth = 288,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadingsValue = 289,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 290,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 291,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContent = 292,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentDigest = 293,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalContentFilePath = 294,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalDescription = 295,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalFieldOwners = 296,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalIgnoreType = 297,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalMediaType = 298,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalOwner = 299,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxInternalType = 300,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 301,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentChildren = 302,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxParentId = 303,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 304,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 305,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 306,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 307,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountParagraphs = 308,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountSentences = 309,
  ChildrenContentfulBlogPostContentTextNodeChildrenMdxWordCountWords = 310,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildren = 311,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenChildren = 312,
  ChildrenContentfulBlogPostContentTextNodeChildrenChildrenId = 313,
  ChildrenContentfulBlogPostContentTextNodeChildrenId = 314,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContent = 315,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentDigest = 316,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalContentFilePath = 317,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalDescription = 318,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalFieldOwners = 319,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalIgnoreType = 320,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalMediaType = 321,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalOwner = 322,
  ChildrenContentfulBlogPostContentTextNodeChildrenInternalType = 323,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentChildren = 324,
  ChildrenContentfulBlogPostContentTextNodeChildrenParentId = 325,
  ChildrenContentfulBlogPostContentTextNodeContent = 326,
  ChildrenContentfulBlogPostContentTextNodeId = 327,
  ChildrenContentfulBlogPostContentTextNodeInternalContent = 328,
  ChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 329,
  ChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 330,
  ChildrenContentfulBlogPostContentTextNodeInternalDescription = 331,
  ChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 332,
  ChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 333,
  ChildrenContentfulBlogPostContentTextNodeInternalMediaType = 334,
  ChildrenContentfulBlogPostContentTextNodeInternalOwner = 335,
  ChildrenContentfulBlogPostContentTextNodeInternalType = 336,
  ChildrenContentfulBlogPostContentTextNodeParentChildren = 337,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenChildren = 338,
  ChildrenContentfulBlogPostContentTextNodeParentChildrenId = 339,
  ChildrenContentfulBlogPostContentTextNodeParentId = 340,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContent = 341,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentDigest = 342,
  ChildrenContentfulBlogPostContentTextNodeParentInternalContentFilePath = 343,
  ChildrenContentfulBlogPostContentTextNodeParentInternalDescription = 344,
  ChildrenContentfulBlogPostContentTextNodeParentInternalFieldOwners = 345,
  ChildrenContentfulBlogPostContentTextNodeParentInternalIgnoreType = 346,
  ChildrenContentfulBlogPostContentTextNodeParentInternalMediaType = 347,
  ChildrenContentfulBlogPostContentTextNodeParentInternalOwner = 348,
  ChildrenContentfulBlogPostContentTextNodeParentInternalType = 349,
  ChildrenContentfulBlogPostContentTextNodeParentParentChildren = 350,
  ChildrenContentfulBlogPostContentTextNodeParentParentId = 351,
  ChildrenContentfulBlogPostContentTextNodeSysType = 352,
  ChildrenChildren = 353,
  ChildrenChildrenChildren = 354,
  ChildrenChildrenChildrenChildren = 355,
  ChildrenChildrenChildrenId = 356,
  ChildrenChildrenId = 357,
  ChildrenChildrenInternalContent = 358,
  ChildrenChildrenInternalContentDigest = 359,
  ChildrenChildrenInternalContentFilePath = 360,
  ChildrenChildrenInternalDescription = 361,
  ChildrenChildrenInternalFieldOwners = 362,
  ChildrenChildrenInternalIgnoreType = 363,
  ChildrenChildrenInternalMediaType = 364,
  ChildrenChildrenInternalOwner = 365,
  ChildrenChildrenInternalType = 366,
  ChildrenChildrenParentChildren = 367,
  ChildrenChildrenParentId = 368,
  ChildrenId = 369,
  ChildrenInternalContent = 370,
  ChildrenInternalContentDigest = 371,
  ChildrenInternalContentFilePath = 372,
  ChildrenInternalDescription = 373,
  ChildrenInternalFieldOwners = 374,
  ChildrenInternalIgnoreType = 375,
  ChildrenInternalMediaType = 376,
  ChildrenInternalOwner = 377,
  ChildrenInternalType = 378,
  ChildrenParentChildren = 379,
  ChildrenParentChildrenChildren = 380,
  ChildrenParentChildrenId = 381,
  ChildrenParentId = 382,
  ChildrenParentInternalContent = 383,
  ChildrenParentInternalContentDigest = 384,
  ChildrenParentInternalContentFilePath = 385,
  ChildrenParentInternalDescription = 386,
  ChildrenParentInternalFieldOwners = 387,
  ChildrenParentInternalIgnoreType = 388,
  ChildrenParentInternalMediaType = 389,
  ChildrenParentInternalOwner = 390,
  ChildrenParentInternalType = 391,
  ChildrenParentParentChildren = 392,
  ChildrenParentParentId = 393,
  ContentChildMdxBody = 394,
  ContentChildMdxChildren = 395,
  ContentChildMdxChildrenChildren = 396,
  ContentChildMdxChildrenId = 397,
  ContentChildMdxExcerpt = 398,
  ContentChildMdxFileAbsolutePath = 399,
  ContentChildMdxFrontmatterTitle = 400,
  ContentChildMdxHeadings = 401,
  ContentChildMdxHeadingsDepth = 402,
  ContentChildMdxHeadingsValue = 403,
  ContentChildMdxHtml = 404,
  ContentChildMdxId = 405,
  ContentChildMdxInternalContent = 406,
  ContentChildMdxInternalContentDigest = 407,
  ContentChildMdxInternalContentFilePath = 408,
  ContentChildMdxInternalDescription = 409,
  ContentChildMdxInternalFieldOwners = 410,
  ContentChildMdxInternalIgnoreType = 411,
  ContentChildMdxInternalMediaType = 412,
  ContentChildMdxInternalOwner = 413,
  ContentChildMdxInternalType = 414,
  ContentChildMdxMdxAst = 415,
  ContentChildMdxParentChildren = 416,
  ContentChildMdxParentId = 417,
  ContentChildMdxRawBody = 418,
  ContentChildMdxSlug = 419,
  ContentChildMdxTableOfContents = 420,
  ContentChildMdxTimeToRead = 421,
  ContentChildMdxWordCountParagraphs = 422,
  ContentChildMdxWordCountSentences = 423,
  ContentChildMdxWordCountWords = 424,
  ContentChildren = 425,
  ContentChildrenMdx = 426,
  ContentChildrenMdxBody = 427,
  ContentChildrenMdxChildren = 428,
  ContentChildrenMdxChildrenChildren = 429,
  ContentChildrenMdxChildrenId = 430,
  ContentChildrenMdxExcerpt = 431,
  ContentChildrenMdxFileAbsolutePath = 432,
  ContentChildrenMdxFrontmatterTitle = 433,
  ContentChildrenMdxHeadings = 434,
  ContentChildrenMdxHeadingsDepth = 435,
  ContentChildrenMdxHeadingsValue = 436,
  ContentChildrenMdxHtml = 437,
  ContentChildrenMdxId = 438,
  ContentChildrenMdxInternalContent = 439,
  ContentChildrenMdxInternalContentDigest = 440,
  ContentChildrenMdxInternalContentFilePath = 441,
  ContentChildrenMdxInternalDescription = 442,
  ContentChildrenMdxInternalFieldOwners = 443,
  ContentChildrenMdxInternalIgnoreType = 444,
  ContentChildrenMdxInternalMediaType = 445,
  ContentChildrenMdxInternalOwner = 446,
  ContentChildrenMdxInternalType = 447,
  ContentChildrenMdxMdxAst = 448,
  ContentChildrenMdxParentChildren = 449,
  ContentChildrenMdxParentId = 450,
  ContentChildrenMdxRawBody = 451,
  ContentChildrenMdxSlug = 452,
  ContentChildrenMdxTableOfContents = 453,
  ContentChildrenMdxTimeToRead = 454,
  ContentChildrenMdxWordCountParagraphs = 455,
  ContentChildrenMdxWordCountSentences = 456,
  ContentChildrenMdxWordCountWords = 457,
  ContentChildrenChildren = 458,
  ContentChildrenChildrenChildren = 459,
  ContentChildrenChildrenId = 460,
  ContentChildrenId = 461,
  ContentChildrenInternalContent = 462,
  ContentChildrenInternalContentDigest = 463,
  ContentChildrenInternalContentFilePath = 464,
  ContentChildrenInternalDescription = 465,
  ContentChildrenInternalFieldOwners = 466,
  ContentChildrenInternalIgnoreType = 467,
  ContentChildrenInternalMediaType = 468,
  ContentChildrenInternalOwner = 469,
  ContentChildrenInternalType = 470,
  ContentChildrenParentChildren = 471,
  ContentChildrenParentId = 472,
  ContentContent = 473,
  ContentId = 474,
  ContentInternalContent = 475,
  ContentInternalContentDigest = 476,
  ContentInternalContentFilePath = 477,
  ContentInternalDescription = 478,
  ContentInternalFieldOwners = 479,
  ContentInternalIgnoreType = 480,
  ContentInternalMediaType = 481,
  ContentInternalOwner = 482,
  ContentInternalType = 483,
  ContentParentChildren = 484,
  ContentParentChildrenChildren = 485,
  ContentParentChildrenId = 486,
  ContentParentId = 487,
  ContentParentInternalContent = 488,
  ContentParentInternalContentDigest = 489,
  ContentParentInternalContentFilePath = 490,
  ContentParentInternalDescription = 491,
  ContentParentInternalFieldOwners = 492,
  ContentParentInternalIgnoreType = 493,
  ContentParentInternalMediaType = 494,
  ContentParentInternalOwner = 495,
  ContentParentInternalType = 496,
  ContentParentParentChildren = 497,
  ContentParentParentId = 498,
  ContentSysType = 499,
  ContentfulId = 500,
  Created = 501,
  CreatedAt = 502,
  Excerpt = 503,
  GatsbyPath = 504,
  Id = 505,
  InternalContent = 506,
  InternalContentDigest = 507,
  InternalContentFilePath = 508,
  InternalDescription = 509,
  InternalFieldOwners = 510,
  InternalIgnoreType = 511,
  InternalMediaType = 512,
  InternalOwner = 513,
  InternalType = 514,
  NodeLocale = 515,
  ParentChildren = 516,
  ParentChildrenChildren = 517,
  ParentChildrenChildrenChildren = 518,
  ParentChildrenChildrenId = 519,
  ParentChildrenId = 520,
  ParentChildrenInternalContent = 521,
  ParentChildrenInternalContentDigest = 522,
  ParentChildrenInternalContentFilePath = 523,
  ParentChildrenInternalDescription = 524,
  ParentChildrenInternalFieldOwners = 525,
  ParentChildrenInternalIgnoreType = 526,
  ParentChildrenInternalMediaType = 527,
  ParentChildrenInternalOwner = 528,
  ParentChildrenInternalType = 529,
  ParentChildrenParentChildren = 530,
  ParentChildrenParentId = 531,
  ParentId = 532,
  ParentInternalContent = 533,
  ParentInternalContentDigest = 534,
  ParentInternalContentFilePath = 535,
  ParentInternalDescription = 536,
  ParentInternalFieldOwners = 537,
  ParentInternalIgnoreType = 538,
  ParentInternalMediaType = 539,
  ParentInternalOwner = 540,
  ParentInternalType = 541,
  ParentParentChildren = 542,
  ParentParentChildrenChildren = 543,
  ParentParentChildrenId = 544,
  ParentParentId = 545,
  ParentParentInternalContent = 546,
  ParentParentInternalContentDigest = 547,
  ParentParentInternalContentFilePath = 548,
  ParentParentInternalDescription = 549,
  ParentParentInternalFieldOwners = 550,
  ParentParentInternalIgnoreType = 551,
  ParentParentInternalMediaType = 552,
  ParentParentInternalOwner = 553,
  ParentParentInternalType = 554,
  ParentParentParentChildren = 555,
  ParentParentParentId = 556,
  Slug = 557,
  SpaceId = 558,
  SysContentTypeSysId = 559,
  SysContentTypeSysLinkType = 560,
  SysContentTypeSysType = 561,
  SysRevision = 562,
  SysType = 563,
  Tags = 564,
  TagsBlogPost = 565,
  TagsBlogPostCategoryBlogPost = 566,
  TagsBlogPostCategoryChildren = 567,
  TagsBlogPostCategoryContentfulId = 568,
  TagsBlogPostCategoryCreatedAt = 569,
  TagsBlogPostCategoryId = 570,
  TagsBlogPostCategoryName = 571,
  TagsBlogPostCategoryNodeLocale = 572,
  TagsBlogPostCategorySlug = 573,
  TagsBlogPostCategorySortKey = 574,
  TagsBlogPostCategorySpaceId = 575,
  TagsBlogPostCategoryUpdatedAt = 576,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 577,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 578,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 579,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 580,
  TagsBlogPostChildren = 581,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 582,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 583,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 584,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 585,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 586,
  TagsBlogPostChildrenChildren = 587,
  TagsBlogPostChildrenId = 588,
  TagsBlogPostContentChildren = 589,
  TagsBlogPostContentChildrenMdx = 590,
  TagsBlogPostContentContent = 591,
  TagsBlogPostContentId = 592,
  TagsBlogPostContentfulId = 593,
  TagsBlogPostCreated = 594,
  TagsBlogPostCreatedAt = 595,
  TagsBlogPostExcerpt = 596,
  TagsBlogPostGatsbyPath = 597,
  TagsBlogPostId = 598,
  TagsBlogPostInternalContent = 599,
  TagsBlogPostInternalContentDigest = 600,
  TagsBlogPostInternalContentFilePath = 601,
  TagsBlogPostInternalDescription = 602,
  TagsBlogPostInternalFieldOwners = 603,
  TagsBlogPostInternalIgnoreType = 604,
  TagsBlogPostInternalMediaType = 605,
  TagsBlogPostInternalOwner = 606,
  TagsBlogPostInternalType = 607,
  TagsBlogPostNodeLocale = 608,
  TagsBlogPostParentChildren = 609,
  TagsBlogPostParentId = 610,
  TagsBlogPostSlug = 611,
  TagsBlogPostSpaceId = 612,
  TagsBlogPostSysRevision = 613,
  TagsBlogPostSysType = 614,
  TagsBlogPostTags = 615,
  TagsBlogPostTagsBlogPost = 616,
  TagsBlogPostTagsChildren = 617,
  TagsBlogPostTagsContentfulId = 618,
  TagsBlogPostTagsCreatedAt = 619,
  TagsBlogPostTagsId = 620,
  TagsBlogPostTagsLevel = 621,
  TagsBlogPostTagsName = 622,
  TagsBlogPostTagsNodeLocale = 623,
  TagsBlogPostTagsOss = 624,
  TagsBlogPostTagsProject = 625,
  TagsBlogPostTagsSkillGrpup = 626,
  TagsBlogPostTagsSkillMap = 627,
  TagsBlogPostTagsSpaceId = 628,
  TagsBlogPostTagsUpdatedAt = 629,
  TagsBlogPostThumbnailChildren = 630,
  TagsBlogPostThumbnailContentfulId = 631,
  TagsBlogPostThumbnailCreatedAt = 632,
  TagsBlogPostThumbnailDescription = 633,
  TagsBlogPostThumbnailFilename = 634,
  TagsBlogPostThumbnailFilesize = 635,
  TagsBlogPostThumbnailGatsbyImage = 636,
  TagsBlogPostThumbnailGatsbyImageData = 637,
  TagsBlogPostThumbnailHeight = 638,
  TagsBlogPostThumbnailId = 639,
  TagsBlogPostThumbnailMimeType = 640,
  TagsBlogPostThumbnailNodeLocale = 641,
  TagsBlogPostThumbnailPlaceholderUrl = 642,
  TagsBlogPostThumbnailPublicUrl = 643,
  TagsBlogPostThumbnailSize = 644,
  TagsBlogPostThumbnailSpaceId = 645,
  TagsBlogPostThumbnailTitle = 646,
  TagsBlogPostThumbnailUpdatedAt = 647,
  TagsBlogPostThumbnailUrl = 648,
  TagsBlogPostThumbnailWidth = 649,
  TagsBlogPostTitle = 650,
  TagsBlogPostUpdated = 651,
  TagsBlogPostUpdatedAt = 652,
  TagsChildren = 653,
  TagsChildrenChildren = 654,
  TagsChildrenChildrenChildren = 655,
  TagsChildrenChildrenId = 656,
  TagsChildrenId = 657,
  TagsChildrenInternalContent = 658,
  TagsChildrenInternalContentDigest = 659,
  TagsChildrenInternalContentFilePath = 660,
  TagsChildrenInternalDescription = 661,
  TagsChildrenInternalFieldOwners = 662,
  TagsChildrenInternalIgnoreType = 663,
  TagsChildrenInternalMediaType = 664,
  TagsChildrenInternalOwner = 665,
  TagsChildrenInternalType = 666,
  TagsChildrenParentChildren = 667,
  TagsChildrenParentId = 668,
  TagsContentfulId = 669,
  TagsCreatedAt = 670,
  TagsId = 671,
  TagsInternalContent = 672,
  TagsInternalContentDigest = 673,
  TagsInternalContentFilePath = 674,
  TagsInternalDescription = 675,
  TagsInternalFieldOwners = 676,
  TagsInternalIgnoreType = 677,
  TagsInternalMediaType = 678,
  TagsInternalOwner = 679,
  TagsInternalType = 680,
  TagsLevel = 681,
  TagsName = 682,
  TagsNodeLocale = 683,
  TagsOss = 684,
  TagsOssChildContentfulOssDetailTextNodeChildren = 685,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 686,
  TagsOssChildContentfulOssDetailTextNodeDetail = 687,
  TagsOssChildContentfulOssDetailTextNodeId = 688,
  TagsOssChildren = 689,
  TagsOssChildrenContentfulOssDetailTextNode = 690,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 691,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 692,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 693,
  TagsOssChildrenContentfulOssDetailTextNodeId = 694,
  TagsOssChildrenChildren = 695,
  TagsOssChildrenId = 696,
  TagsOssContentfulId = 697,
  TagsOssCreatedAt = 698,
  TagsOssDetailChildren = 699,
  TagsOssDetailChildrenMdx = 700,
  TagsOssDetailDetail = 701,
  TagsOssDetailId = 702,
  TagsOssHref = 703,
  TagsOssIconChildren = 704,
  TagsOssIconChildrenContentfulIconSvgTextNode = 705,
  TagsOssIconContact = 706,
  TagsOssIconContentfulId = 707,
  TagsOssIconCreatedAt = 708,
  TagsOssIconHistory = 709,
  TagsOssIconId = 710,
  TagsOssIconName = 711,
  TagsOssIconNodeLocale = 712,
  TagsOssIconOss = 713,
  TagsOssIconProject = 714,
  TagsOssIconSpaceId = 715,
  TagsOssIconUpdatedAt = 716,
  TagsOssIconWhatICanDo = 717,
  TagsOssId = 718,
  TagsOssImageChildren = 719,
  TagsOssImageContentfulId = 720,
  TagsOssImageCreatedAt = 721,
  TagsOssImageDescription = 722,
  TagsOssImageFilename = 723,
  TagsOssImageFilesize = 724,
  TagsOssImageGatsbyImage = 725,
  TagsOssImageGatsbyImageData = 726,
  TagsOssImageHeight = 727,
  TagsOssImageId = 728,
  TagsOssImageMimeType = 729,
  TagsOssImageNodeLocale = 730,
  TagsOssImagePlaceholderUrl = 731,
  TagsOssImagePublicUrl = 732,
  TagsOssImageSize = 733,
  TagsOssImageSpaceId = 734,
  TagsOssImageTitle = 735,
  TagsOssImageUpdatedAt = 736,
  TagsOssImageUrl = 737,
  TagsOssImageWidth = 738,
  TagsOssInternalContent = 739,
  TagsOssInternalContentDigest = 740,
  TagsOssInternalContentFilePath = 741,
  TagsOssInternalDescription = 742,
  TagsOssInternalFieldOwners = 743,
  TagsOssInternalIgnoreType = 744,
  TagsOssInternalMediaType = 745,
  TagsOssInternalOwner = 746,
  TagsOssInternalType = 747,
  TagsOssName = 748,
  TagsOssNodeLocale = 749,
  TagsOssParentChildren = 750,
  TagsOssParentId = 751,
  TagsOssSpaceId = 752,
  TagsOssStartDate = 753,
  TagsOssSubName = 754,
  TagsOssSysRevision = 755,
  TagsOssSysType = 756,
  TagsOssTags = 757,
  TagsOssTagsBlogPost = 758,
  TagsOssTagsChildren = 759,
  TagsOssTagsContentfulId = 760,
  TagsOssTagsCreatedAt = 761,
  TagsOssTagsId = 762,
  TagsOssTagsLevel = 763,
  TagsOssTagsName = 764,
  TagsOssTagsNodeLocale = 765,
  TagsOssTagsOss = 766,
  TagsOssTagsProject = 767,
  TagsOssTagsSkillGrpup = 768,
  TagsOssTagsSkillMap = 769,
  TagsOssTagsSpaceId = 770,
  TagsOssTagsUpdatedAt = 771,
  TagsOssUpdatedAt = 772,
  TagsParentChildren = 773,
  TagsParentChildrenChildren = 774,
  TagsParentChildrenId = 775,
  TagsParentId = 776,
  TagsParentInternalContent = 777,
  TagsParentInternalContentDigest = 778,
  TagsParentInternalContentFilePath = 779,
  TagsParentInternalDescription = 780,
  TagsParentInternalFieldOwners = 781,
  TagsParentInternalIgnoreType = 782,
  TagsParentInternalMediaType = 783,
  TagsParentInternalOwner = 784,
  TagsParentInternalType = 785,
  TagsParentParentChildren = 786,
  TagsParentParentId = 787,
  TagsProject = 788,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 789,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 790,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 791,
  TagsProjectChildContentfulProjectDetailTextNodeId = 792,
  TagsProjectChildren = 793,
  TagsProjectChildrenContentfulProjectDetailTextNode = 794,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 795,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 796,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 797,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 798,
  TagsProjectChildrenChildren = 799,
  TagsProjectChildrenId = 800,
  TagsProjectContentfulId = 801,
  TagsProjectCreatedAt = 802,
  TagsProjectDetailChildren = 803,
  TagsProjectDetailChildrenMdx = 804,
  TagsProjectDetailDetail = 805,
  TagsProjectDetailId = 806,
  TagsProjectEndDate = 807,
  TagsProjectIconChildren = 808,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 809,
  TagsProjectIconContact = 810,
  TagsProjectIconContentfulId = 811,
  TagsProjectIconCreatedAt = 812,
  TagsProjectIconHistory = 813,
  TagsProjectIconId = 814,
  TagsProjectIconName = 815,
  TagsProjectIconNodeLocale = 816,
  TagsProjectIconOss = 817,
  TagsProjectIconProject = 818,
  TagsProjectIconSpaceId = 819,
  TagsProjectIconUpdatedAt = 820,
  TagsProjectIconWhatICanDo = 821,
  TagsProjectId = 822,
  TagsProjectInternalContent = 823,
  TagsProjectInternalContentDigest = 824,
  TagsProjectInternalContentFilePath = 825,
  TagsProjectInternalDescription = 826,
  TagsProjectInternalFieldOwners = 827,
  TagsProjectInternalIgnoreType = 828,
  TagsProjectInternalMediaType = 829,
  TagsProjectInternalOwner = 830,
  TagsProjectInternalType = 831,
  TagsProjectName = 832,
  TagsProjectNodeLocale = 833,
  TagsProjectParentChildren = 834,
  TagsProjectParentId = 835,
  TagsProjectSpaceId = 836,
  TagsProjectStartDate = 837,
  TagsProjectSubName = 838,
  TagsProjectSysRevision = 839,
  TagsProjectSysType = 840,
  TagsProjectTags = 841,
  TagsProjectTagsBlogPost = 842,
  TagsProjectTagsChildren = 843,
  TagsProjectTagsContentfulId = 844,
  TagsProjectTagsCreatedAt = 845,
  TagsProjectTagsId = 846,
  TagsProjectTagsLevel = 847,
  TagsProjectTagsName = 848,
  TagsProjectTagsNodeLocale = 849,
  TagsProjectTagsOss = 850,
  TagsProjectTagsProject = 851,
  TagsProjectTagsSkillGrpup = 852,
  TagsProjectTagsSkillMap = 853,
  TagsProjectTagsSpaceId = 854,
  TagsProjectTagsUpdatedAt = 855,
  TagsProjectUpdatedAt = 856,
  TagsSkillGrpup = 857,
  TagsSkillGrpupChildren = 858,
  TagsSkillGrpupChildrenChildren = 859,
  TagsSkillGrpupChildrenId = 860,
  TagsSkillGrpupContentfulId = 861,
  TagsSkillGrpupCreatedAt = 862,
  TagsSkillGrpupId = 863,
  TagsSkillGrpupInternalContent = 864,
  TagsSkillGrpupInternalContentDigest = 865,
  TagsSkillGrpupInternalContentFilePath = 866,
  TagsSkillGrpupInternalDescription = 867,
  TagsSkillGrpupInternalFieldOwners = 868,
  TagsSkillGrpupInternalIgnoreType = 869,
  TagsSkillGrpupInternalMediaType = 870,
  TagsSkillGrpupInternalOwner = 871,
  TagsSkillGrpupInternalType = 872,
  TagsSkillGrpupName = 873,
  TagsSkillGrpupNodeLocale = 874,
  TagsSkillGrpupParentChildren = 875,
  TagsSkillGrpupParentId = 876,
  TagsSkillGrpupSkillMap = 877,
  TagsSkillGrpupSkillMapChildren = 878,
  TagsSkillGrpupSkillMapContentfulId = 879,
  TagsSkillGrpupSkillMapCreatedAt = 880,
  TagsSkillGrpupSkillMapExpanded = 881,
  TagsSkillGrpupSkillMapId = 882,
  TagsSkillGrpupSkillMapName = 883,
  TagsSkillGrpupSkillMapNodeLocale = 884,
  TagsSkillGrpupSkillMapSkillGroups = 885,
  TagsSkillGrpupSkillMapSkills = 886,
  TagsSkillGrpupSkillMapSortKey = 887,
  TagsSkillGrpupSkillMapSpaceId = 888,
  TagsSkillGrpupSkillMapUpdatedAt = 889,
  TagsSkillGrpupSkills = 890,
  TagsSkillGrpupSkillsBlogPost = 891,
  TagsSkillGrpupSkillsChildren = 892,
  TagsSkillGrpupSkillsContentfulId = 893,
  TagsSkillGrpupSkillsCreatedAt = 894,
  TagsSkillGrpupSkillsId = 895,
  TagsSkillGrpupSkillsLevel = 896,
  TagsSkillGrpupSkillsName = 897,
  TagsSkillGrpupSkillsNodeLocale = 898,
  TagsSkillGrpupSkillsOss = 899,
  TagsSkillGrpupSkillsProject = 900,
  TagsSkillGrpupSkillsSkillGrpup = 901,
  TagsSkillGrpupSkillsSkillMap = 902,
  TagsSkillGrpupSkillsSpaceId = 903,
  TagsSkillGrpupSkillsUpdatedAt = 904,
  TagsSkillGrpupSpaceId = 905,
  TagsSkillGrpupSysRevision = 906,
  TagsSkillGrpupSysType = 907,
  TagsSkillGrpupUpdatedAt = 908,
  TagsSkillMap = 909,
  TagsSkillMapChildren = 910,
  TagsSkillMapChildrenChildren = 911,
  TagsSkillMapChildrenId = 912,
  TagsSkillMapContentfulId = 913,
  TagsSkillMapCreatedAt = 914,
  TagsSkillMapExpanded = 915,
  TagsSkillMapId = 916,
  TagsSkillMapInternalContent = 917,
  TagsSkillMapInternalContentDigest = 918,
  TagsSkillMapInternalContentFilePath = 919,
  TagsSkillMapInternalDescription = 920,
  TagsSkillMapInternalFieldOwners = 921,
  TagsSkillMapInternalIgnoreType = 922,
  TagsSkillMapInternalMediaType = 923,
  TagsSkillMapInternalOwner = 924,
  TagsSkillMapInternalType = 925,
  TagsSkillMapName = 926,
  TagsSkillMapNodeLocale = 927,
  TagsSkillMapParentChildren = 928,
  TagsSkillMapParentId = 929,
  TagsSkillMapSkillGroups = 930,
  TagsSkillMapSkillGroupsChildren = 931,
  TagsSkillMapSkillGroupsContentfulId = 932,
  TagsSkillMapSkillGroupsCreatedAt = 933,
  TagsSkillMapSkillGroupsId = 934,
  TagsSkillMapSkillGroupsName = 935,
  TagsSkillMapSkillGroupsNodeLocale = 936,
  TagsSkillMapSkillGroupsSkillMap = 937,
  TagsSkillMapSkillGroupsSkills = 938,
  TagsSkillMapSkillGroupsSpaceId = 939,
  TagsSkillMapSkillGroupsUpdatedAt = 940,
  TagsSkillMapSkills = 941,
  TagsSkillMapSkillsBlogPost = 942,
  TagsSkillMapSkillsChildren = 943,
  TagsSkillMapSkillsContentfulId = 944,
  TagsSkillMapSkillsCreatedAt = 945,
  TagsSkillMapSkillsId = 946,
  TagsSkillMapSkillsLevel = 947,
  TagsSkillMapSkillsName = 948,
  TagsSkillMapSkillsNodeLocale = 949,
  TagsSkillMapSkillsOss = 950,
  TagsSkillMapSkillsProject = 951,
  TagsSkillMapSkillsSkillGrpup = 952,
  TagsSkillMapSkillsSkillMap = 953,
  TagsSkillMapSkillsSpaceId = 954,
  TagsSkillMapSkillsUpdatedAt = 955,
  TagsSkillMapSortKey = 956,
  TagsSkillMapSpaceId = 957,
  TagsSkillMapSysRevision = 958,
  TagsSkillMapSysType = 959,
  TagsSkillMapUpdatedAt = 960,
  TagsSpaceId = 961,
  TagsSysRevision = 962,
  TagsSysType = 963,
  TagsUpdatedAt = 964,
  ThumbnailChildren = 965,
  ThumbnailChildrenChildren = 966,
  ThumbnailChildrenChildrenChildren = 967,
  ThumbnailChildrenChildrenId = 968,
  ThumbnailChildrenId = 969,
  ThumbnailChildrenInternalContent = 970,
  ThumbnailChildrenInternalContentDigest = 971,
  ThumbnailChildrenInternalContentFilePath = 972,
  ThumbnailChildrenInternalDescription = 973,
  ThumbnailChildrenInternalFieldOwners = 974,
  ThumbnailChildrenInternalIgnoreType = 975,
  ThumbnailChildrenInternalMediaType = 976,
  ThumbnailChildrenInternalOwner = 977,
  ThumbnailChildrenInternalType = 978,
  ThumbnailChildrenParentChildren = 979,
  ThumbnailChildrenParentId = 980,
  ThumbnailContentfulId = 981,
  ThumbnailCreatedAt = 982,
  ThumbnailDescription = 983,
  ThumbnailFileContentType = 984,
  ThumbnailFileDetailsSize = 985,
  ThumbnailFileFileName = 986,
  ThumbnailFileUrl = 987,
  ThumbnailFilename = 988,
  ThumbnailFilesize = 989,
  ThumbnailGatsbyImage = 990,
  ThumbnailGatsbyImageData = 991,
  ThumbnailHeight = 992,
  ThumbnailId = 993,
  ThumbnailInternalContent = 994,
  ThumbnailInternalContentDigest = 995,
  ThumbnailInternalContentFilePath = 996,
  ThumbnailInternalDescription = 997,
  ThumbnailInternalFieldOwners = 998,
  ThumbnailInternalIgnoreType = 999,
  ThumbnailInternalMediaType = 1000,
  ThumbnailInternalOwner = 1001,
  ThumbnailInternalType = 1002,
  ThumbnailMimeType = 1003,
  ThumbnailNodeLocale = 1004,
  ThumbnailParentChildren = 1005,
  ThumbnailParentChildrenChildren = 1006,
  ThumbnailParentChildrenId = 1007,
  ThumbnailParentId = 1008,
  ThumbnailParentInternalContent = 1009,
  ThumbnailParentInternalContentDigest = 1010,
  ThumbnailParentInternalContentFilePath = 1011,
  ThumbnailParentInternalDescription = 1012,
  ThumbnailParentInternalFieldOwners = 1013,
  ThumbnailParentInternalIgnoreType = 1014,
  ThumbnailParentInternalMediaType = 1015,
  ThumbnailParentInternalOwner = 1016,
  ThumbnailParentInternalType = 1017,
  ThumbnailParentParentChildren = 1018,
  ThumbnailParentParentId = 1019,
  ThumbnailPlaceholderUrl = 1020,
  ThumbnailPublicUrl = 1021,
  ThumbnailResizeHeight = 1022,
  ThumbnailResizeSrc = 1023,
  ThumbnailResizeWidth = 1024,
  ThumbnailSize = 1025,
  ThumbnailSpaceId = 1026,
  ThumbnailSysRevision = 1027,
  ThumbnailSysType = 1028,
  ThumbnailTitle = 1029,
  ThumbnailUpdatedAt = 1030,
  ThumbnailUrl = 1031,
  ThumbnailWidth = 1032,
  Title = 1033,
  Updated = 1034,
  UpdatedAt = 1035
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
  BlogPostCategorySlug = 36,
  BlogPostCategorySortKey = 37,
  BlogPostCategorySpaceId = 38,
  BlogPostCategorySysRevision = 39,
  BlogPostCategorySysType = 40,
  BlogPostCategoryUpdatedAt = 41,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxBody = 42,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxChildren = 43,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 44,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 45,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHeadings = 46,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHtml = 47,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxId = 48,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 49,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxRawBody = 50,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxSlug = 51,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 52,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 53,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 54,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 55,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxBody = 56,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 57,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 58,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 59,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 60,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 61,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxId = 62,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 63,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 64,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 65,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 66,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 67,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 68,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 69,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 70,
  BlogPostChildContentfulBlogPostContentTextNodeId = 71,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 72,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 73,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentFilePath = 74,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 75,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 76,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 77,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 78,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 79,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 80,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 81,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 82,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 83,
  BlogPostChildren = 84,
  BlogPostChildrenContentfulBlogPostContentTextNode = 85,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxBody = 86,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 87,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 88,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 89,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 90,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 91,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxId = 92,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 93,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 94,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 95,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 96,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 97,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 98,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 99,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 100,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 101,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 102,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 103,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 104,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 105,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 106,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 107,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 108,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 109,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 110,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 111,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 112,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 113,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 114,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 115,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 116,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 117,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 118,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 119,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 120,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 121,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 122,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 123,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 124,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 125,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 126,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 127,
  BlogPostChildrenChildren = 128,
  BlogPostChildrenChildrenChildren = 129,
  BlogPostChildrenChildrenId = 130,
  BlogPostChildrenId = 131,
  BlogPostChildrenInternalContent = 132,
  BlogPostChildrenInternalContentDigest = 133,
  BlogPostChildrenInternalContentFilePath = 134,
  BlogPostChildrenInternalDescription = 135,
  BlogPostChildrenInternalFieldOwners = 136,
  BlogPostChildrenInternalIgnoreType = 137,
  BlogPostChildrenInternalMediaType = 138,
  BlogPostChildrenInternalOwner = 139,
  BlogPostChildrenInternalType = 140,
  BlogPostChildrenParentChildren = 141,
  BlogPostChildrenParentId = 142,
  BlogPostContentChildMdxBody = 143,
  BlogPostContentChildMdxChildren = 144,
  BlogPostContentChildMdxExcerpt = 145,
  BlogPostContentChildMdxFileAbsolutePath = 146,
  BlogPostContentChildMdxHeadings = 147,
  BlogPostContentChildMdxHtml = 148,
  BlogPostContentChildMdxId = 149,
  BlogPostContentChildMdxMdxAst = 150,
  BlogPostContentChildMdxRawBody = 151,
  BlogPostContentChildMdxSlug = 152,
  BlogPostContentChildMdxTableOfContents = 153,
  BlogPostContentChildMdxTimeToRead = 154,
  BlogPostContentChildren = 155,
  BlogPostContentChildrenMdx = 156,
  BlogPostContentChildrenMdxBody = 157,
  BlogPostContentChildrenMdxChildren = 158,
  BlogPostContentChildrenMdxExcerpt = 159,
  BlogPostContentChildrenMdxFileAbsolutePath = 160,
  BlogPostContentChildrenMdxHeadings = 161,
  BlogPostContentChildrenMdxHtml = 162,
  BlogPostContentChildrenMdxId = 163,
  BlogPostContentChildrenMdxMdxAst = 164,
  BlogPostContentChildrenMdxRawBody = 165,
  BlogPostContentChildrenMdxSlug = 166,
  BlogPostContentChildrenMdxTableOfContents = 167,
  BlogPostContentChildrenMdxTimeToRead = 168,
  BlogPostContentChildrenChildren = 169,
  BlogPostContentChildrenId = 170,
  BlogPostContentContent = 171,
  BlogPostContentId = 172,
  BlogPostContentInternalContent = 173,
  BlogPostContentInternalContentDigest = 174,
  BlogPostContentInternalContentFilePath = 175,
  BlogPostContentInternalDescription = 176,
  BlogPostContentInternalFieldOwners = 177,
  BlogPostContentInternalIgnoreType = 178,
  BlogPostContentInternalMediaType = 179,
  BlogPostContentInternalOwner = 180,
  BlogPostContentInternalType = 181,
  BlogPostContentParentChildren = 182,
  BlogPostContentParentId = 183,
  BlogPostContentSysType = 184,
  BlogPostContentfulId = 185,
  BlogPostCreated = 186,
  BlogPostCreatedAt = 187,
  BlogPostExcerpt = 188,
  BlogPostGatsbyPath = 189,
  BlogPostId = 190,
  BlogPostInternalContent = 191,
  BlogPostInternalContentDigest = 192,
  BlogPostInternalContentFilePath = 193,
  BlogPostInternalDescription = 194,
  BlogPostInternalFieldOwners = 195,
  BlogPostInternalIgnoreType = 196,
  BlogPostInternalMediaType = 197,
  BlogPostInternalOwner = 198,
  BlogPostInternalType = 199,
  BlogPostNodeLocale = 200,
  BlogPostParentChildren = 201,
  BlogPostParentChildrenChildren = 202,
  BlogPostParentChildrenId = 203,
  BlogPostParentId = 204,
  BlogPostParentInternalContent = 205,
  BlogPostParentInternalContentDigest = 206,
  BlogPostParentInternalContentFilePath = 207,
  BlogPostParentInternalDescription = 208,
  BlogPostParentInternalFieldOwners = 209,
  BlogPostParentInternalIgnoreType = 210,
  BlogPostParentInternalMediaType = 211,
  BlogPostParentInternalOwner = 212,
  BlogPostParentInternalType = 213,
  BlogPostParentParentChildren = 214,
  BlogPostParentParentId = 215,
  BlogPostSlug = 216,
  BlogPostSpaceId = 217,
  BlogPostSysRevision = 218,
  BlogPostSysType = 219,
  BlogPostTags = 220,
  BlogPostTagsBlogPost = 221,
  BlogPostTagsBlogPostChildren = 222,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 223,
  BlogPostTagsBlogPostContentfulId = 224,
  BlogPostTagsBlogPostCreated = 225,
  BlogPostTagsBlogPostCreatedAt = 226,
  BlogPostTagsBlogPostExcerpt = 227,
  BlogPostTagsBlogPostGatsbyPath = 228,
  BlogPostTagsBlogPostId = 229,
  BlogPostTagsBlogPostNodeLocale = 230,
  BlogPostTagsBlogPostSlug = 231,
  BlogPostTagsBlogPostSpaceId = 232,
  BlogPostTagsBlogPostTags = 233,
  BlogPostTagsBlogPostTitle = 234,
  BlogPostTagsBlogPostUpdated = 235,
  BlogPostTagsBlogPostUpdatedAt = 236,
  BlogPostTagsChildren = 237,
  BlogPostTagsChildrenChildren = 238,
  BlogPostTagsChildrenId = 239,
  BlogPostTagsContentfulId = 240,
  BlogPostTagsCreatedAt = 241,
  BlogPostTagsId = 242,
  BlogPostTagsInternalContent = 243,
  BlogPostTagsInternalContentDigest = 244,
  BlogPostTagsInternalContentFilePath = 245,
  BlogPostTagsInternalDescription = 246,
  BlogPostTagsInternalFieldOwners = 247,
  BlogPostTagsInternalIgnoreType = 248,
  BlogPostTagsInternalMediaType = 249,
  BlogPostTagsInternalOwner = 250,
  BlogPostTagsInternalType = 251,
  BlogPostTagsLevel = 252,
  BlogPostTagsName = 253,
  BlogPostTagsNodeLocale = 254,
  BlogPostTagsOss = 255,
  BlogPostTagsOssChildren = 256,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 257,
  BlogPostTagsOssContentfulId = 258,
  BlogPostTagsOssCreatedAt = 259,
  BlogPostTagsOssHref = 260,
  BlogPostTagsOssId = 261,
  BlogPostTagsOssName = 262,
  BlogPostTagsOssNodeLocale = 263,
  BlogPostTagsOssSpaceId = 264,
  BlogPostTagsOssStartDate = 265,
  BlogPostTagsOssSubName = 266,
  BlogPostTagsOssTags = 267,
  BlogPostTagsOssUpdatedAt = 268,
  BlogPostTagsParentChildren = 269,
  BlogPostTagsParentId = 270,
  BlogPostTagsProject = 271,
  BlogPostTagsProjectChildren = 272,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 273,
  BlogPostTagsProjectContentfulId = 274,
  BlogPostTagsProjectCreatedAt = 275,
  BlogPostTagsProjectEndDate = 276,
  BlogPostTagsProjectId = 277,
  BlogPostTagsProjectName = 278,
  BlogPostTagsProjectNodeLocale = 279,
  BlogPostTagsProjectSpaceId = 280,
  BlogPostTagsProjectStartDate = 281,
  BlogPostTagsProjectSubName = 282,
  BlogPostTagsProjectTags = 283,
  BlogPostTagsProjectUpdatedAt = 284,
  BlogPostTagsSkillGrpup = 285,
  BlogPostTagsSkillGrpupChildren = 286,
  BlogPostTagsSkillGrpupContentfulId = 287,
  BlogPostTagsSkillGrpupCreatedAt = 288,
  BlogPostTagsSkillGrpupId = 289,
  BlogPostTagsSkillGrpupName = 290,
  BlogPostTagsSkillGrpupNodeLocale = 291,
  BlogPostTagsSkillGrpupSkillMap = 292,
  BlogPostTagsSkillGrpupSkills = 293,
  BlogPostTagsSkillGrpupSpaceId = 294,
  BlogPostTagsSkillGrpupUpdatedAt = 295,
  BlogPostTagsSkillMap = 296,
  BlogPostTagsSkillMapChildren = 297,
  BlogPostTagsSkillMapContentfulId = 298,
  BlogPostTagsSkillMapCreatedAt = 299,
  BlogPostTagsSkillMapExpanded = 300,
  BlogPostTagsSkillMapId = 301,
  BlogPostTagsSkillMapName = 302,
  BlogPostTagsSkillMapNodeLocale = 303,
  BlogPostTagsSkillMapSkillGroups = 304,
  BlogPostTagsSkillMapSkills = 305,
  BlogPostTagsSkillMapSortKey = 306,
  BlogPostTagsSkillMapSpaceId = 307,
  BlogPostTagsSkillMapUpdatedAt = 308,
  BlogPostTagsSpaceId = 309,
  BlogPostTagsSysRevision = 310,
  BlogPostTagsSysType = 311,
  BlogPostTagsUpdatedAt = 312,
  BlogPostThumbnailChildren = 313,
  BlogPostThumbnailChildrenChildren = 314,
  BlogPostThumbnailChildrenId = 315,
  BlogPostThumbnailContentfulId = 316,
  BlogPostThumbnailCreatedAt = 317,
  BlogPostThumbnailDescription = 318,
  BlogPostThumbnailFileContentType = 319,
  BlogPostThumbnailFileFileName = 320,
  BlogPostThumbnailFileUrl = 321,
  BlogPostThumbnailFilename = 322,
  BlogPostThumbnailFilesize = 323,
  BlogPostThumbnailGatsbyImage = 324,
  BlogPostThumbnailGatsbyImageData = 325,
  BlogPostThumbnailHeight = 326,
  BlogPostThumbnailId = 327,
  BlogPostThumbnailInternalContent = 328,
  BlogPostThumbnailInternalContentDigest = 329,
  BlogPostThumbnailInternalContentFilePath = 330,
  BlogPostThumbnailInternalDescription = 331,
  BlogPostThumbnailInternalFieldOwners = 332,
  BlogPostThumbnailInternalIgnoreType = 333,
  BlogPostThumbnailInternalMediaType = 334,
  BlogPostThumbnailInternalOwner = 335,
  BlogPostThumbnailInternalType = 336,
  BlogPostThumbnailMimeType = 337,
  BlogPostThumbnailNodeLocale = 338,
  BlogPostThumbnailParentChildren = 339,
  BlogPostThumbnailParentId = 340,
  BlogPostThumbnailPlaceholderUrl = 341,
  BlogPostThumbnailPublicUrl = 342,
  BlogPostThumbnailResizeHeight = 343,
  BlogPostThumbnailResizeSrc = 344,
  BlogPostThumbnailResizeWidth = 345,
  BlogPostThumbnailSize = 346,
  BlogPostThumbnailSpaceId = 347,
  BlogPostThumbnailSysRevision = 348,
  BlogPostThumbnailSysType = 349,
  BlogPostThumbnailTitle = 350,
  BlogPostThumbnailUpdatedAt = 351,
  BlogPostThumbnailUrl = 352,
  BlogPostThumbnailWidth = 353,
  BlogPostTitle = 354,
  BlogPostUpdated = 355,
  BlogPostUpdatedAt = 356,
  Children = 357,
  ChildrenChildren = 358,
  ChildrenChildrenChildren = 359,
  ChildrenChildrenChildrenChildren = 360,
  ChildrenChildrenChildrenId = 361,
  ChildrenChildrenId = 362,
  ChildrenChildrenInternalContent = 363,
  ChildrenChildrenInternalContentDigest = 364,
  ChildrenChildrenInternalContentFilePath = 365,
  ChildrenChildrenInternalDescription = 366,
  ChildrenChildrenInternalFieldOwners = 367,
  ChildrenChildrenInternalIgnoreType = 368,
  ChildrenChildrenInternalMediaType = 369,
  ChildrenChildrenInternalOwner = 370,
  ChildrenChildrenInternalType = 371,
  ChildrenChildrenParentChildren = 372,
  ChildrenChildrenParentId = 373,
  ChildrenId = 374,
  ChildrenInternalContent = 375,
  ChildrenInternalContentDigest = 376,
  ChildrenInternalContentFilePath = 377,
  ChildrenInternalDescription = 378,
  ChildrenInternalFieldOwners = 379,
  ChildrenInternalIgnoreType = 380,
  ChildrenInternalMediaType = 381,
  ChildrenInternalOwner = 382,
  ChildrenInternalType = 383,
  ChildrenParentChildren = 384,
  ChildrenParentChildrenChildren = 385,
  ChildrenParentChildrenId = 386,
  ChildrenParentId = 387,
  ChildrenParentInternalContent = 388,
  ChildrenParentInternalContentDigest = 389,
  ChildrenParentInternalContentFilePath = 390,
  ChildrenParentInternalDescription = 391,
  ChildrenParentInternalFieldOwners = 392,
  ChildrenParentInternalIgnoreType = 393,
  ChildrenParentInternalMediaType = 394,
  ChildrenParentInternalOwner = 395,
  ChildrenParentInternalType = 396,
  ChildrenParentParentChildren = 397,
  ChildrenParentParentId = 398,
  ContentfulId = 399,
  CreatedAt = 400,
  Id = 401,
  InternalContent = 402,
  InternalContentDigest = 403,
  InternalContentFilePath = 404,
  InternalDescription = 405,
  InternalFieldOwners = 406,
  InternalIgnoreType = 407,
  InternalMediaType = 408,
  InternalOwner = 409,
  InternalType = 410,
  Name = 411,
  NodeLocale = 412,
  ParentChildren = 413,
  ParentChildrenChildren = 414,
  ParentChildrenChildrenChildren = 415,
  ParentChildrenChildrenId = 416,
  ParentChildrenId = 417,
  ParentChildrenInternalContent = 418,
  ParentChildrenInternalContentDigest = 419,
  ParentChildrenInternalContentFilePath = 420,
  ParentChildrenInternalDescription = 421,
  ParentChildrenInternalFieldOwners = 422,
  ParentChildrenInternalIgnoreType = 423,
  ParentChildrenInternalMediaType = 424,
  ParentChildrenInternalOwner = 425,
  ParentChildrenInternalType = 426,
  ParentChildrenParentChildren = 427,
  ParentChildrenParentId = 428,
  ParentId = 429,
  ParentInternalContent = 430,
  ParentInternalContentDigest = 431,
  ParentInternalContentFilePath = 432,
  ParentInternalDescription = 433,
  ParentInternalFieldOwners = 434,
  ParentInternalIgnoreType = 435,
  ParentInternalMediaType = 436,
  ParentInternalOwner = 437,
  ParentInternalType = 438,
  ParentParentChildren = 439,
  ParentParentChildrenChildren = 440,
  ParentParentChildrenId = 441,
  ParentParentId = 442,
  ParentParentInternalContent = 443,
  ParentParentInternalContentDigest = 444,
  ParentParentInternalContentFilePath = 445,
  ParentParentInternalDescription = 446,
  ParentParentInternalFieldOwners = 447,
  ParentParentInternalIgnoreType = 448,
  ParentParentInternalMediaType = 449,
  ParentParentInternalOwner = 450,
  ParentParentInternalType = 451,
  ParentParentParentChildren = 452,
  ParentParentParentId = 453,
  Slug = 454,
  SortKey = 455,
  SpaceId = 456,
  SysContentTypeSysId = 457,
  SysContentTypeSysLinkType = 458,
  SysContentTypeSysType = 459,
  SysRevision = 460,
  SysType = 461,
  UpdatedAt = 462
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
  IconWhatICanDoLogoChildren = 666,
  IconWhatICanDoLogoContentfulId = 667,
  IconWhatICanDoLogoCreatedAt = 668,
  IconWhatICanDoLogoDescription = 669,
  IconWhatICanDoLogoFilename = 670,
  IconWhatICanDoLogoFilesize = 671,
  IconWhatICanDoLogoGatsbyImage = 672,
  IconWhatICanDoLogoGatsbyImageData = 673,
  IconWhatICanDoLogoHeight = 674,
  IconWhatICanDoLogoId = 675,
  IconWhatICanDoLogoMimeType = 676,
  IconWhatICanDoLogoNodeLocale = 677,
  IconWhatICanDoLogoPlaceholderUrl = 678,
  IconWhatICanDoLogoPublicUrl = 679,
  IconWhatICanDoLogoSize = 680,
  IconWhatICanDoLogoSpaceId = 681,
  IconWhatICanDoLogoTitle = 682,
  IconWhatICanDoLogoUpdatedAt = 683,
  IconWhatICanDoLogoUrl = 684,
  IconWhatICanDoLogoWidth = 685,
  IconWhatICanDoName = 686,
  IconWhatICanDoNodeLocale = 687,
  IconWhatICanDoParentChildren = 688,
  IconWhatICanDoParentId = 689,
  IconWhatICanDoSortKey = 690,
  IconWhatICanDoSpaceId = 691,
  IconWhatICanDoSubName = 692,
  IconWhatICanDoSysRevision = 693,
  IconWhatICanDoSysType = 694,
  IconWhatICanDoUpdatedAt = 695,
  Id = 696,
  InternalContent = 697,
  InternalContentDigest = 698,
  InternalContentFilePath = 699,
  InternalDescription = 700,
  InternalFieldOwners = 701,
  InternalIgnoreType = 702,
  InternalMediaType = 703,
  InternalOwner = 704,
  InternalType = 705,
  Name = 706,
  NodeLocale = 707,
  ParentChildren = 708,
  ParentChildrenChildren = 709,
  ParentChildrenChildrenChildren = 710,
  ParentChildrenChildrenId = 711,
  ParentChildrenId = 712,
  ParentChildrenInternalContent = 713,
  ParentChildrenInternalContentDigest = 714,
  ParentChildrenInternalContentFilePath = 715,
  ParentChildrenInternalDescription = 716,
  ParentChildrenInternalFieldOwners = 717,
  ParentChildrenInternalIgnoreType = 718,
  ParentChildrenInternalMediaType = 719,
  ParentChildrenInternalOwner = 720,
  ParentChildrenInternalType = 721,
  ParentChildrenParentChildren = 722,
  ParentChildrenParentId = 723,
  ParentId = 724,
  ParentInternalContent = 725,
  ParentInternalContentDigest = 726,
  ParentInternalContentFilePath = 727,
  ParentInternalDescription = 728,
  ParentInternalFieldOwners = 729,
  ParentInternalIgnoreType = 730,
  ParentInternalMediaType = 731,
  ParentInternalOwner = 732,
  ParentInternalType = 733,
  ParentParentChildren = 734,
  ParentParentChildrenChildren = 735,
  ParentParentChildrenId = 736,
  ParentParentId = 737,
  ParentParentInternalContent = 738,
  ParentParentInternalContentDigest = 739,
  ParentParentInternalContentFilePath = 740,
  ParentParentInternalDescription = 741,
  ParentParentInternalFieldOwners = 742,
  ParentParentInternalIgnoreType = 743,
  ParentParentInternalMediaType = 744,
  ParentParentInternalOwner = 745,
  ParentParentInternalType = 746,
  ParentParentParentChildren = 747,
  ParentParentParentId = 748,
  SortKey = 749,
  SpaceId = 750,
  SubName = 751,
  SysContentTypeSysId = 752,
  SysContentTypeSysLinkType = 753,
  SysContentTypeSysType = 754,
  SysRevision = 755,
  SysType = 756,
  UpdatedAt = 757
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
  IconWhatICanDoLogoChildren = 530,
  IconWhatICanDoLogoContentfulId = 531,
  IconWhatICanDoLogoCreatedAt = 532,
  IconWhatICanDoLogoDescription = 533,
  IconWhatICanDoLogoFilename = 534,
  IconWhatICanDoLogoFilesize = 535,
  IconWhatICanDoLogoGatsbyImage = 536,
  IconWhatICanDoLogoGatsbyImageData = 537,
  IconWhatICanDoLogoHeight = 538,
  IconWhatICanDoLogoId = 539,
  IconWhatICanDoLogoMimeType = 540,
  IconWhatICanDoLogoNodeLocale = 541,
  IconWhatICanDoLogoPlaceholderUrl = 542,
  IconWhatICanDoLogoPublicUrl = 543,
  IconWhatICanDoLogoSize = 544,
  IconWhatICanDoLogoSpaceId = 545,
  IconWhatICanDoLogoTitle = 546,
  IconWhatICanDoLogoUpdatedAt = 547,
  IconWhatICanDoLogoUrl = 548,
  IconWhatICanDoLogoWidth = 549,
  IconWhatICanDoName = 550,
  IconWhatICanDoNodeLocale = 551,
  IconWhatICanDoParentChildren = 552,
  IconWhatICanDoParentId = 553,
  IconWhatICanDoSortKey = 554,
  IconWhatICanDoSpaceId = 555,
  IconWhatICanDoSubName = 556,
  IconWhatICanDoSysRevision = 557,
  IconWhatICanDoSysType = 558,
  IconWhatICanDoUpdatedAt = 559,
  Id = 560,
  InternalContent = 561,
  InternalContentDigest = 562,
  InternalContentFilePath = 563,
  InternalDescription = 564,
  InternalFieldOwners = 565,
  InternalIgnoreType = 566,
  InternalMediaType = 567,
  InternalOwner = 568,
  InternalType = 569,
  Name = 570,
  NodeLocale = 571,
  ParentChildren = 572,
  ParentChildrenChildren = 573,
  ParentChildrenChildrenChildren = 574,
  ParentChildrenChildrenId = 575,
  ParentChildrenId = 576,
  ParentChildrenInternalContent = 577,
  ParentChildrenInternalContentDigest = 578,
  ParentChildrenInternalContentFilePath = 579,
  ParentChildrenInternalDescription = 580,
  ParentChildrenInternalFieldOwners = 581,
  ParentChildrenInternalIgnoreType = 582,
  ParentChildrenInternalMediaType = 583,
  ParentChildrenInternalOwner = 584,
  ParentChildrenInternalType = 585,
  ParentChildrenParentChildren = 586,
  ParentChildrenParentId = 587,
  ParentId = 588,
  ParentInternalContent = 589,
  ParentInternalContentDigest = 590,
  ParentInternalContentFilePath = 591,
  ParentInternalDescription = 592,
  ParentInternalFieldOwners = 593,
  ParentInternalIgnoreType = 594,
  ParentInternalMediaType = 595,
  ParentInternalOwner = 596,
  ParentInternalType = 597,
  ParentParentChildren = 598,
  ParentParentChildrenChildren = 599,
  ParentParentChildrenId = 600,
  ParentParentId = 601,
  ParentParentInternalContent = 602,
  ParentParentInternalContentDigest = 603,
  ParentParentInternalContentFilePath = 604,
  ParentParentInternalDescription = 605,
  ParentParentInternalFieldOwners = 606,
  ParentParentInternalIgnoreType = 607,
  ParentParentInternalMediaType = 608,
  ParentParentInternalOwner = 609,
  ParentParentInternalType = 610,
  ParentParentParentChildren = 611,
  ParentParentParentId = 612,
  SpaceId = 613,
  SubName = 614,
  SysContentTypeSysId = 615,
  SysContentTypeSysLinkType = 616,
  SysContentTypeSysType = 617,
  SysRevision = 618,
  SysType = 619,
  UpdatedAt = 620
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
  WhatICanDoLogoChildren = 1716,
  WhatICanDoLogoChildrenChildren = 1717,
  WhatICanDoLogoChildrenId = 1718,
  WhatICanDoLogoContentfulId = 1719,
  WhatICanDoLogoCreatedAt = 1720,
  WhatICanDoLogoDescription = 1721,
  WhatICanDoLogoFileContentType = 1722,
  WhatICanDoLogoFileFileName = 1723,
  WhatICanDoLogoFileUrl = 1724,
  WhatICanDoLogoFilename = 1725,
  WhatICanDoLogoFilesize = 1726,
  WhatICanDoLogoGatsbyImage = 1727,
  WhatICanDoLogoGatsbyImageData = 1728,
  WhatICanDoLogoHeight = 1729,
  WhatICanDoLogoId = 1730,
  WhatICanDoLogoInternalContent = 1731,
  WhatICanDoLogoInternalContentDigest = 1732,
  WhatICanDoLogoInternalContentFilePath = 1733,
  WhatICanDoLogoInternalDescription = 1734,
  WhatICanDoLogoInternalFieldOwners = 1735,
  WhatICanDoLogoInternalIgnoreType = 1736,
  WhatICanDoLogoInternalMediaType = 1737,
  WhatICanDoLogoInternalOwner = 1738,
  WhatICanDoLogoInternalType = 1739,
  WhatICanDoLogoMimeType = 1740,
  WhatICanDoLogoNodeLocale = 1741,
  WhatICanDoLogoParentChildren = 1742,
  WhatICanDoLogoParentId = 1743,
  WhatICanDoLogoPlaceholderUrl = 1744,
  WhatICanDoLogoPublicUrl = 1745,
  WhatICanDoLogoResizeHeight = 1746,
  WhatICanDoLogoResizeSrc = 1747,
  WhatICanDoLogoResizeWidth = 1748,
  WhatICanDoLogoSize = 1749,
  WhatICanDoLogoSpaceId = 1750,
  WhatICanDoLogoSysRevision = 1751,
  WhatICanDoLogoSysType = 1752,
  WhatICanDoLogoTitle = 1753,
  WhatICanDoLogoUpdatedAt = 1754,
  WhatICanDoLogoUrl = 1755,
  WhatICanDoLogoWidth = 1756,
  WhatICanDoName = 1757,
  WhatICanDoNodeLocale = 1758,
  WhatICanDoParentChildren = 1759,
  WhatICanDoParentChildrenChildren = 1760,
  WhatICanDoParentChildrenId = 1761,
  WhatICanDoParentId = 1762,
  WhatICanDoParentInternalContent = 1763,
  WhatICanDoParentInternalContentDigest = 1764,
  WhatICanDoParentInternalContentFilePath = 1765,
  WhatICanDoParentInternalDescription = 1766,
  WhatICanDoParentInternalFieldOwners = 1767,
  WhatICanDoParentInternalIgnoreType = 1768,
  WhatICanDoParentInternalMediaType = 1769,
  WhatICanDoParentInternalOwner = 1770,
  WhatICanDoParentInternalType = 1771,
  WhatICanDoParentParentChildren = 1772,
  WhatICanDoParentParentId = 1773,
  WhatICanDoSortKey = 1774,
  WhatICanDoSpaceId = 1775,
  WhatICanDoSubName = 1776,
  WhatICanDoSysRevision = 1777,
  WhatICanDoSysType = 1778,
  WhatICanDoUpdatedAt = 1779
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
  IconWhatICanDoLogoChildren = 849,
  IconWhatICanDoLogoContentfulId = 850,
  IconWhatICanDoLogoCreatedAt = 851,
  IconWhatICanDoLogoDescription = 852,
  IconWhatICanDoLogoFilename = 853,
  IconWhatICanDoLogoFilesize = 854,
  IconWhatICanDoLogoGatsbyImage = 855,
  IconWhatICanDoLogoGatsbyImageData = 856,
  IconWhatICanDoLogoHeight = 857,
  IconWhatICanDoLogoId = 858,
  IconWhatICanDoLogoMimeType = 859,
  IconWhatICanDoLogoNodeLocale = 860,
  IconWhatICanDoLogoPlaceholderUrl = 861,
  IconWhatICanDoLogoPublicUrl = 862,
  IconWhatICanDoLogoSize = 863,
  IconWhatICanDoLogoSpaceId = 864,
  IconWhatICanDoLogoTitle = 865,
  IconWhatICanDoLogoUpdatedAt = 866,
  IconWhatICanDoLogoUrl = 867,
  IconWhatICanDoLogoWidth = 868,
  IconWhatICanDoName = 869,
  IconWhatICanDoNodeLocale = 870,
  IconWhatICanDoParentChildren = 871,
  IconWhatICanDoParentId = 872,
  IconWhatICanDoSortKey = 873,
  IconWhatICanDoSpaceId = 874,
  IconWhatICanDoSubName = 875,
  IconWhatICanDoSysRevision = 876,
  IconWhatICanDoSysType = 877,
  IconWhatICanDoUpdatedAt = 878,
  Id = 879,
  ImageChildren = 880,
  ImageChildrenChildren = 881,
  ImageChildrenChildrenChildren = 882,
  ImageChildrenChildrenId = 883,
  ImageChildrenId = 884,
  ImageChildrenInternalContent = 885,
  ImageChildrenInternalContentDigest = 886,
  ImageChildrenInternalContentFilePath = 887,
  ImageChildrenInternalDescription = 888,
  ImageChildrenInternalFieldOwners = 889,
  ImageChildrenInternalIgnoreType = 890,
  ImageChildrenInternalMediaType = 891,
  ImageChildrenInternalOwner = 892,
  ImageChildrenInternalType = 893,
  ImageChildrenParentChildren = 894,
  ImageChildrenParentId = 895,
  ImageContentfulId = 896,
  ImageCreatedAt = 897,
  ImageDescription = 898,
  ImageFileContentType = 899,
  ImageFileDetailsSize = 900,
  ImageFileFileName = 901,
  ImageFileUrl = 902,
  ImageFilename = 903,
  ImageFilesize = 904,
  ImageGatsbyImage = 905,
  ImageGatsbyImageData = 906,
  ImageHeight = 907,
  ImageId = 908,
  ImageInternalContent = 909,
  ImageInternalContentDigest = 910,
  ImageInternalContentFilePath = 911,
  ImageInternalDescription = 912,
  ImageInternalFieldOwners = 913,
  ImageInternalIgnoreType = 914,
  ImageInternalMediaType = 915,
  ImageInternalOwner = 916,
  ImageInternalType = 917,
  ImageMimeType = 918,
  ImageNodeLocale = 919,
  ImageParentChildren = 920,
  ImageParentChildrenChildren = 921,
  ImageParentChildrenId = 922,
  ImageParentId = 923,
  ImageParentInternalContent = 924,
  ImageParentInternalContentDigest = 925,
  ImageParentInternalContentFilePath = 926,
  ImageParentInternalDescription = 927,
  ImageParentInternalFieldOwners = 928,
  ImageParentInternalIgnoreType = 929,
  ImageParentInternalMediaType = 930,
  ImageParentInternalOwner = 931,
  ImageParentInternalType = 932,
  ImageParentParentChildren = 933,
  ImageParentParentId = 934,
  ImagePlaceholderUrl = 935,
  ImagePublicUrl = 936,
  ImageResizeHeight = 937,
  ImageResizeSrc = 938,
  ImageResizeWidth = 939,
  ImageSize = 940,
  ImageSpaceId = 941,
  ImageSysRevision = 942,
  ImageSysType = 943,
  ImageTitle = 944,
  ImageUpdatedAt = 945,
  ImageUrl = 946,
  ImageWidth = 947,
  InternalContent = 948,
  InternalContentDigest = 949,
  InternalContentFilePath = 950,
  InternalDescription = 951,
  InternalFieldOwners = 952,
  InternalIgnoreType = 953,
  InternalMediaType = 954,
  InternalOwner = 955,
  InternalType = 956,
  Name = 957,
  NodeLocale = 958,
  ParentChildren = 959,
  ParentChildrenChildren = 960,
  ParentChildrenChildrenChildren = 961,
  ParentChildrenChildrenId = 962,
  ParentChildrenId = 963,
  ParentChildrenInternalContent = 964,
  ParentChildrenInternalContentDigest = 965,
  ParentChildrenInternalContentFilePath = 966,
  ParentChildrenInternalDescription = 967,
  ParentChildrenInternalFieldOwners = 968,
  ParentChildrenInternalIgnoreType = 969,
  ParentChildrenInternalMediaType = 970,
  ParentChildrenInternalOwner = 971,
  ParentChildrenInternalType = 972,
  ParentChildrenParentChildren = 973,
  ParentChildrenParentId = 974,
  ParentId = 975,
  ParentInternalContent = 976,
  ParentInternalContentDigest = 977,
  ParentInternalContentFilePath = 978,
  ParentInternalDescription = 979,
  ParentInternalFieldOwners = 980,
  ParentInternalIgnoreType = 981,
  ParentInternalMediaType = 982,
  ParentInternalOwner = 983,
  ParentInternalType = 984,
  ParentParentChildren = 985,
  ParentParentChildrenChildren = 986,
  ParentParentChildrenId = 987,
  ParentParentId = 988,
  ParentParentInternalContent = 989,
  ParentParentInternalContentDigest = 990,
  ParentParentInternalContentFilePath = 991,
  ParentParentInternalDescription = 992,
  ParentParentInternalFieldOwners = 993,
  ParentParentInternalIgnoreType = 994,
  ParentParentInternalMediaType = 995,
  ParentParentInternalOwner = 996,
  ParentParentInternalType = 997,
  ParentParentParentChildren = 998,
  ParentParentParentId = 999,
  SpaceId = 1000,
  StartDate = 1001,
  SubName = 1002,
  SysContentTypeSysId = 1003,
  SysContentTypeSysLinkType = 1004,
  SysContentTypeSysType = 1005,
  SysRevision = 1006,
  SysType = 1007,
  Tags = 1008,
  TagsBlogPost = 1009,
  TagsBlogPostCategoryBlogPost = 1010,
  TagsBlogPostCategoryChildren = 1011,
  TagsBlogPostCategoryContentfulId = 1012,
  TagsBlogPostCategoryCreatedAt = 1013,
  TagsBlogPostCategoryId = 1014,
  TagsBlogPostCategoryName = 1015,
  TagsBlogPostCategoryNodeLocale = 1016,
  TagsBlogPostCategorySlug = 1017,
  TagsBlogPostCategorySortKey = 1018,
  TagsBlogPostCategorySpaceId = 1019,
  TagsBlogPostCategoryUpdatedAt = 1020,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 1021,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 1022,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 1023,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 1024,
  TagsBlogPostChildren = 1025,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 1026,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 1027,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 1028,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 1029,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 1030,
  TagsBlogPostChildrenChildren = 1031,
  TagsBlogPostChildrenId = 1032,
  TagsBlogPostContentChildren = 1033,
  TagsBlogPostContentChildrenMdx = 1034,
  TagsBlogPostContentContent = 1035,
  TagsBlogPostContentId = 1036,
  TagsBlogPostContentfulId = 1037,
  TagsBlogPostCreated = 1038,
  TagsBlogPostCreatedAt = 1039,
  TagsBlogPostExcerpt = 1040,
  TagsBlogPostGatsbyPath = 1041,
  TagsBlogPostId = 1042,
  TagsBlogPostInternalContent = 1043,
  TagsBlogPostInternalContentDigest = 1044,
  TagsBlogPostInternalContentFilePath = 1045,
  TagsBlogPostInternalDescription = 1046,
  TagsBlogPostInternalFieldOwners = 1047,
  TagsBlogPostInternalIgnoreType = 1048,
  TagsBlogPostInternalMediaType = 1049,
  TagsBlogPostInternalOwner = 1050,
  TagsBlogPostInternalType = 1051,
  TagsBlogPostNodeLocale = 1052,
  TagsBlogPostParentChildren = 1053,
  TagsBlogPostParentId = 1054,
  TagsBlogPostSlug = 1055,
  TagsBlogPostSpaceId = 1056,
  TagsBlogPostSysRevision = 1057,
  TagsBlogPostSysType = 1058,
  TagsBlogPostTags = 1059,
  TagsBlogPostTagsBlogPost = 1060,
  TagsBlogPostTagsChildren = 1061,
  TagsBlogPostTagsContentfulId = 1062,
  TagsBlogPostTagsCreatedAt = 1063,
  TagsBlogPostTagsId = 1064,
  TagsBlogPostTagsLevel = 1065,
  TagsBlogPostTagsName = 1066,
  TagsBlogPostTagsNodeLocale = 1067,
  TagsBlogPostTagsOss = 1068,
  TagsBlogPostTagsProject = 1069,
  TagsBlogPostTagsSkillGrpup = 1070,
  TagsBlogPostTagsSkillMap = 1071,
  TagsBlogPostTagsSpaceId = 1072,
  TagsBlogPostTagsUpdatedAt = 1073,
  TagsBlogPostThumbnailChildren = 1074,
  TagsBlogPostThumbnailContentfulId = 1075,
  TagsBlogPostThumbnailCreatedAt = 1076,
  TagsBlogPostThumbnailDescription = 1077,
  TagsBlogPostThumbnailFilename = 1078,
  TagsBlogPostThumbnailFilesize = 1079,
  TagsBlogPostThumbnailGatsbyImage = 1080,
  TagsBlogPostThumbnailGatsbyImageData = 1081,
  TagsBlogPostThumbnailHeight = 1082,
  TagsBlogPostThumbnailId = 1083,
  TagsBlogPostThumbnailMimeType = 1084,
  TagsBlogPostThumbnailNodeLocale = 1085,
  TagsBlogPostThumbnailPlaceholderUrl = 1086,
  TagsBlogPostThumbnailPublicUrl = 1087,
  TagsBlogPostThumbnailSize = 1088,
  TagsBlogPostThumbnailSpaceId = 1089,
  TagsBlogPostThumbnailTitle = 1090,
  TagsBlogPostThumbnailUpdatedAt = 1091,
  TagsBlogPostThumbnailUrl = 1092,
  TagsBlogPostThumbnailWidth = 1093,
  TagsBlogPostTitle = 1094,
  TagsBlogPostUpdated = 1095,
  TagsBlogPostUpdatedAt = 1096,
  TagsChildren = 1097,
  TagsChildrenChildren = 1098,
  TagsChildrenChildrenChildren = 1099,
  TagsChildrenChildrenId = 1100,
  TagsChildrenId = 1101,
  TagsChildrenInternalContent = 1102,
  TagsChildrenInternalContentDigest = 1103,
  TagsChildrenInternalContentFilePath = 1104,
  TagsChildrenInternalDescription = 1105,
  TagsChildrenInternalFieldOwners = 1106,
  TagsChildrenInternalIgnoreType = 1107,
  TagsChildrenInternalMediaType = 1108,
  TagsChildrenInternalOwner = 1109,
  TagsChildrenInternalType = 1110,
  TagsChildrenParentChildren = 1111,
  TagsChildrenParentId = 1112,
  TagsContentfulId = 1113,
  TagsCreatedAt = 1114,
  TagsId = 1115,
  TagsInternalContent = 1116,
  TagsInternalContentDigest = 1117,
  TagsInternalContentFilePath = 1118,
  TagsInternalDescription = 1119,
  TagsInternalFieldOwners = 1120,
  TagsInternalIgnoreType = 1121,
  TagsInternalMediaType = 1122,
  TagsInternalOwner = 1123,
  TagsInternalType = 1124,
  TagsLevel = 1125,
  TagsName = 1126,
  TagsNodeLocale = 1127,
  TagsOss = 1128,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1129,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1130,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1131,
  TagsOssChildContentfulOssDetailTextNodeId = 1132,
  TagsOssChildren = 1133,
  TagsOssChildrenContentfulOssDetailTextNode = 1134,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1135,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1136,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1137,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1138,
  TagsOssChildrenChildren = 1139,
  TagsOssChildrenId = 1140,
  TagsOssContentfulId = 1141,
  TagsOssCreatedAt = 1142,
  TagsOssDetailChildren = 1143,
  TagsOssDetailChildrenMdx = 1144,
  TagsOssDetailDetail = 1145,
  TagsOssDetailId = 1146,
  TagsOssHref = 1147,
  TagsOssIconChildren = 1148,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1149,
  TagsOssIconContact = 1150,
  TagsOssIconContentfulId = 1151,
  TagsOssIconCreatedAt = 1152,
  TagsOssIconHistory = 1153,
  TagsOssIconId = 1154,
  TagsOssIconName = 1155,
  TagsOssIconNodeLocale = 1156,
  TagsOssIconOss = 1157,
  TagsOssIconProject = 1158,
  TagsOssIconSpaceId = 1159,
  TagsOssIconUpdatedAt = 1160,
  TagsOssIconWhatICanDo = 1161,
  TagsOssId = 1162,
  TagsOssImageChildren = 1163,
  TagsOssImageContentfulId = 1164,
  TagsOssImageCreatedAt = 1165,
  TagsOssImageDescription = 1166,
  TagsOssImageFilename = 1167,
  TagsOssImageFilesize = 1168,
  TagsOssImageGatsbyImage = 1169,
  TagsOssImageGatsbyImageData = 1170,
  TagsOssImageHeight = 1171,
  TagsOssImageId = 1172,
  TagsOssImageMimeType = 1173,
  TagsOssImageNodeLocale = 1174,
  TagsOssImagePlaceholderUrl = 1175,
  TagsOssImagePublicUrl = 1176,
  TagsOssImageSize = 1177,
  TagsOssImageSpaceId = 1178,
  TagsOssImageTitle = 1179,
  TagsOssImageUpdatedAt = 1180,
  TagsOssImageUrl = 1181,
  TagsOssImageWidth = 1182,
  TagsOssInternalContent = 1183,
  TagsOssInternalContentDigest = 1184,
  TagsOssInternalContentFilePath = 1185,
  TagsOssInternalDescription = 1186,
  TagsOssInternalFieldOwners = 1187,
  TagsOssInternalIgnoreType = 1188,
  TagsOssInternalMediaType = 1189,
  TagsOssInternalOwner = 1190,
  TagsOssInternalType = 1191,
  TagsOssName = 1192,
  TagsOssNodeLocale = 1193,
  TagsOssParentChildren = 1194,
  TagsOssParentId = 1195,
  TagsOssSpaceId = 1196,
  TagsOssStartDate = 1197,
  TagsOssSubName = 1198,
  TagsOssSysRevision = 1199,
  TagsOssSysType = 1200,
  TagsOssTags = 1201,
  TagsOssTagsBlogPost = 1202,
  TagsOssTagsChildren = 1203,
  TagsOssTagsContentfulId = 1204,
  TagsOssTagsCreatedAt = 1205,
  TagsOssTagsId = 1206,
  TagsOssTagsLevel = 1207,
  TagsOssTagsName = 1208,
  TagsOssTagsNodeLocale = 1209,
  TagsOssTagsOss = 1210,
  TagsOssTagsProject = 1211,
  TagsOssTagsSkillGrpup = 1212,
  TagsOssTagsSkillMap = 1213,
  TagsOssTagsSpaceId = 1214,
  TagsOssTagsUpdatedAt = 1215,
  TagsOssUpdatedAt = 1216,
  TagsParentChildren = 1217,
  TagsParentChildrenChildren = 1218,
  TagsParentChildrenId = 1219,
  TagsParentId = 1220,
  TagsParentInternalContent = 1221,
  TagsParentInternalContentDigest = 1222,
  TagsParentInternalContentFilePath = 1223,
  TagsParentInternalDescription = 1224,
  TagsParentInternalFieldOwners = 1225,
  TagsParentInternalIgnoreType = 1226,
  TagsParentInternalMediaType = 1227,
  TagsParentInternalOwner = 1228,
  TagsParentInternalType = 1229,
  TagsParentParentChildren = 1230,
  TagsParentParentId = 1231,
  TagsProject = 1232,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1233,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1234,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1235,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1236,
  TagsProjectChildren = 1237,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1238,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1239,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1240,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1241,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1242,
  TagsProjectChildrenChildren = 1243,
  TagsProjectChildrenId = 1244,
  TagsProjectContentfulId = 1245,
  TagsProjectCreatedAt = 1246,
  TagsProjectDetailChildren = 1247,
  TagsProjectDetailChildrenMdx = 1248,
  TagsProjectDetailDetail = 1249,
  TagsProjectDetailId = 1250,
  TagsProjectEndDate = 1251,
  TagsProjectIconChildren = 1252,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1253,
  TagsProjectIconContact = 1254,
  TagsProjectIconContentfulId = 1255,
  TagsProjectIconCreatedAt = 1256,
  TagsProjectIconHistory = 1257,
  TagsProjectIconId = 1258,
  TagsProjectIconName = 1259,
  TagsProjectIconNodeLocale = 1260,
  TagsProjectIconOss = 1261,
  TagsProjectIconProject = 1262,
  TagsProjectIconSpaceId = 1263,
  TagsProjectIconUpdatedAt = 1264,
  TagsProjectIconWhatICanDo = 1265,
  TagsProjectId = 1266,
  TagsProjectInternalContent = 1267,
  TagsProjectInternalContentDigest = 1268,
  TagsProjectInternalContentFilePath = 1269,
  TagsProjectInternalDescription = 1270,
  TagsProjectInternalFieldOwners = 1271,
  TagsProjectInternalIgnoreType = 1272,
  TagsProjectInternalMediaType = 1273,
  TagsProjectInternalOwner = 1274,
  TagsProjectInternalType = 1275,
  TagsProjectName = 1276,
  TagsProjectNodeLocale = 1277,
  TagsProjectParentChildren = 1278,
  TagsProjectParentId = 1279,
  TagsProjectSpaceId = 1280,
  TagsProjectStartDate = 1281,
  TagsProjectSubName = 1282,
  TagsProjectSysRevision = 1283,
  TagsProjectSysType = 1284,
  TagsProjectTags = 1285,
  TagsProjectTagsBlogPost = 1286,
  TagsProjectTagsChildren = 1287,
  TagsProjectTagsContentfulId = 1288,
  TagsProjectTagsCreatedAt = 1289,
  TagsProjectTagsId = 1290,
  TagsProjectTagsLevel = 1291,
  TagsProjectTagsName = 1292,
  TagsProjectTagsNodeLocale = 1293,
  TagsProjectTagsOss = 1294,
  TagsProjectTagsProject = 1295,
  TagsProjectTagsSkillGrpup = 1296,
  TagsProjectTagsSkillMap = 1297,
  TagsProjectTagsSpaceId = 1298,
  TagsProjectTagsUpdatedAt = 1299,
  TagsProjectUpdatedAt = 1300,
  TagsSkillGrpup = 1301,
  TagsSkillGrpupChildren = 1302,
  TagsSkillGrpupChildrenChildren = 1303,
  TagsSkillGrpupChildrenId = 1304,
  TagsSkillGrpupContentfulId = 1305,
  TagsSkillGrpupCreatedAt = 1306,
  TagsSkillGrpupId = 1307,
  TagsSkillGrpupInternalContent = 1308,
  TagsSkillGrpupInternalContentDigest = 1309,
  TagsSkillGrpupInternalContentFilePath = 1310,
  TagsSkillGrpupInternalDescription = 1311,
  TagsSkillGrpupInternalFieldOwners = 1312,
  TagsSkillGrpupInternalIgnoreType = 1313,
  TagsSkillGrpupInternalMediaType = 1314,
  TagsSkillGrpupInternalOwner = 1315,
  TagsSkillGrpupInternalType = 1316,
  TagsSkillGrpupName = 1317,
  TagsSkillGrpupNodeLocale = 1318,
  TagsSkillGrpupParentChildren = 1319,
  TagsSkillGrpupParentId = 1320,
  TagsSkillGrpupSkillMap = 1321,
  TagsSkillGrpupSkillMapChildren = 1322,
  TagsSkillGrpupSkillMapContentfulId = 1323,
  TagsSkillGrpupSkillMapCreatedAt = 1324,
  TagsSkillGrpupSkillMapExpanded = 1325,
  TagsSkillGrpupSkillMapId = 1326,
  TagsSkillGrpupSkillMapName = 1327,
  TagsSkillGrpupSkillMapNodeLocale = 1328,
  TagsSkillGrpupSkillMapSkillGroups = 1329,
  TagsSkillGrpupSkillMapSkills = 1330,
  TagsSkillGrpupSkillMapSortKey = 1331,
  TagsSkillGrpupSkillMapSpaceId = 1332,
  TagsSkillGrpupSkillMapUpdatedAt = 1333,
  TagsSkillGrpupSkills = 1334,
  TagsSkillGrpupSkillsBlogPost = 1335,
  TagsSkillGrpupSkillsChildren = 1336,
  TagsSkillGrpupSkillsContentfulId = 1337,
  TagsSkillGrpupSkillsCreatedAt = 1338,
  TagsSkillGrpupSkillsId = 1339,
  TagsSkillGrpupSkillsLevel = 1340,
  TagsSkillGrpupSkillsName = 1341,
  TagsSkillGrpupSkillsNodeLocale = 1342,
  TagsSkillGrpupSkillsOss = 1343,
  TagsSkillGrpupSkillsProject = 1344,
  TagsSkillGrpupSkillsSkillGrpup = 1345,
  TagsSkillGrpupSkillsSkillMap = 1346,
  TagsSkillGrpupSkillsSpaceId = 1347,
  TagsSkillGrpupSkillsUpdatedAt = 1348,
  TagsSkillGrpupSpaceId = 1349,
  TagsSkillGrpupSysRevision = 1350,
  TagsSkillGrpupSysType = 1351,
  TagsSkillGrpupUpdatedAt = 1352,
  TagsSkillMap = 1353,
  TagsSkillMapChildren = 1354,
  TagsSkillMapChildrenChildren = 1355,
  TagsSkillMapChildrenId = 1356,
  TagsSkillMapContentfulId = 1357,
  TagsSkillMapCreatedAt = 1358,
  TagsSkillMapExpanded = 1359,
  TagsSkillMapId = 1360,
  TagsSkillMapInternalContent = 1361,
  TagsSkillMapInternalContentDigest = 1362,
  TagsSkillMapInternalContentFilePath = 1363,
  TagsSkillMapInternalDescription = 1364,
  TagsSkillMapInternalFieldOwners = 1365,
  TagsSkillMapInternalIgnoreType = 1366,
  TagsSkillMapInternalMediaType = 1367,
  TagsSkillMapInternalOwner = 1368,
  TagsSkillMapInternalType = 1369,
  TagsSkillMapName = 1370,
  TagsSkillMapNodeLocale = 1371,
  TagsSkillMapParentChildren = 1372,
  TagsSkillMapParentId = 1373,
  TagsSkillMapSkillGroups = 1374,
  TagsSkillMapSkillGroupsChildren = 1375,
  TagsSkillMapSkillGroupsContentfulId = 1376,
  TagsSkillMapSkillGroupsCreatedAt = 1377,
  TagsSkillMapSkillGroupsId = 1378,
  TagsSkillMapSkillGroupsName = 1379,
  TagsSkillMapSkillGroupsNodeLocale = 1380,
  TagsSkillMapSkillGroupsSkillMap = 1381,
  TagsSkillMapSkillGroupsSkills = 1382,
  TagsSkillMapSkillGroupsSpaceId = 1383,
  TagsSkillMapSkillGroupsUpdatedAt = 1384,
  TagsSkillMapSkills = 1385,
  TagsSkillMapSkillsBlogPost = 1386,
  TagsSkillMapSkillsChildren = 1387,
  TagsSkillMapSkillsContentfulId = 1388,
  TagsSkillMapSkillsCreatedAt = 1389,
  TagsSkillMapSkillsId = 1390,
  TagsSkillMapSkillsLevel = 1391,
  TagsSkillMapSkillsName = 1392,
  TagsSkillMapSkillsNodeLocale = 1393,
  TagsSkillMapSkillsOss = 1394,
  TagsSkillMapSkillsProject = 1395,
  TagsSkillMapSkillsSkillGrpup = 1396,
  TagsSkillMapSkillsSkillMap = 1397,
  TagsSkillMapSkillsSpaceId = 1398,
  TagsSkillMapSkillsUpdatedAt = 1399,
  TagsSkillMapSortKey = 1400,
  TagsSkillMapSpaceId = 1401,
  TagsSkillMapSysRevision = 1402,
  TagsSkillMapSysType = 1403,
  TagsSkillMapUpdatedAt = 1404,
  TagsSpaceId = 1405,
  TagsSysRevision = 1406,
  TagsSysType = 1407,
  TagsUpdatedAt = 1408,
  UpdatedAt = 1409
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
  IconWhatICanDoLogoChildren = 849,
  IconWhatICanDoLogoContentfulId = 850,
  IconWhatICanDoLogoCreatedAt = 851,
  IconWhatICanDoLogoDescription = 852,
  IconWhatICanDoLogoFilename = 853,
  IconWhatICanDoLogoFilesize = 854,
  IconWhatICanDoLogoGatsbyImage = 855,
  IconWhatICanDoLogoGatsbyImageData = 856,
  IconWhatICanDoLogoHeight = 857,
  IconWhatICanDoLogoId = 858,
  IconWhatICanDoLogoMimeType = 859,
  IconWhatICanDoLogoNodeLocale = 860,
  IconWhatICanDoLogoPlaceholderUrl = 861,
  IconWhatICanDoLogoPublicUrl = 862,
  IconWhatICanDoLogoSize = 863,
  IconWhatICanDoLogoSpaceId = 864,
  IconWhatICanDoLogoTitle = 865,
  IconWhatICanDoLogoUpdatedAt = 866,
  IconWhatICanDoLogoUrl = 867,
  IconWhatICanDoLogoWidth = 868,
  IconWhatICanDoName = 869,
  IconWhatICanDoNodeLocale = 870,
  IconWhatICanDoParentChildren = 871,
  IconWhatICanDoParentId = 872,
  IconWhatICanDoSortKey = 873,
  IconWhatICanDoSpaceId = 874,
  IconWhatICanDoSubName = 875,
  IconWhatICanDoSysRevision = 876,
  IconWhatICanDoSysType = 877,
  IconWhatICanDoUpdatedAt = 878,
  Id = 879,
  InternalContent = 880,
  InternalContentDigest = 881,
  InternalContentFilePath = 882,
  InternalDescription = 883,
  InternalFieldOwners = 884,
  InternalIgnoreType = 885,
  InternalMediaType = 886,
  InternalOwner = 887,
  InternalType = 888,
  Name = 889,
  NodeLocale = 890,
  ParentChildren = 891,
  ParentChildrenChildren = 892,
  ParentChildrenChildrenChildren = 893,
  ParentChildrenChildrenId = 894,
  ParentChildrenId = 895,
  ParentChildrenInternalContent = 896,
  ParentChildrenInternalContentDigest = 897,
  ParentChildrenInternalContentFilePath = 898,
  ParentChildrenInternalDescription = 899,
  ParentChildrenInternalFieldOwners = 900,
  ParentChildrenInternalIgnoreType = 901,
  ParentChildrenInternalMediaType = 902,
  ParentChildrenInternalOwner = 903,
  ParentChildrenInternalType = 904,
  ParentChildrenParentChildren = 905,
  ParentChildrenParentId = 906,
  ParentId = 907,
  ParentInternalContent = 908,
  ParentInternalContentDigest = 909,
  ParentInternalContentFilePath = 910,
  ParentInternalDescription = 911,
  ParentInternalFieldOwners = 912,
  ParentInternalIgnoreType = 913,
  ParentInternalMediaType = 914,
  ParentInternalOwner = 915,
  ParentInternalType = 916,
  ParentParentChildren = 917,
  ParentParentChildrenChildren = 918,
  ParentParentChildrenId = 919,
  ParentParentId = 920,
  ParentParentInternalContent = 921,
  ParentParentInternalContentDigest = 922,
  ParentParentInternalContentFilePath = 923,
  ParentParentInternalDescription = 924,
  ParentParentInternalFieldOwners = 925,
  ParentParentInternalIgnoreType = 926,
  ParentParentInternalMediaType = 927,
  ParentParentInternalOwner = 928,
  ParentParentInternalType = 929,
  ParentParentParentChildren = 930,
  ParentParentParentId = 931,
  SpaceId = 932,
  StartDate = 933,
  SubName = 934,
  SysContentTypeSysId = 935,
  SysContentTypeSysLinkType = 936,
  SysContentTypeSysType = 937,
  SysRevision = 938,
  SysType = 939,
  Tags = 940,
  TagsBlogPost = 941,
  TagsBlogPostCategoryBlogPost = 942,
  TagsBlogPostCategoryChildren = 943,
  TagsBlogPostCategoryContentfulId = 944,
  TagsBlogPostCategoryCreatedAt = 945,
  TagsBlogPostCategoryId = 946,
  TagsBlogPostCategoryName = 947,
  TagsBlogPostCategoryNodeLocale = 948,
  TagsBlogPostCategorySlug = 949,
  TagsBlogPostCategorySortKey = 950,
  TagsBlogPostCategorySpaceId = 951,
  TagsBlogPostCategoryUpdatedAt = 952,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildren = 953,
  TagsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 954,
  TagsBlogPostChildContentfulBlogPostContentTextNodeContent = 955,
  TagsBlogPostChildContentfulBlogPostContentTextNodeId = 956,
  TagsBlogPostChildren = 957,
  TagsBlogPostChildrenContentfulBlogPostContentTextNode = 958,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 959,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 960,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 961,
  TagsBlogPostChildrenContentfulBlogPostContentTextNodeId = 962,
  TagsBlogPostChildrenChildren = 963,
  TagsBlogPostChildrenId = 964,
  TagsBlogPostContentChildren = 965,
  TagsBlogPostContentChildrenMdx = 966,
  TagsBlogPostContentContent = 967,
  TagsBlogPostContentId = 968,
  TagsBlogPostContentfulId = 969,
  TagsBlogPostCreated = 970,
  TagsBlogPostCreatedAt = 971,
  TagsBlogPostExcerpt = 972,
  TagsBlogPostGatsbyPath = 973,
  TagsBlogPostId = 974,
  TagsBlogPostInternalContent = 975,
  TagsBlogPostInternalContentDigest = 976,
  TagsBlogPostInternalContentFilePath = 977,
  TagsBlogPostInternalDescription = 978,
  TagsBlogPostInternalFieldOwners = 979,
  TagsBlogPostInternalIgnoreType = 980,
  TagsBlogPostInternalMediaType = 981,
  TagsBlogPostInternalOwner = 982,
  TagsBlogPostInternalType = 983,
  TagsBlogPostNodeLocale = 984,
  TagsBlogPostParentChildren = 985,
  TagsBlogPostParentId = 986,
  TagsBlogPostSlug = 987,
  TagsBlogPostSpaceId = 988,
  TagsBlogPostSysRevision = 989,
  TagsBlogPostSysType = 990,
  TagsBlogPostTags = 991,
  TagsBlogPostTagsBlogPost = 992,
  TagsBlogPostTagsChildren = 993,
  TagsBlogPostTagsContentfulId = 994,
  TagsBlogPostTagsCreatedAt = 995,
  TagsBlogPostTagsId = 996,
  TagsBlogPostTagsLevel = 997,
  TagsBlogPostTagsName = 998,
  TagsBlogPostTagsNodeLocale = 999,
  TagsBlogPostTagsOss = 1000,
  TagsBlogPostTagsProject = 1001,
  TagsBlogPostTagsSkillGrpup = 1002,
  TagsBlogPostTagsSkillMap = 1003,
  TagsBlogPostTagsSpaceId = 1004,
  TagsBlogPostTagsUpdatedAt = 1005,
  TagsBlogPostThumbnailChildren = 1006,
  TagsBlogPostThumbnailContentfulId = 1007,
  TagsBlogPostThumbnailCreatedAt = 1008,
  TagsBlogPostThumbnailDescription = 1009,
  TagsBlogPostThumbnailFilename = 1010,
  TagsBlogPostThumbnailFilesize = 1011,
  TagsBlogPostThumbnailGatsbyImage = 1012,
  TagsBlogPostThumbnailGatsbyImageData = 1013,
  TagsBlogPostThumbnailHeight = 1014,
  TagsBlogPostThumbnailId = 1015,
  TagsBlogPostThumbnailMimeType = 1016,
  TagsBlogPostThumbnailNodeLocale = 1017,
  TagsBlogPostThumbnailPlaceholderUrl = 1018,
  TagsBlogPostThumbnailPublicUrl = 1019,
  TagsBlogPostThumbnailSize = 1020,
  TagsBlogPostThumbnailSpaceId = 1021,
  TagsBlogPostThumbnailTitle = 1022,
  TagsBlogPostThumbnailUpdatedAt = 1023,
  TagsBlogPostThumbnailUrl = 1024,
  TagsBlogPostThumbnailWidth = 1025,
  TagsBlogPostTitle = 1026,
  TagsBlogPostUpdated = 1027,
  TagsBlogPostUpdatedAt = 1028,
  TagsChildren = 1029,
  TagsChildrenChildren = 1030,
  TagsChildrenChildrenChildren = 1031,
  TagsChildrenChildrenId = 1032,
  TagsChildrenId = 1033,
  TagsChildrenInternalContent = 1034,
  TagsChildrenInternalContentDigest = 1035,
  TagsChildrenInternalContentFilePath = 1036,
  TagsChildrenInternalDescription = 1037,
  TagsChildrenInternalFieldOwners = 1038,
  TagsChildrenInternalIgnoreType = 1039,
  TagsChildrenInternalMediaType = 1040,
  TagsChildrenInternalOwner = 1041,
  TagsChildrenInternalType = 1042,
  TagsChildrenParentChildren = 1043,
  TagsChildrenParentId = 1044,
  TagsContentfulId = 1045,
  TagsCreatedAt = 1046,
  TagsId = 1047,
  TagsInternalContent = 1048,
  TagsInternalContentDigest = 1049,
  TagsInternalContentFilePath = 1050,
  TagsInternalDescription = 1051,
  TagsInternalFieldOwners = 1052,
  TagsInternalIgnoreType = 1053,
  TagsInternalMediaType = 1054,
  TagsInternalOwner = 1055,
  TagsInternalType = 1056,
  TagsLevel = 1057,
  TagsName = 1058,
  TagsNodeLocale = 1059,
  TagsOss = 1060,
  TagsOssChildContentfulOssDetailTextNodeChildren = 1061,
  TagsOssChildContentfulOssDetailTextNodeChildrenMdx = 1062,
  TagsOssChildContentfulOssDetailTextNodeDetail = 1063,
  TagsOssChildContentfulOssDetailTextNodeId = 1064,
  TagsOssChildren = 1065,
  TagsOssChildrenContentfulOssDetailTextNode = 1066,
  TagsOssChildrenContentfulOssDetailTextNodeChildren = 1067,
  TagsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 1068,
  TagsOssChildrenContentfulOssDetailTextNodeDetail = 1069,
  TagsOssChildrenContentfulOssDetailTextNodeId = 1070,
  TagsOssChildrenChildren = 1071,
  TagsOssChildrenId = 1072,
  TagsOssContentfulId = 1073,
  TagsOssCreatedAt = 1074,
  TagsOssDetailChildren = 1075,
  TagsOssDetailChildrenMdx = 1076,
  TagsOssDetailDetail = 1077,
  TagsOssDetailId = 1078,
  TagsOssHref = 1079,
  TagsOssIconChildren = 1080,
  TagsOssIconChildrenContentfulIconSvgTextNode = 1081,
  TagsOssIconContact = 1082,
  TagsOssIconContentfulId = 1083,
  TagsOssIconCreatedAt = 1084,
  TagsOssIconHistory = 1085,
  TagsOssIconId = 1086,
  TagsOssIconName = 1087,
  TagsOssIconNodeLocale = 1088,
  TagsOssIconOss = 1089,
  TagsOssIconProject = 1090,
  TagsOssIconSpaceId = 1091,
  TagsOssIconUpdatedAt = 1092,
  TagsOssIconWhatICanDo = 1093,
  TagsOssId = 1094,
  TagsOssImageChildren = 1095,
  TagsOssImageContentfulId = 1096,
  TagsOssImageCreatedAt = 1097,
  TagsOssImageDescription = 1098,
  TagsOssImageFilename = 1099,
  TagsOssImageFilesize = 1100,
  TagsOssImageGatsbyImage = 1101,
  TagsOssImageGatsbyImageData = 1102,
  TagsOssImageHeight = 1103,
  TagsOssImageId = 1104,
  TagsOssImageMimeType = 1105,
  TagsOssImageNodeLocale = 1106,
  TagsOssImagePlaceholderUrl = 1107,
  TagsOssImagePublicUrl = 1108,
  TagsOssImageSize = 1109,
  TagsOssImageSpaceId = 1110,
  TagsOssImageTitle = 1111,
  TagsOssImageUpdatedAt = 1112,
  TagsOssImageUrl = 1113,
  TagsOssImageWidth = 1114,
  TagsOssInternalContent = 1115,
  TagsOssInternalContentDigest = 1116,
  TagsOssInternalContentFilePath = 1117,
  TagsOssInternalDescription = 1118,
  TagsOssInternalFieldOwners = 1119,
  TagsOssInternalIgnoreType = 1120,
  TagsOssInternalMediaType = 1121,
  TagsOssInternalOwner = 1122,
  TagsOssInternalType = 1123,
  TagsOssName = 1124,
  TagsOssNodeLocale = 1125,
  TagsOssParentChildren = 1126,
  TagsOssParentId = 1127,
  TagsOssSpaceId = 1128,
  TagsOssStartDate = 1129,
  TagsOssSubName = 1130,
  TagsOssSysRevision = 1131,
  TagsOssSysType = 1132,
  TagsOssTags = 1133,
  TagsOssTagsBlogPost = 1134,
  TagsOssTagsChildren = 1135,
  TagsOssTagsContentfulId = 1136,
  TagsOssTagsCreatedAt = 1137,
  TagsOssTagsId = 1138,
  TagsOssTagsLevel = 1139,
  TagsOssTagsName = 1140,
  TagsOssTagsNodeLocale = 1141,
  TagsOssTagsOss = 1142,
  TagsOssTagsProject = 1143,
  TagsOssTagsSkillGrpup = 1144,
  TagsOssTagsSkillMap = 1145,
  TagsOssTagsSpaceId = 1146,
  TagsOssTagsUpdatedAt = 1147,
  TagsOssUpdatedAt = 1148,
  TagsParentChildren = 1149,
  TagsParentChildrenChildren = 1150,
  TagsParentChildrenId = 1151,
  TagsParentId = 1152,
  TagsParentInternalContent = 1153,
  TagsParentInternalContentDigest = 1154,
  TagsParentInternalContentFilePath = 1155,
  TagsParentInternalDescription = 1156,
  TagsParentInternalFieldOwners = 1157,
  TagsParentInternalIgnoreType = 1158,
  TagsParentInternalMediaType = 1159,
  TagsParentInternalOwner = 1160,
  TagsParentInternalType = 1161,
  TagsParentParentChildren = 1162,
  TagsParentParentId = 1163,
  TagsProject = 1164,
  TagsProjectChildContentfulProjectDetailTextNodeChildren = 1165,
  TagsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 1166,
  TagsProjectChildContentfulProjectDetailTextNodeDetail = 1167,
  TagsProjectChildContentfulProjectDetailTextNodeId = 1168,
  TagsProjectChildren = 1169,
  TagsProjectChildrenContentfulProjectDetailTextNode = 1170,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildren = 1171,
  TagsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 1172,
  TagsProjectChildrenContentfulProjectDetailTextNodeDetail = 1173,
  TagsProjectChildrenContentfulProjectDetailTextNodeId = 1174,
  TagsProjectChildrenChildren = 1175,
  TagsProjectChildrenId = 1176,
  TagsProjectContentfulId = 1177,
  TagsProjectCreatedAt = 1178,
  TagsProjectDetailChildren = 1179,
  TagsProjectDetailChildrenMdx = 1180,
  TagsProjectDetailDetail = 1181,
  TagsProjectDetailId = 1182,
  TagsProjectEndDate = 1183,
  TagsProjectIconChildren = 1184,
  TagsProjectIconChildrenContentfulIconSvgTextNode = 1185,
  TagsProjectIconContact = 1186,
  TagsProjectIconContentfulId = 1187,
  TagsProjectIconCreatedAt = 1188,
  TagsProjectIconHistory = 1189,
  TagsProjectIconId = 1190,
  TagsProjectIconName = 1191,
  TagsProjectIconNodeLocale = 1192,
  TagsProjectIconOss = 1193,
  TagsProjectIconProject = 1194,
  TagsProjectIconSpaceId = 1195,
  TagsProjectIconUpdatedAt = 1196,
  TagsProjectIconWhatICanDo = 1197,
  TagsProjectId = 1198,
  TagsProjectInternalContent = 1199,
  TagsProjectInternalContentDigest = 1200,
  TagsProjectInternalContentFilePath = 1201,
  TagsProjectInternalDescription = 1202,
  TagsProjectInternalFieldOwners = 1203,
  TagsProjectInternalIgnoreType = 1204,
  TagsProjectInternalMediaType = 1205,
  TagsProjectInternalOwner = 1206,
  TagsProjectInternalType = 1207,
  TagsProjectName = 1208,
  TagsProjectNodeLocale = 1209,
  TagsProjectParentChildren = 1210,
  TagsProjectParentId = 1211,
  TagsProjectSpaceId = 1212,
  TagsProjectStartDate = 1213,
  TagsProjectSubName = 1214,
  TagsProjectSysRevision = 1215,
  TagsProjectSysType = 1216,
  TagsProjectTags = 1217,
  TagsProjectTagsBlogPost = 1218,
  TagsProjectTagsChildren = 1219,
  TagsProjectTagsContentfulId = 1220,
  TagsProjectTagsCreatedAt = 1221,
  TagsProjectTagsId = 1222,
  TagsProjectTagsLevel = 1223,
  TagsProjectTagsName = 1224,
  TagsProjectTagsNodeLocale = 1225,
  TagsProjectTagsOss = 1226,
  TagsProjectTagsProject = 1227,
  TagsProjectTagsSkillGrpup = 1228,
  TagsProjectTagsSkillMap = 1229,
  TagsProjectTagsSpaceId = 1230,
  TagsProjectTagsUpdatedAt = 1231,
  TagsProjectUpdatedAt = 1232,
  TagsSkillGrpup = 1233,
  TagsSkillGrpupChildren = 1234,
  TagsSkillGrpupChildrenChildren = 1235,
  TagsSkillGrpupChildrenId = 1236,
  TagsSkillGrpupContentfulId = 1237,
  TagsSkillGrpupCreatedAt = 1238,
  TagsSkillGrpupId = 1239,
  TagsSkillGrpupInternalContent = 1240,
  TagsSkillGrpupInternalContentDigest = 1241,
  TagsSkillGrpupInternalContentFilePath = 1242,
  TagsSkillGrpupInternalDescription = 1243,
  TagsSkillGrpupInternalFieldOwners = 1244,
  TagsSkillGrpupInternalIgnoreType = 1245,
  TagsSkillGrpupInternalMediaType = 1246,
  TagsSkillGrpupInternalOwner = 1247,
  TagsSkillGrpupInternalType = 1248,
  TagsSkillGrpupName = 1249,
  TagsSkillGrpupNodeLocale = 1250,
  TagsSkillGrpupParentChildren = 1251,
  TagsSkillGrpupParentId = 1252,
  TagsSkillGrpupSkillMap = 1253,
  TagsSkillGrpupSkillMapChildren = 1254,
  TagsSkillGrpupSkillMapContentfulId = 1255,
  TagsSkillGrpupSkillMapCreatedAt = 1256,
  TagsSkillGrpupSkillMapExpanded = 1257,
  TagsSkillGrpupSkillMapId = 1258,
  TagsSkillGrpupSkillMapName = 1259,
  TagsSkillGrpupSkillMapNodeLocale = 1260,
  TagsSkillGrpupSkillMapSkillGroups = 1261,
  TagsSkillGrpupSkillMapSkills = 1262,
  TagsSkillGrpupSkillMapSortKey = 1263,
  TagsSkillGrpupSkillMapSpaceId = 1264,
  TagsSkillGrpupSkillMapUpdatedAt = 1265,
  TagsSkillGrpupSkills = 1266,
  TagsSkillGrpupSkillsBlogPost = 1267,
  TagsSkillGrpupSkillsChildren = 1268,
  TagsSkillGrpupSkillsContentfulId = 1269,
  TagsSkillGrpupSkillsCreatedAt = 1270,
  TagsSkillGrpupSkillsId = 1271,
  TagsSkillGrpupSkillsLevel = 1272,
  TagsSkillGrpupSkillsName = 1273,
  TagsSkillGrpupSkillsNodeLocale = 1274,
  TagsSkillGrpupSkillsOss = 1275,
  TagsSkillGrpupSkillsProject = 1276,
  TagsSkillGrpupSkillsSkillGrpup = 1277,
  TagsSkillGrpupSkillsSkillMap = 1278,
  TagsSkillGrpupSkillsSpaceId = 1279,
  TagsSkillGrpupSkillsUpdatedAt = 1280,
  TagsSkillGrpupSpaceId = 1281,
  TagsSkillGrpupSysRevision = 1282,
  TagsSkillGrpupSysType = 1283,
  TagsSkillGrpupUpdatedAt = 1284,
  TagsSkillMap = 1285,
  TagsSkillMapChildren = 1286,
  TagsSkillMapChildrenChildren = 1287,
  TagsSkillMapChildrenId = 1288,
  TagsSkillMapContentfulId = 1289,
  TagsSkillMapCreatedAt = 1290,
  TagsSkillMapExpanded = 1291,
  TagsSkillMapId = 1292,
  TagsSkillMapInternalContent = 1293,
  TagsSkillMapInternalContentDigest = 1294,
  TagsSkillMapInternalContentFilePath = 1295,
  TagsSkillMapInternalDescription = 1296,
  TagsSkillMapInternalFieldOwners = 1297,
  TagsSkillMapInternalIgnoreType = 1298,
  TagsSkillMapInternalMediaType = 1299,
  TagsSkillMapInternalOwner = 1300,
  TagsSkillMapInternalType = 1301,
  TagsSkillMapName = 1302,
  TagsSkillMapNodeLocale = 1303,
  TagsSkillMapParentChildren = 1304,
  TagsSkillMapParentId = 1305,
  TagsSkillMapSkillGroups = 1306,
  TagsSkillMapSkillGroupsChildren = 1307,
  TagsSkillMapSkillGroupsContentfulId = 1308,
  TagsSkillMapSkillGroupsCreatedAt = 1309,
  TagsSkillMapSkillGroupsId = 1310,
  TagsSkillMapSkillGroupsName = 1311,
  TagsSkillMapSkillGroupsNodeLocale = 1312,
  TagsSkillMapSkillGroupsSkillMap = 1313,
  TagsSkillMapSkillGroupsSkills = 1314,
  TagsSkillMapSkillGroupsSpaceId = 1315,
  TagsSkillMapSkillGroupsUpdatedAt = 1316,
  TagsSkillMapSkills = 1317,
  TagsSkillMapSkillsBlogPost = 1318,
  TagsSkillMapSkillsChildren = 1319,
  TagsSkillMapSkillsContentfulId = 1320,
  TagsSkillMapSkillsCreatedAt = 1321,
  TagsSkillMapSkillsId = 1322,
  TagsSkillMapSkillsLevel = 1323,
  TagsSkillMapSkillsName = 1324,
  TagsSkillMapSkillsNodeLocale = 1325,
  TagsSkillMapSkillsOss = 1326,
  TagsSkillMapSkillsProject = 1327,
  TagsSkillMapSkillsSkillGrpup = 1328,
  TagsSkillMapSkillsSkillMap = 1329,
  TagsSkillMapSkillsSpaceId = 1330,
  TagsSkillMapSkillsUpdatedAt = 1331,
  TagsSkillMapSortKey = 1332,
  TagsSkillMapSpaceId = 1333,
  TagsSkillMapSysRevision = 1334,
  TagsSkillMapSysType = 1335,
  TagsSkillMapUpdatedAt = 1336,
  TagsSpaceId = 1337,
  TagsSysRevision = 1338,
  TagsSysType = 1339,
  TagsUpdatedAt = 1340,
  UpdatedAt = 1341
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
  EndDate = 45,
  Id = 46,
  InternalContent = 47,
  InternalContentDigest = 48,
  InternalContentFilePath = 49,
  InternalDescription = 50,
  InternalFieldOwners = 51,
  InternalIgnoreType = 52,
  InternalMediaType = 53,
  InternalOwner = 54,
  InternalType = 55,
  Name = 56,
  NodeLocale = 57,
  ParentChildren = 58,
  ParentChildrenChildren = 59,
  ParentChildrenChildrenChildren = 60,
  ParentChildrenChildrenId = 61,
  ParentChildrenId = 62,
  ParentChildrenInternalContent = 63,
  ParentChildrenInternalContentDigest = 64,
  ParentChildrenInternalContentFilePath = 65,
  ParentChildrenInternalDescription = 66,
  ParentChildrenInternalFieldOwners = 67,
  ParentChildrenInternalIgnoreType = 68,
  ParentChildrenInternalMediaType = 69,
  ParentChildrenInternalOwner = 70,
  ParentChildrenInternalType = 71,
  ParentChildrenParentChildren = 72,
  ParentChildrenParentId = 73,
  ParentId = 74,
  ParentInternalContent = 75,
  ParentInternalContentDigest = 76,
  ParentInternalContentFilePath = 77,
  ParentInternalDescription = 78,
  ParentInternalFieldOwners = 79,
  ParentInternalIgnoreType = 80,
  ParentInternalMediaType = 81,
  ParentInternalOwner = 82,
  ParentInternalType = 83,
  ParentParentChildren = 84,
  ParentParentChildrenChildren = 85,
  ParentParentChildrenId = 86,
  ParentParentId = 87,
  ParentParentInternalContent = 88,
  ParentParentInternalContentDigest = 89,
  ParentParentInternalContentFilePath = 90,
  ParentParentInternalDescription = 91,
  ParentParentInternalFieldOwners = 92,
  ParentParentInternalIgnoreType = 93,
  ParentParentInternalMediaType = 94,
  ParentParentInternalOwner = 95,
  ParentParentInternalType = 96,
  ParentParentParentChildren = 97,
  ParentParentParentId = 98,
  QualificationMap = 99,
  QualificationMapChildren = 100,
  QualificationMapChildrenChildren = 101,
  QualificationMapChildrenChildrenChildren = 102,
  QualificationMapChildrenChildrenId = 103,
  QualificationMapChildrenId = 104,
  QualificationMapChildrenInternalContent = 105,
  QualificationMapChildrenInternalContentDigest = 106,
  QualificationMapChildrenInternalContentFilePath = 107,
  QualificationMapChildrenInternalDescription = 108,
  QualificationMapChildrenInternalFieldOwners = 109,
  QualificationMapChildrenInternalIgnoreType = 110,
  QualificationMapChildrenInternalMediaType = 111,
  QualificationMapChildrenInternalOwner = 112,
  QualificationMapChildrenInternalType = 113,
  QualificationMapChildrenParentChildren = 114,
  QualificationMapChildrenParentId = 115,
  QualificationMapContentfulId = 116,
  QualificationMapCreatedAt = 117,
  QualificationMapExpanded = 118,
  QualificationMapId = 119,
  QualificationMapInternalContent = 120,
  QualificationMapInternalContentDigest = 121,
  QualificationMapInternalContentFilePath = 122,
  QualificationMapInternalDescription = 123,
  QualificationMapInternalFieldOwners = 124,
  QualificationMapInternalIgnoreType = 125,
  QualificationMapInternalMediaType = 126,
  QualificationMapInternalOwner = 127,
  QualificationMapInternalType = 128,
  QualificationMapName = 129,
  QualificationMapNodeLocale = 130,
  QualificationMapParentChildren = 131,
  QualificationMapParentChildrenChildren = 132,
  QualificationMapParentChildrenId = 133,
  QualificationMapParentId = 134,
  QualificationMapParentInternalContent = 135,
  QualificationMapParentInternalContentDigest = 136,
  QualificationMapParentInternalContentFilePath = 137,
  QualificationMapParentInternalDescription = 138,
  QualificationMapParentInternalFieldOwners = 139,
  QualificationMapParentInternalIgnoreType = 140,
  QualificationMapParentInternalMediaType = 141,
  QualificationMapParentInternalOwner = 142,
  QualificationMapParentInternalType = 143,
  QualificationMapParentParentChildren = 144,
  QualificationMapParentParentId = 145,
  QualificationMapQualifications = 146,
  QualificationMapQualificationsChildren = 147,
  QualificationMapQualificationsChildrenChildren = 148,
  QualificationMapQualificationsChildrenId = 149,
  QualificationMapQualificationsContentfulId = 150,
  QualificationMapQualificationsCreatedAt = 151,
  QualificationMapQualificationsDate = 152,
  QualificationMapQualificationsEndDate = 153,
  QualificationMapQualificationsId = 154,
  QualificationMapQualificationsInternalContent = 155,
  QualificationMapQualificationsInternalContentDigest = 156,
  QualificationMapQualificationsInternalContentFilePath = 157,
  QualificationMapQualificationsInternalDescription = 158,
  QualificationMapQualificationsInternalFieldOwners = 159,
  QualificationMapQualificationsInternalIgnoreType = 160,
  QualificationMapQualificationsInternalMediaType = 161,
  QualificationMapQualificationsInternalOwner = 162,
  QualificationMapQualificationsInternalType = 163,
  QualificationMapQualificationsName = 164,
  QualificationMapQualificationsNodeLocale = 165,
  QualificationMapQualificationsParentChildren = 166,
  QualificationMapQualificationsParentId = 167,
  QualificationMapQualificationsQualificationMap = 168,
  QualificationMapQualificationsQualificationMapChildren = 169,
  QualificationMapQualificationsQualificationMapContentfulId = 170,
  QualificationMapQualificationsQualificationMapCreatedAt = 171,
  QualificationMapQualificationsQualificationMapExpanded = 172,
  QualificationMapQualificationsQualificationMapId = 173,
  QualificationMapQualificationsQualificationMapName = 174,
  QualificationMapQualificationsQualificationMapNodeLocale = 175,
  QualificationMapQualificationsQualificationMapQualifications = 176,
  QualificationMapQualificationsQualificationMapSortKey = 177,
  QualificationMapQualificationsQualificationMapSpaceId = 178,
  QualificationMapQualificationsQualificationMapUpdatedAt = 179,
  QualificationMapQualificationsSpaceId = 180,
  QualificationMapQualificationsSysRevision = 181,
  QualificationMapQualificationsSysType = 182,
  QualificationMapQualificationsUpdatedAt = 183,
  QualificationMapQualificationsUrl = 184,
  QualificationMapSortKey = 185,
  QualificationMapSpaceId = 186,
  QualificationMapSysRevision = 187,
  QualificationMapSysType = 188,
  QualificationMapUpdatedAt = 189,
  SpaceId = 190,
  SysContentTypeSysId = 191,
  SysContentTypeSysLinkType = 192,
  SysContentTypeSysType = 193,
  SysRevision = 194,
  SysType = 195,
  UpdatedAt = 196,
  Url = 197
}

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
  QualificationsEndDate = 118,
  QualificationsId = 119,
  QualificationsInternalContent = 120,
  QualificationsInternalContentDigest = 121,
  QualificationsInternalContentFilePath = 122,
  QualificationsInternalDescription = 123,
  QualificationsInternalFieldOwners = 124,
  QualificationsInternalIgnoreType = 125,
  QualificationsInternalMediaType = 126,
  QualificationsInternalOwner = 127,
  QualificationsInternalType = 128,
  QualificationsName = 129,
  QualificationsNodeLocale = 130,
  QualificationsParentChildren = 131,
  QualificationsParentChildrenChildren = 132,
  QualificationsParentChildrenId = 133,
  QualificationsParentId = 134,
  QualificationsParentInternalContent = 135,
  QualificationsParentInternalContentDigest = 136,
  QualificationsParentInternalContentFilePath = 137,
  QualificationsParentInternalDescription = 138,
  QualificationsParentInternalFieldOwners = 139,
  QualificationsParentInternalIgnoreType = 140,
  QualificationsParentInternalMediaType = 141,
  QualificationsParentInternalOwner = 142,
  QualificationsParentInternalType = 143,
  QualificationsParentParentChildren = 144,
  QualificationsParentParentId = 145,
  QualificationsQualificationMap = 146,
  QualificationsQualificationMapChildren = 147,
  QualificationsQualificationMapChildrenChildren = 148,
  QualificationsQualificationMapChildrenId = 149,
  QualificationsQualificationMapContentfulId = 150,
  QualificationsQualificationMapCreatedAt = 151,
  QualificationsQualificationMapExpanded = 152,
  QualificationsQualificationMapId = 153,
  QualificationsQualificationMapInternalContent = 154,
  QualificationsQualificationMapInternalContentDigest = 155,
  QualificationsQualificationMapInternalContentFilePath = 156,
  QualificationsQualificationMapInternalDescription = 157,
  QualificationsQualificationMapInternalFieldOwners = 158,
  QualificationsQualificationMapInternalIgnoreType = 159,
  QualificationsQualificationMapInternalMediaType = 160,
  QualificationsQualificationMapInternalOwner = 161,
  QualificationsQualificationMapInternalType = 162,
  QualificationsQualificationMapName = 163,
  QualificationsQualificationMapNodeLocale = 164,
  QualificationsQualificationMapParentChildren = 165,
  QualificationsQualificationMapParentId = 166,
  QualificationsQualificationMapQualifications = 167,
  QualificationsQualificationMapQualificationsChildren = 168,
  QualificationsQualificationMapQualificationsContentfulId = 169,
  QualificationsQualificationMapQualificationsCreatedAt = 170,
  QualificationsQualificationMapQualificationsDate = 171,
  QualificationsQualificationMapQualificationsEndDate = 172,
  QualificationsQualificationMapQualificationsId = 173,
  QualificationsQualificationMapQualificationsName = 174,
  QualificationsQualificationMapQualificationsNodeLocale = 175,
  QualificationsQualificationMapQualificationsQualificationMap = 176,
  QualificationsQualificationMapQualificationsSpaceId = 177,
  QualificationsQualificationMapQualificationsUpdatedAt = 178,
  QualificationsQualificationMapQualificationsUrl = 179,
  QualificationsQualificationMapSortKey = 180,
  QualificationsQualificationMapSpaceId = 181,
  QualificationsQualificationMapSysRevision = 182,
  QualificationsQualificationMapSysType = 183,
  QualificationsQualificationMapUpdatedAt = 184,
  QualificationsSpaceId = 185,
  QualificationsSysRevision = 186,
  QualificationsSysType = 187,
  QualificationsUpdatedAt = 188,
  QualificationsUrl = 189,
  SortKey = 190,
  SpaceId = 191,
  SysContentTypeSysId = 192,
  SysContentTypeSysLinkType = 193,
  SysContentTypeSysType = 194,
  SysRevision = 195,
  SysType = 196,
  UpdatedAt = 197
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
  SkillsBlogPostCategorySlug = 303,
  SkillsBlogPostCategorySortKey = 304,
  SkillsBlogPostCategorySpaceId = 305,
  SkillsBlogPostCategoryUpdatedAt = 306,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildren = 307,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 308,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeContent = 309,
  SkillsBlogPostChildContentfulBlogPostContentTextNodeId = 310,
  SkillsBlogPostChildren = 311,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNode = 312,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildren = 313,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 314,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeContent = 315,
  SkillsBlogPostChildrenContentfulBlogPostContentTextNodeId = 316,
  SkillsBlogPostChildrenChildren = 317,
  SkillsBlogPostChildrenId = 318,
  SkillsBlogPostContentChildren = 319,
  SkillsBlogPostContentChildrenMdx = 320,
  SkillsBlogPostContentContent = 321,
  SkillsBlogPostContentId = 322,
  SkillsBlogPostContentfulId = 323,
  SkillsBlogPostCreated = 324,
  SkillsBlogPostCreatedAt = 325,
  SkillsBlogPostExcerpt = 326,
  SkillsBlogPostGatsbyPath = 327,
  SkillsBlogPostId = 328,
  SkillsBlogPostInternalContent = 329,
  SkillsBlogPostInternalContentDigest = 330,
  SkillsBlogPostInternalContentFilePath = 331,
  SkillsBlogPostInternalDescription = 332,
  SkillsBlogPostInternalFieldOwners = 333,
  SkillsBlogPostInternalIgnoreType = 334,
  SkillsBlogPostInternalMediaType = 335,
  SkillsBlogPostInternalOwner = 336,
  SkillsBlogPostInternalType = 337,
  SkillsBlogPostNodeLocale = 338,
  SkillsBlogPostParentChildren = 339,
  SkillsBlogPostParentId = 340,
  SkillsBlogPostSlug = 341,
  SkillsBlogPostSpaceId = 342,
  SkillsBlogPostSysRevision = 343,
  SkillsBlogPostSysType = 344,
  SkillsBlogPostTags = 345,
  SkillsBlogPostTagsBlogPost = 346,
  SkillsBlogPostTagsChildren = 347,
  SkillsBlogPostTagsContentfulId = 348,
  SkillsBlogPostTagsCreatedAt = 349,
  SkillsBlogPostTagsId = 350,
  SkillsBlogPostTagsLevel = 351,
  SkillsBlogPostTagsName = 352,
  SkillsBlogPostTagsNodeLocale = 353,
  SkillsBlogPostTagsOss = 354,
  SkillsBlogPostTagsProject = 355,
  SkillsBlogPostTagsSkillGrpup = 356,
  SkillsBlogPostTagsSkillMap = 357,
  SkillsBlogPostTagsSpaceId = 358,
  SkillsBlogPostTagsUpdatedAt = 359,
  SkillsBlogPostThumbnailChildren = 360,
  SkillsBlogPostThumbnailContentfulId = 361,
  SkillsBlogPostThumbnailCreatedAt = 362,
  SkillsBlogPostThumbnailDescription = 363,
  SkillsBlogPostThumbnailFilename = 364,
  SkillsBlogPostThumbnailFilesize = 365,
  SkillsBlogPostThumbnailGatsbyImage = 366,
  SkillsBlogPostThumbnailGatsbyImageData = 367,
  SkillsBlogPostThumbnailHeight = 368,
  SkillsBlogPostThumbnailId = 369,
  SkillsBlogPostThumbnailMimeType = 370,
  SkillsBlogPostThumbnailNodeLocale = 371,
  SkillsBlogPostThumbnailPlaceholderUrl = 372,
  SkillsBlogPostThumbnailPublicUrl = 373,
  SkillsBlogPostThumbnailSize = 374,
  SkillsBlogPostThumbnailSpaceId = 375,
  SkillsBlogPostThumbnailTitle = 376,
  SkillsBlogPostThumbnailUpdatedAt = 377,
  SkillsBlogPostThumbnailUrl = 378,
  SkillsBlogPostThumbnailWidth = 379,
  SkillsBlogPostTitle = 380,
  SkillsBlogPostUpdated = 381,
  SkillsBlogPostUpdatedAt = 382,
  SkillsChildren = 383,
  SkillsChildrenChildren = 384,
  SkillsChildrenChildrenChildren = 385,
  SkillsChildrenChildrenId = 386,
  SkillsChildrenId = 387,
  SkillsChildrenInternalContent = 388,
  SkillsChildrenInternalContentDigest = 389,
  SkillsChildrenInternalContentFilePath = 390,
  SkillsChildrenInternalDescription = 391,
  SkillsChildrenInternalFieldOwners = 392,
  SkillsChildrenInternalIgnoreType = 393,
  SkillsChildrenInternalMediaType = 394,
  SkillsChildrenInternalOwner = 395,
  SkillsChildrenInternalType = 396,
  SkillsChildrenParentChildren = 397,
  SkillsChildrenParentId = 398,
  SkillsContentfulId = 399,
  SkillsCreatedAt = 400,
  SkillsId = 401,
  SkillsInternalContent = 402,
  SkillsInternalContentDigest = 403,
  SkillsInternalContentFilePath = 404,
  SkillsInternalDescription = 405,
  SkillsInternalFieldOwners = 406,
  SkillsInternalIgnoreType = 407,
  SkillsInternalMediaType = 408,
  SkillsInternalOwner = 409,
  SkillsInternalType = 410,
  SkillsLevel = 411,
  SkillsName = 412,
  SkillsNodeLocale = 413,
  SkillsOss = 414,
  SkillsOssChildContentfulOssDetailTextNodeChildren = 415,
  SkillsOssChildContentfulOssDetailTextNodeChildrenMdx = 416,
  SkillsOssChildContentfulOssDetailTextNodeDetail = 417,
  SkillsOssChildContentfulOssDetailTextNodeId = 418,
  SkillsOssChildren = 419,
  SkillsOssChildrenContentfulOssDetailTextNode = 420,
  SkillsOssChildrenContentfulOssDetailTextNodeChildren = 421,
  SkillsOssChildrenContentfulOssDetailTextNodeChildrenMdx = 422,
  SkillsOssChildrenContentfulOssDetailTextNodeDetail = 423,
  SkillsOssChildrenContentfulOssDetailTextNodeId = 424,
  SkillsOssChildrenChildren = 425,
  SkillsOssChildrenId = 426,
  SkillsOssContentfulId = 427,
  SkillsOssCreatedAt = 428,
  SkillsOssDetailChildren = 429,
  SkillsOssDetailChildrenMdx = 430,
  SkillsOssDetailDetail = 431,
  SkillsOssDetailId = 432,
  SkillsOssHref = 433,
  SkillsOssIconChildren = 434,
  SkillsOssIconChildrenContentfulIconSvgTextNode = 435,
  SkillsOssIconContact = 436,
  SkillsOssIconContentfulId = 437,
  SkillsOssIconCreatedAt = 438,
  SkillsOssIconHistory = 439,
  SkillsOssIconId = 440,
  SkillsOssIconName = 441,
  SkillsOssIconNodeLocale = 442,
  SkillsOssIconOss = 443,
  SkillsOssIconProject = 444,
  SkillsOssIconSpaceId = 445,
  SkillsOssIconUpdatedAt = 446,
  SkillsOssIconWhatICanDo = 447,
  SkillsOssId = 448,
  SkillsOssImageChildren = 449,
  SkillsOssImageContentfulId = 450,
  SkillsOssImageCreatedAt = 451,
  SkillsOssImageDescription = 452,
  SkillsOssImageFilename = 453,
  SkillsOssImageFilesize = 454,
  SkillsOssImageGatsbyImage = 455,
  SkillsOssImageGatsbyImageData = 456,
  SkillsOssImageHeight = 457,
  SkillsOssImageId = 458,
  SkillsOssImageMimeType = 459,
  SkillsOssImageNodeLocale = 460,
  SkillsOssImagePlaceholderUrl = 461,
  SkillsOssImagePublicUrl = 462,
  SkillsOssImageSize = 463,
  SkillsOssImageSpaceId = 464,
  SkillsOssImageTitle = 465,
  SkillsOssImageUpdatedAt = 466,
  SkillsOssImageUrl = 467,
  SkillsOssImageWidth = 468,
  SkillsOssInternalContent = 469,
  SkillsOssInternalContentDigest = 470,
  SkillsOssInternalContentFilePath = 471,
  SkillsOssInternalDescription = 472,
  SkillsOssInternalFieldOwners = 473,
  SkillsOssInternalIgnoreType = 474,
  SkillsOssInternalMediaType = 475,
  SkillsOssInternalOwner = 476,
  SkillsOssInternalType = 477,
  SkillsOssName = 478,
  SkillsOssNodeLocale = 479,
  SkillsOssParentChildren = 480,
  SkillsOssParentId = 481,
  SkillsOssSpaceId = 482,
  SkillsOssStartDate = 483,
  SkillsOssSubName = 484,
  SkillsOssSysRevision = 485,
  SkillsOssSysType = 486,
  SkillsOssTags = 487,
  SkillsOssTagsBlogPost = 488,
  SkillsOssTagsChildren = 489,
  SkillsOssTagsContentfulId = 490,
  SkillsOssTagsCreatedAt = 491,
  SkillsOssTagsId = 492,
  SkillsOssTagsLevel = 493,
  SkillsOssTagsName = 494,
  SkillsOssTagsNodeLocale = 495,
  SkillsOssTagsOss = 496,
  SkillsOssTagsProject = 497,
  SkillsOssTagsSkillGrpup = 498,
  SkillsOssTagsSkillMap = 499,
  SkillsOssTagsSpaceId = 500,
  SkillsOssTagsUpdatedAt = 501,
  SkillsOssUpdatedAt = 502,
  SkillsParentChildren = 503,
  SkillsParentChildrenChildren = 504,
  SkillsParentChildrenId = 505,
  SkillsParentId = 506,
  SkillsParentInternalContent = 507,
  SkillsParentInternalContentDigest = 508,
  SkillsParentInternalContentFilePath = 509,
  SkillsParentInternalDescription = 510,
  SkillsParentInternalFieldOwners = 511,
  SkillsParentInternalIgnoreType = 512,
  SkillsParentInternalMediaType = 513,
  SkillsParentInternalOwner = 514,
  SkillsParentInternalType = 515,
  SkillsParentParentChildren = 516,
  SkillsParentParentId = 517,
  SkillsProject = 518,
  SkillsProjectChildContentfulProjectDetailTextNodeChildren = 519,
  SkillsProjectChildContentfulProjectDetailTextNodeChildrenMdx = 520,
  SkillsProjectChildContentfulProjectDetailTextNodeDetail = 521,
  SkillsProjectChildContentfulProjectDetailTextNodeId = 522,
  SkillsProjectChildren = 523,
  SkillsProjectChildrenContentfulProjectDetailTextNode = 524,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildren = 525,
  SkillsProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 526,
  SkillsProjectChildrenContentfulProjectDetailTextNodeDetail = 527,
  SkillsProjectChildrenContentfulProjectDetailTextNodeId = 528,
  SkillsProjectChildrenChildren = 529,
  SkillsProjectChildrenId = 530,
  SkillsProjectContentfulId = 531,
  SkillsProjectCreatedAt = 532,
  SkillsProjectDetailChildren = 533,
  SkillsProjectDetailChildrenMdx = 534,
  SkillsProjectDetailDetail = 535,
  SkillsProjectDetailId = 536,
  SkillsProjectEndDate = 537,
  SkillsProjectIconChildren = 538,
  SkillsProjectIconChildrenContentfulIconSvgTextNode = 539,
  SkillsProjectIconContact = 540,
  SkillsProjectIconContentfulId = 541,
  SkillsProjectIconCreatedAt = 542,
  SkillsProjectIconHistory = 543,
  SkillsProjectIconId = 544,
  SkillsProjectIconName = 545,
  SkillsProjectIconNodeLocale = 546,
  SkillsProjectIconOss = 547,
  SkillsProjectIconProject = 548,
  SkillsProjectIconSpaceId = 549,
  SkillsProjectIconUpdatedAt = 550,
  SkillsProjectIconWhatICanDo = 551,
  SkillsProjectId = 552,
  SkillsProjectInternalContent = 553,
  SkillsProjectInternalContentDigest = 554,
  SkillsProjectInternalContentFilePath = 555,
  SkillsProjectInternalDescription = 556,
  SkillsProjectInternalFieldOwners = 557,
  SkillsProjectInternalIgnoreType = 558,
  SkillsProjectInternalMediaType = 559,
  SkillsProjectInternalOwner = 560,
  SkillsProjectInternalType = 561,
  SkillsProjectName = 562,
  SkillsProjectNodeLocale = 563,
  SkillsProjectParentChildren = 564,
  SkillsProjectParentId = 565,
  SkillsProjectSpaceId = 566,
  SkillsProjectStartDate = 567,
  SkillsProjectSubName = 568,
  SkillsProjectSysRevision = 569,
  SkillsProjectSysType = 570,
  SkillsProjectTags = 571,
  SkillsProjectTagsBlogPost = 572,
  SkillsProjectTagsChildren = 573,
  SkillsProjectTagsContentfulId = 574,
  SkillsProjectTagsCreatedAt = 575,
  SkillsProjectTagsId = 576,
  SkillsProjectTagsLevel = 577,
  SkillsProjectTagsName = 578,
  SkillsProjectTagsNodeLocale = 579,
  SkillsProjectTagsOss = 580,
  SkillsProjectTagsProject = 581,
  SkillsProjectTagsSkillGrpup = 582,
  SkillsProjectTagsSkillMap = 583,
  SkillsProjectTagsSpaceId = 584,
  SkillsProjectTagsUpdatedAt = 585,
  SkillsProjectUpdatedAt = 586,
  SkillsSkillGrpup = 587,
  SkillsSkillGrpupChildren = 588,
  SkillsSkillGrpupChildrenChildren = 589,
  SkillsSkillGrpupChildrenId = 590,
  SkillsSkillGrpupContentfulId = 591,
  SkillsSkillGrpupCreatedAt = 592,
  SkillsSkillGrpupId = 593,
  SkillsSkillGrpupInternalContent = 594,
  SkillsSkillGrpupInternalContentDigest = 595,
  SkillsSkillGrpupInternalContentFilePath = 596,
  SkillsSkillGrpupInternalDescription = 597,
  SkillsSkillGrpupInternalFieldOwners = 598,
  SkillsSkillGrpupInternalIgnoreType = 599,
  SkillsSkillGrpupInternalMediaType = 600,
  SkillsSkillGrpupInternalOwner = 601,
  SkillsSkillGrpupInternalType = 602,
  SkillsSkillGrpupName = 603,
  SkillsSkillGrpupNodeLocale = 604,
  SkillsSkillGrpupParentChildren = 605,
  SkillsSkillGrpupParentId = 606,
  SkillsSkillGrpupSkillMap = 607,
  SkillsSkillGrpupSkillMapChildren = 608,
  SkillsSkillGrpupSkillMapContentfulId = 609,
  SkillsSkillGrpupSkillMapCreatedAt = 610,
  SkillsSkillGrpupSkillMapExpanded = 611,
  SkillsSkillGrpupSkillMapId = 612,
  SkillsSkillGrpupSkillMapName = 613,
  SkillsSkillGrpupSkillMapNodeLocale = 614,
  SkillsSkillGrpupSkillMapSkillGroups = 615,
  SkillsSkillGrpupSkillMapSkills = 616,
  SkillsSkillGrpupSkillMapSortKey = 617,
  SkillsSkillGrpupSkillMapSpaceId = 618,
  SkillsSkillGrpupSkillMapUpdatedAt = 619,
  SkillsSkillGrpupSkills = 620,
  SkillsSkillGrpupSkillsBlogPost = 621,
  SkillsSkillGrpupSkillsChildren = 622,
  SkillsSkillGrpupSkillsContentfulId = 623,
  SkillsSkillGrpupSkillsCreatedAt = 624,
  SkillsSkillGrpupSkillsId = 625,
  SkillsSkillGrpupSkillsLevel = 626,
  SkillsSkillGrpupSkillsName = 627,
  SkillsSkillGrpupSkillsNodeLocale = 628,
  SkillsSkillGrpupSkillsOss = 629,
  SkillsSkillGrpupSkillsProject = 630,
  SkillsSkillGrpupSkillsSkillGrpup = 631,
  SkillsSkillGrpupSkillsSkillMap = 632,
  SkillsSkillGrpupSkillsSpaceId = 633,
  SkillsSkillGrpupSkillsUpdatedAt = 634,
  SkillsSkillGrpupSpaceId = 635,
  SkillsSkillGrpupSysRevision = 636,
  SkillsSkillGrpupSysType = 637,
  SkillsSkillGrpupUpdatedAt = 638,
  SkillsSkillMap = 639,
  SkillsSkillMapChildren = 640,
  SkillsSkillMapChildrenChildren = 641,
  SkillsSkillMapChildrenId = 642,
  SkillsSkillMapContentfulId = 643,
  SkillsSkillMapCreatedAt = 644,
  SkillsSkillMapExpanded = 645,
  SkillsSkillMapId = 646,
  SkillsSkillMapInternalContent = 647,
  SkillsSkillMapInternalContentDigest = 648,
  SkillsSkillMapInternalContentFilePath = 649,
  SkillsSkillMapInternalDescription = 650,
  SkillsSkillMapInternalFieldOwners = 651,
  SkillsSkillMapInternalIgnoreType = 652,
  SkillsSkillMapInternalMediaType = 653,
  SkillsSkillMapInternalOwner = 654,
  SkillsSkillMapInternalType = 655,
  SkillsSkillMapName = 656,
  SkillsSkillMapNodeLocale = 657,
  SkillsSkillMapParentChildren = 658,
  SkillsSkillMapParentId = 659,
  SkillsSkillMapSkillGroups = 660,
  SkillsSkillMapSkillGroupsChildren = 661,
  SkillsSkillMapSkillGroupsContentfulId = 662,
  SkillsSkillMapSkillGroupsCreatedAt = 663,
  SkillsSkillMapSkillGroupsId = 664,
  SkillsSkillMapSkillGroupsName = 665,
  SkillsSkillMapSkillGroupsNodeLocale = 666,
  SkillsSkillMapSkillGroupsSkillMap = 667,
  SkillsSkillMapSkillGroupsSkills = 668,
  SkillsSkillMapSkillGroupsSpaceId = 669,
  SkillsSkillMapSkillGroupsUpdatedAt = 670,
  SkillsSkillMapSkills = 671,
  SkillsSkillMapSkillsBlogPost = 672,
  SkillsSkillMapSkillsChildren = 673,
  SkillsSkillMapSkillsContentfulId = 674,
  SkillsSkillMapSkillsCreatedAt = 675,
  SkillsSkillMapSkillsId = 676,
  SkillsSkillMapSkillsLevel = 677,
  SkillsSkillMapSkillsName = 678,
  SkillsSkillMapSkillsNodeLocale = 679,
  SkillsSkillMapSkillsOss = 680,
  SkillsSkillMapSkillsProject = 681,
  SkillsSkillMapSkillsSkillGrpup = 682,
  SkillsSkillMapSkillsSkillMap = 683,
  SkillsSkillMapSkillsSpaceId = 684,
  SkillsSkillMapSkillsUpdatedAt = 685,
  SkillsSkillMapSortKey = 686,
  SkillsSkillMapSpaceId = 687,
  SkillsSkillMapSysRevision = 688,
  SkillsSkillMapSysType = 689,
  SkillsSkillMapUpdatedAt = 690,
  SkillsSpaceId = 691,
  SkillsSysRevision = 692,
  SkillsSysType = 693,
  SkillsUpdatedAt = 694,
  SpaceId = 695,
  SysContentTypeSysId = 696,
  SysContentTypeSysLinkType = 697,
  SysContentTypeSysType = 698,
  SysRevision = 699,
  SysType = 700,
  UpdatedAt = 701
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
  SortKey = 694,
  SpaceId = 695,
  SysContentTypeSysId = 696,
  SysContentTypeSysLinkType = 697,
  SysContentTypeSysType = 698,
  SysRevision = 699,
  SysType = 700,
  UpdatedAt = 701
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
  BlogPostCategorySlug = 36,
  BlogPostCategorySortKey = 37,
  BlogPostCategorySpaceId = 38,
  BlogPostCategorySysRevision = 39,
  BlogPostCategorySysType = 40,
  BlogPostCategoryUpdatedAt = 41,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxBody = 42,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxChildren = 43,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxExcerpt = 44,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 45,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHeadings = 46,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxHtml = 47,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxId = 48,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxMdxAst = 49,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxRawBody = 50,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxSlug = 51,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTableOfContents = 52,
  BlogPostChildContentfulBlogPostContentTextNodeChildMdxTimeToRead = 53,
  BlogPostChildContentfulBlogPostContentTextNodeChildren = 54,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdx = 55,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxBody = 56,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxChildren = 57,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 58,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 59,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHeadings = 60,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxHtml = 61,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxId = 62,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 63,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxRawBody = 64,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxSlug = 65,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 66,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 67,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenChildren = 68,
  BlogPostChildContentfulBlogPostContentTextNodeChildrenId = 69,
  BlogPostChildContentfulBlogPostContentTextNodeContent = 70,
  BlogPostChildContentfulBlogPostContentTextNodeId = 71,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContent = 72,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentDigest = 73,
  BlogPostChildContentfulBlogPostContentTextNodeInternalContentFilePath = 74,
  BlogPostChildContentfulBlogPostContentTextNodeInternalDescription = 75,
  BlogPostChildContentfulBlogPostContentTextNodeInternalFieldOwners = 76,
  BlogPostChildContentfulBlogPostContentTextNodeInternalIgnoreType = 77,
  BlogPostChildContentfulBlogPostContentTextNodeInternalMediaType = 78,
  BlogPostChildContentfulBlogPostContentTextNodeInternalOwner = 79,
  BlogPostChildContentfulBlogPostContentTextNodeInternalType = 80,
  BlogPostChildContentfulBlogPostContentTextNodeParentChildren = 81,
  BlogPostChildContentfulBlogPostContentTextNodeParentId = 82,
  BlogPostChildContentfulBlogPostContentTextNodeSysType = 83,
  BlogPostChildren = 84,
  BlogPostChildrenContentfulBlogPostContentTextNode = 85,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxBody = 86,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxChildren = 87,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxExcerpt = 88,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxFileAbsolutePath = 89,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHeadings = 90,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxHtml = 91,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxId = 92,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxMdxAst = 93,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxRawBody = 94,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxSlug = 95,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTableOfContents = 96,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildMdxTimeToRead = 97,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildren = 98,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdx = 99,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxBody = 100,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxChildren = 101,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxExcerpt = 102,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxFileAbsolutePath = 103,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHeadings = 104,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxHtml = 105,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxId = 106,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxMdxAst = 107,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxRawBody = 108,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxSlug = 109,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTableOfContents = 110,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenMdxTimeToRead = 111,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenChildren = 112,
  BlogPostChildrenContentfulBlogPostContentTextNodeChildrenId = 113,
  BlogPostChildrenContentfulBlogPostContentTextNodeContent = 114,
  BlogPostChildrenContentfulBlogPostContentTextNodeId = 115,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContent = 116,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentDigest = 117,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalContentFilePath = 118,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalDescription = 119,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalFieldOwners = 120,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalIgnoreType = 121,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalMediaType = 122,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalOwner = 123,
  BlogPostChildrenContentfulBlogPostContentTextNodeInternalType = 124,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentChildren = 125,
  BlogPostChildrenContentfulBlogPostContentTextNodeParentId = 126,
  BlogPostChildrenContentfulBlogPostContentTextNodeSysType = 127,
  BlogPostChildrenChildren = 128,
  BlogPostChildrenChildrenChildren = 129,
  BlogPostChildrenChildrenId = 130,
  BlogPostChildrenId = 131,
  BlogPostChildrenInternalContent = 132,
  BlogPostChildrenInternalContentDigest = 133,
  BlogPostChildrenInternalContentFilePath = 134,
  BlogPostChildrenInternalDescription = 135,
  BlogPostChildrenInternalFieldOwners = 136,
  BlogPostChildrenInternalIgnoreType = 137,
  BlogPostChildrenInternalMediaType = 138,
  BlogPostChildrenInternalOwner = 139,
  BlogPostChildrenInternalType = 140,
  BlogPostChildrenParentChildren = 141,
  BlogPostChildrenParentId = 142,
  BlogPostContentChildMdxBody = 143,
  BlogPostContentChildMdxChildren = 144,
  BlogPostContentChildMdxExcerpt = 145,
  BlogPostContentChildMdxFileAbsolutePath = 146,
  BlogPostContentChildMdxHeadings = 147,
  BlogPostContentChildMdxHtml = 148,
  BlogPostContentChildMdxId = 149,
  BlogPostContentChildMdxMdxAst = 150,
  BlogPostContentChildMdxRawBody = 151,
  BlogPostContentChildMdxSlug = 152,
  BlogPostContentChildMdxTableOfContents = 153,
  BlogPostContentChildMdxTimeToRead = 154,
  BlogPostContentChildren = 155,
  BlogPostContentChildrenMdx = 156,
  BlogPostContentChildrenMdxBody = 157,
  BlogPostContentChildrenMdxChildren = 158,
  BlogPostContentChildrenMdxExcerpt = 159,
  BlogPostContentChildrenMdxFileAbsolutePath = 160,
  BlogPostContentChildrenMdxHeadings = 161,
  BlogPostContentChildrenMdxHtml = 162,
  BlogPostContentChildrenMdxId = 163,
  BlogPostContentChildrenMdxMdxAst = 164,
  BlogPostContentChildrenMdxRawBody = 165,
  BlogPostContentChildrenMdxSlug = 166,
  BlogPostContentChildrenMdxTableOfContents = 167,
  BlogPostContentChildrenMdxTimeToRead = 168,
  BlogPostContentChildrenChildren = 169,
  BlogPostContentChildrenId = 170,
  BlogPostContentContent = 171,
  BlogPostContentId = 172,
  BlogPostContentInternalContent = 173,
  BlogPostContentInternalContentDigest = 174,
  BlogPostContentInternalContentFilePath = 175,
  BlogPostContentInternalDescription = 176,
  BlogPostContentInternalFieldOwners = 177,
  BlogPostContentInternalIgnoreType = 178,
  BlogPostContentInternalMediaType = 179,
  BlogPostContentInternalOwner = 180,
  BlogPostContentInternalType = 181,
  BlogPostContentParentChildren = 182,
  BlogPostContentParentId = 183,
  BlogPostContentSysType = 184,
  BlogPostContentfulId = 185,
  BlogPostCreated = 186,
  BlogPostCreatedAt = 187,
  BlogPostExcerpt = 188,
  BlogPostGatsbyPath = 189,
  BlogPostId = 190,
  BlogPostInternalContent = 191,
  BlogPostInternalContentDigest = 192,
  BlogPostInternalContentFilePath = 193,
  BlogPostInternalDescription = 194,
  BlogPostInternalFieldOwners = 195,
  BlogPostInternalIgnoreType = 196,
  BlogPostInternalMediaType = 197,
  BlogPostInternalOwner = 198,
  BlogPostInternalType = 199,
  BlogPostNodeLocale = 200,
  BlogPostParentChildren = 201,
  BlogPostParentChildrenChildren = 202,
  BlogPostParentChildrenId = 203,
  BlogPostParentId = 204,
  BlogPostParentInternalContent = 205,
  BlogPostParentInternalContentDigest = 206,
  BlogPostParentInternalContentFilePath = 207,
  BlogPostParentInternalDescription = 208,
  BlogPostParentInternalFieldOwners = 209,
  BlogPostParentInternalIgnoreType = 210,
  BlogPostParentInternalMediaType = 211,
  BlogPostParentInternalOwner = 212,
  BlogPostParentInternalType = 213,
  BlogPostParentParentChildren = 214,
  BlogPostParentParentId = 215,
  BlogPostSlug = 216,
  BlogPostSpaceId = 217,
  BlogPostSysRevision = 218,
  BlogPostSysType = 219,
  BlogPostTags = 220,
  BlogPostTagsBlogPost = 221,
  BlogPostTagsBlogPostChildren = 222,
  BlogPostTagsBlogPostChildrenContentfulBlogPostContentTextNode = 223,
  BlogPostTagsBlogPostContentfulId = 224,
  BlogPostTagsBlogPostCreated = 225,
  BlogPostTagsBlogPostCreatedAt = 226,
  BlogPostTagsBlogPostExcerpt = 227,
  BlogPostTagsBlogPostGatsbyPath = 228,
  BlogPostTagsBlogPostId = 229,
  BlogPostTagsBlogPostNodeLocale = 230,
  BlogPostTagsBlogPostSlug = 231,
  BlogPostTagsBlogPostSpaceId = 232,
  BlogPostTagsBlogPostTags = 233,
  BlogPostTagsBlogPostTitle = 234,
  BlogPostTagsBlogPostUpdated = 235,
  BlogPostTagsBlogPostUpdatedAt = 236,
  BlogPostTagsChildren = 237,
  BlogPostTagsChildrenChildren = 238,
  BlogPostTagsChildrenId = 239,
  BlogPostTagsContentfulId = 240,
  BlogPostTagsCreatedAt = 241,
  BlogPostTagsId = 242,
  BlogPostTagsInternalContent = 243,
  BlogPostTagsInternalContentDigest = 244,
  BlogPostTagsInternalContentFilePath = 245,
  BlogPostTagsInternalDescription = 246,
  BlogPostTagsInternalFieldOwners = 247,
  BlogPostTagsInternalIgnoreType = 248,
  BlogPostTagsInternalMediaType = 249,
  BlogPostTagsInternalOwner = 250,
  BlogPostTagsInternalType = 251,
  BlogPostTagsLevel = 252,
  BlogPostTagsName = 253,
  BlogPostTagsNodeLocale = 254,
  BlogPostTagsOss = 255,
  BlogPostTagsOssChildren = 256,
  BlogPostTagsOssChildrenContentfulOssDetailTextNode = 257,
  BlogPostTagsOssContentfulId = 258,
  BlogPostTagsOssCreatedAt = 259,
  BlogPostTagsOssHref = 260,
  BlogPostTagsOssId = 261,
  BlogPostTagsOssName = 262,
  BlogPostTagsOssNodeLocale = 263,
  BlogPostTagsOssSpaceId = 264,
  BlogPostTagsOssStartDate = 265,
  BlogPostTagsOssSubName = 266,
  BlogPostTagsOssTags = 267,
  BlogPostTagsOssUpdatedAt = 268,
  BlogPostTagsParentChildren = 269,
  BlogPostTagsParentId = 270,
  BlogPostTagsProject = 271,
  BlogPostTagsProjectChildren = 272,
  BlogPostTagsProjectChildrenContentfulProjectDetailTextNode = 273,
  BlogPostTagsProjectContentfulId = 274,
  BlogPostTagsProjectCreatedAt = 275,
  BlogPostTagsProjectEndDate = 276,
  BlogPostTagsProjectId = 277,
  BlogPostTagsProjectName = 278,
  BlogPostTagsProjectNodeLocale = 279,
  BlogPostTagsProjectSpaceId = 280,
  BlogPostTagsProjectStartDate = 281,
  BlogPostTagsProjectSubName = 282,
  BlogPostTagsProjectTags = 283,
  BlogPostTagsProjectUpdatedAt = 284,
  BlogPostTagsSkillGrpup = 285,
  BlogPostTagsSkillGrpupChildren = 286,
  BlogPostTagsSkillGrpupContentfulId = 287,
  BlogPostTagsSkillGrpupCreatedAt = 288,
  BlogPostTagsSkillGrpupId = 289,
  BlogPostTagsSkillGrpupName = 290,
  BlogPostTagsSkillGrpupNodeLocale = 291,
  BlogPostTagsSkillGrpupSkillMap = 292,
  BlogPostTagsSkillGrpupSkills = 293,
  BlogPostTagsSkillGrpupSpaceId = 294,
  BlogPostTagsSkillGrpupUpdatedAt = 295,
  BlogPostTagsSkillMap = 296,
  BlogPostTagsSkillMapChildren = 297,
  BlogPostTagsSkillMapContentfulId = 298,
  BlogPostTagsSkillMapCreatedAt = 299,
  BlogPostTagsSkillMapExpanded = 300,
  BlogPostTagsSkillMapId = 301,
  BlogPostTagsSkillMapName = 302,
  BlogPostTagsSkillMapNodeLocale = 303,
  BlogPostTagsSkillMapSkillGroups = 304,
  BlogPostTagsSkillMapSkills = 305,
  BlogPostTagsSkillMapSortKey = 306,
  BlogPostTagsSkillMapSpaceId = 307,
  BlogPostTagsSkillMapUpdatedAt = 308,
  BlogPostTagsSpaceId = 309,
  BlogPostTagsSysRevision = 310,
  BlogPostTagsSysType = 311,
  BlogPostTagsUpdatedAt = 312,
  BlogPostThumbnailChildren = 313,
  BlogPostThumbnailChildrenChildren = 314,
  BlogPostThumbnailChildrenId = 315,
  BlogPostThumbnailContentfulId = 316,
  BlogPostThumbnailCreatedAt = 317,
  BlogPostThumbnailDescription = 318,
  BlogPostThumbnailFileContentType = 319,
  BlogPostThumbnailFileFileName = 320,
  BlogPostThumbnailFileUrl = 321,
  BlogPostThumbnailFilename = 322,
  BlogPostThumbnailFilesize = 323,
  BlogPostThumbnailGatsbyImage = 324,
  BlogPostThumbnailGatsbyImageData = 325,
  BlogPostThumbnailHeight = 326,
  BlogPostThumbnailId = 327,
  BlogPostThumbnailInternalContent = 328,
  BlogPostThumbnailInternalContentDigest = 329,
  BlogPostThumbnailInternalContentFilePath = 330,
  BlogPostThumbnailInternalDescription = 331,
  BlogPostThumbnailInternalFieldOwners = 332,
  BlogPostThumbnailInternalIgnoreType = 333,
  BlogPostThumbnailInternalMediaType = 334,
  BlogPostThumbnailInternalOwner = 335,
  BlogPostThumbnailInternalType = 336,
  BlogPostThumbnailMimeType = 337,
  BlogPostThumbnailNodeLocale = 338,
  BlogPostThumbnailParentChildren = 339,
  BlogPostThumbnailParentId = 340,
  BlogPostThumbnailPlaceholderUrl = 341,
  BlogPostThumbnailPublicUrl = 342,
  BlogPostThumbnailResizeHeight = 343,
  BlogPostThumbnailResizeSrc = 344,
  BlogPostThumbnailResizeWidth = 345,
  BlogPostThumbnailSize = 346,
  BlogPostThumbnailSpaceId = 347,
  BlogPostThumbnailSysRevision = 348,
  BlogPostThumbnailSysType = 349,
  BlogPostThumbnailTitle = 350,
  BlogPostThumbnailUpdatedAt = 351,
  BlogPostThumbnailUrl = 352,
  BlogPostThumbnailWidth = 353,
  BlogPostTitle = 354,
  BlogPostUpdated = 355,
  BlogPostUpdatedAt = 356,
  Children = 357,
  ChildrenChildren = 358,
  ChildrenChildrenChildren = 359,
  ChildrenChildrenChildrenChildren = 360,
  ChildrenChildrenChildrenId = 361,
  ChildrenChildrenId = 362,
  ChildrenChildrenInternalContent = 363,
  ChildrenChildrenInternalContentDigest = 364,
  ChildrenChildrenInternalContentFilePath = 365,
  ChildrenChildrenInternalDescription = 366,
  ChildrenChildrenInternalFieldOwners = 367,
  ChildrenChildrenInternalIgnoreType = 368,
  ChildrenChildrenInternalMediaType = 369,
  ChildrenChildrenInternalOwner = 370,
  ChildrenChildrenInternalType = 371,
  ChildrenChildrenParentChildren = 372,
  ChildrenChildrenParentId = 373,
  ChildrenId = 374,
  ChildrenInternalContent = 375,
  ChildrenInternalContentDigest = 376,
  ChildrenInternalContentFilePath = 377,
  ChildrenInternalDescription = 378,
  ChildrenInternalFieldOwners = 379,
  ChildrenInternalIgnoreType = 380,
  ChildrenInternalMediaType = 381,
  ChildrenInternalOwner = 382,
  ChildrenInternalType = 383,
  ChildrenParentChildren = 384,
  ChildrenParentChildrenChildren = 385,
  ChildrenParentChildrenId = 386,
  ChildrenParentId = 387,
  ChildrenParentInternalContent = 388,
  ChildrenParentInternalContentDigest = 389,
  ChildrenParentInternalContentFilePath = 390,
  ChildrenParentInternalDescription = 391,
  ChildrenParentInternalFieldOwners = 392,
  ChildrenParentInternalIgnoreType = 393,
  ChildrenParentInternalMediaType = 394,
  ChildrenParentInternalOwner = 395,
  ChildrenParentInternalType = 396,
  ChildrenParentParentChildren = 397,
  ChildrenParentParentId = 398,
  ContentfulId = 399,
  CreatedAt = 400,
  Id = 401,
  InternalContent = 402,
  InternalContentDigest = 403,
  InternalContentFilePath = 404,
  InternalDescription = 405,
  InternalFieldOwners = 406,
  InternalIgnoreType = 407,
  InternalMediaType = 408,
  InternalOwner = 409,
  InternalType = 410,
  Level = 411,
  Name = 412,
  NodeLocale = 413,
  Oss = 414,
  OssChildContentfulOssDetailTextNodeChildMdxBody = 415,
  OssChildContentfulOssDetailTextNodeChildMdxChildren = 416,
  OssChildContentfulOssDetailTextNodeChildMdxExcerpt = 417,
  OssChildContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 418,
  OssChildContentfulOssDetailTextNodeChildMdxHeadings = 419,
  OssChildContentfulOssDetailTextNodeChildMdxHtml = 420,
  OssChildContentfulOssDetailTextNodeChildMdxId = 421,
  OssChildContentfulOssDetailTextNodeChildMdxMdxAst = 422,
  OssChildContentfulOssDetailTextNodeChildMdxRawBody = 423,
  OssChildContentfulOssDetailTextNodeChildMdxSlug = 424,
  OssChildContentfulOssDetailTextNodeChildMdxTableOfContents = 425,
  OssChildContentfulOssDetailTextNodeChildMdxTimeToRead = 426,
  OssChildContentfulOssDetailTextNodeChildren = 427,
  OssChildContentfulOssDetailTextNodeChildrenMdx = 428,
  OssChildContentfulOssDetailTextNodeChildrenMdxBody = 429,
  OssChildContentfulOssDetailTextNodeChildrenMdxChildren = 430,
  OssChildContentfulOssDetailTextNodeChildrenMdxExcerpt = 431,
  OssChildContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 432,
  OssChildContentfulOssDetailTextNodeChildrenMdxHeadings = 433,
  OssChildContentfulOssDetailTextNodeChildrenMdxHtml = 434,
  OssChildContentfulOssDetailTextNodeChildrenMdxId = 435,
  OssChildContentfulOssDetailTextNodeChildrenMdxMdxAst = 436,
  OssChildContentfulOssDetailTextNodeChildrenMdxRawBody = 437,
  OssChildContentfulOssDetailTextNodeChildrenMdxSlug = 438,
  OssChildContentfulOssDetailTextNodeChildrenMdxTableOfContents = 439,
  OssChildContentfulOssDetailTextNodeChildrenMdxTimeToRead = 440,
  OssChildContentfulOssDetailTextNodeChildrenChildren = 441,
  OssChildContentfulOssDetailTextNodeChildrenId = 442,
  OssChildContentfulOssDetailTextNodeDetail = 443,
  OssChildContentfulOssDetailTextNodeId = 444,
  OssChildContentfulOssDetailTextNodeInternalContent = 445,
  OssChildContentfulOssDetailTextNodeInternalContentDigest = 446,
  OssChildContentfulOssDetailTextNodeInternalContentFilePath = 447,
  OssChildContentfulOssDetailTextNodeInternalDescription = 448,
  OssChildContentfulOssDetailTextNodeInternalFieldOwners = 449,
  OssChildContentfulOssDetailTextNodeInternalIgnoreType = 450,
  OssChildContentfulOssDetailTextNodeInternalMediaType = 451,
  OssChildContentfulOssDetailTextNodeInternalOwner = 452,
  OssChildContentfulOssDetailTextNodeInternalType = 453,
  OssChildContentfulOssDetailTextNodeParentChildren = 454,
  OssChildContentfulOssDetailTextNodeParentId = 455,
  OssChildContentfulOssDetailTextNodeSysType = 456,
  OssChildren = 457,
  OssChildrenContentfulOssDetailTextNode = 458,
  OssChildrenContentfulOssDetailTextNodeChildMdxBody = 459,
  OssChildrenContentfulOssDetailTextNodeChildMdxChildren = 460,
  OssChildrenContentfulOssDetailTextNodeChildMdxExcerpt = 461,
  OssChildrenContentfulOssDetailTextNodeChildMdxFileAbsolutePath = 462,
  OssChildrenContentfulOssDetailTextNodeChildMdxHeadings = 463,
  OssChildrenContentfulOssDetailTextNodeChildMdxHtml = 464,
  OssChildrenContentfulOssDetailTextNodeChildMdxId = 465,
  OssChildrenContentfulOssDetailTextNodeChildMdxMdxAst = 466,
  OssChildrenContentfulOssDetailTextNodeChildMdxRawBody = 467,
  OssChildrenContentfulOssDetailTextNodeChildMdxSlug = 468,
  OssChildrenContentfulOssDetailTextNodeChildMdxTableOfContents = 469,
  OssChildrenContentfulOssDetailTextNodeChildMdxTimeToRead = 470,
  OssChildrenContentfulOssDetailTextNodeChildren = 471,
  OssChildrenContentfulOssDetailTextNodeChildrenMdx = 472,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxBody = 473,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxChildren = 474,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxExcerpt = 475,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxFileAbsolutePath = 476,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHeadings = 477,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxHtml = 478,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxId = 479,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxMdxAst = 480,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxRawBody = 481,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxSlug = 482,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTableOfContents = 483,
  OssChildrenContentfulOssDetailTextNodeChildrenMdxTimeToRead = 484,
  OssChildrenContentfulOssDetailTextNodeChildrenChildren = 485,
  OssChildrenContentfulOssDetailTextNodeChildrenId = 486,
  OssChildrenContentfulOssDetailTextNodeDetail = 487,
  OssChildrenContentfulOssDetailTextNodeId = 488,
  OssChildrenContentfulOssDetailTextNodeInternalContent = 489,
  OssChildrenContentfulOssDetailTextNodeInternalContentDigest = 490,
  OssChildrenContentfulOssDetailTextNodeInternalContentFilePath = 491,
  OssChildrenContentfulOssDetailTextNodeInternalDescription = 492,
  OssChildrenContentfulOssDetailTextNodeInternalFieldOwners = 493,
  OssChildrenContentfulOssDetailTextNodeInternalIgnoreType = 494,
  OssChildrenContentfulOssDetailTextNodeInternalMediaType = 495,
  OssChildrenContentfulOssDetailTextNodeInternalOwner = 496,
  OssChildrenContentfulOssDetailTextNodeInternalType = 497,
  OssChildrenContentfulOssDetailTextNodeParentChildren = 498,
  OssChildrenContentfulOssDetailTextNodeParentId = 499,
  OssChildrenContentfulOssDetailTextNodeSysType = 500,
  OssChildrenChildren = 501,
  OssChildrenChildrenChildren = 502,
  OssChildrenChildrenId = 503,
  OssChildrenId = 504,
  OssChildrenInternalContent = 505,
  OssChildrenInternalContentDigest = 506,
  OssChildrenInternalContentFilePath = 507,
  OssChildrenInternalDescription = 508,
  OssChildrenInternalFieldOwners = 509,
  OssChildrenInternalIgnoreType = 510,
  OssChildrenInternalMediaType = 511,
  OssChildrenInternalOwner = 512,
  OssChildrenInternalType = 513,
  OssChildrenParentChildren = 514,
  OssChildrenParentId = 515,
  OssContentfulId = 516,
  OssCreatedAt = 517,
  OssDetailChildMdxBody = 518,
  OssDetailChildMdxChildren = 519,
  OssDetailChildMdxExcerpt = 520,
  OssDetailChildMdxFileAbsolutePath = 521,
  OssDetailChildMdxHeadings = 522,
  OssDetailChildMdxHtml = 523,
  OssDetailChildMdxId = 524,
  OssDetailChildMdxMdxAst = 525,
  OssDetailChildMdxRawBody = 526,
  OssDetailChildMdxSlug = 527,
  OssDetailChildMdxTableOfContents = 528,
  OssDetailChildMdxTimeToRead = 529,
  OssDetailChildren = 530,
  OssDetailChildrenMdx = 531,
  OssDetailChildrenMdxBody = 532,
  OssDetailChildrenMdxChildren = 533,
  OssDetailChildrenMdxExcerpt = 534,
  OssDetailChildrenMdxFileAbsolutePath = 535,
  OssDetailChildrenMdxHeadings = 536,
  OssDetailChildrenMdxHtml = 537,
  OssDetailChildrenMdxId = 538,
  OssDetailChildrenMdxMdxAst = 539,
  OssDetailChildrenMdxRawBody = 540,
  OssDetailChildrenMdxSlug = 541,
  OssDetailChildrenMdxTableOfContents = 542,
  OssDetailChildrenMdxTimeToRead = 543,
  OssDetailChildrenChildren = 544,
  OssDetailChildrenId = 545,
  OssDetailDetail = 546,
  OssDetailId = 547,
  OssDetailInternalContent = 548,
  OssDetailInternalContentDigest = 549,
  OssDetailInternalContentFilePath = 550,
  OssDetailInternalDescription = 551,
  OssDetailInternalFieldOwners = 552,
  OssDetailInternalIgnoreType = 553,
  OssDetailInternalMediaType = 554,
  OssDetailInternalOwner = 555,
  OssDetailInternalType = 556,
  OssDetailParentChildren = 557,
  OssDetailParentId = 558,
  OssDetailSysType = 559,
  OssHref = 560,
  OssIconChildContentfulIconSvgTextNodeChildren = 561,
  OssIconChildContentfulIconSvgTextNodeChildrenMdx = 562,
  OssIconChildContentfulIconSvgTextNodeId = 563,
  OssIconChildContentfulIconSvgTextNodeSvg = 564,
  OssIconChildren = 565,
  OssIconChildrenContentfulIconSvgTextNode = 566,
  OssIconChildrenContentfulIconSvgTextNodeChildren = 567,
  OssIconChildrenContentfulIconSvgTextNodeChildrenMdx = 568,
  OssIconChildrenContentfulIconSvgTextNodeId = 569,
  OssIconChildrenContentfulIconSvgTextNodeSvg = 570,
  OssIconChildrenChildren = 571,
  OssIconChildrenId = 572,
  OssIconContact = 573,
  OssIconContactChildren = 574,
  OssIconContactContentfulId = 575,
  OssIconContactCreatedAt = 576,
  OssIconContactHref = 577,
  OssIconContactId = 578,
  OssIconContactName = 579,
  OssIconContactNodeLocale = 580,
  OssIconContactSortKey = 581,
  OssIconContactSpaceId = 582,
  OssIconContactSubName = 583,
  OssIconContactUpdatedAt = 584,
  OssIconContentfulId = 585,
  OssIconCreatedAt = 586,
  OssIconHistory = 587,
  OssIconHistoryChildren = 588,
  OssIconHistoryContentfulId = 589,
  OssIconHistoryCreatedAt = 590,
  OssIconHistoryDate = 591,
  OssIconHistoryId = 592,
  OssIconHistoryName = 593,
  OssIconHistoryNodeLocale = 594,
  OssIconHistorySpaceId = 595,
  OssIconHistorySubName = 596,
  OssIconHistoryUpdatedAt = 597,
  OssIconId = 598,
  OssIconInternalContent = 599,
  OssIconInternalContentDigest = 600,
  OssIconInternalContentFilePath = 601,
  OssIconInternalDescription = 602,
  OssIconInternalFieldOwners = 603,
  OssIconInternalIgnoreType = 604,
  OssIconInternalMediaType = 605,
  OssIconInternalOwner = 606,
  OssIconInternalType = 607,
  OssIconName = 608,
  OssIconNodeLocale = 609,
  OssIconOss = 610,
  OssIconOssChildren = 611,
  OssIconOssChildrenContentfulOssDetailTextNode = 612,
  OssIconOssContentfulId = 613,
  OssIconOssCreatedAt = 614,
  OssIconOssHref = 615,
  OssIconOssId = 616,
  OssIconOssName = 617,
  OssIconOssNodeLocale = 618,
  OssIconOssSpaceId = 619,
  OssIconOssStartDate = 620,
  OssIconOssSubName = 621,
  OssIconOssTags = 622,
  OssIconOssUpdatedAt = 623,
  OssIconParentChildren = 624,
  OssIconParentId = 625,
  OssIconProject = 626,
  OssIconProjectChildren = 627,
  OssIconProjectChildrenContentfulProjectDetailTextNode = 628,
  OssIconProjectContentfulId = 629,
  OssIconProjectCreatedAt = 630,
  OssIconProjectEndDate = 631,
  OssIconProjectId = 632,
  OssIconProjectName = 633,
  OssIconProjectNodeLocale = 634,
  OssIconProjectSpaceId = 635,
  OssIconProjectStartDate = 636,
  OssIconProjectSubName = 637,
  OssIconProjectTags = 638,
  OssIconProjectUpdatedAt = 639,
  OssIconSpaceId = 640,
  OssIconSvgChildren = 641,
  OssIconSvgChildrenMdx = 642,
  OssIconSvgId = 643,
  OssIconSvgSvg = 644,
  OssIconSysRevision = 645,
  OssIconSysType = 646,
  OssIconUpdatedAt = 647,
  OssIconWhatICanDo = 648,
  OssIconWhatICanDoChildren = 649,
  OssIconWhatICanDoContentfulId = 650,
  OssIconWhatICanDoCreatedAt = 651,
  OssIconWhatICanDoId = 652,
  OssIconWhatICanDoName = 653,
  OssIconWhatICanDoNodeLocale = 654,
  OssIconWhatICanDoSortKey = 655,
  OssIconWhatICanDoSpaceId = 656,
  OssIconWhatICanDoSubName = 657,
  OssIconWhatICanDoUpdatedAt = 658,
  OssId = 659,
  OssImageChildren = 660,
  OssImageChildrenChildren = 661,
  OssImageChildrenId = 662,
  OssImageContentfulId = 663,
  OssImageCreatedAt = 664,
  OssImageDescription = 665,
  OssImageFileContentType = 666,
  OssImageFileFileName = 667,
  OssImageFileUrl = 668,
  OssImageFilename = 669,
  OssImageFilesize = 670,
  OssImageGatsbyImage = 671,
  OssImageGatsbyImageData = 672,
  OssImageHeight = 673,
  OssImageId = 674,
  OssImageInternalContent = 675,
  OssImageInternalContentDigest = 676,
  OssImageInternalContentFilePath = 677,
  OssImageInternalDescription = 678,
  OssImageInternalFieldOwners = 679,
  OssImageInternalIgnoreType = 680,
  OssImageInternalMediaType = 681,
  OssImageInternalOwner = 682,
  OssImageInternalType = 683,
  OssImageMimeType = 684,
  OssImageNodeLocale = 685,
  OssImageParentChildren = 686,
  OssImageParentId = 687,
  OssImagePlaceholderUrl = 688,
  OssImagePublicUrl = 689,
  OssImageResizeHeight = 690,
  OssImageResizeSrc = 691,
  OssImageResizeWidth = 692,
  OssImageSize = 693,
  OssImageSpaceId = 694,
  OssImageSysRevision = 695,
  OssImageSysType = 696,
  OssImageTitle = 697,
  OssImageUpdatedAt = 698,
  OssImageUrl = 699,
  OssImageWidth = 700,
  OssInternalContent = 701,
  OssInternalContentDigest = 702,
  OssInternalContentFilePath = 703,
  OssInternalDescription = 704,
  OssInternalFieldOwners = 705,
  OssInternalIgnoreType = 706,
  OssInternalMediaType = 707,
  OssInternalOwner = 708,
  OssInternalType = 709,
  OssName = 710,
  OssNodeLocale = 711,
  OssParentChildren = 712,
  OssParentChildrenChildren = 713,
  OssParentChildrenId = 714,
  OssParentId = 715,
  OssParentInternalContent = 716,
  OssParentInternalContentDigest = 717,
  OssParentInternalContentFilePath = 718,
  OssParentInternalDescription = 719,
  OssParentInternalFieldOwners = 720,
  OssParentInternalIgnoreType = 721,
  OssParentInternalMediaType = 722,
  OssParentInternalOwner = 723,
  OssParentInternalType = 724,
  OssParentParentChildren = 725,
  OssParentParentId = 726,
  OssSpaceId = 727,
  OssStartDate = 728,
  OssSubName = 729,
  OssSysRevision = 730,
  OssSysType = 731,
  OssTags = 732,
  OssTagsBlogPost = 733,
  OssTagsBlogPostChildren = 734,
  OssTagsBlogPostChildrenContentfulBlogPostContentTextNode = 735,
  OssTagsBlogPostContentfulId = 736,
  OssTagsBlogPostCreated = 737,
  OssTagsBlogPostCreatedAt = 738,
  OssTagsBlogPostExcerpt = 739,
  OssTagsBlogPostGatsbyPath = 740,
  OssTagsBlogPostId = 741,
  OssTagsBlogPostNodeLocale = 742,
  OssTagsBlogPostSlug = 743,
  OssTagsBlogPostSpaceId = 744,
  OssTagsBlogPostTags = 745,
  OssTagsBlogPostTitle = 746,
  OssTagsBlogPostUpdated = 747,
  OssTagsBlogPostUpdatedAt = 748,
  OssTagsChildren = 749,
  OssTagsChildrenChildren = 750,
  OssTagsChildrenId = 751,
  OssTagsContentfulId = 752,
  OssTagsCreatedAt = 753,
  OssTagsId = 754,
  OssTagsInternalContent = 755,
  OssTagsInternalContentDigest = 756,
  OssTagsInternalContentFilePath = 757,
  OssTagsInternalDescription = 758,
  OssTagsInternalFieldOwners = 759,
  OssTagsInternalIgnoreType = 760,
  OssTagsInternalMediaType = 761,
  OssTagsInternalOwner = 762,
  OssTagsInternalType = 763,
  OssTagsLevel = 764,
  OssTagsName = 765,
  OssTagsNodeLocale = 766,
  OssTagsOss = 767,
  OssTagsOssChildren = 768,
  OssTagsOssChildrenContentfulOssDetailTextNode = 769,
  OssTagsOssContentfulId = 770,
  OssTagsOssCreatedAt = 771,
  OssTagsOssHref = 772,
  OssTagsOssId = 773,
  OssTagsOssName = 774,
  OssTagsOssNodeLocale = 775,
  OssTagsOssSpaceId = 776,
  OssTagsOssStartDate = 777,
  OssTagsOssSubName = 778,
  OssTagsOssTags = 779,
  OssTagsOssUpdatedAt = 780,
  OssTagsParentChildren = 781,
  OssTagsParentId = 782,
  OssTagsProject = 783,
  OssTagsProjectChildren = 784,
  OssTagsProjectChildrenContentfulProjectDetailTextNode = 785,
  OssTagsProjectContentfulId = 786,
  OssTagsProjectCreatedAt = 787,
  OssTagsProjectEndDate = 788,
  OssTagsProjectId = 789,
  OssTagsProjectName = 790,
  OssTagsProjectNodeLocale = 791,
  OssTagsProjectSpaceId = 792,
  OssTagsProjectStartDate = 793,
  OssTagsProjectSubName = 794,
  OssTagsProjectTags = 795,
  OssTagsProjectUpdatedAt = 796,
  OssTagsSkillGrpup = 797,
  OssTagsSkillGrpupChildren = 798,
  OssTagsSkillGrpupContentfulId = 799,
  OssTagsSkillGrpupCreatedAt = 800,
  OssTagsSkillGrpupId = 801,
  OssTagsSkillGrpupName = 802,
  OssTagsSkillGrpupNodeLocale = 803,
  OssTagsSkillGrpupSkillMap = 804,
  OssTagsSkillGrpupSkills = 805,
  OssTagsSkillGrpupSpaceId = 806,
  OssTagsSkillGrpupUpdatedAt = 807,
  OssTagsSkillMap = 808,
  OssTagsSkillMapChildren = 809,
  OssTagsSkillMapContentfulId = 810,
  OssTagsSkillMapCreatedAt = 811,
  OssTagsSkillMapExpanded = 812,
  OssTagsSkillMapId = 813,
  OssTagsSkillMapName = 814,
  OssTagsSkillMapNodeLocale = 815,
  OssTagsSkillMapSkillGroups = 816,
  OssTagsSkillMapSkills = 817,
  OssTagsSkillMapSortKey = 818,
  OssTagsSkillMapSpaceId = 819,
  OssTagsSkillMapUpdatedAt = 820,
  OssTagsSpaceId = 821,
  OssTagsSysRevision = 822,
  OssTagsSysType = 823,
  OssTagsUpdatedAt = 824,
  OssUpdatedAt = 825,
  ParentChildren = 826,
  ParentChildrenChildren = 827,
  ParentChildrenChildrenChildren = 828,
  ParentChildrenChildrenId = 829,
  ParentChildrenId = 830,
  ParentChildrenInternalContent = 831,
  ParentChildrenInternalContentDigest = 832,
  ParentChildrenInternalContentFilePath = 833,
  ParentChildrenInternalDescription = 834,
  ParentChildrenInternalFieldOwners = 835,
  ParentChildrenInternalIgnoreType = 836,
  ParentChildrenInternalMediaType = 837,
  ParentChildrenInternalOwner = 838,
  ParentChildrenInternalType = 839,
  ParentChildrenParentChildren = 840,
  ParentChildrenParentId = 841,
  ParentId = 842,
  ParentInternalContent = 843,
  ParentInternalContentDigest = 844,
  ParentInternalContentFilePath = 845,
  ParentInternalDescription = 846,
  ParentInternalFieldOwners = 847,
  ParentInternalIgnoreType = 848,
  ParentInternalMediaType = 849,
  ParentInternalOwner = 850,
  ParentInternalType = 851,
  ParentParentChildren = 852,
  ParentParentChildrenChildren = 853,
  ParentParentChildrenId = 854,
  ParentParentId = 855,
  ParentParentInternalContent = 856,
  ParentParentInternalContentDigest = 857,
  ParentParentInternalContentFilePath = 858,
  ParentParentInternalDescription = 859,
  ParentParentInternalFieldOwners = 860,
  ParentParentInternalIgnoreType = 861,
  ParentParentInternalMediaType = 862,
  ParentParentInternalOwner = 863,
  ParentParentInternalType = 864,
  ParentParentParentChildren = 865,
  ParentParentParentId = 866,
  Project = 867,
  ProjectChildContentfulProjectDetailTextNodeChildMdxBody = 868,
  ProjectChildContentfulProjectDetailTextNodeChildMdxChildren = 869,
  ProjectChildContentfulProjectDetailTextNodeChildMdxExcerpt = 870,
  ProjectChildContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 871,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHeadings = 872,
  ProjectChildContentfulProjectDetailTextNodeChildMdxHtml = 873,
  ProjectChildContentfulProjectDetailTextNodeChildMdxId = 874,
  ProjectChildContentfulProjectDetailTextNodeChildMdxMdxAst = 875,
  ProjectChildContentfulProjectDetailTextNodeChildMdxRawBody = 876,
  ProjectChildContentfulProjectDetailTextNodeChildMdxSlug = 877,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTableOfContents = 878,
  ProjectChildContentfulProjectDetailTextNodeChildMdxTimeToRead = 879,
  ProjectChildContentfulProjectDetailTextNodeChildren = 880,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdx = 881,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxBody = 882,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxChildren = 883,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxExcerpt = 884,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 885,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHeadings = 886,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxHtml = 887,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxId = 888,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxMdxAst = 889,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxRawBody = 890,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxSlug = 891,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 892,
  ProjectChildContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 893,
  ProjectChildContentfulProjectDetailTextNodeChildrenChildren = 894,
  ProjectChildContentfulProjectDetailTextNodeChildrenId = 895,
  ProjectChildContentfulProjectDetailTextNodeDetail = 896,
  ProjectChildContentfulProjectDetailTextNodeId = 897,
  ProjectChildContentfulProjectDetailTextNodeInternalContent = 898,
  ProjectChildContentfulProjectDetailTextNodeInternalContentDigest = 899,
  ProjectChildContentfulProjectDetailTextNodeInternalContentFilePath = 900,
  ProjectChildContentfulProjectDetailTextNodeInternalDescription = 901,
  ProjectChildContentfulProjectDetailTextNodeInternalFieldOwners = 902,
  ProjectChildContentfulProjectDetailTextNodeInternalIgnoreType = 903,
  ProjectChildContentfulProjectDetailTextNodeInternalMediaType = 904,
  ProjectChildContentfulProjectDetailTextNodeInternalOwner = 905,
  ProjectChildContentfulProjectDetailTextNodeInternalType = 906,
  ProjectChildContentfulProjectDetailTextNodeParentChildren = 907,
  ProjectChildContentfulProjectDetailTextNodeParentId = 908,
  ProjectChildContentfulProjectDetailTextNodeSysType = 909,
  ProjectChildren = 910,
  ProjectChildrenContentfulProjectDetailTextNode = 911,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxBody = 912,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxChildren = 913,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxExcerpt = 914,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxFileAbsolutePath = 915,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHeadings = 916,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxHtml = 917,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxId = 918,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxMdxAst = 919,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxRawBody = 920,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxSlug = 921,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTableOfContents = 922,
  ProjectChildrenContentfulProjectDetailTextNodeChildMdxTimeToRead = 923,
  ProjectChildrenContentfulProjectDetailTextNodeChildren = 924,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdx = 925,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxBody = 926,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxChildren = 927,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxExcerpt = 928,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxFileAbsolutePath = 929,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHeadings = 930,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxHtml = 931,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxId = 932,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxMdxAst = 933,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxRawBody = 934,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxSlug = 935,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTableOfContents = 936,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenMdxTimeToRead = 937,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenChildren = 938,
  ProjectChildrenContentfulProjectDetailTextNodeChildrenId = 939,
  ProjectChildrenContentfulProjectDetailTextNodeDetail = 940,
  ProjectChildrenContentfulProjectDetailTextNodeId = 941,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContent = 942,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentDigest = 943,
  ProjectChildrenContentfulProjectDetailTextNodeInternalContentFilePath = 944,
  ProjectChildrenContentfulProjectDetailTextNodeInternalDescription = 945,
  ProjectChildrenContentfulProjectDetailTextNodeInternalFieldOwners = 946,
  ProjectChildrenContentfulProjectDetailTextNodeInternalIgnoreType = 947,
  ProjectChildrenContentfulProjectDetailTextNodeInternalMediaType = 948,
  ProjectChildrenContentfulProjectDetailTextNodeInternalOwner = 949,
  ProjectChildrenContentfulProjectDetailTextNodeInternalType = 950,
  ProjectChildrenContentfulProjectDetailTextNodeParentChildren = 951,
  ProjectChildrenContentfulProjectDetailTextNodeParentId = 952,
  ProjectChildrenContentfulProjectDetailTextNodeSysType = 953,
  ProjectChildrenChildren = 954,
  ProjectChildrenChildrenChildren = 955,
  ProjectChildrenChildrenId = 956,
  ProjectChildrenId = 957,
  ProjectChildrenInternalContent = 958,
  ProjectChildrenInternalContentDigest = 959,
  ProjectChildrenInternalContentFilePath = 960,
  ProjectChildrenInternalDescription = 961,
  ProjectChildrenInternalFieldOwners = 962,
  ProjectChildrenInternalIgnoreType = 963,
  ProjectChildrenInternalMediaType = 964,
  ProjectChildrenInternalOwner = 965,
  ProjectChildrenInternalType = 966,
  ProjectChildrenParentChildren = 967,
  ProjectChildrenParentId = 968,
  ProjectContentfulId = 969,
  ProjectCreatedAt = 970,
  ProjectDetailChildMdxBody = 971,
  ProjectDetailChildMdxChildren = 972,
  ProjectDetailChildMdxExcerpt = 973,
  ProjectDetailChildMdxFileAbsolutePath = 974,
  ProjectDetailChildMdxHeadings = 975,
  ProjectDetailChildMdxHtml = 976,
  ProjectDetailChildMdxId = 977,
  ProjectDetailChildMdxMdxAst = 978,
  ProjectDetailChildMdxRawBody = 979,
  ProjectDetailChildMdxSlug = 980,
  ProjectDetailChildMdxTableOfContents = 981,
  ProjectDetailChildMdxTimeToRead = 982,
  ProjectDetailChildren = 983,
  ProjectDetailChildrenMdx = 984,
  ProjectDetailChildrenMdxBody = 985,
  ProjectDetailChildrenMdxChildren = 986,
  ProjectDetailChildrenMdxExcerpt = 987,
  ProjectDetailChildrenMdxFileAbsolutePath = 988,
  ProjectDetailChildrenMdxHeadings = 989,
  ProjectDetailChildrenMdxHtml = 990,
  ProjectDetailChildrenMdxId = 991,
  ProjectDetailChildrenMdxMdxAst = 992,
  ProjectDetailChildrenMdxRawBody = 993,
  ProjectDetailChildrenMdxSlug = 994,
  ProjectDetailChildrenMdxTableOfContents = 995,
  ProjectDetailChildrenMdxTimeToRead = 996,
  ProjectDetailChildrenChildren = 997,
  ProjectDetailChildrenId = 998,
  ProjectDetailDetail = 999,
  ProjectDetailId = 1000,
  ProjectDetailInternalContent = 1001,
  ProjectDetailInternalContentDigest = 1002,
  ProjectDetailInternalContentFilePath = 1003,
  ProjectDetailInternalDescription = 1004,
  ProjectDetailInternalFieldOwners = 1005,
  ProjectDetailInternalIgnoreType = 1006,
  ProjectDetailInternalMediaType = 1007,
  ProjectDetailInternalOwner = 1008,
  ProjectDetailInternalType = 1009,
  ProjectDetailParentChildren = 1010,
  ProjectDetailParentId = 1011,
  ProjectDetailSysType = 1012,
  ProjectEndDate = 1013,
  ProjectIconChildContentfulIconSvgTextNodeChildren = 1014,
  ProjectIconChildContentfulIconSvgTextNodeChildrenMdx = 1015,
  ProjectIconChildContentfulIconSvgTextNodeId = 1016,
  ProjectIconChildContentfulIconSvgTextNodeSvg = 1017,
  ProjectIconChildren = 1018,
  ProjectIconChildrenContentfulIconSvgTextNode = 1019,
  ProjectIconChildrenContentfulIconSvgTextNodeChildren = 1020,
  ProjectIconChildrenContentfulIconSvgTextNodeChildrenMdx = 1021,
  ProjectIconChildrenContentfulIconSvgTextNodeId = 1022,
  ProjectIconChildrenContentfulIconSvgTextNodeSvg = 1023,
  ProjectIconChildrenChildren = 1024,
  ProjectIconChildrenId = 1025,
  ProjectIconContact = 1026,
  ProjectIconContactChildren = 1027,
  ProjectIconContactContentfulId = 1028,
  ProjectIconContactCreatedAt = 1029,
  ProjectIconContactHref = 1030,
  ProjectIconContactId = 1031,
  ProjectIconContactName = 1032,
  ProjectIconContactNodeLocale = 1033,
  ProjectIconContactSortKey = 1034,
  ProjectIconContactSpaceId = 1035,
  ProjectIconContactSubName = 1036,
  ProjectIconContactUpdatedAt = 1037,
  ProjectIconContentfulId = 1038,
  ProjectIconCreatedAt = 1039,
  ProjectIconHistory = 1040,
  ProjectIconHistoryChildren = 1041,
  ProjectIconHistoryContentfulId = 1042,
  ProjectIconHistoryCreatedAt = 1043,
  ProjectIconHistoryDate = 1044,
  ProjectIconHistoryId = 1045,
  ProjectIconHistoryName = 1046,
  ProjectIconHistoryNodeLocale = 1047,
  ProjectIconHistorySpaceId = 1048,
  ProjectIconHistorySubName = 1049,
  ProjectIconHistoryUpdatedAt = 1050,
  ProjectIconId = 1051,
  ProjectIconInternalContent = 1052,
  ProjectIconInternalContentDigest = 1053,
  ProjectIconInternalContentFilePath = 1054,
  ProjectIconInternalDescription = 1055,
  ProjectIconInternalFieldOwners = 1056,
  ProjectIconInternalIgnoreType = 1057,
  ProjectIconInternalMediaType = 1058,
  ProjectIconInternalOwner = 1059,
  ProjectIconInternalType = 1060,
  ProjectIconName = 1061,
  ProjectIconNodeLocale = 1062,
  ProjectIconOss = 1063,
  ProjectIconOssChildren = 1064,
  ProjectIconOssChildrenContentfulOssDetailTextNode = 1065,
  ProjectIconOssContentfulId = 1066,
  ProjectIconOssCreatedAt = 1067,
  ProjectIconOssHref = 1068,
  ProjectIconOssId = 1069,
  ProjectIconOssName = 1070,
  ProjectIconOssNodeLocale = 1071,
  ProjectIconOssSpaceId = 1072,
  ProjectIconOssStartDate = 1073,
  ProjectIconOssSubName = 1074,
  ProjectIconOssTags = 1075,
  ProjectIconOssUpdatedAt = 1076,
  ProjectIconParentChildren = 1077,
  ProjectIconParentId = 1078,
  ProjectIconProject = 1079,
  ProjectIconProjectChildren = 1080,
  ProjectIconProjectChildrenContentfulProjectDetailTextNode = 1081,
  ProjectIconProjectContentfulId = 1082,
  ProjectIconProjectCreatedAt = 1083,
  ProjectIconProjectEndDate = 1084,
  ProjectIconProjectId = 1085,
  ProjectIconProjectName = 1086,
  ProjectIconProjectNodeLocale = 1087,
  ProjectIconProjectSpaceId = 1088,
  ProjectIconProjectStartDate = 1089,
  ProjectIconProjectSubName = 1090,
  ProjectIconProjectTags = 1091,
  ProjectIconProjectUpdatedAt = 1092,
  ProjectIconSpaceId = 1093,
  ProjectIconSvgChildren = 1094,
  ProjectIconSvgChildrenMdx = 1095,
  ProjectIconSvgId = 1096,
  ProjectIconSvgSvg = 1097,
  ProjectIconSysRevision = 1098,
  ProjectIconSysType = 1099,
  ProjectIconUpdatedAt = 1100,
  ProjectIconWhatICanDo = 1101,
  ProjectIconWhatICanDoChildren = 1102,
  ProjectIconWhatICanDoContentfulId = 1103,
  ProjectIconWhatICanDoCreatedAt = 1104,
  ProjectIconWhatICanDoId = 1105,
  ProjectIconWhatICanDoName = 1106,
  ProjectIconWhatICanDoNodeLocale = 1107,
  ProjectIconWhatICanDoSortKey = 1108,
  ProjectIconWhatICanDoSpaceId = 1109,
  ProjectIconWhatICanDoSubName = 1110,
  ProjectIconWhatICanDoUpdatedAt = 1111,
  ProjectId = 1112,
  ProjectInternalContent = 1113,
  ProjectInternalContentDigest = 1114,
  ProjectInternalContentFilePath = 1115,
  ProjectInternalDescription = 1116,
  ProjectInternalFieldOwners = 1117,
  ProjectInternalIgnoreType = 1118,
  ProjectInternalMediaType = 1119,
  ProjectInternalOwner = 1120,
  ProjectInternalType = 1121,
  ProjectName = 1122,
  ProjectNodeLocale = 1123,
  ProjectParentChildren = 1124,
  ProjectParentChildrenChildren = 1125,
  ProjectParentChildrenId = 1126,
  ProjectParentId = 1127,
  ProjectParentInternalContent = 1128,
  ProjectParentInternalContentDigest = 1129,
  ProjectParentInternalContentFilePath = 1130,
  ProjectParentInternalDescription = 1131,
  ProjectParentInternalFieldOwners = 1132,
  ProjectParentInternalIgnoreType = 1133,
  ProjectParentInternalMediaType = 1134,
  ProjectParentInternalOwner = 1135,
  ProjectParentInternalType = 1136,
  ProjectParentParentChildren = 1137,
  ProjectParentParentId = 1138,
  ProjectSpaceId = 1139,
  ProjectStartDate = 1140,
  ProjectSubName = 1141,
  ProjectSysRevision = 1142,
  ProjectSysType = 1143,
  ProjectTags = 1144,
  ProjectTagsBlogPost = 1145,
  ProjectTagsBlogPostChildren = 1146,
  ProjectTagsBlogPostChildrenContentfulBlogPostContentTextNode = 1147,
  ProjectTagsBlogPostContentfulId = 1148,
  ProjectTagsBlogPostCreated = 1149,
  ProjectTagsBlogPostCreatedAt = 1150,
  ProjectTagsBlogPostExcerpt = 1151,
  ProjectTagsBlogPostGatsbyPath = 1152,
  ProjectTagsBlogPostId = 1153,
  ProjectTagsBlogPostNodeLocale = 1154,
  ProjectTagsBlogPostSlug = 1155,
  ProjectTagsBlogPostSpaceId = 1156,
  ProjectTagsBlogPostTags = 1157,
  ProjectTagsBlogPostTitle = 1158,
  ProjectTagsBlogPostUpdated = 1159,
  ProjectTagsBlogPostUpdatedAt = 1160,
  ProjectTagsChildren = 1161,
  ProjectTagsChildrenChildren = 1162,
  ProjectTagsChildrenId = 1163,
  ProjectTagsContentfulId = 1164,
  ProjectTagsCreatedAt = 1165,
  ProjectTagsId = 1166,
  ProjectTagsInternalContent = 1167,
  ProjectTagsInternalContentDigest = 1168,
  ProjectTagsInternalContentFilePath = 1169,
  ProjectTagsInternalDescription = 1170,
  ProjectTagsInternalFieldOwners = 1171,
  ProjectTagsInternalIgnoreType = 1172,
  ProjectTagsInternalMediaType = 1173,
  ProjectTagsInternalOwner = 1174,
  ProjectTagsInternalType = 1175,
  ProjectTagsLevel = 1176,
  ProjectTagsName = 1177,
  ProjectTagsNodeLocale = 1178,
  ProjectTagsOss = 1179,
  ProjectTagsOssChildren = 1180,
  ProjectTagsOssChildrenContentfulOssDetailTextNode = 1181,
  ProjectTagsOssContentfulId = 1182,
  ProjectTagsOssCreatedAt = 1183,
  ProjectTagsOssHref = 1184,
  ProjectTagsOssId = 1185,
  ProjectTagsOssName = 1186,
  ProjectTagsOssNodeLocale = 1187,
  ProjectTagsOssSpaceId = 1188,
  ProjectTagsOssStartDate = 1189,
  ProjectTagsOssSubName = 1190,
  ProjectTagsOssTags = 1191,
  ProjectTagsOssUpdatedAt = 1192,
  ProjectTagsParentChildren = 1193,
  ProjectTagsParentId = 1194,
  ProjectTagsProject = 1195,
  ProjectTagsProjectChildren = 1196,
  ProjectTagsProjectChildrenContentfulProjectDetailTextNode = 1197,
  ProjectTagsProjectContentfulId = 1198,
  ProjectTagsProjectCreatedAt = 1199,
  ProjectTagsProjectEndDate = 1200,
  ProjectTagsProjectId = 1201,
  ProjectTagsProjectName = 1202,
  ProjectTagsProjectNodeLocale = 1203,
  ProjectTagsProjectSpaceId = 1204,
  ProjectTagsProjectStartDate = 1205,
  ProjectTagsProjectSubName = 1206,
  ProjectTagsProjectTags = 1207,
  ProjectTagsProjectUpdatedAt = 1208,
  ProjectTagsSkillGrpup = 1209,
  ProjectTagsSkillGrpupChildren = 1210,
  ProjectTagsSkillGrpupContentfulId = 1211,
  ProjectTagsSkillGrpupCreatedAt = 1212,
  ProjectTagsSkillGrpupId = 1213,
  ProjectTagsSkillGrpupName = 1214,
  ProjectTagsSkillGrpupNodeLocale = 1215,
  ProjectTagsSkillGrpupSkillMap = 1216,
  ProjectTagsSkillGrpupSkills = 1217,
  ProjectTagsSkillGrpupSpaceId = 1218,
  ProjectTagsSkillGrpupUpdatedAt = 1219,
  ProjectTagsSkillMap = 1220,
  ProjectTagsSkillMapChildren = 1221,
  ProjectTagsSkillMapContentfulId = 1222,
  ProjectTagsSkillMapCreatedAt = 1223,
  ProjectTagsSkillMapExpanded = 1224,
  ProjectTagsSkillMapId = 1225,
  ProjectTagsSkillMapName = 1226,
  ProjectTagsSkillMapNodeLocale = 1227,
  ProjectTagsSkillMapSkillGroups = 1228,
  ProjectTagsSkillMapSkills = 1229,
  ProjectTagsSkillMapSortKey = 1230,
  ProjectTagsSkillMapSpaceId = 1231,
  ProjectTagsSkillMapUpdatedAt = 1232,
  ProjectTagsSpaceId = 1233,
  ProjectTagsSysRevision = 1234,
  ProjectTagsSysType = 1235,
  ProjectTagsUpdatedAt = 1236,
  ProjectUpdatedAt = 1237,
  SkillGrpup = 1238,
  SkillGrpupChildren = 1239,
  SkillGrpupChildrenChildren = 1240,
  SkillGrpupChildrenChildrenChildren = 1241,
  SkillGrpupChildrenChildrenId = 1242,
  SkillGrpupChildrenId = 1243,
  SkillGrpupChildrenInternalContent = 1244,
  SkillGrpupChildrenInternalContentDigest = 1245,
  SkillGrpupChildrenInternalContentFilePath = 1246,
  SkillGrpupChildrenInternalDescription = 1247,
  SkillGrpupChildrenInternalFieldOwners = 1248,
  SkillGrpupChildrenInternalIgnoreType = 1249,
  SkillGrpupChildrenInternalMediaType = 1250,
  SkillGrpupChildrenInternalOwner = 1251,
  SkillGrpupChildrenInternalType = 1252,
  SkillGrpupChildrenParentChildren = 1253,
  SkillGrpupChildrenParentId = 1254,
  SkillGrpupContentfulId = 1255,
  SkillGrpupCreatedAt = 1256,
  SkillGrpupId = 1257,
  SkillGrpupInternalContent = 1258,
  SkillGrpupInternalContentDigest = 1259,
  SkillGrpupInternalContentFilePath = 1260,
  SkillGrpupInternalDescription = 1261,
  SkillGrpupInternalFieldOwners = 1262,
  SkillGrpupInternalIgnoreType = 1263,
  SkillGrpupInternalMediaType = 1264,
  SkillGrpupInternalOwner = 1265,
  SkillGrpupInternalType = 1266,
  SkillGrpupName = 1267,
  SkillGrpupNodeLocale = 1268,
  SkillGrpupParentChildren = 1269,
  SkillGrpupParentChildrenChildren = 1270,
  SkillGrpupParentChildrenId = 1271,
  SkillGrpupParentId = 1272,
  SkillGrpupParentInternalContent = 1273,
  SkillGrpupParentInternalContentDigest = 1274,
  SkillGrpupParentInternalContentFilePath = 1275,
  SkillGrpupParentInternalDescription = 1276,
  SkillGrpupParentInternalFieldOwners = 1277,
  SkillGrpupParentInternalIgnoreType = 1278,
  SkillGrpupParentInternalMediaType = 1279,
  SkillGrpupParentInternalOwner = 1280,
  SkillGrpupParentInternalType = 1281,
  SkillGrpupParentParentChildren = 1282,
  SkillGrpupParentParentId = 1283,
  SkillGrpupSkillMap = 1284,
  SkillGrpupSkillMapChildren = 1285,
  SkillGrpupSkillMapChildrenChildren = 1286,
  SkillGrpupSkillMapChildrenId = 1287,
  SkillGrpupSkillMapContentfulId = 1288,
  SkillGrpupSkillMapCreatedAt = 1289,
  SkillGrpupSkillMapExpanded = 1290,
  SkillGrpupSkillMapId = 1291,
  SkillGrpupSkillMapInternalContent = 1292,
  SkillGrpupSkillMapInternalContentDigest = 1293,
  SkillGrpupSkillMapInternalContentFilePath = 1294,
  SkillGrpupSkillMapInternalDescription = 1295,
  SkillGrpupSkillMapInternalFieldOwners = 1296,
  SkillGrpupSkillMapInternalIgnoreType = 1297,
  SkillGrpupSkillMapInternalMediaType = 1298,
  SkillGrpupSkillMapInternalOwner = 1299,
  SkillGrpupSkillMapInternalType = 1300,
  SkillGrpupSkillMapName = 1301,
  SkillGrpupSkillMapNodeLocale = 1302,
  SkillGrpupSkillMapParentChildren = 1303,
  SkillGrpupSkillMapParentId = 1304,
  SkillGrpupSkillMapSkillGroups = 1305,
  SkillGrpupSkillMapSkillGroupsChildren = 1306,
  SkillGrpupSkillMapSkillGroupsContentfulId = 1307,
  SkillGrpupSkillMapSkillGroupsCreatedAt = 1308,
  SkillGrpupSkillMapSkillGroupsId = 1309,
  SkillGrpupSkillMapSkillGroupsName = 1310,
  SkillGrpupSkillMapSkillGroupsNodeLocale = 1311,
  SkillGrpupSkillMapSkillGroupsSkillMap = 1312,
  SkillGrpupSkillMapSkillGroupsSkills = 1313,
  SkillGrpupSkillMapSkillGroupsSpaceId = 1314,
  SkillGrpupSkillMapSkillGroupsUpdatedAt = 1315,
  SkillGrpupSkillMapSkills = 1316,
  SkillGrpupSkillMapSkillsBlogPost = 1317,
  SkillGrpupSkillMapSkillsChildren = 1318,
  SkillGrpupSkillMapSkillsContentfulId = 1319,
  SkillGrpupSkillMapSkillsCreatedAt = 1320,
  SkillGrpupSkillMapSkillsId = 1321,
  SkillGrpupSkillMapSkillsLevel = 1322,
  SkillGrpupSkillMapSkillsName = 1323,
  SkillGrpupSkillMapSkillsNodeLocale = 1324,
  SkillGrpupSkillMapSkillsOss = 1325,
  SkillGrpupSkillMapSkillsProject = 1326,
  SkillGrpupSkillMapSkillsSkillGrpup = 1327,
  SkillGrpupSkillMapSkillsSkillMap = 1328,
  SkillGrpupSkillMapSkillsSpaceId = 1329,
  SkillGrpupSkillMapSkillsUpdatedAt = 1330,
  SkillGrpupSkillMapSortKey = 1331,
  SkillGrpupSkillMapSpaceId = 1332,
  SkillGrpupSkillMapSysRevision = 1333,
  SkillGrpupSkillMapSysType = 1334,
  SkillGrpupSkillMapUpdatedAt = 1335,
  SkillGrpupSkills = 1336,
  SkillGrpupSkillsBlogPost = 1337,
  SkillGrpupSkillsBlogPostChildren = 1338,
  SkillGrpupSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1339,
  SkillGrpupSkillsBlogPostContentfulId = 1340,
  SkillGrpupSkillsBlogPostCreated = 1341,
  SkillGrpupSkillsBlogPostCreatedAt = 1342,
  SkillGrpupSkillsBlogPostExcerpt = 1343,
  SkillGrpupSkillsBlogPostGatsbyPath = 1344,
  SkillGrpupSkillsBlogPostId = 1345,
  SkillGrpupSkillsBlogPostNodeLocale = 1346,
  SkillGrpupSkillsBlogPostSlug = 1347,
  SkillGrpupSkillsBlogPostSpaceId = 1348,
  SkillGrpupSkillsBlogPostTags = 1349,
  SkillGrpupSkillsBlogPostTitle = 1350,
  SkillGrpupSkillsBlogPostUpdated = 1351,
  SkillGrpupSkillsBlogPostUpdatedAt = 1352,
  SkillGrpupSkillsChildren = 1353,
  SkillGrpupSkillsChildrenChildren = 1354,
  SkillGrpupSkillsChildrenId = 1355,
  SkillGrpupSkillsContentfulId = 1356,
  SkillGrpupSkillsCreatedAt = 1357,
  SkillGrpupSkillsId = 1358,
  SkillGrpupSkillsInternalContent = 1359,
  SkillGrpupSkillsInternalContentDigest = 1360,
  SkillGrpupSkillsInternalContentFilePath = 1361,
  SkillGrpupSkillsInternalDescription = 1362,
  SkillGrpupSkillsInternalFieldOwners = 1363,
  SkillGrpupSkillsInternalIgnoreType = 1364,
  SkillGrpupSkillsInternalMediaType = 1365,
  SkillGrpupSkillsInternalOwner = 1366,
  SkillGrpupSkillsInternalType = 1367,
  SkillGrpupSkillsLevel = 1368,
  SkillGrpupSkillsName = 1369,
  SkillGrpupSkillsNodeLocale = 1370,
  SkillGrpupSkillsOss = 1371,
  SkillGrpupSkillsOssChildren = 1372,
  SkillGrpupSkillsOssChildrenContentfulOssDetailTextNode = 1373,
  SkillGrpupSkillsOssContentfulId = 1374,
  SkillGrpupSkillsOssCreatedAt = 1375,
  SkillGrpupSkillsOssHref = 1376,
  SkillGrpupSkillsOssId = 1377,
  SkillGrpupSkillsOssName = 1378,
  SkillGrpupSkillsOssNodeLocale = 1379,
  SkillGrpupSkillsOssSpaceId = 1380,
  SkillGrpupSkillsOssStartDate = 1381,
  SkillGrpupSkillsOssSubName = 1382,
  SkillGrpupSkillsOssTags = 1383,
  SkillGrpupSkillsOssUpdatedAt = 1384,
  SkillGrpupSkillsParentChildren = 1385,
  SkillGrpupSkillsParentId = 1386,
  SkillGrpupSkillsProject = 1387,
  SkillGrpupSkillsProjectChildren = 1388,
  SkillGrpupSkillsProjectChildrenContentfulProjectDetailTextNode = 1389,
  SkillGrpupSkillsProjectContentfulId = 1390,
  SkillGrpupSkillsProjectCreatedAt = 1391,
  SkillGrpupSkillsProjectEndDate = 1392,
  SkillGrpupSkillsProjectId = 1393,
  SkillGrpupSkillsProjectName = 1394,
  SkillGrpupSkillsProjectNodeLocale = 1395,
  SkillGrpupSkillsProjectSpaceId = 1396,
  SkillGrpupSkillsProjectStartDate = 1397,
  SkillGrpupSkillsProjectSubName = 1398,
  SkillGrpupSkillsProjectTags = 1399,
  SkillGrpupSkillsProjectUpdatedAt = 1400,
  SkillGrpupSkillsSkillGrpup = 1401,
  SkillGrpupSkillsSkillGrpupChildren = 1402,
  SkillGrpupSkillsSkillGrpupContentfulId = 1403,
  SkillGrpupSkillsSkillGrpupCreatedAt = 1404,
  SkillGrpupSkillsSkillGrpupId = 1405,
  SkillGrpupSkillsSkillGrpupName = 1406,
  SkillGrpupSkillsSkillGrpupNodeLocale = 1407,
  SkillGrpupSkillsSkillGrpupSkillMap = 1408,
  SkillGrpupSkillsSkillGrpupSkills = 1409,
  SkillGrpupSkillsSkillGrpupSpaceId = 1410,
  SkillGrpupSkillsSkillGrpupUpdatedAt = 1411,
  SkillGrpupSkillsSkillMap = 1412,
  SkillGrpupSkillsSkillMapChildren = 1413,
  SkillGrpupSkillsSkillMapContentfulId = 1414,
  SkillGrpupSkillsSkillMapCreatedAt = 1415,
  SkillGrpupSkillsSkillMapExpanded = 1416,
  SkillGrpupSkillsSkillMapId = 1417,
  SkillGrpupSkillsSkillMapName = 1418,
  SkillGrpupSkillsSkillMapNodeLocale = 1419,
  SkillGrpupSkillsSkillMapSkillGroups = 1420,
  SkillGrpupSkillsSkillMapSkills = 1421,
  SkillGrpupSkillsSkillMapSortKey = 1422,
  SkillGrpupSkillsSkillMapSpaceId = 1423,
  SkillGrpupSkillsSkillMapUpdatedAt = 1424,
  SkillGrpupSkillsSpaceId = 1425,
  SkillGrpupSkillsSysRevision = 1426,
  SkillGrpupSkillsSysType = 1427,
  SkillGrpupSkillsUpdatedAt = 1428,
  SkillGrpupSpaceId = 1429,
  SkillGrpupSysRevision = 1430,
  SkillGrpupSysType = 1431,
  SkillGrpupUpdatedAt = 1432,
  SkillMap = 1433,
  SkillMapChildren = 1434,
  SkillMapChildrenChildren = 1435,
  SkillMapChildrenChildrenChildren = 1436,
  SkillMapChildrenChildrenId = 1437,
  SkillMapChildrenId = 1438,
  SkillMapChildrenInternalContent = 1439,
  SkillMapChildrenInternalContentDigest = 1440,
  SkillMapChildrenInternalContentFilePath = 1441,
  SkillMapChildrenInternalDescription = 1442,
  SkillMapChildrenInternalFieldOwners = 1443,
  SkillMapChildrenInternalIgnoreType = 1444,
  SkillMapChildrenInternalMediaType = 1445,
  SkillMapChildrenInternalOwner = 1446,
  SkillMapChildrenInternalType = 1447,
  SkillMapChildrenParentChildren = 1448,
  SkillMapChildrenParentId = 1449,
  SkillMapContentfulId = 1450,
  SkillMapCreatedAt = 1451,
  SkillMapExpanded = 1452,
  SkillMapId = 1453,
  SkillMapInternalContent = 1454,
  SkillMapInternalContentDigest = 1455,
  SkillMapInternalContentFilePath = 1456,
  SkillMapInternalDescription = 1457,
  SkillMapInternalFieldOwners = 1458,
  SkillMapInternalIgnoreType = 1459,
  SkillMapInternalMediaType = 1460,
  SkillMapInternalOwner = 1461,
  SkillMapInternalType = 1462,
  SkillMapName = 1463,
  SkillMapNodeLocale = 1464,
  SkillMapParentChildren = 1465,
  SkillMapParentChildrenChildren = 1466,
  SkillMapParentChildrenId = 1467,
  SkillMapParentId = 1468,
  SkillMapParentInternalContent = 1469,
  SkillMapParentInternalContentDigest = 1470,
  SkillMapParentInternalContentFilePath = 1471,
  SkillMapParentInternalDescription = 1472,
  SkillMapParentInternalFieldOwners = 1473,
  SkillMapParentInternalIgnoreType = 1474,
  SkillMapParentInternalMediaType = 1475,
  SkillMapParentInternalOwner = 1476,
  SkillMapParentInternalType = 1477,
  SkillMapParentParentChildren = 1478,
  SkillMapParentParentId = 1479,
  SkillMapSkillGroups = 1480,
  SkillMapSkillGroupsChildren = 1481,
  SkillMapSkillGroupsChildrenChildren = 1482,
  SkillMapSkillGroupsChildrenId = 1483,
  SkillMapSkillGroupsContentfulId = 1484,
  SkillMapSkillGroupsCreatedAt = 1485,
  SkillMapSkillGroupsId = 1486,
  SkillMapSkillGroupsInternalContent = 1487,
  SkillMapSkillGroupsInternalContentDigest = 1488,
  SkillMapSkillGroupsInternalContentFilePath = 1489,
  SkillMapSkillGroupsInternalDescription = 1490,
  SkillMapSkillGroupsInternalFieldOwners = 1491,
  SkillMapSkillGroupsInternalIgnoreType = 1492,
  SkillMapSkillGroupsInternalMediaType = 1493,
  SkillMapSkillGroupsInternalOwner = 1494,
  SkillMapSkillGroupsInternalType = 1495,
  SkillMapSkillGroupsName = 1496,
  SkillMapSkillGroupsNodeLocale = 1497,
  SkillMapSkillGroupsParentChildren = 1498,
  SkillMapSkillGroupsParentId = 1499,
  SkillMapSkillGroupsSkillMap = 1500,
  SkillMapSkillGroupsSkillMapChildren = 1501,
  SkillMapSkillGroupsSkillMapContentfulId = 1502,
  SkillMapSkillGroupsSkillMapCreatedAt = 1503,
  SkillMapSkillGroupsSkillMapExpanded = 1504,
  SkillMapSkillGroupsSkillMapId = 1505,
  SkillMapSkillGroupsSkillMapName = 1506,
  SkillMapSkillGroupsSkillMapNodeLocale = 1507,
  SkillMapSkillGroupsSkillMapSkillGroups = 1508,
  SkillMapSkillGroupsSkillMapSkills = 1509,
  SkillMapSkillGroupsSkillMapSortKey = 1510,
  SkillMapSkillGroupsSkillMapSpaceId = 1511,
  SkillMapSkillGroupsSkillMapUpdatedAt = 1512,
  SkillMapSkillGroupsSkills = 1513,
  SkillMapSkillGroupsSkillsBlogPost = 1514,
  SkillMapSkillGroupsSkillsChildren = 1515,
  SkillMapSkillGroupsSkillsContentfulId = 1516,
  SkillMapSkillGroupsSkillsCreatedAt = 1517,
  SkillMapSkillGroupsSkillsId = 1518,
  SkillMapSkillGroupsSkillsLevel = 1519,
  SkillMapSkillGroupsSkillsName = 1520,
  SkillMapSkillGroupsSkillsNodeLocale = 1521,
  SkillMapSkillGroupsSkillsOss = 1522,
  SkillMapSkillGroupsSkillsProject = 1523,
  SkillMapSkillGroupsSkillsSkillGrpup = 1524,
  SkillMapSkillGroupsSkillsSkillMap = 1525,
  SkillMapSkillGroupsSkillsSpaceId = 1526,
  SkillMapSkillGroupsSkillsUpdatedAt = 1527,
  SkillMapSkillGroupsSpaceId = 1528,
  SkillMapSkillGroupsSysRevision = 1529,
  SkillMapSkillGroupsSysType = 1530,
  SkillMapSkillGroupsUpdatedAt = 1531,
  SkillMapSkills = 1532,
  SkillMapSkillsBlogPost = 1533,
  SkillMapSkillsBlogPostChildren = 1534,
  SkillMapSkillsBlogPostChildrenContentfulBlogPostContentTextNode = 1535,
  SkillMapSkillsBlogPostContentfulId = 1536,
  SkillMapSkillsBlogPostCreated = 1537,
  SkillMapSkillsBlogPostCreatedAt = 1538,
  SkillMapSkillsBlogPostExcerpt = 1539,
  SkillMapSkillsBlogPostGatsbyPath = 1540,
  SkillMapSkillsBlogPostId = 1541,
  SkillMapSkillsBlogPostNodeLocale = 1542,
  SkillMapSkillsBlogPostSlug = 1543,
  SkillMapSkillsBlogPostSpaceId = 1544,
  SkillMapSkillsBlogPostTags = 1545,
  SkillMapSkillsBlogPostTitle = 1546,
  SkillMapSkillsBlogPostUpdated = 1547,
  SkillMapSkillsBlogPostUpdatedAt = 1548,
  SkillMapSkillsChildren = 1549,
  SkillMapSkillsChildrenChildren = 1550,
  SkillMapSkillsChildrenId = 1551,
  SkillMapSkillsContentfulId = 1552,
  SkillMapSkillsCreatedAt = 1553,
  SkillMapSkillsId = 1554,
  SkillMapSkillsInternalContent = 1555,
  SkillMapSkillsInternalContentDigest = 1556,
  SkillMapSkillsInternalContentFilePath = 1557,
  SkillMapSkillsInternalDescription = 1558,
  SkillMapSkillsInternalFieldOwners = 1559,
  SkillMapSkillsInternalIgnoreType = 1560,
  SkillMapSkillsInternalMediaType = 1561,
  SkillMapSkillsInternalOwner = 1562,
  SkillMapSkillsInternalType = 1563,
  SkillMapSkillsLevel = 1564,
  SkillMapSkillsName = 1565,
  SkillMapSkillsNodeLocale = 1566,
  SkillMapSkillsOss = 1567,
  SkillMapSkillsOssChildren = 1568,
  SkillMapSkillsOssChildrenContentfulOssDetailTextNode = 1569,
  SkillMapSkillsOssContentfulId = 1570,
  SkillMapSkillsOssCreatedAt = 1571,
  SkillMapSkillsOssHref = 1572,
  SkillMapSkillsOssId = 1573,
  SkillMapSkillsOssName = 1574,
  SkillMapSkillsOssNodeLocale = 1575,
  SkillMapSkillsOssSpaceId = 1576,
  SkillMapSkillsOssStartDate = 1577,
  SkillMapSkillsOssSubName = 1578,
  SkillMapSkillsOssTags = 1579,
  SkillMapSkillsOssUpdatedAt = 1580,
  SkillMapSkillsParentChildren = 1581,
  SkillMapSkillsParentId = 1582,
  SkillMapSkillsProject = 1583,
  SkillMapSkillsProjectChildren = 1584,
  SkillMapSkillsProjectChildrenContentfulProjectDetailTextNode = 1585,
  SkillMapSkillsProjectContentfulId = 1586,
  SkillMapSkillsProjectCreatedAt = 1587,
  SkillMapSkillsProjectEndDate = 1588,
  SkillMapSkillsProjectId = 1589,
  SkillMapSkillsProjectName = 1590,
  SkillMapSkillsProjectNodeLocale = 1591,
  SkillMapSkillsProjectSpaceId = 1592,
  SkillMapSkillsProjectStartDate = 1593,
  SkillMapSkillsProjectSubName = 1594,
  SkillMapSkillsProjectTags = 1595,
  SkillMapSkillsProjectUpdatedAt = 1596,
  SkillMapSkillsSkillGrpup = 1597,
  SkillMapSkillsSkillGrpupChildren = 1598,
  SkillMapSkillsSkillGrpupContentfulId = 1599,
  SkillMapSkillsSkillGrpupCreatedAt = 1600,
  SkillMapSkillsSkillGrpupId = 1601,
  SkillMapSkillsSkillGrpupName = 1602,
  SkillMapSkillsSkillGrpupNodeLocale = 1603,
  SkillMapSkillsSkillGrpupSkillMap = 1604,
  SkillMapSkillsSkillGrpupSkills = 1605,
  SkillMapSkillsSkillGrpupSpaceId = 1606,
  SkillMapSkillsSkillGrpupUpdatedAt = 1607,
  SkillMapSkillsSkillMap = 1608,
  SkillMapSkillsSkillMapChildren = 1609,
  SkillMapSkillsSkillMapContentfulId = 1610,
  SkillMapSkillsSkillMapCreatedAt = 1611,
  SkillMapSkillsSkillMapExpanded = 1612,
  SkillMapSkillsSkillMapId = 1613,
  SkillMapSkillsSkillMapName = 1614,
  SkillMapSkillsSkillMapNodeLocale = 1615,
  SkillMapSkillsSkillMapSkillGroups = 1616,
  SkillMapSkillsSkillMapSkills = 1617,
  SkillMapSkillsSkillMapSortKey = 1618,
  SkillMapSkillsSkillMapSpaceId = 1619,
  SkillMapSkillsSkillMapUpdatedAt = 1620,
  SkillMapSkillsSpaceId = 1621,
  SkillMapSkillsSysRevision = 1622,
  SkillMapSkillsSysType = 1623,
  SkillMapSkillsUpdatedAt = 1624,
  SkillMapSortKey = 1625,
  SkillMapSpaceId = 1626,
  SkillMapSysRevision = 1627,
  SkillMapSysType = 1628,
  SkillMapUpdatedAt = 1629,
  SpaceId = 1630,
  SysContentTypeSysId = 1631,
  SysContentTypeSysLinkType = 1632,
  SysContentTypeSysType = 1633,
  SysRevision = 1634,
  SysType = 1635,
  UpdatedAt = 1636
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
  readonly logo: Maybe<ContentfulAsset>;
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
  IconWhatICanDoLogoChildren = 529,
  IconWhatICanDoLogoContentfulId = 530,
  IconWhatICanDoLogoCreatedAt = 531,
  IconWhatICanDoLogoDescription = 532,
  IconWhatICanDoLogoFilename = 533,
  IconWhatICanDoLogoFilesize = 534,
  IconWhatICanDoLogoGatsbyImage = 535,
  IconWhatICanDoLogoGatsbyImageData = 536,
  IconWhatICanDoLogoHeight = 537,
  IconWhatICanDoLogoId = 538,
  IconWhatICanDoLogoMimeType = 539,
  IconWhatICanDoLogoNodeLocale = 540,
  IconWhatICanDoLogoPlaceholderUrl = 541,
  IconWhatICanDoLogoPublicUrl = 542,
  IconWhatICanDoLogoSize = 543,
  IconWhatICanDoLogoSpaceId = 544,
  IconWhatICanDoLogoTitle = 545,
  IconWhatICanDoLogoUpdatedAt = 546,
  IconWhatICanDoLogoUrl = 547,
  IconWhatICanDoLogoWidth = 548,
  IconWhatICanDoName = 549,
  IconWhatICanDoNodeLocale = 550,
  IconWhatICanDoParentChildren = 551,
  IconWhatICanDoParentId = 552,
  IconWhatICanDoSortKey = 553,
  IconWhatICanDoSpaceId = 554,
  IconWhatICanDoSubName = 555,
  IconWhatICanDoSysRevision = 556,
  IconWhatICanDoSysType = 557,
  IconWhatICanDoUpdatedAt = 558,
  Id = 559,
  InternalContent = 560,
  InternalContentDigest = 561,
  InternalContentFilePath = 562,
  InternalDescription = 563,
  InternalFieldOwners = 564,
  InternalIgnoreType = 565,
  InternalMediaType = 566,
  InternalOwner = 567,
  InternalType = 568,
  LogoChildren = 569,
  LogoChildrenChildren = 570,
  LogoChildrenChildrenChildren = 571,
  LogoChildrenChildrenId = 572,
  LogoChildrenId = 573,
  LogoChildrenInternalContent = 574,
  LogoChildrenInternalContentDigest = 575,
  LogoChildrenInternalContentFilePath = 576,
  LogoChildrenInternalDescription = 577,
  LogoChildrenInternalFieldOwners = 578,
  LogoChildrenInternalIgnoreType = 579,
  LogoChildrenInternalMediaType = 580,
  LogoChildrenInternalOwner = 581,
  LogoChildrenInternalType = 582,
  LogoChildrenParentChildren = 583,
  LogoChildrenParentId = 584,
  LogoContentfulId = 585,
  LogoCreatedAt = 586,
  LogoDescription = 587,
  LogoFileContentType = 588,
  LogoFileDetailsSize = 589,
  LogoFileFileName = 590,
  LogoFileUrl = 591,
  LogoFilename = 592,
  LogoFilesize = 593,
  LogoGatsbyImage = 594,
  LogoGatsbyImageData = 595,
  LogoHeight = 596,
  LogoId = 597,
  LogoInternalContent = 598,
  LogoInternalContentDigest = 599,
  LogoInternalContentFilePath = 600,
  LogoInternalDescription = 601,
  LogoInternalFieldOwners = 602,
  LogoInternalIgnoreType = 603,
  LogoInternalMediaType = 604,
  LogoInternalOwner = 605,
  LogoInternalType = 606,
  LogoMimeType = 607,
  LogoNodeLocale = 608,
  LogoParentChildren = 609,
  LogoParentChildrenChildren = 610,
  LogoParentChildrenId = 611,
  LogoParentId = 612,
  LogoParentInternalContent = 613,
  LogoParentInternalContentDigest = 614,
  LogoParentInternalContentFilePath = 615,
  LogoParentInternalDescription = 616,
  LogoParentInternalFieldOwners = 617,
  LogoParentInternalIgnoreType = 618,
  LogoParentInternalMediaType = 619,
  LogoParentInternalOwner = 620,
  LogoParentInternalType = 621,
  LogoParentParentChildren = 622,
  LogoParentParentId = 623,
  LogoPlaceholderUrl = 624,
  LogoPublicUrl = 625,
  LogoResizeHeight = 626,
  LogoResizeSrc = 627,
  LogoResizeWidth = 628,
  LogoSize = 629,
  LogoSpaceId = 630,
  LogoSysRevision = 631,
  LogoSysType = 632,
  LogoTitle = 633,
  LogoUpdatedAt = 634,
  LogoUrl = 635,
  LogoWidth = 636,
  Name = 637,
  NodeLocale = 638,
  ParentChildren = 639,
  ParentChildrenChildren = 640,
  ParentChildrenChildrenChildren = 641,
  ParentChildrenChildrenId = 642,
  ParentChildrenId = 643,
  ParentChildrenInternalContent = 644,
  ParentChildrenInternalContentDigest = 645,
  ParentChildrenInternalContentFilePath = 646,
  ParentChildrenInternalDescription = 647,
  ParentChildrenInternalFieldOwners = 648,
  ParentChildrenInternalIgnoreType = 649,
  ParentChildrenInternalMediaType = 650,
  ParentChildrenInternalOwner = 651,
  ParentChildrenInternalType = 652,
  ParentChildrenParentChildren = 653,
  ParentChildrenParentId = 654,
  ParentId = 655,
  ParentInternalContent = 656,
  ParentInternalContentDigest = 657,
  ParentInternalContentFilePath = 658,
  ParentInternalDescription = 659,
  ParentInternalFieldOwners = 660,
  ParentInternalIgnoreType = 661,
  ParentInternalMediaType = 662,
  ParentInternalOwner = 663,
  ParentInternalType = 664,
  ParentParentChildren = 665,
  ParentParentChildrenChildren = 666,
  ParentParentChildrenId = 667,
  ParentParentId = 668,
  ParentParentInternalContent = 669,
  ParentParentInternalContentDigest = 670,
  ParentParentInternalContentFilePath = 671,
  ParentParentInternalDescription = 672,
  ParentParentInternalFieldOwners = 673,
  ParentParentInternalIgnoreType = 674,
  ParentParentInternalMediaType = 675,
  ParentParentInternalOwner = 676,
  ParentParentInternalType = 677,
  ParentParentParentChildren = 678,
  ParentParentParentId = 679,
  SortKey = 680,
  SpaceId = 681,
  SubName = 682,
  SysContentTypeSysId = 683,
  SysContentTypeSysLinkType = 684,
  SysContentTypeSysType = 685,
  SysRevision = 686,
  SysType = 687,
  UpdatedAt = 688
}

export type ContentfulWhatICanDoFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly icon: InputMaybe<ContentfulIconFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly logo: InputMaybe<ContentfulAssetFilterInput>;
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
  logo: InputMaybe<ContentfulAssetFilterInput>;
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
  & { readonly qualifications: Maybe<ReadonlyArray<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date' | 'endDate' | 'url'>>>> }
);

export type PortfolioCertificationDetailFragment = Pick<ContentfulQualification, 'name' | 'date' | 'endDate' | 'url'>;

export type PortfolioCertificationListFragment = (
  Pick<ContentfulQualificationMap, 'id' | 'name' | 'expanded'>
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
      & { readonly qualifications: Maybe<ReadonlyArray<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date' | 'endDate' | 'url'>>>> }
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
