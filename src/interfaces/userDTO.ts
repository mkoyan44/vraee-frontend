export interface UserDTO {
    id: number;
    email: string;
    role: string;
    status?: string;
    isProfileComplete: boolean;
    fullName?: string;
    companyName?: string;
    clientType?: string;
    primaryService?: string[];
    projectVolume?: string;
    cadSoftware?: string;
    requiredOutputs?: string[];
    referralSource?: string;
    createdAt: string;
    updatedAt: string;
}

export enum ClientType {
    JEWELRY_ECOMMERCE = "JEWELRY_ECOMMERCE",
    MANUFACTURER_WHOLESALER = "MANUFACTURER_WHOLESALER",
    DESIGNER_ETSY = "DESIGNER_ETSY",
    MARKETING_AGENCY = "MARKETING_AGENCY"
}

export enum PrimaryService {
    CAD_MODELING = "CAD_MODELING",
    PHOTOREALISTIC_RENDERING = "PHOTOREALISTIC_RENDERING",
    ANIMATION_VIDEO = "ANIMATION_VIDEO",
    CONSULTING = "CONSULTING"
}

export enum ProjectVolume {
    ONE_OFF = "ONE_OFF",
    ONE_TO_FIVE_MONTHLY = "ONE_TO_FIVE_MONTHLY",
    FIVE_PLUS_VOLUME = "FIVE_PLUS_VOLUME",
    ONGOING_RETAINER = "ONGOING_RETAINER"
}

export enum CadSoftware {
    RHINO = "RHINO",
    MATRIX_GOLD = "MATRIX_GOLD",
    ZBRUSH = "ZBRUSH",
    OTHER = "OTHER"
}

export enum RequiredOutput {
    STL = "STL",
    CDM = "CDM",
    PNG_JPEG = "PNG_JPEG",
    MP4 = "MP4"
}

export default UserDTO;
