import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SlideProps {
  title: string;
  content: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, content }) => (
  <Card className="mb-4 w-full">
    <CardContent>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div>{content}</div>
    </CardContent>
  </Card>
);

const ArchitectureDiagram = () => (
  <svg viewBox="0 0 800 400" className="w-full">
    <rect x="10" y="10" width="780" height="380" fill="#f0f0f0" stroke="#000" />
    <text x="400" y="40" textAnchor="middle" fontSize="20" fontWeight="bold">AI Automation Architecture</text>
    
    {/* User Input */}
    <rect x="50" y="70" width="120" height="60" fill="#FFD700" stroke="#000" />
    <text x="110" y="105" textAnchor="middle">User Input</text>
    
    {/* CrewAI Framework */}
    <rect x="250" y="70" width="300" height="260" fill="#ADD8E6" stroke="#000" />
    <text x="400" y="95" textAnchor="middle" fontWeight="bold">CrewAI Framework</text>
    
    {/* Layers inside CrewAI */}
    <rect x="270" y="110" width="260" height="50" fill="#FFFFFF" stroke="#000" />
    <text x="400" y="140" textAnchor="middle">Layer 1: Task Breakdown</text>
    
    <rect x="270" y="170" width="260" height="50" fill="#FFFFFF" stroke="#000" />
    <text x="400" y="200" textAnchor="middle">Layer 2-3: Task Execution</text>
    
    <rect x="270" y="230" width="260" height="50" fill="#FFFFFF" stroke="#000" />
    <text x="400" y="260" textAnchor="middle">Layer 4: Output Compilation</text>
    
    {/* Vector DB */}
    <rect x="600" y="70" width="120" height="60" fill="#98FB98" stroke="#000" />
    <text x="660" y="105" textAnchor="middle">Vector DB</text>
    
    {/* Permission Layer */}
    <rect x="600" y="270" width="120" height="60" fill="#FFA07A" stroke="#000" />
    <text x="660" y="305" textAnchor="middle">Permission Layer</text>
    
    {/* User Approval */}
    <rect x="250" y="340" width="300" height="40" fill="#D3D3D3" stroke="#000" />
    <text x="400" y="365" textAnchor="middle">User Approval for Write Actions</text>
    
    {/* Arrows */}
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" />
      </marker>
    </defs>
    <line x1="170" y1="100" x2="250" y2="100" stroke="#000" markerEnd="url(#arrowhead)" />
    <line x1="550" y1="100" x2="600" y2="100" stroke="#000" markerEnd="url(#arrowhead)" />
    <line x1="550" y1="300" x2="600" y2="300" stroke="#000" markerEnd="url(#arrowhead)" />
    <line x1="400" y1="330" x2="400" y2="340" stroke="#000" markerEnd="url(#arrowhead)" />
  </svg>
);

const MOADiagram = () => (
  <svg viewBox="0 0 800 300" className="w-full">
    <rect x="10" y="10" width="780" height="280" fill="#f0f0f0" stroke="#000" />
    <text x="400" y="40" textAnchor="middle" fontSize="20" fontWeight="bold">MOA-Inspired Agent Architecture</text>
    
    {/* Layers */}
    {[1, 2, 3, 4].map((layer, index) => (
      <g key={layer}>
        <rect x={50 + index * 180} y="70" width="160" height="200" fill="#E6E6FA" stroke="#000" />
        <text x={130 + index * 180} y="95" textAnchor="middle" fontWeight="bold">
          {layer === 1 ? "Proposers" : layer === 4 ? "Final Aggregator" : `Aggregators`}
        </text>
        
        {/* Agents */}
        {[1, 2, 3].map((agent) => (
          <rect key={agent} x={70 + index * 180} y={110 + agent * 50} width="120" height="40" fill="#FFFFFF" stroke="#000" />
        ))}
        
        {/* Agent Labels */}
        {[1, 2, 3].map((agent) => (
          <text key={agent} x={130 + index * 180} y={135 + agent * 50} textAnchor="middle" fontSize="12">
            {layer === 1 ? `Proposer ${agent}` : 
             layer === 4 ? (agent === 1 ? "Final Aggregator" : "") : 
             `Aggregator ${agent}`}
          </text>
        ))}
        
        {/* Tokens */}
        <rect x={70 + index * 180} y="260" width="120" height="20" fill="#FFD700" stroke="#000" />
        <text x={130 + index * 180} y="274" textAnchor="middle" fontSize="12">Tokens</text>
      </g>
    ))}
    
    {/* Arrows */}
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" />
      </marker>
    </defs>
    {[0, 1, 2].map((index) => (
      <line key={index} x1={210 + index * 180} y1="170" x2={230 + index * 180} y2="170" stroke="#000" markerEnd="url(#arrowhead)" />
    ))}

    {/* Legend */}
    <rect x="50" y="280" width="700" height="20" fill="#FFFFFF" stroke="#000" />
    <text x="400" y="294" textAnchor="middle" fontSize="12">
      Layer 1: Initial Proposals | Layers 2-3: Iterative Aggregation | Layer 4: Final Synthesis
    </text>
  </svg>
);

