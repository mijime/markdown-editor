import rehype4emojione from "../libs/rehype-emojione";

it("rehype-emojione", () => {
    const tran = rehype4emojione();
    const node = {
        type: "text",
        value: ":smile: :smile:"
    };

    tran(node);
    expect(node.children.length).toBe(3);
});

it("rehype-emojione-not-emoji", () => {
    const tran = rehype4emojione();
    const node = {
        type: "text",
        value: ":smile: :not-emoji:"
    };

    tran(node);
    expect(node.children.length).toBe(3);
});
