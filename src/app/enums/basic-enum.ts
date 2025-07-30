import * as e from "express";
import { IconType } from "./icon-enum";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary"
}

 

export enum NarrowBasicTableRowInputState {
  DEFAULT = 'Default',
  HOVER = 'Hover'
}

export enum NarrowBasicTableRowExpandState {
  OPEN = 'open',
  CLOSE = 'close'
}


export enum BasicTableRowPropertyVariants {
  DEFAULT = 'Default',
  VARIANT2 = 'Variant2',
}
export enum NarrowBasicTableRowLength {
  LONG = 'long',
  SHORT = 'short'
}
 


export enum BasicTablePropertyType {
  OLD_SUGGESTIONS = 'Old Suggestions',
  NEWֹֹֹֹֹֹ_SUGGESTIONS = 'New Suggestions',
}

export enum ButtonSize{
  BIG="big",
  SMALL="small"
}
export enum TextSize {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small"
}
export enum CheckStateType {
  ENABLED = 'enabled',
  DISABLED = 'disabled'
}

export enum DataCellType {
  TEXT = 'string',
  MORE = 'more',
  STATUS = 'status',
  CHECK = 'check',
  LINK = 'link',
  ICON = 'icon',
  ASSIGNEE = 'assignee',
  BUTTON = 'button',
  SLIDER='slider',
  PLACEOLDER = 'place-order',
}

export enum PopoverHeader{
  STATUS = 'Status',
  ASSIGN_RESPONSIBLE= 'Assign Responsible',
  LINK_TO_CRM = 'Link to CRM',
}


 
// export enum ButtonIconProperty{
// VARIANT1="variant1",
// VARIANT2="variant2",
// VARIANT3="variant3"
// }
 
 
  export enum CheckType {
    UNCHECKED = 'unchecked',
    CHECKED = 'checked'
  }

  


export type DataCellValue<T extends DataCellType> =
  T extends DataCellType.TEXT ? string :
  T extends DataCellType.LINK ? string | number :
  T extends DataCellType.ASSIGNEE ? string :
  T extends DataCellType.BUTTON ? {
    text?: string;
    buttonType?: ButtonType;
    disabled?: boolean;
    isBig?: boolean; // Changed from size
    iconType?: IconType; // Changed from buttonIcon
  } : // אובייקט מורכב עבור BUTTON
  T extends DataCellType.SLIDER ? number | null :
  never;



export enum AutoClusterTabType {
  SAPIR_CLUSTERS = 'Sapir Clusters',
  MISSING_FIELD = 'Missing Field',
  APPROVAL_GROUPS = 'Approval Groups',
  CHECKLIST_ITEMS = 'Checklist Items',
  DIFFERENT_CLUSTERS = 'Different Clusters',
  ERROR_MESSAGES = 'Error Messages',
  TABLE_GROUP_ID_DETAILS= 'Table Group Id Details',
}



export enum HomeTableTabType {
 NEW_SUGGESTIONS = 'new-suggestion',
  OLD_SUGGESTIONS = 'old_suggestion',

}
  export enum TextColor {
    BLACK = "black",
    SLATE_BLUE = "slate-blue",
    NEUTRAL_GRAY = "neutral-gray",
    DARK_GRAY = "dark-gray",
    COOl_BLUE="cool-blue",
    PRIMARY_BTN= "primary_btn",
    MEDIUM_GRAY="medium_gray",
    VIBRANT_GREEN="vibrant_green",
    DEEP_BLACK="deep_black",
    WHITE="white"
  }

  export enum TextWeight {
    BOLD = "bold",
    NORMAL = "normal"
    }

export enum HeaderCellType {
  TEXT = "text",
  MORE = "more",
  HEADERSEARCH = "header-search",
  PLACEOLDER = "place-order",
  ORDER = "order",
  CHECK = "check",
  ORDERDOWN = "order-down"
}

export enum BadgeType {
  TODO = "To-do",
  DONE = "Done"
}

export enum SliderNavigationTabType {
  VARIANT3 = "variant3",
  ACTIVE = "active"
}
export enum SliderNavigationTabTextType {
  HOME = "Home",
  LOG_OUT = "Logout",
  CRM_CLUSTERS  = "CRM Clusters",
  AUTO_CLUSTER = "Auto Cluster",
  REPORT = "Report",
  NEW_CLUSTER = "New Cluster",

}

export enum SliderNavigationTabUrl {
  HOME = "home",
  LOG_OUT = "logout",
  CRM_CLUSTERS  = "crmClusters",
  AUTO_CLUSTER = "autoCluster",
  REPORT = "report",
  NEW_CLUSTER = "newCluster",

}

export enum State {
  DEFAULT = "default",
  FOCUSED = "focused",
  POPULATED = "populated",
  DISABLED = "disabled",
  ERROR = "error"
}
export enum IconButtonLargeType {
  DEFAULT = "default",
  HOVER = "hover",
}

export enum NativeOptionType{
  ASSIGNEE = "assignee",
  STATUS = "status",
  TEXT = "text"
}

export enum SelectType{
  ASSIGNEE = "assignee",
  STATUS = "status",
  TEXT = "text"
}


export enum PopoverType{
  ASSIGNEE = "assignee",
  STATUS = "status",
  LINK = "link"
}
export enum NativeOptionState{
  DEFAULT = "default",
  HOVER = "hover"
}
export enum ButtonIconProperty{
  VARIANT1="variant1",
  VARIANT2="variant2",
  VARIANT3="variant3"
  }
  export enum RadioButtonListDirection{
    ROW="row",
    COLUMN="column"
  }
  export enum BigCardSize{
    SHORT = "short",
    LONG = "long"
  }

  export enum MessageType{
    SUCCESS = "success",
    INFORRMATIVE = "inforrmative",
    ERROR="error",
    ATTENTION="attention"
  }