const PermissionChart = () => {
  const data = [
    { name: 'Revalue', allowed: 1, restricted: 0 },
    { name: 'Sync Prebill', allowed: 0, restricted: 1 },
    { name: 'View Matters', allowed: 1, restricted: 0 },
    { name: 'Edit Billing', allowed: 1, restricted: 0 },
    { name: 'Run Reports', allowed: 1, restricted: 0 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" domain={[0, 1]} />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="allowed" fill="#82ca9d" name="Allowed" />
        <Bar dataKey="restricted" fill="#8884d8" name="Restricted" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const Presentation = () => (
  <div className="p-4">
    <Slide
      title="AI Automation Plan for Expert"
      content={
        <ul className="list-disc pl-5">
          <li>Enhancing efficiency through AI integration</li>
          <li>Four-phase Proof of Concept (POC) approach</li>
          <li>Utilizing CrewAI framework and MOA-inspired architecture</li>
          <li>Focus on natural language processing and task automation</li>
          <li>Strict adherence to user permissions and UI-based actions</li>
        </ul>
      }
    />
    
    <Slide
      title="POC Overview"
      content={
        <ol className="list-decimal pl-5">
          <li>Expert Natural Language API Processor</li>
          <li>Instruction Database for APIs and Queries</li>
          <li>Expert Copilot for Task Chaining</li>
          <li>Expert Autopilot for Complete Task Automation</li>
        </ol>
      }
    />
    
    <Slide
      title="High-Level Architecture"
      content={
        <div>
          <ArchitectureDiagram />
          <p className="mt-4">Key Components:</p>
          <ul className="list-disc pl-5">
            <li>CrewAI Agent Framework</li>
            <li>MOA-inspired Multi-Agent System</li>
            <li>Vector Embedding Database for Instructions</li>
            <li>API and Database Query Layer</li>
            <li>User Approval Interface for Write Actions</li>
            <li>Permission Enforcement Layer</li>
          </ul>
        </div>
      }
    />
    
    <Slide
      title="Expert Copilot: Detailed Workflow"
      content={
        <ol className="list-decimal pl-5">
          <li>User inputs complex task in natural language</li>
          <li>Initial AI model breaks down input into discrete tasks</li>
          <li>Reviewer agent validates task breakdown</li>
          <li>Permission check against user's UI-based capabilities</li>
          <li>Individual agents perform single actions in sequence</li>
          <li>Agents query vector database for additional instructions</li>
          <li>User approves before any write/POST actions</li>
          <li>Final permission verification before execution</li>
        </ol>
      }
    />
    
    <Slide
      title="Expert Autopilot: Next Level Automation"
      content={
        <div>
          <p className="mb-4">Expert Autopilot takes automation to the next level:</p>
          <ol className="list-decimal pl-5">
            <li>Timekeeper assigns entire tasks to Autopilot</li>
            <li>Autopilot analyzes and breaks down tasks into smaller actions</li>
            <li>Each action is passed to Copilot for further breakdown and execution</li>
            <li>Copilot handles API chaining and querying for each action</li>
            <li>Autopilot monitors progress and manages task flow</li>
            <li>User intervention requested only when necessary</li>
          </ol>
          <p className="mt-4">Key Benefits:</p>
          <ul className="list-disc pl-5">
            <li>Handles more complex, multi-step tasks</li>
            <li>Reduces manual input and oversight</li>
            <li>Increases overall efficiency and productivity</li>
            <li>Maintains security and permission controls</li>
          </ul>
        </div>
      }
    />
    
    <Slide
      title="Expert Copilot: Example"
      content={
        <div>
          <p className="mb-2">User Input:</p>
          <p className="italic mb-4">"Create prebills between x dates for x user and then update the bill attributes to user y then launch workflows for y dates then complete tasks where prebill number is greater than x"</p>
          <p className="mb-2">AI Task Breakdown:</p>
          <ol className="list-decimal pl-5">
            <li>Get user ID for user x</li>
            <li>Search for matters within specified date range</li>
            <li>Create prebills using API</li>
            <li>Get user ID for user y</li>
            <li>Update bill attributes</li>
            <li>Get workflows for user y and specified dates</li>
            <li>Create workflows</li>
            <li>Get tasks where prebill number is greater than x</li>
            <li>Complete identified tasks</li>
          </ol>
          <p className="mt-4">Note: Each step is verified against user's UI-based permissions</p>
        </div>
      }
    />
    
    <Slide
      title="MOA-Inspired Agent Architecture"
      content={
        <div>
          <MOADiagram />
          <ul className="list-disc pl-5 mt-4">
            <li>Layer 1: Task breakdown and initial planning</li>
            <li>Layer 2-3: Refine and execute individual steps</li>
            <li>Layer 4: Final output compilation and user approval</li>
            <li>Permission Layer: Ensures all actions respect user's UI-based capabilities</li>
          </ul>
        </div>
      }
    />
    
    <Slide
      title="Key Features and Safeguards"
      content={
        <ul className="list-disc pl-5">
          <li>CrewAI framework for agent coordination</li>
          <li>Vector embedding database for instruction retrieval</li>
          <li>Cosine similarity or Euclidean distance for instruction matching</li>
          <li>Read-only SQL queries for data retrieval</li>
          <li>User approval required for all write/POST actions</li>
          <li>Continuous monitoring and logging of agent actions</li>
          <li><strong>Strict enforcement of user permissions based on UI capabilities</strong></li>
          <li>Prevention of actions outside user's normal UI-based access</li>
        </ul>
      }
    />
    
    <Slide
      title="Permission Enforcement and Data Integrity"
      content={
        <div>
          <p className="mb-4">Ensuring data integrity and proper access control:</p>
          <PermissionChart />
          <p className="mt-4 font-bold">Example of Allowed vs. Restricted Actions:</p>
          <ul className="list-disc pl-5">
            <li className="text-green-600">Allowed: "Revalue" operation (typically available in UI)</li>
            <li className="text-red-600">Restricted: "Synchronize Prebill Stored Proc" (not typically available in UI)</li>
          </ul>
        </div>
      }
    />
    
    <Slide
      title="UI-Based Permission Example"
      content={
        <div>
          <p className="mb-4">Illustrating the concept with a specific scenario:</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="font-bold">User Request:</p>
            <p className="italic">"Revalue all matters for client X and then synchronize the prebill stored procedure."</p>
          </div>
          <p className="font-bold mb-2">System Response:</p>
          <ol className="list-decimal pl-5">
            <li>Identify two distinct actions: revalue and synchronize</li>
            <li>Check permissions against UI-based capabilities:
              <ul className="list-disc pl-5 mt-2">
                <li className="text-green-600">Revalue: Allowed (matches UI capability)</li>
                <li className="text-red-600">Synchronize Prebill Stored Proc: Restricted (not available in UI)</li>
              </ul>
            </li>
            <li>Execute the revalue operation for client X</li>
            <li>Inform user that the synchronize operation cannot be performed due to permission restrictions</li>
            <li>Suggest alternative actions or recommend contacting an administrator for the restricted operation</li>
          </ol>
        </div>
      }
    />
    
    <Slide
      title="Next Steps and Implementation"
      content={
        <ol className="list-decimal pl-5">
          <li>Develop initial instruction database for common API and SQL queries</li>
          <li>Implement vector embedding system for instruction retrieval</li>
          <li>Set up CrewAI framework with custom agents for each layer</li>
          <li>Create user interface for task input and approval of write actions</li>
          <li>Develop monitoring and logging system for agent actions</li>
          <li><strong>Implement permission enforcement layer to mirror UI-based capabilities</strong></li>
          <li>Conduct extensive testing with a variety of complex tasks and user roles</li>
          <li>Iterate and refine based on performance, user feedback, and security audits</li>
        </ol>
      }
    />
  </div>
);

export default Presentation;
