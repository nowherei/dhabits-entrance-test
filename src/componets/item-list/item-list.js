import "./item-list.css";
import Icon from "../icon";

const ItemList = ({ id = 0, cached, opened, setOpened }) => {
  const current = cached[id];

  if (!current) return false;

  const { children } = current;

  const items = children.map((item) => {
    const { id, title, children } = item;

    const status = opened.includes(id);

    const extension = title.split(".").slice(1).pop();

    let icon = "file";
    let switchButton = "";

    if (children) {
      icon = "folder";
      switchButton = (
        <div
          className={
            "tree__item-switcher" + (status ? " tree__item-switcher_open" : "")
          }
          onClick={() => {
            if (status) {
              setOpened(opened.filter((item) => item !== id));
            } else {
              setOpened([...opened, id]);
            }
          }}
        >
          <Icon name="caret-down" />
        </div>
      );
    }

    if (["zip", "jpg"].includes(extension)) {
      icon = extension;
    }

    return (
      <li className="tree__item" key={id}>
        {switchButton}
        <div className="tree__item-icon">
          <Icon name={icon} />
        </div>
        {title}
        {children && status ? (
          <ItemList
            id={id}
            cached={cached}
            opened={opened}
            setOpened={setOpened}
          />
        ) : (
          ""
        )}
      </li>
    );
  });

  if (!children.length) return false;

  return <ul className="tree__list">{items}</ul>;
};

export default ItemList;
