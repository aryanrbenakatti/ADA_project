// Helper function to create a tree node element
function createTreeNode(text, isMatch) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = `[${text.join(', ')}]`;
    if (isMatch) {
        a.classList.add('match');
    }
    li.appendChild(a);
    return li;
}

// Function to build the tree structure
function buildTree(numbers, target, subset = [], index = 0) {
    if (index === numbers.length) {
        return {
            subset,
            isMatch: subset.reduce((a, b) => a + b, 0) === target
        };
    }

    const includeCurrent = buildTree(numbers, target, [...subset, numbers[index]], index + 1);
    const excludeCurrent = buildTree(numbers, target, subset, index + 1);

    return {
        subset,
        children: [includeCurrent, excludeCurrent]
    };
}

// Function to render the tree structure into the DOM
function renderTree(parentElement, node) {
    const li = createTreeNode(node.subset, node.isMatch);

    if (node.children) {
        const ul = document.createElement('ul');
        node.children.forEach(child => {
            const childLi = document.createElement('li');
            renderTree(childLi, child);
            ul.appendChild(childLi);
        });
        li.appendChild(ul);
    }

    parentElement.appendChild(li);
}

// Function to display the tree
function showTree() {
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    const target = parseInt(document.getElementById('target').value);
    const container = document.getElementById('tree-container');

    container.innerHTML = ''; // Clear previous tree
    const root = document.createElement('ul');
    root.classList.add('tree');

    const treeData = buildTree(numbers, target);
    renderTree(root, treeData);

    container.appendChild(root);
}
