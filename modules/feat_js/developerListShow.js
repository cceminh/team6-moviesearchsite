export const mouseEnter = document.querySelector(".mouse_enter")
export const HIDDEN_CLASSNAME = "hidden";
export const developerLink = document.querySelector(".developer_link");

export function MouseEnterOnDeveloperList() {
  if (mouseEnter.classList = "hidden") {
    mouseEnter.classList.remove(HIDDEN_CLASSNAME);
  } else {
    mouseEnter.classList.add(HIDDEN_CLASSNAME);
  }
}

export const developerMouseEventHandler = {
  'Mouseenter': () => {
    mouseEnter.classList.remove(HIDDEN_CLASSNAME);
  },
  mouseleave: function developerListMouseLeave() {
    mouseEnter.classList.add(HIDDEN_CLASSNAME);
  }
};