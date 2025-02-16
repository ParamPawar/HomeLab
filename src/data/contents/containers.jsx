import React from 'react';

const containers = {
  title: 'Containers in Home Labs: Streamlined, Scalable, and Efficient',
  content: (
    <div className="space-y-6">
      <img
        src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80"
        alt="Containerized applications in a home lab"
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-lg">
        Containers offer a modern approach to deploying applications in home labs. Tools like Docker and Kubernetes allow you to create lightweight, consistent, and scalable environments that streamline development and deployment processes.
      </p>
      <h2 className="text-xl font-semibold mt-6">Advantages of Using Containers</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Lightweight Efficiency:</strong> Containers use fewer resources than traditional virtual machines.</li>
        <li><strong>Portability:</strong> Easily migrate containerized applications across different environments and platforms.</li>
        <li><strong>Scalability:</strong> Quickly scale applications to meet demand using orchestration tools like Kubernetes.</li>
      </ul>
      <p className="text-lg">
        By leveraging containers, you can simplify your home lab setup and accelerate your development workflow, making it easier to test and deploy applications in a controlled environment.
      </p>
    </div>
  ),
};

export default containers;
