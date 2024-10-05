document.addEventListener('DOMContentLoaded', function() {
    const width = 800;
    const height = 600;

    const svg = d3.select('#graph-container')
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('width', '100%')
        .attr('height', '100%');

    const nodes = [
        { id: 'Supercomputing', x: 400, y: 50 },
        { id: 'Reinforcement_Learning', x: 200, y: 150 },
        { id: 'Transformer', x: 600, y: 150 },
        { id: 'High_Dimensionality', x: 100, y: 250 },
        { id: 'Multimodal', x: 300, y: 250 },
        { id: 'Diffusion_Models', x: 500, y: 250 },
        { id: 'Meta_Learning', x: 700, y: 250 },
        { id: 'Planning', x: 200, y: 350 },
        { id: 'Context', x: 400, y: 350 },
        { id: 'Fine_Tuning', x: 600, y: 350 },
        { id: 'RAG', x: 300, y: 450 },
        { id: 'GANs', x: 500, y: 450 },
        { id: 'NeRFs', x: 400, y: 550 }
    ];

    const links = [
        { source: 'Supercomputing', target: 'Reinforcement_Learning', label: 'enables' },
        { source: 'Supercomputing', target: 'Transformer', label: 'enables' },
        { source: 'Reinforcement_Learning', target: 'Planning', label: 'optimizes' },
        { source: 'Reinforcement_Learning', target: 'Meta_Learning', label: 'enhances' },
        { source: 'Transformer', target: 'Diffusion_Models', label: 'powers' },
        { source: 'Transformer', target: 'GANs', label: 'used in' },
        { source: 'Transformer', target: 'RAG', label: 'integrates with' },
        { source: 'Meta_Learning', target: 'Fine_Tuning', label: 'improves' },
        { source: 'Multimodal', target: 'Context', label: 'builds' },
        { source: 'Multimodal', target: 'High_Dimensionality', label: 'operates in' },
        { source: 'RAG', target: 'Context', label: 'augments' },
        { source: 'Diffusion_Models', target: 'High_Dimensionality', label: 'requires' },
        { source: 'GANs', target: 'NeRFs', label: 'applies to' }
    ];

    svg.selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('x1', d => nodes.find(n => n.id === d.source).x)
        .attr('y1', d => nodes.find(n => n.id === d.source).y)
        .attr('x2', d => nodes.find(n => n.id === d.target).x)
        .attr('y2', d => nodes.find(n => n.id === d.target).y)
        .attr('stroke', '#000')
        .attr('stroke-width', 1);

    svg.selectAll('text.edge-label')
        .data(links)
        .enter()
        .append('text')
        .attr('class', 'edge-label')
        .attr('x', d => (nodes.find(n => n.id === d.source).x + nodes.find(n => n.id === d.target).x) / 2)
        .attr('y', d => (nodes.find(n => n.id === d.source).y + nodes.find(n => n.id === d.target).y) / 2)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('fill', '#666')
        .text(d => d.label);

    const nodeGroups = svg.selectAll('g')
        .data(nodes)
        .enter()
        .append('g')
        .attr('transform', d => `translate(${d.x},${d.y})`);

    nodeGroups.append('circle')
        .attr('r', 40)
        .attr('fill', '#fff')
        .attr('stroke', '#000')
        .attr('stroke-width', 2);

    nodeGroups.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '.3em')
        .attr('font-size', '12px')
        .text(d => d.id.replace(/_/g, ' '));
});
