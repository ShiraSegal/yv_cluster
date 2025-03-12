import * as e from "express";

export  enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary"
}

export enum NarrowBasicTableRowInputState {
  DEFAULT = 'Default',
  HOVER = 'Hover'
}
export enum BasicTableRowPropertyVariants {
  DEFAULT = 'Default',
  VARIANT2 = 'Variant2',
}

export enum BasicTablePropertyType{
  OLD_SUGGESTIONS= 'Old Suggestions',
  NEWֹֹֹֹֹֹ_SUGGESTIONS = 'New Suggestions',
}

export enum CheckType{
  UNCHECKED ='unchecked',
  CHECKED = 'checked'
}
export enum CheckStateType{
  ENABLED ='enabled',
  DISABLED = 'disabled'
}

export enum DataCellDataType {
  TEXT = 'string',
  MORE = 'more',
  STATUS = 'status',
  CHECK = 'check',
  LINK = 'link',
  ICON = 'icon',
  ASSIGNEE = 'assignee',
  BUTTON = 'button',
  SLIDER='slider'
}

export enum AutoClusterTabType {
  SAPIR_CLUSTERS = 'Sapir Clusters',
  MISSING_FIELD = 'Missing Field',
  APPROVAL_GROUPS = 'Approval Groups',
  CHECKLIST_ITEMS = 'Checklist Items',
  DIFFERENT_CLUSTERS = 'Different Clusters',
  ERROR_MESSAGES = 'Error Messages'
}
// export enum ButtonIconProperty{
// VARIANT1="variant1",
// VARIANT2="variant2",
// VARIANT3="variant3"
// }

export enum ButtonIcon{
  FOLDER_PLUS="fa-light fa-folder-plus",
  LAYER_PLUS="fa-light fa-layer-plus",
  PLUS="fa-light fa-plus",
  FILE_ARROW_DOWN="fa-light fa-file-arrow-down",
  CHEVRON_LEFT="fa-light fa-chevron-left"
  }

  export enum TextSize{
    LARGE="large",
    MEDIUM="medium",
    SMALL="small"
  }

  export enum TextColor {
    BLACK = "black",
    SLATE_BLUE = "slate-blue",
    NEUTRAL_GRAY = "neutral-gray",
  }
 
  export enum DataCellType {
    TEXT = 'text',
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

  export enum HeaderCellType {
    TEXT = "text",
    MORE = "more",
    HEADERSEARCH = "header-search",
    PLACEOLDER = "place-order",
    ORDER = "order",
    CHECK = "check",
    ORDERDOWN = "order down"
  }
  export type DataCellValue = string | number;

export  enum CardIcons {
  HOURGLASS_CLOCK="fa-solid fa-hourglass-clock",
  CLOCK_FIVE="fa-solid fa-clock-five",
  EDIT="fa-solid fa-pen-to-square",
  CIRCLE_CHECK="fa-solid fa-circle-check",
  HOME="fa-light fa-house"
    }
export  enum ToastNotificationIcons {
  ERROR="fa-solid fa-circle-xmark",
  SUCCESS="fa-solid fa-circle-check",
    }   
    export  enum BadgeType {
      TODO = "To-do",
      DONE = "Done"
    } 

  export enum SliderNavigationTabType{
    VARIANT3="variant3",
    ACTIVE="active"
  }
  export enum SliderNavigationTabTextType{
    HOME="Home",
    LOGOUT="Logout",
    AUTOCLUSRET="Auto Cluster",
    REPORT="Report",
    NEWCLUSTER="New Cluster",
    
      }

  export enum State {
    DEFAULT = "default",
    FOCUSED = "focused",
    POPULATED = "populated",
    DISABLED = "disabled",
    ERROR = "error"
  }