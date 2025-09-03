import React, { useEffect, useState, useCallback } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  Background,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Chrome, Zap, CheckCircle, Download, Users, Shield } from 'lucide-react';

interface AutoFlowInstallationProps {
  isActive: boolean;
}

const initialNodes: Node[] = [
  {
    id: 'start',
    type: 'input',
    data: { 
      label: (
        <div className="flex items-center space-x-2 p-4">
          <Chrome size={24} className="text-blue-500" />
          <div className="text-left">
            <div className="font-bold text-gray-900">Chrome Web Store</div>
            <div className="text-xs text-gray-600">Visit Extension</div>
          </div>
        </div>
      )
    },
    position: { x: 100, y: 50 },
    style: { 
      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
      border: '2px solid #3b82f6',
      borderRadius: '16px',
      width: 200,
      height: 80
    },
  },
  {
    id: 'extension',
    data: { 
      label: (
        <div className="flex items-center space-x-2 p-4">
          <div className="w-12 h-12 bg-gradient-to-r from-lime to-pink rounded-xl flex items-center justify-center">
            <Zap size={20} className="text-white" />
          </div>
          <div className="text-left">
            <div className="font-bold text-gray-900">ZeroToken</div>
            <div className="text-xs text-gray-600">AI Context Manager</div>
            <div className="text-xs text-green-600 font-semibold">✓ 4.9★ • 10,000+ users</div>
          </div>
        </div>
      )
    },
    position: { x: 450, y: 50 },
    style: { 
      background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
      border: '2px solid #10b981',
      borderRadius: '16px',
      width: 280,
      height: 100
    },
  },
  {
    id: 'install',
    data: { 
      label: (
        <div className="text-center p-4">
          <Download size={32} className="text-green-500 mx-auto mb-2" />
          <div className="font-bold text-gray-900">Click Install</div>
          <div className="text-xs text-gray-600">One-click installation</div>
        </div>
      )
    },
    position: { x: 200, y: 220 },
    style: { 
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      border: '2px solid #0ea5e9',
      borderRadius: '16px',
      width: 160,
      height: 100
    },
  },
  {
    id: 'platforms',
    data: { 
      label: (
        <div className="p-4">
          <div className="font-bold text-gray-900 mb-3 text-center">Connects to AI Platforms</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-2 bg-white rounded-lg border">
              <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">Ch</div>
              <span className="text-sm font-medium">ChatGPT</span>
              <div className="ml-auto text-green-500">✓</div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-white rounded-lg border">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">Cl</div>
              <span className="text-sm font-medium">Claude</span>
              <div className="ml-auto text-green-500">✓</div>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-white rounded-lg border">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">Ge</div>
              <span className="text-sm font-medium">Gemini</span>
              <div className="ml-auto text-green-500">✓</div>
            </div>
          </div>
        </div>
      )
    },
    position: { x: 500, y: 220 },
    style: { 
      background: 'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)',
      border: '2px solid #f59e0b',
      borderRadius: '16px',
      width: 240,
      height: 180
    },
  },
  {
    id: 'success',
    type: 'output',
    data: { 
      label: (
        <div className="text-center p-4">
          <CheckCircle size={32} className="text-green-500 mx-auto mb-2 animate-pulse" />
          <div className="font-bold text-gray-900">Successfully Installed!</div>
          <div className="text-xs text-gray-600">Ready to boost AI productivity</div>
          <div className="mt-2 flex items-center justify-center space-x-1">
            <Shield size={14} className="text-green-500" />
            <span className="text-xs text-green-600 font-semibold">Secure & Private</span>
          </div>
        </div>
      )
    },
    position: { x: 300, y: 450 },
    style: { 
      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
      border: '2px solid #22c55e',
      borderRadius: '16px',
      width: 200,
      height: 120,
      boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)'
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1',
    source: 'start',
    target: 'extension',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
    label: '1. Search ZeroToken',
  },
  {
    id: 'e2',
    source: 'extension',
    target: 'install',
    animated: true,
    style: { stroke: '#10b981', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' },
    label: '2. Click Install',
  },
  {
    id: 'e3',
    source: 'install',
    target: 'platforms',
    animated: true,
    style: { stroke: '#f59e0b', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' },
    label: '3. Auto-Connect',
  },
  {
    id: 'e4',
    source: 'platforms',
    target: 'success',
    animated: true,
    style: { stroke: '#22c55e', strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' },
    label: '4. Ready!',
  },
];

export const AutoFlowInstallation = ({ isActive }: AutoFlowInstallationProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [flowComplete, setFlowComplete] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setEdges([]);
      setCurrentStep(0);
      setFlowComplete(false);
      return;
    }

    // Auto-animate flow steps
    const animateFlow = () => {
      const steps = [
        { delay: 1000, edge: initialEdges[0] },
        { delay: 2500, edge: initialEdges[1] },
        { delay: 4000, edge: initialEdges[2] },
        { delay: 5500, edge: initialEdges[3] },
      ];

      steps.forEach((step, index) => {
        setTimeout(() => {
          setCurrentStep(index + 1);
          setEdges(prev => [...prev, step.edge]);
          
          if (index === steps.length - 1) {
            setTimeout(() => setFlowComplete(true), 1000);
          }
        }, step.delay);
      });
    };

    animateFlow();
  }, [isActive, setEdges]);

  // Animate nodes based on current step
  useEffect(() => {
    setNodes(prevNodes => 
      prevNodes.map(node => {
        let shouldHighlight = false;
        
        switch (currentStep) {
          case 0:
            shouldHighlight = node.id === 'start';
            break;
          case 1:
            shouldHighlight = node.id === 'extension';
            break;
          case 2:
            shouldHighlight = node.id === 'install';
            break;
          case 3:
            shouldHighlight = node.id === 'platforms';
            break;
          case 4:
            shouldHighlight = node.id === 'success';
            break;
        }

        return {
          ...node,
          style: {
            ...node.style,
            transform: shouldHighlight ? 'scale(1.05)' : 'scale(1)',
            boxShadow: shouldHighlight 
              ? '0 20px 40px rgba(0,0,0,0.15), 0 0 30px rgba(34, 197, 94, 0.4)' 
              : node.style?.boxShadow || '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'all 0.5s ease-in-out',
          }
        };
      })
    );
  }, [currentStep, setNodes]);

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-3xl border-2 border-gray-200 overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        style={{ backgroundColor: 'transparent' }}
      >
        <Background color="#f1f5f9" gap={20} />
      </ReactFlow>

      {/* Progress Indicator */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  currentStep >= step
                    ? 'bg-gradient-to-r from-lime to-green-500 animate-pulse'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-900">
            Step {currentStep} of 4
          </span>
        </div>
        
        {flowComplete && (
          <div className="mt-2 flex items-center space-x-2 animate-fade-in">
            <CheckCircle size={16} className="text-green-500" />
            <span className="text-sm text-green-600 font-semibold">Installation Complete!</span>
          </div>
        )}
      </div>

      {/* Step Description */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-lg">
        <div className="text-center">
          {currentStep === 1 && (
            <div className="flex items-center space-x-2">
              <Chrome size={20} className="text-blue-500" />
              <span className="font-semibold text-gray-900">Visit Chrome Web Store</span>
            </div>
          )}
          {currentStep === 2 && (
            <div className="flex items-center space-x-2">
              <Download size={20} className="text-green-500" />
              <span className="font-semibold text-gray-900">Install ZeroToken Extension</span>
            </div>
          )}
          {currentStep === 3 && (
            <div className="flex items-center space-x-2">
              <Zap size={20} className="text-orange-500" />
              <span className="font-semibold text-gray-900">Auto-Connect to AI Platforms</span>
            </div>
          )}
          {currentStep === 4 && (
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} className="text-green-500 animate-pulse" />
              <span className="font-semibold text-gray-900">Ready for Unlimited AI!</span>
            </div>
          )}
        </div>
      </div>

      {/* Celebration Effects */}
      {flowComplete && (
        <>
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-lime to-pink rounded-full animate-bounce pointer-events-none"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};