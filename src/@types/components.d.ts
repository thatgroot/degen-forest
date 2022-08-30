type Size = "xlg" | "lg" | "md" | "sm" | "xs"
type InputSize = "lg" | "md" | "sm"
type RoundSize = "full" | "lg" | "md" | "sm"
type AccordionSize = "full" | "lg" | "md" | "sm" | "xs"
type Direction = "left" | "right" | "up" | "down"
type ButtonType = "primary" | "secondary" | "transparent" | "gradient"

type Content = {
 text: string,
 meta?: string,
}

type AccordionHeader = {

}

type Accordion = {
 prefix_icon?: string | null;
 size: AccordionSize | 'md';
 content?: Content;
 show?: 'text' | 'icon' | 'both';
 arrow?: Direction | 'left';
};

type AccordionHeaderType = {
 title?: string;
 subtitle?: string;
 prefix?: string;
 postfix?: Direction | string;
 show: 'icon' | 'text' | 'both';
 sizeable?: boolean;
 size: AccordionSize;
 resize_to?: AccordionSize;
}
